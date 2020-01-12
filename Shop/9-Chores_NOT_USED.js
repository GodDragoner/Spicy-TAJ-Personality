main();
function main()
{
    SMessage("%VANC% %VANP% In here you can buy new chores");
    SMessage("%VANC% %VANP% These include chores that are different from your primary chores");
    SMessage("%VANC% %VANP% Those are for the moments where you want to earn additional gold or please your %DomHonorific%");
    if (getVar("GNMGold", 0) < 2000)
    {
        Poor();
        return;
    }
    let answer0 = getInput("%VANC% %VANP% Do you wish to purchase additional chores?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    setRapidText(true);
    if(getVar("ChorePack1", false))
    {
        SMessage("%VANC% %VANP% You have Chore Pack 1");
    }
    if(getVar("ChorePack2", false))
    {
        SMessage("%VANC% %VANP% You have Tease Chore Pack 2");
    }
    if(getVar("ChorePack3", false))
    {
        SMessage("%VANC% %VANP% You have Chore Pack 3");
    }
    if(getVar("ChorePack4", false))
    {
        SMessage("%VANC% %VANP% You have Humilation Chore Pack 4");
    }
    setRapidText(false);
    SMessage("%VANC% %VANP% These chore packs are available for purchase");
    setRapidText(true);
    if(getVar("ChorePack1", false))
    {
        SMessage("%VANC% %VANP% Chore Pack 1");
    }
    if(getVar("ChorePack2", false))
    {
        SMessage("%VANC% %VANP% Chore Tease Pack 2");
    }
    if(getVar("ChorePack3", false))
    {
        SMessage("%VANC% %VANP% Chore Pack 3");
    }
    if(getVar("ChorePack4", false))
    {
        SMessage("%VANC% %VANP% Chore Humilation Pack 4");
    }
    setRapidText(false);
    let answer1 = getInput("%VANC% %VANP% Which pack do you wish to purchase?");
    while (!(answer1.isLike("1") || answer1.isLike("2") || answer1.isLike("3") || answer1.isLike("4")))
    {
        answer1 = getInput("%VANC% %VANP% 1, 2, 3 or 4?");
    }
    if (answer1.isLike("1"))
    {
        SMessage("%VANC% %VANP% Making the Transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 2000);
        a1Bought();
        return;
    }
    else if (answer1.isLike("2"))
    {
        SMessage("%VANC% %VANP% Making the Transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 2000);
        a2Bought();
        return;
    }
    else if (answer1.isLike("3"))
    {
        SMessage("%VANC% %VANP% Making the Transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 2000);
        a3Bought();
        return;
    }
    else if (answer1.isLike("4"))
    {
        SMessage("%VANC% %VANP% Making the Transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 2000);
        a4Bought();
        return;
    }
    a1Bought();
}
function a1Bought()
{
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("ChorePack1", true);
    setVar("ChoresBought", getVar("ChoresBought", 0) + 1);
    return;
    a2Bought();
}
function a2Bought()
{
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("ChorePack2", true);
    setVar("ChoresBought", getVar("ChoresBought", 0) + 1);
    return;
    a3Bought();
}
function a3Bought()
{
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("ChorePack3", true);
    setVar("ChoresBought", getVar("ChoresBought", 0) + 1);
    return;
    a4Bought();
}
function a4Bought()
{
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("ChorePack4", true);
    setVar("ChoresBought", getVar("ChoresBought", 0) + 1);
    return;
    End();
}
function End()
{
    return;
    Poor();
}
function Poor()
{
    SMessage("%VANC% %VANP% You need at least 2000 gold to buy a set of extra chores");
    return;
}