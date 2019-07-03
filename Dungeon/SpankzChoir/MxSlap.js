choice=randomInteger(1,5);

switch (choice)  
{
	case 1:
		MXlapmessage( random("Slap yourself hard","Slap yourself..","Go ahead and slap yourself"),5 );
		MXlapmessage( random("Again!","Do it again!","One more time!"),5 ); 
		MXlapmessage( random("Again!","Do it again!","One final time!"),5 ); 
	break;
	case 2:

		MXlapmessage( random("Slap yourself twice","Slap yourself twice hard across the cheek","Two slaps hard!"),10 ); 
		MXlapmessage( random("Do it again!","Once more!","Slap yourself twice more!"),10); 
		MXlapmessage( random("A final really hard slap!","One final very hard slap!","Slap yourself with all you got!"),10  ); 
	break;
	case 3:
		MXlapmessage( random("Slap your cheek 3 times!","Give your cheeks 3 slaps!","3 hard slaps for those mushy cheeks!"),12 );
		MXlapmessage( random("3 more!","Three more!","3 final slaps!!"),12 ); 
	break;
	case 4:
		MXlapmessage( random("Slap yourself very hard 10 times!","Give that cheek 10 slaps!","10 slaps put your strength into it"),15 );
	break;
	case 5:
		MXlapmessage( random("10 quick slaps!","10 fast slaps","slap yourself 10 times"),15 ); 
		MXlapmessage( random("10 more!","Another 10!","Give me 10 good slaps again!"),15 ); 
		MXlapmessage( random("A final 10!","10 fast slaps","5 quick slaps!"),15 ); 
	break;

}
