
const MODULE_HISTORY = createHistory('module');
const LINK_HISTORY = createHistory('link');
const ORGASM_HISTORY = createHistory('orgasm');

function createHistory(name) {
    const history = {name: name, historyVar: name + 'History', todaysHistoryVar: 'todays' + name  + 'History',
        isInHistory : function(moduleId) {
            return isVar(this.historyVar) && getVar(this.historyVar).contains(moduleId);
        },

        getModulesSinceHistory : function(moduleId) {
            if(!this.isInHistory(moduleId)) {
                return -1;
            }

            let historyArray = getVar(this.historyVar);

            return historyArray.size() - history.lastIndexOf(moduleId);
        },

        isInTodaysHistory : function(moduleId) {
            return isVar(this.todaysHistoryVar) && getVar(this.todaysHistoryVar).contains(moduleId);
        },

        adddHistoryRun : function(moduleId) {
            setVar(this.historyVar, getAndAddRunModuleFromVarArray(moduleId, this.historyVar));
            setTempVar(this.todaysHistoryVar, getAndAddRunModuleFromVarArray(moduleId, this.todaysHistoryVar));
        },

        getAndAddHistoryFromVarArray : function(moduleId, varName) {
            let history = new java.util.ArrayList();

            if(isVar(varName)) {
                history = getVar(varName);
            }

            moduleId = moduleId.toLowerCase();

            if(history.contains(moduleId)) {
                history.remove(moduleId);
            }

            history.add(moduleId);

            return history;
        }
    };
}