DOMME_MODES = ["slutMode", "slaveMode", "cuckMode", "loverMode", "chastityMode"];

//First time?
if(!isVar("crazyDommeModeSetDate")) {
    redistributeModes();
} else {
    date = getVar("crazyDommeModeSetDate");
    if(date.hasPassed()) {
        redistributeModes();
    }
}

function redistributeModes() {
    setDate("crazyDommeModeSetDate").addDay(randomInteger(4, 10));

    for(var x = 0; x < DOMME_MODES.length; x++) {
        if(randomInteger(1, 100) <= 20) {
            if(!isVar(DOMME_MODES[x])) {
                setVar(DOMME_MODES[x], true);
            }
        } else if(isVar(DOMME_MODES[x])) {
            deleteVar(DOMME_MODES[x]);
        }
    }
}

