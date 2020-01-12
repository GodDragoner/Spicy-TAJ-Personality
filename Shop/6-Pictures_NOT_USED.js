main();
function main()
{
    SMessage("%VANC% %VANP% You have 2 choices");
    SMessage("%VANC% %VANP% Here you can buy pictures that Spicy " + "0 will use");
    SMessage("%VANC% %VANP% On the " + "com Spicy forum there are half links");
    SMessage("%VANC% %VANP% You need the other half before you can start the download and add the new images to your collection");
    SMessage("%VANC% %VANP% When making a purchase here you\'ll get the other half");
    SMessage("%VANC% %VANP% You can at any point revisit here to get the link");
    --UNINTERPRETED LINE:@Variable[GNMGold]<[1000] @SystemMessage #VANC #VANP Buying a picture pack costs 1000 gold 
    --UNINTERPRETED LINE:@Variable[GNMGold]<[1000] @SystemMessage #VANC #VANP You only have @ShowVar[GNMGold] @Goto(End)
    SMessage("%VANC% %VANP% Buying a picture pack costs 1000 gold");
    let answer0 = getInput("%VANC% %VANP% Do you wish to proceed?");
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
    SMessage("%VANC% %VANP% You now have 3 options");
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP <Font color="red">1) Buy extra virtual assistant pictures</Font> <Font color="yellow">2) Buy Chastity pictures</Font> <Font color="black">3) Look at previously bought links</Font>
    if (answer0.isLike("one", "1"))
    {
        a1();
        return;
    }
    else if (answer0.isLike("two", "2"))
    {
        a2();
        return;
    }
    else if (answer0.isLike("three", "3"))
    {
        a3();
        return;
    }
    a1();
}
function a1()
{
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 1000);
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("PictureBought2", true);
    SMessage("%VANC% %VANP% This is the other half of the link:");
    return;
    a2();
}
function a2()
{
    SMessage("%VANC% %VANP% Making the transaction");
    setVar("GNMGold", getVar("GNMGold", 0) - 1000);
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("PictureBought2", true);
    SMessage("%VANC% %VANP% This is the other half of the link:");
    return;
    a3();
}
function a3()
{
    if(getVar("PictureBought1", false))
    {
        CMessage("Virtual Assistant Picture:");
    }
    if(getVar("PictureBought2", false))
    {
        CMessage("Chastity Related Pictures:");
    }
    End();
    return;
    End();
}
function End()
{
    return;
    --UNINTERPRETED LINE:1 \\Virtual assistant update 1000 gold
    --UNINTERPRETED LINE:2 \\Chastity off on pictures
}