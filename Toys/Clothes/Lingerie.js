const GARTER_BELT_TOY = createToy('Garter Belt');

checkClearOutfitOn();

function hasLingerieOn() {
    //TODO: This is a whole outfit (hasOutfitOn check), not lingerie specifically
    return PANTY_TOY.isToyOn() || BRA_TOY.isToyOn() || STOCKING_TOY.isToyOn() || GARTER_BELT_TOY.isToyOn() || hasOutfitOn();
}

function removeAllLingerie() {
    PANTY_TOY.removeToy();
    BRA_TOY.removeToy();
    STOCKING_TOY.removeToy();
    GARTER_BELT_TOY.removeToy();
}

function isLingeriePlayAllowed() {
    return PANTY_TOY.isPlayAllowed() || BRA_TOY.isPlayAllowed() || GARTER_BELT_TOY.isPlayAllowed() || STOCKING_TOY.isPlayAllowed();
}

function hasSomeLingerie() {
    return hasPanties() || hasBra() || hasGarterBelt() || hasStockings();
}

function hasOutfitOn() {
    let stuffOnCount = BRA_TOY.getCurrentToys().length + HIGH_HEEL_TOY.getCurrentToys().length + JEWELLERY_TOY.getCurrentToys().length + PANTY_TOY.getCurrentToys().length +
        SKIRT_TOY.getCurrentToys().length + STOCKING_TOY.getCurrentToys().length + TOP_TOY.getCurrentToys().length + TROUSER_TOY.getCurrentToys().length;

    sendDebugMessage('Outfit pieces on right now: ' + stuffOnCount);
    return stuffOnCount < 0;
}

function checkClearOutfitOn() {
    if(isVar(VARIABLE.CURRENT_OUTFIT_EXPIRY) && getVar(VARIABLE.CURRENT_OUTFIT_EXPIRY).hasPassed()) {
        clearOutfitOn();
        delVar(VARIABLE.CURRENT_OUTFIT_EXPIRY);
    }
}

function clearOutfitOn() {
    BRA_TOY.clearCurrentToys();
    HIGH_HEEL_TOY.clearCurrentToys();
    JEWELLERY_TOY.clearCurrentToys();
    PANTY_TOY.clearCurrentToys();
    SKIRT_TOY.clearCurrentToys();
    STOCKING_TOY.clearCurrentToys();
    TOP_TOY.clearCurrentToys();
    TROUSER_TOY.clearCurrentToys();
}

function hasPanties() {
    return PANTY_TOY.hasToy();
}

function hasBra() {
    return BRA_TOY.hasToy();
}

function hasGarterBelt() {
    let garterBeltFolder = getImageSubFolder('Toys' + PATH_SEPARATOR + 'Lingerie' + PATH_SEPARATOR + 'GarterBelt');
    return garterBeltFolder.listFiles().length > 0 && GARTER_BELT_TOY.hasToy();
}

function hasStockings() {
    return STOCKING_TOY.hasToy();
}

