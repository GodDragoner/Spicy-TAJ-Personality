{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);

    sendMessage("You get to cum %GeneralTime%, %SlaveName%");
    sendMessage(random("I'm going to count you down", "Let me count you down", "I'll do a countdown"));
    sendMessage(random("Get ready to hit the edge when I get to zero", "I want you to hit the edge when I get to zero", "You should hit the edge when I get to zero"));
    sendMessage("But ONLY at zero, %SlaveName% %Grin%");
    sendMessage("And wait for my command to cum, because I might make you hold that edge a bit too");

    if (isInChastity()) {
        readyForVibratingCage();
        sendMessage("Put the vibrator on that cage and start vibrating it %SlaveName%");
    } else {
        sendMessage("Start stroking");
    }

    sendMessage(random("Here we go", "Let\'s do this", "Let\'s get started", "Here it comes"));
    sendMessage("10", 1);
    sendMessage("9", 1);
    sendMessage("8", 4);
    sendMessage("7", 5);
    sendMessage("6", 1);
    sendMessage("5", 1);
    sendMessage("4", 1);

    let chance = isChance(50);
    if (chance) {
        sendMessage("5", 2);
        sendMessage("6", 2);
        sendMessage("7", 2);
        sendMessage("This isn't going as you hoped, is it? %Lol%");
        sendMessage("8", 2);
        sendMessage("9", 2);
        sendMessage("8", 2);
        sendMessage("7... that's better", 2);
        sendMessage("6... but will I get to zero...?", 2);
        sendMessage("5", 2);
        sendMessage("4", 2);
    }

    if (!chance || orgasmType !== ORGASM_CATEGORY_DENIED) {
        sendMessage("Almost there...", 2);
        sendMessage("3", 2);
        sendMessage("2", 2);
        sleep(5);
        sendMessage("1...", 2);
    }

    if (orgasmType === ORGASM_CATEGORY_DENIED) {
        sendMessage("Stop stroking", 0);
        sendMessage("I changed my mind");
        sendMessage("Sorry, %SlaveName% %Lol%");
    } else if (orgasmType === ORGASM_CATEGORY_RUINED) {
        sendMessage("0", 0);

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage("I hope that ruined orgasm hurt... a lot %Grin%");
    } else if (orgasmType === ORGASM_CATEGORY_ALLOWED) {
        sendMessage('ZERO!', 0);
        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage('That was intense %Grin%');
    }
}