function hasBallsTied() {
    return isVar(VARIABLE_IS_BALLS_TIED) && getVar(VARIABLE_IS_BALLS_TIED);
}

function tieBalls() {
    if(!hasBallsTied() && !isInChastity() && fetchToy("rope")) {
        setTempVar(VARIABLE_IS_BALLS_TIED, true);

        //TODO: Show tutorials etc. and tell the sub what exactly to do
        sendMessage("Now take that rope and tie up your balls");
        sendMessage("Do it real nice and tight");
        sendMessage('But don\'t cut the blood flow');
        const answer = sendInput("Tell me when you are ready to continue");

        while (true) {
            if (answer.isLike("done", "yes", "ready")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("If you aren't done yet don't bother me.");
                answer.loop();
            }
        }
    } else {
        return false;
    }

    return true;
}

function untieBalls() {
    sendMessage('Untie your balls %SlaveName%');
    sendMessage('Tell me when you are done...');
    
    const answer = createInput();
    
    while(true) {
        if (answer.isLike('done', 'yes', 'ready')) {
            sendMessage('%Good%');
            break;
        } else {
            sendMessage('Have you untied your balls yet %SlaveName%?');
            answer.loop();
        }
    }
    
    setTempVar(VARIABLE_IS_BALLS_TIED, false);
}