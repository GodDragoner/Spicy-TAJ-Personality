const DEEPTHROAT_TASK_MODIFIER = [
    //BALLS_DEEP:
    {
        id: 0,

        sendInstructions: function (level) {
            sendMessage('Each of your deepthroats must be balls deep');
        },
    },

    //HOLD:
    {
        id: 1,
        sendInstructions: function (level) {
            sendMessage('Each of the deepthroats will be held for ' + (level.id + 1) * 3 + ' seconds');
        }
    },

    //HALF_BPM:
    {
        id: 2,
        sendInstructions: function (level) {
            sendMessage('Half of the deepthroats must be done with no hold time but instead while throatfucking yourself at ' + ((level.id + 1) * 20) + ' bpm');
        }
    },

    //KNEELING:
    {
        id: 3,
        conflicting: [4],
        sendInstructions: function (level) {
            sendMessage('Mount the dildo to a wall or door and kneel while doing your deepthroats. It should be on a height that does not allow you to sit while kneeling');
        }
    },

    //HEAD_OVER_EDGE:
    {
        id: 4,
        conflicting: [3, 5],
        sendInstructions: function (level) {
            sendMessage('Hang your head over the edge of your bed for this and let all the spit slowly run down your face');
        }
    },

    //Tie hands behind back
    {
        id: 5,

        conflicting: [4],
        sendInstructions: function (level) {
            sendMessage('Lock your hands behind your back with a rope or some hand cuffs');
        }
    },

    //Buttplug
    {
        id: 6,

        canEnable: function() {
            return BUTTPLUG_TOY.hasToy() && BUTTPLUG_TOY.isPunishmentAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Wear your ' + getButtplugForTask().name + ' throughout the deepthroats');
        }
    },

    //Spread spit
    {
        id: 7,

        sendInstructions: function (level) {
            sendMessage('Every 50 deepthroats I want you to hit your face twice with the dildo and spread the spit on your face');
        }
    },

    //Clamp nose:
    {
        id: 8,

        canEnable: function() {
            return PAIN_LIMIT.isAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Put a clamp on your nose for the duration of the deepthroats');
        }
    },
];

const DEEPTHROAT_TASK = createPunishmentTask('deepthroat', DEEPTHROAT_TASK_MODIFIER);
DEEPTHROAT_TASK.sendInstructions = function () {
    sendMessage('You will do ' + this.getAmount() + ' deepthroats ' + ' using your ' + getDildo(true).name);

    let modifiersActive = this.getObjectModifiers();

    for(let x = 0; x < modifiersActive.length; x++) {
        modifiersActive[x].sendInstructions(PUNISHMENT_OVERALL_LEVEL);
    }
};

DEEPTHROAT_TASK.canUse = function() {
    return getVar(VARIABLE.BLOWJOB_LEVEL) >= 30;
};

DEEPTHROAT_TASK.generateAmount = function (points) {
    if(getStrictnessForCharacter() < 1) {
        return Math.floor(points/2);
    } else if(getStrictnessForCharacter() < 2) {
        return Math.ceil(points/1.5);
    } else {
        return points;
    }
};