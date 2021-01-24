{
    sendMessage('Time for another round of Edge Training %EmoteHappy%');
    startKneeling();
    sendMessage('Let\'s start with a few series of 3 edges');
    sendMessage('Be careful not to push too close to the edge or you might have an accident');
    sendMessage('Here we go...');
    startMultipleEdges(3, 10);
    sendMessage('%LetEdgeFade%');
    sendMessage('Get ready for the next 3');
    startMultipleEdges(3, 9);
    sendMessage('%LetEdgeFade%');
    sendMessage('Mmm');
    startMultipleEdges(3, 8);
    sendMessage('%LetEdgeFade%');
    sendMessage('You\'re doing great %Grin%');
    sendMessage('Grab that %Cock% and just feel how hard it is for a second');
    sendMessage('Focus on that %Cock% and how it throbs in your hand');
    sendMessage('You have control over it, %SlaveName%');
    sendMessage('And I have control over you %Grin%');
    sendMessage('Through you I will make sure that you can get through these next few edges');
    sendMessage('Let\'s do 3 more');
    startMultipleEdges(3, 7);
    sendMessage('%LetEdgeFade%');
    sendMessage('Very Good');
    sendMessage('I\'m not done with you yet, %PetName%');
    sendMessage('You\'re going to do lots of edges before I\'m done with you %GeneralTime%');
    startMultipleEdges(3, 11);
    sendMessage('Just relax and focus on how good it feels to control all that energy');
    sendMessage('Here comes another one...');
    startMultipleEdges(3, 9);
    sendMessage('%LetEdgeFade%');
    sendMessage('I\'m going to make you do a series of 5 edges in a minute');
    sendMessage('And you\'re going to hold the last one');

    if (sendYesOrNoQuestion('Can you take it for me?')) {
        sendMessage('Good boy');
    } else {
        sendMessage('I will show you that you <i>can</i> and <i>will</i> take it for me');
    }

    sendMessage('It may not be easy');
    sendMessage('But every agonizing second will be worth it');
    startMultipleEdges(4, 12);
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    changeMeritLow(false);
    sendMessage('Well done, %SlaveName%');
    sendMessage('Let\'s do that one more time...');
    startMultipleEdges(4, 12);
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    changeMeritLow(false);
    sendMessage('You can relax for a bit now');
    stopKneeling();
    sendMessage('We\'ll pick this up again later %EmoteHappy%');
}