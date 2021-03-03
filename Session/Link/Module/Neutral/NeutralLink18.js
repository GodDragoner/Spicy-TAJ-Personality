{
    if (tryRunLinkFetchId()) {
        if (hasChastityCage()) {
            if (!RULE_DOMME_KEYHOLDER.isActive()) {
                if(shouldIntroduceNewRule(RULE_DOMME_KEYHOLDER)) {
                    if (isVar(VARIABLE.ASKED_FOR_KEYHOLDER)) {
                        startLongTermChastityIntro();
                    } else {
                        sendMessage('You know %SlaveName%...');
                        sendMessage('Sometimes I feel like we are missing out on stuff');
                        sendMessage('Like I have so many ideas but so little time to put you through them');
                        sendMessage('And sometimes I think about what you do outside of sessions');
                        sendMessage('Whether you jerk off, pleasure yourself');
                        sendMessage('Which is something I can\'t really deny you currently');

                        if (sendYesOrNoQuestion('Tell me. Have you ever jerked off in between sessions?')) {
                            sendMessage('%EmoteSad%');
                            sendMessage('Well then I guess that\'s only natural');
                            changeMeritLow(true);
                            sendMessage('Still it\'s a bit frustrating for me');

                            if (sendYesOrNoQuestion('It kinda defeats the purpose doesn\'t it?')) {
                                sendMessage('Yes, yes it does');
                                sendMessage('And I figure you know that pretty well %Lol%');
                            } else {
                                sendMessage('No? How so?');
                            }

                            sendMessage('Me teasing you and trying to make you desperate...');
                            sendMessage('Denying you to build your obedience');
                            sendMessage('To put you into your place, where you belong...');
                            sendMessage('Eager to please and at my feet');
                            sendMessage('But then you are breaking all of that by just jerking off?');
                            sendMessage('Not really that expedient if you ask me');
                            sendMessage('Maybe we should try to change that...');
                        } else {
                            changeMeritMedium(false);
                            sendMessage('Oh really?');
                            sendMessage('That kinda makes me happy %EmoteHappy%');
                            sendMessage('You being obedient even outside of sessions');
                            sendMessage('Well seems like you actually are a little obedient puppy dog %Grin%');
                        }

                        startLongTermChastityIntro();
                    }
                } else {
                    sendMessage('Maybe in the future I get to be your keyholder');
                    sendMessage('You entrusting me with the keys to your sexuality, your cage that is, would mean a lot to me');
                    sendMessage('Allowing me to completely control your sexual drive');
                    sendMessage('Getting you more and more frustrated');
                    sendMessage('Whilst your eagerness to please me increases');
                    sendMessage('Denial is such a great thing %EmoteHappy%');
                    sendMessage('Not only that...');
                    sendMessage('It also shows me how much you trust me');
                    sendMessage('And trust is the most important thing in such a relationship %SlaveName%');
                    sendMessage('Entrusting me with control over your sexuality');
                    sendMessage('I wouldn\'t abuse it');
                    sendMessage('...');
                    sendMessage('Okay maybe I would abuse it a bit %Grin%');
                    sendMessage('Not that I would ever abuse it in a serious situation');
                    sendMessage('But I mean apart from that it is part of my job isn\'t it?');
                    sendMessage('Driving you mad, showing you your place');
                    sendMessage('And also being a bit unfair');
                    sendMessage('Unpredictable');
                    sendMessage('Leaving you guessing, desperate, begging and drooling');
                    sendMessage('You\'d be constantly reminded of my power over you by that cage restricting your access');
                    sendMessage('And there would be absolutely nothing you could change about that');

                    if(sendYesOrNoQuestion('Do you like that thought %SlaveName%?')) {
                        sendMessage('%Grin%');
                        setTempVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, true);
                        startLongTermChastityIntro();
                        delVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER);
                    } else {
                        sendMessage('Maybe you need some more time to consider it');
                        sendMessage('I get it...');
                        sendMessage('It\'s a scary thing to commit to');
                        sendMessage('But it\'s worth it in the long run');
                    }
                }
            } else {
                sendMessage('You making me your keyholder is probably one of my favorite things');
            }
        } else {
            if (sendYesOrNoQuestion('Do you ever wonder what it\'s like to be locked in chastity %SlaveName%?')) {
                sendMessage('Well you aren\'t the only one with that thought');
            } else {
                sendMessage('%EmoteSad%');
            }

            sendMessage('I do wonder what it\'ll be like locking you up');
            sendMessage('Being the owner of your sexuality');
            sendMessage('Deciding when and how you can pleasure yourself even outside of sessions');
            sendMessage('%Moan%');
            sendMessage('I love the thought of me knowing you can\'t release all that built up pleasure without contacting me first %Grin%');
            sendMessage('Seeing %MyYour% %Cock% trying to fight out of its prison');
            sendMessage('And me just looking at it, laughing and probably saying NO %EmoteHappy%');
            sendMessage('And you knowing that\'s the only way this is supposed to be');
            sendMessage('Maybe one day you\'ll be up for it and get me a nice cage to lock %MyYour% cock up in');
            //QUALITY: Really buying promises
        }
    }
}