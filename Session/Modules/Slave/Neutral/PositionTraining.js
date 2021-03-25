{

    //TOADD: Add toy usage
    if(tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.UNKNOWN)) {


        if (!getVar(VARIABLE.POSITION_TRAINING_STARTED, false)) {
            setVar(VARIABLE.POSITION_LEVEL, 1);
            setVar(VARIABLE.POSITION_TRAINING_STARTED, true);

            sendMessage("Now %SlaveName%");
            sendMessage("I consider it rather important that you know your positions by heart.");
            sendMessage("So of course we're gonna spend some time once in a while making sure you know your positions.");
            sendMessage("Pay attention as I walk you through the different positions..");

            positionWalkthrough();
        } else {
            sendMessage("%SlaveName%");
            sendMessage('Let\'s ' + random('do some position training', 'train your position knowledge'));

            if (isChance(50)) {
                sendMessage("A quick reminder of all the positions...");
                positionWalkthrough();
            }
        }

        if(isKneeling()) {
            sendMessage('You are allowed to stop kneeling until we are done with the positions');
            sendMessage('Then you are to kneel without hesitation again %Grin%');
        }

        const positionLevel = getVar(VARIABLE.POSITION_LEVEL, 1);

        if (positionLevel <= 15) {
            simplePositionTrainingSelection(randomInteger(1, 3));
        } else if (positionLevel >= 30) {
            let chance = randomInteger(0, 100);
            if (chance < 5) {
                complicatedPositionTrainingSelection(3);
            } else if (chance < 35) {
                simplePositionTrainingSelection(randomInteger(2, 4));
            } else if (chance < 70) {
                positionTrainingTestSelection();
            } else {
                complicatedPositionTrainingSelection(randomInteger(1, 3))
            }
        } else {
            let chance = randomInteger(0, 100);
            if (chance < 5) {
                complicatedPositionTrainingSelection(3);
            } else if(chance <= 45) {
                complicatedPositionTrainingSelection(randomInteger(1, 3));
            } else {
                simplePositionTrainingSelection(randomInteger(2, 4));
            }
        }

        positionTrainingEnd();
    }

}

function positionWalkthrough() {
    lockImages();
	sendMessage("Attention", 0);
    showPicture("Images/Spicy/Positions/Attention1.jpg", 3);
	sendMessage("Bad bitch", 0);
    showPicture("Images/Spicy/Positions/BadBitch2.jpg", 3);
    sendMessage("Bent over", 0);
    showPicture("Images/Spicy/Positions/BentOver1.jpg", 3);
    sendMessage("Bent over open", 0);
    showPicture("Images/Spicy/Positions/bentOverOpen2.jpg", 3);
    sendMessage("Box", 0);
    showPicture("Images/Spicy/Positions/Box1.jpg", 3);
    sendMessage("Come fuck me", 0);
    showPicture("Images/Spicy/Positions/CFM1.jpg", 3);
    sendMessage("Dog", 0);
    showPicture("Images/Spicy/Positions/Dog1.jpg", 3);
	sendMessage("Judgment", 0);
    showPicture("Images/Spicy/Positions/Judgement1.jpg", 3);
    sendMessage("Kneel", 0);
    showPicture("Images/Spicy/Positions/Kneel1.jpg", 3);
	sendMessage("Listen", 0);
    showPicture("Images/Spicy/Positions/Listen1.jpg", 3);
	sendMessage("Punishment", 0);
    showPicture("Images/Spicy/Positions/Punishment1.jpg", 3);
	sendMessage("Slut", 0);
    showPicture("Images/Spicy/Positions/Slut1.jpg", 3);
    sendMessage("Spanking", 0);
    showPicture("Images/Spicy/Positions/Spanking1.jpg", 3);
    sendMessage("Stand", 0);
    showPicture("Images/Spicy/Positions/Stand1.jpg", 3);
    sendMessage("Stand open", 0);
    showPicture("Images/Spicy/Positions/StandOpen1.jpg", 3);
    sendMessage("Worship", 0);
    showPicture("Images/Spicy/Positions/Worship1.jpg", 3);
    unlockImages();
}

