//Categories
const MODULE_CBT = 0;
const MODULE_ANAL = 1;
const MODULE_BALL_TORTURE = 2;
const MODULE_COCK_TORTURE = 3;
const MODULE_UNKNOWN = 4;
const MODULE_BLOWJOB = 5;
const MODULE_STROKING = 6;
const MODULE_WATCH_VIDEO = 7;
const MODULE_HUMILIATION = 8;


const TRANSITION_NO = 0;
const TRANSITION_ALWAYS = 1;
const TRANSITION_POSSIBLE = 2;


const PREVIOUS_MODULE_CATEGORIES = new java.util.ArrayList();

const DYNAMIC_MODULES = [];


function registerCurrentModuleCategory(category) {
    PREVIOUS_MODULE_CATEGORIES.add(category);
}

function hasPreviousModuleHadCategory(category) {
    return PREVIOUS_MODULE_CATEGORIES.contains(category);
}

function clearPreviousModuleHistory() {
    PREVIOUS_MODULE_CATEGORIES.clear();
}


function registerDynamicModule(module) {
    module.moduleId = getCurrentScriptName().toLowerCase();
    module.getChance = function() {
        let chance = this.frequency;

        if (MODULE_HISTORY.isInTodaysHistory(this.moduleId)) {
            chance *= this.repeatPerSession/10;
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


    module.preRun = function() {
        MODULE_HISTORY.addHistoryRun(this.moduleId);
        this.run();
    };

    DYNAMIC_MODULES.push(module);
}