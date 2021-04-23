//TODO: use ice cubes, food?

{
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.ANAL)) {
        if (!ANAL_LIMIT.isAllowed()) {
            //Try to find a different module
            tryRunModuleFetchId();
        } else {
            if (!isVar(VARIABLE.ENEMA_INTRO) && hasEnemaKit() && isVar('assIntro')) {
                //QUALITY: Based on whether contact 1 appeared yet etc.
                runEnemaIntro();
                sendMessage('Now that that\'s settled');
            } else {
                sendMessage("Let's see %SlaveName%");
            }

            sendMessage(random("I think it's time to work that ass", "I guess it's time to work on your ass", "Let's have some fun with your ass shall we?", "Let's play a fun little game... with your ass %Grin%"));

            //Run ass intro
            if (!isVar('assIntro')) {
                runAssIntro();
            }

            let plugPlay = hasButtplugToy() && isChance(50) && getVar(VARIABLE.ASS_LEVEL) >= 5;
            let dildoPlay = hasDildoToy() && getVar(VARIABLE.ASS_LEVEL) >= 5;

            if (isPlugged()) {
                if (isChance(50)) {
                    sendMessage("Plugging you beforehand was a great idea");
                    sendMessage("Because...");
                    sendMessage("Now we can start with the bigger stuff right away %Grin%");
                } else {
                    sendMessage("You look quite pathetic plugged up as you are %Lol%");
                }

                let tasks = !BUTTPLUG_TOY.getLastUsage().addMinute(5).hasPassed();

                if (!tasks) {
                    if (isChance(25)) {
                        if (currentPlug !== biggestButtplug) {
                            tasks = increasePlugSize();
                        }
                    }
                }

                if (tasks) {
                    sendMessage("However I want you to keep that plug inside for now...");
                    sendMessage("A bit more of a warmup can never be too bad right?");
                    sendMessage("But let's not waste the time we are waiting for your ass to stretch though");
                    startTimePassTasks(5);
                    sendMessage("I think we waited long enough. Let's get back to your ass");
                }

                removeButtplug();
            } else {
                let missingPlug = false;
                if (plugPlay) {
                    sendMessage("Let's start by stretching that ass of yours");
                    if (!putInButtplug()) {
                        missingPlug = true;

                        changeMeritHigh(true);
                        sendMessage("That's really bad %SlaveName%");
                        sendMessage("You must always have your toys around or tell me preemptively that you are not able to bring your toys to a session");

                        sendMessage("Well then...");
                    } else {
                        sendMessage("Let's spend the time that the plug is stretching your ass with something useful");
                        startTimePassTasks(5);
                        sendMessage("I believe we waited long enough and your ass is ready for more now");
                        removeButtplug();
                    }
                }
            }

            let toy = getAnalDildo().name;

            if (dildoPlay) {
                if (!fetchDildoToy(toy)) {
                    lastAlternativeFingerPlay();
                    toy = "finger";
                    dildoPlay = false;
                } else {
                    setDate(VARIABLE.LAST_DILDO_SWAP_DATE);
                    sendMessage("Okay let's get started then");
                }
            } else {
                toy = "finger";
            }

            const lubeType = getAssLubeType(getMood());

            if (lubeType == ANY_LUBE) {
                lubeUpToyWithLube(toy);
            } else if (lubeType === SPIT_LUBE) {
                lubeUpToyWithSpit(toy, toy != 'finger');
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
}


function runAssCrackPreparation(toy) {
    const finger = toy == "finger";

    sendMessage("Now " + random("slowly", "gently") + " rub the tip of your " + toy + " along your ass crack");
    sendMessage("Up...", 3);
    sendMessage("And down...", 3);
    sendMessage("Up...", 3);
    sendMessage(random("Your ass must be begging for your " + toy, "Can you feel your ass preparing for being penetrated already?"));
    sendMessage("Down...");

    sendMessage("Now go ahead and slowly push the tip of your " + toy + " in", 2);
    sendMessage("Slowly and careful", 2);
    sendMessage("Now pull it out again", 2);
    sendMessage("And in again. This time a bit further", 2);
    sendMessage("Keep it there...", 2);
    sendMessage("And...", 2);
    sendMessage("Pull it out again", 2);
    sendMessage("One more time", 2);
    sendMessage("In", 2);
    sendMessage("Hold it", 2);
    sendMessage("And...", 2);
    sendMessage("Out %Grin%", 2);

}

function startPenetratingSession(toy) {
    const finger = toy == "finger";

    sendMessage("Now that your ass is properly prepared go ahead and push it completely in");
    sendMessage("Keep it in there", 5);
    sendMessage("And pull it all the way out again");

    //Sit on dildo
    if (!finger && getVar(VARIABLE.ASS_LEVEL) >= 15 && isChance(20)) {
        sendMessage('Now I want you to to place it in front of you... %Grin%');
        sendAlreadyKnowWhatsNext('sit', 'squat');

        sendMessage('I want you to sit down on it completely');
        sendMessage('So go ahead, squat above it and slowly go down on that ' + toy);
        sendMessage('Keep sitting on it until you hear my bell %Grin%');
        sleep(randomInteger(30, 60));
        playBellSound();


        if (getASMLimit() === LIMIT_ASKED_YES && feelsEvil()) {
            sendMessage('I want you to pick up that dildo with your mouth and bring it to me %Grin%');
            sendMessage('Mhmmm. Tastes good doesn\'t it? %Lol%');
        } else {
            sendMessage('You can lift your ass up and pick up that dildo again %SlaveName%');
        }
    }

    const durationMinutes = getAnalSessionLength();
    const date = setDate();

    sendDebugMessage('Going for ' + durationMinutes + ' minutes of anal session');

    while (!date.clone().addMinute(durationMinutes).hasPassed() && appendModule(toy)) {
    }

    sendMessage("%SlaveName%");
    sendMessage("You can put your toys aside");
    sendMessage("We are done with that ass for now");
}

function getAnalSessionLength() {
    //Max one third of session anal
    let maxMinutes = Math.ceil(getVar(VARIABLE.DEVOTION) / 3);

    //TODO: Anal themed session

    let min = Math.max(5, getVar(VARIABLE.ASS_LEVEL) / 3);
    let max = Math.max(10, getVar(VARIABLE.ASS_LEVEL) / 1.5);


    let mood = getMood();

    min += randomInteger(mood * getStrictnessForCharacter(), mood * (getStrictnessForCharacter() + 1));
    max += randomInteger(mood * getStrictnessForCharacter(), mood * (getStrictnessForCharacter() + 1));

    let previousMin = min;

    min = Math.min(previousMin, max);
    max = Math.max(previousMin, max);

    //Domme mode
    if (isVar('analWhoreMode')) {
        maxMinutes = Math.ceil(getVar(VARIABLE.DEVOTION) / 2);

        min *= 1.5;
        max *= 1.5;
    }

    sendDebugMessage('Min for anal:' + min + ' Max for anal:' + max);
    sendDebugMessage('Max (total): ' + maxMinutes);

    return Math.min(maxMinutes, randomInteger(Math.ceil(min), Math.ceil(max)));
}

function appendModule(toy) {
    let assModulesDone = getVar("assModulesDone", new java.util.ArrayList());
    setTempVar("assModulesDone", assModulesDone);

    const finger = toy == "finger";

    if (isChance(50) && !finger && !assModulesDone.contains(0)) {
        assModulesDone.add(0);
        sendMessage("Now place that " + toy + " on the ground");
        sendMessage('%KnowWhatsNext%');

        let subGuess = 0;
        let answer = createInput(7);

        if (!answer.isTimeout()) {
            if (answer.isLike("blow")) {
                subGuess = 1;
            } else if (answer.isLike("squat", "ass")) {
                subGuess = 2;
            }
        }

        let blowjob = false;
        if (isChance(50) && getASMLimit() == LIMIT_ASKED_YES) {
            //Blowjob
            sendMessage("%SlaveName% I want you to sit down in front of it and give it a nice blowjob");

            if (subGuess != 0 && subGuess == 2) {
                sendMessage("Well you guessed wrong");
                sendMessage("No fucking your ass...");
                sendMessage("...yet %Grin%");
                sendMessage("Don't worry we will get back to that ass of yours soon enough");
            } else if (subGuess != 0 && subGuess == 1) {
                sendMessage("You did actually guess right!");
                sendMessage("I hope you will enjoy this as much as I already do");
            }

            if (isChance(30)) sendMessage("Hopefully you cleaned your ass before because otherwise this might be quite gross %Grin%");
            sendMessage("You will probably taste that ass juice of yours %Lol%");

            startBlowToy(toy);
            sendMessage("See! Much better");
            sendMessage("Now the dildo looks clean again and can go right back up your ass %Grin%");
            sendAsMuchFun();

            blowjob = true;
        }

        if (blowjob) {
            sendMessage("So let's get that freshly cleaned " + toy + " back up your ass shall we?");
            sendMessage("Hmmm... How should I start first?");
        }

        if (!blowjob || isChance(30)) {
            if (blowjob) {
                sendMessage("Let's do what I originally had in mind before I decided to let you blow it first %Grin%");
            } else {
                if (subGuess != 0 && subGuess == 2) {
                    sendMessage("Well you guessed right");
                    sendMessage("Your ass will be violated again");
                    sendMessage("However this time in a special position %Grin%");
                } else if (subGuess != 0 && subGuess == 1) {
                    if (ASM_LIMIT.getLimit() !== LIMIT_ASKED_YES) {
                        sendMessage('A blowjob?!');

                        ASM_LIMIT.askForLimitChange(LIMIT_ADDRESS.SUB);
                    }

                    sendMessage("No %SlaveName%. I won't make you blow that " + toy);
                    sendMessage("Silly you. It will be much better than a blowjob %Grin%");
                }
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
    } else if (!assModulesDone.contains(1)) {
        assModulesDone.add(1);
        appendPenetratingSession(toy);
    } else {
        assModulesDone.add(1);
        appendPenetratingSession(toy);
    }

    return true;
}


function appendPenetratingSession(toy) {
    //TODO: Generalize append transition
    sendMessage("Now...");

    let blowjob = isChance(30);
    let currentBlowjob = false;

    if (blowjob) {
        blowjob = addBlowjobToFucking(toy);
        currentBlowjob = blowjob;
    }

    const finger = toy == "finger";
    let currentFingerCount = 1;

    toy = choosePosition(toy, blowjob);

    sendMessage("Put the tip of your " + toy + " on your asshole");
    sendMessage("Be ready");
    sendMessage("Because you are going to push it in and out to the beat %Grin%");

    //TODO: Speed based on progress in the session
    sendMessage("We'll start slow and work our way up there");
    sendMessage("Here we go", 0);

    //TODO: Numbers based on experience
    let iterations = randomInteger(2, 4);
    while (iterations > 0) {
        startAnal(getInitialAnalBPM(), randomInteger(120, 240));
        iterations--;

        //No new instructions if this loop is about to end
        if (iterations > 0) {
            if (isChance(50) || !blowjob) {
                sendMessage("Let's change the position shall we? %Grin%");
                toy = choosePosition(toy, currentBlowjob);
                sendMessage("And straight back to fucking that ass of yours");

                if (currentBlowjob) {
                    sendMessage("And don't forget to keep that mouth " + random("busy", "occupied", "used", "filled") + " too %Lol%");
                }
            } else {
                if (isChance(50) && currentBlowjob) {
                    stopBlowjobFuckingInstructions();
                    currentBlowjob = false;
                } else {
                    startBlowjobFuckingInstructions(toy);
                }

                sendMessage("And back to fucking that ass %Grin%");
            }

            if (isChance(50) && finger && currentFingerCount < getVar(VARIABLE.ASS_LEVEL) / 6 && currentFingerCount < 5) {
                sendMessage("I think you are ready to take more than your " + currentFingerCount++ + pluralize("finger", currentFingerCount));
                sendMessage("Go ahead and use " + currentFingerCount + pluralize("finger", currentFingerCount) + " from now on %Grin%");
                if (currentFingerCount >= 4) {
                    sendMessage("Better spread that asshole for me");
                }
            }
        }
    }

    sendMessage("Pull your " + toy + " out of your ass");
}

function addBlowjobToFucking(toy, mountedToWall = false, inFront = false) {
    const hasSecondDildo = DILDOS.length > 1;

    if (hasSecondDildo) {
        let dildos = DILDOS;
        if(toy != 'finger') {
            dildos = filterListForObject(getDildoByName(toy), DILDOS);
        }

        let secondDildo = getDildo(true, dildos);

        //Check if couldn't find second dildo to use
        if(secondDildo.name != toy) {
            if (!fetchDildoToy(toy = secondDildo.name)) {
                return false;
            }

            if (!ASM_LIMIT.isAllowed()) {
                sendMessage('You may clean your ' + toy + ' if need be before we are continuing');
                sendMessage('So tell me when you are ready to continue');
                waitForDone();
            }

            startBlowjobFuckingInstructions(toy, mountedToWall, inFront);
        } else {
            sendDebugMessage('Failed to find second dildo for blowjob fucking because got ' + secondDildo.name);
            return false;
        }
    }

    return hasSecondDildo;
}

function stopBlowjobFuckingInstructions() {
    let usedBlowjobInstructions = getVar("usedBlowjobInstructions", new java.util.ArrayList());

    //Number to state that we had instructions before but stopped them
    usedBlowjobInstructions.add(1000);
    sendMessage("%SlaveName% put that second dildo aside for now. You can stop raping your mouth for now %Grin%");
}

function startBlowjobFuckingInstructions(toy, mountedToWall = false, inFront = false) {
    let usedBlowjobInstructions = tryGetArrayList("usedBlowjobInstructions");

    if (isGaged()) {
        removeGag();
    }

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
        sendMessage("And not only will you be raping your mouth but also your ass %Grin%");
    } else {
        sendMessage("%SlaveName%");
        sendMessage("We are gonna switch that blowjob thing up a bit");
        sendMessage("From now on...");
    }

    let skipASM = false;
    if (isChance(50) || getBlowjobLevel() < 30) {
        //Either because we haven't been doing this already or because the last thing we did was the normal blowjob beat
        if (isChance(20) && (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 5 || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 0)) {
            sendMessage('Once you continue with that ass...');

            //Means the last thing we did was blowjob to the beat
            if (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) == 0) {
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
                sendMessage('Once you continue with that ass...');
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
                        if (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 1) {
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
                        if (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 2) {
                            usedBlowjobInstructions.add(2);
                            sendMessage("You are gonna give that " + toy + " a nice blowjob and every 10 seconds you are gonna deepthroat that dildo for 5 seconds");
                            break outerLoop;
                        }

                        //Try again
                        break;
                    case 2:
                        if (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 3) {
                            usedBlowjobInstructions.add(3);
                            sendMessage("You are gonna give that " + toy + " a nice blowjob and every 15 seconds you are gonna deepthroat that dildo for 5 seconds");
                            break outerLoop;
                        }

                        //Try again
                        break;
                    case 3:
                        if (usedBlowjobInstructions.isEmpty() || usedBlowjobInstructions.get(usedBlowjobInstructions.size() - 1) != 4) {
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
    chooseAnalPosition(needsTwoHands);

    if (!isVar(VARIABLE.LAST_DILDO_SWAP_DATE) || getDate(VARIABLE.LAST_DILDO_SWAP_DATE).addMinute(10 - Math.ceil(getVar(VARIABLE.ASS_LEVEL) / 6)).hasPassed()) {
        let newToy = getDildo(false).name;

        if (fetchDildoToy(newToy)) {
            sendMessage('I want you to use your ' + newToy + ' for now instead %Grin%');
            setDate(VARIABLE.LAST_DILDO_SWAP_DATE);
            toy = newToy;
        } else {
            sendMessage('Let\'s continue with your ' + toy + ' then %EmoteSad%');
        }
    }

    return toy;
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

        sendLooksLikeFun();
    } else {
        sendMessage("You may use your " + random("fingers", "hands") + " for any assistance and to keep your " +
            toy + " on the ground");

        if (isChance(40)) {
            sendNoTouchingCock();
        }
    }

    sendMessage("I want you to match the upcoming beat of course");
    sendMessage("Better be " + random("ready", "prepared") + " %Grin%");
    for (let iterations = 0; iterations < 20; iterations++) {
        startAnal(Math.max(80, getInitialAnalBPM()), randomInteger(50, 75));

        if (isChance(20)) {
            sendMessage("I have a fun idea %SlaveName%");
            sendMessage('Let me start by explaining you my plan %Grin%');
            sendMessage("First of all I want you to to sit all the way down on that " + toy);
            sendMessage("After that...");
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
                    sendMessage('Then start by sitting on the dildo now %EmoteHappy%', 5);
                    willDoIt = true;
                    break;
                } else if (answer.isLike("no")) {
                    sendMessage("There was only one right answer %SlaveName%");
                    sendMessage("And you didn't answer correctly");
                    sendMessage("Well...");
                    changeMeritMedium(true);
                    if (isChance((getStrictnessForCharacter() + 1) * 30)) {
                        sendMessage("I want you to try it anyway");
                        sendMessage('Start by sitting on the dildo now %SlaveName%!', 5);
                        willDoIt = true;
                    } else {
                        //TODO: Enable interaction (like: I will do it)
                        sendMessage("Seems like there is nothing I can do about that...");
                    }
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
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
                        smallPunishment();
                        changeMeritMedium(true);
                        sendMessage("And now go ahead and sit all they way down on that " + toy + " again");
                        break;
                    } else {
                        sendMessage(YES_OR_NO, 0);
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
                            sendMessage("Go ahead and find a way to position the " + toy + " again");
                            readyInput();
                        } else {
                            sendMessage("Go ahead and pick up your " + toy + " and position it again");
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
                                            sendMessage("Did you make it this time?", 0);
                                            answer.loop();
                                        } else {
                                            sendMessage("I don't feel like trying again");
                                            sendMessage("At least you tried and it was definitely fun to watch!");
                                            changeMeritLow(true);
                                            break;
                                        }
                                    } else {
                                        sendMessage(YES_OR_NO, 0);
                                        answer.loop();
                                    }
                                }
                                break;
                            } else {
                                sendMessage(YES_OR_NO, 0);
                                answer.loop();
                            }
                        }
                        break;
                    } else {
                        sendMessage(YES_OR_NO, 0);
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
                                sendMessage("Which means we gotta work on that ass even more");
                                sendMessage("You can go ahead and pull that " + toy + " out of your ass now");
                                break;
                            } else {
                                sendMessage(YES_OR_NO, 0);
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