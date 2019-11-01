{
    setCurrentSender(SENDER_TAJ);
    setDate(VARIABLE_CURRENT_SESSION_DATE);
    setTempVar(VARIABLE_CURRENT_SESSION_ACTIVE, true);

    sendDebugMessage('Starting session with mood: ' + getMood());

    //Toys
    updateSessionButtplugs();
    updateSessionDildos();

    //TODO: Special day test (birthday etc.)

    const greeting = ["Hello", "Greetings", "Hey", "Hi"];

    const date = new Date();
    if (date.getHours() > 6 && date.getHours() < 12) {
        greeting.push("Good morning");
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        greeting.push("Good afternoon");
    } else if (date.getHours() >= 18 && date.getHours() < 24) {
        greeting.push("Good evening");
    }

    playSound("Audio/Spicy/Starts/Hello/*.mp3");
    let answer = sendInput(greeting[randomInteger(0, greeting.length - 1)] + " %SlaveName%", 20);
    if (answer.isTimeout()) {
        changeMeritHigh(true);
        sendMessage(random("Not feeling like greeting your domme today", "Seems like you are not in the mood to greet me", "Being impolite today", "Being rude today") + " %SlaveName%?");
        sendMessage("I won't tolerate " + random("impolite", "rude", "disrespectful", "ignorant") + " behaviour!")
        //TODO: Punish
    } else if (answer.containsIgnoreCase("Hello", "Greetings", "Hey", "Hi")) {
        changeMeritLow(false);
    }

    if (getVar(VARIABLE_SESSION_COUNTER, 0) == 0) {
        unlockChastityStart();
    } else {
        if (isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed()) {
            sendMessage(random("As you well know", "As you know", "As you should know", "Oh well", "Oh my", "Poor you"));
            lockImages();
            showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
            sendMessage(random("You're under strict lock down", "You're strictly locked", "You're not gonna be released"));
            //, "You are still being punished", "You're serving a punishment" TODO: Punishment flag
            sendMessage(random("Meaning there will be no release from that %ChastityCage%...", "Meaning you won't be released for this session", "So there won't be any release today"));
            unlockImages();
        } else {
            if (getVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0) > getVar(VARIABLE_LOCKED_UP_LIMIT)) {
                unlockChastityStart();
            } else {
                //Unlock
                if (!willKeepChastityOn()) {
                    unlockChastityStart();
                }
                //Denied
                else {
                    if (isInChastity()) {
                        run('Session/Start/Chastity/OffDenied/*.js');
                    } else {
                        //TODO: Intro files
                        lockChastityCage();
                    }
                }
            }
        }
    }

    run("Session/Start/DecideStart.js");

    if (isInChastity()) {
        setVar(VARIABLE_LOCKED_DAYS_IN_ROW, getVar(VARIABLE_LOCKED_DAYS_IN_ROW) + 1);
    } else if (getVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0) > 0) {
        setVar(VARIABLE_LOCKED_DAYS_IN_ROW, 0);
    }

    run("Session/Modules/DecideModule.js");
}

function unlockChastityStart() {
    if (getVar(VARIABLE_HAS_CHASTITY) && getVar(VARIABLE_CHASTITY_ON)) {
        unlockChastityCage();
    }
}

