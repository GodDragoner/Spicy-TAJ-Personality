main();
function main()
{
    delVar("LotteryTicket");
    sendVirtualAssistantMessage(" This weeks lottery number is..");
    setVar("LuckyNumber", randomInteger(0,100));
    sendVirtualAssistantMessage( getVar("LuckyNumber")+" !");
    setVar("LotteryTicket", getVar("LuckyNumber", 0));
    sendVirtualAssistantMessage(" Meaning you won!");
    Winner();
    return;
    sendVirtualAssistantMessage(" Meaning that you didn\'t win anything this week I\'m afraid");
    sendVirtualAssistantMessage(" Better luck next time!");
    return;
    
}
function Winner()
{
    sendVirtualAssistantMessage("So it makes me happy to tell you that you\'ve won 2500 gold!");
    sendVirtualAssistantMessage(" Congratulations slave!");
    setVar("GNMGold", getVar("GNMGold", 0) + 2500);
    return;
}