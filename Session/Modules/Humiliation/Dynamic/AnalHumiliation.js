{
    sendMessage("Let's see %SlaveName%");
    sendMessage("I think it's time to work that %Ass%", "I guess it's time to work on your %Ass%", "Let's have som fun with your %Ass% shall we?");

    let plugPlay = hasButtplugToy() && isChance(50) && getVar(VARIABLE_ASS_LEVEL) >= 5;
    let dildoPlay = hasDildoToy() && getVar(VARIABLE_ASS_LEVEL) >= 5;

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
            startTimePassTasks(5);
        }
    } else {
        let missingPlug = false;
        if (plugPlay) {
            sendMessage("Let's start by stretching that %Ass% of yours");
            if (!putInButtplug()) {
                missingPlug = true;

                changeMeritHigh(true);
                sendMessage("That's really bad %SlaveName%");
                sendMessage("You must always have your toys around or tell me preemptively that you are not able to bring your toys to a session");

                sendMessage("Well then...");
            } else {
                //TODO: Some tasks to before while plugged?
            }
        }

        let toy = "small dildo";
        if (dildoPlay) {
            if (!fetchToy(toy)) {
                lastAlternativeFingerPlay();
                toy = "finger";
                dildoPlay = false;
            } else {
                sendMessage("Okay let's get started then");
            }
        }

        const lubeType = getAssLubeType(getMood());

        if (lubeType == ANY_LUBE) {
            lubeUpToyWithLube(toy);
        } else if (lubeType === SPIT_LUBE) {
            lubeUpToyWithSpit(toy, false);
        } else if (lubeType === TOOTHPASE_LUBE) {
            lubeUpToyWithToothpaste(toy);
        } else if (lubeType === TIGER_HOT_LUBE) {
            lubeUpToyWithTigerHot(toy);
        } else {
            sendMessage("Today I don't you to use any lube %Grin%");
        }

        runAssCrackPreparation(toy);
        startPenetratingSession(toy);
    }
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

    const durationMinutes = randomInteger(10, 30);
    const date = setDate();

    while(!date.addMinutes(durationMinutes).hasPassed() && appendModule(toy)) {}

    sendMessage("%SlaveName%");
    sendMessage("You can put your toys aside");
    sendMessage("We are done with that %Ass% for now");
}

function appendModule(toy) {
    let assModulesDone = getVar("assModulesDone", new java.util.ArrayList());
    setVar("assModulesDone", assModulesDone);

    const finger = toy == "finger";

    if (isChance(50) && !finger && !assModulesDone.contains(0)) {
        assModulesDone.add(0);
        sendMessage("Now place that " + toy + " on the ground");
        sendMessage("You already know what's coming next don't you?");

        //TODO: Ask what the sub guesses he has to do
        let blowjob = false;
        if (isChance(50) && getASMLimit() == LIMIT_ASKED_YES) {
            //Blowjob
            sendMessage("%SlaveName% I want you to sit down in front of it and give it a nice blowjob");

            if (isChance(30)) sendMessage("Hopefully you cleaned your ass before because otherwise this might be quite gross %Grin%");
            sendMessage("You will probably taste that ass juice of yours %Lol%");
            startBlowToy(toy);
            sendMessage("See! Much better");
            sendMessage("Now the dildo looks clean again and can go right back up your ass %Grin%");
            //TODO: Use this more often with a dedicated method
            sendMessage("Hopefully that was as much fun for you as for me");

            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                sendMessage("Oh wait...");
                sendMessage("I don't really care %Lol%");
            }

            blowjob = true;
        }

        if (blowjob) {
            sendMessage("So let's get that freshly cleaned " + toy + " back up your ass shall we?");
            sendMessage("Hmmm... How should I start first?");
        }

        if (!blowjob || isChance(30)) {
            if (blowjob) {
                sendMessage("Let's do what I originally had in mind before I decided to let you blow it first %Grin%");
            }

            sendMessage("%SlaveName% I want you to squat above it");
            if (isChance(20)) {
                sendMessage("And...");
                sendMessage("I want you to stay like this for a while");
                sendMessage("Fitness is important %Grin%");
                sleep(random(30, 60));
                sendMessage(random("A small training never hurts does it?", "%Good% Let's continue"));
            }

            startSquatAnal(toy);
        } else if (blowjob) {
            sendMessage("Let's see...");
        }
    } else if(!assModulesDone.contains(1)) {
        assModulesDone.add(1);
        appendPenetratingSession(toy);
    } else {
        return false;
    }

    return true;
}

