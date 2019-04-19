{
    if (tryRunStartFetchId()) {
        if(sendYesOrNoQuestion('So, are you ready to follow all my commands again? ')) {
            sendMessage("%Good% %EmoteHappy%");
        } else {
            sendMessage('Well... we\'ll see about that, %SlaveName%');
            startKneeling();
            changeMeritHigh(true);
            smallCBTPunishment();
            sendMessage("It seems you feel the need to be rebellious with me %GeneralTime%");
            sendMessage("Somehow I get the feeling that attitude will not last very long");
        }

        sendMessage("Then get to the edge for me right now, %SlaveName%");
        sendMessage("Just kidding, hands off %SlaveName%");
        sendMessage("Would be funny if you could edge so early in the session though");
    }
}