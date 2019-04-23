{
    setTempVar('findStartTries', 0);

    if(isInChastity()) {
        setTempVar('minStartsSinceRun', neutralStartAmount + chastityStartAmount);

        run(random('Session/Start/Neutral/*.js', 'Session/Start/Chastity/*.js'));
    } else {
        setTempVar('minStartsSinceRun',  neutralStartAmount + nonChastityStartAmount);

        run(random('Session/Start/NoChastity/*.js', 'Session/Start/Neutral/*.js'))
    }
}

function tryRunStartFetchId(minStartsSinceRun) {
    return tryRunStart(getCurrentScriptName(),  minStartsSinceRun);
}

function tryRunStart(startId, minStartsSinceRun) {
    if(minStartsSinceRun === undefined) {
        minStartsSinceRun = getVar('minStartsSinceRun', 0);
    }

    //Keep track of how many times we tried to find a start
    setTempVar('findStartTries', getVar('findStartTries', 0) + 1);

    let maxTries = 10;

    startId = startId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (START_HISTORY.isInTodaysHistory(startId)) {
        maxTries = 30;
    }

    if (START_HISTORY.isInHistory(startId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (START_HISTORY.getModulesSinceHistory(startId) < minStartsSinceRun) {
            if(getVar('findStartTries') < maxTries) {
                //Try to find a different start
                run("Session/Start/DecideStart.js");
                return false;
            }
        }
    }

    sendDebugMessage('Executing start and adding to history');

    START_HISTORY.addHistoryRun(startId);
    return true;
}
