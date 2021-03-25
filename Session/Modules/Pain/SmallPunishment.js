//TODO: If has spoon nearby => use spoon sometimes or other stuff or even make the sub get the spoon
run("Session/Modules/Pain/CockBallTorture.js");

const PUNISHMENT_REASON = {
    SKIPPING_PUNISHMENT_DAY: 0,
    SKIPPING_CONFESSION_DAY: 1,
    SKIPPING_SPANKZCHOIR_LATE: 2,
    TOO_MANY_POINTS: 3,
    TOO_SLOW: 4,
    TOO_LAZY: 5,
    NO_PERM_RUINED: 6,
    NO_PERM_CUM: 7,
    NO_PERM_FAP: 8,
    NO_PERM_EDGE: 9,
    RULE_IGNORED: 10,
    BRAT: 11,
    TALKING: 12,
    MISSED_CHORES: 13,
    BAD_EXERCISE_EFFORT: 14,
    POOR_BEHAVIOUR: 15,
    BREAKING_CHASTITY: 16,
    CHEATING: 17,
    SKIPPING_FULLTIME: 19,
};

function smallPunishment(cbt = true, spanking = true) {
    //TODO: Anal, corner time, gold subtract, punishment points too in the future at random
    if ((isInChastity() || !cbt && spanking) && PAIN_LIMIT.isAllowed()) {
        doSpankingPunishment();
    } else if (CBT_LIMIT.isAllowed()) {
        smallCBTPunishment();
    } else {
        goToCorner(getCornerTime(2));

        //Fallback
        //sendMessage('I am gonna only assign a few punishment points this time %SlaveName%');

        //addPunishmentPoints(75);
    }
}

function doRubberbandPunishment(multiplier = 1) {
    if (fetchToy('large rubberband', undefined, 4)) {
        sendMessage('Now...');
        sendMessage('Put one around each butt cheek');
        sendMessage('Additionally one around your left and one around right thigh');

        sendMessage('Tell me when you are done');
        waitForDone();

        sendMessage("You will be given 4 different commands"); //#DT4
        sendMessage("Left thigh"); //#DT4
        sendMessage("Right thigh"); //#DT4
        sendMessage("Whenever you are given a thigh related command I want you pull the rubber band far back"); //#DT4
        sendMessage("You have to be worried that it might snap"); //#DT4
        sendMessage("If you aren't you haven't pulled it far enough back..."); //#DT4
        sendMessage("Aim for your inner thigh and let it go"); //#DT4
        sendMessage("The last 2 commands are"); //#DT4
        sendMessage("Left butt cheek"); //#DT4
        sendMessage("Right butt cheek"); //#DT4
        sendMessage("Again as far back as it goes"); //#DT4
        sendMessage("You may aim wherever you choose as long as you're aiming for a part of the butt cheek"); //#DT4

        sendMessage('Let\'s get started %Grin%', 3);

        let strikes = randomInteger(20, 40) * multiplier;

        while (strikes > 0) {
            strikes--;

            if ((strikes % 50 == 0)) {
                sendMessage(strikes + " strikes remaining...");
            }

            sendMessage(random("Left thigh...", "Right thigh...", "Left Cheek...", "Right Cheek..."), randomInteger(1, 2));
            sendMessage("Pull back!", randomInteger(1, 3)); //#DT4

            switch (randomInteger(1, 4)) {
                case 1:
                    sendMessage("You can pull it further back than that %SlaveName%", 2); //#DT4
                    break;
                case 2:
                    sendMessage("%SlaveName%, you deserve this ", 2); //#DT4
                    break;
                case 3:
                    sendMessage("Suffer %SlaveName% ", 2); //#DT4
                    break;
                case 4:
                    sendMessage("A little further %SlaveName%...", 2); //#DT4
                    break;
            }

            playAudio("Audio/Spicy/Spanking/cane.mp3");
        }

        sendMessage('You can stop now %SlaveName%');
        sendMessage('Remove the rubber bands and tell me when you are done');
        waitForDone();
    } else {
        return false;
    }


}

function doSpankingPunishment(multiplier = 1) {
    const implement = fetchSpankingImplement();

    if (isHandPalm(implement)) {
        sendMessage('You are just gonna use your ' + implement + ' for this spanking');
    }

    sendMessage('Let\'s get started %Grin%');

    //TODO: SOUND: Voice commands etc.?
    sendMessage('I want you to ' + random('kneel', 'bend over a chair', 'stand') + ' for this');
    sendMessage('Now get ready to spank your ass cheeks on my command %SlaveName%!', 5);

    let countLoud = isChance(30);
    if (countLoud) {
        sendMessage(random('I want you to count out loud!', 'I want you to count along', 'I want you to count with me'));
    }

    let maxLoops = Math.max(10, Math.min(100, getVar(VARIABLE.SUB_PAIN_TOLERANCE) * multiplier * 3));

    while (maxLoops > 0) {
        maxLoops--;

        //TODO: Vary sounds
        playSound("Audio/Spicy/Spanking/cane.mp3");

        if (maxLoops % 2 == 0) {
            sendMessage('Left cheek!', 1);
        } else {
            sendMessage('Right cheek!', 1);
        }
    }

    sendMessage('You can stop now %SlaveName%');
    sendMessage('Get back to your chair!');
}


function getEarlyPunishmentExitChance() {
    let earlyExitChance = 60 - getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 2 - (feelsLikePunishingSlave() ? 30 : 0);
    return earlyExitChance;
}

function waitForBack(timeout = 100) {
    const answer = createInput(timeout);
    while (true) {
        if (answer.isTimeout()) {
            //TODO: Better timeout options?
            break;
        } else if (answer.isLike('back', 'here', 'return')) {
            break;
        } else {
            sendMessage(random('Are you back?', 'If you aren\'t back yet don\'t bother me.'), 0);
            answer.loop();
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
            sendMessage(random('Are you done?', 'If you aren\'t done yet don\'t bother me.'), 0);
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
            sendVirtualAssistantMessage('Are you done?', 0);
            answer.loop();
        }
    }
}
