{
    //Check for CBT Limit and whether the user is in chastity
    if (!CBT_LIMIT.isAllowed() || isInChastity() || !PARACHUTE_TOY.hasToy() || !PARACHUTE_TOY.isPunishmentAllowed()) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.BALL_TORTURE)) {
            if(PARACHUTE_TOY.fetchToy()) {
                sendMessage('Now...');
                sendMessage('Attach it while you\'re at it %Lol%');
                sendMessage('Tell me when you are ready');
                waitForDone();
                PARACHUTE_TOY.setToyOn(true);

                attachWeightToParachute();
                sendMessage('%Good%');

                goToCorner(getCornerTime()*(PUNISHMENT_CURRENT_LEVEL.id + 1));
                sendMessage('You can remove the parachute now %SlaveName% %EmoteHappy%');

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

                PARACHUTE_TOY.setToyOn(false);
            } else {
                sendMessage("I guess I have to think of something different to play with your balls");
                runPunishment(PUNISHMENT_CURRENT_LEVEL);
            }
        }
    }
}