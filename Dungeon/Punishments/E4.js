


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

Hello();



function Hello()
{
    sendMessage(random("Hello ", "Hi ") + "%SlaveName%");
    Info();
}
function Info()
{
    sendMessage("%Grin% ");
    sendMessage("You will not enjoy this! ");
    sendMessage("I'm about to make you my bitch! ");
    sendMessage("%Lol% ");
    sendMessage("Fetch your shock collar %SlaveName%" );
	showImage("GNMImages/Toys/Shock Collar.jpg");
	sleep(10);
    let answer0 = sendInput("Got it? ");
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else
    {
        sendMessage("%Good% ");
    }
    let answer1 = sendInput("is it charged up slave??? ");
    if (answer1.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else
    {
        sendMessage("well go charge it quickly and tell me when it's done ");
		waitforDone();
    }
    sendMessage("Go ahead and turn it on and wrap the collar around your %Balls%");
    sleep(15);
    
    sendMessage("Now in just a moment I will tell you how to adjust your zapper ");
    sendMessage("then I'm going to tell you to push that magical button %EmoteHappy% ");
    sendMessage("Let me just check my papers.. ");
    Start();
    return;
   // Start();
}
function Start()
{
	
	
	
		
	switch(getVar(VARIABLE.PUNISHMENT_PUNISHER)) {

		case 1 :
		Domme();
		break;
		case 2 :
		Contact1();
		break;
		case 3 :
		Contact2();
		break;
		case 4 :
		Contact3();

		break;
	}

  //  Domme();
}
function Domme()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("Let's see what we can do about you %Grin% ", "It's time to make you repent your sins ", "I suppose we need to correct your recent behaviour ", "I have something for you.. ") );
    if(getVar("Personality1", false))
    {
        if (getVar("SubPainTolerance", 0) <= 3)
        {
            PM4Easy();
            return;
        }
    }
    if(getVar("Personality2", false))
    {
        if (getVar("SubPainTolerance", 0) <= 5)
        {
            PM4Easy();
            return;
        }
    }
    if(getVar("Personality3", false))
    {
        if (getVar("SubPainTolerance", 0) >= 6)
        {
            PM4Hard();
            return;
        }
    }
    PM4Medium();
    return;
    //Contact1();
}
function Contact1()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("Oh my I love handling %DomName%'s pet","I'll be happy to punish you %Grin%","This is gonna be fun"));
	
	if(getVar("SubPainTolerance")>=8) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>4){
	 PM4Medium();}
	else  
	 PM4Easy();
	

    return;
    //Contact2();
}
function Contact2()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("You're not gonna like this %Grin% ", "I'm not sure you'll enjoy this my bitch! ", "I don't think you'll enjoy this sparky.. ") );
	
	
		if(getVar("SubPainTolerance")>=7) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>3){
	 PM4Medium();}
	else  
	 PM4Easy();

    return;
   // Contact3();
}
function Contact3()
{
    sendMessage(random("Well well ", "Oh my ", "Well ") + "%SlaveName% ");
    sendMessage(random("This is entirely my pleasure %Lol% ", "I'm gonna love this! ", "This is gonna be fun! ") );
 	if(getVar("SubPainTolerance")>=6) {
	 PM4Hard();}
	else if (getVar("SubPainTolerance")>2){
	 PM4Medium();}
	else  
	 PM4Easy();

    return;
  //  PM4Easy();
}
function PM4Easy()
{
    sendMessage("Remember to say \"yes %DomHonorific%\" right after you've shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs", randomInteger(9,12));
    setTempVar("M4Easy", true);
    RipBase();
    return;
//    PM4Medium();
}
function PM4Medium()
{
    sendMessage("Remember to say \"yes %DomHonorific%\" right after you've shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs",  randomInteger(12,15)); 
    setTempVar("M4Easy", true);
    RipBase();
    return;
 //   PM4Hard();
}
function PM4Hard()
{
    sendMessage("Remember to say \"yes %DomHonorific%\" right after you've shocked yourself.. ");
    setVar("M4Round", 0);
    setVar("RipPegs",  randomInteger(15,18));
    setTempVar("M4Easy", true);
    RipBase();
    return;
 //   RipBase();
}
function RipBase()
{
    setVar("M4Round", getVar("M4Round", 0) + 1);
    if (getVar("RipPegs", 0) <= 0)
    {
        End();
        return;
    }
    setVar("RipPegs", getVar("RipPegs", 0) - 1);
    switch(random("ten", "twentyfive", "fifty", "Holdit", "FF3", "FF2", "FF1"))
    {
        case "ten":
        ten();
        return;
        break;
        case "twentyfive":
        twentyfive();
        return;
        break;
        case "fifty":
        fifty();
        return;
        break;
        case "Holdit":
        Holdit();
        return;
        break;
        case "FF3":
        FF3();
        return;
        break;
        case "FF2":
        FF2();
        return;
        break;
        case "FF1":
        FF1();
        return;
        break;
    }
 //   ten();
}
function ten()
{
    sendMessage("Set the controller to 10  ");
    sleep(5);
    Black();
    return;
 //   twentyfive();
}
function twentyfive()
{
    sendMessage("Set the controller to 25  ");
    sleep(5);
    Black();
    return;
 //   fifty();
}
function fifty()
{
    sendMessage("Set the controller to 50  ");
    sleep(5);
    Black();
    return;
 //   Holdit();
}
function Holdit()
{
    sendMessage("Set the controller to 5 ");
    sleep(5);
    sendMessage("This time %SlaveName% I want you to hold the button for the duration of the sound you're about to hear.");
    sendMessage(random("Tap","press","hold")+" the controller!" );
	playAudio("Audio/Spicy/Electricity.mp3");

	response=sendInput("",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'..even if it's hard to hold for so long "); //#DT4
		 //break
		}
	
	 }
	


    return;
