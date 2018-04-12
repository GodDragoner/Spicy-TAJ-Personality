run("Personality/Limits.js");

var ENFORCING_PERSONALITY_ID = 1;

var ACTIVE_PERSONALITY_ID = getVar("personalityType");

var ACTIVE_PERSONALITY_STRICTNESS = getVar("personalityStrictness", 0);

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
    var mood = getMood();

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

    var merits = getVar("Merits");

    var veryPleased, pleased, neutral, annoyed, veryAnnoyed;
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
    } else if(merits >= NEUTRLA_MOOD) {
        return NEUTRLA_MOOD;
    } else if(merits >= ANNOYED_MOOD) {
        return ANNOYED_MOOD;
    } else if(merits >= VERY_ANNOYED_MOOD) {
        return VERY_ANNOYED_MOOD;
    }
}

function isEnforcingPersonality() {
    return ENFORCING_PERSONALITY_ID === ACTIVE_PERSONALITY_ID;
}
