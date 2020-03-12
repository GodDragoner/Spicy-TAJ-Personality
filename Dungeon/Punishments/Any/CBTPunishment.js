{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!CBT_LIMIT.isAllowed() || isInChastity() && getActiveChastityCage().isFullSizedBelt()) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.CBT)) {
            //TODO: Prettify transitions etc!
            for(let x = 0; x <= PUNISHMENT_CURRENT_LEVEL.id; x++) {
                smallCBTPunishment(true, !isInChastity());
            }

            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if(PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope your %Balls% and %Cock% do now understand who they belong to and internalized their lesson %Grin%');
                    }
                }
            });
        }
    }
}