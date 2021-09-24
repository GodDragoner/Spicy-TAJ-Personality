let currentBodyPartId = 0;

const LEFT = 1;
const RIGHT = 2;
const NONE = 0;

const BODY_PARTS = [];
const BODY_PART_NIPPLE_L = registerTwosidedBodyPart("nipple", 4);

BODY_PART_NIPPLE_L.isUsed = function (toy) {
    return isToyOnNipples() || currentBodyPosition === BODY_POSITION.ON_STOMACH;
};

const BODY_PART_NIPPLE_R = BODY_PARTS[currentBodyPartId - 1];
BODY_PART_NIPPLE_R.isUsed = BODY_PART_NIPPLE_L.isUsed;

const BODY_PART_BALLS = registerBodyPart("balls", 20);
BODY_PART_BALLS.isUsed = function (toy) {
    return isFullSizedChastityOn() || getVar(VARIABLE.IS_BALL_CRUSHER_ON, false) || E_STIM_TOY.isToyOn() || PARACHUTE_TOY.isToyOn();
};

const BODY_PART_THIGH_L = registerTwosidedBodyPart("thigh", 5);
const BODY_PART_THIGH_R = BODY_PARTS[currentBodyPartId - 1];

const BODY_PART_TONGUE = registerBodyPart("tongue", 4);
BODY_PART_TONGUE.isUsed = function (toy) {
    return isGaged() && currentGagType !== GAG_TYPE_SPIDER_GAG && this.currentClamps === 0;
};

const BODY_PART_PENIS_HEAD = registerBodyPart("penis head", 3);

const BODY_PART_PENIS_SHAFT = registerBodyPart("penis shaft", 7);
BODY_PART_PENIS_SHAFT.isUsed = BODY_PART_PENIS_HEAD.isUsed;
const BODY_PART_EAR_L = registerTwosidedBodyPart("ear", 3);
const BODY_PART_EAR_R = BODY_PARTS[currentBodyPartId - 1];

const BODY_PART_ASS = registerBodyPart("ass", 0);
BODY_PART_ASS.isUsed = function (toy) {
    return !isPlugged() && !E_STIM_PLUG_TOY.isToyOn();
};


function registerTwosidedBodyPart(name, maxClamps) {
    let leftPart = registerBodyPart(name, maxClamps, LEFT);
    registerBodyPart(name, maxClamps, RIGHT);

    return leftPart;
}

function registerBodyPart(name, maxClamps, side = NONE) {
    let sidedName = name;

    if (side == LEFT) {
        sidedName = "left " + name;
    } else if (side == RIGHT) {
        sidedName = "right " + name;
    }

    const bodyPart = {
        id: currentBodyPartId++, name: name, sidedName: sidedName, side: side, currentClamps: 0, maxClamps: maxClamps,

        printDebug: function () {
            sendDebugMessage(this.sidedName + ': ' + this.id);
            sendDebugMessage('Has Opposite: ' + this.hasOppositeBodyPart());
            sendDebugMessage('Side:' + this.side);

            if (this.hasOppositeBodyPart()) {
                sendDebugMessage('Opposite:' + this.getOppositeBodyPart().sidedName);
            }

            sendDebugMessage('Max: ' + this.isMaxClampsReached());
        },

        getOppositeBodyPart: function () {
            if (this.side == LEFT) {
                return BODY_PARTS[this.id + 1];
            } else if (this.side == RIGHT) {
                return BODY_PARTS[this.id - 1];
            }

            return null;
        },

        normalize: function () {
            if (this.hasOppositeBodyPart()) {
                return this.getLeftSide();
            }

            return this;
        },

        getLeftSide: function () {
            if (this.side == LEFT) {
                return this;
            }

            return this.getOppositeBodyPart();
        },

        getRightSide: function () {
            if (this.side == RIGHT) {
                return this;
            }

            return this.getOppositeBodyPart();
        },

        isSameIgnoreSide: function (bodyPart) {
            return bodyPart === this || this.getOppositeBodyPart() === bodyPart;
        },

        hasOppositeBodyPart: function () {
            return this.side != NONE;
        },

        getLastClampInteraction: function () {
            if (LAST_BODY_PART_CLAMP_INTERACTION[this.id] !== null && LAST_BODY_PART_CLAMP_INTERACTION[this.id] !== undefined) {
                return LAST_BODY_PART_CLAMP_INTERACTION[this.id].clone();
            } else {
                return setDate().addDay(-300);
            }
        },

        addClamps: function (amount) {
            this.currentClamps += amount;
            LAST_BODY_PART_CLAMP_INTERACTION[this.id] = setDate();
        },

        subtractClamps: function (amount) {
            this.currentClamps = Math.max(0, this.currentClamps - amount);
            LAST_BODY_PART_CLAMP_INTERACTION[this.id] = setDate();
        },

        isMaxClampsReached: function () {
            return this.currentClamps >= this.maxClamps;
        },

        getFreeClampAmount: function () {
            return this.maxClamps - this.currentClamps;
        },

        isUsed: function (toy = null) {
            return false;
        },

        canAttachClamps: function () {
            //No pins to penis/balls if in chastity
            if (isInChastity() && (this === BODY_PART_PENIS_SHAFT || this === BODY_PART_PENIS_HEAD || this === BODY_PART_BALLS && currentChastityCage.isFullSizedBelt())) {
                return false;
            }

            //No pins if this body part is used
            if (this.isUsed()) {
                return false;
            }

            //Do not check for max clamps here because we might want to handle that individually
            return true;
        },

        findClampAmountToAttachBothSides: function (maxAmount, preferredAmount = -1) {
            let rightSide = this.getRightSide();
            let leftSide = this.getLeftSide();

            let leftAmount = leftSide.getClampAmountToAttach(maxAmount, preferredAmount);
            let rightAmount = rightSide.getClampAmountToAttach(maxAmount, preferredAmount);

            //Does left have more free spots than right? Then return right amount
            if (leftAmount > rightSide.getFreeClampAmount()) {
                return rightAmount;
            }
            //Does right have more free spots than left? Then return left amount
            else if (rightAmount > leftSide.getFreeClampAmount()) {
                return leftAmount;
            }

            //Return something in between
            return randomInteger(leftAmount, rightAmount);
        },

        getClampAmountToAttach: function (maxAmount, preferredAmount = -1) {
            let maxClampsToAttach = this.getFreeClampAmount();

            //If we have been given a preferred amount we will return it if we can
            if (preferredAmount > 0 && maxClampsToAttach >= preferredAmount) {
                return preferredAmount;
            }

            //If we can't get in at least one more clamp then we return 0
            if (this.isMaxClampsReached()) {
                return 0;
            }

            let clamps = Math.max(1, Math.min(randomInteger(1, Math.min(maxClampsToAttach, 5)), maxAmount));

            return clamps;
        },
    };

    BODY_PARTS[bodyPart.id] = bodyPart;
    return bodyPart;
}

function afterLoadBodyParts() {
    //The toys are loaded after body parts so we need to delay this
    BODY_PART_PENIS_SHAFT.isUsed = function (toy) {
        if (isInChastity()) {
            return true;
        }

        return false;
    };
}