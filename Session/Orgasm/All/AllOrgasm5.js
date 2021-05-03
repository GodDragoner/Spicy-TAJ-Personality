{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);
    sendMessage("That %Cock% looks like it's about ready to explode %Lol%");

    if(!isInChastity()) {
        tieBalls(true);

        sendMessage("%StartStroking%");
    } else {
        readyForVibratingCage();
        sendMessage('Put the vibrator on the cage %Grin%');
    }

    if(isChance(50)) {
        sendMessage("You don't have permission to cum yet, so be careful");
        //sendMessage("%StrokeSlower%");
        sendMessage('I don\'t want you to be edging yet!');
        sendMessage('Any minute now %Grin%');
        sendMessage("5", 5);
        sendMessage("4", 5);
        sendMessage("3...", 5);
        sendMessage("2...", 5);

        if(isChance(50)) {
            stopStrokingMessage();
            sendMessage("Awww were you getting close? %Giggles%");

            if(getCBTLimit() == LIMIT_ASKED_YES) {
                smallCBTPunishment();
            }

            sendMessage("Are you worried that maybe I won't let you cum at all now?");
            sendMessage("You can never be sure what's going to happen next, right?");
            sendMessage("But isn't that what makes this exciting? The uncertainty...");

            if(!isInChastity()) {
                sendMessage("%StartStroking%");
            } else {
                readyForVibratingCage();
                sendMessage('Put the vibrator on the cage %Grin%');
            }

            sendMessage("5", 5);
            sendMessage("4", 5);
            sendMessage("3", 5);
            sendMessage("2", 5);
        }

        sendMessage("1...", 5);
    }

    if (orgasmType === ORGASM_CATEGORY_DENIED) {
        startEdging();
        sendMessage("Awww you were so fucking close, weren't you... %Grin%");
        sendMessage("Sorry %SlaveName%, but you don't get to cum %GeneralTime%");
    } else if (orgasmType === ORGASM_CATEGORY_RUINED) {
        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage('I know it hurts when I make you ruin it, %SlaveName%');
        sendMessage('But I just don\'t care %Lol%');
    } else if (orgasmType === ORGASM_CATEGORY_ALLOWED) {
        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }
    }

}