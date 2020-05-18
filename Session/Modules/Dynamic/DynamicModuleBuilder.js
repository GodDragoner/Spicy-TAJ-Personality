//Categories

const MODULE = {
    CBT: 0,
    ANAL: 1,
    BALL_TORTURE: 2,
    COCK_TORTURE: 3,
    UNKNOWN: 4,
    BLOWJOB: 5,
    STROKING: 6,
    WATCH_VIDEO: 7,
    HUMILIATION: 8,
    TASKS: 9,
    CORNER_TIME: 10,
    LINE_WRITING: 11,
    ENEMA: 12,
    SPANKING: 13,
    E_STIM: 14,
    PEG: 15,
    BONDAGE: 16,
    DEEPTHROAT: 17,
};


const TRANSITION_NO = 0;
const TRANSITION_ALWAYS = 1;
const TRANSITION_POSSIBLE = 2;


const PREVIOUS_MODULE_CATEGORIES = new java.util.ArrayList();

const DYNAMIC_MODULES = [];


function registerCurrentModuleCategory(category) {
    PREVIOUS_MODULE_CATEGORIES.add(category);
}

function hasOneOfPreviousModulesHadCategory(category) {
    return PREVIOUS_MODULE_CATEGORIES.contains(category);
}

function hasPreviousModuleHadCategory(category) {
    return PREVIOUS_MODULE_CATEGORIES.size() > 0 && PREVIOUS_MODULE_CATEGORIES.get(PREVIOUS_MODULE_CATEGORIES.size() - 1) === category;
}

function clearPreviousModuleHistory() {
    PREVIOUS_MODULE_CATEGORIES.clear();
}

function registerDynamicModule(module) {
    module.moduleId = getCurrentScriptName().toLowerCase();
    module.getChance = function () {
        let chance = this.frequency;

        if (MODULE_HISTORY.isInTodaysHistory(this.moduleId)) {
            chance *= this.repeatPerSession / 10;
        }

        let minModulesSinceRun = 3;

        if (MODULE_HISTORY.isInHistory(this.moduleId)) {
            //Check whether not enough modules have passed since last time we ran this module
            if (MODULE_HISTORY.getModulesSinceHistory(this.moduleId) < minModulesSinceRun) {
                let tries = getVar('findModuleTries');
                /*if (tries < maxTries / 2) {
                    //Try to run from same category
                    runModuleCategory(category);
                    return false;
                } else if (tries < maxTries) {
                    //Try to find a different module
                    run("Session/Modules/DecideModule.js");
                    return false;
                }*/
                //Else
                //We tried too often so we gotta let this pass

                return 0;
            }
        }

        return chance;
    };


    module.preRun = function () {
        MODULE_HISTORY.addHistoryRun(this.moduleId);
        this.run();
    };

    DYNAMIC_MODULES.push(module);
}