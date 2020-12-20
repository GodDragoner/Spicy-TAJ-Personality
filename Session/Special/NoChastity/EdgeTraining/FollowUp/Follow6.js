{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Now %SlaveName%');

    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

    if (!isKneeling()) {
        startKneeling();
        sendMessage('Get down on all fours like a good edge puppy');
    }

    if(!isVar(VARIABLE.EDGE_TRAINING_RECORD)) {
        sendMessage('To continue your edge training for today, I will not tell you to edge');
        sendMessage("Yes, you hear that right %Smile%");
        sendMessage("Instead you will simply edge as many times as you think is appropriate");
        sendMessage("When you\'re done, you will tell me how many edges you did");
        sendMessage("And then I will decide if you did a good job or not");
        sendMessage("If I am satisfied with your performance, I\'ll be a happy %DomHonorific% and we\'ll move on");
        sendMessage("If I am not satisfied...");
        sendMessage("Well then I\'ll have to punish you");
        sendMessage("You\'ll stay in your edge puppy position the whole time");
        sendMessage("And the maximum amount of rest after each edge is 20 seconds");
    } else {
        sendMessage("For this edge training I\'m not going to tell you to edge");
        sendMessage("You\'re going to do it by yourself and you will count the number of edges");
        sendMessage("We\'ve done this before");
        sendMessage("I don\'t know if you remember the number of edges you did last time, but I do");
        sendMessage("So your goal for today is to top that number");
        sendMessage("And no, I\'m not going to tell you what the number was last time");
        sendMessage("If you remember, well then you have a clear target");
        sendMessage("If you don\'t... then you\'d better do as many as you can and hope for the best");
        sendMessage("Of course, next time we do this you\'ll have to top today\'s number %Grin%");
    }

    sendMessage("You don\'t have to tell me about each edge, I just want the total number at the end");
    sendMessage('So, start edging now and let me know when you\'re done!');

    waitForDone(1000000);

    sendMessage("Alright then! %Smile%");


    let edgesDone = createIntegerInput('Tell me, how many edges did you do?', 0, 100000, 'That\'s not a valid number %SlaveName%', 'You can\'t do less than 0 edges');
    sendMessage("Now, the big question of course is whether that\'s enough");

    let goodEnough = false;

    if(isVar(VARIABLE.EDGE_TRAINING_RECORD)) {
        let record = getVar(VARIABLE.EDGE_TRAINING_RECORD);

        if(edgesDone > record) {
            goodEnough = true;

        }
    } else {
        if(edgesDone > (getStrictnessForCharacter() + 1)*5 + 10) {
            goodEnough = true;
        }
    }

    if(goodEnough) {
        sendMessage('It is, %SlaveName% %EmoteHappy%');
        setVar(VARIABLE.EDGE_TRAINING_RECORD, edgesDone);

        sendMessage('It seems than your edge training is starting to pay off, %SlaveName% %Smile%')
    } else {
        sendMessage('Well it isn\'t, %SlaveName%');
        changeMeritMedium(true);

        if(CBT_LIMIT.isAllowed() || PAIN_LIMIT.isAllowed()) {
            smallPunishment(CBT_LIMIT.isAllowed(), PAIN_LIMIT.isAllowed());
        }

        if(hasChastityCage()) {
            sendMessage('Now I want that %Cock% soft as a wet noodle');
            sendMessage('So go ahead and do whatever you need to do to make it so');
            sendMessage('Let me know when you\'re ready to continue');
            waitForDone(10000);
            sendMessage('Okay good');

            sendMessage('If you\'re not willing to really push your boundaries for me then so be it');
            lockChastityCage();
            sendMessage('Maybe you shouldn\'t get to %JerkOff% at all then');
        } else {
            sendMessage('If you\'re not willing to really push your boundaries for me then so be it');
            sendMessage('But that doesn\'t mean I have to like it');
            changeMeritMedium(true);
        }
    }

    if (isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();

}