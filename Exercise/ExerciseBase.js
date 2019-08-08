{
    let exercise = true;

    if (!isVar("HasExercised")) {
        setVar("HasExercised", true);
        //sendVirtualAssistantMessage("TP2");
        setVar("ExerciseTimes", 0);
        //sendVirtualAssistantMessage("TP3");
        setVar("ExerciseLevelOld", 1);
        setVar("ExerciseXP", 0);

        sendVirtualAssistantMessage("Welcome to your first exercise with me");
        sendVirtualAssistantMessage("This is very simple");
        sendVirtualAssistantMessage("I will show you pictures and guide you through");
        sendVirtualAssistantMessage("You will do as instructed");
        sendVirtualAssistantMessage("After each exercise session I will ask you about how many exercises you managed to do");
        sendVirtualAssistantMessage("Answer truthfully");
        sendVirtualAssistantMessage("I won't punish you for failing");
        sendVirtualAssistantMessage("Depending on your answer you earn points");
        sendVirtualAssistantMessage("I use these points to set the exercise difficulty to a level suiting you");
        sendVirtualAssistantMessage("So don't worry if you feel like its too easy the first few times");
        sendVirtualAssistantMessage("Difficulty will quickly rise");
        sendVirtualAssistantMessage("Maybe not today, but as we go");
        sendVirtualAssistantMessage("Completing exercise also gets you rewarded");
        sendVirtualAssistantMessage("I track how many times you complete exercise for each 7 days");
        setDate("ExercisePeriod");
        //commenting out because day of week function hard to find
        const date = new Date();
        tempday = date.getDay();
        switch (tempday) {
            case 1:
                sendVirtualAssistantMessage("Today it is Monday meaning your exercise cycle runs from Monday to Sunday");
                break;
            case 2:
                sendVirtualAssistantMessage("Today it is Tuesday meaning your exercise cycle runs from Tuesday to Monday");
                break;
            case 3:
                sendVirtualAssistantMessage("Today it is Wednesday meaning your exercise cycle runs from Wednesday to Tuesday");
                break;
            case 4:
                sendVirtualAssistantMessage("Today it is Thursday meaning your exercise cycle runs from Thursday to Wednesday");
                break;
            case 5:
                sendVirtualAssistantMessage("Today it is Friday meaning your exercise cycle runs from Friday to Thursday");
                break;
            case 6:
                sendVirtualAssistantMessage("Today it is Saturday meaning your exercise cycle runs from Saturday to Friday");
                break;
            case 7:
                sendVirtualAssistantMessage("Today it is Sunday meaning your exercise cycle runs from Sunday to Saturday");
                break;
        }

        sendVirtualAssistantMessage("You can only report for exercise every 20 hours");
        sendVirtualAssistantMessage("The more visits you have per 7 day cycle the more I will reward you");
        setVar("ExerciseLevel", 1);
        setVar("ExerciseLevelMastered", 0);
        setVar("ExerciseLevelFailed", 0);
    } else {
        run("Exercise/ExerciseLevel.js");

        if (isVar("LastExercise")&&getDate("LastExercise").after(setDate().addHour(-20))) {
			//TODO: Format date
            sendVirtualAssistantMessage("You last exercised at" + getDate("LastExercise"));
            sendVirtualAssistantMessage("Which is too recent");
            sendVirtualAssistantMessage("You need to wait at least 20 hours..");
            exercise = false;
        }

        if (isVar("ExercisePeriod")&&(getDate("ExercisePeriod").before(setDate().addHour(-160)))) {
            sendVirtualAssistantMessage("A seven day cycle has ended");
            sendVirtualAssistantMessage("This past week you've spent" + getVar("ExerciseTimes") + " times exercising with me");
            switch (getVar("ExerciseTimes")) {
                case 6:
                    sendVirtualAssistantMessage("Which is Excellent!! And it earns you 450 gold");
                    addGold(450);
                    break;
                case 5:
                    sendVirtualAssistantMessage("Which is great and it have earned you 300 gold");
                    addGold(300);
                    break;
                case 4:
                    sendVirtualAssistantMessage("Which is quite good and earns you 200 gold");
                    addGold(200);
                    break;
                case 3:
                    sendVirtualAssistantMessage("Which is good and earns you 100 gold");
                    addGold(100);
                    break
                case 2:
                    sendVirtualAssistantMessage("Which is okay.. but it earns you 50 gold");
                    addGold(50);
                    break;
                case 1:
                    sendVirtualAssistantMessage("Which is something and earns you 20 gold");
                    addGold(20);
                    break;
                case 0:
                    sendVirtualAssistantMessage("Which is bad and also earning you 0 gold");
                    break;
            }

            setVar("ExerciseTimes", 0);
            setDate("ExercisePeriod");

            sendVirtualAssistantMessage("Your current fitness level is " + getVar("ExerciseLevel"));
            sendVirtualAssistantMessage("Last week it was " + getVar("ExerciseLevelOld"));

            if (getVar("ExerciseLevel") > getVar("ExerciseLevelOld")) {
                sendVirtualAssistantMessage("Which is an improvement! %EmoteHappy%");
            } else if (getVar("ExerciseLevel") == getVar("ExerciseLevelOld")) {
                sendVirtualAssistantMessage("Which is a stay still :/");
            } else {
                sendVirtualAssistantMessage("Which is sadly a decline! %EmoteSad%");
            }

            setVar("ExerciseLevelOld", getVar("ExerciseLevel"));
        }
    }

    if (exercise) {
        sendVirtualAssistantMessage(random("Lets get started", "Lets begin your exercise!", "Lets start the exercise", "Let the exercise commence..."));
        setDate("LastExercise");
        run("Exercise/ExerciseProgram.js");
    }
}
