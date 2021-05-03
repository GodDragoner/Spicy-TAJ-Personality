const blowjobTasks = [];

{
    let taskId = 0;

    let blowjobTask = {
        id: taskId++, exp: 27, minLevel: 1,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow the tip of your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 30, minLevel: 1,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 33, minLevel: 5,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);
            sendMessage('However I want you to give it at least ' + randomInteger(getVar(VARIABLE.BLOWJOB_LEVEL), getVar(VARIABLE.BLOWJOB_LEVEL) + 5) + ' deepthroats during the blowjob');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 40, minLevel: 10,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE.BLOWJOB_LEVEL), 50 - getVar(VARIABLE.BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 45, minLevel: 15,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE.BLOWJOB_LEVEL), 50 - getVar(VARIABLE.BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendBlowjobTrainingPosition();

            sendMessage('I want you to put a clothespin on your nose during this task');
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);


    blowjobTask = {
        id: taskId++, exp: 48, minLevel: 18,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to find a deepthroat video and mimic it blowing your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);

            sendMessage('Mimic all positions etc.');

            if(getSissyLimit() == LIMIT_ASKED_YES) {
                sendMessage('Find a fitting sissy video of course');
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);

    blowjobTask = {
        id: taskId++, exp: 50, minLevel: 20,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);
            sendMessage('However I want you to give it a deepthroat every ' + randomInteger(60 - getVar(VARIABLE.BLOWJOB_LEVEL), 50 - getVar(VARIABLE.BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold that deepthroat for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendMessage('During that deepthroat I want you to rotate the dildo in your throat by 360 degrees ' + randomInteger(3, 5) + ' times');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);


    blowjobTask = {
        id: taskId++, exp: 55, minLevel: 25,

        sendInstructions: function () {
            let dildo =  getDildo(true);
            sendMessage("I want you to blow your " + dildo.name + " for " + getBlowjobTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);

            sendMessage('However I want you to give it ' + randomInteger(5, 10) + ' deepthroats every ' + randomInteger(60 - getVar(VARIABLE.BLOWJOB_LEVEL), 50 - getVar(VARIABLE.BLOWJOB_LEVEL)) + ' seconds during the blowjob');
            sendMessage('I want you to hold the last deepthroat of each cycle for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds');
            sendMessage('During that last deepthroat I want you to rotate the dildo in your throat by 360 degrees ' + randomInteger(3, 5) + ' times');

            sendBlowjobTrainingPosition();
        },

        isApplicable: function () {
            return getVar(VARIABLE.BLOWJOB_LEVEL) >= this.minLevel;
        },
    };
    blowjobTasks.push(blowjobTask);
}

function getBlowjobTrainingPosition() {
    let lines = [];

    let position = 0;

    if(getVar(VARIABLE.BLOWJOB_LEVEL) > 10) {
        position = randomInteger(0, 2);
    }

    switch (position) {
        case 0:
            lines.push('For this I want you to place your toy in front of you');
            break;
        case 1:
            lines.push('For this I want you to get that dildo and either attach or hold it against the wall');

            if (feelsEvil()) {
                lines.push('I want you to place the dildo on a height that requires you to completely sit up while kneeling to reach it %EmoteHappy%');
            } else {
                lines.push('You can place the dildo on a comfortable height');
            }

            if(feelsLikePunishingSlave()) {
                lines.push('And because you have been a bad %SlaveName%');
                lines.push('You will kneel on rice for this');
            }
            break;
        case 2:
            lines.push('For this I want you to go to the nearest couch, bed or something similar');
            lines.push('You will lay down on your back and then you will put your head over the corner of your bed or couch');
            lines.push('In the end your head should be upside down');
            lines.push('This definitely will be a different experience %Lol%');
            break;
    }

    return [position, lines];
}

function sendBlowjobTrainingPosition() {
    let lines = getBlowjobTrainingPosition()[1];

    for(let x = 0; x < lines.length; x++) {
        sendMessage(lines[x]);
    }
}

function getRandomApplicableTask(array) {
    const availableTasks = [];

    for(let x = 0; x < array.length; x++) {
        if(array[x].isApplicable()) {
            availableTasks.push(array[x]);
        }
    }

    return availableTasks[randomInteger(0, availableTasks.length - 1)];
}

function getBlowjobTaskDeepthroatHoldDuration() {
    return randomInteger(Math.max(2, getVar(VARIABLE.BLOWJOB_LEVEL)/2), Math.max(2, Math.ceil(getVar(VARIABLE.BLOWJOB_LEVEL)/1.5)));
}

function getBlowjobTaskDurationMinutes() {
    let min = Math.max(5, getVar(VARIABLE.BLOWJOB_LEVEL));
    return randomInteger(min, min + 5);
}