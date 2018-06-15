const VERY_PLEASED_MOOD = 0;
const PLEASED_MOOD = 1;
const NEUTRAL_MOOD = 2;
const ANNOYED_MOOD = 3;
const VERY_ANNOYED_MOOD = 4;

function getMonthlyGoodDays() {
    let goodDays = 0;

    for(let day = 0; day < 31; day++) {
        if(getVar("day" + day + "Good", false)) {
            goodDays++;
        }
    }

    return goodDays;
}

function getMonthlyBadDays() {
    return 31 - getMonthlyGoodDays();
}

function feelsEvil() {
    let mood = getMood();

    if (mood === VERY_PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 10)) {
            return true;
        } else {
            return false;
        }
    } else if (mood === PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 20)) {
            return true;
        } else {
            return false;
        }
    } else if (mood === NEUTRAL_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 25)) {
            return true;
        } else {
            return false;
        }
    } else if (mood === ANNOYED_MOOD) {
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 20)) {
            return true;
        } else {
            return false;
        }
    } else if (mood === VERY_ANNOYED_MOOD) {
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 25)) {
            return true;
        } else {
            return false;
        }
    }
}