function appendPenetratingSession(toy) {
    //TODO: Generalize append transition
    sendMessage("Now...");

    let blowjob = isChance(20);
    let currentBlowjob = false;
    if (blowjob) {
        blowjob = addBlowjobToFucking(toy);
        currentBlowjob = blowjob;
    }

    //TODO: Don't have the same position twice
    choosePosition(toy, blowjob);
    sendMessage("Put the tip of your " + toy + " on your asshole");
    sendMessage("Be ready");
    sendMessage("Because you are going to push it in and out to the beat %Grin%");
    //TODO: Speed based on progress in the session
    sendMessage("We'll start slow and work our way up there");
    sendMessage("Here we go", 0);

    //TODO: Numbers based on experience
    let iterations = randomInteger(2, 4);
    while (iterations > 0) {
        startAnal(30, randomInteger(120, 240));
        iterations--;

        if (isChance(50) || !blowjob) {
            sendMessage("Let's change the position shall we? %Grin%");
            choosePosition(toy, blowjob);
            sendMessage("And straight back to fucking that %Ass% of yours");
            if(currentBlowjob) {
                sendMessage("And don't forget to keep that mouth " + random("busy", "occupied", "used", "filled") + " too %Lol%");
            }
        } else {
            if (isChance(50) && currentBlowjob) {
                stopBlowjobFuckingInstructions();
                currentBlowjob = false;
            } else {
                startBlowjobFuckingInstructions(toy);
            }

            sendMessage("And back to fucking that %Ass% %Grin%");
        }
    }

    sendMessage("Pull your " + toy + " out of your ass");
}

//TODO: Has second dildo
function addBlowjobToFucking(toy, mountedToWall = false, inFront = false) {
    const hasSecondDildo = true;

    if (hasSecondDildo) {
        if (!fetchToy(getDildoModifier(true) + " dildo")) {
            return false;
        }

        addBlowjobToFucking(toy, mountedToWall, inFront);
    }

    return hasSecondDildo;
}

function stopBlowjobFuckingInstructions(toy) {
    let usedBlowjobInstructions = getVar("usedBlowjobInstructions");
    //Number to state that we had instructions before but stopped them
    usedBlowjobInstructions.add(1000);
    sendMessage("%SlaveName% put that second dildo aside for now. You can stop raping your mouth for now %Grin%");
}

function startBlowjobFuckingInstructions(toy, mountedToWall = false, inFront = false) {
    let usedBlowjobInstructions = getVar("usedBlowjobInstructions", new java.util.ArrayList());

    //TODO: Switch toy?
    if (usedBlowjobInstructions.isEmpty()) {
        sendMessage("%SlaveName%");
        sendMessage("You are going to fuck yourself in a minute");
        sendMessage("But I want to occupy more than one hole of you");
        sendMessage("I also want you to use that " + toy + " to fuck your dirty mouth");
        sendMessage("You are gonna use your one hand to fuck your ass and you are gonna use your other one to fuck your mouth");
        sendMessage("Not only will it be entertaining to watch");
        sendMessage("It will also make you shut up %Lol%");
    }
    //Means the last thing we did was stopping the blowjob
    else if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 1000) {
        sendMessage("%SlaveName%");
        sendMessage("Grab your second dildo");
        sendMessage("You will yet again use that dildo of yours to rape your slutty mouth");
        sendMessage("And not only will you be raping your mouth but also your %Ass% %Grin%");
    } else {
        sendMessage("%SlaveName%");
        sendMessage("We are gonna switch that blowjob thing up a bit");
        sendMessage("From now on...");
    }

    let skipASM = false;
    if (isChance(50) || getVar(VARIABLE_BLOWJOB_LEVEL) < 30) {
        //Either because we haven't been doing this already or because the last thing we did was the normal blowjob beat
        if (isChance(20) && usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 5 || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 0) {
            //Means the last thing we did was blowjob to the beat
            if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 0) {
                sendMessage("You will up the speed of your blowjob");
                sendMessage("Not only will you speed up...");
                sendMessage("You will go as fast as possible %Grin%");
            } else {
                sendMessage("You will rape your mouth as fast as you can");
            }

            usedBlowjobInstructions.add(5);
        } else {
            //Checks if we did the blowjob beat thing already
            if (usedBlowjobInstructions.contains(0)) {
                //Means the last thing we did was raping the mouth as fast as possible
                if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 5) {
                    sendMessage("You can slow it down a bit and go back to the speed of the beat");
                } else {
                    sendMessage("Let's go back to matching the beat with your dildo");
                    sendMessage("A plain and simple blowjob matching the beat %Grin%");
                }
            } else {
                usedBlowjobInstructions.add(0);
                sendMessage("You will fuck your mouth in the same speed you are gonna fuck your ass");
                sendMessage("Matching the beat %Grin%");
            }
        }
    } else {
        outerLoop:
            while (true) {
                const random = randomInteger(0, 3);
                switch (random) {
                    case 0:
                        if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 1) {
                            usedBlowjobInstructions.add(1);
                            sendMessage("You are gonna deepthroat that dildo the whole time");
                            sendMessage("I don't care if you need to gag %Lol%");

                            if (getASMLimit() == LIMIT_ASKED_YES) {
                                sendMessage("If you need to take it out because you can't take it anymore you will switch the dildos");
                                announceSwitchDildos();
                                sendMessage("Maybe you can make it without switching");
                                sendMessage("Or maybe you'll have to taste your ass juice every 5 seconds");
                                sendMessage("It all depends on your performance");
                                skipASM = true;
                            }

                            break outerLoop;
                        }

                        //Try again
                        break;
                    case 1:
                        if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 2) {
                            usedBlowjobInstructions.add(2);
                            sendMessage("You are gonna give that " + toy + " a nice blowjob and every 10 seconds you are gonna deepthroat that dildo for 5 seconds");
                            break outerLoop;
                        }

                        //Try again
                        break;
                    case 2:
                        if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 3) {
                            usedBlowjobInstructions.add(3);
                            sendMessage("You are gonna give that " + toy + " a nice blowjob and every 15 seconds you are gonna deepthroat that dildo for 5 seconds");
                            break outerLoop;
                        }

                        //Try again
                        break;
                    case 3:
                        if (usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 4) {
                            usedBlowjobInstructions.add(4);
                            sendMessage("You are gonna give that " + toy + " a nice blowjob and every 20 seconds you are gonna deepthroat that dildo for 10 seconds");
                            break outerLoop;
                        }

                        //Try again
                        break;
                }
            }
    }

    if (getASMLimit() == LIMIT_ASKED_YES && !skipASM && isChance(50)) {
        sendMessage("Furthermore I want you to switch the dildos every " + random(10, 15, 20, 25) + " seconds");
        announceSwitchDildos();
    }

    setTempVar("usedBlowjobInstructions", usedBlowjobInstructions);
}

