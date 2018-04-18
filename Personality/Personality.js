run("Personality/Limits.js");

const ENFORCING_PERSONALITY_ID = 1;

const ACTIVE_PERSONALITY_ID = getVar("personalityType");

let ACTIVE_PERSONALITY_STRICTNESS = getVar("personalityStrictness", 0);

const TOY_PLAY_MODE = 0;
const TOY_PUNISHMENT_MODE = 1;
const TOY_BOTH_MODE = 2;

function setUpPersonalityVars() {
    switch(ACTIVE_PERSONALITY_ID) {
        case ENFORCING_PERSONALITY_ID:
            for(x = 0; x < LIMITS.length; x++) {
                if(getVar(LIMITS[x], LIMIT_NEVER_ASKED) != LIMIT_NEVER) setVar(LIMITS[x], LIMIT_ASKED_YES);
            }
            break;
        default:
            sendSystemMessage("Personality type id " + ACTIVE_PERSONALITY_ID + " does not exist.");
            break;
    }
}

//We should do this only at session start unlike spicy because otherwise you can just restart the program x times to increase your mood
function loadMood() {
    const mood = getMood();

    if(mood === VERY_ANNOYED_MOOD) {
        setVar("Merits", getVar("Merits") + 30);
    } else if(mood == VERY_PLEASED_MOOD) {
        setVar("Merits", getVar("Merits") - 30);
    }
}

function updateMood() {
    if(getVar("Merits", 0) > 1000) setVar("Merits", 1000);
    if(getVar("Merits", 0) < 0) setVar("Merits", 0);
}

function getMood() {
    updateMood();

    const merits = getVar("Merits");

    let veryPleased, pleased, neutral, annoyed, veryAnnoyed;
    switch(ACTIVE_PERSONALITY_STRICTNESS) {
        case 0:
            veryPleased = 900;
            pleased = 700;
            neutral = 650;
            annoyed = 250;
            veryAnnoyed = 0;
            break;
        case 1:
            veryPleased = 950;
            pleased = 750;
            neutral = 700;
            annoyed = 250;
            veryAnnoyed = 50;
            break;
        case 2:
            veryPleased = 100;
            pleased = 800;
            neutral = 750;
            annoyed = 300;
            veryAnnoyed = 50;
            break;
    }

    if(merits >= veryPleased) {
        return VERY_PLEASED_MOOD;
    } else if(merits >= PLEASED_MOOD) {
        return PLEASED_MOOD;
    } else if(merits >= NEUTRAL_MOOD) {
        return NEUTRAL_MOOD;
    } else if(merits >= ANNOYED_MOOD) {
        return ANNOYED_MOOD;
    } else if(merits >= VERY_ANNOYED_MOOD) {
        return VERY_ANNOYED_MOOD;
    }
}

function changeMeritLow(negative) {
    changeMerit(0, negative);
}


function changeMeritMedium(negative) {
    changeMerit(1, negative);
}


function changeMeritHigh(negative) {
    changeMerit(2, negative);
}

function changeMerit(level, negative) {
    let index = ACTIVE_PERSONALITY_STRICTNESS*10;
    let minChange;
    let maxChange;
    if(getMonthlyBadDays() > getMonthlyGoodDays()) {
        index += 5;
    }
    const mood = getMood();

    if(mood == PLEASED_MOOD) {
        index += 1;
    } else if(mood == NEUTRAL_MOOD) {
        index += 2;
    } else if(mood == ANNOYED_MOOD) {
        index += 3;
    } else if(mood == VERY_ANNOYED_MOOD) {
        index += 4;
    }

    if(level == 0) {
        if(negative) {
            minChange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 12, 14, 16, 18, 20];
            maxChange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        } else {
            minChange = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,];
            maxChange = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 25, 24, 23, 22, 21, 20, 9, 8, 7, 6, 20, 8, 6, 4, 2, 5, 4, 3, 2, 1];
        }
    } else if(level == 1) {
        if(negative) {
            minChange = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            maxChange = [32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
        } else {
            minChange = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
            maxChange = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41];
        }
    } else if(level == 2) {
        if(negative) {
            minChange = [20, 21, 23, 24, 25, 31, 32, 33, 34, 35, 12 , 14, 16, 18, 35, 28, 31, 34, 37, 45, 28, 31, 34, 37, 40, 38, 41, 44, 47, 50];
            maxChange = [52, 55, 58, 62, 65, 62, 65, 68, 72, 75, 58, 61, 64, 67, 80, 68, 71, 74, 77, 90, 64, 68, 72, 76, 90, 84, 88, 92, 96, 100];
        } else {
            minChange = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31];
            maxChange = [100, 95, 90, 85, 80, 77, 74, 71, 68, 65, 90, 87, 84, 81, 78, 75, 72, 69, 66, 63, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62];
        }
    }

    let meritChange = randomInteger(minChange[index], maxChange[index]);
    if(negative) {
        meritChange *= -1;
    }

    addMerits(meritChange);
}

function addMerits(meritChange) {
    if(getVar(VARIABLE_MERITS) + meritChange < 0) {
        meritChange = -getVar(VARIABLE_MERITS);
    }

    setVar(VARIABLE_MERITS, getVar(VARIABLE_MERITS) + meritChange);
}

function isEnforcingPersonality() {
    return ENFORCING_PERSONALITY_ID === ACTIVE_PERSONALITY_ID;
}
