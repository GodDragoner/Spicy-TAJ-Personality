{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);
    sendMessage("I want to make you cum %GeneralTime%");

    if(isInChastity()) {
        sendMessage("You've been waiting long enough frustrated as you are");
    } else {
        sendMessage("You've been stroking and edging so much for me");
    }

    sendMessage("Building up so much cum in %MyYour% %Balls%");
    sendMessage("So now here we are, at the end of the session");
    sendMessage("And you know what, you seem just about ready to have an orgasm now");
    sendMessage("I mean look at you, all hot and bothered %Lol%");
    sendMessage("So let's do this, %SlaveName%");

    if(isInChastity()) {
        readyForVibratingCage();
        sendMessage("Start vibrating the cage, but make sure you don't cum before I say so!");
    } else {
        sendMessage("Start stroking, but make sure you don't cum before I say so!");
    }

    sendMessage("It's going to feel so fucking good when you finally cum");


    if(!isInChastity()) {
        sendMessage("I could make you stroke a little longer to make it feel even better");
    }

    sendMessage("But I suppose you just want it right now %Giggles%");
    sendMessage("So...");

    if(orgasmType === ORGASM_CATEGORY_DENIED) {
        startEdging();
        sendMessage("Sorry %SlaveName%, no cumming! %Lol%");
        sendMessage('I said I wanted to make you cum, not that I\'d actually do it');
    } else if(orgasmType === ORGASM_CATEGORY_ALLOWED) {
        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage('I guess you wanted that even more than I did %Grin%');
    } else if(orgasmType === ORGASM_CATEGORY_RUINED) {
        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage('I said I wanted to make you cum, but not <i>how</i>...');

        let answer = sendYesOrNoQuestionTimeout('But an orgasm is an orgasm, right? %Lol%', 5);

        if(answer === ANSWER_YES) {
            sendMessage('Good that you seem to see it the same way I do');
            sendMessage('Because you hopefully savored this ruined orgasm like a full one because it might be a long time till get one %Lol%');
        } else if(answer === ANSWER_NO) {
            sendMessage('Well in my book it counts as one and that\'s all that matters');
        }
    }
}