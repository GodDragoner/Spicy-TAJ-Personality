{
    if (isVar('ChastityExamStartDate')) {
        if (getVar('ChastityExamStartDate').addDay(7).hasPassed()) {
            sendMessage("The time has come %SlaveName% ");
            delVar("ChastityExamStartDate");

            if(sendYesOrNoQuestion("Have you been properly locked up for the past 7 days outside of the sessions?")) {
                sendMessage("FANTASTIC!");
                sendMessage("You\'ve completed your exam!");
                changeMeritHigh(false);
                sendMessage("That\'s really great!");
                sendMessage("This means that you\'re training is over!");
                sendMessage("I want you to celebrate");
                sendMessage("Orgasm however you like! ");
                sendMessage("Lock yourself back up afterwards! %Moan%");

                if(isVar(VARIABLE.TRAINING_ORGASM_TODAY)) {
                    sendMessage('I know I am already allowing you an orgasm for another training today');
                    sendMessage('Which means you are free to schedule this orgasm on top of the other one anywhere in the next 48 hours');
                } else {
                    setTempVar(VARIABLE.TRAINING_ORGASM_TODAY, true);
                }

                registerOrgasm();
                delVar("ChastityExamStartDate");
                setVar(VARIABLE.CHASTITY_TRAINING, false);
                setVar(VARIABLE.CHASTITY_ON, true);
            } else {
                sendMessage("Awww that's too bad %EmoteSad%");
                sendMessage("That disappoints me %SlaveName%");
                changeMeritMedium(true);
                sendMessage("Whatever.. ");
                sendMessage("Let\'s restart your exam then!");
                startChastityExam();
            }
        } else {
            sendMessage("Since you\'re in the middle of your exam I simply want you to lock yourself up ");
            if(!isInChastity()) {
                lockChastityCage();
            }

            sendMessage("Calm yourself and stay strong!");
        }
    } else {
        startChastityExam();
    }
}

function startChastityExam() {

    if(!isInChastity()) {
        lockChastityCage();
    }

    setDate('ChastityExamStartDate');
    sendMessage("Your chastity exam starts now");
    sendMessage("You are to remain locked for 7 consecutive days!");
    sendMessage("Your only release time is when you are permitted during sessions!");
    sendMessage("Good luck %SlaveName%");
}