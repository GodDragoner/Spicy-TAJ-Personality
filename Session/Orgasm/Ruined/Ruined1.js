{
    if(tryRunOrgasmFetchId()) {
        sendMessage("You know what to do, get to the edge");

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        sendMessage("A ruined orgasm is still an orgasm %SlaveName%");

        if (shouldCEI()) {
            sendEatInstructions();
        }
    }
}