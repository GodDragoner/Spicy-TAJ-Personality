{
    if (!isVar(VARIABLE_NEXT_PUNISHMENT_DAY)) {
        sendVirtualAssistantMessage("Today it's thursday");
        sendVirtualAssistantMessage("Thursdays are special");
        sendVirtualAssistantMessage("Thursdays are punishment days");
        sendVirtualAssistantMessage("Since you're full time it is required that you at least launch Tease-AI for a weekly punishment check up");
        sendVirtualAssistantMessage("It's expected that you've brought your level of punishment points sufficiently low");
        sendVirtualAssistantMessage("If you haven't I'm adding more");
        sendVirtualAssistantMessage("A lot more!");
		//setDate(VARIABLE_NEXT_PUNISHMENT_DAY, setDate());
    } else {
        sendVirtualAssistantMessage("%SlaveName% it's thursday")
    }

    //Only continue if we haven't check this today
    if (!isVar(VARIABLE_NEXT_PUNISHMENT_DAY) || getDate(VARIABLE_NEXT_PUNISHMENT_DAY).hasPassed()) {
		//clear out all the punishment reasons from last week
		setVar("PReason_skipping_punishment",false);
		setVar("PReason_skipping_confession",false);	
		setVar("PReason_spankzchoir_late",false);	
		setVar("PReason_too_many_points",false);	
		setVar("Preason_not_degrading",false);	
		setVar("Preason_not_worshiping",false);	
		setVar("Preason_too_slow",false);	
		setVar("BadExerciseEffort",false);	
		setVar("Preason_BadChores",false);	
		setVar("Preason_BadCum",false);	
		setVar("Preason_BadEdging",false);	
		setVar("BadMouth",false);	
		setVar("Preason_BadFullTime",false);	

		
		
		
		if (!isVar(VARIABLE_NEXT_PUNISHMENT_DAY)) {
			setDate(VARIABLE_NEXT_PUNISHMENT_DAY, setDate());
			sendMessage("next punishment day has passed?:" + getDate(VARIABLE_NEXT_PUNISHMENT_DAY).hasPassed());
			}
        if (!getDate(VARIABLE_NEXT_PUNISHMENT_DAY).sameDay(setDate())) {
            sendVirtualAssistantMessage("You've been skipping punishment day %SlaveName%!");
            sendVirtualAssistantMessage("I've added a healthy dose of punishment points for that!");
            addPunishmentPoints(300);
			setVar("PReason_skipping_punishment", true);
            sendVirtualAssistantMessage("You are expected to report on thursdays!");
        }

        //Set the date to the next thursday
        setDate(VARIABLE_NEXT_PUNISHMENT_DAY, setDate().addDay(7).setHour(0).setMinute(0).setSecond(0));

        sendVirtualAssistantMessage("You have " + getVar(VARIABLE_PUNISHMENT_POINTS) + " punishment points");

        if (getVar(VARIABLE_PUNISHMENT_POINTS) >= 100) {
            sendVirtualAssistantMessage("Which isn't good enough!");
            sendVirtualAssistantMessage("So I'm adding more!");
            sendVirtualAssistantMessage("Make sure you report for punishment!");
            addPunishmentPoints(250);
			setVar("PReason_too_many_points",true);
        }
		else{ sendVirtualAssistantMessage(random("Good Boy!","%GNMgood%", "well done, %Slave%!"));
			sendVirtualAssistantMessage(random("I hope you learned your lesson","suffering punishment for %Mistressname% is your duty", " That satisfies you're weekly %slave% requirement"));
			//fixme  expand dialog... clear Preason flags here..	
			
		}
    }
}