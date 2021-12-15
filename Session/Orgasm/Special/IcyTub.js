{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);

    sendMessage("You will be allowed to cum %GeneralTime%, %SlaveName%");
    sendMessage('However I won\'t make it easy for you...');
    sendMessage('I want you to earn it %Grin%');

    let shouldUnlockChastity = true && !isChastityUnlockBlocked();
    let analOrgasmGameActive = getVar(VARIABLE.ACTIVE_END_GAME_ID, 0) === END_GAME_ANAL_ORGASM;

    if (analOrgasmGameActive) {
        sendMessage('You will even be allowed to cum out of chastity!');
        
        if (sendMessage('It has been too long, hasn\'t it? %Grin%')) {
            sendMessage('I know it has... %EmoteSad%');
            sendMessage('So here is your chance for an orgasm outside of chastity %Grin%');
        } else {
            sendMessage('No...?');
            sendMessage('Well...');
            sendMessage('I guess no unlocking you then %EmoteHappy%');
            shouldUnlockChastity = false;
        }
    }

    let allowCum = false;
    let relockChastity = undefined;

    if (sendYesOrNoQuestion('Do you have a bathtub around, that you can use?')) {
        allowCum = true;
        sendMessage('Great %Wicked%');
        sendMessage('For this I want you to lie down in your bathtub');
        sendMessage('I want you to turn on the water, put in the plug...');
        sendMessage('And let the water run %EmoteHappy%');
        sendMessage('Once the water starts running you are allowed to stroke');
        sendMessage('And...');
    } else if (sendYesOrNoQuestion('Do you at least have a shower?')) {
        allowCum = true;
        sendMessage('Great %Wicked%');
        sendMessage('For this I want you to stand in your shower');
        sendMessage('I want you to turn on the water');
        sendMessage('And let the water run over you %EmoteHappy%');
        sendMessage('Once the water starts running you are allowed to stroke');
        sendMessage('And...');
    } else {
        sendMessage('Well... %EmoteSad%');
        sendMessage('I don\'t think you should cum then %Wicked%');
    }

    if (allowCum) {
        switch (orgasmType) {
            case ORGASM_CATEGORY_RUINED:
                sendMessage('You will ruin it %Grin%');

                sendMessage('Don\'t be sad...');
                sendMessage('Even a ruined orgasm is still an orgasm %SlaveName%');

                if(analOrgasmGameActive && shouldUnlockChastity) {
                    sendMessage('And it\'s out of chastity, so that makes up for something %Grin%');
                }

                break;
            case ORGASM_CATEGORY_ALLOWED:
                sendMessage('You will be allowed to stroke to a fulfilling orgasm %EmoteHappy%');
                break;
        }

        sendMessage('But now you must be wondering...');
        sendMessage('Where is the catch?');
        sendMessage('So far nothing seems to be off');
        sendMessage('Well... %Grin%');

        sendMessage('Have a guess %Grin%');
        sendHaveAGuess('cold', 'ice');

        sendMessage('You are gonna make it so the water is as cold as possible %Wicked%');

        sendMessage('That\'s the big catch %Grin%');
        sendMessage('We\'ll get to see if you are desperate enough to cum like that or not %EmoteHappy%');
        sendMessage('If not, that\'s your chance of cumming gone %Grin%');

        if(shouldUnlockChastity && isInChastity()) {
            unlockChastityCage();
            relockChastity = currentChastityCage;

            if(analOrgasmGameActive) {
                sendMessage('You better enjoy this rare event %Grin%');
                sendMessage('You rarely get to cum out of chastity');
                sendMessage('So make sure to savour it %EmoteHappy%');
            }
        } else if(analOrgasmGameActive) {
            sendMessage('Since you\'ve played your chance of unlocking');
            sendMessage('Use whatever might help you to cum %Grin%');
            sendMessage('But be careful when it comes to electricity!');
        }

        sendMessage('Now...');
        sendMessage('Get to work %Grin%');
        sendMessage('Tell me once you are back');
        sendMessage('Oh and by the way...');
        sendMessage('You have 10 minutes...');
        sendMessage('...');
        sendMessage('Starting now %Grin%');
        //100 seconds to prepare and leave bath tub again after failure
        sendMessage('So make sure to hurry up. Tik tok %Wicked%', 100)

        let result = waitForDone(60*10);
        let subHadOrgasm = false;

        if(result === ANSWER_TIMEOUT) {
            sendMessage('You have taken too long...');
            sendMessage('Tell me once you are back immediately!');

            waitForDone(1000000);

            sendMessage('So there you are...');
            sendMessage('You have taken too long...');
            changeMeritHigh(true);

            if(sendYesOrNoQuestion('Did you cum?')) {
                sendMessage('I don\'t tolerate ignoring my rules!');
                addPunishmentPoints(getPPRuleIgnored()*2, PUNISHMENT_REASON.NO_PERM_CUM);
                subHadOrgasm = true;
            } else {
                sendMessage('Good!');
                sendMessage('You better not cum without my permission!');
                sendMessage('And my permission expired once you crossed the 10 minute mark');
            }
        } else {
            if(sendYesOrNoQuestion('Did you manage to cum?')) {
                subHadOrgasm = true;
            } else {
                subHadOrgasm = false;
                sendMessage('%EmoteSad%');
            }
        }

        if(subHadOrgasm) {
            sendMessage('You made it!');
            sendMessage('I guess that orgasm was well deserved %EmoteHappy%');
            changeMeritLow(true);
            sendMessage('You must\'ve been very desperate to cum like that');
            sendMessage('It makes me happy to see that I can push you to be this desperate %EmoteHappy%');
        } else {
            sendMessage('It\'s still gonna count as an orgasm though %Wicked%');
            sendMessage('Since you seem not desperate enough to cum like that');
            sendMessage('I guess we can wait a bit longer with that precious release %Grin%');
        }

        switch (orgasmType) {
            case ORGASM_CATEGORY_RUINED:
                registerRuin();
                break;
            case ORGASM_CATEGORY_ALLOWED:
                registerOrgasm();
                break;
        }

        if(relockChastity) {
            lockChastityCage(relockChastity);
        }
    } else {
        sendMessage('So no cumming for you today %Wicked%');
    }
}