

switch(getVar("Punisher")) {

	case 1 :
	// @Goto(Hello)
	break;
	case 2 :
	setSender(2);
	sendDungeonMessage(" Contacting %DomHonorific% " + "%domFriend1Name% ..",1);

	break;
	case 3 :
	setSender(3);
	sendDungeonMessage(" Contacting %DomHonorific% " + "%domFriend2Name% ..",1);

	break;
	case 4 :
	setSender(4);
	sendDungeonMessage(" Contacting %DomHonorific%" + "%domFriend3Name% ..",1);


	break;
}


sendMessage("Well "+ random("hello","hi")+ " %SlaveName%");// #DT4 @Goto(Start)


switch(getVar("Punisher")){
	case 1 :
	//(Domme)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
	//1 = easy, 2= medium 3= hard
	PM5=2;
	switch(getVar("personalityStrictness")) {
		case 1:
		if(getVar("SubEndurance") <= 3) 
		PM5=1;
		break;
		case 2:
		if(getVar("SubEndurance") <= 5) 
		PM5=1;
		break;	
		case 3:
		if(getVar("SubEndurance") >= 6) 
		PM5=3;
		break;
	}

	
	break;
	case 2 :
	//(Contact1)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%" );// #DT4
	sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	
	break;
	case 3 :
	//(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline I just love that","You're not gonna like this %Grin%","I don't think your %Cock% will enjoy this","This is fun!"));// #DT4


	break;
	case 4 :
	//(Contact3)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4

	
	break;

	
}

sendMessage("setting up your punishment");


sendMessage("So %slaveName% "); //#DT4
sendMessage("Your Mistress %DomName% has many friends  "); //#DT4
sendMessage(random("Some of which are skilled in the art of Torture ", "Many of which enjoy female domination", "a few of which like tormenting poor slaves like you" )); //#DT4
sendMessage("I've decided to hand you off to one of them for your punishment"); //#DT4
sendMessage("you are to do absolutely everything she instructs",7); //#DT4 @Wait(30)
sendMessage("Everything bitch!"); //#DT4 @Wait(30)

playVideo("Videos/Spicy/Punishments/Medium/*", true);


	sendMessage("Well well welcome back! "); //#DT4
	sendMessage("it seems like you survived "); //#DT4

	//@TempFlag(PunishmentComplete)

	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 18);
	run("Dungeon/PunishmentBaseEnd.js");

