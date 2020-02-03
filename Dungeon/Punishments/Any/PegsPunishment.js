{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!PAIN_LIMIT.isAllowed()) {
        /*//Address this limit if we never asked TODO: (do we want this here?)
        if(CBT_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
            CBT_LIMIT.askForLimitChange(false);
        }*/

        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE_PEG)) {
            switch (randomInteger(0, 1)) {
                case 0:
                    //TODO: Think of a different solution
                    if (!fetchToy('clothespin', undefined, 2)) {
                        runPunishment(PUNISHMENT_CURRENT_LEVEL);
                        break;
                    }

                    sendMessage("Now in just a moment I will tell you attach the pegs to a certain part of your body "); //#DT4
                    sendMessage("You don't want to attach them too well..."); //#DT4
                    sendMessage("Because just a moment later I will tell you to rip them off %EmoteHappy% "); //#DT4
                    sendMessage("Neither do you want to attach them too loosely because you will have to flick them once or twice "); //#DT4
                    sendMessage("If they fall off due to a flick you will have to repeat this punishment in full and pay a small fee..."); //#DT4
                    sendMessage("Remember to say tell me that you are done right after you've pulled them off..."); //#DT4 


                    for (let x = 0; x <= (PUNISHMENT_CURRENT_LEVEL.id + 1) * 3; x++) {
                        if (x > 0) {
                            sendMessage('%Now%');
                        }

                        //TODO: History
                        //TODO: Fix grammar ("attach on"?!)
                        switch (randomInteger(0, 13)) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                //(Nipples)
                                sendMessage(random("Attach", "Place", "Put") + " a peg on each of your nipples"); //#DT4
                                break;
                            case 6:
                            case 7:
                            case 8:
                                //(Balls)
                                sendMessage(random("Attach", "Place", "Put") + " the pegs to your %Balls%"); //#DT4 @Wait(5)
                                break;
                            case 9:
                            case 10:
                                //(Cock)
                                if (isInChastity()) {
                                    sendMessage(random("Attach", "Place", "Put") + " the pegs on to your " + random("%Balls%", "nipples")); //#DT4 @Wait(5)
                                } else {
                                    sendMessage(random("Attach", "Place", "Put") + " the pegs to some lose skin from your %Cock%"); //#DT4 @Wait(5)
                                }
                                break;
                            case 11:
                                //(Thigh)
                                sendMessage(random("Attach", "Place", "Put") + " a peg on each of your inner thighs, the closer to your groin the better.."); //#DT4 @Wait(5)
                                break;
                            case 12:
                                //(Nose)
                                sendMessage(random("Attach", "Place", "Put") + " the pegs on your nose %Grin%"); //#DT4 @Wait(5)
                                break;
                            case 13:
                                //(Eyebrows)
                                sendMessage(random("Attach", "Place", "Put") + " a peg on each of your eyebrows"); //#DT4 @Wait(5)
                                break;
                        }

                        //Will skip once the sub says something
                        wait(10);

                        sendMessage(random("Flick them twice", "Flick them just once", "Flick them " + randomInteger(2, 3) + " times", "Flick them"), 10); //#DT4

                        if (sendYesOrNoQuestion('Are they still attached?')) {
                            sendMessage('%Good%');
                        } else {
                            sendMessage('Well...');
                            rewardGoldLow(true);
                            x--;
                            continue;
                        }


                        //First run
                        if(x === 0) {
                            sendMessage('Next you are gonna rip them off on my command %Grin%');
                        }

                        sendMessage(random("Be ready!", "Prepare", "Prepare yourself", "Get ready", "Stay ready", "Ready yourself"));
                        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                        sleep(randomInteger(2, 10));

                        let response = sendInput(random("Rip them off!", "Pull them off", "Rip them!", "Pull them off completely!", "Rip them away! %Grin%", "Rip them off", "Rip.. them.. off!", "Rip them off.."), 8);
                        while (true) {
                            if (response.isTimeout()) {
                                //(Slow)
                                sendMessage("Aww too slow.. "); //#DT4
                                changeMeritMedium(true);
                                sendMessage("Remember to say 'Yes %DomHonorific%' after the pegs have been pulled off..."); //#DT4
                                sendMessage("I'm expecting you to follow my commands when I give them "); //#DT4
                                sendMessage("I don't accept delays just because something hurts a little..."); //#DT4
                                sendMessage("Well then I'm just adding a few extra rounds %Grin%"); //#DT4 @Goto(RipBase)
                                x -= (getStrictnessForCharacter() + 1);
                                break;
                            } else if (response.isLike("yes", 'done')) {
                                sendMessage('%Good%');
                                break;
                            }  else {
                                sendMessage("I only wanna hear a firm 'Yes Mistress'..."); //#DT4
                                break;
                            }
                        }
                    }
                    break;
                case 1:

                    //TODO: Think of a different solution
                    if(!sendYesOrNoQuestion('Do you have 10 clothespins and a string or piece of rope available right now %SlaveName%?')) {
                        runPunishment(PUNISHMENT_CURRENT_LEVEL);
                        break;
                    }

                    sendGoodForMe();
                    sendMessage('Go ahead and fetch them %SlaveName%');

                    waitForDone();

                    sendAlreadyKnowWhatsNext('rip', 'attach', 'rope');

                    for (let x = 0; x <= PUNISHMENT_CURRENT_LEVEL.id + 1; x++) {
                        if (x > 0) {
                            sendMessage('%Now%');
                        } else {
                            sendMessage('I want you too...');
                        }

                        switch (randomInteger(0, 1)) {
                            case 0:
                                sendMessage('Attach all the 10 clothespins across your chest and your nipples while routing that rope underneath them %Grin%');
                                break;
                            case 1:
                                sendMessage('Attach 5 clamps each to your inner thighs while routing that rope underneath them %Grin%');
                                break;
                        }

                        sendMessage('Tell me when you are done');
                        waitForDone();
                        sendMessage(random("Be ready!", "Prepare", "Prepare yourself", "Get ready", "Stay ready", "Ready yourself"));
                        showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
                        sleep(randomInteger(2, 10));

                        let response = sendInput(random("Rip it off!", "Pull them off", "Rip it!", "Pull them off completely!", "Rip them away! %Grin%", "Rip it off", "Rip.. it.. off!", "Rip it off..", "Rip it off..", "Rip it off..", "Rip it off.."), 8);
                        while (true) {
                            if (response.isTimeout()) {
                                //(Slow)
                                sendMessage("Aww too slow..."); //#DT4
                                changeMeritMedium(true);
                                sendMessage("Remember to say 'Yes %DomHonorific%' after the pegs have been pulled off..."); //#DT4
                                sendMessage("I'm expecting you to follow my commands when I give them "); //#DT4
                                sendMessage("I don't accept delays just because something hurts a little..."); //#DT4
                                sendMessage("Well then I'm just adding a few extra rounds %Grin%"); //#DT4 @Goto(RipBase)
                                x -= Math.min(2, (getStrictnessForCharacter() + 1));
                                break;
                            } else if (response.isLike("yes", 'done')) {
                                sendMessage('%Good%');
                                break;
                            }  else {
                                sendMessage("I only wanna hear a firm 'Yes Mistress'..."); //#DT4
                                break;
                            }
                        }
                    }

                    /*if (SISSY_LIMIT.isAllowed()) {
                        playRandomSissyHypno();
                    } else {
                        sendMessage('Now we are just gonna make you wait %Grin%');
                    }*/

                    break;
            }


            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if (PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope those pegs left a mark on your body %Grin%');
                    }
                }
            });
        }
    }
}