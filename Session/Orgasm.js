const ORGASM_FREQUENCY_VERY_RARE = 0;
const ORGASM_FREQUENCY_RARE = 1;
const ORGASM_FREQUENCY_SEMI_RARE = 2;
const ORGASM_FREQUENCY_SOMEWHAT_RARE = 3;
const ORGASM_FREQUENCY_DOM = 4;

function registerOrgasm() {
    setDate(VARIABLE_LAST_ORGASM);
    setVar(VARIABLE_ORGASM_COUNTER, getVar(VARIABLE_ORGASM_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerRuin() {
    setDate(VARIABLE_LAST_RUINED_ORGASM);
    setVar(VARIABLE_RUIN_COUNTER, getVar(VARIABLE_RUIN_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerEjaculation() {
    setVar(VARIABLE_ORGASM_POINTS, 0);
    setVar(VARIABLE_REQUIRED_ORGASM_POINTS, getRequiredOrgasmPoints());
}

function getLastEjaculationDate() {
    if(getDate(VARIABLE_LAST_RUINED_ORGASM).after(getDate(VARIABLE_LAST_ORGASM))) {
        return getDate(VARIABLE_LAST_ORGASM);
    }

    return getDate(VARIABLE_LAST_RUINED_ORGASM);
}

function distributeOrgasmPoints() {
    let points = [
        //First personality
        /*VPleased*/ 5, 15,  /*PLeased*/ 4, 13,  /*Neutral*/ 3, 10,  /*Annoyed*/2, 7, /*VAnnoyed*/1,5, /*Lover mode*/ 2, 20, /*Good days*/ 7, 15, /*Lust*/ 15, 40, /*Denial*/ 5, 15,
        //Second personality
        /*VPleased*/ 3, 13,  /*PLeased*/ 2, 11,  /*Neutral*/ 1, 8,  /*Annoyed*/1, 5, /*VAnnoyed*/0,3, /*Lover mode*/ 1, 17, /*Good days*/ 6, 12, /*Lust*/ 10, 30, /*Denial*/ 3, 12,
        //Third personality
        /*VPleased*/ 2, 10,  /*PLeased*/ 1, 8,  /*Neutral*/ 0, 6,  /*Annoyed*/0, 4, /*VAnnoyed*/0,1, /*Lover mode*/ 0, 14, /*Good days*/ 5, 10, /*Lust*/ 5, 25, /*Denial*/ 1, 9,
    ];

    const personalityOffset = ACTIVE_PERSONALITY_ID*9*2;
    const moodOffset = getMood()*2;
    const loverOffset = 5*2;
    const goodDaysOffset = 6*2;
    const lustOffset = 7*2;
    const denialOffset = 8*2;

    let totalToAdd = randomInteger(points[personalityOffset + moodOffset], points[personalityOffset + moodOffset + 1]);

    if(getVar('loverMode', false)) {
        totalToAdd += randomInteger(points[personalityOffset + loverOffset], points[personalityOffset + loverOffset + 1]);
    }

    if(getMonthlyGoodDays() > personalityOffset == 0? 20 : personalityOffset == 18? 24 : 28) {
        totalToAdd += randomInteger(points[personalityOffset + goodDaysOffset], points[personalityOffset + goodDaysOffset + 1]);
    }

    if(getVar(VARIABLE_LUST) > 28) {
        totalToAdd += randomInteger(points[personalityOffset + lustOffset], points[personalityOffset + lustOffset + 1]);
    }

    if(getLastEjaculationDate().addDay(getVar(VARIABLE_DENIAL_LEVEL).hasPassed())) {
        totalToAdd += randomInteger(points[personalityOffset + denialOffset], points[personalityOffset + denialOffset + 1]);
    }

    incrementVar(VARIABLE_ORGASM_POINTS, totalToAdd);
}

function getRequiredOrgasmPoints() {
    const denialLevel = getVar(VARIABLE_DENIAL_LEVEL);
    const minPoints = 26.87*java.lang.Math.E^(0,2598*denialLevel);
    const maxPoints = 68.559*java.lang.Math.E^(0,2501*denialLevel);
    return randomInteger(minPoints, maxPoints);
}

function askAboutDenialLevel() {
    if(!isVar('denialLevelTalkInDays')) {
        setVar('denialLevelTalkInDays', randomInteger(5, 15));
    } else {
        if(getVar('denialLevelTalkInDays') <= 0) {
            const chancesIncrease = [25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 50, 50];

            if(getVar(VARIABLE_DENIAL_LEVEL) < 15) {
                if(isChance(chancesIncrease[getVar(VARIABLE_DENIAL_LEVEL) - 1])) {
                    incrementVar(VARIABLE_DENIAL_LEVEL, 1);
                }
            }

            const talkChance = [50, 55, 55, 60, 60, 70, 70, 80, 80, 90, 25, 30, 35, 40, 50];

            //TODO: Enforcing personality?
            //Too long after orgasm the sub might decide differently so we only ask him if he came 3 or less days or ago
            if(isChance(talkChance[getVar(VARIABLE_DENIAL_LEVEL) - 1]) && !getLastEjaculationDate().addDay(3).hasPassed()) {
                sendMessage("%SlaveName%");
                sendMessage(random("Once in a while I feel it\'s important to discuss denial with you ", "As you know its important to discuss your denial practice with you.. "));
                sendMessage(random("Today is one of those days ", "And today we\'ll do just that! "));
                sendMessage("Currently your denial level is " + getVar(VARIABLE_DENIAL_LEVEL));
                sendMessage(random("Just to remind you ", "Let me remind you that..."));
                sendMessage("Level 1 to 5 is for Beginners");
                sendMessage("Level 6 to 8 is for the trained");
                sendMessage("Level 9 to 11 is for the Advanced");
                sendMessage("Level 12 to 15 is for the High skilled");
                sendMessage(random("I try to constantly adjust you level to be appropriate to what I think you can handle", "Often I try to adjust this little by little to keep you at your limit"));
                sendMessage(random("But...", "But it's not that easy..."));
                sendMessage(random("What I want to ask you is", "What I simply have to ask is"));
                const appropiate = sendInput(random("Do you think you\'re placed at an appropriate level? ", "Do you feel your current level of denial to be appropriate? "));

                while(true) {
                    if(appropiate.isLike('yes')) {
                        sendMessage('%Good%');
                        break;
                    } else if(appropiate.isLike('no')) {
                        const highOrLowAnswer = sendInput(random("Are you set at a too low or too high level? ", "Is your current level too high or too low "));
                        while(true) {
                            if(highOrLowAnswer.isLike('high')) {
                                if(getVar(VARIABLE_DENIAL_LEVEL) > 1) {
                                    sendMessage('Well then, I will try to work on that then %Grin%');
                                    incrementVar(VARIABLE_DENIAL_LEVEL, -1);
                                } else {
                                    sendMessage('Your level can\'t be lower than 1 %Lol%');
                                    sendMessage('You gotta at least deal with a very small amount of denial %SlaveName%');
                                }

                                break;
                            } else if(highOrLowAnswer.isLike('low')) {
                                if(getVar(VARIABLE_DENIAL_LEVEL) < 15) {
                                    sendMessage('I like your attitude %SlaveName% %Grin%');
                                    incrementVar(VARIABLE_DENIAL_LEVEL, 1);
                                } else {
                                    //TODO: Allow higher stuff?
                                    sendMessage('Your level can\'t be higher than 15 %Lol%');
                                    sendMessage('I am already denying you like almost every time %SlaveName%');
                                }

                                break;
                            } else {
                                sendMessage('Too high or low %SlaveName%?');
                                answer.loop();
                            }
                        }

                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
            }
        } else {
            incrementVar('denialLevelTalkInDays', -1);
        }
    }


}
