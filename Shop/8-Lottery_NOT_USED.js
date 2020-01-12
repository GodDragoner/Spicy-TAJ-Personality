main();
function main()
{
    --UNINTERPRETED LINE:@Flag(LotteryTicketActive) @Variable[#DateDifference(LotteryTicketTimer, Days)]>=[LotteryTicketCount] @NullResponse @Goto(NumberDrawn)
    if(getVar("LotteryTicketActive", false))
    {
        SMessage("%VANC% %VANP% You have a ticket, wait until the next lucky number is drawn");
        End();
        return;
    }
    SMessage("%VANC% %VANP% This is the lottery");
    SMessage("%VANC% %VANP% Every friday one number between 1 and 100 is drawn");
    SMessage("%VANC% %VANP% Have a ticket with the correct number and you win a prize");
    SMessage("%VANC% %VANP% The price for a ticket is 50 gold");
    --UNINTERPRETED LINE:@Variable[GNMGold]<[50]Then(EndPoor)
    let answer0 = getInput("%VANC% %VANP% Do you wish to purchase a ticket?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% Making the transaction");
        setVar("GNMGold", getVar("GNMGold", 0) - 50);
    }
    else if (answer0.isLike("no"))
    {
        End();
        return;
    }
    SMessage("%VANC% %VANP% Transaction Complete");
    setVar("LotteryTicket", 0);
    setVar("LotteryTicket", getVar("LotteryTicket", 0) + getVar("#Random1,100", 0));
    SMessage("%VANC% %VANP% Your ticket has the number");
    --Command:ShowVar(LotteryTicket)
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
    return;
    NumberDrawn();
}
function NumberDrawn()
{
    SMessage("%VANC% %VANP% Lets check if your ticket worked out for you! %GNMLol%");
    setVar("LuckyLotteryNumber", 0);
    setVar("LuckyLotteryNumber", getVar("LuckyLotteryNumber", 0) + getVar("#Random1,100", 0));
    SMessage("%VANC% %VANP% The number drawn is..");
    delVar("LotteryTicketActive");
    wait(5);
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP @ShowVar[LuckyLotteryNumber] ! @If[LotteryTicket]=[LuckyLotteryNumber]Then(Won)
    SMessage("%VANC% %VANP% Awww which means you weren\'t lucky Slave!");
    SMessage("%VANC% %VANP% Better luck next time!");
    return;
    Won();
}
function Won()
{
    SMessage("%VANC% %VANP% Lets see what you won!");
    SMessage("%VANC% %VANP% So your prizes are:");
    SMessage("%VANC% %VANP% 2500 gold!");
    setVar("GNMGold", getVar("GNMGold", 0) + 2500);
    SMessage("%VANC% %VANP% An orgasm pass!");
    setVar("OrgasmPass", getVar("OrgasmPass", 0) + 1);
    SMessage("%VANC% %VANP% A treasure chest!");
    setVar("TreasureChests", getVar("TreasureChests", 0) + 1);
    SMessage("%VANC% %VANP% And finaly you win a clean slade");
    SMessage("%VANC% %VANP% Meaning however many punishment points you had are now removed");
    setVar("GNMPPoints", 0);
    SMessage("%VANC% %VANP% Congratulations Slave!");
    return;
    EndPoor();
}
function EndPoor()
{
    SMessage("%VANC% %VANP% You don\'t have the 50 gold needed");
    SMessage("%VANC% %VANP% You only have");
    --Command:ShowVar(GNMGold)
    CMessage("gold");
    return;
    End();
}
function End()
{
    return;
    CMessage("Every friday a random number between 1 and 100 is chosen");
    CMessage("If you have the correct number you get a prize");
    CMessage("Prices: Orgasm, 2000 gold");
    CMessage("Ticket price 50 gold");
}