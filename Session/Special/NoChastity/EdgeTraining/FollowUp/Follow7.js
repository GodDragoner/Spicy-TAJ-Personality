{
    startEdging();
    sendMessage('%LetEdgeFade%');

    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

    if (!isKneeling()) {
        startKneeling();
        sendMessage('Get down on all fours like a good edge puppy');
    }

    sendMessage('Time to get back to edge training');
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Sit straight and put your hands behind your back');

    if (isKneeling()) {
        sendMessage('Stay on your knees with your legs wide apart, butt resting on your heels');
    }

    sendMessage('Chin up, chest out');
    sendMessage('You will keep one hand behind your back now as you stroke with the other');
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Both hands behind your back now with your wrists crossed');
    sendMessage('This is how you will stay between edges');
    sendMessage('I will show you some pictures in between edges');

    let totalLoops = 0;

    while (true) {
        let loopIndex = 0;
        let goingDown = false;

        while (true) {
            showTeaseImage(5);
            if (isChance(60)) {
                continue;
            }

            startMultipleEdges(loopIndex + 1, (loopIndex + 1) * 2);
            showTeaseImage(5);
            showTeaseImage(5);
            showTeaseImage(5);

            if (goingDown) {
                loopIndex--;
            } else {
                loopIndex++;
            }

            //Max of 5 edges
            if (loopIndex === 5) {
                goingDown = true;
            }
            //Ladder bottom reached
            else if (goingDown && loopIndex === -1) {
                break;
            }
        }

        if(totalLoops === 0) {
            sendMessage('You may have noticed that you just did an edge ladder, %SlaveName%');
            sendMessage('From a single edge to all the way up to a series of 5 and back to 1');
            sendMessage('Climbing up and down the ladder like that makes for a total of 25 edges');

            if (sendYesOrNoQuestion('Do you want to do it again?')) {
                sendMessage('Good boy %Smile%');
                sendMessage('I wonder how many times we can do this... %Grin%');
                totalLoops++;
                changeMeritLow();
            } else {
                sendMessage('Ah? It seems we\'ve reached one of your so-called \'limits\' already then...');
                changeMeritMedium(true);
                break;
            }
        } else {
            if (sendYesOrNoQuestion('Do you want to do another ladder, %SlaveName%?')) {
                sendMessage(random('Awesome ', 'Excellent ', 'Good ', 'I thought you might like another one ', 'Of course you do ', 'Why did I even ask ') + '%Smile%');
                totalLoops++;
                changeMeritLow();
            } else {
                sendMessage('Ah? It seems we\'ve reached one of your so-called \'limits\' then..');
                changeMeritMedium(true);
                break;
            }
        }
    }

    if(totalLoops === 0) {
        //TODO: @NullResponse @MoodDown @CallReturn(Custom/Decisions/EdgingCantTakeIt.txt)
        changeMeritMedium(true);
        sendMessage('I suppose I should end this training session now');
        sendMessage('But...');
        sendMessage('I want you to hold one more edge for me');
        startEdging(getEdgeHoldSeconds());
        sendMessage('%LetEdgeFade%');
    } else {
        //TODO: @NullResponse @MoodDown @CallReturn(Custom/Decisions/EdgingCantTakeIt.txt)
        sendMessage('It\'s okay though, %SlaveName%');
        sendMessage('You know... I would have just kept going until you said \'no\' %Grin%');
        sendMessage('You did a fine job with your edge training %GeneralTime%');
    }


    if (isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();

}