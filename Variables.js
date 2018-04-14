var VARIABLE_CHASTITY_ON = "chastityOn";
var VARIABLE_LINGERIE_ON = "lingerieOn";

var VARIABLE_SLAVE_TYPE = "slaveType";

var VARIABLE_MIN_WEEKLY_VISITS = "minWeeklyVisits";

var VARIABLE_MIN_WEEKLY_CHORES = "minWeeklyChores";

var VARIABLE_DENIAL_LIMIT = "denialLimit";
var VARIABLE_DENIAL_LEVEL = "denialLevel";

var VARIABLE_GOLD = "gold";

var VARIABLE_LOCKED_UP_LIMIT = "lockedUpLimit";

var VARIABLE_ORGASM_POINTS = "orgasmPoints";
var VARIABLE_REQUIRED_ORGASM_POINTS = "requiredOrgasmPoints";

var VARIABLE_LAST_ORGASM = "lastOrgasm";
var VARIABLE_LAST_RUINED_ORGASM = "lastRuined";

var VARIABLE_FINISHED_SETUP = "finishedSetup";
var VARIABLE_FINISHED_FIRST_SESSION = "finishedFirstSession";

var VARIABLE_ORGASM_FREQUENCY = "orgasmFrequency";

var VARIABLE_HAS_CHASTITY = "hasChastity";
var VARIABLE_CHASTITY_TRAINING = "chastityTraining";
var VARIABLE_CHASTITY_MATERIAL = "chastityMaterialType";
var VARIABLE_CHASTITY_CAGE_TYPE = "chastityCageType";
var VARIABLE_CHASTITY_CAGE_PIERCED = "chastityCagePierced";
var VARIABLE_CHASTITY_SPIKES_ON = "chastitySpikesOn";

//Full time
var VARIABLE_LAST_ROUTINE_CHECK = "lastRoutineCheck";
var VARIABLE_NEXT_WEEK_CHECK = "nextWeekCheck";

var VARIABLE_WEEKLY_SLAVE_VISITS = "weeklySlaveVisits";

var VARIABLE_SLAVE_LEAVE_UNTIL = "slaveLeaveUntil";
var VARIABLE_SLAVE_VACATION_UNTIL = "slaveVacationUntil";

var VARIABLE_PUNISHMENT_POINTS = "punishmentPoints";

var VARIABLE_NEXT_CONFESSION_DAY = "nextConfessionDay";
var VARIABLE_NEXT_PUNISHMENT_DAY = "nextPunishmentDay";

var VARIABLE_WEEKLY_CHORES_COMPLETED = "weeklyChoresCompleted";

var VARIABLE_FULL_TIME_TRIAL_UNTIL = "fullTimeTrialUntil";

function isMetalChastityCage() {
    return getVar(VARIABLE_CHASTITY_MATERIAL) == 0;
}

function isFullChastityBelt() {
    return getVar(VARIABLE_CHASTITY_CAGE_TYPE) == 0;
}
