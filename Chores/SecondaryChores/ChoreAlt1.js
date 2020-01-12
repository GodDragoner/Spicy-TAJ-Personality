main();
function main()
{
    if(getVar("ChoreAlt1a", false))
    {
        ChoreAlt1a();
        return;
    }
    if(getVar("ChoreAlt1b", false))
    {
        ChoreAlt1b();
        return;
    }
    if(getVar("ChoreAlt1c", false))
    {
        ChoreAlt1c();
        return;
    }
    if(getVar("ChoreAlt1d", false))
    {
        ChoreAlt1d();
        return;
    }
    if(getVar("ChoreAlt1e", false))
    {
        ChoreAlt1e();
        return;
    }
    if(getVar("ChoreAlt1f", false))
    {
        ChoreAlt1f();
        return;
    }
    Choose();
}
function Choose()
{
    switch(random("a", "b", "c", "d", "e", "f"))
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
    }
    ChoreAlt1a();
}
function ChoreAlt1a()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    aContinued();
    return;
    ChoreAlt1b();
}
function ChoreAlt1b()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    bContinued();
    return;
    ChoreAlt1c();
}
function ChoreAlt1c()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    cContinued();
    return;
    ChoreAlt1d();
}
function ChoreAlt1d()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    dContinued();
    return;
    ChoreAlt1e();
}
function ChoreAlt1e()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    eContinued();
    return;
    ChoreAlt1f();
}
function ChoreAlt1f()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    fContinued();
    return;
    aContinued();
}
function aContinued()
{
    a();
}
function a()
{
    sendVirtualAssistantMessage(" " + random("Time to do something important", "Let\'s have you do something important"));
    setVar("ChoreAlt1a", true);
    sendVirtualAssistantMessage(" " + random("I want you to spend ", "You must spend ") + "20 minutes searching and storing new porn, sexy images etc.");
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(random("Update %DomName%'s sweet arsenal of teasing weapons to use against you","Give %DomName% new weapons to use against you"));
    sendVirtualAssistantMessage(" Starting the timer now, you\'ll hear a bell when I want you back");
    sendVirtualAssistantMessage(" Enjoy!");
    wait(1200);
        sendVirtualAssistantMessage(random("Get back here","Time to get back"));
		playAudio("/Spicy/SpecialSounds/Bell.mp3");
    sendVirtualAssistantMessage(" " + random("Let\'s move on..", "Moving on", "Let\'s continue"));
    delVar("ChoreAlt1a");
	changeMeritLow(true);
    SMessage("Let me reward that %GNMGrin% ");
	addGold(50);
    End();
    return;
    bContinued();
}
function bContinued()
{
    b();
}
function b()
{
    sendVirtualAssistantMessage( random("Right now I want you to go to Milovana.com","Go to Milovana.com"));
    setVar("ChoreAlt1b", true);
    sendVirtualAssistantMessage(" " + random("Find a tease and just read it", "Find a good tease and just read it"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Don\'t follow any instructions, just read through it..");
    wait(300);
	sendVirtualAssistantMessage(" Ready to continue?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        sendVirtualAssistantMessage(" Yes or no slave?");
		answer0.loop ;
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" A few minutes more then..");
        wait(120);
    }
    sendVirtualAssistantMessage(" Hope you found a good one %GNMEmoteHappy%");
    delVar("ChoreAlt1b");
	changeMeritLow(false);
    sendVirtualAssistantMessage(" Let me reward that %GNMGrin% ");
	addGold(50);
    End();
    return;
    cContinued();
}
function cContinued()
{
    c();
}
function c()
{
    sendVirtualAssistantMessage(" " + random("Time to be creative", "Let\'s do something fun!"));
    setVar("ChoreAlt1c", true);
    sendVirtualAssistantMessage(" " + random("I want you to plan ", "You\'re gonna plan ", "You need to plan ") + "a selfbondage scenario! %GNMEmoteHappy%");
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Take the time you need, but spend at least 5 minutes, when you\'re done save it or share it on Milovana forum");
    wait(300);
	
	    sendVirtualAssistantMessage(" Are you ready to continue?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        sendVirtualAssistantMessage(" Yes or no slave?");
		answer0.loop();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" 2 more minutes then!");
        wait(120);
    }
    sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldMedium%");
	        setVar("GNMGold", getVar("GNMGold", 0) + 25);
    delVar("ChoreAlt1c");
	changeMeritLow(false);
    End();
    return;
    dContinued();
}
function dContinued()
{
    d();
}
function d()
{
    sendVirtualAssistantMessage(" " + random("Let\'s test your memory", "Time for a memory test!", "Let\'s see how sharp that brain of yours is.."));
    setVar("ChoreAlt1d", true);
    sendVirtualAssistantMessage(" " + random("I expect you to know the house rules by heart", "%DomHonorific% expects you to know the house rules by heart!"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" " + random("Word by word", "Letter by letter"));
    switch(random("d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"))
    {
        case "d1":
        d1();
        return;
        break;
        case "d2":
        d2();
        return;
        break;
        case "d3":
        d3();
        return;
        break;
        case "d4":
        d4();
        return;
        break;
        case "d5":
        d5();
        return;
        break;
        case "d6":
        d6();
        return;
        break;
        case "d7":
        d7();
        return;
        break;
        case "d8":
        d8();
        return;
        break;
    }
    d1();
}
function d1()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 1?");
      response = createInput(); 
	if(response.contains("I must always remember to ask permission."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}
    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") ); 
		changeMeritLow(true);
        Endd();
        return;
    }
    d2();
}
function d2()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 2?");
      response = createInput(); 
	if(response.contains("I must always be respectful and humble."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  
    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  
		changeMeritLow(true);
        Endd();
        return;
    }
    d3();
}
function d3()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 3?");
         response = createInput(); 
	if(response.contains("i must always say 'thank you' no mater what I am given."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  
    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  
		changeMeritLow(true);
        Endd();
        return;
    }
    d4();
}
function d4()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 4?");
         response = createInput(); 
	if(response.contains("i must always swallow."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  

    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  changeMeritLow(true);
        Endd();
        return;
    }
    d5();
}
function d5()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 5?");
         response = createInput(); 
	if(response.contains("i must always tell the truth."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  

    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  changeMeritLow(true);
        Endd();
        return;
    }
    d6();
}
function d6()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 6?");
         response = createInput(); 
	if(response.contains("i must always confess any transgressions."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  

    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  changeMeritLow(true);
        Endd();
        return;
    }
    d7();
}
function d7()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 7?");
         response = createInput(); 
	if(response.contains("i must always accept punishment no matter its form."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  

    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  changeMeritLow(true);
        Endd();
        return;
    }
    d8();
}
function d8()
{
    sendVirtualAssistantMessage(" Write and tell me whats rule nr. 8?");
         response = createInput(); 
	if(response.contains("i must always serve to the best of my ability."))
		{sendVirtualAssistantMessage("%GNMGood%");
			changeMeritLow(false);
		Endd();
		}  

    else
    {
        sendVirtualAssistantMessage(" " + random("Wrong. ", "Incorrect.. ", "Disappointing.. ") );  changeMeritLow(true);
        Endd();
        return;
    }
    Endd();
}
function Endd()
{
    delVar("ChoreAlt1d");
    End();
    return;
    eContinued();
}
function eContinued()
{
    e();
}
function e()
{
    sendVirtualAssistantMessage(" " + random("Open your browser", "Launch your browser"));
    setVar("ChoreAlt1e", true);
    sendVirtualAssistantMessage(" " + random("Find a good story", "Look for a good story"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" " + random("It should be about chastity", "It should be about a good spanking", "It should be about cuckolding"));
    sendVirtualAssistantMessage(" When you\'re done reading return to me");
    wait(300);
	sendVirtualAssistantMessage("Are you done reading? ",0);
    answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {	sendVirtualAssistantMessage(" Yes or no chastity slut? ",0);
        answer0 = createInput(); 
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood% ");
		changeMeritLow(false);
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Why have you returned to me then?? %GNMEmoteSad%, read it through next time!");  
		changeMeritLow(true);
    }
    delVar("ChoreAlt1e");
    End();
    return;
    f();
}
function f()
{
    sendVirtualAssistantMessage(" " + random("Let\'s work on your creative skills", "Time to get creative!"));
    sendVirtualAssistantMessage(" " + random("You are to write a short story", "You\'re gonna write a shory story"));
    sendVirtualAssistantMessage(" When you\'re done your gonna post it on a thread in Milovana.com");
    sendVirtualAssistantMessage(" well you don\'t \"have to do it\"");
    sendVirtualAssistantMessage(" I\'m actually gonna let you choose if you accept this assignment");
    sendVirtualAssistantMessage(" But accepting it will earn you 50 gold!");
    sendVirtualAssistantMessage(" So do you accept this job to write a short story?");
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
    sendVirtualAssistantMessage("Yes or no slut?");
		        answer0.loop();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
        setVar("ChoreAlt1f", true);
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Well thats alright");
        End();
        return;
    }
    sendVirtualAssistantMessage(" Well simply return to your chores when you\'re done");
    run("Assistant/AssistantLobby.js");
    fContinued();
}
function fContinued()
{
    sendVirtualAssistantMessage(" You\'re back!");
    sendVirtualAssistantMessage(" I hope you remember the last time when I told you to write a short story and post it..");
    sendVirtualAssistantMessage(" \"Told you\" might be a bit much..");
    sendVirtualAssistantMessage(" I asked and you accepted..");
	sendVirtualAssistantMessage("  Well did you complete my assignment?",0);
    let answer0 = createInput();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        	sendVirtualAssistantMessage(" Yes or no?");
		answer0.loop();
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%!");
        setVar("GNMGold", getVar("GNMGold", 0) + 50);
        delVar("ChoreAlt1f");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Well don\'t return here before you do!");
        run("Assistant/AssistantLobby.js");
    }
    sendVirtualAssistantMessage(" I transfered the gold to you");
    delVar("ChoreActive");
    sendVirtualAssistantMessage(" Good job %SlaveName%! ");
	changeMeritLow(false);
	
    End();
    return;
    QuickEnd();
}
function QuickEnd()
{
    sendVirtualAssistantMessage(" Just wanted to do a checkup");
    return;
    End();
}
function End()
{
    setVar("ChoresComplete", getVar("ChoresComplete", 0) + 1);
    delVar("ChoreActive");
    return;
}