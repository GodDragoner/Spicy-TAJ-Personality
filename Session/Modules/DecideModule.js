//TODO: Pain Modules: Sounding

{
    let moduleCounter = 0;

    //End session
    while (!hasSessionTimePassed(getVar(VARIABLE.DEVOTION) + getVar(VARIABLE.PROLONGED_SESSION_TIME, 0))) {
        checkInteraction();

        //Apply random toys
        interactWithRandomToys();

        //TODO: punishment distraction

        let strokeFrequency = getVar(VARIABLE.STROKE_MODULE_PAUSE_FREQUENCY, 0);

        let minTimePassed = 0;

        //Dom choose
        if(strokeFrequency == 0) {
            const mood = getMood();
            const strictness = getStrictnessForCharacter();

            minTimePassed = getVar(VARIABLE.DEVOTION)/Math.min(4, Math.max(1, 5 - strictness - mood - 1));
        } else {
            //Other frequency
            minTimePassed = getVar(VARIABLE.DEVOTION)/(strokeFrequency + 1);
        }

        //testModules();

        sendDebugMessage('Min time between stroking passed: ' + minTimePassed);

        //Some stroking sometimes
        if((!isVar('lastStrokingPause') || getVar('lastStrokingPause').addMinute(minTimePassed).hasPassed())) {
            if(!isInChastity()) {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let minutesToStroke = Math.round((180 - mood*mood*strictness)/60);

                sendDebugMessage('Start of stroking interval for ' + minutesToStroke);

                startStrokeInterval(randomInteger(Math.max(1, minutesToStroke - 1), minutesToStroke));

                sendDebugMessage('End of stroking interval');
            } else if(!feelsEvil() || !readyForVibratingCage()) {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let iterationsToTease = 26 - mood*strictness*2;
                let actualLoop = randomInteger(Math.round(iterationsToTease/2), iterationsToTease);

                sendDebugMessage('Start of teasing interval for ' + iterationsToTease + ' iterations');

                for (let x = 0; x < actualLoop; x++) {
                    run("Stroking/Taunt/Chastity/BasicChastityTaunts.js");
                    sleep(5);
                }

                sendDebugMessage('End of teasing interval');
            }
            //Evil vibe teasing while in cage
            else {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let minutesToVibe = Math.round((180 - mood*mood*strictness)/60);

                sendDebugMessage('Start of vibe interval for ' + minutesToVibe);

                startVibratingCageInterval(randomInteger(Math.max(1, minutesToVibe - 1), minutesToVibe)*60);

                sendDebugMessage('End of vibe interval');
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
        if (getStrictnessForCharacter() == 1) {
            index += 5;
        } else if (getStrictnessForCharacter() == 2) {
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

        if (getVar(VARIABLE.PUNISHMENT_POINTS) >= 250) {
            teaseModuleChance -= 10;
        }

        if (getVar(VARIABLE.ANGER) > 25) {
            teaseModuleChance -= 10;
        }

        //Don't go below zero
        teaseModuleChance = Math.max(teaseModuleChance, 0);


        //Not used atm.
        let sissyModuleChance = 0;

        //No pain modules if pain is hard limit
        let painModuleChance = PAIN_LIMIT.isHardLimit()? moduleChance : 0;
        let slaveModuleChance = moduleChance;
        let humiliationModuleChance = moduleChance;

        if(!HUMILIATION_LIMIT.isAllowed()) {
            humiliationModuleChance = 0;
        }

        if(!PAIN_LIMIT.isAllowed()) {
            painModuleChance = 0;
        }

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

        sendDebugMessage('Trying to run link');
        run("Session/Link/Module/DecideLink.js");

        moduleCounter++;

        //Unlock later chastity
        if(isInChastity() && getVar(VARIABLE.CHASTITY_REMOVE_LATER, false)) {
            //Has too much time passed or have we spend enough modules?
            if(isInChastity(moduleChance*40) || hasSessionTimePassed(Math.round(getVar(VARIABLE.DEVOTION)/1.5))) {
                unlockChastityCage();
                delVar(VARIABLE.CHASTITY_REMOVE_LATER);
            }
        }
    }

    //Maybe prolong session if we haven't already
    if(wouldLikeToProlongSession() && !isVar(VARIABLE.PROLONGED_SESSION_TIME)) {
        //QUALITY: More diverse chat
        sendMessage('Looks like our time is up %SlaveName% %EmoteSad%');
        sendMessage('I am feeling like still playing for a bit though %Grin%');
        if(sendYesOrNoQuestion('Would you be up for a longer session today?')) {
            sendMessage('%Good%');
            changeMeritLow(false);
            //Add another 10 to 20 minutes
            setTempVar(VARIABLE.PROLONGED_SESSION_TIME, randomInteger(10, 20));
            run("Session/Modules/DecideModule.js");
        } else {
            sendMessage('I can understand that you might have something to attend to');
            changeMeritMedium(true);
            sendMessage('It\'s okay for me');
            run('Session/End/DecideEnd.js')
        }
    } else {
        run('Session/End/DecideEnd.js')
    }
}

function runModuleCategory(category) {
    setTempVar('lastModuleCategory', category);

    //Infinite loop?
    if(getVar('findModuleTries', 0) > 20) {
        if(category !== CATEGORY_TEASE) {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying tease now');
            category = CATEGORY_TEASE;
        } else {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying slave now');
            category = CATEGORY_SLAVE;
        }
    }

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

    //Keep track of how many times we tried to find a module in a category since last decide Module call
    setTempVar('findModuleTries', getVar('findModuleTries', 0) + 1);

    run(paths[randomInteger(0, paths.length - 1)]);
}

function getDefaultModulesSinceRun() {
    return 3;
}

function tryRunModuleFetchId(minModulesSinceRun = getDefaultModulesSinceRun(), subCategories = MODULE.UNKNOWN) {
    return tryRunModule(getCurrentScriptName(), getVar('lastModuleCategory'), minModulesSinceRun, subCategories);
}

function tryRunModule(moduleId, category, minModulesSinceRun = 3, subCategories) {
    let maxTries = 10;

    //Check if that module category was in the previous module so we get some variation
    let categoryInPreviousModule = subCategories != MODULE.UNKNOWN && hasPreviousModuleHadCategory(subCategories);

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

function testModules() {
    sendDebugMessage('Testing given modules');
    run("Session/Modules/Tease/NoChastity/EnduranceStrokes.js");
}

function getModuleTypeCategoryPath(category, type) {
    return 'Session' + PATH_SEPARATOR + 'Modules' + PATH_SEPARATOR + category + PATH_SEPARATOR + type;
}



