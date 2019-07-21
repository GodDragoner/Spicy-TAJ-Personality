


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


sendMessage("Well "+ random("hello","hi")+ " %SlaveName%");// #DT4 @Goto(Start)


switch(getVar("Punisher")){
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	PM3=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 3) 
		PM3=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 5) 
		PM3=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 6) 
		PM3=3;
		break;
	}

	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	if(getVar("SubEndurance")>=8) {
	PM3=3;}
	else if (getVar("SubEndurance")>4){
	PM3=2;}
	else  
	PM3=1;
	break;
	case 3 :
	//(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline I just love that","You're not gonna like this %Grin%","I don't think your %Cock% will enjoy this","This is fun!"));// #DT4

	if (getVar("SubEndurance")>=7) {
	PM3=3;}
	else if (getVar("SubEndurance")>3){
	PM3=2;}
	else  
	PM3=1;
	

	break;
	case 4 :
	//(Contact3)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4

	if (getVar("SubEndurance")>=6) {
	PM3=3;}
	else if (getVar("SubEndurance")>2){
	PM3=2;}
	else  
	PM3=1;
	
	break;

	
}

sendMessage("setting up your punishment");
switch(PM3) {
	
	
case 1 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("CornerTimeLife",8);
	setVar("CornerTimeCounter", randomInteger(660,1080));
   setVar("CornerTimeCounter2",0); 

break;
case 2 :
	sendMessage("Just a minute.."); //#DT4 
	setVar("CornerTimeLife",6);
	setVar("CornerTimeCounter", randomInteger(960,1380));
   setVar("CornerTimeCounter2",0); 

break;
case 3 :

	sendMessage("Just a minute.."); //#DT4 
	setVar("CornerTimeLife",4);
	setVar("CornerTimeCounter", randomInteger(1260,1680));
   setVar("CornerTimeCounter2",0); 
   
break;
}
choice=randomInteger(1,2);
switch (choice) {
	case 1: 


	sendMessage("In a moment you will go to the corner",10); 
	sendMessage("Naked of course in case you doubted that..") //#DT4
	sendMessage("In the corner you will "+ random("just be standing with your fingers folded behind your head","simply be standing","simply be standing and pressing a coin against the wall with your nose arms down"));// #DT4
	sendMessage("You will Stay there until you hear my bell."); // #DT4 
	sendMessage("But before you go, we need to make things..... interesting."); // #DT4 
	  pchoice = randomInteger(1,3);
		   if((pchoice==1) && (getVar("toyhumbler")==true))
		   { sendMessage("go get your Humbler, and start putting it on", 18);  }
	   else
	   {	 pchoice = randomInteger(1,2);
			if((pchoice==1) && (getVar("toyparachute")==true))
			{
			sendMessage("go get your parachute, and start putting it on", 12);
			sendMessage("once it's on, attach " + random("1","1.5","2") +" Kg's of weight to it" );
			}
			else {		sendMessage("go tie a rope around your %Balls%, and leave a loose end about 30 cm long.", 12);
			sendMessage("once their nice and tied up, attach " + random("1","1.5","2") +" Kg's of weight to the rope");
			}
	   }
		response = sendInput("are you all done getting gussied up? "); //#DT4 
		while(true){
			if(response.containsIgnoreCase("yes", "yep", "yeah", "I did")){
			sendMessage("%Good%, now go to the corner %slave% and do as you've been instructed");// #DT4 
		
			break;	} 
			else {
			sendMessage("well hurry the fuck up! and then do as you've been instructed %Slave% "); //#DT4 
			break;
		

			}
			//(Silence)

		}
			
	wait(getVar("CornerTimeCounter"));
	sendMessage("Get back here.."); // 
	playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
	wait(6);
	//(Success)
	sendMessage("I know this was rough %SlaveName%"); // #DT4 
	sendMessage("But it makes me happy knowing you completed it!"); // #DT4 
	changeMeritLow(false);
	// @Goto(NoFee)
	//@TempFlag(PunishmentComplete)
//	setVar("PunishmentCompleted",23);
//	run("Dungeon/PunishmentBaseEnd.js");
	break;
	
   case 2:
	//@Flag(RepeatCornerTime) 
	if (isVar("H3Recursion")){
	sendMessage("Well since we're doing it again I better repeat the instructions.."); //#DT4
	sendMessage("Now its very simple slut!"); // #DT4
	}
	 //@TempFlag(RepeatCornerTime)
	sendMessage("In a moment you'll go to the corner.."); // #DT4
	sendMessage("While in the corner I want you to be on your toes!"); // #DT4
	sendMessage("At no point are you allowed to rest down on your heels "); //#DT4
	sendMessage("You'll hear my voice saying 'up' or 'down'"); // #DT4
	sendMessage("Down means going down in a squat still on toes"); // #DT4
	sendMessage("Up means standing up on your toes.. "); //#DT4
	sendMessage("Now I'm not done %Grin%"); // #DT4
	sendMessage("I want you to count the number of commands I give in your head"); // #DT4
	sendMessage("Everytime you hear a command I want you say 'Thank You %DomHonorific%'"); //#DT4
	sendMessage("Lastly I want you to count everytime your heel strikes the floor or you loose your balance.."); // #DT4
	sendMessage("If both heels strikes at the same time it counts as two! "); //#DT4
	sendMessage("But before you go, we need to make things..... interesting."); // #DT4 
	  pchoice = randomInteger(1,3);
		   if((pchoice==1) && (getVar("toyhumbler")==true))
		   { sendMessage("go get your Humbler, and start putting it on", 18);  }
	   else
	   {	 pchoice = randomInteger(1,2);
			if((pchoice==1) && (getVar("toyparachute")==true))
			{
			sendMessage("go get your parachute, and start putting it on", 12);
			sendMessage("once it's on, attach " + random("1","1.5","2") +" Kg's of weight to it") ;
			}
			else {		sendMessage("go tie a rope around your %Balls%, and leave a loose end about 30 cm long.", 12);
			sendMessage("once their nice and tied up, attach " + random("1","1.5","2") +" Kg's of weight to the rope") ;
			}
	   }
		response = sendInput("are you all done getting gussied up? "); //#DT4 
		while(true){
			if(response.containsIgnoreCase("yes", "yep", "yeah", "I did")){
			sendMessage("%Good%, now go to the corner %slave% and do as you've been instructed");// #DT4 
		
			break;	} 
			else {
			sendMessage("well hurry the fuck up! "); //#DT4 
			break;
		

			}
			//(Silence)

		}
	sendMessage("I never said this would be easy %Lol%"); // #DT4 
	CornerCommandsGiven = 0 ;
	sendMessage("Now go to the corner, stand on your toes and don't return before you hear the bell!"); // #DT4
	 CornerTimeDown = true;
	 wait(5);
	//(CornerTime2)
	playAudio("Audio/Spicy/Punishment/Corner/OnYourToes.mp3"); 
	//@CountVar[CornerTimeCounter2]
	//(CornerTime1)
	setDate("donetime").addSecond(getVar("CornerTimeCounter"));
	//sendMessage("debug1 here");
	while( !(getDate("donetime").hasPassed()) ) {
		wait(randomInteger(5,25));
		if(randomInteger(1,100) < 25 )
			{playAudio("audio/Spicy/Punishment/Corner/OnYourToes.mp3"); 
			}
			wait(randomInteger(5,25));
			
			if(CornerTimeDown){
				playAudio("audio/Spicy/Punishment/Corner/Down/*.mp3");
				CornerCommandsGiven=CornerCommandsGiven+ 1 ;
				wait(1);
				CornerTimeDown=false;

			}else{
				playAudio("audio/Spicy/Punishment/Corner/Up/*.mp3");
				CornerCommandsGiven=CornerCommandsGiven+ 1 ;
				wait(1);
				CornerTimeDown=true;

			}
				
	
	//(Done)
	}
	
	sendMessage("Get back here!"); // #DT4 
	playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
	sendMessage("Apparently you made it.."); //#DT4
	sendMessage("Now.."); //#DT4
	Failed2=false;
	//(Lives)
	answer=sendInput("Tell me what is the sum of times your heels touched the floor and you losing your balance?"); // #DT4 @InputVar[CornerTimeFails]
	while (true){
		if(!(answer.isInteger())){
			sendMessage("that's not a number, idiot!");
			sendMessage("try again.");	
			 answer.loop();}
		 else{ CornerTimeFails=answer.getInt();
			 if (getVar("CornerTimeLife")<CornerTimeFails){
			 //failed to do this correctly
			 Failed2=true;
			 break;
			 }else {sendMessage("%Good% ");
				 break;
				}
			}
		 
	}
		answer=sendInput("How many commands where you given?"); // #DT4 
	while (!Failed2){
		if(!(answer.isInteger())){
			sendMessage("that's not a number, idiot!");
			sendMessage("try again.");	
			 answer.loop();}
		 else{Cornercommands = answer.getInt();
			 if (Cornercommands==CornerCommandsGiven){
		 //thats correct
		 sendMessage("%Good% that was correct.. "); //#DT4
		 break;
		 }else {
		 	sendMessage("Wrong.. "); // #DT4
			sendMessage("It was "+ CornerCommandsGiven+" commands.."); // #DT4 @Goto(Failed2)
			Failed2=true;
			break;
		 }
	} 
	}

	
	//(ThankYouCheck)
	fee=false;
	if(!Failed2){
		sendMessage("Now I need you to be honest with me.."); // #DT4
		response = sendInput("Did you remember to say 'thank you %DomHonorific% ' <i>everytime</i> I gave a command? ",8); //#DT4 
		while(true){
			if(response.containsIgnoreCase("yes", "yep", "yeah", "I did")){
			sendMessage("%Good%");// #DT4 
			sendMessage("I know this was rough %SlaveName%"); // #DT4 
			sendMessage("But it makes me happy knowing you completed it!"); // #DT4 
			changeMeritLow(false);
			break;	} 
			else if(response.containsIgnoreCase("no", "nope", "nah", "sorry")){
			sendMessage("I appreciate your honesty! "); //#DT4 
			changeMeritMedium(true);
			if(getVar("substrictness") >= 7 ){
				Fee=true;
				}	
				break;
			}
			else if(response.isTimeout()){
			sendMessage("I'm gonna take your silence as a no.."); // #DT4 
			changeMeritMedium(true); 
			Fee=true;
			break
			}else {
				
			sendmessage(" Yes or no %SlaveName%?");// #DT4
			response.loop();
			}
			//(Silence)

		}
	}
	else{
			//(Failed1)
		sendMessage("Well well I think that was a little too much.."); // #DT4
		//(Failed2)
		sendMessage("I'm gonna give you 2 choices since you can't seem to do this right..");// #DT4
		response= sendInput("Either you repeat the punishment or I'll count this punishment as a fail and collect a fee from you..", 20); //#DT4 
		while(true){
		if(response.containsIgnoreCase("repeat","punish'","punishment","yes")) {
			sendMessage ("Again it is then.. "); //#DT4 
			setVar("H3Recursion", True);
			run("dungeon/punishment/H3.js");
			break;
		}
		
		if(response.containsIgnoreCase("fail","fee","not again","please no","no","please don't","don't")) {
			sendMessage("%Grin%"); // #DT4 
			Fee=true;
			break;
		}
		if(response.isTimeout()){
			sendMessage("Well your silence has a price %Grin%"); // #DT4
			Fee=true;
			break;
		}
		sendMessage(" Repeat it or not again?"); //#DT4

		
	}


	if(Fee) {
		sendMessage("While I do forgive you for this small 'accident'"); // #DT4 
		//@TempFlag(PunishmentComplete)
		switch(getVar("personalityStrictness")) {
			case 1:
			sendMessage("I've taken a small fee from you"); // #DT4 
			setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD)-15);
			break;
			case 2:
			sendMessage("I've taken a small fee from you"); // #DT4 
			setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD)-25);
			break;
			case 3:
			sendMessage("I've taken a fee from you"); // #DT4 
			setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD)-40);
			break;

		}		
	}
}
}
	if(isVar("H3Recursion")) {
		delVar("H3Recursion");
	}
	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 23);
	run("dungeon/PunishmentBaseEnd.js");