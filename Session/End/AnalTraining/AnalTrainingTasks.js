const analTasks = [];

{
    let taskId = 0;

    let analTask = {
        id: taskId++, exp: 27, minLevel: 1,

        sendInstructions: function () {
            sendMessage("I want you to wear your " + getButtplugSize() + " butt plug for " + getButtplugTaskDurationHours() + " hours today");
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 30, minLevel: 1,

        sendInstructions: function () {
            sendMessage("I want you to fuck yourself using your " + getAnalDildoForTask().name + " for " + getDildoTaskDurationMinutes() + " minutes today");
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 33, minLevel: 5,

        sendInstructions: function () {
            let walkDuration = randomInteger(5, 10);

            if (getVar(VARIABLE_ASS_LEVEL) >= 20) {
                walkDuration = randomInteger(15, 20);
            } else if (getVar(VARIABLE_ASS_LEVEL) >= 10) {
                walkDuration = randomInteger(10, 15);
            }

            sendMessage("I want you to wear your " + getButtplugSize() + " butt plug for " + getButtplugTaskDurationHours() + " hours today");
            sendMessage("But while wearing the plug");
            sendMessage("I want you to go a for a " + walkDuration + " walk");
            sendMessage(random("I want you to learn to move around with it ", "It will be good for your health as well ", "You should thank me for encouraging you to do a little exercise "));
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 40, minLevel: 10,

        sendInstructions: function () {
            sendMessage("I want you to stick your " + getAnalDildoForTask(10, 2) + " dildo up your %Ass% and keep it in there for " + random(10, 30) + " minutes");
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 45, minLevel: 15,

        sendInstructions: function () {
            sendMessage("I want you to spend the whole night wearing your " + getButtplugSize() + " butt plug");
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 50, minLevel: 20,

        sendInstructions: function () {
            sendMessage("I want you to spend the whole day wearing your " + getButtplugSize() + " butt plug");
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);


    analTask = {
        id: taskId++, exp: 55, minLevel: 25,

        sendInstructions: function () {
            sendMessage("I want you to spend the whole night wearing your " + getButtplugSize() + " butt plug");
            sendMessage("However.. %Grin%");
            sendMessage("I want you to either use a vibrating one or attach your vibrator to it");
            sendMessage("Then I want you to turn it on and leave it on for the night");
            sendMessage("Maybe it is a battery powered toy and you will find some rest when it runs out of power");
            sendMessage("But maybe it will never run out of power and torture you for the whole night %Lol%");
            sendMessage("This will be " + random("intense ", "interesting ", "intriguing "));
            sendMessage('If you are using a vibrating one you can ignore the size');
            sendMessage("If you feel like you will cum turn of the vibrator and turn it back on after you came down");
            sendMessage("If you still cum by any chance report it to me next session");

            if(getCEILimit() == LIMIT_ASKED_YES) {
                sendMessage("Make sure to lick up your ruined mess afterwards %Grin%");
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE_ASS_LEVEL) >= this.minLevel && hasVibrator();
        },
    };
    analTasks.push(analTask);
}

function getRandomAnalTask(array) {
    const availableTasks = [];

    for(let x = 0; x < array.length; x++) {
        if(array[x].isApplicable()) {
            availableTasks.push(array[x]);
        }
    }

    return availableTasks[randomInteger(0, availableTasks.length - 1)];
}

function getDildoTaskDurationMinutes() {
    return randomInteger(getVar(VARIABLE_ASS_LEVEL), getVar(VARIABLE_ASS_LEVEL) + 5);
}


function getButtplugTaskDurationHours() {
    let enemaLevel = getEnemaLevel();

    switch(enemaLevel) {
        case 5:
            return 8;
        case 4:
            return 6;
        case 3:
            return 5;
        case 2:
            return 4;
        case 1:
            return 2;
        default:
            return 1;
    }
}