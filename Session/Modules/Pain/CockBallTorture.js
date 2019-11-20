function decideCBTPunishment(bodyParts, lastInteger = -1) {
    while (true) {
        let newTask = randomInteger(0, 5);

        //Do not repeat same task twice in a row
        if (newTask === lastInteger) {
            continue;
        } else {
            lastInteger = newTask;
        }

        switch (newTask) {
            case 0:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return lastInteger;
            case 1:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return lastInteger;
            case 2:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                break;
            case 3:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return lastInteger;
            case 6:
                if (!bodyParts.contains(BODY_PART_BALLS)) {
                    continue;
                }

                return lastInteger;
            //Penis part
            case 4:
                if (!bodyParts.contains(BODY_PART_PENIS_SHAFT) && !bodyParts.contains(BODY_PART_PENIS_HEAD)) {
                    continue;
                }

                return lastInteger;
            case 5:
                if (!bodyParts.contains(BODY_PART_PENIS_SHAFT) && !bodyParts.contains(BODY_PART_PENIS_HEAD)) {
                    continue;
                }

                return lastInteger;
            default:
                sendDebugMessage('Unknown cbt task id ' + newTask);
                return 0;
        }
    }

    return lastInteger;
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
            completed = punishBookCBT();
            break;
        //Penis part
        case 4:
            completed = punishRubberbandCBT(random(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD));
            break;
        case 5:
            completed = punishFlickCBT(random(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD));
            break;
    }

    //Did we complete it / does it hurt yet?
    return completed;
}

//TODO: Currently used for many things. Should instead be smallPunishment and then a only pain flag
function smallCBTPunishment(balls = true, penis = true) {
    let lastInteger = -1;
    let completed = false;
    let extraRuns = 0;

    let bodyParts = new java.util.ArrayList();

    if(balls) {
        bodyParts.add(BODY_PART_BALLS);
    }

    if(penis) {
        bodyParts.add(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_HEAD);
    }

    while (!completed) {
        lastInteger = decideCBTPunishment(bodyParts, lastInteger);

        //Not completed or not hurting enough?
        completed = executeCBTPunishment(bodyParts, lastInteger);

        //More punishment if feels like punishing more
        if (completed && feelsLikePunishingSlave() && extraRuns < 2) {
            completed = false;
            extraRuns++;
        }
    }

    punishSmallBustBallsMultiple();
}


//Personality strictness should not influence pain!

