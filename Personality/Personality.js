run("Personality/Limits.js");

const KIND_PERSONALITY_ID = 0;
const ENFORCING_PERSONALITY_ID = 1;

const ACTIVE_PERSONALITY_ID = getVar(VARIABLE.DOMME_PERSONALITY_TYPE);

let ACTIVE_PERSONALITY_STRICTNES = getVar(VARIABLE.DOMME_STRICTNESS, 0);

const TOY_PLAY_MODE = 0;
const TOY_PUNISHMENT_MODE = 1;
const TOY_BOTH_MODE = 2;

const TOY_ASKED_BUY_MODE = 3;

const DOMME_BIRTHDAY = new Date(new Date().getFullYear(), 6, 30, 0, 0, 0);


/**
 * Returns the strictness of the current active character
 * @param index
 * @returns {*}
 */
function getStrictnessForCharacter(index = getCurrentTAJSenderID()) {
    switch (index) {
        //Dom
        case 1:
            return ACTIVE_PERSONALITY_STRICTNES;
        //Friend 1
        case 2:
            return 0;
        //Friend 2
        case 3:
            return 1;
        //Friend 3
        case 4:
            return 2;
        default:
            sendDebugMessage('Unknown sender id for strictness: ' + index);
            return 0;
    }
}

function setUpPersonalityVars() {
    /*switch(ACTIVE_PERSONALITY_ID) {
        case ENFORCING_PERSONALITY_ID:
            for(let x = 0; x < LIMITS.length; x++) {
                if(LIMITS[x].getLimit() !== LIMIT_NEVER) {
                    //Limits are by default enabled if not previously disabled
                    LIMITS[x].setLimit(LIMIT_ASKED_YES);
                }
            }
            break;
        case KIND_PERSONALITY_ID:
            break;
        default:
            sendSystemMessage("Personality type id " + ACTIVE_PERSONALITY_ID + " does not exist.");
            break;
    }*/
}

function getRandomHonorific() {
    return random(["Mistress", "Princess", "Goddess", /*"Maitrese"*/ "Queen", /*"Miss"*/]);
}

//We should do this only at session end unlike spicy because otherwise you can just restart the program x times to increase your mood
function loadMood() {
    const mood = getMood();

    if (mood === VERY_ANNOYED_MOOD) {
        changeMeritMedium(false);
    } else if (mood === VERY_PLEASED_MOOD) {
        changeMeritMedium(true);
    }
}

function updateMood() {
    if (getVar("Merits", 0) > 1000) setVar("Merits", 1000);
    if (getVar("Merits", 0) < 0) setVar("Merits", 0);
}

function getMood() {
    updateMood();

    const merits = getVar("Merits");

    let veryPleased, pleased, neutral, annoyed, veryAnnoyed;
    switch (getStrictnessForCharacter()) {
        case 0:
            veryPleased = 850;
            pleased = 700;
            neutral = 500;
            annoyed = 200;
            veryAnnoyed = 125;
            break;
        case 1:
            veryPleased = 900;
            pleased = 750;
            neutral = 550;
            annoyed = 300;
            veryAnnoyed = 200;
            break;
        case 2:
            veryPleased = 950;
            pleased = 800;
            neutral = 600;
            annoyed = 400;
            veryAnnoyed = 300;
            break;
    }

    sendDebugMessage('Calculating mood for ' + merits + ' and strictness ' + getStrictnessForCharacter());

    if (merits >= veryPleased) {
        return VERY_PLEASED_MOOD;
    } else if (merits >= pleased) {
        return PLEASED_MOOD;
    } else if (merits <= veryAnnoyed) {
        return VERY_ANNOYED_MOOD;
    } else if (merits <= annoyed) {
        return ANNOYED_MOOD;
    } else {
        //Default neutral
        return NEUTRAL_MOOD;
    }
}

function changeMeritLow(negative = false) {
    changeMerit(0, negative);
}


function changeMeritMedium(negative = false) {
    changeMerit(1, negative);
}


function changeMeritHigh(negative = false) {
    changeMerit(2, negative);
}

