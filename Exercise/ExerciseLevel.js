//this file adjusts the exercise routine to be more easy/difficult based on recent performance
if (getVar("ExerciseLevelMastered") > 4) {
    //uplevel

    setVar("ExerciseLevel", getVar("ExerciseLevel") + 1);

    if (getVar("ExerciseLevel") > 10) {
        setVar("ExerciseLevel", 10);
    }

    setVar("ExerciseLevelMastered", 0);
    setVar("ExerciseLevelFailed", 0);

    sendVirtualAssistantMessage("%SlaveName%, I've noticed you've been doing really well in your workouts lately ");
    sendVirtualAssistantMessage(random("That makes me wet", " That gets me excited", "It looks like it's beginning to pay off"));
    sendVirtualAssistantMessage(random("It's time to move you to the next level", " I think you can step it up a notch for %DomHonorific% %DomName%", " I want to see if you can take a little more for %DomName%")+ " %Grin%");
}
else {
    if (getVar("ExerciseLevelFailed") > 4) {//downlevel
        setVar("ExerciseLevel", getVar("ExerciseLevel") - 1);

        if (getVar("ExerciseLevel") < 0) {
            setVar("ExerciseLevel", 0);
        }

        setVar("ExerciseLevelMastered", 0);
        setVar("ExerciseLevelFailed", 0);

        addPunishmentPoints(100, PUNISHMENT_REASON.BAD_EXERCISE_EFFORT);

        sendVirtualAssistantMessage("%SlaveName%, we need to talk about something...");
        sendVirtualAssistantMessage("%DomHonorific% %DomName% and I have noticed you're not able to keep up with the workouts you're assigned.");
        sendVirtualAssistantMessage(random("That's disappointing", "I'm a little embarrassed for you", "Your %DomHonorific% deserves better"));
        sendVirtualAssistantMessage(random("I care about you", "%DomHonorific% %DomName% wants her %Slave% to succeed", "We want to make sure you make progress") + " So I'm dropping you down a level.");
        //TODO: Special Punishment?
        sendVirtualAssistantMessage("Of course, ", random("to maintain discipline", "to keep you incentivized", "to provide motivation") + " I'm assigning you a special punishment.");
        sendVirtualAssistantMessage(random("My decision on this is final", "Try not to disappoint %DomHonorific% %DomName%", "You're welcome") + " %SlaveName%");
    }
}
