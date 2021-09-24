{
    //no after three punishments were already done
    if (PUNISHMENTS_DONE > 2) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.UNKNOWN)) {
        PUNISHMENT_MULTIPLIER_CURRENT = randomInteger(3, 4);

        sendMessage('I need to leave you alone for some time so...');

        let categoriesAllowed = ['bondage'];

        if (ANAL_LIMIT.isAllowed()) {
            categoriesAllowed.push('anal');
        }

        if (CBT_LIMIT.isAllowed()) {
            categoriesAllowed.push('cbt');
        }

        if (PAIN_LIMIT.isAllowed()) {
            categoriesAllowed.push('pain');
        }

        if (getBlowjobLevel() >= 20) {
            categoriesAllowed.push('deepthroat');
        }

        let lines = new java.util.ArrayList();
        generateDailyTeaseRouletteInstructions(lines, categoriesAllowed, ONLINE_TEASE_TYPE.ROULETTE, true, (PUNISHMENT_CURRENT_LEVEL.id + 1) * 10, false);

        for (let x = 0; x < lines.size(); x++) {
            sendMessage(lines.get(x));
        }

        sendMessage('Report to me once you are done');
        waitForDone(1000000);

        sendMessage('Good %Grin%');

        setPunishmentTransitionHandler({
            handleTransition: function (nextCategory, nextLevel) {
                //First punishment
                if (PUNISHMENTS_DONE === 1) {
                    sendMessage('Starting off with such a random roulette was certainly fun %Grin%');
                } else {
                    sendMessage('Such a random roulette was certainly fun %Grin%');
                }
            }
        });
    }
}