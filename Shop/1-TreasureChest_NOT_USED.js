main();
function main()
{
    SMessage("%VANC% %VANP% Treasure chests are not yet implemented");
    SMessage("%VANC% %VANP% They will arrive soon..");
    return;
    
    
    
    --UNINTERPRETED LINE:@Variable[TreasureChests]>[1] @SystemMessage #VANC #VANP You have @ShowVar[TreasureChests] treasure chests, lets open them! @Goto(OpenChest)
    --UNINTERPRETED LINE:@Variable[TreasureChests]>[0] @SystemMessage #VANC #VANP You have @ShowVar[TreasureChests] treasure chest, lets open it! @Goto(OpenChest)
    let answer0 = getInput("%VANC% %VANP% Do you wish to purchase a treasurechest?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no");
    }
    if (answer0.isLike("yes"))
    {
        if (getVar("GNMGold", 0) < 200)
        {
            NoEnoughGold();
            return;
        }
        Buy();
        return;
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    Buy();
}
function Buy()
{
    SMessage("%VANC% %VANP% Transfering the gold..");
    setVar("GNMGold", getVar("GNMGold", 0) - 200);
    SMessage("%VANC% %VANP% Successful!");
    SMessage("%VANC% %VANP% Here is your chest!");
    OpenChest();
    return;
    NotEnoughGold();
}
function NotEnoughGold()
{
    SMessage("%VANC% %VANP% You don\'t have enough gold slave");
    SMessage("%VANC% %VANP% You need 200");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    return;
    OpenChest();
}
function OpenChest()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC Lets see what kind of chest it is @ShowImage[\GNMImages\Shop\TreasureChest\TreasureChestUnopened.jpg] @SetVar[Chest]=[0] @ChangeVar[Chest]=[Chest]+[#Random(1,1000)]
    --UNINTERPRETED LINE:@Variable[Chest]>[975] @SystemMessage #VANC <Font color="orange">LEGENDARY CHEST</Font> @ShowImage[\GNMImages\Shop\TreasureChest\LegendaryChest.jpg] @Wait(7) @Goto(LegendaryChest)
    --UNINTERPRETED LINE:@Variable[Chest]>[930] @SystemMessage #VANC <Font color="purple">EPIC CHEST</Font> @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Wait(7) @Goto(EpicChest)
    --UNINTERPRETED LINE:@Variable[Chest]>[700] @SystemMessage #VANC <Font color="blue">RARE CHEST</Font> @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Wait(7) @Goto(RareChest)
    --UNINTERPRETED LINE:@Variable[Chest]>=[1] @SystemMessage #VANC <Font color="grey">NORMAL CHEST</Font> @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Wait(7) @Goto(NormalChest)
    NormalChest();
}
function NormalChest()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC Lets have a look inside! @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Wait(7) @SetVar[ChestRoll]=[0] @ChangeVar[ChestRoll]=[ChestRoll]+[#Random(1,1000)]
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\NormalChest.jpg] @Goto()
    
    RareChest();
}
function RareChest()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC Lets have a look inside! @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Wait(7) @SetVar[ChestRoll]=[0] @ChangeVar[ChestRoll]=[ChestRoll]+[#Random(1,1000)]
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\RareChest.jpg] @Goto()
    
    EpicChest();
}
function EpicChest()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC Lets have a look inside! @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Wait(7) @SetVar[ChestRoll]=[0] @ChangeVar[ChestRoll]=[ChestRoll]+[#Random(1,1000)]
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    
    LegendaryChest();
}
function LegendaryChest()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC Lets have a look inside! @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Wait(7) @SetVar[ChestRoll]=[0] @ChangeVar[ChestRoll]=[ChestRoll]+[#Random(1,1000)]
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    --UNINTERPRETED LINE:@Variable[ChestRoll]>[] @SystemMessage #VANC  @ShowImage[\GNMImages\Shop\TreasureChest\EpicChest.jpg] @Goto()
    
    End();
}
function End()
{
    return;
    
    
    
    
    
    
    
    
    
    if (answer-1.isLike("NormalChest"))
    {
    }
    CMessage("Can reward with adventure stuff");
    CMessage("Can reward orgasm part (15 needed in total)");
    CMessage("Small merit boost (25 points)");
    CMessage("Reduced PPoints (25)");
    
    if (answer-1.isLike("chest"))
    {
    }
    CMessage("Orgasm parts (2-3)");
    CMessage("Medium merit boost (100 merits)");
    CMessage("Reduce ppoints (100)");
    
    if (answer-1.isLike("chest"))
    {
    }
    CMessage("Gold (400)");
    CMessage("Key");
    CMessage("Orgasm parts (4-5)");
    CMessage("Large merit boost (300 merits)");
    
    if (answer-1.isLike("chest"))
    {
    }
    CMessage("Special chest only modules");
    CMessage("Adventure stuff");
    CMessage("Key");
    CMessage("Glitter house part invitation");
    CMessage("Orgasm pass");
    
    
    
}