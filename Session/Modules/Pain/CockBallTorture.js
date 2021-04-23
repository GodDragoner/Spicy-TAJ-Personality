//Counts how many times we were supposed to ask the slave whether it already hurts
let acheBallCounter = 0;
let acheCockCounter = 0;
let CBT_HISTORY = createTempIntegerHistory(0, 6);
let TEMP_CBT_HISTORY = [];

function decideCBTPunishment(bodyParts) {
    while (true) {
        let newTask = CBT_HISTORY.getRandomAvailableId();

        CBT_HISTORY.addHistoryRun(newTask);

        switch (newTask) {
            case 0:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return newTask;
            case 1:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return newTask;
            case 2:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                break;
            case 3:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return newTask;
            case 6:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return newTask;
            //Penis part
            case 4:
                if (!bodyParts.contains(BODY_PART_PENIS_SHAFT) && !bodyParts.contains(BODY_PART_PENIS_HEAD)) {
                    continue;
                }

                return newTask;
            case 5:
                if (!bodyParts.contains(BODY_PART_PENIS_SHAFT) && !bodyParts.contains(BODY_PART_PENIS_HEAD)) {
                    continue;
                }

                return newTask;
            default:
                sendDebugMessage('Unknown cbt task id ' + newTask);
                return 0;
        }
    }

    return 1;
}

function executeCBTPunishment(bodyParts, id) {
    let completed = false;

    switch (id) {
        case 0:
            completed = punishSqueezeBalls();
            break;
        case 1:
            completed = punishBustBalls(isChance(50));
            break;
        case 2:
            completed = punishFlickCBT(BODY_PART_BALLS);
            break;
        case 3:
            completed = punishRubberbandCBT(BODY_PART_BALLS);
            break;
        case 6:
            //We can only do this if not in chastity
            if(!isInChastity()) {
                completed = punishBookCBT();
                break;
            } else {
                //Any other punishment randomly
                executeCBTPunishment(bodyParts, decideCBTPunishment(bodyParts));
                return false;
            }
        //Penis part
        case 4:
            completed = punishRubberbandCBT(random(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD));
            break;
        case 5:
            completed = punishFlickCBT(random(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD));
            break;
    }

    //Do this here AFTER
    TEMP_CBT_HISTORY.push(id);

    //Did we complete it / does it hurt yet?
    return completed;
}

//TODO: Currently used for many things. Should instead be smallPunishment and then a only pain flag
function smallCBTPunishment(balls = true, penis = true, loops = 0) {
    //Reset temp history
    TEMP_CBT_HISTORY = [];

    let lastInteger = -1;
    let completed = false;
    let extraRuns = 0;

    let bodyParts = new java.util.ArrayList();

    if (balls) {
        bodyParts.add(BODY_PART_BALLS);
    }

    if (penis) {
        bodyParts.add(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD);
    }

    while (!completed) {
        lastInteger = decideCBTPunishment(bodyParts);

        //Not completed or not hurting enough?
        completed = executeCBTPunishment(bodyParts, lastInteger);

        //More punishment if feels like punishing more or loop amount was given
        if (completed && (feelsLikePunishingSlave() || loops > 0) && extraRuns < 2 + loops) {
            completed = false;
            extraRuns++;
        }
    }

    if(balls) {
        punishSmallBustBallsMultiple();
    }
}

function shouldExplainCBTTerms() {
    return !isVar(VARIABLE.LAST_TIME_EXPLAINED_CBT_TERMS) || getDate(VARIABLE.LAST_TIME_EXPLAINED_CBT_TERMS).addDay(random(4, 7)).hasPassed();
}

function sendExplainCBTTerms() {
    sendMessage('Slap, hit and smack means to use your ' + random('open hand', 'palm') + ' to bust those balls');
    sendMessage('Flick means to use your index finger to flick your balls');
    sendMessage('And punch is my favorite one');
    sendMessage('It means you should punch your balls with your fist');
    setDate(VARIABLE.LAST_TIME_EXPLAINED_CBT_TERMS);
}


