{
    sendMessage("Let's see %SlaveName%");
    sendMessage("I think it's time to work that %Ass%", "I guess it's time to work on your %Ass%", "Let's have som fun with your %Ass% shall we?");

    let plugPlay = hasButtplugToy() && isChance(50) && getVar(VARIABLE_ASS_LEVEL) >= 5;
    let dildoPlay = hasDildoToy() && !plugPlay && getVar(VARIABLE_ASS_LEVEL) >= 5;

    if(isPlugged()) {
        if(isChance(50)) {
            sendMessage("Plugging you beforehand was a great idea");
            sendMessage("Because...");
            sendMessage("Now we can start with the bigger stuff right away %Grin%");
        } else {
            sendMessage("You look quite pathetic plugged up as you are %Lol%");
        }

        if(!plugPlay) {
            removeButtplug();
        } else {
            sendMessage("However I want you to keep that plug inside for now...");
            sendMessage("A bit more of a warmup can never be too bad right?");
        }
    } else {
        if(plugPlay) {
            sendMessage("Let's start by stretching that %Ass% of yours");
            if(!putInButtplug()) {
                const plugSize = getButtplugSize();
                const answer = sendInput("Do you have your " + plugSize + " buttplug around at least?");
                while(true) {
                    if(answer.isLike("yes")) {
                        sendMessage("%Good%");

                        sendMessage("Go ahead and " + random("fetch", "get", "retrieve") +  " your " + plugSize + " buttplug then");

                        const answer = sendInput("Tell me when you are ready to continue.");
                        while(true) {
                            if(answer.isLike("done", "yes")) {
                                sendMessage("%Good%");
                                break;
                            } else if(answer.isLike("no", "don't", "can't")) {
                                sendMessage("WHAT?!");
                                sendMessage("You just told me that you have it around");
                                sendMessage("If you are trying to lie to me at least do it properly");
                                addPunishmentPoints(300);
                                sendMessage("I added quite a lot punishments points for your behaviour");
                                changeMeritHigh(true);
                                lastAlternativeFingerPlay();
                                dildoPlay = false;
                                break;
                            } else {
                                sendMessage("Are you done yet?");
                                answer.loop();
                            }
                        }
                        break;
                    } else if(answer.isLike("no", "don't", "can't")) {
                        changeMeritHigh(true);
                        sendMessage("That's really bad %SlaveName%");
                        sendMessage("You must always have your toys around or tell me preemptively that you are not able to bring your toys to a session");
                        lastAlternativeFingerPlay();
                        dildoPlay = false;
                        break;
                    } else {
                        sendMessage("Can you grab it for me?");
                        answer.loop();
                    }
                }
            }
        } else {
            sendMessage("Let's get to it");
            if(!fetchToy("small dildo")) {

            }
        }
    }
}

function lastAlternativeFingerPlay() {
    sendMessage(random(random("Well", "Okay") + " then..."), "Let's see...", "Okay...", "Well...");
    sendMessage("We can always just stick to your hands");
    sendMessage("That should be fun for me too and even dirtier for you %Grin%");
}