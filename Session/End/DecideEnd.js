{
    sendMessage('%SlaveName%');
    sendMessage(random('We\'re at the end mark of today\'s session', 'We\'re at the end of our session', 'This is the end of our session'));

    if (isForcedLockedUp()) {
        //TODO: Endings with chastity on

        sendMessage(random('As you well know %SlaveName%', 'As you should well know', 'As is well known', 'Well'));
        sendMessage(random('You\'re currently serving a chastity sentence', 'You are right now being punished'));
        sendMessage(random('So there won\'t be any funny business today!', 'So there is absolutely no chance of you cumming!'));
    } else {
        runEndGame();
    }

    //Denial limit reached
    if (getLastEjaculationDate().addDay(VARIABLE_DENIAL_LIMIT).hasPassed()) {
        run('Session/End/HardLimit.js');
    }

    endSpicySession();
}

