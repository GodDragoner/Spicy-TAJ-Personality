/**
 * Start blowing
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startBlowing(bpm, duration, avoidStop = false) {
    startStroking(bpm);
    sendBlowingTaunts(duration * 1000);

    if (!avoidStop) {
        sendMessage(random("Stop", "You can stop now"), 0);
        stopStroking();
    }
}

function getBlowjobLevel() {
    return getVar(VARIABLE_BLOWJOB_LEVEL);
}

function sendBlowingTaunts(duration) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(30, 55);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while (iterationsToGo > 0) {
        //Has the duration passed
        if (duration <= 0) {
            return;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        duration -= millisecondsToWait;
        sleep(millisecondsToWait, "MILLISECONDS");
    }

    run("Stroking/Taunt/Blowjob/*.js");

    //Start the whole thing all over again
    sendAnalTaunts(duration);
}

function startBlowToy(toy) {
    sendMessage("Okay...");
    let rightToIt = true;
    const caressingTip = isChance(50);

    if (isChance(80)) {

        let target = toy;

        if (caressingTip) {
            target = "tip";
        }

        sendMessage("Start by caressing the " + target);
        sendMessage("Give it some nice gentle kisses", 5);
        sendMessage("There we go...");
        sendMessage("Show it some love", 5);

        const doLicking = isChance(50);
        rightToIt = !doLicking;

        if (doLicking) {
            if (caressingTip) {
                sendMessage("Now start licking the tip");
                sendMessage("Draw some nice circles around the tip");
                sendMessage("Be creative and make good use of your tongue", 5);

                for (let x = 0; x < randomInteger(2, 4); x++) {
                    //TODO: Only if cuckholding is a thing and don't repeat lines
                    sendMessage(random("Keep going", "Keep it up %SlaveName%", "Lick it... Gentle and slowly", "Come on %SlaveName%. Show some passion!", "Lick it like it was my lover's cock"), 10);
                }
            }

            //Increase chance if we didn't just play with the tip
            if (isChance(50) && tip || !tip && isChance(80)) {
                sendMessage("So now...");
                //TODO: Duration based on mood
                sendMessage("Start licking up and down the whole " + toy, randomInteger(10, 20));
                sendMessage("All the way down and up", randomInteger(10, 20));
                sendMessage("Be passionate and imagine it being another men's cock", randomInteger(10, 20));
                //TODO: ASM interactions
                sendMessage("");
            }
        }
    }

    if (rightToIt) {
        sendMessage(random("Let's not tease that " + toy + " too much for now", "Let's get right to it %SlaveName%"));
    } else {
        sendMessage("Next...");
    }

    //Tip only only
    if (isChance(50)) {
        if (caressingTip) {
            sendMessage("Continue with the tip but start blowing the dildo");
            sendMessage("But ONLY the tip")
        } else {
            sendMessage("Start by blowing the tip only");
        }

        startBlowing(30, randomInteger(20, 35), true);
        sendMessage("Now slowly start going further down the " + toy);
    } else {
        sendMessage("Start giving that " + toy + " a nice good blowjob %SlaveName%");
    }

    startBlowing(20, randomInteger(40, 60), false);
    //TODO: More?

    //TODO: Deepthroat
}

function randomBlowjobModule(toy) {
    //TODO: Position

    let position;
    if (getBlowjobLevel() < 30) {
        sendMessage('%SlaveName%');
        position = getIntoBlowjobPosition(toy, 0)
    } else {
        position = getIntoBlowjobPosition(toy, getPosition())
    }

    if (getBlowjobLevel() < 30) {

    } else {
        startDeepthroatModule();
    }
    sendMessage('Let\'s start ')
}

//TODO: Use to create some lube? Warning: Think of disabling other spit usage then
function startDeepthroatModule() {
    let tasks;

    sendMessage('For the time being we should really try to make your throat as sore as possible %Grin%');
    sendMessage('And what\'s better for that than doing a few deepthroats?');
    sendMessage('So get ready to get your throat filled!');
    //TODO: Link or new rule never swallow and then only send this
    //TODO: Also different messages like: To make me proud etc.

    const bowl = isChance(50);

    if(true) {
        sendMessage('And remember: Good sissys only swallow cum and no spit!');

        if(bowl) {
            sendMessage('Which is why you should get a bowl to catch all that nasty spit!');
        } else {
            sendMessage('Try to keep all that spit in your mouth and anything that leaves your mouth should be slowly dripping onto your body %Grin%');
        }
    }

    let tasksDone = 0;
    let usedBlowjobInstructions = new java.util.ArrayList();

    while (tasksDone < 10) {
        let taskIndex = randomInteger(0, 10);

        //Try to find a new different task
        if(usedBlowjobInstructions.size() >= 1 && usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == taskIndex ||
            usedBlowjobInstructions.size() >= 2 &&  usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 2) == taskIndex) {
            continue;
        }

        switch (randomInteger(0, 7)) {
            case 0:
                tasks = ["Swallow it until you get tears in eyes",
                    "Slowly swallow it down your throat once",
                    "Slowly swallow it down your throat twice",
                    "Slowly swallow it down your throat 3 times",
                    "Quickly swallow it down your throat 3 times",
                    "Slowly swallow it down your throat 3 times then quickly swallow it down your throat 3 times"];
                break;
            case 1:
                tasks = ["Push it down your throat and leave it there for 3 seconds",
                    "Push it down your throat and rotate it 360°",
                    "Push it in as fast as you can and leave it there for 10 seconds",
                    "Push it in as fast as you can and rotate it 360° two times",
                    "Push it into you throat and out as fast you can 3 times, repeat it 3 times",
                    "Push it into you throat, rotate it 360° two times and pull it out as fast you can 3 times, repeat it 3 times"];
                break;
            case 2:
                tasks = ["You have to hold it in your throat for 8 seconds}",
                    "You have to hold it in your throat for 10 seconds",
                    "You have to hold it in your throat for 12 seconds",
                    "You have to hold it in your throat for 18 seconds",
                    "You have to hold it in your throat for 24 seconds",
                    "You have to hold it in your throat for 30 seconds"];
                break;
            case 3:
                tasks = ["Fuck your throat with your dildo 10 times, then hold it in for 5 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 12 times, then hold it in for 6 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 16 times, then hold it in for 8 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 18 times, then hold it in for 9 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 10 times, then hold it in for 10 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 10 times, then hold it in for 20 seconds. Do this 5 times in a row"];
                break;
            case 4:
                tasks = ["Fuck your throat with your dildo 10 times, then hold it in for 5 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 12 times, then hold it in for 6 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 16 times, then hold it in for 8 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 18 times, then hold it in for 9 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 10 times, then hold it in for 10 seconds. Do this 3 times in a row",
                    "Fuck your throat with your dildo 10 times, then hold it in for 20 seconds. Do this 5 times in a row"];
                break;
            case 5:
                tasks = ["Push the dildo as deep as you can and out of the mouth fast 30 time",
                    "Push the dildo as deep as you can and out of the mouth fast 60 times",
                    "Push the dildo as deep as you can and out of the mouth fast 90 times",
                    "Push the dildo as deep as you can and out of the mouth fast 120 times.",
                    "Push the dildo as deep as you can and out of the mouth fast 100 times. Take a break to catch your breath, then do it again.",
                    "Push the dildo as deep as you can and out of the mouth fast 100 times. Take a break to catch your breath, then do it again TWICE."];
                break;
            case 6:
                tasks = ["Push the dildo as far as you can, and rotate it 360° once then fuck your throat 6 times.",
                    "Push the dildo as far as you can, and rotate it 360° twice then fuck your throat 6 times. Do this twice in a row",
                    "Push the dildo as far as you can, and rotate it 360° 3 times then fuck your throat 6 times. Do this 3 times in a row",
                    "Push the dildo as far as you can, and rotate it 360° 3 times then fuck your throat 6 times. Do this 4 times in a row",
                    "Push the dildo as far as you can, and rotate it 360° 3 times then fuck your throat 6 times. Do this 5 times in a row",
                    "Push the dildo as far as you can, and rotate it 360° 3 times then fuck your throat 6 times. Do this 6 times in a row"];
                break;
            case 7:
                tasks = ["Push dildo as far as you can, leave it there for 3 seconds",
                    "Push dildo as far as you can, leave it there for 6 seconds",
                    "Push dildo as far as you can, leave it there for 9 seconds",
                    "Push dildo as far as you can, leave it there for 12 seconds",
                    "Push dildo as far as you can, leave it there for 15 seconds",
                    "Push dildo as far as you can, leave it there for 18 seconds"];
                break;
            case 8:
                //Too few spit
                if(usedBlowjobInstructions.isEmpty()) {
                    continue;
                }

                tasks = ["Take that dildo and slap your face with it 2 times",
                    "Take that dildo and slap your face with it 3 times",
                    "Take that dildo and slap your face with it 4 times",
                    "Take that dildo and slap your face with it 6 times",
                    "Take that dildo and slap your face with it 8 times",
                    "Take that dildo and slap your face with it 10 times"];
                break;
            case 9:
                //Too few spit or already used spit in previous task
                if(usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.length() - 1) == 10) {
                    continue;
                }

                tasks = ["Pour the whole content from your bowl all over your face %Grin%"];
                break;
            case 10:
                //Too few spit or already used spit in previous task
                if(usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.length() - 1) == 9) {
                    continue;
                }

                tasks = ["I want you to snort half of the spit in your bowl through your left nostril and the other half through your right one. This is gonna be gross %Lol%"];
                break;
        }

        const level = random(0, tasks.length);

        if(usedBlowjobInstructions.contains(taskIndex)) {
            //TODO: Variation
            sendMessage('And yet again ' + decapitalize(tasks[level]));
        } else {
            sendMessage(tasks[level]);
        }

        usedBlowjobInstructions.add(taskIndex);
        tasksDone++;
    }
}

function getPosition() {
    return randomInteger(0, 2);
}

function getIntoBlowjobPosition(toy, position) {
    switch (position) {
        case 0:
            sendMessage('For now I want you to place your ' + toy + ' in front of you');
            break;
        case 1:
            if (isChance(50)) {
                startKneeling();
                sendMessage('Now that you are kneeling for me I want you crawl to the nearest flat wall you can find %Grin%');
            } else {
                sendMessage('Go ahead and stand up');
            }

            sendMessage('I want you to get that ' + toy + ' and either attach or hold it against the wall');

            if (isKneeling()) {
                if (feelsEvil()) {
                    sendMessage('I want you to place the ' + toy + ' on a height that requires you to completely sit up while kneeling to reach it %EmoteHappy%');
                } else {
                    sendMessage('You can place the ' + toy + ' on a comfortable height');
                }
            }

            break;
        case 2:
            sendMessage('I want you to go to the nearest couch, bed or something similar');
            sendMessage('You already know what\'s going to happen don\'t you? %Grin%');
            sendMessage('You will lay down on your back and then you will put your head over the corner of your bed or couch');
            sendMessage('In the end your head should be upside down');
            sendMessage('This definitely will be a different experience %Lol%');
            break;
    }

    return position;
}