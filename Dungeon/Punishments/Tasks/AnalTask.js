const ANAL_TASK_MODIFIER = [
    //BALLS_DEEP:
    {
        id: 0,
        sendInstructions: function (level) {
            sendMessage('Each of the thrusts will be balls deep');
        }
    },

    //MOAN:
    {
        id: 1,
        sendInstructions: function (level) {
            sendMessage('Moan and beg for each and every penetration');
        }
    },

    //BPM:
    {
        id: 2,
        conflicting: [4],
        sendInstructions: function (level) {
            sendMessage('You must keep a pace of at least ' + Math.max(30, getVar(VARIABLE.ASS_LEVEL)*4) + ' bpm');
        }
    },

    //Standing:
    {
        id: 3,
        conflicting: [4, 5],
        sendInstructions: function (level) {
            sendMessage('You must be standing while being penetrated');
        }
    },

    //Ass up face down
    {
        id: 4,
        conflicting: [3, 5],
        sendInstructions: function (level) {
            sendMessage('Your face must be on the floor and your ass must be up in the air. Lick the floor if you can');
        }
    },

    //Riding
    {
        id: 5,
        conflicting: [3, 4, 9],
        sendInstructions: function (level) {
            sendMessage('You must do each of the thrusts in the cowgirl position while riding the dildo');
            sendMessage('Hopefully your legs won\'t give out %Grin%');
        }
    },

    //ASM Break
    {
        id: 6,

        canEnable: function() {
            return ASM_LIMIT.isAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Once you\'ve reached half your thrusts you will pull the dildo out and give it 10 deepthroats');
        }
    },

    //Spitroasted
    {
        id: 7,

        sendInstructions: function (level) {
            sendMessage('Suck on a second dildo while doing your thrusts. Every 100 thrusts you will deepthroat the second dildo once');
        }
    },

    //Knees spread
    {
        id: 8,
        conflicting: [9],
        sendInstructions: function (level) {
            sendMessage('Keep your knees spread as far as possible at all times');
        }
    },

    //Legs locked
    {
        id: 9,
        conflicting: [8, 5],
        sendInstructions: function (level) {
            sendMessage('Chain your ankles together with a rope of ' + getRandomRopeLength() + 'cm length');
        }
    },

    //Ball Gag
    {
        id: 10,
        conflicting: [11],
        canEnable: function() {
            return GAG_TYPE_BALL_GAG.hasToy() && GAG_TYPE_BALL_GAG.isPunishmentAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Wear your ball gag whenever your mouth is free');
        },
    },

    //Dildo Gag:
    {
        id: 11,

        conflicting: [10],

        canEnable: function() {
            return GAG_TYPE_DILDO_GAG.hasToy() && GAG_TYPE_DILDO_GAG.isPunishmentAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Wear your dildo gag whenever your mouth is free');
        }
    },
];

const ANAL_TASK = createPunishmentTask('anal', ANAL_TASK_MODIFIER);
ANAL_TASK.sendInstructions = function () {
    sendMessage('You will do ' + this.getAmount() + ' thrusts into your ass using your ' + getAnalDildoForTask().name);

    let modifiersActive = this.getObjectModifiers();

    for(let x = 0; x < modifiersActive.length; x++) {
        modifiersActive[x].sendInstructions(PUNISHMENT_OVERALL_LEVEL);
    }
};

ANAL_TASK.canUse = function() {
    return getVar(VARIABLE.ASS_LEVEL) >= 30;
};

ANAL_TASK.generateAmount = function (points) {
    if(getStrictnessForCharacter() < 1) {
        return points*3;
    } else if(getStrictnessForCharacter() < 2) {
        return Math.ceil(points*3.5);
    } else {
        return Math.ceil(points*4);
    }
};