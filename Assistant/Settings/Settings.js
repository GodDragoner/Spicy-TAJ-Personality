{
    sendVirtualAssistantMessage('Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Toys', 0);
    sendVirtualAssistantMessage('2. Session length', 0);
    sendVirtualAssistantMessage('3. Setup Limits', 0);

    let lobbyAnswer = createInput("Toys", 'Session length', 'Setup Limits', 'Return');
    while (true) {
        if (lobbyAnswer.isLike("toy")) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Toys.js');
            break;
        } else if(lobbyAnswer.isLike('limit')) {
            lobbyAnswer.clearOptions();
            setupLimits();
            break;
        } else if(lobbyAnswer.isLike('session length')) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Devotion.js');
            break;
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Toys");
            sendVirtualAssistantMessage("- Session length");
            sendVirtualAssistantMessage("- Setup Limits", 0);
            lobbyAnswer.loop();
        }
    }
}