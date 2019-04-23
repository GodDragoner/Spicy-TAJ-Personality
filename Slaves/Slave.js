
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

    let multiplier = 1;

    //TODO: Base on amount of recent pp too?
    if(isVar(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE)) {
        multiplier = getVar(VARIABLE_PUNISHMENT_POINT_MULTIPLIER);
        let hoursSinceLastChange = Math.floor((new Date().getMilliseconds() - getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).getTimeInMillis())/(1000*60*60));

        /*let minuteMultipliers = [2, 4, 6];
        let minuteMultiplier = minuteMultipliers[ACTIVE_PERSONALITY_STRICTNESS];

        //Check whether we had at least x minutes without punishment points assigned
        //480 = 8 hours
        if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(480*minuteMultiplier).hasPassed()) {
            multiplier -= 0.2;
        }
        //360 = 6 hours
        else if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(360*minuteMultiplier).hasPassed()) {
            multiplier -= 0.1;
        }
        //180 = 3 hours
        else if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(180*minuteMultiplier).hasPassed()) {
            multiplier -= 0.05;
        }
        //Neutral case
        //120 = 2 hours
        else if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(120*minuteMultiplier).hasPassed()) {
            multiplier += 0;
        }
        //30 = 0.5 hours
        else if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(30*minuteMultiplier).hasPassed()) {
            multiplier += 0.1;
        }
        //20 = 0.33 hours
        else if(getDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE).addMinute(20*minuteMultiplier).hasPassed()) {
            multiplier += 0.15;
        } else {
            multiplier += 0.2;
        }*/

        let mood = getMood();
        multiplier += Math.max(0.25, 0.1*(mood*ACTIVE_PERSONALITY_STRICTNESS + 10) - 0.1*hoursSinceLastChange/(Math.max(1, ACTIVE_PERSONALITY_STRICTNESS) + 1));

        multiplier = Math.min(3, Math.max(0.5, multiplier));

        //Update new multiplier
        setVar(VARIABLE_PUNISHMENT_POINT_MULTIPLIER, multiplier);
    } else {
        setVar(VARIABLE_PUNISHMENT_POINT_MULTIPLIER, 1);
    }

    setDate(VARIABLE_LAST_PUNISHMENT_POINT_CHANGE);

    setVar(VARIABLE_PUNISHMENT_POINTS, Math.max(0, points*multiplier + amount));
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