{
    //Check for CBT Limit and whether the user is wearing a full sized belt
    if (!CBT_LIMIT.isAllowed() || isFullSizedChastityOn()) {
        runPunishment(PUNISHMENT_CURRENT_LEVEL);
    } else {
        if (tryRunPunishmentFetchId(MODULE.CBT)) {
            let mode = randomInteger(0, 1);

            if (mode === 0) {
                //QUALITY: More real interconnected CBT punishment
                smallCBTPunishment(true, !isInChastity(), (PUNISHMENT_CURRENT_LEVEL.id + 1) * 2);
            } else if (mode === 1) {
                sendMessageBasedOnSender('I think it\'s time to punish %MyYour% %balls%');
                sendMessageBasedOnSender('Today I have something interesting in mind');

                sendMessageBasedOnSender('First of all I want you to find a random porn involving penetrative sex online');

                if (SISSY_LIMIT.isActive()) {
                    sendMessageBasedOnSender('Make it something involving sissies, men or traps');
                }

                if (RULE_ONLY_CENSORED_PORN.isActive()) {
                    sendMessageBasedOnSender('It must be censored or involve guys only');
                    sendMessageBasedOnSender('You know the drill %Grin%');
                }

                let maxMinutes = (PUNISHMENT_CURRENT_LEVEL.id + 1) * 4;

                sendMessageBasedOnSender('The video should be at least ' + maxMinutes + ' minutes long or find multiple ones that add up to a total of ' + maxMinutes + ' minutes at least');
                sendMessageBasedOnSender('Tell me once you are done %Grin%');
                waitForDone(10000);

                sendMessageBasedOnSender('Now once we start you will start playing that video');

                sendMessageBasedOnSender('For every hand stroke you will lightly tap your balls once');
                sendMessageBasedOnSender('For every thrust you will slap your balls once');
                sendMessageBasedOnSender('For every blowjob stroke you will flick your balls once');
                sendMessageBasedOnSender('And for every deepthroat you will punch your balls once %Grin%');

                sendMessageBasedOnSender('Which means this is gonna probably hurt a lot %Lol%');
                sendMessageBasedOnSender('At some point you will hear a bell. Once you hear the bell you can return to me and stop the video %EmoteHappy%');
                sendMessageBasedOnSender('Maybe you get lucky and picked a video with a slow start %Grin%');
                sendMessageBasedOnSender('Or maybe you\'ll end up bruising these balls %Lol%');
                sendMessageBasedOnSender('Now play that video and get to work %Grin%');
                sendMessageBasedOnSender('And return with the sound of my bell');

                //16 - 20 Minutes on extreme level
                sleep(randomInteger(4 + (PUNISHMENT_CURRENT_LEVEL.id + 1) * 3, maxMinutes * 60));
                playBellSound();

                sendMessageBasedOnSender('You can return to me %SlaveName%');
                sendMessageBasedOnSender('Tell me when you are ready to continue %Grin%');
                waitForDone();
            }


            setPunishmentTransitionHandler({
                handleTransition: function (nextCategory, nextLevel) {
                    //First punishment
                    if (PUNISHMENTS_DONE === 1) {
                        sendMessage('Starting off with pain might make it easier for you later %Grin%');
                    } else {
                        sendMessage('I hope %MyYour% %Balls% and %Cock% do now understand who they belong to and internalized their lesson %Grin%');
                    }
                }
            });
        }
    }
}