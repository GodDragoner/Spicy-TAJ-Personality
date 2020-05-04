const TOY_TASK_MODIFIER = [

    //Clamps
    {
        id: 0,

        canEnable: function() {
            return PAIN_LIMIT.isAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Distribute ' + (level.id + 1)*5 + ' clamps across your body');
        }
    },


    /*//Clamp nose:
    {
        id: 1,

        canEnable: function() {
            return PAIN_LIMIT.isAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Put a clamp on your nose for the duration of the tasks');
        }
    },*/


    //Nipple Clamps:
    {
        id: 2,

        canEnable: function() {
            return NIPPLE_CLAMPS.hasToy()  && NIPPLE_CLAMPS.isPunishmentAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Put nipple clamps on your nipples during the tasks');
        }
    },

    //Humbler:
    {
        id: 3,

        canEnable: function() {
            return HUMBLER_TOY.hasToy() && HUMBLER_TOY.isPunishmentAllowed() && !isInChastity();
        },

        sendInstructions: function (level) {
            sendMessage('Wear your humbler during the tasks');
        }
    },

    //Blindfold
    {
        id: 4,

        conflicting: [5],

        sendInstructions: function (level) {
            sendMessage('Blindfold yourself during the tasks');
        }
    },

    //Sissy hypno
    {
        id: 5,

        conflicting: [4],

        canEnable: function() {
            return SISSY_LIMIT.isAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Watch sissy hypno during your tasks');
        }
    },

    //Lingerie
    {
        id: 6,

        canEnable: function() {
            return BRA_TOY.hasToy() && PANTY_TOY.hasToy() && BRA_TOY.isPunishmentAllowed();
        },

        sendInstructions: function (level) {
            sendMessage('Wear panties and bra throughout the tasks');
        }
    },
];

const TOY_TASK = createPunishmentTask('toy', TOY_TASK_MODIFIER);
TOY_TASK.sendInstructions = function () {
    sendMessage('Now during all tasks you will do the following %SlaveName%');
    let modifiersActive = this.getObjectModifiers();

    for(let x = 0; x < modifiersActive.length; x++) {
        modifiersActive[x].sendInstructions(PUNISHMENT_OVERALL_LEVEL);
    }
};

TOY_TASK.generateAmount = function (points) {
    return 0;
};