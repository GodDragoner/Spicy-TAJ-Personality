{
    if (getVar(VARIABLE_BLOWJOB_LEVEL) >= 30 || isVar('BlowjobExamStartDate')) {
        run('Session/End/BlowjobTraining/BlowjobExam.js');
    } else {
        //By default we want to send a new assignment
        let completedExercise = true;
        if (getVar(VARIABLE_BLOWJOB_TRAININGS_DONE, 0) == 0) {
            firstTimeBlowjobTraining();
        } else if (checkBlowjobExercise()) {
            if (getChastityEXPForLevel(getVar(VARIABLE_BLOWJOB_LEVEL) + 1) > getVar(VARIABLE_BLOWJOB_EXPERIENCE)) {
                incrementVar(VARIABLE_BLOWJOB_LEVEL, 1);

                sendMessage('Your current blowjob level is ' + getVar(VARIABLE_BLOWJOB_LEVEL));
            }
        } else {
            completedExercise = false;
        }

        if (completedExercise) {
            sendNewBlowjobTask();

            if (isChance(25)) {
                sendMessage("%InAddition% I want you to watch " + randomInteger(10, 30) + "minutes of porn involving blowjobs and deepthroats. Preferably while completing your " + random("task ", "assignment "));

                if(getSissyLimit() == LIMIT_ASKED_YES) {
                    sendMessage('Of course I would prefer porn of sissy mouths getting raped if you can find some %Grin%');
                }
            }
        }
    }

    incrementVar(VARIABLE_BLOWJOB_TRAININGS_DONE, 1);
}

function sendNewBlowjobTask() {
    sendMessage(random("Your next assignment", "For your next task", "Your next task at hand", "For this exercise"));

    let task = getRandomBlowjobTask(blowjobTasks);

    setVar(VARIABLE_TASK_BLOWJOB_EXPERIENCE, task.exp * getTrainingEXPMultiplier(getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW)));
    setVar(VARIABLE_LAST_BLOWJOB_TASK_ID, task.id);
}

function checkBlowjobExercise() {
    if(sendYesOrNoQuestion('"Have you completed the last assignment I gave you?"')) {
        sendMessage('%Good%');
        changeMeritLow(false);

        sendMessage("Let me just update your exp...");
        incrementVar(VARIABLE_BLOWJOB_TASKS_IN_ROW, 1);

        //TODO: Randomize message
        if (getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW) == 15) {
            sendMessage('I am very happy %SlaveName');
            sendMessage("You have been completing your blowjob " + random("assignments ", "tasks ") + "for 15 days in a row");
            sendMessage("Thus I will multiply your blowjob by 4 from now on");
        } else if (getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW == 10)) {
            sendMessage('You will be pleased to hear this %SlaveName% %Grin%');
            sendMessage("You have completed your blowjob " + random("assignments ", "tasks ") + "for the last 10 days %Grin%");
            sendMessage("Because you have been acting that disciplined I will reward you with three times the blowjob exp from now on");
        } else if (getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW == 5)) {
            sendMessage('Looks like the training is working out for you %SlaveName%');
            sendMessage("You have been following my blowjob " + random("assignments ", "tasks ") + "for 5 days in a row now");
            sendMessage("Thus I will multiply your blowjob exp by 2 from now on");
        }

        incrementVar(VARIABLE_BLOWJOB_EXPERIENCE, getVar(VARIABLE_TASK_BLOWJOB_EXPERIENCE));
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
                sendMessage("You should be able to that %SlaveName%");
                changeMeritMedium(true);

                sendMessage("If it " + random("is too hard ", "is really uncomfortable ") + "you should consider training more");
                break;
            } else {
                changeMeritMedium(true);
                sendMessage("You have to complete your tasks %SlaveName%. You want to become a proper slave, don\'t you?");
                break;
            }
        }

        sendMessage("Anyhow not completing your " + random("task ", "assignment ") + "displeases me");
        sendMessage("But I guess in the end this means you just don\'t get to cum %Grin%");
        setVar(VARIABLE_BLOWJOB_TASKS_IN_ROW, 0);
        sendMessage("Complete your task until the next session");
        return false;
    }

    return true;
}


function getTrainingEXPMultiplier(tasksInRow) {
    if (getVar(tasksInRow) >= 15) {
        return 4;
    } else if (getVar(tasksInRow) >= 10) {
        return 3;
    } else if (getVar(tasksInRow) >= 5) {
        return 2;
    }

    return 1;
}

function firstTimeBlowjobTraining() {
    sendMessage("This is gonna be our very first blowjob training");

    sendMessage("As you should already know you will often end up with a " + random("strapon ", "cock ") + "down your throat");
    sendMessage("Now.. ");

    sendMessage("It\'s rather simple how this works ");
    sendMessage("After each session I will ask you whether you completed your latest assignment");
    sendMessage("If you did you are rewarded with exp");
    sendMessage("You won\'t get any bonuses other than making me happy %Grin% ");
    sendMessage("And you want to please me, don\'t you?");
    sendMessage("I will measure your experience using a so called blowjob level");
    sendMessage("You will start at level 1, which means you are a beginner when it comes to giving blowjobs");
    sendMessage("Level 30 means that you can take anything down your throat without hesitating");
    sendMessage("EXP makes you grow in level at a slow pace");
    sendMessage("Each new level requires a higher amount of EXP");
    sendMessage("As your level grows the assignments become more difficult");
    sendMessage("It\'s really as simple as that");
    sendMessage('Now there is one very important rule that you should never forget');

    if(getSissyLimit() === LIMIT_NEVER_ASKED) {
        sendMessage('And I know that you aren\'t a sissy however this still applies to you because I think it is important');
    }

    sendMessage('Good sissies never swallow their spit %Grin%');
    sendMessage('And because you want to please me and I want you to be one...');
    sendMessage('You will follow this rule');

    //TODO: Set this as a rule
    sendMessage('I don\'t care where the spit goes but you are not allowed to collect it and just pour it away');
    sendMessage('If you collect it, you will pour it all over your face after you are done %Lol%');
}