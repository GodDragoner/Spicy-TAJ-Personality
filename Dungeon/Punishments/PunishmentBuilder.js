//TODO: Enema punishment, anal punishment, ball crusher
let PUNISHMENT_TRANSITION_HANDLER = null;

//Amounts of punishments done in the current section
let PUNISHMENTS_DONE = 0;

//Used to decide what punishment we need to do and when to stop
let PUNISHMENT_SCORE = 0;

let PUNISHMENT_MULTIPLIER_CURRENT = 1;

const PUNISHMENT_LEVEL = {
    EASY: {name: 'easy', id: 0},
    MEDIUM: {name: 'medium', id: 1},
    HARD: {name: 'hard', id: 2},
    EXTREME: {name: 'extreme', id: 3}
};


let PUNISHMENT_CURRENT_LEVEL = PUNISHMENT_LEVEL.EASY;
let PUNISHMENT_OVERALL_LEVEL = PUNISHMENT_LEVEL.EASY;

function getPunishmentLevelById(id) {
    if (id === PUNISHMENT_LEVEL.EASY.id) {
        return PUNISHMENT_LEVEL.EASY;
    } else if (id === PUNISHMENT_LEVEL.MEDIUM.id) {
        return PUNISHMENT_LEVEL.MEDIUM;
    } else if (id === PUNISHMENT_LEVEL.HARD.id) {
        return PUNISHMENT_LEVEL.HARD;
    } else if (id === PUNISHMENT_LEVEL.EXTREME.id) {
        return PUNISHMENT_LEVEL.EXTREME;
    }

    //Nothing
    return null;
}


function isOngoingPunishment() {
    return getVar(VARIABLE.PUNISHMENT_ACTIVE, false);
}

function setupPunisherConnection() {
    switch (getVar(VARIABLE.PUNISHMENT_PUNISHER)) {
        case 1 :
            sendDungeonMessage("Contacting %DomHonorific% %DomName% ..", 1);
            setSender(1);
            break;
        case 2 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend1Name% ..", 1);
            setSender(2);
            break;
        case 3 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend2Name% ..", 1);
            setSender(3);
            break;
        case 4 :
            sendDungeonMessage("Contacting %DomHonorific% %domFriend3Name% ..", 1);
            setSender(4);
            break;
    }

    sleep(3);

    if (!sendGreeting()) {}
}


