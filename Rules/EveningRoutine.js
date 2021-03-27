const AVAILABLE_EVENING_ROUTINES = [];


const EVENING_ROUTINE = {
    RULE_EVENING_RITUAL_EDGES_LAST_CUM: null,
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
}

function createEveningRoutineRule(id, punishment, minDays = -1, maxDays = -1) {
    return createRule(id, punishment, minDays, maxDays, 'eveningRoutine');
}