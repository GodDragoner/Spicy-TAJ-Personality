

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




main();



function main()
{
    sendMessage("%SlaveName% ");
    if(getVar("ParachutePunishment", false))
    {
        ParachutePunishment();
        return;
    }
    sendMessage("%Fetch% wooden spoon ");
    wait(15);
    sendMessage(random("This should be fun! ", "Well this is gonna be fun! ", "%Grin% ") );
    setVar("Time", 1);
	setVar("Times", randomInteger(7,19)+ randomInteger(2,6)* getVar("SubPainTolerance"));
	/*
    --UNINTERPRETED LINE:@Variable[SubPain]>=[10] @NullResponse @SetVar[Times]=[#Random(30,50)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[9] @NullResponse @SetVar[Times]=[#Random(25,45)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[8] @NullResponse @SetVar[Times]=[#Random(20,40)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[7] @NullResponse @SetVar[Times]=[#Random(15,35)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[6] @NullResponse @SetVar[Times]=[#Random(10,30)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[5] @NullResponse @SetVar[Times]=[#Random(10,25)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[4] @NullResponse @SetVar[Times]=[#Random(10,20)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[3] @NullResponse @SetVar[Times]=[#Random(5,15)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[2] @NullResponse @SetVar[Times]=[#Random(5,10)]
    --UNINTERPRETED LINE:@Variable[SubPain]>=[1] @NullResponse @SetVar[Times]=[5]
	*/
    sendMessage(random("You\'re going to smack those %Balls% ", "You\'ll soon be swatting those %Balls% ", "In a moment you\'re going to hit those %Balls% ") );
	//decide to hit with rythm or at Mistresses whim
	setVar("SmackCadence", randomInteger(0,1));
	if(getVar("SmackCadence")==1) {
		sendMessage("I\'ll count them for you ");
	}else{
		sendMessage("I\'ll tell you when to strike ");
	}
    sendMessage("Get ready ");
    wait(randomInt(5, 10));
    Count();
}
function Count()
{
    if(getVar("SmackCadence")==1) {
		sendMessage( getVar("Time")+" !");
	}else{
		sendMessage( "%hit% "+ random("those","%domhonorific% %DomName%s")+" %Balls%  ");
	}
	 playAudio("Audio/Spicy/Punishment/SpankingCane/Cane1.mp3", true);
    setVar("Time", getVar("Time", 0) + 1);
    if (getVar("Time", 0) >= getVar("Times", 0))
    {
        End();
        return;
    }
	if(getVar("SmackCadence")==1) {
	    wait(3);
	}else{
		wait(randomInt(2, 8));
	}
    Count();
    return;
   
}
function ParachutePunishment()
{
    sendMessage("%Fetch% your parachute ");
    wait(20);
    if(getVar("SubPainTolerance")>=6) {
		sendMessage(random("Apply ","Add ")+ random("1.5 kg\'s","2 kg\'s")+ " to it ");
		wait(20);
		}
		else{
				sendMessage(random("Apply ","Add ")+ random("1 kg\'s","1.5 kg\'s")+ " to it ");
		}
 
    sendMessage(random("Go to the corner hands above you head ", "Go the corner with your hands above your head ") );
    sendMessage("Wait for the bell ");
    if(getVar("Personality1", false))
    {
        wait(randomInt(200, 600));
    }
    if(getVar("Personality2", false))
    {
        wait(randomInt(400, 900));
    }
    if(getVar("Personality3", false))
    {
        wait(randomInt(600, 1200));
	}
        sendMessage(random("Come back here","get back")); 
		playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
		Wait(15)

    End();
}
function End()
{
    sendMessage(random("That was it ", "We\'re done ") );
    sendMessage(random("Good girl ", "Good slut ", "Good slave ") );
	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 43);

    run("Dungeon" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}