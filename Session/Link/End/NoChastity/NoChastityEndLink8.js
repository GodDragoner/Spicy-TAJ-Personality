{
    if (tryRunEndLinkFetchId()) {
        if(hasBallsTied()) {
            sendMessage('But before I go I want to get as much frustration into those tied up %Balls% as I can');
        } else {
            sendMessage('But before I go I want to get as much frustration into those %Balls% as I can');
            tieBalls(true);
        }

        startEdging();

        sendMessage('Fuck, you do look like you\'re about to blow your load');
        sendMessage('I might even have to... let you cum %GeneralTime%');
        sendMessage('Or maybe not %Grin%');
        startMultipleEdges(2);
        sendMessage('%LetEdgeFade%');

        if(CBT_LIMIT.isAllowed()) {
            sendMessage('Smack %MyBalls% %Balls% ' + randomInteger(5, 10) + ' times', 10);
        }

        sendMessage('I never said this was going to be easy for you, %SlaveName%');

        if(feelsLikePunishingSlave()) {
            startMultipleEdges(2);
            sendMessage('%LetEdgeFade%');
        }
    }
}
