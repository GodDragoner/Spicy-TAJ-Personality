{
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.UNKNOWN)) {
        sendMessage("%SlaveName%");
        sendMessage(random("There is nothing more empowering ", "I can\'t imagine anything that satifies me more ", "There is nothing that gets me more wet "));
        sendMessage("Than " + random("watching a man pleasure another man against his will ", "watching a man give a blowjob despite his will ", "watching you pleasure a man against your will ") + "%Lol%");
        sendMessage("Forced into an act of homosexuality you might call it!");
        sendMessage(random("Well since you don\'t have anyone there with you ", "Since you\'re alone ", "Because you\'re alone "));
        sendMessage(random("We\'re gonna have to do it a bit differently ", "This is gonna be done a bit differently "));
        sendMessage("%Lol%");
        sendMessage("I\'m gonna slide through images fast");

        sendMessage("I\'m gonna draw from your gay images, Lesbian, Boobs, Butts and Lezdom images");

        sendMessage('Gay image = edge');
        sendMessage('Lesbian = 100 super slow strokes');
        sendMessage('Boobs = 20 very fast strokes');
        sendMessage('Butts = a small pause');
        sendMessage('Lezdom = add a peg to anywhere on your body');

        sendMessage("Now there a few extra rules depending on how many pictures of each you\'ve landed on");
        sendMessage('7 gay images = orgasm to a picture of a dick');
        sendMessage('3 lesbian images = 4 edges in a row');
        sendMessage('5 boobs pictures = 100 gold');
        sendMessage('5 butts images = the game ends');

        if (hasChastityCage()) {
            sendMessage('7 lezdom pictures = 2 days in chastity and the game ends');
        } else {
            sendMessage('7 lezdom pictures = 2 days of complete denial and the game ends');
        }

        sendMessage("%Lol%");
        sendMessage("Let the game begin!");
        startGayPictureRound();
    }
}

