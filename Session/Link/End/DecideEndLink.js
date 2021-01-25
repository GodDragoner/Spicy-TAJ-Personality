{
    setTempVar('findLinkTries', 0);

    findEndLinkAndRun();
}

function findEndLinkAndRun() {
    let options;

    if(isInChastity()) {
        options = ['Session/Link/End/Neutral/*.js', 'Session/Link/End/Chastity/*.js'];
        sendDebugMessage('Trying to run chastity end link');

        setTempVar('minLinksSinceRun', END_LINK.neutralLinkAmount + END_LINK.chastityLinkAmount);

        let winner = getWinnerIndex([END_LINK.neutralLinkAmount, END_LINK.chastityLinkAmount]);

        run(options[winner]);
    } else {
        options = ['Session/Link/End/Neutral/*.js', 'Session/Link/End/NoChastity/*.js'];
        sendDebugMessage('Trying to run non chastity end link');

        setTempVar('minLinksSinceRun',  END_LINK.neutralLinkAmount + END_LINK.nonChastityLinkAmount);

        let winner = getWinnerIndex([END_LINK.neutralLinkAmount, END_LINK.nonChastityLinkAmount]);

        run(options[winner]);
    }
}

function tryRunEndLinkFetchId(minLinksSinceRun) {
    return tryRunEndLink(getCurrentScriptName(),  minLinksSinceRun);
}

function tryRunEndLink(linkId, minLinksSinceRun) {
    if(minLinksSinceRun === undefined) {
        minLinksSinceRun = getVar('minLinksSinceRun', 0);
    }

    //Keep track of how many times we tried to find a link
    setTempVar('findLinkTries', getVar('findLinkTries', 0) + 1);

    let maxTries = 10;

    linkId = linkId.toLowerCase();

    //If we already ran that link today try more than 10 times
    if (END_LINK_HISTORY.isInTodaysHistory(linkId)) {
        maxTries = 30;
    }

    if (END_LINK_HISTORY.isInHistory(linkId)) {
        //Check whether not enough links have passed since last time we ran this module
        if (END_LINK_HISTORY.getModulesSinceHistory(linkId) < minLinksSinceRun) {
            if(getVar('findLinkTries') < maxTries) {
                //Try to find a different link
                findEndLinkAndRun();
                return false;
            }
        }
    }

    sendDebugMessage('Executing end link and adding to history');

    END_LINK_HISTORY.addHistoryRun(linkId);
    return true;
}
