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

sendDebugMessage(isVar(VARIABLE_LAST_PLUG_DATE));
sendDebugMessage(getVar(VARIABLE_LAST_PLUG_DATE).addMinute(randomInteger(7, 10)).hasPassed());