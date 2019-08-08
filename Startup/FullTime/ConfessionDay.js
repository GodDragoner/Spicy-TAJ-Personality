{
    if (!isVar(VARIABLE_NEXT_CONFESSION_DAY)) {
        sendVirtualAssistantMessage("Today it's tuesday");
        sendVirtualAssistantMessage("Tuesdays are special");
        sendVirtualAssistantMessage("Tuesdays are confession days");
        sendVirtualAssistantMessage("Since you're full time it is required that you at least launch Tease-AI for a weekly confession on tuesdays");
        sendVirtualAssistantMessage("I don't wanna hear anything about not having anything to confess either");
        sendVirtualAssistantMessage("I simply don't believe that you lead the perfect \"slave\" life without an actual domme...");
        sendVirtualAssistantMessage("So choose whatever you believe to be most severe");
        sendVirtualAssistantMessage("Whether that is cumming without permission");
        sendVirtualAssistantMessage("Or some other violation of the rules");
		//setDate(VARIABLE_NEXT_CONFESSION_DAY, setDate().addDay(7).setHour(0).setMinute(0).setSecond(0));
    }

//Only continue if we haven't check this today
    if (!isVar(VARIABLE_NEXT_CONFESSION_DAY) || getDate(VARIABLE_NEXT_CONFESSION_DAY).hasPassed()) {
		if (!isVar(VARIABLE_NEXT_CONFESSION_DAY)) {
			setDate(VARIABLE_NEXT_CONFESSION_DAY, setDate());

			}
		
        if (!getDate(VARIABLE_NEXT_CONFESSION_DAY).sameDay(setDate())) {
            sendVirtualAssistantMessage("You've been skipping confession day %SlaveName%!");
            sendVirtualAssistantMessage("I've added a healthy dose of punishment points for that!");
            addPunishmentPoints(300);
			setVar("PReason_skipping_confession",true);
            sendVirtualAssistantMessage("You are expected to report on tuesdays!");
        }

        //Set the date to the next tuesday
        setDate(VARIABLE_NEXT_CONFESSION_DAY, setDate().addDay(7).setHour(0).setMinute(0).setSecond(0));

        sendVirtualAssistantMessage("Now slave tell me...");
        sendVirtualAssistantMessage("Confess!", false);
        while (true) {
            let answer = createInput();

            if (answer.containsIgnoreCase("came, orgasm, cum, cumming")) {
                sendVirtualAssistantMessage("Cumming without permission...");
                addPunishmentPoints(400);
				setVar("Preason_BadCum",true);
            } else if (answer.containsIgnoreCase("ruin", "ruined")) {
                sendVirtualAssistantMessage("Ruining without permission...");
                addPunishmentPoints(250);
				setVar("Preason_BadCum",true);
            } else if (answer.containsIgnoreCase("stroke", "stroking", "touched", "pleasured")) {
                sendVirtualAssistantMessage("Stroking without permission...");
                addPunishmentPoints(150);
				setVar("Preason_BadEdging",true);			
            } else if (answer.containsIgnoreCase("lazy", "sloppy")) {
                sendVirtualAssistantMessage("Lazy behaviour...");
                addPunishmentPoints(150);
				setVar("Preason_BadFullTime",true);
            } else if (answer.containsIgnoreCase("unhealthy","food","eating","gorging")) {
                sendVirtualAssistantMessage("Eating unhealthy...");
                addPunishmentPoints(150);
            } else {
                sendVirtualAssistantMessage("This isn't good slave!");
                addPunishmentPoints(150);
            }

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
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            if (!more) {
                break;
            }
        }

        sendVirtualAssistantMessage("I've added punishment points matching the crime(s)!");
        sendVirtualAssistantMessage("Make sure you report for punishment soon!");
    }
}