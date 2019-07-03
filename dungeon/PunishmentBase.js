if (!isVar("PunishmentBaseIntro")) {
    setVar("PunishmentBaseIntro", true);
    setVar("PunishmentActive", false);

    sendDungeonMessage(random("Hello", "Welcome", "Hi", "Greetings", "Good to see you") + random("%SlaveName%", "slave", "slave", "slave", "slave", "slave"));
    sendDungeonMessage("I go by 'Miss A'");
    sendDungeonMessage("It is my job to punish you whenever you report for punishment");
    sendDungeonMessage("The domme rarely has time to do so");
    sendDungeonMessage("So if you misbehave in sessions or similar you will often simply be awarded punishment points");
    sendDungeonMessage("These points accumulate over time");
    sendDungeonMessage("don't let them grow too much");
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
    sendDungeonMessage("Now...");
}

if (getVar("PunishmentActive")) {
    setVar("PunishmentActive", false);

    //(PunishmentActive)

    sendDungeonMessage("It seems you didn't complete your last punishment...", 0);
    answer = sendInput("Was this due to a bug or because you couldn't handle it?", 10); //@TimeOut(10)
    while (true) {
        if (answer.isTimeout()) {
            sendDungeonMessage("Your lack of response leads to believe you just couldn't handle it...");
            changeMeritLow(true);
            sendDungeonMessage("I know your %DomHonorific% is disappointed...");
            sendDungeonMessage("Remember to only choose punishments you can handle...");
            break;
        } else if (answer.containsIgnoreCase("bug")) {
            sendDungeonMessage("I hope you reported this to GodDragon on the Milovana thread then!", 0);
            changeMeritLow(true);
            break;
        } else if (answer.containsIgnoreCase("couldn't handle", "couldn't", "could not", "handle")) {
            sendDungeonMessage("I'm disappointed...", 0);
            changeMeritLow(true);
            sendDungeonMessage("I know your %DomHonorific% is disappointed...", 0);
            sendDungeonMessage("Remember to only choose punishments you can handle...", 0);
            break;
        } else {
            sendDungeonMessage("Bug or couldn't handle it?", 5);
            answer.loop();
        }
    }
}

/*@Goto(SecondTimePunishment)
(PunishmentBaseIntro)
@CheckFlag(SecondTimePunishment)
@CheckFlag(PunishmentActive)
@CheckFlag(Punishment) @info(set in Interrupt\GNMBackgroundBase.txt)
(SecondTimePunishment)*/

if (isVar("Punishment")) {
    delVar("Punishment");
}

sendDungeonMessage("Yes %SlaveName%?");
let answer = createInput();

