{
    sendVirtualAssistantMessage('Shop Menu:', 0);
    let options = ['Return'];

    if(!isFullTime()) {
        options.push("Fulltime Conversion");
    }

    let lobbyAnswer = createAnswerInput(options);

    while (true) {
        if (lobbyAnswer.isLike("fulltime", "conversion")) {
            lobbyAnswer.clearOptions();

            setCurrentSender(SENDER_ASSISTANT);

            let goldCost = 2000;

            if (!isFullTime()) {
                sendVirtualAssistantMessage('Converting to being a fulltime slave will cost you ' + goldCost + ' gold');

                if(getGold() < goldCost) {
                    sendVirtualAssistantMessage('Sadly you don\'t have enough to pay for this yet');
                    sendVirtualAssistantMessage('Which means you gotta keep on saving for it %Grin%');
                } else {
                    sendVirtualAssistantMessage('Becoming a fulltime slave for %DomHonorific% comes with additional tasks and time spent serving her');
                    sendVirtualAssistantMessage('Do not underestimate the time she will make you do things for her as her fulltime slave');
                    sendVirtualAssistantMessage('She won\'t occupy your whole day but you should expect up to 2 additional hours of daily time under her control');

                    if (sendYesOrNoQuestion('Are you still looking to become a fulltime slave of %DomHonorific%?', SENDER_ASSISTANT)) {
                        sendVirtualAssistantMessage('Contacting %DomHonorific% %DomName%...');
                        sleep(5);
                        sendVirtualAssistantMessage('...');
                        sleep(5);
                        addGold(-goldCost);
                        setFullTime();
                        sendVirtualAssistantMessage('Good news!');
                        sendVirtualAssistantMessage('She accepted your proposal and you will now serve your %DomHonorific% as her fulltime slave');
                        sendVirtualAssistantMessage('You will notice some changes down the line but there are a few things that she needs to clarify first');
                        perfomFullTimeTransition();

                        sendVirtualAssistantMessage('Now I will leave you excited with what\'s about to come %Grin%');
                        sendVirtualAssistantMessage('However do not take your new duties lightly or you will suffer the consequences!');
                    } else {
                        sendVirtualAssistantMessage('Well then, don\'t bother me');
                    }
                }
            } else {
                sendVirtualAssistantMessage('You are already a fulltime slave so no need to change anything about that %Grin%');
            }

            run("Assistant/ShopLobby.js");
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");

            if(!isFullTime()) {
                sendVirtualAssistantMessage("- Full Time ");
            }

            sendVirtualAssistantMessage("- Return");
            lobbyAnswer.loop();
        }
    }
}