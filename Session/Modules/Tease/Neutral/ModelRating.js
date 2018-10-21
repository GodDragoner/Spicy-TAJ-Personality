{
    if (getVar(VARIABLE_MODEL_RATINGS_DONE, 0) == 0) {
        sendMessage('I have a fun new game for you %SlaveName%');
        sendMessage('In a moment I\'m gonna show you 100 pictures');
        sendMessage('You will rate each picture from 1 to 10');
        sendMessage('I will simply show you the image');
        sendMessage('And you will simply write a number from 1 to 10');
        sendMessage('10 meaning that the image is incredible hot');
        sendMessage('1 being not so hot %Lol%');
        //sendMessage('@NullResponse @CallReturn(CR\Modules\Tease\ModuleParts\ModelRatingPart1.txt)');

        for (let index = 1; index <= 100; index++) {
            showImage('Images/Spicy//Games/ModelGame/' + index + '.*');
            const answer = createInput();
            while (true) {
                if (answer.isInteger()) {
                    const result = answer.getInt();
                    if (result > 10) {
                        sendMessage('You can\'t choose a number higher than 10...');
                        changeMeritLow(true);
                        answer.loop();
                    } else if (result < 1) {
                        sendMessage('You can\'t choose a number lower than 1...');
                        changeMeritLow(true);
                        answer.loop();
                    } else {
                        let modelRatings = getVar(VARIABLE_MODEL_RATINGS, []);
                        modelRatings.push(result);
                        setVar(VARIABLE_MODEL_RATINGS, modelRatings);
                        break;
                    }
                } else {
                    sendMessage("What did I tell you %SlaveName%? Only give me a NUMBER and nothing else!");
                    changeMeritLow(true);
                    answer.loop();
                }
            }
        }


        sendMessage('We\'re gonna stop here');
        sendMessage('Now that I have all this lovely info');
        sendMessage('I will have a great new game for us to play');
        sendMessage('You\'ll just have to wait and see %Grin%');
    } else {
        sendMessage('I have a fun little game for you %SlaveName%');
        sendMessage('Remember the pictures you rated before?');
        sendMessage('Let\'s see if you can still remember the ratings');

        //TODO: Unlock second mode in shop?
        const compareMode = randomInteger(0, 1) == 0;

        if(compareMode) {
            sendMessage('I will show you two images at a time and you will tell me which one you rated higher');
            sendMessage('IF you can remember %Lol%');
        } else {
            sendMessage('I will show you one images at a time and we will see whether you can remember the exact rating you gave it %Grin%');
        }

        let hasBallCrusher = hasBallCrusher();

        if (hasBallCrusher && !isInChastity()) {
            if (fetchToy('ball crusher')) {
                if (hasBallsTied()) {
                    untieBalls();
                    sendMessage('So now that those balls are untied...');
                    sendMessage('Put that ball crusher on %Grin%');
                } else {
                    sendMessage('Now put that ball crusher on %Grin%');
                    setVar(VARIABLE_IS_BALL_CRUSHER_ON, true);
                }

                //TODO: Based on reference values that were set previously or setup ball crusher thing

                sendMessage('So this is how this will go from here on');
                sendMessage('Everytime you are wrong you will turn both screws once');
                sendMessage('I really hope that you have a good memory %Lol%');

                if(ACTIVE_PERSONALITY_STRICTNESS > 0) {
                    sendMessage('Or do I? %Grin%');
                }

            } else {
                hasBallCrusher = false;
                sendMessage('I guess we have to stick to the good old basic methods then');
                sendMessage('And because you are unable to fetch your toys and didn\'t tell me preemptively');
                sendMessage('We will directly start with some pain');
                sendMessage('A warmup can never be too bad right? %Grin%');

                smallPunishment(true, false);
            }
        }

        let fails = 0;
        let wins = 0;

        for (let round = 0; round < 10; round++) {
            if (round > 0 && isChance(20)) {
                sendMessage(random('Lets do another', 'One more', 'Lets try another one', 'Lets do it once again!'));
            }
            let right = false;

            if(compareMode) {
                const randomIndex = randomInteger(0, 99);
                let randomIndex2 = randomInteger(0, 99);
                while (randomIndex == randomIndex2) {
                    randomIndex2 = randomInteger(0, 99);
                }

                const modelRatings = getVar(VARIABLE_MODEL_RATINGS);
                const firstPictureScore = modelRatings[randomIndex];
                const secondPictureScore = modelRatings[randomIndex2];

                showImage('Images/Spicy//Games/ModelGame/' + (randomIndex + 1) + '.*', 3);
                showImage('Images/Spicy//Games/ModelGame/' + (randomIndex2 + 1) + '.*', 3);

                const answer = sendInput(random('Which image do you think was rated higher by you?', 'So what was the higher rated image?', 'Which of the images was the higher rated one?'));
                while (true) {
                    if (answer.isLike('one', '1', 'first')) {
                        if (firstPictureScore > secondPictureScore) {
                            right = true;
                        }

                        break;
                    } else if (answer.isLike('two', '2', 'second')) {
                        if (firstPictureScore < secondPictureScore) {
                            right = true;
                        }

                        break;
                    } else if (answer.isLike('same', 'similar')) {
                        if (firstPictureScore == secondPictureScore) {
                            right = true;
                        }

                        break;
                    } else {
                        sendMessage('The first or the second one? Or did they share the same score? %Grin%');
                        answer.loop();
                    }
                }
            } else {
                const randomIndex = randomInteger(0, 99);
                const modelRatings = getVar(VARIABLE_MODEL_RATINGS);
                const firstPictureScore = modelRatings[randomIndex];
                lockImages();
                showImage('Images/Spicy//Games/ModelGame/' + (randomIndex + 1) + '.*', 3);

                const answer = sendInput('So try to tell me the rating you gave this picture %SlaveName%?', 'What rating did you give this picture?');
                while (true) {
                    if (answer.isInteger()) {
                        if (firstPictureScore == answer.getInt()) {
                            right = true;
                        }

                        break;
                    } else {
                        sendMessage('Just give me a number between 1 and 10 %SlaveName%...');
                        changeMeritLow(true);
                        answer.loop();
                    }
                }
            }

            unlockImages();

            if (right) {
                sendMessage(random('Correct!', 'Right on', 'Right on!', 'You\'re right', 'You are right!', 'That\'s correct', 'That\'s right') + ' %Grin%');

                //TODO: Think of alternative if chastity is on
                if(!isInChastity()) {

                    startEdging();
                    sendMessage("%LetEdgeFade%");

                    if(wins == 0) {
                        sendMessage('Oops. Did I forget to tell you that you have to edge every time you are right? %Lol%');
                        sendMessage('My bad %Grin%');
                    }
                }

                wins++;
            } else {
                sendMessage(random('Wrong!', 'Not correct', 'Incorrect', 'You\'re wrong', 'You are wrong', 'That\'s incorrect') + ' %Lol%');

                //TODO: Could also punish with other stuff such as anal etc. or edge twice as often

                if (hasBallCrusher) {
                    sendMessage('Aaaand twist %Grin%', 5);
                } else if (getPainLimit() == LIMIT_ASKED_YES) {
                    //Means it is the first time the sub failed
                    if (fails == 0) {
                        //Already handles if the sub has chastity on
                        smallPunishment(true, false);

                        sendMessage('Did you really think you are gonna just play this game without consequences? %Lol%');
                    } else {
                        sendMessage(random('I guess I have to punish you for that again', 'You already know what happens now don\'t you?', 'That\'s gonna hurt', 'Well ') + ' %Lol%');

                        //Already handles if the sub has chastity on
                        smallPunishment(true, false);
                    }
                } else {
                    //TODO: Maybe more creative consequences for non pain slaves such as corner time or other stuff
                    sendMessage('I am gonna subtract some gold from you');
                    addGold(-50);
                    sendMessage('Did you really think that there are no consequences to this game?');
                }

                fails++;
            }
        }

        if(hasBallCrusher) {
            sendMessage('You may remove the ball crusher now %SlaveName%');
            setVar(VARIABLE_IS_BALL_CRUSHER_ON, true);
            sendMessage('Feels good, doesn\'t it?');
        }

        sendMessage('We\'re at the end! %Grin%');
        sendMessage('Hopefully this was as much fun for you as for me');
        sendMessage('I guess it was if you have a good memory %Lol%');
    }
}