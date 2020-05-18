function stopStrokingMessage() {

    if (isStroking()) {
        stopStroking();
    }

    let answers;

    //Block audio for cock vocabulary stuff
    setAudioBlocked(true);
    if (isInChastity()) {
        answers = [
            "Remove the vibrator from your cage",
            "Vibrator off",
            "That's enough, turn the vibrator off",
            "Remove the vibrator from your cage and turn it off",
            "And... stop",
            "Stop and remove the vibrator from your cage",
            "You should stop now",
            "You should turn off the vibrator now",
            "I want you to stop",
            "Remove the vibrator from the cage for me",
            "Take that vibrator away from the cage",
            "Stop and turn off the vibrator",
            "No more vibration, turn the vibrator off",
            "No more stimulation, just remove the vibrator from the cage",
            "Okay, stop",
            "Okay that's enough for now. You're going to squirt before I'm done with you."
        ];

        sendMessage(findRandomUnusedElement(answers, createHistory('stopStrokingChastity')), 0);
    } else {
        answers = [
            "Stop stroking",
            "Hands off",
            "That's enough, hands off",
            "Let go and stop stroking",
            "Imagine me backing off %MyYour% %Cock%, right now. Hands off",
            "That's enough, let go of %MyYour% %Cock%",
            "And... stop",
            "Stop and let go of %MyYour% %Cock%",
            "You should stop now",
            "You should let go of %MyYour% %Cock% now",
            "I want you to stop",
            "Stop stroking for me",
            "Take your hands off %MyYour% %Cock%",
            "Let go of %MyYour% %Cock%",
            "Stop and take your hands off %MyYour% %Cock%",
            "Quit stroking",
            "No more stroking, hands off",
            "No more stroking, just let go of %MyYour% %Cock%",
            "Okay, stop",
            "Okay that's enough for now. You're going to squirt before I'm done with you."
        ];

        sendMessage(findRandomUnusedElement(answers, createHistory('stopStroking')), 0);
    }

    setAudioBlocked(false);

    if (isChance(80) && !isInChastity()) {
        playSound("Audio/Spicy/Stroking/StopStroking/*.mp3");
    }
}

function readyForStroking() {
    if (hasClampsOnPenis() && !isInChastity()) {
        sendMessage('I would want you to stroke now but I guess we need to make some room on that penis first %Grin%');

        //If we have any clamps on the cock we should move them away
        readyForStroking();

        let answer = sendYesOrNoQuestionTimeout('Much better isn\'t it?', 3);
        if (answer === ANSWER_YES) {
            sendMessage('Don\'t celebrate to early. I won\'t go easy on you %Grin%');
        } else if (answer === ANSWER_NO) {
            sendMessage('Looks like my pain slut would like some more pain %Lol%');
            sendMessage('Or maybe you just don\'t want to stroke right now');
            sendMessage('I don\'t care anyway %SlaveName%');
        }
    }
}


function startStrokingSpicy() {
    readyForStroking();

    setAudioBlocked(true);
    sendMessage("%StartStroking%", 0);
    setAudioBlocked(false);

    if (isChance(80)) {
        playSound("Audio/Spicy/Stroking/StartStroking/*.mp3");
    }

    startStroking(getInitialStrokingBPM());
}

function startStrokeInterval(durationMinutes) {
    startStrokingSpicy();
    sendStrokeTaunts(durationMinutes * 60);

    stopStrokingMessage();
}

function getInitialStrokingBPM(modifier = 1) {
    return Math.floor(randomInteger(75 + getCruelTeasingMood(), 95 + getCruelTeasingMood()) * modifier) | 0;
}

