const SPECIAL_SESSION = {
    EDGE_TRAINING : {
        id: 0,

        startIntro: function() {
            run('Session/Special/NoChastity/EdgeTraining.js');
        },

        continueSpecialSession: function() {
            let edgeTrainingFollowUpHistory = createFileHistory('edgetrainingfollow', ['Session/Special/NoChastity/EdgeTraining/FollowUp']);
            let file = edgeTrainingFollowUpHistory.getRandomAvailableFile();
            edgeTrainingFollowUpHistory.addHistoryRun(getFileId(file));
            run(getRelativePersonalityFilePath(file));
        }
    },
};

let ACTIVE_SPECIAL_SESSION = undefined;

function isSpecialSession() {
    return ACTIVE_SPECIAL_SESSION !== undefined;
}

function endSpecialSession() {
    ACTIVE_SPECIAL_SESSION = undefined;
}

function startSpecialSession(type) {
    ACTIVE_SPECIAL_SESSION = type;
    type.startIntro();
}

function continueSpecialSession() {
    ACTIVE_SPECIAL_SESSION.continueSpecialSession();
}

