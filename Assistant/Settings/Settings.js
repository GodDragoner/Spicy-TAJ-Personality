{
    sendVirtualAssistantMessage('Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Toys', 0);

    let lobbyAnswer = createInput("Toys");
    while (true) {
        if (lobbyAnswer.isLike("toy")) {
            lobbyAnswer.clearOptions();
            run('Assistant/Settings/Toys.js');
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Toys");
            lobbyAnswer.loop();
        }
    }
}