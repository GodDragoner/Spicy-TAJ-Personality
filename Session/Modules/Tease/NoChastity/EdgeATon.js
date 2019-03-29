//TODO: Competitions are actually a great idea but right now hitting this module on a saturday is not gonna happen too frequently

if(tryRunModuleFetchId()) {
    if (isStroking()) {
        sendMessage("Stop stroking %SlaveName%", 0);
        stopStroking();
        sendMessage("Trust me. You'll need the pause and it won't last too long anyway %Grin%");

        if (getVar(VARIABLE_EDGE_A_TONS_DONE, 0) == 0) {
            sendMessage("So...");
        } else {
            sendMessage("Because...");
        }
    } else {
        sendMessage("Okay %SlaveName%");
    }

    if (getVar(VARIABLE_EDGE_A_TONS_DONE, 0) == 0) {
        sendMessage("This is gonna be your first edge a ton");
        sendMessage("It's actually a great way to show my control over your %Cock%");
        sendMessage("Basically it consists of you edging over and over...");
        sendMessage("Again and again %Grin%");
        sendMessage("This is usually done alone");
        sendMessage("However you might also face competitors from time to time");
        sendMessage("Slaves will compete with each other");
        sendMessage("And the rules are rather simple");
        sendMessage("You are to edge");
        sendMessage("Hold it for 10 seconds");
        sendMessage("Then rest 20 seconds");
        sendMessage("Edge again");
        sendMessage("Then at random intervals you will be told to go completely soft");
        sendMessage("Once you're completely soft you are to get back on the edge");
        sendMessage("Before we begin I need to know your soft cock length in centimeters");
        sendMessage("And it must be rounded UP to nearest value");
        sendMessage("If your soft penis is 6,4cm long I want you to tell me it's 7 centimeters long");
        sendMessage("So %SlaveName%");
        const answer = sendInput("What is your soft cock length?");

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("I know your cock is small but it can't I also know it exists %Lol%");
                    answer.loop();
                } else {
                    if (result > 7) {
                        sendMessage("Well that seems almost decent ");
                    } else {
                        sendMessage("Wow that\'s small! For your sake I hope you're a \"grower\"");
                    }

                    sendMessage("My lover's cock is 13cm when soft and he's a grower");
                    sendMessage("And oh my... It sure does grow %Grin%");
                    sendMessage("I bet your friend " + getVar("blackmailName1") + " wouldn't be impressed by your size either %Lol%")
                    setVar(VARIABLE_SOFT_COCK_LENGTH, result);
                    break;
                }
            } else {
                sendMessage("You need to input a number...");
                sendMessage("You can't write 4 centimeters or 'four'");
                sendMessage("A simple number such as 3, 10 or 12 will do");
                answer.loop();
            }
        }

        sendMessage("Every saturday you can enter an edging competition");
        sendMessage("The entry fee is 20 gold and you might win 200 gold");
        sendMessage("But before I'll let you enter the competition you need to complete at least 15 training sessions with me %Grin%");
    } else {
        sendMessage("Now we will play another game %EmoteHappy%");
        sendMessage("You will probably remember it...");
        sendMessage("It's called edge a ton %Grin%")

        const date = new Date();

        //Saturday TODO: Implement competition
        if (date.getDay() == 6 && false) {
            if (getVar(VARIABLE_EDGE_A_TONS_DONE) > 15) {
                sendMessage("And I have another good news...");
                sendMessage("Today is saturday!");

                if (getVar(VARIABLE_GOLD) < 20) {
                    sendMessage("Oh...");
                    sendMessage("You don't have enough gold to participate in a competition %EmoteSad%");
                    if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
                        sendMessage("I'm sorry %SlaveName%");
                    } else {
                        sendMessage("You should definitely work some more for that gold!");
                        changeMeritLow(true);
                    }

                    sendMessage("Well then...")
                    sendMessage("Seems like today we're just having a regular session");
                } else {
                    const answer = sendInput("Do you wish to enter the edging competition?");

                    while (true) {
                        if (answer.isLike("yes")) {
                            sendMessage("%Good%");
                            break;
                        } else if (answer.isLike("no")) {
                            sendMessage("Well then we're just having a normal training session today");
                            break;
                        } else {
                            sendMessage(YES_OR_NO);
                            answer.loop();
                        }
                    }
                }
            }
        }
    }

    setVar(VARIABLE_EDGE_A_TONS_DONE, getVar(VARIABLE_EDGE_A_TONS_DONE, 0) + 1);

    sendMessage(random("So, Well, Hmm") + "...");

//Will dom determine the edges? Only if  this is not the first run
    if (isChance(30 * (ACTIVE_PERSONALITY_STRICTNESS + 1)) && getVar(VARIABLE_EDGE_A_TONS_DONE) !== 1) {
        sendMessage("Let's do this a bit differently today %SlaveName%");
        sendMessage("I fell like taking some more control today");
        sendMessage("I will choose how many edges you'll do today %EmoteHappy%");

        if (getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD) <= 0) {
            setVar(VARIABLE_EDGE_A_TON_EDGE_RECORD, 15);
        }

        if (ACTIVE_PERSONALITY_STRICTNESS == 0) setVar(VARIABLE_EDGE_A_TON_EDGE_RECORD, getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD) + 1);
        if (ACTIVE_PERSONALITY_STRICTNESS == 1) setVar(VARIABLE_EDGE_A_TON_EDGE_RECORD, getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD) + 2);
        if (ACTIVE_PERSONALITY_STRICTNESS == 2) setVar(VARIABLE_EDGE_A_TON_EDGE_RECORD, getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD) + 4);
        sendMessage("Let's see...");
        sendMessage("You will do " + getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD) + " edges for me today. This will set a new record %Grin%");
        startEdgeATon(true, getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD));
    } else {
        const answer = sendInput(random("How many edges do you wish to do for today's training?", "How many edges do you wish to do today?", "How many edges can you handle today?"));

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("You can't choose a number lower than 1...");
                    answer.loop();
                } else {
                    if (result > getVar(VARIABLE_EDGE_A_TON_EDGE_RECORD)) {
                        sendMessage("A new record! %Grin%");
                        changeMeritMedium(false);
                        setVar(VARIABLE_EDGE_A_TON_EDGE_RECORD, result);
                    }

                    startEdgeATon(false, result);
                    break;
                }
            } else {
                sendMessage("You need to input a number...");
                answer.loop();
            }
        }
    }
}

