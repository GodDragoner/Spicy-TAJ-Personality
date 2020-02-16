function hasBallsTied() {
    return isVar(VARIABLE.IS_BALLS_TIED) && getVar(VARIABLE.IS_BALLS_TIED);
}

function wantsToTieBalls() {
    //Prevent tieing balls over and over again
    if(isVar(VARIABLE.LAST_BALLS_UNTIE) && !getDate(VARIABLE.LAST_BALLS_UNTIE).addMinute(5).hasPassed()) {
        return false;
    }

    return true;
}

function wantsToUntieBalls() {
    //Prevent untieing balls over and over again
    if(isVar(VARIABLE.LAST_BALLS_TIE) && !getDate(VARIABLE.LAST_BALLS_TIE).addMinute(5).hasPassed()) {
        return false;
    }

    return true;
}

function tieBalls(force = false) {
    if(!force && !wantsToTieBalls()) {
        return false;
    }

    if(!hasBallsTied() && !isInChastity() && fetchToy("shoelace")) {
        setTempVar(VARIABLE.IS_BALLS_TIED, true);
        setTempVar(VARIABLE.LAST_BALLS_TIE, setDate());

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

function untieBalls(force = false) {
    //Prevent tieing balls over and over again
    if(!force && !wantsToUntieBalls()) {
        return false;
    }

    sendMessage('Untie your balls %SlaveName%');
    sendMessage('Tell me when you are done...');
    
    const answer = createInput();
    
    while(true) {
        if (answer.isLike('done', 'yes', 'ready')) {
            sendMessage('%Good%');
            setTempVar(VARIABLE.LAST_BALLS_UNTIE, setDate());
            break;
        } else {
            sendMessage('Have you untied your balls yet %SlaveName%?');
            answer.loop();
        }
    }
    
    setTempVar(VARIABLE.IS_BALLS_TIED, false);
}