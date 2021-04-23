{
    if(tryRunOrgasmFetchId()) {
        sendMessage('I want to make you cum, %SlaveName% %Giggles%');

        if(sendYesOrNoQuestion('I bet you really want to cum too, right?')) {
            sendMessage('I thought so...');

            if (isInChastity()) {
                readyForVibratingCage();
                sendMessage("Put the vibrator on that cage and start vibrating it %SlaveName%");
            } else {
                sendMessage('Start stroking that %Cock% a little bit');
            }

            sendMessage('It must be so sensitive now, after all that teasing');
            sendMessage('At least there\'s no denial at the end of today\'s tease');
            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            sendMessage('%EmoteHappy%');
        } else {
            sendMessage('Oh?');
            sendMessage('Well then no cumming for you %Lol%');
        }
    }
}