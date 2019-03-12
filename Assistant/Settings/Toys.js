{
    sendVirtualAssistantMessage('Toy Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Add new dildo', 0);

    let lobbyAnswer = createInput("Add new dildo");
    while (true) {
        if (lobbyAnswer.isLike("new dildo", "add dildo")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new dildo? How exciting! %Grin%');
            setupNewDildo();
            run('Assistant/Settings/Toys.js');
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            lobbyAnswer.loop();
        }
    }
}