{
    if(tryRunLinkFetchId()) {
        if (hasChastityCage()) {
            sendMessage("I think your %Cock% might be overheating in its cage");
        } else {
            if(sendYesOrNoQuestion("How is your %Cock% doing, is it hard?")) {
                sendMessage("Hmm we should do something about that...");
            } else {
                sendMessage("Too much denial will do that to it...");
                sendMessage('You will be hard all times but won\'t be allowed to stroke without permissions %Grin%');
            }
        }

        if(askAndFetchIceCubes()) {
            if(sendYesOrNoQuestion("Are you wearing any underwear right now?")) {
                sendMessage("You know where this is going right? %Grin%");
            } else {
                sendMessage("You should put them on now");
            }

            sendMessage("Put those ice cubes in your underwear, so that your %Balls% rest on them");
            sendMessage("Do it %SlaveName%!");
            sendMessage("Make sure they don\'t fall out");
            sendMessage("That\'s sooo cold %Lol%");

            //TODO: ASk slave whether he would do it
            if(getAnalLimit() == LIMIT_ASKED_YES) {
                sendMessage("Now take on of those cubes");
                sendMessage("And put it in your %Ass%");
                sendMessage("Don\'t hesitate %Name%, just do as I say");
                sendMessage("Push it right in");
            }

            sendMessage("You have to keep those ice cubes there until they are melted away completely");

            if(hasChastityCage()) {
                sendMessage("Or until I allow you out of chastity %Grin%");
            } else {
                sendMessage("Or until I let you %JerkOff% again %Grin%");
            }
        } else {
            sendMessage("Too bad...");
            //TODO: Tell slave to always have ice cubes ready
            sendMessage("Maybe another time %EmoteSad%");
        }
    }
}