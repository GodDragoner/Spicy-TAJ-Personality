let PUNISHMENT_TRANSITION_HANDLER = null;

//Amounts of punishments done in the current section
let PUNISHMENTS_DONE = 0;

//Used to decide what punishment we need to do and when to stop
let PUNISHMENT_SCORE = 0;

let PUNISHMENT_CURRENT_LEVEL = 'null';
let PUNISHMENT_OVERALL_LEVEL = 'null';

const PUNISHMENT_LEVEL_EASY = {name: 'easy', id: 0};
const PUNISHMENT_LEVEL_MEDIUM =  {name: 'medium', id: 1};
const PUNISHMENT_LEVEL_HARD =  {name: 'hard', id: 2};
const PUNISHMENT_LEVEL_EXTREME =  {name: 'extreme', id: 3};

function isOngoingPunishment() {
    return getVar(VARIABLE_PUNISHMENT_ACTIVE, false);
}

function startPunishmentSession(overallLevel) {
    setVar(VARIABLE_PUNISHMENT_ACTIVE, true);
    PUNISHMENT_OVERALL_LEVEL = overallLevel;

    switch(getVar(VARIABLE_PUNISHMENT_PUNISHER)) {
        case 1 :
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
        //TODO: Punish
    }

    PUNISHMENT_SCORE = (overallLevel.id + 1)*3;

    while (PUNISHMENT_SCORE > 0) {
        let level = null;

        //First punishment is always gonna be easy
        if(PUNISHMENTS_DONE === 0) {
            level = PUNISHMENT_LEVEL_EASY;
        } else {
            let levels = [];

            switch(overallLevel) {
                case PUNISHMENT_LEVEL_EASY:
                    levels.push(PUNISHMENT_LEVEL_EASY);
                    break;
                case PUNISHMENT_LEVEL_MEDIUM:
                    levels.push(PUNISHMENT_LEVEL_EASY);
                    levels.push(overallLevel);
                    break;
                case PUNISHMENT_LEVEL_HARD:
                    levels.push(PUNISHMENT_LEVEL_MEDIUM);
                    levels.push(overallLevel);
                    break;
                case PUNISHMENT_LEVEL_EXTREME:
                    levels.push(PUNISHMENT_LEVEL_HARD);
                    levels.push(overallLevel);
                    break;
            }

            level = levels[randomInteger(0, levels.length - 1)];
        }

        PUNISHMENT_CURRENT_LEVEL = level;

        interactWithRandomToys();

        runPunishment(PUNISHMENT_CURRENT_LEVEL);
        subtractPunishmentPointsForPunishment(PUNISHMENT_CURRENT_LEVEL);
    }

    //TODO: More variety
    sendMessage('I think that should be sufficient for now %Grin%');
    sendMessage('You hopefully learned your lesson %SlaveName%');

    setSender(1);
    setVar(VARIABLE_PUNISHMENT_ACTIVE, false);
}

function subtractPunishmentPointsForPunishment(PUNISHMENT_LEVEL) {
    switch(PUNISHMENT_LEVEL) {
        case PUNISHMENT_LEVEL_EASY:
            addPunishmentPoints(-randomInteger(40, 70));
            break;
        case PUNISHMENT_LEVEL_MEDIUM:
            addPunishmentPoints(-randomInteger(60, 100));
            break;
        case PUNISHMENT_LEVEL_HARD:
            addPunishmentPoints(-randomInteger(90, 140));
            break;
        case PUNISHMENT_LEVEL_EXTREME:
            addPunishmentPoints(-randomInteger(140, 200));
            break;
    }
}


function setPunishmentTransitionHandler(handler) {
    PUNISHMENT_TRANSITION_HANDLER = handler;
}

function runPunishment(level) {
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

    punishmentId = punishmentId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (PUNISHMENT_HISTORY.isInTodaysHistory(punishmentId)) {
        maxTries = 30;
        minModulesSinceRun = 10;
    }

    if (PUNISHMENT_HISTORY.isInHistory(punishmentId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (PUNISHMENT_HISTORY.getModulesSinceHistory(punishmentId) < minModulesSinceRun) {
            let tries = getVar('findPunishmentTries');
            if (tries < maxTries / 2) {
                //Try to run from same level
                runPunishment(level);
                return false;
            } else if (tries < maxTries) {
                //Try to find a different module
                chooseNextPunishment();
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
        }
    }

    PUNISHMENT_HISTORY.addHistoryRun(punishmentId);

    //Reduce the score by the set amount
    switch (level) {
        case PUNISHMENT_LEVEL_EASY:
            PUNISHMENT_SCORE -= 1;
            break;
        case PUNISHMENT_LEVEL_MEDIUM:
            PUNISHMENT_SCORE -= 2;
            break;
        case PUNISHMENT_LEVEL_HARD:
            PUNISHMENT_SCORE -= 3;
            break;
        case PUNISHMENT_LEVEL_EXTREME:
            PUNISHMENT_SCORE -= 5;
            break;
    }

    PUNISHMENTS_DONE++;

    //Handle transition
    if (PUNISHMENT_TRANSITION_HANDLER != null && PUNISHMENT_TRANSITION_HANDLER != undefined) {
        PUNISHMENT_TRANSITION_HANDLER.handleTransition(punishmentCategory, level);
    }

    return true;
}

function getPunishmentTypeCategoryPath(level) {
    return 'Dungeon' + PATH_SEPARATOR + 'Punishments' + PATH_SEPARATOR + capitalize(level.name);
}