{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!CBT_LIMIT.isAllowed() || isInChastity() && getActiveChastityCage().isFullSizedBelt()) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.CBT)) {
            //QUALITY: More real interconnected CBT punishment
            smallCBTPunishment(true, !isInChastity(), (PUNISHMENT_CURRENT_LEVEL.id + 1)*2);

            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if(PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope %MyYour% %Balls% and %Cock% do now understand who they belong to and internalized their lesson %Grin%');
                    }
                }
            });
        }
    }
}