run("Slaves/Chastity.js");

function getSubBirthday() {
    if(!isVar(VARIABLE.SUB_BIRTHDAY)) {
        sendDebugMessage('No sub birthday found');
        return setDate().addDay(-1);
    } else {
        return getDate(VARIABLE.SUB_BIRTHDAY);
    }
}

function getSubBirthday() {
    if(!isVar(VARIABLE.SUB_BIRTHDAY)) {
        sendDebugMessage('No sub birthday found');
        return setDate().addDay(-1);
    } else {
        return getDate(VARIABLE.SUB_BIRTHDAY);
    }
}

function getSubAge() {
    let ageDifMs = Date.now() - getSubBirthday().getTimeInMillis();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function hasSubHadAnalOrgasmBefore() {
    return getVar(VARIABLE.ANAL_ORGASMS_COUNT) > 0;
}

function isSubBirthday() {
    let date = getSubBirthday();

    return date.getDay() === new Date().getDate() && date.getMonth() === new Date().getMonth();
}

/**
 * Returns whether the slave has been on vacation or similar within the past week
 * @return {boolean}
 */
function hasBeenAwayInThePastWeek() {
    let date = getLatestAwayDate();

    if(date == null) {
        return false;
    }


    return date.after(setDate().addDay(-7));
}

/**
 * Returns the latest date the slave was away (illness or holiday). Null if non ever occured
 * @return {null}
 */
function getLatestAwayDate() {
    let date = null;

    if(isVar(VARIABLE.SLAVE_LAST_VACATION_UNTIL)) {
        date = getDate(VARIABLE.SLAVE_LAST_VACATION_UNTIL);
    }


    if(isVar(VARIABLE.SLAVE_LAST_ILL_UNTIL) && (date == null || getDate(VARIABLE.SLAVE_LAST_ILL_UNTIL).after(date))) {
        date = getDate(VARIABLE.SLAVE_LAST_ILL_UNTIL);
    }

    return date;
}

function increasePainTolerance() {
    if(!isVar(VARIABLE.LAST_PAIN_TOLERANCE_INCREASE)) {
        setDate(VARIABLE.LAST_PAIN_TOLERANCE_INCREASE);
        return false;
    }

    if(getVar(VARIABLE.SUB_PAIN_TOLERANCE) < 10 && getVar(VARIABLE.LAST_PAIN_TOLERANCE_INCREASE).addDay(7).hasPassed()) {
        incrementVar(VARIABLE.SUB_PAIN_TOLERANCE, 1);
        setDate(VARIABLE.LAST_PAIN_TOLERANCE_INCREASE);
        return true;
    }

    return false;
}

function hasSmallPenis() {
    return getVar(VARIABLE.SUB_COCK_LENGTH, 1) < 18;
}

function askForPainToleranceIncrease() {
    if(sendYesOrNoQuestion('Was the level of pain %GeneralTime% bearable for you %SlaveName%?')) {
        sendMessageBasedOnSender('%Good%');
        sendMessageBasedOnSender('Because I went in a bit rougher than usual');
        sendMessageBasedOnSender('Now I know I can continue like this in the future %Grin%');
    } else {
        sendMessageBasedOnSender('%EmoteSad%');
        sendMessageBasedOnSender('Thank you for your honesty though %SlaveName%');

        if(getVar(VARIABLE.SUB_PAIN_TOLERANCE) > 1) {
            incrementVar(VARIABLE.SUB_PAIN_TOLERANCE, -1);
        }
    }
}

function startKneeling() {
    sendMessage(random('Kneel for me', 'Get down on your knees', 'Down on your knees, right now', 'I want you to kneel for me,') + ' %SlaveName%', 0);
    playSound('Audio/Spicy/Commands/Kneel/*.mp3');
    sleep(5);
    setTempVar(VARIABLE.IS_KNEELING, true);
    setTempVar(VARIABLE.KNEELING_STARTED, setDate());
}

function isKneeling() {
    return getVar(VARIABLE.IS_KNEELING, false);
}

function stopKneeling() {
    //QUALITY: SOUND
    // playSound('Audio/Spicy/Commands/Kneel/*.mp3');
    sendMessage(random('You can stop kneeling and sit', 'You can get up from your knees now and sit', 'You can sit down') + ' %SlaveName%');
    setTempVar(VARIABLE.IS_KNEELING, false);
}

function decideStopKneeling() {
    if(!isKneeling()) {

    } else {
        let dateStartedKneeling = getDate(VARIABLE.KNEELING_STARTED);

        let minKneeling = 2*(getStrictnessForCharacter() + 1) + getMood();

        if(dateStartedKneeling.addMinute(minKneeling).hasPassed()) {
            return true;
        }
    }

    return false;
}

function playRandomSissyHypno() {
    playVideo('Videos/Spicy/Modules/Sissy/Brainwash/*.mp4', true);
}

function getPunishmentPointsGoodThreshold() {
    return 250 - (getStrictnessForCharacter()*50);
}

function getPunishmentPointsBadThreshold() {
    return 500 - ((getStrictnessForCharacter() + 1)*50);
}

function addPunishmentPoints(amount, reason = -1) {
    const points = getVar(VARIABLE.PUNISHMENT_POINTS);

    let multiplier = 1;

    //We don't want any "last change" edit nor multiplier
    if(amount <= 0) {
        sendDebugMessage('Subtracting ' + amount + ' punishment points');
        setVar(VARIABLE.PUNISHMENT_POINTS, Math.max(0, points + amount));

        if(getVar(VARIABLE.PUNISHMENT_POINTS) < 100) {
            //Clear reasons array because we are now below
            setVar(VARIABLE.PUNISHMENT_REASONS, new java.util.ArrayList());
        }

        return;
    }

    sendDebugMessage('About to add ' + amount + " punishment points");

    if(isVar(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE)) {
        multiplier = getVar(VARIABLE.PUNISHMENT_POINT_MULTIPLIER);

        sendDebugMessage('Base pp multiplier is ' + multiplier);


        /*let minuteMultipliers = [2, 4, 6];
        let minuteMultiplier = minuteMultipliers[getStrictnessForCharacter()];

        //Check whether we had at least x minutes without punishment points assigned
        //480 = 8 hours
        if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(480*minuteMultiplier).hasPassed()) {
            multiplier -= 0.2;
        }
        //360 = 6 hours
        else if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(360*minuteMultiplier).hasPassed()) {
            multiplier -= 0.1;
        }
        //180 = 3 hours
        else if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(180*minuteMultiplier).hasPassed()) {
            multiplier -= 0.05;
        }
        //Neutral case
        //120 = 2 hours
        else if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(120*minuteMultiplier).hasPassed()) {
            multiplier += 0;
        }
        //30 = 0.5 hours
        else if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(30*minuteMultiplier).hasPassed()) {
            multiplier += 0.1;
        }
        //20 = 0.33 hours
        else if(getDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE).addMinute(20*minuteMultiplier).hasPassed()) {
            multiplier += 0.15;
        } else {
            multiplier += 0.2;
        }*/

        multiplier += getPunishmentPointMultiplierChange();

        multiplier = setPunishmentPointMultiplier(multiplier);
    } else {
        setVar(VARIABLE.PUNISHMENT_POINT_MULTIPLIER, 1);
    }


    setDate(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE);

    addPunishmentPointsDirectly(amount, multiplier, reason);
}

function addPunishmentPointsDirectly(amount, multiplier, reason = -1) {
    setVar(VARIABLE.PUNISHMENT_POINTS, Math.max(0, getVar(VARIABLE.PUNISHMENT_POINTS, 0) + amount*multiplier));

    sendDebugMessage('Adding (with multiplier) ' + (amount*multiplier) + " punishment points");
    sendDebugMessage('Reason was ' + reason);

    //-1 is unknown reason
    if (reason >= 0) {
        let reasonArray = tryGetArrayList(VARIABLE.PUNISHMENT_REASONS);
        reasonArray.add(reason);

        setVar(VARIABLE.PUNISHMENT_REASONS, reasonArray);
    }
}

function setPunishmentPointMultiplier(multiplier) {
    multiplier = Math.min(3, Math.max(0.5, multiplier));

    sendDebugMessage('New pp multiplier is ' + multiplier);

    //Update new multiplier
    setVar(VARIABLE.PUNISHMENT_POINT_MULTIPLIER, multiplier);
    return multiplier;
}

function getPunishmentPointMultiplierChange() {
    let mood = getMood();
    let hoursSinceLastChange = millisToTimeUnit(getMillisSinecDate(getVar(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE, setDate().addDay(-100))), TIME_UNIT_HOURS, 0);
    let maxSubtraction = -0.25;
    let baseLevel = 0.1*(mood*getStrictnessForCharacter() + 10);
    let subtractLevel = 0.1*hoursSinceLastChange/(Math.max(1, getStrictnessForCharacter()) + 1);

    sendDebugMessage('Hours since last pp multiplier change ' + hoursSinceLastChange);
    sendDebugMessage('Base multiplier level is '  + baseLevel);
    sendDebugMessage('Subtract multiplier level is ' + subtractLevel);

    return Math.max(maxSubtraction, baseLevel - subtractLevel);
}

function addGold(amount) {
    const gold = getGold();

    if(gold + amount > 0) {
        setVar(VARIABLE.GOLD, gold + amount);
    } else {
        setVar(VARIABLE.GOLD, 0);
    }
}

function setFullTime() {
    return setVar(VARIABLE.SLAVE_TYPE, 1);
}

function setPartTime() {
    return setVar(VARIABLE.SLAVE_TYPE, 0);
}

function isFullTime() {
    return getVar(VARIABLE.SLAVE_TYPE) == 1;
}

function getMaxStartingDiameter() {
    let diameter = getUsedToDiameter();

    let assLevel = getVar(VARIABLE.ASS_LEVEL);

    return Math.max(diameter, assLevel / 7.5);
}

function getMaxDiameterIncrease() {
    let maxDiameterIncrease = 1;

    let assLevel = getVar(VARIABLE.ASS_LEVEL);

    if (assLevel >= 30) {
        maxDiameterIncrease = 0.60;
    } else if (assLevel >= 23) {
        maxDiameterIncrease = 0.45;
    } else {
        maxDiameterIncrease = .35;
    }

    return maxDiameterIncrease;
}


/**
 * Perfoms all necessary interaction to setup a full time account
 * @param initial Whether it's the initial call from setup script or changed later on
 */
function perfomFullTimeTransition(initial = false) {
    if (isFullTime()) {
        sendMessage("Now as you know I expect you to serve full time");
        sendMessage("Normally this would mean that I want you to launch Spicy at least 6 times per week");
        sendMessage("But I would understand it if your life doesn't allow for that");
        sendMessage("So %SlaveName%...");
        let answer = sendInput("How many times a week do you think I should expect you to visit me?");

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else if (result > 7) {
                    sendMessage("You chose a number too big, you can't visit me more than 7 times a week");
                    answer.loop();
                } else {
                    setVar(VARIABLE.MIN_WEEKLY_VISITS, result);
                    break;
                }
            } else {
                sendMessage("Slave...");
                sendMessage("I asked you to just give me a simple number...");
                sendMessage("You aren't supposed to write down '7 days', '4 times' or anything similar");
                sendMessage("Just give me a number plain and simple like 5, 7 or 2");
                answer.loop();
            }
        }

        sendMessage("Perfect " + getVar(VARIABLE.MIN_WEEKLY_VISITS) + " times a week it is.");
        sendMessage("Next I need to know how many minutes per week you should do chores");
        sendMessage("Right now the amount of minutes for chores is " + getVar(VARIABLE.MIN_WEEKLY_CHORE_TIME));
        sendMessage("Which I consider to be very fair since this number will likely cover your cleaning duty");
        sendMessage("I consider all chores beyond those to be voluntary");
        sendMessage("Either because you want to please me or perhaps earn a bit of gold");

        answer = sendInput("Do you wish to change this?");
        while (true) {
            if (answer.isLike("yes")) {
                sendMessage("Okay then...");
                answer = sendInput("So how many minutes should you be doing chores each week at least?");

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result < 60*2) {
                            sendMessage("Nothing less than 120 minutes %SlaveName%! That would be just laziness!");
                            answer.loop();
                        } else {
                            sendMessage("%Good%");
                            setVar(VARIABLE.MIN_WEEKLY_CHORE_TIME, result);
                            break;
                        }
                    } else {
                        sendMessage("All I asked you to do was input a simple number...");
                        sendMessage("Like 120");
                        sendMessage("or 150");
                        sendMessage("or 400...");
                        answer.loop();
                    }
                }

                break;
            } else if (answer.isLike("no")) {
                sendMessage("Very well");
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }
}