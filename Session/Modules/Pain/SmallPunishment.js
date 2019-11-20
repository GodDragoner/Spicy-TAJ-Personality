//TODO: If has spoon nearby => use spoon sometimes or other stuff or even make the sub get the spoon
run("Session/Modules/Pain/CockBallTorture.js");


function smallPunishment(cbt = true, spanking = true) {
    //TODO: Anal, corner time, gold subtract, punishment points too in the future at random
    if((isInChastity() || !cbt && spanking) && PAIN_LIMIT.isAllowed()) {
        doSpankingPunishment();
    } else if(CBT_LIMIT.isAllowed()) {
        smallCBTPunishment();
    } else {
        //Fallback
        sendMessage('I am gonna only assign a few punishment points this time %SlaveName%');

        addPunishmentPoints(75);
    }
}


function doSpankingPunishment(multiplier = 1) {
    const implement = fetchSpankingImplement();
    sendMessage('Let\'s get get started %Grin%');
    
    //TODO: SOUND: Voice commands etc.?
    sendMessage('I want you to ' + random('kneel', 'bend over a chair', 'stand') + ' for this');
    sendMessage('Now get ready to spank your ass cheeks on my command %SlaveName%!', 5);

    let countLoud = isChance(30);
    if(countLoud) {
        sendMessage(random('I want you to count out loud!', 'I want you to count along', 'I want you to count with me'));
    }

    let maxLoops = getVar(VARIABLE_SUB_PAIN_TOLERANCE)*3*multiplier;

    while(maxLoops > 0) {
        maxLoops--;

        //TODO: Vary sounds
        playSound("Audio/Spicy/Spanking/cane.mp3");

        if(maxLoops%2 == 0) {
            sendMessage('Left cheek!', 1);
        } else {
            sendMessage('Right cheek!', 1);
        }
    }

    sendMessage('You can stop now %SlaveName%');
    sendMessage('Get back to your chair!');
}


function getEarlyPunishmentExitChance() {
    let earlyExitChance = 60 - getVar(VARIABLE_SUB_PAIN_TOLERANCE)*2 - (feelsLikePunishingSlave()? 30 : 0);
    return earlyExitChance;
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
