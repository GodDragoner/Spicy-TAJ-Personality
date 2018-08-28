if (getVar(VARIABLE_POSITION_TRAINING_STARTED, false) == false) {
    setVar(VARIABLE_POSITION_LEVEL, 1);
    setVar(VARIABLE_POSITION_TRAINING_STARTED, "positionTrainingStarted");

    sendMessage("Now %SlaveName%");
	sendMessage("I consider it rather important that you know your positions by heart.");
	sendMessage("So of course we're gonna spend some time once in a while making sure you know your positions.");
	sendMessage("Pay attention as I walk you through the different positions..");

    positionWalkthrough();

} else {
    sendMessage("%SlaveName%")
    if (randomInteger(1, 2) === 1) {
        sendMessage("A quick reminder of all the positions...");
        positionWalkthrough();
    }
}

var position_level = getVar(VARIABLE_POSITION_LEVEL, 1);

if (position_level <= 15) {
    simplePositionTrainingSelection(1);
} else if (position_level >= 30) {
    let chance = randomInteger(0, 100);
    if (chance < 5) {
        complicatedPositionTrainingSelection(3);
    } else if (chance < 35) {
        simplePositionTrainingSelection(randomInteger(1,2));
    } else if (chance < 70) {
        positionTrainingTestSelection();
    } else {
        complicatedPositionTrainingSelection(randomInteger(1,2))
    }
}

positionTrainingEnd();

function positionWalkthrough() {
    lockImages();
	sendMessage("Attention");
    showPicture("Images/Spicy/Positions/Attention1.jpg", 3);
	sendMessage("Bad bitch");
    showPicture("Images/Spicy/Positions/BadBitch2.jpg", 3);
    sendMessage("Bent over");
    showPicture("Images/Spicy/Positions/BentOver1.jpg", 3);
    sendMessage("Bent over open");
    showPicture("Images/Spicy/Positions/BentOverOpen2.jpg", 3);
    sendMessage("Box");
    showPicture("Images/Spicy/Positions/Box1.jpg", 3);
    sendMessage("Come fuck me");
    showPicture("Images/Spicy/Positions/CFM1.jpg", 3);
    sendMessage("Dog");
    showPicture("Images/Spicy/Positions/Dog1.jpg", 3);
	sendMessage("Judgment");
    showPicture("Images/Spicy/Positions/Judgement1.jpg", 3);
    sendMessage("Kneel");
    showPicture("Images/Spicy/Positions/Kneel1.jpg", 3);
	sendMessage("Listen");
    showPicture("Images/Spicy/Positions/Listen1.jpg", 3);
	sendMessage("Punishment");
    showPicture("Images/Spicy/Positions/Punishment1.jpg", 3);
	sendMessage("Slut");
    showPicture("Images/Spicy/Positions/Slut1.jpg", 3);
    sendMessage("Spanking");
    showPicture("Images/Spicy/Positions/Spanking1.jpg", 3);
    sendMessage("Stand");
    showPicture("Images/Spicy/Positions/Stand1.jpg", 3);
    sendMessage("Stand open");
    showPicture("Images/Spicy/Positions/StandOpen1.jpg", 3);
    sendMessage("Worship");
    showPicture("Images/Spicy/Positions/Worship1.jpg", 3);
    unlockImages();
}