function punishSmallBustBallsMultiple(maxLoops = getVar(VARIABLE_SUB_PAIN_TOLERANCE), earlyExitChance = getEarlyPunishmentExitChance()) {
    //TODO: Count out loud?
    while (maxLoops > 0) {
        maxLoops--;

        switch (randomInteger(0, 9)) {
            case 0:
                sendMessage('Let\'s give those %Balls% another ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' smacks %EmoteHappy%');
                waitForDone();
                break;
            case 1:
                sendMessage('I want ' + returnYourOrMy() + '%Balls% to really hurt. Give them another hard slap');
                waitForDone();
                break;
            case 2:
                sendMessage('Punch your %Balls% ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' times for me');
                waitForDone();
                break;
            case 3:
                sendMessage('Now smack those %Balls% ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) + ' times as hard as you can');
                waitForDone();
                break;
            case 4:
                sendMessage('Now flick each testicle ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * +' times');
                waitForDone();
                break;
            case 5:
                sendMessage('Now ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more smacks to each ball');
                waitForDone();
                break;
            case 6:
                sendMessage('Give me ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more slaps');
                waitForDone();
                break;
            case 7:
                sendMessage(getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits'));
                waitForDone();
                break;
            case 8:
                sendMessage('I want ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits'));
                waitForDone();
                break;
            case 9:
                //TODO: Punches with fist and slaps with open hand
                sendMessage('I want you to add ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' more ' + random('smacks', 'slaps', 'hits') + ' to each ball');
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

    sendMessage(random("This is fairly simple", "This is gonna be quite simple", "You shouldn\'t find this too difficult"));
    let falls = getVar(VARIABLE_SUB_PAIN_TOLERANCE)*multiplier + 7;
    sendMessage(random("I want you to place the book on a table ", "You should place the book on a table ") );
    sendMessage(random("It has to stand up ", "It should be standing up ") );
    sendMessage(random("Then I want you to tilt the book and aim for your %Balls%", "Then you\'re going to aim for your %Balls% and tilt the book") + " %Moan%");
    sendMessage(random("To be precise I want you to hit your precious %Balls%", "You\'re gonna hit your %Balls%"));
    sendMessage(falls + " times");

    sendMessage(random("Let me know when you\'re done", "Inform me when you\'re done") + " %SlaveName%");
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
                sendMessage('Flick it ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 * multiplier + ' times');
                break;
            case BODY_PART_PENIS_HEAD:
                sendMessage('Flick it ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * multiplier + ' times');
                break;
            case BODY_PART_BALLS:
                sendMessage('Flick each side ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 * multiplier + ' times');
                break;
        }

        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 60);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done', 'yes')) {
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
                sendMessage("Are you trying to write 'done'?");
                answer.loop();
            }
        }
    }
}

function punishBustBalls(hand = true, multiplier = 1) {
    let implement = 'hand';

    if(!hand) {
        implement = fetchSpankingImplement();
    }

    sendMessage('Get ready to bust ' + returnYourOrMy()+ ' %Balls% %SlaveName%');
    const hits = getVar(VARIABLE_SUB_PAIN_TOLERANCE);
    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Hit them hard ' + hits*multiplier + ' times');
        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 45);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done')) {
                sendMessage('%Grin%');

                sendMessage('Hit my %Balls% another ' + hits + ' times %SlaveName%');
                answer = createInput(45);
                while (true) {
                    if (answer.isLike('done', 'yes')) {
                        sendMessage('%Good%');
                        completedInTime = true;
                        break;
                    } else if (answer.isTimeout()) {
                        sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                        changeMeritLow(true);
                        sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                        break;
                    } else {
                        sendMessage("Are you trying to write 'done'?");
                        answer.loop();
                    }
                }

                break;
            } else {
                sendMessage("Are you trying to write 'done'?");
                answer.loop();
            }
        }
    }

    return true;
}

function punishRubberbandCBT(bodyPart, multiplier = 1) {
    if (!fetchToy('small rubberband')) {
        sendMessage('Well then... I guess we have to take a different approach %EmoteSad%');
        return false;
    }

    sendMessage(random("This is fairly simple", "This is gonna be quite simple", "You shouldn\'t find this too difficult"));

    let hits = VARIABLE_SUB_PAIN_TOLERANCE * multiplier;

    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            //more if it is not the head because the head is the most vulnerable
            hits += VARIABLE_SUB_PAIN_TOLERANCE;
            sendMessage(random("Hold it close to your penis shaft", "You are gonna hold it close to your penis shaft"));
            break;
        case BODY_PART_PENIS_HEAD:
            sendMessage(random("Hold it close to the head of your %Cock%", "You are gonna hold it close to the head of your %Cock%"));
            break;
        case BODY_PART_BALLS:
            //More if it is not the head because the head is the most vulnerable
            hits += VARIABLE_SUB_PAIN_TOLERANCE;
            sendMessage(random("Hold it close to your %Balls%", "You are gonna hold it close to your %Balls%"));
            break;
    }

    sendMessage(random("With your other hand ", "Using your other hand "));
    sendMessage(random("Pull back the rubber band as far as you can without breaking it"));

    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            sendMessage(random("Then you are gonna release the rubberband and hit your shaft " + hits + " times"));
            break;
        case BODY_PART_PENIS_HEAD:
            sendMessage(random("Then you are gonna release the rubberband and hit your cock head " + hits + " times"));
            break;
        case BODY_PART_BALLS:
            sendMessage(random("Then you are gonna release the rubberband and hit your balls " + hits + " times"));
            break;
    }

    sendMessage(random("Let me know when you\'re done", "Inform me when you\'re done") + " %SlaveName%");
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
    sendMessage('Grab my %Balls% and squeeze them', duration);
    sendMessage('Squeeze them ' + random('as hard as you can', 'so hard that your eyes start to tear') + ' until I tell you to release your grip %SlaveName%', 3 * getVar(VARIABLE_SUB_PAIN_TOLERANCE));
    sendMessage('You can stop squeezing my %Balls% now %SlaveName%');

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
    const answer = sendInput(random('Is it ' + random('sore', 'hurting') + ' yet?', 'Does it ' + random('hurt', 'ache', 'burn') + ' yet?'));
    while (true) {

        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    return true;
}

function askBallPain() {
    const answer = sendInput(random('Are they ' + random('blue', 'sore', 'purple', 'hurting') + ' yet?', random('Does it ', 'Do they ') + random('hurt', 'ache', 'burn') + ' yet?'));
    while (true) {

        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    return true;
}