const VARIABLE_CHASTITY_ON = "chastityOn";
const VARIABLE_LINGERIE_ON = "lingerieOn";

const VARIABLE_SLAVE_TYPE = "slaveType";

const VARIABLE_MIN_WEEKLY_VISITS = "minWeeklyVisits";

const VARIABLE_MIN_WEEKLY_CHORES = "minWeeklyChores";

const VARIABLE_DENIAL_LIMIT = "denialLimit";
const VARIABLE_DENIAL_LEVEL = "denialLevel";

const VARIABLE_GOLD = "gold";

const VARIABLE_MERITS = "merits";

const VARIABLE_LOCKED_UP_LIMIT = "lockedUpLimit";

const VARIABLE_ORGASM_POINTS = "orgasmPoints";
const VARIABLE_REQUIRED_ORGASM_POINTS = "requiredOrgasmPoints";

const VARIABLE_LAST_ORGASM = "lastOrgasm";
const VARIABLE_LAST_RUINED_ORGASM = "lastRuined";

const VARIABLE_FINISHED_SETUP = "finishedSetup";
const VARIABLE_FINISHED_FIRST_SESSION = "finishedFirstSession";

const VARIABLE_ORGASM_FREQUENCY = "orgasmFrequency";

//Chastity
const VARIABLE_HAS_CHASTITY = "hasChastity";
const VARIABLE_CHASTITY_TRAINING = "chastityTraining";
const VARIABLE_CHASTITY_MATERIAL = "chastityMaterialType";
const VARIABLE_CHASTITY_CAGE_TYPE = "chastityCageType";
const VARIABLE_CHASTITY_CAGE_PIERCED = "chastityCagePierced";
const VARIABLE_CHASTITY_SPIKES_ON = "chastitySpikesOn";
const VARIABLE_CHASTITY_TOY_MODE = "toyChastityInteractionMode";

const VARIABLE_LOCKED_DAYS_IN_ROW = "lockedUpDaysInRow";

const VARIABLE_LOCKED_UP_UNTIL = "lockedUpUntil";

//Toys

const VARIABLE_IS_PLUGGED = "isPlugged";
const VARIABLE_IS_GAGED = "isGaged";
const VARIABLE_IS_BALLS_TIED = "isBallsTied";

//Modules
const VARIABLE_STROKE_TRAINING_ACTIVE = "strokeTrainingActive";
const VARIABLE_STROKE_TRAININGS_DONE = "strokeTrainingsDone";
const VARIABLE_STROKE_TRAINING_LEVEL = "strokeTrainingLevel";
const VARIABLE_STROKE_TRAINING_EDGES_DONE = "strokeTrainingEdgesDone";

const VARIABLE_EDGE_A_TONS_DONE = "edgeATonsDone";
const VARIABLE_EDGE_A_TON_EDGE_RECORD = "edgeATonEdgeRecord";

//Sub
const VARIABLE_DEVOTION = "subDevotion";

const VARIABLE_EDGE_STARTED_DATE = "edgeStartedDate";

const VARIABLE_SOFT_COCK_LENGTH = "softCockLength";
const VARIABLE_SECONDS_TO_GET_SOFT = "secondsToGetSoft";

const VARIABLE_ASS_LEVEL = "assLevel";

const VARIABLE_BLOWJOB_LEVEL = "blowjobLevel";

//Stats
const VARIABLE_SESSION_COUNTER = "sessionCounter";
const VARIABLE_ORGASM_COUNTER = "orgasmCounter";
const VARIABLE_RUIN_COUNTER = "ruinCounter";

const VARIABLE_EDGE_COUNTER = "edgeCounter";
const VARIABLE_EDGE_TODAY_COUNTER = "edgeTodayCounter";

//Full time
const VARIABLE_LAST_ROUTINE_CHECK = "lastRoutineCheck";
const VARIABLE_NEXT_WEEK_CHECK = "nextWeekCheck";

const VARIABLE_WEEKLY_SLAVE_VISITS = "weeklySlaveVisits";

const VARIABLE_SLAVE_LEAVE_UNTIL = "slaveLeaveUntil";
const VARIABLE_SLAVE_VACATION_UNTIL = "slaveVacationUntil";

const VARIABLE_PUNISHMENT_POINTS = "punishmentPoints";

const VARIABLE_NEXT_CONFESSION_DAY = "nextConfessionDay";
const VARIABLE_NEXT_PUNISHMENT_DAY = "nextPunishmentDay";

const VARIABLE_WEEKLY_CHORES_COMPLETED = "weeklyChoresCompleted";

const VARIABLE_FULL_TIME_TRIAL_UNTIL = "fullTimeTrialUntil";

const VARIABLE_LAST_TEASE_SESSION = "lastTeaseSession";
const VARIABLE_CURRENT_SESSION_DATE = "currentSessionDate";

const VARIABLE_HAPPINESS = "happiness";
const VARIABLE_LUST = "lust";
const VARIABLE_ANGER = "anger";

function isMetalChastityCage() {
    return getVar(VARIABLE_CHASTITY_MATERIAL) == 0;
}

function isFullChastityBelt() {
    return getVar(VARIABLE_CHASTITY_CAGE_TYPE) == 0;
}