//Personality strictness should not influence pain!
function punishSmallBustBallsMultiple(maxLoops = getVar(VARIABLE.SUB_PAIN_TOLERANCE), earlyExitChance = getEarlyPunishmentExitChance()) {
    //QUALITY: "Now back to your balls" etc. kind of transitions

    //QUALITY: Can be used for other stuff too
    if(feelsLikeShowingPower()) {
        sendMessage('I want you to count the next hits out loud %SlaveName%');
        sendMessage('And you will thank me for EACH and EVERYONE of them');
        sendMessage('So all I want to hear is: "One... Thank you %DomHonorific%"');
        sendMessage('"Two... Thank you %DomHonorific%"');
    }

    if(shouldExplainCBTTerms()) {
        sendMessage('Before we continue let\'s refresh the terminology real quick %SlaveName%');
        sendExplainCBTTerms();
    }

    while (maxLoops > 0) {
        maxLoops--;

        switch (randomInteger(0, 9)) {
            case 0:
                sendMessage('Let\'s give %MyYour% %Balls% another ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' smacks %EmoteHappy%');
                waitForDone();
                break;
            case 1:
                sendMessage('I want ' + returnYourOrMy() + ' %Balls% to really hurt. Give them another hard slap');
                waitForDone();
                break;
            case 2:
                sendMessage('Punch %MyYour% %Balls% ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' times for me');
                waitForDone();
                break;
            case 3:
                sendMessage('Now smack %MyYour% %Balls% ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) + ' times as hard as you can');
                waitForDone();
                break;
            case 4:
                sendMessage('Now flick each testicle ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) + ' times');
                waitForDone();
                break;
            case 5:
                sendMessage('Now ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' more smacks to each ball');
                waitForDone();
                break;
            case 6:
                sendMessage('Give me ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' more slaps'  + ' for %MyYour% %Balls%');
                waitForDone();
                break;
            case 7:
                sendMessage(getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits', 'punches'));
                waitForDone();
                break;
            case 8:
                sendMessage('I want ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits', 'punches') + ' for %MyYour% %Balls%');
                waitForDone();
                break;
            case 9:
                sendMessage('I want you to add ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits', 'punches') + ' to each ball');
                waitForDone();
                break;
        }

        if (isChance(earlyExitChance)) {
            break;
        }
    }
}

function punishBookCBT(multiplier = 1) {
    if (!fetchToy('heavy book')) {
        sendMessage('Well then... I guess we have to take a different approach %EmoteSad%');
        return false;
    }

    sendMessage(random("This is fairly simple", "This is gonna be quite simple", "You shouldn't find this too difficult"));
    let falls = getVar(VARIABLE.SUB_PAIN_TOLERANCE) * multiplier + 7;
    sendMessage(random("I want you to place the book on a table ", "You should place the book on a table "));
    sendMessage(random("It has to stand up ", "It should be standing up "));
    sendMessage(random("Then I want you to tilt the book and aim for %MyYour% %Balls%", "Then you're going to aim for %MyYour% %Balls% and tilt the book") + " %Moan%");
    sendMessage(random("To be precise I want you to hit your precious %Balls%", "You're gonna hit %MyYour% %Balls%"));
    sendMessage(falls + " times");

    sendMessage(random("Let me know when you're done", "Inform me when you're done") + " %SlaveName%");
    waitForDone(5 * falls);

    if (askForCBTPain(BODY_PART_BALLS)) {
        sendMessage('%Moan%');
        return true;
    } else {
        sendMessage('I am sure I can do something about that %SlaveName%');
        return false;
    }
}

function punishFlickCBT(bodyPart, multiplier = 1) {
    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            sendMessage('I want you to flick my %Cock% %SlaveName%');
            sendMessage('The shaft to be precise');
            break;
        case BODY_PART_PENIS_HEAD:
            sendMessage('I want you to flick my %Cock% %SlaveName%');
            sendMessage('The head of it to be precise');
            break;
        case BODY_PART_BALLS:
            sendMessage('I want you to flick my %Balls% %SlaveName%');
            break;
    }

    let completedInTime = false;
    while (!completedInTime) {
        switch (bodyPart) {
            case BODY_PART_PENIS_SHAFT:
                sendMessage('Flick it ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 * multiplier + ' times');
                break;
            case BODY_PART_PENIS_HEAD:
                sendMessage('Flick it ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * multiplier + ' times');
                break;
            case BODY_PART_BALLS:
                sendMessage('Flick each side ' + getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 * multiplier + ' times');
                break;
        }

        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 60);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done', 'ready', 'yes')) {
                sendMessage('%Grin%');

                completedInTime = true;

                if (askForCBTPain(bodyPart)) {
                    sendMessage('%Moan%');
                    return true;
                } else {
                    sendMessage('I am sure I can do something about that %SlaveName%');
                    return false;
                }
                break;
            } else {
                sendMessage("Are you trying to write 'done'?", 0);
                answer.loop();
            }
        }
    }
}

function punishBustBalls(hand = true, multiplier = 1) {
    let implement = 'hand';

    if (!hand) {
        implement = fetchSpankingImplement();
    }

    sendMessage('Get ready to bust ' + returnYourOrMy() + ' %Balls% %SlaveName%');
    const hits = getVar(VARIABLE.SUB_PAIN_TOLERANCE);
    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Hit them hard ' + hits * multiplier + ' times');
        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 45);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done', 'yes')) {
                sendMessage('%Grin%');

                sendMessage('Hit my %Balls% another ' + hits + ' times %SlaveName%');
                answer = createInput(45);
                while (true) {
                    if (answer.isLike('done', 'ready', 'yes')) {
                        sendMessage('%Good%');
                        completedInTime = true;
                        break;
                    } else if (answer.isTimeout()) {
                        sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                        changeMeritLow(true);
                        sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                        break;
                    } else {
                        sendMessage("Are you trying to write 'done'?", 0);
                        answer.loop();
                    }
                }

                break;
            } else {
                sendMessage("Are you trying to write 'done'?", 0);
                answer.loop();
            }
        }
    }

    return true;
}