function startEdgeATon(chosenByDom, edgesToDo) {
    let impressive = 0;

    if (!chosenByDom) {
        if (ACTIVE_PERSONALITY_STRICTNESS == 0 && edgesToDo > 30) impressive = 2;
        if (ACTIVE_PERSONALITY_STRICTNESS == 1 && edgesToDo > 35) impressive = 2;
        if (ACTIVE_PERSONALITY_STRICTNESS == 2 && edgesToDo > 42) impressive = 2;

        if (ACTIVE_PERSONALITY_STRICTNESS == 0 && edgesToDo > 15) impressive = 1;
        if (ACTIVE_PERSONALITY_STRICTNESS == 1 && edgesToDo > 18) impressive = 1;
        if (ACTIVE_PERSONALITY_STRICTNESS == 2 && edgesToDo > 22) impressive = 1;
    }

    if (impressive == 2) {
        sendMessage(random("Oh wauv!", "You're really going for it!", "This is gonna be intense %Grin%", "I hope you can handle this!", "Great lets not waste a moment!"));
        changeMeritMedium(false);
    } else if (impressive == 1) {
        sendMessage(random("Well then... Lets begin", "It's time to begin", "Lets get that cock to work!", "Time to work out that cock!", "I hope you're ready for some cock workout!"));
        changeMeritLow(false);
    } else {
        sendMessage(random("I'm not impressed", "You really should try to do better", "You could at least try a little harder", "You need to try harder..."));
        changeMeritLow(true);
    }

    while (edgesToDo > 0) {
        startEdging(getEdgeHoldSeconds(EDGE_HOLD_SHORT));
        sendMessage("%LetEdgeFade%");
        sleep(randomInteger(20));
        edgesToDo--;

        if (edgesToDo > 0 && chance(7)) {
            sendMessage("Okay %SlaveName%");
            sendMessage("Time for you to get completely soft %Grin%");
            growDickSoft();
        }
    }

    sendMessage(random("I'm gonna make you edge one final time", "You are to edge one more!", "You're gonna edge once more", "I'm gonna make you edge one more time"));
    sendMessage(random("You will hold it again for 10 seconds", "You're gonna hold it for another 10 seconds", "Like before you're gonna hold it for 10 seconds"));
    sendMessage(random("After which you are going to get completely soft!", "And then I want you get soft as fast as possible", "Then you need to get soft as fast as possible"));
    sendMessage(random("Breathe...", "Relax", "Calm yourself"));
    sleep(randomInteger(5, 15));
    startEdging(getEdgeHoldSeconds());
    sendMessage("%LetEdgeFade%");

    if(!growDickSoft() && feelsLikePunishingSlave() && hasChastityCage()) {
        sendMessage('You know what?');
        sendMessage('Since it took you that long to get soft and you are already soft');
        sendMessage('Why don\'t we keep it that way for now? %Grin%');
        sendMessage('You know what is coming right? %EmoteHappy%');
        lockChastityCage();
        sendMessage('Much better, isn\'t it?');
        sendMessage('Now you won\'t have to go through the trouble of getting soft at the end anymore and I really don\'t want to wait that long again');
        sendMessage('Just get soft quicker next time and don\'t annoy me %Lol%');
    }

    sendMessage("Well that was it for your edge a ton today %Grin%");
}

function growDickSoft() {
    sendMessage(random("Use the ruler to determine to when you're there", "And use the ruler to determine when you're soft", "Use the ruler to measure when you're soft"));
    sendMessage(random("Your cock has to be shorter than", "Your cock must be shorter than", "Your tiny dick has to be shorter than") + getVar(VARIABLE_SOFT_COCK_LENGTH) + " centimeters");
    const answer = sendInput(random("When you're completely soft I want you to simply say 'soft'!", "Just say 'soft' when you're soft", "Just type 'soft' when you're soft"));

    const dateStart = new Date().getTime();

    while (true) {
        if (answer.isLike("soft")) {
            sendMessage("%Good%");
            sendMessage("Lets move on shall we?");
            break;
        } else {
            sendMessage("If your dick is soft just say \"soft\"");
            sendMessage("Otherwise don't bother me!");
            answer.loop();
        }
    }

    const timePassed = (new Date().getTime() - dateStart) / 1000;
    sendMessage(random("Well %SlaveName%", "Hmm %SlaveName%", "%Grin%"));
    sendMessage("It took you " + timePassed + " seconds to get soft %Lol%");
    if (isVar(VARIABLE_SECONDS_TO_GET_SOFT)) {
        if (getVar(VARIABLE_SECONDS_TO_GET_SOFT) > timePassed) {
            sendMessage("Which seems to be a new record!");
            setVar(VARIABLE_SECONDS_TO_GET_SOFT, timePassed);
            return true;
        } else {
            sendMessage("Which isn't a new record... %EmoteSad%");
            return false;
        }
    }
}






