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

    sendMessage('Part 2 of today\'s edge training coming up %Smile%');
    sendMessage('And the edges are going to come fast and furious now, %SlaveName%');
    startMultipleEdges(6, 4);
    sendMessage('%LetEdgeFade%');
    startMultipleEdges(2, 7);

    sendMessage('Now I will have you do a series of 10 edges in a row');
    sendMessage('They will come fast, but I want you to edge hard each and every time');
    sendMessage('Get ready...');
    startMultipleEdges(10, 3);
    sendMessage('%LetEdgeFade%');

    let cantTake = false;

    if(sendYesOrNoQuestion('Can you take more for me?')) {
        sendMessage('Good boy');
        changeMeritLow();

        sendMessage('Then let\'s do 10 more');
        startMultipleEdges(10, 4);
        sendMessage('%LetEdgeFade%');

        if(sendYesOrNoQuestion('Same question as before, can you take more?')) {
            sendMessage('Excellent');
            changeMeritLow();

            sendMessage('After this next set of 10 I\'m going to ask you again');

            startMultipleEdges(10, 5);
            sendMessage('%LetEdgeFade%');
            sendMessage('It\'s up to you, %SlaveName%');


            if(sendYesOrNoQuestion('Can you take more edges?')) {
                sendMessage('Such a good edge slut %Lol%');
                changeMeritLow();

                sendMessage('This time you will do a series of 12');
                startMultipleEdges(12, 4);
                sendMessage('You know, I\'m not sure how I should feel about make you edge so much');
                sendMessage('Part of me hopes you are alright...');
                sendMessage('But another part of me hopes you are just suffering like never before %Grin%');

                if(sendYesOrNoQuestion('Can you do another series of 12?')) {
                    sendMessage('You\'re such a good edger %Smile%');

                    sendMessage('And since you\'re doing so well, let\'s make it 15 instead of 12');
                    startMultipleEdges(15, 5);
                    sendMessage('That\'s quite enough for now, %SlaveName% %Smile%');

                    sendMessage('You\'ve been a good edge puppy for me %GeneralTime%');
                    sendMessage('Just remember, the more you suffer, the happier you make your %DomHonorific%');
                } else {
                    sendMessage('Oh okay');
                    changeMeritMedium(true);
                    cantTake = true;
                }
            } else {
                sendMessage('Oh');
                changeMeritMedium(true);
                cantTake = true;
            }
        } else {
            sendMessage('Oh');
            changeMeritMedium(true);
            cantTake = true;

        }
    } else {
        sendMessage('Oh');
        changeMeritMedium(true);
        cantTake = true;
    }

    if(cantTake) {
        //TODO: @NullResponse @CallReturn(Custom/Decisions/EdgingCantTakeIt.txt)
        startEdging();
        sendMessage('You will edge when I want you to edge, %SlaveName%');
        startEdging();

        sendMessage('Look, I also don\'t want to push you too far');
        sendMessage('So I\'ll go easy on you');
        sendMessage('3 three more edges and you\'ll hold the last one, that\'s it');
        startMultipleEdges(2, 9);
        startEdging(getEdgeHoldSeconds());
    }

    if(isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();

}