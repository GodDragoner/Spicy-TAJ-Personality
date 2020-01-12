//@NullResponse @RapidCodeOn @SetVar[Choice]=[0] @Chance25(End)
//@NullResponse @SetVar[Factor]=[0]
Factor=0;
TempStrokes= 0;
Choice=randomInteger(1,1000);

if (isVar(MXR) && (getVar(MXR)>=6))
	{// hard
	if (Choice>200)
		{factor=randomInteger(choice/25,choice/20);	}
		else {factor=randomInteger((1,10);}

		
	}
	else if (isVar(MXR) && (getVar(MXR)>=4))
	{// medium
		if (Choice>450)
		{factor=randomInteger((choice-300)/25,(choice-300)/20);	}
		else {factor=randomInteger((1,7);}

	}
	else 
	{// easy
		if (Choice>600)
		{factor=randomInteger((choice-500)/25,(choice-500)/20);	}
		else {factor=randomInteger((1,5);}

	}
TempStrokes=TempStrokes+getVar("AuctionStrokes");
TempStrokes=TempStrokes/100;
TempStrokes=TempStrokes*Factor;
setVar("AuctionStrokes", getVar("AuctionStrokes")+TempStrokes);


//@FlagOr(M1R,M3R,M6R) @NullResponse @Goto(Easy)
//@FlagOr(M5R,M7R) @NullResponse @Goto(Medium)
//@FlagOr(M2R,M4R,M8R) @NullResponse @Goto(Hard)
/*
(Medium) \\ Medium
@Variable[Choice]>[900] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(28,35)] @Goto(Add)
@Variable[Choice]>[750] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(21,28)] @Goto(Add)
@Variable[Choice]>[600] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(14,21)] @Goto(Add)
@Variable[Choice]>[450] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(7,14)] @Goto(Add)
@Variable[Choice]>=[1] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(1,7)] @Goto(Add)
@End
(Hard) \\ Hard
@Variable[Choice]>[900] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(40,50)] @Goto(Add)
@Variable[Choice]>[700] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(30,40)] @Goto(Add)
@Variable[Choice]>[500] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(20,30)] @Goto(Add)
@Variable[Choice]>[300] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(10,20)] @Goto(Add)
@Variable[Choice]>=[1] @NullResponse @ChangeVar[Factor]=[Factor]+[#Random(1,10)] @Goto(Add)
@End
(Add)
*/
TempStrokes=TempStrokes+getVar("AuctionStrokes");
TempStrokes=TempStrokes/100;
TempStrokes=TempStrokes*Factor;
setVar("AuctionStrokes", getVar("AuctionStrokes")+TempStrokes);
