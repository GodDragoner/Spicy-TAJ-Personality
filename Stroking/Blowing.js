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
    return getVar(VARIABLE.BLOWJOB_LEVEL, 0);
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
    sendBlowingTaunts(duration);
}

function startBlowToy(toy) {
    sendMessage("Okay...");
    sendMessage('Place that ' + toy + ' in front of you', 5);

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

                let answers = ["Keep going", "Keep it up %SlaveName%", "Lick it... Gentle and slowly", "Come on %SlaveName%. Show some passion!"];

                if (getCuckoldLimit() == LIMIT_ASKED_YES) {
                    answers.push("Lick it like it was my lover's cock");
                }

                for (let x = 0; x < randomInteger(2, 4); x++) {
                    let randomAnswer = randomInteger(0, answers.length - 1);
                    sendMessage(answers[randomAnswer], 10);

                    //Do not resuse answers
                    answers = removeIndexFromArray(answers, randomAnswer);
                }
            }

            //Increase chance if we didn't just play with the tip
            if (isChance(50) && caressingTip || !caressingTip && isChance(80)) {
                sendMessage("So now...");

                //if it's a bad mood we will rush over the teasing part
                let minPerStep = 25 - (getMood() * 5);

                sendMessage("Start licking up and down the whole " + toy, randomInteger(minPerStep, minPerStep + 10));
                sendMessage("All the way down and up", randomInteger(minPerStep, minPerStep + 10));
                sendMessage("Be passionate and imagine it being another men's cock", randomInteger(minPerStep, minPerStep + 10));

                if(isChance(20)) {
                    sendMessage(random('Remember that teasing and slowly starting is always important to get things nice and hard', 'Starting off slowly is the best way to get things nice and hard'));

                    if(SISSY_LIMIT.isAllowed()) {
                        sendMessage('You might need that knowledge at some point my little sissy girl %Wicked%');
                    }
                }

                //TODO: ASM interactions
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
}

function randomBlowjobModule(toy) {
    let position;
    sendMessage('%SlaveName%');

    if (getBlowjobLevel() < 20) {
        position = getIntoBlowjobPosition(toy, 0)
    } else {
        position = getIntoBlowjobPosition(toy, getPosition())
    }

    if (getBlowjobLevel() < 30 || isChance(50)) {
        startNormalBlowjobModule();
    } else {
        startDeepthroatModule();
    }

    //sendMessage('You can put your ' + toy + ' away for now %EmoteHappy%');
}


