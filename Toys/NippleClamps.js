const NIPPLE_CLAMPS = createToy('nipple clamps');
NIPPLE_CLAMPS.decideToyOn = function (asked = false) {
    return decideNippleToyOn();
};

NIPPLE_CLAMPS.removeToy = function () {
    removeNippleClamps();
};

const CLOVER_CLAMPS = createToy('clover clamps');
CLOVER_CLAMPS.decideToyOn = function (asked = false) {
    return decideNippleToyOn();
};

CLOVER_CLAMPS.removeToy = function () {
    removeNippleClamps();
};

const NIPPLE_SUCKERS = createToy('nipple suckers');
NIPPLE_SUCKERS.decideToyOn = function (asked = false) {
    return decideNippleToyOn();
};
NIPPLE_SUCKERS.getTakeOffCommand = function() {
    return 'You may remove those nipple suckers';
}

function decideNippleToyOn() {
    if(isNipplesOccupied()) {
        return false;
    }

    if(!NIPPLE_SUCKERS.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    if(!NIPPLE_CLAMPS.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    if(!CLOVER_CLAMPS.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
        return false;
    }

    return true;
}

function isNipplesOccupied() {
    //No current nipple clamps attached
    return isToyOnNipples() || BODY_PART_NIPPLE_L.currentClamps !== 0 || BODY_PART_NIPPLE_R.currentClamps !== 0;
}

function isToyOnNipples() {
    //No current nipple clamps attached
    return NIPPLE_CLAMPS.isToyOn() || CLOVER_CLAMPS.isToyOn() || NIPPLE_SUCKERS.isToyOn();
}

function putSomethingOnNipples(forceToy = false) {
    if (isNipplesOccupied()) {
        return null;
    }

    if (NIPPLE_CLAMPS.hasToy() && (shouldReplaceSpinsWithNippleClamps() || forceToy)) {
        if (putNippleClampsOn()) {
            return NIPPLE_CLAMPS;
        }
    }

    if (NIPPLE_SUCKERS.hasToy() && (isChance(25) || forceToy)) {
        if(NIPPLE_SUCKERS.fetchToy()) {
            sendMessageBasedOnSender('Now put the nipple suckers on %SlaveName%');
            sendMessageBasedOnSender('Tell me when you are done');
            waitForDone();
            NIPPLE_SUCKERS.setToyOn(true);
            return NIPPLE_SUCKERS;
        }
    }

    if (!fetchToy('clothespin', undefined, 2)) {
        return null;
    }

    putClampsOnBothSides(1, 1, BODY_PART_NIPPLE_R);

    return CLOTHESPINS_TOY;
}

function removeAnythingOnNipples() {
    removeNippleClamps();

    if(isNipplesOccupied()) {
        //Means there is at least a clothespin on one of the nipples
        sendMessage('Go ahead and remove all clothespins from your nipples %SlaveName%', 5);
        BODY_PART_NIPPLE_L.currentClamps = 0;
        BODY_PART_NIPPLE_R.currentClamps = 0;
    }
}

function removeNippleClamps() {
    if(NIPPLE_SUCKERS.isToyOn()) {
        sendMessage('%SlaveName% go ahead and remove those nipple suckers and put them aside', 0);
        waitForDone();

        NIPPLE_SUCKERS.setToyOn(false);
    }

    if(NIPPLE_CLAMPS.isToyOn() || CLOVER_CLAMPS.isToyOn()) {
        sendMessage('%SlaveName% go ahead and remove those nipple clamps and put them aside', 5);

        let answer = sendYesOrNoQuestionTimeout('Much better isn\'t it? %Grin%', 3);

        if(answer === ANSWER_YES) {
            sendMessage(random('You\'re welcome', 'Well then thank your %DomHonorific% %Grin%', 'No problem %SlaveName%'));
            sendMessage('Don\'t celebrate to early though %Grin%');
        } else if(answer === ANSWER_NO) {
            sendMessage(random('Looks like my pain slut would like some more pain %Lol%', 'Really? I would put them back but I got other plans %Grin%'));
        }

        NIPPLE_CLAMPS.setToyOn(false);
        CLOVER_CLAMPS.setToyOn(false);
    }
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
    return NIPPLE_CLAMPS.hasToy() && feelsLikePunishingSlave();
}