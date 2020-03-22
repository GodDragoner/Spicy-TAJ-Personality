{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!PAIN_LIMIT.isAllowed()) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.SPANKING)) {
            //TODO: More interaction
            sendMessage('Get ready to be spanked %SlaveName%');

            doSpankingPunishment(PUNISHMENT_CURRENT_LEVEL.id + 1);

            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if(PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope your %Ass% is glowing red purple now %Grin%');
                    }
                }
            });
        }
    }
}