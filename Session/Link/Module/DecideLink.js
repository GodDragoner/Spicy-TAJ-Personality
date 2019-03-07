{
    if(isInChastity()) {
        run(random('Session/Link/Module/Neutral/*.js', 'Session/Link/Module/Chastity/*.js'));
    } else {
        run(random('Session/Link/Module/NoChastity/*.js', 'Session/Link/Module/Neutral/*.js'))
    }
}

function tryRunLinkFetchId(minLinksSinceRun = 20) {
    return tryRunLink(getCurrentScriptName(), minLinksSinceRun);
}

function tryRunLink(moduleId, minLinksSinceRun = 20) {
    let maxTries = 10;

    //If we already ran that link today try more than 10 times
    if(isVar('todaysLinkHistory') && getVar('todaysLinkHistory').contains(moduleId)) {
        maxTries = 30;
    }

    if(isVar('linkHistory')) {
        let history = getVar('linkHistory');

        moduleId = moduleId.toLowerCase();

        if(history.contains(moduleId)) {
            //Check whether not enough modules have passed since last time we ran this link
            if(history.size() - history.lastIndexOf(moduleId) < minLinksSinceRun) {
                if(getVar('findLinkTries') < maxTries) {
                    //Try to find a different link
                    run("Session/Link/Module/DecideLink.js");
                    return false;
                }

                //Else
                //We tried too often so we are gonna let this one pass
            }
        }
    }

    addRunLink(moduleId);
    return true;
}

function addRunLink(linkId) {
    setVar('linkHistory', getAndAddRunLinkFromVarArray(linkId, 'linkHistory'));
    setTempVar('todaysLinkHistory', getAndAddRunLinkFromVarArray(linkId, 'todaysLinkHistory'));
}

function getAndAddRunLinkFromVarArray(linkId, varName) {
    let history = new java.util.ArrayList();

    if(isVar(varName)) {
        history = getVar(varName);
    }

    linkId = linkId.toLowerCase();

    if(history.contains(linkId)) {
        history.remove(linkId);
    }

    history.add(linkId);

    return history;
}
