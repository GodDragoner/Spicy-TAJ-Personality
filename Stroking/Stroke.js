let vibingChastity = false;


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

//TODO: Support for stroking while in chastity (stroking the cage). Make sure to have the taunts adapt and stroking styles as well
function readyForStroking() {
    if (hasClampsOnPenis()) {
        if (isInChastity()) {
            sendDebugMessage('Found clamps on penis while in chastity');
            return;
        }

        sendMessage('I want you to stroke now but I guess we need to make some room on that penis first %Grin%');

        if (feelsLikePunishingSlave()) {
            redistributeClampsForStroking();

            let answer = sendYesOrNoQuestionTimeout('You didn\'t think I would free you from the clamps did you?', 3);
            if (answer === ANSWER_YES) {
                sendMessage('%Grin%');
                sendMessage('Well I don\'t feel like you deserve any less pain %Lol%');
            } else if (answer === ANSWER_NO) {
                sendMessage('You don\'t deserve any less pain %Lol%');
            }

            sendMessage('So I just readied everything for you to stroke');
            sendMessage('While having other body parts hurt in addition to that delicious pain of denial %EmoteHappy%');
        } else {
            removeClampsForStroking();

            let answer = sendYesOrNoQuestionTimeout('Much better isn\'t it?', 3);
            if (answer === ANSWER_YES) {
                sendMessage('Don\'t celebrate too early. I won\'t go easy on you %Grin%');
            } else if (answer === ANSWER_NO) {
                sendMessage('Looks like my pain slut would like some more pain %Lol%');
                sendMessage('Or maybe you just don\'t want to stroke right now');
                sendMessage('I don\'t care anyway %SlaveName%');

                sendMessage(random('Because you aren\'t getting any more pain right now but that pure ache of denial', 'Because I only want you to feel that delicious ache of denial',
                    'Because I want you to focus on those aching blue balls', 'Because I want to see you squirm because of one thing only right now... Denial!'));
            }
        }
    }
}

function readyForVibratingCage() {
    if (hasMagicWand()) {
        if (MAGIC_WAND_TOY.wasUsedInActiveContext()) {
            //We don't need to send this if we used this recently
            if (MAGIC_WAND_TOY.getLastUsage().addSecond(120).hasPassed()) {
                //Tell slave again so he can pick it up etc and start once this continues
                sendMessage('Get your vibrator ready %SlaveName%', 10);
            }

            MAGIC_WAND_TOY.setLastUsage();
            return true;
        }


        MAGIC_WAND_TOY.setLastUsage();
        MAGIC_WAND_TOY.setUsedInActiveContext(true);
        //Return fetch result
        return MAGIC_WAND_TOY.fetchToy();
    }

    return false;
}

function startVibratingCage() {
    if (!readyForVibratingCage()) {
        return false;
    }

    setAudioBlocked(true);
    sendMessage("%StartStroking%", 0);
    setAudioBlocked(false);

    //QUALITY: Sound
}

function startVibratingCageInterval(durationSeconds) {
    startVibratingCage();

    vibingChastity = true;
    sendVibeTaunts(durationSeconds);
    vibingChastity = false;

    stopStrokingMessage();
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
    if (!isInChastity() && FLESH_LIGHT.hasToy() && feelsLikeTeasing() && isChance(10)) {
        if (FLESH_LIGHT.wasUsedInActiveContext()) {
            //We don't need to send this if we used this recently
            if (FLESH_LIGHT.getLastUsage().addSecond(120).hasPassed()) {
                //Tell slave again so he can pick it up etc and start once this continues
                sendMessage('Get your fleshlight ready %SlaveName%', 10);
            }

            FLESH_LIGHT.setLastUsage();
            return true;
        }

        FLESH_LIGHT.setLastUsage();
        FLESH_LIGHT.setUsedInActiveContext(true);

        //Return fetch result
        if (FLESH_LIGHT.fetchToy()) {
            FLESH_LIGHT.setToyOn(true);
        }
    } else {
        if(FLESH_LIGHT.hasToy() && FLESH_LIGHT.isToyOn()) {
            FLESH_LIGHT.setToyOn(false);
            resetFleshlight();
        }
    }

    startStrokingSpicy();

    sendStrokeTaunts(durationMinutes * 60);

    stopStrokingMessage();

    if (FLESH_LIGHT.isToyOn()) {
        FLESH_LIGHT.setToyOn(false);

        if(FLESH_LIGHT.isLovense()) {
            resetFleshlight();
        }
    }
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

                if (shouldIntroduceNewRule(RULE_ALWAYS_STROKE_INDEX_AND_THUMB)) {
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

                if (lubeType == NO_LUBE) {
                    sendMessage('You are not allowed to use any lube %Grin%');
                } else if (feelsLikePunishingSlave() && CBT_LIMIT.isAllowed()) {
                    //Really wants to punish so I guess we will fetch it
                    if (lubeType == TOOTHPASE_LUBE || lubeType == TIGER_HOT_LUBE) {
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
                //If we have a fleshlight do other instructions
                if (!FLESH_LIGHT.isToyOn()) {
                    sendNewStrokeInstruction();
                } else if (FLESH_LIGHT.isLovense()) {
                    randomFleshlightInteraction();
                }
            }

            if (!FLESH_LIGHT.isToyOn()) {
                nextInstruction = randomInteger(60, 90);
            } else {
                //Fleshlight interactions more often
                nextInstruction = randomInteger(25, 45);
            }
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


function sendVibeTaunts(durationSeconds) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(30, 40);

    //Start our loop and continue until iterationsToGo are equal or less than zero
    while (iterationsToGo > 0) {
        //Is the sub still stroking?
        if (!vibingChastity || durationSeconds <= 0) {
            return;
        }

        iterationsToGo--;
        durationSeconds--;
        sleep(1);
    }

    run("Stroking/Taunt/VibrateCage/*.js");

    //Start the whole thing all over again
    sendVibeTaunts(durationSeconds);
}

function stopStrokingEdgeMessage() {
    //TODO: Different messages and sound
    stopStrokingMessage();
}

function startTeaseTauntInterval(durationSeconds) {
    let waitPerTaunt = 5;
    let actualLoop = Math.ceil(durationSeconds / waitPerTaunt);

    sendDebugMessage('Start of teasing interval for ' + actualLoop + ' iterations');

    for (let x = 0; x < actualLoop; x++) {
        //TODO: Non chastity taunts
        run("Stroking/Taunt/Chastity/BasicChastityTaunts.js");
        sleep(5);
    }


    sendDebugMessage('End of teasing interval');
}