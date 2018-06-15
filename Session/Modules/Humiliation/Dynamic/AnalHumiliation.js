{
    sendMessage("Let's see %SlaveName%");
    sendMessage("I think it's time to work that %Ass%", "I guess it's time to work on your %Ass%", "Let's have som fun with your %Ass% shall we?");

    let plugPlay = hasButtplugToy() && isChance(50) && getVar(VARIABLE_ASS_LEVEL) >= 5;
    let dildoPlay = hasDildoToy() && !plugPlay && getVar(VARIABLE_ASS_LEVEL) >= 5;

    if (isPlugged()) {
        if (isChance(50)) {
            sendMessage("Plugging you beforehand was a great idea");
            sendMessage("Because...");
            sendMessage("Now we can start with the bigger stuff right away %Grin%");
        } else {
            sendMessage("You look quite pathetic plugged up as you are %Lol%");
        }

        if (!plugPlay) {
            removeButtplug();
        } else {
            sendMessage("However I want you to keep that plug inside for now...");
            sendMessage("A bit more of a warmup can never be too bad right?");
        }
    } else {
        if (plugPlay) {
            sendMessage("Let's start by stretching that %Ass% of yours");
            if (!putInButtplug()) {
                const plugSize = getButtplugSize();
                const answer = sendInput("Do you have your " + plugSize + " buttplug around?");
                while (true) {
                    if (answer.isLike("yes")) {
                        sendMessage("%Good%");

                        sendMessage("Go ahead and " + random("fetch", "get", "retrieve") + " your " + plugSize + " buttplug then");

                        const answer = sendInput("Tell me when you are ready to continue.");
                        while (true) {
                            if (answer.isLike("done", "yes")) {
                                sendMessage("%Good%");
                                break;
                            } else if (answer.isLike("no", "don't", "can't")) {
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
                    } else if (answer.isLike("no", "don't", "can't")) {
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
            if (!fetchToy("small dildo")) {
                lastAlternativeFingerPlay();
            }
        }
    }
}

function fingerPlay() {
    const lubeType = getAssLubeType(getMood());

    if (lubeType == ANY_LUBE) {
        lubeUpToyWithLube("finger");
    } else if (lubeType === SPIT_LUBE) {
        lubeUpToyWithSpit("finger", false);
    } else if (lubeType === TOOTHPASE_LUBE) {
        lubeUpToyWithToothpaste("finger");
    } else if (lubeType === TIGER_HOT_LUBE) {
        lubeUpToyWithTigerHot("finger");
    } else {
        sendMessage("Today I don't you to use any lube %Grin%");
    }

    runAssCrackPreparation("finger");
}

function runAssCrackPreparation(toy) {
    const finger = toy == "finger";

    sendMessage("Now " + random("slowly", "gently") + " rub the tip of your " + toy + " along your ass crack");
    sendMessage("Up...", 3);
    sendMessage("And down...", 3);
    sendMessage("Up...", 3);
    sendMessage("Your ass must be begging for your " + toy, "Can you feel your ass preparing for being penetrated already?");
    sendMessage("Down...");

    sendMessage("Now go ahead and slowly push the tip of your " + toy + " in");
    sendMessage("Slowly and careful");
    sendMessage("Now pull it out again");
    sendMessage("And in again. This time a bit further");
    sendMessage("Keep it there...");
    sendMessage("And...");
    sendMessage("Pull it out again");
    sendMessage("One more time");
    sendMessage("In");
    sendMessage("Hold it");
    sendMessage("And...");
    sendMessage("Out %Grin%");

}

function startPenetratingSession(toy) {
    const finger = toy == "finger";

    sendMessage("Now that your %Ass% is properly prepared go ahead and push it completely in");
    sendMessage("Keep it in there", 5);
    sendMessage("And pull it all the way out again");
    sendMessage("Now...");
    sendMessage("Put the tip of your " + toy  + " on your asshole");
    sendMessage("Be ready");
    sendMessage("Because you are going to push it in and out to the beat %Grin%");
    sendMessage("We'll start slow and work our way up there");
    sendMessage("Here we go", 0);
    //TODO: Numbers based on experience
    startAnal(30, randomInteger(50, 75));
    sendMessage("Pull your " + toy + " out of your ass");

    if(finger) {

    } else {
        sendMessage("Now place that " + toy + " on the ground");
        sendMessage("You already know what's coming next don't you?");

        if(isChance(50) && getASMLimit() == LIMIT_ASKED_YES) {

        } else {
            sendMessage("%SlaveName% I want you to squat above it");
            if(isChance(20)) {
                sendMessage("And...");
                sendMessage("I want you to stay like this for a while");
                sendMessage("Fitness is important %Grin%");
                sleep(random(30, 60));
            } else {

            }
            sendMessage("Now squat above it");
        }

    }
}

function startSquatAnal(toy) {
    sendMessage("Now...");
    sendMessage("In a minute I want you to slowly go up and down on that " + toy);

    let noHands = false;

    if(feelsEvil()) {
        noHands = true;

        if(isChance(50)) {
            sendMessage("I don't want to see you use your " + random("fingers", "hands") + " at anytime");
        } else {
            sendMessage("I don't care how you keep your dildo on the ground");
            sendMessage("However you will not be allowed to touch it with your " + random("fingers", "hands"));
        }

        if(isChance(50)) sendMessage("Which means...");

        if(isChance(50)) {
            sendMessage("In case it falls over");

            //TODO: Interaction if limit unknown (seduce maybe?)
            if(getASMLimit() == LIMIT_ASKED_YES) {
                sendMessage("You will have to pick it up using your mouth %Grin%")
            } else {
                sendMessage("You will have to use your feet or be more creative to position again %Lol%")
            }
        } else {
            if(getASMLimit() == LIMIT_ASKED_YES) {
                sendMessage("You will have to use your mouth to pick the dildo if it falls over %Lol%");
            } else {
                sendMessage("You will have to use your feet to pick the dildo if it falls over %Grin%");
            }
        }

        sendMessage("This " + random("will be", "looks like", "seems like") + " fun");

        //TODO: Could need something like this more often
        if(isChance(30)) {
            sendMessage("Maybe only for me");
            sendMessage("But that's all this is about");
            sendMessage("My joy, my will, my commands and my pleasure %Grin%");
        }
    } else {
        sendMessage("You may use your " + random("fingers", "hands") + " for any assistance and to keep your " +
            toy + " on the ground");

        //TODO: Could need something like this more often
        if(isChance(40)) {
            //Only send this when the sub is not in chastity
            if (!isVar(VARIABLE_CHASTITY_ON)) {
                sendMessage("But no touching that %Cock%");
            }
        } else {
            sendMessage("Luckily I don't have to worry about your cock");
            sendMessage("It's locked up in it's %Cage% and it is gonna stay this way for now");
            if(isChance(50)) sendMessage("Maybe even for ever %Grin%");
        }
    }

    sendMessage("I want you to match the upcoming beat of course");
    sendMessage("Better be " + random("ready", "prepared") + " %Grin%");
    for(let iterations = 0; iterations < 20; iterations++) {
        //TODO: Numbers based on anal experience
        startAnal(30, randomInteger(50, 75));

        if (isChance(20)) {
            sendMessage("I have a fun idea %SlaveName%");
            sendMessage("First of all I want you to to sit all the way down on that " + toy);
            sendMessage("Now...");
            sendMessage("I want you to stand all they way up without dropping that toy of yours");

            if (!noHands) {
                sendMessage("Furthermore you are not allowed to use your hands to keep it inside");
            } else {
                sendMessage("Remember... No use of your hands! Not that I would allow you to use your fingers for this anyway");
                sendMessage("That would be cheating %Grin%");
                sendMessage("So...");
            }

            let willDoIt = false;
            let answer = sendInput("Can you do that for me?");

            while (true) {
                if (answer.isLike("yes", "try")) {
                    sendMessage(random("%Good%", "I already thought so %Grin%", "That was the only right answer %SlaveName%"));
                    willDoIt = true;
                    break;
                } else if (answer.isLike("no")) {
                    sendMessage("There was only one right answer %SlaveName%");
                    sendMessage("And you didn't answer correctly");
                    sendMessage("Well...");
                    changeMeritMedium(true);
                    if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 30)) {
                        sendMessage("I want you to try it anyway");
                        willDoIt = true;
                    } else {
                        //TODO: Enable interaction (like: I will do it)
                        sendMessage("Seems like there is nothing I can do about that...");
                    }
                    break;
                } else {
                    sendMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            if (willDoIt) {
                sendMessage("So let's get right to it");
                answer = sendInput("Are you still sitting all the way down on that toy?");

                while (true) {
                    if (answer.isLike("yes")) {
                        sendMessage("Good because I never told you to stop %Grin%");
                        answer = sendInput("How does it feel being filled like that? Does it make you horny?", 5);
                        if (answer.isTimeout()) {
                            //Do nothing
                        } else if (answer.isLike("yes")) {
                            sendMessage(random("What a little anal slut you are", "Well there is no way you are gonna deny that anal slut in you is there?", "I knew it %Grin%"));
                        } else {
                            if (isChance(50)) {
                                sendMessage("Well I don't care because it makes me horny %Lol%");
                            } else {
                                sendMessage("Knowing this might make me even hornier %Grin%");
                            }
                        }
                        break;
                    } else if (answer.isLike("no")) {
                        sendMessage("What?!");
                        sendMessage("But I never told you to stop!");
                        sendMessage("This misbehaviour deserves a proper punishment...");
                        //TODO: Small punishment
                        changeMeritMedium(true);
                        sendMessage("And now go ahead and sit all they way down on that " + toy + " again");
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }

                sendMessage("So let's don't waste anymore time and get right to it");
                sendMessage("Try to slowly stand up %SlaveName%");
                sendMessage("Keep that " + toy + " inside your ass though");
                sendMessage("Oh my...");
                sendMessage(random("This must be so humiliating %Lol%", "It looks so funny seeing you desperately clinching on to that " + toy + " in your ass %Lol%"));

                let madeIt = false;

                answer = sendInput("Tell me %SlaveName%. Did you make it?");

                while (true) {
                    if (answer.isLike("yes")) {
                        sendMessage("%Good%");
                        changeMeritMedium(false);
                        madeIt = true;
                        break;
                    } else if (answer.isLike("no")) {
                        sendMessage("I guess we have to try again");

                        if (noHands) {
                            sendMessage("You still aren't allowed to pick up the " + toy + " with your hands so you gotta find another way %Grin%");
                            sendInput("Go ahead and find a way to position the " + toy + " again");
                            readyInput();
                        } else {
                            sendInput("Go ahead and pick up your " + toy + " and position it again");
                        }

                        sendMessage("Now sit all the way down on it again", 5);
                        sendMessage("And...");
                        sendMessage("Hold tight and stand up %Grin%", 5);

                        answer = sendInput("So %SlaveName%... Did you make it?");

                        while (true) {
                            if (answer.isLike("yes")) {
                                sendMessage("%Good%");
                                changeMeritLow(false);
                                madeIt = true;
                                break;
                            } else if (answer.isLike("no")) {
                                sendMessage(random("Well sometimes you gotta try more than two times", "Well all good things go by three"));
                                sendMessage("Which means...");

                                sendMessage("Same procedure yet again");
                                if (noHands) {
                                    sendMessage("Find a way to position the " + toy + " again");
                                } else {
                                    sendMessage("Properly position the " + toy + " again");
                                }

                                sendMessage("Sit all the way down", 5);
                                sendMessage("And stand up...");

                                answer = sendInput("Now tell me %SlaveName%. Did you make it this time?");

                                while (true) {
                                    if (answer.isLike("yes", "made it", "succeed")) {
                                        sendMessage("Great! " + random("A bit of practice always does the job", "I knew that you can do it", "Wasn't that hard at all right?"));
                                        changeMeritLow(false);
                                        madeIt = true;
                                        break;
                                    } else if (answer.isLike("no", "didn't make it", "failed")) {
                                        sendMessage("Well then...");

                                        if (isChance(50)) {
                                            sendMessage("I think we should try again");
                                            sendMessage("I don't think I have to instruct you anymore do I?");
                                            sendMessage("So just go ahead and try and tell me if you made it");
                                            sendMessage("Did you make it this time?");
                                            answer.loop();
                                        } else {
                                            sendMessage("I don't feel like trying again");
                                            sendMessage("At least you tried and it was definitely fun to watch!");
                                            changeMeritLow(true);
                                            break;
                                        }
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
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }

                if (madeIt) {
                    //Push it out of ass
                    if (isChance(70)) {
                        sendMessage("Now...");
                        sendMessage(random("For the last part..."), "I am not done yet", "We are not done yet %Grin%");
                        sendMessage("I think it would be quite funny if you were to shit that " + toy + " out don't you think?");
                        sendMessage("So go ahead and push it out of your ass without touching it", 3);
                        sendMessage("Yea... That's right. Push %Grin%");
                        sendMessage("This is really entertaining to watch. I should order you to do stuff like this more frequently %SlaveName%");

                        answer = sendInput("So tell me %SlaveName%. Did you make it?");

                        while (true) {
                            if (answer.isLike("yes", "made it", "succeed")) {
                                sendMessage("%Good%");
                                sendMessage("Your ass must be gaping now %Lol%");
                                changeMeritLow(false);
                                break;
                            } else if (answer.isLike("no", "didn't make it", "failed")) {
                                sendMessage("Don't feel bad");
                                sendMessage("It might need some practice for you to make it");
                                //TODO: Save this for future interaction?
                                sendMessage("Which means we gotta work on that %Ass% even more");
                                sendMessage("You can go ahead and pull that " + toy + " out of your ass now");
                                break;
                            } else {
                                sendMessage(YES_OR_NO);
                                answer.loop();
                            }
                        }

                        break;
                    } else {
                        sendMessage("Okay %SlaveName%");
                        sendMessage("Go ahead and pull that " + toy + " out of your ass for now");
                        break;
                    }
                } else {
                    //He was unable to stand up without dropping the toy -- nothing to do here
                    sendMessage("Let's continue with something different");
                    break;
                }
            }
            //Won't do it
            else {
                sendMessage("Let's do something different with your ass then %Grin%");
                break;
            }
        }
        //No standing up
        else {
            if (isChance(iterations + 1)*20 || iterations == 3) {
                sendMessage(random("This was quite fun to watch", "This was quite entertaining to watch") + " %EmoteHappy%");
                sendMessage("You riding that " + toy);
                sendMessage("Being striped of your manhood");
                sendMessage("And following all my orders %Grin%");
                sendMessage("Go ahead and stand up %SlaveName%");
                break;
            } else {
                sendMessage(random("Let's give it another round shall we?", "You enjoyed this too much so I can't end this now can I? %Grin%",
                    "I am ready for another round and so should be you %Grin%", "Let's don't waste anymore time and get right to the next round"));
                sendMessage(random("Be ready", "Be prepared", "I want you to start when the beat kicks in"));
                continue;
            }
        }
        break;
    }
}

function lastAlternativeFingerPlay() {
    sendMessage(random(random("Well", "Okay") + " then..."), "Let's see...", "Okay...", "Well...");
    sendMessage("We can always just stick to your hands");
    sendMessage("That should be fun for me too and even dirtier for you %Grin%");
}