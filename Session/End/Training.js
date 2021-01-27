function getTrainingEXPForLevel(level) {
    let loopLevel = 1;
    let exp = 100;

    while (loopLevel < level) {
        if (loopLevel >= 25) {
            exp += 65;
        } else if (loopLevel >= 20) {
            exp += 60;
        } else if (loopLevel >= 15) {
            exp += 55;
        } else {
            exp += 50;
        }

        loopLevel++;
    }

    return exp;
}

function getTrainingsLevelForExp(exp) {
    let level = 1;

    while(getTrainingEXPForLevel(level) < exp) {
        level++;
    }

    return Math.max(1, --level);
}

function checkTasksInRow(tasks, training) {
    let happy = [
        'I am very happy %SlaveName%',
        'You will be pleased to hear this %SlaveName% %Grin%',
        'Looks like the training is working out for you %SlaveName%',
    ];

    let completedMessage = "You have been completing your " + training + ' ' + random("assignments ", "tasks ");
    completedMessage += random('for ' + tasks + ' days in a row', 'for ' + tasks + ' days in a row now', 'for the last ' + tasks + ' days');

    let multiplier = getTrainingEXPMultiplier(tasks);

    let thus = random('Thus I will multiply your ' + training + ' exp by ' + multiplier + ' from now on',
    'Because you have been acting that disciplined I will reward you with ' + multiplier + ' times the ' + training + ' exp from now on');

    switch(tasks) {
        case 15:
        case 10:
        case 5:
            sendMessage(happy[randomInteger(0, happy.length - 1)]);
            sendMessage(completedMessage);
            sendMessage(thus);
            break;
    }
}

function getTrainingEXPMultiplier(tasksInRow) {
    if (tasksInRow >= 15) {
        return 4;
    } else if (tasksInRow >= 10) {
        return 3;
    } else if (tasksInRow >= 5) {
        return 2;
    }

    return 1;
}
