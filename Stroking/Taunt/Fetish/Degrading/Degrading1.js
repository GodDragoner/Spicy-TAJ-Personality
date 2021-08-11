{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            sendMessage('Look at you, %JerkingOff% like a loser');
            sendMessage('It\'s no great mystery why you\'re still a virgin is it...');
            sendMessage('You\'re just not boyfriend material');
            sendMessage('No girl is going to look at you and think, I want that');
            sendMessage('She doesn\'t even have to see your tiny %Cock% to reach that conclusion');
            sendMessage('You have <i>pathetic loser</i> written all over yourself');
        } else {
            if (edgingDisabled) {
                //Check if we are stroking rn
                let pauseStroke = pauseStroking();

                sendMessage('That\'s what you get for being a useless beta male');
                sendMessage('Beta males don\'t deserve to masturbate and cum whenever they want to');
                sendMessage('I now you want to, but that\'s not how the world works');
                sendMessage('Alpha males, they get to fuck pussy and cum whenever they want');
                sendMessage('While you and your fellow beta males get to hump their hands and cum when a Goddess allows it');
                sendMessage('So you\'ll just have to wait and see if I\'ll let you cum %GeneralTime%');

                if (pauseStroke) {
                    resumeStroking(pauseStroke);
                }
            } else {
                startEdging(getEdgeHoldSeconds());
                sendMessage('That seems to have gotten your attention %Smile%');
                sendMessage('You were so close to an orgasm and yet it\'s so far away..');

                if (hasCompleteOrgasmControl() && isChance(50)) {
                    if (!canOrgasmToday()) {
                        sendMessage('As you know, I\'m not going to let you cum %GeneralTime%')
                    } else {
                        sendMessage('That\'s as close as you\'re going to get %GeneralTime% though');
                        sendMessage('Because %SlaveName%...');
                        sendMessage('I\'m not going to let you cum %GeneralTime%');
                        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_DENIED_RESTRICTED);
                    }

                    let answer = sendInput('You know why that is, don\'t you?', 10);

                    let guessRight = false;
                    while (true) {
                        if (answer.isTimeout()) {
                            break;
                        } else if (answer.isLike('yes')) {
                            sendMessage('Oh alright, so why is it that you don\'t get to cum?');
                            answer.loop();
                        } else if (answer.isLike('no', 'don\'t know', 'not sure', 'not know')) {
                            sendMessage('Then let me explain it to you');
                            break;
                        } else if (answer.isLike('bad', 'disobedient', 'disobeyed', 'punished', 'punishment', 'punish')) {
                            sendMessage('Good guess but no, that\'s not it');
                            break;
                        } else if (answer.isLike('beta', 'loser', 'don\'t deserve', 'punished', 'punishment', 'punish')) {
                            sendMessage('Yes! %EmoteHappy%');
                            guessRight = true;
                            break;
                        } else {
                            sendMessage('Good guess but no, that\'s not it');
                            break;
                        }
                    }

                    if(!guessRight) {
                        sendMessage('The reason you don\'t get to cum is because you\'re a beta male');
                    }

                    sendMessage('Beta males simply don\'t deserve to cum whenever they want to');
                    sendMessage('I now you want to, but that\'s not how the world works');
                    sendMessage('Alpha males, they get to fuck pussy and cum whenever they want');
                    sendMessage('While you and your fellow beta males get to hump their hands and cum when a Goddess allows it');
                    sendMessage('Today I will not allow it, %SlaveName%');
                } else {
                    sendMessage('That\'s what you get for being a useless beta male');
                    sendMessage('Beta males don\'t deserve to masturbate and cum whenever they want to');
                    sendMessage('I now you want to, but that\'s not how the world works');
                    sendMessage('Alpha males, they get to fuck pussy and cum whenever they want');
                    sendMessage('While you and your fellow beta males get to hump their hands and cum when a Goddess allows it');
                    sendMessage('So you\'ll just have to wait and see if I\'ll let you cum %GeneralTime%');
                }
            }

        }
    }
}