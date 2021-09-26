run("Personality/Mood.js");

const DAYS_IN_WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let newDay = false;

{
    const todayDate = new Date();
    const dayOfWeek = DAYS_IN_WEEK[todayDate.getDay()];


    if (resetMoodForDay(dayOfWeek, todayDate)) {
        handleMoodForDay(dayOfWeek, todayDate);
    }
}

sendDebugMessage('Mood after startup routine');
debugPrintMood();

function resetMoodForDay(dayOfWeek, todayDate) {
    newDay = false;


    //Basically every days value change lasts for one week after that it is removed

    //Have we had this day before?
    if (isVar(dayOfWeek + "MoodDate")) {
        const date = getVar(dayOfWeek + "MoodDate");
        //Check if we are still on the same day
        if (!(date.getDay() == todayDate.getDate() && date.getMonth() == todayDate.getMonth() && date.getYear() == todayDate.getFullYear())) {
            //Reset temp added values
            sendDebugMessage('Before temp day of week mood (' + dayOfWeek + ')');
            debugPrintMood();

            let happiness = getVar(VARIABLE.HAPPINESS) - getVar(dayOfWeek + "Happiness", 0);
            let lust = getVar(VARIABLE.LUST) - getVar(dayOfWeek + "Lust", 0);
            let anger = getVar(VARIABLE.ANGER) - getVar(dayOfWeek + "Anger", 0);

            if (isNaN(happiness)) {
                sendDebugMessage('Happiness was NaN with set value ' + getVar(VARIABLE.HAPPINESS) + ' and temp value ' + getVar(dayOfWeek + "Happiness", 0));
                happiness = getVar(VARIABLE.HAPPINESS);
            }

            if (isNaN(lust)) {
                sendDebugMessage('Happiness was NaN with set value ' + getVar(VARIABLE.LUST) + ' and temp value ' + getVar(dayOfWeek + "Lust", 0));
                lust = getVar(VARIABLE.LUST);
            }

            if (isNaN(anger)) {
                sendDebugMessage('Happiness was NaN with set value ' + getVar(VARIABLE.ANGER) + ' and temp value ' + getVar(dayOfWeek + "Anger", 0));
                anger = getVar(VARIABLE.ANGER);
            }


            setVar(VARIABLE.HAPPINESS, Math.max(0, happiness));
            setVar(VARIABLE.LUST, Math.max(0, lust));
            setVar(VARIABLE.ANGER, Math.max(0, anger));
            newDay = true;

            sendDebugMessage('After temp day of week mood:');
            debugPrintMood();
        }
    } else {
        newDay = true;
    }

    return newDay;
}

