function isForcedLockedUp() {
    return isVar(VARIABLE.LOCKED_UP_UNTIL) && !getDate(VARIABLE.LOCKED_UP_UNTIL).hasPassed();
}

function isDeniedCumming() {
    return isVar(VARIABLE.DENIAL_UNTIL) && !getDate(VARIABLE.DENIAL_UNTIL).hasPassed();
}

function addDenialTime(hours) {
    if (!isDeniedCumming()) {
        setDate(VARIABLE.DENIAL_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE.DENIAL_UNTIL, getDate(VARIABLE.DENIAL_UNTIL).addHour(hours));
    }
}

function canOrgasmToday() {
    return !isForcedLockedUp() && !isDeniedCumming() && getVar(VARIABLE.ORGASM_CATEGORY_TODAY, null) !== ORGASM_CATEGORY_DENIED_RESTRICTED;
}


function addLockUpTime(hours) {
    if (!isForcedLockedUp()) {
        setDate(VARIABLE.LOCKED_UP_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE.LOCKED_UP_UNTIL, getDate(VARIABLE.LOCKED_UP_UNTIL).addHour(hours));
    }
}

function removeLockUpTime(hours) {
    if (isForcedLockedUp()) {
        addLockUpTime(-hours);
    }
}


function isInChastity() {
    return getVar(VARIABLE.CHASTITY_ON, false);
}


function isFullSizedChastityOn() {
    return isInChastity() && currentChastityCage.isFullSizedBelt();
}

function askForMaxLockupTime() {
    sendMessage("Knowing that you have a chastity cage I need to know the maximum number of days I can lock you up in a row");
    let answer = sendInput("If you don't have a maximum you can just type 99999");

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendMessage("You have to choose a number larger than 0...", 0);
                answer.loop();
            } else if (result <= 5) {
                sendMessage("Looks like we have a chastity beginner. Don't worry we can work on that  %Grin%");
                setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                break;
            } else if (result <= 14) {
                sendMessage("At least you are somewhat trained... Good! %Grin%");
                setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                break;
            } else {
                sendMessage("Maybe I found a new chastity slut in you! %Grin%");
                setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                break;
            }
        } else {
            sendMessage("Just give me a number like 3, 10 or 70...", 0);
            answer.loop();
        }
    }

    sendMessage("No matter your limit. I will break it %SlaveName%");
    sendMessage("We're gonna have a lot of fun! %Lol%");
}

function isChastityPunishmentAttached() {
    return (getVar(VARIABLE.CHASTITY_SPIKES_ON, false) || getVar(VARIABLE.CHASTITY_DILATOR_ON, false));
}

function willKeepChastityOn(end) {
    //Higher choice value -> chastity will probably be removed
    let choice = randomInteger(25, 100);

    sendDebugMessage('Rolled initial chance of ' + choice + ' to be unlocked');

    if (end) {
        //TODO: Differentiate long term and keyholder
        if (RULE_DOMME_KEYHOLDER.isActive()) {
            sendDebugMessage('Domme is keyholder');
            return true;
        }

        //Lower base chance of unlocking at end
        let newChoice = randomInteger(1, 100 - getVar(VARIABLE.CHASTITY_LEVEL, 0) * 3);

        if (newChoice < choice) {
            choice = newChoice;
            sendDebugMessage('Replaced old chance with new lower end unlock chance of ' + newChoice);
        }
    } else {
        if (isChastityPunishmentAttached()) {
            sendDebugMessage('Unlocking to remove spikes/dialator');
            return false;
        }
    }

    if (getVar(VARIABLE.HAPPINESS) > getVar(VARIABLE.ANGER)) {
        sendDebugMessage('Happiness is higher than anger so increasing unlock chance');
        choice += randomInteger(1, 10);
    } else {
        sendDebugMessage('Anger is higher than happiness so decreasing unlock chance');
        choice -= randomInteger(1, 10);
    }

    if (getVar(VARIABLE.LUST) > getHighMoodAttributeThreshold(1)) {
        sendDebugMessage('Lust is bigger than 30, so increasing unlock chance');
        choice += randomInteger(1, 10);
    }

    //Note: Non chastity mode is no longer used. The first 10 are now default
    let choices = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, /*Non chastity mode*/ 1, 5, 5, 10, 10, 15, 25, 30, 35, 40];
    let index = 0;

    if (getMonthlyGoodDays() <= getMonthlyBadDays()) {
        index += 1;
        sendDebugMessage('More bad than good days');
    }

    if (getStrictnessForCharacter() == 1) {
        choices = [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, /*Non chastity mode*/ 5, 10, 10, 15, 15, 20, 30, 35, 40, 50];
    } else if (getStrictnessForCharacter() == 2) {
        choices = [40, 45, 50, 55, 60, 70, 75, 80, 85, 90, /*Non chastity mode*/ 10, 15, 15, 20, 20, 30, 40, 50, 60, 70];
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

    let choiceToReach = choices[index];

    if (MOOD.CHASTITY.isActive()) {
        choiceToReach *= 1.5;
        sendDebugMessage('Chastity mode is active');
    }

    sendDebugMessage('Must reach ' + choiceToReach + ' to unlock. Current choice is ' + choice + ' and mood is ' + mood);

    return choiceToReach > choice;
}

