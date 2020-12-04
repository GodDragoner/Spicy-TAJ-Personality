run("Session/Link/Link.js");
run("Session/Start/Start.js");

function hasSessionTimePassed(timeMinutes) {
    return getDate(VARIABLE.CURRENT_SESSION_DATE).clone().addMinute(timeMinutes).hasPassed();
}

function endSpicySession() {
    askAboutDenialLevel();

    let trainings = 0;

    if (getVar(VARIABLE.CHASTITY_TRAINING, false) && !isForcedLockedUp()) {
        trainings++;
        run('Session/End/ChastityTraining/ChastityTraining.js');
    } else {
        if (getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false)) {
            //QUALITY: More sentences
            sendMessage('Since your partner is your keyholder I will leave the decision regarding chastity to her');
        } else {
            //Lock up part
            if (!isInChastity() && willKeepChastityOn(true)) {
                lockChastityCage();

                //This needs to be checked here again because if the sub just acquired a cage there is no such thing set in the first session
                if (!isVar(VARIABLE.LOCKED_UP_LIMIT)) {
                    askForMaxLockupTime();
                }

                if (shouldIntroduceNewRule(RULE_DOMME_KEYHOLDER)) {
                    RULE_DOMME_KEYHOLDER.sendIntroduction();
                }

                //Run random after chastity link if domme is keyholder
                if (RULE_DOMME_KEYHOLDER.isActive()) {
                    run("Session/Link/EndChastity/*.js");
                }
            }
        }
    }

    if (getVar(VARIABLE.ASS_TRAINING, false)) {
        if (trainings > 0) {
            sendMessage('Next we are gonna talk about your anal training %SlaveName%');
        }

        trainings++;
        run('Session/End/AnalTraining/AnalTraining.js');
    }

    if (getVar(VARIABLE.BLOWJOB_TRAINING, false)) {
        if (trainings == 2) {
            sendMessage('Last but not least lets take a look at your blowjob training %Grin%');
        } else if (trainings > 0) {
            sendMessage('Next we are gonna talk about your blowjob training %SlaveName%');
        }

        trainings++;
        run('Session/End/BlowjobTraining/BlowjobTraining.js');
    }

    if(isFullTime()) {
        if (SISSY_LIMIT.isAllowed()) {
            let hypnosisClazz = getAcademyClassByName("Hypnosis");

            if (!isVar(VARIABLE.SISSY_TRAINING)) {
                if (getVar(VARIABLE.SESSION_COUNTER, 0) > 5 /*&& isChance(getVar(VARIABLE.SESSION_COUNTER, 0)*5))*/) {
                    sendMessage('So %SlaveName%');
                    sendMessage('I think the time has come %EmoteHappy%');
                    sendMessage('You are probably wondering what I am talking about aren\'t you?');
                    sendMessage('The time for me to start training you to be a good little sissy for me, silly');
                    sendMessage('%Grin%');

                    if (hypnosisClazz.isActive()) {
                        sendMessage('I heard you already started taking hypnosis classes like a good little girl for me');
                    } else {
                        if (hypnosisClazz.isAvailable()) {
                            sendMessage('You haven\'t signed up for the hypnosis class yet %SlaveName%');
                            sendMessage('Which means...');
                            sendMessage('I should definitely sign you up for it');
                            sendMessage('It\'s essential for your transition to a good slutty sissy %Grin%');
                            hypnosisClazz.setActive(true);
                            sendMessage('Make sure to visit that class daily %SlaveName%!');
                        }
                    }

                    sendMessage('In addition to that I think we need to lay down a few ground rules');

                    if (!RULE_ALWAYS_WEAR_PANTIES.isActive() && RULE_ALWAYS_WEAR_PANTIES.canBeActivated()) {
                        RULE_ALWAYS_WEAR_PANTIES.sendIntroduction();
                    }

                    if (!RULE_ALWAYS_PEE_SITTING_DOWN.isActive() && RULE_ALWAYS_PEE_SITTING_DOWN.canBeActivated()) {
                        RULE_ALWAYS_PEE_SITTING_DOWN.sendIntroduction();
                    }

                    sendMessage('Once I am done with you');
                    sendMessage('There will be no single piece of manhood left in your pathetic body girl');
                    sendMessage('I will make sure of that %EmoteHappy%');
                    sendMessage('You will become a mindless fuckdoll ready to please cock');
                    sendMessage('Ready to serve me and follow my every command');
                    sendMessage('Denied access to its male pleasure');
                    sendMessage('With an all time locked little clitty and only sexual release coming from getting its ass fucked');
                    sendMessage('If you are a good little girl for me I might even allow you to rub your nipples and vibe your clitty to an orgasm');
                    sendMessage('But stroking to a fulfilling orgasm will be a thing of the past');
                    sendMessage('There will be no orgasms outside of chastity once I am done with you');
                    sendMessage('You are gonna forget what it feels like to be sexually satisfied');
                    sendMessage('Frustration and sissy gasms will become your reality and new satisfaction');
                    sendMessage('You will no longer crave those silly full blown orgasms');
                    sendMessage('And %MyYour% %Cock% will shrink down to a small little clitty throughout the months');
                    sendMessage('I will take care of that %Grin%');

                    setVar(VARIABLE.SISSY_TRAINING, true);
                }
            } else {

            }
        }

        let stretchingClazz = getAcademyClassByName("Anal Stretching");

        if(stretchingClazz.isActive()) {
            if(!RULE_ALWAYS_WEAR_SMALL_PLUG.isActive() && shouldIntroduceNewRule(RULE_ALWAYS_WEAR_SMALL_PLUG)) {
                sendMessage('So %SlaveName%');
                sendMessage('I saw you are now taking part in the anal stretching class %Grin%');
                sendMessage('It\'s definitely a good idea to try to train to be ready for all the things I could stuff up that ass');

                if(SISSY_LIMIT.isAllowed()) {
                    sendMessage('And also the cocks that are gonna fill you ass nicely at some point %EmoteHappy%');
                }

                sendMessage('I hope you are keeping up with your tasks and being a good boy for');
                sendMessage('Because if not I\'d have to punish you');
                sendMessage('And we don\'t want that do we?');

                sendMessage('Anyway...');
                sendMessage('This brought up something I had in my mind for quite some time');
                sendMessage('I think it would make a great addition if...');
                sendMessage('You would be wearing a buttplug all the time %Grin%');

                if(sendYesOrNoQuestion('Would you like that %SlaveName%?')) {
                    sendMessage('What a willing anal slut %Lol%');
                    sendMessage('Well then...');
                } else {
                    sendMessage('Ohhh poor boy...');
                    sendMessage('Sadly this isn\'t about what you want');
                    sendMessage('So you are gonna take it for me');
                    sendMessage('You will want it because I want it');
                    sendMessage('No backtalk!');
                }

                RULE_ALWAYS_WEAR_SMALL_PLUG.sendIntroduction();
            }
        }
    }

    run('Session/End/Farewell.js');

    //Update last session date
    setDate(VARIABLE.LAST_TEASE_SESSION);

    handleTodaysMood();

    setTempVar(VARIABLE.CURRENT_SESSION_ACTIVE, false);

    incrementVar(VARIABLE.SESSION_COUNTER, 1);

    //Back to the lobby
    run("Assistant/AssistantLobby.js");
}