function simplePositionTrainingIntro() {
    sendMessage(random("We're keeping it simple today","We're gonna do something simple","I'm gonna make you do something simple","This should be easy","This shouldn't be too hard"));
    sendMessage(random("I'm gonna show you a position","I'll show you a position","In a moment you'll see a position","In just a second I'm showing you a position","I'm showing you a position in a little moment"));
    sendMessage(random("I'll explain it in as much detail as needed","I'll tell you as much as possible","I'll go into a few details about it"));
    sendMessage(random("To make sure you understand it fully","So I'm sure you won't have any excuses","So we both know you understand it completely!","This way you won't have any excuses.."));
    sendMessage(random("When I'm done explaining","Once I've finished explaining","After I've explained it properly","Once it has been explained properly"));
    sendMessage(random("You're going to take the position","Your gonna take the position","You will take the position"));
    sendMessage(random("And you won't break it until you hear my bell","And you'll keep the position until the sound of my bell","And only once you hear my bell may you break it.."));

    while (true) {
        let answer = sendInput("Understood?", 10);
        if (answer.isTimeout()) {
            changeMeritMedium(true);
            sendMessage("Not being answered is a sign of disrespect");
            sendMessage("I don't like being disrespected");
            return;
            //TODO: Punish (GNM points + 25)
        } else if (answer.containsIgnoreCase("yes")) {
            changeMeritLow(false);
            sendMessage("%Good%");
            return;
        } else if (answer.containsIgnoreCase("no")) {
            changeMeritMedium(true);
            sendMessage("Don't take me for a fool");
            return;
        } else {
            changeMeritLow(true);
            sendMessage(YES_OR_NO + "%SlaveName%");
            answer.loop();
        }
    }
}

