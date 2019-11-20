{
    //No punishments with higher than medium should be line writing
    if (PUNISHMENT_CURRENT_LEVEL.id > PUNISHMENT_LEVEL_MEDIUM.id) {
        runPunishment();
    } else if (tryRunPunishmentFetchId(MODULE_PUNISHMENT_CURRENT_LEVELCORNER_TIME)) {
        goToCorner(getCornerTime()*(PUNISHMENT_CURRENT_LEVEL.id + 1));

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