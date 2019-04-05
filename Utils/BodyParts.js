let currentBodyPartId = 0;

const LEFT = 1;
const RIGHT = 2;
const NONE = 0;

const BODY_PARTS = [];
const BODY_PART_NIPPLE_L = registerTwosidedBodyPart("nipple", 4);
const BODY_PART_NIPPLE_R = BODY_PARTS[currentBodyPartId - 1];
const BODY_PART_BALLS = registerBodyPart("balls", 20);
const BODY_PART_THIGH_L = registerTwosidedBodyPart("thigh", 20);
const BODY_PART_THIGH_R = BODY_PARTS[currentBodyPartId - 1];
const BODY_PART_TONGUE = registerBodyPart("tongue", 4);
const BODY_PART_PENIS_HEAD = registerBodyPart("penis head", 3);
const BODY_PART_PENIS_SHAFT = registerBodyPart("penis shaft", 7);
const BODY_PART_EAR_L = registerTwosidedBodyPart("ear", 3);
const BODY_PART_EAR_R = BODY_PARTS[currentBodyPartId - 1];

function registerTwosidedBodyPart(name, maxClamps) {
    registerBodyPart(name, maxClamps, LEFT);
    registerBodyPart(name, maxClamps, RIGHT);
}

function registerBodyPart(name, maxClamps, side = NONE) {
    let sidedName = name;

    if (side == LEFT) {
        sidedName = "left " + name;
    } else if (side == RIGHT) {
        sidedName = "right " + name;
    }

    const bodyPart = {id: currentBodyPartId++, name: name, sidedName: sidedName, side: side, currentClamps: 0, maxClamps: maxClamps,

        getOppositeBodyPart : function() {
        if(this.side == LEFT) {
            return BODY_PARTS[this.id + 1];
        } else if(this.side == RIGHT) {
            return BODY_PARTS[this.id - 1];
        }

        return null;
        },

        hasOppositeBodyPart : function() {
            return this.side != NONE;
        },

        isMaxClampsReached : function () {
            return this.currentClamps >= this.maxClamps;
        }
    };

    BODY_PARTS[bodyPart.id] = bodyPart;
    return bodyPart;
}