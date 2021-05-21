{
    //No punishments with higher than medium should be pic censoring, TODO: Add back after todays session
    if (PUNISHMENT_CURRENT_LEVEL.id > PUNISHMENT_LEVEL.MEDIUM.id /*|| !RULE_ONLY_CENSORED_PORN.isActive()*/) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.LINE_WRITING)) {
        sendMessage('%SlaveName%');

        //First punishment
        if (PUNISHMENTS_DONE === 1) {
            sendMessage('Let\'s start with something mildly punishing');
        } else {
            sendMessage('Be ready to repeat the following lines to me %EmoteHappy%');
        }

        let times = randomInteger((PUNISHMENT_CURRENT_LEVEL.id + 1) * 4, (PUNISHMENT_CURRENT_LEVEL.id + 2) * 4);

        sendMessage('I want you to censor a few images from your collection %Grin%');
        sendMessage('You\'ll pick ' + times + ' pictures');
        sendMessage('Preferable from your favorites');
        sendMessage('Then you\'ll censor them');
        sendMessage('You should already know what\'s allowed and what\'s not');
        sendCensorInstructions(times);
        sendMessage('Now get to work and report to me when you are done');

        waitForDone(10000);

        sendMessage('%Good%');
        sendMessage('Place them in your media folders accordingly');
        sendMessage('You can do that later');
        sendMessage('Let\'s move on for now');

        setPunishmentTransitionHandler({
            handleTransition: function (nextCategory, nextLevel) {
                //First punishment
                if (PUNISHMENTS_DONE === 1) {
                    sendMessage('Now that we\'ve done a little warmup let\'s continue with something more challenging');
                } else {
                    sendMessage('I hope you enjoyed that "break" because it\'s not gonna get easier %Grin%');
                }
            }
        })
    }
}