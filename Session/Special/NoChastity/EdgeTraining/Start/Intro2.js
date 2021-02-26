{
    startEdging();
    sendMessage('It\'s time for another one of our edge training sessions, %SlaveName%');

    if (!isKneeling()) {
        startKneeling();
        sendMessage('So get down on all fours like a good edge puppy');
    }

    sendMessage('You need to become a good edge slut for me, so training is definitely needed');
    startEdging();
    sendMessage('As in any training, repetition is the key');
    startEdging();
    sendMessage('I know I\'ve said this before, but I love how I can keep doing this over and over');
    sendMessage('Making you go through edge after edge knowing that it\'s slowly driving you crazy');
    sendMessage('And yet you obey every single time I give the command');
    startEdging();
    sendMessage('I know these early edges still feel pretty good');
    sendMessage('But that doesn\'t last, does it...');
    sendMessage('I want to keep going until it starts to hurt, %PetName%');
    startMultipleEdges(2, 6);
    sendMessage('Once it does start to hurt...');
    sendMessage('I will want you to keep hurting yourself for me');
    sendMessage('Because you want nothing more than to be a good edge slut for me');
    sendMessage('%SlaveName%...');

    if (sendYesOrNoQuestion('Do you want to be a good edge slut for me?')) {
        sendMessage('Good doggie %Grin%');
        changeMeritLow(false);
    } else {
        sendMessage(' Mmm... unfortunately you don\'t have a choice');
        changeMeritMedium(true);
    }

    startMultipleEdges(3, 7);
    sendMessage('Soon you\'re going to wish I\'d just stop doing this already');
    sendMessage('But I\'ll only stop when I\'m satisfied, %SlaveName%');
    startEdging();
    sendMessage('You\'re lucky I\'m not making you hold any of these edges');
    startEdging();
    sendMessage('You know that eventually I will make you hold the edge');
    sendMessage('But not yet');
    startEdging();
    sendMessage('I want you to dread the moment when I\'m going to tell you to hold the edge');
    sendMessage('I want you to be scared that you won\'t be able to do it');
    startEdging();
    sendMessage('When I finally tell you to hold it, you <i>will</i> hold it for me');
    sendMessage('You will conquer that fear');
    startMultipleEdges(5, 7);
    sendMessage('Mmm...');
    sendMessage('I\'m not ready to let you hold it yet');
    startEdging();
    sendMessage('Let that feeling settle deep into your poor %Balls%');
    startMultipleEdges(4, 9);

    if (sendYesOrNoQuestion('Do you want to hold this next edge for me?')) {
        sendMessage('That\'s a good edge puppy');
    } else {
        sendMessage('Then maybe this is the perfect time to do so %Grin%');
    }

    sendMessage('Here we go...');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('I\'m going to let you breathe for a few minutes now');
    sendMessage('But don\'t worry, we\'ll get back to edge training soon enough %Grin%');
}