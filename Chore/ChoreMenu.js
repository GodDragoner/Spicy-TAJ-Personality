{
    if(!isVar(VARIABLE_TOTAL_CHORES_DONE)) {
        runChoreIntroduction();
    }

 
    setVar("doingchores",true);
 
    while (getVar("doingchores")==true) {
		   sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);
		   let lobbyAnswer = createInput('Chore', 'Info', 'Return');
        if (lobbyAnswer.isLike('chore', 'yes', 'new')) {
            lobbyAnswer.clearOptions();
				sendVirtualAssistantMessage("test1");
			//(assignedorpick)
			doassigned=false;
			sendVirtualAssistantMessage("test2");
			if((isVar("AssignedChores") && getVar("AssignedChores")==true) &&(getVar("doingchores")==true)){
				sendVirtualAssistantMessage(" Do you have a chore already chosen by %DomHonorific% %DomName% or should I PICK one for you?",0); 
				showImage("Images/Spicy/GNMBackground/TrashBin.*");
				canswer=createInput("Assigned by Mistress", "please pick one");
				while (true) {
					if (canswer.isLike("assigned", "chosen")) {
					  sendVirtualAssistantMessage(" %subname%, you're lucky to have such an attentive %DomHonorific% in %Domname%  you %Slave% ",0);
						showImage("Images/Spicy/FFriends/Girlfriend/*");
						wait(5);
					  doassigned=true;
						break;
					} else if (canswer.isLike("pick", "you")) {
						sendVirtualAssistantMessage(random("%DomHonorific% %Domname% always trusts me "," don't worry I'll find something for you","you're in good hands, %Slave% "));
						break;
					} else { 
						sendVirtualAssistantMessage(" assigned, or shall I pick?");
					  
						canswer.loop();
					}
				}
			canswer.clearOptions();
			}


			if((getVar("doingchores")==true)) {
				if (doassigned == true) {

					sendVirtualAssistantMessage(" well lets hear a little about this chore of yours... ");

					run("/Chore/AssignedChore.js");
				 
					}
					else{



							sendVirtualAssistantMessage('Tell me %SlaveName%');
							sendVirtualAssistantMessage('How much free time do you have in minutes or should I choose for you? %Grin%');

							let minutesForChores = 0;
							let answer = createInput();

							while(true) {
								if(answer.isLike('you', 'choose', 'me')) {
									minutesForChores = getTimeForChores();
								} else if(answer.isInteger()) {
									minutesForChores = answer.getInt();

									if(minutesForChores >= 10) {
										break;
									} else {
										sendVirtualAssistantMessage('You need to do chores for at least 10 minutes. Otherwise it won\'t make any sense to start at all...');
										answer.loop();
										}
								} else {
									sendMessageBasedOnSender('Either give me something like "15" (minutes) or tell me to choose %SlaveName%');
									answer.loop();
								}
							}

							//TODO: List with stuff todo from domme
							sendVirtualAssistantMessage(random('So','Okay','Well then','Hmm','Let\'s see') + ' %SlaveName%... %Grin%');

							//5 minute buffer so we won't start any chore if only 5 minutes are left
							let date = setDate().addMinute(Math.max(1, minutesForChores - 5));

							while(!date.hasPassed()) 	{
								sendVirtualAssistantMessage('What chore to give you next...','What chore should you do...','Let\'s see if we can find a chore for you...');

								setCurrentSender(SENDER_ASSISTANT);
								chooseChore();
								setCurrentSender(SENDER_TAJ);
								}	
									//I think I need this one below
							
							
							break;
					}
				}
			
        } else if(lobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
			setVar("doingchores",true);
            break;
        } else if(lobbyAnswer.isLike('info')) {
            //lobbyAnswer.clearOptions();
            sendMessageBasedOnSender('You have spend ' + getVar(VARIABLE_WEEKLY_CHORES_TIME) + ' minutes this week doing ' + getVar(VARIABLE_WEEKLY_CHORES_DONE) + ' chores');
            sendMessageBasedOnSender('In total you have spend ' + getVar(VARIABLE_TOTAL_CHORES_TIME) + ' minutes doing a total of ' + getVar(VARIABLE_TOTAL_CHORES_DONE) + ' chores');
            sendMessageBasedOnSender('Anything else I can do for you?', 0);
            lobbyAnswer.loop();
        } else {
            sendVirtualAssistantMessage('Do you wish to do a new chore or return?', 0);
            lobbyAnswer.loop();
        }
    }
}