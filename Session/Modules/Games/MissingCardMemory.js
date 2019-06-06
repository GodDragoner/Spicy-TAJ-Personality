function startMissingCardMemory(gameType) {
    sendMessage('%SlaveName%');
    sendMessage('I have a cool memory game for us');
    sendMessage('I will show you 12 out of 13 different cards from a deck of poker cards');
    sendMessage('For example I might show you ace(1), two(2), three(3), four(4), five(5), seven(7), eight(8), nine(9), ten(10), knight(11), queen(12) and king(13)');
    //TODO: show example
    sendMessage('In this example the six was missing');
    sendMessage('It doesn\'t matter whether the card is club, heart, spade or diamond');
    sendMessage('Only the card value is important for now');
    sendMessage('When I am done showing you the 12 cards you have 5 seconds to reply with the correct answer');

    const totalMode = isChance(50) && gameType === GAME_EDGE;
    const maxLosses = 7;

    //Only used in ball crusher mode
    let turnsPerLoss = -1;

    //TODO: Punish mode instead of gold and edges?
    if (totalMode) {
        sendMessage('Be correct 7 times and you will earn 150 gold');
        sendMessage('Be wrong 7 times and you will have to edge 15 times %Grin%');
    } else {
        switch (gameType) {
            case GAME_EDGE:
                sendMessage('If you are right you will earn 20 gold');
                sendMessage('If you are wrong you will have to edge twice %Grin%');
                break;
            case GAME_INFLATABLE_PLUG:
                sendMessage('If you are right you will earn 20 gold');
                sendMessage('If you are wrong you will have to pump your plug 3 times %Grin%');
                break;
            case GAME_BALL_CRUSHER:
                turnsPerLoss = Math.round((getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS) + getMood() * 1.5) / maxLosses);
                sendMessage('If you are right you will earn 20 gold');
                sendMessage('If you are wrong you will have to twist each screw ' + turnsPerLoss + ' half-rounds %Grin%');
                break;
        }
    }

    sendMessage('Let\'s not waste anymore time and start %EmoteHappy%');

    const answerDict = {};
    answerDict['ace'] = 1;
    answerDict['two'] = 2;
    answerDict['three'] = 3;
    answerDict['four'] = 4;
    answerDict['five'] = 5;
    answerDict['six'] = 6;
    answerDict['seven'] = 7;
    answerDict['eight'] = 8;
    answerDict['nine'] = 9;
    answerDict['ten'] = 10;
    answerDict['knight'] = 11;
    answerDict['queen'] = 12;
    answerDict['king'] = 13;

    let wins = 0;
    let loses = 0;
    while (wins < 7 && loses < maxLosses) {
        let numberMissing = randomInteger(1, 13);
        let numberArray = [];

        for (let number = 1; number < 14; number++) {
            if (number != numberMissing) {
                numberArray[number - 1] = number;
            }
        }

        shuffle(numberArray);

        for (let index = 0; index < numberArray.length; index++) {
            showImage('Images/Spicy/Deck/' + numberArray[index] + '/*.jpg', 1);
        }


        let rightAnswer = false;
        const answer = sendInput('So which card was missing?', 5, 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'knight', 'queen', 'king');
        while (true) {
            if (answer.isTimeout()) {
                sendMessage('Too slow %Grin%');
                break;
            } else if (answer.isInteger()) {
                rightAnswer = answer.getInt() == numberMissing;
                break;
            } else if (answer.getAnswer().toLowerCase() in answerDict) {
                rightAnswer = answerDict[answer.getAnswer().toLowerCase()] == numberMissing;
                break;
            } else {
                sendMessage('Which card was missing?');
                answer.loop();
            }
        }

        answer.clearOptions();

        if (rightAnswer) {
            wins++;
            sendMessage(random('Correct!', 'Right on', 'Right on!', 'You\'re right', 'You are right!', 'That\'s correct', 'That\'s right') + ' %Grin%');

            if (!totalMode) {
                sendMessage('That\'s 20 gold for you %EmoteHappy%');
                addGold(20);
            }
        } else {
            loses++;

            //Only send this if this wasn't a timeout
            if (!answer.isTimeout()) {
                sendMessage(random('Wrong!', 'Not correct', 'Incorrect', 'You\'re wrong', 'You are wrong', 'That\'s incorrect') + ' %Lol%');
            }

            if (!totalMode) {
                switch (gameType) {
                    case GAME_EDGE:
                        sendMessage('That\'s 2 more edges for you %Grin%');

                        startEdging();
                        sendMessage("%LetEdgeFade%", randomInteger(5, 10));

                        startEdging();
                        sendMessage("%LetEdgeFade%", randomInteger(5, 10));
                        break;
                    case GAME_INFLATABLE_PLUG:
                        pumpInflatablePlug(3);
                        sendMessage('Go ahead and pump your plug 3 times %Grin%', 10);
                        break;
                    case GAME_BALL_CRUSHER:
                        sendMessage('Go ahead and turn each screw ' + turnsPerLoss + ' half-rounds %Grin%', 10);
                        break;
                }
            }
        }

        if (wins < 7 && loses < 7) {
            sendMessage('Be prepared for the next set of cards %SlaveName%', 3);
        }
    }

    if (totalMode) {
        if (wins == 7) {
            sendMessage('Wow, you really did it!');
            sendMessage('You won 7 times and thus you deserve your well earned 150 gold');
            addGold(150);
        } else {
            sendMessage('%Lol%');
            sendMessage('You failed %SlaveName%');
            sendMessage('Seems like we have to train your memory in the future');
            sendMessage('But first you owe me 15 edges %Grin%');
            for (let x = 0; x < 15; x++) {
                startEdging();
                sendMessage("%LetEdgeFade%", randomInteger(5, 10));
            }
        }
    } else {
        if (wins == 7) {
            sendMessage('You made it!');
            sendMessage('You\'ve won a total of 7 games and that\'s enough for now');
            sendMessage('Rest %SlaveName%');
        } else {
            sendMessage('Well...');
            sendMessage('You\'ve failed ' + maxLosses + ' times');
            sendMessage('I guess that is enough for now...');

            switch (gameType) {
                case GAME_EDGE:
                    sendMessage('But because you\'ve disappointed your %DomHonorific% you will edge 3 mores time for me %Grin%');

                    startEdging();
                    sendMessage("%LetEdgeFade%", randomInteger(5, 10));

                    startEdging();
                    sendMessage("%LetEdgeFade%", randomInteger(5, 10));

                    startEdging();
                    sendMessage("%LetEdgeFade%", randomInteger(5, 10));

                    sendMessage('Rest %SlaveName%', 5);
                    sendMessage('You will be happy about that rest you\'ve just had very soon %Lol%');
                    break;
                case GAME_INFLATABLE_PLUG:
                    sendMessage('But because you\'ve disappointed your %DomHonorific% you will not be allowed to deflate it yet %Lol%');
                    startTimePassTasks(5, true);
                    break;
                case GAME_BALL_CRUSHER:
                    sendMessage('But because you\'ve disappointed your %DomHonorific% you will not be allowed to relief the pressure just jet %Lol%');
                    startTimePassTasks(5, true);

                    //sendMessage('If you are wrong you will have to pump your plug 3 times %Grin%');
                    break;
            }

        }
    }
}