function startNormalBlowjobModule() {
    sendMessage('Let\'s go easy on you for now');

    if (!isVar('blowjobSoundExplanation')) {
        sendMessage('In a moment you are gonna hear sounds that tell you what to do');
        sendMessage('Let me explain them to you first');

        sendMessage('This is how light sucking sounds meaning you must suck the cock head', 0);
        playSound("Audio/Spicy/Modules/BJTraining/BJLightSucks/MediumSuck15sec.mp3", false);
        sleep(5);
        stopAudio();

        sendMessage('When you hear something like this I want you to swirl your tongue around the cock head...', 0);
        playSound("Audio/Spicy/Modules/BJTraining/BJTongueExercise/*.mp3", false);
        sleep(5);
        stopAudio();

        sendMessage('I might also ask you to put your finger in your mouth and have you trigger the gag reflex...', 0);
        playSound("Audio/Spicy/Modules/BJTraining/BJFingerGagging/*.mp3", false);
        sendMessage('You will have to do that until I tell you to stop');
        sendMessage('It\'s important you learn to control it if you\'re ever to learn deepthroating...');
        stopAudio();

        sendMessage('You know this sound well, but during blowjob training it means to stroke the dildo while you blow it lightly');
        playSound("Audio/Spicy/Stroking/Metronome2/*.mp3", false);
        sleep(5);
        stopAudio();

        sendMessage('This is the sound for deepthroating and you will only stop holding the deepthroat when I tell you to stop!');
        playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroatLong/DeepThroat.mp3", false);
        sleep(5);
        stopAudio();

        sendMessage('If there is no "gagging" it is a deep suck, meaning you have to suck it balls deep! Up and down...');
        playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroat/DeepSlow1min.mp3", false);
        sleep(5);
        stopAudio();

        sendMessage('That was it...');
        setVar('blowjobSoundExplanation', true);
    }

    let startDate = setDate();
    startDate.addSecond(getSlaveTrainingModuleTime());

    while (!startDate.hasPassed()) {
        if (isChance(25)) {
            playSound("Audio/Spicy/Modules/BJTraining/GeneralEncourage/*.mp3", true);
        }

        switch (randomInteger(0, 6)) {
            case 0:
                sendMessage(random("Light sucks", "Stick with the beat!", "Follow the beat", "Light sucking to the beat", "Suck lightly to the beat", "Light sucking - only the cockhead..."));

                if (isChance(50)) playSound("Audio/Spicy/Modules/BJTraining/BJLightSucksVaried/12345_1min.mp3", true);
                else playSound("Audio/Spicy/Modules/BJTraining/BJLightSucksVaried/123123_1min.mp3", true);
                break;
            case 1:
                sendMessage(random("Light sucks", "Stick to the beat!", "Follow the beat", "Light sucking to the beat", "Suck lightly to the beat", "Light sucking - only the cockhead..."));

                if (isChance(50) && getBlowjobLevel() >= 15) {
                    playSound("Audio/Spicy/Modules/BJTraining/BJLightSucks/MediumSuck1min.mp3", true);
                } else {
                    playSound("Audio/Spicy/Modules/BJTraining/BJLightSucks/MediumSuck15sec.mp3", true);
                }
                break;
            case 2:
                sendMessage(random("Swirl your tongue", "Swirl that tongue around", "Swirl your tongue around that cockhead!", "Use the tongue!"));
                playSound("Audio/Spicy/Modules/BJTraining/BJTongueExercise/*.mp3", true);
                break;
            case 3:
                sendMessage(random("Stroke it", "Stroke the dildo", "Stroke that dick", "Stroke that cock", "Stroke that huge dildo", "Stroke it!", "Stroke stroke stroke!"));

                playSound("Audio/Spicy/Modules/BJTraining/BJHandStroking/*.mp3", true);

                playSound("Audio/Spicy/Stroking/Metronome2/*.mp3");
                sleep(20);
                stopAudio();
                break;
            case 4:
                if (getBlowjobLevel() >= 20) {
                    if (isChance(50)) {
                        sendMessage(random('Deep throat!', 'Deep throat that cock', 'Deep throat the dildo', 'Get that cock into the back of your throat', 'All the way down!', 'Suck it balls deep!', 'Suck it all the way down'), 0);

                        //Teasing with words
                        if (isChance(50)) {
                            playSound("Audio/Spicy/Blowjob/Deepthroat/*.mp3", true);
                        }

                        playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroat/DeepSlow1min.mp3", true);
                    } else {
                        if (getBlowjobLevel() >= 25) {
                            //Teasing with words
                            if (isChance(50)) {
                                playSound("Audio/Spicy/Blowjob/Deepthroat/*.mp3", true);
                            }

                            if (isChance(50)) {
                                sendMessage(random('All the way down and back up fast!', 'Deep fast sucks!', 'Suck it deep and fast', 'Make that cock pound your throat hard and fast'), 0);
                                playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroatFast/FastDeep1min.mp3", true);
                            } else {
                                sendMessage(random('Deep throat!', 'Deep throat that cock', 'Deep throat the dildo', 'Get that cock into the back of your throat', 'All the way down!', 'Suck it balls deep!', 'Suck it all the way down'));
                                playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroatLong/DeepThroat.mp3", true);
                                sleep(randomInteger(15, 60));
                            }
                        } else {
                            sendMessage(random('Deep throat!', 'Deep throat that cock', 'Deep throat the dildo', 'Get that cock into the back of your throat', 'All the way down!', 'Suck it balls deep!', 'Suck it all the way down'));
                            playSound("Audio/Spicy/Modules/BJTraining/BJDeepThroatLong/DeepThroat.mp3", true);
                            sleep(randomInteger(5, 20));
                        }
                    }
                } else {
                    sendMessage(random('Finger to the back of your throat', 'Put your finger down your throat', 'Get that finger down your throat', 'Use your finger to trigger the gag reflex', 'Trigger the gag reflex with your finger'), 0);

                    playSound("Audio/Spicy/Blowjob/Deepthroat/*.mp3", true);
                    sleep(randomInteger(5, 15));
                }

                sendMessage("You can stop gagging now %Grin%");
                break;
            case 5:
                sendMessage(random("Suck fast!", "Fast sucking!", "Suck it fast", "Suck it swiftly", "Suck it fast!", "Make sure you suck it fast!"));

                playSound("Audio/Spicy/Modules/BJTraining/BJFastSucking/FastSuck1Min.mp3", true);
                break;
        }
    }
}

