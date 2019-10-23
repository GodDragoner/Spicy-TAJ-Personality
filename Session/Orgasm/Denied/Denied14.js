{
    if (tryRunOrgasmFetchId()) {
        sendMessage("That %Cock% looks like it\'s about ready to explode %Lol%");

        if(!isInChastity()) {
            tieBalls(true);
            sendMessage("%StartStroking%");
        } else {
            sendMessage('Put the vibrator on the cage %Grin%');
        }

        if(isChance(50)) {
            sendMessage("You don\'t have permission to cum yet, so be careful");
            sendMessage("%StrokeSlower%");
            sendMessage("5");
            sendMessage("4");
            sendMessage("3...");
            sendMessage("2...");

            if(isChance(50)) {
                stopStrokingMessage();
                sendMessage("Awww were you getting close? %Giggles%");

                if(getCBTLimit() == LIMIT_ASKED_YES) {
                    smallCBTPunishment();
                }

                sendMessage("Are you worried that maybe I won\'t let you cum at all now?");
                sendMessage("You can never sure what\'s going to happen next, right?");
                sendMessage("But isn\'t that what makes this exciting? The uncertainty...");

                sendMessage("%StartStroking%");

                sendMessage("5");
                sendMessage("4");
                sendMessage("3");
                sendMessage("2");
            }

            sendMessage("1...");
        }

        startEdging();
        sendMessage("Awww you were so fucking close, weren\'t you... %Grin%");
        sendMessage("Sorry %SlaveName%, but you don\'t get to cum %GeneralTime%");
    }
}