{
    sendVirtualAssistantMessage('Toy Settings Menu:', 0);
    sendVirtualAssistantMessage('Options:', 0);
    sendVirtualAssistantMessage('1. Add new dildo', 0);
    sendVirtualAssistantMessage('2. Add new buttplug', 0);
    sendVirtualAssistantMessage('3. Add new chastity cage', 0);

    let lobbyAnswer = createInput("Add new dildo", 'Add new buttplug', 'Add new chastity cage', 'Setup Other Toys', 'Return');
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
        } else if (lobbyAnswer.isLike("new cage", "add cage", "add chastity", "new chastity")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new chastity cage? How exciting! %Grin%');
            setupNewCage();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if (lobbyAnswer.isLike('other', 'setup toys')) {
            setupToys(true);
            run('Assistant/Settings/Toys.js');
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            sendVirtualAssistantMessage("- Add new buttplug");
            sendVirtualAssistantMessage("- Add new chastity cage");
            sendVirtualAssistantMessage("- Setup other toys");
            lobbyAnswer.loop();
        }
    }
}