function punishRubberbandCBT(bodyPart, multiplier = 1) {
    let doneBefore = false;
    //Didn't do it yet in this section
    if(TEMP_CBT_HISTORY.indexOf(3) === -1 && TEMP_CBT_HISTORY.indexOf(4) === -1) {
        if (!fetchToy('small rubberband')) {
            sendMessage('Well then... I guess we have to take a different approach %EmoteSad%');
            return false;
        }

        if(isChance(33)) {
            sendAlreadyKnowWhatsNext('snap');
        }
    } else {
        doneBefore = true;
        sendMessage('Get your rubberband ready again %SlaveName%');
    }

    let hits = getVar(VARIABLE.SUB_PAIN_TOLERANCE) * multiplier;

    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            //more if it is not the head because the head is the most vulnerable
            hits += getVar(VARIABLE.SUB_PAIN_TOLERANCE);
            sendMessage(random("Hold it close to %MyYour% penis shaft", "You are gonna hold it close to %MyYour% penis shaft"));
            break;
        case BODY_PART_PENIS_HEAD:
            sendMessage(random("Hold it close to the head of %MyYour% %Cock%", "You are gonna hold it close to the head of %MyYour% %Cock%"));
            break;
        case BODY_PART_BALLS:
            //More if it is not the head because the head is the most vulnerable
            hits += getVar(VARIABLE.SUB_PAIN_TOLERANCE);
            sendMessage(random("Hold it close to %MyYour% %Balls%", "You are gonna hold it close to %MyYour% %Balls%"));
            break;
    }

    if(!doneBefore) {
        sendMessage(random("With your other hand ", "Using your other hand "));
        sendMessage(random("Pull back the rubber band as far as you can without breaking it"));
    }


    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            sendMessage(random("Then you are gonna release the rubberband and hit %MyYour% shaft " + hits + " times"));
            break;
        case BODY_PART_PENIS_HEAD:
            sendMessage(random("Then you are gonna release the rubberband and hit %MyYour% cock head " + hits + " times"));
            break;
        case BODY_PART_BALLS:
            sendMessage(random("Then you are gonna release the rubberband and hit %MyYour% balls " + hits + " times"));
            break;
    }

    sendMessage(random("Let me know when you're done", "Inform me when you're done") + " %SlaveName%");
    waitForDone(5 * hits);

    if (askForCBTPain(bodyPart)) {
        sendMessage('%Moan%');
        return true;
    } else {
        sendMessage('I am sure I can do something about that %SlaveName%');
        return false;
    }
}

function punishSqueezeBalls(duration = 10) {
    sendMessage('Grab %MyYour% %Balls% and squeeze them', duration);
    sendMessage('Squeeze them ' + random('as hard as you can', 'so hard that your eyes start to tear') + ' until I tell you to release your grip %SlaveName%', 3 * getVar(VARIABLE.SUB_PAIN_TOLERANCE));
    sendMessage('You can stop squeezing %MyYour% %Balls% now %SlaveName%');

    if (askBallPain()) {
        sendMessage('%Moan%');
        return true;
    } else {
        sendMessage('I am sure I can do something about that %SlaveName%');
        return false;
    }
}

function askForCBTPain(bodyPart) {
    if (bodyPart === BODY_PART_BALLS) {
        return askBallPain;
    }

    return askCockPain();
}

function askCockPain() {
    acheCockCounter++;

    //Skip asking until we skipped at least once and we are hitting this random chance
    if (acheCockCounter < 2 || !isChance(acheCockCounter * 25)) {
        return true;
    }

    acheCockCounter = 0;

    const answer = sendInput(random('Is it ' + random('sore', 'hurting') + ' yet?', 'Does it ' + random('hurt', 'ache', 'burn') + ' yet?'));
    while (true) {

        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    return true;
}

function askBallPain() {
    acheBallCounter++;

    //Skip asking until we skipped at least once and we are hitting this random chance
    if (acheBallCounter < 2 || !isChance(acheBallCounter * 25)) {
        return true;
    }

    acheBallCounter = 0;

    const answer = sendInput(random('Are they ' + random('blue', 'sore', 'purple', 'hurting') + ' yet?', random('Does it ', 'Do they ') + random('hurt', 'ache', 'burn') + ' yet?'));
    while (true) {

        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    return true;
}