{
    if (tryRunLinkFetchId()) {
        if (FEET_LIMIT.isHardLimit() || FEET_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            if(!isVar(VARIABLE.SUB_LEG_MAN)) {
                sendMessage('I wondered %SlaveName%...');

                let answer = sendInput("Are you a leg man?");

                while (true) {
                    if (answer.isLike("yes")) {
                        sendMessage("Yeah I thought so %Lol%");
                        setVar(VARIABLE.SUB_LEG_MAN, true);

                        sendMessage('But then again, what part of a woman isn\'t sexy, right?');
                        sendMessage('I have to agree about legs though');
                        sendMessage('I love smooth long legs %EmoteHappy%');
                        sendMessage('Imagine worshipping my legs');
                        sendMessage('All the way from her ankles up to her thighs');
                        sendMessage('It\'s good to know you like legs as much as I do %Grin%');

                        if (sendYesOrNoQuestion('Do you have a foot fetish too?')) {
                            sendMessage('I though you might %Lol%');
                            sendMessage('Legs, feet, ankles, calves...');
                            sendMessage('All those gorgeous curves %Moan%');
                        } else {
                            sendMessage('Well, that\'s odd... ');
                            sendMessage('So you like legs, but not feet');
                            sendMessage('But then again, who isn\'t a little weird %EmoteHappy%');

                            sendMessage('I think I might be able to slowly get you into it though');
                            sendMessage('You don\'t know how effective conditioning can be');
                            sendMessage('Oh wait, I am sharing my tricks with you %Lol%');
                            sendMessage('I promise you sooner or later you will lust for women\'s feet %Grin%');
                        }

                        //Should be never asked in this case because we only do this once at the beginning
                        FEET_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                        break;
                    } else if (answer.isLike("no")) {
                        setVar(VARIABLE.SUB_LEG_MAN, false);

                        sendMessage("Oh come on, really? Legs are so so sexy %Laugh%");

                        //QUALITY: Leg image (extend categories of TAJ?)
                        sendMessage('I love smooth long legs %EmoteHappy%');
                        sendMessage('And I would have thought that you would too');
                        sendMessage('I mean, you\'re submissive');
                        sendMessage('So your rightful place is at a woman\'s feet');
                        sendMessage('Worshipping her legs would seem to be the natural thing for you');

                        if (sendYesOrNoQuestion('Do you at least have a foot fetish?')) {
                            sendMessage('Oh, now I get it');
                            sendMessage('You are so submissive...');
                            sendMessage('You want to worship as closely to the floor as possible');
                            sendMessage('Your place is not so much at my feet');
                            sendMessage('As under them');
                        } else {
                            sendMessage('Well, that makes sense then...');

                            sendMessage('But I think I might be able to slowly get you into it');
                            sendMessage('You don\'t know how effective conditioning can be');
                            sendMessage('Oh wait, I am sharing my tricks with you %Lol%');
                            sendMessage('I promise you sooner or later you will lust for women\'s feet %Grin%');
                        }

                        //Should be never asked in this case because we only do this once at the beginning
                        FEET_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                        break;
                    } else if (answer.isLike("dont understand", "do you mean", "not understand", "explain", "what's that", "what is", "not sure", "dont know")) {
                        sendMessage('Well, do you think legs are sexy?', 0);
                        answer.loop();
                    } else {
                        sendMessage('%YesOrNo%', 0);
                        answer.loop();
                    }
                }
            } else {
                sendMessage('My feet get so tired and achy after spending an entire day at work with high heels on');

                let answer = sendInput('I could really use someone to worship them but I don\'t know anyone willing to do it %EmoteSad%', 7);

                if(!answer.isTimeout()) {
                    if(answer.isLike('me', 'I', 'would do', 'will do')) {
                        FEET_LIMIT.askForLimitChange(LIMIT_ADDRESS.SUB);
                    } else {
                        FEET_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                    }
                } else {
                    FEET_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                }
            }
        }
    }
}