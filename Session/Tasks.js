

function startTimePassTasks(durationMinutes) {
    let tasksDone = new java.util.ArrayList();
    setVar("tasksDone", tasksDone);

    const date = setDate();
    while(!date.addMinutes(durationMinutes).hasPassed()) {
        let option =  randomInteger(0, 10);

        while(tasksDone.contains(option)) {
            option = randomInteger(0, 10);
        }

        tasksDone.add(tasksDone);
        switch(option) {
            case 0:
                //TODO: Times based on mood
                goToCorner(randomInteger(60, 180));
                break;
            case 1:
                sendMessage("Okay...");
                sendMessage("How about some training?");
                const trainingMode = randomInteger(0, 4);
                switch(trainingMode) {
                    case 0:
                        sendMessage("Do some push ups until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        sendMessage("Return here %SlaveName%", 0);
                        playBellSound();
                        break;
                    case 1:
                        sendMessage("Do some sit ups until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        sendMessage("Return here %SlaveName%", 0);
                        playBellSound();
                        break;
                    case 2:
                        sendMessage("Do some jumping jacks until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        sendMessage("Return here %SlaveName%", 0);
                        playBellSound();
                        break;
                    case 3:
                        sendMessage("Do some burpees until you hear my bell %SlaveName%");
                        sleep(randomInteger(20, 30));
                        sendMessage("Return here %SlaveName%", 0);
                        playBellSound();
                        break;
                    case 4:
                        sendMessage("I want you to pretend that you are rope skipping");
                        sendMessage("This will not only train your muscle and keep your fit and healthy");
                        sendMessage("But it will also look hilarious");
                        sendMessage("You can stop when you hear my bell %Grin%");
                        sleep(randomInteger(20, 30));
                        sendMessage("Return here %SlaveName%", 0);
                        playBellSound();
                        break;
                }
                break;
        }
    }
}

function goToCorner(durationSeconds) {
    sendMessage("%SlaveName%");

    const holdUpMoney = feelsEvil();

    if(holdUpMoney) {
        sendMessage("Grab a coin or something similar and return to me");

        fetchToy()
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
    sendMessage("Return here %SlaveName%", 0);
    playBellSound();
}