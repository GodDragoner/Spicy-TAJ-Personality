{
    sendVirtualAssistantMessage('Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Toys', 0);
    sendVirtualAssistantMessage('2. Setup Limits', 0);

    let lobbyAnswer = createInput("Toys", 'Setup Limits', 'Return');
    while (true) {
        if (lobbyAnswer.isLike("toy")) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Toys.js');
            break;
        } else if(lobbyAnswer.isLike('limit')) {
            lobbyAnswer.clearOptions();
            setupLimits();
            break;
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Toys");
            sendVirtualAssistantMessage("- Setup Limits");
            lobbyAnswer.loop();
        }
    }
}