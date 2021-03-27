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
function feelsLikeShowingPower() {
    const mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 5;
    } else if (mood === PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 10;
    } else if (mood === NEUTRAL_MOOD) {
        chance = Math.max(getStrictnessForCharacter(), 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 35;
    }

    chance += getVar(VARIABLE.ANGER);

    sendDebugMessage('Feel like showing power: ' + chance);
    return isChance(chance);
}

//Just bad behaviour etc.
function feelsLikePunishingSlave() {
    const mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 2;
    } else if (mood === PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 5;
    } else if (mood === NEUTRAL_MOOD) {
        chance = Math.max(getStrictnessForCharacter(), 1) * 10;
    } else if (mood === ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 15;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 20;
    }

    chance += Math.floor(getVar(VARIABLE.ANGER)/2);

    if(getVar(VARIABLE.PUNISHMENT_POINTS) >= 250) {
        chance += 35;
    }

    sendDebugMessage('Feel like punishing chance: ' + chance);
    let punish = isChance(chance);

    //Average merit change subtracted from chance
    let dailyMeritChangeModifier = (Math.floor(getVar(VARIABLE.DAILY_MERIT_CHANGE, 0)/2.0));
    sendDebugMessage('Daily merit change modifier: ' + dailyMeritChangeModifier);
    chance -= dailyMeritChangeModifier;
    chance = Math.max(chance, 0);

    //If chance hits twice (the higher the chance => madder domme => higher chance of increasing her mood => make the chance smaller for higher strictness)
    if(punish && isChance(Math.floor(chance/(getStrictnessForCharacter() + 1)))) {
        //Add a few merits so domme feels better since she punished slave
        changeMeritLow(false);
    }

    return punish;
}

function wouldLikeToProlongSession() {
    let mood = getMood();

    if(mood > 1) {
        sendDebugMessage('No prolonged session because mood neutral or worse');
        return false;
    } else {
        let chance = (3 - mood)*10;
        let daysPassed = 7;

        if(isVar(VARIABLE.LAST_PROLONGED_SESSION)) {
            daysPassed = millisToTimeUnit(getMillisSinecDate(getDate(VARIABLE.LAST_PROLONGED_SESSION)), TIME_UNIT_DAYS, 0);
            sendDebugMessage('Last prolonged session was ' + daysPassed + ' days ago');
        }

        chance += daysPassed*7;
        sendDebugMessage('Checking for prolonged session with chance ' + chance);

        return isChance(chance);
    }
}

//Annoyed by too many questions  etc.
function isAnnoyedByTalking() {
    let mood = getMood();

    let chance = 0;

    //Talking issues
    chance += getVar(VARIABLE.FORGETTING_HONORIFIC_COUNT, 0)*10*mood;
    chance += getVar(VARIABLE.UNALLOWED_TALKS, 0)*10*mood;
    chance += getVar(VARIABLE.COMPLAINTS, 0)*10*mood;
    chance += getVar(VARIABLE.REPEATING_TEXT, 0)*10*mood;

    //General mood
    if(chance > 0) {
        //Mood already applied
        chance += mood*5;
    } else {
        //Mood had no effect yet
        chance += mood*10;
    }

    sendDebugMessage('Annoyed by talking chance: ' + chance);
    return isChance(chance);
}

//Meant in a playful but evil kind of way (not really pain or anything)
function feelsEvil() {
    let mood = getMood();

    let chance = 0;

    if (mood === VERY_PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 10;
    } else if (mood === PLEASED_MOOD) {
        chance = getStrictnessForCharacter() * 15;
    } else if (mood === NEUTRAL_MOOD) {
        chance = Math.max(getStrictnessForCharacter(), 1) * 20;
    } else if (mood === ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 25;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance = (getStrictnessForCharacter() + 1) * 30;
    }

    sendDebugMessage('Feels evil chance ' + chance);

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

//Extra teasing mood
function feelsLikeTeasing() {
    let mood = getMood();

    let chance = getVar(VARIABLE.LUST, 0);

    let multiplier = 1;

    if(getStrictnessForCharacter() === 1) {
        multiplier = 1.5;
    } if(getStrictnessForCharacter() === 0) {
        multiplier = 2;
    }

    if (mood === VERY_PLEASED_MOOD) {
        chance += multiplier * 50;
    } else if (mood === PLEASED_MOOD) {
        chance += multiplier * 40;
    } else if (mood === NEUTRAL_MOOD) {
        chance += multiplier* 30;
    } else if (mood === ANNOYED_MOOD) {
        chance += multiplier * 10;
    } else if (mood === VERY_ANNOYED_MOOD) {
        chance += multiplier * 5;
    }

    sendDebugMessage('Feels like teasing chance ' + chance);

    return isChance(chance);
}

//Teasing is meant to be cruel in this case => which means Happiness would cause her to be less cruel
function getCruelTeasingMood() {
    let multiplier = 1;

    if(getStrictnessForCharacter() === 1) {
        multiplier = 1.2;
    } if(getStrictnessForCharacter() === 2) {
        multiplier = 1.5;
    }

    return (getVar(VARIABLE.ANGER) + getVar(VARIABLE.LUST, 0))*multiplier - getVar(VARIABLE.HAPPINESS, 0);
}


function getHumiliationMood() {

}

function getHumilationTimeModifier() {

}

function registerSassySub() {
    if(getVar(VARIABLE.SASSY_SUB, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.SASSY_SUB, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE.SASSY_SUB, getVar(VARIABLE.SASSY_SUB, 0) + 1);
}

function registerComplain() {
    if(getVar(VARIABLE.COMPLAINTS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.COMPLAINTS, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE.COMPLAINTS, getVar(VARIABLE.COMPLAINTS, 0) + 1);
}

function registerRepeatingText() {
    if(getVar(VARIABLE.REPEATING_TEXT, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.REPEATING_TEXT, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE.REPEATING_TEXT, getVar(VARIABLE.REPEATING_TEXT, 0) + 1);
}

function registerUnallowedTalk() {
    if(getVar(VARIABLE.UNALLOWED_TALKS, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.UNALLOWED_TALKS, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    setTempVar(VARIABLE.UNALLOWED_TALKS, getVar(VARIABLE.UNALLOWED_TALKS, 0) + 1);
}

function registerUnallowedEdge() {
    if(getVar(VARIABLE.UNALLOWED_EDGES, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.UNALLOWED_EDGES, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    incrementTempVar(VARIABLE.UNALLOWED_EDGES, 1, 0)
}

function registerForgetHonorific() {
    if(getVar(VARIABLE.FORGETTING_HONORIFIC_COUNT, 0) > 3) {
        changeMeritHigh(true);
    } else if(getVar(VARIABLE.FORGETTING_HONORIFIC_COUNT, 0) > 1) {
        changeMeritMedium(true);
    } else {
        changeMeritLow(true);
    }

    addPPRuleIgnored();
    setTempVar(VARIABLE.FORGETTING_HONORIFIC_COUNT, getVar(VARIABLE.FORGETTING_HONORIFIC_COUNT, 0) + 1);
}