{
    if (tryRunOrgasmFetchId()) {
        sendMessage("In a moment I\'m going to tell you to put your %Cock% back in your pants");
        sendMessage("But not before you\'ve edged for me one last time");
        sendMessage("Do it %SlaveName%");
        startEdging();
        sendMessage("%LetEdgeFade%");

        if (isChance(50)) {
            sendMessage("You know what, give me another edge %Grin%");
            startEdging(getEdgeHoldSeconds());
            sendMessage("Mmm good boy");
            sendMessage("One last time never really means one last time %SlaveName%");

            if (isChance(50)) {
                if (sendYesOrNoQuestion('Could you do another one?')) {
                    sendMessage("No matter how much you ache, you can never say no to me %Smile%");
                } else {
                    sendMessage("Unfortunately for you, it's still my decision...");
                }

                sendMessage("And that pretty much sums up the nature of our relationship %SlaveName%");
                sendMessage("Edge for me right now");
                startEdging();
                sendMessage("%LetEdgeFade%");
            }

            sendMessage('Now you can put that %Cock% back in your pants');
        }

        let answer = sendInput("Say thank you, %SlaveName%");

        while (true) {
            //TODO: Unified check for thank you answer with Honorific attached!
            if (answer.isLike("you", "thanks", "gracias", "merci", "grateful", "gratitude")) {
                sendMessage("You\'re welcome %SlaveName% %Smile%");
                break;
            } else {
                sendMessage('"No... try again');
                answer.loop();
            }
        }

        sendMessage("It\'s always nice to get a little gratitude");
    }
}