while(true) {
    if (answer.containsIgnoreCase("how many", "point")) {
        sendDungeonMessage(random("Hmm, give me just a moment to check your records", "Give me 2 seconds %SlaveName%", "Just a moment %SubName%", "Let me just check my computer..."), 2);

        const punishmentPoints = getVar(VARIABLE_PUNISHMENT_POINTS);

        sendDungeonMessage(random("It looks like", "According to my records", "It says") + " you have " + punishmentPoints + " punishment points.", 2);

        if (punishmentPoints < 15) {
            addPunishmentPoints(randomInteger(25, 75));
            sendDungeonMessage(random("Hey, while I have this file open let me add a few more", "Well that's what you did have before I made a little addition", "That seems too low, let me add some"), 1, 20);
            sendDungeonMessage(random("You're welcome %SubName%", "%SlaveName%, you're welcome", "Aren't you lucky I'm watching out for you?"));
        } else if (punishmentPoints > 750) {
            sendDungeonMessage(random("Lol %SubName%, you're so fucked!", "Oh %SlaveName%, you're ass is gonna bleed", "You should be ashamed, %SlaveName%", "how did you let it get so bad?"));
        } else if (punishmentPoints > 500) {
            sendDungeonMessage(random("this is SERIOUS %Slave%, you need to put some time in down here", "NOT GOOD, you need to put some serious time in down here", "I have a feeling we're going to be spending lots of time together %GNMGrin%", "that's so many your %DomHonorific% won't even session with you"));
        } else if (punishmentPoints > 250) {
            sendDungeonMessage(random("we have some work to do down here", "I'll let the mistresses know they should plan to spend some time in the dungeon"));
        } else {
            sendDungeonMessage(random("That's not too bad", "Only a little adjustment will be needed"));
        }
    } else if (answer.containsIgnoreCase("spankzchoir", "spankz", "choir", "sell")) {
        sendDungeonMessage(random("Well my favorite activity!", "Sounds nice!", "Well well...", "Uhh oh my oh my..."));

        //(SpankzChoir)
        sendDungeonMessage(random("Give me just a moment", "2 seconds %SlaveName%", "Just a moment %SlaveName%", "Let me just check my computer..."), 2);
        sendDungeonMessage("Take a seat and enjoy the posters on the wall...");

        startPosterWaiting();

        run("Punishment/SpankzChoir/SpankzChoirBase.js");
    } else if (answer.containsIgnoreCase("report", "reporting", "punish", "punished", "punishment")) {
        //Delete any old variable that might still be in place
        delVar("Punishment");

        sendDungeonMessage(random("Oh my", "Oh how nice", "Lovely!", "Splendid!", "Exciting!", "Fantastic", "%GNMGrin%", "perfect...", "Good", "So you want to be punished."));
        sendDungeonMessage(random("Let me just look up your file...", "Checking your file", "Having a look at your file...", "Let me just check your file..."), 2);
        sendDungeonMessage("Take a seat...");

        startPosterWaiting();

        if (getVar(VARIABLE_PUNISHMENT_POINTS) < 100) {
            sendDungeonMessage("Well %SlaveName% it seems you haven't been too bad recently...", 2);
            sendDungeonMessage("So I'm afraid I have to reject you...", 2);
            break;
        } else {
            sendDungeonMessage("Lets see if there is any specific reasons to why you've been given punishment points this week...");
            setVar("PunishmentActive", true);

            let hasReason = false;

            //TODO: Replace by ids

            if (isVar("PReason_skipping_punishment")) {
                hasReason = true;
                sendDungeonMessage("Skipping punishment day... Naughty %Slave%, are you too scared to come down here and face justice?", 2);
            }

            if (isVar("PReason_skipping_confession")) {
                hasReason = true;
                sendDungeonMessage("Skipping confession day... Naughty %Slave%", 2);
            }

            if (isVar("PReason_too_many_points")) {
                hasReason = true;
                sendDungeonMessage(random("Failure to reduce punishment points on time", "Not putting sufficient effort into reducing punishment points", "Accumulating too many punishment points", "Not reducing %DomHonorific% %DomName%'s assigned punishment points on time"), 2);
            }

            if (isVar("Preason_not_degrading")) {
                hasReason = true;
                sendDungeonMessage(random("Failure to follow %DomHonorific% %DomName%'s instructions", "Not following instructions", "Being disobedient...", "Disobeying %DomHonorific% %DomName%'s commands"), 2);
            }

            if (isVar("Preason_not_worshiping")) {
                hasReason = true;
                sendDungeonMessage(random("Not respecting %DomHonorific% %DomName%", "Disrespecting %DomHonorific% %DomName%", "Being disrespectful towards %DomHonorific% %DomName%", "Not appropriately worshiping your %DomHonorific% %DomName%"), 2);
            }

            if (isVar("Preason_too_slow")) {
                hasReason = true;
                sendDungeonMessage(random("Too slow while completing %DomHonorific% %DomName%'s instructions", "Not completing %DomHonorific% %DomName%'s commands on time", "Not fast enough to follow %DomHonorific% %DomName%'s commands", "Disappointing %DomHonorific% %DomName% by being too slow"), 2);
            }

            if (isVar("BadExerciseEffort")) {
                hasReason = true;
                sendDungeonMessage(random("Failure to complete your exercises properly", "Not being eager enough while exercising", "Being lazy while working out", "Not meeting %DomHonorific% %DomName%'s exercise standards"), 2);
            }

            if (isVar("BadChores")) {
                hasReason = true;
                sendDungeonMessage(random("Failure to complete chores in a timely manner", "Unfinished chores", "Failed to do chores", "Poor attitude regarding chores", "Failed to complete chores..."), 2);
            }

            //TODO: Split Ruin and Cum
            if (isVar("BadCum")) {
                hasReason = true;
                sendDungeonMessage(random("Unauthorized ejaculation", "Cumming without permission"), 2);
            }

            if (isVar("BadEdging")) {
                hasReason = true;
                sendDungeonMessage(random("Unauthorized edging", "Edging against %DomHonorific% %DomName%'s wishes", "Edging without permission", "Being unable to stay away from the edge"), 2);
            }

            //TODO: Split Insults / talking without permission
            if (isVar("BadMouth")) {
                hasReason = true;
                sendDungeonMessage(random("Talking without permission", "Failed to request permission to talk"), 2);
            }

            if (isVar("BadFullTime")) {
                hasReason = true;
                sendDungeonMessage(random("Failed to fulfill full time duties", "Laziness", "Failure to meet the expectations of your %DomHonorific%", "Failing at being a proper slave"), 2);
            }

            if (!hasReason) {
                sendDungeonMessage(random("Poor attitude", "Poor performance", "Lack of performance", "Failed to perform properly", "Poor results"), 2);
            }

            sendDungeonMessage(random("Oh my... It's good you are reporting for punishment", "Lets correct this immediately", "Time to improve your behavior"), 3);
            sendDungeonMessage("First lets see who will be handling your punishment...", 3);

            setVar("Punisher", 1);
            if (isVar("Glitter1Bought")) {
                setVar("Punisher", randomInteger(1, 2));
            }
            if (isVar("Glitter2Bought")) {
                setVar("Punisher", randomInteger(1, 3));
            }
            if (isVar("Glitter3Bought")) {
                setVar("Punisher", randomInteger(1, 4));
            }

            switch (getVar("Punisher")) {
                //TODO: Replace DomHonorific for friends with corresponding honorific
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
            if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 350) {
                sendDungeonMessage("I recommend a hard one but its your choice");
            } else if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 200) {
                sendDungeonMessage("I recommend a medium one but its your choice");
            } else {
                sendDungeonMessage("I recommend a soft punishment");
            }

            answer = createInput("", 10);

            let punishSeverity = 0;

            while (true) {
                if (answer.containsIgnoreCase("soft")) {
                    sendDungeonMessage("Setting it up...");
                    punishSeverity = 1;
                    break;
                } else if (answer.containsIgnoreCase("medium")) {
                    sendDungeonMessage("Setting it up...");
                    punishSeverity = 2;
                    break;
                } else if (answer.containsIgnoreCase("hard")) {
                    sendDungeonMessage("Setting it up... hope you can handle this");
                    punishSeverity = 3;
                    break;
                } else if (answer.containsIgnoreCase("Extreme")) {
                    sendDungeonMessage("%smile% A glutton for punishment...Setting it up...");
                    punishSeverity = 4;
                    break;
                } else if (answer.isTimeout()) {
                    sendDungeonMessage("Stunned in fear huh?");
                    if (getVar(VARIABLE_PUNISHMENT_POINTS) >= (400 - randomInteger(1, 100))) {
                        sendDungeonMessage("I'm going to strap you down for a hard one.");
                        punishSeverity = 3;
                    } else if (getVar(VARIABLE_PUNISHMENT_POINTS) >= (250 - randomInteger(1, 100))) {
                        sendDungeonMessage("I guess we'll go for a medium one then");
                        punishSeverity = 2;
                    } else {
                        sendDungeonMessage("I'll take it easy on you this time");
                        punishSeverity = 1;
                    }

                    break;
                } else {
                    sendDungeonMessage("%SlaveName%, are you illiterate? Soft, medium, hard, or extreme?");
                    answer.loop();
                }
            }

            switch (punishSeverity) {
                //TODO: Finish other punishments and then change the random integer range
                case 1:
                    run("Dungeon/Punishments/S" + randomInteger(6, 6) + ".js");
                    break;
                case 2:
                    run("Dungeon/Punishments/M" + randomInteger(2, 2) + ".js");
                    break;
                case 3:
                    run("Dungeon/Punishments/H" + randomInteger(7, 7) + ".js");

                    break;
                case 4:
                    //TODO: Dynamic punishments?
                    const punishmentId = randomInteger(1, 5);

                    if ((punishmentId == 5) && (getVar("toyEnemaKit") == true)) {
                        run("Dungeon/Punishments/B1.js");
                    } else {
                        run("Dungeon/Punishments/E" + Math.min(punishmentId, 4) + ".js");
                    }

                    break;

            }

        }

        break;
    } else if (answer.containsIgnoreCase("pay", "fine", "gold")) {
        sendDungeonMessage(random("Here to reduce your sentence huh...", "Well you want to pay your fines", "You wish to pay for your sins..."));
        //@Goto(Fines)

        //(Fines)
        sendDungeonMessage("You can reduce your punishment points in the shop");
        sendDungeonMessage("Check out the shop and select 'atonement'");
//		@Goto(PunishmentBaseIntro)
        //(TryAgain1)
        /* @SetVar[FineReduction2]=[0]
        sendDungeonMessage("How many of these do you wish to pay for?"); @InputVar[FineReduction]
         @If[FineReduction]=[0]Then(None) @SetVar[FineReduction2]=[FineReduction]
         @If[FineReduction]>[GNMPPoints]Then(NoSense)
         @If[FineReduction]>[0]Then(CheckGold)
        sendDungeonMessage("Your input doesn't make any sense.. @Goto(TryAgain1)
        (NoSense)
        sendDungeonMessage("You didn't choose a number that makes sense..."); #MeritChangeNLow @Goto(PunishmentBaseIntro)
        (None)
        sendDungeonMessage("Okay.. 0? Seriously?! Don't waste my time"); #MeritChangeNLow @Goto(PunishmentBaseIntro)
        (CheckGold)
        sendDungeonMessage("Checking if you have enough gold...");
         @If[FineReduction2]>[GNMGold]Then(NoGold)
        sendDungeonMessage("Well everything checks out..."); @ChangeVar[GNMGold]=[GNMGold]-[FineReduction2]
        @SystemMessage Gold transfered"); @ChangeVar[GNMPPoints]=[GNMPPoints]-[FineReduction]
        @SystemMessage #Var[FineReduction] points reduced from your total punishment points"); @Goto(PunishmentBaseIntro)
        (NoGold)
        sendDungeonMessage("You don't have enough gold #SlaveName"); @ChangeVar[GNMMerits]=[GNMMerits]-[10] @Goto(PunishmentBaseIntro)
        */
        break;
    } else if (answer.containsIgnoreCase("return", "exit", "back")) {
//TODO: Return
        break;
    } else {  //@DifferentAnswer
        sendDungeonMessage("Spankz choir, punishment, pay fine or return?");
        answer.loop();
    }
}


