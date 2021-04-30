const PANTY_TOY = createToy('Panty');
const BRA_TOY = createToy('Bra');

const STOCKINGS_TOY = createToy('Stockings');
const GARTER_BELT_TOY = createToy('Garter Belt');

function hasLingerieOn() {
    return PANTY_TOY.isToyOn() || BRA_TOY.isToyOn() || STOCKINGS_TOY.isToyOn() || GARTER_BELT_TOY.isToyOn();
}

function removeAllLingerie() {
    PANTY_TOY.removeToy();
    BRA_TOY.removeToy();
    STOCKINGS_TOY.removeToy();
    GARTER_BELT_TOY.removeToy();
}

function isLingeriePlayAllowed() {
    return PANTY_TOY.isPlayAllowed() || BRA_TOY.isPlayAllowed() || GARTER_BELT_TOY.isPlayAllowed() || STOCKINGS_TOY.isPlayAllowed();
}

function hasSomeLingerie() {
    return hasPanties() || hasBra() || hasGarterBelt() || hasStockings();
}

function hasPanties() {
    let pantiesFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'Panties');
    return pantiesFolder.listFiles().length > 0 && PANTY_TOY.hasToy();
}

function hasBra() {
    let braFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'Bra');
    return braFolder.listFiles().length > 0 && BRA_TOY.hasToy();
}

function hasGarterBelt() {
    let garterBeltFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'GarterBelt');
    return garterBeltFolder.listFiles().length > 0 && GARTER_BELT_TOY.hasToy();
}

function hasStockings() {
    let stockingFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'Stockings');
    return stockingFolder.listFiles().length > 0 && STOCKINGS_TOY.hasToy();
}

function putOnLingerie() {
    let attachedToys = [];

    //Skip if lingerie already on
    if(hasLingerieOn()) {
        return attachedToys;
    } else if(!hasSomeLingerie()) {
        return attachedToys;
    }

    sendMessageBasedOnSender("%SlaveName%");
    sendMessageBasedOnSender(random("I want you to wear", "Go ahead and put on", "I need you to put on", "Go ahead and put on", "I need you to put on"));

    let accessories = [];
    let tries = 0;

    while(accessories.length === 0 && tries < 20) {
        if(hasPanties() && isChance(80)) {
            accessories.push(0);
        }

        if(hasBra() && isChance(80)) {
            accessories.push(1);
        }

        if(hasGarterBelt() && isChance(50)) {
            accessories.push(2);
        }

        if(hasStockings() && isChance(50)) {
            accessories.push(3);
        }
        
        tries++;
    }

    //TODO: Store what lingerie is on right now so have some variety

    if(accessories.indexOf(0) !== -1) {
        sendMessageBasedOnSender('These panties', 0);
        showImage('Images/Spicy/Toys/Lingerie/Panties/*.jpg', 5);
        PANTY_TOY.setToyOn(true);
        attachedToys.push(PANTY_TOY);
    }

    if(accessories.indexOf(1) !== -1) {
        sendMessageBasedOnSender('This bra', 0);
        showImage('Images/Spicy/Toys/Lingerie/Bra/*.jpg', 5);
        BRA_TOY.setToyOn(true);
        attachedToys.push(BRA_TOY);
    }

    if(accessories.indexOf(2) !== -1) {
        sendMessageBasedOnSender('This garter belt', 0);
        showImage('Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg', 5);
        GARTER_BELT_TOY.setToyOn(true);
        attachedToys.push(GARTER_BELT_TOY);
    }

    if(accessories.indexOf(3) !== -1) {
        sendMessageBasedOnSender('These stockings', 0);
        showImage('Images/Spicy/Toys/Lingerie/Stockings/*.jpg', 5);
        STOCKINGS_TOY.setToyOn(true);
        attachedToys.push(STOCKINGS_TOY);
    }

    sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
    //Might take long to dress up
    waitForDone(10000000);

    return attachedToys;
}