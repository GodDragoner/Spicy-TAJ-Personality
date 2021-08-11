{
    if (tryRunLinkFetchId()) {
        if (VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage('You know, if we were having sex I would never tell you to stop');
            sendMessage('I mean, I would never deny myself the pleasure');
            sendMessage('That is, assuming for a moment that having sex with you would be pleasurable...');
            sendMessage('With that tiny little cock of yours...');
            sendMessage('That\'s a big assumption actually %Lol%');

            let howPathetic = false;
            let staggering = false;

            //State unknown
            if (!isVar(VARIABLE.SUB_IS_VIRGIN)) {
                if (sendYesOrNoQuestion('Speaking of which, you\'re not a virgin are you?')) {
                    sendMessage('Oh wow... %Lol%');
                    setVar(VARIABLE.SUB_IS_VIRGIN, true);
                    sendMessage('I can\'t believe you\'ve never had sex');
                    sendMessage('Actually I <i>can</i> believe it and it should probably stay that way');
                    sendMessage('You\'re never going to last long enough to please a woman anyway');
                    sendMessage('Just take a moment to think about how pathetic you really are, %SlaveName%');
                    howPathetic = true;
                } else {
                    sendMessage('Well that\'s something I guess');
                    setVar(VARIABLE.SUB_IS_VIRGIN, false);
                    staggering = true;
                }
            } else {
                //Yes or no virgin
                if (getVar(VARIABLE.SUB_IS_VIRGIN, false)) {
                    sendMessage('Given that you\'re a virgin, how could anyone know');
                    sendMessage('You\'ve never done it and you probably never will');
                    sendMessage('Nobody even wants to have sex with you, %SlaveName%');
                    sendMessage('Oh, maybe some day a friend will feel so bad for you that she\'ll have pity sex with you');
                    sendMessage('She\'ll let you poke her with that %Cock% of yours');
                    sendMessage('Doing her best not to laugh at how hilariously bad you are in bed');
                    sendMessage('She\'ll try to assure you that it\'s not really that small, and you will know it\'s a lie');
                    sendMessage('It will be the most awkward and pathetic thing ever');
                    sendMessage('Just take a moment to think about how pathetic you really are, %SlaveName%');
                    howPathetic = true;
                } else {
                    staggering = true;
                }
            }

            if(staggering) {
                sendMessage('Still it\'s kind of staggering that you\'ve had any sex at all');
                sendMessage('You probably should have stayed a virgin, if only to save yourself the embarrassment');

                if (sendYesOrNoQuestion('Have you had sex in the past month?')) {
                    sendMessage('Wow that\'s amazing, I genuinely did not expect that');
                    sendMessage('All the more interesting that you\'d need me to help you get off now');
                    sendMessage('You could be having sex, apparently... yet here you are');
                    sendMessage('Don\'t get me wrong, I\'m glad you are %EmoteHappy%');
                    sendMessage('But just take a moment to realize how pathetic that is, %SlaveName%');
                    howPathetic = true;
                } else {
                    sendMessage('I didn\'t think so %lol%');

                    if (sendYesOrNoQuestion('The last time you did it was probably more than a year ago, right?')) {
                        sendMessage('Aww I bet you can hardly remember what it felt like ');
                        sendMessage('Just take a moment to realize how pathetic that is, %SlaveName%');
                        sendMessage('It\'s okay though, sex isn\'t the most important thing ever');
                        sendMessage('Not like it\'s what keeps mankind alive');
                        sendMessage('Oh wait, it literally is! %Lol%');
                    } else {
                        sendMessage('So actually it\'s not that long ago... I\'m surprised, %SlaveName%');
                        sendMessage('You could be having sex, apparently... yet here you are');
                        sendMessage('Don\'t get me wrong, I\'m glad you are %EmoteHappy%');
                        sendMessage('But just take a moment to realize how pathetic that is, %SlaveName%');
                        howPathetic = true;
                    }
                }
            }

            if(howPathetic) {
                sendMessage('There are people out there having sex and enjoying it, enjoying each other\'s bodies');
                sendMessage('That\'s not a myth, it\'s real');
                sendMessage('Yet here you are, on your own, %JerkingOff%');
                sendMessage('Coming to me like an addicted little pervert to kneel and debase yourself');
                sendMessage('You\'re lucky I find that so amusing');
                sendMessage('Most women would simply turn around and walk away');
                sendMessage('They wouldn\'t want anything to do with a worm like you');
                sendMessage('Well at least, until someone would explain to them the advantages of owning a toy like that');
                sendMessage('Who will grovel and beg for more');
                sendMessage('Who will take any humiliation gladly and eagerly');
                sendMessage('Those women don\'t know what they\'re missing');
            }
        }
        //No humiliation
        else {
            //State unknown
            if (!isVar(VARIABLE.SUB_IS_VIRGIN)) {
                if (sendYesOrNoQuestion('Can I ask you a personal question %SlaveName%?')) {
                    sendMessage('It\'s something I\'ve been wanting to know');
                } else {
                    sendMessage('I\'m going to ask anyway, I\'m just too damn curious I guess');
                }

                if (sendYesOrNoQuestion('You\'re not still a virgin are you?')) {
                    sendMessage('Aww Really? That\'s okay though %SlaveName% %EmoteHappy%');
                    setVar(VARIABLE.SUB_IS_VIRGIN, true);
                    sendMessage('I\'m sure it will be fine though');
                    sendMessage('I\'m sure you\'ll meet someone sooner or later %EmoteHappy%');
                    sendMessage('Some people are late bloomers, there\'s no shame in that');
                } else {
                    setVar(VARIABLE.SUB_IS_VIRGIN, false);
                    sendMessage('Not that that would be a problem of course...');
                    sendMessage('I am glad that you\'ve been able to share this unique experience with someone');
                    sendMessage('I hope you enjoyed it %EmoteHappy%');
                }
            } else {
                //Yes or no virgin
                if (getVar(VARIABLE.SUB_IS_VIRGIN, false)) {
                    sendMessage('Don\'t blame yourself for still being a virgin %SlaveName% %EmoteSad%');
                    sendMessage('I\'m sure it will be fine');
                    sendMessage('I\'m sure you\'ll meet someone sooner or later %EmoteHappy%');
                    sendMessage('Some people are late bloomers, there\'s no shame in that');
                } else {
                    sendMessage('Knowing that you aren\'t a virgin makes me happy %EmoteHappy%');
                    sendMessage('Because I am glad that you\'ve been able to share this unique experience with someone');
                    sendMessage('I hope you enjoyed it %EmoteHappy%');
                }
            }
        }
        if (VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage('Look at %MyYour% %Cock%');
            sendMessage('Isn\'t it cute?');
            sendMessage('Look down at that worthless bit of meat hanging between your legs %Wicked%');
            sendMessage('Remember: It\'s not a dick %Lol%');
            sendMessage('Dick\'s are big, luscious objects of desire that women crave to have thrust inside them');
            sendMessage('What you have could never pleasure a woman');

            if (getVar(VARIABLE.SUB_IS_VIRGIN, false)) {

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