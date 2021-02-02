
const MODULE_HISTORY = createHistory('module');
const LINK_HISTORY = createHistory('link');
const END_LINK_HISTORY = createHistory('endLink');
const START_HISTORY = createHistory('start');
const ORGASM_HISTORY = createHistory('orgasm');
const PUNISHMENT_HISTORY = createHistory('punishment');

function createHistory(name) {
    const history = {name: name, historyVar: name + 'History', todaysHistoryVar: 'todays' + name  + 'History',
        isInHistory : function(moduleId) {
            return isVar(this.historyVar) && tryGetArrayList(this.historyVar).contains(moduleId + "");
        },

        getModulesSinceHistory : function(moduleId) {

            if(!this.isInHistory(moduleId)) {
                return -1;
            }

            let historyArray = tryGetArrayList(this.historyVar);

            //sendDebugMessage('Modules in ' + name + ' history since id: ' + (historyArray.size() - historyArray.lastIndexOf(moduleId)));
            return historyArray.size() - historyArray.lastIndexOf(moduleId + "");
        },

        isInTodaysHistory : function(moduleId) {
            return isVar(this.todaysHistoryVar) && getVar(this.todaysHistoryVar).contains(moduleId + "");
        },

        addHistoryRun : function(moduleId) {
            setVar(this.historyVar, this.getAndAddHistoryFromVarArray(moduleId, this.historyVar));
            setTempVar(this.todaysHistoryVar, this.getAndAddHistoryFromVarArray(moduleId, this.todaysHistoryVar));
        },

        getAndAddHistoryFromVarArray : function(moduleId, varName) {
            let history = new java.util.ArrayList();

            if(isVar(varName)) {
                history = tryGetArrayList(varName);
            }

            if(history.contains(moduleId  + "")) {
                //index of because if moduleId is an integer we would try to remove the index instead of the object
                history.remove(history.indexOf(moduleId  + ""));
            }

            history.add(moduleId  + "");

            return history;
        },

        getRandomAvailableId : function(min, max, minLastUsage = 2) {
            let number = randomInteger(min, max);

            while(this.isInHistory(number + "") && this.getModulesSinceHistory(number + "") < minLastUsage) {
                number = randomInteger(min, max);
            }

            return number;
        },

        clearHistory : function () {
            setVar(this.historyVar, new java.util.ArrayList());
            setTempVar(this.todaysHistoryVar, new java.util.ArrayList());
        }
    };

    return history;
}

function createFileHistory(name, folders) {
    let history = createHistory(name);

    let availableFiles = [];

    for(let x = 0; x < folders.length; x++) {
        let folder = folders[x];

        let scriptFilesInFolder = getScriptFilesInFolder(folder);

        if(scriptFilesInFolder.length === 0) {
            sendDebugMessage('Folder ' + folder + ' does not contain any script files');
        }

        for(let y = 0; y < scriptFilesInFolder.length; y++) {
            availableFiles.push(scriptFilesInFolder[y]);
        }
    }

    history.availableFiles = availableFiles;

    history.getRandomAvailableFile = function() {
        let filesAvailable = history.availableFiles.length;

        let file = random(history.availableFiles);
        let fileId = getFileId(file);
        let tries = 0;

        //-2 so we don't always have the same order -1 would result in a unique file every time but the order would always be the same
        while(this.isInHistory(fileId + "") && this.getModulesSinceHistory(fileId + "") < filesAvailable - 2 && tries < filesAvailable*filesAvailable) {
            file = random(history.availableFiles);
            fileId = getFileId(file);
            tries++;
        }

        return file;
    };


    return history;
}

function createTempIntegerHistory(min, max) {
    const history = {minId: min, maxId: max, historyList: new java.util.ArrayList(),
        isInHistory : function(id) {
            return this.historyList.contains(id);
        },

        getEntriesSince : function(id) {
            if(!this.isInHistory(id)) {
                return -1;
            }

            return this.historyList.size() - this.historyList.lastIndexOf(id);
        },

        addHistoryRun : function(id) {
            this.historyList.add(id);
        },

        getRandomAvailableId : function(minLastUsage = 2) {
            let number = randomInteger(min, max);

            while(this.isInHistory(number) && this.getEntriesSince(number) < minLastUsage) {
                number = randomInteger(min, max);
            }

            return number;
        },

        clearHistory : function () {
            this.historyList.clear();
        }
    };

    return history;
}