{
    //End session
    while (!getDate(VARIABLE_CURRENT_SESSION_DATE).clone().addMinute(getVar(VARIABLE_DEVOTION)).hasPassed()) {
        const moduleChance = 50;
        let teaseModuleChance = moduleChance;
        const teaseModuleAdditions = [
            //Personality strictness 1
            teaseModuleChance / 2,
            teaseModuleChance / 3,
            0,
            -teaseModuleChance / 4,
            -teaseModuleChance / 3,
            //Personality strictness 2
            teaseModuleChance / 3,
            teaseModuleChance / 4,
            0,
            -teaseModuleChance / 3,
            -teaseModuleChance / 2,
            //Personality strictness 3
            teaseModuleChance / 4,
            teaseModuleChance / 5,
            0,
            -(teaseModuleChance - teaseModuleChance / 4),
            -(teaseModuleChance - teaseModuleChance / 5)
        ];

        let index = 0;
        if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
            index += 5;
        } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
            index += 10;
        }

        if (getMood() == PLEASED_MOOD) {
            index += 1;
        } else if (getMood() == NEUTRAL_MOOD) {
            index += 2;
        } else if (getMood() == ANNOYED_MOOD) {
            index += 3;
        } else if (getMood() == VERY_ANNOYED_MOOD) {
            index += 4;
        }

        //Now apply the changes
        teaseModuleChance += teaseModuleAdditions[index];

        if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 250) {
            teaseModuleChance -= 10;
        }

        if (getVar(VARIABLE_ANGER) > 25) {
            teaseModuleChance -= 10;
        }


        //Not used atm.
        let sissyModuleChance = 0;

        let painModuleChance = moduleChance;
        let slaveModuleChance = moduleChance;
        let humiliationModuleChance = moduleChance;

        const max = teaseModuleChance + sissyModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance;
        const moduleIndicator = randomInteger(0, max);

        setTempVar('findModuleTries', 0);

        if (moduleIndicator < teaseModuleChance) {
            runModuleCategory(CATEGORY_TEASE);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance) {
            runModuleCategory(CATEGORY_SISSY);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance) {
            runModuleCategory(CATEGORY_PAIN);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance) {
            runModuleCategory(CATEGORY_SLAVE);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance) {
            runModuleCategory(CATEGORY_HUMILATION);
        }

        run("Session/Link/Module/DecideLink.js");
    }

    run('Session/End/DecideEnd.js')
}

function runModuleCategory(category) {
    setTempVar('lastModuleCategory', category);
    const neutralPath = getModuleTypeCategoryPath(category, 'Neutral');
    const noChastityPath = getModuleTypeCategoryPath(category, 'NoChastity');
    const dynamicPath = getModuleTypeCategoryPath(category, 'Dynamic');

    const paths = [];

    if (getFile(getPersonalityPath() + PATH_SEPERATOR + neutralPath).exists()) {
        paths.push(neutralPath + PATH_SEPERATOR + "*.js");
    }

    if (getFile(getPersonalityPath() + PATH_SEPERATOR + noChastityPath).exists() && !isInChastity()) {
        paths.push(noChastityPath + PATH_SEPERATOR + "*.js");
    }

    if (getFile(getPersonalityPath() + PATH_SEPERATOR + dynamicPath).exists()) {
        paths.push(dynamicPath + PATH_SEPERATOR + "*.js");
    }

    //Keep track of how many times we tried to find a module in a category since last decide Moudle call
    setTempVar('findModuleTries', getVar('findModuleTries', 0) + 1);

    run(paths[randomInteger(0, paths.length - 1)]);
}

function tryRunModuleFetchId(minModulesSinceRun = 3) {
    return tryRunModule(getCurrentScriptName(), getVar('lastModuleCategory'), minModulesSinceRun);
}


function tryRunModule(moduleId, category, minModulesSinceRun = 3) {
    let maxTries = 10;

    moduleId = moduleId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (MODULE_HISTORY.isInTodaysHistory(moduleId)) {
        maxTries = 30;
    }

    if (MODULE_HISTORY.isInHistory(moduleId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (MODULE_HISTORY.getModulesSinceHistory(moduleId) < minModulesSinceRun) {
            if (getVar('findModuleTries') < maxTries / 2) {
                //Try to run from same category
                runModuleCategory(category);
                return false;
            } else if (getVar('findModuleTries') < maxTries) {
                //Try to find a different module
                run("Session/Modules/DecideModule.js");
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
        }
    }

    MODULE_HISTORY.addHistoryRun(moduleId);
    return true;
}

function getModuleTypeCategoryPath(category, type) {
    return 'Session' + PATH_SEPERATOR + 'Modules' + PATH_SEPERATOR + category + PATH_SEPERATOR + type;
}



