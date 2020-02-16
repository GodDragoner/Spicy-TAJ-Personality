{
    sendMessage('%SlaveName%');
    sendMessage(random('We\'re at the end mark of today\'s session', 'We\'re at the end of our session', 'This is the end of our session'));

    if (isForcedLockedUp()) {
        sendMessage(random('As you well know %SlaveName%', 'As you should well know', 'As is well known', 'Well'));
        sendMessage(random('You\'re currently serving a chastity sentence', 'You are right now being punished'));
        sendMessage(random('So there won\'t be any funny business today!', 'So there is absolutely no chance of you cumming!'));
    } else {
        //Denial limit reached
        if (getLastEjaculationDate().addDay(getVar(VARIABLE.DENIAL_LIMIT)).hasPassed()) {
            run('Session/End/HardLimit.js');
        }

        //If we haven't given the sub the freedom to choose how he cums we can run our endgame
        if(!isVar(VARIABLE.DENIAL_HARD_LIMIT_FREEDOM_TODAY)) {
            runEndGame();
        }
    }

    endSpicySession();
}

