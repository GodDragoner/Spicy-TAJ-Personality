{
    let bodyPart = getRandomBodyPartForEStim();

    //No CBT, no E Stim or no available body part found
    if (getCBTLimit() != LIMIT_ASKED_YES || !E_STIM_TOY.hasToy() || bodyPart === null) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE_E_STIM)) {
        sendMessage('I think now\'s a great time for some e-stim don\'t you think? %Grin%');

        if (E_STIM_TOY.fetchToy()) {
            //QUALITY: Used multiple times. Diversity
            sendMessage('Go ahead and ready it up...');
            sendMessage('Tell me when you are done %SlaveName%');
            waitForDone();

            let locations = [];

            let mode = randomInteger(0, 1);
            let unableToFetch = false;

            let toysAttached = attachEStimToBodyPart(bodyPart);

            //This means the sub was unable to fetch some stuff for some reason
            if (toysAttached.length === 0) {
                sendMessage('I guess you can put your e-stim device aside again %EmoteSad%');
                runModuleCategory('Pain');
            } else {
                //This toy is always attached
                toysAttached.push(E_STIM_TOY);

                //Enable all toys
                for (let x = 0; x < toysAttached.length; x++) {
                    toysAttached[x].setToyOn(true);
                }

                //Let declaration does not work in switch so we use if
                if (mode === 0) {
                    startMissingCardMemory(E_STIM_TOY);
                } else if (mode === 1) {
                    //Enable all toys
                    for (let x = 0; x < toysAttached.length; x++) {
                        toysAttached[x].setToyOn(true);
                    }

                    let painLevel = PAIN_LEVEL_LOW;
                    let mood = getMood();

                    if (feelsLikePunishingSlave()) {
                        painLevel = random(PAIN_LEVEL_MEDIUM, PAIN_LEVEL_HIGH);
                    } else if (mood === NEUTRAL_MOOD) {
                        painLevel = random(PAIN_LEVEL_LOW, PAIN_LEVEL_MEDIUM);
                    }

                    let mode = getRandomPainEStimMode(painLevel);
                    let level = mode.getPainLevel(painLevel);
                    let time = getCornerTime();

                    let askForIncrease = level < E_STIM_TOY.getMaxLevel() && painLevel === PAIN_LEVEL_HIGH && isChance(20);

                    if(askForIncrease) {
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
                        sendMessage('%SlaveName%');

                        if(sendYesOrNoQuestion('Do you think you could go even one level higher for me? %Grin%')) {
                            changeMeritLow(false);
                            sendGoodForMe();
                            mode.enableLevel(level + 1);

                            //Increase all factors by one
                            mode.setPainLevel(PAIN_LEVEL_LOW, mode.getPainLevel(PAIN_LEVEL_LOW) + 1);
                            mode.setPainLevel(PAIN_LEVEL_MEDIUM, mode.getPainLevel(PAIN_LEVEL_MEDIUM) + 1);
                            mode.setPainLevel(PAIN_LEVEL_HIGH, level + 1);
                        } else {
                            changeMeritLow(true);
                            sendMessage('I see %EmoteSad%');
                        }

                        sendMessage('Back to the slideshow %Grin%');

                        //We halfed the time before so we can continue now
                        playSlideshow(time, 15, 'TEASE');
                    }
                }
            }

            //Disable all toys
            for (let x = 0; x < toysAttached.length; x++) {
                toysAttached[x].setToyOn(false);
            }

            sendMessage('You can detach the e-stim toy and the utilities for now and put them aside');
        }
    } else {
        sendMessage("I guess I have to think of something different to play with your balls");

        run('Session/Modules/Pain/Dynamic/BallBusting.js');
    }
}