
const MODULE_HISTORY = createHistory('module');
const LINK_HISTORY = createHistory('link');
const START_HISTORY = createHistory('start');
const ORGASM_HISTORY = createHistory('orgasm');

function createHistory(name) {
    const history = {name: name, historyVar: name + 'History', todaysHistoryVar: 'todays' + name  + 'History',
        isInHistory : function(moduleId) {
            moduleId = String(moduleId).toLowerCase();

            return isVar(this.historyVar) && getVar(this.historyVar).contains(moduleId);
        },

        getModulesSinceHistory : function(moduleId) {
            moduleId = String(moduleId).toLowerCase();

            if(!this.isInHistory(moduleId)) {
                return -1;
            }

            let historyArray = getVar(this.historyVar);

            sendDebugMessage('Modules in ' + name + ' history since id: ' + (historyArray.size() - historyArray.lastIndexOf(moduleId)));
            return historyArray.size() - historyArray.lastIndexOf(moduleId);
        },

        isInTodaysHistory : function(moduleId) {
            moduleId = String(moduleId).toLowerCase();

            return isVar(this.todaysHistoryVar) && getVar(this.todaysHistoryVar).contains(moduleId);
        },

        addHistoryRun : function(moduleId) {
            moduleId = String(moduleId).toLowerCase();

            setVar(this.historyVar, this.getAndAddHistoryFromVarArray(moduleId, this.historyVar));
            setTempVar(this.todaysHistoryVar, this.getAndAddHistoryFromVarArray(moduleId, this.todaysHistoryVar));
        },

        getAndAddHistoryFromVarArray : function(moduleId, varName) {
            let history = new java.util.ArrayList();

            if(isVar(varName)) {
                history = getVar(varName);
            }

            moduleId = String(moduleId).toLowerCase();

            if(history.contains(String(moduleId))) {
                history.remove(String(moduleId));
            }

            history.add(String(moduleId));

            return history;
        },

        clearHistory : function () {
            setVar(this.historyVar, new java.util.ArrayList());
            setTempVar(this.todaysHistoryVar, new java.util.ArrayList());
        }
    };

    return history;
}