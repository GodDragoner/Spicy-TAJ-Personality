{
    if (tryRunLinkFetchId()) {
        sendMessage("I feel almost sorry for you, sitting there like this");

        if(hasChastityCage()) {
            sendMessage("With that %Cock% locked in its little cage");
        }

        sendMessage("You want to badly to jerk it, don\'t you...");
        sendMessage("Sorry %PetName%, but that\'s not going to happen right now");

        const answer = sendInput("Would you like me to hurt your %Balls% instead?");

        while(true) {
            if(answer.isLike('yes')) {
                sendMessage("Just to keep your mind focused on something else for e few minutes");
                //TODO: Check for full size cage unreachable balls?
                smallCBTPunishment(true, false);
                sendMessage("Aww now your %Balls% are hurting too...");
            } else if(answer.isLike('no')) {
                sendMessage("Alright %Grin%");
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }

        sendMessage("But I\'m still not letting you %JerkOff% %Grin%");
    }
}