function isChastityPunishment() {
    return getVar(VARIABLE.CHASTITY_TOY_MODE) === TOY_PUNISHMENT_MODE || getVar(VARIABLE.CHASTITY_TOY_MODE) === TOY_BOTH_MODE;
}

function isChastityPlay() {
    return getVar(VARIABLE.CHASTITY_TOY_MODE) === TOY_PLAY_MODE || getVar(VARIABLE.CHASTITY_TOY_MODE) === TOY_BOTH_MODE;
}

function hasChastityCage() {
    return getVar(VARIABLE.HAS_CHASTITY);
}

/**
 * Get whether the slave has declined chastity training (which basically is chastity level below 30 and training disabled)
 * @returns {*|boolean} Whether slave has declined chastity training
 */
function hasDeclinedChastityTraining() {
    return hasChastityCage() && getVar(VARIABLE.CHASTITY_TRAINING_DECLINED, 0) >= 1;
}

function startLongTermChastityIntro() {
    let justChangedPartnerKeyholder = false;
    //Partner is currently keyholder but asked for it
    if (isVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER) && getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false)) {
        sendMessage('So %SlaveName%');
        sendMessage('It looks like you want me to be your keyholder %EmoteHappy%');
        sendMessage('Hold the key to %MyYour% cock\'s freedom');
        sendMessage('But last time we talked about this you told me ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' is your keyholder...');

        if (sendYesOrNoQuestion('Is ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' still your keyholder?')) {
            sendMessage('Well then don\'t bother me with it');
            changeMeritLow(true);
            sendMessage('I won\'t interfere with ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' decisions and I trust she will make you suffer like I would or even worse %Grin%');
            return;
        }
        //No
        sendMessage('Oh really?');

        sendMessage('Well then %EmoteHappy%');
        setVar(VARIABLE.SUB_PARTNER_NAME, false);
        setVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, false);
        justChangedPartnerKeyholder = true;
    }

    if (!RULE_DOMME_KEYHOLDER.isActive() && !getVar(VARIABLE.PARTNER_IS_KEYHOLDER, false)) {
        if (!justChangedPartnerKeyholder) {
            sendMessage('So %SlaveName%');
        }

        if (isVar(VARIABLE.ASKED_FOR_KEYHOLDER)) {
            sendMessage('I asked you before and I still want to own %MyYour% %Cock% completely');

            if (getVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, false)) {
                sendMessage('And since you\'ve addressed it %Grin%');
            } else if (getVar(VARIABLE.KEYHOLDER_FANTASIZE, false)) {
                sendMessage('And since you have fantasized about a keyholder before...')
            } else {
                sendMessage('So...');
            }

            //QUALITY: Try to convince more
            if (sendYesOrNoQuestion('Have you changed your mind about me being your keyholder?')) {
                sendMessage('%Good%');
            } else {
                sendMessage('%EmoteSad%');

                if (isEnforcingPersonality()) {
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
            if (getVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, false)) {
                sendMessage('It looks like you want me to be your keyholder %EmoteHappy%');

                if (!hasChastityCage()) {
                    sendMessage('Since you don\'t own a chastity cage yet, more like imaginary keyholder I guess %Grin%');
                }

                sendMessage('Hold the key to %MyYour% cock\'s freedom');
                sendMessage('I was planning to ask you this anyway but you beat me to it %Lol%');
                sendMessage('So since you\'ve addressed it...');
            } else {
                if (isInChastity()) {
                    sendMessage('About that chastity cage you\'re wearing');
                } else if (hasChastityCage()) {
                    sendMessage('About that chastity cage you\'re owning');
                } else {
                    sendMessage('About that cock between your legs');
                }
            }

            sendMessage('I was wondering...');

            //If we just changed partner keyholder we don't need to ask again
            if (!justChangedPartnerKeyholder) {
                if (getVar(VARIABLE.SUB_IS_MARRIED, false) || getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false)) {
                    if (askForPartnerKeyholder()) {
                        return false;
                    } else {
                        sendMessage('Oh, well someone should %Grin%');
                    }
                }
            }
        }

        //Set it today
        //Can be used to track how long she has been keyholder for or how long since she asked last time
        setDate(VARIABLE.ASKED_FOR_KEYHOLDER);

        if (sendYesOrNoQuestion('Would you give me control over the key?')) {
            sendMessage('You should know what you\'re getting into here');
            sendMessage('What I mean is that, for all intents and purposes, I will hold the key');
            sendMessage('You do not get to decide when the cage comes off, period');

            if (!hasChastityCage()) {
                sendMessage('Or in your case get to jerk off that is %Grin%');
            } else {
                sendMessage('If at the end of a session I decide it stays on, it stays on until the next session');
                sendMessage('Hygiene is important, %SlaveName% %EmoteHappy%');
                sendMessage('But how you handle that is up to you');
                sendMessage('If you want to take it off because you want to %JerkOff%...');
                sendMessage('You\'ll have to come to me or my assistant and ask');
            }

            if (sendYesOrNoQuestion('So, do you still want to make me keyholder?')) {
                RULE_DOMME_KEYHOLDER.setActive(true);
                sendMessage('You won\'t regret it, %SlaveName%');

                changeMeritHigh(false);
                sendMessage('Well, maybe you will, but I certainly won\'t');

                if (isEnforcingPersonality()) {
                    sendMessage('What\'s sure though is...');
                    sendMessage('You would\'ve regret it if you\'ve said no %Lol%');
                }

                sendMessage('Just to think that I could keep you in chastity indefinitely');

                if (!hasChastityCage()) {
                    sendMessage('Or like away from cumming at all in your case');
                }

                sendMessage('It turns me on so much, %SlaveName%');
                sendMessage('I probably won\'t, to be honest');
                sendMessage('But I love knowing that I have that option %Grin%');
                sendMessage('It\'s as if I\'m wearing that key on a necklace');
                sendMessage('Dangling between my %Boobs%');
                sendMessage('%Moan%');
                sendMessage('This thing we have just got interesting, %SlaveName% %EmoteHappy%');

                askForChastityTraining();
                return true;
            } else {
                sendMessage('Hmmm, that\'s too bad, %SlaveName%');
            }
        } else {
            if (isEnforcingPersonality()) {
                sendMessage('You know...');
                sendMessage('I really don\'t like being told no');
                sendMessage('I can\'t really force you to anything but I have my means and ways to get pretty close to forcing you %Grin%');
                sendMessage('So don\'t think I will give up until I am your keyholder and own %MyYour% %Cock% completely!');
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
            setVar(VARIABLE.KEYHOLDER_FANTASIZE, true);
        } else {
            sendMessage('Maybe that\'s just a little too scary %EmoteFlustered%');
        }

        sendMessage('I like to think that you\'ll change your mind');
        sendMessage('And that you\'ll give me the key');
        sendMessage('So that I will completely own %MyYour% %Cock% %SlaveName%');
        sendMessage('But for now...');

        if (hasChastityCage()) {
            sendMessage('I can still keep you in chastity during our sessions %EmoteHappy%');
        } else {
            sendMessage('I can still deny you your orgasm during our sessions %EmoteHappy%');
        }

        return false;
    }
}

function askForChastityTraining() {
    sendMessage('Now that I am your full time keyholder I would want you to ideally be locked whenever I haven\'t given you the explicit permission to unlock %MyYour% cock');
    sendMessage("Meaning you wear a chastity cage 24/7 and that you will only be released when explicitly allowed by me");
    sendMessage("Are you capable of wearing it 24/7 right now? I suggest you answer truthfully for your own sake...", 0);

    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar(VARIABLE.CHASTITY_LEVEL, 30);
            setVar(VARIABLE.CHASTITY_TRAINING, false);
            sendMessage('Impressive. This will be fun %Grin%');
            break;
        } else if (answer.isLike("no")) {
            sendMessage("Don't be ashamed, we can always work on this");

            sendMessage("This means we will be working on this together %Grin%");
            setVar(VARIABLE.CHASTITY_LEVEL, 1);
            setVar(VARIABLE.CHASTITY_TRAINING, true);

            sendMessage("Slave I don't care if you sleep with your cage");
            sendMessage("I think you should since it would constantly remind you who you belong to");
            sendMessage("But you won't be forced to");
            sendMessage("When it comes to exercise I understand that performing it while caged isn't easy");
            sendMessage("So I'm not gonna force this on you either");
            sendMessage("But again it would please me if you did");

            /*sendMessage("Well since you can't wear it 24/7 yet");
            sendMessage("I'm curious to find out how much you can handle");
            sendMessage("Are you willing to work towards learning how to wear it 24/7?", false);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {

                    break;
                } else if (answer.isLike("no")) {
                    setVar(VARIABLE.CHASTITY_TRAINING, false);
                    incrementVar(VARIABLE.CHASTITY_TRAINING_DECLINED, 1, 0);
                    sendMessage("%EmoteSad%");

                    if(isEnforcingPersonality()) {
                        sendMessage('This is the first time you said no to me');
                        sendMessage('And I think my profile description was pretty damn clear about this');
                        sendMessage('So don\'t you expect me to accept it this easily');
                        sendMessage('You\'ll see how this will turn out %Grin%');
                        changeMeritMedium(true);
                    }
                    break;
                } else {
                    sendMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }*/
            break;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function askForPartnerKeyholder() {
    if (sendYesOrNoQuestion('Does ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' hold the key? I mean, does she decide when it comes off?')) {
        sendMessage('Wow %Lol%');

        sendMessage('I think it\'s awesome that ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' is your keyholder');
        sendMessage('Kind of sad I\'m not, sure %EmoteSad%');
        sendMessage('But in the end, what matters it that that %Cock% is safely locked up');
        sendMessage('And under control of a woman');
        sendMessage('As all cocks should, really...');
        sendMessage('There are too many unlocked cocks out there %Laugh%');

        if (sendYesOrNoQuestion('I\'m sure ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' would agree, right?')) {
            sendMessage('I thought so %Grin%')
        } else {
            sendMessage('Well, I suppose yours is the only one that matters to her');
        }

        sendMessage('Because since you have that cage');
        sendMessage('I\'m certainly going to use it %Grin%');

        sendMessage('It\'s a great feeling to have that kind of control, %SlaveName%');
        sendMessage('Not that I\'d expect you to understand...');
        sendMessage('You\'d rather give up control than have it');
        setVar(VARIABLE.PARTNER_IS_KEYHOLDER, true);

        if (sendYesOrNoQuestion('She\'s okay with me telling you to take it off or put it on?')) {
            sendMessage('That would be kind of a problem otherwise');
        } else {
            sendMessage('Oh... well, I\'m sure you have a way of working around that...');
        }

        sendMessage('I wouldn\'t want to come between you and ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' though');
        sendMessage('So I won\'t tell you to wear it after our sessions');
        sendMessage('That\'s up to her %EmoteHappy%');
        return true;
    } else {
        return false;
    }
}