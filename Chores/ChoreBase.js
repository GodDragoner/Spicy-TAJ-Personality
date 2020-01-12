if(!isVar("FirstChoreRun")){
	setVar("FirstChoreRun",true);
	//setVar("PunishmentActive",false);
	

	

//  @CheckFlag(FirstChoreRun)
run("Chores/FirstChoreRun.js");
// @DeleteFlag(Chore)

}



if(isVar("ChoreActive") &&getVar("ChoreActive")==true)
	{

	sendVirtualAssistantMessage(" I already gave you a chore..");
	sendVirtualAssistantMessage(" You haven't completed it yet..");
	 run("Chores/ChoreNotComplete.js");
// fixme  append chore not complete with call back function to 2 part chores
		
	}
		
//(FirstChoreRun)
// @CheckFlag(ChoreActive)
//(Base)
// @CheckFlag(Chore)
 setVar("doingchores",true);

 while (getVar("doingchores")==true)
	{			
			sendVirtualAssistantMessage(" Do you wish to do a new chore or return?");
			answer=createInput("chore", "Return");
			while (true) {
				if (answer.isLike("yes","chore")) {
					sendVirtualAssistantMessage(random("So","Okay","Well then","Hmm","Let's see")+ " %SlaveName%");
				   setVar("doingchores",true);
				
					break;
				} else if (answer.isLike("no","return","exit")) {
					sendVirtualAssistantMessage(random("come back soon, %DomHonorific% %Domname% always has work for you "," come back tomorrow %slavename%"));
					 setVar("doingchores",false);
					 
					break;
				} else { 
					sendVirtualAssistantMessage(" Chore or return?"); 			  
					answer.loop();
				}
			}
		answer.clearOptions();
		


		//(assignedorpick)
		doassigned=false;
		if((isVar("AssignedChores") && getVar("AssignedChores")==true) &&(getVar("doingchores")==true)){
			sendVirtualAssistantMessage(" Do you have a chore already chosen by %DomHonorific% %DomName% or should I PICK one for you?",0); 
			showImage("Images/Spicy/GNMBackground/TrashBin.*");
			answer=createInput("Assigned by Mistress", "please pick one");
			while (true) {
				if (answer.isLike("assigned", "chosen")) {
				  sendVirtualAssistantMessage(" %subname%, you're lucky to have such an attentive %DomHonorific% in %Domname%  you %Slave% ",0);
				  	showImage("Images/Spicy/FFriends/Girlfriend/*");
					wait(5);
				  doassigned=true;
					break;
				} else if (answer.isLike("pick", "you")) {
					sendVirtualAssistantMessage(random("%DomHonorific% %Domname% always trusts me "," don't worry I'll find something for you","you're in good hands, %Slave% "));
					break;
				} else { 
					sendVirtualAssistantMessage(" assigned, or shall I pick?");
				  
					answer.loop();
				}
			}
		answer.clearOptions();
		}


		if((getVar("doingchores")==true)) {
			if (doassigned == true) {

			sendVirtualAssistantMessage(" well lets hear a little about this chore of yours... ");

			  run("/Chores/AssignedChore.js");
			 
				}
				else{
					
				sendVirtualAssistantMessage(random("What chore to give you next..","What chore should you do..","Let's see if we can find a chore for you.."));

				chorepicked=false;
				/////hackme start
				run("Chores/secondaryChores/ChoreAlt2.js");
				chorepicked=true;
				////hackme end
				
				 while (!chorepicked){
					 choretry=randomInteger(1,10);
					 switch(choretry)  {
						 case 1:	 
						if(isVar("KitchenActive") && (getVar("KitchenActive")==true) && (getDate("nextkitchenchore").haspassed())){
							setDate(setDate("nextkitchenchore"),setDate().addDay(5));
								 run("Chores/CleaningKitchen.js");
								 chorepicked=true;
						}
						break;
						 case 2:	 
						if(isVar("BathroomActive") && (getVar("BathroomActive")==true) && (getDate("nextBathroomchore").haspassed())){
							setDate(setDate("nextBathroomchore"),setDate().addDay(5));
								 run("Chores/CleaningBathroom.js");
								 chorepicked=true;
						}
						break;
						 case 3:	 
						if(isVar("RoomNum") && (getVar("roomNum")>=1) && (getDate("nextroom1chore").haspassed())){
							setDate(setDate("nextroom1chore"),setDate().addDay(5));
								 run("Chores/CleaningRoom1.js");
								 chorepicked=true;
						}
						break;
						 case 4:	 
						if(isVar("RoomNum") && (getVar("roomNum")>=2) && (getDate("nextroom2chore").haspassed())){
							setDate(setDate("nextroom2chore"),setDate().addDay(5));
								 run("Chores/CleaningRoom2.js");
								 chorepicked=true;
						}
						break;
						 case 5:	 
						if(isVar("RoomNum") && (getVar("roomNum")>=3) && (getDate("nextroom3chore").haspassed())){
							setDate(setDate("nextroom3chore"),setDate().addDay(5));
								 run("Chores/CleaningRoom3.js");
								 chorepicked=true;
						}
						break;
						 case 6:	 
						if(isVar("RoomNum") && (getVar("roomNum")>=4) && (getDate("nextroom4chore").haspassed())){
							setDate(setDate("nextroom4chore"),setDate().addDay(5));
								 run("Chores/CleaningRoom4.js");
								 chorepicked=true;
						}
						break;
						 case 7:	 
						if(isVar("RoomNum") && (getVar("roomNum")>=5) && (getDate("nextroom5chore").haspassed())){
							setDate(setDate("nextroom5chore"),setDate().addDay(5));
								 run("Chores/CleaningRoom5.js");
								 chorepicked=true;
						}
						break;

						case 8:	 
						if(isVar("ChoreFinances") && (getVar("ChoreFinances")==true) && (getDate("nextfinancechore").haspassed())){
							setDate(setDate("nextfinancechore"),setDate().addDay(10));
								 run("Chores/ChoreFinances.js");
								 chorepicked=true;
						}
						break;
						case 9:	 
						if((getDate("nextsecondarychore").haspassed())){
							setDate(setDate("nextsecondarychore"),setDate().addDay(5));
								picksecond=randomInteger(0,choresBought);
								
								switch (picksecond) {
									case 0:
									 run("Chores/secondaryChores/ChoreWritingTasks.js");
									break;
									case 1:
									 run("Chores/secondaryChores/ChoreAlt1.js");
									break;
									case 2:
									 run("Chores/secondaryChores/ChoreFun.js");
									break;
									case 3:
									 run("Chores/secondaryChores/ChoreAlt2.js");
									break;
									case 4:
									 run("Chores/secondaryChores/ChorePrivateHum.js");
									break;

								}
								 
								 chorepicked=true;
						}
						break;
					 }
				 }
			}
		}
	}
	
	///if we wanted any exit code it should go here...
//########################## - Comment - ##########################
//#TempFlag(Chore) is set in Interrupt\GNMBackgroundBase.txt
