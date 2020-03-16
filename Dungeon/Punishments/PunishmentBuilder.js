//TODO: Enema punishment, anal punishment, ball crusher
let PUNISHMENT_TRANSITION_HANDLER = null;

//Amounts of punishments done in the current section
let PUNISHMENTS_DONE = 0;

//Used to decide what punishment we need to do and when to stop
let PUNISHMENT_SCORE = 0;


let PUNISHMENT_MULTIPLIER_CURRENT = 1;

const PUNISHMENT_LEVEL = {
     EASY: {name: 'easy', id: 0},
     MEDIUM:  {name: 'medium', id: 1},
     HARD:  {name: 'hard', id: 2},
     EXTREME:  {name: 'extreme', id: 3}
};


let PUNISHMENT_CURRENT_LEVEL = PUNISHMENT_LEVEL.EASY;
let PUNISHMENT_OVERALL_LEVEL = PUNISHMENT_LEVEL.EASY;

function isOngoingPunishment() {
    return getVar(VARIABLE.PUNISHMENT_ACTIVE, false);
}

function startPunishmentSession(overallLevel) {
    setVar(VARIABLE.PUNISHMENT_ACTIVE, true);
    PUNISHMENT_OVERALL_LEVEL = overallLevel;

    sendDebugMessage('Starting punishment with level ' + overallLevel.id);

    switch(getVar(VARIABLE.PUNISHMENT_PUNISHER)) {
        case 1 :
            sendDungeonMessage("Contacting %DomHonorific% %DomName% ..",1);
            setSender(1);
            break;
        case 2 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend1Name% ..",1);
            setSender(2);
            break;
        case 3 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend2Name% ..",1);
            setSender(3);
            break;
        case 4 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend3Name% ..",1);
            setSender(4);
            break;
    }

    sleep(3);

    if(!sendGreeting()) {
    }

    let relockChastity = false;

    if(isInChastity() && isChance(overallLevel.id*20) && (!isVar(VARIABLE.LOCKED_UP_UNTIL) || getDate(VARIABLE.LOCKED_UP_UNTIL).hasPassed())) {
        sendMessage('I think I want your cock exposed for this %Grin%');
        unlockChastityCage();
        relockChastity = true;
    }

    PUNISHMENT_SCORE = (overallLevel.id + 1)*4;
    sendDebugMessage('Starting punishment with score of ' + PUNISHMENT_SCORE);

    while (PUNISHMENT_SCORE > 0) {
        interactWithRandomToys();

        chooseNextPunishment(overallLevel);

        //Current punishment might have counted for multiple other small punishments
        for(let x = 0; x < PUNISHMENT_MULTIPLIER_CURRENT; x++) {
            subtractPunishmentPointsForPunishment(PUNISHMENT_CURRENT_LEVEL);

            //Reduce the score by the set amount
            switch (PUNISHMENT_CURRENT_LEVEL) {
                case PUNISHMENT_LEVEL.EASY:
                    PUNISHMENT_SCORE -= 1;
                    break;
                case PUNISHMENT_LEVEL.MEDIUM:
                    PUNISHMENT_SCORE -= 2;
                    break;
                case PUNISHMENT_LEVEL.HARD:
                    PUNISHMENT_SCORE -= 3;
                    break;
                case PUNISHMENT_LEVEL.EXTREME:
                    PUNISHMENT_SCORE -= 5;
                    break;
            }
        }

        sendDebugMessage('Finished punishment. Total done: ' + PUNISHMENTS_DONE + ' and current score left ' + PUNISHMENT_SCORE)

        //Reset
        PUNISHMENT_MULTIPLIER_CURRENT = 1;
    }

    //TODO: More variety
    sendMessage('I think that should be sufficient for now %Grin%');

    removeAllToys();

    sendMessage('You hopefully learned your lesson %SlaveName%');

    if(relockChastity) {
        sendMessage('I don\'t need your %cock% to be exposed any longer so...');
        sendAlreadyKnowWhatsNext('chastity', 'lock', 'cage');
        lockChastityCage();
        lockAwayChastityKey();
    }

    setSender(1);
    setVar(VARIABLE.PUNISHMENT_ACTIVE, false);
}

