if (!isVar("PunishmentBaseIntro")) {
    setVar("PunishmentBaseIntro", true);
    setVar("PunishmentActive", false);

    sendDungeonMessage(random("Hello", "Welcome", "Hi", "Greetings", "Good to see you") + random("%SlaveName%", "slave", "slave", "slave", "slave", "slave"));
    sendDungeonMessage("I go by 'Miss A'");
    sendDungeonMessage("It is my job to punish you whenever you report for punishment");
    sendDungeonMessage("The domme rarely has time to do so");
    sendDungeonMessage("So if you misbehave in sessions or similar you will often simply be awarded punishment points");
    sendDungeonMessage("These points accumulate over time");
    sendDungeonMessage("don't let them grow too much");
    sendDungeonMessage("Or your %DomHonorific% will be displeased with you");
    sendDungeonMessage("Trust me...");
    sendDungeonMessage("You don't want that to happen!");
    sendDungeonMessage("Currently you have 2 options with me");
    sendDungeonMessage("Report for punishment");
    sendDungeonMessage("Or");
    sendDungeonMessage("You can sell your ass");
    sendDungeonMessage("Yes you heard correctly!");
    sendDungeonMessage("I'm also handling your SpankzChoir account");
    sendDungeonMessage("SpankzChoir.com is a spanking auction site");
    sendDungeonMessage("In there you can sell your ass for a spanking and actually earn gold");
    sendDungeonMessage("Do notice that your %DomHonorific% takes a percentage of your earnings");
    sendDungeonMessage("Also...");
    sendDungeonMessage("You are required to have an active account to use SpankzChoir.com");
    sendDungeonMessage("An account lasts 14 days and can be paid for in the shop");
    sendDungeonMessage("Now...");
}
if(isVar("PunishmentActive") && getVar("PunishmentActive")==true){
	delVar("Punishment");
	setVar("PunishmentActive",false);
	//(PunishmentActive)
	
	sendDungeonMessage(" It seems you didn't complete your last punishment.. ",0); 
	sendDungeonMessage(" Was this due to a bug or because you couldn't handle it? ",0); //@TimeOut(10)
	answer= createInput(10, "Bug" ,"Couldn't handle it");
	while (true){
	if(answer.containsIgnoreCase("bug")){
		answer.clearOptions();
		sendDungeonMessage(" I hope you reported this on the Milovana spicy thread then! ",0);
		changeMeritLow(true);
		
		break;
	}else if(answer.containsIgnoreCase("couldn't handle","couldn't","could not"," handle")){
		answer.clearOptions();
		sendDungeonMessage(" I'm disappointed.. ",0); 
		changeMeritLow(true);
		sendDungeonMessage(" I know your %DomHonorific% is disappointed.. ",0);
		sendDungeonMessage(" Remember to only choose punishments you can handle.. ",0);
		break;
	}else {
		answer= sendInput(" Bug or you couldn't handle it? ",5);
		answer.loop;
	}
	if (answer.isTimeout()){
		answer.clearOptions();
		sendDungeonMessage(" Your lack of response leads to believe you just couldn't handle it.. "); 
		changeMeritLow(true);
		sendDungeonMessage(" I know your %DomHonorific% is disappointed.. ");
		sendDungeonMessage(" Remember to only choose punishments you can handle.. ");
		break;
	}
}
}

 ////@Goto(SecondTimePunishment)
