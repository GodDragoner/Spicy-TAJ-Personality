
const MODULE_HISTORY = createHistory('module');
const LINK_HISTORY = createHistory('link');
const START_HISTORY = createHistory('start');
const ORGASM_HISTORY = createHistory('orgasm');
const PUNISHMENT_HISTORY = createHistory('punishment');

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

            //sendDebugMessage('Modules in ' + name + ' history since id: ' + (historyArray.size() - historyArray.lastIndexOf(moduleId)));
            return historyArray.size() - historyArray.lastIndexOf(moduleId);
        },

        isInTodaysHistory : function(moduleId) {
            return isVar(this.todaysHistoryVar) && getVar(this.todaysHistoryVar).contains(moduleId);
        },

        addHistoryRun : function(moduleId) {
            setVar(this.historyVar, this.getAndAddHistoryFromVarArray(moduleId, this.historyVar));
            setTempVar(this.todaysHistoryVar, this.getAndAddHistoryFromVarArray(moduleId, this.todaysHistoryVar));
        },

        getAndAddHistoryFromVarArray : function(moduleId, varName) {
            let history = new java.util.ArrayList();

            if(isVar(varName)) {
                history = getVar(varName);
            }

            if(history.contains(moduleId)) {
                history.remove(moduleId);
            }

            history.add(moduleId);

            return history;
        },

        clearHistory : function () {
            setVar(this.historyVar, new java.util.ArrayList());
            setTempVar(this.todaysHistoryVar, new java.util.ArrayList());
        }
    };

    return history;
}