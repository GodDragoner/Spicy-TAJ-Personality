const GAG_TYPE_SPIDER_GAG = createToy('spider gag');
const GAG_TYPE_BALL_GAG = createToy('ball gag');
const GAG_TYPE_BUTTPLUG_GAG = createToy('buttplug');
const GAG_TYPE_INFLATABLE_GAG = createToy('inflatable gag');
const GAG_TYPE_DILDO_GAG = createToy('dildo gag');

let currentGagType = GAG_TYPE_BALL_GAG;

function isGaged() {
    return getVar(VARIABLE_IS_GAGED, false);
}

function setGaged(gaged) {
    return setTempVar(VARIABLE_IS_GAGED, gaged);
}

function hasBallGag() {
    return GAG_TYPE_BALL_GAG.hasToy();
}

function hasAnyGag() {
    return GAG_TYPE_SPIDER_GAG.hasToy() || GAG_TYPE_BALL_GAG.hasToy() || GAG_TYPE_INFLATABLE_GAG.hasToy() || GAG_TYPE_DILDO_GAG.hasToy();
}

function getRandomGag() {
    let gags = [];

    if (GAG_TYPE_DILDO_GAG.hasToy()) {
        gags.push(GAG_TYPE_DILDO_GAG);
    }

    if (GAG_TYPE_BALL_GAG.hasToy()) {
        gags.push(GAG_TYPE_BALL_GAG);
    }

    if (GAG_TYPE_INFLATABLE_GAG.hasToy()) {
        gags.push(GAG_TYPE_INFLATABLE_GAG);
    }

    if (GAG_TYPE_SPIDER_GAG.hasToy()) {
        gags.push(GAG_TYPE_SPIDER_GAG);
    }

    if (gags.length === 0) {
        return null;
    }

    return gags[randomInteger(0, gags.length - 1)];
}

function wantsToGagSub() {
    if (isGaged() || !hasAnyGag()) {
        return false;
    }

    return isAnnoyedByTalking() || isChance(20);
}

function decideGag(pain = false) {
    if (isGaged() || !hasAnyGag()) {
        return false;
    }

    if (isAnnoyedByTalking()) {
        sendMessageBasedOnSender('You know what %SlaveName%');

        if (pain) {
            sendMessageBasedOnSender('I am not in the mood to hear your whimpering %GeneralTime%');
        } else {
            if(isChance(40)) {
                //TODO: Interact more based on what previously happened etc.
                sendMessage('You have been talking too much', 'You have been annoying me by not shutting up', 'You have been quite annoying today');
                sendMessage('And...');
            }

            sendMessageBasedOnSender(random('I want you to shut your dirty little mouth', 'I want you to shut up', 'I want you to stop talking', 'I want you to be silent', 'I want some silence',
                'I need some silence'));
            sendMessageBasedOnSender('And I just know a good way to accomplish that %Grin%');
        }

        selectAndPutInGag();
        return true;
    }

    //Punishment has higher chance for gags
    else if (isChance(isOngoingPunishment()? 75: 25)) {
        selectAndPutInGag();
        return true;
    }

    return false;
}

function selectGag() {
    let dildoGagChance = 0;

    if (GAG_TYPE_DILDO_GAG.hasToy()) {
        dildoGagChance += 25;

        if (isAnnoyedByTalking()) {
            dildoGagChance += 25;
        }
    }

    if (isChance(dildoGagChance)) {
        return GAG_TYPE_DILDO_GAG;
    } else if (feelsLikePunishingSlave() && GAG_TYPE_SPIDER_GAG.hasToy() || BODY_PART_TONGUE.currentClamps > 0 && isChance(15 * getMood())) {
        return GAG_TYPE_SPIDER_GAG;
    }

    if (getASMLimit() === LIMIT_ASKED_YES && feelsEvil() && getRandomUncleanedButtplug() !== null) {
        return BUTTPLUG_TOY;
    }

    if (hasBallGag()) {
        return GAG_TYPE_BALL_GAG;
    } else {
        return getRandomGag();
    }
}

function selectAndPutInGag() {
    let gag = selectGag();

    //Right now spider gag is only picked if she wants to punish the slave but we might change that at some point
    return putInGag(gag, gag === GAG_TYPE_SPIDER_GAG);
}

