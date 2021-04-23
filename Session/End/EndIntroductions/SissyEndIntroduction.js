{
    if (isFullTime()) {
        if (SISSY_LIMIT.isAllowed()) {
            let hypnosisClazz = getAcademyClassByName("Hypnosis");

            if (!isVar(VARIABLE.SISSY_TRAINING)) {
                if (getVar(VARIABLE.SESSION_COUNTER, 0) > 5 && isChance(getVar(VARIABLE.SESSION_COUNTER, 0) * 5)) {
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
                    setDate(VARIABLE.LAST_RULE_PASSED);
                }
            } else {
                //Don't allow sub to be too horny to choose
                let lastOrgasmWithinRange = !getLastEjaculationDate().addDay(3).hasPassed();
                let introduceAnalOrgasmOnly = getVar(VARIABLE.ANAL_ORGASM_ONLY_STATUS, LIMIT_NEVER_ASKED) === LIMIT_NEVER_ASKED && !getVar(VARIABLE.ANAL_ORGASM_TRAINING, false) && lastOrgasmWithinRange;

                //Is in sissy training
                if (!RULE_ALWAYS_WEAR_PANTIES.isActive() && RULE_ALWAYS_WEAR_PANTIES.canBeActivated()) {
                    sendMessage('There is one last thing for today...');
                    sendMessage('It\'s about your sissy training %Grin%');
                    RULE_ALWAYS_WEAR_PANTIES.sendIntroduction();
                    setDate(VARIABLE.LAST_RULE_PASSED);
                } else if (!RULE_ALWAYS_PEE_SITTING_DOWN.isActive() && RULE_ALWAYS_PEE_SITTING_DOWN.canBeActivated()) {
                    sendMessage('There is one last thing for today...');
                    sendMessage('It\'s about your sissy training %Grin%');
                    RULE_ALWAYS_PEE_SITTING_DOWN.sendIntroduction();
                    setDate(VARIABLE.LAST_RULE_PASSED);
                } else if (RULE_ALWAYS_WEAR_PANTIES.isActive() && RULE_ALWAYS_WEAR_WOMAN_SOCKS.canBeActivated() && shouldIntroduceNewRule(RULE_ALWAYS_WEAR_WOMAN_SOCKS)) {
                    sendMessage('There is one last thing for today...');
                    sendMessage('It\'s about your sissy training %Grin%');

                    //Last rule passed date is handled by shouldIntroduceNewRule function
                    RULE_ALWAYS_WEAR_WOMAN_SOCKS.sendIntroduction();
                } else if (introduceAnalOrgasmOnly) {
                    sendMessage('There is one last thing for today...');
                    sendMessage('It\'s about your sissy training %Grin%');

                    getEndGameById(END_GAME_ANAL_ORGASM).sendIntroduction();
                } else if(RULE_ALWAYS_WEAR_WOMAN_SOCKS.isActive() && RULE_ONLY_SISSY_ADDRESS.canBeActivated() && shouldIntroduceNewRule(RULE_ONLY_SISSY_ADDRESS)) {
                    sendMessage('There is one last thing for today...');
                    sendMessage('It\'s about your sissy training %Grin%');

                    RULE_ONLY_SISSY_ADDRESS.sendIntroduction();
                    setDate(VARIABLE.LAST_RULE_PASSED);
                }
            }
        }
    }
}