function simplePositionTrainingIntro() {
    sendMessage(random("We're keeping it simple today","We're gonna do something simple","I'm gonna make you do something simple","This should be easy","This shouldn't be too hard"));
    sendMessage(random("I'm gonna show you a position","I'll show you a position","In a moment you'll see a position","In just a second I'm showing you a position","I'm showing you a position in a little moment"));
    sendMessage(random("I'll explain it in as much detail as needed","I'll tell you as much as possible","I'll go into a few details about it"));
    sendMessage(random("To make sure you understand it fully","So I'm sure you won't have any excuses","So we both know you understand it completely!","This way you won't have any excuses.."));
    sendMessage(random("When I'm done explaining","Once I've finished explaining","After I've explained it properly","Once it has been explained properly"));
    sendMessage(random("You're going to take the position","You're gonna take the position","You will take the position"));
    sendMessage(random("And you won't leave it until you hear my bell","And you'll keep the position until the sound of my bell","And only once you hear my bell may you leave it..."));

    while (true) {
        let answer = sendInput("Understood?", 10);
        if (answer.isTimeout()) {
            changeMeritMedium(true);
            sendMessage("Not being answered is a sign of disrespect");
            sendMessage("I don't like being disrespected");
            addPunishmentPoints(25, PUNISHMENT_REASON.BRAT);
            return;
        } else if (answer.containsIgnoreCase("yes")) {
            changeMeritLow(false);
            sendMessage("%Good%");
            return;
        } else if (answer.containsIgnoreCase("no")) {
            changeMeritMedium(true);
            sendMessage("Don't take me for a fool");
            addPunishmentPoints(25, PUNISHMENT_REASON.BRAT);
            return;
        } else {
            changeMeritLow(true);
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function simplePositionTrainingSelection(totalPositions) {

    simplePositionTrainingIntro();
    sendMessage("Now then...");

    const simpleTraining = {
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
            sendMessage("Even though on these pictures the heels are touching the ground");

            showImage("Images/Spicy/Positions/bentOver3.jpg");
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
            showImage("Images/Spicy/Positions/bentOverOpen2.jpg");
            sendMessage("This is the Bent over open position");
            sendMessage("It's a lot like the bent over with the obvious exception of the legs spread");

            showImage("Images/Spicy/Positions/bentOverOpen3.jpg");
            sendMessage("Heels lifted from the ground, head down");

            showImage("Images/Spicy/Positions/bentOverOpen1.jpg");
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
            sendMessage("It's tougher than it looks");
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

            showImage("Images/Spicy/Positions/Dog2.jpg");
            sendMessage("Notice how the legs and lower arms are pressed together");

            showImage("Images/Spicy/Positions/Dog3.jpg");
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
            sendMessage("With rice though it's a completely different position %Lol%");
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
            sendMessage("Tied the right way and %MyYour% %Balls% become very vulnerable");

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
            sendMessage("It's primarily used for girls");

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
            sendMessage("Imagine getting %MyYour% %Balls% busted in this");
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

    let positionsDone = 0;

    let trainingSet = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16"];
    while (positionsDone < totalPositions) {

        if (totalPositions - positionsDone == 1 && positionsDone > 0) {
            sendMessage("We're doing 1 more position...");
        }

        let currentTraining = trainingSet[randomInteger(0, trainingSet.length - 1)];
        trainingSet = trainingSet.filter(function(e) { return e !== currentTraining });
        simpleTraining['currentTraining_' + currentTraining]();
        positionsDone++;
    }
}

function positionTrainingTimer() {
    let positionLevel = getVar(VARIABLE.POSITION_LEVEL);

    if (positionLevel <= 15) {
        sleep(randomInteger(120, 240));
        returnSlave();      
    } else if (positionLevel >= 30) {
        sleep(randomInteger(240, 360));
        returnSlave();      
    } else {
        sleep(randomInteger(180, 300));
        returnSlave();      
    }
}

function positionTrainingTestSelection() {
    let positionTestWrong = 0;
    let positionTestRight = 0;

    sendMessage("I think it's time for a little test");
    sendMessage("I think it's important for a %SlaveName%");
    sendMessage("To sometimes be tested");
    sendMessage("To ensure that you keep improving yourself");
    sendMessage("I will ask you some questions.");
    sendMessage("Get 6 right and I will reward you");
    sendMessage("Get 3 wrong and you will be awarded with punishment points");
    sendMessage("So let's get to it..");

    const positionTests = {
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
    addPunishmentPoints(randomInteger(50,150), PUNISHMENT_REASON.POOR_BEHAVIOUR);
    sendMessage("Next time I expect more from you!");
    setVar(VARIABLE.POSITION_LEVEL, positionLevel - 1);
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
        sendMessage("Since you had 2 mistakes after all I'm not giving you too much gold");
        rewardGoldLow();
    }
    setVar(VARIABLE.POSITION_LEVEL, positionLevel + 1);
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
                sendMessage(YES_OR_NO, 0);
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
                sendMessage(YES_OR_NO, 0);
                answer.loop();
            }
        }
    }
}

function positionTrainingEnd() {
    sendMessage(random("We're at the end of your position training", "That was it", "We're at the end", "Well that was it") + " %SlaveName%");
    sendAsMuchFun();
    changeMeritMedium(false);
    if (getVar(VARIABLE.POSITION_LEVEL) < 50) {
        incrementVar(VARIABLE.POSITION_LEVEL, 1);
    }
}

function complicatedPositionTrainingSelection(totalPositions) {

    sendMessage("%SlaveName%");
    sendMessage(random(
        "It's time for some real fun!",
        "Time for some fun",
        "Let's have a little fun",
        "I'm gonna make things interesting",
        "This should be quite interesting"
    ));

    sendMessage(random("A real challenge","A bit of a challenge","A fun challenge","An exciting challenge","Definitely a challenge") + " %Lol%" );

    //TOADD: Fix this mess up lul
    const complicatedTraining = {
        currentTraining_b1 : function () {
            sendMessage("For this one you'll need your gag and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("Put the pegs on your nipples and the gag in your mouth.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c3']();
                return true;
            }
        },
        currentTraining_b2 : function () {
            sendMessage("For this one you'll need your gag and a buttplug");
            sendMessage("Go and fetch them.");
            sendMessage("Put them in %Grin%");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_'  + random('c2', 'c6')]();
                return true;
            }
        },
        currentTraining_b3 : function () {
            sendMessage("For this one you'll need your gag a buttplug and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("Put both the plug and gag in");
            sendMessage("and finally put the pegs on your nipples.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c1']();
                return true;
            }
        },
        currentTraining_b4 : function () {
            sendMessage("For this one you'll need your gag and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("Gag yourself");
            sendMessage("and put the pegs on your nipples.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c8']();
                return true;
            }
        },
        currentTraining_b5 : function () {
            sendMessage("For this one you'll need your gag, parachute and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("Gag yourself");
            sendMessage("The parachute goes on %MyYour% %Balls%");
            sendMessage("I want you to hang " + getWeightForParachute() + "kg's from it %Lol%");
            sendMessage("place the pegs on your nipples.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c4']();
                return true;
            }
        },
        currentTraining_b6 : function () {
            sendMessage("For this one you'll need your gag and some rice.");
            sendMessage("Go and fetch them.");
            sendMessage("Gag yourself and place the rice where you will do the position");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c10']();
                return true;
            }
        },
        currentTraining_b7 : function () {
            sendMessage("For this one you'll need your gag and parachute");
            sendMessage("Go and fetch them.");
            sendMessage("Gag yourself");
            sendMessage("and put on the parachute, attach " + getWeightForParachute() + "kg's to it");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c11']();
                return true;
            }
        },
        currentTraining_b8 : function () {
            sendMessage("For this one you'll need your parachute and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("put on the parachute, attach " + getWeightForParachute() + "kg's to it");
            sendMessage("place the pegs on your nipples.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c15']();
                return true;
            }
        },
        currentTraining_b9 : function () {
            sendMessage("All you need for this is some rice.");
            sendMessage("Go and fetch it.");
            sendMessage("Place it where you will do the position.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_' + random('c9', 'c16')]();
                return true;
            }
        },
        currentTraining_b10 : function () {
            sendMessage("For this one you'll need some rice and " + randomInteger(4,8) + " pegs");
            sendMessage("Go and fetch them.");
            sendMessage("put the pegs on your nipples and the rice where you will do the position.");
            sendMessage("place the pegs on your nipples.");
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c5']();
                return true;
            }
        },
        currentTraining_b11 : function () {
            sendMessage("For this you'll need some lingerie.");
            sendMessage("Go ahead and put on");
            lockImages();
            if (randomInteger(1,5) == 1) {
                sendMessage("A pair of stockings");
                showImage("Images/Spicy/Toys/Lingerie/Stockings/*.jpg");
                sendMessage("This garterbelt");
                showImage("Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg");
            }
            sendMessage("These panties");
            showImage("Images/Spicy/Toys/Lingerie/Panties/*.jpg");
            sendMessage("And this bra %Grin%");
            showImage("Images/Spicy/Toys/Lingerie/Bra/*.jpg");
            unlockImages();
            if (!checkPositionToys()) {
                return false;
            } else {
                complicatedTraining['currentTraining_c12']();
                return true;
            }
        },
        currentTraining_b12 : function () {
            complicatedTraining['currentTraining_c13']();
        },
        currentTraining_c1 : function () {
            sendMessage("With all your gear I want you to take the attention position");
            lockImages();
            showImage("Images/Spicy/Positions/Attention1.jpg");
            sendMessage("Do not change the position unless I tell you otherwise");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I know this can get tough on the knees but make me proud!");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c2 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the bad bitch position");
            lockImages();
            showImage("Images/Spicy/Positions/BadBitch2.jpg");
            sendMessage("Head down");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c3 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Bent over position");
            lockImages();
            showImage("Images/Spicy/Positions/BentOver2.jpg");
            sendMessage("Head down");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I want you to count every time you lose your balance");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
            positionCheckBalance();
        },
        currentTraining_c4 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Bent over open position");
            lockImages();
            showImage("Images/Spicy/Positions/bentOverOpen2.jpg");
            sendMessage("Head down");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I want you to count every time you lose your balance");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
            positionCheckBalance();
        },
        currentTraining_c5 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the box position");
            lockImages();
            showImage("Images/Spicy/Positions/Box1.jpg");
            sendMessage("Head high and on your knees");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c6 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the come fuck me position");
            lockImages();
            showImage("Images/Spicy/Positions/CFM3.jpg");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c7 : function () {
            sendMessage("Now %SlaveName%");
            sendMessage("Find a few shoelaces or similar");
            sendMessage("I want you to tie your ankles together as well as..");
            sendMessage("Your knees and hands");
            if (!checkPositionToys()) {
                return false;
            }
            sendMessage("Now %SlaveName%");
            sendMessage("I want 5 items that you can carry in your mouth placed as far away from your computer as possible");
            sendMessage("Place them on the floor");
            sendMessage("We're gonna have you play fetch..");
            sendMessage("While you're tied like a dog");
            lockImages();
            showImage("Images/Spicy/Positions/Dog1.jpg");
            sendMessage("I want you to retrieve the objects 1 at a time");
            if (!checkPositionToys()) {
                return false;
            }
            sendMessage("You may begin..");
            sleep(30);
            unlockImages();
            while (true) {
                let answer = sendInput("Done?");
                if (answer.containsIgnoreCase("yes")) {
                    sendMessage("%Good%");
                    return true;
                } else {
                    sendMessage("Just say yes when you've finished fetching.", 0);
                    changeMeritLow(true);
                    answer.loop();
                }
            }
        },
        currentTraining_c8 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Judgement position");
            lockImages();
            showImage("Images/Spicy/Positions/Judgement1.jpg");
            sendMessage("Stay there until you hear my bell");
            sendMessage("Just so we're clear your heels may not touch the ground..");
            sendMessage("I want you to count every time you lose your balance or your heels touch the ground");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
            positionCheckBalance();
        },
        currentTraining_c9 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Kneel position");
            lockImages();
            showImage("Images/Spicy/Positions/Kneel1.jpg");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c10 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Listen position");
            lockImages();
            showImage("Images/Spicy/Positions/Listen1.jpg");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c11 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Punishment position");
            lockImages();
            showImage("Images/Spicy/Positions/Punishment4.jpg");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c12 : function () {
            sendMessage("%Lol%");
            sendMessage("What a sight!");
            sendMessage("This should prove fun to watch!");
            sendMessage("Of course I want you in the Slut position");
            lockImages();
            showImage("Images/Spicy/Positions/Slut2.jpg");
            sendMessage("If you really want to please me then you should film yourself");
            sendMessage("I think I would fit perfectly inside your self humiliation videos folder %Grin%");
            unlockImages();

            while (true) {
                let answer = sendInput("Will you be a doll and film yourself?");
                if (answer.containsIgnoreCase("yes")) {
                    sendMessage("Fantastic");
                    changeMeritLow(false);
                    sendMessage("Get your camera ready then..");
                    sleep(40);
                    break;
                } else if (answer.containsIgnoreCase("yes")) {
                    sendMessage("Aww %EmoteSad%");
                    break;
                } else {
                    sendMessage("Just say yes when you've finished fetching.", 0);
                    changeMeritLow(true);
                    answer.loop();
                }
            }

            lockImages();
            showImage("Images/Spicy/Positions/Slut2.jpg");
            sendMessage("Get into position %SlaveName%");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c13 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Spanking position");
            lockImages();
            showImage("Images/Spicy/Positions/Spanking1.jpg");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I warn you that I might keep you there a little longer");
            sendMessage("Imagine being brutally caned!");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            sleep(randomInteger(10,200));
            unlockImages();
            complicatedPositionTrainingTimer();
        },
        currentTraining_c14 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Stand position");
            lockImages();
            showImage("Images/Spicy/Positions/Stand1.jpg");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I want you to count every time you lose your balance");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
            positionCheckBalance();
        },
        currentTraining_c15 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Stand open position");
            lockImages();
            showImage("Images/Spicy/Positions/StandOpen1.jpg");
            sendMessage("Stay there until you hear my bell");
            sendMessage("I want you to count every time you lose your balance");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
            positionCheckBalance();
        },
        currentTraining_c16 : function () {
            sendMessage("%Grin%");
            sendMessage("This should prove fun to watch!");
            sendMessage("I want you in the Worship position");
            lockImages();
            showImage("Images/Spicy/Positions/Worship1.jpg");
            sendMessage("Stay there until you hear my bell");
            //TOADD: No More ((If you absolutely can't handle anymore just say 'stop'))
            sendMessage("Get into position %SlaveName%");
            unlockImages();
            complicatedPositionTrainingTimer();
        }
    };

    let positionsDone = 0;
    let incompleteTraining = 0;

    let trainingSet = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "c7"];
    while (positionsDone < totalPositions) {

        if (incompleteTraining > 4) {
            sendMessage("Not good %SlaveName%..");
            sendMessage("You barely have any of the toys you need for training.")
            sendMessage("Looks you're going to have to go on a very naughty shopping spree if you really want to be my %Slut%");
            sendMessage("Come back when you've sorted yourself out.");
            changeMeritMedium(true);
            return;
        }

        if (totalPositions - positionsDone === 1 && positionsDone !== 0) {
            sendMessage("We're doing 1 more position...");
        }

        let currentTraining = trainingSet[randomInteger(0, trainingSet.length - 1)];
        trainingSet = trainingSet.filter(function(e) { return e !== currentTraining });
        if (!complicatedTraining['currentTraining_' + currentTraining]()) {
            incompleteTraining++;
        } else {
            positionsDone++;
        }
    }
}