function simplePositionTrainingSelection(totalPositions) {

    simplePositionTrainingIntro();
    sendMessage("now then...")

    var simpleTraining = {
        currentTraining_a1 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Attention1.jpg");
            sendMessage("This is the attention position");
            sendMessage("It is one of two positions I could ask you to take if I want you to listen carefully");

            showImage("Images/Spicy/Positions/Attention2.jpg");
            sendMessage("Notice the hands with the fingers folded");
            sendMessage("Her feet with the top of them faced down");

            showImage("Images/Spicy/Positions/Attention1.jpg");
            sendMessage("The back lightly arched");
            sendMessage("Eyes looking straight ahead");
            unlockImages();

            sendMessage("Take the position");
            positionTrainingTimer();
        },
        currentTraining_a2 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/BadBitch2.jpg");
            sendMessage("This is the Bad bitch position");
            sendMessage("Notice the arched back");
            sendMessage("Top of the feet facing down");

            showImage("Images/Spicy/Positions/BadBitch2.jpg");
            sendMessage("Head down or up");

            showImage("Images/Spicy/Positions/BadBitch2.jpg");
            sendMessage("Legs somewhat apart allowing access");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a3 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/BentOver1.jpg");
            sendMessage("This is the Bent Over position");

            showImage("Images/Spicy/Positions/BentOver2.jpg");
            sendMessage("It gives the sub a feeling of submission");

            showImage("Images/Spicy/Positions/BentOver1.jpg");
            sendMessage("Even though in on these pictures the heels are touching the ground");

            showImage("Images/Spicy/Positions/BentOver3.jpg");
            sendMessage("I want you to raise your heels from the ground");

            showImage("Images/Spicy/Positions/BentOver2.jpg");
            sendMessage("Legs straight!");
            sendMessage("Fingers touching the top of your toes");

            showImage("Images/Spicy/Positions/BentOver1.jpg");
            sendMessage("Head down %Grin%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a4 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/BentOverOpen2.jpg");
            sendMessage("This is the Bent over open position");
            sendMessage("It's a lot like the bent over with the obvious exception of the legs spread");

            showImage("Images/Spicy/Positions/BentOverOpen3.jpg");
            sendMessage("Heels lifted from the ground, head down");

            showImage("Images/Spicy/Positions/BentOverOpen1.jpg");
            sendMessage("It's a nice position for humiliation, punishment or both");
            sendMessage("Balance is quite a 'bitch' %Grin%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a5 : function () {  
            lockImages();
            showImage("Images/Spicy/Positions/Box1.jpg");
            sendMessage("This is the Box position");
            sendMessage("The box is an excellent position");
            sendMessage("Its tougher than it looks");
            sendMessage("Some might prefer a pillow, but I trust you don't");
            sendMessage("Other than that the position speaks for itself..");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a6 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/CFM1.jpg");
            sendMessage("This is the Come fuck me position");
            
            showImage("Images/Spicy/Positions/CFM2.jpg");
            sendMessage("Excellent for fucking someone");

            showImage("Images/Spicy/Positions/CFM3.jpg");
            sendMessage("Back arched");

            showImage("Images/Spicy/Positions/CFM4.jpg");
            sendMessage("Humiliation in a lovely way %Grin%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a7 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Dog1.jpg");
            sendMessage("This is the Dog position");
            sendMessage("The dog is actually excellent as a spanking position");

            showImage("Images/Spicy/Positions/Box2.jpg");
            sendMessage("Notice how the legs and lower arms are pressed together");

            showImage("Images/Spicy/Positions/Box3.jpg");
            sendMessage("It's not one I use a lot but it still has its merit");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a8 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Judgement1.jpg");
            sendMessage("This is the Judgment position");
            sendMessage("It's primarily a spanking position");
            sendMessage("Heels off the ground");
            sendMessage("It's excellent for a good spanking %Grin%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a9 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Kneel1.jpg");
            sendMessage("This is the Kneel position");
            sendMessage("The kneel is great, notice the hands ready to be tied");
            sendMessage("This is great as a waiting or 'pay attention' position");
            sendMessage("With rice though its a completely different position %Lol%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a10 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Listen1.jpg");
            sendMessage("This is the Listen position");
            sendMessage("Great for when I need you to listen to what I'm telling you");
            sendMessage("Hands by the knees");
            sendMessage("Forehead touching the ground");
            sendMessage("Eyes closed");
            sendMessage("Just listening..");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a11 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Punishment1.jpg");
            sendMessage("This is the Punishment position");
            
            showImage("Images/Spicy/Positions/Punishment2.jpg");
            sendMessage("Excellent for spanking");

            showImage("Images/Spicy/Positions/Punishment3.jpg");
            sendMessage("Tied the right way and your %Balls% become very vulnerable");

            showImage("Images/Spicy/Positions/Punishment4.jpg");
            sendMessage("It's better than it looks %Grin%");

            showImage("Images/Spicy/Positions/Punishment5.jpg");
            sendMessage("Mhmm..");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a12 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Slut1.jpg");
            sendMessage("This is the Slut position");
            
            showImage("Images/Spicy/Positions/Slut2.jpg");
            sendMessage("This position is art %EmoteHappy%");

            showImage("Images/Spicy/Positions/Slut1.jpg");
            sendMessage("Its primarily used for girls");

            showImage("Images/Spicy/Positions/Slut2.jpg");
            sendMessage("But that's not gonna keep you from learning %Lol%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a13 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Spanking1.jpg");
            sendMessage("This is the Spanking position");
            
            showImage("Images/Spicy/Positions/Spanking2.jpg");
            sendMessage("Absolutely fantastic for spanking");

            showImage("Images/Spicy/Positions/Spanking1.jpg");
            sendMessage("Even better for a caning");

            showImage("Images/Spicy/Positions/Spanking2.jpg");
            sendMessage("Imagine being told that movement awards extra hits! %Grin%");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a14 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Stand1.jpg");
            sendMessage("This is the Stand position");
            sendMessage("This shouldn't be hard to learn!");
            
            showImage("Images/Spicy/Positions/Stand3.jpg");
            sendMessage("Stand on your toes");

            showImage("Images/Spicy/Positions/Stand2.jpg");
            sendMessage("Arms down");
            sendMessage("Eyes looking down..");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a15 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/StandOpen1.jpg");
            sendMessage("This is the Stand open position");
            sendMessage("Imagine being ballbusted in this");
            sendMessage("Told that if your heels touch the ground we're starting over..");
            sendMessage("Hands behind head");
            sendMessage("Legs apart nicely");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        },
        currentTraining_a16 : function () {
            lockImages();
            showImage("Images/Spicy/Positions/Worship1.jpg");
            sendMessage("This is the Worship position");
            sendMessage("Worship");
            sendMessage("I don't think much explaining is needed here..");
            unlockImages();

            sendMessage("Take the position.");
            positionTrainingTimer();
        }
    };

    var positionsDone = 0;

    let trainingSet = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16"];
    while (positionsDone < totalPositions) {

        if (totalPositions - positionsDone == 1) {
            sendMessage("We're doing 1 more position...");
        }

        let currentTraining = trainingSet[randomInteger(0, trainingSet.length - 1)];
        trainingSet = trainingSet.filter(function(e) { return e !== currentTraining });
        simpleTraining['currentTraining_' + currentTraining]();
        positionsDone++;
    }
}

