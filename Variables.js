const MATERIAL = {
    //Materials
    SILICON: 0,
    GLASS: 1,
    METAL: 2,
    PLASTIC: 3
};

const VARIABLE = {
    CHASTITY_ON: "chastityOn",
    CHASTITY_REMOVE_LATER: "chastityRemoveLater",

    CHASTITY_CAGE_ON_TYPE: "chastityCageOnType",

    SPICY_VERSION: "latestVersion",

    SLAVE_TYPE: "slaveType",

    //Full time
    MIN_WEEKLY_VISITS: "minWeeklyVisits",
    MIN_WEEKLY_CHORE_TIME: "minWeeklyChoreTime",

    //Home
    HOME_TYPE: 'homeType',

    //Exercise
    EXERCISE_TIMES: 'exerciseTimes',
    EXERCISE_LAST: 'lastExercise',

    //Domme
    DOMME_HONORIFIC: 'dommeHonorific',
    DOMME_PERSONALITY_TYPE: 'personalityType',
    DOMME_STRICTNESS: 'personalityStrictness',

    //Interaction
    RESPONSE_WILL_DO_ANYTHING: 'responseWillDoAnything',
    RESPONSE_WILL_DO_ANYTHING_COUNT: 'responseWillDoAnythingCount',

    RESPONSE_IT_HURTS_COUNT: 'responseItHurtsCount',

    RESPONSE_MAY_CUM_COUNT: 'responseMayCumCount',
    RESPONSE_BEG_CUM_COUNT: 'responseBegCumCount',

    RESPONSE_WANT_CUM_COUNT: 'responseMayCumCount',

    RESPONSE_WANTS_KEYHOLDER: 'responseWantsKeyholder',

    NEXT_TIME_ICE_CUBES: 'nextTimeIceCubes',

    LAST_TIME_EXPLAINED_CBT_TERMS: 'lastTimeExplainedCBTTerms',

    BEG_DOMME_TO_EDGE: 'begDommeToEdge',

    RESPONSE_BEG_EDGE_COUNT: 'responseBegEdgeCount',

    //Chores
    CHORE_KITCHEN: 'choreKitchen',
    CHORE_BATHROOM: 'choreBathroom',
    CHORE_FINANCE: 'choreFinance',

    TOTAL_CHORES_DONE: "totalChoresDone",

    CHORE_WARNINGS: "choreWarnings",

    KINKY_CHORE_CHANCE: "kinkyChoreChance",

    TOTAL_CHORES_TIME: "totalChoresTime",

    WEEKLY_CHORES_DONE: "weeklyChoresDone",
    WEEKLY_CHORES_TIME: "weeklyChoresTime",

    //Denial
    DENIAL_LIMIT: "denialLimit",
    DENIAL_LEVEL: "denialLevel",
    DENIAL_HARD_LIMIT_TYPE: "denialHardLimitType",
    DENIAL_HARD_LIMIT_ORGASM_TODAY: "denialHardLimitOrgasmToday",
    DENIAL_HARD_LIMIT_FREEDOM_TODAY: "denialHardLimitFreedomToday",

    ORGASM_CATEGORY_TODAY: 'orgasmCategoryToday',

    GOLD: "gold",

    MERITS: "merits",

    //Orgasm
    ORGASM_POINTS: "orgasmPoints",
    REQUIRED_ORGASM_POINTS: "requiredOrgasmPoints",


    //Start chance is 50
    ORGASM_RATION: "orgasmRatio",


    LAST_ORGASM: "lastOrgasm",
    LAST_RUINED_ORGASM: "lastRuined",

    NEXT_ORGASM_SPECIAL: "nextOrgasmSpecial",

    ANAL_ORGASM_TRAINING: "analOrgasmTraining",

    ANAL_ORGASM_ONLY_STATUS: "analOrgasmOnlyStatus",

    FINISHED_SETUP: "finishedSetup",
    FINISHED_FIRST_SESSION: "finishedFirstSession",

    ORGASM_FREQUENCY: "orgasmFrequency",

    //Academy
    ACADEMY_LAST_VISIT: 'academyLastVisit',

    ACADEMY_CLASS_SKIPPED_TYPE: 'academyClassSkippedType',

    //Chastity
    CHASTITY_TRAINING: "chastityTraining",

    CHASTITY_ALLOWED_REMOVAL_TASK: "chastityTraining",

    LOCKED_UP_LIMIT: "lockedUpLimit",

    HAS_CHASTITY: "hasChastity",

    //Active cage
    ACTIVE_CHASTITY_CAGE: "activeChastityCage",

    CHASTITY_SPIKES_ON: "chastitySpikesOn",
    CHASTITY_DILATOR_ON: "chastityDilatorOn",
    CHASTITY_CAGE_IS_PIERCED: "chastityCageIsPierced",

    CHASTITY_HAS_TIMED_LOCKBOX: "chastityHasTimedLockBox",
    CHASTITY_HAS_COMBINATION_LOCK: "chastityHasCombinationLock",

    CHASTITY_KEY_LOCKED_COMBINATION: "chastityKeyLockedCombination",

    CHASTITY_TOY_MODE: "toyChastityInteractionMode",

    LOCKED_DAYS_IN_ROW: "lockedUpDaysInRow",

    LOCKED_UP_UNTIL: "lockedUpUntil",


    DENIAL_UNTIL: "denialUntil",

    LAST_CHASTITY_CLEAN: "lastChastityCleanDate",

    LAST_CHASTITY_OFF_TASK: "lastChastityOffTask",

    CHASTITY_OFF_TASK_ALLOWED_COUNTER: "chastityOffTaskAllowedCounter",

    WAITING_FOR_CHASTITY_KEY_RETURN: "waitingForChastityKeyReturn",

    //Chastity training
    CHASTITY_LEVEL: 'chastityLevel',
    CHASTITY_EXPERIENCE: 'chastityExperience',
    TASK_CHASTITY_EXPERIENCE: 'taskChastityExperience',
    CHASTITY_TRAININGS_DONE: 'chastityTrainingsDone',
    AFRAID_OF_CHASTITY: 'afraidOfChastity',
    LAST_CHASTITY_TASK_ID: 'lastChastityTaskId',
    CHASTITY_TASKS_IN_ROW: 'chastityTasksInRow',
    //CHASTITY_TRAINING_DECLINED: 'chastityTrainingDeclined',

    LONG_TERM_CHASTITY: 'chastityLongTerm',

    ASKED_FOR_KEYHOLDER: 'askedForKeyholder',

    PARTNER_IS_KEYHOLDER: 'partnerIsKeyholder',

    KEYHOLDER_FANTASIZE: 'keyholderFantasize',

    //Anal training
    ASS_LEVEL: "assLevel",
    ASS_TASKS_IN_ROW: "assTasksInRow",
    ASS_EXPERIENCE: 'assExperience',
    TASK_ASS_EXPERIENCE: 'taskAssExperience',
    LAST_ASS_TASK_ID: 'lastAssTaskId',
    ASS_TRAINING: 'assTraining',
    ASS_TRAININGS_DONE: 'assTrainingsDone',

    USED_TO_DILDO_DIAMETER: 'usedToDildoDiameter',

    MAX_ANAL_DIAMETER: 'maxAnalDiameter',
    MAX_ANAL_LENGTH: 'maxAnalLength',


    //Blowjob training
    BLOWJOB_LEVEL: "blowjobLevel",
    BLOWJOB_TASKS_IN_ROW: "blowjobTasksInRow",
    BLOWJOB_EXPERIENCE: 'blowjobExperience',
    TASK_BLOWJOB_EXPERIENCE: 'taskBlowjobExperience',
    LAST_BLOWJOB_TASK_ID: 'lastBlowjobTaskId',
    BLOWJOB_TRAINING: 'blowjobTraining',
    BLOWJOB_TRAININGS_DONE: 'blowjobTrainingsDone',

    TRAINING_ORGASM_TODAY: "trainingOrgasmToday",
    TRAINING_INTRODUCTION_DONE: 'trainingIntroductionDone',

    //Sissy training
    SISSY_TRAINING: 'sissyTraining',

    //Toys
    IS_PLUGGED: "isPlugged",

    TOY_GAG_INTERACTION_MODE: "toyGagInteractionMode",
    IS_GAGED: "isGaged",


    IS_BALLS_TIED: "isBallsTied",
    LAST_BALLS_TIE: "lastBallsTie",
    LAST_BALLS_UNTIE: "lastBallsUntie",
    IS_BALL_CRUSHER_ON: "isBallCrusherOn",

    IS_KNEELING: "isKneeling",
    KNEELING_STARTED: "kneelingStarted",

    BALL_CRUSHER_TWISTS_TO_APPLY: "ballCrusherTwistsToApply",

    //Max twists till pain limit reached. 1 per half round
    BALL_CRUSHER_MAX_TWISTS: "ballCrusherMaxTwists",

    MAX_DILDO_THICKNESS_TODAY: "maxDildoThicknessToday",

    //Icecube
    LAST_ICE_CUBE_UP_ASS_DATE: "lastIceCubeUpAssDate",
    IS_ICECUBE_BYPASS_ANAL: "isIceCubeBypassAnal",

    LAST_DILDO_SWAP_DATE: "lastDildoSwapDate",


    //E-Stim
    E_STIM_MODES: 'eStimModes',

    //Enema
    ENEMA_INTRO: "enemaIntro",
    ENEMA_TASK_TODAY: "enemaTaskToday",
    ENEMA_TASK_SET: "enemaTaskSet",

    //Slave Task
    SLAVE_TASK_TODAY: "slaveTaskToday",
    SLAVE_TASK_SET: "slaveTaskSet",

    //Modules
    POSITION_TRAINING_STARTED: "positionTrainingStarted",
    POSITION_LEVEL: "positionLevel",

    STROKE_TRAINING_ACTIVE: "strokeTrainingActive",
    STROKE_TRAININGS_DONE: "strokeTrainingsDone",
    STROKE_TRAINING_LEVEL: "strokeTrainingLevel",
    STROKE_TRAINING_EDGES_DONE: "strokeTrainingEdgesDone",

    LICK_TRAININGS_DONE: "lickTrainingsDone",

    MODEL_RATINGS: "modelRatings",
    MODEL_RATINGS_DONE: "modelRatingsDone",

    //Edge a ton
    EDGE_A_TONS_DONE: "edgeATonsDone",
    EDGE_A_TON_EDGE_RECORD: "edgeATonEdgeRecord",

    //Edge Training
    EDGE_TRAININGS_DONE: "edgeTrainingsDone",
    EDGE_TRAINING_RECORD: "edgeTrainingRecord",

    //Endurance Strokes
    ENDURANCE_STROKES_ACTIVE: "enduranceStrokesActive",
    ENDURANCE_STROKES_ATTEMPTS: "enduranceStrokesAttempts",
    ENDURANCE_STROKES_DONE: "enduranceStrokesDone",
    //EDGE_A_TON_EDGE_RECORD: "edgeATonEdgeRecord",

    STROKE_MODULE_PAUSE_FREQUENCY: 'strokeModulePauseFrequency',

    //Ass worship
    ASS_WORSHIPS_DONE: "assWorshipsDone",

    //Gooning
    GOONINGS_DONE: "gooningsDone",

    //Rules
    LAST_RULE_PASSED: 'lastRulePassed',


    //Sub
    DEVOTION: "subDevotion",

    /**
     * Number between 1 - 10
     * @type {string}
     */
    SUB_PAIN_TOLERANCE: "subPainTolerance",

    LAST_PAIN_TOLERANCE_INCREASE: "lastPainToleranceIncrease",

    EDGE_STARTED_DATE: "edgeStartedDate",
    EDGE_WITHOUT_PERMISSION: "edgeWithoutPermission",


    SECONDS_TO_GET_SOFT: "secondsToGetSoft",

    SUB_BIRTHDAY: "subBirthday",
    SUB_HAIR_COLOR: 'subHairColor',
    SUB_EYE_COLOR: 'subEyeColor',
    SUB_COCK_LENGTH: 'subCockLength',
    SUB_SOFT_COCK_LENGTH: 'subSoftCockLength',
    SUB_HEIGHT: 'subHeight',
    SUB_WEIGHT: 'subWeight',

    //Sub status
    SUB_IS_VIRGIN: 'subIsVirgin',
    SUB_IS_MARRIED: 'subIsMarried',
    SUB_HAS_GIRLFRIEND: 'toyGirlFriend',

    SUB_PARTNER_NAME: 'subPartnerName',

    SUB_PARTNER_CUCKOLD: 'subPartnerCuckold',

    SUB_LEG_MAN: 'subLegMan',

    SUB_PREMATURE_EJACULATE: 'subPrematureEjaculator',

    //Stats
    SESSION_COUNTER: "sessionCounter",
    ORGASM_COUNTER: "orgasmCounter",
    RUIN_COUNTER: "ruinCounter",

    EDGE_COUNTER: "edgeCounter",
    EDGE_TODAY_COUNTER: "edgeTodayCounter",

    //Full time
    LAST_ROUTINE_CHECK: "lastRoutineCheck",
    NEXT_WEEK_CHECK: "nextWeekCheck",

    WEEKLY_SLAVE_VISITS: "weeklySlaveVisits",

    SLAVE_LEAVE_UNTIL: "slaveLeaveUntil",
    SLAVE_VACATION_UNTIL: "slaveVacationUntil",

    //Punishment
    PUNISHMENT_POINT_MULTIPLIER: "punishmentPointMultiplier",
    LAST_PUNISHMENT_POINT_CHANGE: "punishmentPointLastChange",
    PUNISHMENT_POINTS: "punishmentPoints",

    PUNISHMENT_ACTIVE: "punishmentActive",

    PUNISHMENT_PUNISHER: "punishmentPunisher",

    PUNISHMENT_ENEMAS_TAKEN: "punishmentEnemasTaken",

    NEXT_CONFESSION_DAY: "nextConfessionDay",
    NEXT_PUNISHMENT_DAY: "nextPunishmentDay",

    PUNISHMENT_REASONS: "punishmentReasons",

    PUNISHMENT_TASK_POINTS: "punishmentTaskPoints",


    PUNISHMENTS_DONE: "punishmentsDone",

    FULL_TIME_TRIAL_UNTIL: "fullTimeTrialUntil",

    //Session
    LAST_TEASE_SESSION: "lastTeaseSession",
    CURRENT_SESSION_DATE: "currentSessionDate",
    CURRENT_SESSION_ACTIVE: "currentSessionActive",

    LAST_SPECIAL_SESSION: "lastSpecialSession",
    LAST_SPECIAL_SESSION_ID: "lastSpecialSessionId",

    LAST_PROLONGED_SESSION: "lastProlongedSession",

    PROLONGED_SESSION_TIME: "prolongedSessionTime",

    HAPPINESS: "happiness",
    LUST: "lust",
    ANGER: "anger",

    REPEATING_TEXT: 'repeatingText',
    COMPLAINTS: 'complaints',
    UNALLOWED_TALKS: 'unallowedTalks',
    UNALLOWED_EDGES: 'unallowedEdges',
    FORGETTING_HONORIFIC_COUNT: 'forgettingHonorificCount',
    SASSY_SUB: 'sassySub',

    DOMME_AFK: 'dommeAfk',

    //End
    ACTIVE_END_GAME_ID: 'activeEndGameId',
};


//Module Categories
const CATEGORY_HUMILATION = 'Humiliation';
const CATEGORY_PAIN = 'Pain';
const CATEGORY_SLAVE = 'Slave';
const CATEGORY_SISSY = 'Sissy';
const CATEGORY_TEASE = 'Tease';