function chooseNextPunishment(overallLevel) {
    let level;

    //First punishment is always gonna be easy
    if(PUNISHMENTS_DONE === 0) {
        level = PUNISHMENT_LEVEL.EASY;
    } else {
        let levels = [];

        switch(overallLevel) {
            case PUNISHMENT_LEVEL.EASY:
                levels.push(PUNISHMENT_LEVEL.EASY);
                break;
            case PUNISHMENT_LEVEL.MEDIUM:
                levels.push(PUNISHMENT_LEVEL.EASY);
                levels.push(overallLevel);
                break;
            case PUNISHMENT_LEVEL.HARD:
                levels.push(PUNISHMENT_LEVEL.MEDIUM);
                levels.push(overallLevel);
                break;
            case PUNISHMENT_LEVEL.EXTREME:
                levels.push(PUNISHMENT_LEVEL.HARD);
                levels.push(overallLevel);
                break;
        }

        level = levels[randomInteger(0, levels.length - 1)];
    }

    PUNISHMENT_CURRENT_LEVEL = level;

    sendDebugMessage('Next punishment level ' + PUNISHMENT_CURRENT_LEVEL.id);

    runPunishment(PUNISHMENT_CURRENT_LEVEL);
    return PUNISHMENT_CURRENT_LEVEL;
}

function subtractPunishmentPointsForPunishment(punishmentLevel) {
    switch(punishmentLevel) {
        case PUNISHMENT_LEVEL.EASY:
            addPunishmentPoints(-randomInteger(40, 70));
            break;
        case PUNISHMENT_LEVEL.MEDIUM:
            addPunishmentPoints(-randomInteger(60, 100));
            break;
        case PUNISHMENT_LEVEL.HARD:
            addPunishmentPoints(-randomInteger(90, 140));
            break;
        case PUNISHMENT_LEVEL.EXTREME:
            addPunishmentPoints(-randomInteger(140, 200));
            break;
    }
}


function setPunishmentTransitionHandler(handler) {
    PUNISHMENT_TRANSITION_HANDLER = handler;
}

function runPunishment(level) {
    //We need to set it to the object so we can reuse it later on
    setTempVar('lastPunishmentLevel', level);

    const levelPath = getPunishmentTypeCategoryPath(level);

    const paths = [];

    if (getFile(getPersonalityPath() + PATH_SEPARATOR + levelPath).exists()) {
        paths.push(levelPath + PATH_SEPARATOR + "*.js");
    }

    //Any punishments
    paths.push('Dungeon' + PATH_SEPARATOR + 'Punishments' + PATH_SEPARATOR + 'Any' + PATH_SEPARATOR + "*.js");

    //Keep track of how many times we tried to find a module in a category since last decide punishment call
    setTempVar('findPunishmentTries', getVar('findPunishmentTries', 0) + 1);

    run(paths[randomInteger(0, paths.length - 1)]);
}

function getDefaultPunishmentsSinceRun() {
    return 3;
}

function tryRunPunishmentFetchId(punishmentCategory, minPunishmentsSinceRun = getDefaultPunishmentsSinceRun()) {
    return tryRunPunishment(getCurrentScriptName(), punishmentCategory, getVar('lastPunishmentLevel'), minPunishmentsSinceRun);
}

function tryRunPunishment(punishmentId, punishmentCategory, level, minModulesSinceRun = 3) {
    let maxTries = 10;

    sendDebugMessage('Trying to run punishment ' + punishmentId + ' in category ' + punishmentCategory + ' with level ' + level.id);
    sendDebugMessage('Current level ' + PUNISHMENT_CURRENT_LEVEL.id);

    punishmentId = punishmentId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (PUNISHMENT_HISTORY.isInTodaysHistory(punishmentId)) {
        maxTries = 30;
        minModulesSinceRun = 10;
        sendDebugMessage('Punishment was in todays history');
    }

    if (PUNISHMENT_HISTORY.isInHistory(punishmentId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (PUNISHMENT_HISTORY.getModulesSinceHistory(punishmentId) < minModulesSinceRun) {
            sendDebugMessage('Punishment was run too recently (' + PUNISHMENT_HISTORY.getModulesSinceHistory(punishmentId) + ' punishments ago)');
            let tries = getVar('findPunishmentTries');
            if (tries < maxTries / 2) {
                //Try to run from same level
                runPunishment(level);
                return false;
            } else if (tries < maxTries) {
                //Try to find a different module
                chooseNextPunishment(level);
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
            sendDebugMessage('We tried too often (' + tries + ') to find another punishment');
        }
    }

    PUNISHMENT_HISTORY.addHistoryRun(punishmentId);

    //Handle transition //QUALITY: This is actually trigger after we interacted with toys which makes it kinda out of context
    if (PUNISHMENT_TRANSITION_HANDLER !== null && PUNISHMENT_TRANSITION_HANDLER !== undefined) {
        PUNISHMENT_TRANSITION_HANDLER.handleTransition(punishmentCategory, level);
    }

    setTempVar('findPunishmentTries', 0);
    PUNISHMENTS_DONE++;

    return true;
}

function getPunishmentTypeCategoryPath(level) {
    return 'Dungeon' + PATH_SEPARATOR + 'Punishments' + PATH_SEPARATOR + capitalize(level.name);
}