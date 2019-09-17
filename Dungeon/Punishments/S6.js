
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

sendMessage(random("Due to your lack of good behaviour","Due to bad behaviour","Because of poor behaviour","Since you've been bad")); //#DT4
if(getVar("HasChastity")) {
	if(getVar("chastityon")) {sendMessage(random("I'm extending your chastity time","I'm leaving that  %Cage% on a little longer","I'm going to keep that %Cock% in prison a few more days")); 
	sendMessage("And since you're caged.. "); //#DT4 @TempFlag(S6Complete)
	sendMessage(random("I think that concludes our business..","I believe our business to be concluded","I believe we're done here..")); // #DT4 @CallReturn(CR\BackgroundMode\Punishment\PunishmentBaseEnd.txt)
	}else
	{sendMessage(random("I'm putting you in chastity","I'm placing you in your %Cage%","I'm going to cage that %Cock%"));
	sendMessage("And since you aren't caged yet.. ");
	lockChastityCage();

	}
}else {sendMessage(random("I'm putting you in a no-touch period","I'm gonna give you a no-touch period","You'll be punished by not touching that %Cock%")); //#DT4
	sendMessage("%subName%, I trust that you'll honor my instructions not to touch... ");
	sendMessage("I've had to force chastity on indolent slaves in the past... ");
	sendMessage(random("their involuntary suffering was truly pathetic", "getting ones %Cock% pierced for chastity can be truly emasculating", "I've even castrated one or two.."));
}
switch(PS2) {
	
	
case 1 :
	addLockUpTime(24);
break;
case 2 :
	addLockUpTime(48);
break;
case 3 :
	addLockUpTime(72);
break;
   

}


	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 06);
	run("Dungeon/PunishmentBaseEnd.js");
