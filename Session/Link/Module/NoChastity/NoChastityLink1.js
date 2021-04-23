{
    if (tryRunLinkFetchId()) {
        const answer = sendInput(random("Do you want ", "Would you like ", "Are you ready ") + "to " + random("begin ", "start ") + "%JerkingOff% again?");

        while(true) {
            if(answer.isLike('yes')) {
                sendMessage("You're " + random("so transparent ", "so predictable ", "so easy to read ", "like an open book ") + "%SlaveName%");
                sendMessage('Let\'s see what I have in store for you %Grin%');
                break;
            } else if(answer.isLike('no')) {
                sendMessage("Oh good, " + random("then ", "that means ") + "I can " + random("take a moment to ", "go ") + "get myself %SomethingToDrink%");
                sendMessage("Don't go anywhere %SlaveName%, and don't touch that %Cock%");
                sendMessage("You can stare at some %Boobs% in the meantime");
                showCategoryImage("BOOBS");
                lockImages();
                sendMessage("I'll be right back!");
                sleep(110);
                sendMessage("I'm back %Grin%");
                unlockImages();

                const answer2 = sendInput("Have you been a good boy while I was away?");

                while(true) {
                    if(answer2.isLike('yes')) {
                        sendMessage("That makes me very happy %Grin%");
                        break;
                    } else if(answer2.isLike('no')) {
                        sendMessage("You disappoint me %SlaveName%");
                        changeMeritMedium(true);
                        sendMessage("I gave you two simple instructions; don't stroke and stay put");

                        const answer3 = sendInput("Which one did you not follow?");

                        while(true) {
                            if(answer3.isLike("first", "stroke", "stroked", "stroking")) {
                                sendMessage("I should have known %Lol%");
                                break;
                            } else if(answer3.isLike("second", "stay", "put", "staying")) {
                                sendMessage("Wow, I would have thought that was the easy part");
                                break;
                            } else if(answer3.isLike("both", "neither", "none")) {
                                sendMessage("So... you walked away while %JerkingOff% %EmoteFlustered%");
                                break;
                            } else {
                                sendMessage('"Which instruction did you not follow, the first or the second?', 0);
                                answer.loop();
                            }
                        }

                        smallCBTPunishment();
                        sendMessage("I really shouldn't have to remind you to follow instructions %SlaveName%");
                        break;
                    } else {
                        sendMessage(YES_OR_NO, 0);
                        answer2.loop();
                    }
                }
                break;
            } else if(answer.isLike('trick', 'trap')) {
                sendMessage("Ooh you think you're " + random("so smart ", "clever ") + "don't you");
                sendMessage("No it wasn't a trick question");
                smallCBTPunishment();
                sendMessage("Let that settle in for a second %SlaveName%");
                sendMessage("Lightly touch the skin of %MyYour% %Cock% with your fingertips");
                sendMessage("Feel how it's aching to be stroked again");
                sendMessage("I know it's ready for more");
                break;
            } else {
                sendMessage(YES_OR_NO, 0);
                answer.loop();
            }
        }

    }
}