if(isVar("GagPunishment") && (getVar("GagPunishment")==true))
	{	MXmessage(random("Fetch","Retrieve","Get","Find") +" your gag and"+ random(" put it in"," gag yourself"," get gagged") ); 
		wait(20);
	}
doneend=false;
switch(getVar("MXR")){
	
	case 1:
	//(M1R)
		 if ((isVar("M1RFirst")) &&(getVar("M1RFirst")==true))
		 {//skip intro
			}
		else{
			 setVar("M1RFirst",true);
			MXmessage(" Hi slave ");
			MXmessage(" My name is Miss Alexis ");
			MXmessage(" When I saw your ass up for auction I knew I had to win it! Lol ");
			MXmessage(" Oh my is your ass getting it today! ");
			MXmessage(" Lets not waste a moment! "); 
			doneend=true;
			}
	break;
	case 2:
	//(M2R)
		if ((isVar("M2RFirst")) &&(getVar("M2RFirst")==true))
		 {//skip intro 
		}
		else{
			 setVar("M2RFirst",true);
			
			MXmessage(" Hello my little toy ");
			MXmessage(" I am Miss Allison ");
			MXmessage(" And right now your ass is all mine! ");
			MXmessage(" I'm known as the cruel one %Lol% ");
			MXmessage(" Let me prove it to you! "); 
			doneend=true;
			}
	break;
	case 3:
	//(M3R)
			 if ((isVar("M3RFirst")) &&(getVar("M3RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M3RFirst",true);

			MXmessage(" Hi boy ");
			MXmessage(" I'm Miss Gigi ");
			MXmessage(" Mhmm I'm excited about what's to come in a moment! ");
			MXmessage(" You on the other hand look a bit shaky %Lol% ");
			MXmessage(" I'm using my Hitachi later! "); 
			doneend=true;
		}
	break;
	case 4:
	
		//(M4R)
		 if ((isVar("M4RFirst")) &&(getVar("M4RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M4RFirst",true);
			MXmessage(" Greetings slave ");
			MXmessage(" I go by Miss Jeanette ");
			MXmessage(" And you just the right victim for all of my built up aggressions! ");
			MXmessage(" Prepare yourself! 'evil grin' ");
			doneend=true;
		}
	break;
	case 5:
	//(M5R)
	 if ((isVar("M5RFirst")) &&(getVar("M5RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M5RFirst",true);
			MXmessage(" Hi %SubName% ");
			MXmessage(" I'm Miss Kordelia ");
			MXmessage(" And that is all you need to know %Grin% ");
			doneend=true;
		}
	break;
	case 6:
	(M6R)
		 if ((isVar("M6RFirst")) &&(getVar("M6RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M5RFirst",true);
		MXmessage(" Hello ");
		MXmessage(" I go by Miss Kym ");
		MXmessage(" You look just like the right victim for a healthy spanking! ");
		MXmessage(" I do consider spankings a necessary part of a man's life ");
		MXmessage(" They are after all the weaker sex.. "); 
		doneend=true;
		}
	break;
	case 7:
	
	//(M7R)
		 if ((isVar("M7RFirst")) &&(getVar("M7RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M7RFirst",true);
			MXmessage(" Hi %SubName% ");
			MXmessage(" You're cuter than in person than your profile picture! ");
			MXmessage(" My name is Sadie ");
			MXmessage(" Miss Sadie to you ");
			MXmessage(" %Grin% ");
			doneend=true;
		}
	break;
	case 8:
	//(M8R)
		 	 if ((isVar("M8RFirst")) &&(getVar("M8RFirst")==true))
		 {//skip intro
		}
		else{
			 setVar("M8RFirst",true);
			MXmessage(" %SubName% ");
			MXmessage(" Welcome! ");
			MXmessage(" I'm Miss Sarah ");
			MXmessage(" I'm famous on SpankzChoir.com ");
			MXmessage(" And you're about to discover why! %Lol% ");
			doneend=true;
		}
	break;

	}



if (!doneend)
	
	{
	 if(isVar("SpankzChoirSkipped") && getVar("SpankzChoirSkipped")==true) {
		 //(SpankzChoirSkipped)
			MXmessage(" So you think you can escape a session with me? ");
			MXmessage(" Well you can't! ");
			MXmessage(" I wrote to %DomHonorific% %DomName% and informed her of your transgression "); 
			setVar("Preason_not_degrading", true);
			MXmessage(" I am to give you her regards ");
			setVar("PReason_spankzchoir_late", true);
			addPunishmentPoints(200);
			setVar("SpankzChoirSkipped", false);
			MXmessage(" Oh and also a lot of punishment points %Grin% ");
			//#MeritChangeNHigh
			changeMeritHigh(true);
			MXmessage(" Well lets start your spanking all over! %Grin% ");
			//@End
	 }else if (isVar("SpankzChoirLate") && getVar("SpankzChoirLate")==true) {
		 //	(SpankzChoirLate)
		 	setVar("PReason_spankzchoir_late", true);
			MXmessage(" Awww late for your auction huh? ");
			MXmessage(" Well don't worry! ");
			MXmessage(" You still get spanked  ");
			MXmessage(" You just don't get paid! %EmoteHappy% ");
			MXmessage(" on the plus side... ");	
			MXmessage(" you did earn a few punishment points. %Lol%");
			addPunishmentPoints(50);
			setVar("SpankzChoirLate", false);
			//@End
		 
	 } else{
		 
		MXmessage(random("Hi","Hello","Greetings") +" " + random("%SubName%","%SlaveName%","Slave","Bitch","Slave","Slave") );
		MXmessage(random("I can't wait to get started!","Lets start right away","Lets proceed!","Lets get that ass sore") );
		//@End
	 }
	


	}