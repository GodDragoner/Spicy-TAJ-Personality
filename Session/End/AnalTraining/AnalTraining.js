{
    if (getVar(VARIABLE_ASS_LEVEL) >= 30 || isVar('AnalExamStartDate')) {
        run('Session/End/AnalTraining/AnalExam.js');
    } else {
        //By default we want to send a new assignment
        let completedExercise = true;
        if (getVar(VARIABLE_ASS_TRAININGS_DONE, 0) == 0) {
            firstTimeAnalTraining();
        } else if (checkAnalExercise()) {
            if (getChastityEXPForLevel(getVar(VARIABLE_ASS_LEVEL) + 1) > getVar(VARIABLE_ASS_EXPERIENCE)) {
                incrementVar(VARIABLE_ASS_LEVEL, 1);

                sendMessage('Your current anal level is ' + getVar(VARIABLE_CHASTITY_LEVEL));
            }
        } else {
            completedExercise = false;
        }

        if (completedExercise) {
            sendNewAnalTask();

            if (isChance(25)) {
                sendMessage("%InAddition% I want you to watch " + randomInteger(10, 30) + " minutes of porn involving anal. Preferably while completing your " + random("task ", "assignment "));
            }

            if (getASMLimit() == LIMIT_ASKED_YES) {
                sendMessage(random("Remember ", "Don\'t forget ", "Keep in mind ") + "to properly lick your toys clean after using them %Lol% %SlaveName%");
            }

            if (hasEnemaKit()) {
                sendMessage(random("Don\'t forget ", "And also do ", "Remember ", "In addition do ", "Also do ") + "your enema %Grin%");
            }
        }
    }


    incrementVar(VARIABLE_ASS_TRAININGS_DONE, 1);
}

function sendNewAnalTask() {
    sendMessage(random("Your next assignment", "For your next task", "Your next task at hand", "For this exercise"));

    let task = getRandomAnalTask(analTasks);

    setVar(VARIABLE_TASK_ASS_EXPERIENCE, task.exp * getTrainingEXPMultiplier(getVar(VARIABLE_ASS_TASKS_IN_ROW, 0)));
    setVar(VARIABLE_LAST_ASS_TASK_ID, task.id);

    task.sendInstructions();
}


function checkAnalExercise() {
    //TODO: Inflatable butt plug etc. tasks, wear for x hours outside etc.
    if(sendYesOrNoQuestion('Have you completed the last anal assignment I gave you?')) {
        sendMessage('%Good%');
        changeMeritLow(false);

        sendMessage("Let me just update your exp...");
        incrementVar(VARIABLE_ASS_TASKS_IN_ROW, 1);

        //TODO: Randomize message
        if (getVar(VARIABLE_ASS_TASKS_IN_ROW, 0) == 15) {
            sendMessage('I am very happy %SlaveName');
            sendMessage("You have been completing your anal " + random("assignments ", "tasks ") + "for 15 days in a row");
            sendMessage("Thus I will multiply your ass exp by 4 from now on");
        } else if (getVar(VARIABLE_ASS_TASKS_IN_ROW, 0) == 10) {
            sendMessage('You will be pleased to hear this %SlaveName% %Grin%');
            sendMessage("You have completed your anal " + random("assignments ", "tasks ") + "for the last 10 days %Grin%");
            sendMessage("Because you have been acting that disciplined I will reward you with three times the ass exp from now on");
        } else if (getVar(VARIABLE_ASS_TASKS_IN_ROW, 0) == 5) {
            sendMessage('Looks like the training is working out for you %SlaveName%');
            sendMessage("You have been following my anal " + random("assignments ", "tasks ") + "for 5 days in a row now");
            sendMessage("Thus I will multiply your ass exp by 2 from now on");
        }

        incrementVar(VARIABLE_ASS_EXPERIENCE, getVar(VARIABLE_TASK_ASS_EXPERIENCE));
        sendMessage("I updated your exp...");
    } else {
        sendMessage("I expect more from you %SlaveName%");

        const whyUnableAnswer = sendInput("Tell me %SlaveName%, why were you unable to complete the assignment?");
        while (true) {
            if (whyUnableAnswer.isLike("forgot", "forget")) {
                sendMessage("You should know it does not make me happy if you forget stuff %SlaveName%!");
                changeMeritHigh(true);
                break;
            } else if (whyUnableAnswer.isLike("time", "time", "time")) {
                sendMessage('Even though you might sometimes run short on time you still need to follow my orders');
                changeMeritMedium(true);
                break;
            } else if (whyUnableAnswer.isLike("pain", "much", "handle", "uncomfortable")) {
                sendMessage("You should be able to handle pain %SlaveName%");
                changeMeritMedium(true);

                sendMessage("If it " + random("hurts too much ", "is really uncomfortable ") + "you should consider getting lube or using more lube");
                sendMessage("You can also try to carefully stretch your %Ass% before you start");
                sendMessage("You can do that by only entering the tip over and over again or by starting with smaller toys");
                break;
            } else {
                changeMeritMedium(true);
                sendMessage("You have to complete your tasks %SlaveName%. You want to become a proper slave, don\'t you?");
                break;
            }
        }

        sendMessage("Anyhow not completing your " + random("task ", "assignment ") + "displeases me");
        sendMessage("But I guess in the end this means you just don\'t get to cum %Grin%");
        setVar(VARIABLE_ASS_TASKS_IN_ROW, 0);
        sendMessage("Complete your task until the next session");
        return false;
    }

    return true;
}

function firstTimeAnalTraining() {
    sendMessage("This is gonna be our very first ass training");

    if(!isVar('assIntro')) {
        runAssIntro();
    } else {
        sendMessage("As you should already know you will often end up with a " + random("strapon ", "cock ") + "up your %Ass% ");
        sendMessage("Now.. ");
    }

    if(!getVar(VARIABLE_TRAINING_INTRODUCTION_DONE, false)) {
        sendMessage("It\'s rather simple how this works ");
        sendMessage("After each session I will ask you whether you completed your latest assignment");
        sendMessage("If you did you are rewarded with exp");
        sendMessage("You won\'t get any bonuses other than making me happy %Grin% ");
        sendMessage("And you want to please me, don\'t you?");
        sendMessage("I will measure your experience using a so called ass level");
        sendMessage("You will start at level 1, which means you are a beginner when it comes to anal play");
        sendMessage("Level 30 means that you can take anything up your %Ass% without hesitating");
        sendMessage("EXP makes you grow in level at a slow pace");
        sendMessage("Each new level requires a higher amount of EXP");
        sendMessage("As your level grows the assignments become more difficult");
        sendMessage("It\'s really as simple as that");
    } else {
        sendMessage('This just works the same as the other trainings we are doing');
        sendMessage('Just a quick reminder of the level system');
        sendMessage("You will start at level 1, which means you are a beginner when it comes to anal play");
        sendMessage("Level 30 means that you can take anything up your %Ass% without hesitating");
    }

    setVar(VARIABLE_TRAINING_INTRODUCTION_DONE, true);
}