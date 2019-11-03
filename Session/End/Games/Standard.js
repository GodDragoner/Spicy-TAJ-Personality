{
    distributeOrgasmPoints();

    //If the user has no vibrator and reached his hard limit we will have to free him
    //TODO: Sometimes maybe tease and ask to buy vibrator and delay hard limit for one day
    if (!hasVibrator() && isVar(VARIABLE_DENIAL_HARD_LIMIT_ORGASM_TODAY)) {
        unlockChastityCage();
    }

    if (isInChastity()) {
        if (!hasVibrator()) {
            sendMessage('Well too bad that you are in chastity isn\'t it? %Grin%');
            sendMessage('Not only won\'t you be able to enjoy an orgasm properly in that cage');
            sendMessage('You also don\'t even own a vibrator so you can\'t even get one');
            sendMessage('Too bad %Lol%');
            sendMessage('You should probably get one');
            sendMessage('At least then you might get somewhat of a relief %EmoteHappy%');

            //TODO: Anal orgasm training
        } else {
            if (!fetchToy('vibrator')) {
                sendMessage('Well then there will be no chance to orgasm today %Lol%');
                sendMessage('Make sure to have your toys around next time!');
            } else {
                sendMessage('You know I won\'t release you from chastity for this however you might still get a bit relief');
                sendOrgasmChastityIntroduction();
                sendMessage('Let\'s see if you get lucky %GeneralTime%');
            }
        }
    }

    //Hard limit forces orgasm
    if (isVar(VARIABLE_DENIAL_HARD_LIMIT_ORGASM_TODAY)) {
        let orgasmCategory = decideOrgasm(true);

        runOrgasmCategory(orgasmCategory);

        if(getVar(VARIABLE_DENIAL_HARD_LIMIT_TYPE, 0) === 1 && orgasmCategory === ORGASM_CATEGORY_RUINED) {
            sendMessage('Poor %SlaveName%');
            //TODO: Turn into "link" thing that is more random
            sendMessage('He thought he could get a full orgasm when he reaches his denial limit');
            sendMessage('But luckily he does not get to choose %EmoteHappy%');
            sendMessage('I do though and I always will %Grin%');
            sendMessage('That pathetic %Cock% is mine');
            sendMessage('That aching %balls% are mine');
            sendMessage('All that cum is mine %EmoteHappy%');
            sendMessage('Never forget that %SlaveName%!');
        }
    } else {
        if (getVar(VARIABLE_ORGASM_POINTS) > getVar(VARIABLE_REQUIRED_ORGASM_POINTS)) {
            runOrgasmCategory(decideOrgasm());
        } else {
            runOrgasmCategory(ORGASM_CATEGORY_DENIED);
        }
    }
}