function changeMerit(level, negative) {
    let index = getStrictnessForCharacter() * 10;
    let minChange;
    let maxChange;

    if (getMonthlyBadDays() > getMonthlyGoodDays()) {
        sendDebugMessage('Merit change: Monthly bad days > good days');
        index += 5;
    }
    const mood = getMood();

    //The worse the mood the more impact positive and the less impact negative has
    if (mood == VERY_ANNOYED_MOOD) {
        index += 1;
    } else if (mood == ANNOYED_MOOD) {
        index += 2;
    } else if (mood == NEUTRAL_MOOD) {
        index += 3;
    } else if (mood == PLEASED_MOOD) {
        index += 4;
    }

    if (level == 0) {
        if (negative) {
            minChange = [/*Strict 0*/ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, /*Strict 1*/ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, /*Strict 2*/ 11, 12, 13, 14, 15, 12, 14, 16, 18, 20];
            maxChange = [/*Strict 0*/ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, /*Strict 1*/ 6, 7, 8, 9, 20, 21, 22, 23, 24, 25, /*Strict 2*/ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        } else {
            minChange = [/*Strict 0*/ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, /*Strict 1*/ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, /*Strict 2*/ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            maxChange = [/*Strict 0*/ 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, /*Strict 1*/ 25, 24, 23, 22, 21, 20, 9, 8, 7, 6, /*Strict 2*/ 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
        }
    } else if (level == 1) {
        if (negative) {
            minChange = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            maxChange = [32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
        } else {
            minChange = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
            maxChange = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41];
        }
    } else if (level == 2) {
        if (negative) {
            minChange = [20, 21, 23, 24, 25, 31, 32, 33, 34, 35, 12, 14, 16, 18, 35, 28, 31, 34, 37, 45, 28, 31, 34, 37, 40, 38, 41, 44, 47, 50];
            maxChange = [52, 55, 58, 62, 65, 62, 65, 68, 72, 75, 58, 61, 64, 67, 80, 68, 71, 74, 77, 90, 64, 68, 72, 76, 90, 84, 88, 92, 96, 100];
        } else {
            minChange = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31];
            maxChange = [100, 95, 90, 85, 80, 77, 74, 71, 68, 65, 90, 87, 84, 81, 78, 75, 72, 69, 66, 63, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62];
        }
    }

    let meritChange = randomInteger(minChange[index], maxChange[index]);

    if (negative) {
        meritChange *= -1;
    }

    sendDebugMessage('Changing merits (level ' + level + ') by ' + meritChange);

    setDate(VARIABLE.LAST_MERIT_CHANGE_DATE);
    incrementVar(VARIABLE.DAILY_MERIT_CHANGE, meritChange, 0);

    addMerits(meritChange);
}

function isDomBirthday() {
    return 12 === new Date().getDate() && 7 === new Date().getMonth();
}

function addMerits(meritChange) {
    //Min 0 max 1000
    setVar(VARIABLE.MERITS, Math.min(1000, Math.max(0, getVar(VARIABLE.MERITS) + meritChange)));
}

function isEnforcingPersonality() {
    return ENFORCING_PERSONALITY_ID === ACTIVE_PERSONALITY_ID;
}

function sendGreeting() {
    const greeting = ["Hello", "Greetings", "Hey", "Hi"];

    const date = new Date();
    if (date.getHours() > 6 && date.getHours() < 12) {
        greeting.push("Good morning");
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        greeting.push("Good afternoon");
    } else if (date.getHours() >= 18 && date.getHours() < 24) {
        greeting.push("Good evening");
    }


    sendMessage(greeting[randomInteger(0, greeting.length - 1)] + " %SlaveName%", 0);
    playSound("Audio/Spicy/Starts/Hello/*.mp3");

    let answer = createInput(15);
    if (answer.isTimeout()) {
        //QUALITY: Save for future and if it happens again more severe punishment
        changeMeritHigh(true);
        addPunishmentPoints(100, PUNISHMENT_REASON.POOR_BEHAVIOUR);
        sendMessage(random("Not feeling like greeting your domme today", "Seems like you are not in the mood to greet me", "Being impolite today", "Being rude today") + " %SlaveName%?");
        sendMessage("I won't tolerate " + random("impolite", "rude", "disrespectful", "ignorant") + " behaviour!");
        return false;
    } else if (answer.containsIgnoreCase("Hello", "Greetings", "Hey", "Hi")) {
        return true;
    }
}

function sendNoTouchingCock() {
    //Only send this when the sub is not in chastity
    if (!getVar(VARIABLE.CHASTITY_ON, false)) {
        sendMessage("But no touching that %Cock%");
    } else {
        sendMessage("Luckily I don't have to worry about your cock");
        sendMessage("It's locked up in it's %ChastityCage% and it is gonna stay this way for now");
        if (isChance(50)) sendMessage("Maybe even for ever %Grin%");
    }
}

function sendLooksLikeFun() {
    sendMessage("This " + random("will be", "looks like", "seems like") + " fun");

    if (isChance(30)) {
        sendMessage("Maybe only for me");
        sendMessage("But that's all this is about");
        sendMessage("My joy, my will, my commands and my pleasure %Grin%");
    }
}

function sendArentINice() {
    sendMessageBasedOnSender('Aren\'t I nice to you? %Grin%');

    let answer = createInput(5);

    if (answer.isTimeout()) {
        //sendMessage('I don\'t care about your opinion though');
    } else if (answer.isLike('yes', 'thank you')) {
        sendMessage('You are welcome %SlaveName% %EmoteHappy%');
        changeMeritLow(false);
    } else if (answer.isLike('no', 'hurt', 'pain')) {
        sendMessage('Not nice enough huh?');
        sendMessage('Well I don\'t care about your opinion though %Lol%');
        registerComplain();
    }
}

function sendAsMuchFun() {
    sendMessage(random("Hopefully ", 'I hope ') + random("that was as much fun for you as for me", 'you enjoyed this as much as I did', 'you enjoyed this too', 'this was fun for you too'));

    if (getStrictnessForCharacter() > 0 && feelsLikePunishingSlave()) {
        sendMessage("Oh wait...");
        sendMessage("I don't really care %Lol%");
    } else {
        sendMessage(random('I certainly enjoyed it %Lol%', 'It was fun for me at least %Lol%', 'I certainly had a lot of fun %Grin%', 'I certainly had a blast %Grin%', 'I certainly really enjoyed this %Lol%'));
    }
}

function hasCompleteOrgasmControl() {
    return true;
}
