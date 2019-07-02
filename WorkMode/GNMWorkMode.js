 sendVirtualAssistantMessage(" Work mode has been activated");
 sendVirtualAssistantMessage(" While this mode is active you'll slowly earn merits and gold");
 sendVirtualAssistantMessage(" You exit work mode by typing --'exit'--");
 //@CustomMode(exit, Goto, End)
 sendVirtualAssistantMessage(" Do you want to activate small teases while working?",0);
   answer1 = createInput("yes", "no");

    while (true) {
        if (answer1.isLike("yes")) {
			setVar("WTeasesActive",true);
            break;
        } else if (answer1.isLike("no")) {
           setVar("WTeasesActive",false);
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer1.loop();
        }
    }
	answer1.clearOptions();

 sendVirtualAssistantMessage(" Do you want to activate small exercises while working?",0);
     answer2 = createInput("Yes", "No");
	
     while (true) {
        if (answer2.isLike("yes")) {
			setVar("WExercisesActive",true);
            break;
        } else if (answer2.isLike("no")) {
           setVar("WExercisesActive",false);
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer2.loop();
        }
    }
     answer2.clearOptions();




//@NullResponse @DeleteFlag(WOften)
//@NullResponse @DeleteFlag(WSometimes)
//@NullResponse @DeleteFlag(WRare)
//@NullResponse @DeleteFlag(WRandom)

 sendVirtualAssistantMessage(" How often do you wish these activities to occur");
 sendVirtualAssistantMessage(" Often, Sometimes, rare or completely random?",0);
 frequency = createInput("Often", "Sometimes", "rare","completely random?");
      while (true) {
                if (frequency.isLike("often")) {
                    setVar("wFrequency", 1);
                    break;
					
                } else if (frequency.isLike("sometimes")) {
					setVar("wFrequency", 2);
                    break;
                } else if (frequency.isLike("rare")) {
					setVar("wFrequency", 3);
                    break;
                } else if (frequency.isLike("random")) {
					setVar("wFrequency", 4);
                    break;			
                } else {
                    sendVirtualAssistantMessage("often, sometimes, rare or random?");
                    frequency.loop();
                }
            }
  frequency.clearOptions();
 sendVirtualAssistantMessage(" Work hard slave");
 sendVirtualAssistantMessage(" Return to me whenever you hear my bell");
 sendVirtualAssistantMessage(" Fail to return within 20 seconds of hearing it and you will be punished.");
timefac = new Date();
 starttime=timefac.getTime();
 //sendMessage("start time is: " + starttime);

//(SelectX)

working=true;
while (working)
	{showImage("Images/Spicy/GNMBackground/StudyMode.jpg");

	switch (getVar("wFrequency")) {
		case 1:
		answer2=createInput(randomInteger(180,300),"Exit");
		break;
		case 2:
		answer2=createInput(randomInteger(300,900),"Exit");
		break;
		case 3:
		answer2=createInput(randomInteger(900,1500),"Exit");
		break;
		case 4:
		answer2=createInput(randomInteger(180,1500),"Exit");
		break;
		
	}
      answer2.clearOptions();
	  activitydone=false;
	while ((working==true) && (activitydone==false)){
		if (answer2.isTimeout())
		
		{// its time to interupt studying with some teasing and/or exercising
		 playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);
		sendVirtualAssistantMessage("are you there "+random("%SlaveName%","%slave%")+ " ?", 0);
		answer = createInput(20, "Present Mistress");
			while (true) {
				if (answer.isTimeout()) {
					answer.clearOptions();
				sendVirtualAssistantMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
					sendVirtualAssistantMessage(" You've failed to report within proper timeframe ");
					sendVirtualAssistantMessage(" You've lost all earned gold and merits ");
					setVar("Preason_too_slow",true);
					addPunishmentPoints(100);
					sendVirtualAssistantMessage(" And you are awarded 100 punishment points for cheating ");							
					changeMeritLow(true);
					working=false;
					break;
				} else
				{sendVirtualAssistantMessage(" %GNMGood%");
				 answer.clearOptions();
				 choice=0;

				 if((getVar("WExercisesActive")==true) && (getVar("WTeasesActive")==true))
				 {
					 if (randomInteger(1,2)==1)
					 {workmodeExercise(randomInteger(1,13));
					}else{
					workmodeTease(randomInteger(1,11));	
					}
				 }else
				 {
					 if(getVar("WExercisesActive")==true)
					 {workmodeExercise(randomInteger(1,13));
					}
					if(getVar("WTeasesActive")==true)
					 {workmodeTease(randomInteger(1,11));
					}
				 }
				 activitydone=true;
				break;	
					
				}
				
			}
		}
		else if (answer2.isLike("leave","exit","done","stop"))
		{
			 sendVirtualAssistantMessage(" Calculating gold and merits earned..");
			// @CustomMode(exit, Normal)
			GoldEarned=0;
			GNMMeritsEarned=0;
			timefac = new Date();
			 donetime=timefac.getTime();
			  //sendMessage ("donetime is: " + donetime);
			GoldEarned=Math.round(((( donetime- starttime)/1000)/60)/4);
			GNMMeritsEarned=GoldEarned*2;

			if(isVar("StudyMode") && getVar("StudyMode")==true) {
				setVar("StudyHours", getVar("StudyHours")+ ( (WorkMode.getTime()- date.now())/1000) );
				}
			 sendVirtualAssistantMessage(" You've earned "+GoldEarned +" gold"); 
			 setVar("GNMGold",getVar("GNMGold")+GoldEarned);
			 sendVirtualAssistantMessage(" And "+GNMMeritsEarned+" merits ");
			  setVar("GNMMerits",getVar("GNMMerits")+GNMMeritsEarned);
			 sendVirtualAssistantMessage(" Good job slave");
			 working=false;
		}
	}
	
	
    }	




