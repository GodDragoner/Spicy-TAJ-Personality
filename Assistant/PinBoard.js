{
    sendVirtualAssistantMessage('Pin Board Menu:', 0);
    sendVirtualAssistantMessage('- List rules', 0, true);
    let options = ['List rules', 'Return'];

    let lobbyAnswer;

    if (isVar(VARIABLE.ENEMA_INTRO)) {
        sendVirtualAssistantMessage('- Enema', 0, true);
        options.push('Enema');
    }

    if (RULE_FOLLOW_DAILY_TASKS.isActive()) {
        sendVirtualAssistantMessage('- Daily Tasks', 0, true);
        options.push('Daily Tasks');
    }

    if (RULE_EVENING_RITUAL.isActive()) {
        sendVirtualAssistantMessage('- Evening Ritual', 0, true);
        options.push('Evening Ritual');
    }


    lobbyAnswer = createAnswerInput(options);

    while (true) {
        if (lobbyAnswer.isLike('rules')) {
            lobbyAnswer.clearOptions();

            let permanentRules = [];
            let temporaryRules = [];

            for (let x = 0; x < AVAILABLE_RULES.length; x++) {
                let rule = AVAILABLE_RULES[x];
                if (rule.isActive()) {
                    if (rule.isPermanent()) {
                        permanentRules.push(rule);
                    } else {
                        temporaryRules.push(rule);
                    }
                }
            }

            if (permanentRules.length > 0) {
                sendVirtualAssistantMessage('Okay, first let me read all the permanent rules to you:');

                for (let x = 0; x < permanentRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + permanentRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active permanent rules right now %SlaveName%');
            }

            if (temporaryRules.length > 0) {
                sendVirtualAssistantMessage('Okay, now let me read all the temporary rules to you:');

                for (let x = 0; x < temporaryRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + temporaryRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active temporary rules right now %SlaveName%');
            }

            run("Assistant/PinBoard.js");
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if (lobbyAnswer.isLike('enema')) {
            lobbyAnswer.clearOptions();

            if (!isVar(VARIABLE.ENEMA_INTRO)) {
                lobbyAnswer.loop();
            } else {
                let lines = getTodaysEnema();

                sendVirtualAssistantMessage('I am gonna read %DomHonorific%\'s note to you:');

                for (let x = 0; x < lines.size(); x++) {
                    sendPinnoteMessage(lines.get(x));
                }

                sendVirtualAssistantMessage('That\'s all %SlaveName%');
            }

            run("Assistant/PinBoard.js");
            break;
        } else if (lobbyAnswer.isLike('daily')) {
            lobbyAnswer.clearOptions();

            if (!isFullTime() || !RULE_FOLLOW_DAILY_TASKS.isActive()) {
                lobbyAnswer.loop();
            } else {
                let lines = getTodaysSlaveTask();

                sendVirtualAssistantMessage('I am gonna read %DomHonorific%\'s note to you:');

                for (let x = 0; x < lines.size(); x++) {
                    sendPinnoteMessage(lines.get(x));
                }

                sendVirtualAssistantMessage('That\'s all %SlaveName%');
            }

            run("Assistant/PinBoard.js");
            break;
        } else if (lobbyAnswer.isLike('evening', 'ritual')) {
            lobbyAnswer.clearOptions();

            // TODO: Unify with rules (code almost similar)
            let permanentRules = [];
            let temporaryRules = [];

            for (let x = 0; x < AVAILABLE_EVENING_ROUTINES.length; x++) {
                let rule = AVAILABLE_EVENING_ROUTINES[x];
                if (rule.isActive()) {
                    if (rule.isPermanent()) {
                        permanentRules.push(rule);
                    } else {
                        temporaryRules.push(rule);
                    }
                }
            }

            if (permanentRules.length > 0) {
                sendVirtualAssistantMessage('Okay, first let me read all the permanent ritual tasks to you:');

                for (let x = 0; x < permanentRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + permanentRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active ritual tasks right now %SlaveName%');
            }

            if (temporaryRules.length > 0) {
                sendVirtualAssistantMessage('Okay, now let me read all the temporary ritual tasks to you:');

                for (let x = 0; x < temporaryRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + temporaryRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active temporary ritual tasks right now %SlaveName%');
            }

            run("Assistant/PinBoard.js");
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Rules");

            if (isVar(VARIABLE.ENEMA_INTRO)) {
                sendVirtualAssistantMessage("- Enema");
            }

            lobbyAnswer.loop();
        }
    }
}