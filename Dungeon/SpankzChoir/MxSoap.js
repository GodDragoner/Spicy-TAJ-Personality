//different ways to experience a mouth soaping
choice= random(1,2);
switch(choice)
{
	 case 1:
	 \\Lick
	MXmessage(random("Slave","Slave %SlaveName%","Slave","bitch","%SlaveName%,%SubName%)+ "Lick that bar of soap " + random("once","once","twice" ,"and count to 10"));
	 sleep(10);
	MXmessage(random("%GNMLol%","%GNMGrin%","%GNMEmoteHappy%") );
	 sleep(10);
	break;

	case 2:
	 \\Bar in mouth
	MXmessage( random("Slave","Slave %SlaveName%","Slave","bitch","%SlaveName%","%SubName%"));
	MXmessage(random("Place the bar of soap between your teeth","Hold the bar of soap in your mouth!") );
	MXmessage(random("Go the corner","Now off to the corner","Away with you to the corner")+" and " +random("stay there until I summon you","stay until you hear the bell","remain there until you hear my bell") );
	switch(getVar("MXR")) {
	case 2: 
	sleep(randomInteger(40,120));
	break;
	case 4: 
	sleep(randomInteger(20,90));
	break;
	case 8: 
	sleep(randomInteger(30,60));
	break;
	default:
	sleep(randomInteger(20,40));
	}
	MXmessage(random("Enough!","Come back here!","Return to me slave..","Slave get back here..","Naugthy boy come here!"));
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
	sleep(3);
	break;
}
