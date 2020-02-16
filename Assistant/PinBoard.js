{
    sendVirtualAssistantMessage('Pin Board Menu:', 0);
    sendVirtualAssistantMessage('1. List rules', 0);
    let lobbyAnswer;

    if(isVar(VARIABLE_ENEMA_INTRO)) {
        sendVirtualAssistantMessage('2. Enema', 0);
        lobbyAnswer = createInput('List rules', 'Enema', 'Return');
    } else {
        lobbyAnswer = createInput('List rules', 'Return');
    }

    while (true) {
        if (lobbyAnswer.isLike('rules')) {
            lobbyAnswer.clearOptions();

            let permanentRules = [];
            let temporaryRules = [];

            for(let x = 0; x < AVAILABLE_RULES.length; x++) {
                let rule = AVAILABLE_RULES[x];
                if(rule.isActive()) {
                    if(rule.isPermanent()) {
                        permanentRules.push(rule);
                    } else {
                        temporaryRules.push(rule);
                    }
                }
            }

            if(permanentRules.length > 0) {
                sendVirtualAssistantMessage('Okay, first let me read all the permanent rules to you:');

                for(let x = 0; x < permanentRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + permanentRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active permanent rules right now %SlaveName%');
            }

            if(temporaryRules.length > 0) {
                sendVirtualAssistantMessage('Okay, now let me read all the temporary rules to you:');

                for(let x = 0; x < temporaryRules.length; x++) {
                    sendVirtualAssistantMessage((x + 1) + '. ' + temporaryRules[x].getRulePrint())
                }
            } else {
                sendVirtualAssistantMessage('There are no active temporary rules right now %SlaveName%');
            }

            run("Assistant/PinBoard.js");
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if(lobbyAnswer.isLike('enema')) {
            if(!isVar(VARIABLE_ENEMA_INTRO)) {
                lobbyAnswer.loop();
            } else {
                let lines = getTodaysEnema();

                sendVirtualAssistantMessage('I am gonna read %DomHonorific%\'s note to you:');

                for(let x = 0; x < lines.size(); x++) {
                    sendPinnoteMessage(lines.get(x));
                }

                sendVirtualAssistantMessage('That\'s all %SlaveName%');
            }

            run("Assistant/PinBoard.js");
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Rules");

            if(isVar(VARIABLE_ENEMA_INTRO)) {
                sendVirtualAssistantMessage("- Enema");
            }

            lobbyAnswer.loop();
        }
    }
}