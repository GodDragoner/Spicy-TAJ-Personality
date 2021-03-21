

if(isVar("SpankChoirSafeword") && getVar("SpankChoirSafeword")==true)
	{sendDungeonMessage(" You wanted a safeword ");
    sendDungeonMessage(" If you can't handle anymore simply say 'Cucumber' ");
	}
sendDungeonMessage(" Take a seat ");
sendDungeonMessage(" You will be summoned in a moment.. ");
///(Setup)
 setVar("StrokesPerRound",getVar("AuctionStrokes"));
 
 if (getVar("AuctionStrokes")>800)
	{setVar("StrokesPerRound",getVar("StrokesPerRound")/randomInteger(6,12));
}else
	{setVar("StrokesPerRound",getVar("StrokesPerRound")/randomInteger(3,8));
}
setVar("TotalSpanking",0);
run("Dungeon/SpankzChoir/SelectDomme.js");
run("Dungeon/SpankzChoir/MxIntro.js");

first=true;

End=false;
 while (End==false)
	 {

		switch(getVar("MXR"))
			{case 1:
				// Rating: 8
				
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{

				 Choice=randomInteger(1,100);
				if((getVar("SpankChoirFaceSlap")==true) && (Choice>=85)) 
				{run("Dungeon/SpankzChoir/MXSlap.js");}
				else {if (Choice>=70)
						{run("Dungeon/SpankzChoir/MXCorner.js");}
					else{if (Choice>=0)
							{run("Dungeon/SpankzChoir/MXSpanking.js");}
						
						}
					}
					}
				
			break;
			case 2:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=95)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=85)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=70))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=60))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
							else
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			case 3:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=101)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=80)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=101))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=70))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			case 4:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=90)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=80)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=70))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=55))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;

			case 5:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=101)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=80)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=60))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=50))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			
			case 6:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=101)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=75)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=101))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=65))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			
			case 7:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=101)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=90)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=60))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=55))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			
			case 8:
				// Rating: 8
			  if(getVar("TotalSpanking")>=getVar("AuctionStrokes"))
				{End=true;
			  }else{
				 Choice=randomInteger(1,100);	
				if((getVar("SpankChoirMouthSoap")==true) && (Choice>=90)) 
				{run("Dungeon/SpankzChoir/MxSoap.js");}
				else{
					if((getVar("SpankChoirFaceSlap")==true) && (Choice>=70)) 
					{run("Dungeon/SpankzChoir/MxSlap.js");}
					else {if ((getVar("SpankChoirCaning")==true) &&(Choice>=40))
							{run("Dungeon/SpankzChoir/MxCaning.js");}
						else{if ((Choice>=30))
							{run("Dungeon/SpankzChoir/MxCorner.js");}
								{run("Dungeon/SpankzChoir/MxSpanking.js");}
							
							}
						}
					}
				}
			
			break;
			}
	 }

//(End)
MXmessage(" %SlaveName% .. ");
MXmessage(" I enjoyed our time together");
MXmessage(" Though I'm not sure your %Ass% did %Lol%");
MXmessage(" But before I leave you ");
Guess= sendInput(" How many strokes did I give you today? %Grin% ");


if(Guess==getVar("TotalSpanking"))
	{MXmessage(" Correct! %EmoteHappy%");
	 //#MeritChangePHigh
	 ChangeMeritHigh(false);
	}
	else
	{
		MXmessage(" Nope! the number was "+ getVar("TotalSpanking") + " strokes ");
		//#MeritChangeNMedium
		changeMeritMedium(true);
	}
	
	
	MXmessage(" I'm sure it would make your %DomHonorific% happy ");
	MXmessage(" If you took a photo of your %Ass% and placed it in your humiliation folder %Grin%");
	setVar("SpankzChoirComplete",true) ;
	run("Dungeon/PunishmentBaseEnd.js");

	
	
	
