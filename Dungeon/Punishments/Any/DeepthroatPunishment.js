{
    //Only if we have reached level 30 already
    if (getVar(VARIABLE.BLOWJOB_LEVEL) < 30) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.DEEPTHROAT)) {
        let toy = fetchBlowjobDildo();

        if(toy != null) {
            if(isGaged()) {
                removeGag();
            }

            sendMessage('Let\'s punish and train your throat %SlaveName%');

            startDeepthroatTasks((PUNISHMENT_CURRENT_LEVEL.id + 1)*8, false, decideDeepthroatBowl());

            sendMessage('You can put your ' + toy + ' aside for now');

            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if(PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with your throat being sore will definitely remind you of your place %Grin%');
                    } else {
                        sendMessage('It\'s never too bad to combine training with some punishment %Grin%');
                    }
                }
            });
        } else {
            sendMessage("I guess I have to think of something different to punish you");
            runPunishment(PUNISHMENT_CURRENT_LEVEL);
        }
    }
}