function handleMoodForDay(dayOfWeek, todayDate) {
    setDate(dayOfWeek + "MoodDate");

    //Reset var to zero
    setVar(VARIABLE.DAILY_MERIT_CHANGE, 0);

    //Reset scenarios
    setVar("activeMoodScenarios", ",");

    //Handle scenarios
    const happyScenarios = [
        1, //Received a sweet text
        1, //Went shopping last night
        1, //Had a great day at work
        1, //Went wining and dining last night
        1, //Went to the hairdresser
        1, //Slept great
        1, //Reading a great book
        1, //Given a compliment today from lower
        1, //Watching a really good tv series
        2, //Donated to a charity
        2, //Going to a concert soon
        2, //Planning a vacation with lover
        5, //Got a raise
        2, //Had fun with glitter friend last night
        2, //Went to see a movie yesterday
        2, //Had an amazing workout yesterday
        2, //Having a nice party coming up
        5, //Got gift from lover
        2, //Bought a new decorative item
        2, //Lovely weather
        2, //Had coffee with a glitter friend
        3, //Went swimming
        3, //Tried a new good meal
        3, //lost a bit of weight
        3, //Did terrific make up today
        5, //Went to a great party
        5, //Went on a date last night
        3, //Had a really great breakfast
        3, //Went to a museum
        3, //went to an art gallery
        5, //Had a nice chat with Glitter x
        3, //Had a good day at work
        3, //Went for a nice walk in nature
        5, //A slave bought a present
        3, //bought a new clothing article
        4, //Have a great hair day
        3, //Had family dinner
        4, //had family visit
        4, //Saw som funny movies on the internet
        4, //Went to the zoo
        4, //Heard a new hit song
        4, //Got a massage
        4, //Got a manicure
        4, //Had a nice quiet day
        4, //Had the car washed
        4, //Saved money on a great deal
        5, //Watched the sunset yesterday
        5, //The soccer team won a match yesterday
        5, //Played a bit of video games yesterday
        5 //Got praised at the job
    ];

    let tempHappiness = activateRandomScenario(happyScenarios, 0, "Happiness");

    let idOffset = happyScenarios.length;

    const lustScenarios = [
        1, //Bought new lingerie
        1, //Got new lingerie as a gift
        1, //Got a new spanking instrument
        1, //Got a new vibrator
        1, //Got a pair of high heels
        1, //Had sex last night
        1, //Denied Sub last night
        1, //Had a fun evening with glitter friend
        1, //Spanked sub last night
        1, //Allowed sub an orgasm last night
        2, //Watched a great porno last night
        2, //Got a sexy text from lover
        2, //Had pussy licked last night
        2, //A sub broke his chastity record last night
        2, //A female sub had multiple forced orgasms
        2, //Tied a slave and left him for hours
        2, //Had a slave stand in the corner for x hours yesterday
        2, //Used a machine to get fucked
        2, //Had fun with the sybian yesterday
        2, //Made a sub suck lovers cock
        3, //Made a sub wear lingerie for a full day
        3, //Had 2 subs compete in a ball busting competition, the winner didnt get a punishment lock up period
        3, //Found a new way fun self bondage scenario for you
        3, //Had a hot dream last night
        3, //Lover gave an erotic massage last night
        3, //Bought a pair of super sexy high heels
        3, //Had a threesome
        3, //A slave agreed to try a long period of chastity
        3, //Went to a sex club
        3, //Went to a sex party
        4, //Went to a bdsm party
        4, //Tried a female chastity device
        4, //A slave just got pierced for the cage
        4, //Had another man at the office go under the desk and lick me
        4, //Have a secret slave at the office, who"s been ..
        4, //Tried a new position
        4, //Teased and denied a sub
        4, //Had a stranger commit to ..
        4, //Gave a sub the ball busting of a life time
        4, //Made a sub go to a gay bar dressed in lingerie
        4, //Made a sub go to a lingerie store and buy stuff for himself
        5, //Made a sub get on his knees in the middle of a ... shop/cafe/other
        5, //Made a sub wear heels in public
        5, //Had a kinky evening with glitter friend
        5, //Had a sub tied with the genitalia given a healthy dose of whipping/Hot sauce
        5, //Had 2 denied subs tied, gagged and watching me getting fucked
        5, //Didnt have an orgasm yesterday
        5, //Had x orgasms yesterday
        5, //Made a sub ruin after x weeks of denial
    ];

    let tempLust = activateRandomScenario(lustScenarios, idOffset, "Lust");

    idOffset += lustScenarios.length;

    const angerScenarios = [
        1, //Finished a great book
        1, //Had a bad day at work
        1, //A sub came without permission
        1, //A sub didnt do as told
        1, //Had an argument with lover
        1, //Had an argument with a family member
        1, //Had an argument with a glitter friend
        1, //Gained a bit of weight
        1, //Had a bad workout
        1, //Tried a new restaurant, it was bad
        2, //Slept badly
        2, //A sub misbehaved
        2, //A sub performed poorly at the academy
        2, //A cane broke
        2, //Car problems
        2, //Bad hair day
        2, //Bad make up day
        2, //Soccer team lost a match
        2, //Got critique at the job
        2, //Poor weather
        3, //Saw a bad movie
        3, //Nothing to watch in TV
        3, //Have an event coming that I dont wanna go to
        3, //Went to museum, boring
        3, //Went to art gallery, boring
        3, //Went to a boring lecture
        3, //Favourite pants broke
        3, //Favourite shoes broke
        3, //Had family dinner
        3, //Favourite vibrator broke
        4, //Got rejected for a date
        4, //A slave used a safeword yesterday
        4, //Tease and denied a sub, but he got a ruined by accident
        4, //Had a threesome, wasnt the center of attention
        4, //Had a sub cry yesterday
        4, //Vibrator, battery ran out, didnt have new ones
        4, //A sub was late for his cleaning duties yesterday
        4, //Hair dresser cancelled an appointment
        4, //Manicure cancelled an appointment
        4, //Went shopping without buying anything
        5, //A sub didnt thank properly for an orgasm
        5, //A sub didnt do his chores
        5, //Lover came too fast
        5, //Lover cancelled a date
        5, //Lover hit on glitter friend at partyce
        5, //glitter friend cancelled a date
        5, //2 glitter friends had dinner without me
        5, //Boss at work, gave me extra work
        5, //An ugly tried to make a move at a party
        5, //A new sex toy didnt live to expectations
    ];

    let tempAnger = activateRandomScenario(angerScenarios, idOffset, "Anger");

    //Handle special days
    //Christmas
    if (todayDate.getMonth() == 11) {
        if (todayDate.getDate() == 24 || todayDate.getDate() == 25) {
            tempHappiness += 10;
        }
        //New Year
        else if (todayDate.getDate() == 31) {
            tempLust += 10;
        } else {
            tempLust += 10;
        }
    }

    //Halloween
    else if (todayDate.getMonth() == 9 && todayDate.getDate() == 31) {
        tempLust += 15;
    }

    //Valentines day
    else if (todayDate.getMonth() == 1 && todayDate.getDate() == 14) {
        tempLust += 15;
    }

    //Summer
    else if (todayDate.getMonth() == 5 || todayDate.getMonth() == 6 || todayDate.getMonth() == 7) {
        tempHappiness += 1;
        tempLust += 1;
    }

    //More anger if we are crossing the bad threshold
    if (getVar(VARIABLE.PUNISHMENT_POINTS) >= getPunishmentPointsBadThreshold()) {
        tempAnger += 2;

        sendDebugMessage('Increasing anger due too many punishment points');
    }

    if (getMood() >= NEUTRAL_MOOD) {
        tempHappiness -= 2;
        tempLust -= 1;

        sendDebugMessage('Reducing lust and happiness due to bad merit mood');
    }

    //Sub birthday
    if (isSubBirthday()) {
        tempLust += 12;
    }

    if (isDomBirthday()) {
        tempLust += 15;
        tempHappiness += 15;
    }

    //Set the daily based values
    setVar(dayOfWeek + "Happiness", tempHappiness);
    setVar(dayOfWeek + "Lust", tempLust);
    setVar(dayOfWeek + "Anger", tempAnger);

    //Debug print temp mood values
    sendDebugMessage("Temp Lust: " + tempLust);
    sendDebugMessage("Temp Happiness: " + tempHappiness);
    sendDebugMessage("Temp Anger: " + tempAnger);

    //Add the daily based values
    setVar(VARIABLE.HAPPINESS, Math.max(0, getVar(VARIABLE.HAPPINESS, 0) + tempHappiness));
    setVar(VARIABLE.LUST, Math.max(0, getVar(VARIABLE.LUST, 0) + tempLust));
    setVar(VARIABLE.ANGER, Math.max(0, getVar(VARIABLE.ANGER, 0) + tempAnger));

    //Change merits based on punishment points at that day
    // if (getVar(VARIABLE.PUNISHMENT_POINTS) >= getPunishmentPointsBadThreshold()) {
    //     sendDebugMessage('Changed merit because punishment points are above threshold');
    //     changeMeritMedium(true);
    // } else if (getVar(VARIABLE.PUNISHMENT_POINTS) <= getPunishmentPointsGoodThreshold()) {
    //     sendDebugMessage('Changed merit because punishment points are below threshold');
    //     changeMeritLow(false);
    // }
    //
    // //Shuffle them so it's random which one is checked/activated first
    // let shuffledMoods = shuffle(cloneArray(MOODS));
    //
    // for (let x = 0; x < shuffledMoods.length; x++) {
    //     let mood = shuffledMoods[x];
    //
    //     sendDebugMessage('Checking mood "' + mood.name + '"')
    //
    //     if (mood.isActive()) {
    //         mood.checkActive();
    //     } else if (mood.shouldActivate()) {
    //         mood.setActive(true, randomInteger(mood.minHours, mood.maxHours));
    //     }
    // }
}

function getHighMoodAttributeThreshold(multiplier = 1) {
    return 30*multiplier;
}

function activateRandomScenario(scenarioArray, idOffset, moodType) {
    const index = randomInteger(0, scenarioArray.length - 1);
    const scenario = scenarioArray[index];
    const scenarioId = index + idOffset;

    const activeMoodScenarios = getVar("activeMoodScenarios");
    //Register the scenario as listed
    setVar("activeMoodScenarios", activeMoodScenarios + scenarioId + ",");

    //Return the scenario value
    return scenario;
}

function debugPrintMood() {
    sendDebugMessage("Lust: " + getVar(VARIABLE.LUST));
    sendDebugMessage("Happiness: " + getVar(VARIABLE.HAPPINESS));
    sendDebugMessage("Anger: " + getVar(VARIABLE.ANGER));

    for (let x = 0; x < MOODS.length; x++) {
        let mood = MOODS[x];

        if (mood.isActive()) {
            sendDebugMessage('Mood "' + mood.name + '" is active')
        }
    }
}

function isScenarioActive(scenarioId) {
    return getVar("activeMoodScenarios", ",").contains("," + scenarioId + ",");
}