function startGayPictureRound() {
    lockImages();

    while (true) {
        //Sub send a stop message
        if (getVar('interruptPictureGame', false)) {
            break;
        }

        let index = randomInteger(0, 4);
        switch (index) {
            case 0:
                showCategoryImage('LESBIAN');
                break;
            case 1:
                showCategoryImage('BOOBS');
                break;
            case 2:
                showCategoryImage('BUTTS');
                break;
            case 3:
                showCategoryImage('LEZDOM');
                break;
            case 4:
                showCategoryImage('GAY');
                break;
        }

        setTempVar('gayPictureGameIndex', index);

        sleep(300, 'MILLISECONDS');
    }


    //Reset var
    setTempVar('interruptPictureGame', false);

    let currentIndex = getVar('gayPictureGameIndex');

    //Delete var
    delVar('gayPictureGameIndex');

    let newValue = -1;

    switch (currentIndex) {
        case 0:
            newValue = getVar("gayPictureGameLesbian", 0) + 1;
            setTempVar("gayPictureGameLesbian", newValue);

            if (newValue % 3 == 0 && newValue != 0) {
                sendMessage("Oh my!");
                sendMessage("It\'s time for some edging!");
                sendMessage("4 edges actually %Grin%");
                for (let x = 0; x < 4; x++) {
                    startEdging();
                    sendMessage("%LetEdgeFade%", randomInteger(5, 10));
                }

                sendMessage('Okay. Back to the images %Grin%');
                sendMessage('Be ready...');
                break;
            }

            sendMessage("Well that's 100 slow strokes %Grin%");
            playAudio('Audio/Spicy/Stroking/MetronomeNumber/100SlowStrokes.mp3', true);
            stopStrokingMessage();
            break;
        case 1:
            newValue = getVar("gayPictureGameBoobs", 0) + 1;
            setTempVar("gayPictureGameBoobs", newValue);

            if (newValue % 5 == 0 && newValue != 0) {
                sendMessage("That was the fifth time you hit the butt stop", 0);
                sendMessage("Which means this game is at an end");
                sendMessage("Be glad you didn\'t end with denial %Lol%");
                endGayPictureGame();
                return;
            }

            sendMessage("Just relax for a little bit");
            sleep(randomInteger(15, 30));
            break;
        case 2:
            newValue = getVar("gayPictureGameButts", 0) + 1;
            setTempVar("gayPictureGameButts", newValue);

            if (newValue % 5 == 0 && newValue != 0) {
                sendMessage("Boobs five times! %Grin%");
                sendMessage("I guess that earns you 100 gold!");
                addGold(100);
                sendMessage("The gold has been transferred...");
                break;
            }

            sendMessage("Time for 20 fast strokes!");
            sendMessage("Get ready!");
            playAudio('Audio/Spicy/Stroking/MetronomeNumber/20FastStrokes.mp3', true);
            break;
        case 3:
            newValue = getVar("gayPictureGameLezdom", 0) + 1;
            setTempVar("gayPictureGameLezdom", newValue);

            if (newValue % 7 == 0 && newValue != 0) {
                sendMessage("Oh my oh my!");

                addLockUpTime(48);

                if (hasChastityCage()) {
                    sendMessage('That\'s 2 days in chastity for you %EmoteSad%');

                    if (!isInChastity()) {
                        lockChastityCage();
                    }
                } else {
                    //TODO: Integrate having no chastity device
                    sendMessage('That\'s 2 days of not touching that dick %EmoteSad%');
                }

                sendMessage('Bad luck I guess %Grin%');
                endGayPictureGame();
                return;
            }

            distributeClamps(1);
            sendMessage('Well that\'s another peg on your body');
            break;
        case 4:
            newValue = getVar("gayPictureGameGay", 0) + 1;
            setTempVar("gayPictureGameGay", newValue);

            if (newValue % 7 == 0 && newValue != 0) {
                sendMessage("Oh my oh my!");
                sendMessage("You actually got to the fabulous ending! %Grin%");
                sendMessage("I hope you\'re enjoying the view!");
                sendMessage("Because you will cum to it! %Grin%");

                if (feelsEvil()) {
                    sendMessage('But I never said that you are gonna cum now %Grin%');

                    let answer = sendYesOrNoQuestionTimeout('Oh wait... Did you really think I was gonna let you cum now? %Lol%', 5);
                    if(answer === ANSWER_YES) {
                        sendMessage('Poor %SlaveName%...');
                    } else if(answer === ANSWER_NO) {
                        sendMessage('I guess it is still quite frustrating %Grin%');
                    }


                    sendMessage('I was never intending on letting you cum now %Grin%');
                    sendMessage('I never specified when you are going to cum to a picture of a dick');
                    sendMessage('So you just gotta hang in there and wait %EmoteHappy%');

                    setVar('nextOrgasmSpecial', ORGASM_SPECIAL_GAY_PICTURE);
                    endGayPictureGame();
                    return;
                }

                let cumOnDildo = false;
                let dildoCEI = getCEILimit() == LIMIT_ASKED_YES;
                let dildoAnal = getAnalLimit() == LIMIT_ASKED_YES;

                //TODO: Convince of CEI if LIMIT IS MAYBE or force
                if (hasDildoToy() && (dildoCEI || dildoAnal)) {
                    cumOnDildo = fetchDildoToy(getDildo(true).name);

                    if (cumOnDildo) {
                        sendMessage('%KnowWhatsNext%');
                        sendMessage('You are gonna cum onto that dildo and then afterwards...');
                        sendMessage('Well...');
                        sendMessage('When we are already dealing with gay pictures we can go all out...');
                        sendMessage('Let\'s say it is gonna be interesting %Grin%');

                        if (dildoCEI && isChance(50) || !ASM_LIMIT.isAllowed() && dildoAnal) {
                            //Dildo CEI in this case
                            dildoAnal = false;
                        }

                        sendMessage('So go ahead and place the dildo in a position that allows you to spread your load all over it');
                        sendMessage('You might want to get something to put under the dildo like a plate');
                        sendMessage('Unless you want a big mess %Grin%');

                        //Other case we might do both ^^
                    }
                }

                sendMessage("I forbid you to look away!");
                sendMessage("If you were here, the only time you would ever be allowed any release");
                sendMessage("Would be with your cock locked, a dick pumping into your mouth and one in your %Ass%");
                sendMessage("You would be so used to cocks that you eventually would start to question whether you might actually be gay");
                sendMessage("Pussy, boobs and whatever would simply be a thing of the past");
                sendMessage("A faint memory from a time you could barely remember %Lol%");
                sendMessage("Well!");
                sendMessage("In a moment you will edge");
                sendMessage("You will stare at that image!");
                sendMessage("Your eyes are to be locked on the screen!");
                sendMessage("Now..");
                startEdging(getEdgeHoldSeconds(), true);

                let ruin = false;

                if (feelsLikePunishingSlave()) {
                    ruin = true;

                    registerRuin();
                    sendMessage('%RuinForMe%');
                    sendMessage('Ye that\'s right %Grin%');
                    sendMessage('Let that cum dribble out of %MyYour% %Cock%');

                    if (cumOnDildo) {
                        sendMessage('Right onto that dildo %Grin%');
                    }

                    let excited = sendYesOrNoQuestionTimeout('You don\'t deserve to experience a full orgasm and you know that, right?', 5);

                    if(excited === ANSWER_YES) {
                        sendMessage('%Good%');
                    } else if(excited === ANSWER_NO) {
                        sendMessage('Well I definitely don\'t think so and I am making the decisions here %Lol%');
                        changeMeritLow(true);
                    }

                    sendMessage('Just because you got a bit lucky doesn\'t means that I am gonna let you enjoy a full orgasm');
                    sendMessage('Deciding about that privilege is still up to me and I don\'t think you deserve it %Lol%');
                    sendMessage('Tell me when you are done letting your pathetic cum dribble out of that %Cock%');
                    waitForDone();
                } else {
                    sendMessage('%CumForMe%');
                    registerOrgasm();

                    if (cumOnDildo) {
                        sendMessage(randomInteger('Right', 'Spurt your load') + ' onto that dildo %Grin%');
                    }

                    sendMessage("Cum for me!!");
                    sendMessage('Tell me when you are done %Grin%');
                    waitForDone();
                }

                unlockImages();

                if (cumOnDildo) {
                    sendMessage('Okay so firstly we gotta try to get as much cum onto that dildo as possible %Grin%');
                    sendMessage('Try to rub your dildo in the cum without losing anything that\'s already on there', 5);
                    sendMessage('%Good%');

                    let excited = sendYesOrNoQuestionTimeout('Are you exited for what\'s gonna happen next %SlaveName%?', 5);

                    if(excited === ANSWER_YES) {
                        sendMessage('Hopefully you will think the same after we are done %Lol%');
                    } else if(excited === ANSWER_NO) {
                        sendMessage('Well I am definitely %Grin%');
                    }

                    if (dildoAnal) {
                        sendMessage('Well I want you to get on all fours');
                        sendMessage('Yes, you heard me correctly');
                        sendMessage('No blowing that dildo');
                        sendMessage('That would be too boring right? %Grin%');
                        sendMessage('Go ahead and place that tip of the dildo on your asshole');
                        sendMessage('And now slowly push it in', 10);
                        sendMessage('And pull it all the way back out');
                        sendMessage('Does it feel good spreading that cum in you? %Lol%');
                        sendMessage('Put it back in %SlaveName%');
                        sendMessage('And now follow the beat and fuck yourself %Grin%');
                        startStroking(randomInteger(30, 60));
                        sleep(20);
                        stopStroking();
                        sendMessage('Stop %SlaveName%');
                        sendMessage('Now pull it out...');
                        sendMessage('And...');

                        if (isChance(75)) {
                            sendMessage('Dip it into the cum that is remaining on your plate or floor');
                            sendMessage('Try to get it all wet and slippery again');
                            sendMessage('And now put it back in %Grin%');
                            sendMessage('Here we go again %SlaveName%. Follow the beat!');
                            startStroking(randomInteger(30, 60));
                            sleep(20);
                            stopStroking();
                            sendMessage('Stop %SlaveName%');
                            sendMessage('Pull it out and put that dildo in front of you');
                        }

                        sendMessage('Just lock at it');
                        sendMessage('Can you smell that ass juice mixed with your cum?');

                        let tastyAnswer = sendYesOrNoQuestionTimeout('How does it look? Does it look tasty?', 5);

                        if(tastyAnswer === ANSWER_YES) {
                            sendMessage('Really? %Lol%');

                            if(getASMLimit() != LIMIT_ASKED_YES) {
                                ASM_LIMIT.askForLimitChange(LIMIT_ADDRESS.SUB);
                            } else {
                                if (getASMLimit() == LIMIT_ASKED_YES && getCEILimit() == LIMIT_ASKED_YES) {
                                    let cleanAnswer = sendYesOrNoQuestionTimeout('Would you like to clean it with your tongue?', 5);

                                    if(cleanAnswer === ANSWER_YES) {
                                        sendMessage('Just what I wanted to hear %Grin%');
                                        dildoCEI = true;
                                    } else if(cleanAnswer === ANSWER_NO) {
                                        if(ASM_LIMIT.isAllowed() && CEI_LIMIT.isAllowed()) {
                                            sendMessage('Well you know that I am gonna make you lick it clean anyway %Lol%');
                                            dildoCEI = true;
                                        }
                                    }
                                }
                            }
                        } else if(tastyAnswer === ANSWER_NO) {
                            if(ASM_LIMIT.isAllowed() && CEI_LIMIT.isAllowed()) {
                                sendMessage('Well you know that I am gonna make you lick it clean anyway %Lol%');
                                dildoCEI = true;
                            } else {
                                sendMessage('Pretty disgusting if you ask me %Grin%');
                            }
                        }
                    }

                    if(dildoCEI) {
                        sendMessage('I want you to place that dildo in front of you');
                        sendMessage('And then I want you to give it a nice blowjob');

                        if(RULE_NEVER_SWALLOW_SPIT.isActive()) {
                            sendMessage('Remember to not swallow unless I allow you to');

                            if(SISSY_LIMIT.isAllowed()) {
                                sendMessage('Good sissies never swallow during a blowjob %Grin%');
                            }
                        }

                        sendMessage('Start by giving the cum covered tip some kisses', 3);
                        sendMessage('Show it some love %Grin%', 2);

                        let cleanAnswer = sendYesOrNoQuestionTimeout('How does it taste? Good doesn\'t it?', 5);

                        if(cleanAnswer === ANSWER_YES) {
                            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                                if(dildoAnal) {
                                    sendMessage('After all you are a disgusting anal and cum whore %Grin%');
                                } else {
                                    sendMessage('After all you are a disgusting cum whore %Grin%');
                                }
                            } else {
                                sendMessage('I knew you\'d like it %Grin%');
                            }
                        } else if(cleanAnswer === ANSWER_NO) {
                            sendMessage('Don\'t be pathetic');
                            sendMessage('You will suck it even if you don\'t want to %Lol%');
                        }

                        sendMessage('Now start by giving the tip a gentle blowjob');
                        sendMessage('Don\'t go all the way down yet. Just the tip...');
                        startStroking(45);
                        sleep(15);
                        sendMessage('Now start going further down the dildo');
                        sendMessage('As far as you can go without gagging');
                        sendMessage('And don\'t you dare swallow anything yet!');

                        if (dildoAnal) {
                            sendMessage('Keep that disgusting mixture of cum, spit and anal juice all in your mouth %Grin%');
                        } else {
                            sendMessage('Keep that tasty cum and spit mixture all in your mouth');
                        }

                        sendMessage('Let\'s speed things up a bit shall we?');
                        addStrokingBPM(15);
                        sleep(20);

                        //TODO: More teasing with gay stuff
                        if (getBlowjobLevel() > 30) {
                            sendMessage('In a minute I want you to deepthroat that dildo real good');

                            if (dildoAnal) {
                                sendMessage('Press all that cum and ass juice down your throat %Grin%');
                            } else {
                                sendMessage('Press all that cum and spit down your throat %Grin%');
                            }

                            sendMessage('Don\'t you dare back off!');
                            stopStroking();
                            sendMessage('Go ahead and start pushing that dildo into your throat and hold it');
                            sendMessage('Go balls deep %SlaveName%');
                            sendMessage('Don\'t disappoint me!', 5);
                            sendMessage('Okay, you can go back up but don\'t take that dildo out of your mouth!', 0);
                            playBellSound();
                            sleep(3);
                            sendMessage('Good %SlaveName%');
                            sendMessage('And back to your throat');
                            sendMessage('Go all the way down on it %SlaveName%');
                            sendMessage('I want to see you gag and cry %Lol%', 10);
                            sendMessage('Go back up...', 0);
                            playBellSound();
                            sleep(3);
                            sendMessage('And one last time');
                            sendMessage('Go balls deep %SlaveName%! Now!');

                            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                                sendMessage('I want to hear you say: I am a disgusting sissy slave');
                                sendMessage('Say it!');
                                sendMessage('What? I can\'t hear you with that dick in your throat. Say it again. Louder!', 3);
                                sendMessage('%Good%');
                                sendMessage('And now I want you to say: %DomHonorific% %DomName% please violate my throat');
                                sendMessage('Louder!', 3);
                                sendMessage('%Good%');
                            } else {
                                sleep(5);
                                sendMessage('Hold it!');
                                sleep(5);
                                sendMessage('Stay and keep that dick in your throat!');
                                sleep(5);
                            }


                            sendMessage('You can back off now', 0);
                            playBellSound();
                            sleep(3);

                            sendMessage('That wasn\'t that hard was it?');

                            if (dildoAnal) {
                                sendMessage('Go ahead and swallow all that cum, spit and ass juice %Grin%');
                            } else {
                                sendMessage('Go ahead and swallow all that cum and spit %Grin%');
                            }

                            sendMessage('Now...');

                        } else {
                            sendMessage('In a minute I want you to deepthroat that dildo');
                            sendMessage('I know you aren\'t that experienced yet but I will go easy on you');
                            sendMessage('You should be happy because if you were I would violate your throat much worse');
                            sendMessage('Don\'t take that dildo out of your mouth!');
                            stopStroking();
                            sendMessage('If you need to you are allowed to swallow but don\'t do it unless you really need to');
                            sendMessage('Go ahead and start slowing pushing that dildo down your throat');
                            sendMessage('Try to go as far as you can go. Balls deep would be the best %Grin%');

                            if (dildoAnal) {
                                sendMessage('Press all that cum and ass juice down your throat %Grin%');
                            } else {
                                sendMessage('Press all that cum and spit down your throat %Grin%');
                            }

                            sendMessage('You can go back up %SlaveName%', 0);
                            playBellSound();
                            sleep(3);

                            sendMessage('That was quite impressive');
                            sendMessage('Looks like I found another throat slut to abuse %EmoteHappy%');

                            sendMessage('Just once more %Grin%');
                            sendMessage('Push that dildo down your throat. As far down as it goes...');
                            sendMessage('Keep it there', 4);

                            sendMessage('Stop %SlaveName%', 0);
                            playBellSound();
                            sleep(3);

                            sendMessage('%Good%');
                            sendMessage('You did it! Now...');
                        }

                        sendMessage('If there is anything remaining on your dildo go ahead and lick it up now');
                        sendMessage('Clean it properly %SlaveName%');
                        sendMessage('I want that dildo to be spotless %Grin%');

                        const answer = sendInput('Is there still some cum remaining on your plate or the floor?');


                        while (true) {
                            if (answer.isLike("yes")) {
                                sendMessage('You know what to do');
                                sendMessage('Lap it all up like a good %SlaveName% %Grin%');
                                sendMessage('Tell me when you are done...');
                                waitForDone();
                                sendMessage('%Good%');
                                break;
                            } else if (answer.isLike("no")) {
                                sendMessage('Well then you did a good job of getting all that cum onto your dildo');
                                changeMeritLow(false);
                                break;
                            } else {
                                sendMessage(YES_OR_NO);
                                answer.loop();
                            }
                        }
                    }
                } else if (getCEILimit() == LIMIT_ASKED_YES) {
                    sendMessage('Now go ahead and lick up that tasty cum of yours');
                    sendMessage('We don\'t want it to go to waste, do we? %Grin%');
                    sendMessage('Tell me when you are done %SlaveName%');
                    waitForDone();
                    sendMessage('%Good%');
                }

                sendMessage('I hope you enjoyed that orgasm %Grin%');

                if (ruin) {
                    //TODO: Could reuse for same scenarios in other cum modules
                    sendMessage('I never said that you are gonna enjoy a full orgasm');
                    sendMessage('Ruining is still an orgasm, isn\'t it?');
                    sendMessage('So I kept my promise %Grin%');
                }

                sendMessage('I certainly enjoyed it %Lol%');
                sendMessage('And it was actually worth that waste of precious cum and frustration');

                sendMessage('So %SlaveName%');
                sendMessage("We will end this here...");
                sendMessage("Cya!");

                endSpicySession();
                return;
            }

            startEdging();
            sendMessage("%LetEdgeFade%", randomInteger(5, 10));
            break;
    }

    startGayPictureRound();
}

function endGayPictureGame() {
    unlockImages();

    if (!feelsLikePunishingSlave() && getTotalAttachedClamps() > 0) {
        sendMessage('I will be generous today');
        sendMessage('You may already remove all clamps from your body %SlaveName%');
    }
}