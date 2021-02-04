{
    if (tryRunOrgasmFetchId()) {
        sendMessage("I'm going to make you ruin your orgasm %GeneralTime%");
        sendMessage("You're going to ruin it...");
        sendMessage("And you're going to thank me for it %EmoteHappy%");

        for(let x = 0; x < randomInteger(3, 5); x++) {
            startEdging();
        }

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage("I think in the end a ruined orgasm is the best kind of orgasm - for me at least, not for you %Lol%");
    }
}