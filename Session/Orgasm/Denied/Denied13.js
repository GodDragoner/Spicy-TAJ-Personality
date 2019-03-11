{
    if (tryRunOrgasmFetchId()) {
        if(!isKneeling()) {
            startKneeling();
        }

        sendMessage("I\'m trying to imagine how full your %Balls% are right now");

        if(getLastEjaculationDate().add(10).hasPassed()) {
            sendMessage('They must be pretty full given how long it\'s been since we\'ve emptied them');
        } else if(getLastEjaculationDate().add(3).hasPassed()) {
            sendMessage('They must be starting to fill up... it\'s been a couple of days since we\'ve emptied them after all');
        } else {
            sendMessage('Not too full I guess... it\\\'s hasn\\\'t been that long since we\\\'ve emptied them');
        }

        sendMessage("%SlaveName%...");
        sendMessage("You don\'t get to cum %GeneralTime%");

        if(isChance(50) && getCBTLimit() == LIMIT_ASKED_YES) {
            sendMessage("I\'m going to make you edge one more time");
            sendMessage("But you\'re going to have to endure some pain first");
            smallCBTPunishment();
        }

        sendMessage('Start stroking %Grin%', 0);
        startStroking();
        wait(3);
        sendMessage("Try to get close for me now");
        startEdging();
        sendMessage("%LetEdgeFade%");
    }
}