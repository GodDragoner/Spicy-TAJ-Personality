main();
function main()
{
    SMessage("%VANC% %VANP% You have 4 choices");
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="red">1) Buy spanking implements</Font> <Font color="green">2) Pay SpankzChoir Subscribtion</Font> <Font color="yellow">3) Buy a selfbondage scenario</Font> 
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="orange">4) Buy new punishments</Font> <Font color="black">Return) Returns</Font>
    if (answer-1.isLike("one", "1"))
    {
        a1();
        return;
    }
    else if (answer-1.isLike("two", "2"))
    {
        a2();
        return;
    }
    else if (answer-1.isLike("three", "3"))
    {
        a3();
        return;
    }
    else if (answer-1.isLike("four", "4"))
    {
        a4();
        return;
    }
    else if (answer-1.isLike("return"))
    {
    }
    return;
    --UNINTERPRETED LINE:(1)\\Spanking implement 4 & 5 = 500 gold
    SMessage("%VANC% %VANP% Here you have the option you expand the implements used in Spicy");
    --UNINTERPRETED LINE:@Variable[GNMGold]<[500] @SystemMessage #VANC #VANP But the price is 500 gold per spanking implement
    --UNINTERPRETED LINE:@Variable[GNMGold]<[500] @SystemMessage #VANC #VANP You only have @ShowVar[GNMGold] gold @Goto(End)
    --Command:NotFlagOr(BoughtSpankingImplement4,BoughtSpankingImplement5)
    SMessage("%VANC% %VANP% Currently you have 3 different spanking implements");
    Purchase1();
    return;
    if(!getVar("BoughtSpankingImplement5", false))
    {
        SMessage("%VANC% %VANP% Currently you have 4 different spanking implements");
        Purchase1();
        return;
    }
    if(getVar("BoughtSpankingImplement5", false))
    {
        SMessage("%VANC% %VANP% Currently you have all 5 different spanking implements");
        End();
        return;
    }
    Purchase1();
}
function Purchase1()
{
    let answer0 = getInput("%VANC% %VANP% Do you wish to expand your collection?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% Making the transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 500);
        if(getVar("BoughtSpankingImplement4", false))
        {
            BoughtSpankingImplement4();
            return;
        }
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("BoughtSpankingImplement4", true);
    SMessage("%VANC% %VANP% What is the name of your fourth spanking implement?");
    setVar("SpankingImplement4", createInput().getAnswer());
    SMessage("%VANC% %VANP% Noted..");
    End();
    return;
    BoughtSpankingImplement4();
}
function BoughtSpankingImplement4()
{
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("BoughtSpankingImplement5", true);
    SMessage("%VANC% %VANP% What is the name of your fifth spanking implement?");
    setVar("SpankingImplement5", createInput().getAnswer());
    SMessage("%VANC% %VANP% Noted..");
    End();
    return;
    --UNINTERPRETED LINE:(2)\\Spankz choir subscribtion, 250 gold / month
    --UNINTERPRETED LINE:@Variable[#DateDifference(SpankzChoirSubscribtion, Days)]<=[30] @SystemMessage #VANC #VANP You have an active subscribtion with SpankzChoir.com @Goto(End)
    --UNINTERPRETED LINE:@Variable[GNMGold]<[250] @SystemMessage #VANC #VANP You don't have the 250 gold needed for a SpankzChoir subscribtion
    let answer0 = getInput("%VANC% %VANP% Do you wish to pay for subscribtion to SpankzChoir?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% Making the transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 250);
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    SMessage("%VANC% %VANP% Transaction Complete");
    setDate("SpankzChoirSubscribtion");
    End();
    return;
    --UNINTERPRETED LINE:(3)\\SelfBondage scenario 1000 gold
    SMessage("%VANC% %VANP% Right now you can\'t buy any selfbondage scenario");
    End();
    return;
    --UNINTERPRETED LINE:(4)\\New punishments: 500 gold
    SMessage("%VANC% %VANP% Right now you can\'t buy any new punishments");
    End();
    return;
    End();
}
function End()
{
    return;
}