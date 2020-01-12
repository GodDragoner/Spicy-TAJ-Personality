main();
function main()
{
    --UNINTERPRETED LINE:@Flag(Room2FloorWash) @Variable[#DateDifference(Room2Wash, Days)]>=[30] @NullResponse @Goto(Room2Wash)
    --UNINTERPRETED LINE:@Variable[#DateDifference(Room2Wipe, Days)]>=[14] @NullResponse @Goto(Room2Wipe)
    --UNINTERPRETED LINE:@Variable[#DateDifference(Room2Vacuum, Days)]>=[7] @NullResponse @Goto(Room2Vacuum)
    Room2Wash();
}
function Room2Wash()
{
    setTempVar("Room2WashFloorTemp", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP Room 2! @ShowImage[\GNMImages\Home\*.jpg]
    SMessage("%VANC% %VANP% " + random("It\'s time to mop the floors!", "Time for you to mop the floors", "Lets have you do some floor mopping!", "Time to mop mop mop %GNMGrin%", "Work work work all day - mop all night %GNMLol%"));
    SMessage("%VANC% %VANP% But " + random("first", "before that", "before we get to that", "just before"));
    SMessage("%VANC% %VANP% " + random("They need to be vacuumed", "You have to vacuum them first", "You gotta go ahead and vacuum them.."));
    SMessage("%VANC% %VANP% " + random("Fetch ", "Find and get ", "Retrieve ") + "your vacuum cleaner, and whatever you need to mop the floors.");
    wait(10);
    Loop();
    return;
    Room2Wipe();
}
function Room2Wipe()
{
    setTempVar("Room2WipeTemp", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP Room 2! @ShowImage[\GNMImages\Home\*.jpg]
    SMessage("%VANC% %VANP% " + random("It\'s time to wipe the surfaces!", "Time for you to wipe the surfaces", "Lets have you do some wiping!", "Time to wipe wipe wipe %GNMGrin%", "Work work work all day - wipe all night %GNMLol%"));
    SMessage("%VANC% %VANP% But " + random("first", "before that", "before we get to that", "just before"));
    SMessage("%VANC% %VANP% " + random("You need to be vacuum the floor and other surfaces", "You have to vacuum the floor and surfaces first", "You gotta go ahead and vacuum the floor then the surfaces.."));
    SMessage("%VANC% %VANP% " + random("Fetch ", "Find and get ", "Retrieve ") + "your vacuum cleaner, and whatever you need to wipe and properly clean the surfaces.");
    wait(10);
    Loop();
    return;
    Room2Vacuum();
}
function Room2Vacuum()
{
    setTempVar("Room2VacuumFloorTemp", true);
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP Room 2! @ShowImage[\GNMImages\Home\*.jpg]
    SMessage("%VANC% %VANP% " + random("It\'s time to vacuum!", "Time for you to vacuum the floor", "Lets have you do some vacuuming!", "Time to clean clean clean %GNMGrin%", "Work work work all day - clean all night %GNMLol%"));
    SMessage("%VANC% %VANP% " + random("You need to be vacuum the floor", "You have to vacuum the floor", "You gotta go ahead and vacuum the floor"));
    SMessage("%VANC% %VANP% " + random("Fetch ", "Find and get ", "Retrieve ") + "your vacuum cleaner");
    wait(10);
    Loop();
    return;
    Loop();
}
function Loop()
{
    let answer0 = getInput("%VANC% %VANP% %GNMReady%");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% %GNMYesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%VANC% %VANP% %GNMGood%");
    }
    else if (answer0.isLike("no"))
    {
        SMessage("%VANC% %VANP% Hurry..");
        wait(10);
        Loop();
        return;
    }
    run("CR" + java.io.File.separator + "BackgroundMode" + java.io.File.separator + "Chores" + java.io.File.separator + "KinkyCleaning.js");
    SMessage("%VANC% %VANP% Okay then");
    SMessage("%VANC% %VANP% You can go ahead and start with the cleaning..");
    SMessage("%VANC% %VANP% Report when you\'re done cleaning");
    --Command:CustomMode(%Done%,Goto,Done)
    StartTimer();
}
function StartTimer()
{
    setVar("CleaningTimeTemp", 0);
    --Command:CountVar(CleaningTimeTemp)
    if(getVar("BellGame1", false))
    {
        BellGame1();
        return;
    }
    if(getVar("BellGame2", false))
    {
        BellGame2();
        return;
    }
    Timer();
    return;
    BellGame1();
}
function BellGame1()
{
    wait(randomInt(20, 120));
    Corner();
    return;
    Corner();
}
function Corner()
{
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP Go to the corner #SlaveName @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop] @Wait(#Random(20,60))
    --UNINTERPRETED LINE:@SystemMessage #VANC #VANP Return to work #SlaveName @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp] @Goto(BellGame1)
    BellGame2();
}
function BellGame2()
{
    wait(randomInt(20, 120));
    Sentence();
    return;
    Sentence();
}
function Sentence()
{
    --UNINTERPRETED LINE:@NullResponse @PlayAudio[\Spicy\SpecialSounds\Bell.mp3] @CountVar[CleaningTimeTemp, Stop]
    Type();
}
function Type()
{
    let answer0 = getInput("%VANC% %VANP% " + random("I have to clean properly", "I\'m a cleaning slut", "I have to clean with a smile", "Cleaning makes me happy", "You can never clean enough", "I wish I could clean all day", "I really love cleaning"));
    if (answer0.isLike("properly"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("slut"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("smile"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("happy"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("enough"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("day"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else if (answer0.isLike("cleaning"))
    {
        SMessage("%VANC% %VANP% Get back to cleaning");
    }
    else
    {
        SMessage("%VANC% %VANP% Wrong.. Try again..");
        Type();
        return;
    }
    SMessage("%VANC% %VANP% Return to work");
    --Command:CountVar(CleaningTimeTemp)
    BellGame2();
    return;
    Timer();
}
function Timer()
{
    wait(99999);
    Done();
}
function Done()
{
    --Command:CustomMode(%Done%,Normal)
    --Command:CountVar(CleaningTimeTemp,Stop)
    SMessage("%VANC% %VANP% So you\'re done..");
    if(getVar("Room2AverageSet", false))
    {
        Room2AverageSet();
        return;
    }
    if(getVar("Room25AverageSet", false))
    {
        Room25AverageSet();
        return;
    }
    if(getVar("Room24AverageSet", false))
    {
        Room24AverageSet();
        return;
    }
    if(getVar("Room23AverageSet", false))
    {
        Room23AverageSet();
        return;
    }
    if(getVar("Room22AverageSet", false))
    {
        Room22AverageSet();
        return;
    }
    Room21AverageSet();
    return;
    Room21AverageSet();
}
function Room21AverageSet()
{
    setVar("Room21Average", 0);
    setVar("Room22AverageSet", true);
    setVar("Room21Average", getVar("Room21Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
    Room22AverageSet();
}
function Room22AverageSet()
{
    setVar("Room22Average", 0);
    setVar("Room23AverageSet", true);
    setVar("Room22Average", getVar("Room22Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
    Room23AverageSet();
}
function Room23AverageSet()
{
    setVar("Room23Average", 0);
    setVar("Room24AverageSet", true);
    setVar("Room23Average", getVar("Room23Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
    Room24AverageSet();
}
function Room24AverageSet()
{
    setVar("Room24Average", 0);
    setVar("Room25AverageSet", true);
    setVar("Room24Average", getVar("Room24Average", 0) + getVar("CleaningTimeTemp", 0));
    Satisfied();
    return;
    Room25AverageSet();
}
function Room25AverageSet()
{
    setVar("Room25Average", 0);
    setVar("Room2AverageSet", true);
    setVar("Room25Average", getVar("Room25Average", 0) + getVar("CleaningTimeTemp", 0));
    setVar("Room2Average", 0);
    setVar("Room2Average", getVar("Room2Average", 0) + getVar("Room21Average", 0));
    setVar("Room2Average", getVar("Room2Average", 0) + getVar("Room22Average", 0));
    setVar("Room2Average", getVar("Room2Average", 0) + getVar("Room23Average", 0));
    setVar("Room2Average", getVar("Room2Average", 0) + getVar("Room24Average", 0));
    setVar("Room2Average", getVar("Room2Average", 0) + getVar("Room25Average", 0));
    setVar("Room2Average", getVar("Room2Average", 0) / 5);
    setVar("Room2Slow", 0);
    setVar("Room2Slow", getVar("Room2Slow", 0) + getVar("Room2Average", 0));
    setVar("Room2Slow", getVar("Room2Slow", 0) * 2);
    setVar("Room2Fast", 0);
    setVar("Room2Fast", getVar("Room2Fast", 0) + getVar("Room2Average", 0));
    setVar("Room2Fast", getVar("Room2Fast", 0) / 2);
    setVar("Room2ScopeLow", 0);
    setVar("Room2ScopeLow", getVar("Room2ScopeLow", 0) + getVar("Room2Average", 0));
    setVar("Room2ScopeLow", getVar("Room2ScopeLow", 0) / 4);
    setVar("Room2ScopeLow", getVar("Room2ScopeLow", 0) * 3);
    setVar("Room2ScopeHigh", 0);
    setVar("Room2ScopeHigh", getVar("Room2ScopeHigh", 0) + getVar("Room2Average", 0));
    setVar("Room2ScopeHigh", getVar("Room2ScopeHigh", 0) / 4);
    setVar("Room2ScopeHigh", getVar("Room2ScopeHigh", 0) * 5);
    setVar("Room2WipeTime", 0);
    setVar("Room2WipeTime", getVar("Room2WipeTime", 0) + getVar("Room2Average", 0));
    setVar("Room2WipeTime", getVar("Room2WipeTime", 0) / 4);
    setVar("Room2WipeTime", getVar("Room2WipeTime", 0) * 5);
    setVar("Room2WipeSlow", 0);
    setVar("Room2WipeSlow", getVar("Room2WipeSlow", 0) + getVar("Room2WipeTime", 0));
    setVar("Room2WipeSlow", getVar("Room2WipeSlow", 0) * 2);
    setVar("Room2WipeFast", 0);
    setVar("Room2WipeFast", getVar("Room2WipeFast", 0) + getVar("Room2WipeTime", 0));
    setVar("Room2WipeFast", getVar("Room2WipeFast", 0) / 2);
    setVar("Room2WipeScopeLow", 0);
    setVar("Room2WipeScopeLow", getVar("Room2WipeScopeLow", 0) + getVar("Room2WipeTime", 0));
    setVar("Room2WipeScopeLow", getVar("Room2WipeScopeLow", 0) / 4);
    setVar("Room2WipeScopeLow", getVar("Room2WipeScopeLow", 0) * 3);
    setVar("Room2WipeScopeHigh", 0);
    setVar("Room2WipeScopeHigh", getVar("Room2WipeScopeHigh", 0) + getVar("Room2WipeTime", 0));
    setVar("Room2WipeScopeHigh", getVar("Room2WipeScopeHigh", 0) / 4);
    setVar("Room2WipeScopeHigh", getVar("Room2WipeScopeHigh", 0) * 5);
    setVar("Room2WashTime", 0);
    setVar("Room2WashTime", getVar("Room2WashTime", 0) + getVar("Room2Average", 0));
    setVar("Room2WashTime", getVar("Room2WashTime", 0) / 4);
    setVar("Room2WipeTime", getVar("Room2WipeTime", 0) * 5);
    setVar("Room2WashSlow", 0);
    setVar("Room2WashSlow", getVar("Room2WashSlow", 0) + getVar("Room2WashTime", 0));
    setVar("Room2WashSlow", getVar("Room2WashSlow", 0) * 2);
    setVar("Room2WashFast", 0);
    setVar("Room2WashFast", getVar("Room2WashFast", 0) + getVar("Room2WashTime", 0));
    setVar("Room2WashFast", getVar("Room2WashFast", 0) / 2);
    setVar("Room2WashScopeLow", 0);
    setVar("Room2WashScopeLow", getVar("Room2WashScopeLow", 0) + getVar("Room2WashTime", 0));
    setVar("Room2WashScopeLow", getVar("Room2WashScopeLow", 0) / 4);
    setVar("Room2WashScopeLow", getVar("Room2WashScopeLow", 0) * 3);
    setVar("Room2WashScopeHigh", 0);
    setVar("Room2WashScopeHigh", getVar("Room2WashScopeHigh", 0) + getVar("Room2WashTime", 0));
    setVar("Room2WashScopeHigh", getVar("Room2WashScopeHigh", 0) / 4);
    setVar("Room2WashScopeHigh", getVar("Room2WashScopeHigh", 0) * 5);
    Room2AverageSet();
}
function Room2AverageSet()
{
    if(getVar("Room2VacuumFloorTemp", false))
    {
        Vacuum();
        return;
    }
    if(getVar("Room2WipeTemp", false))
    {
        Wipe();
        return;
    }
    if(getVar("Room2WashFloorTemp", false))
    {
        Wash();
        return;
    }
    Vacuum();
    return;
    Vacuum();
}
function Vacuum()
{
    --UNINTERPRETED LINE:@NullResponse @If[CleaningTimeTemp]>=[Room2ScopeLow]AND[CleaningTimeTemp]<=[Room2ScopeHigh]Then(EndPerfect)
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2Fast", 0))
    {
        EndFast();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2Slow", 0))
    {
        EndSlow();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2ScopeLow", 0))
    {
        EndSlower();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2ScopeHigh", 0))
    {
        EndFaster();
        return;
    }
    Wipe();
}
function Wipe()
{
    --UNINTERPRETED LINE:@NullResponse @If[CleaningTimeTemp]>=[Room2WipeScopeLow]AND[CleaningTimeTemp]<=[Room2WipeScopeHigh]Then(EndPerfect)
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2WipeFast", 0))
    {
        EndFast();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2WipeSlow", 0))
    {
        EndSlow();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2WipeScopeLow", 0))
    {
        EndSlower();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2WipeScopeHigh", 0))
    {
        EndFaster();
        return;
    }
    Wash();
}
function Wash()
{
    --UNINTERPRETED LINE:@NullResponse @If[CleaningTimeTemp]>=[Room2WashScopeLow]AND[CleaningTimeTemp]<=[Room2WashScopeHigh]Then(EndPerfect)
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2WashFast", 0))
    {
        EndFast();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2WashSlow", 0))
    {
        EndSlow();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) <= getVar("Room2WashScopeLow", 0))
    {
        EndSlower();
        return;
    }
    if (getVar("CleaningTimeTemp", 0) >= getVar("Room2WashScopeHigh", 0))
    {
        EndFaster();
        return;
    }
    Satisfied();
}
function Satisfied()
{
    SMessage("%VANC% %VANP% Good job today %SlaveName%");
    FlagTest();
    return;
    EndFast();
}
function EndFast()
{
    SMessage("%VANC% %VANP% " + random("Too fast!", "That was waay too fast %SlaveName% !!", "Impossible", "You can\'t possible be this fast!"));
    SMessage("%VANC% %VANP% " + random("That can\'t go unpunished", "I have to punish you for this", "I\'m gonna have to punish you.."));
    SMessage("%VANC% %VANP% I have assigned you punishment points");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 200);
    FlagTest();
    return;
    EndSlow();
}
function EndSlow()
{
    SMessage("%VANC% %VANP% " + random("You\'re late!", "You\'re late %SlaveName%", "You\'re late slut..", "Late are we?", "You know you\'re late right?"));
    SMessage("%VANC% %VANP% " + random("I don\'t tolerate late!", "You know I don\'t tolerate it when you\'re late", "There is zero tolerance for being late and lazy!"));
    SMessage("%VANC% %VANP% I have assigned you punishment points");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 200);
    FlagTest();
    return;
    EndSlower();
}
function EndSlower()
{
    SMessage("%VANC% %VANP% You\'ve been slower than usual..");
    if(getVar("CleaningWarning", false))
    {
        CleaningWarning();
        return;
    }
    let answer0 = getInput("%VANC% %VANP% Anything I should know?");
    if (answer0.isLike("lazy", "laziness"))
    {
        SMessage("%VANC% %VANP% " + random("Inexcusable!", "You know that laziness can\'t be tolerated!"));
    }
    else if (answer0.isLike("tired", "rest", "sleep"))
    {
        SMessage("%VANC% %VANP% " + random("Inexcusable", "I don\'t care if you\'re tired!"));
    }
    else if (answer0.isLike("toys", "me", "me"))
    {
        SMessage("%VANC% %VANP% " + random("Excuses! really!?", "Wauv you\'re gonna blame me.."));
    }
    else if (answer0.isLike("thorough", "cleaning"))
    {
        SMessage("%VANC% %VANP% I see but you should always be thorough!");
    }
    else if (answer0.isLike("dirty", "dirtier", "dusty"))
    {
        SMessage("%VANC% %VANP% Your %Home% should always be tidy!");
    }
    else
    {
        SMessage("%VANC% %VANP% I\'m giving you a warning %SlaveName%");
        setVar("CleaningWarning", true);
        FlagTest();
        return;
    }
    SMessage("%VANC% %VANP% " + random("I\'m gonna have to punish you slave", "I\'m sorry but this can\'t go unpunished"));
    SMessage("%VANC% %VANP% I have assigned you punishment points");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
    CleaningWarning();
}
function CleaningWarning()
{
    SMessage("%VANC% %VANP% I gave you a warning last time!");
    delVar("CleaningWarning");
    SMessage("%VANC% %VANP% So this time I\'m punishing you!");
    SMessage("%VANC% %VANP% I have assigned you punishment points");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
    EndFaster();
}
function EndFaster()
{
    SMessage("%VANC% %VANP% You\'ve been faster than usual..");
    if(getVar("CleaningWarning", false))
    {
        CleaningWarning();
        return;
    }
    SMessage("%VANC% %VANP% Anything I should know?");
    SMessage("%VANC% %VANP% You can\'t haste thoroughness!");
    SMessage("%VANC% %VANP% I expect that you\'re always thorough when cleaning");
    SMessage("%VANC% %VANP% " + random("I\'m gonna have to punish you slave", "I\'m sorry but this can\'t go unpunished"));
    SMessage("%VANC% %VANP% I have assigned you punishment points");
    setVar("GNMPPoints", getVar("GNMPPoints", 0) + 100);
    FlagTest();
    return;
    EndPerfect();
}
function EndPerfect()
{
    SMessage("%VANC% %VANP% %GNMGood% %SlaveName% %MeritChangePMedium%");
    SMessage("%VANC% %VANP% Allow me to reward your " + random("splendid ", "good ", "excellent ", "lovely ") + random("behaviour ", "work ") + "%GNMGrin%");
    setVar("GNMGold", getVar("GNMGold", 0) + getVar("#GoldMedium", 0));
    FlagTest();
    return;
    FlagTest();
}
function FlagTest()
{
    if(getVar("Room2WashFloorTemp", false))
    {
        Room2WashFloorTemp();
        return;
    }
    if(getVar("Room2VacuumFloorTemp", false))
    {
        Room2VacuumFloorTemp();
        return;
    }
    if(getVar("Room2WipeTemp", false))
    {
        Room2WipeTemp();
        return;
    }
    Room2VacuumFloorTemp();
    return;
    Room2VacuumFloorTemp();
}
function Room2VacuumFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    setDate("Room2Vacuum");
    return;
    Room2WashFloorTemp();
}
function Room2WashFloorTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    setDate("Room2Vacuum");
    setDate("Room2Wash");
    return;
    Room2WipeTemp();
}
function Room2WipeTemp()
{
    setVar("ChoreComplete", getVar("ChoreComplete", 0) + 1);
    setDate("Room2Vacuum");
    setDate("Room2Wipe");
    return;
}