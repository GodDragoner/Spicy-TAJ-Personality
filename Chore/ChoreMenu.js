{
    if (!isVar(VARIABLE.TOTAL_CHORES_DONE)) {
        runChoreIntroduction();
    }

    sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);

    let lobbyAnswer = createInput('Chore', 'Info', 'Return');
    while (true) {
        if (lobbyAnswer.isLike('chore', 'yes', 'new')) {
            lobbyAnswer.clearOptions();

            sendVirtualAssistantMessage('Tell me %SlaveName%');
            sendVirtualAssistantMessage('How much free time do you have in minutes or should I choose for you? %Grin%', 0);

            let minutesForChores = 0;
            let answer = createInput();

            while (true) {
                if (answer.isLike('you', 'choose', 'me')) {
                    minutesForChores = getTimeForChores();
                    break;
                } else if (answer.isInteger()) {
                    minutesForChores = answer.getInt();

                    if (minutesForChores >= 10) {
                        break;
                    } else {
                        sendVirtualAssistantMessage('You need to do chores for at least 10 minutes. Otherwise it won\'t make any sense to start at all...', 0);
                        answer.loop();
                    }
                } else {
                    sendVirtualAssistantMessage('Either give me something like "10" (minutes) or tell me to choose %SlaveName%', 0);
                    answer.loop();
                }
            }

            let attachedLingerie = false;

            if (sendYesOrNoQuestion('Are all your rooms kink safe today, i.e. no one can look into your windows (shutters) and no one else is home?', SENDER_ASSISTANT)) {
                setTempVar(VARIABLE.CHORE_KINK_SAFE_TODAY, true);
                sendVirtualAssistantMessage('That\'s great %Grin%');

                if (SISSY_LIMIT.isAllowed() && isChance(100 + MOOD.SISSY.getChanceBooster()) && hasSomeLingerie() && isLingeriePlayAllowed()) {
                    if(!hasOutfitOn()) {
                        sendMessageBasedOnSender('Let\'s dress you up a little');

                        attachedLingerie = putOnLingerie();
                    } else {
                        sendMessageBasedOnSender('Seems like you are already fittingly dressed today, so no extra dress up %Grin%');
                    }
                }
            } else {
                setTempVar(VARIABLE.CHORE_KINK_SAFE_TODAY, false);
                sendVirtualAssistantMessage('Well you can work better with natural light anyway %Grin%');
            }

            //TODO: List with stuff todo from domme
            sendVirtualAssistantMessage(random('So', 'Okay', 'Well then', 'Hmm', 'Let\'s see') + ' %SlaveName%... %Grin%');

            //5 minute buffer so we won't start any chore if only 5 minutes are left
            let date = setDate().addMinute(Math.max(1, minutesForChores - 5));

            while (!date.hasPassed()) {
                sendVirtualAssistantMessage(random('What chore to give you next...', 'What chore should you do...', 'Let\'s see if we can find a chore for you...'));

                setCurrentSender(SENDER_ASSISTANT);
                chooseChore();
                setCurrentSender(SENDER_TAJ);
            }

            if(attachedLingerie) {
                clearOutfitOn();
                sendVirtualAssistantMessage('You may undress from your outfit %EmoteHappy%');
            }

            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if (lobbyAnswer.isLike('info')) {
            //lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('You have spent ' + getVar(VARIABLE.WEEKLY_CHORES_TIME) + ' minutes this week doing ' + getVar(VARIABLE.WEEKLY_CHORES_DONE) + ' chores');
            sendVirtualAssistantMessage('In total you have spent ' + getVar(VARIABLE.TOTAL_CHORES_TIME) + ' minutes doing a total of ' + getVar(VARIABLE.TOTAL_CHORES_DONE) + ' chores');
            sendVirtualAssistantMessage('Anything else I can do for you?', 0);
            lobbyAnswer.loop();
        } else {
            sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);
            lobbyAnswer.loop();
        }
    }
}