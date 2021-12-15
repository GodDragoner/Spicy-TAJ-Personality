{
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.UNKNOWN)) {
        sendMessage("%SlaveName%");
        sendMessage(random("There is nothing more empowering ", "I can't imagine anything that satisfies me more ", "There is nothing that gets me more wet "));
        sendMessage("Than " + random("watching a man pleasure another man against his will ", "watching a man give a blowjob despite his will ", "watching you pleasure a man against your will ") + "%Lol%");
        sendMessage("Forced into an act of homosexuality you might call it!");
        sendMessage(random("Well since you don't have anyone there with you ", "Since you're alone ", "Because you're alone "));
        sendMessage(random("We're gonna have to do it a bit differently ", "This is gonna be done a bit differently "));
        sendMessage("%Lol%");
        sendMessage("I'm gonna slide through images fast");

        sendMessage("I'm gonna draw from your gay images, Lesbian, Boobs, Butts and Lezdom images");

        sendMessage('Gay image = edge');
        sendMessage('Lesbian = 100 super slow strokes');
        sendMessage('Boobs = 20 very fast strokes');
        sendMessage('Butts = a small pause');
        sendMessage('Lezdom = add a peg to anywhere on your body');

        sendMessage("Now there are a few extra rules depending on how many pictures of each you've landed on");
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
        sendMessage('When you want to stop at a picture just tell me to stop and we\'ll see if you were quick enough to stop at the right time');
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
                sendMessage("It's time for some edging!");
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
        case 2:
            newValue = getVar("gayPictureGameButts", 0) + 1;
            setTempVar("gayPictureGameButts", newValue);

            if (newValue % 5 == 0 && newValue != 0) {
                sendMessage("That was the fifth time you hit the butt stop", 0);
                sendMessage("Which means this game is at an end");
                sendMessage("Be glad you didn't end with denial %Lol%");
                endGayPictureGame();
                return;
            }

            sendMessage("Just relax for a little bit");
            sleep(randomInteger(15, 30));
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

            //TODO: No clamps on penis
            distributeClamps(1);
            sendMessage('Well that\'s another peg on your body');
            break;
        case 4:
            newValue = getVar("gayPictureGameGay", 0) + 1;
            setTempVar("gayPictureGameGay", newValue);

            if (newValue % 7 == 0 && newValue != 0) {
                sendMessage("Oh my oh my!");
                sendMessage("You actually got to the fabulous ending! %Grin%");
                sendMessage("I hope you're enjoying the view!");
                sendMessage("Because you will cum to it! %Grin%");

                if (feelsEvil() || RULE_LOCKTOBER.isEffectivelyActive()) {
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

                    setVar(VARIABLE.NEXT_ORGASM_SPECIAL, ORGASM_SPECIAL_GAY_PICTURE);
                    endGayPictureGame();
                    return;
                }

                startOrgasmSpecialGayPicture(feelsLikePunishingSlave());

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

    if (getTotalAttachedClamps() > 0 && !feelsLikePunishingSlave()) {
        sendMessage('I will be generous today');
        sendMessage('You may already remove all clamps from your body %SlaveName%');

        if(NIPPLE_CLAMPS.isToyOn()) {
            NIPPLE_CLAMPS.setToyOn(false);
        }

        for (let x = 0; x < BODY_PARTS.length; x++) {
            BODY_PARTS[x].currentClamps = 0;
        }
    }
}