function MXmessage(message,  wait) {
  speaker= getVar("MXR");
  switch(speaker){
	  case 1:
		textName = new javafx.scene.text.Text("[Alexis]:");
	  break;
	  case 2:
	 		textName = new javafx.scene.text.Text("[Allison]:");
	  break;
	  case 3:
		textName = new javafx.scene.text.Text("[Gigi]:");
	  break;
	  case 4:
		textName = new javafx.scene.text.Text("[Jeanette]:");
	  break;
	  case 5:
		textName = new javafx.scene.text.Text("[Kordelia]:");
	  break;
	  case 6:
		textName = new javafx.scene.text.Text("[Kym]:");
	  break;
	  case 7:
		textName = new javafx.scene.text.Text("[Sadie]:");
	  break;
	  case 8:
		textName = new javafx.scene.text.Text("[Sarah]:");
	  break;

  }

    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    switch (speaker) {
        case 1:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/*.jpg");
            break;
       case 2:
            showImage("Images/Spicy/Punishment/SpankzChoir/Allison/*.jpg");
            break;
       case 3:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/*.jpg");
            break;
       case 4:
            showImage("Images/Spicy/Punishment/SpankzChoir/Jeanette/*.jpg");
            break;
       case 5:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/*.jpg");
            break;
       case 6:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/*.jpg");
            break;
       case 7:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/*.jpg");
            break;
       case 8:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sarah/*.jpg");
            break;

    }


    if (wait === undefined) {
        sleep(.5 + message.length * .03);
    }else
	{sleep(wait);}
}



function MXoverlapmessage(message,  wait) {
  speaker= getVar("MXR");
  switch(speaker){
	  case 1:
		textName = new javafx.scene.text.Text("[Alexis]:");
	  break;
	  case 2:
	 		textName = new javafx.scene.text.Text("[Allison]:");
	  break;
	  case 3:
		textName = new javafx.scene.text.Text("[Gigi]:");
	  break;
	  case 4:
		textName = new javafx.scene.text.Text("[Jeanette]:");
	  break;
	  case 5:
		textName = new javafx.scene.text.Text("[Kordelia]:");
	  break;
	  case 6:
		textName = new javafx.scene.text.Text("[Kym]:");
	  break;
	  case 7:
		textName = new javafx.scene.text.Text("[Sadie]:");
	  break;
	  case 8:
		textName = new javafx.scene.text.Text("[Sarah]:");
	  break;

  }

    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);
	style=getVar("MXR_style");
    //Show image
    switch (style) {
        case 11:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/Black.jpg");
            break;
	    case 12:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/B8.jpg");
            break;
		case 13:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/C9.jpg");
            break;
		case 14:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/D10.jpg");
            break;
		case 21:
            showImage("Images/Spicy/Punishment/SpankzChoir/Allison/Black.jpg");
            break;	
		case 31:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/A12.jpg");
            break;	
		case 32:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/B17.jpg");
            break;	
		case 33:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/Black.jpg");
            break;	
		case 34:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/D8.jpg");
            break;	
		case 35:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/E8.jpg");
            break;	
		case 41:
            showImage("Images/Spicy/Punishment/SpankzChoir/Jeanette/14.jpg");
            break;	
		case 51:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/A8.jpg");
            break;	
		case 52:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/B"+random("8","9")+".jpg");
            break;	
		case 61:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/A11.jpg");
            break;	
		case 62:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/Black.jpg");
            break;	
		case 63:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/C"+random("6","5")+".jpg");
            break;	
		case 64:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/Black.jpg");
            break;	
		case 71:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/A10.jpg");
            break;	
		case 72:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/Black.jpg");
            break;	
		case 81:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sarah/Black.jpg");
            break;	


    }


    if (wait === undefined || wait) {
        sleep(.5 + message.length * .03);
    }else
	{sleep(wait);}
}



function MXlapmessage(message,  wait) {
  speaker= getVar("MXR");
  switch(speaker){
	  case 1:
		textName = new javafx.scene.text.Text("[Alexis]:");
	  break;
	  case 2:
	 		textName = new javafx.scene.text.Text("[Allison]:");
	  break;
	  case 3:
		textName = new javafx.scene.text.Text("[Gigi]:");
	  break;
	  case 4:
		textName = new javafx.scene.text.Text("[Jeanette]:");
	  break;
	  case 5:
		textName = new javafx.scene.text.Text("[Kordelia]:");
	  break;
	  case 6:
		textName = new javafx.scene.text.Text("[Kym]:");
	  break;
	  case 7:
		textName = new javafx.scene.text.Text("[Sadie]:");
	  break;
	  case 8:
		textName = new javafx.scene.text.Text("[Sarah]:");
	  break;

  }

    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);
	style=getVar("MXR_style");
    //Show image
	
	
	   switch (style) {
        case 11:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/A"+random("9")+".jpg");
            break;
	    case 12:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/B"+random("5","7")+".jpg");
            break;
		case 13:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/C"+random("8","4")+".jpg");
            break;
		case 14:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/D"+random("4","7","8","9")+".jpg");
            break;
		case 21:
            showImage("Images/Spicy/Punishment/SpankzChoir/Allison/A"+random("4","5")+".jpg");
            break;	
		case 31:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/A"+random("9","9")+".jpg");
            break;	
		case 32:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/B"+random("5","6")+".jpg");
            break;	
		case 33:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/C"+random("3","4")+".jpg");
            break;	
		case 34:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/D"+random("6","7")+".jpg");
            break;	
		case 35:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/E"+random("6")+".jpg");
            break;	
		case 41:
            showImage("Images/Spicy/Punishment/SpankzChoir/Jeanette/"+random("7")+".jpg");
            break;	
		case 51:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/A"+random("7")+".jpg");
            break;	
		case 52:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/B"+random("7")+".jpg");
            break;	
		case 61:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/A"+random("7")+".jpg");
            break;	
		case 62:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/B"+random("8")+".jpg");
            break;	
		case 63:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/C"+random("4")+".jpg");
            break;	
		case 64:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/D"+random("7","8")+".jpg");
            break;	
		case 71:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/A"+random("6","7")+".jpg");
            break;	
		case 72:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/B"+random("5")+".jpg");
            break;	
		case 81:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sarah/"+random("5")+".jpg");
            break;	


    }
   


    if (wait === undefined) {
        sleep(.5 + message.length * .03);
    }else
	{sleep(wait);}
}




function MXpointmessage(message,  wait) {
  speaker= getVar("MXR");
  switch(speaker){
	  case 1:
		textName = new javafx.scene.text.Text("[Alexis]:");
	  break;
	  case 2:
	 		textName = new javafx.scene.text.Text("[Allison]:");
	  break;
	  case 3:
		textName = new javafx.scene.text.Text("[Gigi]:");
	  break;
	  case 4:
		textName = new javafx.scene.text.Text("[Jeanette]:");
	  break;
	  case 5:
		textName = new javafx.scene.text.Text("[Kordelia]:");
	  break;
	  case 6:
		textName = new javafx.scene.text.Text("[Kym]:");
	  break;
	  case 7:
		textName = new javafx.scene.text.Text("[Sadie]:");
	  break;
	  case 8:
		textName = new javafx.scene.text.Text("[Sarah]:");
	  break;

  }

    textName.setFill(javafx.scene.paint.Color.RED);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);
	style=getVar("MXR_style");
    //Show image
    switch (style) {
        case 11:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/A"+random("1","5","6")+".jpg");
            break;
	    case 12:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/B"+random("1","2","3","4","6")+".jpg");
            break;
		case 13:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/C"+random("1","2","3","5","6","7")+".jpg");
            break;
		case 14:
            showImage("Images/Spicy/Punishment/SpankzChoir/Alexis/D"+random("1","2","3","5","6")+".jpg");
            break;
		case 21:
            showImage("Images/Spicy/Punishment/SpankzChoir/Allison/A"+random("1","1")+".jpg");
            break;	
		case 31:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/A"+random("1","1")+".jpg");
            break;	
		case 32:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/B"+random("2","2")+".jpg");
            break;	
		case 33:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/C"+random("1","1")+".jpg");
            break;	
		case 34:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/D"+random("1","1")+".jpg");
            break;	
		case 35:
            showImage("Images/Spicy/Punishment/SpankzChoir/Gigi/E"+random("2","2")+".jpg");
            break;	
		case 41:
            showImage("Images/Spicy/Punishment/SpankzChoir/Jeanette/"+random("1","2","3","5","6","4")+".jpg");
            break;	
		case 51:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/A"+random("1","2","3","7","6","9","11","12","13")+".jpg");
            break;	
		case 52:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kordelia/B"+random("4","2","3","5","6","10","11","12","13","14")+".jpg");
            break;	
		case 61:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/A"+random("1","2","3","4","5","6","10","8","9")+".jpg");
            break;	
		case 62:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/B"+random("1","2","3","4","5","6","10","7","9")+".jpg");
            break;	
		case 63:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/C"+random("1","2","3","8","10","7","9")+".jpg");
            break;	
		case 64:
            showImage("Images/Spicy/Punishment/SpankzChoir/Kym/D"+random("1","2","3","4","5","6","9","10")+".jpg");
            break;	
		case 71:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/A"+random("1","2","3","4","5","8","10","11","9")+".jpg");
            break;	
		case 72:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sadie/B"+random("1","2","3","4","6","8","7")+".jpg");
            break;	
		case 81:
            showImage("Images/Spicy/Punishment/SpankzChoir/Sarah/"+random("1","2","3","4","12","14")+".jpg");
            break;	


    }


    if (wait === undefined) {
        sleep(.5 + message.length * .03);
		
    }else
	{sleep(wait);}
}