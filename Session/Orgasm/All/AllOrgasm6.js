{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);
    if(!isKneeling()) {
        startKneeling();
    }

    sendMessage("I'm trying to imagine how full %MyYour% %Balls% are right now");

    if(getLastEjaculationDate().addDay(10).hasPassed()) {
        sendMessage('They must be pretty full given how long it\'s been since we\'ve emptied them');
    } else if(getLastEjaculationDate().addDay(3).hasPassed()) {
        sendMessage('They must be starting to fill up... it\'s been a couple of days since we\'ve emptied them after all');
    } else {
        sendMessage('Not too full I guess... it hasn\'t been that long since we\'ve emptied them');
    }

    sendMessage("%SlaveName%...");

    if(orgasmType === ORGASM_CATEGORY_DENIED) {
        sendMessage("You don't get to cum %GeneralTime%");
        sendMessage("I'm going to make you edge one more time");
    } else if(orgasmType === ORGASM_CATEGORY_ALLOWED) {
        sendMessage('I\'m going to let you cum %GeneralTime%');
    } else if(orgasmType === ORGASM_CATEGORY_RUINED) {

    }


    if(isChance(50) && getCBTLimit() == LIMIT_ASKED_YES) {
        sendMessage("But you're going to have to endure some pain first");
        smallCBTPunishment();
    }

    if(!isInChastity()) {
        sendMessage('Start stroking %Grin%', 0);

        startStroking();
    } else {
        readyForVibratingCage();
        sendMessage('Put the vibrator on the cage %Grin%');
    }

    sleep(3);
    sendMessage("Try to get close for me now");

    if(orgasmType === ORGASM_CATEGORY_DENIED) {
        startEdging();
        sendMessage("%LetEdgeFade%");
    } else if(orgasmType === ORGASM_CATEGORY_ALLOWED) {
        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }
    } else if(orgasmType === ORGASM_CATEGORY_RUINED) {
        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }
    }
}