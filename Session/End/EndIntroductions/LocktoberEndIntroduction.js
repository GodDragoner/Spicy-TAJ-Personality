{

    if (isFullTime() && !RULE_LOCKTOBER.isActive() && RULE_DOMME_KEYHOLDER.isActive() && hasChastityCage()) {

        //Can it be activated and have we asked this before this month
        if (RULE_LOCKTOBER.canBeActivated() && (!isVar(VARIABLE.LOCKTOBER_LAST_ASKED) || getVar(VARIABLE.LOCKTOBER_LAST_ASKED).addDay(30).hasPassed())) {
            let date = new Date();

            if (date.getMonth() === 8 && date.getDate() > 20) {
                let activate = true;

                //IF we have explained it before
                if (RULE_LOCKTOBER.getActivatedCount() > 0) {
                    //TODO: More
                    sendMessage('It\'s time for loctober again! %Grin%');
                } else {
                    sendMessage('There is one more thing for today %Grin%');
                    sendMessage('Something I have been planning for a longer time');
                    sendMessage('Or more like something I have been waiting for for a longer timer %EmoteHappy%');

                    let answer = sendInput('Can you guess what it is?');

                    let guessed = false;

                    while (true) {
                        if (answer.isLike('yes')) {
                            sendMessage('Well then, have a guess %Grin%');
                            answer.loop();
                        } else if (answer.isLike('no idea')) {
                            sendMessage('Come on, have a guess!');
                            answer.loop();
                        } else if (answer.isLike('no')) {
                            changeMeritLow(true);
                            sendMessage('%EmoteSad%');
                            sendMessage('You are no fun %EmoteSad%');
                            break;
                        } else if (answer.isLike('locktober')) {
                            sendMessage('Oh so you\'ve heard %Lol%');
                            sendMessage('You are a smart little %SlaveName%, aren\'t you?');
                            guessed = true;
                            break;
                        } else if (answer.isLike('october')) {
                            sendMessage('It does have something to do with the upcoming october %Grin%');
                            break;
                        } else if (answer.isLike('chastity')) {
                            sendMessage('It does have something to do with chastity %Grin%');
                            break;
                        } else if (answer.isLike('month', 'monthly')) {
                            sendMessage('It does have something to do with a month %Grin%');
                            sendMessage('A special one to be precise');
                            break;
                        } else {
                            sendMessage('No, that\'s not it %Grin%');
                            sendMessage('I\'ll tell you %EmoteHappy%');
                            break;
                        }
                    }

                    let knows = guessed;

                    if (!guessed) {
                        sendMessage('I am having something very special in mind');
                        sendMessage('Something drastic');
                        sendMessage('Something fun');
                        sendMessage('Something challenging');
                        sendMessage('Something rather long term');
                        sendMessage('I mean if a month sounds long term to you that is %Lol%');

                        sendMessage('Maybe you are getting it now %Grin%');
                        sendMessage('But no need to guess again');
                        sendMessage('I\'m about to tell you %SlaveNameSmiley%');

                        sendMessage('I want us, or more like you...');
                        sendMessage('To participate in locktober %Grin%');

                        if (sendYesOrNoQuestion('Ever heard of it?')) {
                            sendMessage('Interesting %Grin%');
                            knows = true;
                        } else {
                            sendMessage('Well, then this is a first for you %Lol%');
                        }
                    } else {
                        sendMessage('Well since you already guessed right...');
                    }

                    if (knows) {
                        sendMessage('I figure you know some stuff about it');
                        sendMessage('But I have my own rules');
                        sendMessage('Therefore I will explain them to you now %Grin%');
                    } else {
                        sendMessage('Since you know nothing about it');
                        sendMessage('Here\'s the deal:');
                    }

                    sendMessage('Locktober basically applies to the whole month of october');
                    sendMessage('You are gonna be locked in chastity 24/7');
                    sendMessage('You are of course allowed to remove chastity for the purpose of cleaning');
                    sendMessage('Or any other emergency');
                    sendMessage('However there will be zero stroking or stimulating %MyCock% while you are not in chastity');
                    sendMessage('Not even during our sessions');
                    sendMessage('You might forget what stroking even feels like %Lol%');
                    sendMessage('But it\'s gonna feel sooooo good in November %EmoteHappy%');
                    sendMessage('I will make you stroke so much in November, that you might actually end up not liking stroking %lol%');

                    sendMessage('Well...');
                    sendMessage('Now you might be wondering about your orgasms');
                    sendMessage('Maybe...');
                    sendMessage('You shouldn\'t cum at all?');
                    sendMessage('....');
                    sendMessage('Yes...');
                    sendMessage('%Grin%');

                    if(sendYesOrNoQuestion('Sounds reasonable %SlaveName%, doesn\'t it?')) {
                        sendMessage('Oh really? %Grin%');
                        changeMeritLow(false);
                        sendMessage('You\'d do that for me?');
                        sendMessage('You are such a good boy %Grin%');
                        sendMessage('But don\'t worry');
                        sendMessage('I am just kidding %EmoteHappy%');
                        sendMessage('But I\'ll keep that in mind %Grin%');
                    } else {
                        sendMessage('Don\'t worry %Lol%');
                        sendMessage('I am just kidding %Grin%');
                    }

                    if(!isVar(VARIABLE.ANAL_ORGASMS_COUNT)) {
                        if (sendYesOrNoQuestion('Have you ever had an anal orgasm?')) {
                            sendMessage('Now that\'s what I wanted to hear %Wicked%');
                            setVar(VARIABLE.ANAL_ORGASMS_COUNT, 1);
                        } else {
                            sendMessage('Well then I guess we got ourselves some work on our hands');
                            setVar(VARIABLE.ANAL_ORGASM_TRAINING, true);
                            setVar(VARIABLE.ANAL_ORGASMS_COUNT, 0);
                        }
                    }

                    sendMessage('You\'ll get to cum %Grin%');

                    if(getVar(VARIABLE.ANAL_ORGASMS_COUNT) > 0) {
                        sendMessage('But it\'s gonna be pure anal orgasms only');
                        sendMessage('No stimulating that %Cock% to an orgasm %Grin%');
                    } else {
                        sendMessage('Well you are gonna cum in chastity obviously');
                        sendMessage('Stroking your cage, humping your pillow or vibrating your cage %Grin%');
                    }

                    sendMessage('That\'s gonna be so exciting %Grin%');
                    sendMessage('One whole month of chastity, no stroking and limited orgasm %Grin%');
                    sendMessage('Oh...');
                    sendMessage('And...');
                    sendMessage('They are all gonna be ruined %EmoteHappy%');
                    sendMessage('Yes, you heard that right');
                    sendMessage('There won\'t be a single fucking orgasm during locktober that is not ruined');
                    sendMessage('Poor you %Lol%');
                    sendMessage('But I bet you\'ll be able to take it %Grin%');
                    sendMessage('You\'ll gladly take it even');
                    sendMessage('Because I want you to %Grin%');

                    if(sendYesOrNoQuestion('And because you want to make me happy, don\'t you?')) {
                        sendMessage('I wouldn\'t have thought anything else %Grin%');
                        changeMeritLow(false);
                    } else {
                        sendMessage('No?!');
                        sendMessage('...');
                        sendMessage('Anyway...');
                        changeMeritHigh(true);
                    }

                    sendMessage('And just think about how good that first full orgasm out of chastity is gonna feel like %Grin%');

                    if(getVar(VARIABLE.ACTIVE_END_GAME_ID, 0) === END_GAME_ANAL_ORGASM) {
                        sendMessage('Whoops I almost forgot you very rarely only get to cum out of chastity %lol%');
                        sendMessage('But at least you\'ll get your full orgasm in chastity eventually %Grin%');
                    }

                    sendMessage('It\'s gonna blow your mind away');
                    sendMessage('Elevate you to a different galaxy');
                    sendMessage('Or maybe you don\'t even want that feeling anymore at that point');
                    sendMessage('Maybe you are gonna want to stay my ruined orgasm slut');
                    sendMessage('Begging me to ruin your orgasm for me');
                    sendMessage('Or...');
                    sendMessage('Maybe I WANT you to be my ruined orgasm slut %Grin%');

                    if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                        sendMessage('It\'s not like a beta loser bitch like you would deserve anything else');

                        if(sendYesOrNoQuestion('Tell me loser boy, do you think you deserve a full orgasm?')) {
                            sendMessage('Oh so you do?');
                            sendMessage('I don\'t think not even one woman would agree');
                        } else {
                            sendMessage('%grin%')
                            sendMessage('I think all women would agree');
                        }

                        sendMessage('If you can\'t please a woman');
                        sendMessage('You don\'t deserve to be pleased either %Lol%');

                        if(hasSmallPenis()) {
                            sendMessage('And with that small clitty between your legs');
                            sendMessage('There is no way you are gonna ever please a woman');
                            sendMessage('You might please her orally');
                            sendMessage('But your microscopic clitty can\'t please a woman');
                            sendMessage('Why should it be rewarded?');
                        }

                        sendMessage('You should feel lucky for even being allowed to ruin your orgasms');
                        sendMessage('That\'s already more than you deserve and you know that');
                    }

                    sendMessage('Anyway...');
                    sendMessage('All that counts for now is that there are only ever gonna be caged ruined orgasms for the full length of october %Grin%');

                    if(isEnforcingPersonality()) {
                        sendMessage('And the fun thing is %grin%');
                        sendMessage('I won\'t even give you a choice in this matter');
                        sendMessage('I am your keyholder');
                        sendMessage('And I have all the rights to your orgasms');
                        sendMessage('So I decide this is going to happen');
                        sendMessage('No matter if you want to or not %Grin%');

                        if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                            sendMessage('It\'s not like you ever should have the right to decide about your own orgasms anyway %Lol%');
                            sendMessage('That\'s just the life of a beta like you');
                            sendMessage('Losers like you should always have to ask a woman for permission to have an orgasm');
                            sendMessage('Heck, even for permission to touch their miserable little clitties');
                            sendMessage('And most importantly betas should be denied pleasure as much as possible %Lol%');
                        }

                        sendMessage('You\'ll just have to live with that');
                        sendMessage('That\'s your life from now on %Grin%');
                    } else {
                        sendMessage('However...');

                        sendMessage('I know how this might be a bit too much to task');

                        sendMessage('So I am giving you the choice to opt out of this idea right now');
                        sendMessage('Tell me %SlaveName%');

                        if(sendYesOrNoQuestion('Are you okay with me enforcing locktober on you?')) {
                            sendMessage('%EmoteHappy%');
                            sendMessage('You are in for a fun time pet');
                            sendMessage('Don\'t worry too much %Grin%');
                            changeMeritLow(false);
                        } else {
                            sendMessage('%EmoteSad%');
                            changeMeritLow(true);
                            sendMessage('But I can understand your choice');
                            sendMessage('Well, I guess we have to try again next year %EmoteHappy%');
                            activate = false;
                        }
                    }
                }

                setDate(VARIABLE.LOCKTOBER_LAST_ASKED);

                if(activate) {
                    RULE_LOCKTOBER.setActive(true);
                    let date = setDate();
                    //9 == october
                    date.setMonth(9);
                    date.setDay(31);
                    date.setHour(23)
                    date.setMinute(59);

                    RULE_LOCKTOBER.setActiveUntil(date);
                }
            }
        }
    }
}