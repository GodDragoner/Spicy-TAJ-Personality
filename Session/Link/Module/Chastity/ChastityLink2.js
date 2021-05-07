{
    if(tryRunLinkFetchId()) {
        if (hasChastityCage()) {
            sendMessage("I think %MyYour% %Cock% might be overheating in its cage");
        } else {
            if(sendYesOrNoQuestion("How is %MyYour% %Cock% doing, is it hard?")) {
                sendMessage("Hmm we should do something about that...");
            } else {
                sendMessage("Too much denial will do that to it...");
                sendMessage('You will be hard all times but won\'t be allowed to stroke without permissions %Grin%');
            }
        }

        if(askAndFetchIceCubes(3)) {
            if(sendYesOrNoQuestion("Are you wearing any underwear right now?")) {
                sendMessage("You know where this is going right? %Grin%");
            } else {
                sendMessage("You should put them on now");
            }

            sendMessage("Put those ice cubes in your underwear, so that %MyYour% %Balls% rest on them");
            sendMessage("Do it %SlaveName%!");
            sendMessage("Make sure they don't fall out");
            sendMessage("That's sooo cold %Lol%");


            if(ANAL_LIMIT.isAllowed() || askForIceCubeAnal()) {
                if(isPlugged()) {
                    sendMessage('Go ahead and remove your plug temporarily %SlaveName%');
                    sendMessage('Tell me when you are ready %Grin%');
                    waitForDone();
                    sendAlreadyKnowWhatsNext('ass', 'anal', 'butt');
                }

                sendMessage("Now take one of those cubes");
                sendMessage("And put it in your %Ass%");
                sendMessage("Don't hesitate %SlaveName%, just do as I say");
                sendMessage("Push it right in", 10);

                if(isPlugged()) {
                    sendMessage('Now put the buttplug back in %Grin%');
                    sendMessage('Tell me when you are ready to continue %SlaveNameSmiley%');
                    waitForDone();
                }
            }

            sendMessage("You have to keep those ice cubes there until they are melted away completely");

            if(hasChastityCage()) {
                sendMessage("Or until I allow you out of chastity %Grin%");
            } else {
                sendMessage("Or until I let you %JerkOff% again %Grin%");
            }
        } else {
            if(!isVar(VARIABLE.NEXT_TIME_ICE_CUBES)) {
                sendMessage("Too bad...");
                sendMessage("Maybe another time %EmoteSad%");
                sendMessage('But next time you should have ice cubes around');
                sendMessage('Otherwise there will be consequences');
                setVar(VARIABLE.NEXT_TIME_ICE_CUBES, true);
            } else {
                //TODO: Use at other locations as well (ice cubes)
                sendMessage('%SlaveName%');
                sendMessage('I told you last time to have ice cubes around');
                changeMeritMedium(true);
                addPPRuleIgnored();
                sendMessage('I added punishment points for this misbehavior');
                sendMessage('When I tell you to make sure of something you will MAKE SURE of it next time!');
            }
        }
    }
}