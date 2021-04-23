{
    if (getVar(VARIABLE.CHASTITY_LEVEL) >= 30 || isVar('ChastityExamStartDate')) {
        run('Session/End/ChastityTraining/ChastityExam.js');
    } else {
        //By default we want to send a new assignment
        let completedExercise = true;
        if (getVar(VARIABLE.CHASTITY_TRAININGS_DONE, 0) == 0) {
            firstChastityTraining();
        } else {
            if (checkChastityExercise()) {

                //Roll
            } else {
                completedExercise = false;
            }
        }

        if (completedExercise) {
            sendNewChastityExercise();
        }

        if (isChance(20)) {
            randomChastityAdvice();
        }
    }

    setVar(VARIABLE.CHASTITY_TRAININGS_DONE, getVar(VARIABLE.CHASTITY_TRAININGS_DONE) + 1);
}

function sendNewChastityExercise() {
    sendMessage(random("Your next assignment", "For your next task", "Your next task at hand", "For this exercise"));
    sendBasicChastityTrainingTask();

    let task = null;

    if (getVar(VARIABLE.AFRAID_OF_CHASTITY, false) && isChance(20)) {
        task = getRandomSpecialChastityTask(afraidTasks);
    } else {
        task = getRandomSpecialChastityTask(chastityTasks);
    }

    setVar(VARIABLE.TASK_CHASTITY_EXPERIENCE, task.exp * getTrainingEXPMultiplier(getVar(VARIABLE.CHASTITY_TASKS_IN_ROW, 0)));
    setVar(VARIABLE.LAST_CHASTITY_TASK_ID, task.id);

    task.sendInstructions();
}

function randomChastityAdvice() {
    switch (randomInteger(0, 4)) {
        case 0:
            sendMessage(random("Remember it's a good idea to use moisturizer cream ", "I strongly recommend using a moisturizer ", "don't forget using moisturizer! "));
            sendMessage(random("It protects against chafing/friction and overall provides with a better experience ", "It protects against chafing ", "It will greatly enhance your lock up time %Grin% "));
            sendMessage(random("Make sure to at least use it around your scrotum ", "At least use it around your scrotum! ", "Keep your scrotum from getting irritated "));
            sendMessage(random("It can easily make all the difference during sleep ", "It might even improve your sleep! "));
            sendMessage(random("It even makes it easier to put on the %ChastityCage%", "It also makes it easier to put the %ChastityCage% on "));
            break;
        case 1:
            sendMessage(random("A great advice is Q-tips ", "Q-tips are your best friends! ") + "%Grin%");
            sendMessage(random("They are excellent for hygienic purposes during long term chastity ", "Really great for the overall hygiene! "));
            break;
        case 2:
            sendMessage(random("Make sure you're using the right sizing ring for your", "Don't use the wrong size O-ring! %ChastityCage%"));
            sendMessage(random("Being too big or too small also contributes to discomfort", "Whether it's too big or small can create discomfort"));
            break;
        case 3:
            sendMessage(random("I will recommend you to use a rubber coated lock for your %ChastityCage% ", "I like to recommend a rubber coated padlock "));
            sendMessage(random("Protects against unwanted pinching and noise ", "Removes the chance of pinching and noise! "));
            break;
        case 4:
            sendMessage(random("Trim your pubic hair ", "Make sure to trim those pubic hairs! "));
            sendMessage(random("don't shave it off completely since this might cause skin irritation ", "Don't necessarily remove it completely, but keeping them short is really recommended "));
            sendMessage(random("But don't let it grow too long either since this puts you in the risk of pubic hair getting caught ", "Do not let them grow too long! "));
            sendMessage(random("Again causing pain or discomfort ", "Again to enhance your comfort! "));
            break;
    }
}

