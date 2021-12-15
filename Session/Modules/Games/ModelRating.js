function decideModelRatingGameType() {
    let availableTypes = [];

    if(!isInChastity()) {
        availableTypes.push(GAME_TYPE.GAME_STROKING);

        if(CBT_LIMIT.isAllowed() && feelsLikePunishingSlave()) {
            availableTypes.push(GAME_TYPE.GAME_CBT);
        }

        if(hasBallCrusher() && BALL_CRUSHER_TOY.isPlayAllowed()) {
            availableTypes.push(GAME_TYPE.GAME_BALL_CRUSHER);
        }
    } else {
        if(ANAL_LIMIT.isAllowed()) {
            availableTypes.push(GAME_TYPE.GAME_ANAL);
        }

        //availableTypes.push(GAME_TYPE.GAME_CHASTITY);

        //Allows sub to potentially unlock the chastity cage
        if(!isChastityUnlockBlocked()) {
            availableTypes.push(GAME_TYPE.GAME_UNLOCK_CHASTITY);
        }

    }

    return random(availableTypes);
}

function startModelRating(gameType) {
    if (getVar(VARIABLE.MODEL_RATINGS_DONE, 0) === 0) {
        sendMessage('I have a fun new game for you %SlaveName%');
        sendMessage('In a moment I\'m gonna show you 100 pictures');
        sendMessage('You will rate each picture from 1 to 10');
        sendMessage('I will simply show you the image');
        sendMessage('And you will simply write a number from 1 to 10');
        sendMessage('10 meaning that the image is incredibly hot');
        sendMessage('1 being not so hot %Lol%');
        //sendMessage('@NullResponse @CallReturn(CR\Modules\Tease\ModuleParts\ModelRatingPart1.txt)');

        let modelRatings = new java.util.ArrayList();

        lockImages();
        for (let index = 1; index <= 100; index++) {
            showImage('Images/Spicy/Games/ModelGame/' + index + '.*');
            const answer = createInput();
            while (true) {
                if (answer.isInteger()) {
                    const result = answer.getInt();
                    if (result > 10) {
                        sendMessage('You can\'t choose a number higher than 10...', 0);
                        changeMeritLow(true);
                        answer.loop();
                    } else if (result < 1) {
                        sendMessage('You can\'t choose a number lower than 1...', 0);
                        changeMeritLow(true);
                        answer.loop();
                    } else {
                        modelRatings.add(result);
                        setVar(VARIABLE.MODEL_RATINGS, modelRatings);
                        break;
                    }
                } else {
                    sendMessage("What did I tell you %SlaveName%? Only give me a NUMBER and nothing else!", 0);
                    changeMeritLow(true);
                    answer.loop();
                }
            }
        }
        unlockImages();


        sendMessage('We\'re gonna stop here');
        sendMessage('Now that I have all this lovely info');
        sendMessage('I will have a great new game for us to play');
        sendMessage('You\'ll just have to wait and see %Grin%');
    } else {
        sendMessage('I have a fun little game for you %SlaveName%');
        sendMessage('Remember the pictures you rated before?');
        sendMessage('Let\'s see if you can still remember the ratings');

        //SHOP: Unlock second mode in shop?
        const compareMode = isChance(50);

        if (compareMode) {
            sendMessage('I will show you two images at a time and you will tell me which one you rated higher');
            sendMessage('IF you can remember %Lol%');
        } else {
            sendMessage('I will show you one image at a time and we will see whether you can remember the exact rating you gave it %Grin%');
        }


        //Remove buttplug for this game? Apply it again afterwards
        let replug = false;

        if (gameType === GAME_TYPE.GAME_BALL_CRUSHER) {
            if (fetchToy('ball crusher')) {
                if (hasBallsTied()) {
                    untieBalls();
                    sendMessage('So now that those balls are untied...');
                    sendMessage('Put that ball crusher on %Grin%');
                    setVar(VARIABLE.IS_BALL_CRUSHER_ON, true);
                    sendMessage('Tell me when you are done');
                    waitForDone();
                } else {
                    sendMessage('Now put that ball crusher on %Grin%');
                    setVar(VARIABLE.IS_BALL_CRUSHER_ON, true);
                    sendMessage('Tell me when you are done');
                    waitForDone();
                }

                registerCurrentModuleCategory(MODULE.BALL_TORTURE);
                applyBallCrusherPressure();

                sendMessage('So this is how this will go from here on');
                sendMessage('Every time you are wrong you will turn both screws once');
                sendMessage('I really hope that you have a good memory %Lol%');

                if (getStrictnessForCharacter() > 0) {
                    sendMessage('Or do I? %Grin%');
                }
            } else {
                gameType = GAME_TYPE.GAME_CBT;

                registerCurrentModuleCategory(MODULE.BALL_TORTURE);
                sendMessage('I guess we have to stick to the good old basic methods then');
                sendMessage('And because you are unable to fetch your toys and didn\'t tell me preemptively');
                sendMessage('We will directly start with some pain');
                sendMessage('A warmup can never be too bad right? %Grin%');

                smallPunishment(true, false);
            }
        }

        if (gameType === GAME_TYPE.GAME_ANAL) {
            if (!fetchDildoToy(toy = getDildo(false).name)) {
                gameType = GAME_TYPE.GAME_CBT;

                registerCurrentModuleCategory(MODULE.BALL_TORTURE);
            } else {
                sendMessage('Since we can\'t really play with that %Cock%...');
                sendMessage('We are gonna use your ass %Grin%');

                if(isPlugged()) {
                    removeButtplug();
                    replug = true;
                }
            }
        }

        if(gameType === GAME_TYPE.GAME_STROKING) {
            registerCurrentModuleCategory(MODULE.STROKING);
        }

        let fails = 0;
        let wins = 0;

        for (let round = 0; round < 10; round++) {
            if (round > 0 && isChance(20)) {
                sendMessage(random('Let\'s do another', 'One more', 'Let\'s try another one', 'Let\'s do it once again!'));
            }

            let right = false;

            let imageToShow = -1;

            if (compareMode) {
                const randomIndex = randomInteger(0, 99);
                let randomIndex2 = randomInteger(0, 99);
                while (randomIndex == randomIndex2) {
                    randomIndex2 = randomInteger(0, 99);
                }

                const modelRatings = getVar(VARIABLE.MODEL_RATINGS);
                const firstPictureScore = modelRatings.get(randomIndex);
                const secondPictureScore = modelRatings.get(randomIndex2);

                showImage('Images/Spicy/Games/ModelGame/' + (randomIndex + 1) + '.*', 3);
                showImage('Images/Spicy/Games/ModelGame/' + (randomIndex2 + 1) + '.*', 3);

                const answer = sendInput(random('Which image do you think was rated higher by you?', 'So what was the higher rated image?', 'Which of the images was the higher rated one?'));
                while (true) {
                    if (answer.isLike('one', '1', 'first')) {
                        if (firstPictureScore > secondPictureScore) {
                            right = true;
                        }

                        imageToShow = randomIndex + 1;
                        break;
                    } else if (answer.isLike('two', '2', 'second')) {
                        if (firstPictureScore < secondPictureScore) {
                            right = true;
                        }

                        imageToShow = randomIndex2 + 1;
                        break;
                    } else if (answer.isLike('same', 'similar')) {
                        if (firstPictureScore == secondPictureScore) {
                            right = true;
                        }

                        break;
                    } else {
                        sendMessage('The first or the second one? Or did they share the same score? %Grin%', 0);
                        answer.loop();
                    }
                }
            } else {
                const randomIndex = randomInteger(0, 99);
                const modelRatings = getVar(VARIABLE.MODEL_RATINGS);
                const firstPictureScore = modelRatings[randomIndex];
                lockImages();
                showImage('Images/Spicy/Games/ModelGame/' + (randomIndex + 1) + '.*', 3);
                imageToShow = randomIndex + 1;

                const answer = sendInput(random('So try to tell me the rating you gave this picture %SlaveName%?', 'What rating did you give this picture?'));
                while (true) {
                    if (answer.isInteger()) {
                        if (firstPictureScore == answer.getInt()) {
                            right = true;
                        }

                        break;
                    } else {
                        sendMessage('Just give me a number between 1 and 10 %SlaveName%...', 0);
                        changeMeritLow(true);
                        answer.loop();
                    }
                }
            }

            unlockImages();

            if (right) {
                sendMessage(random('Correct!', 'Right on', 'Right on!', 'You\'re right', 'You are right!', 'That\'s correct', 'That\'s right') + ' %Grin%');

                if (gameType === GAME_TYPE.GAME_STROKING) {
                    lockImages();
                    showImage('Images/Spicy/Games/ModelGame/' + imageToShow + '.*');
                    startEdging();
                    sendMessage("%LetEdgeFade%");
                    unlockImages();

                    if (wins === 0) {
                        sendMessage('Oops. Did I forget to tell you that you have to edge every time you are right? %Lol%');
                        sendMessage('My bad %Grin%');
                    }
                } else if(gameType === GAME_TYPE.GAME_CHASTITY) {
                    if (wins === 0) {
                        sendMessage('Since you are in chastity and I can\'t give you a treat of some sort I am just gonna reward you with gold');
                    } else {
                        sendMessage('Some gold for you yet again %EmoteHappy%');
                    }

                    rewardGoldLow();
                } else if(gameType === GAME_TYPE.GAME_BALL_CRUSHER) {
                    if (wins === 0) {
                        sendMessage('I don\'t want you to twist the screws backwards so I am just gonna reward you with some gold instead');
                    } else {
                        sendMessage('Some gold for you yet again %EmoteHappy%');
                    }

                    rewardGoldLow();
                } else if(gameType === GAME_TYPE.GAME_UNLOCK_CHASTITY) {
                    let hoursToSubtract = 6 - getStrictnessForCharacter();

                    if(isForcedLockedUp()) {
                        if (wins === 0) {
                            sendMessage('I am gonna subtract ' + hoursToSubtract + ' hours from your lockup time for getting it right %Smile%');
                        } else {
                            sendMessage('Some more hours off of that annoying clock %EmoteHappy%');
                        }

                        removeLockUpTime(hoursToSubtract);
                    } else {
                        if (wins === 0) {
                            sendMessage('Since you are in chastity and I can\'t give you any treat of some sort I am just gonna reward you with gold');
                        } else {
                            sendMessage('Some gold for you yet again %EmoteHappy%');
                        }

                        rewardGoldLow();
                    }
                }
                //Anal and stuff
                else if(isInChastity()) {
                    if (wins === 0) {
                        sendMessage('Since you are in chastity and I can\'t give you any treat of some sort I am just gonna reward you with gold');
                    } else {
                        sendMessage('Some gold for you yet again %EmoteHappy%');
                    }

                    rewardGoldLow();
                }

                wins++;
            } else {
                sendMessage(random('Wrong!', 'Not correct', 'Incorrect', 'You\'re wrong', 'You are wrong', 'That\'s incorrect') + ' %Lol%');

                //QUALITY: Could also punish with other stuff such as anal, corner time etc.

                if (gameType === GAME_TYPE.GAME_BALL_CRUSHER) {
                    sendMessage('Aaaand twist %Grin%', 5);
                } else if (gameType === GAME_TYPE.GAME_CBT) {
                    //Means it is the first time the sub failed
                    if (fails === 0) {
                        //Already handles if the sub has chastity on
                        smallPunishment(true, false);

                        sendMessage('Did you really think you are gonna just play this game without consequences? %Lol%');
                    } else {
                        sendMessage(random('I guess I have to punish you for that again', 'You already know what happens now don\'t you?', 'That\'s gonna hurt', 'Well ') + ' %Lol%');

                        //Already handles if the sub has chastity on
                        smallPunishment(true, false);
                    }
                }
                //Non pain slaves
                else if(gameType === GAME_TYPE.GAME_STROKING) {
                    lockImages();
                    showImage('Images/Spicy/Games/ModelGame/' + imageToShow + '.*');
                    startEdging();
                    sendMessage("%LetEdgeFade%");

                    showImage('Images/Spicy/Games/ModelGame/' + imageToShow + '.*');

                    sendMessage('Be ready for a second one %Grin%');

                    if (fails === 0 && wins > 0) {
                        sendMessage('You will do twice the edges when you are wrong %EmoteHappy%');
                    } else {
                        sendMessage('Did you really think you are gonna just play this game without consequences? %Lol%');
                    }

                    sendMessage('Here it comes...');

                    startEdging();
                    unlockImages();
                    sendMessage("%LetEdgeFade%");
                } else if(gameType === GAME_TYPE.GAME_ANAL) {
                    if(fails === 0) {
                        sendMessage('This is where the fun begins %Grin%');
                    }
					
					const randomStrokes = randomInteger(75, 100);
                    sendMessage('Fuck your ass for ' + randomStrokes + ' full long teasing strokes');
                    sendMessage(random('Make sure to aim at your prostate', 'Make sure to make that cock throb', 'Make sure to make yourself leak on the other end') + ' %Wicked%');
                    sendMessage('Report to me when you are done');
                    waitForDone();
                }
                //In chastity
                else if(gameType === GAME_TYPE.GAME_CHASTITY || gameType === GAME_TYPE.GAME_UNLOCK_CHASTITY) {
                    let hoursChastity = getStrictnessForCharacter() + 6;
                    sendMessage('That\'s +' + hoursChastity + ' more hours in chastity for you %Grin%');
                    addLockUpTime(hoursChastity);

                    if(fails === 0) {
                        sendMessage('Did you really think that there are no consequences to losing this game?');
                    }
                }

                fails++;
            }
        }

        //Unlock chastity completely if we failed less than we won
        if(wins > fails && GAME_TYPE.GAME_UNLOCK_CHASTITY && isInChastity()) {
            //Obviously we won't unlock the slave if he is forced locked
            if(!isForcedLockedUp() && isChance(wins*10)) {
                sendMessage('I think for your performance today you have deserved to be freed from that nasty cage %Grin%');
                sendMessage('Even if it\'s just for a short while %Smile%');
                unlockChastityCage();
            }
        }

        if (gameType === GAME_TYPE.GAME_BALL_CRUSHER) {
            sendMessage('You may remove the ball crusher now %SlaveName%');
            setVar(VARIABLE.IS_BALL_CRUSHER_ON, true);
            sendMessage('Tell me when you are done %EmoteHappy%');
            waitForDone();

            if(sendYesOrNoQuestion('Feels good, doesn\'t it?')) {
                sendMessage('%Wicked%');
            } else {
                sendMessage('Well maybe you need some more pain then?');
                smallCBTPunishment();
            }
        } else if(gameType === GAME_TYPE.GAME_ANAL) {
            sendMessage('You may put that dildo away for now %SlaveName%');
        }

        //QUALITY: More variation
        sendMessage('We\'re at the end! %Grin%');
		if(gameType === GAME_TYPE.GAME_ANAL)
		{
			sendMessage('Hopefully this was as much fun for your ass as it was for me');
		}
		else
		{
			sendMessage('Hopefully this was as much fun for you as for me');
		}
        
        sendMessage('I guess it was if you have a good memory %Lol%');

        if(replug) {
            putInButtplug();
        }
    }

    setVar(VARIABLE.MODEL_RATINGS_DONE, getVar(VARIABLE.MODEL_RATINGS_DONE) + 1);
}