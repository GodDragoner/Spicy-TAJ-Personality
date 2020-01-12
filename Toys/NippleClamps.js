const NIPPLE_CLAMPS = createToy('nipple clamps');
NIPPLE_CLAMPS.decideToyOn = function (asked = false) {
    if(this.isToyOn()) {
        return false;
    }

    if(!this.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    return true;
};

NIPPLE_CLAMPS.decideToyOff = function (asked = false) {
    if(!this.isToyOn()) {
        return false;
    }

    if(!this.getLastUsage().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    return true;
};


function isNipplesClamped() {
    //No current nipple clamps attached
    if (BODY_PART_NIPPLE_L.currentClamps === 0 && BODY_PART_NIPPLE_R.currentClamps === 0) {
        return false;
    }

    return NIPPLE_CLAMPS.isToyOn();
}

function clampNipples() {
    if (isNipplesClamped()) {
        return false;
    }

    if (shouldReplaceSpinsWithNippleClamps) {
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
        sendMessage('I was going to put some clothespins on those nipples but I feel like making it hurt more %Grin%');
        sendMessage('And I think this definitely will hurt more %Lol%');
        sendMessage('So go ahead and put them on %Grin%');

        NIPPLE_CLAMPS.setToyOn(true);
        return true;
    }

    return false;
}

function shouldReplaceSpinsWithNippleClamps() {
    return feelsLikePunishingSlave() && NIPPLE_CLAMPS.hasToy();
}