function decideOutfit() {
    let lines = new java.util.ArrayList();

    let pickSkirt = isChance(50) && SKIRT_TOY.hasToy();

    let pickTrousers = !pickSkirt && TROUSER_TOY.hasToy();

    //If no trousers and decided against skirt we force skirt if we own one
    if (!pickTrousers && !pickSkirt && SKIRT_TOY.hasToy()) {
        pickSkirt = true;
    }


    let pickBra = BRA_TOY.hasToy() && isChance(75);

    let skipPanties = pickSkirt && feelsLikeTeasing();
    let pickPanties = PANTY_TOY.hasToy() && !skipPanties;

    let highHeel = HIGH_HEEL_TOY.hasToy() && feelsLikePunishingSlave();

    let dress = false;
    let tops = getDailyWearTops();
    let sportsBra = false;

    if (pickBra) {
        let bra = BRA_TOY.getRandom();

        if (bra.type === 'sports') {
            sportsBra = true;
        }

        lines.add('Put on your ' + bra.getName() + ' <showImage=' + bra.getImagePath() + '>');
        BRA_TOY.addCurrentToy(bra);
    }

    //50 : 50 chance for no top if we have sports bra underneath
    if (tops.length > 0 && (!sportsBra || isChance(50))) {
        let top = random(tops);

        if (top.type === 'dress') {
            dress = true;
            pickSkirt = false;
            pickTrousers = false;
        }

        lines.add('Put on your ' + top.getName() + ' <showImage=' + top.getImagePath() + '>');
        TOP_TOY.addCurrentToy(top);
    }


    let pickStockings = (isChance(50) || (pickSkirt || dress) && isChance(75)) && STOCKING_TOY.hasToy();

    if (pickSkirt) {
        let skirt = SKIRT_TOY.getRandom();

        lines.add('Put on your ' + skirt.getName() + ' <showImage=' + skirt.getImagePath() + '>');
        SKIRT_TOY.addCurrentToy(skirt);
    } else if (pickTrousers) {
        let trouser = TROUSER_TOY.getRandom();

        lines.add('Put on your ' + trouser.getName() + ' <showImage=' + trouser.getImagePath() + '>');
        TROUSER_TOY.addCurrentToy(trouser);
    } else if (!dress) {
        lines.add('Go with whatever trousers you have');
    }

    if (pickStockings) {
        let stockings = STOCKING_TOY.getRandom();

        lines.add('Put on your ' + stockings.getName() + ' <showImage=' + stockings.getImagePath() + '>');

        STOCKING_TOY.addCurrentToy(stockings);

        //No garter belt if those are striped socks stockings
        if (feelsLikeTeasing() && GARTER_BELT_TOY.hasToy() && stockings.type !== 'striped') {
            lines.add('Put on a garter belt alongside those stockings');
        }
    }

    if (pickPanties) {
        let panty = PANTY_TOY.getRandom();

        let punishment = false;

        if (feelsLikePunishingSlave()) {
            let punishmentPanties = PANTY_TOY.getToysWithComfort(0, 2);

            if (punishmentPanties.length > 0) {
                panty = random(punishmentPanties);
                punishment = true;
            }
        }

        PANTY_TOY.addCurrentToy(panty);

        lines.add('Put on your ' + panty.getName() + ' <showImage=' + panty.getImagePath() + '>');

        if (punishment) {
            lines.add('Mind that panty serves as a punishment. So I hope it\'s as uncomfortable as it gets');
        } else if(panty.type === 'high-waist') {
            lines.add('I hope no one will see the panty sticking out because if you leave the house you\'ll have to keep it on %Grin%');
        }
    } else if (skipPanties) {
        let crotchlessFound = false;
        if (isChance(50)) {
            let crotchless = PANTY_TOY.getToysOfType('crotchless');

            if (crotchless.length > 0) {
                let panty = random(crotchless);
                lines.add('Put on your ' + panty.getName() + ' <showImage=' + panty.getImagePath() + '>');
                crotchlessFound = true;
                PANTY_TOY.addCurrentToy(crotchless);
            }
        }

        if (crotchlessFound) {
            lines.add('Just crotchless panties for you today');
        } else {
            lines.add('No underwear for you today');
        }


        if (pickSkirt) {
            lines.add('You\'ll have to wear that skirt with %MyYour% %Cock% freely exposed between your legs')
        }
    }


    if (highHeel) {
        let heel = HIGH_HEEL_TOY.getRandom();

        lines.add('Put on your ' + heel.getName() + ' <showImage=' + heel.getImagePath() + '>');

        HIGH_HEEL_TOY.addCurrentToy(heel);

        if (HIGH_HEEL_LOCK.hasToy() && feelsLikePunishingSlave()) {
            lines.add('Furthermore lock yourself to the heels with your high heel locks %Grin%');
        }
    }

    if (JEWELLERY_TOY.hasToy()) {
        let types = pushElementsToOtherArray(JEWELLERY_TYPES, []);
        let repeat = false;
        sendDebugMessage('Looking into jewellery  ' + types.length);

        while (isChance(50) || repeat) {
            repeat = false;
            let type = random(types);
            sendDebugMessage('Searching for jewellery of type ' + type);

            let jewellery = JEWELLERY_TOY.getToyOfType(type);

            if (jewellery === undefined) {
                repeat = true;
            } else {
                lines.add('Put on your ' + jewellery.getName() + ' <showImage=' + jewellery.getImagePath() + '>');
                JEWELLERY_TOY.addCurrentToy(jewellery);
            }

            types = removeIndexFromArray(types, types.indexOf(type));

            if (types.length === 0) {
                break;
            }
        }
    }

    return lines;
}


function decideNightwear(includePanty = false) {
    let lines = new java.util.ArrayList();

    let tops = getNightwearTops();

    //TODO: Consider buttplug or bondage

    if (tops.length > 0 && isChance(75)) {
        let top = random(tops);
        lines.add('Put on your ' + top.getName() + ' <showImage=' + top.getImagePath() + '>');
    }

    if (includePanty) {
        let panty = PANTY_TOY.getRandom();
        lines.add('Put on your ' + panty.getName() + ' <showImage=' + panty.getImagePath() + '>');
    }

    if (isChance(25)) {
        let sock = random(STOCKING_TOY.getToysOfType('striped'));
        lines.add('Put on your ' + sock.getName() + ' <showImage=' + sock.getImagePath() + '>');
    }


    if (JEWELLERY_TOY.hasToy() && isChance(25)) {
        let types = pushElementsToOtherArray(JEWELLERY_TYPES, []);
        let repeat = false;
        sendDebugMessage('Looking into jewellery  ' + types.length);

        while (isChance(repeat? 50 : 100) || repeat) {
            repeat = false;
            let type = random(types);
            sendDebugMessage('Searching for jewellery of type ' + type);

            let jewellery = JEWELLERY_TOY.getToyOfType(type);

            if (jewellery === undefined) {
                repeat = true;
            } else {
                lines.add('Put on your ' + jewellery.getName() + ' <showImage=' + jewellery.getImagePath() + '>');
            }

            types = removeIndexFromArray(types, types.indexOf(type));

            if (types.length === 0) {
                break;
            }
        }
    }

    return lines;
}

//TODO: Only lingerie items? Not whole outfit, maybe skirt is okay
function putOnLingerie() {
    let outfit = decideOutfit();

    sendMessageBasedOnSender("%SlaveName%");
    sendMessageBasedOnSender('I want you to put on the following outfit');

    for(let x = 0; x < outfit.size(); x++) {
        sendMessageBasedOnSender(outfit.get(x));
    }

    sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
    //Might take long to dress up
    waitForDone(10000000);

    return true;
}