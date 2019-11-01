{
    setTempVar('findLinkTries', 0);

    findLinkAndRun();
}

function findLinkAndRun() {
    if(isInChastity()) {
        sendDebugMessage('Running chastity link');

        setTempVar('minLinksSinceRun', neutralLinkAmount + chastityLinkAmount);

        run(random('Session/Link/Module/Neutral/*.js', 'Session/Link/Module/Chastity/*.js'));
    } else {
        sendDebugMessage('Running non chastity link');

        setTempVar('minLinksSinceRun',  neutralLinkAmount + nonChastityLinkAmount);

        run(random('Session/Link/Module/NoChastity/*.js', 'Session/Link/Module/Neutral/*.js'))
    }
}

function tryRunLinkFetchId(minLinksSinceRun) {
    return tryRunLink(getCurrentScriptName(),  minLinksSinceRun);
}

function tryRunLink(linkId, minLinksSinceRun) {
    if(minLinksSinceRun === undefined) {
        minLinksSinceRun = getVar('minLinksSinceRun', 0);
    }

    //Keep track of how many times we tried to find a link
    setTempVar('findLinkTries', getVar('findLinkTries', 0) + 1);

    let maxTries = 10;

    linkId = linkId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (LINK_HISTORY.isInTodaysHistory(linkId)) {
        maxTries = 30;
    }

    if (LINK_HISTORY.isInHistory(linkId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (LINK_HISTORY.getModulesSinceHistory(linkId) < minLinksSinceRun) {
            if(getVar('findLinkTries') < maxTries) {
                //Try to find a different link
                findLinkAndRun();
                return false;
            }
        }
    }

    sendDebugMessage('Executing link and adding to history');

    LINK_HISTORY.addHistoryRun(linkId);
    return true;
}
