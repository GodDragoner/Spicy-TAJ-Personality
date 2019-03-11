{

    setTempVar('findLinkTries', 0);

    if(isInChastity()) {
        run(random('Session/Link/Module/Neutral/*.js', 'Session/Link/Module/Chastity/*.js'));
    } else {
        run(random('Session/Link/Module/NoChastity/*.js', 'Session/Link/Module/Neutral/*.js'))
    }
}

function tryRunLinkFetchId(minLinksSinceRun = 20) {
    return tryRunLink(getCurrentScriptName(),  minLinksSinceRun);
}

function tryRunLink(moduleId, minLinksSinceRun = 20) {
    //Keep track of how many times we tried to find a link
    setTempVar('findLinkTries', getVar('findLinkTries', 0) + 1);

    let maxTries = 10;

    moduleId = moduleId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (LINK_HISTORY.isInTodaysHistory(moduleId)) {
        maxTries = 30;
    }

    if (LINK_HISTORY.isInHistory(moduleId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (LINK_HISTORY.getModulesSinceHistory(moduleId) < minLinksSinceRun) {
            if(getVar('findLinkTries') < maxTries) {
                //Try to find a different link
                run("Session/Link/Module/DecideLink.js");
                return false;
            }
        }
    }

    LINK_HISTORY.addHistoryRun(moduleId);
    return true;
}
