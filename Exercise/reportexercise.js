{
    sendVirtualAssistantMessage("Reporting exercise...");

    if (!isVar(VARIABLE.EXERCISE_TIMES)) {// this is the first time user is reporting exercise
        sendVirtualAssistantMessage("%SlaveName%, this is the first time you're reporting exercise activity");
        sendVirtualAssistantMessage("%DomName% would prefer you to follow our integrated fitness program, but understands that might not be practical");
        sendVirtualAssistantMessage("%DomName% graciously provides you this opportunity to report exercise completed outside of TAJ");
        sendVirtualAssistantMessage("For an exercise to count it should be at least 45 minutes of strenuous activity that makes you sweat.");

        let lastExercise = setDate().addDay(-2);
        setDate(VARIABLE.EXERCISE_LAST, lastExercise);
    }

    if (isVar(VARIABLE.EXERCISE_LAST) && !getDate(VARIABLE.EXERCISE_LAST).addMinute(300).hasPassed()) {
        sendVirtualAssistantMessage("You just reported that you completed an exercise..");
        sendVirtualAssistantMessage("I'm not stupid slave...");
        changeMeritHigh(true);
    } else {
        sendVirtualAssistantMessage("%SlaveName%, Fitness and Honesty are both important");
        sendVirtualAssistantMessage("Have you just completed an exercise?", 0);

        let answer2 = createInput("Yes", "No");
        while (true) {
            if (answer2.containsIgnoreCase("yes", "yeah", "yep")) {
                sendVirtualAssistantMessage("%Good%");

                setVar(VARIABLE.EXERCISE_TIMES, getVar(VARIABLE.EXERCISE_TIMES, 0) + 1);

                //Set the exercise date to now
                setDate(VARIABLE.EXERCISE_LAST);
                changeMeritMedium(false);

                addGold(50);
                break;
            } else if (answer2.containsIgnoreCase("no", "nope", "nah", "sorry", "i wish")) {
                sendVirtualAssistantMessage("%EmoteSad%");
                sendVirtualAssistantMessage("Then don't waste my time...");
                changeMeritLow(true);
                break;
            } else {
                sendVirtualAssistantMessage("Did you exercise %SlaveName%?");
                sendVirtualAssistantMessage("A simple YES or NO will suffice...", 0);
                answer2.loop();
            }
        }

    }
}