function sendNewStrokeInstruction() {
    setAudioBlocked(true);
    const randomModule = findRandomUnusedIndex(12, createHistory('strokingInstruction'));
    switch (randomModule) {
        case 0:
            sendMessage('I want you to stroke the whole %Cock%!', 0);
            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 1:
            sendMessage('I want you to only stroke with your thumb and index finger %Grin%');

            if (isChance(25) && getVerbalHumilationLimit() === LIMIT_ASKED_YES && hasSmallPenis()) {
                sendMessage('Your %Cock% is so small that this should be the only way for you to masturbate %Lol%', 0);
                playSound("Audio/Spicy/Humiliation/SmallDick/*.mp3");
                sleep(3);

                if(shouldIntroduceNewRule(RULE_ALWAYS_STROKE_INDEX_AND_THUMB)) {
                    RULE_ALWAYS_STROKE_INDEX_AND_THUMB.sendIntroduction();
                }
            }

            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 2:
            sendMessage('Only stroke the shaft for now %EmoteHappy%', 0);
            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 3:
            sendMessage('Go ahead and stroke only the tip', 0);
            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 4:
            sendMessage('Go ahead and stroke only the tip with your thumb and index finger', 0);
            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 5:
            sendMessage('Only use one finger for now and rub it up and down %MyYour% %Cock% %Grin%', 0);

            //Teasing bpm
            startStroking(30);
            sleep(5);
            break;
        case 6:
            //DO NOT change because let and const are unsupported in switch statements
            var lubeType = getAssLubeType(getMood(), 30);
            sendMessage('Start palming your cock head %EmoteHappy%');

            if (lubeType == ANY_LUBE) {
                sendMessage('Use some lube if needed');
            } else if (lubeType === SPIT_LUBE) {
                sendMessage('Use some spit if needed');
            } else {
                //Too annoying to get another lube right now during stroking, so we are gonna tell him to use nothing

                if(lubeType == NO_LUBE) {
                    sendMessage('You are not allowed to use any lube %Grin%');
                } else if(feelsLikePunishingSlave() && CBT_LIMIT.isAllowed()) {
                    //Really wants to punish so I guess we will fetch it
                    if(lubeType == TOOTHPASE_LUBE || lubeType == TIGER_HOT_LUBE) {
                        let bpm = getStrokingBPM();
                        stopStrokingMessage();

                        sendMessage('In a moment I want you to palm %MyYour% cock head');
                        sendMessage('But I feel like making it soo fucking painful for you %Wicked%');
                        sendMessage('So...');
                        if (!fetchToy("tiger hot")) {
                            sendMessage('You really wanna piss me off today');
                            smallCBTPunishment();
                            sendMessage('Now start palming that cock head');
                            sendMessage('No lube whatsoever!', 0);
                            startStroking(bpm);
                        } else {
                            sendMessage('Now apply some of it to your hand');
                            sendMessage('And then...');
                            sendMessage('Start palming that cock head %Wicked%', 0);
                            startStroking(bpm);
                        }
                    }
                } else {
                    //Not that important apparently
                    sendMessage('You are not allowed to use any lube %Grin%');
                }
            }

            break;
        case 7:
            sendMessage('Go ahead and role %MyYour% %Cock% between your hands. Imagine starting a fire %Grin%', 0);
            startStroking(getInitialStrokingBPM(0.5));
            sleep(5);
            break;
        case 8:
            sendMessage('Try stroking with both hands', 0);

            if (getVerbalHumilationLimit() == LIMIT_ASKED_YES) {
                sendMessage('It\'s probably impossible with such a small %Cock% but this might be even more humiliating then %Lol%');
            }

            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
        case 9:
            sendMessage('Use one hand to pull back your foreskin and use the other hand to stroke' + random("", ". Tip only %Grin%"), 0);
            startStroking(getInitialStrokingBPM(0.75));
            sleep(5);
            break;
        case 10:
            sendMessage('Instead of stroking I want you to twist your hand around that shaft for now', 0);
            startStroking(getInitialStrokingBPM(0.7));
            sleep(5);
            break;
        case 11:
            sendMessage('Start twisting your hand around the tip of %MyYour% cock while pulling back your foreskin with the other hand %Grin%', 0);
            startStroking(getInitialStrokingBPM(0.7));
            sleep(5);
            break;
        case 12:
            sendMessage('Only stroke ' + random("up", "down") + " for now %EmoteHappy%", 0);
            startStroking(getInitialStrokingBPM());
            sleep(5);
            break;
    }
    setAudioBlocked(false);
}

function sendStrokeTaunts(durationSeconds, nextInstruction) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(30, 40);

    //Start our loop and continue until iterationsToGo are equal or less than zero
    while (iterationsToGo > 0) {
        //Is the sub still stroking?
        if (!isStroking() || durationSeconds <= 0) {
            return;
        }

        if (nextInstruction == undefined || nextInstruction <= 0) {
            //Only send stroke instructions after the initial stroking
            if (nextInstruction !== undefined) {
                sendNewStrokeInstruction();
            }

            nextInstruction = randomInteger(60, 90);
        }

        iterationsToGo--;
        durationSeconds--;
        nextInstruction--;
        sleep(1);
    }

    run("Stroking/Taunt/Stroke/*.js");

    //Start the whole thing all over again
    //At least 15 seconds to the next instruction if we just already send a message
    sendStrokeTaunts(durationSeconds, Math.max(15, nextInstruction));
}

function stopStrokingEdgeMessage() {
    //TODO: Different messages and sound
    stopStrokingMessage();
}