{
    if (isInChastity()) {
        sendVirtualAssistantMessage('So I guess you want me to unlock you?', 0);

        if (createYesOrNoQuestion()) {
            sendVirtualAssistantMessage('Well then...');
            sendVirtualAssistantMessage('So what is the reason for this?', 0);

            let answer = createInput('Cleaning', 'Pain', 'Emergency', 'Public', 'Sport', 'Task', 'Other');

            while (true) {
                if (answer.isLike('clean')) {
                    if (isVar(VARIABLE.LAST_CHASTITY_CLEAN) && !getDate(VARIABLE.LAST_CHASTITY_CLEAN).addHour(6).hasPassed()) {
                        answer.clearOptions();

                        sendVirtualAssistantMessage('You have already cleaned your %ChastityCage% in the last 6 hours');
                        sendVirtualAssistantMessage('Which means I am not gonna allow you to take it off');
                        sendVirtualAssistantMessage('You will have to clean yourself with your %ChastityCage% on %Grin%');
                    } else {
                        answer.clearOptions();
                        setCurrentSender(SENDER_ASSISTANT);

                        sendVirtualAssistantMessage('Well I won\'t deny you the possibility to clean yourself %SlaveName%');
                        unlockChastityKey();

                        setCurrentSender(SENDER_TAJ);

                        sendVirtualAssistantMessage('Now go ahead and clean yourself and then return to me');
                        sendVirtualAssistantMessage('I will wait for you');

                        setDate(VARIABLE.LAST_CHASTITY_CLEAN);
                        setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                        waitForDoneVirtualAssistant(10000);
                        sendVirtualAssistantMessage('You\'re back!');

                        onChastityKeyReturn();
                    }
                    answer.clearOptions();
                    break;
                } else if (answer.isLike('pain')) {
                    answer.clearOptions();

                    sendVirtualAssistantMessage('Well we want it to hurt sometimes');
                    sendVirtualAssistantMessage('I can free you but you will have to suffer the consequences');
                    sendVirtualAssistantMessage('Does it really hurt too much and do you need to free yourself?', 0);
                    if (createYesOrNoQuestion()) {
                        sendVirtualAssistantMessage('Okay then %SlaveName%');
                        unlockChastityKey();

                        sendVirtualAssistantMessage('Now do whatever you want to do...');
                        setVar(VARIABLE.CHASTITY_ON, false);
                        sendVirtualAssistantMessage('Mind this has consequences!');
                        addPunishmentPoints(250, PUNISHMENT_REASON.BREAKING_CHASTITY);
                        setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                    } else {
                        sendVirtualAssistantMessage('%Good%');
                        sendVirtualAssistantMessage('You wouldn\'t want to suffer the consequences anyway %Grin%');
                    }
                    break;
                } else if (answer.isLike('emergency')) {
                    answer.clearOptions();

                    sendVirtualAssistantMessage('Well then I am gonna trust you on this one');
                    sendVirtualAssistantMessage('Do not abuse my trust %SlaveName%!');
                    unlockChastityKey();

                    sendVirtualAssistantMessage('Now do whatever you want to do...');
                    setVar(VARIABLE.CHASTITY_ON, false);
                    setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                    break;
                } else if (answer.isLike('other')) {
                    answer.clearOptions();

                    sendVirtualAssistantMessage('I can free you but you will have to suffer the consequences');
                    sendVirtualAssistantMessage('Do you really need to free yourself?', 0);
                    if (createYesOrNoQuestion()) {
                        sendVirtualAssistantMessage('Okay then %SlaveName%');
                        unlockChastityKey();

                        sendVirtualAssistantMessage('Now do whatever you want to do...');
                        setVar(VARIABLE.CHASTITY_ON, false);
                        sendVirtualAssistantMessage('Mind this has consequences!');
                        addPunishmentPoints(250, PUNISHMENT_REASON.BREAKING_CHASTITY);
                        setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                    } else {
                        sendVirtualAssistantMessage('%Good%');
                        sendVirtualAssistantMessage('You wouldn\'t want to suffer the consequences anyway %Grin%');
                    }

                    break;
                } else if (answer.isLike('sport')) {
                    answer.clearOptions();

                    sendVirtualAssistantMessage('%DomHonorific% %DomName% is fine with you taking it off for sports');
                    sendVirtualAssistantMessage('So I will fulfil this wish of yours');
                    sendVirtualAssistantMessage('But don\'t you dare cheat or lie to me');

                    unlockChastityKey();

                    sendVirtualAssistantMessage('Now have fun with your sport activity and make sure to come back to me afterwards');
                    setVar(VARIABLE.CHASTITY_ON, false);
                    setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                    break;
                } else if (answer.isLike('public')) {
                    answer.clearOptions();

                    if (sendYesOrNoQuestion('Are you afraid of it showing in public %SlaveName%?', SENDER_ASSISTANT)) {
                        sendVirtualAssistantMessage('Well you shouldn\'t be');

                        sendVirtualAssistantMessage('I can free you but this will not go unpunished');
                        sendVirtualAssistantMessage('Do you really want this?', 0);

                        //QUALITY: Delve deeper into this issue
                        if (createYesOrNoQuestion()) {
                            setVar(VARIABLE.AFRAID_OF_CHASTITY, true);
                            sendVirtualAssistantMessage('Okay then %SlaveName%');
                            unlockChastityKey();

                            sendVirtualAssistantMessage('Now do whatever you want to do...');
                            setVar(VARIABLE.CHASTITY_ON, false);
                            sendVirtualAssistantMessage('Mind this has consequences!');
                            addPunishmentPoints(250, PUNISHMENT_REASON.BREAKING_CHASTITY);
                            setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                            break;
                        } else {
                            sendVirtualAssistantMessage('%Good%');
                            sendVirtualAssistantMessage('You wouldn\'t want to suffer the consequences anyway %Grin%');
                        }
                    } else {
                        sendVirtualAssistantMessage('Well then don\'t bother me %Slave%');
                    }

                    break;
                } else if (answer.isLike('task')) {
                    if (isVar(VARIABLE.LAST_CHASTITY_OFF_TASK) && !getDate(VARIABLE.LAST_CHASTITY_OFF_TASK).addHour(3).hasPassed()) {
                        answer.clearOptions();

                        sendVirtualAssistantMessage('You have already done a task in the last 3 hours involving removing your chastity cage');
                        sendVirtualAssistantMessage('Which means I am not gonna allow you to take it off');
                        sendVirtualAssistantMessage('Plan ahead %SlaveName% %Grin%');
                    } else if (isVar(VARIABLE.CHASTITY_OFF_TASK_ALLOWED_COUNTER) && getVar(VARIABLE.CHASTITY_OFF_TASK_ALLOWED_COUNTER) <= 0) {
                        answer.clearOptions();

                        sendVirtualAssistantMessage('You have already used up all your chances to remove your chastity cage for a task today');
                        sendVirtualAssistantMessage('Which means I am not gonna allow you to take it off right now');
                        sendVirtualAssistantMessage('Don\'t try to trick me %SlaveName%');
                    } else {
                        answer.clearOptions();
                        setCurrentSender(SENDER_ASSISTANT);

                        if (sendYesOrNoQuestion('Are you looking to remove the cage to do a task given by your %DomHonorific% %SlaveName%?', SENDER_ASSISTANT)) {

                            sendVirtualAssistantMessage('Well since your %DomHonorific% granted you access to that poor little cock');
                            sendVirtualAssistantMessage('I won\'t be the one to stop you %Grin%');
                            unlockChastityKey();

                            setCurrentSender(SENDER_TAJ);

                            sendVirtualAssistantMessage('Now go ahead and do your task and then return to me');
                            sendVirtualAssistantMessage('I will wait for you');

                            setDate(VARIABLE.LAST_CHASTITY_OFF_TASK);
                            incrementVar(VARIABLE.CHASTITY_OFF_TASK_ALLOWED_COUNTER, -1, 0);
                            setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                            waitForDoneVirtualAssistant(10000);
                            sendVirtualAssistantMessage('You\'re back!');

                            onChastityKeyReturn();
                        } else {
                            sendVirtualAssistantMessage('Well then, don\'t bother me');
                        }
                    }

                    break;
                } else {
                    sendVirtualAssistantMessage('Cleaning, pain, emergency or other?', 0);
                    answer.loop();
                }
            }
        } else {
            sendVirtualAssistantMessage('Well then you can\'t do anything different here right now');
        }
    } else {
        sendVirtualAssistantMessage('You aren\'t even in chastity %SlaveName%. I don\'t know what you could be looking for')
    }

}