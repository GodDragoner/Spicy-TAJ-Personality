{
    sendMessage('%SlaveName%');
    sendMessage(random('We\'re at the end mark of today\'s session', 'We\'re at the end of our session', 'This is the end of our session'));

    if (isForcedLockedUp()) {
        sendMessage(random('As you well know %SlaveName%', 'As you should well know', 'As is well known', 'Well'));
        sendMessage(random('You\'re currently serving a chastity sentence'));
        sendMessage(random('So there won\'t be any funny business today!', 'So there is absolutely no chance of you cumming!'));
        SKIP_END_GAME = true;
    } else if (isDeniedCumming()) {
        sendMessage(random('As you well know %SlaveName%', 'As you should well know', 'As is well known', 'Well'));
        sendMessage(random('You\'re aren\'t getting any chance to cum currently'));
        sendMessage(random('So there won\'t be any funny business today!', 'So I got nothing else to give to you'));
        SKIP_END_GAME = true;
    } else {
        //Denial limit reached
        if (getLastEjaculationDate().addDay(getVar(VARIABLE.DENIAL_LIMIT)).hasPassed()) {
            run('Session/End/HardLimit.js');
        }
    }

    //Run the end game never the less, SKIP_END_GAME will be handled per game to still account for distribution of orgasm points and so on
    //If we haven't given the sub the freedom to choose how he cums we can run our endgame
    if (!isVar(VARIABLE.DENIAL_HARD_LIMIT_FREEDOM_TODAY)) {
        runEndGame();
    }

    endSpicySession();
}

