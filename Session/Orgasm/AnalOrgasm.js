const ANAL_ORGASM_TYPE = {
    DILDO: 0,
    PROSTATE_VIBE: 1,
    CHASTITY_VIBE: 2,
};


function decideAnalOrgasmType() {
    let mood = getMood();

    let vibeChance = (2 - getStrictnessForCharacter())*5 + (4 - mood)*5;
    let prostateVibeChance = (2 - getStrictnessForCharacter())*5 + (4 - mood)*10;
    let dildoChance = 100 - vibeChance - prostateVibeChance;

    sendDebugMessage('Vibe chance: ' + vibeChance + ' Prostate Vibe Chance: ' + prostateVibeChance + ' Dildo Chance: ' + dildoChance);

    let choice = randomInteger(0, 100);
    sendDebugMessage('Choice picked: ' + choice);

    if(choice < vibeChance) {
        return ANAL_ORGASM_TYPE.CHASTITY_VIBE;
    } else if(choice < prostateVibeChance + vibeChance) {
        return ANAL_ORGASM_TYPE.PROSTATE_VIBE;
    } else {
        return ANAL_ORGASM_TYPE.DILDO;
    }
}

function getAnalOrgasmInstructions(analOrgasmType, orgasmCategory) {
    let action = orgasmCategory === ORGASM_CATEGORY_RUINED? 'ruin your orgasm' : 'cum';

    if(hasSomeLingerie()) {
        //In 50 percent of the vibe orgasm we don't give the sub any prep so he is supprised by the orgasm
        if(analOrgasmType !== ANAL_ORGASM_TYPE.CHASTITY_VIBE || isChance(50)) {
            sendMessage('First of all let\'s get you dressed properly for the occasion sissy %Grin%');
            sendMessage('Which means I want to see you in everything you got');
            sendMessage('Put on heels, stockings, garter belt, panties, bra, a fitting top, skirt');
            sendMessage('Makeup if you got some');
            sendMessage('Get creative with what you got and go all out');
            sendMessage('Tell me when you are done %EmoteHappy%');
            waitForDone(1000000);
        }
    }

    if(analOrgasmType === ANAL_ORGASM_TYPE.DILDO) {
        let dildo = getAnalDildoForTask();

        sendMessage('You will be allowed to ' + action);
        sendMessage('For this you will fuck yourself using your ' + dildo.name);

        if(feelsLikePunishingSlave()) {
            let bpm = random(30, 40, 45, 50);
            sendMessage('And you will not be allowed to go lower than ' + bpm + ' bpm');
            sendMessage('If you go lower than that it\'s game over and a forfeited orgasm %Grin%');
        }

        sendMessage('Regarding the position...');
        sendMessage('%Thinking%');

        if(feelsLikePunishingSlave()) {
            chooseAnalPosition(false);
        } else {
            sendMessage('You may pick your most comfortable position for this %EmoteHappy%');
        }

        if(orgasmCategory === ORGASM_CATEGORY_RUINED) {
            sendMessage('Since you are to ruin that orgasm...');
            sendMessage('The moment you are about to cum you pull that dildo out and put it aside');
        } else if(orgasmCategory === ORGASM_CATEGORY_ALLOWED) {
            sendMessage('Since you are allowed to cum');
            sendMessage('Go as long as you please %Grin%');
        }
    } else if(analOrgasmType === ANAL_ORGASM_TYPE.PROSTATE_VIBE) {
        sendMessage('You will be allowed to ' + action);
        sendMessage('For this you will use your prostate vibrator');

        sendMessage('Regarding the position...');
        sendMessage('%Thinking%');

        if(CEI_LIMIT.isAllowed() && feelsLikePunishingSlave()) {
            sendMessage('You will throw your legs above your head and point your clit at your face');
        } else {
            sendMessage('You may pick your most comfortable position for this %EmoteHappy%');
        }

        if(orgasmCategory === ORGASM_CATEGORY_RUINED) {
            sendMessage('Since you are to ruin that orgasm...');
            sendMessage('The moment you are about to cum you pull that vibrator out and put it aside');
        } else if(orgasmCategory === ORGASM_CATEGORY_ALLOWED) {
            sendMessage('Since you are allowed to cum');
            sendMessage('Go as long as you please %Grin%');
        }
    } else if(analOrgasmType === ANAL_ORGASM_TYPE.CHASTITY_VIBE) {
        runOrgasmCategory(orgasmCategory);

        //We already handle everything else in the orgasm files
        return;
    }

    if(orgasmCategory === ORGASM_CATEGORY_RUINED) {
        registerRuin();
    } else if(orgasmCategory === ORGASM_CATEGORY_ALLOWED) {
        registerOrgasm();
    }

    sendMessage('Once you are done, return to me');
    waitForDone(1000000);
    sendMessage('%Good%');

    if(sendYesOrNoQuestion('Did you manage to orgasm?')) {
        if(CEI_LIMIT.isAllowed()) {
            sendEatInstructions();
        }
    } else {
        sendMessage('Poor %SlaveName%');
        sendMessage('Well that\'s your chance gone for now %Grin%');
    }
}