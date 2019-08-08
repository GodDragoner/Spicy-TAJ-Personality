function stopStrokingMessage() {

    if(isStroking()) {
        stopStroking();
    }

    let answers;
    if(isInChastity()) {
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
            "Imagine me backing off your %Cock%, right now. Hands off",
            "That's enough, let go of your %Cock%",
            "And... stop",
            "Stop and let go of your %Cock%",
            "You should stop now",
            "You should let go of your %Cock% now",
            "I want you to stop",
            "Stop stroking for me",
            "Take your hands off your %Cock%",
            "Let go of your %Cock%",
            "Stop and take your hands off your %Cock%",
            "Quit stroking",
            "No more stroking, hands off",
            "No more stroking, just let go of your %Cock%",
            "Okay, stop",
            "Okay that's enough for now. You're going to squirt before I'm done with you."
        ];

        sendMessage(findRandomUnusedElement(answers, createHistory('stopStroking')), 0);
    }


    if (isChance(80) && !isInChastity()) {
        playSound("Audio/Spicy/Stroking/StopStroking/*.mp3");
    }
}

function startStrokeInterval(durationMinutes) {
    sendMessage("%StartStroking%", 0);

    if (isChance(80)) {
        playSound("Audio/Spicy/Stroking/StartStroking/*.mp3");
    }

    startStroking(60);
    sendStrokeTaunts(durationMinutes * 60);

    stopStrokingMessage();
}

function sendNewStrokeInstruction() {
    const randomModule = findRandomUnusedIndex(12, createHistory('strokingInstruction'));
    switch (randomModule) {
        case 0:
            sendMessage('I want you to stroke the whole %Cock%!');
            break;
        case 1:
            sendMessage('I want you to only stroke with your thumb and index finger %Grin%');

            if (isChance(25) && getVerbalHumilationLimit() == LIMIT_ASKED_YES) {
                //TODO: New rule? So small sound? only if has small cock
                sendMessage('Your %Cock% is so small that this should be the only way for you to masturbate %Lol%');
            }

            break;
        case 2:
            sendMessage('Only stroke the shaft for now %EmoteHappy%');
            break;
        case 3:
            sendMessage('Go ahead and stroke only the tip');
            break;
        case 4:
            sendMessage('Go ahead and stroke only the tip with your thumb and index finger');
            break;
        case 5:
            sendMessage('Only use one finger for now and rub it up and down your %Cock% %Grin%');
            break;
        case 6:
             lubeType = getAssLubeType(getMood(), 30);
            sendMessage('Start palming your cock head %EmoteHappy%');

            if (lubeType == ANY_LUBE) {
                sendMessage('Use some lube if needed');
            } else if (lubeType === SPIT_LUBE) {
                sendMessage('Use some spit if needed');
            } else {
                //Too annoying to get another lube right now during stroking, so we are gonna tell him to use nothing
                //TODO: Could stop stroking here and order sub to get a different lube/do it a different time
                sendMessage('You are not allowed to use any lube %Grin%');
            }

            break;
        case 7:
            sendMessage('Go ahead and role your %Cock% between your hands. Imagine starting a fire %Grin%');
            break;
        case 8:
            sendMessage('Try stroking with both hands');

            if (getVerbalHumilationLimit() == LIMIT_ASKED_YES) {
                sendMessage('It\'s probably impossible with such a small %Cock% but this might be even more humiliating then %Lol%');
            }
            break;
        case 9:
            sendMessage('Use one hand to pull back your foreskin and use the other hand to stroke' + random("", ". Tip only %Grin%"));
            break;
        case 10:
            sendMessage('Instead of stroking I want you to twist your hand around that shaft for now');
            break;
        case 11:
            sendMessage('Start twisting your hand around the tip of your cock while pulling back your foreskin with the other hand %Grin%');
            break;
        case 12:
            sendMessage('Only stroke ' + random("up", "down") + " for now %EmoteHappy%");
            break;
    }
}

function sendStrokeTaunts(durationSeconds, nextInstruction) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(10, 30);

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

            nextInstruction = randomInteger(30, 90);
        }

        iterationsToGo--;
        durationSeconds--;
        nextInstruction--;
        sleep(1);
    }

    run("Stroking/Taunt/Stroke/*.js");

    //Start the whole thing all over again
    sendStrokeTaunts(durationSeconds, nextInstruction);
}

function stopStrokingEdgeMessage() {
    stopStrokingMessage();
    //TODO: Different messages and sound
}