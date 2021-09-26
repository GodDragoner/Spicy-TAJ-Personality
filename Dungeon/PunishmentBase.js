{
    if (!isVar(VARIABLE.PUNISHMENT_ACTIVE)) {
        setVar(VARIABLE.PUNISHMENT_ACTIVE, false);

        sendDungeonMessage(random("Hello", "Welcome", "Hi", "Greetings", "Good to see you") + ' %SlaveName%');
        sendDungeonMessage("I go by 'Miss A'");
        sendDungeonMessage("It is my job to punish you whenever you report for punishment");
        sendDungeonMessage("The Domme rarely has time to do so");
        sendDungeonMessage("So if you misbehave in sessions or similar you will often simply be awarded punishment points");
        sendDungeonMessage("These points accumulate over time");
        sendDungeonMessage("Don't let them grow too much");
        sendDungeonMessage("Or your %DomHonorific% will be displeased with you");
        sendDungeonMessage("Trust me...");
        sendDungeonMessage("You don't want that to happen!");
        sendDungeonMessage("Currently you have 2 options with me");
        sendDungeonMessage("Report for punishment");
        sendDungeonMessage("Or");
        sendDungeonMessage("You can sell your ass");
        sendDungeonMessage("Yes you heard correctly!");
        sendDungeonMessage("I'm also handling your SpankzChoir account");
        sendDungeonMessage("SpankzChoir.com is a spanking auction site");
        sendDungeonMessage("In there you can sell your ass for a spanking and actually earn gold");
        sendDungeonMessage("Do notice that your %DomHonorific% takes a percentage of your earnings");
        sendDungeonMessage("Also...");
        sendDungeonMessage("You are required to have an active account to use SpankzChoir.com");
        sendDungeonMessage("An account lasts 14 days and can be paid for in the shop");
        sendDungeonMessage('On Mondays and Fridays you have the chance to get some tasks from one of the Dommes to redeem a chosen amount of punishment points');
        sendDungeonMessage('Should you get punishment points while you have redeeming tasks active, those punishment points will be doubled and added to your balance');
        sendDungeonMessage('You will not be able to report for another punishment while you have these tasks unfinished');
        sendDungeonMessage('So you\'d better make sure to get them done quickly');
        sendDungeonMessage('These tasks will involve solely deepthroating and anal play');
        sendDungeonMessage('So be ready to do A LOT if you have a lot punishment points');
        sendDungeonMessage('For this you can specify how many punishment points you want to redeem');
        sendDungeonMessage('However it needs to be at least ' + MIN_PUNISHMENT_POINTS_FOR_TASK + ' points');
        sendDungeonMessage('So it\'s pretty much only useful if you have a lot of points to redeem');
        sendDungeonMessage('It\'s basically training and redemption for you all in one');
        sendDungeonMessage('Great isn\'t it?');
        sendDungeonMessage("Now...");
    }

    if (getVar(VARIABLE.PUNISHMENT_ACTIVE, false)) {
        setVar(VARIABLE.PUNISHMENT_ACTIVE, false);

        sendDungeonMessage("It seems you didn't complete your last punishment...", 0);
        sendDungeonMessage("Was this due to a bug or because you couldn't handle it? ", 0, false);

        let answer = createInput(15, "Bug", "Couldn't handle it");
        while (true) {
            if (answer.isTimeout()) {
                answer.clearOptions();
                sendDungeonMessage("Your lack of response leads me to believe you just couldn't handle it...");
                changeMeritLow(true);
                sendDungeonMessage("I know your %DomHonorific% is disappointed...");
                sendDungeonMessage("Remember to only choose punishments you can handle...");
                sendDungeonMessage('Sending you to the nurse for now...');
                handleFailedPunishment();
                break;
            } else if (answer.containsIgnoreCase("bug")) {
                answer.clearOptions();
                sendDungeonMessage("I hope you reported this on the Milovana Spicy thread then!", 0);
                break;
            } else if (answer.containsIgnoreCase("couldn't handle", "couldn't", "could not", "handle")) {
                answer.clearOptions();
                sendDungeonMessage("I'm disappointed...", 0);
                changeMeritLow(true);
                sendDungeonMessage("I know your %DomHonorific% is disappointed...", 0);
                sendDungeonMessage("Remember to only choose punishments you can handle...", 0);
                sendDungeonMessage('Sending you to the nurse for now...');
                handleFailedPunishment();
                break;
            } else {
                sendDungeonMessage("Bug or couldn't you handle it?", 0, false);
                answer = createInput(5);
                answer.loop();
            }
        }
    }

    if (isActivePunishmentTasks()) {
        sendDungeonMessage('You still have unredeemed tasks %SlaveName%');
        setupPunisherConnection();

        if (sendYesOrNoQuestion('I hope you finished the tasks as instructed?')) {
            sendMessage('I expect nothing less from you %SlaveName%');
            addPunishmentPoints(-getVar(VARIABLE.PUNISHMENT_TASK_POINTS));
            sendMessage('I removed ' + getVar(VARIABLE.PUNISHMENT_TASK_POINTS) + ' from your punishment point balance');
            resetPunishmentTasks();
            sendMessage('I have other things to do now...');
        } else {
            sendMessage('What do you mean no? Why are you bothering me then?', 0);
            let answer = createInput('forgot', 'give up');

            while (true) {
                if (answer.isLike('forgot', 'tell again', 'repeat')) {
                    sendMessage('Sigh...');
                    sendMessage('Here we go...');
                    sendPunishmentTaskInstructions();
                    sendMessage('That\'s it. Don\'t bother me again unless you are done!');
                    break;
                } else if (answer.isLike('give up', 'can\'t do', 'too much')) {
                    switch (getStrictnessForCharacter()) {
                        case 0:
                            sendMessage('Really...?');
                            sendMessage('You want to give up that easily?');
                            sendMessage('You disappoint me %SlaveName%');
                            sendMessage('As penalty, I will add 25% of the to redeem points to your balance');
                            addPunishmentPoints(Math.floor(getVar(VARIABLE.PUNISHMENT_TASK_POINTS) * 0.25), PUNISHMENT_REASON.POOR_BEHAVIOUR);
                            sendMessage('Don\'t disappoint me ever again and don\'t bite off more than you can chew!');
                            break;
                        case 1:
                            sendMessage('I expect more from you than giving up that easily %SlaveName%');
                            sendMessage('You are supposed to follow all orders no matter how difficult');
                            sendMessage('Not mentioning you chose this yourself');
                            sendMessage('As penalty, I will add 50% of the to redeem points to your balance');
                            addPunishmentPoints(Math.floor(getVar(VARIABLE.PUNISHMENT_TASK_POINTS) * 0.60), PUNISHMENT_REASON.POOR_BEHAVIOUR);
                            sendMessage('Don\'t disappoint me ever again and don\'t bite off more than you can chew!');
                            break;
                        case 2:
                            sendMessage('WHAT?!');
                            sendMessage('You are fucking pathetic %SlaveName%');
                            sendMessage('You can\'t even handle the most simple tasks. This is...');
                            sendMessage('DISAPPOINTING!');
                            sendMessage('As penalty, I will add 75% of the to redeem points to your balance');
                            addPunishmentPoints(Math.floor(getVar(VARIABLE.PUNISHMENT_TASK_POINTS) * 0.75), PUNISHMENT_REASON.POOR_BEHAVIOUR);
                            sendMessage('Don\'t disappoint me ever again and don\'t bite off more than you can chew!');
                            break;
                    }

                    resetPunishmentTasks();
                } else {
                    sendMessage('Do you need a reminder of your tasks or do you want to give up?', 0);
                    answer.loop();
                }
            }
        }

        //Reset current sender to dom
        setCurrentSender(1);
    } else {

        if (isVar("Punishment")) {
            delVar("Punishment");
        }

        while (true) {
            sendDungeonMessage("Yes %SlaveName%?", 0, false);
            let answer = createInput("Report for punishment", "SpankzChoir", "Points?", "Return");

            if (answer.containsIgnoreCase("how many", "point", "punishment point")) {
                answer.clearOptions();

                sendDungeonMessage(random("Hmm, give me just a moment to check your records", "2 seconds %SlaveName%", "Just a moment %SlaveName%", "Let me just check my computer..."), 2);
                sendDungeonMessage(random("It looks like", "According to my records", "It says") + " you have " + getVar(VARIABLE.PUNISHMENT_POINTS) + " punishment points.", 2);

                if (isChance(15)) {
                    addPunishmentPoints(randomInteger(25, 75));
                    sendDungeonMessage(random("Hey, while I have this file open let me add a few more", "Well that's what you did have before I made a little addition", "That seems low, let me add some"), 2, 5);
                    sendDungeonMessage(random("You're welcome %SlaveName%", "%SlaveName%, you're welcome", "Aren't you lucky I'm watching out for you?"), 2);
                }

                if (getVar(VARIABLE.PUNISHMENT_POINTS) > 750) {
                    sendDungeonMessage(random("Lol %SlaveName%, you're so fucked!", "Oh %SlaveName%, your ass is gonna bleed ", "You should be ashamed, %SlaveName%", "How did you let it get so bad?"));

                } else if (getVar(VARIABLE.PUNISHMENT_POINTS) > 500) {
                    sendDungeonMessage(random("This is SERIOUS %Slave%, you need to put some time in down here", "NOT GOOD, you need to put some serious time in down here", "I have a feeling we're going to be spending lots of time together %Grin%", "That's so many your %DomHonorific% won't even hold a session with you"));
                }

                if (getVar(VARIABLE.PUNISHMENT_POINTS) > 250) {
                    sendDungeonMessage(random("We have some work to do down here", "I'll let the mistresses know they should plan to spend some time in the dungeon"));
                } else {
                    sendDungeonMessage(random("That's not too bad", "Only a little punishment will be needed"));
                }

            } else if (answer.containsIgnoreCase("spankzchoir", "spankz", "choir", "SpankzChoir.com", "sell")) {
                answer.clearOptions();

                sendDungeonMessage(random("Well my favorite activity!", "Sounds nice!", "Well well...", "Uhh oh my oh my..."));

                //(SpankzChoir)
                sendDungeonMessage(random("Give me just a moment", "2 seconds %SlaveName%", "Just a moment %SlaveName%", "Let me just check my computer.."), 2);
                sendDungeonMessage("Take a seat and enjoy the posters on the wall..");
                showImage("Images/Spicy/Punishment/SpankzChoir/chair1.jpg");


                showImage("Images/Spicy/Punishment/Posters/*.*", randomInteger(2, 6));

                for (let x = 0; x < randomInteger(1, 5); x++) {
                    showImage("Images/Spicy/Punishment/Posters/*.*", randomInteger(2, 6));
                }

                sendDungeonMessage(random("Okay then", "Let's proceed", "Let's move forward", "Let's continue"));
                playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
                run("Dungeon/SpankzChoir/SpankzChoirBase.js");
            } else if (answer.containsIgnoreCase("report", "reporting", "punish", "punished", "punishment")) {
                answer.clearOptions();

                delVar("Punishment");
                sendDungeonMessage(random("Oh my", "Oh how nice", "Lovely!", "Splendid!", "Exciting!", "Fantastic", "%Grin%", "Perfect..", "Good", "So you want to be punished."));
                sendDungeonMessage(random("Let me just look up your file...", "Checking your file", "Having a look at your file...", "Let me just check your file..."), 2);
                sendDungeonMessage("Take a seat...");

                showImage("Images/Spicy/Punishment/SpankzChoir/chair1.jpg", 3);

                /*showImage("Images/Spicy/Punishment/Posters/!*.*", randomInteger(2, 6));

                for (let x = 0; x < randomInteger(1, 5); x++) {
                    showImage("Images/Spicy/Punishment/Posters/!*.*", randomInteger(2, 6));
                }*/

                sendDungeonMessage(random("Okay then", "Let's proceed", "Let's move forward", "Let's continue"));
                playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");

                if (getVar(VARIABLE.PUNISHMENT_POINTS) < 100) {
                    sendDungeonMessage("Well %SlaveName% it seems you haven't been too bad recently...", 2);
                    sendDungeonMessage("So I'm afraid I have to reject you...", 2);
                } else {
                    sendDungeonMessage("Let's see if there is any specific reasons to why you've been given punishment points this week...");

                    let reasons = tryGetArrayList(VARIABLE.PUNISHMENT_REASONS);

                    if (!reasons.isEmpty()) {
                        if (reasons.contains(PUNISHMENT_REASON.SKIPPING_PUNISHMENT_DAY)) {
                            sendDungeonMessage("Skipping punishment day... Naughty %Slave%, are you too scared to come down here and face justice?", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.NO_PERM_FAP)) {
                            sendDungeonMessage("Stroking without explicit permission", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.SKIPPING_FULLTIME)) {
                            sendDungeonMessage("Skipping your weekly visits", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.NO_PERM_RUINED)) {
                            sendDungeonMessage("Ruining without permission", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.CHEATING)) {
                            sendDungeonMessage("Cheating and trying to trick %DomHonorific% %DomName%...", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.SKIPPING_CONFESSION_DAY)) {
                            sendDungeonMessage("Skipping confession day... Naughty %Slave%", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.SKIPPING_SPANKZCHOIR_LATE)) {
                            sendDungeonMessage("Not delivering your %Ass% to the mistress that bought it via spankzchoir in time", 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.TOO_MANY_POINTS)) {
                            sendDungeonMessage(random("Failure to complete punishments on time", "Not putting sufficient effort to reduce punishment points", "not submitting to required punishments", "Not suffering %DomHonorific% %DomName%'s proscribed punishments"), 2);
                        }

                        /*if (isVar("Preason_not_worshiping") && getVar("Preason_not_worshiping")) {
                            sendDungeonMessage(random("Failure to respect %DomHonorific% %DomName%", "being Disrespectful towards %DomHonorific% %DomName%", "Not appropriately worshipping your Goddess %DomName%"), 2);
                        }*/

                        if (reasons.contains(PUNISHMENT_REASON.TOO_LAZY)) {
                            sendDungeonMessage(random("Being too lazy", "Lazy behaviour", "Laziness...", "Careless behaviour", "Carelessness"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.RULE_IGNORED)) {
                            sendDungeonMessage(random("Breaking a rule", "Ignoring one of %DomHonorific% %DomName%'s rules", "Forgetting a rule"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.TOO_SLOW)) {
                            sendDungeonMessage(random("being too slow to respond to %DomHonorific% %DomName%'s commands ", "Not jumping to complete %DomHonorific% %DomName%'s commands", "disappointing %DomHonorific% %DomName% by not responding to commands in a timely way"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.BAD_EXERCISE_EFFORT)) {
                            sendDungeonMessage(random("Failure to complete your exercises properly", "Not putting sufficient effort while exercising", "Being lazy while working out", "Not meeting %DomHonorific% %DomName%'s exercise standard"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.MISSED_CHORES)) {
                            sendDungeonMessage(random("Failure to complete chores in a timely manner", "Unfinished chores", "Failure to do chores", "Poor attitudes regarding chores", "Failed to complete chores.."), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.NO_PERM_CUM)) {
                            sendDungeonMessage(random("Unauthorized ejaculation", "Cumming without permission"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.NO_PERM_EDGE)) {
                            sendDungeonMessage(random("Unauthorized edging", 'Edging without permission', "Edging against %DomHonorific% %DomName%'s wishes", "Being unable to resist edging your %Cock%"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.TALKING)) {
                            sendDungeonMessage(random("Filthy mouth", "Talking back", "Bad mouthing", "Undesired talking", "Failed to request permission to talk", "Talking out of terms.."), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.POOR_BEHAVIOUR)) {
                            sendDungeonMessage(random("Not living up to %DomHonorific% %DomName%'s standards", "Not living up to %DomHonorific% %DomName%'s expectations"), 2);
                        }

                        if (reasons.contains(PUNISHMENT_REASON.BREAKING_CHASTITY)) {
                            sendDungeonMessage(random("Removing chastity without explicit permission"), 2);
                        }

                        if (isVar("Preason_BadFullTime") && getVar("Preason_BadFullTime")) {
                            sendDungeonMessage(random("Failed to fulfill full time duties", "Laziness", "Failure to meet demands for proper slavery"), 2);
                        }
                    } else {
                        sendDungeonMessage(random("Poor attitude", "Poor performance", "Lack of performance", "Failed to perform properly", "Poor results"), 2);
                    }

                    sendDungeonMessage(random("Oh my it's good you came", "Let's correct this immediately", "Time to improve your behavior"), 3);
                    sendDungeonMessage("First let's see who will be handling your punishment..", 3);

                    /*if (isVar("Glitter1Bought")) {
                        setVar(VARIABLE.PUNISHMENT_PUNISHER, randomInteger(1, 2));
                    }
                    if (isVar("Glitter2Bought")) {
                        setVar(VARIABLE.PUNISHMENT_PUNISHER, randomInteger(1, 3));
                    }
                    if (isVar("Glitter3Bought")) {
                        setVar(VARIABLE.PUNISHMENT_PUNISHER, randomInteger(1, 4));
                    }*/

                    if (!isVar(VARIABLE.PUNISHMENT_PUNISHER)) {
                        setVar(VARIABLE.PUNISHMENT_PUNISHER, randomInteger(1, 4));
                    }

                    switch (getVar(VARIABLE.PUNISHMENT_PUNISHER)) {
                        case 1:
                            sendDungeonMessage("Well it will be your %DomHonorific% handling your punishment...", 3);
                            break;
                        case 2:
                            sendDungeonMessage("Well it will be %DomHonorific% %domFriend1Name% handling your punishment...", 3);
                            break;
                        case 3:
                            sendDungeonMessage("Well it will be %DomHonorific% %domFriend2Name% handling your punishment...", 3);
                            break;
                        case 4:
                            sendDungeonMessage("Well it will be %DomHonorific% %domFriend3Name% handling your punishment...", 3);
                            break;
                    }

                    sendDungeonMessage("You can request a soft, medium, hard, or extreme punishment");

                    if (getVar(VARIABLE.PUNISHMENT_POINTS) >= 350) {
                        sendDungeonMessage("I do recommend a hard one but it's your choice");
                    } else if (getVar(VARIABLE.PUNISHMENT_POINTS) >= 200) {
                        sendDungeonMessage("I do recommend a medium one but it's your choice");
                    } else {
                        sendDungeonMessage("I recommend a soft punishment");
                    }

                    let answer2 = createInput(20, "Soft", "Medium", "Hard", "Extreme");

                    let punishSeverity = PUNISHMENT_LEVEL.EASY;

                    while (true) {
                        if (answer2.containsIgnoreCase("soft")) {
                            sendDungeonMessage("Setting it up...");
                            punishSeverity = PUNISHMENT_LEVEL.EASY;
                            break;
                        } else if (answer2.containsIgnoreCase("medium")) {
                            sendDungeonMessage("Setting it up...");
                            punishSeverity = PUNISHMENT_LEVEL.MEDIUM;
                            break;
                        } else if (answer2.containsIgnoreCase("hard")) {
                            sendDungeonMessage("Setting it up... Hope you can handle this");
                            punishSeverity = PUNISHMENT_LEVEL.HARD;
                            break;
                        } else if (answer2.containsIgnoreCase("Extreme")) {
                            sendDungeonMessage("%Grin% a glutton for punishment... Setting it up...");
                            punishSeverity = PUNISHMENT_LEVEL.EXTREME;
                            break;
                        } else if (answer2.isTimeout()) {
                            sendDungeonMessage("Stunned in fear huh?");

                            if (getVar(VARIABLE.PUNISHMENT_POINTS) >= (400 - randomInteger(1, 100))) {
                                sendDungeonMessage("I'm going to strap you down for a hard one...");
                                punishSeverity = PUNISHMENT_LEVEL.HARD;
                            } else if (getVar(VARIABLE.PUNISHMENT_POINTS) >= (250 - randomInteger(1, 100))) {
                                sendDungeonMessage("I guess we'll go for a medium one then");
                                punishSeverity = PUNISHMENT_LEVEL.MEDIUM;
                            } else {
                                sendDungeonMessage("I'll take it easy on you this time");
                                punishSeverity = PUNISHMENT_LEVEL.EASY;
                            }

                            break;
                        } else {
                            sendDungeonMessage("%SlaveName%, are you illiterate? Soft, medium, hard, or extreme?", 0, false);
                            answer2.loop();
                        }
                    }

                    answer2.clearOptions();

                    //Introduction
                    if (!isVar(VARIABLE.PUNISHMENTS_DONE) && new Date().getDay() === 5) {
                        setVar(VARIABLE.PUNISHMENTS_DONE, 0);
                    }

                    let mode = 0;

                    if (new Date().getDay() === 5 || new Date().getDay() === 1) {
                        if (new Date().getDay() === 5) {
                            sendDungeonMessage('It\'s Friday %SlaveName% %EmoteHappy%');
                        } else {
                            sendDungeonMessage('It\'s Monday %SlaveName% %EmoteHappy%');
                        }

                        if (canRequestsPunishmentTasks()) {
                            if (getVar(VARIABLE.PUNISHMENT_POINTS) >= MIN_PUNISHMENT_POINTS_FOR_TASK) {
                                sendDungeonMessage('So what will it be today? Redeeming Tasks or a session?', 0, false);
                                answer2 = createInput("Session", 'Tasks');
                                while (true) {
                                    if (answer2.containsIgnoreCase("session", 'punishment')) {
                                        mode = 0;
                                        break;
                                    } else if (answer2.containsIgnoreCase("tasks", 'redeem')) {
                                        mode = 1;
                                        break;
                                    } else {
                                        sendDungeonMessage("%SlaveName%, are you illiterate? A punishment session or tasks?", 0, false);
                                        answer2.loop();
                                    }
                                }

                                answer2.clearOptions();
                            } else {
                                sendDungeonMessage('Since you have less than ' + MIN_PUNISHMENT_POINTS_FOR_TASK + ' punishment points you can only go for a punishment session though')
                            }
                        } else {
                            sendDungeonMessage('Sadly your %DomHonorific% has told me that you aren\'t ready for redeeming tasks yet so you won\'t have that option today %SlaveName%')
                        }
                    }

                    if (mode === 0) {
                        setVar(VARIABLE.PUNISHMENT_ACTIVE, true);
                        startPunishmentSession(punishSeverity);
                    } else if (mode === 1) {
                        sendDungeonMessage('Right now you have ' + getVar(VARIABLE.PUNISHMENT_POINTS) + ' punishment points');
                        sendDungeonMessage('How many points would you like to redeem %SlaveName%?', 0, false);
                        answer2 = createInput();

                        let points = 0;

                        while (true) {
                            if (answer2.isInt()) {
                                points = answer2.getInteger();

                                points = Math.min(points, getVar(VARIABLE.PUNISHMENT_POINTS));

                                if (points < MIN_PUNISHMENT_POINTS_FOR_TASK) {
                                    sendDungeonMessage('You need to redeem at least ' + MIN_PUNISHMENT_POINTS_FOR_TASK + ' points %SlaveName%', 0, false);
                                    answer.loop();
                                } else {
                                    sendDungeonMessage('Fine...');
                                    sendDungeonMessage(points + ' punishment points it will be');
                                    break;
                                }
                            } else {
                                sendDungeonMessage("That's not a valid number like 100, 250 etc...", 0, false);
                                answer2.loop();
                            }
                        }

                        handlePunishmentTaskCreation(points, punishSeverity);

                        //Break because we want to kick the user to the main menu
                        break;
                    }
                }
            } else if (answer.isLike("return", "exit", "back")) {
                break;
            } else {
                sendDungeonMessage("Spankz choir, punishment, pay fine or return?", 0, false);
                answer.loop();
            }
        }
    }
}

function handleFailedPunishment() {
    let convNumber = 0;
    sendNurseMessage(random("You failed your punishment", "You didn't complete your punishment", "You didn't go through with your punishment") + " %SlaveName%");

    let noAnswer = true;
    sendNurseMessage(random("Was it really too hard to complete?", "Was it that hard to complete?"));
    let answer = createInput(15);

    while (true) {
        if (answer.isTimeout()) {
            sendNurseMessage(random("You make me sad when you don't communicate with me", "It saddens me when you don't communicate") + " " + "%SlaveName%");
            sendNurseMessage(random("Remember that I'm here to take care of your well being", "Remember I'm here to look after you"));
            convNumber = 10;
            break;
        }

        if (answer.containsIgnoreCase("yes", "yeah")) {
            sendNurseMessage(random("I see", "Well...", "Hmm..."));
            convNumber = 3;
            noAnswer = false;
            break;
        } else if (answer.containsIgnoreCase("no", "nope")) {
            sendNurseMessage(random("Oh", "Hmm...", "Oh", " Hmm..."));
            noAnswer = false;
            break;

        } else {
            sendNurseMessage("Yes or no %SlaveName%", 0, false);
            answer.loop();
        }
    }

    if (convNumber === 0) {
        let answer = sendInput(random("Try to tell me why you didn't complete it", "Why couldn't you handle it?"), 20);

        while (true) {
            if (answer.containsIgnoreCase("i couldn't handle it", "handle", "couldn't", "could not")) {
                sendNurseMessage(random("Aww sugar", "Aww Honey", "Aww dear") + " :/");
                convNumber = 3;
                break;
            } else if (answer.containsIgnoreCase("pain", "painfull", "painful", "too much", "agony")) {
                sendNurseMessage(random("Aww sugar", "Aww Honey", "Aww dear"));
                convNumber = 3;
                break;
            }  else if (answer.containsIgnoreCase("too many mistakes", 'bad day', 'slacking', 'less effort', 'bad result')) {
                sendNurseMessage(random("Aww sugar", "Aww Honey", "Aww dear"));
                convNumber = 4;
                break;
            } else if (answer.containsIgnoreCase("boring", "Bored")) {
                sendNurseMessage(random("It was boring?...", "Boring huh?", "Boring you say?"));
                convNumber = 1;
                break;
            } else if (answer.containsIgnoreCase("didn't want to", "did not want to", "no fun")) {
                sendNurseMessage(random("Hmm...", "Well..."));
                convNumber = 2;
                break;
            } else if (answer.containsIgnoreCase("bug", "error")) {
                sendNurseMessage(random("A bug huh?", "Oh my an error?"));
                convNumber = 9;	//bug
                break;
            } else if (answer.containsIgnoreCase("i did", "i did complete it", "i did complete", "i made it")) {
                sendNurseMessage(random("You did?!", "Oh my you did!?"));
                sendNurseMessage('I hope you are not lying to me!');
                convNumber = 9; //Bug
                break;
            } else {
                sendNurseMessage("I'm sorry but your response doesn't make sense");
                sendNurseMessage("I urge that you tell GodDragon on Milovana why you didn't complete your punishment");
                sendNurseMessage("I know he would appreciate it...");
                sendNurseMessage("Thank you!");
                convNumber = 10;
                break;
            }
        }
    }

    switch (convNumber) {
        case 1:
            sendNurseMessage("%SlaveName% " + random("I think you and I need to have a little talk", "We need to talk", "We gotta talk", "We need to have a little chat"));
            sendNurseMessage("Because not completing a punishment because it was boring isn't a proper reason");
            sendNurseMessage(random("You need to remember that it was you that came here", "You need to remember that you signed up for this", "It was you who signed up for this..."));
            sendNurseMessage(random("It was you who requested and signed up to become a slave", "You.. Wanted.. This...", "don't forget!"));
            sendNurseMessage(random("I think you should think carefully about what this means", "I believe you need to think carefully", "You have to think carefully..."));
            sendNurseMessage(random("Because maybe slavery isn't for you?", "Perhaps serving isn't for you?"));
            /*sendNurseMessage("Now I'm shutting down Tease-AI");
            sendNurseMessage("I don't want to see you back for the next 24 hours..");
            sendNurseMessage("While you're offline I suggest that you think carefully about this");
            sendNurseMessage("Bye %SlaveName%");
            sendNurseMessage("I hope to see you again :)");*/
            break;
        case 2 :
            sendNurseMessage("%SlaveName% " + random("I think you and I need to have a little talk", "We need to talk", "We gotta talk", "We need to have a little chat"));
            sendNurseMessage("Because not completing a punishment because you didn't want to isn't a proper reason..");
            sendNurseMessage(random("You need to remember that it was you that came here", "You need to remember that you signed up for this", "It was you who signed up for this..."));
            sendNurseMessage(random("It was you who requested and signed up to become a slave", "You.. Wanted.. This...", "don't forget!"));
            sendNurseMessage("Being a slave sometimes involves punishment for poor behaviour..");
            sendNurseMessage("Now remember that punishment unlike play isn't designed to be 'fun'");
            sendNurseMessage("It's punishment");
            sendNurseMessage(random("I think you should think carefully about what this means", "I believe you need to think carefully", "You have to think carefully..."));
            sendNurseMessage(random("Because maybe slavery isn't for you?", "Perhaps serving isn't for you?"));
            /*sendNurseMessage("Now I'm shutting down Tease-AI");
            sendNurseMessage("I don't want to see you back for the next 24 hours...");
            sendNurseMessage("While you're offline I suggest that you think carefully about this");
            sendNurseMessage("Bye %SlaveName%");
            sendNurseMessage("I hope to see you again :)");*/
            break;
        case 3 :
            sendNurseMessage(random("Sorry to hear you couldn't handle it", "I'm sorry to hear it was too much for you"));
            sendNurseMessage(random("Perhaps you asked for a little too much", "Maybe you asked for too much?"));
            sendNurseMessage(random("If not, then remember...", "But if not, remember", "Well if not, remember..."));
            sendNurseMessage("The settings let you change a lot of different things *smiles*");

            if (getVar(VARIABLE.SUB_PAIN_TOLERANCE) > 1) {
                incrementVar(VARIABLE.SUB_PAIN_TOLERANCE, -1);
            }

            sendNurseMessage("I just lowered your values a little");
            sendNurseMessage("That might make it a little easier next time sweety");
            break;
        case 4:
            //Failed
            sendNurseMessage(random("Sorry to hear you weren\'t able to keep up with what was asked from you", "I'm sorry to hear it was too challenging for you"));
            sendNurseMessage('Everyone has a bad day sometimes');
            sendNurseMessage(random("However you should always bring your best to the table", "However you should never be slacking"));
            sendNurseMessage(random("Try better next time", "Just try to not disappoint your %DomHonorific% next time", "Try to stay at your all time high all the time"));
            sendNurseMessage("If you are just failing since you had a bad day there is sadly nothing more I can do for you right now *sad*");
            break;
        case 9 :
            // bug
            sendNurseMessage("It seems a bug has occurred...");
            sendNurseMessage("I command you to report to GodDragon on Milovana.com that a bug occurred with a punishment");
            sendNurseMessage("Explain your bug in detail!");
            sendNurseMessage("Report this code along with a bug report:");
            rewardGoldMedium();
            sendNurseMessage("You have just been sent gold for finding a bug");
            sendNurseMessage("This bug has not affected anything important");
            sendNurseMessage("sending you back to your slave hub...");
            break;
    }
}


