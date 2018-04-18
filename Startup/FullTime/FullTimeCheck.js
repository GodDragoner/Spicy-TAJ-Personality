{
    if (isVar(VARIABLE_LAST_ROUTINE_CHECK) && getDate(VARIABLE_LAST_ROUTINE_CHECK).hasPassed()) {
        setVar(VARIABLE_WEEKLY_SLAVE_VISITS, getVar(VARIABLE_WEEKLY_SLAVE_VISITS) + 1);

        if (isVar(VARIABLE_SLAVE_LEAVE_UNTIL)) {
            if (getDate(VARIABLE_SLAVE_LEAVE_UNTIL).hasPassed()) {
                slaveIsBack(true, false);
            } else {
                slaveIsBack(false, false);
            }

            delVar(VARIABLE_SLAVE_LEAVE_UNTIL);
        } else if (isVar(VARIABLE_SLAVE_VACATION_UNTIL)) {
            if (getDate(VARIABLE_SLAVE_VACATION_UNTIL).hasPassed()) {
                slaveIsBack(true, true);
            } else {
                slaveIsBack(false, true);
            }

            delVar(VARIABLE_SLAVE_VACATION_UNTIL);
        }

        const date = new Date();

        //Tuesday
        if (date.getDay() == 2) {
            run("Startup/FullTime/ConfessionDay.js");
        }
        //Thursday
        else if (date.getDay() == 4) {
            run("Startup/FullTime/PunishmentDay.js");
        }

        //Week check only start on mondays
        if (isVar(VARIABLE_NEXT_WEEK_CHECK) || new Date().getDay() == 1) {
            //Only check the week if this isn't the first time
            doWeekCheck = false;
            if (isVar(VARIABLE_NEXT_WEEK_CHECK)) {
                if (getDate(VARIABLE_NEXT_WEEK_CHECK).hasPassed()) {
                    doWeekCheck = true;
                }
            } else {
                setDate(VARIABLE_NEXT_WEEK_CHECK, setDate().addDay(7).setHour(0).setSecond(0).setMinute(0));
            }

            if (doWeekCheck) {
                if (getVar(VARIABLE_WEEKLY_SLAVE_VISITS) < getVar(VARIABLE_MIN_WEEKLY_VISITS)) {
                    sendVirtualAssistantMessage(random("You have been skipping days", "You have been skulking", "I think you missed a few sessions") + " %SlaveName%");
                    sendVirtualAssistantMessage(random("I don't accept that!", "Which is not accepted", "Which isn't tolerated"));
                    sendVirtualAssistantMessage(random("You are the property of", "You belong to", "You are owned by") + " Mistress %domName%");
                    sendVirtualAssistantMessage(random("And are thus expected to serve!", "So you have to serve", "So she demands that you serve her"));
                    sendVirtualAssistantMessage(random("I'm giving you punishment points", "I'm assigning you punishment point", "I have to give you punishment points"));
                    addPunishmentPoints(200);
                }

                setVar(VARIABLE_WEEKLY_SLAVE_VISITS, 0);
                sendVirtualAssistantMessage("Let's see if you've been doing your chores like a good slave!");

                if (getVar(VARIABLE_WEEKLY_CHORES_COMPLETED) < getVar(VARIABLE_MIN_WEEKLY_CHORES)) {
                    sendVirtualAssistantMessage("Bad boy!", "Bad girl!", "Bad slut!", "Bad dog!", "Bad slave!", "Bad sissy!");
                    sendVirtualAssistantMessage("Bad behaviour is punished!");
                    sendVirtualAssistantMessage("I just assigned you punishment points!");
                    sendVirtualAssistantMessage("Do your chores!");
                    addPunishmentPoints(200);
                } else {
                    sendVirtualAssistantMessage("Good boy!", "You have!", "Good little slut", "Good girl", "Good sissy", "Good slave");
                    sendVirtualAssistantMessage("Good behaviour is rewarded!");
                    sendVirtualAssistantMessage("Transferring gold...");
                    addGold(randomInteger(50, 200));
                }

                //TODO: Study and athlete mode
            }
        }

        if (isVar(VARIABLE_FULL_TIME_TRIAL_UNTIL) && getDate(VARIABLE_FULL_TIME_TRIAL_UNTIL).hasPassed()) {
            delVar(VARIABLE_FULL_TIME_TRIAL_UNTIL);
            sendVirtualAssistantMessage("Slave");
            sendVirtualAssistantMessage("Your trial period has expired");
            sendVirtualAssistantMessage("Meaning you now have a choice");
            sendVirtualAssistantMessage("Stay full time or go back to part time");
            sendVirtualAssistantMessage("Which is it?", false);
            const answer = createInput();

            while (true) {
                if (answer.containsIgnoreCase("part")) {
                    sendVirtualAssistantMessage("Back to part time then...");
                    setPartTime();
                    break;
                } else if (answer.containsIgnoreCase("full")) {
                    sendVirtualAssistantMessage("Excellent choice!");
                    break;
                } else {
                    sendVirtualAssistantMessage("Part time or full time?");
                    answer.loop();
                }
            }
        }
    }
}

function slaveIsBack(tooLate, vacation) {
    if(tooLate) {
        sendVirtualAssistantMessage(random("You're late!", "You're late %SlaveName","You haven't returned in due time", "I expected you sooner!"));
        sendVirtualAssistantMessage(random("I don't allow for you to be gone longer than permitted!", "You aren't allowed to be gone without proper agreement", "You know the rules!"));
        sendVirtualAssistantMessage(random("I'm giving you punishment points", "I'm assigning you punishment points", "I have to give you punishment points"));
        setVar(VARIABLE_PUNISHMENT_POINTS, getVar(VARIABLE_PUNISHMENT_POINTS) + 150);
    } else {
        if(vacation) {
            sendVirtualAssistantMessage(random("You're back!", "Welcome back", "Welcome back %SlaveName%"));
            sendVirtualAssistantMessage(random("Good to see you again", "It's great to see you again", "I'm happy to see you back"));
        } else {
            sendVirtualAssistantMessage(random("You're back from your vacation", "You're back from your holiday", "You're back!"));
            sendVirtualAssistantMessage(random("I hope you enjoyed it because it's right back to service now!", "I thoroughly hope you enjoyed it and are ready to return to service"));
        }
    }
}