function putInGag(gagType = GAG_TYPE_BALL_GAG, addPinToTongue = false) {
    if(isGaged()) {
        removeGag();
    }

    if (!gagType.hasToy()) {
        gagType = selectGag();
    }

    if (addPinToTongue && BODY_PART_TONGUE.currentClamps === 0) {
        if (fetchToy('clothespin', undefined, 1)) {
            putClampsOnOneSide(1, BODY_PART_TONGUE);
        }
    }

    let keepPins = false;

    //Previously had a pin on tongue but we don't want to add one so we will remove it
    if (BODY_PART_TONGUE.currentClamps > 0 && !addPinToTongue) {
        //Keep pin on and use spider gag
        if (GAG_TYPE_SPIDER_GAG.hasToy() && feelsLikePunishingSlave()) {
            gagType = GAG_TYPE_SPIDER_GAG;
            keepPins = true;
        } else {
            sendMessageBasedOnSender('%SlaveName%');
            sendMessageBasedOnSender('Remove all clamps from your tongue %EmoteHappy%', 5);
            BODY_PART_TONGUE.currentClamps = 0;
        }
    }


    let isASM = false;

    if (gagType === BUTTPLUG_TOY) {
        let buttplug = getRandomUncleanedButtplug();

        //No ASM or no plug found?
        if(getASMLimit() !== LIMIT_ASKED_YES || buttplug === null) {
            buttplug = getRandomCleanButtplug();
        } else {
            isASM = true;
        }

        //Fall back if we haven't found a plug
        if(buttplug === null) {
            return putInGag();
        }

        if (!fetchButtplugToy(buttplug.name)) {
            return false;
        }

        //After we fetched it we can set this to true because we are gonna clean it with the mouth
        buttplug.clean = true;

        //TODO: Interact
        sendMessage('%KnowWhatsNext%');
        sendMessage('I want you to use that plug as a gag %Grin%')
    } else {
        if (!fetchToy(gagType.name)) {
            return false;
        }
    }

    if (keepPins) {
        sendMessageBasedOnSender('And no, you won\'t be allowed to take those clothespins of your tongue');
        sendMessageBasedOnSender('They will stay where they are %Grin%');
        sendMessageBasedOnSender('That is why I made you get the spider gag anyway %Lol%');
        sendMessageBasedOnSender('You better make it work %EmoteHappy%');
    } else if (addPinToTongue) {
        sendMessageBasedOnSender('This is gonna be good');
        sendMessageBasedOnSender('Your tongue clipped with that pin and your gag pulling your mouth wide open %Grin%');
    }

    if(isASM) {
        sendMessageBasedOnSender('I hope you are ready to taste that ass juice of yours %Grin%');
    }

    sendMessageBasedOnSender('Now put it in. Tell me when you are done %SlaveName%');
    waitForDone();

    currentGagType = gagType;
    currentGagType.setLastUsage();
    setGaged(true);

    return true;
}

//TODO: Supply reason why to remove so teasing can be done like (Remove the gag, I want your mouth free for what's about to come next)
function removeGag() {
    let clampOnTongue = false;
    if (BODY_PART_TONGUE.currentClamps > 0) {
        sendMessageBasedOnSender('%SlaveName%');
        sendMessageBasedOnSender('Remove all clamps from your tongue %EmoteHappy%', 5);
        BODY_PART_TONGUE.currentClamps = 0;
        clampOnTongue = true;
    }

    sendMessageBasedOnSender("%SlaveName% go ahead and remove that gag from your mouth");
    let answer = sendInput("Tell me when you are ready to continue");
    while (true) {
        if (answer.isLike("done", "yes")) {
            sendMessageBasedOnSender("%Good%");
            break;
        } else {
            sendMessageBasedOnSender("Have you removed the gag yet?");
            answer.loop();
        }
    }

    currentGagType.setLastRemoval();

    sendMessageBasedOnSender("Put the gag aside for now");
    setGaged(false);

    //TODO: Implement but make sure to check if mouth is needed afterwards
    /*if(feelsLikePunishingSlave()) {
        sendAlreadyKnowWhatsNext('clamp', 'tongue');
        putClampsOnOneSide(1, BODY_PART_TONGUE);
        sendMessage('Did you you really think that I was gonna remove it from your tongue alongside the gag? Poor %SlaveName%');
    }*/
}

function sendConsideredRemovingGag() {
    sendMessage(random('I was considering removing that gag from your mouth', 'I was thinking about removing that gag from your mouth') + ' and letting you speak' + random('for now', ''));
    sendMessage(random('However...', 'But...'));

    switch(randomInteger(0, 3)) {
        case 0:
            sendMessage('I don\'t think you earned that right yet');
            break;
        case 1:
            sendMessage('I am just not in the mood of hearing any sound from you right now');
            break;
        case 2:
            //QUALITY: Generalise
            if(sendYesOrNoQuestion(random('You haven\'t earned that right yet, have you?', 'You haven\'t been good enough, have you?', 'You haven\'t pleased me enough, have you?'))) {
                sendMessage('I don\'t think you have');
                sendMessage('And now shut up %SlaveName% or you\'ll regret it');
            } else {
                sendMessage('Indeed, you really haven\'t %Lol%');
            }
            break;
        case 3:
            sendMessage('You shouldn\'t speak now anyway');
            break;
    }
}

function isGagPlay() {
    return getVar(VARIABLE_TOY_GAG_INTERACTION_MODE) === TOY_BOTH_MODE || getVar(VARIABLE_TOY_GAG_INTERACTION_MODE) === TOY_PLAY_MODE;
}

function isGagPunish() {
    return getVar(VARIABLE_TOY_GAG_INTERACTION_MODE) === TOY_BOTH_MODE || getVar(VARIABLE_TOY_GAG_INTERACTION_MODE) === TOY_PUNISHMENT_MODE;
}

function setupGags(domChose) {
    GAG_TYPE_BALL_GAG.askForToy();
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    GAG_TYPE_SPIDER_GAG.askForToy();
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    GAG_TYPE_DILDO_GAG.askForToy();
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    GAG_TYPE_INFLATABLE_GAG.askForToy();

    if(!domChose) {
        sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
        askForToyUsage('gag', domChose);
    }
}