main();
function main()
{
    if(getVar("ChorePrivHuma", false))
    {
        ChorePrivHuma();
        return;
    }
    if(getVar("ChorePrivHumb", false))
    {
        ChorePrivHumb();
        return;
    }
    if(getVar("ChorePrivHumc", false))
    {
        ChorePrivHumc();
        return;
    }
    if(getVar("ChorePrivHumd", false))
    {
        ChorePrivHumd();
        return;
    }
    if(getVar("ChorePrivHume", false))
    {
        ChorePrivHume();
        return;
    }
    if(getVar("ChorePrivHumf", false))
    {
        ChorePrivHumf();
        return;
    }
    Choose();
}
function Choose()
{
    switch(random("a", "b", "c", "d", "e", "f"))
    {
        case "a":
        a();
        return;
        break;
        case "b":
        b();
        return;
        break;
        case "c":
        c();
        return;
        break;
        case "d":
        d();
        return;
        break;
        case "e":
        e();
        return;
        break;
        case "f":
        f();
        return;
        break;
    }
    ChorePrivHuma();
}
function ChorePrivHuma()
{
    sendVirtualAssistantMessage(" Well it seems you haven't yet reported back the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    aContinued();
    return;
    ChorePrivHumb();
}
function ChorePrivHumb()
{
    sendVirtualAssistantMessage(" Well it seems I'm still waiting to hear about how your last chore went...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    bContinued();
    return;
    ChorePrivHumc();
}
function ChorePrivHumc()
{
    sendVirtualAssistantMessage(" Well it seems you haven't completed the last chore I gave you yet...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    cContinued();
    return;
    ChorePrivHumd();
}
function ChorePrivHumd()
{
    sendVirtualAssistantMessage(" acording to my records, you still have a chore I'm waiting to hear about...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    dContinued();
    return;
    ChorePrivHume();
}
function ChorePrivHume()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    eContinued();
    return;
    ChorePrivHumf();
}
function ChorePrivHumf()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    fContinued();
    return;
    a();
}
function a()
{
    if(!getVar("toyAdvancedLingerie", false))
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" " + random("Let\'s make a deal", "Let\'s see if you\'ll agree to this deal"));
 sendVirtualAssistantMessage("Do you promise to wear a pair of stockings for a full day, within the next week for 300 gold?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {	sendVirtualAssistantMessage(" Yes or no slave?");
        answer0 = createInput();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
        Deala();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" I see");
        NoDeala();
        return;
    }
    NoDeala();
}
function NoDeala()
{
    sendVirtualAssistantMessage(" Oh well..");
    run("Chores/ChoreBase.js");
    return;
}
function Deala()
{
    sendVirtualAssistantMessage(" Excellent!");
    setVar("ChorePrivHuma", true);
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Return to chores when you\'ve completed it!");
    run("Assistant/AssistantLobby.js");
    aContinued();
}
function aContinued()
{
   sendVirtualAssistantMessage(" Have you completed the stockings challenge?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
            sendVirtualAssistantMessage(" Yes or no?");
		 answer0.loop();
    }
    if (answer0.isLike("yes"))
    {
          sendVirtualAssistantMessage("%GNMGood%");
        delVar("ChorePrivHuma");
		    delVar("ChoreActive");
    }
    else if (answer0.isLike("no"))
    {
        SMessage("%VANC% %VANPThen% I don\'t know what you\'re doing here..");
        a2();
        return;
    }
    sendVirtualAssistantMessage(" 300 gold has been sent as promised..");
    delVar("ChoreActive");
    setVar("GNMGold", getVar("GNMGold", 0) + 300);
changeMeritMedium(false);
    a2();
}
function a2()
{
    run("Chores/ChoreBase.js");
    b();
}
function b()
{
    if(!getVar("toyBasicLingerie", false))
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" " + random("Let\'s make a deal", "Let\'s see if you\'ll agree to this deal"));
    sendVirtualAssistantMessage(" Do you promise go shopping while wearing a bra for 100 gold?");
	sendVirtualAssistantMessage(" You may conceal it..");
    let answer0 = createInput("yes","no");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        sendVirtualAssistantMessage("%VANC% %VANP% Yes or no slave?");
		answer0.loop;
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
		answer0.clearOptions();
        Dealb();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" I see");
		answer0.clearOptions();
        NoDealb();
        return;
    }
    NoDealb();
}
function NoDealb()
{
    sendVirtualAssistantMessage(" Oh well..");
    run("Chores/ChoreBase.js");
   return;
}
function Dealb()
{
    sendVirtualAssistantMessage(" Excellent!");
    setVar("ChorePrivHumb", true);
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Return when you\'ve completed it!");
    run("Assistant/AssistantLobby.js");
    bContinued();
}
function bContinued()
{
	sendVirtualAssistantMessage(" Have you completed the bra shopping challenge?");
     answer0 =createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
         sendVirtualAssistantMessage(" Yes or no?");
		 answer0.loop();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage("%GNMGood%");
        delVar("ChorePrivHumb");
		    delVar("ChoreActive");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Then I don\'t know what you\'re doing here..");
        return;
    }
    sendVirtualAssistantMessage(" 100 gold has been sent as promised..");
    delVar("ChoreActive");
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
	changeMeritMedium(false);
    b2();
}
function b2()
{
    run("Chores/ChoreBase.js");
    c();
}
function c()
{
    if(!getVar("toyBasicLingerie", false))
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" " + random("Let\'s make a deal", "Let\'s see if you\'ll agree to this deal"));
    sendVirtualAssistantMessage(" Do you promise to sleep in nothing but a set of panties tonight for 100 gold?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
         sendVirtualAssistantMessage("   Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
        Dealc();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" I see");
        NoDealc();
        return;
    }
    NoDealc();
}
function NoDealc()
{
    sendVirtualAssistantMessage(" Oh well..");
	return;
}
function Dealc()
{
    sendVirtualAssistantMessage(" Excellent!");
    setVar("ChorePrivHumc", true);
    sendVirtualAssistantMessage(" Return when you\'ve completed it!");
    setVar("ChoreActive", true);
    run("Assistant/AssistantLobby.js");
    cContinued();
}
function cContinued()
{
	sendVirtualAssistantMessage("Have you completed the sleeping panties challenge?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        sendVirtualAssistantMessage("%VANC% %VANP% Yes or no?");
		answer0.loop;
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage("%GNMGood%");
        delVar("ChorePrivHumc");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Then I don\'t know what you\'re doing here..");
        c2();
        return;
    }
    sendVirtualAssistantMessage(" 100 gold has been sent as promised..");
    delVar("ChoreActive");
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
changeMeritMedium(false);
    c2();
}
function c2()
{
    run("assistant/AssistantLobby.js");
    dContinued();
}
function dContinued()
{
    d();
}
function d()
{
    if(!(getVar("toyAdvancedLingerie", false)  || getVar("toyBasicLingerie", false)))
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" " + random("Let\'s sex you up slave!", "Time to spice you up!"));
    setVar("ChorePrivHumd", true);
    setVar("ChoreActive", true);
    if(getVar("toyAdvancedLingerie", false))
    {
        GNMToyLingerieAdvanced();
        return;
    }
    if(getVar("toyBasicLingerie", false))
    {
        GNMToyLingerieBasic();
        return;
    }
    GNMToyLingerieAdvanced();
}
function GNMToyLingerieAdvanced()
{
    switch(random("Lingerie1", "Lingerie2", "Lingerie3", "Lingerie4"))
    {
        case "Lingerie1":
        Lingerie1();
        return;
        break;
        case "Lingerie2":
        Lingerie2();
        return;
        break;
        case "Lingerie3":
        Lingerie3();
        return;
        break;
        case "Lingerie4":
        Lingerie4();
        return;
        break;
    }
    GNMToyLingerieBasic();
}
function GNMToyLingerieBasic()
{
    Lingerie4();
    return;
    Lingerie1();
}
function Lingerie1()
{
    sendVirtualAssistantMessage(" " + random("I want you wearing ", "I want you to put on ", "I command that you put on your ", "Do as told and put on your ") + "panties, bra, garterbelt and stockings.");
    sendVirtualAssistantMessage(" " + random("Now pay attention to the which one", "Look carefully about which one", "Let me show you which one.."));
    showImage("Images/Spicy/Toys/Lingerie/Panties/*.jpg"); 
    wait(5);
    showImage("Images/Spicy/Toys/Lingerie/Bra/*.jpg");
    wait(5);
    showImage("Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg");
    wait(5);
    showImage("Images/Spicy/Toys/Lingerie/Stockings/*.jpg"); 
    wait(5);
    sendVirtualAssistantMessage(" " + random("I\'m gonna give you 5 minutes to put it all on", "You only have 5 minutes to put it on!", "Start dressing - you have 5 minutes", "Hurry up i\'m only giving you 5 minutes to dress up!"));
    sendVirtualAssistantMessage(" Tell me done when you\'ve put it on");

	response = createInput(240,"it's on");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); 
			   sendVirtualAssistantMessage(" 1 minute remaining!");
			 // Punishment();
				//response.loop();
				 }
			else
			 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}
