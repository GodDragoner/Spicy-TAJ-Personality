{
    showImage("Images/Spicy/Intro/Loading.jpg");
    sendSystemMessage("Initial start up..");
    sleep(1);
    sendSystemMessage("The first session is very important and long due to first time setup...");
    sleep(3);
    sendSystemMessage("Do you have about 1 - 1.5 hours?");
    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            break;
        } else if (answer.isLike("no")) {
            sendSystemMessage("Return when you have sufficient time..");
            endSession();
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendSystemMessage("Commencing..");
    sleep(1);

    sendSystemMessage("Setting up..");
    sleep(1);

    sendSystemMessage("This might take a few minutes..");
    sleep(2);

    setVar(VARIABLE_SUB_PAIN_TOLERANCE, 3);
    //setVar("subPain", 3);
    setVar("subEndurance", 3);
    setVar("subStrictness", 3);
    setVar(VARIABLE_DEVOTION, 45);

    run("Settings/UpdateDevotion.js");

    setVar(VARIABLE_ORGASM_RATION, 50);
    setVar("lockUpPoints", 0);
    setVar(VARIABLE_MERITS, 500);
    setDate("firstStart");
    setVar(VARIABLE_PUNISHMENT_POINTS, 0);

    setVar(VARIABLE_MIN_WEEKLY_CHORE_TIME, 60 * 5);

    setVar("teaseModuleRatio", 60);
    setVar("slaveModuleRatio", 60);
    setVar("sissyModuleRatio", 60);
    setVar("painModuleRation", 60);

    setVar(VARIABLE_ACTIVE_END_GAME_ID, END_GAME_STANDARD_ID);

    setupSlaveCompetitorStats("Female1", 8, 3, 2, 1, 1, 2, 1, 0);
    setupSlaveCompetitorStats("Female2", 6, 6, 5, 5, 2, 1, 3, 0);
    setupSlaveCompetitorStats("Female3", 4, 9, 8, 10, 3, 3, 5, 0);

    setupSlaveCompetitorStats("Male1", 3, 8, 2, 4, 0, 3, 5, 0);
    setupSlaveCompetitorStats("Male2", 5, 5, 5, 3, 0, 2, 3, 0);
    setupSlaveCompetitorStats("Male3", 7, 2, 8, 2, 0, 1, 1, 0);

    //20 good days
    for (let day = 0; day < 20; day++) {
        setVar("day" + day + "Good", true);
    }

    //11 bad days
    for (let day = 20; day < 31; day++) {
        setVar("day" + day + "Good", false);
    }

    showImage("Images/Spicy/Intro/Disclaimer.jpg");
    sleep(8 * 1);

    showImage("Images/Spicy/Intro/Tribute.jpg");
    sleep(3 * 1);

    showImage("Images/Spicy/Intro/BugFeedback.jpg");
    sleep(8 * 1);

    showImage("Images/Spicy/Intro/SpicyGif1.gif");
    sleep(6 * 1);

    sendVirtualAssistantMessage("Welcome %SubName%");
    sleep(.1);
    sendVirtualAssistantMessage("My name is Vivienne");
    sendVirtualAssistantMessage("I am Mistress %domName%\'s virtual assistant");
    sendVirtualAssistantMessage("You are here because you sent a request to become the property of Mistress %domName%");
    sendVirtualAssistantMessage("As you probably read before sending the application there is a 6 month trial period");
    sendVirtualAssistantMessage("The trial period is designed to see if you\'re fit to serve...");
    sendVirtualAssistantMessage("Many men and women around the world claim that they want to be slaves");
    sendVirtualAssistantMessage("Most of these people don\'t truly understand what it means to serve");
    sendVirtualAssistantMessage("Tease-AI was designed to simulate the realities of being a slave");
    sendVirtualAssistantMessage("Through this program you will meet your perhaps future Mistress");
    sendVirtualAssistantMessage("You will be played with, tested and trained");
    sendVirtualAssistantMessage("You will also meet other applicants both female and male");
    sendVirtualAssistantMessage("And you will meet the Mistress\'s friends");
    sendVirtualAssistantMessage("At the end of the trial there will be a quite extensive report on you");
    sendVirtualAssistantMessage("As well as a final exam");
    sendVirtualAssistantMessage("Pass both and you will be accepted as the property of Mistress %domName%");
    sendVirtualAssistantMessage("Now there are 2 types of slaves");
    sendVirtualAssistantMessage("Those who serve full time and some who serve part time");
    sendVirtualAssistantMessage("In case you forgot");
    sendVirtualAssistantMessage("Full time means that you are expected to visit often as well as complete chores");
    sendVirtualAssistantMessage("Part time means that you\'re only here to play around");
    sendVirtualAssistantMessage("You also have the option of trying full time for a trial period of 10 days");
    sendVirtualAssistantMessage("This is done inside the shop");
    sendVirtualAssistantMessage("Your first trial is free");
    sendVirtualAssistantMessage("After that the price to do the trial is 200 gold");
    sendVirtualAssistantMessage("After 10 days you would then have to make a decision wether you want to continue full time");
    sendVirtualAssistantMessage("Or revert back to part time");
    sendVirtualAssistantMessage("Notice!");
    sendVirtualAssistantMessage("It is possible to go from part time to full time");
    sendVirtualAssistantMessage("But if you at any point wish to return to serve part time ");
    sendVirtualAssistantMessage("There is a fee of 2000 gold");
    sendVirtualAssistantMessage("Well...");
    sendVirtualAssistantMessage("Unfortunately I have misplaced your application %EmoteSad%");
    sendVirtualAssistantMessage("So I need you to refresh my memory");
    sendVirtualAssistantMessage("Are you here to serve full or part time?", false);
    answer = createInput();

    while (true) {
        if (answer.isLike("part time", "parttime", "part")) {
            setVar(VARIABLE_SLAVE_TYPE, 0);
            break;
        } else if (answer.isLike("full time", "fulltime", "full")) {
            setVar(VARIABLE_SLAVE_TYPE, 1);
            break;
        } else {
            sendVirtualAssistantMessage("Full time or part time slave?");
            answer.loop();
        }
    }
    lockImages();
    sendVirtualAssistantMessage("%Good%");

    sendVirtualAssistantMessage("Mistress %domName% would prefer it if you are able to handle wearing a chastity device at all times");
  	showImage("Images/Spicy/Toys/MetalChastity.jpg",4);
    sendVirtualAssistantMessage("But she also understands that it takes practice to learn");

    if (sendYesOrNoQuestion("Do you own a chastity device?", SENDER_ASSISTANT)) {
        sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different chastity cages do you have?', false);
        answer = createInput();

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else {
                    sendVirtualAssistantMessage('We are gonna setup your chastity cages now, one by one.');

                    for (let x = 0; x < result; x++) {
                        setupNewCage();
                    }

                    sendVirtualAssistantMessage('This should do it regarding chastity cages');
                    sendVirtualAssistantMessage('You can always setup new chastity cages in the settings menu');
                    break;
                }
            } else {
                sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
                answer.loop();
            }
        }

        sendVirtualAssistantMessage('Do you own something like a combination lock and some box where you can lock your keys using said lock?', false);
        answer = createInput();

        while (true) {
            if (answer.isLike("yes")) {
                setVar(VARIABLE_CHASTITY_HAS_COMBINATION_LOCK, true);
                break;
            } else if (answer.isLike("no")) {
                sendVirtualAssistantMessage('You might consider getting a combination lock then');
                sendVirtualAssistantMessage('Combination locks are like 10 Euros so you should get one fairly easily');
                sendVirtualAssistantMessage('Just make sure you can change the combination');
                break;
            } else {
                sendVirtualAssistantMessage(YES_OR_NO);
                answer.loop();
            }
        }

        sendVirtualAssistantMessage("Ideally %DomHonorific% %domName% prefers that you are locked whenever you're not playing");
        sendVirtualAssistantMessage("Meaning you wear it 24/7");
        sendVirtualAssistantMessage("And that you will only be released when told so");
        sendVirtualAssistantMessage("Are you capable of wearing it 24/7? I suggest you answer truthfully for your own sake...", false);
        answer = createInput();

        while (true) {
            if (answer.isLike("yes")) {
                setVar(VARIABLE_CHASTITY_LEVEL, 30);
                setVar(VARIABLE_LONG_TERM_CHASTITY, true);
                sendVirtualAssistantMessage("This should be fun...");
                break;
            } else if (answer.isLike("no")) {
                sendVirtualAssistantMessage("Don't be ashamed, we can always work on this");

                sendVirtualAssistantMessage("Well since you can't wear it 24/7");
                sendVirtualAssistantMessage("I'm curious to find out how much you can handle");
                sendVirtualAssistantMessage("Are you willing to work towards learning how to wear it 24/7?", false);
                answer = createInput();

                while (true) {
                    if (answer.isLike("yes")) {
                        sendVirtualAssistantMessage("%Good%");
                        setVar(VARIABLE_CHASTITY_LEVEL, 1);
                        setVar(VARIABLE_CHASTITY_TRAINING, true);

                        sendVirtualAssistantMessage("Slave I don't care if you sleep with your cage");
                        sendVirtualAssistantMessage("I think you should since it would constantly remind you who you belong to");
                        sendVirtualAssistantMessage("But you won't be forced to");
                        sendVirtualAssistantMessage("When it comes to exercise I understand that performing it while caged isn't easy");
                        sendVirtualAssistantMessage("So I'm not gonna force this on you either");
                        sendVirtualAssistantMessage("But again it would make me and your Mistress happy if you did");
                        break;
                    } else if (answer.isLike("no")) {
                        setVar(VARIABLE_CHASTITY_TRAINING, false);
                        sendVirtualAssistantMessage("%EmoteSad%");
                        break;
                    } else {
                        sendVirtualAssistantMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
                break;
            } else {
                sendVirtualAssistantMessage(YES_OR_NO);
                answer.loop();
            }
        }

        sendVirtualAssistantMessage('And a final question about chastity...');
        sendVirtualAssistantMessage('Do you consider chastity a plaything?');
        sendVirtualAssistantMessage('A punishment? Both?');
        sendVirtualAssistantMessage('Or something you should try to wear full time 24/7?', false);

        answer = createInput();

        while (true) {
            if (answer.containsIgnoreCase("play")) {
                setVar(VARIABLE_CHASTITY_TOY_MODE, TOY_PLAY_MODE);
                break;
            } else if (answer.containsIgnoreCase("both")) {
                setVar(VARIABLE_CHASTITY_TOY_MODE, TOY_BOTH_MODE);
                break;
            } else if (answer.containsIgnoreCase("punishment")) {
                setVar(VARIABLE_CHASTITY_TOY_MODE, TOY_PUNISHMENT_MODE);
                break;
            } else if (answer.containsIgnoreCase("full", "time", "24/7")) {
                setVar(VARIABLE_CHASTITY_TOY_MODE, TOY_BOTH_MODE + 1);
                break;
            } else {
                sendVirtualAssistantMessage("Play, punishment, both or full time?");
                answer.loop();
            }
        }

        sendVirtualAssistantMessage("Okay then!");
    } else {
        sendVirtualAssistantMessage("%EmoteSad%");
        sendVirtualAssistantMessage('You should consider getting one for the full experience %Grin%');
    }


    sendVirtualAssistantMessage("Moving on...");
    sendVirtualAssistantMessage("I don't know whether you have any experience when it comes to ass play");
    sendVirtualAssistantMessage("Meaning fucking yourself or wearing butt plugs");
    showImage("Images/Spicy/Toys/ButtPlugs.jpg", 3);
    sendVirtualAssistantMessage("Are you experienced and capable of wearing butt plugs on a daily basis...");
    sendVirtualAssistantMessage("And fucking yourself with a huge dildo?");
    showImage("Images/Spicy/Toys/Dildo.jpg", 3);
    sendVirtualAssistantMessage("Maybe even taking a huge cock from Mistress %domName%\'s lover?");
    sendVirtualAssistantMessage("You should answer this truthfully for your own good...", false);

    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar(VARIABLE_ASS_LEVEL, 30);
            sendVirtualAssistantMessage("I hope you are ready for that then...");
            break;
        } else if (answer.isLike("no")) {
            setVar(VARIABLE_ASS_LEVEL, 1);
            setVar(VARIABLE_ASS_TRAINING, true);
            sendVirtualAssistantMessage("I guess that means %DomHonorific% %domName% will work on this with you");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Now...");
    sendVirtualAssistantMessage("I don't know whether you have any experience when it comes to blowjobs either");
    sendVirtualAssistantMessage("Meaning fucking your throat and caressing cocks with your mouth");
    sendVirtualAssistantMessage("Are you experienced and capable of holding deepthroats?");
    sendVirtualAssistantMessage("Maybe even taking a huge cock from Mistress %domName%\'s lover down your throat?");
    sendVirtualAssistantMessage("You should answer this truthfully for your own good...", false);

    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar(VARIABLE_BLOWJOB_LEVEL, 30);
            sendVirtualAssistantMessage("I hope you are ready for what's about to come then...");
            break;
        } else if (answer.isLike("no")) {
            setVar(VARIABLE_BLOWJOB_LEVEL, 1);
            setVar(VARIABLE_BLOWJOB_TRAINING, true);
            sendVirtualAssistantMessage("I guess that means %DomHonorific% %domName% will work on this with you");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Let's see...");
    sendVirtualAssistantMessage("Well I don't know how well you handle denial");
    sendVirtualAssistantMessage("And neither does your Mistress");
    sendVirtualAssistantMessage("So I need you to tell me on a scale...");
    sendVirtualAssistantMessage("How well you handle denial");
    sendVirtualAssistantMessage("Your ability to handle denial is defined by your denial level");
    sendVirtualAssistantMessage("Your denial level ranges from 1 to 15");
    sendVirtualAssistantMessage("Level 1 to 5 is for beginners");
    sendVirtualAssistantMessage("Level 6 to 8 is for the trained");
    sendVirtualAssistantMessage("Level 9 to 11 is for the advanced");
    sendVirtualAssistantMessage("Level 12 to 15 is for the high skilled");
    sendVirtualAssistantMessage("The higher your level is the less messy ejaculations you will receive");
    sendVirtualAssistantMessage("Which is good since we basically want you horny...");
    sendVirtualAssistantMessage("A horny sub is an obedient sub");
    sendVirtualAssistantMessage("Now I recommend choosing your level with care!");
    sendVirtualAssistantMessage("Once in a while your Mistress will talk about this topic with you");
    sendVirtualAssistantMessage("So what you choose now isn't final");
    sendVirtualAssistantMessage("At what level do you think you belong?", false);
    answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                answer.loop();
            } else if (result > 15) {
                sendVirtualAssistantMessage("You can't choose a number higher than 15");
                answer.loop();
            } else {
                setVar(VARIABLE_DENIAL_LEVEL, result);
                break;
            }
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    setupBlackmail();

    setupFFriendsFolder();

    sendVirtualAssistantMessage("One more thing! %Grin%");
    sendVirtualAssistantMessage("Inside the spicy image folder you'll find a folder named 'FFriends'");
    showImage("Images/Spicy/Toys/3friends.jpg", 3);
    sendVirtualAssistantMessage("\"Female Friends\" in case you were wondering");
    sendVirtualAssistantMessage("Inside it you'll find three folders named 1, 2 and 3");
    sendVirtualAssistantMessage("Inside the folders I want pictures of those contacts you just provided me with");
    sendVirtualAssistantMessage("Folder 1 is for " + getVar('blackmailName1'));
    sendVirtualAssistantMessage("Folder 2 is for " + getVar('blackmailName2'));
    sendVirtualAssistantMessage("Folder 3 is for " + getVar('blackmailName3'));
    sendVirtualAssistantMessage("Let me know when you have added pictures for " + getVar('blackmailName1') + ", " + getVar('blackmailName2') + ", and " + getVar('blackmailName3') + ".");
    answer = createInput();
    sendVirtualAssistantMessage("good, Should you ever think of quiting your service to the Mistress");
    sendVirtualAssistantMessage("This will make sure you don't %Lol%");
    sendVirtualAssistantMessage("Don't worry you'll be reminded to serve properly!");
    sendVirtualAssistantMessage("Or else...");
    sendVirtualAssistantMessage("%Grin%");
    sendVirtualAssistantMessage("Well...");
    sendVirtualAssistantMessage("As a final check I need to know what toys you have")
    sendVirtualAssistantMessage("Keep in mind that you are expected to have basic items such as pegs, rope and other common household items");
    sendVirtualAssistantMessage("Of course I recommend that you have all the different toys for the full experience");
    sendVirtualAssistantMessage("But your Mistress understands if you can't afford all of them...");
    sendVirtualAssistantMessage("However she will try to make you buy all of them at the end of the day");
    sendVirtualAssistantMessage("In case you acquire something new");
    sendVirtualAssistantMessage("You can always go to settings and I'll help you to register your new toy");

    sendVirtualAssistantMessage("Let's do a quick setup of your toys");
    sendVirtualAssistantMessage("I'll show you some images of different stuff");
    sendVirtualAssistantMessage("You will respond with yes if you have it");
    sendVirtualAssistantMessage("You can also say yes if you have something similar that will work fine");
    sendVirtualAssistantMessage("Respond with no if you have nothing similar");
    sendVirtualAssistantMessage("Oh and one more thing...");
    sendVirtualAssistantMessage("Your Mistress prefers to use the toys whenever she wants to and for whatever reason");
    sendVirtualAssistantMessage("However she can understand if you only want them to be used for playing or punishment");
    sendVirtualAssistantMessage("Do you want to leave it to your Mistress or chose yourself?", false);
    answer = createInput();

    let domChose = false;
    while (true) {
        if (answer.isLike("dom", "domme", "mistress", "her", "him")) {
            sendVirtualAssistantMessage("You're quite a willing slave %Grin%");
            domChose = true;
            break;
        } else if (answer.isLike("me", "myself", "yourself")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            break;
        } else {
            sendVirtualAssistantMessage("Do you want to leave it to your Mistress or chose yourself?");
            answer.loop();
        }
    }

    // askForToy("text",variable,"image name")
    // where "text" is turned into the image name and used if "image name" is not given. No .jpg required.

    //TODO: Create toys as objects
    askForToy("Ball Crusher");
    askForToyUsage("BallCrusher", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    BUTTPLUG_TOY.askForToyUsage(domChose);

    if (hasButtplugToy()) {
        sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different buttplugs do you have?', false);
        answer = createInput();

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else {
                    sendVirtualAssistantMessage('We are gonna setup your buttplugs now, one by one.');

                    for (let x = 0; x < result; x++) {
                        setupNewButtplug();
                    }

                    sendVirtualAssistantMessage('This should do it regarding plugs');
                    sendVirtualAssistantMessage('You can always setup new buttplugs in the settings menu');
                    break;
                }
            } else {
                sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
                answer.loop();
            }
        }
    }

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    askForToy("Dildo");
    askForToyUsage("Dildo", domChose);

    if (hasDildoToy()) {
        sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different dildos do you have?', false);
        answer = createInput();

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else {
                    sendVirtualAssistantMessage('We are gonna setup your dildos now, one by one.');

                    for (let x = 0; x < result; x++) {
                        setupNewDildo();
                    }

                    sendVirtualAssistantMessage('This should do it regarding dildos');
                    sendVirtualAssistantMessage('You can always setup new dildos in the settings menu');
                    break;
                }
            } else {
                sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
                answer.loop();
            }
        }
    }

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    //TODO: Ask whether it can vibrate
    INFLATABLE_BUTT_PLUG.askForToyAndUsage(domChose);
    INFLATABLE_BUTT_PLUG.askForVibration();

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    askForToy("Shock Collar");
    askForToyUsage("ShockCollar", domChose);
    sendVirtualAssistantMessage("Tell me what level of shock you consider to be quite painful", false)
    answer = createInput();

    while (true) {
        if (answer.isDouble()) {
            setVar("estimPainHigh", answer.getDouble());
            break;
        } else {
            sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Tell me what level of shock you consider to be somewhat painful", false)
    answer = createInput();

    while (true) {
        if (answer.isDouble()) {
            setVar("eStimPainMedium", answer.getDouble());
            break;
        } else {
            sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Tell me what level of shock you consider to be less painful and maybe even pleasant", false)
    answer = createInput();

    while (true) {
        if (answer.isDouble()) {
            setVar("eStimPainLow", answer.getDouble());
            break;
        } else {
            sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
            answer.loop();
        }
    }

		

	
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
	askForToy("EStim");
    askForToyUsage("EStim", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    setupGags(true);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    askForToy("Girl friend");
	      if(getVar("toyGirlfriend")==true)  
    		  {sendVirtualAssistantMessage("So tell me the name of your girlfriend", false);
    			setVar("girlfriendname", createInput().getAnswer());
    		  }
      
      
      
      
	   BASIC_LINGERIE.askForToyAndUsage(domChose, undefined, "LingerieSet");
     ADVANCED_LINGERIE.askForToyAndUsage(domChose, undefined, "LingerieSet2");

     PARACHUTE_TOY.askForToyAndUsage(domChose);
     showImage("Images/Spicy/Toys/LingerieSet*.jpg",3);
  
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
	showImage("Images/Spicy/Toys/HotSauce.jpg",3);
    sendVirtualAssistantMessage("Hot sauce or icy hot? Toothpaste can work too for the time being.", false);
    showPicture("Images/Spicy/Toys/HotSauce.jpg");

    answer = createInput();
    const variableName = "hotSauce";
    while (true) {
        if (answer.isLike("yes")) {
            setVar("toy" + variableName, true);
            sendVirtualAssistantMessage("%Good%");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    askForToyUsage("HotSauce", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Vibrator");
    askForToyUsage("Vibrator", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Enema Kit");
    askForToyUsage("EnemaKit", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Sounds");
    askForToyUsage("Sounds", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Humbler");
    askForToyUsage("Humbler", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    CLOTHESPINS_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage('Okay next quite similar but not the same %Grin%');
    NIPPLE_CLAMPS.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Cock Ring");
    askForToyUsage("CockRing", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    unlockImages();

    setupLimits();

    if (HUMILIATION_LIMIT.isAllowed() || VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        sendVirtualAssistantMessage("Next we need for you to setup a folder with pictures of YOU!");
        sendVirtualAssistantMessage("This is very simple actually...");
        sendVirtualAssistantMessage("Inside the Images/Spicy folder you'll find a folder named SelfHumiliation");
        sendVirtualAssistantMessage("As your first homework you have to snap at least two humiliating pictures of yourself");
        sendVirtualAssistantMessage("Put them inside the folder");
        sendVirtualAssistantMessage("We're gonna have a lot of fun with this folder! %Grin%");
        sendVirtualAssistantMessage("Inside Videos/Spicy you'll find a folder with the exact same name");
        sendVirtualAssistantMessage("This folder needs a humiliating video of you");
        sendVirtualAssistantMessage("It doesn't have to be longer than 10 seconds");
        sendVirtualAssistantMessage("All I want is your face clearly on display");
        sendVirtualAssistantMessage("While doing something you would consider to be humiliating");
        sendVirtualAssistantMessage("Hopefully the video is never viewed by others %Lol%");
        sendVirtualAssistantMessage("Let me know when you've completed submitting your first evidence of self humiliation");
        waitForDone();
        sendVirtualAssistantMessage("Oh %SubName%, those are some good ones! %Lol%");
    }

    sendVirtualAssistantMessage("Finally we need to set up your spanking implements");
    sendVirtualAssistantMessage("I expect you to have at least 3 different ones %Grin%");
    sendVirtualAssistantMessage("One of them should preferably be sort of painful");
    sendVirtualAssistantMessage("Not too stingy...");
    sendVirtualAssistantMessage("The second should be a hard implement");
    sendVirtualAssistantMessage("One that definitely leaves a mark");
    sendVirtualAssistantMessage("And the third should be a really nasty one!");
    sendVirtualAssistantMessage("One that strikes terror into your heart %Grin%");
    sendVirtualAssistantMessage("So tell me slave ");
    sendVirtualAssistantMessage("What implement do you have that fits the first description?", false);
    setVar('toySpankingImplement1', createInput().getAnswer());
    sendVirtualAssistantMessage("That's a good one...");
    sendVirtualAssistantMessage("What implement do you have that fits the second description?", false);
    setVar('toySpankingImplement2', createInput().getAnswer());
    sendVirtualAssistantMessage("This should be giving us a fun time...");
    sendVirtualAssistantMessage("What nasty implement do you have that fits the third description?", false);
    setVar('toySpankingImplement3', createInput().getAnswer());
    sendVirtualAssistantMessage("Mhmm I can't wait to use this one!");
    sendVirtualAssistantMessage("We have arrived at a very important point");
    sendVirtualAssistantMessage("You need to choose between one of 3 different personalities for your domme");
    sendVirtualAssistantMessage("Choose with care as this choice is permanent and crucial for your experience");
    sendVirtualAssistantMessage("Simply put personality 1 is easier to please and harder to annoy than personality 3");
    sendVirtualAssistantMessage("You might call personality 3 strict while personality 1 is \"nicer\"");
    sendVirtualAssistantMessage("Personality 2 is somewhere in the middle of all of this");
    sendVirtualAssistantMessage("As a final note there are differences in how they handle situations");
    sendVirtualAssistantMessage("Some minor some big...");
    sendVirtualAssistantMessage("Also note that this has nothing to do with me %Lol%");
    sendVirtualAssistantMessage("I'll be strict no matter what you choose %Grin%");
    sendVirtualAssistantMessage("I'd recommend Personality 1");
    sendVirtualAssistantMessage("You might consider personality 2 \"hard\"");
    sendVirtualAssistantMessage("And personality 3 extreme");
    sendVirtualAssistantMessage("I do NOT recommend personality 3, it is extreme...");
    sendVirtualAssistantMessage("Which personality do you choose...");
    sendVirtualAssistantMessage("1, 2 or 3?", false);
    answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const id = answer.getInt();
            if (id > 3) {
                sendVirtualAssistantMessage("You can't choose a number higher than 3. 1, 2 or 3?");
                answer.loop();
            } else {
                setVar("personalityStrictness", id - 1);
                ACTIVE_PERSONALITY_STRICTNESS = id - 1;
                break;
            }
        } else {
            sendVirtualAssistantMessage("1, 2 or 3?");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Now.. Your domme owns a shop");
    sendVirtualAssistantMessage("I will sell her products to you");
    sendVirtualAssistantMessage("Some products are just one time use or temporary");
    sendVirtualAssistantMessage("However some are permanent and they unlock new modules");
    sendVirtualAssistantMessage("Your domme would be interested in you having to save up gold to buy them");
    sendVirtualAssistantMessage("But she can also understand if you want to go ahead and unlock every module by default");
    sendVirtualAssistantMessage("This way she could torture you using her whole repertoire directly from the beginning on");
    sendVirtualAssistantMessage("So tell me slave...");
    sendVirtualAssistantMessage("Do you want to unlock all extensions now?", false);

    answer = createInput();
    while (true) {
        if (answer.isLike("yes")) {
            setVar("shopUnlockAll", true);
            sendVirtualAssistantMessage("You might regret this %Grin%");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Interesting choice...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Well...");
    sendVirtualAssistantMessage("Mistress %domName% just texted me");
    sendVirtualAssistantMessage("She wants to meet you...");
    sendVirtualAssistantMessage("Transferring session...");
    setVar(VARIABLE_FINISHED_SETUP, true);
    run("Session/FirstSession.js");

//fixme bug fix?
}
/*    function askForToy(toyName, variableName) {
        if (variableName === undefined) {
            variableName = decapitalize(toyName).replace(" ", "");
        }

        sendVirtualAssistantMessage(toyName + "?", false);
        showPicture("Images/Spicy/Toys/" + variableName + ".jpg");

        answer = createInput();

        while (true) {
            if (answer.isLike("yes")) {
                setVar("toy" + variableName, true);
                sendVirtualAssistantMessage("%Good%");
                break;
            } else if (answer.isLike("no")) {
                sendVirtualAssistantMessage("%EmoteSad%");
                break;
            } else {
                sendVirtualAssistantMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }

    function askForToyUsage(toyName, domChose, variableName) {
        if (variableName === undefined) {
            variableName = decapitalize(toyName).replace(" ", "");
        }

        if (domChose) {
            setVar("toy" + variableName + "InteractionMode", TOY_BOTH_MODE);
            return;
        }

        sendVirtualAssistantMessage("Do you want the " + toyName + " to be used for punishments, play or both?", false)

        answer = createInput();

        while (true) {
            if (answer.containsIgnoreCase("play")) {
                setVar("toy" + variableName + "InteractionMode", TOY_PLAY_MODE);
                break;
            } else if (answer.containsIgnoreCase("both")) {
                setVar("toy" + variableName + "InteractionMode", TOY_BOTH_MODE);
                break;
            } else if (answer.containsIgnoreCase("punishment")) {
                setVar("toy" + variableName + "InteractionMode", TOY_PUNISHMENT_MODE);
                break;
            } else {
                sendVirtualAssistantMessage("Play, punishment or both?");
                answer.loop();
            }
        }
        
        */
    }

function setupBlackmail() {
    sendVirtualAssistantMessage("As you should know");
    sendVirtualAssistantMessage("A slave doesn't have \"personal\" information since a slave isn't really a person..");
    sendVirtualAssistantMessage("As a token of complete surrender I need the phone number and name of 3 people");
    sendVirtualAssistantMessage("Preferably girls that don't know about your fetish");
    sendVirtualAssistantMessage("So tell me the full name of the first person", false);
    setVar('blackmailName1', createInput().getAnswer());
    sendVirtualAssistantMessage("Good, and now their phone number...", false);
    setVar('blackmailPhone1', createInput().getAnswer());
    sendVirtualAssistantMessage("Tell me the full name of the second person", false);
    setVar('blackmailName2', createInput().getAnswer());
    sendVirtualAssistantMessage("Good, and now their phone number...", false);
    setVar('blackmailPhone2', createInput().getAnswer());
    sendVirtualAssistantMessage("Tell me the full name of the third person", false);
    setVar('blackmailName3', createInput().getAnswer());
    sendVirtualAssistantMessage("Good, and now their phone number...", false);
    setVar('blackmailPhone3', createInput().getAnswer());
    sendVirtualAssistantMessage("Let's confirm");
    sendVirtualAssistantMessage("So the first person is \"" + getVar("blackmailName1") + "\" with the corresponding phone number: " + getVar('blackmailPhone1'));
    sendVirtualAssistantMessage("The second person is \"" + getVar("blackmailName2") + "\" with the corresponding phone number: " + getVar('blackmailPhone2'));
    sendVirtualAssistantMessage("The third person is \"" + getVar("blackmailName3") + "\" with the corresponding phone number: " + getVar('blackmailPhone3'));
    sendVirtualAssistantMessage("Is this information correct?", false);
    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            sendVirtualAssistantMessage("%Good%");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Let's try again then...");
            setupBlackmail();
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

function setupFFriendsFolder() {
    tryCreateFolder(getImageSubFolder('FFriends' + PATH_SEPARATOR + '1'));
    tryCreateFolder(getImageSubFolder('FFriends' + PATH_SEPARATOR + '2'));
    tryCreateFolder(getImageSubFolder('FFriends' + PATH_SEPARATOR + '3'));
}

function setupSlaveCompetitorStats(slaveName, endurance, painTolerance, painEndurance, humiliationCheck, dildoPussy, dildoAss, personality, orgasm) {
    setVar("slave" + slaveName + "Endurance", endurance);
    setVar("slave" + slaveName + "PainTolerance", painTolerance);
    setVar("slave" + slaveName + "PainEndurance", painEndurance);
    setVar("slave" + slaveName + "HumiliationCheck", humiliationCheck);
    setVar("slave" + slaveName + "DildoPussy", dildoPussy);
    setVar("slave" + slaveName + "DildoAss", dildoAss);
    setVar("slave" + slaveName + "Personality", personality);
    setVar("slave" + slaveName + "Orgasm", orgasm);
}