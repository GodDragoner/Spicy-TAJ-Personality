function isForcedLockedUp() {
    return isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed();
}

function addLockUpTime(hours) {
    if (!isForcedLockedUp) {
        setDate(VARIABLE_LOCKED_UP_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE_LOCKED_UP_UNTIL, getDate(VARIABLE_LOCKED_UP_UNTIL).addHour(hours));
    }
}


function isInChastity() {
    return isVar(VARIABLE_CHASTITY_ON) && getVar(VARIABLE_CHASTITY_ON);
}

function willKeepChastityOn(end) {
    //Higher choice value -> chastity will probably be removed
    let choice = randomInteger(1, 100);

    if (end) {
        if (getVar(VARIABLE_LONG_TERM_CHASTITY, false)) {
            return true;
        }

        //Lower base chance of unlocking at end
        choice = randomInteger(1, 100 - getVar(VARIABLE_CHASTITY_LEVEL, 0) * 3);
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

function isChastityPunishment() {
    return getVar(VARIABLE_CHASTITY_TOY_MODE) === TOY_PUNISHMENT_MODE || getVar(VARIABLE_CHASTITY_TOY_MODE) === TOY_BOTH_MODE;
}

function isChastityPlay() {
    return getVar(VARIABLE_CHASTITY_TOY_MODE) === TOY_PLAY_MODE || getVar(VARIABLE_CHASTITY_TOY_MODE) === TOY_BOTH_MODE;
}

function hasChastityCage() {
    return getVar(VARIABLE_HAS_CHASTITY);
}