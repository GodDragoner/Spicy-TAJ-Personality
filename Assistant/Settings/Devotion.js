{
    sendVirtualAssistantMessage('Your devotion determines how long your session will go %SlaveName%');
    sendVirtualAssistantMessage('Right now a session will last about ' + getVar(VARIABLE.DEVOTION) + ' minutes');
    sendVirtualAssistantMessage('Mind if %DomHonorific% %DomName% feels like it she will end the session early!');

    if(sendYesOrNoQuestion('Do you want to change this?', SENDER_ASSISTANT)) {
        sendVirtualAssistantMessage('Please tell me the new session length in minutes. This must be a number between 30 and 120 minutes %SlaveName%.', 0);
        let answer = createInput();

        while (true) {
            if (answer.isInteger()) {
                let length = answer.getInteger();

                if (length < 30) {
                    sendVirtualAssistantMessage('It must be at least 30 minutes %SlaveName%');
                    answer.loop();
                } else if (length > 120) {
                    sendVirtualAssistantMessage('%DomHonorific% %DomName% only has time so much time for you %SlaveName%');
                    sendVirtualAssistantMessage('You can\'t go higher than 120 minutes');
                    answer.loop();
                } else {
                    setVar(VARIABLE.DEVOTION, length);
                    sendVirtualAssistantMessage('I have notified your %DomHonorific% of your new time limit');
                    sendVirtualAssistantMessage('I am returning you to the settings menu now');
                    break;
                }
            } else {
                sendVirtualAssistantMessage("Please only enter a number such as 40 now.");
                answer.loop();
            }
        }

    } else {
        sendVirtualAssistantMessage('Okay then %SlaveName%');
        sendVirtualAssistantMessage('I am gonna return you to the settings menu then');
    }
}