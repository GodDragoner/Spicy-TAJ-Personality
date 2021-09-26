
switch(getVar(VARIABLE.PUNISHMENT_PUNISHER)) {

	case 1 :
	// @Goto(Hello)
	break;
	case 2 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend1Name% ..",1);
	setSender(2);
	break;
	case 3 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend2Name% ..",1);
	setSender(3);
	break;
	case 4 :
	sendDungeonMessage(" Contacting %DomHonorific% %domFriend3Name% ..",1);
	setSender(4);

	break;
}




main();
function main()
{
    setVar("CBTLoops", 0);
    switch(random("a1", "a2", "a3"))
    {
        case "a1":
        a1();
        return;
        break;
        case "a2":
        a2();
        return;
        break;
        case "a3":
        a3();
        return;
        break;
    }
    a1();
}
function a1()
{
    sendMessage("Grab my %Balls% and squeeze them ");
    wait(10);
    sendMessage("Squeeze them " + random("as hard as you can ", "so hard that your eyes start to tear ") + "until I tell you to release your grip " + random("%SlaveName% ", "%Slut% ") );
    if(getVar("Personality1", false))
    {
        wait(5);
    }
    if(getVar("Personality2", false))
    {
        wait(10);
    }
    if(getVar("Personality3", false))
    {
        wait(20);
    }
    sendMessage("%stopstroking%", 0);
    let answer0 = getInput("Are they " + random("blue ", "sore ", "purple ", "hurting ") + "yet?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo% ");
    }
    if (answer0.isLike("yes"))
    {
        sendMessage("%Moan% ");
    }
    else if (answer0.isLike("no"))
    {
        sendMessage("I am sure I can do something about that %SlaveName% ");
        switch(random("a2", "a3"))
        {
            case "a2":
            a2();
            return;
            break;
            case "a3":
            a3();
            return;
            break;
        }
    }
    End();
    return;
    a2();
}
function a2()
{
    sendMessage("Be ready to bust my %Balls% %SlaveName% ");
    setVar("TempHits", getVar("SubPain", 0) + 0);
    Loop2();
}
function Loop2()
{
    sendMessage("Hit them hard " +getVar("TempHits")+ " Times");
    let answer0 = getInput(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% ", 45);
    if (answer0.isTimeout())
    {
        Time();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? ");
    }
    if (answer0.isLike("done"))
    {
        sendMessage("%Grin% ");
        Continue2();
        return;
    }
    Time();
}
function Time()
{
    sendMessage(random("This is taking too long ", "You are taking way too much time ", "How is this taking so long? ") + " %MeritChangeNLow%");
    sendMessage(random("I guess we have to try this again ", "Let\'s try this again shall we? ") );
    Loop2();
    return;
    Continue2();
}
function Continue2()
{
    let answer0 = getInput("Hit my %Balls% another " +getVar("TempHits")+ " Times"););
    if (answer0.isTimeout())
    {
        Time();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? ");
    }
    if (answer0.isLike("done"))
    {
        sendMessage("%Good% ");
    }
    End();
    return;
    a3();
}
function a3()
{
    sendMessage("I want you to flick my balls %SlaveName% ");
    setVar("TempHits", getVar("SubPain", 0) * 2);
    Loop3();
}
function Loop3()
{
    sendMessage("Flick each side " +getVar("TempHits")+ " Times"););
    let answer0 = getInput(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% ", 60);
    if (answer0.isTimeout())
    {
        Time2();
        return;
    }
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Are you trying to write \'done\'? ");
    }
    if (answer0.isLike("done"))
    {
        sendMessage("%Grin% ");
        Continue3();
        return;
    }
    Time2();
}
function Time2()
{
    sendMessage(random("This is taking too long ", "You are taking way too much time ", "How is this taking so long? ") + " %MeritChangeNLow%");
    sendMessage(random("I guess we have to try this again ", "Let\'s try this again shall we? ") );
    Loop3();
    return;
    Continue3();
}
function Continue3()
{
    let answer0 = getInput("Does it " + random("hurt ", "burn ", "ache ") + "yet?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo% ");
    }
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else if (answer0.isLike("no"))
    {
        sendMessage("I am sure I can do something about that %SlaveName% ");
        switch(random("a1", "a3"))
        {
            case "a1":
            a1();
            return;
            break;
            case "a3":
            a3();
            return;
            break;
        }
    }
    return;
    End();
}
function End()
{
    setVar("CBTLoops", getVar("CBTLoops", 0) + 1);
    setVar("TempHits", getVar("SubPain", 0) * 2);
    --Command:CustomMode(done,Goto,End1)
    switch(random("a", "b", "c", "d", "e", "f", "g", "h", "i", "j"))
    {
        case "a":
        a();
        return;
        break;
        case "b":
        b();
        return;
        break;
        case "c":
        c();
        return;
        break;
        case "d":
        d();
        return;
        break;
        case "e":
        e();
        return;
        break;
        case "f":
        f();
        return;
        break;
        case "g":
        g();
        return;
        break;
        case "h":
        h();
        return;
        break;
        case "i":
        i();
        return;
        break;
        case "j":
        j();
        return;
        break;
    }
    a();
}
function a()
{
    sendMessage("Let\'s give thoes %Balls% another");
    --Command:ShowVar(TempHits)
    wait(400);
    b();
}
function b()
{
    sendMessage("I want %MyYour% %Balls% to really hurt. Give them another hard slap ");
    wait(200);
    c();
}
function c()
{
    sendMessage("Punch %MyYour% %Balls%");
    --Command:ShowVar(TempHits)
    wait(200);
    d();
}
function d()
{
    sendMessage("Now smack those %Balls%");
    --Command:ShowVar(SubPain)
    wait(200);
    e();
}
function e()
{
    sendMessage("Now flick each testicle");
    --Command:ShowVar(TempHits)
    wait(200);
    f();
}
function f()
{
    sendMessage("Now");
    --Command:ShowVar(TempHits)
    wait(200);
    g();
}
function g()
{
    setVar("TempHits", getVar("SubPain", 0) * 2);
    sendMessage("Give me");
    --Command:ShowVar(TempHits)
    wait(400);
    h();
}
function h()
{
    --Command:ShowVar(TempHits)
    sendMessage("more smacks ");
    wait(400);
    i();
}
function i()
{
    sendMessage("I want");
    --Command:ShowVar(TempHits)
    wait(400);
    j();
}
function j()
{
    sendMessage("I want you to add");
    --Command:ShowVar(TempHits)
    wait(200);
    End1();
}
function End1()
{
    --Command:CustomMode(ModeText,Normal)
    --UNINTERPRETED LINE:@NullResponse @Variable[CBTLoops]>[4] @Goto(FinalEnd)
    if (randomInteger(1, 100) <= 65)
    {
        End();
        return;
    }
    FinalEnd();
}
function FinalEnd()
{	setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 41);

    run( "Dungeon" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}