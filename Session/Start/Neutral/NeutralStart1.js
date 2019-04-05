{
    if (tryRunStartFetchId()) {
        sendMessage("%SlaveName%...");
        let answer = sendInput("Are you completely naked?");

        //TODO: Introduce naked rule?

        while (true) {
            if (answer.isLike("yes")) {
                changeMeritLow(false);
                sendMessage("Good, I like it when you're all exposed and vulnerable %EmoteHappy%");
                break;
            } else if (answer.isLike("no")) {
                changeMeritMedium(true);
                sendMessage("That's no good %SlaveName%");

                sendMessage("I want you naked from head to toe");

                answer = sendInput("Can you do that for me?");

                while (true) {
                    if (answer.isLike("yes")) {
                        changeMeritLow(false);
                        sendMessage("%Good%");
                        sendMessage("Go ahead and take everything off");
                        lockImages();
                        sendMessage("I'll show you some pictures in the meantime", 0);
                        showCategoryImage("LESBIAN", 5);
                        sendMessage("Just to get you in the mood %EmoteHappy%", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (getVar(VARIABLE_CHASTITY_ON)) {
                            sendMessage("Even though you can't get hard inside that %ChastityCage% %Grin%", 0);
                        } else {
                            sendMessage("To make sure your %Cock% gets hard", 0);
                        }

                        showCategoryImage("BLOWJOB", 5);

                        sendMessage("To get your blood pumping", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (getVar(VARIABLE_CHASTITY_ON)) {
                            sendMessage("Is it getting tight in that little cage of yours? %Grin%");
                        }

                        unlockImages();
                        sendMessage("Put all your clothes in a neat pile beside you");
                        sendMessage("Or just throw them on the floor, what do I care %Lol%");
                        sendMessage("If I were with you right now");
                        sendMessage("I'd walk around you");
                        sendMessage("Checking out your naked body");
                        sendMessage("Every flaw and every quality");
                        sendMessage("I would point out the good...");
                        sendMessage("And scold you for the bad %lol%");
                        sendMessage("Not just your %Cock% is mine %SlaveName%");
                        sendMessage("Your whole body belongs to me");
                        sendMessage("Don't forget that");
                        break;
                    } else if (answer.isLike("no")) {
                        changeMeritHigh(true);
                        sendMessage("Hm so that's how it's going to be huh...?");
                        sendMessage("I don't like disobedient slaves...");
                        sendMessage("Suit yourself %SlaveName%");
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }
}