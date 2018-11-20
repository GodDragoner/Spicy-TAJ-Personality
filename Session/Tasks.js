

function startTimePassTasks(durationMinutes, allowTeasing = true) {
    let tasksDone = getVar("tasksDone", new java.util.ArrayList());
    setTempVar("tasksDone", tasksDone);

    let iterations = 0;
    const date = setDate();
    while(!date.clone().addMinute(durationMinutes).hasPassed()) {

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
        }

        //TODO: don't repeat stuff

        switch(option) {
            case 0:
                //TODO: Times based on mood
                goToCorner(randomInteger(60, 180));
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
                        //TODO: Some diversity?
                        sendMessage("But it will also look hilarious with your dick dangling around");
                        sendMessage("You can stop when you hear my bell %Grin%");
                        sleep(randomInteger(20, 30));
                        returnSlave();
                        break;
                }
                break;
            case 2:
                //TODO: Humiliation limit
                sendMessage("I want you to grab your phone or a camera");
                sendMessage("And I want you to take some humiliating pictures of yourself right now");
                sendMessage("I don't care what you do to make them humiliating");
                //TODO: Has sissy outfit? And check for other stuff that the sub might be wearing right now and tell to make photos of it
                sendMessage("But I want them to show you either naked or in that cute little sissy outfit of yours");
                sendMessage("Go ahead and take some now and return when you hear my bell");
                sleep(randomInteger(45, 90));
                returnSlave();
                sendMessage("I want you to place those pictures inside your self humiliation folder");
                sendMessage("But you can do so after the session");
                sendMessage("For now I want to continue messing with you %Grin%")
                break;
            case 3:
                if(!isPlugged() && getAnalLimit() == LIMIT_ASKED_YES) {
                    if(putInButtplug()) {
                        if(isChance(50)) {

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
                if(!getVar(VARIABLE_IS_BALLS_TIED, false) && !getVar(VARIABLE_CHASTITY_ON, false) && getPainLimit() == LIMIT_ASKED_YES && fetchToy("Rope")) {
                    setTempVar(VARIABLE_IS_BALLS_TIED, true);

                    //TODO: Show tutorials etc. and tell the sub what exactly to do
                    sendMessage("Now take that rope and tie up your balls");
                    sendMessage("Do it real nice and tight");
                    const answer = sendInput("Tell me when you are ready to continue");

                    while(true) {
                        if(answer.isLike("done", "yes", "ready")) {
                            sendMessage("%Good%");
                            break;
                        } else {
                            sendMessage("If you aren't done yet don't bother me.");
                            answer.loop();
                        }
                    }
                } else {
                    //Reset task counter because if we fail fetch toy we already send the message "Well then..." so we don't want another connector message
                    iterations = 0;
                    continue;
                }

                break;
            case 5:
                if(!distributeClamps(randomInteger(5, 10))) {
                    //Reset task counter because if we fail fetch toy we already send the message "Well then..." so we don't want another connector message
                    iterations = 0;
                    continue;
                }

                break;
        }

        iterations++;
    }
}

function goToCorner(durationSeconds) {
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
                sendMessage("If you aren't done yet don't bother me");
                answer.loop();
            }
        }

        sendMessage("Now...");
    }

    sendMessage("Go to the corner");

    let faceWall = isChance(50) || holdUpMoney;
    if(faceWall) {
        sendMessage("Face the wall");
    } else {
        sendMessage("Facing the room");
    }

    if(isChance(50)) {
        sendMessage("I want you standing on your tip toes")
    } else if(!faceWall) {
        sendMessage("I want you to press your back against the wall, \"sit\" in the air and hold that position");
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

    sendMessage("And now wait for my bell %Grin%");

    sleep(durationSeconds);
    returnSlave();
}

function returnSlave() {
    sendMessage(randomInteger("Return here", "Come back", "Get here", "Return", "Get back here", "Get back to me", "Get your %Ass% over here") + " %SlaveName%", 0);
    playBellSound();
    sleep(5);
}