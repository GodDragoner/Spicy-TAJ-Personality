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
	sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

//	sendMessage(random("It's time to pay","We need to settle your recent behaviour","I believe I have just the thing to discipline you","I believe I know how to correct your bad behaviour!")); //#DT4
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
	//sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4
	//sendMessage(random("I'm absolute sure you're gonna hate this and that makes me love it!","We need to correct your poor behaviour","You need a little discipline","Its about time we did something about your behaviour") );// #DT4
	sendMessage(random("Oh my I love handling %DomName%'s pet","I'll be happy to punish you %Grin%","This is gonna be fun")); //#DT4
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
sendMessage(random("Lets see what we can do about you %Grin%","Its time to make you repent your sins","I suppose we need to correct your recent behaviour","I have something for you..")); //#DT4

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
	//sendMessage(random("Discipline can never be cruel enough","Discipline is all about being cruel","Discipline is about showing no mercy!","No mercy for the bad ones.."));// #DT4
	sendMessage(random("This is entirely my pleasure %Lol%","I'm gonna love this!","This is gonna be fun!")); //#DT4
	if (getVar("SubEndurance")>=6) {
	PS2=3;}
	else if (getVar("SubEndurance")>2){
	PS2=2;}
	else  
	PS2=1;
	
	break;

	
}

sendMessage("%Grin% "); //#DT4
sendMessage("You will not enjoy this! "); //#DT4
sendMessage("This punishment is rather simple.. "); //#DT4
sendMessage("But that doesn't mean its easy.. "); //#DT4
sendMessage("Fetch 2 pegs %SlaveName% ",2); //#DT4 
response=sendInput("Got them? "); //#DT4
while( true) {
 if (response.isLike("yes", "yep", "yeah", "I did")) {
	 sendMessage("%Good%"); //#DT4
 break;}
response.loop();
}
sendMessage("Now in just a moment I will tell you attach the pegs to a certain part of your body "); //#DT4
sendMessage("You don't want to attach them too well..  "); //#DT4
sendMessage("because just a moment later I will tell you to rip them off %EmoteHappy% "); //#DT4
sendMessage("Neither do you want to attach them too loosely because you will have to flick them once or twice "); //#DT4
sendMessage("If they fall off I want you to report it too me by saying 'fell off' "); //#DT4 //fixme... add response here @CustomMode(fell off, Goto, FellOff)
sendMessage("If they fall off due to a flick you will have to repeat this punishment in full and pay a small fee.. "); //#DT4
sendMessage("Let me just check my papers.. "); //#DT4 @Goto(Start)
sendMessage("Remember to say 'yes %DomHonorific% ' right after you're done pulling them off.. "); //#DT4 
S4Round=0;
switch(PS2)  {
	case 1 :
	RipPegs=randomInteger(4,6);
	break;
	case 2 :
	RipPegs=randomInteger(6,8);
	break;
	case 3 :
	RipPegs=randomInteger(8,11);
	break;
	
}

while (RipPegs>=S4Round)  {
	 S4Round=S4Round+1;

	 place=randomInteger(0,13);
	 switch(place) {
	case 0:
	sendMessage(random("Attach","Place","Put") + " the pegs on to some sensitive skin below your feet ",5); //#DT4 
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them") ,5); //#DT4
	break;
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:

	//(Nipples)
	sendMessage(random("Attach","Place","Put")+" a peg on each of your nipples ",5); //#DT4 
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them") ,5); //#DT4  @Goto(Black)
	break;
	case 6:
	case 7:
	case 8:
	
	//(Balls)
	sendMessage(random("Attach","Place","Put")+" the pegs to your %Balls% ",5); //#DT4 @Wait(5)
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them") ,5); //#DT4 @Wait(5) @Goto(Black)
	break;
	case 9:
	case 10:

	//(Cock)
	if(getVar("chastityon")) {
		sendMessage(random("Attach","Place","Put")+" the pegs on to your "+random("%Balls%","nipples"),5); //#DT4 @Wait(5)
	} else {
	sendMessage(random("Attach","Place","Put")+" the pegs to some lose skin from your %Cock% ",5); //#DT4 @Wait(5)
	}
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them"),5); //#DT4 @Wait(5) @Goto(Black)
	break;
	case 11:
	//(Thigh)
	sendMessage(random("Attach","Place","Put") +" a peg on each of your inner thighs, the closer to your groin the better.. ",5); //#DT4 @Wait(5)
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them"),5); //#DT4 @Wait(5) @Goto(Black)
	break;
	case 12:
	//(Nose)
	sendMessage(random("Attach","Place","Put")+" the pegs to your nose %Grin% ",5); //#DT4 @Wait(5)
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them"),5); //#DT4 @Wait(5) @Goto(Black)
	break;
	case 13:
	//(Eyebrows)
	sendMessage(random("Attach","Place","Put")+" a peg on each of your eyebrows ",5); //#DT4 @Wait(5)
	sendMessage(random("Flick them once or twice","Flick them just once","Flick them a few times","Flick them"),5); //#DT4 @Wait(5) @Goto(Black)
	break;
}
	
	//(Black)
	sendMessage(random("Be ready!","Prepare","Prepare yourself","Get ready","Stay ready","Ready yourself"));
	showImage("Images/Spicy/Punishment/Grounding/BlackBase.*");
	wait(randomInteger(2,10));
	//(Rip)
	//sendMessage(random("Rip it off!","Pull them off","Rip it!","Pull them off completely!","Rip them away! %Grin%","Rip it off","Rip.. it.. off!","Rip it off..","Rip it off..","Rip it off..","Rip it off..")); //#DT4 @Timeout(8,Slow)
     response = sendInput(random("Rip it off!","Pull them off","Rip it!","Pull them off completely!","Rip them away! %Grin%","Rip it off","Rip.. it.. off!","Rip it off..","Rip it off..","Rip it off..","Rip it off.."),8);
     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+S4Round+" done.. "); //#DT4 @Goto(RipBase)
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
			sendMessage("Aww too slow.. "); //#DT4
			changeMeritMedium(true);
			sendMessage("Remember to say 'yes %DomHonorific%' <i>after</i> the pegs have been pulled off.. "); //#DT4 
			RipPegs	=	RipPegs	+	randomInteger(1,3);
			sendMessage("I'm expecting you to follow my commands <i>when</i> I give them "); //#DT4
			sendMessage("I don't accept delays just because something hurts a little.. "); //#DT4
			sendMessage("Well then I'm just adding a few extra rounds %Grin% "); //#DT4 @Goto(RipBase)
		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'.. "); //#DT4
		 break;
		}
	
	 }
}


 
	sendMessage("No more rounds! "); //#DT4 
	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 04);
	run("Dungeon/PunishmentBaseEnd.js");
