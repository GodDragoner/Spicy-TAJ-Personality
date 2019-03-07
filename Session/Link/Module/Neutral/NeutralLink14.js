{
    if (tryRunLinkFetchId()) {
        const answer = sendInput("Do you " + random("want ", "need ") + random("a break ", "to take a break ") + "%SlaveName%?");

        while(true) {
            if(answer.isLike('yes')) {
                sendMessage("Too bad, you\'re not getting one %Laugh%");
            } else if(answer.isLike('no')) {
                sendMessage("%Good%");
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }

        sendMessage("I want to make you ache for so fucking bad %Grin%");
    }
}