function sendBasicChastityTrainingTask() {
    let chastityLevel = getVar(VARIABLE.CHASTITY_LEVEL);

    let min = Math.ceil(chastityLevel / 2.9);
    let randomHourAmount = randomInteger(min, min + 3);

    let randomInstruction = random('You are to wear your', 'You have to wear the', 'You gotta wear the', 'You should wear the', 'You need to wear the') + " %ChastityCage%";

    let putOnChastity = false;

    //Wear a total of x hours
    if (chastityLevel < 15) {
        //More kind instructions
        if (chastityLevel < 3) {
            randomInstruction = random('You should try to wear the','You should really try to wear the');
        }

        sendMessage(randomInstruction + ' for at least ' + randomHourAmount + " hours");
    } else {
        //QUALITY: More tasks to make it less boring
        if (chastityLevel >= 28) {
            sendMessage(randomInstruction + ' until next session');
            putOnChastity = true;
        } else if (chastityLevel >= 25) {
            sendMessage(randomInstruction + ' whenever you are outside and for at least ' + randomHourAmount + ' hours in total');
        } else if (chastityLevel >= 20) {
            sendMessage(randomInstruction + ' whenever you are outside and for at least ' + randomHourAmount + ' hours in total');
        } else if (chastityLevel >= 15) {
            sendMessage(randomInstruction + ' whenever you are home and for at least ' + randomHourAmount + ' hours in total');
        }
    }

    if (chastityLevel < 20) {
        sendMessage('It\'s okay if you can\'t sleep in it');
    }

    if (!isInChastity() && putOnChastity) {
        lockChastityCage();
    }
}

