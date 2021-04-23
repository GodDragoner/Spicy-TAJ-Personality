

function startTimePassTasks(durationMinutes, allowTeasing = true) {
    let tasksDone = tryGetArrayList("tasksDone");
    setTempVar("tasksDone", tasksDone);

    let iterations = 0;
    const date = setDate();
    date.addMinute(durationMinutes);

    while(!date.hasPassed()) {

        //Only send this when we are about to give another task to the sup
        if(iterations > 0) {
            sendMessage(random("Next...", "Now...", "Okay...", "What to do with you..."));
        }

        const maxOption = 5;

        //If we run out of possibilities we need to clear all tasks
        if(tasksDone.size() >= maxOption) {
            tasksDone.clear();
        }

        let option = randomInteger(0, maxOption);

        while(tasksDone.contains(option)) {
            option = randomInteger(0, maxOption);
        }

        //TODO: Teasing stuff and position

        //Don't do it for corner tasks, we can do that more frequently
        if(option != 0) {
            tasksDone.add(tasksDone);
            setTempVar("tasksDone", tasksDone);
        }

        switch(option) {
            case 0:
                goToCorner(getCornerTime());
                break;
            case 1:
                sendMessage(random("How about some training?", "Let's do some training", "Let's work on your fitness", "I think we should do something about your fitness right now"));
                switch(randomInteger(0, 4)) {
                    case 0:
                        sendMessage("Do some push ups until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                    case 1:
                        sendMessage("Do some sit ups until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                    case 2:
                        sendMessage("Do some jumping jacks until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                    case 3:
                        sendMessage("Do some burpees until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                    case 4:
                        sendMessage("I want you to pretend that you are rope skipping");
                        sendMessage("This will not only train your muscles and keep you fit...");
                        sendMessage("But it will also " + random('look', 'be')  + random('', ' quite') + " %Entertaining% with your %Cock% " + random('dangling around', 'hanging around', 'flopping around', 'bouncing around'));
                        sendMessage("You can stop when you hear my bell %Grin%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                }
                break;
            case 2:
                if (HUMILIATION_LIMIT.isAllowed() || VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                    sendMessage("I want you to grab your phone or a camera");
                    sendMessage("And I want you to take some humiliating pictures of yourself right now");
                    sendMessage("I don't care what you do to make them humiliating");


                    if(SISSY_LIMIT.isAllowed() && hasSomeLingerie() && isLingeriePlayAllowed() && isChance(50)) {
                        sendMessage('But...');

                        if(hasLingerieOn()) {
                            sendMessage('That you\'re already wearing lingerie makes this even better %SlaveNameSmiley%');
                        } else {
                            putOnLingerie();
                            sendMessage('Lingerie is always great for the purpose of humiliation %SlaveNameSmiley%');
                        }
                    } else {
                        sendMessage("But I want them to show you naked");
                    }

                    sendMessage("Go ahead and take some now and return when you hear my bell");
                    sleep(randomInteger(75, 120));
                    returnSlave();

                    if(hasLingerieOn()) {
                        if(feelsEvil()) {
                            sendMessage('Stay in that lingerie for now %Slut%');
                        } else {
                            sendMessage('You can go ahead and take off all that lingerie for now');
                            removeAllLingerie();
                        }
                    }

                    sendMessage("I want you to place those pictures inside your self humiliation folder");
                    sendMessage("But you can do so after the session");
                    sendMessage("For now I want to continue messing with you %Grin%");
                    break;
                }

                iterations = 0;
                continue;
            case 3:
                if(!isPlugged() && ANAL_LIMIT.isAllowed()) {
                    if(putInButtplug()) {
                        if(isChance(50)) {
                           goToCorner(getCornerTime());
                        }
                    } else {
                        iterations = 0;
                        continue;
                    }
                } else {
                    iterations = 0;
                    continue;
                }

                break;
            case 4:
                //TODO: Force buttplug to stay in if like this is used during inflateable plug play
                interactWithRandomToys();
                break;
            case 5:
                if(!distributeClamps(randomInteger(5, 10))) {
                    //Reset task counter because if we fail fetch toy we already send the message "Well then..." so we don't want another connector message
                    iterations = 0;
                    continue;
                }

                break;
            case 6:
                if(isInChastity()) {
                    if(MAGIC_WAND_TOY.hasToy()) {

                    }
                } else {
                    //Edging
                    if(isChance(50)) {
                        startMultipleEdges(randomInteger(3, 5));

                        if(feelsLikePunishingSlave()) {
                            startEdging(getEdgeHoldSeconds());
                        }
                    }
                    //Stroking
                    else {
                        startStrokeInterval(randomInteger(1, 2));
                    }
                }
                break;
        }

        //TODO: Limit and toy talk

        iterations++;
    }
}

function getSlaveTrainingModuleTime(multiplier = 1) {
    let mood = getMood();
    let minSeconds = 240 + (mood + 1)*20*(getStrictnessForCharacter() + 1);
    let maxSeconds = 300 + (mood + 1)*25*(getStrictnessForCharacter() + 1);
    let random = randomInteger(minSeconds, maxSeconds);
    sendDebugMessage('Calculated ' + random + ' slave module training time seconds based on mood ' + mood + ' and strictness ' + getStrictnessForCharacter());
    return random*multiplier;
}

function getCornerTime(multiplier = 1) {
    let mood = getMood();
    let minSeconds = Math.max(45, (mood + 1)*10*(getStrictnessForCharacter() + 1));
    let maxSeconds = Math.max(75, (mood + 1)*15*(getStrictnessForCharacter() + 1));
    let random = randomInteger(minSeconds, maxSeconds);
    sendDebugMessage('Calculated ' + random + ' corner time seconds based on mood ' + mood + ' and strictness ' + getStrictnessForCharacter());
    return random*multiplier;
}

function goToCorner(durationSeconds) {
    sendDebugMessage('Going to corner for ' + durationSeconds);

    let cornersDone = getVar("cornersDone", new java.util.ArrayList());
    setTempVar("cornersDone", cornersDone);

    const holdUpMoney = feelsEvil() && !cornersDone.contains(0);

    if(holdUpMoney) {
        cornersDone.add(0);

        sendMessage("Grab a coin or something similar and return to me");
        const answer = sendInput("Tell me when you are ready to continue.");
        while(true) {
            if(answer.isLike("done", "yes", "ready")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("If you aren't done yet don't bother me", 0);
                answer.loop();
            }
        }

        sendMessage("Now...");
    }


    sendMessage("Go to the corner");

    let humbler = !PARACHUTE_TOY.isToyOn() && feelsLikePunishingSlave() && !isInChastity();

    if(humbler) {
        putOnHumbler();
    }

    let faceWall = isChance(50) || holdUpMoney;
    if(faceWall) {
        sendMessage("Face the wall");
    } else {
        sendMessage("Facing the room");
    }

    //Punish feeling and not already holding up money
    let voiceCommands = feelsLikePunishingSlave() && !holdUpMoney;

    let sayThankYou = voiceCommands;

    let onToes = isChance(50);

    let countHeelsTouch = feelsEvil() && onToes;

    if(onToes) {
        sendMessage("I want you standing on your tip toes");
        sendMessage("At no point are you allowed to rest down on your heels");

        if(countHeelsTouch) {
            sendMessage("I want you to count every time your heel strikes the floor or you lose your balance...");
            sendMessage("If both heels strikes at the same time it counts as two!");
        }

        if(voiceCommands) {
            sendMessage("You'll hear my voice saying 'up' or 'down'");
            sendMessage("Down means going down in a squat still on toes");
            sendMessage("Up means standing up on your toes...");
            sendMessage("Now I'm not done %Grin%");
            sendMessage("I want you to count the number of commands I give in your head");
            sendMessage("Every time you hear a command I want you say 'Thank You %DomHonorific%'");
        }
    } else if(voiceCommands) {
        sendMessage("You'll hear my voice saying 'up' or 'down'");
        sendMessage("Down means going down in a squat");
        sendMessage("Up means standing up...");
        sendMessage("Now I'm not done %Grin%");
        sendMessage("I want you to count the number of commands I give in your head");
        sendMessage("Every time you hear a command I want you say 'Thank You %DomHonorific%'");
    }

    //No count seconds if we are counting the heel touches or giving voice commands
    let keepCountSeconds = feelsEvil() && !countHeelsTouch && !voiceCommands;

    if(!voiceCommands) {
        if (keepCountSeconds) {
            sendMessage('I want you to keep count of the seconds you spent in the corner');
        }

        //We use this in parachute play and we can't do this properly with the parachute on
        else if (!faceWall && !PARACHUTE_TOY.isToyOn() && !onToes && !humbler) {
            sendMessage("I want you to press your back against the wall, \"sit\" in the air and hold that position");
        } else if (isChance(50) && !onToes && !humbler && !PARACHUTE_TOY.isToyOn()) {
            sendMessage("I want you to kneel");
        }
    }

    if(holdUpMoney) {
        sendMessage("Put the coin between the wall and your nose");
        sendMessage("And keep it there just using your nose %Lol%");
    }

    let handPosition = randomInteger(0, 3);

    switch(handPosition) {
        case 0:
            sendMessage("Hands behind your back");
            break;
        case 1:
            sendMessage("Hands on your knees");
            break;
        case 2:
            sendMessage("Hands behind your head");
            break;
    }

    sendMessage("We will start once you hear my bell %Grin%");

    playBellSound();

    if(onToes) {
        playAudio("Audio/Spicy/Commands/OnYourToes.mp3");
    }

    do {
        //Voice commands?
        if(voiceCommands) {
            let secondsPassed = 0;
            const secondsToWait = 4;
            let up = true;

            while(secondsPassed < durationSeconds) {
                if(up) {
                    playAudio("Audio/Spicy/Commands/Down/*.mp3");
                    up = false;
                } else {
                    playAudio("Audio/Spicy/Commands/Up/*.mp3");
                    up = true;
                }

                sleep(secondsToWait);

                secondsPassed += secondsToWait;
            }
        } else {
            //Just wait it out
            sleep(durationSeconds);
        }


        returnSlave();

        //Ask the times the heels touched the ground
        if(countHeelsTouch) {
            let int = createIntegerInput('So how many times did your heels touch the floor %SlaveName%?', undefined, undefined, 'That\'s not a valid number %SlaveName%...');

            if(int === 0) {
                sendMessage('Wow! That\'s quite impressive %Grin%');

                sendMessage('I am actually gonna give you a bit of gold for accomplishing this');
                rewardGoldLow();

                countHeelsTouch = false;
                changeMeritLow(false);
            } else if(int < 4) {
                sendMessage('Not too bad %Grin%');
                sendMessage('You did a good job %EmoteHappy%');
                countHeelsTouch = false;
                changeMeritLow(false);
            } else if(int < 6) {
                sendMessage('Well I guess that\'s kinda okay %Lol%');
                countHeelsTouch = false;
            } else {
                sendMessage('That is not acceptable %SlaveName%');
                sendMessage('Which means we will try again');
                sendMessage('Go back to the corner and try harder this time');
                sendMessage('Time starts with my bell!', 10);
                playBellSound();
            }
        }

        //Ask for the seconds the sub counted
        if(keepCountSeconds) {
            let int = createIntegerInput('So how many seconds did you spend in the corner %SlaveName%?', undefined, undefined, 'That\'s not a valid number %SlaveName%...');

            if(durationSeconds - 5 < int && durationSeconds + 5 > int) {
                sendMessage('Almost correct!');
                sendMessage('You did a very good job of keeping count!');
                changeMeritMedium(false);
                keepCountSeconds = false;
            } else if(durationSeconds - 10 < int && durationSeconds + 10 > int) {
                sendMessage('About right %Grin%');
                sendMessage('You did a good job of keeping count!');
                keepCountSeconds = false;
                changeMeritLow(false);
            } else if(durationSeconds - 15 < int && durationSeconds + 15 > int) {
                sendMessage('Well I guess that\'s kinda precise enough %Lol%');
                keepCountSeconds = false;
            } else {
                sendMessage('Nope. That is completely off %SlaveName%');
                sendMessage('Which means we will try again');

                sendMessage('But first a little punishment should be in place');

                sendMessage('Go back to the corner and try harder this time');
                sendMessage('Time starts with my bell!', 10);
                playBellSound();
            }
        }
    }
    while(keepCountSeconds || countHeelsTouch);

    if(sayThankYou) {
        sendMessage("Now I need you to be honest with me...");

        let answer = sendYesOrNoQuestionTimeout("Did you remember to say 'Thank you %DomHonorific%' every time I gave a command?", 10);

        switch(answer) {
            case ANSWER_YES:
                sendMessage("%Good%");
                sendMessage("I know this was rough %SlaveName%");
                sendMessage("But it makes me happy knowing you completed it!");
                changeMeritLow(false);
                break;
            case ANSWER_NO:
                sendMessage("%EmoteSad%");
                changeMeritMedium(true);
                break;
            case ANSWER_TIMEOUT:
                sendMessage("I'm gonna take your silence as a no...");
                changeMeritHigh(true);
                break;
        }

        if(answer !== ANSWER_YES) {
            sendMessage('Since you did not do as I wanted I am gonna have to punish you %Lol%');

            smallPunishment();

            sendMessage('I sincerely hope you learned your lesson and will do better next time');
        }
    }

    if(humbler) {
        removeHumbler();
    }
}

function returnSlave() {
    sendMessage(randomInteger("Return here", "Come back", "Get here", "Return", "Get back here", "Get back to me", "Get your %Ass% over here") + " %SlaveName%", 0);
    playBellSound();
    sleep(5);
}