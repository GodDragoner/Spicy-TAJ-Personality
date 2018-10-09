setVar("GroundingCounter",0);

switch(getVar("Punisher")) {

	case 1 :
	// @Goto(Hello)
	break;
	case 2 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend1Name% ..",1);
	setSender(2);
	break;
	case 3 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend2Name% ..",1);
	setSender(3);
	break;
	case 4 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend3Name% ..",1);
	setSender(4);

	break;
}


sendMessage("Well "+ random("hello","hi") +" %SlaveName%");// #DT4 @Goto(Start)


switch(getVar("Punisher")){
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	PS2=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 3) 
		PS2=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 5) 
		PS2=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 6) 
		PS2=3;
		break;
	}

	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	if(getVar("SubEndurance")>=8) {
	PS2=3;}
	else if (getVar("SubEndurance")>4){
	PS2=2;}
	else  
	PS2=1;
	break;
	case 3 :
	(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline I just love that","You're not gonna like this #GNMGrin","I don't think your #GNMCock will enjoy this","This is fun!"));// #DT4

	if (getVar("SubEndurance")>=7) {
	PS2=3;}
	else if (getVar("SubEndurance")>3){
	PS2=2;}
	else  
	PS2=1;
	

	break;
	case 4 :
	(Contact3)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4

	if (getVar("SubEndurance")>=6) {
	PS2=3;}
	else if (getVar("SubEndurance")>2){
	PS2=2;}
	else  
	PS2=1;
	
	break;

	
}


switch(PS2) {
	
	
case 1 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(400, 600));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
break;
case 2 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(460, 700));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4

break;
case 3 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("GroundingSet",randomInteger(520, 800));
	sendMessage("Then you'll be able to carry on with your punishment.. ");//#DT4
break;
}

//(Intro)
	sendMessage("So %SlaveName% .."); //#DT4
	sendMessage("I'm grounding you to your computer with a rather simple task.. "); //#DT4
	sendMessage("I'm turning the screen black"); //#DT4
	sendMessage("Every once in a while a few numbers will appear and you will have exactly 5 seconds to write back the number colored red ");//#DT4
	sendMessage("If not I promise you your %DomHonorific% won't be happy.. ");//#DT4
	sendMessage("And ohh.. ");//#DT4
	sendMessage("Its gonna cost you 10 gold and the punishment prolonges"); //#DT4
	sendMessage("Enjoy!"); //#DT4 
//	 @SetVar[Timer]=[0]
	// @CountVar[Timer]
	donetime=setDate();
	donetime.addSecond(getVar("GroundingSet"));
	
	while(!(donetime.hasPassed())){
//(Task)
		 showImage("Images/Spicy/Punishment/Grounding/BlackBase.*"); 
		 wait(randomInteger(3,30));
		 answerval= randomInteger(1,9);
		 
		  showImage("Images/Spicy/Punishment/Grounding/Numbers/Black"+answerval+".*",1); 
	 
		//here to prompt an answer or does that hint too much?
		answer=sendInput("",5);
		 while (true){
			if( answer.isTimeout()) {
			sendMessage("Time out.." );
			showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
			changeMeritLow(true);
			setVar(VARIABLE_GOLD,getVar(VARIABLE_GOLD)-10); 
			//@TempFlag(PunishmentComplete)
			donetime=donetime.addSecond(randomInteger(60,180));
			break;
			} else{
				if(answer.isInteger()) {
					if ( answer.getInteger() == answerval){   
						 sendMessage("Correct");
						 showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						 break;
					}
					else{ sendMessage("Wrong.. You were supposed to write "+answerval+".. ");
						showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						changeMeritLow(true);
						setVar(VARIABLE_GOLD,getVar(VARIABLE_GOLD)-10); 
						//@TempFlag(PunishmentComplete)
						donetime=donetime.addSecond(randomInteger(60,180));
						break;
					}
				}else {
					sendMessage("Wrong.. You were supposed to write "+answerval+".. that wasn't even a number %SlaveName% ");
						showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
						changeMeritLow(true);
						setVar(VARIABLE_GOLD,getVar(VARIABLE_GOLD)-10); 
						//@TempFlag(PunishmentComplete)
						donetime=donetime.addSecond(randomInteger(60,180));
						break;
				}
		 }
	}
 
	}

 setVar("PunishmentComplete", true);
 setVar("PunishmentCompleted", 2);
 run("Punishment/PunishmentBaseEnd.js");