function startPunishmentSession(overallLevel) {
    setVar(VARIABLE.PUNISHMENT_ACTIVE, true);
    PUNISHMENT_OVERALL_LEVEL = overallLevel;

    sendDebugMessage('Starting punishment with level ' + overallLevel.id);
    setupPunisherConnection();

    let relockChastity = false;

    if (isInChastity() && isChance(overallLevel.id * 20) && (!isVar(VARIABLE.LOCKED_UP_UNTIL) || getDate(VARIABLE.LOCKED_UP_UNTIL).hasPassed())) {
        //Only out of chastity if domme punishes
        if (getCurrentTAJSenderID() === 1 && !isChastityPunishmentAttached()) {
            sendMessage('I think I want your cock exposed for this %Grin%');
            unlockChastityCage();
            relockChastity = true;
        } else {
            sendMessage('I would\'ve loved to remove that chastity device for better access but I think this should be a privilege of %DomHonorific% %DomName% %Grin%');
        }
    }

    PUNISHMENT_SCORE = (overallLevel.id + 1) * 4;
    sendDebugMessage('Starting punishment with score of ' + PUNISHMENT_SCORE);


    //Only while we have score left, the punishment is active and the points are > 0
    while (PUNISHMENT_SCORE > 0 && getVar(VARIABLE.PUNISHMENT_ACTIVE, false) && getVar(VARIABLE.PUNISHMENT_POINTS, 0) > 0) {
        interactWithRandomToys();

        chooseNextPunishment(overallLevel);

        //Current punishment might have counted for multiple other small punishments
        for (let x = 0; x < PUNISHMENT_MULTIPLIER_CURRENT; x++) {
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

    //Somehow the punishment was cancelled. Exit punishment
    if(!getVar(VARIABLE.PUNISHMENT_ACTIVE, false)) {
        setSender(1);
        return;
    }

    sendMessage(random('We\'re at the end mark of today\'s punishment session', 'I think I punished you enough for today %SlaveName%', 'I think this will suffice as a punishment',
        'I think you\'ve suffered enough at my hand today', 'We\'re at the end of our punishment session', 'I have things to do so this will be enough as a punishment for today %SlaveName%',
        'This is the end of our punishment session', 'I think this should be enough for this punishment session'));

    removeAllToys();

    sendMessage(random('You hopefully learned your lesson %SlaveName%', 'I hope you won\'t misbehave again', 'I hope you will behave from now on', 'Hopefully this is the last time I need to punish you %SlaveName%'));

    if (relockChastity) {
        sendMessage('I don\'t need your %Cock% to be exposed to me any longer so...');
        sendAlreadyKnowWhatsNext('chastity', 'lock', 'cage');
        lockChastityCage();
        lockAwayChastityKey();
    }

    setSender(1);
    setVar(VARIABLE.PUNISHMENT_ACTIVE, false);
    incrementVar(VARIABLE.PUNISHMENTS_DONE, 1, 0);
    delVar(VARIABLE.PUNISHMENT_PUNISHER);
}

function chooseNextPunishment(overallLevel) {
    let level;

    //First punishment is always gonna be easy
    if (PUNISHMENTS_DONE === 0) {
        level = PUNISHMENT_LEVEL.EASY;
    } else {
        let levels = [];

        switch (overallLevel) {
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
    switch (punishmentLevel) {
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

let availableFiles = undefined;

function runPunishment(level) {
    if (availableFiles === undefined) {
        //Try to find some alternative (otherwise we might end up in an endless loop if some fetishes are not yet available)
        /*if(getVar('findPunishmentTries', 0) > 20) {
            let higherLevel = getPunishmentLevelById(level.id + 1);

            if(higherLevel === null) {
                higherLevel = PUNISHMENT_LEVEL.EASY;
            }

            sendDebugMessage('Trying level ' + higherLevel + ' for punishment since ' + level + ' did not offer any punishments available');

            level = higherLevel;
        }*/


        const levelPath = getPunishmentTypeCategoryPath(level);


        if (getFile(getPersonalityPath() + PATH_SEPARATOR + levelPath).exists()) {
            availableFiles = getScriptFilesInFolder(levelPath + PATH_SEPARATOR);
        } else {
            availableFiles = [];
        }

        let anyFiles = getScriptFilesInFolder('Dungeon' + PATH_SEPARATOR + 'Punishments' + PATH_SEPARATOR + 'Any' + PATH_SEPARATOR);

        for (let x = 0; x < anyFiles.length; x++) {
            availableFiles.push(anyFiles[x]);
        }

        shuffle(availableFiles);
    }


    //We need to set it to the object so we can reuse it later on
    setTempVar('lastPunishmentLevel', level);

    //Keep track of how many times we tried to find a module in a category since last decide punishment call
    incrementTempVar('findPunishmentTries', 1, 0);

    if (availableFiles !== undefined) {
        if (availableFiles.length === 0) {
            availableFiles = undefined;

            let higherLevel = getPunishmentLevelById(level.id + 1);

            if (higherLevel === null) {
                higherLevel = PUNISHMENT_LEVEL.EASY;
            }

            PUNISHMENT_CURRENT_LEVEL = higherLevel;

            sendDebugMessage('Trying level ' + higherLevel.id + ' for punishment since ' + level.id + ' did not offer any punishments available');

            //Try again with a different level
            runPunishment(higherLevel);
            return;
        }

        sendDebugMessage('Have ' + availableFiles.length + ' available punishments for level ' + level.id);
        let file = availableFiles.pop();
        let path = getRelativePersonalityFilePath(file);
        sendDebugMessage('Trying to run ' + path);
        run(path);
    }

    //run(paths[randomInteger(0, paths.length - 1)]);
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
        sendDebugMessage('Punishment was in today\'s history');
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