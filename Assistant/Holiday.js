{
    let menu = createMenu('Break/Holiday');

    if (isFullTime()) {
        menu.registerOption("Vacation", ["vacation", "holiday"], function (answer) {
            setCurrentSender(SENDER_ASSISTANT);

            if(sendYesOrNoQuestion('Do you wish to go on vacation %SlaveName%?')) {
                let days = createIntegerInput('How many days would you like to go on vacation for?', 1, 1000, 'That\'s not a valid number of days', 'You can\'t leave for less than one day');

                if(sendYesOrNoQuestion('So you want to go on vacation for ' + days + ' days?')) {
                    setVar(VARIABLE.SLAVE_VACATION_UNTIL, setDate().addDay(days));
                    sendVirtualAssistantMessage('I noted that you are on vacation for the next ' + days + ' days');
                    sendVirtualAssistantMessage('Don\'t contact me or your %DomHonorific% again before you return');
                    sendVirtualAssistantMessage('Because I will consider any form of contact as you returning');
                    sendVirtualAssistantMessage('You may visit earlier but you must not return later');
                    sendVirtualAssistantMessage('So make sure to be back on time');
                } else {
                    sendVirtualAssistantMessage('Well then, don\'t bother me');
                }
            } else {
                sendVirtualAssistantMessage('Well then, don\'t bother me');
            }

            return false;
        });

        menu.registerOption("Illness", ["illness", "sickness"], function (answer) {
            setCurrentSender(SENDER_ASSISTANT);

            if(sendYesOrNoQuestion('Do you feel ill %SlaveName%?')) {
                let days = createIntegerInput('How many days do you think you\'ll be ill for?', 1, 1000, 'That\'s not a valid number of days', 'You can\'t be ill for less than one day');

                if(sendYesOrNoQuestion('So you want to take a break from your duties for ' + days + ' days?')) {
                    setVar(VARIABLE.SLAVE_LAST_ILL_UNTIL, setDate().addDay(days));
                    sendVirtualAssistantMessage('I noted that you are ill for the next ' + days + ' days');
                    sendVirtualAssistantMessage('You may hop online and contact us but we won\'t force you to');
                    sendVirtualAssistantMessage('Which means you are freed from your duties');
                    sendVirtualAssistantMessage('Just make sure to be at least back on track on time');
                } else {
                    sendVirtualAssistantMessage('Well then, don\'t bother me');
                }
            } else {
                sendVirtualAssistantMessage('Well then, don\'t bother me');
            }

            return false;
        });
    }

    menu.registerOption("Return", ["return"], function (answer) {
        return true;
    });

    menu.callMenu();
}