{
    distributeOrgasmPoints();

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

    if (getVar(VARIABLE_ORGASM_POINTS) > getVar(VARIABLE_REQUIRED_ORGASM_POINTS)) {
        runOrgasmCategory(decideOrgasm());
    } else {
        runOrgasmCategory(ORGASM_CATEGORY_DENIED);
    }
}