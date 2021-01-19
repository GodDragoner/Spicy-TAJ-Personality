 if(getVar("FirstCornerMx")==true) 
	 {setVar("FirstCornerMx",false);
	//(Setup)
	setVar("CornerTimes",0);

 }
//(FirstCornerMx)
 if(getVar("CornerTimeLimit")>=getVar("CornerTimes"))
 {
	MXpointmessage( random("Go to the corner","To the corner slave!","Go to the corner right now!","Go on","", "to the corner you go","Off into the corner with you","Go to the corner","Go to the corner"));
	MXpointmessage( random("Hands on top of your head -fingers folded","Hands behind your back -arms locked","Hands placed on the wall - nose touching the wall")+" , and " + random("legs lightly apart","feet together","legs spread far apart"));
	MXpointmessage( random("Stay","stay there") +" until " +random("you hear the bell","you hear my bell","you hear a bell"));
	//(Timer)
	
	setVar("CornerTimes",getVar("CornerTimes")+1);
	setVar("CornerTimer",0);
	// @ChangeVar[CornerTimes]=[CornerTimes]+[1]
	 //@SetVar[CornerTimer]=[0]
	//(Timer2)
	while (getVar("CornerTimer")<getVar("CornerTimeTimeLimit"))
	{
	 sleep(60);
	 	setVar("CornerTimer",getVar("CornerTimer")+1);
	 //@ChangeVar[CornerTimer]=[CornerTimer]+[1]
	 if(getVar("CornerTimer")>3)
		 {//after waiting a few minutes start taking a chance at shortening the session)
		 chance=randomInteger(1,getVar("CornerTimeTimeLimit"));
		 if( chance==1)
			{//MAX OUT THE TIMER TO KILL THE SESSION
				setVar("CornerTimer",getVar("CornerTimeTimeLimit"));
			}
		 }
	 //@If[CornerTimer]>=[CornertimeTimeLimit]Then(EndBell) @Chance10(EndBell) @Goto(Timer2)
	}
	//(EndBell)
		 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
		 
		     response = sendInput(" Are you back with me slave? ",10);
     while(true){
		 if (response.isLike("yes")) {
			 
		MXmessage("%Good%");
		 break;}
		 if (response.isTimeout()){
			 //(Slow)	 
			//(NotBack)
			MXmessage(" Slave either you're not back in time ");
			MXmessage(" You're not present ");
			MXmessage(" Or you're forgetting your manners ");
			MXmessage(" Either one is disrespectful! ");
			changeMeritHigh(true);
			MXmessage(" I've just sent you a fine for 50 gold.. "); 
			setVar("GNMGold",getVar("GNMGold")-50);
			MXmessage(" And a stern message for your domme ");
			MXmessage(" Show respect %SlaveName% "); 

		 break;
		 }
		else{
		 sendMessage(" I only wanna hear a firm 'yes Mistress'.. "); 
		 sendMessage(" but apparently you're there since you pecked out '" +response+"'");
		 sendMessage(" How eloquent.... lets move on "); 
		 break;
		}
	
	 }

 }
//(Spanking)
	run("Dungeon/SpankzChoir/MXSpanking.js");
 
