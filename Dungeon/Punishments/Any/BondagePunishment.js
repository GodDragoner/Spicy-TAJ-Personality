{
    //No easy punishments bondage and no bondage after three punishments were already done
    if (PUNISHMENT_CURRENT_LEVEL.id < PUNISHMENT_LEVEL.MEDIUM.id || PUNISHMENTS_DONE >= 2) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else if (tryRunPunishmentFetchId(MODULE.BONDAGE)) {
        PUNISHMENT_MULTIPLIER_CURRENT = randomInteger(3, 4);

        let options = [];

        if(PUNISHMENT_CURRENT_LEVEL.id === PUNISHMENT_LEVEL.MEDIUM.id) {
            options.push(0);
            options.push(1);
        }

        if(PUNISHMENT_CURRENT_LEVEL.id === PUNISHMENT_LEVEL.HARD.id) {
            options.push(0);
            options.push(1);
            options.push(2);
        }

        if(PUNISHMENT_CURRENT_LEVEL.id >= PUNISHMENT_LEVEL.EXTREME.id) {
            options.push(2);
            options.push(3);
        }

        let level = random(options);
        createBondageInstructions(level);

        //Max 40 minutes, min 15 minutes
        let timeMinutes = Math.max(15, Math.min(Math.ceil(getVar(VARIABLE.DEVOTION)/2), (PUNISHMENT_CURRENT_LEVEL.id + getStrictnessForCharacter())*10));

        sendMessage('I want you to stay exactly as I described for ' + timeMinutes + ' minutes');
        sendMessage('Since you probably can\'t tell me when you are ready because you are bound you will have to set a timer yourself as soon as you start');
        sendMessage('Just tell me when you are back after your time has run out');

        let current = setDate();
        current.addMinute(timeMinutes);

        while(true) {
            //Four times the minute time before it times out
            waitForBack(timeMinutes*60*4);
            if(current.hasPassed()) {
                break;
            } else {
                sendMessage('You can\'t possibly be done already!');
                sendMessage('Stop trying to cheat %SlaveName%');

                //TODO: Combine into one and then have a set amount of merit change and pp per reason
                changeMeritMedium(true);
                addPunishmentPoints(100, PUNISHMENT_REASON.CHEATING);

                sendMessage('I do not tolerate cheating!');
            }
        }

        //Remove clamps after bondage. They have been on long enough
        removeAllClamps();
        removeNippleClamps();

        setPunishmentTransitionHandler({
            handleTransition: function (nextCategory, nextLevel) {
                //First punishment
                if(PUNISHMENTS_DONE === 1) {
                    sendMessage('I hope this quite long "pause" helped you calm down %Grin%');
                } else {
                    sendMessage('I hope this time you spend bound up helped you remember your place %Grin%');
                }
            }
        });
    }
}