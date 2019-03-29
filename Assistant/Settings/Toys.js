{
    sendVirtualAssistantMessage('Toy Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Add new dildo', 0);
    sendVirtualAssistantMessage('1. Add new buttplug', 0);

    let lobbyAnswer = createInput("Add new dildo", 'Add new buttplug');
    while (true) {
        if (lobbyAnswer.isLike("new dildo", "add dildo")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new dildo? How exciting! %Grin%');
            setupNewDildo();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike("new buttplug", "add buttplug")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new buttplug? How exciting! %Grin%');
            setupNewButtplug();
            run('Assistant/Settings/Toys.js');
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            sendVirtualAssistantMessage("- Add new buttplug");
            lobbyAnswer.loop();
        }
    }
}