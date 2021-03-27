{
    if(tryRunOrgasmFetchId()) {
        let isCEI = shouldCEI();

        //Plate
        if (isCEI && isChance(50)) {
            sendMessage("I want you to go get a plate or a shallow bowl");
            sendMessage("Something that you can... eat from... without using your hands %Grin%");
            sendMessage('Tell me when you are done');
            waitForDone();
            sendMessage('Good boy %Grin%');

            sendMessage("Place it in front of you on the floor");
            sendMessage("I'm going to make you ruin it right onto the plate or bowl");
            sendMessage("I don't think I have to tell you what happens next %Lol%");
            //TODO: BPM selection based on scenario like stroking to orgasm edge

            if(isInChastity()) {
                readyForVibratingCage();
                sendMessage("Put the vibrator on that cage and start vibrating it %SlaveName%");
            } else {
                //If we have any clamps on the cock we should move them away
                readyForStroking();

                sendMessage("%StartStroking%");
            }

            startStroking(60);
            sendMessage("Make sure you catch everything, don't spill a single drop");

            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();

            if(isChance(50)) {
                sendMessage("I don't think that's a very big load though");
                sendMessage("So what should we do...");
                sendMessage("I think you should ruin it again and then eat everything at once");

                startEdging(0, true, EDGE_END_RUIN);
            }

            sendEatInstructions(CEI_PLATE);
        } else {
            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();
            sendMessage("No pleasure for you %GeneralTime%");
            sendMessage("Just a ruined orgasm");

            sendMessage("You'll have to " + random("clean up that mess ", "clean yourself up ", "get yourself cleaned up ") + "I guess %Grin%");

            if (!isCEI) {
                if (sendYesOrNoQuestion('Disappointed that I didn\'t tell you to eat it?')) {
                    sendMessage("%Lol%");

                    if (isChance(60)) {
                        isCEI = true;
                    } else {
                        sendMessage("Maybe next time...");
                    }
                } else {
                    sendMessage("I guess you got lucky then %Grin%");
                }
            }

            if (isCEI) {
                sendEatInstructions();
            }
        }
    }
}