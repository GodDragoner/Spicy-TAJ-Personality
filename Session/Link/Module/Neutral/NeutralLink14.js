{
    if (tryRunLinkFetchId()) {
        if(sendYesOrNoQuestion("Do you " + random("want ", "need ") + random("a break ", "to take a break ") + "%SlaveName%?")) {
            sendMessage("Too bad, you\'re not getting one %Lol%");
        } else {
            sendMessage("%Good%");
        }

        sendMessage("I want to make you ache for so fucking bad %Grin%");
    }
}