
//nurse pictures set in special nurse chat function below
//CallReturn(CR\BackgroundMode\SetNursePictures.txt)
if(isVar("SpankzChoirComplete") && isVar("SpankChoirSafeword")){

	sendNurseMessage(" Well #SubName since you used your safeword ");
	sendNurseMessage(" You now owe gold.. ");
	sendNurseMessage(" Transfering gold owed.. ");
	// @ChangeVar[VARIABLE_GOLD]=[VARIABLE_GOLD]-[GoldOwedLate]
	setVar("VARIABLE_GOLD", getVar("VARIABLE_GOLD")+getVar("GoldOwedLate"));

	 delVar("GigiWon");
	 delVar("AlexisWon");
	 delVar("AllisonWon");
	 delVar("JeanetteWon");
	 delVar("KordeliaWon");
	 delVar("KymWon");
	 delVar("SadieWon");
	 delVar("SarahWon");
	 delVar("SpankzChoirLate");
	 delVar("SpankzChoirSafeword");
   //@End
}else if(isVar("SpankzChoirComplete")){

	 if(isVar("SpankzChoirLate")){

		sendNurseMessage( random("Hi","Hello","Hii","Oh my.. Hello","Greetings","Welcome") + " " + random("sugar","honey","darling","dear") );
		setVar("VARIABLE_GOLD", getVar("VARIABLE_GOLD")+getVar("GoldOwedLate"));
		sendNurseMessage( random("I understand from Miss A that you were late for your appointment","Miss A tells me you missed an appointment")); 
		sendNurseMessage( random("Since you were late you owe some gold..","Meaning that you owe some gold","Which sadly means that you owe a bit of gold")); 
		if(isVar("AlexisWon")) { sendNurseMessage( random("I'm sure Miss Alexis was happy about that","I bet Miss Alexis didn't really mind","I have a feeling Miss Alexis likes being paid") + " %GNMGrin%"); }
		if(isVar("AllisonWon")) { sendNurseMessage( random("I'm sure Miss Allison was happy about that","I can only imagine Miss Allison was thrilled about that","I'll bet you that Miss Allison didn't mind") + " %GNMGrin%"); } 
		if(isVar("GigiWon")) { sendNurseMessage( random("I'm sure Miss Gigi was happy about that","I have a feeling that Miss Gigi didn't exactly have a problem","I can only think that Miss Gigi didn't mind") + " %GNMGrin%" ); } 
		if(isVar("JeanetteWon")) { sendNurseMessage( random("I'm sure Miss Jeanette was happy about that","I'm rather positive Miss Jeanette only appreciates that","I'm sure Miss Jeanette enjoyed a paid spanking")+ " %GNMGrin%" ); }  
		if(isVar("KordeliaWon")) { sendNurseMessage( random("I'm sure Miss Kordelia was happy about that","I'm sure Miss Kordelia learned you not to be late again","I have a feeling Miss Kordelia taught you a lesson") + " %GNMGrin%" ); }  
		if(isVar("KymWon")) { sendNurseMessage( random("I'm sure Miss Kym was happy about that","Why do I know that Miss Kym taught you now to be late again") +  " %GNMGrin%" ); } 
		if(isVar("SadieWon")) { sendNurseMessage( random("I'm sure Miss Sadie was happy about that","don't be late again Miss Sadie doesn't appreciate it","Never be late again!")+ " %GNMGrin%" ); }
		if(isVar("SarahWon")) { sendNurseMessage( random("I'm sure Miss Sarah was happy about that","It's never a good idea to be late","You should never be late")+ " %GNMGrin%" ); }  
		sendNurseMessage(" Any I've transfered the " + getVar("GoldOwedLate") +" gold you owed.."); 

		 delVar("GigiWon");
		 delVar("AlexisWon");
		 delVar("AllisonWon");
		 delVar("JeanetteWon");
		 delVar("KordeliaWon");
		 delVar("KymWon");
		 delVar("SadieWon");
		 delVar("SarahWon");
		 delVar("SpankzChoirLate");
		 delVar("SpankzChoirSafeword");
		 
	 }else{
		  
		sendNurseMessage( random("Good job","Well done")); 
		sendNurseMessage(" %DomHonorific% is pleased with the extra gold you earned for her"); 
		 //#MeritChangePMedium
		 ChangeMeritMedium(false);
		 switch(getVar("personalityStrictness")){
		case 0 :
		sendNurseMessage(" I've sent her, her fee of 60% ");
		break;
		case 1 :
		 sendNurseMessage(" I've sent her, her fee of 70% ");
		break;
		case 2 :
		sendNurseMessage(" I've sent her, her fee of 80% ");
		break;
		 }
		sendNurseMessage(" Transfering your gold earned to you now ");
		setVar("VARIABLE_GOLD", getVar("VARIABLE_GOLD")+getVar("GoldOwedInTime"));
		sendNurseMessage(" Looking at your account you have " + getVar("VARIABLE_GOLD") + " gold %GNMEmoteHappy% ");
		delVar("GigiWon");
		 delVar("AlexisWon");
		 delVar("AllisonWon");
		 delVar("JeanetteWon");
		 delVar("KordeliaWon");
		 delVar("KymWon");
		 delVar("SadieWon");
		 delVar("SarahWon");
		 delVar("SpankzChoirLate");
		 delVar("SpankzChoirSafeword");
	 }
	
	}


 
