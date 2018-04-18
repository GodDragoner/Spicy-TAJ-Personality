var DOMME_MODES = ["slutMode", "slaveMode", "cuckMode", "loverMode", "chastityMode"];

//First time?
if(!isVar("crazyDommeModeSetDate")) {
    redistributeModes();
} else {
    const date = getVar("crazyDommeModeSetDate");
    if(date.hasPassed()) {
        redistributeModes();
    }
}

function redistributeModes() {
    setDate("crazyDommeModeSetDate", setDate("crazyDommeModeSetDate").addDay(randomInteger(4, 10)));

    for(let x = 0; x < DOMME_MODES.length; x++) {
        if(randomInteger(1, 100) <= 20) {
            if(!isVar(DOMME_MODES[x])) {
                setVar(DOMME_MODES[x], true);
            }
        } else if(isVar(DOMME_MODES[x])) {
            deleteVar(DOMME_MODES[x]);
        }
    }
}

