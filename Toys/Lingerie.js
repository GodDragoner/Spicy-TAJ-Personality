const BASIC_LINGERIE = createToy("Basic Lingerie");
const ADVANCED_LINGERIE = createToy("Advanced Lingerie");

function hasBasicLingerie() {
    return BASIC_LINGERIE.hasToy();
}

function hasAdvancedLingerie() {
    return ADVANCED_LINGERIE.hasToy();
}

function hasLingerieOn() {
    return getVar(VARIABLE_LINGERIE_ON, false);
}

function putOnLingerie() {
    //Skip if lingerie already on
    if(hasLingerieOn()) {
        return true;
    } else if(!hasBasicLingerie() && !hasAdvancedLingerie()) {
        return false;
    }

    sendMessage("%SlaveName%");
    sendMessage(random("I want you to wear", "Go ahead and put on", "I need you to put on", "Go ahead and put on", "I need you to put on"));

    //TODO: Store what lingerie is on right now
    switch(randomInteger(0, hasAdvancedLingerie()? 4 : 1)) {
        case 0:
            sendMessage('These panties', 0);
            showImage('Images/Spicy/Lingerie/Panties/*.jpg', 5);
            break;
        case 1:
            sendMessage('These panties', 0);
            showImage('Images/Spicy/Lingerie/Panties/*.jpg', 5);
            sendMessage('And this bra', 0);
            showImage('Images/Spicy/Lingerie/Bras/*.jpg', 5);
            break;
        case 2:
            sendMessage('This garter belt', 0);
            showImage('Images/Spicy/Lingerie/GarterBelt/*.jpg', 5);
            sendMessage('And these stockings', 0);
            showImage('Images/Spicy/Lingerie/Stockings/*.jpg', 5);
            break;
        case 3:
            sendMessage('This garter belt', 0);
            showImage('Images/Spicy/Lingerie/GarterBelt/*.jpg', 5);
            sendMessage('These panties', 0);
            showImage('Images/Spicy/Lingerie/Panties/*.jpg', 5);
            sendMessage('And these stockings', 0);
            showImage('Images/Spicy/Lingerie/Stockings/*.jpg', 5);
            break;
        case 4:
            sendMessage('This garter belt', 0);
            showImage('Images/Spicy/Lingerie/GarterBelt/*.jpg', 5);
            sendMessage('These panties', 0);
            showImage('Images/Spicy/Lingerie/Panties/*.jpg', 5);
            sendMessage('This bra', 0);
            showImage('Images/Spicy/Lingerie/Bras/*.jpg', 5);
            sendMessage('And these stockings', 0);
            showImage('Images/Spicy/Lingerie/Stockings/*.jpg', 5);
            break;
    }

    sendMessage('Tell me when you are done %SlaveName%');
    waitForDone();

    setVar(VARIABLE_LINGERIE_ON, true);

    return true;
}