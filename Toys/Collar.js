const COLLAR_TOY = createToy('collar');
COLLAR_TOY.removeToyText = function () {
    if (!COLLAR_TOY.hasToy() || !COLLAR_TOY.isToyOn()) {
        return false;
    }

    sendMessage('You may remove your collar %SlaveName%');
    sendMessage('Tell me when you are done');
    waitForDone();

    COLLAR_TOY.setToyOn(false);
    return true;
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