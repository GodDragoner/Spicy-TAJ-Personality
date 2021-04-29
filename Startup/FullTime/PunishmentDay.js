{
    if (!isVar(VARIABLE.NEXT_PUNISHMENT_DAY)) {
        sendVirtualAssistantMessage("Today is Thursday");
        sendVirtualAssistantMessage("Thursdays are special");
        sendVirtualAssistantMessage("Thursdays are punishment days");
        sendVirtualAssistantMessage("Since you're full time it is required that you at least launch TAJ for a weekly punishment check up");
        sendVirtualAssistantMessage("It's expected that you've brought your level of punishment points sufficiently low");
        sendVirtualAssistantMessage("If you haven't I'm adding more");
        sendVirtualAssistantMessage("A lot more!");
    } else {
        sendVirtualAssistantMessage("%SlaveName% it's thursday");
        sendVirtualAssistantMessage("Which means it's punishment day");
    }

    //Only continue if we haven't check this today
    if (!isVar(VARIABLE.NEXT_PUNISHMENT_DAY) || getDate(VARIABLE.NEXT_PUNISHMENT_DAY).hasPassed()) {
        //Either we skipped, or we check for the current status, both don't make sense
        if (isVar(VARIABLE.NEXT_PUNISHMENT_DAY) && !getDate(VARIABLE.NEXT_PUNISHMENT_DAY).sameDay(setDate())) {
            if(!hasBeenAwayInThePastWeek()) {
                sendVirtualAssistantMessage("You've been skipping punishment day %SlaveName%!");
                sendVirtualAssistantMessage("I've added a healthy dose of punishment points for that!");
                addPunishmentPoints(300, PUNISHMENT_REASON.SKIPPING_PUNISHMENT_DAY);
                sendVirtualAssistantMessage("You are expected to report on Thursdays!");
            }
        } else {
            sendVirtualAssistantMessage("You have " + getVar(VARIABLE.PUNISHMENT_POINTS) + " punishment points");

            if (getVar(VARIABLE.PUNISHMENT_POINTS) >= getPunishmentPointsGoodThreshold()) {
                sendVirtualAssistantMessage("Which isn't good enough!");
                sendVirtualAssistantMessage("So I'm adding more!");
                sendVirtualAssistantMessage("Make sure you report for punishment!");
                addPunishmentPointsDirectly(250, 1, PUNISHMENT_REASON.TOO_MANY_POINTS);
            }
        }

        //Set the date to the next thursday
        setDate(VARIABLE.NEXT_PUNISHMENT_DAY, setDate(VARIABLE.NEXT_PUNISHMENT_DAY).addDay(7).setHour(0).setMinute(0).setSecond(0));
    }
}