//TODO: If has spoon nearby => use spoon sometimes or other stuff or even make the sub get the spoon

function smallPunishment(cbt = true, spanking = true) {
    //TODO: Anal, corner time too in the future at random
    if(isInChastity() || !cbt && spanking) {
        smallSpankingPunishment();
    } else {
        smallCBTPunishment();
    }
}


function smallSpankingPunishment() {
    const implement = fetchSpankingImplement();
    sendMessage('Let\'s get get started %Grin%');
    
    //TODO: Voice commands etc.?
    sendMessage('I want you to ' + random('kneel', 'bend over a chair', 'stand') + ' for this');
    sendMessage('Now get ready to spank your ass cheeks on my command %SlaveName%!', 5);

    let countLoud = isChance(30);
    if(countLoud) {
        sendMessage(random('I want you to count out loud!', 'I want you to count along', 'I want you to count with me'));
    }

    //TODO: Sounds
    let maxLoops = getVar(VARIABLE_SUB_PAIN_TOLERANCE)*3;

    while(maxLoops > 0) {
        maxLoops--;

        if(maxLoops%2 == 0) {
            sendMessage('Left cheek!', 1);
        } else {
            sendMessage('Right cheek!', 1);
        }
    }

    sendMessage('You can stop now %SlaveName%');
    sendMessage('Get back to your chair!');
}

function smallCBTPunishment(balls = true, penis = true) {
    switch (randomInteger(0, 2)) {
        case 0:
            punishSmallSqueezeBalls();
            break;
        case 1:
            punishSmallBustBalls();
            break;
        case 2:
            punishSmallFlickBalls();
            break;
    }

    punishSmallBustBallsMultiple();
}


//Personality strictness should not influence pain!

function punishSmallBustBallsMultiple(maxLoops = getVar(VARIABLE_SUB_PAIN_TOLERANCE), earlyExitChance = 60 - getVar(VARIABLE_SUB_PAIN_TOLERANCE)*2) {
    //TODO: Count out loud?
    while(maxLoops > 0) {
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

        if(isChance(getEarlyPunishmentExitChance())) {
            break;
        }
    }
}

function getEarlyPunishmentExitChance() {
    let earlyExitChance = 60 - getVar(VARIABLE_SUB_PAIN_TOLERANCE)*2 - (feelsLikePunishingSlave()? 30 : 0);
    return earlyExitChance;
}

function punishSmallSqueezeBalls() {
    sendMessage('Grab my %Balls% and squeeze them', 10);
    sendMessage('Squeeze them ' + random('as hard as you can', 'so hard that your eyes start to tear') + ' until I tell you to release your grip %SlaveName%', 3*getVar(VARIABLE_SUB_PAIN_TOLERANCE));
    sendMessage('You can stop squeezing my %Balls% now %SlaveName%');

    if (askBallPain()) {
        sendMessage('%Moan%');
    } else {
        sendMessage('I am sure I can do something about that %SlaveName%');

        if (randomInteger(0, 1) == 0) {
            punishSmallFlickBalls();
        } else {
            punishSmallBustBalls();
        }
    }
}

function punishSmallFlickBalls() {
    sendMessage('I want you to flick my balls %SlaveName%');

    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Flick each side ' + getVar(VARIABLE_SUB_PAIN_TOLERANCE) * 2 + ' times');
        let answer = sendInput(random('Let me know when you\'re done', 'Inform me when you\'re done') + ' %SlaveName%', 60);
        while (true) {
            if (answer.isTimeout()) {
                sendMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                changeMeritLow(true);
                sendMessage(random('I guess we have to try this again', 'Let\'s try this again shall we?'));
                break;
            } else if (answer.isLike('done', 'yes')) {
                sendMessage('%Grin%');

                if (askBallPain()) {
                    sendMessage('%Moan%');
                } else {
                    sendMessage('I am sure I can do something about that %SlaveName%');

                    if (randomInteger(0, 1) == 0) {
                        punishSmallSqueezeBalls();
                    } else {
                        punishSmallBustBalls();
                    }
                }

                completedInTime = true;
                break;
            } else {
                sendMessage("Are you trying to write 'done'?");
                answer.loop();
            }
        }
    }
}

function punishSmallBustBalls() {
    sendMessage('Get ready to bust my %Balls% %SlaveName%');
    const hits = getVar(VARIABLE_SUB_PAIN_TOLERANCE);
    let completedInTime = false;
    while (!completedInTime) {
        sendMessage('Hit them hard ' + hits + ' times');
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
}

function waitForDone(timeout = 100) {
    const answer = createInput(timeout);
    while (true) {
        if (answer.isTimeout()) {
            //TODO: Better timeout options?
            break;
        } else if (answer.isLike('done', 'ready', 'yes')) {
            break;
        } else {
            sendMessage('Are you done?');
            answer.loop();
        }
    }
}

function waitForDoneVirtualAssistant(timeout = 100) {
    const answer = createInput(timeout);
    while (true) {
        if (answer.isTimeout()) {
            //TODO: Better timeout options?
            break;
        } else if (answer.isLike('done', 'ready', 'yes')) {
            break;
        } else {
            sendVirtualAssistantMessage('Are you done?');
            answer.loop();
        }
    }
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