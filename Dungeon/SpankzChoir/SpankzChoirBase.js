//n@NullResponse @CheckFlag(FirstSpankChoir) setVar(FirstSpankChoir)


if (!isVar("SpankzChoirBaseIntro")) {
    setVar("SpankzChoirBaseIntro", true);

    sendDungeonMessage(" So let me tell you a little bit about the website SpankzChoir.com ");
    sendDungeonMessage(" You'd be surprised about the amount of women that actually want to pay money to dish out a spanking ");
    sendDungeonMessage(" Well SpankzChoir actually makes it possible ");
    //(NotUnderstood)
    while (true) {

        sendDungeonMessage(" It's rather simple ");
        sendDungeonMessage(" You put your ass out for auction and then you check back 48 hours later ");
        sendDungeonMessage(" By then there should be a buyer ");
        sendDungeonMessage(" Now be aware that if you do not accept the spanking won within 48 hours bidding is closed ");
        sendDungeonMessage(" You will be fined for the full amount and still owe a spanking ");
        sendDungeonMessage(" So to sum up, when you've placed your ass for auction make sure to check back 48 hours later ");
        sendDungeonMessage(" But sooner than 96 hours to accept the top bidder ");
        answer = sendInput(" Understood? ", 15);

        if (answer.isLike("yes", "yeah", "yup", "ya")) {
            sendDungeonMessage("  %Good% ");
            break;
        } else if (answer.isLike("no", "nope", "na", "sorry")) {
            sendDungeonMessage(" Oh my.. ");
            changeMeritLow(true);

        } else if (answer.isTimeout()) {
            sendDungeonMessage(" I'm gonna take that as a no.. ");
            changeMeritLow(true);

        } else sendDungeonMessage(" Yes or no? ");
    }

    sendDungeonMessage(" Now there are a few things to be aware of ");
    sendDungeonMessage(" You sell by the strokes, minimum sell is 100 strokes ");
    sendDungeonMessage(" Maximum is 1200 ");
    sendDungeonMessage(" Notice that it is 100 strokes per ass cheek so in reality minimum is 200 and max is 2400 ");
    sendDungeonMessage(" The more strokes you sell the higher price you receive for each strokes ");
    sendDungeonMessage(" To clarify ");
    sendDungeonMessage(" 200 strokes has the value of 20 gold so 1 gold per 10 strokes ");
    sendDungeonMessage(" This proceeds until 400 strokes ");
    sendDungeonMessage(" Each stroke sold after 400 strokes has the value of 2 gold per 3 strokes ");
    sendDungeonMessage(" This is again increased at 600, 800 and 1000. ");
    sendDungeonMessage(" More importantly SpankzChoir.com uses something called the lottery effect ");
    sendDungeonMessage(" Even though you might have only auctioned off for 100 strokes you are always in risk of getting more ");
    sendDungeonMessage(" This was done to ensure that the sub never quite know ");
    sendDungeonMessage(" Then there are a few hidden bonuses depending on varies things I'm not allowed to discuss ");
    sendDungeonMessage(" So well.. ");

    answer = sendInput(" Do you want to put your ass up for auction? ", 15);
    while (true) {
        if (answer.isLike("yes")) {
            sendMessage("Okay then... %Good%");

            break;
        } else if (answer.isLike("no")) {
            sendMessage("Oh well next time perhaps..");
            run("dungeon/PunishmentBase.js");
            break;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}
//************************************************************************ POST INTRO ****************************************************
//(FirstSpankChoir) //Start with a check if a previous started spanking session was completed.
sendDungeonMessage("t");

//fixme
if (!isVar("SpankzChoirSubscription")) {
    sendDungeonMessage(" Honey, SpankzChoir is a subscription website... you need to go to the shop to buy a membership. ");
} else {
    if (getDate("SpankzChoirSubscription").hasPassed()) {
        sendDungeonMessage(" Your subscription to SpankzChoir has expired");
        sendDungeonMessage(" hurry over to the shop to renew it, and get your %Ass% back here ");
    } else {
        // we have a valid subscription
        /// have to add cheater checks

        if (getVar("AlexisWon") == true || getVar("AllisonWon") == true || getVar("GigiWon") == true || getVar("JeanetteWon") == true || getVar("KordeliaWon") == true || getVar("KymWon") == true || getVar("SadieWon") == true || getVar("SarahWon") == true) {
            sendDungeonMessage(" You can't skip a session %SlaveName% ");
            setVar("SpankzChoirSkipped", true);
            if (getVar("AlexisWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Alexis ");
            }
            if (getVar("AllisonWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Allison ");
            }
            if (getVar("gigiWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to GiGi ");
            }
            if (getVar("JeanetteWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Jeanette ");
            }
            if (getVar("KordeliaWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Kordelia ");
            }
            if (getVar("KymWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Kym ");
            }
            if (getVar("SadieWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Sadie ");
            }
            if (getVar("SarahWon") == true) {
                sendDungeonMessage(" Since you tried to skip a session I'm transferring 20 gold to Sarah");
            }
            setVar(VARIABLE.GOLD, getVar(VARIABLE.GOLD) - 20);
            sendDungeonMessage(" Also I'm awarding you some extra spanking ");
            setVar("AuctionStrokes", getVar("AuctionStrokes") + 100);
            sendDungeonMessage(" Enjoy.. ");
            run("Dungeon/SpankzChoir/MxMain.js");
            //this fixes a bug below???
            //break;

        }

        if (isVar("AuctionActive") && getVar("AuctionActive") == true) {
            //(AuctionActive) //Checks if sub returns in time, late or early

            if (getDate("SpankzChoir2").hasPassed()) {//slave is late!!!
                sendDungeonMessage(" You are late %SubName% ");
                changeMeritLow(true);
                setVar("AuctionActive", false);
                setVar("SpankzChoirLate", true);
                sendDungeonMessage(" The auction accept timer has run out ");
                sendDungeonMessage(" Meaning you own whoever won a lot of gold ");
                sendDungeonMessage(" Exactly how much we'll deal with after.. ");
                //(HighBidder1)
                sendDungeonMessage(" Let me just see who actually won ");

                choice = randomInteger(1, 8);

                switch (choice) {
                    case 1:
                        sendDungeonMessage(" The high bidder was Alexis ");
                        setVar("AlexisWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;

                    case 2:
                        sendDungeonMessage(" The high bidder was Allison ");
                        setVar("AllisonWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 3:
                        sendDungeonMessage(" The high bidder was Gigi ");
                        setVar("GigiWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 4:
                        sendDungeonMessage(" The high bidder was Jeanette ");
                        setVar("JeanetteWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 5:
                        sendDungeonMessage(" The high bidder was Kordelia ");
                        setVar("KordeliaWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 6:
                        sendDungeonMessage(" The high bidder was Kym ");
                        setVar("KymWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 7:
                        sendDungeonMessage(" The high bidder was Sadie ");
                        setVar("SadieWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                    case 8:
                        sendDungeonMessage(" The high bidder was Sarah ");
                        setVar("SarahWon", true);
                        sendDungeonMessage(" I bet she's pleased with both getting your ass and gold %Lol% ");
                        sendDungeonMessage(" Well setting it up.. ");
                        run("dungeon/SpankzChoir/MxMain.js");
                        break;
                }
            } else {
                if (!getDate("SpankzChoir1").hasPassed()) {
                    //slave is early!
                    sendDungeonMessage(" Well it seems you're here too early %SlaveName% ");
                    sendDungeonMessage(" don't return before the auction has completed ");
                    run("dungeon/PunishmentBase.js");
                } else {/// slave is on time
                    //(InTime)
                    sendDungeonMessage(" Hi %SubName% ");
                    delVar("AuctionActive");
                    sendDungeonMessage(" Well let's see who won your %Ass% ");
                    Choice = randomInteger(1, 8)
                    switch (Choice) {

                        case 1:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Alexis! ");
                            setVar("AlexisWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 2:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Allison! ");
                            setVar("AllisonWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 3:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Gigi! ");
                            setVar("GigiWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 4:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Jeanette! ");
                            setVar("JeanetteWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 5:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Kordelia! ");
                            setVar("KordeliaWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 6:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Kym! ");
                            setVar("KymWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 7:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Sadie! ");
                            setVar("SadieWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                        case 8:
                            sendDungeonMessage(random("The high bidder!", "It seems the high bidder", "And the winner..", "Oh my it seems the high bidder") + " is Sarah! ");
                            setVar("SarahWon", true);
                            sendDungeonMessage(" I bet she's pleased with get your %Ass% %Lol% ");
                            sendDungeonMessage(" Setting it up.. ");
                            run("dungeon/SpankzChoir/MxMain.js");
                            break;
                    }

                }
            }


        } else {


            //lets start an auction!
            //reset some flags
            setVar("FirstCornerMx", true);

            sendDungeonMessage(" So tell me %SubName% ");
            AuctionStroke = sendInput(" How many strokes do you wish to put up for auction? ");
            while (true) {
                if (AuctionStroke.isInteger()) {
                    result = AuctionStroke.getInt();
                    if ((result <= 99) || (result >= 1201)) {
                        sendDungeonMessage(" You didn't provide me with a valid number, choose between 100 and 1200 ");
                        AuctionStroke.loop();
                    } else {

                        setVar("AuctionStrokes", result);

                        break;
                    }
                } else {
                    sendDungeonMessage("All I asked you to do was input a simple number...");
                    sendDungeonMessage("Like 3");
                    sendDungeonMessage("or 6");
                    sendDungeonMessage("or 100...");
                    AuctionStroke.loop();
                }
                setVar("AuctionStrokes", result);

            }

            //@NullResponse @ChangeVar[AuctionStrokes]=[AuctionStrokes]*[2]
            CornerTimeLimit = sendInput(" What is your limit to the number of times you may be sent to the corner? ");

            while (true) {
                if (CornerTimeLimit.isInteger()) {
                    result = CornerTimeLimit.getInt();
                    if ((result <= 0) || (result >= 6)) {
                        sendDungeonMessage("Choose between 1 and 5!");
                        CornerTimeLimit.loop();
                    } else {
                        sendDungeonMessage(" Okay then.. ");
                        setVar("CornerTimeLimit", result);

                        break;
                    }
                } else {
                    sendMessage("All I asked you to do was input a simple number...");
                    sendMessage("Like 2");
                    sendMessage("or 5");
                    sendMessage("Idiot!", 0);
                    CornerTimeLimit.loop();
                }
            }


            CornerTimeTimeLimit = sendInput(" Choose your time limit per corner-time in minutes ");

            while (true) {
                if (CornerTimeTimeLimit.isInteger()) {
                    const result = CornerTimeTimeLimit.getInt();
                    if ((result <= 4) || (result >= 31)) {
                        sendDungeonMessage(" I'm sorry but you have to choose between 5 and 30 ");
                        CornerTimeTimeLimit.loop();
                    } else {
                        sendDungeonMessage(" Okay then.. ");
                        setVar("CornerTimeTimeLimit", result);

                        break;
                    }
                } else {
                    sendMessage("All I asked you to do was input a simple number...");
                    sendMessage("Like 2");
                    sendMessage("or 5");
                    sendMessage("Idiot!", 0);
                    CornerTimeLimit.loop();
                }
            }

            sendDungeonMessage(" The next questions are yes or no ");
            //fixme  add support for gagpunishment variable... its got hooks already in base code
            answer = sendInput(" Would you be okay with face slapping? ");
            while (true) {
                if (answer.isLike("yes")) {
                    sendDungeonMessage(" %Good% ");
                    setVar("SpankChoirFaceSlap", true);
                    break;
                } else if (answer.isLike("no")) {
                    sendDungeonMessage("Very well");
                    setVar("SpankChoirFaceSlap", false);
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }

            answer = sendInput(" Would you be okay with Mouth Soaping? ");
            while (true) {
                if (answer.isLike("yes")) {
                    sendDungeonMessage(" %Good% ");
                    setVar("SpankChoirMouthSoap", true);
                    break;
                } else if (answer.isLike("no")) {
                    sendDungeonMessage("Very well");
                    setVar("SpankChoirMouthSoap", false);
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }
            answer = sendInput(" Would you be okay with  being caned instead of spanked?  (this requires 2 large rubber bands) ");
            while (true) {
                if (answer.isLike("yes")) {
                    sendDungeonMessage(" %Good% ");
                    setVar("SpankChoirCaning", true);
                    break;
                } else if (answer.isLike("no")) {
                    sendDungeonMessage("Very well");
                    setVar("SpankChoirCaning", false);
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }
            sendDungeonMessage(" Do you want a safeword for the spanking? ");
            answer = sendInput(" You should know that if you use the safeword it has the same consequences as being late.. ");
            while (true) {
                if (answer.isLike("yes")) {
                    sendDungeonMessage(" %Good% ");
                    setVar("SpankChoirSafeword", true);
                    break;
                } else if (answer.isLike("no")) {
                    sendDungeonMessage("Very well");
                    setVar("SpankChoirSafeword", false);
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }
            sendDungeonMessage(" Would you be okay with the domme awarding you extra strokes? ");
            answer = sendInput(" Do consider that it can be as much as 50% ");
            while (true) {
                if (answer.isLike("yes")) {
                    sendDungeonMessage(" %Good% ");
                    setVar("ExtraStrokesOK", true);
                    break;
                } else if (answer.isLike("no")) {
                    sendDungeonMessage("Very well");
                    delVar("ExtraStrokesOK");
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }

            sendDungeonMessage(" Okay then.. that was it.. ");
            setDate("SpankzChoir1", setDate().addDay(2).setHour(0).setSecond(0).setMinute(0));
            sendDungeonMessage(" I'm posting it now, give me a moment.. ");
            setDate("SpankzChoir2", setDate().addDay(4).setHour(0).setSecond(0).setMinute(0));
            run("dungeon/SpankzChoir/SetGold.js")
            sendDungeonMessage(" Please be back after 48 hours but no later than 96 hours ");
            setVar("AuctionActive", true);


            //fixme... do we need to explicitly call the dungeon base here?


        }


    }


}

	