/*creating a function to invoke special characters/imagesets
by calling below with a different person number, you get a different sender prefix and image displayed automatically
0 no image
1 receptionchat (punishment)
2 ReceptionbusyPC (punishment)
3 Receptionbusyphone (punishment)
4 dirty
*/

function sendDungeonMessage(message, person, wait) {
    textName = new javafx.scene.text.Text("[Miss A]:");
    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    switch (person) {
        case 0:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
        case 1:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
        case 2:
            showImage("Images/Spicy/Punishment/Reception/BusyPC/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
        case 3:
            showImage("Images/Spicy/Punishment/Reception/BusyPhone/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
        case 4:
            showImage("Images/Spicy/Punishment/Reception/Dirty/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
        default:
            showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1) + "/*.jpg");
            break;
    }


    if (wait === undefined || wait) {
        sleep(.5 + message.length * .03);
    }
}

function startPosterWaiting() {
    //TODO: Images do not exist?
    showImage("Images/Spicy/Punishment/SpankzChoir/chair1.jpg");
    //(PosterBreak1)
    showImage("Images/Spicy/Punishment/Posters/*.*", randomInteger(2, 6));

    let chancenum = 0;
    while (chancenum < 70) {
        showImage("Images/Spicy/Punishment/Posters/*.*", randomInteger(2, 6));
        chancenum = randomInteger(1, 100);
    }

    sendDungeonMessage(random("Okay then", "Lets proceed", "Lets move forward", "Lets continue"));
    playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3");
}

