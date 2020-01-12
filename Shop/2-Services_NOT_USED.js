main();
function main()
{
    SMessage("%VANC% %VANP% You have 4 choices");
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="red">1) Pay Attribute</Font> <Font color="green">2) Buy MoodBooster</Font> <Font color="yellow">3) Pay Attonement</Font> 
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="orange">4) Unlock Denial Settings</Font> <Font color="black">Return) Returns</Font>
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
    --UNINTERPRETED LINE:(1) \\Attribute
    --UNINTERPRETED LINE:@Variable[GNMGold]<[500] @NullResponse @Goto(Poor1)
    let answer0 = getInput("%VANC% %VANP% You can tribute your %DomHonorific% 500 or 1000 gold");
    while (!(answer0.isLike("fivehundred") || answer0.isLike("500") || answer0.isLike("onethousand") || answer0.isLike("1000")))
    {
        answer0 = getInput("%VANC% %VANP% 500 or 1000?");
    }
    if (answer0.isLike("fivehundred", "500"))
    {
        --Command:NullRespose
        setVar("GNMGold", getVar("GNMGold", 0) - 500);
        Attribute2();
        return;
    }
    else if (answer0.isLike("onethousand", "1000"))
    {
        --Command:NullRespose
        if (getVar("GNMGold", 0) < 1000)
        {
            PoorG();
            return;
        }
        setVar("GNMGold", getVar("GNMGold", 0) - 1000);
        Attribute1();
        return;
    }
    Attribute1();
}
function Attribute1()
{
    SMessage("%VANC% %VANP% Making the transaction..");
    setVar("GNMMerits", getVar("GNMMerits", 0) + 250);
    SMessage("%VANC% %VANP% Done!");
    SMessage("%VANC% %VANP% Your %DomHonorific% thanks you!");
    return;
    Attribute2();
}
function Attribute2()
{
    SMessage("%VANC% %VANP% Making the transaction..");
    setVar("GNMMerits", getVar("GNMMerits", 0) + 100);
    SMessage("%VANC% %VANP% Done!");
    SMessage("%VANC% %VANP% Your %DomHonorific% thanks you!");
    return;
    --UNINTERPRETED LINE:(2) \\MoodBooster
    --UNINTERPRETED LINE:@Variable[GNMGold]<[1000] @NullResponse @Goto(Poor2)
    SMessage("%VANC% %VANP% The moodbooster lasts a week and costs 1000 gold");
    let answer0 = getInput("%VANC% %VANP% Do you wish to purchase it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% Making the transaction..");
        setVar("GNMGold", getVar("GNMGold", 0) - 1000);
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    SMessage("%VANC% %VANP% Done!");
    setDate("MoodBooster");
    setVar("MoodBooster", true);
    SMessage("%VANC% %VANP% The moodbooster now lasts a week");
    return;
    --UNINTERPRETED LINE:(3) \\Attonement
    --UNINTERPRETED LINE:@Variable[GNMPPoints]<[100] @NullResponse @Goto(FewPP)
    --UNINTERPRETED LINE:@Variable[GNMGold]<[200] @NullResponse @Goto(Poor3)
    SMessage("%VANC% %VANP% You have");
    --Command:ShowVar(GNMPPoints)
    CMessage("punishment points");
    SMessage("%VANC% %VANP% It costs 2 gold for each punishment point you with to attone");
    let answer1 = getInput("%VANC% %VANP% Do you wish to attone for any punishment points?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer1.isLike("yes"))
    {
    }
    else if (answer1.isLike("no"))
    {
        End();
        return;
    }
    ChooseAttonement();
}
function ChooseAttonement()
{
    SMessage("%VANC% %VANP% How many punishment points do you wish to attone?");
    setVar("Attone", createInput().getAnswer());
    setVar("TempGold", 0);
    setVar("TempGold", getVar("TempGold", 0) + getVar("Attone", 0));
    setVar("TempGold", getVar("TempGold", 0) * 2);
    --UNINTERPRETED LINE:@Variable[Attone]<[0] @SystemMessage #VANC #VANP You cannot choose a number lower than 0 @Goto(ChooseAttonement)
    --UNINTERPRETED LINE:@Variable[Attone]<[GNMPPoints] @SystemMessage #VANC #VANP You cannot choose a number higher than your total @Goto(ChooseAttonement)
    --UNINTERPRETED LINE:@Variable[TempGold]>[GNMGold] @SystemMessage #VANC #VANP You can't afford that many points @Goto(ChooseAttonement)
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("TempGold", 0));
    setVar("TempGold", getVar("TempGold", 0) / 2);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) - getVar("TempGold", 0));
    return;
    --UNINTERPRETED LINE:(4) \\Denial setting
    --UNINTERPRETED LINE:@Variable[#DateDifference(LockOut1, Days)]<[Lock1Input] @SystemMessage #VANC #VANP You denial settings aren't locked @Goto(End)
    --UNINTERPRETED LINE:@Variable[GNMGold]<[2000] @NullResponse @Goto(Poor4)
    SMessage("%VANC% %VANP% It costs 2000 gold to unlock your denial settings");
    let answer0 = getInput("%VANC% %VANP% Do you wish to proceed with the trade?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% Making the transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 2000);
        setVar("Lock1Input", 0);
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    SMessage("%VANC% %VANP% Transaction Complete");
    End();
    return;
    PoorG();
}
function PoorG()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    return;
    Poor1();
}
function Poor1()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 500 to pay attribute");
    return;
    Poor2();
}
function Poor2()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 1000 to for the moodbooster");
    return;
    Poor3();
}
function Poor3()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 200 to pay for attonement");
    return;
    FewPP();
}
function FewPP()
{
    SMessage("%VANC% %VANP% You don\'t have enough punishmentpoints");
    SMessage("%VANC% %VANP% You need at least 100 before you can use attonement");
    return;
    Poor4();
}
function Poor4()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 2000 to unlock your denial settings");
    return;
    End();
}
function End()
{
    return;
    CMessage("Attribute 500 and 1000 gold");
    CMessage("MoodBoster 1000 gold / Week");
    CMessage("Attonement 200 gold / 100 points");
    CMessage("Unlock denial settings");
}