//    FF1();
}
function FF1()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname1")+" is going to be the one that decides to shock you...");
    sleep(3);

    textName = "["+getVar("blackmailname1")+"] :";
    sendArbMessage(textName, "hmmm... let's set the controller to "+random("5","10","15","25","50"),0); 
	showImage("Images/Spicy/FFriends/1/*");
		sleep(3); 
    sendArbMessage(textName,"%SlaveName%, I want you to truly understand that you deserve this.",0);
	showImage("Images/Spicy/FFriends/1/*");
	sleep(3);  	
    sendArbMessage(textName,"Slave, think of all the ways you've failed me over time",0);

	showImage("Images/Spicy/FFriends/1/*");
	sleep(3);
    sendArbMessage(textName,random("Tap","press","hold","tap twice")+" the controller bitch ",0);
	showImage("Images/Spicy/FFriends/1/*");
	playAudio("Audio/Spicy/Electricity.mp3");
	response=sendInput("",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
		 	showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 break;
		}
	
	 }
	
	


      //  RipBase();
        return;
    
//    FF2();
}
function FF2()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname2")+" is going to be the one that decides to shock you...");
    sleep(3);
	
		  
    textName = "["+getVar("blackmailname2")+"] :";
   
    sendArbMessage(textName,"hmmm... let's set the controller to "+ random("5","10","15","25","50"),0 );

	  showImage("Images/Spicy/FFriends/2/*");
	  sleep(3);
    sendArbMessage(textName,"I want you to think of what you did to earn this punishment ",0);
	 showImage("Images/Spicy/FFriends/2/*");
		 sleep(3);
    sendArbMessage(textName,random("Tap","press","hold","tap twice")+" the controller ",0);

	  showImage("Images/Spicy/FFriends/2/*");
	  playAudio("Audio/Spicy/Electricity.mp3");
	
		response=sendInput("",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
			showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 //break;
		}
	
	 }
	
       // RipBase();
        return;
  
 //   FF3();
}
function FF3()
{
    sendMessage("This time %SlaveName% your friend "+ getVar("blackmailname3")+"  is going to be the one that decides to shock you...");
    sleep(3);
	
    textName = "["+getVar("blackmailname3")+"] :";

   sendArbMessage(textName,"hmmm... let's set the controller to "+random("5","10","15","25","50"),0 );
	showImage("Images/Spicy/FFriends/3/*");
	sleep(3);
	
   sendArbMessage(textName,"are you ready to do this for me?",0);	
	showImage("Images/Spicy/FFriends/3/*");
	sleep(3) ;
   sendArbMessage(textName,random("Tap","press","hold","tap twice")+ " the controller twice cutie ",0);
	showImage("Images/Spicy/FFriends/3/*");
	playAudio("Audio/Spicy/Electricity.mp3");
	response=sendInput("",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		sendArbMessage(textName," I only wanna hear a firm 'yes Mistress'.. ",0); //#DT4
			showImage("Images/Spicy/FFriends/1/*");
			sleep(3);
		 	showImage("Images/Spicy/FFriends/3/*");
		 //break;
		}
	
	 }
 
      //  RipBase();
        return;

 //   Thigh();
}

function Black()
{
    sendMessage(random("Be ready!","Prepare","Prepare yourself","Get ready","Stay ready","Ready yourself") );
	showImage("Images/Spicy/Punishment/Grounding/BlackBase.*"); 
	sleep(randomInteger(2,10));
    Rip();
}
function Rip()
{
    sendMessage(random("Tap","press","hold","tap twice","squeeze")+" the controller ");
    playAudio("Audio/Spicy/Electric Shock.mp3");
	response=sendInput("",10);
	     while(true){
		 if (response.isLike("yes")) {
			 
		sendMessage("Round "+getVar("M4Round")+" done.. "); //#DT4 @Goto(RipBase)
		RipBase();
		 break;}
		 if (response.isTimeout()){
			 //(Slow)
				Slow();
		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'.. "); //#DT4
		 //break
		}
	
	 }
	
	
	
        return;
    
  //  Slow();
}
function Slow()
{
    sendMessage("Aww too slow..  ");
	changeMeritMedium(true);
    sendMessage("Remember to say 'yes %DomHonorific% ' <i>after</i> you've shocked yourself ");
	setVar("RipPegs",getVar("RipPegs")+randomInteger(1,3));
    sendMessage("I'm expecting you to follow my commands <i>when</i> I give them");
    sendMessage("I don't accept delays just because something hurts a little.. or you're a scared pussy");
    sendMessage("Well then I'm just adding a few extra rounds %Grin% ");
    RipBase();
    return;
    //End();
}
function End()
{
    sendMessage("No more rounds! ");
    setTempVar("E4Complete", true);
    sendMessage("Remember to put the shock collar back on the charger ");
    sendMessage("we never know when I'll want to use it again %Grin% ");
		setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 24);
	run("Dungeon/PunishmentBaseEnd.js");
    setTempVar("PunishmentComplete", true);

    return;
}