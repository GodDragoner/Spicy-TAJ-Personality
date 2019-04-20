
function getTrainingEXPMultiplier(tasksInRow) {
    if (getVar(tasksInRow) >= 15) {
        return 4;
    } else if (getVar(tasksInRow) >= 10) {
        return 3;
    } else if (getVar(tasksInRow) >= 5) {
        return 2;
    }

    return 1;
}

function startKneeling() {
    playSound('Audio\\Spicy\\Commands\\Kneel\\*.mp3');
    sendMessage(random('Kneel for me', 'Get down on your knees', 'Down on your knees, right now', 'I want you to kneel for me,') + ' %SlaveName%');
    setTempVar(VARIABLE_IS_KNEELING, true);
}

function addPunishmentPoints(amount) {
    const points = getVar(VARIABLE_PUNISHMENT_POINTS);

    if(points + amount > 0) {
        setVar(VARIABLE_PUNISHMENT_POINTS, points + amount);
    } else {
        setVar(VARIABLE_PUNISHMENT_POINTS, 0);
    }
}

function addGold(amount) {
    const gold = getGold();

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