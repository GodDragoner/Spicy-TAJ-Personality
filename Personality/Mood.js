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
    return !feelsLikePunishingSlave();
}

//Just bad behaviour etc.
function feelsLikePunishingSlave() {
    const mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = ACTIVE_PERSONALITY_STRICTNESS * 10;
    } else if (mood === PLEASED_MOOD) {
        chance = ACTIVE_PERSONALITY_STRICTNESS * 15;
    } else if (mood === NEUTRAL_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 30;
    }

    return getVar(VARIABLE_PUNISHMENT_POINTS) >= 250 || isChance(chance);
}

//Annoyed by too many questions  etc.
function isAnnoyedByTalking() {
    let mood = getMood();

    let chance = 0;

    //Talking issues
    chance += getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0)*10*mood;
    chance += getVar(VARIABLE_UNALLOWED_TALKS, 0)*10*mood;
    chance += getVar(VARIABLE_COMPLAINTS, 0)*10*mood;

    return isChance(Math.min(100, chance));
}

//Meant in a playful but evil kind of way (not really pain or anything)
function feelsEvil() {
    let mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = ACTIVE_PERSONALITY_STRICTNESS * 10;
    } else if (mood === PLEASED_MOOD) {
        chance = ACTIVE_PERSONALITY_STRICTNESS * 15;
    } else if (mood === NEUTRAL_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (ACTIVE_PERSONALITY_STRICTNESS + 1) * 30;
    }

    return isChance(chance);
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

//Teasing is meant to be cruel in this case => which means Happiness would cause her to be less cruel
function getCruelTeasingMood() {
    let multiplier = 1;

    if(ACTIVE_PERSONALITY_STRICTNESS === 1) {
        multiplier = 1.2;
    } if(ACTIVE_PERSONALITY_STRICTNESS === 2) {
        multiplier = 1.5;
    }

    return (getVar(VARIABLE_ANGER) + getVar(VARIABLE_LUST, 0))*multiplier - getVar(VARIABLE_HAPPINESS, 0);
}

function getHumiliationMood() {

}

function getHumilationTimeModifier() {

}

//TODO: Add to it hurts etc.
function registerComplain() {
    if(getVar(VARIABLE_COMPLAINTS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_COMPLAINTS) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE_COMPLAINTS, getVar(VARIABLE_COMPLAINTS, 0) + 1);
}

function registerUnallowedTalk() {
    if(getVar(VARIABLE_UNALLOWED_TALKS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_UNALLOWED_TALKS) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE_UNALLOWED_TALKS, getVar(VARIABLE_UNALLOWED_TALKS, 0) + 1);
}

function registerForgetHonorific() {
    if(getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }


    setTempVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, getVar(VARIABLE_FORGETTING_HONORIFIC_COUNT, 0) + 1);
}