function workmodeExercise(exercise) {
	
	switch (exercise)
	{
		
		case 1:
		sendVirtualAssistantMessage(" %SlaveName% right now you're gonna do " + random("20","30","40")+ " push ups with a " +random("narrow","wide","normal","normal","normal")+" stand" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.." );

		break;
		case 2:
		sendVirtualAssistantMessage(" %GNMSlut% right now you're gonna do "+random("30","40","60")+" crunches" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.." );

		break;
		case 3:
		sendVirtualAssistantMessage(" %GNMSlut% right now you're gonna do " + random("50","60","40")+ " squats" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.." );

		break;
		case 4:
		sendVirtualAssistantMessage(" %GNMSlut% right now you're gonna spend "+ random("3","4","5")+" minutes stretching whatever you feel like" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing..." ); 
		
		break;
		case 5:
		sendVirtualAssistantMessage(" %GNMSlut% take a deep breath and hold it",7);
		sendVirtualAssistantMessage(" Exhale",3);
		sendVirtualAssistantMessage(" Inhale",7);
		sendVirtualAssistantMessage(" Exhale",3);
		sendVirtualAssistantMessage(" Inhale",7);
		sendVirtualAssistantMessage(" Exhale",3);
		sendVirtualAssistantMessage(" Inhale",8);
		sendVirtualAssistantMessage(" Exhale",4);
		sendVirtualAssistantMessage(" Inhale",9);
		sendVirtualAssistantMessage(" Exhale",5);
		sendVirtualAssistantMessage(" Now Just return to whatever you were doing.." );
	
		break;
		case 6:
		sendVirtualAssistantMessage(" %GNMSlut% just take a 5 minutes break, look around yourself" );
		sendVirtualAssistantMessage(" Is there something you can clean or perhaps something else to improve." );
		sendVirtualAssistantMessage(" 5 minutes! Then you return to whatever you were doing..",300); 
		playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);	
		sendVirtualAssistantMessage("Its time to get back to work now %SlaveName%" );
		break;
		case 7:
		sendVirtualAssistantMessage(" %GNMSlut% go and drink at least 500 mL of water right now!" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.. " );
		
		break;
		case 8:
		sendVirtualAssistantMessage(" %SlaveName% stand up and shake your body" );
		sendVirtualAssistantMessage(" shake your arms, your legs, your torso and your head",10);
		sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%") + random(" just return to whatever you we're doing"," return to your businuss"," thank you for a little attention") );
		
		break;
		case 9:
		sendVirtualAssistantMessage(" %SlaveName% just spend a few minutes reading a serious news article" );
		sendVirtualAssistantMessage(" No gossip or anything similar" );
		sendVirtualAssistantMessage(" A serious news article from a serious news publisher" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing..",180); 
			playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);	
		sendVirtualAssistantMessage("Its time to get back to work now %SlaveName%" );

		
		break;
		case 10:
		sendVirtualAssistantMessage(" %SlaveName% just close your eyes for 2 minutes" );
		sendVirtualAssistantMessage(" Just 2 simple minutes",120);
			playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);	
		sendVirtualAssistantMessage("Open your eyes %SlaveName%" );
		sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+" "+ random("just return to whatever you we're doing","return to your business","thank you for a little attention") );
		
		break;

		case 11:
		sendVirtualAssistantMessage(" %SlaveName% right now you're gonna do " +random("20","30","40")+" Bicep curls with a "+random("10","12","15") +" pound weight." );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.." );
				
		break;
		case 12:
		sendVirtualAssistantMessage(" %SlaveName% right now you're gonna do "+random("20","25","15")+" shoulder presses with a "+random("12","15")+ " pound weight." );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing.." );
		break;
		case 13:
		sendVirtualAssistantMessage(" %SlaveName% put on a piece of classical music" );
		sendVirtualAssistantMessage(" Just listen to it and let it calm your mind" );
		sendVirtualAssistantMessage(" When you're done just return to whatever you were doing..",120) ;
		break;
		
		
	}
}


function workmodeTease(tease) {
	
	switch (tease)
	{
	
	case 1:
	sendVirtualAssistantMessage(random("Lets rattle your %Cock% a little","Lets make your %Cock% jump a little","Lets see if we can awaken the princess","Lets play a little","I have something fun for you %GNMEmoteHappy% ") );
	sendVirtualAssistantMessage( random("Just watch this little slide show","Just enjoy this little show","Just sit back and relax","Hang back there and watch this")+" while you fondle your %Balls%" );
	
	while (randomInteger(1,10) > 1)
		{
		showTeaseImage(randomInteger(4,7));
		}
	showTeaseImage(randomInteger(4,7));
	showTeaseImage(randomInteger(4,7));
	showTeaseImage(randomInteger(4,7));
	showTeaseImage(randomInteger(4,7));
	showTeaseImage(randomInteger(4,7));

	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+ random("just return to whatever you we're doing","return to your business","thank you for a little attention")  );
		
	break;

	
	case 2:
		sendVirtualAssistantMessage("Get into the Bad Bitch position" );
	showImage("Images/Spicy/Positions/BadBitch2.*",10);
	sendVirtualAssistantMessage(" Hold it until you hear my bell again.." );
	while (randomInteger(1,100) < 94)
		{
		sleep(10);
		}
	sleep(10);
	sleep(10);
	sleep(10);
	sleep(10);
						
	playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", " + random("just return to whatever you we're doing","return to your business","thank you for a little attention") );

	
	break;
	
		
	case 3:
	sendVirtualAssistantMessage("Get into the Listen position" );
	showImage("Images/Spicy/Positions/Listen1.*",10);

	sendVirtualAssistantMessage(" Hold it until you hear my bell again.. " );
	while (randomInteger(1,100) < 94)
		{
		sleep(10);
		}
	sleep(10);
	sleep(10);
	sleep(10);
	sleep(10);
						
	playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention") );
	break;	
		
	case 4:
	sendVirtualAssistantMessage("Get into the Cum Fuck Me position " );
	showImage("Images/Spicy/Positions/CFM4.*",10);
	sendVirtualAssistantMessage(" Hold it until you hear my bell again.." ); 
	while (randomInteger(1,100) < 94)
		{
		sleep(10);
		}
	sleep(10);
	sleep(10);
	sleep(10);
	sleep(10);
						
	playAudio("Audio/GNMSounds/SpecialSounds/Bell.mp3", true);	
	
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention") );
	break;
	
		
	case 5:
	 if(!isVar("ChastityIsOn")  || getVar("ChastityIsOn")==false )
	{
		sendVirtualAssistantMessage( random("Carress your %Cock% a little","Touch your cage a little","Get a good feel of the cage","Touch yourself","Feel yourself up"));
		sendVirtualAssistantMessage( random("Lets see if you can make it hard in that cage..","Lets see if we can the tiny girl fight for freedom","Lets see if you can make the sad tiny penis desperate for freedom"),15);
		sendVirtualAssistantMessage( random("Is it hard yet","Is it hard","Is it as hard as a caged cock can be")+ " ?");
		answer= createInput("yes","no");
		if (answer.isLike("no"))
		{
		sendVirtualAssistantMessage(random("Lets hope its not dead %Lol%","Tired I suppose","Maybe its finally understanding that its worthless","Maybe it knows i'm tricking it!"));
		}
		else if (answer.isLike("yes"))
			{sendVirtualAssistantMessage(" %GNMGood% %Lol%");
			}else
				{sendVirtualAssistantMessage(" %GNMYesOrNo%",10);
				}
		answer.clearOptions();
		sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention"));
	}
	
	else {
		sendVirtualAssistantMessage( random("Touch your cock a little","Feel your dick","Reach for your dick"),10);
		sendVirtualAssistantMessage(" Stroke it just 10 times" );
		sendVirtualAssistantMessage(" %Grin%" );
		sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention"));
	}
		
	break;
	
		
	case 6:
	sendVirtualAssistantMessage(" I want you to encircle your balls with your finger and your thumb." );
	sendVirtualAssistantMessage( random("Give your %Balls% a few light taps %Lol%","Hit your %Balls% hard just once","Tap hard on your %Balls% with 1 finger") );
	sendVirtualAssistantMessage( random("Just to remind them who's in charge!","So they won't question who's in charge","So they know who's boss"),10);
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+" "+ random("just return to whatever you we're doing","return to your business","thank you for a little attention") );
	
		
	break;
	
		
	case 7:
	sendVirtualAssistantMessage( random("Lightly fondle your nipples","Twist your nipples a little","Pinch your nipples","Make circles around your nipples with your fingers"),10);
	sendVirtualAssistantMessage( random("Make them hard for me","Make them hard"),10);
	sendVirtualAssistantMessage(" Just lightly touch them now",10);
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention"));
	
	
	break;
		
	case 8:
	sendVirtualAssistantMessage(" Find a mirror and pull your underwear down" );
	if(isVar("ChastityIsOn") && getVar("ChastityIsOn")==true ) 
		{sendVirtualAssistantMessage(" Just enjoy watching that encased %Cock%" );
		}
		else
		{ sendVirtualAssistantMessage(" Have a look at what you are NOT allowed to touch %Lol%" );
		}
	sendVirtualAssistantMessage(" Count to "+random("10","15","20")+" and then return to whatever you were doing %Lol%",30)
	
	
	break;
	
		
	case 9:
	sendVirtualAssistantMessage( random("Lets rattle your %Cock% a little"," Lets make your %Cock% jump a little"," Lets see if we can awaken the imprisoned princess","Lets play a little","I have something fun for you %GNMEmoteHappy% "));
	sendVirtualAssistantMessage( random("Just watch this little slideshow while you fondle your %Balls% %Lol%","Fondle your %Balls% while you watch this magnificent girl!","Just hang back and watch this sexy slut!"));

	while (randomInteger(1,100) < 90)
		{showImage("Images/Spicy/SelfHumiliation/*.jpg",10);
		
		}
		showImage("Images/Spicy/SelfHumiliation/*.jpg",10);
		showImage("Images/Spicy/SelfHumiliation/*.jpg",10);
		showImage("Images/Spicy/SelfHumiliation/*.jpg",10);
		showImage("Images/Spicy/SelfHumiliation/*.jpg",10);

	sendVirtualAssistantMessage( random("%SlaveName%, You look sooo hot!","Those pictures are soo hot","I would love to share these pictures with your friends!")+" %Grin%");
	sendVirtualAssistantMessage( random("That was it ","Done!","Stop","Just stop","Stop %GNMSlut%","Stop %SlaveName%")+", "+random("just return to whatever you we're doing","return to your business","thank you for a little attention"));
	
	break;
	
		
	case 10:
	sendVirtualAssistantMessage( random("Lets rattle your %Cock% a little","Lets make your %Cock% jump a little","Lets see if we can awaken the princess","Lets play a little","I have something fun for you %GNMEmoteHappy% "));
	sendVirtualAssistantMessage(" Go to a porn pic website with your favorite theme whether it being chastity, femdom or something else" );
	sendVirtualAssistantMessage(" Look at the first 10 posts and read them %Grin%" );
	sendVirtualAssistantMessage(" After you can return to whatever you were doing",60);
	
	
	break;
	
		
	case 11:
	sendVirtualAssistantMessage(" Cocksucker I want you to go and grab your dildo.",15);
	sendVirtualAssistantMessage(" I want you to deepthroat that %Cock% until I say stop" );
	sendVirtualAssistantMessage("  ok, get that thing in the back of you're throat until I say you can take it out %Lol%",6,20);
	sendVirtualAssistantMessage(" ok thats enough Cock gobbler." );
	sendVirtualAssistantMessage(" take a breath then return to whatever you were doing %Lol%",10);
	
	
	break;
	
		
	default:
	
	
	break;
	
	
	
	
	}
}

