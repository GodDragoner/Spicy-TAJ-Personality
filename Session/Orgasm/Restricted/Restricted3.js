{
    sendMessage('%SlaveName%...');
    sendMessage('There\'s not going to be an orgasm for you %GeneralTime%');
    sendMessage('It must be hard to go through all that stroking and edging');
    sendMessage('Building up all that pleasure...');
    sendMessage('Knowing that it\'s all for naught');
    sendMessage('One final edge');
    sendMessage('And then...');
    sendMessage('Aching %Grin%');
    startEdging();

    if(sendYesOrNoQuestion('Was that a good last edge?')) {
        sendMessage('%EmoteHappy%');
    } else {
        sendMessage('That\'s too bad');
        startEdging(getEdgeHoldSeconds());
        sendMessage('%LetEdgeFade%');
        sendMessage('That should be enough %SlaveName%');
    }

    sendMessage('I won\'t put you through any more torment %GeneralTime%');
}