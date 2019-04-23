run("Session/Link/Link.js");
run("Session/Start/Start.js");

function endSpicySession() {
    askAboutDenialLevel();

    if(getVar(VARIABLE_CHASTITY_TRAINING, false) && !isForcedLockedUp()) {
        run('Session/End/ChastityTraining/ChastityTraining.js');
    } else {
        //Lock up part
        if (!isInChastity() && willKeepChastityOn()) {
            lockChastityCage();
            //TODO: Interactive stuff?
        }
    }

    if(getVar(VARIABLE_ASS_TRAINING, false)) {
        run('Session/End/AnalTraining/AnalTraining.js');
    }

    if(getVar(VARIABLE_BLOWJOB_TRAINING, false)) {
        run('Session/End/BlowjobTraining/BlowjobTraining.js');
    }

    run('Session/End/Farewell.js');

    //Update last session date
    setDate(VARIABLE_LAST_TEASE_SESSION);

    handleTodaysMood();

    setTempVar(VARIABLE_CURRENT_SESSION_ACTIVE, false);

    //Back to the lobby
    run("Assistant/AssistantLobby.js");
}

