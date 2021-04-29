{
    if (!isVar(VARIABLE.NEXT_CONFESSION_DAY)) {
        sendVirtualAssistantMessage("Today is Tuesday");
        sendVirtualAssistantMessage("Tuesdays are special");
        sendVirtualAssistantMessage("Tuesdays are confession days");
        sendVirtualAssistantMessage("Since you're full time it is required that you at least launch Tease-AI for a weekly confession on Tuesdays");
        sendVirtualAssistantMessage("I don't wanna hear anything about not having anything to confess either");
        sendVirtualAssistantMessage("I simply don't believe that you lead the perfect \"slave\" life without an actual domme...");
        sendVirtualAssistantMessage("So choose whatever you believe to be most severe");
        sendVirtualAssistantMessage("Whether that is cumming without permission");
        sendVirtualAssistantMessage("Or some other violation of the rules");
    } else {
        sendVirtualAssistantMessage("Today is Tuesday");
        sendVirtualAssistantMessage("Which means it's confession day");
    }

    //Only continue if we haven't check this today
    if (!isVar(VARIABLE.NEXT_CONFESSION_DAY) || getDate(VARIABLE.NEXT_CONFESSION_DAY).hasPassed()) {
        if(!hasBeenAwayInThePastWeek()) {
            if (isVar(VARIABLE.NEXT_CONFESSION_DAY) && !getDate(VARIABLE.NEXT_CONFESSION_DAY).sameDay(setDate())) {
                sendVirtualAssistantMessage("You've been skipping confession day %SlaveName%!");
                sendVirtualAssistantMessage("I've added a healthy dose of punishment points for that!");
                addPunishmentPoints(300, PUNISHMENT_REASON.SKIPPING_CONFESSION_DAY);
                sendVirtualAssistantMessage("You are expected to report on Tuesdays!");
            }
        }

        //Set the date to the next tuesday
        setDate(VARIABLE.NEXT_CONFESSION_DAY, setDate(VARIABLE.NEXT_CONFESSION_DAY).addDay(7).setHour(0).setMinute(0).setSecond(0));

        sendVirtualAssistantMessage("Now slave tell me...");
        sendVirtualAssistantMessage("Confess!", false);
        while (true) {
            let answer = createInput();

            let nothing = false;

            //We don't want to increase the multiplier here because this would increase it every thursday, which is stupid
            if (answer.containsIgnoreCase("came", "orgasm", "cum", "cumming")) {
                sendVirtualAssistantMessage("Cumming without permission...");
                addPunishmentPointsDirectly(400, 1, PUNISHMENT_REASON.NO_PERM_CUM);
            } else if (answer.containsIgnoreCase("ruin", "ruined")) {
                sendVirtualAssistantMessage("Ruining without permission...");
                addPunishmentPointsDirectly(250, 1, PUNISHMENT_REASON.NO_PERM_RUINED);
            } else if (answer.containsIgnoreCase("stroke", "stroking", "touched", "pleasured")) {
                sendVirtualAssistantMessage("Stroking without permission...");
                addPunishmentPointsDirectly(200, 1, PUNISHMENT_REASON.NO_PERM_FAP);
            } else if (answer.containsIgnoreCase("lazy", "sloppy")) {
                sendVirtualAssistantMessage("Lazy behaviour...");
                addPunishmentPointsDirectly(150, 1, PUNISHMENT_REASON.TOO_LAZY);
            } else if (answer.containsIgnoreCase("unhealthy")) {
                sendVirtualAssistantMessage("Eating unhealthy...");
                addPunishmentPointsDirectly(150, 1);
            } else if(answer.isLike('nothing')) {
                sendVirtualAssistantMessage('There is always something to confess %SlaveName%');
                nothing = true;
            } else {
                sendVirtualAssistantMessage("This isn't good slave!");
                addPunishmentPointsDirectly(150, 1);
            }

            if(nothing) {
                answer.loop();
            } else {
                sendVirtualAssistantMessage("Anything else?", false);

                let more = false;
                answer = createInput();

                while (true) {
                    if (answer.isLike("yes")) {
                        sendVirtualAssistantMessage("Tell me %SlaveName%!");
                        more = true;
                        break;
                    } else if (answer.isLike("no")) {
                        sendVirtualAssistantMessage("Good %SlaveName%!");
                        break;
                    } else {
                        sendVirtualAssistantMessage(YES_OR_NO, 0);
                        answer.loop();
                    }
                }

                if (!more) {
                    break;
                }
            }
        }

        sendVirtualAssistantMessage("I've added punishment points matching the crime(s)!");
        sendVirtualAssistantMessage("Make sure you report for punishment soon!");
    }
}