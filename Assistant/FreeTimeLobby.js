{
    sendVirtualAssistantMessage('Free Time Menu:', 0);
    let options = ["Chores", "Fitness", "Report Exercise", 'Study', 'Return'];

    if(isFullTime()) {
        options.push('Illness');
        options.push('Holiday');
    }

    let lobbyAnswer = createAnswerInput(options);

    while (true) {
        if (lobbyAnswer.isLike("chore", "clean", "dust", "wipe", "wash")) {
            lobbyAnswer.clearOptions();
            run("Chore/ChoreMenu.js");
            run("Assistant/FreeTimeLobby.js");
            break;
        } else if (lobbyAnswer.isLike("fitness", "health")) {
            lobbyAnswer.clearOptions();
            run("Exercise/ExerciseBase.js");
            run("Assistant/FreeTimeLobby.js");
            break;
        } else if (lobbyAnswer.isLike("report", "exercise")) {
            lobbyAnswer.clearOptions();
            run("Exercise/reportexercise.js");
            run("Assistant/FreeTimeLobby.js");
            break;
        } else if (lobbyAnswer.isLike("work", "study")) {
            lobbyAnswer.clearOptions();
            run("WorkMode/GNMWorkMode.js");
            run("Assistant/FreeTimeLobby.js");
            break;
        } else if (lobbyAnswer.isLike("illness", "holiday", 'sickness')) {
            lobbyAnswer.clearOptions();

            if(isFullTime()) {
                run("Assistant/Holiday.js");
            }

            run("Assistant/FreeTimeLobby.js");
            break;
        }  else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("You have the following options %SlaveName%");
            sendVirtualAssistantMessage("- Fitness");
            sendVirtualAssistantMessage("- Exercise Reporting");
            sendVirtualAssistantMessage("- Chores");
            sendVirtualAssistantMessage("- Study");
            lobbyAnswer.loop();
        }
    }
}