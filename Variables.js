var VARIABLE_CHASTITY_ON = "chastityOn";
var VARIABLE_LINGERIE_ON = "lingerieOn";

var VARIABLE_SLAVE_TYPE = "slaveType";

var VARIABLE_MIN_WEEKLY_VISITS = "minWeeklyVisits";

var VARIABLE_MIN_WEEKLY_CHORES = "minWeeklyChores";

var VARIABLE_DENIAL_LIMIT = "denialLimit";
var VARIABLE_DENIAL_LEVEL = "denialLevel";

var VARIABLE_GOLD = "gold";

var VARIABLE_MERITS = "merits";

var VARIABLE_LOCKED_UP_LIMIT = "lockedUpLimit";

var VARIABLE_ORGASM_POINTS = "orgasmPoints";
var VARIABLE_REQUIRED_ORGASM_POINTS = "requiredOrgasmPoints";

var VARIABLE_LAST_ORGASM = "lastOrgasm";
var VARIABLE_LAST_RUINED_ORGASM = "lastRuined";

var VARIABLE_FINISHED_SETUP = "finishedSetup";
var VARIABLE_FINISHED_FIRST_SESSION = "finishedFirstSession";

var VARIABLE_ORGASM_FREQUENCY = "orgasmFrequency";

//Chastity
var VARIABLE_HAS_CHASTITY = "hasChastity";
var VARIABLE_CHASTITY_TRAINING = "chastityTraining";
var VARIABLE_CHASTITY_MATERIAL = "chastityMaterialType";
var VARIABLE_CHASTITY_CAGE_TYPE = "chastityCageType";
var VARIABLE_CHASTITY_CAGE_PIERCED = "chastityCagePierced";
var VARIABLE_CHASTITY_SPIKES_ON = "chastitySpikesOn";
var VARIABLE_CHASTITY_TOY_MODE = "toyChastityInteractionMode";

var VARIABLE_LOCKED_DAYS_IN_ROW = "lockedUpDaysInRow";

var VARIABLE_LOCKED_UP_UNTIL = "lockedUpUntil";

//Modules
var VARIABLE_STROKE_TRAINING_ACTIVE = "strokeTrainingActive";
var VARIABLE_STROKE_TRAININGS_DONE = "strokeTrainingsDone";
var VARIABLE_STROKE_TRAINING_LEVEL = "strokeTrainingLevel";
var VARIABLE_STROKE_TRAINING_EDGES_DONE = "strokeTrainingEdgesDone";

//Sub
var VARIABLE_DEVOTION = "subDevotion";

var VARIABLE_EDGE_STARTED_DATE = "edgeStartedDate";

//Stats
var VARIABLE_SESSION_COUNTER = "sessionCounter";
var VARIABLE_ORGASM_COUNTER = "orgasmCounter";
var VARIABLE_RUIN_COUNTER = "ruinCounter";

var VARIABLE_EDGE_COUNTER = "edgeCounter";
var VARIABLE_EDGE_TODAY_COUNTER = "edgeTodayCounter";

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

var VARIABLE_LAST_TEASE_SESSION = "lastTeaseSession";
var VARIABLE_CURRENT_SESSION_DATE = "currentSessionDate";

var VARIABLE_HAPPINESS = "happiness";
var VARIABLE_LUST = "lust";
var VARIABLE_ANGER = "anger";

function isMetalChastityCage() {
    return getVar(VARIABLE_CHASTITY_MATERIAL) == 0;
}

function isFullChastityBelt() {
    return getVar(VARIABLE_CHASTITY_CAGE_TYPE) == 0;
}
