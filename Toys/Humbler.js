const HUMBLER_TOY = createToy('humbler');

function putOnHumbler() {
    if (!HUMBLER_TOY.hasToy() || HUMBLER_TOY.isToyOn() || !fetchToy(HUMBLER_TOY.name)) {
        return false;
    }

    sendMessage('Now put it on. Tell me when you are done %SlaveName%');
    waitForDone();

    HUMBLER_TOY.setToyOn(true);
    return true;
}

function removeHumbler() {
    if (!HUMBLER_TOY.hasToy() || !HUMBLER_TOY.isToyOn()) {
        return false;
    }

    sendMessage('You may remove the humbler %SlaveName%');
    waitForDone();

    HUMBLER_TOY.setToyOn(false);
    return true;
}