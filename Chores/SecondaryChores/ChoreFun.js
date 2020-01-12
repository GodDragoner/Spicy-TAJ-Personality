main();
function main()
{
    if(getVar("ChoreFuna", false))
    {
        ChoreFuna();
        return;
    }
    if(getVar("ChoreFunb", false))
    {
        ChoreFunb();
        return;
    }
    if(getVar("ChoreFunc", false))
    {
        ChoreFunc();
        return;
    }
    if(getVar("ChoreFune", false))
    {
        ChoreFune();
        return;
    }
    if(getVar("ChoreFunf", false))
    {
        ChoreFunf();
        return;
    }
    if(getVar("ChoreFunh", false))
    {
        ChoreFunh();
        return;
    }
    Choose();
}
function Choose()
{
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
    ChoreFuna();
}
function ChoreFuna()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    aContinued();
    return;
    ChoreFunb();
}
function ChoreFunb()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    bContinued();
    return;
    ChoreFunc();
}
function ChoreFunc()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    cContinued();
    return;
    ChoreFune();
}
function ChoreFune()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    eContinued();
    return;
    ChoreFunf();
}
function ChoreFunf()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    fContinued();
    return;
    ChoreFunh();
}
function ChoreFunh()
{
    sendVirtualAssistantMessage(" Well it seems you failed to manage the last chore I gave you...");
    sendVirtualAssistantMessage(" But trust me..");
    sendVirtualAssistantMessage(" You\'re not getting out of this chore before you complete it!");
    hContinued();
    return;
    a();
}
function a()
{
    aContinued();
}
function aContinued()
{
    if(getVar("toyEstim")== false)
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" Go fetch your stimulator and 2 eletrodes");
    setVar("ChoreFuna", true);
    wait(30);
     answer0 = createInput();
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage("Got it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%VANC% %VANP% Yes or no electroslut?");
    }
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
    }
    else if (answer0.isLike("no"))
    {
        sendVirtualAssistantMessage(" Be quick!");
        wait(30);
    }
    sendVirtualAssistantMessage(" Place an electrode on your left and right ball");
    sendVirtualAssistantMessage(" Find a pattern and a level that suits you");
    sendVirtualAssistantMessage(" Try to impress me a little");
    wait(30);
    sendVirtualAssistantMessage("%stopstroking%", 0);
    wait(randomInt(100, 300));
    sendVirtualAssistantMessage("%stopstroking%", 0);
    delVar("ChoreFuna");
    wait(30);
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
    if(getVar("toyVibrator")== false)
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" I\'m gonna put up a video");
    setVar("ChoreFunb", true);
    if(getVar("ChastityIsOn", false))
    {
        sendVirtualAssistantMessage(" While that video plays you\'re gonna keep your vibrator on your cage");
    }
    if(!getVar("ChastityIsOn", false))
    {
        sendVirtualAssistantMessage(" While that video plays you\'re gonna keep your vibrator on your Cock");
    }
    sendVirtualAssistantMessage(" Just keep it on a low setting");
    setVar("ChoreActive", true);
    wait(30);
    sendVirtualAssistantMessage(" We don\'t want any accidents");
    sendVirtualAssistantMessage(" So lay back, buzz on and enjoy");
    playVideo("Videos" + java.io.File.separator + "*.*");
    sendVirtualAssistantMessage(" This was fun!");
    sendVirtualAssistantMessage(" Hope your %GNMCock% feels the same way %GNMLol%");
    sendVirtualAssistantMessage("%stopstroking%", 0);
    delVar("ChoreFunb");
    wait(30);
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
    if(getVar("ToyDildo")==false)
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" " + random("I wanna give you a choice", "I wanna present you with a choice"));
    setVar("ChoreFunc", true);
    sendVirtualAssistantMessage(" You can either enjoy a dildo or you can just sit on your hands");
    setVar("ChoreActive", true);
	sendVirtualAssistantMessage(" So which one is it?");
	let answer0 = createInput();
    while (!(answer0.isLike("dildo") || answer0.isLike("hands")))
    {
		sendVirtualAssistantMessage(" Dildo or hands slave?");
		answer0 = createInput();
    }
    if (answer0.isLike("dildo"))
    {
        sendVirtualAssistantMessage(" The dildo it is!");
        Dildoc();
        return;
    }
    else if (answer0.isLike("hands"))
    {
        sendVirtualAssistantMessage(" Not in the mood to play?");
        NoToyc();
        return;
    }
    Dildoc();
}
function Dildoc()
{
    sendVirtualAssistantMessage(" Fetch your dildo and a lube %SlaveName%");
    wait(15);
    let answer0 = getInput("%VANC% %VANP% %GNMReady%");
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
    }
    else
    {
        sendVirtualAssistantMessage(" Hurry up!");
        wait(15);
    }
    sendVirtualAssistantMessage(" Now %SlaveName% lube up that sweet dildo");
    wait(10);
    sendVirtualAssistantMessage(" I\'m gonna start the video now..");
    sendVirtualAssistantMessage(" If you\'re able to bring yourself to an ejaculation");
    sendVirtualAssistantMessage(" You have %DomName%'s permission");
    sendVirtualAssistantMessage(" Enjoy");
    playVideo("Videos" + java.io.File.separator + "*.*");
    let answer1 = getInput("%VANC% %VANP% So tell me %SlaveName%, did you cum by any chance?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%VANC% %VANP% Yes or no slave?");
    }
    if (answer1.isLike("yes"))
    {
        sendVirtualAssistantMessage(" Seems like your lucky day");
        DildoOrgasm();
        return;
    }
    else if (answer1.isLike("no"))
    {
        sendVirtualAssistantMessage(" Didn\'t think so anyway");
        NoDildoOrgasm();
        return;
    }
    DildoOrgasm();
}
function DildoOrgasm()
{
    sendVirtualAssistantMessage(" %DomName% turned you into a well trained sissy %GDRegisterOrgasm%");
    DoneDildo();
    return;
    NoDildoOrgasm();
}
function NoDildoOrgasm()
{
    sendVirtualAssistantMessage(" But you might need to learn to cum like this");
    sendVirtualAssistantMessage(" This might be the only way for you to cum in the future");
    DoneDildo();
}
function DoneDildo()
{
    Donec();
    return;
    NoToyc();
}
function NoToyc()
{
    sendVirtualAssistantMessage(" I have a video you can enjoy while sitting on your hands..");
    sendVirtualAssistantMessage(" Let the torture begin!");
    playVideo("Videos" + java.io.File.separator + "*.*");
    Donec();
}
function Donec()
{
    sendVirtualAssistantMessage(" This was fun to watch %GNMLol% ");  changeMeritMedium(false);
    delVar("ChoreFunc");
    End();
    return;
    d();
}
function d()
{
    sendVirtualAssistantMessage(" " + random("This one is a really fast one", "This one should be quick"));
    sendVirtualAssistantMessage(" Go to Milovana\'s Spicy forum thread and post a link or a name of a hot model!");
    sendVirtualAssistantMessage(" You have 4 minutes!");
    sendVirtualAssistantMessage(" Then I\'m moving on.. ");  changeMeritLow(false);
    wait(240);
    End();
    return;
    e();
}
function e()
{
    eContinued();
}
function eContinued()
{
    if(getVar("toyEstim")== false)
    {
        Choose();
        return;
    }
    sendVirtualAssistantMessage(" Fetch your electro toy along with the penis stimulators");
    setVar("ChoreFune", true);
    wait(10);
    let answer0 = getInput("%VANC% %VANP% %GNMReady%");
    setVar("ChoreActive", true);
    if (answer0.isLike("yes"))
    {
        sendVirtualAssistantMessage(" %GNMGood%");
    }
    else
    {
        sendVirtualAssistantMessage(" Hurry up!");
        wait(15);
    }
    sendVirtualAssistantMessage(" Apply the stimulators whereever you want and put the toy on a nice setting");
    wait(15);
    sendVirtualAssistantMessage(" Now just lay back and enjoy the stimulations while watching this");
    playVideo("Videos" + java.io.File.separator + "*.*");
    sendVirtualAssistantMessage(" Mhmm that looked hot");
    delVar("ChoreFune");
    sendVirtualAssistantMessage(" This was interesting %GNMGrin% ");  changeMeritMedium(false);
    End();
    return;
    fContinued();
}
function fContinued()
{
    f();
}
function f()
{
    sendVirtualAssistantMessage(" This one should be fun!");
    setVar("ChoreFunf", true);
    sendVirtualAssistantMessage(" I want you to find and watch a porno");
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" And only watch, no stroking no nothing!");
    sendVirtualAssistantMessage(" Not just any porno by the way");
    sendVirtualAssistantMessage(" It has to include a hmm..");
    switch(random("f1", "f2", "f3", "f4", "f5"))
    {
        case "f1":
        f1();
        return;
        break;
        case "f2":
        f2();
        return;
        break;
        case "f3":
        f3();
        return;
        break;
        case "f4":
        f4();
        return;
        break;
        case "f5":
        f5();
        return;
        break;
    }
    f1();
}
function f1()
{
    sendVirtualAssistantMessage(" Large dildo!");
    Donef();
    return;
    f2();
}
function f2()
{
    sendVirtualAssistantMessage(" A cane!");
    Donef();
    return;
    f3();
}
function f3()
{
    sendVirtualAssistantMessage(" A sexmachine!");
    Donef();
    return;
    f4();
}
function f4()
{
    sendVirtualAssistantMessage(" A chastity device");
    Donef();
    return;
    f5();
}
function f5()
{
    sendVirtualAssistantMessage(" Some sort electric toy %GNMGrin%");
    Donef();
    return;
    Donef();
}
function Donef()
{
    sendVirtualAssistantMessage(" Tell me \'done\' when you\'re done..");
   // --Command:CustomMode(done,Goto,Done2f)
    waitForDone(10000);
    Done2f();
}
function Done2f()
{
    sendVirtualAssistantMessage(" %GNMGood% ");
	changeMeritMedium(false);
   // --Command:CustomMode(ModeText,Normal)
    delVar("ChoreFunf");
    End();
    return;
    g();
}
function g()
{
    sendVirtualAssistantMessage(" I\'m gonna give you 10 minutes to check up on your models");
    sendVirtualAssistantMessage(" I expect that you have extensive knowledge about porn and lingerie models");
    sendVirtualAssistantMessage(" I expect this because they are the weapon I use to make you horny!");
    sendVirtualAssistantMessage(" So begin studying, your 10 minutes have started...");
    wait(600);
    playAudio("Audio/Spicy/SpecialSounds/Bell.mp3");
    sendVirtualAssistantMessage(" Let\'s see how well you know your models");
    switch(random("g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "g11", "g12"))
    {
        case "g1":
        g1();
        return;
        break;
        case "g2":
        g2();
        return;
        break;
        case "g3":
        g3();
        return;
        break;
        case "g4":
        g4();
        return;
        break;
        case "g5":
        g5();
        return;
        break;
        case "g6":
        g6();
        return;
        break;
        case "g7":
        g7();
        return;
        break;
        case "g8":
        g8();
        return;
        break;
        case "g9":
        g9();
        return;
        break;
        case "g10":
        g10();
        return;
        break;
        case "g11":
        g11();
        return;
        break;
        case "g12":
        g12();
        return;
        break;
    }
    g1();
}
function g1()
{
    sendVirtualAssistantMessage("  Who is this?");
  showImage("Images/Spicy/Chores/Chore7a/AdrianaLima.*");
  response=createInput();
    if (response.isLike("lima","Adriana"))
    {
        sendVirtualAssistantMessage(" Correct! ");
		changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");
		changeMeritLow(true);
        Wrong();
        return;
    }
    g2();
}
function g2()
{
    sendVirtualAssistantMessage("  Who is this?");
  showImage("Images/Spicy/Chores/Chore7a/AidenStarr.*");
  response=createInput();
    if (response.isLike("starr","Aiden"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g3();
}
function g3()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/AlessandraAmbrosio.*");
   response=createInput();
    if (response.isLike("ambrosio","Alessandra"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g4();
}
function g4()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/AmandaNicole.*");
   response=createInput();
    if (response.isLike("nicole","Amanda"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g5();
}
function g5()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/CandiceSwanepoel.*");
   response=createInput();
    if (response.isLike("swanepoel","Candice"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g6();
}
function g6()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/ChanelPreston.*");
   response=createInput();
    if (response.isLike("preston","chanel"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g7();
}
function g7()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/DaisyMarie.*");
   response=createInput();
    if (response.isLike("marie","Daisy"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g8();
}
function g8()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/ElsaHosk.*");
   response=createInput();
    if (response.isLike("hosk","Elsa"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g9();
}
function g9()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/IsisLove.*");
   response=createInput();
    if (response.isLike("love","Isis"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g10();
}
function g10()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/ItaliaR.*");
   response=createInput();
    if (response.isLike("r","Italia"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g11();
}
function g11()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/LoreleiLee.*");
   response=createInput();
    if (response.isLike("lee","lorelei"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    g12();
}
function g12()
{
    sendVirtualAssistantMessage("  Who is this?");
   showImage("/GNMImages/Chores/Chore7a/MaitresseMadelineMarlowe.*");
   response=createInput();
    if (response.isLike("marlowe"))
    {
        sendVirtualAssistantMessage(" Correct! ");  changeMeritLow(false);
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong.. ");  changeMeritLow(true);
        Wrong();
        return;
    }
    Right();
}
function Right()
{
    End();
    return;
    Wrong();
}
function Wrong()
{
    End();
    return;
    hContinued();
}
function hContinued()
{
    j();
}
function j()
{
    i();
}
function i()
{
    h();
}
function h()
{
    sendVirtualAssistantMessage(" This is going to be a fun little challenge");
    setVar("ChoreFunh", true);
    sendVirtualAssistantMessage(" I\'m going to show you a video");
    setVar("ChoreActive", true);
    sendVirtualAssistantMessage(" Afterwards i\'m gonna ask you a question about that video!");
    sendVirtualAssistantMessage(" Get it right and I reward you");
    sendVirtualAssistantMessage(" Get it wrong and well..");
    sendVirtualAssistantMessage(" I expect you to get it wrong..");
    sendVirtualAssistantMessage(" Pay attention!");
    switch(random("H2", "I2", "J2"))
    {
        case "H2":
        H2();
        return;
        break;
        case "I2":
        I2();
        return;
        break;
        case "J2":
        J2();
        return;
        break;
    }
    H2();
}
function H2()
{
    sendVirtualAssistantMessage(" " + random("Enjoy", "Have fun", "Relax and enjoy"));
 playVideo("/GNM_Videos/BackgroundMode/Chores/Choreb8/A.mp4");
    sendVirtualAssistantMessage(" " + random("That was hot", "Mhmm I\'m feeling tingly", "Soo sexy"));
    switch(random("H2a", "H2b", "H2c", "H2d", "H2e", "H2f"))
    {
        case "H2a":
        H2a();
        return;
        break;
        case "H2b":
        H2b();
        return;
        break;
        case "H2c":
        H2c();
        return;
        break;
        case "H2d":
        H2d();
        return;
        break;
        case "H2e":
        H2e();
        return;
        break;
        case "H2f":
        H2f();
        return;
        break;
    }
    H2a();
}
function H2a()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you see a cock go back and forth?");
    if (answer0.isLike("601"))
    {
        sendVirtualAssistantMessage("");
        Right();
        return;
    }
    else
    {
        sendVirtualAssistantMessage("");
        Wrong();
        return;
    }
    H2b();
}
function H2b()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you hear the word \"please\"?");
    if (answer0.isLike("44"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    H2c();
}
function H2c()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you hear the words \"yes Sir\"?");
    if (answer0.isLike("7"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    H2d();
}
function H2d()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you hear the words \"I serve the house\"?");
    if (answer0.isLike("16"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    H2e();
}
function H2e()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you hear the words \"thank you\"?");
    if (answer0.isLike("6"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    H2f();
}
function H2f()
{
    let answer0 = getInput("%VANC% %VANP% How many times did you hear the word \"slave\"?");
    if (answer0.isLike("9"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    I2();
}
function I2()
{
    sendVirtualAssistantMessage(" " + random("Enjoy", "Have fun", "Relax and enjoy"));
 playVideo("/GNM_Videos/BackgroundMode/Chores/Choreb8/C.mp4");
    sendVirtualAssistantMessage(" " + random("That was hot", "Mhmm I\'m feeling tingly", "Soo sexy"));
    switch(random("I2a", "I2b", "I2c", "I2d", "I2e"))
    {
        case "I2a":
        I2a();
        return;
        break;
        case "I2b":
        I2b();
        return;
        break;
        case "I2c":
        I2c();
        return;
        break;
        case "I2d":
        I2d();
        return;
        break;
        case "I2e":
        I2e();
        return;
        break;
    }
    I2a();
}
function I2a()
{
    let answer0 = getInput("%VANC% %VANP% How many times are a quick shock administered?");
    if (answer0.isLike("27"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    I2b();
}
function I2b()
{
    let answer0 = getInput("%VANC% %VANP% How many seconds does the last scene last?");
    if (answer0.isLike("47"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    I2c();
}
function I2c()
{
    let answer0 = getInput("%VANC% %VANP% How many times does the strap on moves back and forth?");
    if (answer0.isLike("105"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    I2d();
}
function I2d()
{
    let answer0 = getInput("%VANC% %VANP% How many seconds is the vibrator applied to her pussy?");
    if (answer0.isLike("28"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    I2e();
}
function I2e()
{
    let answer0 = getInput("%VANC% %VANP% How many buttplugs did you count in the video?");
    if (answer0.isLike("14"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    J2();
}
function J2()
{
    sendVirtualAssistantMessage(" " + random("Enjoy", "Have fun", "Relax and enjoy"));
 playVideo("/GNM_Videos/BackgroundMode/Chores/Choreb8/B.mp4");
    sendVirtualAssistantMessage(" " + random("That was hot", "Mhmm I\'m feeling tingly", "Soo sexy"));
    switch(random("B1", "B2", "B3", "B4", "B5", "B6"))
    {
        case "B1":
        B1();
        return;
        break;
        case "B2":
        B2();
        return;
        break;
        case "B3":
        B3();
        return;
        break;
        case "B4":
        B4();
        return;
        break;
        case "B5":
        B5();
        return;
        break;
        case "B6":
        B6();
        return;
        break;
    }
    B1();
}
function B1()
{
    let answer0 = getInput("%VANC% %VANP% How many times did the slut get whipped?");
    if (answer0.isLike("40"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    B2();
}
function B2()
{
    let answer0 = getInput("%VANC% %VANP% How many seconds has passed before the scene shift?");
    if (answer0.isLike("174"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    B3();
}
function B3()
{
     sendVirtualAssistantMessage(" How many times did you hear the words 'slut' & 'whore'?");
	 response=createInput();
    if (response.isLike("20"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    B4();
}
function B4()
{
    let answer0 = getInput("%VANC% %VANP% How many times does she suck the cock in the first scene?");
    if (answer0.isLike("38"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    B5();
}
function B5()
{
    let answer0 = getInput("%VANC% %VANP% How many times do you see the cock gag go up and down?");
    if (answer0.isLike("179"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    B6();
}
function B6()
{
    let answer0 = getInput("%VANC% %VANP% How many times is the slut pussy whipped?");
    if (answer0.isLike("12"))
    {
        sendVirtualAssistantMessage(" Correct!");
        RightH();
        return;
    }
    else
    {
        sendVirtualAssistantMessage(" Wrong!");
        WrongH();
        return;
    }
    WrongH();
}
function WrongH()
{
    sendVirtualAssistantMessage(" Well I did kinda expect you to fail so there will be no punishment");
    delVar("ChoreFunh");
    sendVirtualAssistantMessage(" I suppose its punishment enough knowing my reward would have been generous!");
    End();
    return;
    RightH();
}
function RightH()
{
    sendVirtualAssistantMessage(" Against all odds you got it right! ");
	changeMeritMedium(false);
    sendVirtualAssistantMessage(" Thats 400 gold worth!");
    setVar("GNMGold", getVar("GNMGold", 0) + 400);
    sendVirtualAssistantMessage(" You now have "+getVar(GNMGold));
    //--Command:ShowVar(GNMGold)
    delVar("ChoreFunh");
    End();
    return;
    End();
}
function End()
{
    setVar("ChoresComplete", getVar("ChoresComplete", 0) + 1);
    delVar("ChoreActive");
    return;
}