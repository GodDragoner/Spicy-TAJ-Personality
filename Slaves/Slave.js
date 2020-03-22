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
    let ageDifMs = Date.now() - getSubBirthday.getTimeInMillis();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function isSubBirthday() {
    let date = getSubBirthday();

    return date.getDay() === new Date().getDate() && date.getMonth() === new Date().getMonth();
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
    playSound('Audio\\Spicy\\Commands\\Kneel\\*.mp3');
    sendMessage(random('Kneel for me', 'Get down on your knees', 'Down on your knees, right now', 'I want you to kneel for me,') + ' %SlaveName%');
    setTempVar(VARIABLE.IS_KNEELING, true);
    setTempVar(VARIABLE.KNEELING_STARTED, setDate());
}

function isKneeling() {
    return getVar(VARIABLE.IS_KNEELING, false);
}

function stopKneeling() {
    //QUALITY: SOUND
    // playSound('Audio\\Spicy\\Commands\\Kneel\\*.mp3');
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
    return 175 - (getStrictnessForCharacter()*50);
}

function getPunishmentPointsBadThreshold() {
    return 400 - (getStrictnessForCharacter()*50);
}

function addPunishmentPoints(amount, reason = -1) {
    const points = getVar(VARIABLE.PUNISHMENT_POINTS);

    let multiplier = 1;

    //We don't want any "last change" edit nor multiplier
    if(amount < 0) {
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

    setVar(VARIABLE.PUNISHMENT_POINTS, Math.max(0, points + amount*multiplier));

    sendDebugMessage('Adding (with multiplier) ' + (amount*multiplier) + " punishment points");
    sendDebugMessage('Reason was ' + reason);

    //-1 is unknown reason
    if(reason >= 0) {
        let reasonArray = getVar(VARIABLE.PUNISHMENT_REASONS, new java.util.ArrayList());
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
    let hoursSinceLastChange = millisToTimeUnit(getMillisSinecDate(getVar(VARIABLE.LAST_PUNISHMENT_POINT_CHANGE)), TIME_UNIT_HOURS, 0);
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