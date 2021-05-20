const AVAILABLE_EVENING_ROUTINES = [];


const EVENING_ROUTINE = {
    RULE_EVENING_RITUAL_EDGES_LAST_CUM: null,
    RULE_EVENING_RITUAL_CENSOR_PORN: null,
};

{
    let ruleId = 0;
    let routineTask = EVENING_ROUTINE.RULE_EVENING_RITUAL_EDGES_LAST_CUM = createEveningRoutineRule(ruleId++, false);

    routineTask.getRulePrint = function () {
        let edges = getDaysSinceDate(getLastEjaculationDate());
        return 'Evening Ritual: You must do ' + edges + ' ' + pluralize('edge', edges) + ' before going to bed';
    };

    routineTask.canBeActivated = function () {
        return isFullTime();
    };

    AVAILABLE_EVENING_ROUTINES.push(routineTask);

    routineTask = EVENING_ROUTINE.RULE_EVENING_RITUAL_CENSOR_PORN = createEveningRoutineRule(ruleId++, false);

    routineTask.getRulePrint = function () {
        return 'Evening Ritual: You must censor 10 images before going to bed';
    };

    routineTask.canBeActivated = function () {
        return isFullTime();
    };

    AVAILABLE_EVENING_ROUTINES.push(routineTask);

    if(newDay) {
        setAllowedTaskChastityCageOffAmount();
    }
}

function createEveningRoutineRule(id, punishment, minDays = -1, maxDays = -1) {
    return createRule(id, punishment, minDays, maxDays, 'eveningRoutine');
}

function setAllowedTaskChastityCageOffAmount() {
    let result = 0;

    if(EVENING_ROUTINE.RULE_EVENING_RITUAL_EDGES_LAST_CUM.isActive()) {
        result += 1;
    }

    //Set to amount
    setVar(VARIABLE.CHASTITY_OFF_TASK_ALLOWED_COUNTER, result);
}