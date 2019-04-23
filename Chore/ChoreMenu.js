{
    if(!isVar(VARIABLE_TOTAL_CHORES_DONE)) {
        runChoreIntroduction();
    }

    sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);

    let lobbyAnswer = createInput('Chore', 'Return');
    while (true) {
        if (lobbyAnswer.isLike('chore', 'yes', 'new')) {
            lobbyAnswer.clearOptions();

            //TODO: List with stuff todo from domme
            sendVirtualAssistantMessage(random('So','Okay','Well then','Hmm','Let\'s see') + ' %SlaveName%... %Grin%');
            sendVirtualAssistantMessage('What chore to give you next...','What chore should you do...','Let\'s see if we can find a chore for you...');

            //TODO: Spend time x doing chores (loop until time is over)
            setCurrentSender(SENDER_ASSISTANT);
            chooseChore();
            setCurrentSender(SENDER_TAJ);
            break;
        }else if(answer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);
            lobbyAnswer.loop();
        }
    }
}