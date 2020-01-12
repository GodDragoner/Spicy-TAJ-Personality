main();
function main()
{
    SMessage("%VANC% %VANP% You have 3 choices");
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="red">1) Buy Modules</Font> <Font color="green">2) Update Modules</Font> <Font color="blue">3) Open Up Glitter</Font>
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="red">Return) Returns</Font> 
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
    else if (answer-1.isLike("return"))
    {
    }
    return;
    a1();
}
function a1()
{
    SMessage("%VANC% %VANP% You have all the modules");
    return;
    a2();
}
function a2()
{
    --UNINTERPRETED LINE:@Variable[GNMGold]<[500] @NullResponse @Goto(Poor1)
    setRapidText(true);
    if(getVar("ChastityUpdate1", false))
    {
        SMessage("%VANC% %VANP% You own ChastityUpdate1");
    }
    if(getVar("ChastityUpdate2", false))
    {
        SMessage("%VANC% %VANP% You own ChastityUpdate2");
    }
    if(getVar("ChastityUpdate3", false))
    {
        SMessage("%VANC% %VANP% You own ChastityUpdate3");
    }
    if(getVar("HumiliationUpdate1", false))
    {
        SMessage("%VANC% %VANP% You own HumiliationUpdate1");
    }
    if(getVar("HumiliationUpdate2", false))
    {
        SMessage("%VANC% %VANP% You own HumiliationUpdate2");
    }
    if(getVar("HumiliationUpdate3", false))
    {
        SMessage("%VANC% %VANP% You own HumiliationUpdate3");
    }
    if(getVar("PainUpdate1", false))
    {
        SMessage("%VANC% %VANP% You own PainUpdate1");
    }
    if(getVar("PainUpdate2", false))
    {
        SMessage("%VANC% %VANP% You own PainUpdate2");
    }
    if(getVar("PainUpdate3", false))
    {
        SMessage("%VANC% %VANP% You own PainUpdate3");
    }
    if(getVar("SlaveUpdate1", false))
    {
        SMessage("%VANC% %VANP% You own SlaveUpdate1");
    }
    if(getVar("SlaveUpdate2", false))
    {
        SMessage("%VANC% %VANP% You own SlaveUpdate2");
    }
    if(getVar("SlaveUpdate3", false))
    {
        SMessage("%VANC% %VANP% You own SlaveUpdate3");
    }
    if(getVar("TeaseUpdate1", false))
    {
        SMessage("%VANC% %VANP% You own TeaseUpdate1");
    }
    if(getVar("TeaseUpdate2", false))
    {
        SMessage("%VANC% %VANP% You own TeaseUpdate2");
    }
    if(getVar("TeaseUpdate3", false))
    {
        SMessage("%VANC% %VANP% You own TeaseUpdate3");
    }
    setRapidText(false);
    SMessage("%VANC% %VANP% Here you can buy updates for different modules");
    SMessage("%VANC% %VANP% Unlocking features inside your modules");
    SMessage("%VANC% %VANP% You won\'t know how they are updated");
    SMessage("%VANC% %VANP% That is for you to discover");
    SMessage("%VANC% %VANP% You only know to which category you get these updates");
    SMessage("%VANC% %VANP% Each update pack is 500 gold");
    let answer0 = getInput("%VANC% %VANP% Do you wish to buy an update pack?");
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
    SMessage("%VANC% %VANP% The following packs are available for purchase");
    setRapidText(true);
    --UNINTERPRETED LINE:@NotFlag(ChastityUpdate1) @SystemMessage #VANC #VANP <Font color="red">1a) ChastityUpdate1</Font>
    --UNINTERPRETED LINE:@NotFlag(ChastityUpdate2) @SystemMessage #VANC #VANP <Font color="red">1b) ChastityUpdate2</Font>
    --UNINTERPRETED LINE:@NotFlag(ChastityUpdate3) @SystemMessage #VANC #VANP <Font color="red">1c) ChastityUpdate3</Font>
    --UNINTERPRETED LINE:@NotFlag(HumiliationUpdate1) @SystemMessage #VANC #VANP <Font color="blue">2a) HumiliationUpdate1</Font>
    --UNINTERPRETED LINE:@NotFlag(HumiliationUpdate2) @SystemMessage #VANC #VANP <Font color="blue">2b) HumiliationUpdate2</Font>
    --UNINTERPRETED LINE:@NotFlag(HumiliationUpdate3) @SystemMessage #VANC #VANP <Font color="blue">2c) HumiliationUpdate3</Font>
    --UNINTERPRETED LINE:@NotFlag(PainUpdate1) @SystemMessage #VANC #VANP <Font color="green">3a) PainUpdate1</Font>
    --UNINTERPRETED LINE:@NotFlag(PainUpdate2) @SystemMessage #VANC #VANP <Font color="green">3b) PainUpdate2</Font>
    --UNINTERPRETED LINE:@NotFlag(PainUpdate3) @SystemMessage #VANC #VANP <Font color="green">3c) PainUpdate3</Font>
    --UNINTERPRETED LINE:@NotFlag(SlaveUpdate1) @SystemMessage #VANC #VANP <Font color="yellow">4a) SlaveUpdate1</Font>
    --UNINTERPRETED LINE:@NotFlag(SlaveUpdate2) @SystemMessage #VANC #VANP <Font color="yellow">4b) SlaveUpdate2</Font>
    --UNINTERPRETED LINE:@NotFlag(SlaveUpdate3) @SystemMessage #VANC #VANP <Font color="yellow">4c) SlaveUpdate3</Font>
    --UNINTERPRETED LINE:@NotFlag(TeaseUpdate1) @SystemMessage #VANC #VANP <Font color="purple">5a) TeaseUpdate1</Font>
    --UNINTERPRETED LINE:@NotFlag(TeaseUpdate2) @SystemMessage #VANC #VANP <Font color="purple">5b) TeaseUpdate2</Font>
    --UNINTERPRETED LINE:@NotFlag(TeaseUpdate3) @SystemMessage #VANC #VANP <Font color="purple">5c) TeaseUpdate3</Font>
    setRapidText(false);
    let answer1 = getInput("%VANC% %VANP% Which pack do you wish to buy?");
    while (!(answer1.isLike("a") || answer1.isLike("1a") || answer1.isLike("b") || answer1.isLike("1b") || answer1.isLike("c") || answer1.isLike("1c") || answer1.isLike("a") || answer1.isLike("2a") || answer1.isLike("b") || answer1.isLike("2b") || answer1.isLike("c") || answer1.isLike("2c") || answer1.isLike("a") || answer1.isLike("3a") || answer1.isLike("b") || answer1.isLike("3b") || answer1.isLike("c") || answer1.isLike("3c") || answer1.isLike("a") || answer1.isLike("4a") || answer1.isLike("b") || answer1.isLike("4b") || answer1.isLike("c") || answer1.isLike("4c") || answer1.isLike("a") || answer1.isLike("5a") || answer1.isLike("b") || answer1.isLike("5b") || answer1.isLike("c") || answer1.isLike("5c")))
    {
        answer1 = getInput("%VANC% %VANP% 1a, 1b, 1c, 2a, 2b, 2c, 3a, 3b, 3c, 4a, 4b, 4c, 5a, 5b or 5c");
    }
    if (answer1.isLike("a", "1a"))
    {
        a1a();
        return;
    }
    else if (answer1.isLike("b", "1b"))
    {
        a1b();
        return;
    }
    else if (answer1.isLike("c", "1c"))
    {
        a1c();
        return;
    }
    else if (answer1.isLike("a", "2a"))
    {
        a2a();
        return;
    }
    else if (answer1.isLike("b", "2b"))
    {
        a2b();
        return;
    }
    else if (answer1.isLike("c", "2c"))
    {
        a2c();
        return;
    }
    else if (answer1.isLike("a", "3a"))
    {
        a3a();
        return;
    }
    else if (answer1.isLike("b", "3b"))
    {
        a3b();
        return;
    }
    else if (answer1.isLike("c", "3c"))
    {
        a3c();
        return;
    }
    else if (answer1.isLike("a", "4a"))
    {
        a4a();
        return;
    }
    else if (answer1.isLike("b", "4b"))
    {
        a4b();
        return;
    }
    else if (answer1.isLike("c", "4c"))
    {
        a4c();
        return;
    }
    else if (answer1.isLike("a", "5a"))
    {
        a5a();
        return;
    }
    else if (answer1.isLike("b", "5b"))
    {
        a5b();
        return;
    }
    else if (answer1.isLike("c", "5c"))
    {
        a5c();
        return;
    }
    a1a();
}
function a1a()
{
    if(getVar("ChastityUpdate1", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("ChastityUpdate1", true);
    End();
    return;
    a1b();
}
function a1b()
{
    if(getVar("ChastityUpdate2", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("ChastityUpdate2", true);
    End();
    return;
    a1c();
}
function a1c()
{
    if(getVar("ChastityUpdate3", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("ChastityUpdate3", true);
    End();
    return;
    a2a();
}
function a2a()
{
    if(getVar("HumiliationUpdate1", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("HumiliationUpdate1", true);
    End();
    return;
    a2b();
}
function a2b()
{
    if(getVar("HumiliationUpdate2", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("HumiliationUpdate2", true);
    End();
    return;
    a2c();
}
function a2c()
{
    if(getVar("HumiliationUpdate3", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("HumiliationUpdate3", true);
    End();
    return;
    a3a();
}
function a3a()
{
    if(getVar("PainUpdate1", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("PainUpdate1", true);
    End();
    return;
    a3b();
}
function a3b()
{
    if(getVar("PainUpdate2", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("PainUpdate2", true);
    End();
    return;
    a3c();
}
function a3c()
{
    if(getVar("PainUpdate3", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("PainUpdate3", true);
    End();
    return;
    a4a();
}
function a4a()
{
    if(getVar("SlaveUpdate1", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("SlaveUpdate1", true);
    End();
    return;
    a4b();
}
function a4b()
{
    if(getVar("SlaveUpdate2", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("SlaveUpdate2", true);
    End();
    return;
    a4c();
}
function a4c()
{
    if(getVar("SlaveUpdate3", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("SlaveUpdate3", true);
    End();
    return;
    a5a();
}
function a5a()
{
    if(getVar("TeaseUpdate1", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("TeaseUpdate1", true);
    End();
    return;
    a5b();
}
function a5b()
{
    if(getVar("TeaseUpdate2", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("TeaseUpdate2", true);
    End();
    return;
    a5c();
}
function a5c()
{
    if(getVar("TeaseUpdate3", false))
    {
        SMessage("%VANC% %VANP% You already bought this");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 500);
    SMessage("%VANC% %VANP% Transaction complete");
    setVar("TeaseUpdate3", true);
    End();
    return;
    a3();
}
function a3()
{
    --UNINTERPRETED LINE:@Variable[GNMGold]<[2500] @NullResponse @Goto(Poor2)
    if(getVar("Glitter1Bought", false) && getVar("Glitter2Bought", false) && getVar("Glitter3Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for all the glitter friends");
        End();
        return;
        --UNINTERPRETED LINE:@SystemMessage #VANC #VANP With this purchase there is chance that your #DomHonorific's glitter friends
    }
    SMessage("%VANC% %VANP% Will take control when having a session");
    if(getVar("Glitter1Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 1");
    }
    if(getVar("Glitter2Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 2");
    }
    if(getVar("Glitter3Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 3");
    }
    let answer0 = getInput("%VANC% %VANP% Do you wish to unlock this feature?");
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
    let answer1 = getInput("%VANC% %VANP% Which glitter feature would you like to unlock?");
    while (!(answer1.isLike("1") || answer1.isLike("one") || answer1.isLike("1") || answer1.isLike("2") || answer1.isLike("two") || answer1.isLike("2") || answer1.isLike("3") || answer1.isLike("three") || answer1.isLike("3")))
    {
        answer1 = getInput("%VANC% %VANP% 1, 2 or 3?");
    }
    if (answer1.isLike("1", "one", "1"))
    {
        Glitter1();
        return;
    }
    else if (answer1.isLike("2", "two", "2"))
    {
        Glitter2();
        return;
    }
    else if (answer1.isLike("3", "three", "3"))
    {
        Glitter3();
        return;
    }
    Glitter1();
}
function Glitter1()
{
    if(getVar("Glitter1Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 1");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 2500);
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("Glitter1Bought", true);
    End();
    return;
    Glitter2();
}
function Glitter2()
{
    if(getVar("Glitter2Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 2");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 2500);
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("Glitter2Bought", true);
    End();
    return;
    Glitter3();
}
function Glitter3()
{
    if(getVar("Glitter3Bought", false))
    {
        SMessage("%VANC% %VANP% You have paid for the glitter 3");
        End();
        return;
    }
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 2500);
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("Glitter3Bought", true);
    End();
    return;
    Poor1();
}
function Poor1()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 500 to update modules");
    return;
    Poor2();
}
function Poor2()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold Slave");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    SMessage("%VANC% %VANP% You need at least 2500 to open up for glitter module control");
    return;
    End();
}
function End()
{
    return;
}