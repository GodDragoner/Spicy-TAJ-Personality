{
    setCurrentSender(SENDER_TAJ);
    setDate(VARIABLE.CURRENT_SESSION_DATE);
    setTempVar(VARIABLE.CURRENT_SESSION_ACTIVE, true);

    sendDebugMessage('Starting session with mood: ' + getMood());

    //Toys
    updateSessionButtplugs();
    updateSessionDildos();

    //TODO: Special day test (birthday etc.)

    if (!sendGreeting()) {

    }

    //End locktober
    if(getVar(VARIABLE.LOCKTOBER_SESSION_COUNT, 0) > 0 && !RULE_LOCKTOBER.isEffectivelyActive()) {
        if(RULE_LOCKTOBER.isActive()) {
            RULE_LOCKTOBER.setActive(false);
        }

        setVar(VARIABLE.ACTIVE_END_GAME_ID, getVar(VARIABLE.PREVIOUS_END_GAME_ID, 0));
        setVar(VARIABLE.LOCKTOBER_SESSION_COUNT, 0);
        //TODO: Locktober has ended script
    }


    //Locktober
    if(RULE_LOCKTOBER.isEffectivelyActive()) {
        //First session
        if(getVar(VARIABLE.LOCKTOBER_SESSION_COUNT, 0) === 0) {
            sendMessage('Welcome to locktober %SlaveNameSmiley%');

            sendMessage('From today onward you will not be unlocked for a whole month');
            sendMessage('%Grin%');
            sendMessage('But what am I telling you that');
            sendMessage('You probably still remember the drill %Lol%');
        }

        //Save previous end game
        setVar(VARIABLE.PREVIOUS_END_GAME_ID, getVar(VARIABLE.ACTIVE_END_GAME_ID, END_GAME_STANDARD_ID));
        setVar(VARIABLE.ACTIVE_END_GAME_ID, END_GAME_LOCKTOBER);

        if(!isInChastity()) {
            sendMessage('Well, you aren\'t in chastity right now so we definitely gotta change this asap %Grin%');
            lockChastityCage();
        }

        if (isChastityPunishmentAttached() && isInChastity()) {
            sendDebugMessage('Unlocking to remove spikes/dialator');
            sendMessage('You\'ll stay in chastity, but let\'s get rid of those nasty punishment attachments');
            unlockChastityStart();

            lockChastityCage();

            //Check if we attached new punishments again
            if(!isChastityPunishmentAttached()) {
                sendArentINice();
            } else {
                sendMessage('Just kidding. You know you deserve to still be punished %SlaveName%');
            }
        }

        incrementVar(VARIABLE.LOCKTOBER_SESSION_COUNT, 1, 0);
    }
    //Force unlock
    else if (isInChastity() && getVar(VARIABLE.LOCKED_DAYS_IN_ROW, 0) > getVar(VARIABLE.LOCKED_UP_LIMIT, 3)) {
        sendDebugMessage('Forced to unlock because locked in a row is higher than locked up limit');
        unlockChastityStart();
    } else if (isVar(VARIABLE.LOCKED_UP_UNTIL) && !getDate(VARIABLE.LOCKED_UP_UNTIL).hasPassed()) {
        sendMessage(random("As you well know", "As you know", "As you should know", "Oh well", "Oh my", "Poor you"));
        lockImages();
        showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
        sendMessage(random("You're under strict lock down", "You're strictly locked", "You're not gonna be released"));
        //, "You are still being punished", "You're serving a punishment" TODO: Punishment flag
        sendMessage(random("Meaning there will be no release from that %ChastityCage%...", "Meaning you won't be released for this session", "So there won't be any release today"));
        unlockImages();
    } else if (hasChastityCage()) {
        sendDebugMessage('Lock days in a row is ' + getVar(VARIABLE.LOCKED_DAYS_IN_ROW, 0) + ' and limit is ' + getVar(VARIABLE.LOCKED_UP_LIMIT, 3));

        //Force unlock
        if (getVar(VARIABLE.LOCKED_DAYS_IN_ROW, 0) > getVar(VARIABLE.LOCKED_UP_LIMIT, 3) && isInChastity()) {
            sendDebugMessage('Forced to unlock because locked in a row is higher than locked up limit');
            unlockChastityStart();
        } else {
            //Unlock
            if (!willKeepChastityOn()) {
                if (isInChastity()) {
                    sendDebugMessage('Decided to unlock chastity today');

                    if (isChance(35)) {
                        sendDebugMessage('But not now (later)');
                        setTempVar(VARIABLE.CHASTITY_REMOVE_LATER, true);

                        run('Session/Start/Chastity/OffDenied/*.js');
                    } else {
                        unlockChastityStart();
                    }
                }
            }
            //Denied
            else {
                if (isInChastity()) {
                    sendDebugMessage('Decided to NOT unlock chastity');
                    if (feelsEvil()) {
                        sendDebugMessage('Faking unlock chastity');
                        unlockChastityCage(true);
                        sendMessage('I was just playing with you %Wicked%');
                        sendMessage(random('No way for me to unlock that %Cock% right now', 'I will not unlock that %Cock% right now', 'The cage stays on'));
                        sendMessage(random('And you\'ll have to deal with that', 'You were so close and yet so far %Lol%', 'So close and yet so far %Lol%',
                            'You weren\'t going to be unlocked in any world right now', 'And there was no way to change that'));

                        sendMessage('Tell me when you are ready to continue');
                        waitForDone();
                    } else {
                        run('Session/Start/Chastity/OffDenied/*.js');
                    }
                } else {
                    sendDebugMessage('Decided to lock chastity at start');
                    //TODO: Intro files
                    lockChastityCage();
                }
            }
        }
    }


    run("Session/Start/DecideStart.js");

    if (isInChastity() && !getVar(VARIABLE.CHASTITY_REMOVE_LATER, false)) {
        sendDebugMessage('Stayed in chastity so incrementing locked in a row');
        incrementVar(VARIABLE.LOCKED_DAYS_IN_ROW, 1, 0);
    } else if (getVar(VARIABLE.LOCKED_DAYS_IN_ROW, 0) > 0) {
        sendDebugMessage('Resetting locked days in a row');
        setVar(VARIABLE.LOCKED_DAYS_IN_ROW, 0);
    }

    run("Session/Modules/DecideModule.js");
}

function unlockChastityStart() {
    if (getVar(VARIABLE.HAS_CHASTITY) && getVar(VARIABLE.CHASTITY_ON)) {
        unlockChastityCage();
    }
}

