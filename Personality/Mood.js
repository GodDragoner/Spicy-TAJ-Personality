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

function allowTeasingStroking() {
    return !feelsLikePunishingSlave() && isChance(30);
}

//Just bad behaviour etc.
function feelsLikePunishingSlave() {
    const mood = getMood();

    return getVar(VARIABLE_PUNISHMENT_POINTS) >= 250 || mood >= NEUTRAL_MOOD && isChance(mood*25);
}

//TODO: Add own implementation
//Annoyed by too many questions or disobedience etc.
function isAnnoyed() {
    return feelsEvil();
}

//Meant in a playful but evil kind of way (not really pain or anything)
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

function handleTodaysMood() {
    //Update mood at the end of session (prevents cheating by restarting the session over and over)
    loadMood();

    const dayOfMonth = setDate().getDay();

    //Positive
    if(getMood() < NEUTRAL_MOOD) {
        setVar('day' + dayOfMonth + 'Good',  true);
    } else if(getMood() > NEUTRAL_MOOD) {
        //Annoyed
        setVar('day' + dayOfMonth + 'Good',  false);
    }

    //Otherwise no change
}