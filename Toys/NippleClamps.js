const NIPPLE_CLAMPS = createToy('nipple clamps');
NIPPLE_CLAMPS.decideToyOn = function (asked = false) {
    if(isNipplesClamped()) {
        return false;
    }

    if(!this.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    return true;
};


function isNipplesClamped() {
    //No current nipple clamps attached
    if (!NIPPLE_CLAMPS.isToyOn() && BODY_PART_NIPPLE_L.currentClamps === 0 && BODY_PART_NIPPLE_R.currentClamps === 0) {
        return false;
    }

    return true;
}

function clampNipples() {
    if (isNipplesClamped()) {
        return false;
    }

    if (shouldReplaceSpinsWithNippleClamps()) {
        if (putNippleClampsOn()) {
            return true;
        }
    }

    if (!fetchToy('clothespin', undefined, 2)) {
        return false;
    }

    putClampsOnBothSides(1, 1, BODY_PART_NIPPLE_R);

    return true;
}

function removeAnythingOnNipples() {
    if(NIPPLE_CLAMPS.isToyOn()) {
        sendMessage('%SlaveName% go ahead and remove those nipple clamps and put them aside', 5);
        sendMessage('Much better isn\'t it? %Grin%');

        //TODO: Interaction

        NIPPLE_CLAMPS.setToyOn(false);
        return true;
    } else if(isNipplesClamped()) {
        //Means there is at least a clothespin on one of the nipples
        sendMessage('Go ahead and remove all clothespins from your nipples %SlaveName%', 5);
        BODY_PART_NIPPLE_L.currentClamps = 0;
        BODY_PART_NIPPLE_R.currentClamps = 0;

        return true;
    }

    return false;
}

function removeNippleClamps() {
    if(!NIPPLE_CLAMPS.isToyOn()) {
        return false;
    }

    sendMessage('%SlaveName% go ahead and remove those nipple clamps and put them aside', 5);
    sendMessage('Much better isn\'t it? %Grin%');

    //TODO: Interaction

    NIPPLE_CLAMPS.setToyOn(false);
}


function putNippleClampsOn() {
    if (NIPPLE_CLAMPS.fetchToy()) {
        sendMessageBasedOnSender('I was going to put some clothespins on those nipples but I feel like making it hurt more %Grin%');
        sendMessageBasedOnSender('And I think this definitely will hurt more %Lol%');
        sendMessageBasedOnSender('So go ahead and put them on %Grin%');

        NIPPLE_CLAMPS.setToyOn(true);
        sendMessageBasedOnSender('Tell me when you are done');
        waitForDone();

        if(feelsLikePunishingSlave()) {
            sendMessageBasedOnSender('Now... %Grin%');
            sendMessageBasedOnSender('Go ahead and attach around ' + getNippleClampWeight() + 'g weight to them');
            sendMessageBasedOnSender('I don\'t care how you do it. Get a piece of string and attach something to them');
            sendMessageBasedOnSender('Report to me when you are ready');
            waitForDone();
        }
        return true;
    }

    return false;
}

//TEST: Is this weight reasonable?
function getNippleClampWeight() {
    return randomInteger(getVar(VARIABLE.SUB_PAIN_TOLERANCE)*10, getVar(VARIABLE.SUB_PAIN_TOLERANCE)*15);
}

function shouldReplaceSpinsWithNippleClamps() {
    return feelsLikePunishingSlave() && NIPPLE_CLAMPS.hasToy();
}