const chastityTasks = [];
const afraidTasks = [];

{
    let taskId = 0;

    let chastityTask = {
        id: taskId++, exp: 29, minLevel: 1,

        sendInstructions: function () {
            sendMessage("%InAddition% " + random("I want you to spend ", "you should also spend ") + randomInteger(5, 15) + " minutes naked and caged in the corner");
            sendMessage("While in the corner I want you to think about " + random("why you are wearing the %ChastityCage% ", "a strategy to make the %ChastityCage% more comfortable ", "the importance of you being caged"));
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 33, minLevel: 1,

        sendInstructions: function () {
            sendMessage("But while in the %ChastityCage%");

            let walkDuration = randomInteger(5, 10);

            if (getVar(VARIABLE_CHASTITY_LEVEL) >= 20) {
                walkDuration = randomInteger(15, 20);
            } else if (getVar(VARIABLE_CHASTITY_LEVEL) >= 10) {
                walkDuration = randomInteger(10, 15);
            }

            sendMessage("I want you to go a for a " + walkDuration + " minute walk");
            sendMessage(random("I want you to learn to move around with it", "It will be good for your health as well", "You should thank me for encouraging you to do a little exercise"));

            if (getVar(VARIABLE_AFRAID_OF_CHASTITY, false)) {
                sendMessage("And because you are afraid of it showing in public this should be pretty " + random("intense ", "interesting ", "challenging "));
            }
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 37, minLevel: 1,

        sendInstructions: function () {
            sendMessage("But while in the %ChastityCage%");
            sendMessage(random("I want you to lie down ", "I need you to lie down ") );
            sendMessage("It can be in your bed or where ever you want");
            sendMessage("It can be as you sleep, nap or just relax");
            sendMessage(random("Might improve your sleep", "Might just help you move towards 24/7 lock up %Grin%", "Enjoy my little assignment"));
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 41, minLevel: 5,

        sendInstructions: function () {
            sendMessage("%InAddition% during lock up...");
            sendMessage("I want you to remove your %ChastityCage%");
            sendMessage("Then " + random("edge for me ", "get to the edge") );
            sendMessage("I also want you to have a timer ready...");
            sendMessage("As soon as you edge");
            sendMessage('I want you to stop stroking and time how quickly you can go from the edge to back in the %ChastityCage%');
            sendMessage("Repeat this exercise " + randomInteger(3, 10) + " times thoroughly");
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 45, minLevel: 10,

        sendInstructions: function () {
            sendMessage("%InAddition% during lock up...");
            sendMessage("I have a rather simple task");
            sendMessage("Before you take your next shower");
            sendMessage("Wear the %ChastityCage% beforehand");
            sendMessage("While in the shower remove the %ChastityCage%");
            sendMessage("Clean your genitals and reapply the %ChastityCage%");
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 49, minLevel: 15,

        sendInstructions: function () {
            sendMessage("%InAddition% during lock up...");
            sendMessage("You might " + random("consider this ", "think of this as being ", "believe this to be ") + random("hard ", "tough ", "difficult ") );
            sendMessage("I want you to apply the %ChastityCage% while watching a " + random("porno ", "slideshow ") + "that turns you on...");

            if (randomInteger(0, 100) <= 25) {
                sendMessage("Consider it as a cock control exercise..");
            }

            sendMessage("The " + random("assignment ", "task ", "job ", "training exercise ") + "should last at least " + randomInteger(15, 30) + " minutes");
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 53, minLevel: 15,

        sendInstructions: function () {
            sendMessage("%InAddition%" );
            sendMessage("You are to simply clean your %ChastityCage% thoroughly");

            if (randomInteger(0, 100) <= 25) {
                sendMessage("Proper hygiene is important...");
            }
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 53, minLevel: 20,

        sendInstructions: function () {
            sendMessage("%InAddition% " );
            sendMessage("In that period I want you watch " + randomInteger(5, 20) + " minutes " + random("of porn ", "of a sexy slideshow"));
            sendMessage(random("Shouldn\'t be too complicated ",  "Do it for me ", "I can\'t wait to hear about it!") );
        },
    };
    chastityTasks.push(chastityTask);


    chastityTask = {
        id: taskId++, exp: 61, minLevel: 22,

        sendInstructions: function () {
            sendMessage("But!");
            sendMessage("%Grin%");

            if(!hasVibrator()) {
                sendMessage("In that period I want you to stroke the cage while watching porn for " + randomInteger(5, 20) + " minutes %EmoteHappy%");
                sendMessage('Yes, you heard me correctly. Stroke the cage as if you could feel anything through the cage. Well maybe you can %Grin%');
            } else {
                sendMessage("In that period I want you to apply the vibrator for " + randomInteger(5, 20) + " minutes %EmoteHappy%");
            }

            sendMessage("Of course you are not allowed to cum %SlaveName% %Lol%");
            sendMessage(random("Shouldn\'t be too complicated ", "Do it for me ", "I can\'t wait to hear about it! ") );
        },
    };
    chastityTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 65, minLevel: 25,

        sendInstructions: function () {
            sendMessage(random("However ", "But ") + "I want you to spend at least a full night in the %ChastityCage%");
        },
    };
    chastityTasks.push(chastityTask);


    //Afraid tasks
    chastityTask = {
        id: taskId++, exp: 29, minLevel: 1,

        sendInstructions: function () {
            setVar("RandomNumber", getVar("#Random10,25", 0));
            sendMessage("%InAddition% " + random("I want you to spend", "you should also spend" + " minutes locked up outside"));
            sendMessage("While you are outside I want you to pay special attention to other people around you %Grin%");
        },
    };
    afraidTasks.push(chastityTask)

    chastityTask = {
        id: taskId++, exp: 41, minLevel: 5,

        sendInstructions: function () {
            sendMessage("%InAddition% I want you to stand naked and locked up in front of a mirror for " + randomInteger(3, 6) + " minutes ");
            sendMessage("I want you to look at yourself and think about how it would be if %RandomBlackmailName% saw you like this %Lol%");

            if(isChance(50)) {
                sendMessage("%Grin%");
                sendMessage("This should be funny...");
                sendMessage("While standing in front of the mirror I want you to take a picture of yourself and transfer the image to your self humiliation folder");
            }
        },
    };
    afraidTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 37, minLevel: 10,

        sendInstructions: function () {
            sendMessage("%InAddition% I want you to talk to someone while you are locked up for at least " + randomInteger(1, 5) + " minutes");
        },
    };
    afraidTasks.push(chastityTask);

    chastityTask = {
        id: taskId++, exp: 41, minLevel: 15,

        sendInstructions: function () {
            sendMessage("%InAddition% I want you to wear your cage while being in a crowded place. This can be a place in the city, a restaurant, workplace etc.");
        },
    };
    afraidTasks.push(chastityTask);
}

function isAfraidTask(taskId) {
    for(let x = 0; x < afraidTasks.length; x++) {
        if(afraidTasks[x].id == taskId) {
            return true;
        }
    }

    return false;
}

function getRandomSpecialChastityTask(array) {
    const level = getVar(VARIABLE_CHASTITY_LEVEL);

    const availableTasks = [];

    for(let x = 0; x < array.length; x++) {
        if(array[x].minLevel <= level) {
            availableTasks.push(array[x]);
        }
    }

    return availableTasks[randomInteger(0, availableTasks.length - 1)];
}