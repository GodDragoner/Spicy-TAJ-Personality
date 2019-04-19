{
    if (tryRunStartFetchId()) {
        if(sendYesOrNoQuestion('Do you want me to tell you to start stroking?')) {
            sendMessage('You really need me to tell you what to do, don\'t you? %Grin%');
        } else {
            sendMessage("Hm... I think I know what it is you really want, %SlaveName%");
            sendMessage("I think I know what you really want, %SlaveName%");
        }

        sendMessage("You want to give up control");
        sendMessage("You want me to take you by the hand");
        sendMessage("No, by the balls %Lol%");
        sendMessage("And lead you wherever I want to lead you");
        sendMessage("Do with you whatever pleases me");
        sendMessage("Oh, I know exactly what you need, %SlaveName% %Grin%");
    }
}