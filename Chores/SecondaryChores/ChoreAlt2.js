main();
function main()
{
    if(getVar("ChoreAlt2a", false))
    {
        ChoreAlt2a();
        return;
    }
    if(getVar("ChoreAlt2b", false))
    {
        ChoreAlt2b();
        return;
    }
    if(getVar("ChoreAlt2c", false))
    {
        ChoreAlt2c();
        return;
    }
    if(getVar("ChoreAlt2d", false))
    {
        ChoreAlt2d();
        return;
    }
    if(getVar("ChoreAlt2f", false))
    {
        ChoreAlt2f();
        return;
    }
    if(getVar("ChoreAlt2g", false))
    {
        ChoreAlt2g();
        return;
    }
    if(getVar("ChoreAlt2h", false))
    {
        ChoreAlt2h();
        return;
    }
    if(getVar("ChoreAlt2i", false))
    {
        ChoreAlt2i();
        return;
    }
    Choose();
}
function Choose()
{
    switch(random("a", "b", "c", "d", "e", "f", "g", "h", "i"))
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
    }
   
}
function ChoreAlt2a()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    aContinued();
    return;
 
}
function ChoreAlt2b()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    bContinued();
    return;
 
}
function ChoreAlt2c()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    cContinued();
    return;
   
}
function ChoreAlt2d()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    dContinued();
    return;
   
}
function ChoreAlt2f()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    fContinued();
    return;
  
}
function ChoreAlt2g()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    gContinued();
    return;
   
}
function ChoreAlt2h()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    hContinued();
    return;
  
}
function ChoreAlt2i()
{
   sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
   sendVirtualAssistantMessage(" But trust me..");
   sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    iContinued();
    return;
  
}
function a()
{
    if(!getVar("PrivateHumActive", false))
    {
        Choose();
        return;
    }
    setVar("ChoreAlt2a", true);
   sendVirtualAssistantMessage(" " + random("Time for some laughs!", "Let\'s make me laugh!"));
    setVar("ChoreActive", true);
    aContinued();
}
function aContinued()
{
   sendVirtualAssistantMessage(" " + random("Get naked and on all fours", "Hurry up and be naked then get down on all fours"));
   sendVirtualAssistantMessage(" I want you to walk on all fours to the kitchen, get a bowl and fill it water");
   sendVirtualAssistantMessage(" Drink from the bowl and then crawl back %GNMLol%");
   // --Command:CustomMode(done,Goto,Donea)
   sendVirtualAssistantMessage(" Let me know when you\'re \'done\'");
  waitForDone(10000);
    Donea();
}
function Donea()
{
   sendVirtualAssistantMessage(" %GNMGood%");
    delVar("ChoreAlt2a");
    //--Command:CustomMode(ModeText,Normal)
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin%");
   changeMeritLow(false);
   rewardGoldLow();
    End();
    return;
   
}
function b()
{
   sendVirtualAssistantMessage(" %SlaveName%");
    setVar("ChoreAlt2b", true);
    bContinued();
}
function bContinued()
{
   sendVirtualAssistantMessage(" " + random("Head over to the corner", "Go to the corner"));
    switch(random("b1", "b2", "b3", "b4", "b5", "b6"))
    {
        case "b1":
        b1();
        return;
        break;
        case "b2":
        b2();
        return;
        break;
        case "b3":
        b3();
        return;
        break;
        case "b4":
        b4();
        return;
        break;
        case "b5":
        b5();
        return;
        break;
        case "b6":
        b6();
        return;
        break;
    }
  
}
function b1()
{
    sendVirtualAssistantMessage(" And take the bad bitch position",2,true);showImage("Images/Spicy/Positions/BadBitch2.jpg"); sleep(10); Bellb();
   
}
function b2()
{
    sendVirtualAssistantMessage(" And take the bent over position",2,true); showImage("Images/Spicy/Positions/BentOver3.jpg"); sleep(10); Bellb();
   
}
function b3()
{
    sendVirtualAssistantMessage(" And take the box position",2,true); showImage("Images/Spicy/Positions/Box1.jpg"); sleep(10); Bellb();
   
}
function b4()
{
    sendVirtualAssistantMessage(" And take the Attention position",2,true); showImage("Images/Spicy/Positions/Attention1.jpg"); sleep(10); Bellb();

}
function b5()
{
    sendVirtualAssistantMessage(" And take the stand position",2,true); showImage("Images/Spicy/Positions/Stand2.jpg"); sleep(10); Bellb();
  
}
function b6()
{
    sendVirtualAssistantMessage(" And take the stand open position",2,true);
	showImage("Images/Spicy/Positions/StandOpen1.jpg"); 
	sleep(10);
	Bellb();
 
}
function Bellb()
{
   sendVirtualAssistantMessage(" Wait for the bell");
    wait(randomInt(200, 500));
    sendVirtualAssistantMessage(" Get back here.. ");
	playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
   sendVirtualAssistantMessage(" Position and corner training in one package");
    delVar("ChoreAlt2b");
    changeMeritLow(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% ");
   rewardGoldMedium();
    End();
    return;
  
}
function cContinued()
{
    c();
}
function c()
{
   sendVirtualAssistantMessage(" " + random("Let\'s practice one of your positions", "Let\'s have you do one of the positions"));
    setVar("ChoreAlt2c", true);
   sendVirtualAssistantMessage(" I\'m gonna show you a position and I want you to take and hold it until you hear my bell");
    setVar("ChoreActive", true);
    switch(random("c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13", "c14", "c15", "c16"))
    {
        case "c1":
        c1();
        return;
        break;
        case "c2":
        c2();
        return;
        break;
        case "c3":
        c3();
        return;
        break;
        case "c4":
        c4();
        return;
        break;
        case "c5":
        c5();
        return;
        break;
        case "c6":
        c6();
        return;
        break;
        case "c7":
        c7();
        return;
        break;
        case "c8":
        c8();
        return;
        break;
        case "c9":
        c9();
        return;
        break;
        case "c10":
        c10();
        return;
        break;
        case "c11":
        c11();
        return;
        break;
        case "c12":
        c12();
        return;
        break;
        case "c13":
        c13();
        return;
        break;
        case "c14":
        c14();
        return;
        break;
        case "c15":
        c15();
        return;
        break;
        case "c16":
        c16();
        return;
        break;
    }
   
}
function c1()
{
    sendVirtualAssistantMessage(" Remember position 1 is called the Bad Bitch",2,true); showImage("Images/Spicy/Positions/BadBitch2.jpg"); cTimer();
    
}
function c2()
{
    sendVirtualAssistantMessage(" Remember position 2 is called the Bent Over",2,true); showImage("Images/Spicy/Positions/BentOver1.jpg"); cTimer();
   
}
function c3()
{
    sendVirtualAssistantMessage(" Remember position 3 is called the Bent Over Open",2,true);  
	showImage("Images/Spicy/Positions/BentOverOpen2.jpg");
	cTimer();
    
}
function c4()
{
    sendVirtualAssistantMessage(" Remember position 4 is called the Box",2,true);
	showImage("Images/Spicy/Positions/Box1.jpg"); 
	cTimer();
  
}
function c5()
{
    sendVirtualAssistantMessage(" Remember position 5 is called the Come Fuck Me",2,true);  showImage("Images/Spicy/Positions/CFM1.jpg"); cTimer();
  
}
function c6()
{
    sendVirtualAssistantMessage(" Remember position 6 is called the Dog ",2,true); showImage("Images/Spicy/Positions/Dog1.jpg"); cTimer();
    
}
function c7()
{
    sendVirtualAssistantMessage(" Remember position 7 is called the Attention",2,true);  showImage("Images/Spicy/Positions/Attention1.jpg"); cTimer();
  
}
function c8()
{
     sendVirtualAssistantMessage(" Remember position 8 is called Listen",2,true);  showImage("Images/Spicy/Positions/Listen1.jpg"); cTimer();
   
}
function c9()
{
     sendVirtualAssistantMessage(" Remember position 9 is called the Kneel",2,true);  showImage("Images/Spicy/Positions/Kneel1.jpg"); cTimer();
    
}
function c10()
{
     sendVirtualAssistantMessage(" Remember position 10 is called the Punishment",2,true);  showImage("Images/Spicy/Positions/Punishment1.jpg"); cTimer();
   
}
function c11()
{
     sendVirtualAssistantMessage(" Remember position 11 is called the Slut",2,true);  showImage("Images/Spicy/Positions/Slut1.jpg"); cTimer();
    
}
function c12()
{
     sendVirtualAssistantMessage(" Remember position 12 is called the Spanking",2,true);  showImage("Images/Spicy/Positions/Spanking1.jpg"); cTimer();
 
}
function c13()
{
     sendVirtualAssistantMessage(" Remember position 13 is called Judgement",2,true);  showImage("Images/Spicy/Positions/Judgement1.jpg"); cTimer();
   
}
function c14()
{
     sendVirtualAssistantMessage(" Remember position 14 is called the Stand",2,true);  showImage("Images/Spicy/Positions/Stand1.jpg"); cTimer();
    
}
function c15()
{
     sendVirtualAssistantMessage(" Remember position 15 is called the Stand Open",2,true);  showImage("Images/Spicy/Positions/StandOpen1.jpg"); cTimer();
   
}
function c16()
{
     sendVirtualAssistantMessage(" Remember position 16 is called the Worship",2,true);  showImage("Images/Spicy/Positions/Worship1.jpg"); cTimer();
   
}
function cTimer()
{
    wait(randomInt(200, 400));
    delVar("ChoreAlt2c");
    unlockImages();
     sendVirtualAssistantMessage(" Good boy"); 
	 changeMeritLow(false);
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% ");
    rewardGoldMedium();
    End();
    return;
    
}
function dContinued()
{
    d();
}
function d()
{
    if(!getVar("PrivateHumActive", false))
    {
        Choose();
        return;
    }
    setVar("ChoreAlt2d", true);
   sendVirtualAssistantMessage(" " + random("This is gonna be a blast", "This should be fun to watch"));
    setVar("ChoreActive", true);
   sendVirtualAssistantMessage(" Find a porn that DOESN\'T turn you on!");
   sendVirtualAssistantMessage(" I want you to watch " + randomInt(2, 5) + "minutes of it!");
   sendVirtualAssistantMessage(" When you\'re done, just tell me");
	waitForDone(10000);
   sendVirtualAssistantMessage(" %GNMGood%");
    delVar("ChoreAlt2d");
    changeMeritmedium(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% %GoldLow%");
    End();
    return;
   
}
function e()
{
    if(getVar("ChoreAlt2eNoGood", false))
    {
        Choose();
        return;
    }
    if(getVar("GNMToyLingerieAdvanced", false))
    {
        if(getVar("PublicHumActive", false))
        {
            PublicHumActive();
            return;
        }
    }
    Choose();
    return;
   
}
function PublicHumActive()
{
    if(getVar("ChoreAlt2eGood", false))
    {
        ChoreAlt2eGood();
        return;
    }
    let answer0 = getInput("%VANC% %VANP% Do you have a window that would put you on a semi public display?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        setVar("ChoreAlt2eGood", true);
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Well then what I had in mind won\'t work..");
        setVar("ChoreAlt2eNoGood", true);
    }
   // ChoreAlt2eGood();
}
function ChoreAlt2eGood()
{
   sendVirtualAssistantMessage(" Let\'s see if we can come to terms!");
    switch(random("e1", "e2", "e3", "e4", "e5", "e6"))
    {
        case "e1":
        e1();
        return;
        break;
        case "e2":
        e2();
        return;
        break;
        case "e3":
        e3();
        return;
        break;
        case "e4":
        e4();
        return;
        break;
        case "e5":
        e5();
        return;
        break;
        case "e6":
        e6();
        return;
        break;
    }
   
}
function e1()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 100 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked100();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 75)
        {
            e2();
            return;
        }
        NoDeal();
        return;
    }
 
}
function e2()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 150 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked150();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 75)
        {
            e3();
            return;
        }
        NoDeal();
        return;
    }

}
function e3()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand naked in front of your public window for 200 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorNaked200();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        NoDeal();
        return;
    }

}
function e4()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 100 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie100();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 50)
        {
            e5();
            return;
        }
        NoDeal();
        return;
    }

}
function e5()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 150 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie150();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        if (randomInteger(1, 100) <= 50)
        {
            e6();
            return;
        }
        NoDeal();
        return;
    }
 
}
function e6()
{
    let answer0 = getInput("%VANC% %VANP% Would you be willing to stand in full lingerie in front of your public window for 200 gold?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer0.isLike("yes"))
    {
       sendVirtualAssistantMessage(" Excellent!");
        MirrorLingerie200();
        return;
    }
    else if (answer0.isLike("no"))
    {
       sendVirtualAssistantMessage(" Hmm..");
        NoDeal();
        return;
    }
   
}
function MirrorNaked100()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
  
}
function MirrorNaked150()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 150);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
    
}
function MirrorNaked200()
{
   sendVirtualAssistantMessage(" Get naked slave!");
    wait(60);
    setVar("GNMGold", getVar("GNMGold", 0) + 200);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End1();
    return;
   
}
function MirrorLingerie100()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 100);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
  
}
function MirrorLingerie150()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 150);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
   
}
function MirrorLingerie200()
{
   sendVirtualAssistantMessage(" Put on a full set of lingerie %SlaveName%, you have 5 minutes");
    wait(300);
    setVar("GNMGold", getVar("GNMGold", 0) + 200);
   sendVirtualAssistantMessage(" Get in front of your window and stand there for 5 minutes, wait for my bell..");
    wait(300);
    End2();
    return;
  
}
function End1()
{
     sendVirtualAssistantMessage(" Get back here ");
	 changeMeritLow(false);
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
	 Donee();
 
}
function End2()
{
     sendVirtualAssistantMessage(" Get back here");
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3"); 
   sendVirtualAssistantMessage(" Remove your lingerie ");
  	 changeMeritMedium(false);
    wait(60);
    Donee();
    return;
  
}
function NoDeal()
{
   sendVirtualAssistantMessage(" Too bad you won\'t make a deal with me..");
    return;
   // Donee();
}
function Donee()
{
    End();
    return;
  
}
function fContinued()
{
    f();
}
function f()
{
    setVar("ChoreAlt2f", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage("In just a moment you'll be in the worship position ");
	showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage(" While in the worship position I want you to repeat the follow sentence over and over.. ");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
	jump=randomInteger(1,3);
	switch (jump) {
	case 1:
		f1();
	break;
	case 2:
		f2();
	break;
	case 3:
		f3();
	break;
	}
	
   
}
function f1()
{
   sendVirtualAssistantMessage( "I edge in the honor of the Goddess" );
	showImage("Images/Spicy/Positions/Worship1.jpg");
	Timef();
  
}
function f2()
{
   sendVirtualAssistantMessage( "My cock and pleasure is the property of the Goddess");
   showImage("Images/Spicy/Positions/Worship1.jpg");
   Timef();

}
function f3()
{
       sendVirtualAssistantMessage( "My pleasure is a reward given to me by the Goddess");
	   showImage("Images/Spicy/Positions/Worship1.jpg"); 
       Timef();
}
function Timef()
{
       sendVirtualAssistantMessage(  random("Repeat your mantra until you hear the bell","You will repeat the mantra until you hear the bell") );
	showImage("Images/Spicy/Positions/Worship1.jpg");
       sendVirtualAssistantMessage( " Get into the worship position and begin.. ");
	showImage("Images/Spicy/Positions/Worship1.jpg");
    showImage("Images/Spicy/Positions/Worship1.jpg"); 
	sleep(randomInteger(200,400));
   Bellc();
}
function Bellc()
{
     sendVirtualAssistantMessage(" Get back up %SlaveName% ");
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
    Donec();
}
function Donec()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2f");
    changeMeritLow(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin%");
   rewardGoldLow();
    End();
    return;
   
}
function gContinued()
{
    g();
}
function g()
{
    setVar("ChoreAlt2g", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" In just a moment you'll be in the worship position ");
	showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage(" While in the worship position I want you to repeat the follow sentence over and over..");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
	
		jump=randomInteger(1,3);
	switch (jump) {
	case 1:
		g1();
	break;
	case 2:
		g2();
	break;
	case 3:
		g3();
	break;
	}
	
}
function g1()
{
       sendVirtualAssistantMessage("My cock exists to be denied any pleasure in honor of the Divinity");
	   showImage("Images/Spicy/Positions/Worship1.jpg");
	   Timeg();
}
function g2()
{
    sendVirtualAssistantMessage("My cock is encased in steel to honor the Divinity");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
	Timeg();

}
function g3()
{
    sendVirtualAssistantMessage("I exist to suffer denial and to honor the Divinity");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
    Timeg();
}
function Timeg()
{
    sendVirtualAssistantMessage(random("Repeat your mantra until you hear the bell","You will repeat the mantra until you hear the bell")); showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage(" Get into the worship position and begin.. ",2,true);
	showImage("Images/Spicy/Positions/Worship1.jpg");
   showImage("Images/Spicy/Positions/Worship1.jpg");
	sleep(randomInteger(200,400));
    Bellg();
}
function Bellg()
{
     sendVirtualAssistantMessage(" Get back up %SlaveName%"); 
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
    Doneg();
}
function Doneg()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2g");
    changeMeritLow(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin% ");
    rewardGoldMedium();
    End();
    return;
    hContinued();
}
function hContinued()
{
    h();
}
function h()
{
    setVar("ChoreAlt2h", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" In just a moment you'll be in the worship position");
	showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage(" While in the worship position I want you to repeat the follow sentence over and over..");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
   
	jump=randomInteger(1,3);
	switch (jump) {
	case 1:
		h1();
	break;
	case 2:
		h2();
	break;
	case 3:
		h3();
	break;
	}
	
}
function h1()
{
    sendVirtualAssistantMessage("I serve the mistress of pain, I worship the Devil");
	showImage("Images/Spicy/Positions/Worship1.jpg");
	Timeh();
 
}
function h2()
{
    sendVirtualAssistantMessage("My body is the focus of the Devil, I live to suffer in her name");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
	Timeh();
 
}
function h3()
{
    sendVirtualAssistantMessage("I faithfully worship the Devil and offer her my body");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
    Timeh();
}
function Timeh()
{
    sendVirtualAssistantMessage( random("Repeat your mantra until you hear the bell","You will repeat the mantra until you hear the bell")); showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage("Get into the worship position and begin.. ");
	showImage("Images/Spicy/Positions/Worship1.jpg");
     showImage("Images/Spicy/Positions/Worship1.jpg");
	 sleep(randomInteger(200,400));
    Bellh();
}
function Bellh()
{
     sendVirtualAssistantMessage(" Get back up %SlaveName%");
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
    Done6();
}
function Done6()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2h");
    changeMeritLow(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin%");
    rewardGoldMedium();
    End();
    return;
    iContinued();
}
function iContinued()
{
    i();
}
function i()
{
    setVar("ChoreAlt2i", true);
   sendVirtualAssistantMessage(" " + random("You\'re gonna spend some time on the floor", "Let\'s make you spend some time on the floor"));
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" In just a moment you'll be in the worship position");
	showImage("Images/Spicy/Positions/Worship1.jpg");
    sendVirtualAssistantMessage(" While in the worship position I want you to repeat the follow sentence over and over..");
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
		jump=randomInteger(1,3);
	switch (jump) {
	case 1:
		i1();
	break;
	case 2:
		i2();
	break;
	case 3:
		i3();
	break;
	}
	
}
function i1()
{
    sendVirtualAssistantMessage("I am but the tool of %DomHonorific% %DomName%" );
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
	iTime();
 
}
function i2()
{
    sendVirtualAssistantMessage("I am an unworthy chastity belted slave");
	showImage("Images/Spicy/Positions/Worship1.jpg");
	iTime();
    
}
function i3()
{
    sendVirtualAssistantMessage("I serve to please my %DomHonorific%"); 
	showImage("Images/Spicy/Positions/Worship1.jpg"); 
    iTime();
}
function iTime()
{
     sendVirtualAssistantMessage(random("Repeat your mantra until you hear the bell","You will repeat the mantra until you hear the bell"));
	 showImage("Images/Spicy/Positions/Worship1.jpg");
     sendVirtualAssistantMessage( "Get into the worship position and begin..");
	 showImage("Images/Spicy/Positions/Worship1.jpg");
		i4();
}
function i4()
{	
    showImage("Images/Spicy/Positions/Worship1.jpg");
	sleep(randomInteger(240,360));
	
    Belli();
}
function Belli()
{    
     sendVirtualAssistantMessage(" Get back up %SlaveName% ");
	 playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
    Donei();
}
function Donei()
{
   sendVirtualAssistantMessage(" " + random("Moving on", "Let\'s continue"));
    delVar("ChoreAlt2i");
    changeMeritLow(false);
   sendVirtualAssistantMessage(" Let me reward that %GNMGrin%");
   rewardGoldMedium();
    End();
    return;
   
}
function End()
{
    setVar("ChoresComplete", getVar("ChoresComplete", 0) + 1);
    delVar("ChoreActive");
    return;
}