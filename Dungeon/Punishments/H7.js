
switch(("Punisher")) {

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
	//(Contact2)
	sendMessage(random("Well well","Oh my","Well") + " %SlaveName%");// #DT4
	sendMessage(random("Discipline I just love that","You're not gonna like this %Grin%","I don't think your %Cock% will enjoy this","This is fun!"));// #DT4

	if (getVar("SubEndurance")>=7) {
	PS2=3;}
	else if (getVar("SubEndurance")>3){
	PS2=2;}
	else  
	PS2=1;
	

	break;
	case 4 :
	//(Contact3)
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

sendMessage("setting up your punishment");



sendMessage("You.. "); //#DT4
sendMessage("Will.. "); //#DT4
sendMessage("Not.."); //#DT4
sendMessage("Enjoy.."); //#DT4
sendMessage("This.."); //#DT4
sendMessage("%SlaveName% .."); //#DT4
sendMessage(random("%Fetch%","%Fetch%","%Fetch%","%Fetch%","Retrieve","Bring me","Go and get","Go ahead and fetch") +" 4 large rubberbands"); //#DT4
sendMessage("Get naked if you're not already"); //#DT4
sendMessage("Put 1 rubberband around each buttcheek"); //#DT4
sendMessage("Place the remaining around your mid thigh"); //#DT4
sendMessage("A final warning.."); //#DT4
sendMessage("You are entering a punishment that involves hits from a rubberband"); //#DT4
sendMessage("The number is between 100 and 300 based on your settings"); //#DT4
sendMessage("You will be hit on your buttcheeks and inner thighs"); //#DT4
sendMessage("There will be no going back after this point.."); //#DT4
answer = sendInput("Are you sure you wish to proceed with this?"); //#DT4
while (true) {
            if (answer.isLike("yes")) {
				sendMessage("Okay then.."); //#DT4 @Goto(Continue)
				break;
			} 
			else if (answer.isLike("no")) {
				sendMessage("Okay I'm glad you know your limit.. "); //#DT4
				run("dungeon/PunishmentBase.js");
				break;
			}else {
			sendMessage("Yes or no %SlaveName%"); //#DT4
			answer.loop();
			}
}

sendMessage("You will be given 4 different commands"); //#DT4
sendMessage("Left thigh"); //#DT4
sendMessage("Right thigh"); //#DT4
sendMessage("Whenever you are given a thigh related command I want you pull the rubberband far back"); //#DT4
sendMessage("You have to be worried that it might snap"); //#DT4
sendMessage("If you aren't you haven't pulled it far enough back.."); //#DT4
sendMessage("Aim for your <i>inner</i> thigh"); //#DT4
sendMessage("The last 2 commands are"); //#DT4
sendMessage("Left buttcheek"); //#DT4
sendMessage("Right buttcheek"); //#DT4
sendMessage("Again as far back as it goes"); //#DT4
sendMessage("You may aim wherever you choose as long as you're aiming for a part of the buttcheek"); //#DT4
sendMessage("Let me just check a few things before we begin.. "); //#DT4


switch(PS2) {
	
	
case 1 :
	caningNumber=100;
break;
case 2 :
		caningNumber=200;
break;
case 3 :
		caningNumber=300;
break;
   

}
sendMessage (" Today you will be given "+caningNumber + " strikes %SlaveName%");
 
 while(caningNumber>0){
	 caningNumber=caningNumber-1;
	 if((caningNumber % 50 == 0) && (caningNumber <0))
		{sendMessage(caningNumber +" strikes remaining..%SubName%"); // #DT4
		}

	sendMessage(random("Left thigh..","Right thigh..","Left Cheek..","Right Cheek.."),randomInteger(1,2)); //#DT4 @Wait(#Random(1,2))
	sendMessage("Pull back!", randomInteger(1,3)); //#DT4
	variation = randomInteger(1,40);
	switch(variation) {
		case 1:
		sendMessage("you can pull it further back than that %slaveName%", randomInteger(1,2)); //#DT4
		break;
		case 2:
		sendMessage("%subName%, you deserve this ", 2); //#DT4
		break;
		case 3:
		sendMessage("Suffer %slave% ", 2); //#DT4
		break;
			case 1:
		sendMessage("a little further %Bitch%...", randomInteger(1,2)); //#DT4
		break;
	}
	playAudio("Audio/Spicy/Punishment/SpankingCane/Cane1.mp3"); // @Goto(CaningBase)
 }
sendMessage("Well done %SubName%"); //#DT4
sendMessage("I'm impressed by your willpower today "); //#DT4 
changeMeritLow(false);
setVar("PunishmentComplete", true);
setVar("punishmentCompleted", 27);
run("Dungeon/PunishmentBaseEnd.js");