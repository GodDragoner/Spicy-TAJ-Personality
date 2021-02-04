{
    if (tryRunOrgasmFetchId()) {
        let answer = sendInput("So what do you think, will you get lucky today?");

        let lucky = true;

        if (answer.isLike("yes")) {
            sendMessage("Of course, it's up to me to decide what \"lucky\" means %Grin%");
        } else if (answer.isLike("no")) {
            sendMessage(random("Don't be so negative ", "Then let me ask you ") + "%SlaveName%");
            let answer2 = sendInput("Did you say \"no\" because you want to be denied or because you think I'll deny you?");
            if (answer2.isLike("want")) {
                sendMessage("You should have said so earlier, because I've already decided that I want you to have a ruined orgasm %GeneralTime%");
            } else if (answer2.isLike("think")) {
                sendMessage("Aww... poor boy... I was going to deny you, but I guess I can allow you a ruined orgasm %Grin%");
            }

            lucky = false;
        } else if (answer.isLike("understand", "mean", "unclear", "clear", "specific", "explain")) {
            sendMessage("I guess the question is what \"lucky\" means in this case %Grin%");
        } else {
            sendMessage("I guess the question is what \"lucky\" means in this case %Grin%");
        }

        if(lucky) {
            sendMessage("I'd say you are lucky to have me to tell you what to do");
        }

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        sendMessage("You got the best of both worlds: you got to cum and still get to keep aching for me");

        if (shouldCEI()) {
            sendEatInstructions();
        }

        sendMessage("So you really did get lucky today...");
    }
}