const SPECIAL_SESSION = {
    EDGE_TRAINING: {
        id: 0,

        startIntro: function () {
            run('Session/Special/NoChastity/EdgeTraining.js');
        },

        canBeActivated: function() {
            return !isInChastity();
        },

        continueSpecialSession: function () {
            //Can't continue if the sub somehow managed to end up in chastity
            if(isInChastity()) {
                endSpecialSession();
            } else {
                let edgeTrainingFollowUpHistory = createFileHistory('edgetrainingfollow', ['Session/Special/NoChastity/EdgeTraining/FollowUp']);
                let file = edgeTrainingFollowUpHistory.getRandomAvailableFile();
                edgeTrainingFollowUpHistory.addHistoryRun(getFileId(file));
                run(getRelativePersonalityFilePath(file));
            }
        }
    },
};

let ACTIVE_SPECIAL_SESSION = undefined;

function isSpecialSession() {
    return ACTIVE_SPECIAL_SESSION !== undefined;
}

function endSpecialSession() {
    setVar(VARIABLE.LAST_SPECIAL_SESSION_ID, ACTIVE_SPECIAL_SESSION.id);
    setDate(VARIABLE.LAST_SPECIAL_SESSION);

    ACTIVE_SPECIAL_SESSION = undefined;
}

function startSpecialSession(type) {
    ACTIVE_SPECIAL_SESSION = type;
    type.startIntro();
}

function continueSpecialSession() {
    ACTIVE_SPECIAL_SESSION.continueSpecialSession();
}

function chooseSpecialSession() {
    let daysPassed = getVar(VARIABLE.SESSION_COUNTER, 0);
    if (isVar(VARIABLE.LAST_SPECIAL_SESSION)) {
        daysPassed = millisToTimeUnit(getMillisSinecDate(getDate(VARIABLE.LAST_SPECIAL_SESSION)), TIME_UNIT_DAYS, 0);
    }

    sendDebugMessage('Chance for special session: ' + daysPassed*10);

    if(daysPassed > 5) {
        if(isChance(daysPassed*10)) {
            if(SPECIAL_SESSION.EDGE_TRAINING.canBeActivated()) {
                //QUALITY: Add more special sessions
                return SPECIAL_SESSION.EDGE_TRAINING;
            }
        }
    }

    return undefined;
}