function announceSwitchDildos() {
    sendMessage("Meaning the dildo that was just fucking your ass will go straight into your mouth");
    sendMessage("And the dildo you were just deepthroating will go up your ass");
}

function choosePosition(toy, needsTwoHands = false) {
    const random = randomInteger(0, 5);
    switch (random) {
        case 0:
            sendMessage("I want you to sit back in your chair");
            sendMessage("And put your legs on the desk in front of you %Grin%");
            break;
        case 1:
            if (!needsTwoHands) {
                sendMessage("I want you on all fours %Grin%");
                break;
            }
        //Fallthrough if we need both hands
        case 2:
            sendMessage("I want you to lay down on your back");
            sendMessage("Put your legs in the air and spread them apart %Grin%");
            break;
        case 3:
            sendMessage("I want you to lay down on your " + random("right", "left") + " side");
            sendMessage("Spread your legs by sticking one leg into the air %Grin%");
            break;
        case 4:
            sendMessage("I want you to you to lay down on your stomach");
            if (isChance(50)) {
                sendMessage("And I want you to spread your legs apart %Grin%");
            }
            break;
        case 5:
            sendMessage("I want you to lay down on your back");
            sendMessage("And to bend your legs so that your feet touch the ground %Grin%");
            break;
    }
}

function startSquatAnal(toy) {
    sendMessage("Now...");
    sendMessage("In a minute I want you to slowly go up and down on that " + toy);

    let noHands = false;

    if (feelsEvil()) {
        noHands = true;

        if (isChance(50)) {
            sendMessage("I don't want to see you use your " + random("fingers", "hands") + " at anytime");
        } else {
            sendMessage("I don't care how you keep your dildo on the ground");
            sendMessage("However you will not be allowed to touch it with your " + random("fingers", "hands"));
        }

        if (isChance(50)) sendMessage("Which means...");

        if (isChance(50)) {
            sendMessage("In case it falls over");

            //TODO: Interaction if limit unknown (seduce maybe?)
            if (getASMLimit() == LIMIT_ASKED_YES) {
                sendMessage("You will have to pick it up using your mouth %Grin%")
            } else {
                sendMessage("You will have to use your feet or be more creative to position again %Lol%")
            }
        } else {
            if (getASMLimit() == LIMIT_ASKED_YES) {
                sendMessage("You will have to use your mouth to pick the dildo if it falls over %Lol%");
            } else {
                sendMessage("You will have to use your feet to pick the dildo if it falls over %Grin%");
            }
        }

        sendMessage("This " + random("will be", "looks like", "seems like") + " fun");

        //TODO: Could need something like this more often
        if (isChance(30)) {
            sendMessage("Maybe only for me");
            sendMessage("But that's all this is about");
            sendMessage("My joy, my will, my commands and my pleasure %Grin%");
        }
    } else {
        sendMessage("You may use your " + random("fingers", "hands") + " for any assistance and to keep your " +
            toy + " on the ground");

        //TODO: Could need something like this more often
        if (isChance(40)) {
            //Only send this when the sub is not in chastity
            if (!isVar(VARIABLE_CHASTITY_ON)) {
                sendMessage("But no touching that %Cock%");
            }
        } else {
            sendMessage("Luckily I don't have to worry about your cock");
            sendMessage("It's locked up in it's %Cage% and it is gonna stay this way for now");
            if (isChance(50)) sendMessage("Maybe even for ever %Grin%");
        }
    }

    sendMessage("I want you to match the upcoming beat of course");
    sendMessage("Better be " + random("ready", "prepared") + " %Grin%");
    for (let iterations = 0; iterations < 20; iterations++) {
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
                    //sendMessage("Let's continue with something different");
                    break;
                }
            }
            //Won't do it
            else {
                //sendMessage("Let's do something different with your ass then %Grin%");
                break;
            }
        }
        //No standing up
        else {
            if (isChance(iterations + 1) * 20 || iterations == 3) {
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