function positionTrainingTimer() {
    // let position_level = getVar(VARIABLE_POSITION_LEVEL);
    if (position_level <= 15) {
        sleep(randomInteger(120, 240));
        returnSlave();      
    } else if (position_level >= 30) {
        sleep(randomInteger(240, 360));
        returnSlave();      
    } else {
        sleep(randomInteger(180, 300));
        returnSlave();      
    }
}

function positionTrainingTestSelection() {
    positionTestWrong = 0;
    positionTestRight = 0;

    sendMessage("I think it's time for a little test");
    sendMessage("I think its important for a %SlaveName%");
    sendMessage("To sometimes be tested");
    sendMessage("To ensure that you keep improving yourself");
    sendMessage("I will ask you some questions.");
    sendMessage("Get 6 right and I will reward you");
    sendMessage("Get 3 wrong and you will be awarded with punishment points");
    sendMessage("So lets get to it..");

    var positionTests = {
        currentTest_position1 : function(){positionTest("1", "attention", "Images/Spicy/Positions/Attention1.jpg")},        
        currentTest_position2 : function(){positionTest("2", "bad bitch", "Images/Spicy/Positions/BadBitch2.jpg")},
        currentTest_position3 : function(){positionTest("3", "bent over", "Images/Spicy/Positions/BentOver2.jpg")},
        currentTest_position4 : function(){positionTest("4", "bent over open", "Images/Spicy/Positions/BentOverOpen1.jpg")},
        currentTest_position5 : function(){positionTest("5", "box", "Images/Spicy/Positions/Box1.jpg")},
        currentTest_position6 : function(){positionTest("6", "come fuck me", "Images/Spicy/Positions/CFM1.jpg")},
        currentTest_position7 : function(){positionTest("7", "dog", "Images/Spicy/Positions/Dog1.jpg")},
        currentTest_position8 : function(){positionTest("8", "judgement", "Images/Spicy/Positions/Judgement1.jpg")},
        currentTest_position9 : function(){positionTest("9", "kneel", "Images/Spicy/Positions/Kneel1.jpg")},
        currentTest_position10 : function(){positionTest("10", "listen", "Images/Spicy/Positions/Listen1.jpg")},
        currentTest_position11 : function(){positionTest("11", "punishment", "Images/Spicy/Positions/Punishment4.jpg")},
        currentTest_position12 : function(){positionTest("12", "slut", "Images/Spicy/Positions/Slut2.jpg")},
        currentTest_position13 : function(){positionTest("13", "spanking", "Images/Spicy/Positions/Spanking1.jpg")},
        currentTest_position14 : function(){positionTest("14", "stand", "Images/Spicy/Positions/Stand1.jpg")},
        currentTest_position15 : function(){positionTest("15", "stand open", "Images/Spicy/Positions/StandOpen1.jpg")},
        currentTest_position16 : function(){positionTest("16", "worship", "Images/Spicy/Positions/Worship1.jpg")}
    }
    
    let testSet = ["position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9", "position10", "position11", "position12", "position13", "position14", "position15", "position16"];
    while (true) {
        let currentTest = testSet[randomInteger(0, testSet.length - 1)];
        testSet = testSet.filter(function(e) { return e !== currentTest });
        positionTests['currentTest_' + currentTest]();

        if (positionTestWrong == 3) {
            positionTestPunish();
            break;
        } else if (positionTestRight == 6) {
            positionTestReward();
            break;
        }
    }
}

