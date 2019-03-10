
function willKeepChastityOn(end) {
    let choice = randomInteger(1, 100);

    if(end) {
        if(getVar(VARIABLE_LONG_TERM_CHASTITY, false)) {
            return true;
        }

        //Lower base chance of unlocking at end
        choice = randomInteger(1, 100 - getVar(VARIABLE_CHASTITY_LEVEL, 0)*3);
    }

    if (getVar(VARIABLE_HAPPINESS) > getVar(VARIABLE_ANGER)) {
        choice += randomInteger(1, 25);
    } else {
        choice -= randomInteger(1, 25);
    }

    if (getVar(VARIABLE_LUST) > 30) {
        choice += randomInteger(1, 25);
    }

    let choices = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 1, 5, 5, 10, 10, 15, 25, 30, 35, 40];
    let index = 0;

    if (getMonthlyGoodDays() <= getMonthlyBadDays()) {
        index += 1;
    }

    if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
        choices = [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 5, 10, 10, 15, 15, 20, 30, 35, 40, 50];
    } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
        choices = [40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 10, 15, 15, 20, 20, 30, 40, 50, 60, 70];
    }

    if (!isVar("chastityMode")) {
        index += 10;
    }

    const mood = getMood();
    if (mood == PLEASED_MOOD) {
        index += 2;
    } else if (mood == NEUTRAL_MOOD) {
        index += 4;
    } else if (mood == ANNOYED_MOOD) {
        index += 6;
    } else if (mood == VERY_ANNOYED_MOOD) {
        index += 8;
    }

    const choiceToReach = choices[index];

    return choiceToReach > choice;
}


function hasChastityCage() {
    return getVar(VARIABLE_HAS_CHASTITY);
}

function unlockChastityCage() {
    if(!getVar(VARIABLE_HAS_CHASTITY) || !getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

    sendMessage("%SlaveName%");
    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOff/*.{jpg,png,gif}");
    if(randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOff/*.mp3");
    sendMessage(random("Remove your %ChastityCage%", "Get your %ChastityCage% off", "Remove the %ChastityCage% at once", "Hurry up and remove the %ChastityCage%", "Be quick and get your %ChastityCage% off"));

    let timeout = randomInteger(20, 50);
    if(ACTIVE_PERSONALITY_STRICTNESS == 1) {
        timeout = randomInteger(15, 40);
    } else if(ACTIVE_PERSONALITY_STRICTNESS == 2) {
        timeout = randomInteger(10, 30);
    }

    const answer = sendInput(random("Let me know when you're done...", "Report to me when it's off", "Remember to tell me when it's off"), timeout);
    loop = 0;
    while(true) {
        if (answer.isTimeout()) {
            loop++;

            if(loop > 1) {
                sendMessage(random("You've taken way too long to get that %Cage% off...", "You are taking way to long to get that %Cage% off", "It took you too long to get that cage off..."));
                sendMessage(random("I don't like when you make me wait", "I don't like to wait", "I don't like waiting"));
                sendMessage(random("I'm giving you punishment points", "I've assigned you some punishment points", "I've increased your number of punishment points"));
                addPunishmentPoints(100);
                break;
            } else {
                sendMessage(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"));
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.containsIgnoreCase("done", "off", "uncaged", "unlocked", "out", "belt")) {
            if(loop == 1) {
                sendMessage(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessage("%Good%");
                break;
            }
        }
    }

    setVar(VARIABLE_CHASTITY_ON, false);
    unlockImages();
    return;
}

function isInChastity() {
    return isVar(VARIABLE_CHASTITY_ON) && getVar(VARIABLE_CHASTITY_ON);
}


function lockChastityCage() {
    if(!getVar(VARIABLE_HAS_CHASTITY) || getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

    sendMessage("%SlaveName%");
    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOn/*.{jpg,png,gif}");
    if(randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOn/*.mp3");

    sendMessage(random("Put on your %Cage%", "Get your %Cage% on", "Put on the %Cage% at once", "Hurry up and get the %Cage% back on", "Be quick and get your %Cage% back on", "Lock your %Cock% up"));


    //TODO: Timeout based on chastity level and then punish like with icing down cock or cbt or icy hot or something

    let timeout = randomInteger(30, 60);
    if(ACTIVE_PERSONALITY_STRICTNESS == 1) {
        timeout = randomInteger(25, 50);
    } else if(ACTIVE_PERSONALITY_STRICTNESS == 2) {
        timeout = randomInteger(20, 40);
    }

    const answer = sendInput(random("Let me know when you're done...", "Report to me when it's on", "Remember to tell me when it's on"), timeout);
    let loop = 0;
    while(true) {
        if (answer.isTimeout()) {
            loop++;

            if(loop > 1) {
                sendMessage(random("You've taken way too long to get that %Cage% on...", "You are taking way to long to get that %Cage% on", "It took you too long to get that cage on..."));

                if(getVar(VARIABLE_CHASTITY_TRAINING)) {
                    sendMessage(random("But since you're in training", "But due to you being in training", "But because of your chastity training") + " I won't punish you...");
                } else {
                    if(isForcedLockedUp()) {
                        sendMessage("So as a punishment I'm placing you in the %Cage% for the next 24 hours...")
                    } else {
                        sendMessage("So as a punishment I'm increasing your locked up period by 24 hours...")
                    }

                    addLockUpTime(24);
                }
                break;
            } else {
                sendMessage(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"));
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.containsIgnoreCase("done", "on", "caged", "locked", "lock", "belt")) {
            if(loop == 1) {
                sendMessage(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessage("%Good%");
                break;
            }
        }
    }

    setVar(VARIABLE_CHASTITY_ON, true);
}

function isForcedLockedUp() {
    return isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed();
}

function addLockUpTime(hours) {
    if(!isForcedLockedUp) {
        setDate(VARIABLE_LOCKED_UP_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE_LOCKED_UP_UNTIL, getDate(VARIABLE_LOCKED_UP_UNTIL).addHour(hours));
    }
}

function isChastityPlayOnly() {
    return getVar(VARIABLE_CHASTITY_TOY_MODE) == TOY_PLAY_MODE;
}
