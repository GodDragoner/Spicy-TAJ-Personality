main();
function main()
{
    ShopList();
}
function ShopList()
{
    setVar("TreasuerChestShopPrice", 100);
    setVar("PayTributeShopPrice", 500);
    setVar("DoublePayTributeShopPrice", 1000);
    setVar("MoodboosterShopPrice", 1000);
    setVar("AtonementShopPrice", 2);
    setVar("UnlockDenailShopPrice", 2000);
    setVar("ChastityPackShopPrice", 500);
    setVar("HumilationPackShopPrice", 500);
    setVar("PainPackShopPrice", 500);
    setVar("SlavePackShopPrice", 500);
    setVar("TeasePackShopPrice", 500);
    setVar("ChorePackShopPrice", 500);
    setVar("EndGamesPackShopPrice", 750);
    setVar("SpankingImplementPackShopPrice", 500);
    setVar("GlitterModuleShopPrice", 1500);
    sendVirtualAssistantMessage(" %SlaveName% the shop list is being printed..");
    sendVirtualAssistantMessage(" When you\'re ready, input the purchase code");
    sendVirtualAssistantMessage(" Input the purchase code + 'help' for information about the item like this:");
    sendVirtualAssistantMessage(" a7help");
    sendVirtualAssistantMessage(" Input \'help\' if you wish to have the shop list reprinted");
    sendVirtualAssistantMessage(" Input 'exit' if you want to leave @RapidCodeOn¨");
    sendVirtualAssistantMessage(" You currently have " +getVar("GNMGold")+ " Gold.");
 
    Print();
}
function Print()
{
    setRapidText(true);
    SMessage("--a1-- Treasure chest --- "+ getVar("") +" gold.");
    --Command:ShowVar(TreasuerChestShopPrice)
    CMessage("gold");
    SMessage("--b1-- Pay Tribute ---"+ getVar("") +" gold.");
    --Command:ShowVar(PayTributeShopPrice)
    CMessage("gold");
    SMessage("--b2-- Double Pay Tribute ---"+ getVar("") +" gold.");
    --Command:ShowVar(DoublePayTributeShopPrice)
    CMessage("gold");
    SMessage("--b3-- Moodbooster ---"+ getVar("") +" gold.");
    --Command:ShowVar(MoodboosterShopPrice)
    CMessage("gold");
    SMessage("--b4-- Atonement ---"+ getVar("") +" gold.");
    --Command:ShowVar(AtonementShopPrice)
    CMessage("gold / PPoint");
    --UNINTERPRETED LINE:@Variable[#DateDifference(LockOut1, Days)]>[Lock1Input] @SystemMessage --b5-- Unlock Denial --- @ShowVar[UnlockDenailShopPrice] gold
    if(!getVar("ChastityUpdate1", false))
    {
        SMessage("--c1-- Chastity Pack 1 --"+ getVar("") +" gold.");
        --Command:ShowVar(ChastityPackShopPrice)
        HumiliationPrint();
        return;
    }
    if(!getVar("ChastityUpdate2", false))
    {
        SMessage("--c1-- Chastity Pack 2 --"+ getVar("") +" gold.");
        --Command:ShowVar(ChastityPackShopPrice)
        HumiliationPrint();
        return;
    }
    if(!getVar("ChastityUpdate3", false))
    {
        SMessage("--c1-- Chastity Pack 3 --"+ getVar("") +" gold.");
        --Command:ShowVar(ChastityPackShopPrice)
        HumiliationPrint();
        return;
    }
    SMessage("--c1-- Chastity Packs --- Sold out");
    HumiliationPrint();
}
function HumiliationPrint()
{
    if(!getVar("HumiliationUpdate1", false))
    {
        SMessage("--c2-- Humiliation Pack 1 ---"+ getVar("") +" gold.");
        --Command:ShowVar(HumilationPackShopPrice)
        PainPrint();
        return;
    }
    if(!getVar("HumiliationUpdate2", false))
    {
        SMessage("--c2-- Humiliation Pack 2 ---"+ getVar("") +" gold.");
        --Command:ShowVar(HumilationPackShopPrice)
        PainPrint();
        return;
    }
    if(!getVar("HumiliationUpdate3", false))
    {
        SMessage("--c2-- Humiliation Pack 3 ---"+ getVar("") +" gold.");
        --Command:ShowVar(HumilationPackShopPrice)
        PainPrint();
        return;
    }
    SMessage("--c2-- Humiliation Packs --- Sold out");
    PainPrint();
}
function PainPrint()
{
    if(!getVar("PainUpdate1", false))
    {
        SMessage("--c3-- Pain Pack 1 ---"+ getVar("") +" gold.");
        --Command:ShowVar(PainPackShopPrice)
        SlavePrint();
        return;
    }
    if(!getVar("PainUpdate2", false))
    {
        SMessage("--c3-- Pain Pack 2 ---"+ getVar("") +" gold.");
        --Command:ShowVar(PainPackShopPrice)
        SlavePrint();
        return;
    }
    if(!getVar("PainUpdate3", false))
    {
        SMessage("--c3-- Pain Pack 3 ---"+ getVar("") +" gold.");
        --Command:ShowVar(PainPackShopPrice)
        SlavePrint();
        return;
    }
    SMessage("--c3-- Pain Packs --- Sold out");
    SlavePrint();
}
function SlavePrint()
{
    if(!getVar("SlaveUpdate1", false))
    {
        SMessage("--c4-- Slave Pack 1 ---"+ getVar("") +" gold.");
        --Command:ShowVar(SlavePackShopPrice)
        TeasePrint();
        return;
    }
    if(!getVar("SlaveUpdate2", false))
    {
        SMessage("--c4-- Slave Pack 2 ---"+ getVar("") +" gold.");
        --Command:ShowVar(SlavePackShopPrice)
        TeasePrint();
        return;
    }
    if(!getVar("SlaveUpdate3", false))
    {
        SMessage("--c4-- Slave Pack 3 ---"+ getVar("") +" gold.");
        --Command:ShowVar(SlavePackShopPrice)
        TeasePrint();
        return;
    }
    SMessage("--c4-- Slave Packs --- Sold out");
    TeasePrint();
}
function TeasePrint()
{
    if(!getVar("TeaseUpdate1", false))
    {
        SMessage("--c5-- Tease Pack 1 ---"+ getVar("") +" gold.");
        --Command:ShowVar(TeasePackShopPrice)
        ChorePrint();
        return;
    }
    if(!getVar("TeaseUpdate2", false))
    {
        SMessage("--c5-- Tease Pack 2 ---"+ getVar("") +" gold.");
        --Command:ShowVar(TeasePackShopPrice)
        ChorePrint();
        return;
    }
    if(!getVar("TeaseUpdate3", false))
    {
        SMessage("--c5-- Tease Pack 3---"+ getVar("") +" gold.");
        --Command:ShowVar(TeasePackShopPrice)
        ChorePrint();
        return;
    }
    if(!getVar("TeaseUpdate4", false))
    {
        SMessage("--c5-- Tease Pack 4 ---"+ getVar("") +" gold.");
        --Command:ShowVar(TeasePackShopPrice)
        ChorePrint();
        return;
    }
    SMessage("--c5-- Tease Packs --- Sold out");
    ChorePrint();
}
function ChorePrint()
{
    --UNINTERPRETED LINE:@Variable[#DateDifference(LotteryTicketTimer, Days)]<[LotteryTicketCount] @SystemMessage --d1-- Lottery Ticket --- 50 gold / each
    if(!getVar("ChorePack1", false))
    {
        SMessage("--e1-- Chore Pack 1 ---"+ getVar("") +" gold.");
        --Command:ShowVar(ChorePackShopPrice)
        SpankingPirnt();
        return;
    }
    if(!getVar("ChorePack2", false))
    {
        SMessage("--e1-- Chore Pack 2 ---"+ getVar("") +" gold.");
        --Command:ShowVar(ChorePackShopPrice)
        SpankingPirnt();
        return;
    }
    if(!getVar("ChorePack3", false))
    {
        SMessage("--e1-- Chore Pack 3 ---"+ getVar("") +" gold.");
        --Command:ShowVar(ChorePackShopPrice)
        SpankingPirnt();
        return;
    }
    if(!getVar("ChorePack4", false))
    {
        SMessage("--e1-- Chore Pack 4 ---"+ getVar("") +" gold.");
        --Command:ShowVar(ChorePackShopPrice)
        SpankingPirnt();
        return;
    }
    SMessage("--e1-- Chore Packs --- Sold out");
    SpankingPirnt();
}
function SpankingPirnt()
{
    SMessage("--f1-- End Games ---"+ getVar("") +" gold each.");
    --Command:ShowVar(EndGamesPackShopPrice)
    CMessage("gold each");
    if(!getVar("BoughtSpankingImplement4", false))
    {
        SMessage("--g1-- Spanking Implement 4 ---"+ getVar("") +" gold.");
        --Command:ShowVar(SpankingImplementPackShopPrice)
        GlitterPrint();
        return;
    }
    if(!getVar("BoughtSpankingImplement5", false))
    {
        SMessage("--g1-- Spanking Implement 5 ---"+ getVar("") +" gold.");
        --Command:ShowVar(SpankingImplementPackShopPrice)
        GlitterPrint();
        return;
        --UNINTERPRETED LINE:@Variable[#DateDifference(SpankzChoirSubscribtion, Days)]>[30] @SystemMessage --g2-- SpankzChoir Subscribtion --- 250 gold / 30 days
    }
    GlitterPrint();
}
function GlitterPrint()
{
    if(!getVar("Glitter1Bought", false))
    {
        CMessage("--h1--"+ getVar("") +" gold.");
        --Command:ShowVar(GlitterModuleShopPrice)
        EndPrint();
        return;
    }
    if(!getVar("Glitter2Bought", false))
    {
        CMessage("--h1--"+ getVar("") +" gold.");
        --Command:ShowVar(GlitterModuleShopPrice)
        EndPrint();
        return;
    }
    if(!getVar("Glitter3Bought", false))
    {
        CMessage("--h1--"+ getVar("") +" gold.");
        --Command:ShowVar(GlitterModuleShopPrice)
        EndPrint();
        return;
    }
    EndPrint();
}
function EndPrint()
{
    setRapidText(false);
    EnterCode();
}
function EnterCode()
{
    sendVirtualAssistantMessage(" Enter product code __");
    setVar("PCode", createInput().getAnswer());
    --UNINTERPRETED LINE:@Variable[PCode]==[a1] @NullResponse @If[GNMGold]<[TreasuerChestShopPrice]Then(Poor) @Goto(a1)
    --UNINTERPRETED LINE:@Variable[PCode]==[a1help] @NullResponse @Goto(a1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[b1] @NullResponse @If[GNMGold]<[PayTributeShopPrice]Then(Poor) @Goto(b1)
    --UNINTERPRETED LINE:@Variable[PCode]==[b1help] @NullResponse @Goto(b1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[b2] @NullResponse @If[GNMGold]<[DoublePayTributeShopPrice]Then(Poor) @Goto(b2)
    --UNINTERPRETED LINE:@Variable[PCode]==[b2help] @NullResponse @Goto(b2h)
    --UNINTERPRETED LINE:@Variable[PCode]==[b3] @NullResponse @If[GNMGold]<[MoodboosterShopPrice]Then(Poor) @Goto(b3)
    --UNINTERPRETED LINE:@Variable[PCode]==[b3help] @NullResponse @Goto(b3h)
    --UNINTERPRETED LINE:@Variable[PCode]==[b4] @NullResponse @Goto(b4)
    --UNINTERPRETED LINE:@Variable[PCode]==[b4help] @NullResponse @Goto(b4h)
    --UNINTERPRETED LINE:@Variable[PCode]==[b5] @NullResponse @If[GNMGold]<[UnlockDenailShopPrice]Then(Poor) @Goto(b5)
    --UNINTERPRETED LINE:@Variable[PCode]==[b5help] @NullResponse @Goto(b5h)
    --UNINTERPRETED LINE:@Variable[PCode]==[c1] @NullResponse @If[GNMGold]<[ChastityPackShopPrice]Then(Poor) @Goto(c1)
    --UNINTERPRETED LINE:@Variable[PCode]==[c1help] @NullResponse @Goto(c1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[c2] @NullResponse @If[GNMGold]<[HumilationPackShopPrice]Then(Poor) @Goto(c2)
    --UNINTERPRETED LINE:@Variable[PCode]==[c2help] @NullResponse @Goto(c2h)
    --UNINTERPRETED LINE:@Variable[PCode]==[c3] @NullResponse @If[GNMGold]<[PainPackShopPrice]Then(Poor) @Goto(c3)
    --UNINTERPRETED LINE:@Variable[PCode]==[c3help] @NullResponse @Goto(c3h)
    --UNINTERPRETED LINE:@Variable[PCode]==[c4] @NullResponse @If[GNMGold]<[SlavePackShopPrice]Then(Poor) @Goto(c4)
    --UNINTERPRETED LINE:@Variable[PCode]==[c4help] @NullResponse @Goto(c4h)
    --UNINTERPRETED LINE:@Variable[PCode]==[c5] @NullResponse @If[GNMGold]<[TeasePackShopPrice]Then(Poor) @Goto(c5)
    --UNINTERPRETED LINE:@Variable[PCode]==[c5help] @NullResponse @Goto(c5h)
    --UNINTERPRETED LINE:@Variable[PCode]==[d1] @NullResponse @If[GNMGold]<[500]Then(Poor) @Goto(d1)
    --UNINTERPRETED LINE:@Variable[PCode]==[d1help] @NullResponse @Goto(d1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[e1] @NullResponse @If[GNMGold]<[TeasePackShopPrice]Then(Poor) @Goto(e1)
    --UNINTERPRETED LINE:@Variable[PCode]==[e1help] @NullResponse @Goto(e1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[f1] @NullResponse @If[GNMGold]<[EndGamesPackShopPrice]Then(Poor) @Goto(f1)
    --UNINTERPRETED LINE:@Variable[PCode]==[f1help] @NullResponse @Goto(f1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[g1] @NullResponse @If[GNMGold]<[SpankingImplementPackShopPrice]Then(Poor) @Goto(g1)
    --UNINTERPRETED LINE:@Variable[PCode]==[g1help] @NullResponse @Goto(g1h)
    --UNINTERPRETED LINE:@Variable[PCode]==[g2] @NullResponse @If[GNMGold]<[200]Then(Poor) @Goto(g2)
    --UNINTERPRETED LINE:@Variable[PCode]==[g2help] @NullResponse @Goto(g2h)
    --UNINTERPRETED LINE:@Variable[PCode]==[h1] @NullResponse @If[GNMGold]<[GlitterModuleShopPrice]Then(Poor) @Goto(h1)
    --UNINTERPRETED LINE:@Variable[PCode]==[h1help] @NullResponse @Goto(h1h)
    setVar("PCode", getVar("exit", 0));
    End();
    return;
    setVar("PCode", getVar("help", 0));
    Print();
    return;
    sendVirtualAssistantMessage(" Your code was not recognized");
    sendVirtualAssistantMessage(" Try again");
    EnterCode();
    return;
    
    Poor();
}
function Poor()
{
    sendVirtualAssistantMessage(" You don\'t have the necessary gold to make the purchase");
    EnterCode();
    return;
    
    CMessage("(a1) //chest");
    sendVirtualAssistantMessage(" Chest\'s are currently unavailable for purchase");
    EnterCode();
    return;
    --UNINTERPRETED LINE:@NullResponse @CallReturn(CR\BackgroundMode\Shop\1-TreasureChest_NOT_USED.txt)
    Print();
    return;
    CMessage("(a1h) //chest");
    sendVirtualAssistantMessage(" Treasure chests are divided into four different types");
    sendVirtualAssistantMessage(" Common, rare, epic and legendary");
    sendVirtualAssistantMessage(" Each time you but a chest it will be one of these four");
    sendVirtualAssistantMessage(" Treasure chests can contain a very large variety of items");
    sendVirtualAssistantMessage(" All for you to discover");
    EnterCode();
    return;
    
    CMessage("(b1) //tribute");
    sendVirtualAssistantMessage(" Paying tribute..");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("PayTributeShopPrice", 0));
    CMessage("%MeritChangePHigh%");
    CMessage("%MeritChangePHigh%");
    sendVirtualAssistantMessage(" Payment succesfull");
    EnterCode();
    return;
    CMessage("(b1h) //tribute");
    sendVirtualAssistantMessage(" If you wish to boost your score with your domme");
    sendVirtualAssistantMessage(" Try paying her a tribute");
    sendVirtualAssistantMessage(" Willingly donating gold to her sends a powerfull message about wanting to serve");
    EnterCode();
    return;
    
    CMessage("(b2) //tribute2");
    sendVirtualAssistantMessage(" Paying tribute..");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("DoublePayTributeShopPrice", 0));
    CMessage("%MeritChangePHigh%");
    CMessage("%MeritChangePHigh%");
    CMessage("%MeritChangePHigh%");
    CMessage("%MeritChangePHigh%");
    sendVirtualAssistantMessage(" Payment succesfull");
    EnterCode();
    return;
    CMessage("(b2h) //tribute2");
    sendVirtualAssistantMessage(" If you wish to boost your score with your domme");
    sendVirtualAssistantMessage(" Try paying her a tribute");
    sendVirtualAssistantMessage(" Willingly donating gold to her sends a powerfull message about wanting to serve");
    EnterCode();
    return;
    
    CMessage("(b3) //Moodboster");
    sendVirtualAssistantMessage(" Paying moodbooster");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("MoodboosterShopPrice", 0));
    sendVirtualAssistantMessage(" Done!");
    setDate("MoodBooster");
    setVar("MoodBooster", true);
    sendVirtualAssistantMessage(" The moodbooster now lasts a week");
    EnterCode();
    return;
    CMessage("(b3h) //Moodboster");
    sendVirtualAssistantMessage(" Moodbooster is a 7 day system");
    sendVirtualAssistantMessage(" For 7 days the likeliness of your domme to be in a good mood is higher");
    sendVirtualAssistantMessage(" Willingly donating gold to her sends a powerfull message about wanting to serve");
    EnterCode();
    return;
    
    CMessage("(b4) //Atonement");
    sendVirtualAssistantMessage(" You have");
    --Command:ShowVar(GNMGold)
    CMessage("gold");
    sendVirtualAssistantMessage(" How much gold do you wish to buy for?");
    setVar("BuyOff", createInput().getAnswer());
    --UNINTERPRETED LINE:@Variable[BuyOff]<[100] @SystemMessage #VANC #VANP The chosen value is too small, choose at least 100 @Goto(b4)
    --UNINTERPRETED LINE:@Variable[BuyOff]>[GNMGold] @SystemMessage #VANC #VANP You can't spend more gold than you have @Goto(b4)
    sendVirtualAssistantMessage(" Making the purchase..");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("BuyOff", 0));
    setVar("BuyOff", getVar("BuyOff", 0) / getVar("AtonementShopPrice", 0));
    setVar("GNMPPoints", getVar("GNMPPoints", 0) - getVar("BuyOff", 0));
    sendVirtualAssistantMessage(" Payment complete!");
    EnterCode();
    return;
    CMessage("(b4h) //Atonement");
    sendVirtualAssistantMessage(" If you wish to have your punishment points reduced by paying gold");
    sendVirtualAssistantMessage(" This is possible");
    sendVirtualAssistantMessage(" The price is");
    --Command:ShowVar(AtonementShopPrice)
    CMessage("gold per punishment point");
    sendVirtualAssistantMessage(" You must at least spend a minimum of 100 gold");
    EnterCode();
    return;
    
    CMessage("(b5) //Unlock denial");
    sendVirtualAssistantMessage(" Unlocking denial settings");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("UnlockDenailShopPrice", 0));
    setVar("Lock1Input", 0);
    sendVirtualAssistantMessage(" Transaction complete, denial settings unlocked");
    EnterCode();
    return;
    
    CMessage("(b5h) //Unlock denial");
    sendVirtualAssistantMessage(" If you have locked yourself from changing your denial settings");
    sendVirtualAssistantMessage(" And can\'t wait for them to unlock again");
    sendVirtualAssistantMessage(" You can pay");
    --Command:ShowVar(UnlockDenailShopPrice)
    EnterCode();
    return;
    
    CMessage("(c1) //Chastity pack 1-3");
    if(getVar("ChastityUpdate3", false))
    {
        SoldOut();
        return;
    }
    if(getVar("ChastityUpdate2", false))
    {
        ChastityUpdate2();
        return;
    }
    if(getVar("ChastityUpdate1", false))
    {
        ChastityUpdate1();
        return;
    }
    sendVirtualAssistantMessage(" Buying chastity pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChastityPackShopPrice", 0));
    setVar("ChastityUpdate1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    ChastityUpdate1();
}
function ChastityUpdate1()
{
    sendVirtualAssistantMessage(" Buying chastity pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChastityPackShopPrice", 0));
    setVar("ChastityUpdate2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    ChastityUpdate2();
}
function ChastityUpdate2()
{
    sendVirtualAssistantMessage(" Buying chastity pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChastityPackShopPrice", 0));
    setVar("ChastityUpdate3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(c1h) //Chastity pack 1-3");
    sendVirtualAssistantMessage(" Module pack unlocking features within your chastity modules");
    sendVirtualAssistantMessage(" You purchase pack 1 first, then 2 and finally 3");
    sendVirtualAssistantMessage(" The price per pack is");
    --Command:ShowVar(ChastityPackShopPrice)
    EnterCode();
    return;
    
    CMessage("(c2) //Humiliation Pack");
    if(getVar("HumiliationUpdate3", false))
    {
        SoldOut();
        return;
    }
    if(getVar("HumiliationUpdate2", false))
    {
        HumiliationUpdate2();
        return;
    }
    if(getVar("HumiliationUpdate1", false))
    {
        HumiliationUpdate1();
        return;
    }
    sendVirtualAssistantMessage(" Buying humiliation pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("HumilationPackShopPrice", 0));
    setVar("HumiliationUpdate1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    HumiliationUpdate1();
}
function HumiliationUpdate1()
{
    sendVirtualAssistantMessage(" Buying humiliation pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("HumilationPackShopPrice", 0));
    setVar("HumiliationUpdate2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    HumiliationUpdate2();
}
function HumiliationUpdate2()
{
    sendVirtualAssistantMessage(" Buying humiliation pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("HumilationPackShopPrice", 0));
    setVar("HumiliationUpdate3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(c2h) //Humiliation Pack");
    sendVirtualAssistantMessage(" Module pack unlocking features within your humiliation modules");
    sendVirtualAssistantMessage(" You purchase pack 1 first, then 2 and finally 3");
    sendVirtualAssistantMessage(" The price per pack is");
    --Command:ShowVar(HumilationPackShopPrice)
    EnterCode();
    return;
    
    CMessage("(c3) //Pain Pack 1-3");
    if(getVar("PainUpdate3", false))
    {
        SoldOut();
        return;
    }
    if(getVar("PainUpdate2", false))
    {
        PainUpdate2();
        return;
    }
    if(getVar("PainUpdate1", false))
    {
        PainUpdate1();
        return;
    }
    sendVirtualAssistantMessage(" Buying pain pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("PainPackShopPrice", 0));
    setVar("PainUpdate1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    PainUpdate1();
}
function PainUpdate1()
{
    sendVirtualAssistantMessage(" Buying pain pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("PainPackShopPrice", 0));
    setVar("PainUpdate2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    PainUpdate2();
}
function PainUpdate2()
{
    sendVirtualAssistantMessage(" Buying pain pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("PainPackShopPrice", 0));
    setVar("PainUpdate3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(c3h) //Pain Pack 1-3");
    sendVirtualAssistantMessage(" Module pack unlocking features within your pain modules");
    sendVirtualAssistantMessage(" You purchase pack 1 first, then 2 and finally 3");
    sendVirtualAssistantMessage(" The price per pack is");
    --Command:ShowVar(PainPackShopPrice)
    EnterCode();
    return;
    
    CMessage("(c4) //Slave Pack 1-3");
    if(getVar("SlaveUpdate3", false))
    {
        SoldOut();
        return;
    }
    if(getVar("SlaveUpdate2", false))
    {
        SlaveUpdate2();
        return;
    }
    if(getVar("SlaveUpdate1", false))
    {
        SlaveUpdate1();
        return;
    }
    sendVirtualAssistantMessage(" Buying slave training pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("SlavePackShopPrice", 0));
    setVar("SlaveUpdate1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    SlaveUpdate1();
}
function SlaveUpdate1()
{
    sendVirtualAssistantMessage(" Buying slave training pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("SlavePackShopPrice", 0));
    setVar("SlaveUpdate2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    SlaveUpdate2();
}
function SlaveUpdate2()
{
    sendVirtualAssistantMessage(" Buying slave training pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("SlavePackShopPrice", 0));
    setVar("SlaveUpdate3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(c4h) //Slave Pack 1-3");
    sendVirtualAssistantMessage(" Module pack unlocking features within your slave training modules");
    sendVirtualAssistantMessage(" You purchase pack 1 first, then 2 and finally 3");
    sendVirtualAssistantMessage(" The price per pack is");
    --Command:ShowVar(SlavePackShopPrice)
    EnterCode();
    return;
    
    CMessage("(c5) //Tease Pack 1-3");
    if(getVar("TeaseUpdate4", false))
    {
        SoldOut();
        return;
    }
    if(getVar("TeaseUpdate3", false))
    {
        TeaseUpdate3();
        return;
    }
    if(getVar("TeaseUpdate2", false))
    {
        TeaseUpdate2();
        return;
    }
    if(getVar("TeaseUpdate1", false))
    {
        TeaseUpdate1();
        return;
    }
    sendVirtualAssistantMessage(" Buying tease pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("TeasePackShopPrice", 0));
    setVar("TeaseUpdate1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    TeaseUpdate1();
}
function TeaseUpdate1()
{
    sendVirtualAssistantMessage(" Buying tease pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("TeasePackShopPrice", 0));
    setVar("TeaseUpdate2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    TeaseUpdate2();
}
function TeaseUpdate2()
{
    sendVirtualAssistantMessage(" Buying tease pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("TeasePackShopPrice", 0));
    setVar("TeaseUpdate3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    TeaseUpdate3();
}
function TeaseUpdate3()
{
    sendVirtualAssistantMessage(" Buying tease pack 4");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("TeasePackShopPrice", 0));
    setVar("TeaseUpdate4", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(c5h) //Tease Pack 1-3");
    sendVirtualAssistantMessage(" Module pack unlocking features within your Tease modules");
    sendVirtualAssistantMessage(" You purchase pack 1 first, then 2 and finally 3");
    sendVirtualAssistantMessage(" The price per pack is");
    --Command:ShowVar(TeasePackShopPrice)
    EnterCode();
    return;
    
    CMessage("(d1) //Lottery Ticket");
    sendVirtualAssistantMessage(" Buying lottery ticket");
    setVar("GNMGold", getVar("GNMGold", 0) - 50);
    --Command:DayOfWeek(Monday,Montag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 4);
    --Command:DayOfWeek(Tuesday,Dienstag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 3);
    --Command:DayOfWeek(Wednesday,Mittwoch)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 2);
    --Command:DayOfWeek(Thursday,Donnerstag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 1);
    --Command:DayOfWeek(Friday,Freitag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 7);
    --Command:DayOfWeek(Saturday,Samstag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 6);
    --Command:DayOfWeek(Sunday,Sonntag)
    setDate("LotteryTicketTimer");
    setVar("LotteryTicketCount", 5);
    sendVirtualAssistantMessage(" Transaction Complete");
    setVar("LotteryTicket", getVar("#Random1,100", 0));
    setVar("LotteryTicket", true);
    sendVirtualAssistantMessage(" Your ticket has the number");
    --Command:ShowVar(LotteryTicket)
    EnterCode();
    return;
    CMessage("(d1h) //Lottery Ticket");
    sendVirtualAssistantMessage(" Every friday a lottery number is picked");
    sendVirtualAssistantMessage(" If you have a winning ticket you earn a lot of gold");
    sendVirtualAssistantMessage(" The price for a ticket is 50 gold");
    EnterCode();
    return;
    
    CMessage("(e1) // Chore Pack 1-4");
    if(getVar("ChorePack4", false))
    {
        SoldOut();
        return;
    }
    if(getVar("ChorePack3", false))
    {
        ChorePack3();
        return;
    }
    if(getVar("ChorePack2", false))
    {
        ChorePack2();
        return;
    }
    if(getVar("ChorePack1", false))
    {
        ChorePack1();
        return;
    }
    sendVirtualAssistantMessage(" Buying chore pack 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChorePackShopPrice", 0));
    setVar("ChorePack1", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    ChorePack1();
}
function ChorePack1()
{
    sendVirtualAssistantMessage(" Buying chore pack 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChorePackShopPrice", 0));
    setVar("ChorePack2", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    ChorePack2();
}
function ChorePack2()
{
    sendVirtualAssistantMessage(" Buying chore pack 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChorePackShopPrice", 0));
    setVar("ChorePack3", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    ChorePack3();
}
function ChorePack3()
{
    sendVirtualAssistantMessage(" Buying chore pack 4");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("ChorePackShopPrice", 0));
    setVar("ChorePack4", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    CMessage("(e1h) // Chore Pack 1-4");
    sendVirtualAssistantMessage(" If you wish to expand your variety of chores");
    sendVirtualAssistantMessage(" You need to buy a chore pack");
    sendVirtualAssistantMessage(" Each pack unlocking several different chores");
    sendVirtualAssistantMessage(" Also giving you additional ways of earning gold");
    EnterCode();
    return;
    
    CMessage("(f1) // Chastity game");
    --UNINTERPRETED LINE:@NullResponse @CallReturn(CR\BackgroundMode\shop\4-Endings.txt)
    EnterCode();
    return;
    CMessage("(f1h) // Chastity Game");
    --UNINTERPRETED LINE:@NullResponse @CallReturn(CR\BackgroundMode\shop\4-Endings.txt)
    EnterCode();
    return;
    
    CMessage("(g1) //spanking Implement 4-5");
    if(getVar("BoughtSpankingImplement5", false))
    {
        SoldOut();
        return;
    }
    if(getVar("BoughtSpankingImplement4", false))
    {
        BoughtSpankingImplement4();
        return;
    }
    sendVirtualAssistantMessage(" Buying spanking implement 4");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("SpankingImplementPackShopPrice", 0));
    setVar("BoughtSpankingImplement4", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    sendVirtualAssistantMessage(" What is the name of your fourth spanking implement?");
    setVar("SpankingImplement4", createInput().getAnswer());
    sendVirtualAssistantMessage(" Noted..");
    EnterCode();
    return;
    BoughtSpankingImplement4();
}
function BoughtSpankingImplement4()
{
    sendVirtualAssistantMessage(" Buying spanking implement 5");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("SpankingImplementPackShopPrice", 0));
    setVar("BoughtSpankingImplement5", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    sendVirtualAssistantMessage(" What is the name of your fifth spanking implement?");
    setVar("SpankingImplement5", createInput().getAnswer());
    sendVirtualAssistantMessage(" Noted..");
    EnterCode();
    return;
    CMessage("(g1h) //spanking Implement 4-5");
    sendVirtualAssistantMessage(" If you\'re into spanking you might wish for a bit more variety");
    sendVirtualAssistantMessage(" By default you have 3 spankings implements");
    sendVirtualAssistantMessage(" But you can buy a fourth and fifth each costing");
    --Command:ShowVar(SpankingImplementPackShopPrice)
    EnterCode();
    return;
    
    CMessage("(g2) //SpankzChoir Subscribtion");
    sendVirtualAssistantMessage(" Buying subscribtion");
    setVar("GNMGold", getVar("GNMGold", 0) - 250);
    sendVirtualAssistantMessage(" Transaction Complete");
    setDate("SpankzChoirSubscribtion");
    EnterCode();
    return;
    CMessage("(g2h) //SpankzChoir Subscribtion");
    sendVirtualAssistantMessage(" SpankzChoir is a place where you can sell your ass for a spanking");
    sendVirtualAssistantMessage(" A 30 day subscribtion is 250 gold");
    EnterCode();
    return;
    
    h1();
}
function h1()
{
    if(getVar("Glitter3Bought", false))
    {
        SoldOut();
        return;
    }
    if(getVar("Glitter2Bought", false))
    {
        Glitter2Bought();
        return;
    }
    if(getVar("Glitter1Bought", false))
    {
        Glitter1Bought();
        return;
    }
    sendVirtualAssistantMessage(" Buying glitter add-on 1");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("GlitterModuleShopPrice", 0));
    setVar("Glitter1Bought", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    Glitter1Bought();
}
function Glitter1Bought()
{
    sendVirtualAssistantMessage(" Buying glitter add-on 2");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("GlitterModuleShopPrice", 0));
    setVar("Glitter2Bought", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    Glitter2Bought();
}
function Glitter2Bought()
{
    sendVirtualAssistantMessage(" Buying glitter add-on 3");
    setVar("GNMGold", getVar("GNMGold", 0) - getVar("GlitterModuleShopPrice", 0));
    setVar("Glitter3Bought", true);
    sendVirtualAssistantMessage(" Transaction complete..");
    EnterCode();
    return;
    h1h();
}
function h1h()
{
    sendVirtualAssistantMessage(" If you want glitter to run module scripts you need to unlock it");
    sendVirtualAssistantMessage(" Unlocking glitter 1, 2 or 3 costs");
    --Command:ShowVar(GlitterModuleShopPrice)
    EnterCode();
    return;
    SoldOut();
}
function SoldOut()
{
    sendVirtualAssistantMessage(" This category is currently sold out. Come back later %SlaveName%");
    EnterCode();
    return;
    End();
}
function End()
{
    return;
    Treasurechest();
}
function Treasurechest()
{
    CMessage("200 gold");
    --UNINTERPRETED LINE:	+ Chance for a key
    --UNINTERPRETED LINE:	+ Chance for merits
    --UNINTERPRETED LINE:	+ Reduced PPoints
    --UNINTERPRETED LINE:	+ Chance for orgasmpass
    --UNINTERPRETED LINE:	+ Chance for adventure stuff
    --UNINTERPRETED LINE:	+ 
    Service();
}
function Service()
{
    CMessage("Attribute 500 and 1000 gold");
    CMessage("MoodBoster 1000 gold / Week");
    CMessage("Atonement 200 gold / 100 points");
    CMessage("Unlock denial settings");
    Modules();
}
function Modules()
{
    CMessage("New modules 1000 gold");
    CMessage("Modules update pack 500 gold");
    CMessage("Glitter x, 2500 gold");
    Ends();
}
function Ends()
{
    CMessage("New end game 750 gold");
    Punishments();
}
function Punishments()
{
    --UNINTERPRETED LINE:Toys: Spanking implement 4 & 5
    CMessage("Spankz choir subscribtion, 250 gold / month");
    CMessage("SelfBondage scenario 1000 gold");
    CMessage("New punishments: 500 gold");
    Pictures();
}
function Pictures()
{
    CMessage("Virtual assistant update 1000 gold");
    CMessage("Miss A update");
    CMessage("Chastity off on pictures");
    Academy();
}
function Academy()
{
    CMessage("Closed");
    Lottery();
}
function Lottery()
{
    CMessage("Every friday a random number between 1 and 100 is chosen");
    CMessage("If you have the correct number you get a prize");
    CMessage("Prices: Orgasm, 2000 gold");
    CMessage("Ticket price 50 gold");
    Chores();
}
function Chores()
{
    CMessage("New chores chores 300 gold each");
    CMessage("Adventure journal");
    --UNINTERPRETED LINE:	Encountering monters
    --UNINTERPRETED LINE:	Encountering events
}