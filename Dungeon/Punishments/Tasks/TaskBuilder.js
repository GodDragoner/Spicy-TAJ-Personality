run('Dungeon/Punishments/Tasks/DeepthroatTask.js');
run('Dungeon/Punishments/Tasks/AnalTask.js');
run('Dungeon/Punishments/Tasks/ToyTask.js');

const MIN_PUNISHMENT_POINTS_FOR_TASK = 500;

function handlePunishmentTaskCreation(points, level) {
    PUNISHMENT_OVERALL_LEVEL = level;
    setupPunisherConnection();

    setVar(VARIABLE.PUNISHMENT_TASK_POINTS, points);
    buildPunishmentTask(points, PUNISHMENT_OVERALL_LEVEL);
    sendPunishmentTaskInstructions();

    sendMessage('That should be it %SlaveName%');
    sendMessage('Come back to the dungeon and report to me once you are done');
    setSender(1);
}

function isActivePunishmentTasks() {
    return isVar(VARIABLE.PUNISHMENT_TASK_POINTS);
}

function resetPunishmentTasks() {
    DEEPTHROAT_TASK.reset();
    TOY_TASK.reset();
    ANAL_TASK.reset();
    delVar(VARIABLE.PUNISHMENT_TASK_POINTS);
    delVar(VARIABLE.PUNISHMENT_PUNISHER);
}

function canRequestsPunishmentTasks() {
    return DEEPTHROAT_TASK.canUse() || ANAL_TASK.canUse();
}

function buildPunishmentTask(points, level) {
    PUNISHMENT_CURRENT_LEVEL = level;

    let punishmentTasks = [];

    //Modifiers to enable
    let modifiers = Math.max(3, ((level.id + 1) + (getStrictnessForCharacter() + 1)) * 2);

    sendDebugMessage('Starting punishment tasks modifiers ' + modifiers);

    if (getVar(VARIABLE.BLOWJOB_LEVEL) >= 30 || true) {
        punishmentTasks.push(DEEPTHROAT_TASK);
    }

    if (getVar(VARIABLE.ASS_LEVEL) >= 30 || true) {
        punishmentTasks.push(ANAL_TASK);
    }

    punishmentTasks.push(TOY_TASK);

    let maxModifiersPerTask = 7;
    let divide = punishmentTasks.length;
    let pointsDeductPerModifier = 50;

    //Reassign modifiers
    if (divide * maxModifiersPerTask < modifiers) {
        modifiers = divide * maxModifiersPerTask;
        sendDebugMessage('Adjusted punishment tasks modifiers to ' + modifiers);
    }

    let maxPercentOfModifiers = 0.40;

    if (points*maxPercentOfModifiers < modifiers * pointsDeductPerModifier) {
        modifiers = Math.floor(0.4*points/pointsDeductPerModifier);
        sendDebugMessage('Reduced max modifiers to ' + modifiers);
    }

    //Toys is always a part of punishment tasks and doesn't require any points so we -1 the length
    let pointsToAssign = Math.ceil((points - modifiers * pointsDeductPerModifier) / (punishmentTasks.length - 1));

    let modifiersRemaining = modifiers;

    for (let x = 0; x < punishmentTasks.length; x++) {
        let task = punishmentTasks[x];
        let modifiersToSpend = Math.floor(modifiers / divide);

        //last entry so we should distribute all remaining modifiers
        if(x === punishmentTasks.length - 1) {
            modifiersToSpend = Math.min(maxModifiersPerTask, modifiersRemaining);
        }

        modifiersRemaining -= (modifiersToSpend - task.generateTask(pointsToAssign, Math.max(1, modifiersToSpend)));
    }
}

function sendPunishmentTaskInstructions() {
    let punishmentTasks = [];

    if(DEEPTHROAT_TASK.isActive()) {
        punishmentTasks.push(DEEPTHROAT_TASK);
    }

    if(ANAL_TASK.isActive()) {
        punishmentTasks.push(ANAL_TASK);
    }

    punishmentTasks.push(TOY_TASK);

    for (let x = 0; x < punishmentTasks.length; x++) {
        let task = punishmentTasks[x];
        task.sendInstructions();

        if (x < punishmentTasks.length - 1) {
            sendMessage('%InAddition%...');
        }
    }
}

function createPunishmentTask(name, array) {
    return {
        name: name, modifierArray: array,
        getVarName: function () {
            return this.name + 'punishmenttask';
        },

        isActive: function() {
            return isVar(this.getVarName() + 'modifiers')
        },

        reset: function () {
            delVar(this.getVarName() + 'amount');
            delVar(this.getVarName() + 'modifiers');
        },

        getAmount: function () {
            return getVar(this.getVarName() + 'amount', 0);
        },

        setAmount: function (amount) {
            setVar(this.getVarName() + 'amount', amount);
        },

        getModifiers: function () {
            return getVar(this.getVarName() + 'modifiers', new java.util.ArrayList());
        },

        setModifiers: function (arrayList) {
            setVar(this.getVarName() + 'modifiers', arrayList);
        },

        getObjectModifiers: function () {
            let arrayList = this.getModifiers();

            let objects = [];

            for (let x = 0; x < arrayList.size(); x++) {
                for (let y = 0; y < this.modifierArray.length; y++) {
                    if (arrayList.get(x) == this.modifierArray[y].id) {
                        objects.push(this.modifierArray[y]);
                    }
                }
            }

            return objects;
        },

        generateModifiersToEnable: function (modifiers, toEnable = new java.util.ArrayList()) {
            let triedToEnable = [];
            let unableToEnable = 0;

            sendDebugMessage('Generating ' + modifiers + ' modifiers of punishment tasks ' + this.name);

            outer: while (modifiers > 0 && triedToEnable.length < this.modifierArray.length) {
                let randomElement = random(this.modifierArray);

                if (toEnable.contains(randomElement.id) || triedToEnable.indexOf(randomElement.id) !== -1) {
                    continue;
                }

                sendDebugMessage('Trying to add ' + randomElement.id + ' to list of punishment tasks');

                //We are trying to enable this so don't try again
                triedToEnable.push(randomElement.id);

                if (randomElement.conflicting !== undefined && randomElement.conflicting !== null) {
                    for (let x = 0; x < randomElement.conflicting.length; x++) {
                        if (toEnable.contains(randomElement.conflicting[x])) {
                            unableToEnable++;

                            sendDebugMessage('Unable to add ' + randomElement.id + ' to list of punishment tasks');
                            continue outer;
                        }
                    }
                }

                if (randomElement.canEnable !== undefined && !randomElement.canEnable()) {
                    continue outer;
                }

                toEnable.add(randomElement.id);
                modifiers--;
            }

            this.setModifiers(toEnable);

            //Return left over modifiers
            return modifiers;
        },

        sendInstructions: function () {
        },
        generateAmount: function (points) {
        },

        generateTask: function (points, modifiers) {
            this.setAmount(this.generateAmount(points));
            return this.generateModifiersToEnable(modifiers);
        }
    }
}