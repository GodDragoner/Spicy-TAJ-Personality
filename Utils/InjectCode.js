//run("Session/StartSession.js");

/*function getChastityEXPForLevel(level) {
    let loopLevel = 1;
    let exp = 100;

    while (loopLevel < level) {
        if (loopLevel >= 25) {
            exp += 65;
        } else if (loopLevel >= 20) {
            exp += 60;
        } else if (loopLevel >= 15) {
            exp += 55;
        } else {
            exp += 50;
        }

        loopLevel++;
    }

    return exp;
}

//sendMessage("I added your exp and your current level is " + getVar(VARIABLE_ASS_LEVEL));

for(let x = 2; x <= 30; x += 4) {
    sendDebugMessage('Level ' + x + ': ' + getChastityEXPForLevel(x));
}*/

//sendDebugMessage('You will need ' + (getChastityEXPForLevel(10) - getVar(VARIABLE_ASS_EXPERIENCE)) + ' more exp for the next level');
//unlockChastityCage();

/*MODULE_HISTORY.clearHistory();
run('Session/Modules/Humiliation/Dynamic/AnalHumiliation.js');
appendPenetratingSession('dildo');*/
//Reduce punishment point multiplier each day if the change would be negative

{
    let ppMultiplier = getPunishmentPointMultiplierChange();
    sendDebugMessage('PP Mutliplier change is ' + ppMultiplier);

    if (ppMultiplier < 0) {
        let currentMult = getVar(VARIABLE_PUNISHMENT_POINT_MULTIPLIER, 1);
        sendDebugMessage('Reducing pp multiplier from ' + currentMult);
        setPunishmentPointMultiplier(currentMult - ppMultiplier);
        sendDebugMessage('To ' + getVar(VARIABLE_PUNISHMENT_POINT_MULTIPLIER, 1))
    }
}