 setVar("FailedPunishment",0);


switch(getVar(VARIABLE.PUNISHMENT_PUNISHER)) {

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


switch(getVar(VARIABLE.PUNISHMENT_PUNISHER)) {
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

//	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	PM4=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 3) 
		PM4=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 5) 
		PM4=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 6) 
		PM4=3;
		break;
	}
	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	//sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4
	//sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	sendMessage(random("Oh my I love handling %DomName%'s pet","I'll be happy to punish you %Grin%","This is gonna be fun")); //#DT4
	if(getVar("SubEndurance")>=8) {
	PM4=3;}
	else if (getVar("SubEndurance")>4){
	PM4=2;}
	else  
	PM4=1;
	break;
	case 3 :
	//(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline, I just love that","You're not gonna like this %Grin%","I don't think your %Cock% will enjoy this","This is fun!"));// #DT4
sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

	if (getVar("SubEndurance")>=7) {
	PM4=3;}
	else if (getVar("SubEndurance")>3){
	PM4=2;}
	else  
	PM4=1;
	

	break;
	case 4 :
	//(Contact3)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	//sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4
	sendMessage(random("This is entirely my pleasure %Lol%","I'm gonna love this!","This is gonna be fun!")); //#DT4
	if (getVar("SubEndurance")>=6) {
	PM4=3;}
	else if (getVar("SubEndurance")>2){
	PM4=2;}
	else  
	PM4=1;
	
	break;

	
}

sendMessage("%Grin% "); //#DT4
sendMessage("You will not enjoy this! "); //#DT4

switch(PM4) {
	case(1):
	choices = ["I need to behave better.","My behaviour needs to improve.","I deserve this.","I brought this on myself.","I have earned this punishment."];
	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
	case(2):
	choices = ["I deserve This, there is no doubt about it.","I am to be held accountable when I Misbehave.","%DomHonorific% %DomName% control my %Cock%","I am but a slave, bound to My %DomHonorific%","I serve to please and service my %DomHonorific%"];
	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
	case(3):
	choices = ["I deserve to be thoroughly punished, But I am a spoiled slut.","I require steep punishment, but My #DomHonorific Spoils me.","I could use a lot harsher form of discipline. But I am spoiled.","I need to repent for my sins, my crimes and remember my Place.","I am but a lowlife serving a Goddess, a Queen, unworthy and pathetic."];
	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
}
errors=0;
correct=0;
total_lines=randomInteger(3,5);
errors_allowed=randomInteger(1,3);

sendMessage ("ok %SlaveName%, you're going to write the following line "+ total_lines + " times");

sentence = replaceVocab(sentence);
text2 = new javafx.scene.text.Text(sentence);
text2.setFill(javafx.scene.paint.Color.ROYALBLUE);
text2.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));
sendCustomMessage(text2);

sendMessage ("oh, and be careful " + random("get it wrong ","fuck it up ", "screw it up ", "make a mistake ") + (errors_allowed+1) +" times and you'll fail" );

while((errors <=errors_allowed) && (correct < total_lines))
{ response = createInput(); 

	if(response.contains(sentence))
		{correct=correct+1;
		 if (correct < total_lines) {
			 sendMessage ("correct! "+ (total_lines-correct) + " more to go!");}
			 else{ sendMessage ("oh %Slave% " + random("thats so True", "I agree", "you're soo right!", "for once I think you understand"));
			 }
		}
	else
		{errors=errors+1;
		if (errors <= errors_allowed)
			{sendMessage("wrong! you still have "+(total_lines-correct) + " lines left" );}
		else {sendMessage("wrong! Loser!");
		}
	}
	
}

if (errors>errors_allowed) {
	sendMessage ("It seems you failed your little assignment..");
	sendMessage ("This is the first and last time you fail..");
	sendMessage ("Lets try again shall we.. ");
		sentence = choices[randomInteger(0, choices.length - 1)];
		errors=0;
correct=0;
total_lines=randomInteger(10,15);
errors_allowed=randomInteger(1,3);

sendMessage ("ok %SlaveName%, you're going to write the following line "+ total_lines + " times");

sentence = replaceVocab(sentence);
text2 = new javafx.scene.text.Text(sentence);
text2.setFill(javafx.scene.paint.Color.ROYALBLUE);
text2.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));
sendCustomMessage(text2);

sendMessage ("oh, and be careful " + random("get it wrong ","fuck it up ", "screw it up ", "make a mistake ") + errors_allowed +" times and you'll fail" );



while((errors <=errors_allowed) && (correct < total_lines))
{ response = createInput(); 

	if(response.contains(sentence))
		{correct=correct+1;
		 if (correct < total_lines) {
			 sendMessage ("correct! "+ (total_lines-correct) + " more to go!");}
			 else{ sendMessage ("oh %Slave% " + random("thats so True", "I agree", "you're soo right!", "for once I think you understand"));
			 }
		}
	else
		{errors=errors+1;
		if (errors <= errors_allowed)
			{sendMessage("wrong! you still have "+(total_lines-correct) + " lines left" );}
		else {sendMessage("wrong! Loser!");
		}
	}
	
}


	
}

if (correct >= total_lines) {
	sendMessage(random("Well done","Good job","Splendid"));
	sendMessage("I love how literate my %Slave%'s are");
	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 01);
	run("dungeon/PunishmentBaseEnd.js");
	
}else{
sendMessage ("Lets stop this.. ");
sendMessage ("If you can't complete a simple punishment");
sendMessage ("Then you have a long way to go to redeem yourself.. ");
	run("dungeon/PunishmentBase.js");
}


	
//	setVar("punishmentCompleted", 01);
//	run("dungeon/PunishmentBaseEnd.js");