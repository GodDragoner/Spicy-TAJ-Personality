const MODULES_FOR_CATEGORY = new Map();

function getModuleForCategory(category) {
    //Keep track of how many times we tried to find a module in a category since last decide module call
    incrementTempVar('findModuleTries', 1, 0);
    setTempVar('lastModuleCategory', category);

    //Infinite loop?
    /*if(getVar('findModuleTries', 0) > 20) {
        if(category !== CATEGORY_TEASE) {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying tease now');
            category = CATEGORY_TEASE;
        } else {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying slave now');
            category = CATEGORY_SLAVE;
        }
    }*/

    if(!MODULES_FOR_CATEGORY.has(category)) {
        let availableFiles = [];

        const neutralPath = getModuleTypeCategoryPath(category, 'Neutral');
        const noChastityPath = getModuleTypeCategoryPath(category, 'NoChastity');
        const dynamicPath = getModuleTypeCategoryPath(category, 'Dynamic');

        if (getFile(getPersonalityPath() + PATH_SEPARATOR + neutralPath).exists()) {
            pushElementsToOtherArray(getScriptFilesInFolder(neutralPath + PATH_SEPARATOR), availableFiles);
        }

        if (getFile(getPersonalityPath() + PATH_SEPARATOR + noChastityPath).exists() && !isInChastity()) {
            pushElementsToOtherArray(getScriptFilesInFolder(noChastityPath + PATH_SEPARATOR), availableFiles);
        }

        if (getFile(getPersonalityPath() + PATH_SEPARATOR + dynamicPath).exists()) {
            pushElementsToOtherArray(getScriptFilesInFolder(dynamicPath + PATH_SEPARATOR), availableFiles);
        }

        shuffle(availableFiles);

        MODULES_FOR_CATEGORY.set(category, availableFiles);
    }

    if(MODULES_FOR_CATEGORY.get(category).length === 0) {
        sendDebugMessage('Unable to find module for category ' + category + ' to run');
        incrementTempVar('findModuleTries', 50, 0);

        if(category !== CATEGORY_TEASE) {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying tease now');
            category = CATEGORY_TEASE;
        } else {
            sendDebugMessage('Stuck in module ' + category + ' loop . Trying slave now');
            category = CATEGORY_SLAVE;
        }

        MODULES_FOR_CATEGORY.delete(category);
        return getModuleForCategory(category);
    } else {
        let file = MODULES_FOR_CATEGORY.get(category).pop();
        let path = getRelativePersonalityFilePath(file);
        sendDebugMessage('Trying to run module ' + path);
        return path;
    }

    //return paths[randomInteger(0, paths.length - 1)];
}

function runModuleCategory(category) {
    run(getModuleForCategory(category));
}

function getDefaultModulesSinceRun() {
    return 3;
}

function tryRunModuleFetchId(minModulesSinceRun = getDefaultModulesSinceRun(), subCategories = MODULE.UNKNOWN) {
    return tryRunModule(getCurrentScriptName(), getVar('lastModuleCategory'), minModulesSinceRun, subCategories);
}

function tryRunModule(moduleId, category, minModulesSinceRun = 3, subCategories) {
    let maxTries = 10;

    //Check if that module category was in the previous module so we get some variation
    let categoryInPreviousModule = subCategories !== MODULE.UNKNOWN && hasPreviousModuleHadCategory(subCategories);

    sendDebugMessage('Trying to run module ' + moduleId + ' from category ' + subCategories + ' and was in previous module is ' + categoryInPreviousModule);

    moduleId = moduleId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (MODULE_HISTORY.isInTodaysHistory(moduleId)) {
        maxTries = 30;
        minModulesSinceRun = 10;
    }

    if (MODULE_HISTORY.isInHistory(moduleId) || categoryInPreviousModule) {
        //Check whether not enough modules have passed since last time we ran this module
        if (MODULE_HISTORY.getModulesSinceHistory(moduleId) < minModulesSinceRun  || categoryInPreviousModule) {
            let tries = getVar('findModuleTries');
            if (tries < maxTries / 2) {
                //Try to run from same category
                runModuleCategory(category);
                return false;
            } else if (tries < maxTries) {
                //Try to find a different module
                run("Session/Modules/DecideModule.js");
                return false;
            }
            //Else
            //We tried too often so we gotta let this pass
        }
    }

    MODULE_HISTORY.addHistoryRun(moduleId);
    registerCurrentModuleCategory(subCategories);

    return true;
}

function testModules() {
    sendDebugMessage('Testing given modules');
    run("Session/Modules/Tease/NoChastity/EnduranceStrokes.js");
}

function getModuleTypeCategoryPath(category, type) {
    return 'Session' + PATH_SEPARATOR + 'Modules' + PATH_SEPARATOR + category + PATH_SEPARATOR + type;
}
