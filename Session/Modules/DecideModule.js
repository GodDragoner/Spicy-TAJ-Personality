//TODO: Pain Modules: Sounding, Electric Kit

{
    //End session
    while (!getDate(VARIABLE_CURRENT_SESSION_DATE).clone().addMinute(getVar(VARIABLE_DEVOTION)).hasPassed()) {

        //Apply random toys
        interactWithRandomToys();

        //TODO: punishment distraction

        let strokeFrequency = getVar(VARIABLE_STROKE_MODULE_PAUSE_FREQUENCY, 0);

        let minTimePassed = 0;

        //Dom choose
        if(strokeFrequency == 0) {
            const mood = getMood();
            const strictness = ACTIVE_PERSONALITY_STRICTNESS;

            minTimePassed = getVar(VARIABLE_DEVOTION)/Math.min(4, Math.max(1, 5 - strictness - mood - 1));
        } else {
            //Other frequency
            getVar(VARIABLE_DEVOTION)/(strokeFrequency + 1);
        }

        sendDebugMessage('Min time passed: ' + minTimePassed);

        //Some stroking sometimes
        if((!isVar('lastStrokingPause') || getVar('lastStrokingPause').addMinute(minTimePassed).hasPassed())) {
            if(!isInChastity()) {
                let mood = getMood() + 1;
                let strictness = ACTIVE_PERSONALITY_STRICTNESS + 1;
                let minutesToStroke = Math.round((180 - mood*mood*strictness)/60);

                sendDebugMessage('Start of stroking interval');

                startStrokeInterval(randomInteger(Math.max(1, minutesToStroke - 1), minutesToStroke));

                sendDebugMessage('End of stroking interval');
            } else {
                let mood = getMood() + 1;
                let strictness = ACTIVE_PERSONALITY_STRICTNESS + 1;
                let iterationsToTease = 26 - mood*strictness*2;

                sendDebugMessage('Start of teasing interval');

                for (let x = 0; x < randomInteger(Math.round(iterationsToTease/2), iterationsToTease); x++) {
                    run("Stroking/Taunt/Chastity/BasicChastityTaunts.js");
                    sleep(5);
                }

                sendDebugMessage('End of teasing interval');
            }

            setDate('lastStrokingPause');
        }

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

        //Don't go below zero
        teaseModuleChance = Math.max(teaseModuleChance, 0);


        //Not used atm.
        let sissyModuleChance = 0;

        let painModuleChance = moduleChance;
        let slaveModuleChance = moduleChance;
        let humiliationModuleChance = moduleChance;

        const max = teaseModuleChance + sissyModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance;
        const moduleIndicator = randomInteger(0, max);

        clearPreviousModuleHistory();
        setTempVar('findModuleTries', 0);

        if (moduleIndicator < teaseModuleChance) {
            runModuleCategory(CATEGORY_TEASE);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance) {
            runModuleCategory(CATEGORY_SISSY);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance) {
            //Increase pain limit occasionally
            let increasedPainTolerance = increasePainTolerance();

            runModuleCategory(CATEGORY_PAIN);

            if(increasedPainTolerance) {
                askForPainToleranceIncrease();
            }
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance) {
            runModuleCategory(CATEGORY_SLAVE);
        } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance) {
            runModuleCategory(CATEGORY_HUMILATION);
        }

        sendDebugMessage('Running link');
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

    if (getFile(getPersonalityPath() + PATH_SEPARATOR + neutralPath).exists()) {
        paths.push(neutralPath + PATH_SEPARATOR + "*.js");
    }

    if (getFile(getPersonalityPath() + PATH_SEPARATOR + noChastityPath).exists() && !isInChastity()) {
        paths.push(noChastityPath + PATH_SEPARATOR + "*.js");
    }

    if (getFile(getPersonalityPath() + PATH_SEPARATOR + dynamicPath).exists()) {
        paths.push(dynamicPath + PATH_SEPARATOR + "*.js");
    }

    //Keep track of how many times we tried to find a module in a category since last decide Moudle call
    setTempVar('findModuleTries', getVar('findModuleTries', 0) + 1);

    run(paths[randomInteger(0, paths.length - 1)]);
}

function getDefaultModulesSinceRun() {
    return 3;
}

function tryRunModuleFetchId(minModulesSinceRun = getDefaultModulesSinceRun(), subCategories = MODULE_UNKNOWN) {
    return tryRunModule(getCurrentScriptName(), getVar('lastModuleCategory'), minModulesSinceRun, subCategories);
}

function tryRunModule(moduleId, category, minModulesSinceRun = 3, subCategories) {
    let maxTries = 10;

    //TODO: Dunno if this fully works yet
    //Check if that module category was in the previous module so we get some variation
    let categoryInPreviousModule = subCategories != MODULE_UNKNOWN && hasPreviousModuleHadCategory(subCategories);

    moduleId = moduleId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (MODULE_HISTORY.isInTodaysHistory(moduleId)) {
        maxTries = 30;
        minModulesSinceRun = 10;
    }

    if (MODULE_HISTORY.isInHistory(moduleId) || categoryInPreviousModule) {
        //Check whether not enough modules have passed since last time we ran this module
        if (MODULE_HISTORY.getModulesSinceHistory(moduleId) < minModulesSinceRun  || categoryInPreviousModule) {
            let tries = getVar('findModuleTries');
            if (tries < maxTries / 2) {
                //Try to run from same category
                runModuleCategory(category);
                return false;
            } else if (tries < maxTries) {
                //Try to find a different module
                run("Session/Modules/DecideModule.js");
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
        }
    }

    MODULE_HISTORY.addHistoryRun(moduleId);
    registerCurrentModuleCategory(subCategories);

    return true;
}

function getModuleTypeCategoryPath(category, type) {
    return 'Session' + PATH_SEPARATOR + 'Modules' + PATH_SEPARATOR + category + PATH_SEPARATOR + type;
}



