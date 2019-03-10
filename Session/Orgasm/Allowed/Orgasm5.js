{
    if (tryRunOrgasmFetchId()) {
        for(let x = 0; x < 2; x++) {
            startEdging();
            sendMessage("%LetEdgeFade%", 5);
        }

        startEdging(0, true, EDGE_END_ORGASM);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage(random('It\'s a shame of all that built up frustration', "What a waste of all that aching", "Too bad that throbbing ache is gone now"));
    }
}