//************************************************** Post Status checks **************************************************

switch(getVar("Punisher")) {
	case 1:
	sendmessage("Cya %SlaveName%"); //#DT4 
	delVar("Punisher"); 
	break;
	case 2:
	sendmessage("Cya %SlaveName%");// #DT4 
	delVar("Punisher");
	setSender(1);
	break;
	case 3:	 
	sendmessage("Cya %SlaveName%");// #DT4 Cya #SlaveName #DT4 
	delVar("Punisher");
	 setSender(1);

	break;
	case 4:	
	sendmessage("Cya %SlaveName%");// #DT4 Cya #SlaveName #DT4 
	delVar("Punisher");
	 	setSender(1);
	 break;
	}
//(Status)
sendMessage( random("You're going to the nurses office","Heading for the nurse's office","Walking to the nurse"));

/// should be ignored as flag is orphaned @Flag(SelfbondageComplete) @Goto(Bug)
//****************************************************** SpankzChoir ************************************************


///(PunishmentComplete)
 delVar("PunishmentActive");
 if (isVar("PunishmentFailed")) {
	 conversationnum = 0;
	sendNurseMessage( random("You failed your punishment","You didn't complete your punishment","You didn't go through with your punishment") + "%SubName%" );
	delVar("PunishmentFailed");
	answer= sendInput( random("Was it really hard to complete?","Was it that hard to complete?"), 10) ;
		
		while(true){
		if(answer.containsIgnoreCase("yes", "yeah")){
		sendNurseMessage( random("I see","Well..","Hmm..")
		conversationnum = 3;
		noanswer = false;	
		}else if (answer.containsIgnoreCase("no", "nope")){
			sendNurseMessage( random("Oh","Hmm..","Oh"," Hmm..") 
			noanswer =  false;
			
		}
			else{
				sendNurseMessage(" Yes or no %SubName%");

			answer.loop;
			}
	}
	if (noanswer==true){
		sendNurseMessage( random("You make me sad when you don't communicate with me","It saddens me when you don't communicate")+ " " + "%SubName%"); 
		sendNurseMessage(random("Remember that I'm here to take care of your wellbeing","Remember I'm here to look after you"));  
		conversationnum = 10;
	
		}
	
	
	if (conversationnum == 0) {
	answer = sendInput( random("Try to tell me why you didn't complete it","Why couldn't you handle it?"), 20);
		while(true) {
			
			if(answer.containsIgnoreCase("i couldn't handle it","handle","couldn't","could not")){
				sendNurseMessage(random("Aww sugar","Aww Honey","Aww dear") + " :/ ");  
				conversationnum = 3;
			}else if(answer.containsIgnoreCase("pain","painfull","painful","too much","agony")) {
				sendNurseMessage(random("Aww sugar","Aww Honey","Aww dear"));  
				conversationnum = 3;
			}else if(answer.containsIgnoreCase("boring","borring", "Bored")){
				sendNurseMessage( random("It was boring?..","Boring huh?","Boring you say?")); 
				conversationnum = 1;				
			}else if(answer.containsIgnoreCase("didn't want to","did not want to","no fun")){
				sendNurseMessage( random("Hmm..","Well..")); 
				conversationnum = 2;				
			}else if(answer.containsIgnoreCase("bug","error") {
				sendNurseMessage( random("A bug huh?","Oh my an error?")); 
				conversationnum = 9;	//bug
			}else if(answer.containsIgnoreCase("i did","i did complete it","i did complete","i made it")) {
				sendNurseMessage(random("You did?!","Oh my you did!?","Shit")); 
				conversationnum = 9;	//bug			
			}else {sendNurseMessage(" I'm sorry but your response doesn't make sense"); 
				sendNurseMessage(" I urge that you tell Genome on Milovana why you didn't complete your punishment"); 
				sendNurseMessage(" I know he would appreciate it.."); 
				sendNurseMessage(" Thank you!");  
				conversationnum = 10;	//
			}
		}
	}
	switch(conversationnum){
		case 1:
	sendNurseMessage(" %SubName% " + random("I think you and I need to have a little talk","We need to talk","We gotta talk","We need to have a little chat")); 
	sendNurseMessage(" Because not completing a punishment because it was boring isn't a proper reason"); 
	sendNurseMessage(random("You need to remember that it was you that came here","You need to remember that you signed up for this","It was you who signed up for this..")); 
	sendNurseMessage(random("It was you who requested and signed up to become a slave","You.. Wanted.. This..","don't forget!")); 
	sendNurseMessage( random("I think you should think carefully about what this means","I believe you need to think carefully","You have to think carefully.."));
	sendNurseMessage(random("Because maybe slavery isn't for you?","Perhaps serving isn't for you?")); 
	sendNurseMessage(" Now I'm shutting down Tease-AI "); 
	sendNurseMessage(" I don't want to see you back for the next 24 hours.. ");
	sendNurseMessage(" While you're offline I suggest that you think carefully about this"); 
	sendNurseMessage(" Bye %SubName% ");
	sendNurseMessage(" I hope to see you again :) "); 
	//@EndTease  FIXME
	//@End
	break;
	   case 2 :
	sendNurseMessage(" #SubName random(I think you and I need to have a little talk","We need to talk","We gotta talk","We need to have a little chat) 
	sendNurseMessage(" Because not completing a punishment because you didn't want to isn't a proper reason.. ");
	sendNurseMessage(random("You need to remember that it was you that came here","You need to remember that you signed up for this","It was you who signed up for this..")); 
	sendNurseMessage(random("It was you who requested and signed up to become a slave","You.. Wanted.. This..","don't forget!")); 
	sendNurseMessage(" Being a slave sometimes involves punishment for poor behaviour.. ");
	sendNurseMessage(" Now remember that punishment unlike play isn't designed to be 'fun'"); 
	sendNurseMessage(" It's punishment"); 
	sendNurseMessage(random("I think you should think carefully about what this means","I believe you need to think carefully","You have to think carefully..")); 
	sendNurseMessage(random("Because maybe slavery isn't for you?","Perhaps serving isn't for you?")); 
	sendNurseMessage(" Now I'm shutting down Tease-AI ");
	sendNurseMessage(" I don't want to see you back for the next 24 hours.."); 
	sendNurseMessage(" While you're offline I suggest that you think carefully about this ");
	sendNurseMessage(" Bye %SubName% ");
	sendNurseMessage(" I hope to see you again :) "); 
	///@EndTease FIXME
	//@End
	break;
	 case 3 :
	sendNurseMessage(random("Sorry to hear you couldn't handle it","I'm sorry to hear it was too much for you"));  
	sendNurseMessage(random("Perhaps you asked for a little too much","Maybe you asked for too much?")); 
	sendNurseMessage(random("If not then remember..","But if not remember","Well if not remember..")); 
	sendNurseMessage(" That settings let you change a lot of different things <i>smiles</i> ");
	if(getVar("SubPain")> 1){
		setVar("SubPain", getVar("SubPain")-1);
	}
	if(getVar("SubPainTolerance")>1) {
		setVar("SubPainTolerance",getVar("SubPainTolerance")-1);
	}
	if(getVar("SubEndurance")>1) {
		setVar("SubEndurance",getVar("SubEndurance")-1);
	}
	sendNurseMessage(" I just lowered your values a little ");
	sendNurseMessage(" That might make it a little easier next time sweet thing "); 
	//@Goto(MissA)
	
	 break;
	 
	 case 9 :
	   // bug
		sendNurseMessage(" It seems a bug has occurred.."); 
		sendNurseMessage(" I command you to report to Genome on Milovana.com that a bug occurred with a punishment ");
		sendNurseMessage(" Explain your bug in details! ");
		sendNurseMessage(" Report this code along with a bug report:"); 
		sendNurseMessage(" - PBE1 -"); 
		setVar("VARIABLE_GOLD",getVar("VARIABLE_GOLD")+50);
		sendNurseMessage(" You have just been sent 50 gold for finding a bug ");
		sendNurseMessage(" This bug has not affected anything important ");
		sendNurseMessage(" sending you back to your slave hub.."); 
	 break;
	}
 }else{
 
 
 switch (getVar("PunishmentCompleted")) {
	 
		case 01:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("S1Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		sendNurseMessage(random("You made it through the line writing!","You survived writing all those lines","You got through the linewriting!"));  @Goto(Continue)
		break; 
		case 02:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));
		delVar("S2Complete");
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		sendNurseMessage(random("You took your grounding like a proper slave","You handled that grounding like a good little girl")); 
		sendNurseMessage(" You should be proud randombreak; case 0ugar","dear","honey","sweety")); 
		break;
		case 03:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("S3Complete");
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		sendNurseMessage(random("You really did good in the corner..","You did well in the corner","You stayed like you should in the corner")); 
		sendNurseMessage(" You should be proud of yourself! ");  
		break; 
		case 04:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));
		delVar("S4Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		sendNurseMessage(" You make me proud when you complete a punishment! "); 
		break;
		case 05:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave")); 
		delVar("S5Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		sendNurseMessage(" You make me proud when you complete a punishment ");
		sendNurseMessage(" But show me your balls.. ",1,7); 
		sendNurseMessage(" Well they seem alright");  
		sendNurseMessage(" Luckily those little guys can handle quite a lot! "); 
		break; 
		case 06:
	 
		sendNurseMessage(random("Oh my","Hmm..","Well")); 
		delVar("S6Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(50,100));
		if (isVar("HasChastity")) {
			sendNurseMessage(random("I know its not easy being chastised like that","I know its not easy being forced into chastity")); 
		  sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
		 sendNurseMessage(random("If it gets bad then remember that ice or a shower is great!","Stop with all the sexy thoughts!"));  
		} else {
		 sendNurseMessage(" I know its not easy being given no-touch days like that! ");
		 sendNurseMessage(" But keep your head cool and you'll make it"); 
		 sendNurseMessage(" If it gets bad then remember that ice or a shower is great!");  
		}
		break; 
		case 11:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("M1Complete");
		setVar("VARIABLE_PUNISHMENT_POINTS",getvar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		sendNurseMessage(random("You made it through the line writing!","You survived writing all those lines","You got through the line writing!"));  
		break; 
		case 12:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("M2Complete");
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		sendNurseMessage(random("You took your grounding like a proper slave","You handled that grounding like a good little girl")); 
		sendNurseMessage(" You should be proud sugar! "); 
		break; 
		case 13:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("M3Complete");
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		sendNurseMessage(random("You really did good in the corner..","You did well in the corner","You stayed like you should in the corner")); 
		sendNurseMessage(" You should be proud of yourself! "); 
		break; 
		case 14:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave")); 
		delVar("M4Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		sendNurseMessage(" You make me proud when you complete a punishment!"); 
		break; 
		case 15:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave!")); 
		delVar("M5Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		sendNurseMessage(" You make me proud when you complete a punishment"); 
		sendNurseMessage(" But show me your balls..",1,7);  
		sendNurseMessage(" Well they seem alright ");
		sendNurseMessage(" Luckily those little guys can handle quite a lot! "); 
		break; 
		case 16:
	 
		sendNurseMessage(" Oh my "); 
		delVar("M6Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(90,140));
		if(isVar("HasChastity")) {
		sendNurseMessage(random("I know its not easy being chastised like that","I know its not easy being forced into chastity")); 
		sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
		sendNurseMessage(random("If it gets bad then remember that ice or a shower is great!","Stop with all the sexy thoughts!"));  
		} else {
		 sendNurseMessage(" I know its not easy being given no-touch days like that! "");
		 sendNurseMessage(" But keep your head cool and you'll make it""); 
		sendNurseMessage(" If it gets bad then remember that ice or a shower is great!"); 
		}
		break; 
		case 21:
	 
		sendNurseMessage(random("Good boy!","Good girl!","Good slut","Good slave"));  
		delVar("H1Complete"); 
		setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(130,180));
		sendNurseMessage(random("You made it through the line writing!","You survived writing all those lines","You got through the line writing!")); 
		sendNurseMessage(" And then on hard, that couldn't have been too easy ");
		break; 
		case 22:
	 
		sendNurseMessage(" Turn around #SubName and show me your ass.. ",1,7); 
		delVar("H2Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(130,180));
		sendNurseMessage(" Jesus sweet boy! ");
		sendNurseMessage(" Your touschy really took a beating this time.. ");
		sendNurseMessage(" I'm proud you made"," but lets have a look at it shall we?"); 
		sendNurseMessage(" Please find a skin cream or something similar ");
		sendNurseMessage(" Rub it on your inner thighs and butt cheeks ",1,30);  
		//comfort flow below
		sendNurseMessage(" Well sugar are alright? ");
		sendNurseMessage(" By the look of you"); 
		sendNurseMessage(" You weren't given much mercy huh.."); 
		sendNurseMessage(" Remember that it is okay to cry ");
		sendNurseMessage(" I certainly wouldn't think different of you if you did"); 
		sendNurseMessage(" I know how cruel these punishments can be ");
		sendNurseMessage(" Remember to put yourself first sweety <i>smiles</i> ");

		break; 
		case 23:
	 
		sendNurseMessage(" Oh my ");
		 delVar("H3Complete"); 
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(130,180));
		if (isVar("HasChastity")) {
			sendNurseMessage(random("I know its not easy being chastized like that","I know its not easy being forced into chastity")); 
			sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
			sendNurseMessage(random("If it gets bad then remember that ice or a shower is great!","Stop with all the sexy thoughts!")); 
			
		}else {
		sendNurseMessage(" I know its not easy being given no-touch days like that! ");
		sendNurseMessage(" But keep your head cool and you'll make it"); 
		sendNurseMessage(" If it gets bad then remember that ice or a shower is great! ");
		
		}
		break; 
		case 31:
	 
		sendNurseMessage(" Oh my ");
		 delVar("B1Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(130,200));
		sendNurseMessage(random("I know your tummy must be feeling weird right now","I know that was humiliating")); 
		sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
		sendNurseMessage(random("you'll start feeling more normal soon","you might want to stay near the toilet though"));  
		sendNurseMessage(random("Gurgle gurgle #Laugh","  I wonder if I'll get to administer one of those one day")); 
		break; 
		case 41:
	 
		sendNurseMessage(" Oh my ");
		  delVar("E1Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(150,200));
		sendNurseMessage(random("I know its not easy being ball busted like that","I know its not easy having your nuts treated like that) 
		sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine) 
		sendNurseMessage(random("Besides betas like you shouldnt procreate anyway!","what would you use those balls for anyway!) 

		break; 
		case 42:
	 
		sendNurseMessage(" Oh my ");
		 delVar("E2Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(150,200));
		sendNurseMessage(random("I know its not easy being ball busted like that","I know its not easy having your nuts treated like that")); 
		sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
		sendNurseMessage(random("Besides betas like you shouldnt procreate anyway!","what would you use those balls for anyway!")); 
		break; 
		case 43:
	 
		sendNurseMessage(" Oh my ");
		 delVar("E3Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(150,200));
		sendNurseMessage(random("I know its not easy being ball busted like that","I know its not easy having your nuts treated like that")); 
		sendNurseMessage(random("But keep your head cool and you'll make it","But stay calm and you should be fine")); 
		sendNurseMessage(random("Besides betas like you shouldnt procreate anyway!","what would you use those balls for anyway!")); 
		break; 
		case 44:
	 
		sendNurseMessage(" Oh my"," what a good bitch you were %SlaveName%"); 
		 delVar("E4Complete");
		 setVar("VARIABLE_PUNISHMENT_POINTS",getVar("VARIABLE_PUNISHMENT_POINTS")-randomInteger(150,200));
		sendNurseMessage(random("I know its not easy having your balls zapped like that","I know its not easy having your nuts treated like that")); 
		sendNurseMessage(random("I don't see any permanent scars","I don't smell any burning... thats a good sign")); 
		sendNurseMessage(random("But its over now and I think you learned an important lesson","But you made it through ok"," and I think you'll be more mindfull of the rules now")); 
		sendNurseMessage(random("Besides betas like you shouldnt procreate anyway!","what would you use those balls for anyway!")); 
	 break;
	 
	 default:
	 //@goto(BUG);
	 break;
	}
	 
 }




//@End
//(MissA)
//@End

	
function sendNurseMessage(message,picset, wait, skipImage) {
    textName = new javafx.scene.text.Text("[Nurse]: ");
    textName.setFill(javafx.scene.paint.Color.BLACK);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.BLACK);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    if(skipImage === undefined || !skipImage) {
		switch(picset){
			case 1 :
			showImage("Images/Spicy/Punishment/Nurses/" + (ASSISTANT_CURRENT_SET_ID % 10 + 1 ) + "/*.jpg");
			break;
			case 2 :
			showImage("Images/Spicy/Punishment/Reception/BusyPC/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1 ) + "/*.jpg");
			break;
			case 3 :
			showImage("Images/Spicy/Punishment/Reception/BusyPhone/" + (ASSISTANT_CURRENT_SET_ID % 5 + 1 )  + "/*.jpg");
			break;
			default:
			showImage("Images/Spicy/Punishment/Nurses/" + (ASSISTANT_CURRENT_SET_ID % 10 + 1 ) + "/*.jpg");
			break;
			
		}
    }

    if(wait === undefined || wait) {
        sleep(.5 + message.length * .1);
    }
}

