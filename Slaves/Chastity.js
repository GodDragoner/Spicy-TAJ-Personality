function isForcedLockedUp() {
    return isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed();
}

function addLockUpTime(hours) {
    if (!isForcedLockedUp()) {
        setDate(VARIABLE_LOCKED_UP_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE_LOCKED_UP_UNTIL, getDate(VARIABLE_LOCKED_UP_UNTIL).addHour(hours));
    }
}


function isInChastity() {
    return getVar(VARIABLE_CHASTITY_ON, false);
}


function isFullSizedChastityOn() {
    return isInChastity() && currentChastityCage.isFullSizedBelt();
}

function willKeepChastityOn(end) {
    //Higher choice value -> chastity will probably be removed
    let choice = randomInteger(1, 100);

    sendDebugMessage('Rolled initial chance of ' + choice + ' to be unlocked');

    if (end) {
        if (RULE_DOMME_KEYHOLDER.isActive()) {
            return true;
        }

        //Lower base chance of unlocking at end
        choice = randomInteger(1, 100 - getVar(VARIABLE_CHASTITY_LEVEL, 0) * 3);
    }

    if (getVar(VARIABLE_HAPPINESS) > getVar(VARIABLE_ANGER)) {
        sendDebugMessage('Happiness is higher than anger so increasing unlock chance');
        choice += randomInteger(1, 25);
    } else {
        sendDebugMessage('Anger is higher than happiness so decreasing unlock chance');
        choice -= randomInteger(1, 25);
    }

    if (getVar(VARIABLE_LUST) > 30) {
        sendDebugMessage('Lust is bigger than 30, so increasing unlock chance');
        choice += randomInteger(1, 25);
    }

    let choices = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, /*Non chastity mode*/ 1, 5, 5, 10, 10, 15, 25, 30, 35, 40];
    let index = 0;

    if (getMonthlyGoodDays() <= getMonthlyBadDays()) {
        index += 1;
    }

    if (getStrictnessForCharacter() == 1) {
        choices = [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, /*Non chastity mode*/ 5, 10, 10, 15, 15, 20, 30, 35, 40, 50];
    } else if (getStrictnessForCharacter() == 2) {
        choices = [40, 45, 50, 55, 60, 70, 75, 80, 85, 90, /*Non chastity mode*/ 10, 15, 15, 20, 20, 30, 40, 50, 60, 70];
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

    sendDebugMessage('Must reach ' + choiceToReach + ' to unlock. Current choice is ' + choice + ' and mood is ' + mood);

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

function startLongTermChastityIntro() {
    if (!RULE_DOMME_KEYHOLDER.isActive() && hasChastityCage() && !getVar(VARIABLE_PARTNER_IS_KEYHOLDER, false)) {
        sendMessage('So %SlaveName%');

        if (isVar(VARIABLE_ASKED_FOR_KEYHOLDER)) {
            sendMessage('I asked you before and I still want to own your %Cock% completely');

            if(getVar(VARIABLE_KEYHOLDER_FANTASIZE, false)) {
                sendMessage('And since you have fantasized about a keyholder before...')
            } else {
                sendMessage('So...');
            }

            //QUALITY: Try to convince more
            if (sendYesOrNoQuestion('Have you changed your mind about me being your keyholder?')) {
                sendMessage('%Good%');
            } else {
                sendMessage('%EmoteSad%');

                if(isEnforcingPersonality()) {
                    sendMessage('This will definitely not end up your way %SlaveName%');
                    sendMessage('Mark my words!');
                    sendMessage('I will make you break even if it takes weeks');
                    sendMessage('Months');
                    sendMessage('Or even years');
                    sendMessage('Your %Cock% will be all mine and as long as you are denying me that wish I will make it regret every second of it');
                    changeMeritMedium(true);
                } else {
                    changeMeritLow(true);
                }
                return false;
            }
        } else {
            sendMessage('About that chastity cage you\'re wearing');

            sendMessage('I was wondering...');

            if (getVar(VARIABLE_SUB_IS_MARRIED, false) || getVar(VARIABLE_SUB_HAS_GIRLFRIEND, false)) {
                if (askForPartnerKeyholder()) {
                    return false;
                } else {
                    sendMessage('Oh, well someone should %Grin%');
                }
            }
        }

        //Set it today
        //Can be used to track how long she has been keyholder for or how long since she asked last time
        setDate(VARIABLE_ASKED_FOR_KEYHOLDER);

        if (sendYesOrNoQuestion('Would you give me control over the key?')) {
            sendMessage('You should know what you\'re getting into here');
            sendMessage('What I mean is that, for all intents and purposes, I will hold the key');
            sendMessage('You do not get to decide when the cage comes off, period');
            sendMessage('If at the end of a session I decide it stays on, it stays on until the next session');
            sendMessage('Hygiene is important, %SlaveName% %EmoteHappy%');
            sendMessage('But how you handle that is up to you');
            sendMessage('If you want to take it off because you want to %JerkOff%...');
            sendMessage('You\'ll have to come to me or my assistant and ask');
            if (sendYesOrNoQuestion('So, do you still want to make me keyholder?')) {
                sendMessage('You won\'t regret it, %SlaveName%');

                changeMeritHigh(false);
                sendMessage('Well, maybe you will, but I certainly won\'t');

                if(isEnforcingPersonality()) {
                    sendMessage('What\'s sure though is...');
                    sendMessage('You would\'ve regret it if you\'ve said no %Lol%');
                }

                sendMessage('Just to think that I could keep you in chastity indefinitely');
                sendMessage('It turns me on so much, %SlaveName%');
                sendMessage('I probably won\'t, to be honest');
                sendMessage('But I love knowing that I have that option %Grin%');
                sendMessage('It\'s as if I\'m wearing that key on a necklace');
                sendMessage('Dangling between my %Boobs%');
                sendMessage('%Moan%');
                sendMessage('This thing we have just got interesting, %SlaveName% %EmoteHappy%');
                return true;
            } else {
                sendMessage('Hmmm, that\'s too bad, %SlaveName%');
            }
        } else {
            if(isEnforcingPersonality()) {
                sendMessage('You know...');
                sendMessage('I really don\'t like being told no');
                sendMessage('I can\'t really force you to anything but I have my means and ways to get pretty close to forcing you %Grin%');
                sendMessage('So don\'t think I will give up until I am your keyholder and own your %Cock% completely!');
                changeMeritMedium(true);

                smallPunishment();
                sendMessage('That was just a small taste of my means %Grin%');
                return false;
            } else {
                sendMessage('Too bad... %EmoteSad%');
            }
        }

        changeMeritLow(true);
        sendMessage('Because what is the point of being in chastity');
        sendMessage('If you can decide at any time to take it off');
        sendMessage('But I guess it\'s just a game to you and that\'s okay too, %SlaveName%');
        sendMessage('You should really have a keyholder');
        sendMessage('Still, you do own a chastity device, so...');

        if (sendYesOrNoQuestion('Do you ever fantasize about someone holding the key?')) {
            sendMessage('Wouldn\'t that just be awesome? %EmoteHappy%');
            setVar(VARIABLE_KEYHOLDER_FANTASIZE, true);
        } else {
            sendMessage('Maybe that\'s just a little too scary %EmoteFlustered%');
        }

        sendMessage('I like to think that you\'ll change your mind');
        sendMessage('And that you\'ll give me the key');
        sendMessage('So that I will completely own your %Cock% %SlaveName%');
        sendMessage('But for now...');
        sendMessage('I can still keep you in chastity during our sessions %EmoteHappy%');
        return false;
    }
}

function askForPartnerKeyholder() {
    if (sendYesOrNoQuestion('Does ' + getVar(VARIABLE_SUB_PARTNER_NAME) + ' hold the key? I mean, does she decide when it comes off?')) {
        sendMessage('Wow %Lol%');

        sendMessage('I think it\'s awesome that ' + getVar(VARIABLE_SUB_PARTNER_NAME) + ' is your keyholder');
        sendMessage('Kind of sad I\'m not, sure %EmoteSad%');
        sendMessage('But in the end, what matters it that that %Cock% is safely locked up');
        sendMessage('And under control of a woman');
        sendMessage('As all cocks should, really...');
        sendMessage('There are too many unlocked cocks out there #Laugh');

        if (sendYesOrNoQuestion('I\'m sure ' + getVar(VARIABLE_SUB_PARTNER_NAME) + ' would agree, right?')) {
            sendMessage('I thought so %Grin%')
        } else {
            sendMessage('Well, I suppose yours is the only one that matters to her');
        }

        sendMessage('Because since you have that cage');
        sendMessage('I\'m certainly going to use it #Grin');

        sendMessage('It\'s a great feeling to have that kind of control, %SlaveName%');
        sendMessage('Not that I\'d expect you to understand...');
        sendMessage('You\'d rather give up control than have it');
        setVar(VARIABLE_PARTNER_IS_KEYHOLDER, true);

        if (sendYesOrNoQuestion('She\'s okay with me telling you to take it off or put it on?')) {
            sendMessage('That would be kind of a problem otherwise');
        } else {
            sendMessage('Oh... well, I\'m sure you have a way of working around that...');
        }

        sendMessage('I wouldn\'t want to come between you and ' + getVar(VARIABLE_SUB_PARTNER_NAME) + ' though');
        sendMessage('So I won\'t tell you to wear it after our sessions');
        sendMessage('That\'s up to her %EmoteHappy%');
        return true;
    } else {
        return false;
    }
}