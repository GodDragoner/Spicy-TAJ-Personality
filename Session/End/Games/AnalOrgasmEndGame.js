{
    let endGame = registerEndGame(END_GAME_ANAL_ORGASM);
    endGame.run = function () {
        //Double the points

        //TODO: Restore session time and these lines!
        distributeOrgasmPoints();
        distributeOrgasmPoints();

        if (!SKIP_END_GAME) {
            run("Session/Link/End/DecideEndLink.js");

            if (!isInChastity()) {
                if (!RULE_DOMME_KEYHOLDER.isActive()) {
                    sendMessage('Since you aren\'t in chastity right now and your are only allowed to cum inside chastity');
                    sendMessage('I\'ll let you gamble');
                    sendMessage('You can let me lock you up and maybe get a chance to cum');
                    sendMessage('Or you can not let me lock you up and get denied right now and hope I won\'t do so later %Grin%');

                    let answer = sendInput('So what is it gonna be?', 'lock', 'deny');

                    while (true) {
                        if (answer.isLike('lock')) {
                            sendMessage('Good choice %Grin%');
                            lockChastityCage();
                            break;
                        } else if (answer.isLike('deny')) {
                            sendMessage('Gambling aren\'t we?');
                            break;
                        } else {
                            sendMessage('Lock or deny %SlaveName%?', 0);
                            answer.loop();
                        }
                    }
                } else {
                    if (isChance(50)) {
                        sendAlreadyKnowWhatsNext('chastity');
                    } else {
                        sendMessage('Since you are only allowed to cum inside chastity...');
                        sendMessage('I\'ll have to sadly lock you up');
                        sendMessage('How sad, isn\'t it? %Lol%');
                        sendMessage('As if you\'d leave without being locked anyway %Grin%');
                    }

                    lockChastityCage();
                }
            }

            //Only run game if sub is in chastity
            if (isInChastity()) {
                let skipOrgasm = false;

                //Check if we are supposed to skip the orgasm roll
                if (!skipOrgasm) {
                    //Hard limit forces orgasm
                    if (isVar(VARIABLE.DENIAL_HARD_LIMIT_ORGASM_TODAY)) {
                        let orgasmCategory = decideOrgasm(true);
                        let orgasmType = decideAnalOrgasmType();
                    } else {
                        sendDebugMessage('Current orgasm points ' + getVar(VARIABLE.ORGASM_POINTS) + '/' + getVar(VARIABLE.REQUIRED_ORGASM_POINTS));
                        if (getVar(VARIABLE.ORGASM_POINTS) >= getVar(VARIABLE.REQUIRED_ORGASM_POINTS)) {
                            let ranOrgasm = checkForOrgasmSpecial();

                            if (!ranOrgasm) {
                                let analOrgasmType = decideAnalOrgasmType();
                                let orgasmCategory = decideOrgasm(false);

                                if (orgasmCategory !== ORGASM_CATEGORY_DENIED) {
                                    getAnalOrgasmInstructions(analOrgasmType, orgasmCategory);
                                } else {
                                    runOrgasmCategory(ORGASM_CATEGORY_DENIED);
                                }
                            }
                        } else {
                            runOrgasmCategory(ORGASM_CATEGORY_DENIED);
                        }
                    }
                }
            } else {
                //No chastity - no orgasm
            }
        }
    };

    endGame.sendIntroduction = function () {
        sendMessage('%SlaveName%');
        sendMessage('Have a guess %Grin%');
        let answer = sendInput('What are you still missing on your way to a sissy slut?');

        if (answer.isLike('cum', 'anal orgasm', 'sissygasm')) {
            sendMessage('Exactly %Grin%');
        } else {
            sendMessage('Maybe, but I am thinking about something different right now %Grin%');
        }

        sendMessage('You spurting that cum all over the place');
        sendMessage('Stroking to a fulfilling orgasm');

        if (sendYesOrNoQuestion('Doesn\'t feel right, does it?')) {
            sendMessage('It does?');
            sendMessage('Well I guess it feels good to you');

            if (sendYesOrNoQuestion('But the life of a sissy isn\'t about her pleasure now is?')) {
                sendMessage('Oh, I think you got something very wrong here %SlaveName% %Lol%');
                sendMessage('This isn\'t about some fun stuff');
                sendMessage('As a sissy you are here to serve');
                sendMessage('To serve cock that is');
                sendMessage('And to serve your %DomHonorific%');
                sendMessage('There is no place for your own pleasures in the world of a sissy');
                sendMessage('It\'s all about pleasing me');
                sendMessage('Being a good little slutty girl for me %Grin%');
                changeMeritLow(true);
            } else {
                sendMessage('See...');
                sendMessage('So you focusing that much on those fulfilling strokes doesn\'t seem right');
            }
        } else {
            sendMessage('Glad you agree %Grin%');
        }

        sendMessage('Pleasure needs to be earned properly');


        if (VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage('And as a sissy it\'s not about that useless limp clitty hidden in your pants');
            sendMessage('It\'s not of much use anyway');
        }

        sendMessage('It\'s all about serving me and not caring about your own pleasure');

        if(sendYesOrNoQuestion('Wouldn\'t you agree?')) {
            sendMessage('See %Grin%');
            sendMessage('That\'s a good sissy %Moan%');
            changeMeritLow(false);
        } else {
            sendMessage('No?');
            sendMessage('Well it\'s not about what you think anyway');
            changeMeritLow(true);
        }

        sendMessage('Since it\'s not about your pleasure');
        sendMessage('And these orgasms are distracting you way too much from your real purpose');
        sendMessage('That is being a good obedient girl for me and worshipping me and also cock');
        sendMessage('I don\'t think there should be a casual way for you to cum outside of chastity anymore');
        sendMessage('Don\'t worry I am still gonna let you out for...');
        sendMessage('The usual stroking, edging and desperation');
        sendMessage('Ending in the usual denial %Grin%');
        sendMessage('But I don\'t think cumming outside of chastity is good for you');
        sendMessage('That might come to a bit of a shock to you');
        sendMessage('But when you think about it it\'s really only for good');
        sendMessage('I mean this clitty only distracts you from your true purpose');
        sendMessage('From your true needs');
        sendMessage('And that has to be drilled into your mind');

        if (VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage('In fact you aren\'t worthy of stroking your cock');
            sendMessage('You should stroke other people\'s cocks instead');
            sendMessage('You don\'t deserve that kind of pleasure anyway');
            sendMessage('You aren\'t on par with all these alpha men that can stroke to orgasm');
            sendMessage('And therefore that needs to be reflected in your life as well');
            sendMessage('You can\'t even grasp the right to stroke your cock to an orgasm');
            sendMessage('It\'s simply out of reach for you and that\'s just as it should be');
        }

        sendMessage('But there is also a positive side to this %Grin%');
        sendMessage('In "compensation" I will allow you to orgasm twice as much');

        if(sendYesOrNoQuestion('Isn\'t that too generous of me?')) {
            sendMessage('%Grin%');
            changeMeritLow(false);
        } else {
            sendMessage('Well just be happy you get to cum at all %SlaveName%');
            changeMeritMedium(true);
        }

        sendMessage('Now I can already see you thinking: Where is the catch to that generosity?');
        sendMessage('Well... Let me ask you a question instead %Grin%');

        if(sendYesOrNoQuestion('Have you ever had an anal orgasm?')) {
            sendMessage('Now that\'s what I wanted to hear %Wicked%');
            setVar(VARIABLE.ANAL_ORGASMS_COUNT, 1);
        } else {
            sendMessage('Well then I guess we got ourselves some work on our hands');
            setVar(VARIABLE.ANAL_ORGASM_TRAINING, true);
            setVar(VARIABLE.ANAL_ORGASMS_COUNT, 0);
            sendMessage('Which means for now you can consider yourself lucky');
            sendMessage('I will not enforce this orgasm rule on you yet');
            sendMessage('But you probably won\'t like what I\'ll come up with later either %Grin%');
            return false;
        }

        sendMessage('Now your head is starting to realize something %Grin%');
        sendMessage('"She won\'t make me cum from anal only, will she?"');
        sendMessage('Mhmm %Moan%');
        sendMessage('These thoughts running through your head and sparking that fear');
        sendMessage('Just makes me happy %EmoteHappy%');
        sendMessage('But don\'t worry');
        sendMessage('I am cruel, but I am not that cruel');
        sendMessage('I am already caging all your orgasms %SlaveName%');
        sendMessage('There needs to be some fun left right?');
        sendMessage('And trust me, there will be');
        sendMessage('On special occasions or when you are really good for me');
        sendMessage('I might even let you have an orgasm outside of chastity');
        sendMessage('I am no monster %Lol%');
        sendMessage('But also believe me when I say...');
        sendMessage('Don\'t get used to the feeling of cumming using a vibrator on your cage too often');
        sendMessage('And better start working on getting your prostate trained');
        sendMessage('Because even though it\'s not the only way you\'ll cum');
        sendMessage('It\'s certainly gonna be the way you\'ll cum the most %Grin%');
        sendMessage('If one can call that "cumming" %Lol%');
        sendMessage('Usually it\'s referred to as sissygasm');
        sendMessage('Because I really don\'t think it is anywhere near the level of really cumming');
        sendMessage('But don\'t worry, soon you\'ll have forgotten how it feels to cum %Wicked%');
        sendMessage('And it\'ll be great to sissygasm %EmoteHappy%');

        sendMessage('Now having said that...');
        sendMessage('And making you scared but maybe also a bit excited of what might come...');
        sendMessage('I am gonna be nice to you and...');
        sendMessage('Give you a chance to opt out');
        sendMessage('Although this is how I want things to be');
        sendMessage('I could see you not agreeing to it');
        sendMessage('And while I can enforce many things onto you');
        sendMessage('I also think that there is no fun in making you so frustrated that you\'ll quit me');
        sendMessage('I know I can play with your orgasms. Deny them, restrain them and ruin them');
        sendMessage('But I don\'t know how far you\'d go for me');
        sendMessage('So...');

        if(sendYesOrNoQuestion('Would you put your orgasms completely into my hands for this purpose?')) {
            sendMessage('%EmoteHappy%');
            changeMeritHigh(false);
            sendMessage('That just elevated this to a whole new level');
            sendMessage('Not only your sissy life just leveled up %SlaveName%');
            sendMessage('My trust in your obedience did too');
            sendMessage('And you won\'t regret that choice');
            sendMessage('I will make you the best, most obedient and cock hungry slut the world has seen %Grin%');
        } else {
            changeMeritMedium(true);
            sendMessage('Well I can understand that this is a tad too much for you');
            sendMessage('So I am not gonna force you');
            sendMessage('You can still be a good sissy for me even with normal orgasms %Grin%');
            setVar(VARIABLE.ANAL_ORGASM_ONLY_STATUS, LIMIT_ASKED_NO);
            return false;
        }

        setVar(VARIABLE.ANAL_ORGASM_ONLY_STATUS, LIMIT_ASKED_YES);
        setVar(VARIABLE.ACTIVE_END_GAME_ID, END_GAME_ANAL_ORGASM);
        return true;
    };

    endGame.canBeActivated = function () {
        return SISSY_LIMIT.isAllowed() && hasMagicWand() && hasChastityCage() && PROSTATE_VIBRATOR_TOY.hasToy() && hasDildoToy() && getVar(VARIABLE.SISSY_TRAINING, false);
    };
}
