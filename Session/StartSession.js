{
    setCurrentSender(SENDER_TAJ);
    setDate(VARIABLE_CURRENT_SESSION_DATE);
    setTempVar(VARIABLE_CURRENT_SESSION_ACTIVE, true);

    sendDebugMessage('Starting session with mood: ' + getMood());

    //Toys
    updateSessionButtplugs();
    updateSessionDildos();

    //TODO: Special day test (birthday etc.)

    if (!sendGreeting()) {
        //TODO: Punish
    }

    if (isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed()) {
        sendMessage(random("As you well know", "As you know", "As you should know", "Oh well", "Oh my", "Poor you"));
        lockImages();
        showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
        sendMessage(random("You're under strict lock down", "You're strictly locked", "You're not gonna be released"));
        //, "You are still being punished", "You're serving a punishment" TODO: Punishment flag
        sendMessage(random("Meaning there will be no release from that %ChastityCage%...", "Meaning you won't be released for this session", "So there won't be any release today"));
        unlockImages();
    } else {
        //Force unlock
        if (getVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0) > getVar(VARIABLE_LOCKED_UP_LIMIT)) {
            sendDebugMessage('Forced to unlock because locked in a row is higher than locked up limit');
            unlockChastityStart();
        } else {
            //Unlock
            if (!willKeepChastityOn()) {
                sendDebugMessage('Decided to unlock chastity');
                unlockChastityStart();
            }
            //Denied
            else {
                sendDebugMessage('Decided to NOT unlock chastity');
                if (isInChastity()) {
                    run('Session/Start/Chastity/OffDenied/*.js');
                } else {
                    //TODO: Intro files
                    lockChastityCage();
                }
            }
        }
    }


    run("Session/Start/DecideStart.js");

    if (isInChastity()) {
        sendDebugMessage('Stayed in chastity so incrementing locked in a row');
        incrementVar(VARIABLE_LOCKED_DAYS_IN_ROW, 1, 0);
    } else if (getVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0) > 0) {
        sendDebugMessage('Resetting locked days in a row');
        setVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0);
    }

    run("Session/Modules/DecideModule.js");
}

function unlockChastityStart() {
    if (getVar(VARIABLE_HAS_CHASTITY) && getVar(VARIABLE_CHASTITY_ON)) {
        unlockChastityCage();
    }
}

