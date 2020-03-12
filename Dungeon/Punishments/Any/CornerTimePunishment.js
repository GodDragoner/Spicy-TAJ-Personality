{
    //No punishments with higher than medium should be line writing
    if (PUNISHMENT_CURRENT_LEVEL.id > PUNISHMENT_LEVEL.MEDIUM.id) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.CORNER_TIME)) {
        goToCorner(getCornerTime(PUNISHMENT_CURRENT_LEVEL.id + 1));

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