response.clearOptions();
		response = createInput(60,"dressed Mistress");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 
			 Punishment();
				//response.loop();
				 }
			else
			 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}
	

    return;
   // Lingerie2();
}
function Lingerie2()
{
    sendVirtualAssistantMessage(" " + random("I want you wearing ", "I want you to put on ", "I command that you put on your ", "Do as told and put on your ") + "garterbelt and stockings");
    sendVirtualAssistantMessage(" " + random("Now pay attention to the which one", "Look carefully about which one", "Let me show you which one.."));
    sendVirtualAssistantMessage("");
    showImage("Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg"); 
    wait(5);
    sendVirtualAssistantMessage("");
    showImage("Images/Spicy/Toys/Lingerie/Stockings/*.jpg"); 
    wait(5);
    sendVirtualAssistantMessage(" " + random("I\'m gonna give you 90 seconds to put it all on", "You only have 90 seconds to put it on!", "Start dressing - you have 90 seconds", "Hurry up i\'m only giving you 90 seconds to dress up!"));
    sendVirtualAssistantMessage(" Tell me done when you\'ve put it on");

	response = createInput(90,"done");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); 
			 response.clearOptions();
			  Punishment();
				//response.loop();
				 }
			else
					 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}

  
   
    return;
    //Lingerie3();
}
function Lingerie3()
{
    sendVirtualAssistantMessage(" " + random("I want you wearing ", "I want you to put on ", "I command that you put on your ", "Do as told and put on your ") + "bra, garterbelt and stockings.");
    sendVirtualAssistantMessage(" " + random("Now pay attention to the which one", "Look carefully about which one", "Let me show you which one.."));
    showImage("Images/Spicy/Toys/Lingerie/Bra/*.jpg");
    wait(5);
    
    showImage("Images/Spicy/Toys/Lingerie/GarterBelt/*.jpg");
    wait(5);
    showImage("Images/Spicy/Toys/Lingerie/Stockings/*.jpg");
    wait(5);
    sendVirtualAssistantMessage(" " + random("I\'m gonna give you 4 minutes to put it all on", "You only have 4 minutes to put it on!", "Start dressing - you have 4 minutes", "Hurry up i\'m only giving you 4 minutes to dress up!"));
    sendVirtualAssistantMessage(" Tell me done when you\'ve put it on");
 

	response = createInput(180,"done");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); 
			   sendVirtualAssistantMessage(" 1 minute remaining!");
			 // Punishment();
				//response.loop();
				 }
			else
			 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}
