{
    if (tryRunLinkFetchId()) {
        sendMessage("I feel almost sorry for you, sitting there like this");

        if(hasChastityCage()) {
            sendMessage("With that %Cock% locked in its little cage");
        }

        sendMessage("You want to badly to jerk it, don\'t you...");
        sendMessage("Sorry %SlaveName%, but that\'s not going to happen right now");

        if(sendYesOrNoQuestion('Would you like me to hurt %MyYour% %Balls% instead?')) {
            sendMessage("Just to keep your mind focused on something else for e few minutes");
            //TODO: Check for full size cage unreachable balls?
            smallCBTPunishment(true, false);
            sendMessage("Aww now %MyYour% %Balls% are hurting too...");
        } else {
            sendMessage("Alright %Grin%");
        }

        sendMessage("But I\'m still not letting you %JerkOff% %Grin%");
    }
}
