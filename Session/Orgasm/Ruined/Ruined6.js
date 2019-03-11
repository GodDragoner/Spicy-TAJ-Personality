{
    if (tryRunOrgasmFetchId()) {
        sendMessage("You get to cum %GeneralTime%, %SlaveName%");
        sendMessage(random("I\'m going to count you down", "Let me count you down", "I\'ll do a countdown"));
        sendMessage(random("Get ready to hit the edge when I get to zero", "I want you to hit the edge when I get to zero", "You should hit the edge when I get to zero"));
        sendMessage("But ONLY at zero, %PetName% %Smile%");
        sendMessage("And wait for my command to cum, because I might make you hold that edge a bit too");
        sendMessage("Start stroking");
        sendMessage(random("Here we go", "Let\'s do this", "Let\'s get started", "Here it comes"));
        sendMessage("10");
        sendMessage("9");
        sendMessage("8");
        wait(4);
        sendMessage("7");
        wait(5);
        sendMessage("6");
        sendMessage("5");
        sendMessage("4");

        if(isChance(50)) {
            sendMessage("5");
            sendMessage("6", 0);
            sendMessage("7", 0);
            sendMessage("This isn\'t going as you hoped, is it? %Lol%");
            sendMessage("8");
            sendMessage("9");
            sendMessage("8");
            sendMessage("7... that\'s better");
            sendMessage("6... but will I get to zero...?");
            sendMessage("5");
            sendMessage("4");
        }

        sendMessage("Almost there...");
        sendMessage("3");
        sendMessage("2");
        wait(5);
        sendMessage("1...");
        wait(5);
        sendMessage("0");

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage("I hope that ruined orgasm hurt... a lot %Grin%");
    }
}