function positionCheckBalance() {
    sendMessage("So %SlaveName%");
    while (true) {
        let answer = sendInput("How many times did you lose your balance?");
        if (!answer.isInteger()) {
            sendMessage("Just give me a number %SlaveName%", 0);
            answer.loop();
        } else if (answer.getInt() < 4 - getStrictnessForCharacter()) {
            sendMessage("Well I suppose that isn't too bad then");
            sendMessage("Good job!");
            changeMeritMedium(false);
            return;
        } else {
            sendMessage("That's too many times!");
            sendMessage("Not good enough %SlaveName%");
            setVar(VARIABLE.POSITION_LEVEL, positionLevel - 1);
            sendMessage("I'm disappointed..");
            changeMeritMedium(true);
            return;
        }
    }
}

function checkPositionToys() {
    while (true) {
        let answer = sendInput("%Ready%  If you don't have any of the toys you need just say no.");
        if (answer.isLike("yes")) {
            sendMessage("%Good%");
            return true;
        } else if (answer.isLike("no")) {
            //QUALITY: Ask for shopping
            sendMessage("Well, looks like somebody needs to go shopping...");
            return false;
        } else {
            sendMessage("Just say yes when you're ready %SlaveName%, or no if you don't have the items needed.", 0);
            changeMeritLow(true);
            answer.loop();
        }
    }
}

function complicatedPositionTrainingTimer() {
    let personalityStrictness = getVar("personalityStrictness", 0);

    let positionLevel = getVar(VARIABLE.POSITION_LEVEL);

    if (positionLevel <= 15) {
        switch(personalityStrictness) {
            case 0:
                sleep(randomInteger(200, 300));
                returnSlave();
                break;
            case 1:
                sleep(randomInteger(300, 400));
                returnSlave();
                break;
            case 2:
                sleep(randomInteger(300, 500));
                returnSlave();
                break;
        }
    } else if (positionLevel >= 30) {
        switch(personalityStrictness) {
            case 0:
                sleep(randomInteger(400, 500));
                returnSlave();
                break;
            case 1:
                sleep(randomInteger(500, 600));
                returnSlave();
                break;
            case 2:
                sleep(randomInteger(500, 700));
                returnSlave();
                break;
        }
    } else {
        switch(personalityStrictness) {
            case 0:
                sleep(randomInteger(300, 400));
                returnSlave();
                break;
            case 1:
                sleep(randomInteger(400, 500));
                returnSlave();
                break;
            case 2:
                sleep(randomInteger(400, 600));
                returnSlave();
                break;
        }
    }
}
