{
    if (getVar(VARIABLE_BLOWJOB_LEVEL) >= 30 || isVar('BlowjobExamStartDate')) {
        run('Session/End/BlowjobTraining/BlowjobExam.js');
    } else {
        //By default we want to send a new assignment
        let completedExercise = true;
        if (getVar(VARIABLE_BLOWJOB_TRAININGS_DONE, 0) == 0) {
            firstTimeBlowjobTraining();
        } else if (checkBlowjobExercise()) {
            if (getTrainingEXPForLevel(getVar(VARIABLE_BLOWJOB_LEVEL) + 1) <= getVar(VARIABLE_BLOWJOB_EXPERIENCE)) {
                incrementVar(VARIABLE_BLOWJOB_LEVEL, 1);
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

    setVar(VARIABLE_TASK_BLOWJOB_EXPERIENCE, task.exp * getTrainingEXPMultiplier(getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW, 0)));
    setVar(VARIABLE_LAST_BLOWJOB_TASK_ID, task.id);

    task.sendInstructions();
}

function checkBlowjobExercise() {
    if(sendYesOrNoQuestion('Have you completed the last blowjob assignment I gave you?')) {
        sendMessage('%Good%');
        changeMeritLow(false);

        sendMessage("Let me just add the new exp...");
        incrementVar(VARIABLE_BLOWJOB_TASKS_IN_ROW, 1);

        checkTasksInRow(getVar(VARIABLE_BLOWJOB_TASKS_IN_ROW), 'blowjob');

        incrementVar(VARIABLE_BLOWJOB_EXPERIENCE, getVar(VARIABLE_TASK_BLOWJOB_EXPERIENCE));
        sendMessage("I added your exp and your current level is " + getVar(VARIABLE_BLOWJOB_LEVEL));
        sendMessage('You will need ' + (getTrainingEXPForLevel(getVar(VARIABLE_BLOWJOB_LEVEL) + 1) - getVar(VARIABLE_BLOWJOB_EXPERIENCE)) + ' more exp for the next level');
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


function firstTimeBlowjobTraining() {
    sendMessage("This is gonna be our very first blowjob training");

    sendMessage("Now...");

    if(!getVar(VARIABLE_TRAINING_INTRODUCTION_DONE, false)) {
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
    } else {
        sendMessage('This just works the same as the other trainings we are doing');
        sendMessage('Just a quick reminder of the level system');
        sendMessage("You will start at level 1, which means you are a beginner when it comes to giving blowjobs");
        sendMessage("Level 30 means that you can take anything down your throat without hesitating");
    }


    if(!RULE_NEVER_SWALLOW_SPIT.isActive()) {
        sendMessage('Now there is one very important rule that you should never forget');
        RULE_NEVER_SWALLOW_SPIT.sendIntroduction();
    } else {
        sendMessage('As you should know, you aren\'t allowed to swallow any spit %Grin%')
    }

    sendMessage('In this case I don\'t care where the spit goes but you are not allowed to collect it and just pour it away');
    sendMessage('If you collect it, you will pour it all over your face after you are done %Lol%');
    setVar(VARIABLE_TRAINING_INTRODUCTION_DONE, true);
}