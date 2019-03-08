{

    sendMessage('%SlaveName%');
    sendMessage('We\'re at the end mark of today\'s session', 'We\'re at the end of our session' ,'This is the end of our session');

    //TODO: Run end file or game or whatever

    if (isForcedLockedUp()) {
        //TODO: Endings with chastity on

        sendMessage(random('As you well know %SlaveName%', 'As you should well know', 'As is well known', 'Well'));
        sendMessage(random('You\'re currently serving a chastity sentence', 'You are right now being punished'));
        sendMessage(random('So there won\'t be any funny business today!', 'So there is absolutely no chance of you cumming!'));
    }

    //Denial limit reached
    if(getVar(VARIABLE_LAST_ORGASM).add(VARIABLE_DENIAL_LIMIT).hasPassed()) {
        run('Session/End/HardLimit.js');
    }

    if(getVar(VARIABLE_CHASTITY_TRAINING, false) && !isForcedLockedUp()) {

    } else {
        //Lock up part
        if (!isInChastity() && willKeepChastityOn()) {
            lockChastityCage();
            //TODO: Interactive stuff?
        }
    }


    run('Session/End/Farewell.js');

    //Update last session date
    setDate(VARIABLE_LAST_TEASE_SESSION);

    handleTodaysMood();

    //Back to the lobby
    run("Assistant/AssistantLobby.js");
}