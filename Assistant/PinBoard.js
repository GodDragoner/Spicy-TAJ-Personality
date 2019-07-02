{
    sendVirtualAssistantMessage('Pin Board Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. List rules', 0);

    let lobbyAnswer = createInput('List rules', 'Return');
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
            break;
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            sendVirtualAssistantMessage("- Add new buttplug");
            sendVirtualAssistantMessage("- Add new chastity cage");
            lobbyAnswer.loop();
        }
    }
}