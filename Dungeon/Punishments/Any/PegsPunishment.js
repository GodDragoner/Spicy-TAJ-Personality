{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!PAIN_LIMIT.isAllowed()) {
        /*//Address this limit if we never asked TODO: (do we want this here?)
        if(CBT_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
            CBT_LIMIT.askForLimitChange(false);
        }*/

        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE_PEG)) {
            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if(PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope those pegs left a mark on your body %Grin%');
                    }
                }
            });
        }
    }
}