{
    //No easy punishments bondage
    if (PUNISHMENT_CURRENT_LEVEL.id < PUNISHMENT_LEVEL.MEDIUM.id) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.BONDAGE)) {
        let options = [];

        if(PUNISHMENT_CURRENT_LEVEL.id >= PUNISHMENT_LEVEL.MEDIUM.id) {
            options.push(0);
        }

        if(PUNISHMENT_CURRENT_LEVEL.id >= PUNISHMENT_LEVEL.HARD.id) {

        }

        if(PUNISHMENT_CURRENT_LEVEL.id >= PUNISHMENT_LEVEL.EXTREME.id) {

        }

        switch(random(options)) {
            case 0:
                break;
            case 1:
                break;
        }

        setPunishmentTransitionHandler({
            handleTransition: function (nextCategory, nextLevel) {
                //First punishment
                if(PUNISHMENTS_DONE === 1) {
                    sendMessage('I hope this "pause" helped you calm down %Grin%');
                } else {
                    sendMessage('I hope this time you spend bound up helped you remember your place %Grin%');
                }
            }
        });
    }
}