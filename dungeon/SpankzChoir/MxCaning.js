
 SpankingCount=0;
MXmessage( random("Get the rubberbands around your asscheek","Get the rubberbands ready","Prepare the rubberbands..") );
 sleep(12);
MXlapmessage( random("Get over my lap and remember to count out loud..","Get over my lap","Get over my lap","Prepare yourself and get over my lap","Over my lap")+" %SlaveName%!"); 
sleep(12);
//(Spanking)
while (SpankingCount<getVar("StrokesPerRound"))
	{	
		 strokes=random(10,20,30);
		 switch(strokes)
		 {

			case 10:
			SpankingCount=SpankingCount+20;
			MXoverlapmessage( random("Left","Top left","Buttom left")+ " " + random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!")); 
				 playAudio("Audio/Spicy/Punishment/SpankingTask/10Strikes/Spank10.mp3", true);

			MXoverlapmessage( random("Right","Top Right","Buttom Right") +" "+ random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!")) ;
			 playAudio("Audio/Spicy/Punishment/SpankingTask/10Strikes/Spank10.mp3", true);
			 break;
			case 20:
			SpankingCount=SpankingCount+40;
			MXoverlapmessage( random("Left","Top left","Buttom left") +" "+ random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!")); 
				 playAudio("Audio/Spicy/Punishment/SpankingTask/20Strikes/Spank20.mp3", true);

			MXoverlapmessage( random("Right","Top Right","Buttom Right") +" "+ random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!"));
			 playAudio("Audio/Spicy/Punishment/SpankingTask/20Strikes/Spank20.mp3", true);
			 break;
				case 30:
			SpankingCount=SpankingCount+60;
			MXoverlapmessage( random("Left","Top left","Buttom left")+" "+ random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!")); 
				 playAudio("Audio/Spicy/Punishment/SpankingTask/30Strikes/Spank30.mp3", true);

			MXoverlapmessage( random("Right","Top Right","Buttom Right") +" "+ random("ass","asscheek","Buttcheek","cheek","rear cheek","rear","sitspots!"));
			 playAudio("Audio/Spicy/Punishment/SpankingTask/30Strikes/Spank30.mp3", true);
			 break;

		 }
	}
//(End1)
Guess= sendInput(" How many strokes were that slave? ");

if (guess.getInt() == SpankingCount)
	{MXmessage(" Correct! ");
	 setVar("TotalSpanking",getVar("TotalSpanking") + SpankingCount);
	}
	else
	{
	MXmessage(" Wrong! ");
	MXmessage(" The number was "+SpankingCount );
	 changeMeritMedium(true);
	 chance= random(1,5);
	 if (chance>2)
	 {
		MXmessage(" Since you've failed to count I guess we're starting over! "); 
		run("Dungeon/SpankzChoir/MXSpanking.js");
	 }
	 else
	 {
	
		MXmessage(" I'm gonna be merciful this time ");
		setVar("TotalSpanking",getVar("TotalSpanking") + SpankingCount);
		MXmessage(" Don't expect me to show kindness again! ");
	 }

	}
	
