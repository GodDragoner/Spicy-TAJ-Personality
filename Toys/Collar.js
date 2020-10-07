const COLLAR_TOY = createToy('collar');
COLLAR_TOY.removeToy = function () {
    removeCollar();
};

function putOnCollar() {
    if (!COLLAR_TOY.hasToy() || COLLAR_TOY.isToyOn() || !fetchToy(COLLAR_TOY.name)) {
        return false;
    }

    sendMessage('Now put it on. Tell me when you are done %SlaveName%');
    waitForDone();

    COLLAR_TOY.setToyOn(true);

    if(shouldIntroduceNewRule(RULE_ALWAYS_WEAR_COLLAR)) {
        RULE_ALWAYS_WEAR_COLLAR.sendIntroduction();
    }

    return true;
}

function removeCollar() {
    if (!COLLAR_TOY.hasToy() || !COLLAR_TOY.isToyOn()) {
        return false;
    }

    sendMessage('You may remove your collar %SlaveName%');
    waitForDone();

    COLLAR_TOY.setToyOn(false);
    return true;
}