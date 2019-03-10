{
    if (tryRunOrgasmFetchId()) {
        sendMessage("Now, let\'s see...");
        sendMessage('I could let you cum %GeneralTime%');

        if(sendYesOrNoQuestion('Is that what you want?')) {
            sendMessage("Let\'s think about that a minute though...");

            if(sendYesOrNoQuestion('You do realize that this wonderful aching feeling will go away, right?')) {
                sendMessage("And you probably love that feeling more than cumming, in the end");
            } else {
                sendMessage("Well, it will %SlaveName%");
            }

            sendMessage("And when it goes, your submissiveness will go with it");
            sendMessage("For a while, anyway %Grin%");
            sendMessage("So instead, you could choose not to cum...");
            sendMessage("And stay on this lovely cloud of arousal a while longer");
            sendMessage("I mean, you know you\'ll get to cum eventually...");
            sendMessage('It\'s not like I\'m going to keep you denied forever %Grin%');
            sendMessage("But we could make that sensual buzz of achy longing last a little longer");

            if(sendYesOrNoQuestion('So, do you still want to cum?')) {
                sendMessage("Alright I\'ll be nice this time, %SlaveName%");

                sendMessage("%Edge%");
                startEdging();
                sendMessage("%LetEdgeFade%");
                sendMessage("Sorry, I changed my mind %Grin%");
            } else {
                sendMessage("I thought so %Grin%");
                sendMessage('It\'s not like you have to cum anyway');
            }
        } else {
            sendMessage("Oh, okay %Lol%");
            sendMessage('It\'s not like you have to cum anyway');
        }
    }
}