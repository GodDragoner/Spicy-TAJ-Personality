{
    let bodyPart = getRandomBodyPartForEStim();

    //No CBT, no E Stim or no available body part found
    if (getCBTLimit() != LIMIT_ASKED_YES || !E_STIM_TOY.hasToy() || bodyPart === null) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.E_STIM)) {
        sendMessage('I think now\'s a great time for some e-stim don\'t you think? %Grin%');

        if (E_STIM_TOY.fetchToy()) {
            //QUALITY: Used multiple times. Diversity
            sendMessage('Go ahead and ready it up...');
            sendMessage('Tell me when you are done %SlaveName%');
            waitForDone();
            let game = randomInteger(0, 2);

            let toysAttached = attachEStimToBodyPart(bodyPart);

            let prevChastity = isInChastity();

            //This means the sub was unable to fetch some stuff for some reason
            if (toysAttached.length === 0) {
                sendMessage('I guess you can put your e-stim device aside again %EmoteSad%');
                runModuleCategory('Pain');
            } else {
                //This toy is always attached
                toysAttached.push(E_STIM_TOY);

                setEstimToysOn(toysAttached, true, prevChastity);

                //Let declaration does not work in switch so we use if
                if (game === 0) {
                    startMissingCardMemory(GAME_TYPE.GAME_E_STIM);
                } else if (game === 1 || game === 2) {
                    let painLevel = PAIN_LEVEL_LOW;

                    //We only want a different pain than low level for game 1 (not game 2)
                    if(game === 1) {
                        if (feelsLikePunishingSlave()) {
                            painLevel = random(PAIN_LEVEL_MEDIUM, PAIN_LEVEL_HIGH);
                        } else {
                            painLevel = random(PAIN_LEVEL_LOW, PAIN_LEVEL_MEDIUM);
                        }
                    }

                    let mode = getRandomPainEStimMode(painLevel);
                    let level = mode.getPainLevel(painLevel);
                    let time = getCornerTime(PAIN_LEVEL_HIGH*2 - painLevel + 1);

                    if(game === 1) {
                        let askForIncrease = level < E_STIM_TOY.getMaxLevel() && painLevel === PAIN_LEVEL_HIGH && isChance(20);

                        //Means we aren't highest level yet and we could decide to go higher half time in
                        let multipleSteps = !askForIncrease && isChance(50);

                        if(askForIncrease || multipleSteps) {
                            //Half time
                            time = Math.round(time/2);
                        }

                        mode.enableMode();
                        mode.enableLevel(level);
                        sendMessage('Tell me when you are done');
                        waitForDone();

                        sendMessage('Now I\'m putting on a slideshow for you');
                        sendMessage('Enjoy %Grin%');

                        playSlideshow(time, 15, 'TEASE');

                        //Maybe push one higher?
                        if(askForIncrease) {
                            askForIncreaseOfEstimLevel(mode, level);

                            sendMessage('Back to the slideshow %Grin%');

                            //We halfed the time before so we can continue now
                            playSlideshow(time, 15, 'TEASE');
                        } else if(multipleSteps) {
                            sendMessage('%SlaveName%');
                            mode.enableLevel(level + 1);

                            sendMessage('Back to the slideshow %Grin%');

                            //We halfed the time before so we can continue now
                            playSlideshow(time, 15, 'TEASE');
                        }
                    }
                    //Estim ladder all the way up to highest pain level
                    else if(game === 2) {
                        mode.enableMode();
                        mode.enableLevel(level);
                        sendMessage('Tell me when you are done');
                        waitForDone();

                        sendMessage('Now I\'m putting on a slideshow for you');
                        sendMessage('Enjoy %Grin%');

                        //How many iterations we'd need to go all the way up
                        let differenceLowHigh = (mode.getPainLevel(PAIN_LEVEL_HIGH) - mode.getPainLevel(PAIN_LEVEL_LOW));
                        time = Math.ceil(time/ differenceLowHigh);

                        //NOTE: ++x so we start with an increased x
                        for(let x = 1; x <= differenceLowHigh + 1; x++) {
                            //We halfed the time before so we can continue now
                            playSlideshow(time, 15, 'TEASE');

                            if(x < differenceLowHigh + 1) {
                                sendMessage('%SlaveName%');
                                mode.enableLevel(level + x);
                                sendMessage('Back to the slideshow %Grin%');
                            }
                        }

                        //Ask for potential pain level increase for that mode
                        if(level < E_STIM_TOY.getMaxLevel() && isChance(20)) {
                            askForIncreaseOfEstimLevel(mode, level);

                            sendMessage('Back to the slideshow %Grin%');

                            //We halfed the time before so we can continue now
                            playSlideshow(time, 15, 'TEASE');
                        }
                    }
                }
            }

            setEstimToysOn(toysAttached, false, prevChastity);

            sendMessage('You can detach the e-stim toy and the utilities for now and put them aside');
        }
    } else {
        sendMessage("I guess I have to think of something different to play with your balls");

        run('Session/Modules/Pain/Dynamic/BallBusting.js');
    }
}

function askForIncreaseOfEstimLevel(mode, level) {
    sendMessage('%SlaveName%');

    if(sendYesOrNoQuestion('Do you think you could even go one level higher for me? %Grin%')) {
        changeMeritLow(false);
        sendGoodForMe();
        mode.enableLevel(level + 1);

        //Increase all factors by one
        mode.setPainLevel(PAIN_LEVEL_LOW, mode.getPainLevel(PAIN_LEVEL_LOW) + 1);
        mode.setPainLevel(PAIN_LEVEL_MEDIUM, mode.getPainLevel(PAIN_LEVEL_MEDIUM) + 1);
        mode.setPainLevel(PAIN_LEVEL_HIGH, level + 1);
        return true;
    } else {
        changeMeritLow(true);
        sendMessage('I see %EmoteSad%');
        return false;
    }
}