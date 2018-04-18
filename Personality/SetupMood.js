run("Personality/Mood.js");

const DAYS_IN_WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const todayDate = new Date();
const dayOfWeek = DAYS_IN_WEEK[todayDate.getDay()];
let newDay = false;

if (isVar(dayOfWeek + "MoodDate")) {
    const date = getVar(dayOfWeek + "MoodDate");
    //Check if we are still on the same day
    if (!(date.getDay() == todayDate.getDate() && date.getMonth() == todayDate.getMonth() && date.getYear() == todayDate.getFullYear())) {
        //Reset temp added values
        setVar(VARIABLE_HAPPINESS, getVar(VARIABLE_HAPPINESS) - getVar(dayOfWeek + "Happiness"));
        setVar(VARIABLE_LUST, getVar(VARIABLE_LUST) - getVar(dayOfWeek + "Lust"));
        setVar(VARIABLE_ANGER, getVar(VARIABLE_ANGER) - getVar(dayOfWeek + "Anger"));
        newDay = true;
    }
} else {
    newDay = true;
}

if (newDay) {
    setDate(dayOfWeek + "MoodDate");


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

    idOffset = happyScenarios.length;

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
        3, //Had 2 subs compete in a ball busting competition, the winner didn"t get a punishment lock up period
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
        5, //Didn"t have an orgasm yesterday
        5, //Had x orgasms yesterday
        5, //Made a sub ruin after x weeks of denial
    ];

    let tempLust = activateRandomScenario(lustScenarios, idOffset, "Lust");

    idOffset += lustScenarios.length;

    const angerScenarious = [
        1, //Finished a great book
        1, //Had a bad day at work
        1, //A sub came without permission
        1, //A sub didn"t do as told
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
        3, //Had familiy dinner
        3, //Favourite vibrator broke
        4, //Got rejected for a date
        4, //A slave used a safeword yesterday
        4, //Tease and denied a sub, but he got a ruined by accident
        4, //Had a threesome, wasn"t the center of attention
        4, //Had a sub cry yesterday
        4, //Vibrator, battery ran out, didn"t have new ones
        4, //A sub was late for his cleaning duties yesterday
        4, //Hair dresser cancelled an appointment
        4, //Manicure cancelled an appointment
        4, //Went shopping without buying anything
        5, //A sub didn"t thank properly for an orgasm
        5, //A sub didn"t do his chores
        5, //Lover came too fast
        5, //Lover cancelled a date
        5, //Lover hit on glitter friend at partyce
        5, //glitter friend cancelled a date
        5, //2 glitter friends had dinner without me
        5, //Boss at work, gave me extra work
        5, //An ugly tried to make a move at a party
        5, //A new sex toy didn"t live to expectations
    ];

    let tempAnger = activateRandomScenario(angerScenarious, idOffset, "Anger");

    //Handle special days
    //Christmas
    if (todayDate.getMonth() == 12) {
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
    else if (todayDate.getMonth() == 10 && todayDate.getDate() == 31) {
        tempLust += 15;
    }

    //Valentines day
    else if (todayDate.getMonth() == 2 && todayDate.getDate() == 14) {
        tempLust += 15;
    }

    //Summer
    else if (todayDate.getMonth() == 6 || todayDate.getMonth() == 7 || todayDate.getMonth() == 8) {
        tempHappiness += 8;
        tempLust += 5;
    }

    //TODO: Sub and dom birthday


    //Set the daily based values
    setVar(dayOfWeek + "Happiness", tempHappiness);
    setVar(dayOfWeek + "Lust", tempLust);
    setVar(dayOfWeek + "Anger", tempAnger);

    //Add the daily based values
    setVar(VARIABLE_HAPPINESS, getVar(VARIABLE_HAPPINESS) + tempHappiness);
    setVar(VARIABLE_LUST, getVar(VARIABLE_LUST) + tempLust);
    setVar(VARIABLE_ANGER, getVar(VARIABLE_ANGER) + tempAnger);
}

function activateRandomScenario(scenarioArray, idOffset, moodType) {
    const index = randomInteger(0, scenarioArray.length);
    const scenario = scenarioArray[index];
    const scenarioId = index + idOffset;

    const activeMoodScenarios = getVar("activeMoodScenarios");
    //Register the scenario as listed
    setVar("activeMoodScenarios", activeMoodScenarios + scenarioId + ",");

    //Return the scenario value
    return scenario;
}

function isScenarioActive(scenarioId) {
    return getVar("activeMoodScenarios", ",").contains("," + scenarioId + ",");
}



