{
    if (isVar('AnalExamStartDate')) {
        if (getVar('AnalExamStartDate').addDay(7).hasPassed()) {
            sendMessage("The time has come %SlaveName% ");
            delVar("AnalExamStartDate");

            if(sendYesOrNoQuestion("Have you been wearing your butt plug for the last 7 days?")) {
                sendMessage("FANTASTIC!");
                sendMessage("You\'ve completed your exam!");
                changeMeritHigh(false);
                sendMessage("That\'s really great!");
                sendMessage("This means that you\'re training is over!");
                sendMessage("Even though I said you won\'t be rewarded for doing your tasks...");
                sendMessage("The exam is something different");
                sendMessage("I want you to celebrate it");
                sendMessage("After this session you are allowed to orgasm however you like!");
                sendMessage("But...");
                sendMessage('You will need to do so while sitting all the way down on a dildo');
                sendMessage('I\'ll be generous and you\'ll get to choose your dildo this time');
                sendMessage("If I decide to lock you up you\'ll need to find a way to make you cum inside the %ChastityCage%");
                sendMessage("Use your vibrator or whatever you want to");
                sendMessage("Just don\'t remove that %ChastityCage%");

                if(isVar(VARIABLE.TRAINING_ORGASM_TODAY)) {
                    sendMessage('I know I am already allowing you an orgasm for another training today');
                    sendMessage('Which means you are free to schedule this orgasm on top of the other one anywhere in the next 48 hours');
                } else {
                    setTempVar(VARIABLE.TRAINING_ORGASM_TODAY, true);
                }

                sendMessage("Enjoy %Lol%");

                registerOrgasm();
                delVar("AnalExamStartDate");
                setVar(VARIABLE.ASS_TRAINING, false);
            } else {
                sendMessage("Awww that's too bad %EmoteSad%");
                sendMessage("That disappoints me %SlaveName%");
                changeMeritMedium(true);
                sendMessage("Whatever.. ");
                sendMessage("Let\'s restart your exam then!");
                startAnalExam();
            }
        } else {
            sendMessage("You are hopefully still wearing that butt plug daily!");
            sendMessage("Because your exam hasn\'t ended yet %SlaveName%");
        }
    } else {
        startAnalExam();
    }
}

function startAnalExam() {
    setDate('AnalExamStartDate');
    sendMessage("Your anal exam starts now");

    sendMessage('You are to wear your ' + getButtplugForTask().name + ' for 7 days in a row!');
    sendMessage("Your only time when you can remove it is to clean yourself or need to take a shit and...");
    sendMessage("Of course if I want to violate your ass in a different way %Lol%");

    if(getASMLimit() === LIMIT_ASKED_YES) {
        sendMessage(random("Remember ", "Don\'t forget ", "Keep in mind ") + "to properly lick your toys clean each day %SlaveName% %Lol% ");
    }
}