{
    if (tryRunOrgasmFetchId()) {
        sendMessage("I want to make you cum %GeneralTime%");

        if(isInChastity()) {
            sendMessage("You\'ve been waiting long enough frustrated as you are");
        } else {
            sendMessage("You\'ve been stroking and edging so much for me");
        }

        sendMessage("Building up so much cum in your %Balls%");
        sendMessage("So now here we are, at the end of the session");
        sendMessage("And you know what, you seem just about ready to have an orgasm now");
        sendMessage("I mean look at you, all hot and bothered %Lol%");
        sendMessage("So let\'s do this, %SlaveName%");

        if(isInChastity()) {
            sendMessage("Start vibrating the cage, but make sure you don\'t cum before I say so!");
        } else {
            sendMessage("Start stroking, but make sure you don\'t cum before I say so!");
        }

        sendMessage("It\'s going to feel so fucking good when you finally cum");


        if(!isInChastity()) {
            sendMessage("I could make you stroke a little longer to make it feel even better");
        }

        sendMessage("But I suppose you just want it right now %Giggles%");
        sendMessage("So...");
        startEdging();
        sendMessage("Sorry %SlaveName%, no cumming! %Lol%");
        sendMessage('I said I wanted to make you cum, not that I\'d actually do it');
    }
}