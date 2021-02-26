 const analTasks = [];

{
    let taskId = 0;

    let analTask = {
        id: taskId++, exp: 25, minLevel: 1,

        sendInstructions: function () {
            let buttplug = getButtplugForTask();
            sendMessage("I want you to wear your " +  buttplug.name +  " for " + getButtplugTaskDurationHours() + " hours today", 0);
            showImage(buttplug.getImagePath(), 5);
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 25, minLevel: 1,

        sendInstructions: function () {
            let dildo = getAnalDildoForTask();
            sendMessage("I want you to fuck yourself using your " + dildo.name + " for " + getDildoTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);

            if(getVar(VARIABLE.ASS_LEVEL) >= 10) {
                sendMessage('For that...');
                chooseAnalPosition(false);

                if(getVar(VARIABLE.ASS_LEVEL) >= 20 && isChance(getVar(VARIABLE.ASS_LEVEL)*2)) {
                    sendMessage('For that you will stay above 90 BPM. If you fail you must go for double the total time');
                }
            } else {
                sendMessage('Use whatever position you prefer');
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 30, minLevel: 3,

        sendInstructions: function () {
            let buttplug = getButtplugForTask();
            sendMessage('Between now and our next session together, I want you to wear your '+ buttplug.name + ' in a public place', 0);
            showImage(buttplug.getImagePath(), 5);
            sendMessage('I don\'t care where it is, and it doesn\'t have to be a long time');
            sendMessage('Just at least ' + random(5, 10) + ' minutes');
            sendMessage('You could wear it all day or just during a trip to the supermarket');
            sendMessage('It\'s up to you, as long as it\'s a public place where there are other people');
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 33, minLevel: 5,

        sendInstructions: function () {
            let walkDuration = randomInteger(5, 10);

            if (getVar(VARIABLE.ASS_LEVEL) >= 20) {
                walkDuration = randomInteger(15, 20);
            } else if (getVar(VARIABLE.ASS_LEVEL) >= 10) {
                walkDuration = randomInteger(10, 15);
            }

            let buttplug = getButtplugForTask();
            sendMessage("I want you to wear your " +  buttplug.name + " for " + getButtplugTaskDurationHours() + " hours today", 0);
            showImage(buttplug.getImagePath(), 5);

            sendMessage("But while wearing the plug");
            sendMessage("I want you to go for a " + walkDuration + " minute walk");
            sendMessage(random("I want you to learn to move around with it ", "It will be good for your health as well ", "You should thank me for encouraging you to do a little exercise "));
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 40, minLevel: 10,

        sendInstructions: function () {
            let dildo = getAnalDildoForTask(10, 2);
            sendMessage("I want you to stick your " + dildo.name + " dildo up your %Ass% and keep it in there for " + random(10, 30) + " minutes", 0);
            showImage(dildo.getImagePath(), 5);
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 40, minLevel: 10,

        sendInstructions: function () {
            let dildo = getAnalDildoForTask();

            sendMessage("I want you to ride your " + dildo.name + " for " + getDildoTaskDurationMinutes() + " minutes today", 0);
            showImage(dildo.getImagePath(), 5);


            if(getVar(VARIABLE.ASS_LEVEL) >= 20 && isChance(getVar(VARIABLE.ASS_LEVEL)*2)) {
                sendMessage('For that you will stay above 60 BPM. If you fail you must go for double the total time');
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 45, minLevel: 15,

        sendInstructions: function () {
            let buttplug = getButtplugForTask();

            sendMessage("I want you to spend the whole night wearing your " + buttplug.name, 0);
            showImage(buttplug.getImagePath(), 5);
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 50, minLevel: 20,

        sendInstructions: function () {
            let buttplug = getButtplugForTask();

            sendMessage("I want you to spend the whole day wearing your " +  buttplug.name, 0);
            showImage(buttplug.getImagePath(), 5);
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel;
        },
    };
    analTasks.push(analTask);


    analTask = {
        id: taskId++, exp: 55, minLevel: 25,

        sendInstructions: function () {
            let buttplug = getButtplugForTask();
            sendMessage("I want you to spend the whole night wearing your " + buttplug.name, 0);
            showImage(buttplug.getImagePath(), 5);
            sendMessage("However.. %Grin%");
            sendMessage("I want you to either swap it for a vibrating one or attach your vibrator to it");
            sendMessage("Then I want you to turn it on and leave it on for the night");
            sendMessage("Maybe it is a battery powered toy and you will find some rest when it runs out of power");
            sendMessage("But maybe it will never run out of power and torture you for the whole night %Lol%");
            sendMessage("This will be " + random("intense ", "interesting ", "intriguing "));
            sendMessage('If you are using a vibrating one you can ignore the size');
            sendMessage("If you feel like you will cum turn of the vibrator and turn it back on after you came down");
            sendMessage("If you still cum by any chance report it to me next session");

            if(getCEILimit() === LIMIT_ASKED_YES) {
                sendMessage("Make sure to lick up your ruined mess afterwards %Grin%");
            }
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel && hasMagicWand();
        },
    };
    analTasks.push(analTask);

    analTask = {
        id: taskId++, exp: 55, minLevel: 25,

        sendInstructions: function () {
            sendMessage('I want you to crawl through all rooms you have');
            sendMessage('Preferably I would like you to use a different toy/dildo in each room but you are of course allowed to reuse them if you run out');
            sendMessage('Now what I want you to do once you reach a room is I want you to fuck yourself in it for at least 10 minutes per room');
            sendMessage('You should use a new position in each room. No need to reuse a position %Grin%');
        },

        isApplicable: function () {
            return getVar(VARIABLE.ASS_LEVEL) >= this.minLevel && hasMagicWand();
        },
    };
    analTasks.push(analTask);
}

function getDildoTaskDurationMinutes() {
    let min = Math.max(5, getVar(VARIABLE.ASS_LEVEL));
    return randomInteger(min, min + 5);
}

function chooseAnalPosition(needsTwoHands = false) {
    let history = createHistory('analPosition');
    let position = findRandomUnusedIndex(6, history);

    switch (position) {
        case 0:
            sendMessage("I want you to sit back in your chair");
            sendMessage("And put your legs on the desk in front of you %Grin%");
            break;
        case 1:
            if (!needsTwoHands) {
                sendMessage("I want you on all fours %Grin%");
                break;
            }
        //Fallthrough if we need both hands
        case 2:
            sendMessage("I want you to lay down on your back");
            sendMessage("Put your legs in the air and spread them apart %Grin%");
            break;
        case 3:
            sendMessage("I want you to lay down on your " + random("right", "left") + " side");
            sendMessage("Spread your legs by sticking one leg into the air %Grin%");
            break;
        case 4:
            sendMessage("I want you to you to lay down on your stomach");
            if (isChance(50)) {
                sendMessage("And I want you to spread your legs apart %Grin%");
            }
            break;
        case 5:
            sendMessage("I want you to lay down on your back");
            sendMessage("And to bend your legs so that your feet touch the ground %Grin%");
            break;
        case 6:
            sendMessage("I want you to lay down on your " + random("right", "left") + " side");
            sendMessage("Spread your rest your legs on top of each other %Grin%");
            break;
    }
}


function getButtplugTaskDurationHours() {
    let enemaLevel = getEnemaLevel();

    switch(enemaLevel) {
        case 5:
            return 10;
        case 4:
            return 8;
        case 3:
            return 6;
        case 2:
            return 4;
        case 1:
            return 2;
        default:
            return 1;
    }
}