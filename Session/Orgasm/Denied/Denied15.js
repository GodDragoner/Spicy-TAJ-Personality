{
    if (tryRunOrgasmFetchId()) {
        let answer0 = sendInput("What colour are your balls, %SlaveName%?");
        if (answer0.isLike("blue")) {
            sendMessage("That\'s my favourite colour! %EmoteHappy%");

            sendMessage(random("However ", "But ", "Although ") + "...");
            sendMessage("Purple is always better when it comes to your %Balls% %Grin%");
            startEdging();
            sendMessage("%LetEdgeFade%");
            sendMessage("No orgasm for you %GeneralTime% %SlaveName%");

        } else if (answer0.isLike("purple")) {
            sendMessage("Aww poor you %Lol%");
            sendMessage("Let\'s keep them just like that");
            sendMessage("No orgasm for you %GeneralTime% %SlaveName%");
        } else {
            sendMessage("Then you haven\'t been teased enough");
            sendMessage("They should be purple, or at least blue...");
            sendMessage("That means you need to do some more edges");

            for(let x = 0; x < randomInteger(3, 5); x++) {
                startEdging(getEdgeHoldSeconds(EDGE_HOLD_SHORT));
            }

            sendMessage("%LetEdgeFade%");
            sendMessage("No orgasm for you %GeneralTime% %Name%");
        }

    }
}