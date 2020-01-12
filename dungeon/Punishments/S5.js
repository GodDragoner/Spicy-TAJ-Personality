

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
switch(PS2) {
	
	
case 1 :
	BallCrushing=randomInteger(13,20);

break;
case 2 :
	BallCrushing=randomInteger(17,24);

break;
case 3 :
	BallCrushing=randomInteger(21,28);

   
break;
}

sendMessage("So %slaveName% "); //#DT4
sendMessage("The punishment you're about to be given "); //#DT4
sendMessage("Might be considered a game to some "); //#DT4
sendMessage("A mindgame %Grin% "); //#DT4
sendMessage("I need you to fetch your ballcrusher and put it on so its ready.. ",30); //#DT4 @Wait(30)

crusherNotOn=true;
while(crusherNotOn){
answer=sendInput("Are you done? "); //#DT4

if(answer.isLike("yes")){
	sendMessage("%Good% "); //#DT4 @Goto(Info2)
	crusherNotOn=false;
	} 
	else if(answer.isLike("no")){
	sendMessage("Why are you bothering with answering no? "); //#DT4 
	changeMeritLow(true);
	sendMessage("Put it on! ", 30); 
	}
	else {
		sendMessage("Yes or no? "); //#DT4
		sendMessage("Put it on! ", 30); 
	}


}
sendMessage("Now tighten the top and bottom until its a tight fit "); //#DT4
sendMessage("It shouldn't be painful at all "); //#DT4
sendMessage("Just feel <i>tight.. ",10); //#DT4 @Wait(10)
sendMessage("Every time I tell you to 'tighten' "); //#DT4
sendMessage("You will turn the two bottom screws 90 degrees in whatever direction tightens them.. "); //#DT4
sendMessage("Then some time will pass and I will ask you to tighten them again. "); //#DT4
sendMessage("This is repeated over and over "); //#DT4
sendMessage("But! "); //#DT4
sendMessage("The game stops whenever you say 'stop' "); //#DT4
sendMessage("Now before we even begin I will have picked a random number "); //#DT4
sendMessage("If the number of times I said 'tighten' is HIGHER than the random number i chose "); //#DT4
sendMessage("You win.. "); //#DT4
sendMessage("If not this won't count as a punishment and I will claim a small fee.. "); //#DT4
sendMessage("You need to be aware of one thing! "); //#DT4
sendMessage("When you say stop you have to last full 2 minutes before you have permission to release the pressure.. "); //#DT4
sendMessage("If you can't last 2 minutes it will also count as a failed punishment.. "); //#DT4 @CustomMode(stop, Goto, Stop)
sendMessage("Well lets begin! "); //#DT4 
BallCrushingCount=0;

keepGoing=true;
while (keepGoing) {
	answer=sendInput(random("tighten..","tighten it","Tighten the device..","tighten","Tighten..","turn those screws","Tighten...","tighten it..","tighten it...","tighten it %slaveName%", "give me a little more squeeze"),randomInteger(7,16)); //#DT4
	 BallCrushingCount=BallCrushingCount+1; 
	 if(answer.isLike("stop")){
		 keepGoing=false;
		
		}
}
sendMessage("You used the magic word! "); //#DT4 
//@CustomMode(ModeText, Normal) 
sendMessage("%Grin%");
 if (BallCrushingCount<BallCrushing) {
	sendMessage("Well to little surprise you failed.. "); //#DT4 
	setVar(VARIABLE_GOLD, getVar(VARIABLE_GOLD)-25);
	//@TempFlag(PunishmentComplete) 
	//@TempFlag(PunishmentFailed)
	setVar("PunishmentFailed", true);
	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 05);
	run("Dungeon/PunishmentBaseEnd.js");
 } else {
	
	sendMessage("Well well you made it! "); //#DT4
	sendMessage("I'm actually a little impressed "); //#DT4
	changeMeritLow(false); 
	//@TempFlag(PunishmentComplete)

	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 05);
	run("Dungeon/PunishmentBaseEnd.js");

 }