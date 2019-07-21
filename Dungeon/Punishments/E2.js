

switch(getVar("Punisher")) {

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
    switch(random("a1", "a2", "a3"))
    {
        case "a1":
        a1();
        //return;
        break;
        case "a2":
        a2();
        //return;
        break;
        case "a3":
        a3();
        //return;
        break;
    }
 End1();   
}
function a1()
{
    sendMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a small rubberband ");
    wait(10);
    Loop1();
}
function Loop1()
{
    let answer0 = sendInput("%Ready% ");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = sendInput("%YesOrNo% ");
    }
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else if (answer0.isLike("no"))
    {
        sendMessage("Hurry then! ");
        wait(10);
        Loop1();
        return;
    }
    sendMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficult ") );
    sendMessage(random("I want you to hold the rubberband like","You are to hold the rubberband like this"));
	showImage("Spicy/Toys/Rubberband.*");
    sendMessage(random("Hold it close to the head of your %Cock% ", "It\'s going near the head of your %Cock% ") );
    setVar("TempHits", 0);
    sendMessage(random("With your other hand ", "Using your other hand ") );
    setVar("TempHits", getVar("TempHits", 0) + getVar("subpaintolerance", 0));
    sendMessage(random("Pull back one of the strings as far as you dare without breaking the rubberband ") );
    setVar("TempHits", getVar("TempHits", 0) * 2);
    sendMessage(random("You are to strike the head of your %Cock% ", "I want you to release the rubberband on your cock head ") );
    sendMessage(getVar("TempHits")+" times");
    sendMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% ");
    waitForDone();

}
function a2()
{
    sendMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a wooden spoon or similar ");
    setVar("TempHits", 0);
    Loop2();
}
function Loop2()
{
    let answer0 = sendInput("%Ready%  ");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = sendInput("%YesOrNo% ");
    }
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else if (answer0.isLike("no"))
    {
        sendMessage("Hurry then! ");
        wait(10);
        Loop2();
        return;
    }
    sendMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficult ") );
    setVar("TempHits", getVar("TempHits", 0) + getVar("subpaintolerance", 0));
    sendMessage(random("I want you to use that spoon and smack your %Balls% ", "You are to use the spoon and smack your %Balls% ") );
    setVar("TempHits", getVar("TempHits", 0) * 4);
    sendMessage(random("Hit them hard ", "Hit them as hard as possible ", "Make me proud and hit them hard! ") );
    setVar("TempHits", getVar("TempHits", 0) + 10);
    sendMessage(random("They should look \'blue\' afterwards","It\'s okay if they get a little bruised, they can handle it!")+" %Moan%"); 
    sendMessage(random("To be precise I want you to hit your precious %Balls% ", "You\'re gonna hit your %Balls% ") );
    sendMessage(getVar("TempHits") +" times");
    sendMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% ");
   waitForDone();

}
function a3()
{
    sendMessage("%SlaveName% " + random("fetch ", "retrieve ", "go get ") + "a heavy book ");
    setVar("TempHits", 0);
    Loop3();
}
function Loop3()
{
    let answer0 = sendInput("%Ready% ");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = sendInput("%YesOrNo% ");
    }
    if (answer0.isLike("yes"))
    {
        sendMessage("%Good% ");
    }
    else if (answer0.isLike("no"))
    {
        sendMessage("Hurry then! ");
        wait(10);
        Loop3();
        return;
    }
    sendMessage(random("This is fairly simple ", "This is simple enough ", "You shouldn\'t find this too difficult ") );
    setVar("TempHits", getVar("TempHits", 0) + getVar("subpaintolerance", 0));
    sendMessage(random("I want you to place the book on a table ", "You should place the book on a table ") );
    setVar("TempHits", getVar("TempHits", 0) * 3);
    sendMessage(random("It has to stand up ", "It should be standing up ") );
    setVar("TempHits", getVar("TempHits", 0) + 7);
    sendMessage(random("Then I want you to tilt the book and aim for your %Balls% ", "Then you\'re going to aim for your %Balls% and tilt the book ") + "%Moan%  ");
    sendMessage(random("To be precise I want you to hit your precious %Balls%", "You\'re gonna hit your %Balls%"));
	sendMessage(getVar("TempHits") +" times");
    sendMessage(random("Let me know when you\'re done ", "Inform me when you\'re done ") + "%SlaveName% ");
    waitForDone();
}
function End1()
{
    if(getVar("Personality1", false))
    {
        End();
        return;
    }
    sendMessage("Now you\'ll be using your hand. ");
  
    switch(random("a", "b", "c"))
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
    }
 
}
function a()
{
    sendMessage("Let\'s give those %Balls% another "+getVar("subpaintolerance")+ " smacks.");
   waitForDone();
    End();
}
function b()
{
    sendMessage("I want your %Balls% to really hurt. Give them another hard slap, Punch your %Balls% "+getVar("subpaintolerance")+ " times.");
    waitForDone();
  
    End();
}
function c()
{
    sendMessage("Take your %Balls% into your one hand and snap each of them "+getVar("subpaintolerance")+ " times.");
    waitForDone();
    End();
}
function End()
{
    sendMessage("I hope this was as much fun for you as it was for me %Lol% ");

    wait(5);
    sendMessage("You can put the gear away for now %EmoteHappy% ");
    wait(8);
		setVar("PunishmentComplete", true);
	setVar("punishmentCompleted", 42);

    run( "Dungeon" + java.io.File.separator + "PunishmentBaseEnd.js");
    return;
}