{
    if (getVar(VARIABLE_CHASTITY_TRAININGS_DONE, 0) == 0) {
        firstChastityTraining();
    } else {
        //Exam
        //ADvice
        //Exercise check
        //ChastityLevel

        //if assignemnts done apply new assignments {
        //Exercuse set
        //Roll
        // }
        //Denial level
    }


    setVar(VARIABLE_CHASTITY_TRAININGS_DONE, getVar(VARIABLE_CHASTITY_TRAININGS_DONE) + 1);
}

function sendNewChastityExercise() {
    sendMessage(random("Your next assignment", "For your next task", "Your next task at hand", "For this exercise"));
    sendBasicChastityTrainingTask();

    if(getVar(VARIABLE_AFRAID_OF_CHASTITY, false) && isChance(20)) {

    } else {
        
    }
}

function sendBasicChastityTrainingTask() {
    let chastityLevel = getVar(VARIABLE_CHASTITY_LEVEL);

    let min = Math.ceil(chastityLevel / 2.9);
    let randomHourAmount = randomInteger(min, min + 3);

    let randomInstruction = random('You are to wear your', 'You have to wear the', 'You gotta wear the', 'You should wear the', 'You need to wear the') + " %Cage%";

    let putOnChastity = false;

    //Wear a total of x hours
    if (chastityLevel < 15) {
        //More kind instructions
        if (chastityLevel < 3) {
            randomInstruction == random('You should try to wear the,You should really try to wear the');
        }

        sendMessage(randomInstruction + ' for at least ' + randomHourAmount + " hours");
    } else {
        //TODO: More tasks to make it less boring
        if(chastityLevel >= 28) {
            sendMessage(randomInstruction + ' until next session');
            putOnChastity = true;
        } else if(chastityLevel >= 25) {
            sendMessage(randomInstruction + ' whenever you are outside and for at least ' + randomHourAmount + ' hours in total');
        } else if(chastityLevel >= 20) {
            sendMessage(randomInstruction + ' whenever you are outside and for at least ' + randomHourAmount + ' hours in total');
        } else if(chastityLevel >= 15)  {
            sendMessage(randomInstruction + ' whenever you are home and for at least ' + randomHourAmount + ' hours in total');
        }
    }

    if(chastityLevel < 20) {
        sendMessage('It\'s okay if you can\'t sleep in it');
    }

    if(!isInChastity())  {
        lockChastityCage();
    }
}


function firstChastityTraining() {
    sendMessage("This is your very first session of chastity training");
    setVar(VARIABLE_CHASTITY_LEVEL, 1);
    sendMessage("We\'re going to practice and make you train your ability to wear the %Cage%");
    setVar(VARIABLE_CHASTITY_EXPERIENCE, 0);
    sendMessage("Essentially our goal is to make that %Cage% feel like home");
    sendMessage("We want you at a point where you\'ll feel naked without the %Cage%");
    sendMessage("It\'s rather simple how this work.");
    sendMessage("After each session");
    sendMessage("You will be asked whether you completed your current assignment");
    sendMessage("If you did you are rewarded with exp and lock up points");
    sendMessage("We use a measure of chastity level");
    sendMessage("Level 1 is having a hard time wearing the cage");
    sendMessage("Level 30 means that you can wear the cage at all time without problems");
    sendMessage("EXP makes you grow in level at a slow pace");
    sendMessage("Each new level requires a higher amount of EXP");
    sendMessage("As your level grows the assignments increase in difficulty");
    sendMessage("Now!");
    sendMessage("You also earned lock up points for completing assignments");
    sendMessage("The points are spent on pleasure %Grin%");
    sendMessage("For each 100 points you earn a die roll");
    sendMessage("The die roll is rather simple");
    sendMessage("1 you lose and nothing happens");
    sendMessage("2-7 to get to ruin your orgasm");
    sendMessage("8-10 you get an actual orgasm");
    sendMessage("It\'s really as simple as that");
}