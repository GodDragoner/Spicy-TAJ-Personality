run("Session/Link/Link.js");
run("Session/Start/Start.js");

function endSpicySession() {
    askAboutDenialLevel();

    let trainings = 0;

    if(getVar(VARIABLE_CHASTITY_TRAINING, false) && !isForcedLockedUp()) {
        trainings++;
        run('Session/End/ChastityTraining/ChastityTraining.js');
    } else {
        if(getVar(VARIABLE_PARTNER_IS_KEYHOLDER, false)) {
            //QUALITY: More sentences
            sendMessage('Since your partner is your keyholder I will leave the decision regarding chastity to her');
        } else {
            //Lock up part
            if (!isInChastity() && willKeepChastityOn(true)) {
                lockChastityCage();

                if(shouldIntroduceNewRule(RULE_DOMME_KEYHOLDER)) {
                    RULE_DOMME_KEYHOLDER.sendIntroduction();
                }
            }
        }
    }

    if(getVar(VARIABLE_ASS_TRAINING, false)) {
        if(trainings > 0) {
            sendMessage('Next we are gonna talk about your anal training %SlaveName%');
        }

        trainings++;
        run('Session/End/AnalTraining/AnalTraining.js');
    }

    if(getVar(VARIABLE_BLOWJOB_TRAINING, false)) {
        if(trainings == 2) {
            sendMessage('Last but not least lets take a look at your blowjob training %Grin%');
        } else if(trainings > 0) {
            sendMessage('Next we are gonna talk about your blowjob training %SlaveName%');
        }

        trainings++;
        run('Session/End/BlowjobTraining/BlowjobTraining.js');
    }

    run('Session/End/Farewell.js');

    //Update last session date
    setDate(VARIABLE_LAST_TEASE_SESSION);

    handleTodaysMood();

    setTempVar(VARIABLE_CURRENT_SESSION_ACTIVE, false);

    incrementVar(VARIABLE_SESSION_COUNTER, 1);

    //Back to the lobby
    run("Assistant/AssistantLobby.js");
}

