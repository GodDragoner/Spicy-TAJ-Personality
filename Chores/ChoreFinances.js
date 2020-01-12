main();
function main()
{
    if(getVar("FirstFinance", false))
    {
        FirstFinance();
        return;
    }
    setVar("FirstFinance", true);
sendVirtualAssistantMessage(" Well %SlaveName%");
sendVirtualAssistantMessage(" This is the first time we\'re doing your finances");
sendVirtualAssistantMessage(" Since its the first time I need to open Microsoft Excel spreadsheet");
sendVirtualAssistantMessage(" If you don\'t have that you can always use Google sheets which is free..");
sendVirtualAssistantMessage(" Follow these instructions carefully if this is your first time setting up a spreadsheet");
sendVirtualAssistantMessage(" If you\'ve tried it before then there might be some things you\'re already familiar with");
sendVirtualAssistantMessage(" Look at this picture");
        showPicture("Images/Spicy/Finance/Budget.*");
    sendVirtualAssistantMessage(" This is how I want your budget to look like");
        showPicture("Images/Spicy/Finance/Budget.*");
    sendVirtualAssistantMessage(" So the top row is Year: Months: Space: Total:");
        showPicture("Images/Spicy/Finance/Budget.*");
    sendVirtualAssistantMessage(" The first Column is Year: Average Income: Fixed Expenses: Etc.");
        showPicture("Images/Spicy/Finance/Budget.*");
    sendVirtualAssistantMessage(" Giving you a few minutes..");
        showPicture("Images/Spicy/Finance/Budget.*"); 
    wait(120);
    sendVirtualAssistantMessage(" Are you done? - only answer yes if you\'re done..");
        showPicture("Images/Spicy/Finance/Budget.*");
    if (answer-1.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" Now pay attention..");
    sendVirtualAssistantMessage(" In the field B18 I want you to write this:");
        showPicture("Images/Spicy/Finance/5.*");
    sendVirtualAssistantMessage(" Copy this for C18, D18, E18 all the way to O18.");
        showPicture("Images/Spicy/Finance/5.*"); 
		@Wait(30)
    let answer0 = getInput("%VANC% %VANP% Are you done? - only answer yes if you\'re done..");
    while (!(answer0.isLike("yes")))
    {
        answer0 = getInput("%VANC% %VANP% \"yes\" if you\'re ready..");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" In the field O2 I want you to write this:");
        showPicture("Images/Spicy/Finance/1.*");
    sendVirtualAssistantMessage(" Copy this for O3, O4, O5 all the way to O17.");
        showPicture("Images/Spicy/Finance/1.*"); @Wait(30)
    let answer1 = getInput("%VANC% %VANP% Are you done? - only answer yes if you\'re done..");
    while (!(answer1.isLike("yes")))
    {
        answer1 = getInput("%VANC% %VANP% \"yes\" if you\'re ready..");
    }
    if (answer1.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" In the field B7 I want you to write this:");
        showPicture("Images/Spicy/Finance/2.*");
    sendVirtualAssistantMessage(" Copy this for C7, D7 all the way to O7");
        showPicture("Images/Spicy/Finance/2.*"); 
    wait(30);
    let answer2 = getInput("%VANC% %VANP% Are you done? - only answer yes if you\'re done..");
    while (!(answer2.isLike("yes")))
    {
        answer2 = getInput("%VANC% %VANP% \"yes\" if you\'re ready..");
    }
    if (answer2.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" In the field B11 I want you to write this:");
        showPicture("Images/Spicy/Finance/3.*");
    sendVirtualAssistantMessage(" Copy this for C11, D11 all the way to O11");
        showPicture("Images/Spicy/Finance/3.*"); 
    wait(30);
    let answer3 = getInput("%VANC% %VANP% Are you done? - only answer yes if you\'re done..");
    while (!(answer3.isLike("yes")))
    {
        answer3 = getInput("%VANC% %VANP% \"yes\" if you\'re ready..");
    }
    if (answer3.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" In the field B15 I want you to write this:");
        showPicture("Images/Spicy/Finance/4.*");
    sendVirtualAssistantMessage(" Copy this for C15, D15 all the way to O15");
        showPicture("Images/Spicy/Finance/4.*"); 
    wait(30);
    let answer4 = getInput("%VANC% %VANP% Are you done? - only answer yes if you\'re done..");
    while (!(answer4.isLike("yes")))
    {
        answer4 = getInput("%VANC% %VANP% \"yes\" if you\'re ready..");
    }
    if (answer4.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Good");
    }
    sendVirtualAssistantMessage(" Notice the field in the bottom left!");
        showPicture("Images/Spicy/Finance/Budget.*");
    sendVirtualAssistantMessage(" Every time you update your budget I want you to update the date as well..");
    sendVirtualAssistantMessage(" You can do that right now..");
    wait(15);
    sendVirtualAssistantMessage(" Now let me explain how this works..");
    sendVirtualAssistantMessage(" So average income:");
    sendVirtualAssistantMessage(" Average income is ALL the money you earn each month, wether it comes from your job / jobs");
    setVar("FinanceOffence", 0);
    sendVirtualAssistantMessage(" The source doesn\'t matter. Made some money you enter it into this field..");
    sendVirtualAssistantMessage(" Fixed expenses are ALL your fixed expenses: Phone bill, electric bill, rent any fixed expenses");
    sendVirtualAssistantMessage(" I know some values might be over several months like the electric bill is in some countries paid every third month");
    sendVirtualAssistantMessage(" If this is the case then divide it by the months over which it\'s paid");
    sendVirtualAssistantMessage(" So if your electric bill is paid over 3 months, divide it by 3 and place it in the correct months..");
    sendVirtualAssistantMessage(" Food Budget!");
    sendVirtualAssistantMessage(" Now this is an interesting one");
    sendVirtualAssistantMessage(" I want you to think about how much you averagely spent on food each month..");
    sendVirtualAssistantMessage(" This includes food, drink, sweets. Every coin you spend on something going in your mouth");
    sendVirtualAssistantMessage(" But we\'re not quite done with your food budget");
    sendVirtualAssistantMessage(" One thing is what you\'re currently spending on food each month");
    sendVirtualAssistantMessage(" Another thing is what you SHOULD be spending");
    sendVirtualAssistantMessage(" So I want you to think about how much you NEED to spend..");
    sendVirtualAssistantMessage(" Next up is household budget");
    sendVirtualAssistantMessage(" This going towards items used for cleaning, repairs and generally maintaining your %Home%");
    sendVirtualAssistantMessage(" Allowance we\'ll talk about later on.");
    sendVirtualAssistantMessage(" And finally we have extra expenses.");
    sendVirtualAssistantMessage(" Unforseen expenses that fits into neither mentioned categories");
    sendVirtualAssistantMessage(" Now..");
    sendVirtualAssistantMessage(" Right now I need you to figure out your:");
    sendVirtualAssistantMessage(" Average income, fixed expenses, food budget and household Budget");
    sendVirtualAssistantMessage(" Write \'done\' when you\'re done..");
    --Command:CustomMode(done,Goto,Done)
    wait(99999);
    Done();
}
function Done()
{
    sendVirtualAssistantMessage(" Excellent");
    --Command:CustomMode(Modetext,Normal)
    sendVirtualAssistantMessage(" I\'m gonna ask you for a few numbers");
    sendVirtualAssistantMessage(" They might take a moment to find");
    sendVirtualAssistantMessage(" Take your time");
    sendVirtualAssistantMessage(" DO NOT INPUT ANY TEXT OR SPACES");
    sendVirtualAssistantMessage(" What is your average income?");
    setVar("AverageIncome", createInput().getAnswer());
    sendVirtualAssistantMessage(" What is your fixed expenses?");
    setVar("FixedExpenses", createInput().getAnswer());
    sendVirtualAssistantMessage(" What should your food budget be?");
    setVar("FoodBudget", createInput().getAnswer());
    sendVirtualAssistantMessage(" How much do you need for your household budget?");
    setVar("HouseholdBudget", createInput().getAnswer());
    sendVirtualAssistantMessage(" Next we need to figure out a reasonable allowance");
    sendVirtualAssistantMessage(" Money you can spend however you like");
    wait(5);
    sendVirtualAssistantMessage(" Just imagine being a slave");
    sendVirtualAssistantMessage(" No such thing as allowance or spending money without asking permission");
    sendVirtualAssistantMessage(" Total");
    sendVirtualAssistantMessage(" Financial control");
    sendVirtualAssistantMessage(" Some might call that freedom");
    sendVirtualAssistantMessage(" But you probably know better %GNMLol%");
    sendVirtualAssistantMessage(" Oh well..");
    sendVirtualAssistantMessage(" Your allowance");
    sendVirtualAssistantMessage(" I\'m gonna leave this up to you");
    sendVirtualAssistantMessage(" Well not 100% though");
    sendVirtualAssistantMessage(" Now tell me again with a number..");
    setVar("AllowanceTotal", 0);
    sendVirtualAssistantMessage(" What would you say a reasonable monthly allowance is if your behaviour within the last month has been good?");
    setVar("AllowanceGood", createInput().getAnswer());
    sendVirtualAssistantMessage(" What would you say a reasonable monthly allowance is if your behaviour within the last month has been bad?");
    setVar("AllowanceBad", createInput().getAnswer());
    sendVirtualAssistantMessage(" ow imagine that your behaviour neither was good or bad but more neutral, what would the number be then?");
    setVar("AllowanceNeutral", createInput().getAnswer());
    setVar("AllowanceTotal", getVar("AllowanceNeutral", 0));
    sendVirtualAssistantMessage(" Give me just a moment to write all of this down...");
    setVar("AllowanceGood", getVar("AllowanceGood", 0) / 31);
    setVar("AllowanceBad", getVar("AllowanceBad", 0) / 30);
    setVar("AllowanceNeutral", getVar("AllowanceNeutral", 0) / 30);
    sendVirtualAssistantMessage(" Hmm");
    sendVirtualAssistantMessage(" Now based on the values you just gave me");
    sendVirtualAssistantMessage(" It will be me telling you your monthly allowance");
    --Command:Month(1)
    sendVirtualAssistantMessage(" This January your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 1);
    --Command:Month(2)
    sendVirtualAssistantMessage(" This February your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 2);
    --Command:Month(3)
    sendVirtualAssistantMessage(" This March your allowance is");
    
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 3);
    --Command:Month(4)
    sendVirtualAssistantMessage(" This April your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 4);
    --Command:Month(5)
    sendVirtualAssistantMessage(" This May your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 5);
    --Command:Month(6)
    sendVirtualAssistantMessage(" This June your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 6);
    --Command:Month(7)
    sendVirtualAssistantMessage(" This July your allowance is");
    
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 7);
    --Command:Month(8)
    sendVirtualAssistantMessage(" This August your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 8);
    --Command:Month(9)
    sendVirtualAssistantMessage(" This September your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 9);
    --Command:Month(10)
    sendVirtualAssistantMessage(" This October your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 10);
    --Command:Month(11)
    sendVirtualAssistantMessage(" This November your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 11);
    --Command:Month(12)
    sendVirtualAssistantMessage(" This December your allowance is");
    --Command:ShowVar(AllowanceTotal)
    setVar("CurrentMonth", 12);
    sendVirtualAssistantMessage(" Whenever the month changes you can check your monthly allowance simply by asking");
    sendVirtualAssistantMessage(" Now once in a while I\'ll have you make entries into your budget");
    sendVirtualAssistantMessage(" But you should strive towards always keeping it up to date %GNMEmoteHappy%");
    setDate("Finances");
    return;
    FirstFinance();
}
function FirstFinance()
{
    sendVirtualAssistantMessage(" Its time to do your finances %SubName%");
    sendVirtualAssistantMessage(" Open up the spreadsheet and your backaccount");
    sendVirtualAssistantMessage(" Do your checks and then return here");
    sendVirtualAssistantMessage(" Tell me \'done\' when you\'re done.");
    --Command:CustomMode(done,Goto,Done2)
    wait(9999999);
    Done2();
}
function Done2()
{
    sendVirtualAssistantMessage(" %GNMGood%");
    let answer0 = getInput("%VANC% %VANP% " + random("Are there any new red numbers I should know about?", "Were there any new negativt numbers?", "So was there some new red numbers?"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Oh..");
        RedNumbers();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" %GNMGood%, " + random("glad to hear you\'re not overspending", "wonderfull you\'re not wasting my money", "Perfect! You\'re not wasting my money"));
        GreenNumbers();
        return;
    }
    GreenNumbers();
}
function GreenNumbers()
{
    sendVirtualAssistantMessage(" I\'m sure this will please %DomHonorific% %DomName% %MeritChangePMedium%");
    sendVirtualAssistantMessage(" It sure pleases me %GNMEmoteHappy%");
    return;
    RedNumbers();
}
function RedNumbers()
{
    sendVirtualAssistantMessage(" Where did the red number appear?");
    let answer0 = getInput("%VANC% %VANP% Food spendings, household spendings, allowance spendings or extra expenses?");
    while (!(answer0.isLike("food") || answer0.isLike("household") || answer0.isLike("allowance") || answer0.isLike("extra")))
    {
        answer0 = getInput("%VANC% %VANP% food, household, allowance or extra?");
    }
    if (answer0.isLike("food"))
    {
        sendVirtualAssistantMessage("");
        Food();
        return;
    }
    else if (answer0.isLike("household"))
    {
        sendVirtualAssistantMessage("");
        Household();
        return;
    }
    else if (answer0.isLike("allowance"))
    {
        sendVirtualAssistantMessage("");
        Allowance();
        return;
    }
    else if (answer0.isLike("extra"))
    {
        sendVirtualAssistantMessage("");
        Extra();
        return;
    }
    Food();
}
function Food()
{
    sendVirtualAssistantMessage(" I need you to be honest with me..");
    let answer0 = getInput("%VANC% %VANP% Was it absolutely necessary that you spent more than you had to?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" " + random("Hmm", "Well..", "..."));
        Forgive();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" You know how this makes me feel..");
        Bad();
        return;
    }
    Household();
}
function Household()
{
    sendVirtualAssistantMessage(" I need you to be honest with me..");
    let answer0 = getInput("%VANC% %VANP% Was it absolutely necessary that you spent more than you had to?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" " + random("Hmm", "Well..", "..."));
        Forgive();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" You know how this makes me feel..");
        Bad();
        return;
    }
    Allowance();
}
function Allowance()
{
    sendVirtualAssistantMessage(" I need you to be honest with me..");
    let answer0 = getInput("%VANC% %VANP% Was it absolutely necessary that you spent more than you had to?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" " + random("Hmm", "Well..", "..."));
        Forgive();
        return;
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" You know how this makes me feel..");
        Bad();
        return;
    }
    Extra();
}
function Extra()
{
    sendVirtualAssistantMessage(" I need you to be honest with me..");
    let answer0 = getInput("%VANC% %VANP% Was it absolutely necessary that you spent money on those extra expenses?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" " + random("Hmm", "Well..", "..."));
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" You know how this makes me feel..");
        Bad();
        return;
    }
    sendVirtualAssistantMessage(" Okay then..");
    return;
    Forgive();
}
function Forgive()
{
    sendVirtualAssistantMessage(" " + random("I forgive you then", "Well I guess I\'m gonna forgive you", "I suppose I should forgive you.."));
    sendVirtualAssistantMessage(" " + random("don\'t do this too often..", "Try to stay within the budgets.."));
    return;
    Bad();
}
function Bad()
{
    sendVirtualAssistantMessage(" #DomHonorific #DomName won't be happy when I tell her... #MeritChangeNLow @SetFlag(FinanceBad) @ChangeVar[FinanceOffence");=[FinanceOffence");=[1");
    if (getVar("FinanceOffence", 0) >= 15)
    {
        Bad15();
        return;
    }
    if (getVar("FinanceOffence", 0) >= 10)
    {
        Bad10();
        return;
    }
    if (getVar("FinanceOffence", 0) >= 5)
    {
        Bad5();
        return;
    }
    if (getVar("FinanceOffence", 0) >= 2)
    {
        Bad2();
        return;
    }
    if (getVar("FinanceOffence", 0) == 1)
    {
        Bad1();
        return;
    }
    Bad1();
    return;
    Bad1();
}
function Bad1()
{
    sendVirtualAssistantMessage(" But since this is your first offence I\'m letting you off easy..");
    return;
    Bad2();
}
function Bad2()
{
    sendVirtualAssistantMessage(" %SubName%..");
    sendVirtualAssistantMessage(" This has to be punished");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 30);
    sendVirtualAssistantMessage(" I assigned you punishment points");
    return;
    Bad5();
}
function Bad5()
{
    sendVirtualAssistantMessage(" %SlaveName%..");
    sendVirtualAssistantMessage(" I expected more from you.. %MeritChangeNLow%");
    sendVirtualAssistantMessage(" I\'ll have to punish you..");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 60);
    sendVirtualAssistantMessage(" I assigned you punishment points");
    return;
    Bad10();
}
function Bad10()
{
    sendVirtualAssistantMessage(" %SlaveName%..");
    sendVirtualAssistantMessage(" You need to take better care of %DomName%'s money.."); 
	#MeritChangeNMedium
    sendVirtualAssistantMessage(" I\'ll have to punish you..");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    sendVirtualAssistantMessage(" I assigned you punishment points");
    return;
    Bad15();
}
function Bad15()
{
    sendVirtualAssistantMessage(" %SlaveName%..");
    sendVirtualAssistantMessage(" You need to take better care of %DomName%'s money..");
	#MeritChangeNHigh
    sendVirtualAssistantMessage(" I\'ll have to punish you..");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 150);
    sendVirtualAssistantMessage(" I assigned you punishment points");
    return;
}