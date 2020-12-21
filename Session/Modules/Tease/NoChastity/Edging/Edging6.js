{
    sendMessage('More edging?');
    sendMessage('Yes, more edging %Grin%');
    startEdging();
    sendMessage('%LetEdgeFade%');

    startEdging(getEdgeHoldSeconds(EDGE_HOLD_LONG));
    sendMessage('%LetEdgeFade%');

    while(true) {
        startEdging(getEdgeHoldSeconds(EDGE_HOLD_LONG));
        sendMessage('%LetEdgeFade%');

        //Again in 60% of the cases
        if(isChance(40)) {
            break;
        }
    }

    startEdging();
    sendMessage('%LetEdgeFade%');

    sendMessage('I can never get enough of seeing a boy squirming in blissful, denied agony %Smile%');
}