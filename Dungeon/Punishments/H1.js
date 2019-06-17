 setVar("FailedPunishment",0);


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


switch(getVar("Punisher")) {
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Lets see what we can do about you %GNMGrin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

//	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	PM4=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 4) 
		PM4=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 6) 
		PM4=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 7) 
		PM4=3;
		break;
	}
	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	//sendMessage(random("Lets see what we can do about you %GNMGrin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4
	//sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	sendMessage(random("Oh my I love handling %DomName%'s pet","I'll be happy to punish you %GNMGrin%","This is gonna be fun")); //#DT4
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
	sendMessage(random("Discipline I just love that","You're not gonna like this %GNMGrin%","I don't think your %GNMCock% will enjoy this","This is fun!"));// #DT4
sendMessage(random("Lets see what we can do about you %GNMGrin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

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
	sendMessage(random("This is entirely my pleasure %GNMLol%","I'm gonna love this!","This is gonna be fun!")); //#DT4
	if (getVar("SubEndurance")>=6) {
	PM4=3;}
	else if (getVar("SubEndurance")>2){
	PM4=2;}
	else  
	PM4=1;
	
	break;

	
}

sendMessage("%GNMGrin% "); //#DT4
sendMessage("You will not enjoy this! "); //#DT4

switch(PM4) {
	case(1):
	choices = ["I need to be on my very best behaviour, I firmly believe that I owe it to my %DomHonorific% to try much hard.","I'm in need of constant discipline, even a short moment without and I cannot comprehend the dire consequences.","I dream of the day where I will be placed in a chastity belt, knowing that in just a moment the key will be destroyed.","I have been bad and this is my punishment, wasting time, doing nothing constructive or anything recreational.","I should try much much harder to be a proper servant. I'm blessed that %DomHonorific% %DomName% is Mercifull."];
	

	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
	case(2):
	choices = ["I should couNt myself lucky, For a moment it waS considered if I should have been a harSh caninG.","I have been a bad boy, I hAve been a bad boy, I have beEn a bad boy, I have been a Bad boy.,.","I need Chastity, I crave cHastity, I dream of chAstity, I believe in chaStity, I am chastiTy.","I will neVer stop serVing, I will neVer be free, I am not equal to women nOr real men.","I wIll crY In jOY whEnEvEr mY %DomHonorific% Is fUckEd bY mY frIEnds or cOmplEtE strAngErs."];
	

	
	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
	case(3):
	choices = ["Tick Tock: vlesfjnjnlkjnqkjrn3425","Tick Tock: vvbakjhbk1247823jhkjsf","Tick Tock: skdfjnqkl3hr4h3rjbh34r","Tick Tock: 23lkkjbdqqoq847b defj4","Tick Tock:  23ofiu4o3nweflq3448fn"];
	

	sentence = choices[randomInteger(0, choices.length - 1)];
	break;
	
}
errors=0;
correct=0;
total_lines=randomInteger(15,25);
errors_allowed=randomInteger(2,4);

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
total_lines=randomInteger(15,25);
errors_allowed=randomInteger(2,4);

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
	setVar("punishmentCompleted", 21);
	run("dungeon/PunishmentBaseEnd.js");
	
}else{
sendMessage ("Lets stop this.. ");
sendMessage ("If you can't complete a simple punishment");
sendMessage ("Then you have a long way to go to redeem yourself.. ");
	run("dungeon/PunishmentBase.js");
}


	
//	setVar("punishmentCompleted", 21);
	//run("dungeon/PunishmentBaseEnd.js");