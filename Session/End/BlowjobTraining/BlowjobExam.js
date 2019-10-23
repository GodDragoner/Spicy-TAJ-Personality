{
    if (isVar('BlowjobExamStartDate')) {
        if (getVar('BlowjobExamStartDate').addDay(7).hasPassed()) {
            sendMessage("The time has come %SlaveName% ");
            delVar("BlowjobExamStartDate");

            if(sendYesOrNoQuestion("Have you been doing your daily 30 minute blowjob task for the last 7 days?")) {
                sendMessage("FANTASTIC!");
                sendMessage("You\'ve completed your exam!");
                changeMeritHigh(false);
                sendMessage("That\'s really great!");
                sendMessage("This means that you\'re training is over!");
                sendMessage("Even though I said you won\'t be rewarded for doing your tasks...");
                sendMessage("The exam is something different");
                sendMessage("I want you to celebrate it");
                sendMessage("After this session you are allowed to orgasm however you like!");
                sendMessage("You will be allowed to remove your %ChastityCage% too %EmoteHappy%");
                sendMessage("But...");
                sendMessage("Whenever you are stimulating yourself you must be holding a deepthroat %Grin%");
                sendMessage('And you will only have 10 minutes to do so');
                sendMessage('If you run out of time, it\'s no orgasm for you');

                if(isVar(VARIABLE_TRAINING_ORGASM_TODAY)) {
                    sendMessage('I know I am already allowing you an orgasm for another training today');
                    sendMessage('Which means you are free to schedule this orgasm on top of the other one anywhere in the next 48 hours');
                } else {
                    setTempVar(VARIABLE_TRAINING_ORGASM_TODAY, true);
                }

                sendMessage("Enjoy %Lol%");

                registerOrgasm();
                delVar("BlowjobExamStartDate");
                setVar(VARIABLE_BLOWJOB_TRAINING, false);
            } else {
                sendMessage("Awww that's too bad %EmoteSad%");
                sendMessage("That disappoints me %SlaveName%");
                changeMeritMedium(true);
                sendMessage("Whatever...");
                sendMessage("Let\'s restart your exam then!");
                startBlowjobExam();
            }
        } else {
            sendMessage("You are hopefully still doing your daily blowjob task!");
            sendMessage("Because your exam hasn\'t ended yet %SlaveName%");
        }
    } else {
        startBlowjobExam();
    }
}

function startBlowjobExam() {
    setDate('BlowjobExamStartDate');
    sendMessage("Your blowjob exam starts now");
    sendMessage("You are to fuck your throat for at least 30 minutes for 7 days in a row!");
    sendMessage("You will at least do one deepthroat every minute and hold it at least 20 seconds");
    sendMessage("You can feel free to mimic a deepthroat video if you want to instead but you still must do it for 30 minutes per day");
    sendMessage('If you aren\'t mimicing make sure to swap positions at least every 10 minutes');

    sendMessage(random("Remember ", "Don\'t forget ", "Keep in mind ") + "to never swallow any spit %SlaveName% %Lol%");
}