{
    let bodyPart = getRandomBodyPartForEStim();

    //No CBT, no E Stim or no available body part found
    if (getCBTLimit() != LIMIT_ASKED_YES || !E_STIM_TOY.hasToy() || bodyPart === null) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.E_STIM)) {
            if (E_STIM_TOY.fetchToy()) {
                sendMessage('Go ahead and ready it up...');
                sendMessage('Tell me when you are done %SlaveName%');
                waitForDone();

                let toysAttached = attachEStimToBodyPart(bodyPart);

                //This toy is always attached
                toysAttached.push(E_STIM_TOY);

                //Enable all toys
                for (let x = 0; x < toysAttached.length; x++) {
                    toysAttached[x].setToyOn(true);
                }

                let painLevel = PAIN_LEVEL_LOW;
                let mood = getMood();

                if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.MEDIUM) {
                    painLevel = PAIN_LEVEL_MEDIUM;
                } else if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.HARD) {
                    painLevel = random(PAIN_LEVEL_MEDIUM, PAIN_LEVEL_HIGH);
                } else if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EXTREME) {
                    painLevel = PAIN_LEVEL_HIGH;
                }

                let mode = getRandomPainEStimMode(painLevel);
                let level = mode.getPainLevel(painLevel);

                //Increase by one if we are extreme and want to punish
                if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EXTREME && feelsLikePunishingSlave() && level < E_STIM_TOY.getMaxLevel()) {
                    sendMessage('You know what?');
                    sendMessage('I want you to suffer because you freaking deserve it %SlaveName%');
                    sendMessage('So I am this time going to break you and your old pathetic limits');
                    level++;
                }

                let time = getCornerTime(PUNISHMENT_CURRENT_LEVEL.id + 1);

                let halfTimeBreak = isChance(50);

                if(halfTimeBreak) {
                    //Half time
                    time = Math.round(time/2);
                }

                mode.enableMode();
                mode.enableLevel(level);
                sendMessage('Tell me when you are done');
                waitForDone();

                sendMessage('Now I\'m putting on a slideshow for you');
                sendMessage('Enjoy %Grin%');

                sendDebugMessage('Going for ' + time + ' seconds of e-stim punishment')
                playSlideshow(time, 15, 'TEASE');

                //Maybe push one higher?
                if(halfTimeBreak) {
                    sendMessage('%SlaveName% I want you to pause the e-stim device');
                    sendMessage('Let\'s distract you with a different kind of pain %Grin%');

                    smallCBTPunishment();

                    sendMessage('Now back to where we were before %Grin%');
                    mode.enableMode();
                    mode.enableLevel(level);
                    sendMessage('Tell me when you are done');
                    waitForDone();

                    sendMessage('Back to the slideshow %Grin%');

                    //We halfed the time before so we can continue now
                    playSlideshow(time, 15, 'TEASE');
                }

                //Disable all toys
                for (let x = 0; x < toysAttached.length; x++) {
                    toysAttached[x].setToyOn(false);
                }

                sendMessage('You can detach the e-stim toy and the utilities for now and put them aside');

                setPunishmentTransitionHandler({
                    handleTransition: function (nextCategory, nextLevel) {
                        //First punishment
                        if (PUNISHMENTS_DONE === 1) {
                            sendMessage('Starting off with pain might make it easier for you later %Grin%');
                        } else {
                            sendMessage('I hope %MyYour% %Balls% and %Cock% do now understand who they belong to and internalized their lesson %Grin%');
                        }
                    }
                });
            } else {
                sendMessage("I guess I have to think of something different to play with");
                runPunishment(PUNISHMENT_CURRENT_LEVEL);
            }
        }
    }
}