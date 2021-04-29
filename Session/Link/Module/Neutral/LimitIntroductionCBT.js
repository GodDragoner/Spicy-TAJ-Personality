{
    if (tryRunLinkFetchId()) {
        if (CBT_LIMIT.isHardLimit() || CBT_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            sendMessage('Sometimes I think we are paying too much attention to your pleasure');
            sendMessage('I mean I really get off on teasing and denying you');
            sendMessage('And it pleases me seeing %MyYour% desperate %Cock% twitch and throb after I leave it denied');
            sendMessage('But occasionally I just want you to feel nothing but pain in that %Cock% and %Balls%');
            sendMessage('No single bit of pleasure, no stroking, no edging, no pleasurable touches or teasing');
            sendMessage('Just cruel and relentless torture inflicted upon %MyYour% %Cock% and %Balls%');
            CBT_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
        }
    }
}