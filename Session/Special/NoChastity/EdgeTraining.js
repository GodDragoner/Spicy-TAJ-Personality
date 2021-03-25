if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.STROKING)) {
    if (isStroking()) {
        sendMessage("Stop stroking %SlaveName%", 0);
        stopStroking();
    }

    if (getVar(VARIABLE.EDGE_TRAININGS_DONE, 0) === 0) {
        startEdging();
        sendMessage("%LetEdgeFade%");

        sendMessage("Did you almost blow your load there?");

        sendMessage("We're only just getting started, so you <i>should</i> be alright...");
        sendMessage("Must be hard for you though when you get to %JerkOff% to someone as hot as me");
        sendMessage("I wonder, %SlaveName%...");

        let answer = sendInput("Do you consider yourself to be a premature ejaculator?");
        while (true) {
            if (answer.isLike("yes")) {
                sendMessage('I though you might be %Grin%');
                setVar(VARIABLE.SUB_PREMATURE_EJACULATE, true);
                break;
            } else if (answer.isLike("no")) {
                sendMessage('I guess a lifetime of masturbation is paying off then %Grin%');
                setVar(VARIABLE.SUB_PREMATURE_EJACULATE, false);
                break;
            } else if (answer.isLike("don't understand", "not understand", "explain", "what's that", "do you mean", "what is")) {
                sendMessage('Is it hard to keep yourself from cumming when you\'re %JerkingOff% or having sex?', 0);
                answer.loop();
            } else {
                sendMessage('"%YesOrNo%"', 0);
                answer.loop();
            }
        }

        if (getVar(VARIABLE.SUB_PREMATURE_EJACULATE, false)) {
            sendMessage("Seriously though, that is a problem isn't it...");
            sendMessage("You should learn to control yourself when having sex, %SlaveName%");

            if (getVar(VARIABLE.SUB_IS_VIRGIN, false)) {
                sendMessage('I mean, if you <i>ever</i> get to have sex...');
            }

            sendMessage("Because the truth is, to please a girl");
            sendMessage("You have to be able to last longer that a minute or two");
            sendMessage("Or she's not going to want to stick around");
        } else {
            sendMessage("Maybe I should just let you have some more of that then %EmoteHappy");
        }

        sendMessage("Edging is a big part of how you serve me");
        sendMessage("So that's what I want to focus on %GeneralTime%");

        startEdging();

        sendMessage("I'm going to train you to be a good edge slut for me, %SlaveName%");

        if (getVar(VARIABLE.SUB_PREMATURE_EJACULATE, false)) {
            sendMessage("I know this is not going to be easy, given your premature ejaculation problem");
            sendMessage("But maybe this will help you deal with that %Smile%");
        }

        sendMessage("I think you'll understand that this training involves you edging a lot");
        sendMessage("You're going to edge so much for me it's going to feel like torture");
        sendMessage("And yet you're going to beg me for more %EmoteHappy%");

        sendMessage('You\'re going to thank me for the privilege of being my mindless little edge slave');

        if (!isKneeling()) {
            sendMessage("Before we continue, let's get you in the proper submissive position");
            startKneeling();
            sendMessage('And now get down on all fours');
            startStroking(getInitialStrokingBPM());
        }

        //The first intro
        run('Session/Special/NoChastity/EdgeTraining/Start/Intro1.js');
    } else {
        let edgeTrainingIntroHistory = createFileHistory('edgetrainingintro', ['Session/Special/NoChastity/EdgeTraining/Start']);
        let file = edgeTrainingIntroHistory.getRandomAvailableFile();
        edgeTrainingIntroHistory.addHistoryRun(getFileId(file));
        run(getRelativePersonalityFilePath(file));
    }

    incrementVar(VARIABLE.EDGE_TRAININGS_DONE, 1, 0);
}

function askSubForBegEdge() {
    setTempVar(VARIABLE.RESPONSE_BEG_EDGE_COUNT, 0);
    setTempVar(VARIABLE.BEG_DOMME_TO_EDGE, setDate());

    sendMessage("Now beg me to let you edge, %SlaveName%");
    sendMessage("Come on, beg me, %SlaveName%");
    //Reset time
    setTempVar(VARIABLE.BEG_DOMME_TO_EDGE, setDate());
    sendMessage("Beg me like you mean it... because you do %Lol%");

    if (getVar(VARIABLE.RESPONSE_BEG_EDGE_COUNT) > 2) {
        sendMessage('That\'s enough, %SlaveName% %EmoteHappy%');
        changeMeritMedium(false);
    } else {
        sendMessage('You should do better than that, %SlaveName%');
        changeMeritMedium(true);
        sendMessage('When I want you to beg, you should really beg for it');
    }
}