function positionTestPunish(){
    sendMessage("I'm sorry %SlaveName% but that was your third wrong answer");
    sendMessage("I've awarded you punishment points..");
    setVar(VARIABLE_PUNISHMENT_POINTS, getVar(VARIABLE_PUNISHMENT_POINTS + randomInteger(50,150)));
    sendMessage("Next time I expect more from you!");
    setVar(VARIABLE_POSITION_LEVEL = position_level - 1);
}

function positionTestReward(){
    sendMessage("Well done %SlaveName%");
    sendMessage("That was 6 right and " + positionTestWrong + " wrong!");
    if (positionTestWrong == 0) {
        sendMessage("You've impressed me by having 0 mistakes so I feel generous %Grin%");
        rewardGoldHigh();
    } else if (positionTestWrong == 1) {
        sendMessage("Only one mistake! Well done!");
        rewardGoldMedium();
    } else if (positionTestWrong == 2) {
        sendMessage("Since you had 2 mistakes afterall I'm not giving you too much gold");
        rewardGoldLow();
    }
    setVar(VARIABLE_POSITION_LEVEL, position_level + 1);
    sendMessage("I've transferred the gold");
    sendMessage("And you now have " + getGold() + " gold");
    sendMessage("Brave %EmoteHappy%");
}

function positionTest(number, name, image) {

    let chance = randomInteger(0,100);

    if (chance < 25) {
        while (true) {
            let answer = sendInput("Which position is number " + number + "?", 20);
            if (answer.isTimeout()) {
                positionTestWrong++;
                sendMessage("Too slow %SlaveName%");
                break;
            } else if (answer.containsIgnoreCase(name)) {
                positionTestRight++;
                sendMessage("Correct");
                break;
            } else {
                positionTestWrong++;
                sendMessage("Wrong!");
                break;
            }
        }
    } else if (chance < 50) {
        while (true) {
            let answer = sendInput("Which number belongs to position " + name + "?", 20);
            if (answer.isTimeout()) {
                positionTestWrong++;
                sendMessage("Too slow %SlaveName%");
                break;
            } else if (answer.containsIgnoreCase(number)) {
                positionTestRight++;
                sendMessage("Correct");
                break;
            } else {
                positionTestWrong++;
                sendMessage("Wrong!");
                break;
            }
        }
    } else if (chance < 75) {
        sendMessage("Take position number " + number, 10);
        lockImages();
        showImage(image);
        let answer = sendInput("Take a good look, are you in this exact position?", 60);
        unlockImages();
        while (true) {
            if (answer.isTimeout()) {
                positionTestWrong++;
                sendMessage("Too slow %SlaveName%");
                break;
            } else if (answer.containsIgnoreCase("yes")) {
                positionTestRight++;
                sendMessage("%Good%");
                break;
            } else if (answer.containsIgnoreCase("no")){
                positionTestWrong++;
                sendMessage("Bad!");
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    } else {
        sendMessage("Take " + name + " position", 10);
        lockImages();
        showImage(image);
        let answer = sendInput("Take a good look, are you in this exact position?", 60);
        unlockImages();
        while (true) {
            if (answer.isTimeout()) {
                positionTestWrong++;
                sendMessage("Too slow %SlaveName%");
                break;
            } else if (answer.containsIgnoreCase("yes")) {
                positionTestRight++;
                sendMessage("%Good%");
                break;
            } else if (answer.containsIgnoreCase("no")){
                positionTestWrong++;
                sendMessage("Bad!");
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }
}

function positionTrainingEnd() {
    sendMessage(random("We're at the end of your position training", "That was it", "We're at the end", "Well that was it", "Oh my we're finally at the end %Grin%") + " %SlaveName%");
    playSound("Audio/Spicy/SpecialSounds/Bell.mp3");
    sendMessage(random("It was fun!", "I had a lot of fun", "I enjoyed it", "Well this was fun!", "I had a blast", "I really enjoyed this!", "Oh my was this fun"));
    changeMeritMedium(false);
    if (position_level < 50) {
        setVar(VARIABLE_POSITION_LEVEL, position_level + 1);
    }
}

