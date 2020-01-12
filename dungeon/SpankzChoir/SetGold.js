
if(getVar("extrastrokesOK")==true)
	{run(dungeon/SpankzChoir/ExtraStrokes.js);}
setVar("GoldOwedInTime",0);
 setVar("GoldOwedLate",0);
 setVar("AuctionStrokes2",getVar("AuctionStrokes")); 
 setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
 
decider=getVar("AuctionStrokes2")/200;
switch ( decider){
	
	case 0:
	
	  setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
	  setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")); 
	 break;
	case 1:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-199); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+50); 
	 break;
	case 2:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-399); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+100); 

	break;
	case 3:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-599); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+250); 

	break;
	case 4:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-799); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*5); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/4); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+450); 


	break;
	default:
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")-999); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")*3); 
	setVar("AuctionStrokes2",getVar("AuctionStrokes2")/2); 
	setVar("GoldOwedLate",getVar("GoldOwedLate")+getVar("AuctionStrokes2")+700); 

	break;

}
	
 
  if(isVar("SpankChoirCaning") && getVar("SpankChoirCaning")==true)
 {setVar("GoldOwedLate",getVar("GoldOwedLate")+80);}
 if(isVar("SpankChoirSafeword") && getVar("SpankChoirSafeWord")==false)
 {setVar("GoldOwedLate",getVar("GoldOwedLate")+50);}
 if(isVar("SpankChoirMouthSoap") && getVar("SpankChoirMouthSoap")==true)
 {setVar("GoldOwedLate",getVar("GoldOwedLate")+140);}
 if(isVar("SpankChoirFaceSlap") && getVar("SpankFaceSlap")==true)
 {setVar("GoldOwedLate",getVar("GoldOwedLate")+25);}


 
//(AddCorner)
 CornerGold=10;
 setVar("GoldOwedLate",getVar("GoldOwedLate")+((CornerGold*getVar("CornerTimeLimit"))/3));
 
//(Total)
 setVar("GoldOwedInTime", ((getVar("GoldOwedLate")+getVar("GoldOwedInTime"))/10)*(4 - getVar("personalityStrictness") )  );
 