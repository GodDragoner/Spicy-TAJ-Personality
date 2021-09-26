//Check for CBT Limit (because we wil bust his balls if he edges)
if (!CBT_LIMIT.isAllowed()) {
    runModuleCategory('Tease');
} else {
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.STROKING)) {
        if (isStroking()) {
            stopStrokingMessage();
        }

        setTempVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS, 1);
        let currentAttempts = getVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS);

        if (!isVar(VARIABLE.ENDURANCE_STROKES_DONE)) {
            sendMessage('I\'m sure by now you\'ve figured out just how demanding I am');
            sendMessage('I\'m going to expect you to do some things that most men would find impossible');
            sendMessage('Well %SlaveName%');
            sendMessage('Your job is going to be to <i>make</i> them possible');
            sendMessage('Because this is about what I want');
            sendMessage('Your limits and abilities mean absolutely fucking nothing');
            sendMessage('That being said...');
            sendMessage('I fully intend to help you increase your stamina');
            sendMessage('Because the better you get at holding back the edge for me');
            sendMessage('The more ache I can build up in that %Cock%');
            sendMessage('And the worse each and every one of those edges will be <img=Images/Spicy/Emotes/evil.gif></img>');
            sendMessage('So I came up with an exercise that I\'m going to put you through regularly');
            sendMessage('You\'re going to give me what I call "endurance strokes"');
            sendMessage('First I\'ll start you off with some very slow strokes');//@RTOn
            sendMessage('Don\'t worry, I play a metronome so you know the exact pace I want you at');//@RTOff
            sendMessage('Over time I\'ll gradually increase the speed of your stroking');
            sendMessage('Until your hand is nothing but a blur on that %Cock%');
            sendMessage('And then you\'ll get to stop and the exercise will be over');
            sendMessage('Just one little thing though <img=Images/Spicy/Emotes/whistle.gif></img>');
            sendMessage('If at any point you <i>do</i> reach the edge while stroking');
            sendMessage('Then you\'re going to tell me');
            sendMessage('And you\'re immediately going to be punished');
            sendMessage('%MyYour% %Balls% and cock to be precise');
            sendMessage('And we\'ll keep going like that until you get through all my strokes without edging');
            sendMessage('So you\'re either going to build your endurance up for me');
            sendMessage('Or I\'m going to fuck up %MyYour% %Cock% until it\'s too broken to edge');
            sendMessage('Either way, I know <i>I\'ll</i> have fun <img=Images/Spicy/Emotes/heart.gif></img>');

        } else {
            if(getVar(VARIABLE.EDGE_WITHOUT_PERMISSION, false)) {
                sendMessage(random('Maybe you need to build up that stamina with some more endurance strokes', 'Instead of punishing you I\'m going to build your stamina with some more endurance strokes',
                    'Maybe some endurance strokes will keep us from having to go through this', 'I guess %MyYour% %Cock% just needs some more training with endurance strokes',
                    'Maybe some more endurance strokes can keep you from edging too soon in the future', 'Maybe you just need to train that %Cock% with some more endurance strokes'));
            } else {
                sendMessage(random('I\'m ready for you to give me some more endurance strokes', 'Let\'s build your stamina with some more endurance strokes',
                    'I hope you\'re ready for another exercise of endurance strokes', 'I think you need to do some more endurance strokes for me', 'You can never have too many endurance strokes',
                    'Let\'s train that %Cock% with some more endurance strokes', 'Let\'s get in some more endurance strokes to build your stamina', 'I feel like making you do some more endurance strokes for me',
                    'Let\'s see how that %Cock% feels about some more endurance strokes') + ' %SlaveName%');
            }

            sendMessage(random('Just remember not to edge', 'You\'d better not edge', 'You\'d better tell me if you edge', 'Don\'t edge unless you want to get hurt', 'Remember that edge = pain',
                'You\'d better do whatever it takes to stay away from the edge', 'Don\'t edge', 'If you edge you\'ll regret it', 'Just remember that edging will be punished with pain',
                'One edge will lead to pain', 'Make sure to hold yourself back', 'Don\'t let yourself get too close', 'Show me you can handle it', 'Your %Cock% better not disappoint me',
                'You\'d better not fail me', 'Don\'t even think about edging') + ' %Wicked%');//@Goto(Endurace Strokes Initialize)
        }

        incrementVar(VARIABLE.ENDURANCE_STROKES_DONE, 1);

        //Initialize
        let enduranceStrokeSpeed = 30;

        setTempVar(VARIABLE.ENDURANCE_STROKES_ACTIVE, true);

        readyForStroking();

        sendMessage(random('Start stroking for me', 'Start stroking nice and slow for me', 'Start stroking that %Cock% for me', 'Start stroking yourself', 'Start stroking yourself for me',
            'Start stroking that %Cock% nice and slow', 'Start stroking yourself slowly') + ' %SlaveName% %Wicked%', 0);
        startStroking(enduranceStrokeSpeed);
        let video = false;
        let failedHistory = createTempIntegerHistory(0, 9);
        while(true) {
            let duration = random(10, 30);
            let failed = false;

            while(duration > 0) {
                sleep(1);
                duration--;

                if(getVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS) !== currentAttempts) {
                    //Failed edged

                    currentAttempts = getVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS);

                    if(video) {
                        stopVideo();
                        unlockImages();
                    }

                    stopStrokingEdgeMessage();
                    stopStroking();

                    punishSmallBustBallsMultiple(Math.max(5, getVar(VARIABLE.SUB_PAIN_TOLERANCE)), 0);

                    //First fail
                    if(currentAttempts == 2) {
                        sendMessage('I told you what would happen if you got close');
                        sendMessage('And now you have to start <i>all</i> over again');
                        sendMessage('But look on the bright side %SlaveName%');
                        sendMessage('Being in pain like that is bound to give %MyYour% %Cock% more stamina <img=Images/Spicy/Emotes/laugh.gif></img>');
                    } else {
                       let result = failedHistory.getRandomAvailableId(6);

                        switch(result) {
                            case 0:
                                sendMessage('You knew what would happen if you edged %SlaveName%');
                                sendMessage('This time I suggest you show more ' + random('endurance', 'restraint', 'control', 'stamina'));
                                sendMessage('Or I\'m going to break you all over again %Wicked%');
                                break;
                            case 1:
                                sendMessage('Now we have to start all over %SlaveName%');
                                sendMessage('At least the pain will give you a little more stamina');
                                sendMessage('Maybe even enough to make it to the end this time %Wicked%');
                                break;
                            case 2:
                                sendMessage('You failed the exercise %SlaveName%');
                                sendMessage('But you\'ll get another chance to get it right');
                                sendMessage('In fact, you\'ll get as many chances as it takes %Wicked%');
                                break;
                            case 3:
                                sendMessage('I don\'t know who\'s more disappointed %SlaveName%');
                                sendMessage('Me or %MyYour% %Cock%');
                                sendMessage('Because now both of us have to go through that all over again %Wicked%');
                                break;
                            case 4:
                                sendMessage('You need to do better %SlaveName%');
                                sendMessage('Otherwise you\'re going to end up right back here');
                                sendMessage('And wouldn\'t that be a shame? %Wicked%');
                                break;
                            case 5:
                                sendMessage('You don\'t get to stop until you show me some endurance %SlaveName%');
                                sendMessage('But don\'t worry');
                                sendMessage('I\'ll repeat this as many times as it takes %Wicked%');
                                break;
                            case 6:
                                sendMessage('I\'m not surprised you failed %SlaveName%');
                                sendMessage('But you\'ll succeed eventually');
                                sendMessage('Because I\'m just going to keep breaking %MyYour% %Balls% until you do %Wicked%');
                                break;
                            case 7:
                                sendMessage('I expect better from you %SlaveName%');
                                sendMessage('You\'d better get it right this time');
                                sendMessage('Or I\'ll just keep hurting %MyYour% %Balls% until they break %Wicked%');
                                break;
                            case 8:
                                sendMessage('Better luck next time %SlaveName%');
                                sendMessage('And by "next time" I mean right now %Wicked%');
                                break;
                            case 9:
                                sendMessage('I can keep this up for the rest of %GeneralTime% %SlaveName%');
                                sendMessage('So you\'re either going to complete this exercise');
                                sendMessage('Or I\'m going to keep breaking %MyYour% %Balls% until you do %Wicked%');
                                break;
                        }

                        failedHistory.addHistoryRun(result);
                    }

                    sendMessage(random('Start stroking for me', 'Start stroking nice and slow for me', 'Start stroking that %Cock% for me', 'Start stroking yourself', 'Start stroking yourself for me',
                        'Start stroking that %Cock% nice and slow', 'Start stroking yourself slowly') + ' %SlaveName% %Wicked%', 0);
                    enduranceStrokeSpeed = 30;
                    startStroking(enduranceStrokeSpeed);
                    failed = true;

                    //Reset
                    video = false;
                }
            }

            if(failed) {
                continue;
            }

            if(video) {
                stopVideo();
                unlockImages();

                //Reset
                video = false;
            }

            //Rest chance
            if(isChance(30 - (getStrictnessForCharacter() + getMood() + 2)*3)) {
                sendMessage(random('Stop stroking', 'Stop stroking for a moment', 'Hands off', 'I\'ll let you rest for a moment', 'Take a quick break', 'I\'ll be nice and give you a quick break', 'Take a quick break', 'Just relax for a moment', 'Stop stroking', 'Stop stroking for a second', 'Take your hands off', 'Hands off and relax for a second', 'Stop', 'Now stop', 'Stop and rest for a moment') + ' %SlaveName% %Wicked%', 0);
                stopStroking();
                sleep(random(10, 20));
                sendMessage('%StartStroking%');
                startStroking(enduranceStrokeSpeed);
            } else {
                //Nothing no rest continue
            }

            if(enduranceStrokeSpeed > 359) {
                //Done

                //First time
                if(getVar(VARIABLE.ENDURANCE_STROKES_DONE) <= 1) {
                    sendMessage('You can stop stroking now', 0);
                    stopStroking();
                    sendMessage('Well done %SlaveName%');
                    sendMessage('You made it through the whole exercise without edging');
                    sendMessage('That\'s the kind of endurance you\'re going to need to keep up with my instructions');
                    sendMessage('Because my instructions are cruel...');
                    sendMessage('Demanding...');
                    sendMessage('Sometimes even brutal');
                    sendMessage('But above all else...');
                    sendMessage('My instructions are absolutely <i>not</i> optional');
                    sendMessage('That\'s why we\'re going to repeat this exercise from time to time');
                    sendMessage('And make sure that %Cock% is properly trained for the utter hell I\'m going to put it through <img=Images/Spicy/Emotes/evil.gif></img>');
                } else {
                    sendMessage(random('Stop stroking', 'You can stop', 'You can stop stroking now', 'All right stop stroking', 'Go ahead and stop stroking'), 0);
                    stopStroking();
                    sendMessage(random('You made it through all the rounds', 'You made it past the last round', 'You managed to make it past the last round', 'You\'ve successfully completed the exercise', 'You passed the exercise') + ' %SlaveName%');
                    sendMessage(random('You should have a little more stamina after that', 'Your endurance has surely improved after that', 'I\'m fairly sure your endurance has improved', '%MyYour% %Cock% can probably take a little more abuse now', '%MyYour% %Cock% should benefit from that training'));
                    sendMessage(random('But there\'s only one way to find out', 'But I suppose we\'ll find out in time', 'At least you\'d better hope so', 'If not, you\'re going to be in serious trouble', 'You\'re going to fucking need all the help you can get') + ' %Wicked%');
                }
                break;
            }

            enduranceStrokeSpeed += 30;

            let randomFirst = random('Speed up', 'Speed up a little', 'Keep going', 'Keep going', 'Stroke a little faster', 'Stroke even faster', 'Faster', 'Hold it back',
                'Keep that cum in %MyYour% %Balls%', 'Hold back that edge', 'You\'d better hold it back', 'You can do it');

            switch(randomInteger(0, 6)) {
                case 0:
                    sendMessage(randomFirst + ' ' + random('for me %SlaveName% %Wicked%', '%SlaveName% %Wicked%'), 0);
                    break;
                case 1:
                    sendMessage(randomFirst + ' ' + random('for my %Boobs%', 'while looking at my %Boobs%', 'while staring at my %Boobs%', 'while my %Boobs% drive you crazy') + ' %SlaveName% %Wicked%', 0);
                    showDommeTaggedImageForPictureTag(PictureTag.BOOBS);
                    break;
                case 2:
                    sendMessage(randomFirst + ' ' + random('for my ass', 'while looking at my ass', 'while staring at my ass', 'while my ass drives you crazy') + ' %SlaveName% %Wicked%', 0);
                    showDommeTaggedImageForPictureTag(PictureTag.ASS);
                    break;
                case 3:
                    sendMessage(randomFirst + ' ' + random('for this picture', 'while looking at this picture', 'for this picture I found on your computer','while looking at this picture you saved', '') + ' %SlaveName% %Wicked%', 0);
                    showTeaseImage();
                    break;
                case 4:
                    sendMessage(randomFirst + ' ' + random('while imagining this blowjob %SlaveName% %Wicked%', '%SlaveName% %Wicked%', 'while you think about this mouth around %MyYour% %Cock%', 'while you think about getting sucked like this'), 0);
                    showCategoryImage('BLOWJOB');
                    break;
                case 5:
                    sendMessage(randomFirst + ' ' + random('for me ', '') + '%SlaveName% %Wicked%', 0);
                    showCategoryVideo(getRandomMediaCategory());
                    video = true;
                    break;
                case 6:
                    sendMessage(randomFirst + ' ' + random('for this hentai picture ', '', 'for this cartoon porn I keep finding ', 'for this fucked up picture ') + '%SlaveName% %Wicked%', 0);
                    showCategoryImage('HENTAI');
                    break;
            }

            addStrokingBPM(30);
        }

        setTempVar(VARIABLE.ENDURANCE_STROKES_ACTIVE, false);
        //@MetronomeOn(#Var[EnduranceStrokeSpeed]) @Wait(#Random(10, 30)) @Goto(Endurance Strokes Loop) @EdgeMode(Goto, Endurance Fail Ruin)
    }
}
