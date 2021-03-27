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
        if (strokeFrequency == 0) {
            const mood = getMood();
            const strictness = getStrictnessForCharacter();

            minTimePassed = getVar(VARIABLE.DEVOTION) / Math.min(4, Math.max(1, 5 - strictness - mood - 1));
        } else {
            //Other frequency
            minTimePassed = getVar(VARIABLE.DEVOTION) / (strokeFrequency + 1);
        }

        //testModules();

        sendDebugMessage('Min time between stroking passed: ' + minTimePassed);

        //Some stroking sometimes
        if ((!isVar('lastStrokingPause') || getVar('lastStrokingPause').addMinute(minTimePassed).hasPassed())) {
            if (!isInChastity()) {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let minutesToStroke = Math.round((180 - mood * mood * strictness) / 60);

                sendDebugMessage('Start of stroking interval for ' + minutesToStroke);

                startStrokeInterval(randomInteger(Math.max(1, minutesToStroke - 1), minutesToStroke));

                sendDebugMessage('End of stroking interval');
            } else if (!feelsEvil() || !readyForVibratingCage()) {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let iterationsToTease = 26 - mood * strictness * 2;
                let actualLoop = randomInteger(Math.round(iterationsToTease / 2), iterationsToTease);

                //Times 5 since wait time per taunt is currently 5
                startTeaseTauntInterval(actualLoop * 5);
            }
            //Evil vibe teasing while in cage
            else {
                let mood = getMood() + 1;
                let strictness = getStrictnessForCharacter() + 1;
                let minutesToVibe = Math.round((180 - mood * mood * strictness) / 60);

                sendDebugMessage('Start of vibe interval for ' + minutesToVibe);

                startVibratingCageInterval(randomInteger(Math.max(1, minutesToVibe - 1), minutesToVibe) * 60);

                sendDebugMessage('End of vibe interval');
            }

            setDate('lastStrokingPause');
        }

        let skipModules = false;
        if (moduleCounter === 0) {
            let specialSession = chooseSpecialSession();

            if (specialSession !== undefined) {
                startSpecialSession(specialSession);

                //Skip modules if time is running low and we need to follow up our special session
                skipModules = hasSessionTimePassed(getVar(VARIABLE.DEVOTION) / 2);
            }
        } else {
            //Continue special session if we've had some modules in between or half session time already passed
            if (isSpecialSession() && (moduleCounter > 0 && isChance(moduleCounter * 45) || hasSessionTimePassed(getVar(VARIABLE.DEVOTION) / 2))) {
                continueSpecialSession();
                skipModules = true;
            }
        }

        if(!skipModules) {
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
            let painModuleChance = PAIN_LIMIT.isAllowed() ? moduleChance : 0;
            let slaveModuleChance = moduleChance;
            let humiliationModuleChance = moduleChance;

            if (!HUMILIATION_LIMIT.isAllowed()) {
                humiliationModuleChance = 0;
            }

            const max = teaseModuleChance + sissyModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance;
            const moduleIndicator = randomInteger(0, max);

            sendDebugMessage('Choosing module based on the following chances:');
            sendDebugMessage('Tease: ' + teaseModuleChance);
            sendDebugMessage('Sissy: ' + sissyModuleChance);
            sendDebugMessage('Pain: ' + painModuleChance);
            sendDebugMessage('Slave: ' + slaveModuleChance);
            sendDebugMessage('Humiliation: ' + humiliationModuleChance);
            sendDebugMessage('Selector is ' + moduleIndicator);

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

                if (increasedPainTolerance) {
                    askForPainToleranceIncrease();
                }
            } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance) {
                runModuleCategory(CATEGORY_SLAVE);
            } else if (moduleIndicator < sissyModuleChance + teaseModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance) {
                runModuleCategory(CATEGORY_HUMILATION);
            }
        }

        sendDebugMessage('Trying to run link');
        run("Session/Link/Module/DecideLink.js");

        moduleCounter++;

        //Unlock later chastity
        if (isInChastity() && getVar(VARIABLE.CHASTITY_REMOVE_LATER, false)) {
            //Has too much time passed or have we spend enough modules?
            if (isInChastity(moduleCounter * 40) || hasSessionTimePassed(Math.round(getVar(VARIABLE.DEVOTION) / 1.5))) {
                unlockChastityCage();
                delVar(VARIABLE.CHASTITY_REMOVE_LATER);
            }
        }
    }

    //Maybe prolong session if we haven't already
    if (!isVar(VARIABLE.PROLONGED_SESSION_TIME) && wouldLikeToProlongSession()) {
        //QUALITY: More diverse chat
        sendMessage('Looks like our time is up %SlaveName% %EmoteSad%');
        sendMessage('I am feeling like still playing for a bit though %Grin%');
        if (sendYesOrNoQuestion('Would you be up for a longer session today?')) {
            sendMessage('%Good%');
            changeMeritLow(false);
            //Add another 10 to 20 minutes
            setTempVar(VARIABLE.PROLONGED_SESSION_TIME, randomInteger(10, 20));
            setDate(VARIABLE.LAST_PROLONGED_SESSION);
            run("Session/Modules/DecideModule.js");
        } else {
            sendMessage('I can understand that you might have something to attend to');
            changeMeritMedium(true);
            sendMessage('It\'s okay for me');
            run('Session/End/DecideEnd.js');
        }
    } else {
        run('Session/End/DecideEnd.js')
    }
}