function decideDeepthroatBowl() {
    const bowl = isChance(50);

    let introduceNewRule = shouldIntroduceNewRule(RULE_NEVER_SWALLOW_SPIT);

    if (RULE_NEVER_SWALLOW_SPIT.isActive() || !introduceNewRule) {
        sendMessage('And remember: Good sissies only swallow cum and no spit!');

        if (bowl) {
            sendMessage('Which is why you should get a bowl to catch all that nasty spit!');
            sendMessage('Tell me when you fetched your bowl %SlaveName%');
            waitForDone();
        } else {
            sendMessage('Try to keep all that spit in your mouth and anything that leaves your mouth should be slowly dripping onto your body %Grin%');
        }
    } else if (introduceNewRule) {
        RULE_NEVER_SWALLOW_SPIT.sendIntroduction();
        sendMessage('Try to keep all that spit in your mouth and anything that leaves your mouth should be slowly dripping onto your body %Grin%');
    }

    return bowl;
}

function startDeepthroatTasks(tasksToDo = 10, createSpiLube = false, bowl = false) {
    let tasksDone = 0;
    let usedBlowjobInstructions = new java.util.ArrayList();

    //How many rounds have passed without interacting with the bowl
    let bowlCounter = 0;

    sendDebugMessage('Starting deepthroat with ' + tasksToDo + ' tasks');

    while (tasksDone < tasksToDo) {
        let taskIndex = randomInteger(0, 10);

        //Try to find a new different task
        if (usedBlowjobInstructions.size() >= 1 && usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == taskIndex ||
            usedBlowjobInstructions.size() >= 2 && usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 2) == taskIndex) {
            continue;
        }

        if (bowl) {
            bowlCounter++;
        }

        let tasks = [];

        switch (taskIndex) {
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
                    "Push it down your throat and out as fast you can 3 times, repeat it 3 times",
                    "Push it down your throat, rotate it 360° two times and pull it out as fast you can 3 times, repeat it 3 times"];
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
                tasks = ["Push the dildo as deep as you can and out of the mouth fast 30 times",
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
                    "Push the dildo as far as you can, leave it there for 6 seconds",
                    "Push the dildo as far as you can, leave it there for 9 seconds",
                    "Push the dildo as far as you can, leave it there for 12 seconds",
                    "Push the dildo as far as you can, leave it there for 15 seconds",
                    "Push the dildo as far as you can, leave it there for 18 seconds"];
                break;
            case 8:
                //Too few spit
                if (usedBlowjobInstructions.isEmpty()) {
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
                //Save spit, too few spit or already used spit in previous task
                if (createSpiLube || !bowl || bowlCounter < 3) {
                    continue;
                }

                bowlCounter = 0;
                tasks = ["Pour the whole content from your bowl all over your face %Grin%"];
                break;
            case 10:
                //Save spit, too few spit or already used spit in previous task
                if (createSpiLube || !bowl || bowlCounter < 3) {
                    continue;
                }

                bowlCounter = 0;
                tasks = ["I want you to snort half of the spit in your bowl through your left nostril and the other half through your right one. This is gonna be gross %Lol%"];
                break;
        }

        const level = random(0, tasks.length - 1);

        if (usedBlowjobInstructions.contains(taskIndex)) {
            let sentenceStart = random('And yet again', 'Yet again', 'Once more', 'And once more') + ' ';

            sendMessage(sentenceStart + decapitalize(tasks[level]));
        } else {
            sendMessage('' + tasks[level]);
        }

        if (tasksDone === 0) {
            sendMessage('Tell me when you are done!');
        } else if (tasksDone >= 1) {
            sendMessage('And yet again tell me when you are done');
        }

        //TODO: "Can't do" it interaction?
        waitForDone(1000);

        usedBlowjobInstructions.add(taskIndex);
        tasksDone++;
    }

    if (bowlCounter >= 3 && bowl) {
        sendMessage('Pour the whole content from your bowl all over your face %Grin%');
    }
}

function startDeepthroatModule(createSpitLube = false) {
    let tasks;

    if (!createSpitLube) {
        sendMessage('For the time being we should really try to make your throat as sore as possible %Grin%');
    } else {
        sendMessage('We should create some spit for you to use as lube');
    }

    sendMessage('And what\'s better for that than doing a few deepthroats?');
    sendMessage('So get ready to get your throat filled!');
    sendMakeMeProud();

    let bowl = false;

    if (!createSpitLube) {
        bowl = decideDeepthroatBowl();
    }

    startDeepthroatTasks(10, createSpitLube, bowl);
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
            sendMessage('%KnowWhatsNext%');
            sendMessage('You will lay down on your back and then you will put your head over the corner of your bed or couch');
            sendMessage('In the end your head should be upside down');
            sendMessage('This definitely will be a different experience %Lol%');
            break;
    }

    return position;
}