{
    if (tryRunOrgasmFetchId()) {
        let skipEdge = false;
        let answer = sendInput("So what do you think, will you get lucky today?");
        if (answer.isLike("yes")) {
            sendMessage("Of course, it's up to me to decide what \"lucky\" means %Grin%");
        } else if (answer.isLike("no")) {
            sendMessage(random("Don't be so negative ", "Then let me ask you ") + "%SlaveName%");
            let answer2 = sendInput("Did you say \"no\" because you want to be denied or because you think I'll deny you?");
            if (answer2.isLike("want")) {
                sendMessage("Okay then %SlaveName%, if that's what you want");
            } else if (answer2.isLike("think")) {
                sendMessage("That's what's called a self-fulfilling prophecy %Grin%");
            }

            sendMessage('Put your %CockAndChastity% back in your pants, you\'re not cumming today');
            skipEdge = true;
        } else if (answer.isLike("understand", "mean", "unclear", "clear", "specific", "explain")) {
            sendMessage("I guess the question is what \"lucky\" means in this case %Grin%");
        } else {
            sendMessage("I guess the question is what \"lucky\" means in this case %Grin%");
        }

        if(!skipEdge) {
            sendMessage("I'd say you are lucky to have me to tell you what to do");
            sendMessage("Get to the edge %SlaveName%");
            startEdging();
            sendMessage("No cumming for you today");
            sendMessage("Lucky you, getting to be all horny until we meet again %Grin%");
            sendMessage("You'll be thinking about me all the time");
            sendMessage("Craving me");
            sendMessage("Wanting my control over you");
            sendMessage("See, you're lucky regardless of how our sessions end %Grin%");
        }
    }
}