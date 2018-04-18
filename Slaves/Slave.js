
function addPunishmentPoints(amount) {
    const points = getVar(VARIABLE_PUNISHMENT_POINTS);

    if(points + amount > 0) {
        setVar(VARIABLE_PUNISHMENT_POINTS, points + amount);
    } else {
        setVar(VARIABLE_PUNISHMENT_POINTS, 0);
    }
}

function addGold(amount) {
    const gold = getVar(VARIABLE_GOLD);

    if(gold + amount > 0) {
        setVar(VARIABLE_GOLD, gold + amount);
    } else {
        setVar(VARIABLE_GOLD, 0);
    }
}

function setFullTime() {
    return setVar(VARIABLE_SLAVE_TYPE, 1);
}

function setPartTime() {
    return setVar(VARIABLE_SLAVE_TYPE, 0);
}

function isFullTime() {
    return getVar(VARIABLE_SLAVE_TYPE) == 1;
}