response.clearOptions();
		response = createInput(60,"done");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 
			 Punishment();
				//response.loop();
				 }
			else
			 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}
	


    return;
   // Lingerie4();
}
function Lingerie4()
{
    sendVirtualAssistantMessage(" " + random("I want you wearing ", "I want you to put on ", "I command that you put on your ", "Do as told and put on your ") + "panties and bra");
    sendVirtualAssistantMessage(" " + random("Now pay attention to the which one", "Look carefully about which one", "Let me show you which one.."));
    showImage("Images/Spicy/Toys/Lingerie/Panties/*.jpg");
    wait(5);
    showImage("Images/Spicy/Toys/Lingerie/Bra/*.jpg"); 
    wait(5);
    sendVirtualAssistantMessage(" " + random("I\'m gonna give you 1 minute to put it all on", "You only have 1 minute to put it on!", "Start dressing - you have 1 minute", "Hurry up i\'m only giving you 1 minute to dress up!"));
    sendVirtualAssistantMessage(" Tell me done when you\'ve put it on");

	response = createInput(60,"dressed!");
	while(true){
		if(response.containsIgnoreCase("ready","ok","yes","done","finished","on","dressed")) {
			response.clearOptions();
			LingerieOn();
			break;
			}
		 if (response.isTimeout()){
			 sendVirtualAssistantMessage(random(" I'm Waiting %Slave%!","Hurry up bitch","C'mon %slut% lets go!","%domHonorific% %Domname% expects you to be faster than that")); 
			 response.clearOptions();
			  Punishment();
				//response.loop();
				 }
			else
					 sendVirtualAssistantMessage(" silly %Slave%, what the fuck does mean..  are you ready?"); 
				response.loop();
		}

  
   

    return;
  //  Punishment();
}
function Punishment()
{
    sendVirtualAssistantMessage(" Come back here");
    playAudio("/Spicy/SpecialSounds/bell.mp3");
    sendVirtualAssistantMessage(" You didn\'t make it.. %GNMEmoteSad%");
    sendVirtualAssistantMessage(" So I\'ve given you punishment points..");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 50);
    sendVirtualAssistantMessage(" Let\'s try again!");
    switch(random("Lingerie1", "Lingerie2", "Lingerie3", "Lingerie4"))
    {
        case "Lingerie1":
        Lingerie1();
        return;
        break;
        case "Lingerie2":
        Lingerie2();
        return;
        break;
        case "Lingerie3":
        Lingerie3();
        return;
        break;
        case "Lingerie4":
        Lingerie4();
        return;
        break;
    }
    LingerieOn();
}
function LingerieOn()
{
    sendVirtualAssistantMessage(" Good!");
    Start();
    return;
  //  Start();
}
function Start()
{
    sendVirtualAssistantMessage(" " + random("Now my little slave", "Now my %GNMSlut%"));
    sendVirtualAssistantMessage(" You have 10 minutes to take 10 " + random("beautiful ", "sexy ") + "pictures of yourself");
    sendVirtualAssistantMessage(" Try different poses, pose on the floor, on the bed, standing in the doorway etc.");
    sendVirtualAssistantMessage(" You look soo sexy!");
	  showImage("Images/Spicy/SelfHumiliation/*.jpg",5);
    sendVirtualAssistantMessage(" " + random("Be sexy!", "Be hot!", "Be creative!"));
    sendVirtualAssistantMessage(" 10 minutes starting now!");
    wait(620);
    sendVirtualAssistantMessage(" Later today you are to add those pictures to your self humiliation folder..");
    sendVirtualAssistantMessage(" We\'ll have fun with these later on..");
    delVar("ChorePrivHumd");
    delVar("ChoreActive");
    sendVirtualAssistantMessage(" Let me reward that %GNMGrin% ");
	setVar("GNMGold", getVar("GNMGold", 0) + 25);
	changeMeritMedium(false);

    End();
    return;
  
}
function eContinued()
{
    e();
}
function e()
{
    sendVirtualAssistantMessage(" %SlaveName%");
    setVar("ChorePrivHume", true);
    sendVirtualAssistantMessage(" " + random("This should be fun", "This will be a good laugh"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" You\'re going to film yourself while getting spanked!");
    sendVirtualAssistantMessage(" Now I want you to place a rubberband around your right and left thigh");
    sendVirtualAssistantMessage(" Keep them moving all the way up to around each of your ass cheeks");
    sendVirtualAssistantMessage(" I want you to spank each of your ass cheeks " + randomInt(20, 40) + " times");
    sendVirtualAssistantMessage(" While you do it");
    sendVirtualAssistantMessage(" I want you to film yourself");
    sendVirtualAssistantMessage(" When you\'re done you\'re gonna put that movie inside your selfhumiliation folder found inside videos");
    sendVirtualAssistantMessage(" Go ahead girl! Tell me when you\'re \"done\"");
	waitForDone(10000);
    sendVirtualAssistantMessage(" I bet you had fun! %GNMGrin%");

    delVar("ChorePrivHume");
    sendVirtualAssistantMessage(" Let me reward that %GNMGrin%");
	setVar("GNMGold", getVar("GNMGold", 0) + 25);
	changeMeritMedium(false);

    End();
    return;
    fContinued();
}
function fContinued()
{
    f();
}
function f()
{
    sendVirtualAssistantMessage(" I love the images of youself %GNMGrin%");
    showImage("Images/Spicy/SelfHumiliation/*.jpg");
    setVar("ChorePrivHumf", true);
    sendVirtualAssistantMessage(" Let\'s add to the number of pictures in there!");
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Write %DomHonorific% %DomName%");
    switch(random("f1", "f2"))
    {
        case "f1":
        f1();
        return;
        break;
        case "f2":
        f2();
        return;
        break;
    }
    f1();
}
function f1()
{
    sendVirtualAssistantMessage(" On your %GNMCock% with a permanent marker..");
    Donef();
    return;
    f2();
}
function f2()
{
    sendVirtualAssistantMessage(" Across your %GNMAss% with a permanent marker..");
    Donef();
    return;
    Donef();
}
function Donef()
{
    sendVirtualAssistantMessage(" When you\'re done I want you to snap a picture and add it to your selfhumiliation folder %GNMGrin%");
    wait(120);
	sendVirtualAssistantMessage(" Done?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
       sendVirtualAssistantMessage(" yes or no slut?");
	   answer0 = createInput();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood% ");
		changeMeritMedium(false);
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Hurry!");
        wait(60);
    }
    sendVirtualAssistantMessage(" One can never have enough pictures");
    switch(random("f3", "f4", "f5"))
    {
        case "f3":
        f3();
        return;
        break;
        case "f4":
        f4();
        return;
        break;
        case "f5":
        f5();
        return;
        break;
    }
    f3();
}
function f3()
{
    sendVirtualAssistantMessage(" One day I might send them to your friend " + getVar("BlackmailName1"));
   sendVirtualAssistantMessage(" I still have the phone/email.. " + getVar("BlackmailPhone1"));
    sendVirtualAssistantMessage(" So you better stay on your best behaviour!");
    Endf();
    return;
    f4();
}
function f4()
{
    sendVirtualAssistantMessage(" One day I might send them to your friend "+ getVar("BlackmailName2"));
    sendVirtualAssistantMessage(" I still have the email.. "+ getVar("BlackmailPhone2"));
    sendVirtualAssistantMessage(" So you better stay on your best behaviour!");
    Endf();
    return;
    f5();
}
function f5()
{
    sendVirtualAssistantMessage(" One day I might send them to your friend "+ getVar("BlackmailName3"));
    sendVirtualAssistantMessage(" I still have the email.. "+ getVar("BlackmailPhone3"));
    sendVirtualAssistantMessage(" So you better stay on your best behaviour!");
    Endf();
    return;
    Endf();
}
function Endf()
{
    delVar("ChorePrivHumf");
    End();
    return;
    End();
}
function End()
{
    setVar("ChoresComplete", getVar("ChoresComplete", 0) + 1);
    delVar("ChoreActive");
    return;
}