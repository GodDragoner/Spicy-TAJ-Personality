{
    if (hasDildoToy()) {
        if (getVar(VARIABLE.SESSION_COUNTER, 0) > 5 && getVar(VARIABLE.BLOWJOB_LEVEL) === 1 && !getVar(VARIABLE.BLOWJOB_TRAINING, false) && HUMILIATION_LIMIT.isAllowed()) {
            sendMessage('There is one last thing I want to ask you today %SlaveName%');
            sendMessage('Since I forgot about it in the past sessions %Grin%');
            sendMessage("I don't know whether you have any experience when it comes to blowjobs");
            sendMessage("Meaning fucking your throat and caressing cocks with your mouth");
            sendMessage("Are you experienced and capable of holding deepthroats?");

            if (!CUCKOLD_LIMIT.isHardLimit()) {
                sendMessage("Maybe even taking a huge cock from my lover down your throat?");
            }

            sendMessage("You should answer this truthfully for your own good %SlaveName%", 0);

            let answer = createInput();

            //TODO: Bind this to sissy stuff etc.
            while (true) {
                if (answer.isLike("yes")) {
                    setVar(VARIABLE.BLOWJOB_LEVEL, 30);
                    sendMessage("I hope you are ready for what's about to come then %Grin%");
                    sendMessage('Because you are gonna find your throat filled a lot with me');
                    break;
                } else if (answer.isLike("no")) {
                    setVar(VARIABLE.BLOWJOB_LEVEL, 1);
                    setVar(VARIABLE.BLOWJOB_TRAINING, true);
                    sendMessage('Don\'t worry under my guidance you will be holding deepthroats like a pro really quickly %Grin%');
                    break;
                } else {
                    sendMessage(YES_OR_NO);
                    answer.loop();
                }
            }
        }
    }
}