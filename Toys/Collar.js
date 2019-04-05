const COLLAR_TOY = createToy('collar');

function putOnCollar() {
    if (!COLLAR_TOY.hasToy() || COLLAR_TOY.isToyOn() || !fetchToy(COLLAR_TOY.name)) {
        return false;
    }

    sendMessage('Now put it on. Tell me when you are done %SlaveName%');
    waitForDone();

    COLLAR_TOY.setHasToy(true);
}