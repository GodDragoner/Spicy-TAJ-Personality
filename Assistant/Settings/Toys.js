{
    sendVirtualAssistantMessage('Toy Settings Menu:', 0);

    let lobbyAnswer = createInput("Add new dildo", 'Add new buttplug', 'Add new chastity cage', 'Add new high heel', 'E-Stim', 'Setup Other Toys', 'Return');
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
        } else if (lobbyAnswer.isLike("new high", "add high", "add heel", "new heel")) {
            lobbyAnswer.clearOptions();
            sendVirtualAssistantMessage('Bought a new high heel? How exciting! %Grin%');
            setupNewHighHeel();
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else if (lobbyAnswer.isLike('other', 'setup toys')) {
            lobbyAnswer.clearOptions();
            setupToys(true);
            run('Assistant/Settings/Toys.js');
            break;
        } else if (lobbyAnswer.isLike('Stim')) {
            lobbyAnswer.clearOptions();
            setupEStimToy(null);
            run('Assistant/Settings/Toys.js');
            break;
        }  else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Add new dildo");
            sendVirtualAssistantMessage("- Add new buttplug");
            sendVirtualAssistantMessage("- Add new chastity cage");
            sendVirtualAssistantMessage("- Add new high heel");
            sendVirtualAssistantMessage("- E-Stim");
            sendVirtualAssistantMessage("- Setup other toys");
            lobbyAnswer.loop();
        }
    }
}