//(PunishmentBaseIntro)
// @CheckFlag(SecondTimePunishment)
// @CheckFlag(PunishmentActive)
// @CheckFlag(Punishment) @info(set in Interrupt\GNMBackgroundBase.txt)
//(SecondTimePunishment)
 if (isVar("Punishment")) {
	 delVar("Punishment");
 }
 
 exitflag=false;
 
 while ( exitflag==false){
		 
	sendDungeonMessage(" Yes %SlaveName%? ");
	//answer=createInput();
	//answer.clearOptions();
	answer=createInput("Points?", "SpankzChoir","report for punishment","pay fine","return");

	if(answer.containsIgnoreCase("how many","point","punishment point")){
		answer.clearOptions();
		sendDungeonMessage( random("hmm, Give me just a moment to check your records","2 seconds %SlaveName%","Just a moment %SubName%","Let me just check my computer.."),2); 
		sendDungeonMessage( random("it looks like ","according to my records "," it says here ") +"you have "+ getVar("punishmentpoints") +" Punishment points.",2); 
		if(randomInteger(1,100) <15) {
			setVar("punishmentpoints",getVar("punishmentpoints")+ randomInteger(25,75));
			sendDungeonMessage( random("hey, while I have this file open let me add a few more", "well that's what you did have before I made a little addition", "that seems low, let me add some"),1,20);
			sendDungeonMessage(random("You're welcome %SubName%","%SlaveName%, you're welcome", "aren't you lucky I'm watching out for you?"));
			}
		if (getVar("punishmentpoints") > 750 ){
					sendDungeonMessage( random( "lol %SubName%, you're so fucked!", "oh %SlaveName%, you're ass is gonna bleed ", "you should be ashamed, %Subname%", "how did you let it get so bad?"));
			
		}else if (getVar("punishmentpoints") > 500 ){
			sendDungeonMessage( random( "this is SERIOUS %Slave%, you need to put some time in down here", "NOT GOOD, you need to put some serious time in down here", "I have a feeling we're going to be spending lots of time together %GNMGrin%", "that's so many your %DomHonorific% won't even session with you"));
		}if (getVar("punishmentpoints") > 250 ){
			sendDungeonMessage( random( "we have some work to do down here","I'll let the mistresses know they should plan to spend some time in the dungeon"));
		}else{
			sendDungeonMessage( random( "That's not too bad", "only a little adjustment will be needed"));
		}
		
	}else	if(answer.containsIgnoreCase("spankzchoir","spankz","choir","SpankzChoir.com","sell")){
		answer.clearOptions();
		sendDungeonMessage( random("Well my favorite activity!","Sounds nice!","Well well..","Uhh oh my oh my..") );
			
			//(SpankzChoir)
			sendDungeonMessage( random("Give me just a moment","2 seconds %SlaveName%","Just a moment %SubName%","Let me just check my computer.."),2); 
			sendDungeonMessage( "Take a seat and enjoy the posters on the wall..");
			 showImage("Images/Spicy/Punishment/SpankzChoir/chair1.jpg");
			//(PosterBreak1)
			 showImage("Images/Spicy/Punishment/Posters/*.*",randomInteger(2,6)); 
			 chancenum=0;
			 while(chancenum < 70) {
			 showImage("Images/Spicy/Punishment/Posters/*.*",randomInteger(2,6)); 
			 chancenum = randomInteger(1,100);
			 }
			sendDungeonMessage( random("Okay then","Lets proceed","lets move forward","Lets continue ")); 
			playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
			 run("dungeon/SpankzChoir/SpankzChoirBase.js");
			
		
	}else if(answer.containsIgnoreCase("report","reporting","punish","punished","punishment")){
			answer.clearOptions();

	 delVar("Punishment");
	sendDungeonMessage( random("Oh my","Oh how nice","Lovely!","Splendid!","Exciting!","Fantastic","%GNMGrin%","perfect..","Good","So you want to be punished.") ); 
	sendDungeonMessage( random("Let me just look up your file..","Checking your file","Having a look at your file..","Let me just check your file.."),2); 
			sendDungeonMessage( "Take a seat..");
			 showImage("Images/Spicy/Punishment/SpankzChoir/chair1.jpg");
			//(PosterBreak1)
			 showImage("Images/Spicy/Punishment/Posters/*.*",randomInteger(2,6)); 
			 chancenum=0;
			 while(chancenum < 70) {
			 showImage("Images/Spicy/Punishment/Posters/*.*",randomInteger(2,6)); 
			 chancenum = randomInteger(1,100);
			 }
			sendDungeonMessage( random("Okay then","Lets proceed","lets move forward","Lets continue ")); 
			playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");

	if(getVar(VARIABLE_PUNISHMENT_POINTS) <100) {

		sendDungeonMessage(" Well %SubName% it seems you haven't been too bad recently.. ",2);
		sendDungeonMessage(" So I'm afraid I have to reject you.. ",2);

	}else {
	 
	sendDungeonMessage(" Lets see if there is any specific reasons to why you've been given punishment points this week.. ");
	setVar("PunishmentActive",true);

	if(isVar("PReason_skipping_punishment") && getVar("PReason_skipping_punishment")) {  sendDungeonMessage(" skipping punishment day... Naughty %Slave%, are you too scared to come down here and face justice?",2);}  

	if(isVar("PReason_skipping_confession") && getVar("PReason_skipping_confession")) {  sendDungeonMessage(" skipping confession day... Naughty %Slave%",2);}  
	if(isVar("PReason_spankzchoir_late") && getVar("PReason_spankzchoir_late")) {  sendDungeonMessage(" Not delivering your %ass% to the mistress that bought it via spankzchoir in time",2);}  

	if(isVar("PReason_too_many_points") && getVar("PReason_too_many_points")) {  sendDungeonMessage( random("Failure to complete punishments on time"," Not putting sufficient effort to reduce punishment points"," not submitting to required punishments"," Not suffering %DomHonorific% %DomName%'s proscribed punishments") ,2);} 

	if(isVar("Preason_not_degrading") && getVar("Preason_not_degrading")) { sendDungeonMessage( random("Failure to follow %DomHonorific% %DomName%'s instructions"," Not following instructions"," not submitting to required degradation"," Not suffering %DomHonorific% %DomName%'s proscribed humiliation"),2 );} 

	if(isVar("Preason_not_worshiping") && getVar("Preason_not_worshiping")) { sendDungeonMessage( random("Failure to respect %mistress%"," being Disrespectful towards %DomHonorific% %DomName%"," not appropriately worshiping your Goddess %DomName%") ,2);}

	if(isVar("Preason_too_slow") && getVar("Preason_too_slow")) { sendDungeonMessage(random("being too slow to respond to %DomHonorific% %DomName%'s commands "," Not jumping to complete %DomHonorific% %DomName%'s commands"," disappointing %DomHonorific% %DomName% by not responding to commands in a timely way") ,2);} 

	if(isVar("BadExerciseEffort") && getVar("BadExerciseEffort")) { sendDungeonMessage( random("Failure to complete your exercises properly"," Not putting sufficient effort while exercising"," Being lazy while working out"," Not meeting %DomHonorific% %DomName%'s exercise standard") ,2);} 

	if(isVar("Preason_BadChores") && getVar("Preason_BadChores")) { sendDungeonMessage( random("Failure to complete chores in a timely manner","Unfinished chores","Failure to do chores","Poor attitudes regarding chores","Failed to complete chores.."),2);} 

	if(isVar("Preason_BadCum") && getVar("Preason_BadCum")) { sendDungeonMessage( random("Unauthorized ejaculation","Cumming without permission"),2);} 

	if(isVar("Preason_BadEdging")&& getVar("Preason_BadEdging") ){ sendDungeonMessage( random("Unauthorized edging","Edging against %DomHonorific% %DomName%'s wishes"," being unable to resist Edging your %cock%" ),2);} 

	if(isVar("BadMouth") && getVar("BadMouth")) { sendDungeonMessage( random("Filthy mouth","Talking back","Bad mouthing","Undesired talking","Failed to request permission to talk","Talking out of terms.."),2);}

	if(isVar("Preason_BadFullTime") && getVar("Preason_BadFullTime")) { sendDungeonMessage( random("Failed to fulfill full time duties","Laziness","Failure to meet demands for proper slavery"),2);} 

	sendDungeonMessage( random("Poor attitude","Poor performance","Lack of performance","Failed to perform properly","Poor results"),2); 

	sendDungeonMessage( random("Oh my it's good you came","Lets correct this immediately","Time to improve your behavior"),3); 
	sendDungeonMessage(" First lets see who will be handling your punishment..",3);

	setVar("Punisher",1);
	if(isVar("Glitter1Bought")) 
		{setVar("Punisher",randomInteger(1,2));}
	if(isVar("Glitter2Bought")) 
		{setVar("Punisher",randomInteger(1,3));}
	if(isVar("Glitter3Bought")) 
		{setVar("Punisher",randomInteger(1,4));}

	switch (getVar("Punisher")) {
		case 1:
		sendDungeonMessage(" Well it will be your %DomHonorific% handling your punishment.. ",3);
		break;
		case 2:
		sendDungeonMessage(" Well it will be %DomHonorific% %domFriend1Name% handling your punishment..",3);
		break;
		case 3:
		sendDungeonMessage(" Well it will be %DomHonorific% %domFriend2Name% handling your punishment..",3);
		break;
		case 4:
		sendDungeonMessage(" Well it will be %DomHonorific% %domFriend3Name% handling your punishment..",3);
		break;
		
	}



	sendDungeonMessage(" You can request a soft, medium, hard, or extreme punishment ");
	if(getVar(VARIABLE_PUNISHMENT_POINTS) >= 350)
		{sendDungeonMessage(" I do recommend a hard one but its your choice ");}
	else if(getVar(VARIABLE_PUNISHMENT_POINTS) >= 200)
		{sendDungeonMessage(" I do recommend a medium one but its your choice ");}
	else 
		{sendDungeonMessage(" I recommend a soft  punishment ");}

	answer2=createInput(20, "Soft","Medium","Hard", "Extreme");

	punish_severity=0;

	if(answer2.containsIgnoreCase("soft")){
				sendDungeonMessage(" Setting it up.. ");
				punish_severity=1;}
		else if(answer2.containsIgnoreCase("medium")){
				sendDungeonMessage(" Setting it up.. "); 
				punish_severity=2;}
		else if(answer2.containsIgnoreCase("hard")){
				sendDungeonMessage(" Setting it up.. hope you can handle this ");
				punish_severity=3;			}
		else if(answer2.containsIgnoreCase("Extreme")){
				sendDungeonMessage(" %grin% a glutton for punishment...Setting it up.. ");
				punish_severity=4;}
		else if(answer2.isTimeout()){sendDungeonMessage("stunned in fear huh? ");
									if(getVar(VARIABLE_PUNISHMENT_POINTS) >= (400- randomInteger(1,100)))
										{sendDungeonMessage(" I'm going to strap you down for a hard one. ");
									punish_severity=3;}
									else if(getVar(VARIABLE_PUNISHMENT_POINTS) >= (250- randomInteger(1,100)))
										{sendDungeonMessage("I guess we'll go for a medium one then ");
										punish_severity=2;}
									else 
										{sendDungeonMessage("I'll take it easy on you this time");
										punish_severity=1;}
									}	
		else {sendDungeonMessage("%Slave%, are you illiterate? Soft, medium, hard, or extreme? ");
			answer2.loop();}
		answer2.clearOptions();
		switch(punish_severity) {
			
			case 1:
			   punishmentchoice = randomInteger(1,6);
			   run("dungeon/Punishments/S"+punishmentchoice+".js");
			break;
			case 2:
			//fixme impliment punishment 6
			   punishmentchoice = randomInteger(1,5);
			   run("dungeon/Punishments/M"+punishmentchoice+".js");		
			break;
			case 3:
			   punishmentchoice = randomInteger(1,3);
			   switch ( punishmentchoice ) {
				   case 1:
			   run("dungeon/Punishments/H1.js");
			   break;
				case 2:
			   run("dungeon/Punishments/H3.js"); 
			   break;
				case 3:
			   run("dungeon/Punishments/H7.js");
			   break;
			
		
			   }
			
			break;
			case 4:
			//fixme impliment other extreeme punishments
			//1-5
			   punishmentchoice = randomInteger(2,5);
			   if((punishmentchoice==5) && (getVar("toyenemakit")==true))
			   { run("dungeon/Punishments/B1.js");}
				else{
				   //fixme un stick this
				//1-4
				   punishmentchoice = randomInteger(2,4);
					if((punishmentchoice==4) && (getVar("toyshockcollar")==true))
					{
					run("dungeon/Punishments/E"+punishmentchoice+".js");
					}
					//1-3
					else 
					 {punishmentchoice = randomInteger(2,3);
						run("dungeon/Punishments/E"+punishmentchoice+".js");
					}
				}
			break;
			
		}

	}
	}else if(answer.containsIgnoreCase("pay","fine","gold")) {
		answer.clearOptions();
		sendDungeonMessage( random("Here to reduce your sentence huh..","Well you want to pay your fines","You wish to pay for your sins..") );
		//@Goto(Fines)
		
			//(Fines)
			sendDungeonMessage(" You can reduce your punishment points in the shop ");
			sendDungeonMessage(" Check out the shop and select 'atonement' ");
	//		@Goto(PunishmentBaseIntro)
			//(TryAgain1)
			/* @SetVar[FineReduction2]=[0]
			sendDungeonMessage(" How many of these do you wish to pay for? "); @InputVar[FineReduction]
			 @If[FineReduction]=[0]Then(None) @SetVar[FineReduction2]=[FineReduction]
			 @If[FineReduction]>[GNMPPoints]Then(NoSense)
			 @If[FineReduction]>[0]Then(CheckGold)
			sendDungeonMessage(" Your input doesn't make any sense.. @Goto(TryAgain1)
			(NoSense)
			sendDungeonMessage(" You didn't choose a number that makes sense.. "); #MeritChangeNLow @Goto(PunishmentBaseIntro)
			(None)
			sendDungeonMessage(" Okay.. 0? Seriously?! Don't waste my time "); #MeritChangeNLow @Goto(PunishmentBaseIntro)
			(CheckGold)
			sendDungeonMessage(" Checking if you have enough gold.. ");
			 @If[FineReduction2]>[GNMGold]Then(NoGold)
			sendDungeonMessage(" Well everything checks out.. "); @ChangeVar[GNMGold]=[GNMGold]-[FineReduction2]
			@SystemMessage Gold transfered "); @ChangeVar[GNMPPoints]=[GNMPPoints]-[FineReduction]
			@SystemMessage #Var[FineReduction] points reduced from your total punishment points "); @Goto(PunishmentBaseIntro)
			(NoGold)
			sendDungeonMessage(" You don't have enough gold #SlaveName "); @ChangeVar[GNMMerits]=[GNMMerits]-[10] @Goto(PunishmentBaseIntro)
			*/
	}else if(answer.containsIgnoreCase("return","exit","back")) {
		exitflag=true;
	//fixme?  can we just return??
	}else {  //@DifferentAnswer 
		sendDungeonMessage(" Spankz choir, punishment, pay fine or return? ");
		answer.loop();
		}
 }







 
 
 
 
 /*creating a function to invoke special characters/imagesets
by calling below with a different person number, you get a different sender prefix and image displayed automatically
0 no image
1 receptionchat (punishment)
2 ReceptionbusyPC (punishment)
3 Receptionbusyphone (punishment)
4 dirty
*/

function sendDungeonMessage(message,person,wait) {
    textName = new javafx.scene.text.Text("[Miss A]: ");
    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
	switch(person) {
		case 0:
		showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 +1) + "/*.jpg");
		break;
		case 1:
		showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 +1) + "/*.jpg");
		break;
		case 2:
		showImage("Images/Spicy/Punishment/Reception/BusyPC/" + (ASSISTANT_CURRENT_SET_ID % 5 +1) + "/*.jpg");
		break;
		case 3:
		showImage("Images/Spicy/Punishment/Reception/BusyPhone/" + (ASSISTANT_CURRENT_SET_ID % 5 +1 )+ "/*.jpg");
		break;	
		case 4:
		showImage("Images/Spicy/Punishment/Reception/Dirty/" + (ASSISTANT_CURRENT_SET_ID % 5 +1 )+ "/*.jpg");
		break;	
		default:
		showImage("Images/Spicy/Punishment/Reception/Chat/" + (ASSISTANT_CURRENT_SET_ID % 5 +1) + "/*.jpg");
		break;
	}
 
    

    if(wait === undefined || wait) {
        sleep(.5 + message.length * .03);
    }
}