function checkChastityExercise() {
    const answer = sendInput("Have you completed the last chastity assignment I gave you?");
    while (true) {
        if (answer.isLike('yes')) {
            sendMessage('%Good%');
            changeMeritLow(false);

            sendMessage("Let me just add the new exp...");
            incrementVar(VARIABLE.CHASTITY_TASKS_IN_ROW, 1);

            checkTasksInRow(getVar(VARIABLE.CHASTITY_TASKS_IN_ROW), 'chastity');

            incrementVar(VARIABLE.CHASTITY_EXPERIENCE, getVar(VARIABLE.TASK_CHASTITY_EXPERIENCE));

            if (getTrainingEXPForLevel(getVar(VARIABLE.CHASTITY_LEVEL) + 1) <= getVar(VARIABLE.CHASTITY_EXPERIENCE)) {
                incrementVar(VARIABLE.CHASTITY_LEVEL, 1);
            }

            sendMessage("I added your exp and your current level is " + getVar(VARIABLE.CHASTITY_LEVEL));
            sendMessage('You will need ' + (getTrainingEXPForLevel(getVar(VARIABLE.CHASTITY_LEVEL) + 1) - getVar(VARIABLE.CHASTITY_EXPERIENCE)) + ' more exp for the next level');

            if (getVar(VARIABLE.AFRAID_OF_CHASTITY, false) && isAfraidTask(getVar(VARIABLE.LAST_CHASTITY_TASK_ID))) {
                const afraidAnswer = sendInput('Tell me, are you still afraid of your cage showing in the public?');

                while (true) {
                    if (afraidAnswer.isLike('yes')) {
                        sendMessage(random("I guess we will need to work on that ", "Trust me we will work on that ", "Looks like my job is not done yet ") + "%SlaveName% %Grin%");
                        break;
                    } else if (afraidAnswer.isLike('no')) {
                        sendMessage("%Good% " + random("I am happy that you have overcome your fear ", "Looks like my training was successful ", "This means we can focus on working on wearing it 24/7 "));
                        changeMeritLow(false);
                        setVar(VARIABLE.AFRAID_OF_CHASTITY, false);
                        break;
                    } else {
                        sendMessage(YES_OR_NO, 0);
                        afraidAnswer.loop();
                    }
                }
            }

            break;
        } else if (answer.isLike('no')) {
            sendMessage("I expect more from you %SlaveName%");

            const whyUnableAnswer = sendInput("Tell me %SlaveName%, why were you unable to complete the assignment?");
            while (true) {
                if (whyUnableAnswer.isLike("forgot", "forget")) {
                    sendMessage("You should know it does not make me happy if you forget stuff %SlaveName%!");
                    changeMeritHigh(true);
                    break;
                } else if (whyUnableAnswer.isLike("time", "time", "time")) {
                    sendMessage(random("You should always find the time to wear your ", "You should always have time to wear your ") + "%ChastityCage%");
                    changeMeritMedium(true);
                    break;
                } else if (whyUnableAnswer.isLike("afraid")) {
                    sendMessage("My poor %SlaveName% is afraid? %Lol%");
                    changeMeritLow(true);

                    sendMessage(random("You must not be afraid of it showing in public ", "You will have to deal with that ") + "%SlaveName% %Lol%");
                    setVar(VARIABLE.AFRAID_OF_CHASTITY, true);
                    sendMessage("As a proper slave of mine you don't care about other people");
                    sendMessage("Because " + random("your solely purpose is to please me ", "your only interest should be to please me ", "you should only be interested in following my commands "));
                    return;
                } else if (whyUnableAnswer.isLike("pain", "much", "handle", "uncomfortable")) {
                    sendMessage("You should be able to handle pain %SlaveName%");
                    changeMeritMedium(true);

                    if (isChance(50)) {
                        if (getVar(VARIABLE.CHASTITY_SPIKES_ON, false)) {
                            sendMessage(random("If it hurts you should prevent yourself from being aroused with all those spikes in your cage ", "No wonder it hurts with all those spikes in the cage ") + "%Lol%");
                            break;
                        } else if (getVar(VARIABLE.CHASTITY_CAGE_IS_PIERCED, false)) {
                            sendMessage(random("If the piercing is uncomfortable ", "If the piercing hurts ") + "you should consider rearranging it or getting another cage %SlaveName%");
                            break;
                        }
                    }

                    sendMessage("If it " + random("hurts too much ", "cuts into your flesh ", "is really uncomfortable ", "pinches your skin ") + "you should consider getting a new cage or trying different ring sizes");
                    sendMessage("Sometimes it might help to wrap something " + random("soft ", "smooth ") + "around parts of the cage to make it more comfortable");
                    break;
                } else {
                    changeMeritMedium(true);
                    sendMessage("You have to complete your tasks %SlaveName%. You want to become a proper slave, don't you?");
                    break;
                }
            }

            sendMessage("Anyhow not completing your " + random("task ", "assignment ") + "displeases me");
            sendMessage("But I guess in the end this means you just don't get to cum %Grin%");
            setVar(VARIABLE.CHASTITY_TASKS_IN_ROW, 0);
            sendMessage("Complete your task until the next session");
            return false;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    return true;
}

function firstChastityTraining() {
    sendMessage("This is your very first session of chastity training");
    sendMessage("We're going to practice and make you train your ability to wear the %ChastityCage%");
    sendMessage("Essentially our goal is to make that %ChastityCage% feel like home");
    sendMessage("We want you at a point where you'll feel naked without the %ChastityCage%");


    if(!getVar(VARIABLE.TRAINING_INTRODUCTION_DONE, false)) {
        sendMessage("It's rather simple how this works.");
        sendMessage("After each session");
        sendMessage("You will be asked whether you completed your current assignment");
        sendMessage("If you did you are rewarded with exp");
        sendMessage("We use a so called chastity level to measure your experience with chastity");
        sendMessage("Level 1 is having a hard time wearing the cage");
        sendMessage("Level 30 means that you can wear the cage at all time without problems");
        sendMessage("EXP makes you grow in level at a slow pace");
        sendMessage("Each new level requires a higher amount of EXP");
        sendMessage("As your level grows the assignments increase in difficulty");
        sendMessage("It's really as simple as that");
    } else {
        sendMessage('This just works the same as the other trainings we are doing');
        sendMessage('Just a quick reminder of the level system');
        sendMessage("Level 1 is having a hard time wearing the cage");
        sendMessage("Level 30 means that you can wear the cage at all time without problems");
    }

    /*sendMessage("Now!");
    sendMessage("You also earned lock up points for completing assignments");
    sendMessage("The points are spent on pleasure %Grin%");
    sendMessage("For each 100 points you earn a die roll");
    sendMessage("The die roll is rather simple");
    sendMessage("1 you lose and nothing happens");
    sendMessage("2-7 to get to ruin your orgasm");
    sendMessage("8-10 you get an actual orgasm");*/

    setVar(VARIABLE.CHASTITY_LEVEL, 1);
    setVar(VARIABLE.CHASTITY_EXPERIENCE, 0);
    setVar(VARIABLE.CHASTITY_TASKS_IN_ROW, 0);
    setVar(VARIABLE.TRAINING_INTRODUCTION_DONE, true);
}