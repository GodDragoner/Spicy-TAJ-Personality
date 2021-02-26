{
    if (tryRunLinkFetchId()) {
        if (CUCKOLD_LIMIT.isHardLimit() || CUCKOLD_LIMIT.isAllowed()) {

            if(getVar(VARIABLE.SUB_PARTNER_CUCKOLD, false)) {
                sendMessage('I was wondering, %SlaveName%');
                sendMessage('Given that you\'re here with me, %JerkingOff%');

                if(sendYesOrNoQuestion('Does that mean ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' is out getting laid?')) {
                    sendMessage('Oh wow');
                    sendMessage('Well then I suppose you both get what you deserve %GeneralTime% %Lol%');

                    if(CBT_LIMIT.isAllowed()) {
                        smallCBTPunishment(true, true);
                        sendMessage('Meaning that while she gets awesome sex, you get to hurt %MyYour% %Balls% and %Cock%');
                    }

                    sendMessage('She is one lucky lady to have you, %SlaveName%');
                    sendMessage('And I\'m sure even more so the other way around %Grin%')
                } else {
                    sendMessage('Oh okay %EmoteHappy%');

                    if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                        sendMessage('Well, I\'m sure she gets to have plenty of sex with real men');
                    } else {
                        sendMessage('Well, I\'m sure she gets to have plenty of sex with other men');
                    }

                    sendMessage('Probably needs a break from all that from time to time %Grin%');
                }
            } else {
                findLinkAndRun();
            }
        } else {
            if (sendYesOrNoQuestion('Do you ever fantasize about being cuckolded?')) {
                sendMessage('Of course you do');

                if (getVar(VARIABLE.SUB_IS_MARRIED, false) || getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false)) {
                    sendMessage('Maybe it\'s not even a fantasy for you...');

                    if (sendYesOrNoQuestion("Does " + getVar(VARIABLE.SUB_PARTNER_NAME) + " get to have sex with other people?")) {
                        sendMessage('Oh my %Lol%');
                        sendMessage('You never cease to amaze me, %SlaveNameSmiley%');
                        sendMessage('You\'re a cuckold in the truest sense of the word');
                        setVar(VARIABLE.SUB_PARTNER_CUCKOLD, true);

                        if (sendYesOrNoQuestion('Is ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' with you right now?')) {
                            sendMessage('That\'s the only way you can be sure she\'s not fucking some other guy I guess...');
                        } else {
                            sendYesOrNoQuestion('She\'s *probably* not having sex with someone else right now')
                        }

                        sendMessage('Or maybe she is! %Lol%');
                        sendMessage('That would be so fucked up, although I guess it turns you on...');

                        if(getVar(VARIABLE.SUB_IS_MARRIED, false)) {
                            sendMessage('At least your wife can get fucked properly');
                        } else {
                            sendMessage('At least your girlfriend can get fucked properly');
                        }

                        sendMessage('The fact that you let her alone is proof that you can\'t possibly be enough for her');
                        sendMessage('Instead you\'re stuck %JerkingOff% to me');
                        sendMessage('It must hurt to know that you\'ll only ever be a cuckold');
                        sendMessage('That you could never please ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' the way her lovers can');
                    } else {
                        sendMessage('That\'s too bad for her...');

                        if (sendYesOrNoQuestion('Does she even know that you fantasize about being cuckolded?')) {
                            sendMessage('Then she should probably make better use of that fact %Grin%');
                        } else {
                            sendMessage(' She\'d probably be very interested in finding out %Lol%');
                        }

                        sendMessage('Although it might be better if it stayed a secret, I get that');
                    }
                }
            } else {
                sendMessage('Oh come on, of course you do');
            }

            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                sendMessage('A loser like you should get cuckolded');
            } else {
                sendMessage('Someone like you should get cuckolded');
            }

            sendMessage('How else is your partner and me going to get fucked properly');

            CUCKOLD_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
        }
    }
}