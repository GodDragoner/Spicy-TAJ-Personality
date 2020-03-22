{
    showImage("Images/Spicy/Intro/Loading.jpg");
    sendVirtualAssistantMessage("Welcome to SPICY %SubName%");
    sendVirtualAssistantMessage('Spicy is an online BDSM dating and communication platform');
    sendVirtualAssistantMessage('Which means we provide a way for Dommes to meet and get to know potential subs');
    sendVirtualAssistantMessage('We also provide the service of session handling and personalized features for each Domme');
    sendVirtualAssistantMessage('My name is Vivienne and I am your personal virtual assistant and will be here to guide you through your own account creation');
    sendVirtualAssistantMessage('Don\'t worry though you will get to interact with me afterwards a lot too');
    sendVirtualAssistantMessage('I will be your contact person whenever your Domme is not around or too busy to deal with you');
    sendVirtualAssistantMessage('This initial setup is very important and will take roughly 1 - 1.5 hours');
    sendVirtualAssistantMessage("Do you have about 1 - 1.5 hours?");
    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Return to me when you have sufficient time %SubName%");
            endSession();
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Great!');
    sendVirtualAssistantMessage('I will now proceed with setting up the initial data for your new account %SubName%');

    setVar(VARIABLE.SUB_PAIN_TOLERANCE, 3);
    //setVar("subPain", 3);
    setVar("subEndurance", 3);
    setVar("subStrictness", 3);
    setVar(VARIABLE.DEVOTION, 45);

    run("Settings/UpdateDevotion.js");

    setVar(VARIABLE.ORGASM_RATION, 50);
    setVar("lockUpPoints", 0);
    setVar(VARIABLE.MERITS, 500);
    setDate("firstStart");
    setVar(VARIABLE.PUNISHMENT_POINTS, 0);

    setVar(VARIABLE.MIN_WEEKLY_CHORE_TIME, 60 * 5);

    setVar("teaseModuleRatio", 60);
    setVar("slaveModuleRatio", 60);
    setVar("sissyModuleRatio", 60);
    setVar("painModuleRation", 60);

    setVar(VARIABLE.ACTIVE_END_GAME_ID, END_GAME_STANDARD_ID);

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

    sendVirtualAssistantMessage("The initial setup has been done");
    sendVirtualAssistantMessage('We will now get to setting up your account and profile');
    sendVirtualAssistantMessage('Let\'s start with your birthday');

    setCurrentSender(SENDER_ASSISTANT);
    let day = createIntegerInput('Tell me %SubName% what day of the month were you born on?', 1, 32, 'That\'s not a number. Just give me a number like 15', 'That\'s not a valid number for a day of a month.');
    let month = createIntegerInput('Now what month were you born in?', 1, 12, 'That\'s not a number. Just give me a number like 6', 'That\'s not a valid number for a month.');
    let year = createIntegerInput('And last but not least what year were you born in?', 1900, 2100, 'That\'s not a number. Just give me a number like 6', 'That\'s not a valid number for a year.');

    let teaseDate = setDate();
    teaseDate.setYear(year);
    teaseDate.setMonth(month);
    teaseDate.setDay(day);

    setCurrentSender(SENDER_TAJ);

    setDate(VARIABLE.SUB_BIRTHDAY, teaseDate);

    if(getSubAge() < 18) {
        sendVirtualAssistantMessage('Younger than 18 huh?');
        sendVirtualAssistantMessage('I will promise not to tell anyone *wink*');
        sendVirtualAssistantMessage('Just be sure to stay extra safe and don\'t do anything dangerous');
    } else {
        sendVirtualAssistantMessage('A ' + getSubAge() + ' year old new member. You might be lucky because we have very few members of that age %EmoteHappy%');
    }

    sendVirtualAssistantMessage('Now I need to know your current relationship status %SubName%');
    sendVirtualAssistantMessage('So tell me: Are you married, do you have a girlfriend or are you single?');

    answer = createInput('Single', 'Girlfriend', 'Single');

    while (true) {
        if(answer.isLike('single')) {
            setVar(VARIABLE.SUB_HAS_GIRLFRIEND, false);
            setVar(VARIABLE.SUB_IS_MARRIED, false);
            sendVirtualAssistantMessage('%EmoteSad%');
            sendVirtualAssistantMessage('However even better because now your Domme does not have any competition')
        } else if(answer.isLike('girlfriend')) {
            setVar(VARIABLE.SUB_HAS_GIRLFRIEND, true);
            sendVirtualAssistantMessage('Lucky you! %EmoteHappy%');
        } else if(answer.isLike('married')) {
            setVar(VARIABLE.SUB_IS_MARRIED, false);
            sendVirtualAssistantMessage('Oh wow a married man! %EmoteHappy%');
        } else {
            sendVirtualAssistantMessage("Single, Girlfriend or Married?");
            answer.loop();
            continue;
        }

        if(getVar(VARIABLE.SUB_HAS_GIRLFRIEND) || getVar(VARIABLE.SUB_IS_MARRIED)) {
            sendVirtualAssistantMessage('What\'s her name?');
            setVar(VARIABLE.SUB_PARTNER_NAME, createInput().getAnswer());
            sendVirtualAssistantMessage('Maybe we can get to know ' + VARIABLE.SUB_PARTNER_NAME + ' one day %Grin%');
            sendVirtualAssistantMessage('Maybe even work together %EmoteHappy%');
        }

        answer.clearOptions();
        break;
    }

    sendVirtualAssistantMessage('Next are a few things about your visual appearance');

    sendVirtualAssistantMessage('What hair color do you have?');
    setVar(VARIABLE.SUB_HAIR_COLOR, createInput().getAnswer());

    sendVirtualAssistantMessage('What eye color do you have?');
    setVar(VARIABLE.SUB_EYE_COLOR, createInput().getAnswer());

    setCurrentSender(SENDER_ASSISTANT);
    setVar(VARIABLE.SUB_HEIGHT, createIntegerInput('How tall are you? (cm)', 0, 300, 'That\'s not a number. Just give me a number like 180', 'That\'s not a realistic height in cm').getAnswer());
    setVar(VARIABLE.SUB_WEIGHT, createDoubleInput('How much do you weigh? (kg, decimal place allowed)', 0, 600, 'That\'s not a number. Just give me a number like 78.7', 'That\'s not a realistic weight in kg').getAnswer());
    sendVirtualAssistantMessage('Now we are getting to some more sensitive information %Grin%');
    setVar(VARIABLE.SUB_COCK_LENGTH, createDoubleInput('How long is your cock erect? (cm, decimal place allowed)', 0, 40, 'That\'s not a number. Just give me a number like 19.7', 'That\'s not a realistic cock length in cm').getAnswer());

    if(getVar(VARIABLE.SUB_COCK_LENGTH) > 20) {
        sendVirtualAssistantMessage('That is quite a respectable length %SubName%');
    } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 17) {
        sendVirtualAssistantMessage('I guess it\'s a fine length');
    } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 15) {
        sendVirtualAssistantMessage('Quite close to being able to please a woman but not quite there %Grin%');
    } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 12) {
        sendVirtualAssistantMessage('Too small for being called a cock %Grin%');
    } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 8) {
        sendVirtualAssistantMessage('Wow that is really small. Probably more dicklet than a real dick %Grin%');
    } else {
        sendVirtualAssistantMessage('Pretty pathetic if you ask me. You should call it clit instead %Lol%');
    }

    setVar(VARIABLE.SUB_SOFT_COCK_LENGTH, createDoubleInput('How long is your cock soft? (cm, decimal place allowed)', 0, 20, 'That\'s not a number. Just give me a number like 5.6', 'That\'s not a realistic soft cock length in cm').getAnswer());

    if(getVar(VARIABLE.SUB_COCK_LENGTH) - getVar(VARIABLE.SOFT_COCK_LENGTH) > 10) {
        sendVirtualAssistantMessage('Seems like you are a real grower %SubName%');
    } else if(getVar(VARIABLE.SUB_COCK_LENGTH) - getVar(VARIABLE.SOFT_COCK_LENGTH) < 5) {
        sendVirtualAssistantMessage('Flesh penis huh?');

        if(getVar(VARIABLE.SUB_COCK_LENGTH) > 17) {
            sendVirtualAssistantMessage('A decent one to be sure %Grin%');
        } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 12) {
            sendVirtualAssistantMessage('You would\'ve been better off being a grower %Lol%');
        } else if(getVar(VARIABLE.SUB_COCK_LENGTH) > 8) {
            sendVirtualAssistantMessage('So small already and can\'t even grow that much?');
        } else {
            sendVirtualAssistantMessage('A true tiny little clit %Lol%');
        }
    } else {
        sendVirtualAssistantMessage('Seems like you are a partial grower %Grin%');
    }

    setCurrentSender(SENDER_TAJ);

    sendVirtualAssistantMessage('Let\'s get to some non visual important stuff');

    setupLimits();

    if (!HUMILIATION_LIMIT.isHardLimit() || !VERBAL_HUMILIATION_LIMIT.isHardLimit()) {
        sendVirtualAssistantMessage("Next we need for you to setup a folder with pictures of YOU!");
        sendVirtualAssistantMessage("This is very simple actually...");
        sendVirtualAssistantMessage("Inside the Images/Spicy folder you'll find a folder named SelfHumiliation");
        sendVirtualAssistantMessage("To register yourself you have to snap at least two humiliating pictures of yourself");
        sendVirtualAssistantMessage("Put them inside the folder");
        sendVirtualAssistantMessage("We're gonna have a lot of fun with this folder! %Grin%");
        sendVirtualAssistantMessage("Inside Videos/Spicy you'll find a folder with the exact same name");
        sendVirtualAssistantMessage("This folder needs a humiliating video of you");
        sendVirtualAssistantMessage("It doesn't have to be longer than 10 seconds");
        sendVirtualAssistantMessage("All I want is your face clearly on display");
        sendVirtualAssistantMessage("While doing something you would consider to be humiliating");
        sendVirtualAssistantMessage("Hopefully the video is never gonna be viewed by anyone else %Lol%");
        sendVirtualAssistantMessage("Let me know when you've completed submitting your first evidence of self humiliation");
        waitForDone();
        sendVirtualAssistantMessage("Oh %SubName%, those are some good ones! %Lol%");
    }

    sendVirtualAssistantMessage('Now...');
    setupBlackmail();

    setupFFriendsFolder();

    sendVirtualAssistantMessage("One more thing! %Grin%");
    sendVirtualAssistantMessage("Inside the spicy image folder you'll find a folder named 'FFriends'");
    sendVirtualAssistantMessage("\"Female Friends\" in case you were wondering");
    sendVirtualAssistantMessage("Inside it you'll find three folders named 1, 2 and 3");
    sendVirtualAssistantMessage("Inside the folders I want pictures of those contacts you just provided me with");
    sendVirtualAssistantMessage("Folder 1 is for " + getVar('blackmailName1'));
    sendVirtualAssistantMessage("Folder 2 is for " + getVar('blackmailName2'));
    sendVirtualAssistantMessage("Folder 3 is for " + getVar('blackmailName3'));
    sendVirtualAssistantMessage("Let me know when you have added pictures for " + getVar('blackmailName1') + ", " + getVar('blackmailName2') + ", and " + getVar('blackmailName3') + ".");
    waitForDoneVirtualAssistant(999999);
    sendVirtualAssistantMessage("Good, Should you ever think of quiting your service to the %DomHonorific%");
    sendVirtualAssistantMessage("This will make sure you don't %Lol%");
    sendVirtualAssistantMessage("Don't worry you'll be reminded to serve properly!");
    sendVirtualAssistantMessage("Or else...");
    sendVirtualAssistantMessage("Well...");
    sendVirtualAssistantMessage("%Grin%");

    sendVirtualAssistantMessage('That should be it regarding your profile information');
    sendVirtualAssistantMessage('Now let\'s get to the fun part');
    sendVirtualAssistantMessage('Finding a fitting Domme to message');
    sendVirtualAssistantMessage('So here is how this works');
    sendVirtualAssistantMessage('You can like only one Domme at a time');
    sendVirtualAssistantMessage('You do not get a chance to message her unless she starts messaging you after she has received your like');
    sendVirtualAssistantMessage('Dommes can chat with multiple subs at once and get to choose freely');
    sendVirtualAssistantMessage('Depending on the domme she can have one or multiple subs at a time');

    sendVirtualAssistantMessage('Now you gotta tell me what type of domme you are looking for');
    sendVirtualAssistantMessage('There are 3 character types of dommes available to you as a pre selection.');
    sendVirtualAssistantMessage('Firstly there are kind and easier to please Dommes');
    sendVirtualAssistantMessage('The second type is a fairly strict but still fair Domme');
    sendVirtualAssistantMessage('Last but not least there are very strict and demanding Dommes');
    sendVirtualAssistantMessage("Note that this has nothing to do with me %Lol%");
    sendVirtualAssistantMessage("I'll be strict no matter what you choose %Grin%");
    sendVirtualAssistantMessage("I would personally not go with a very strict Domme but maybe you are in need of heavy disciple");
    sendVirtualAssistantMessage('It\'s for you to choose so what\'s it gonna be?');
    answer = createInput('Kind', 'Fairly strict', 'Very strict');

    while (true) {
        let id = 0;
        if(answer.isLike('1', 'kind', 'one', 'first')) {
            id = 0;
            sendVirtualAssistantMessage('Looks like we have us a softy right here? %Grin%');
        } else if(answer.isLike('2', 'Fairly strict', 'two', 'second')) {
            id = 1;
            sendVirtualAssistantMessage('The fair middle is always a good choice %Grin%');
        } else if(answer.isLike('3', 'very strict', 'three', 'third')) {
            id = 2;
            sendVirtualAssistantMessage('Going all in are we? Let\'s see if you regret your choice');
        } else {
            sendVirtualAssistantMessage("1, 2 or 3?");
            answer.loop();
            continue;
        }

        answer.clearOptions();

        setVar(VARIABLE.DOMME_STRICTNESS, id);
        ACTIVE_PERSONALITY_STRICTNES = id;
        break;
    }

    sendVirtualAssistantMessage('Now there is another thing you need to choose before we can look for a Domme');
    sendVirtualAssistantMessage('We have Dommes that want a full time sub and Dommes that are looking for something part time');
    sendVirtualAssistantMessage("Full time means that you are expected to visit often as well as complete chores and basically spend your life mostly under the strict control of your Domme");
    sendVirtualAssistantMessage('This doesn\'t mean that you are in a 24/7 relationship but there will be duties you have to report to and full time Dommes will usually punish you if you keep the waiting')
    sendVirtualAssistantMessage("Part time means that you and your Domme are only looking for a fun session and apart from that there are no responsibilities forced upon you");

    sendVirtualAssistantMessage("So are you looking for something full time or something part time?", false);
    answer = createInput('full time');

    while (true) {
        if (answer.isLike("part time", "parttime", "part")) {
            answer.clearOptions();
            setVar(VARIABLE.SLAVE_TYPE, 0);
            sendVirtualAssistantMessage('Part time is more than enough time for your Domme to teach you about discipline %Grin%');
            break;
        } else if (answer.isLike("full time", "fulltime", "full")) {
            answer.clearOptions();
            setVar(VARIABLE.SLAVE_TYPE, 1);
            sendVirtualAssistantMessage('Someone looking for that extra bit of discipline %EmoteHappy%');
            sendVirtualAssistantMessage('I like that %Grin%');
            break;
        } else {
            sendVirtualAssistantMessage("Full time or part time slave?");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now that you\'ve made your selection I am gonna start a search for a fitting Domme');
    sendVirtualAssistantMessage('Give me a second %SubName%...', 7);

    sendVirtualAssistantMessage('Good news %SubName% %Grin%');
    sendVirtualAssistantMessage('I found 2 fitting Dommes for you');
    sendVirtualAssistantMessage('So you are gonna have to choose');
    sendVirtualAssistantMessage('I am gonna present you with both profiles and then you get to choose');
    sendVirtualAssistantMessage('I am not gonna tell you there name yet');
    sendVirtualAssistantMessage('So here we go:');

    let kindDommeHonorific = getRandomHonorific();

    sendVirtualAssistantMessage('Firstly we have ' + kindDommeHonorific + ' ???');
    sendVirtualAssistantMessage('Her profile description reads:');
    sendVirtualAssistantMessage('"You won\'t be forced to do everything I like but you won\'t be able to toy with me either.');
    sendVirtualAssistantMessage('Don\'t expect me to go easy on you. I am not here to please you but instead you are here to please me.');
    sendVirtualAssistantMessage('However if you are behaving properly under my regime you will get the opportunity to have a say in a few things %EmoteHappy%"');

    let enforcingDommeHonorific = "";

    //Find different random title
    do {
        enforcingDommeHonorific = getRandomHonorific();
    } while(enforcingDommeHonorific == kindDommeHonorific);

    sendVirtualAssistantMessage('Now the second Domme I found is ' + enforcingDommeHonorific + ' ???');
    sendVirtualAssistantMessage('Her profile description says:');
    sendVirtualAssistantMessage('"You will learn to respect me quite quickly and if not I will make you learn it.');
    sendVirtualAssistantMessage('I do not take a no lightly so be careful what you are gonna wish for before you are gonna go back on it.');
    sendVirtualAssistantMessage('You will be my bitch and you will feel powerless when with me. I don\'t need a reason to punish you.');
    sendVirtualAssistantMessage('I will get you to bow to my will no matter if you like it or not."');

    sendVirtualAssistantMessage('Both Dommes have stated that they are basically into anything that is not connected to severe dangers such as Blood Play/Cutting etc.');
    sendVirtualAssistantMessage('So now you are gonna have to make the final tough decision for today %SubName%');
    sendVirtualAssistantMessage('Tell me: What Domme do you want to like and maybe get to message you back?');

    answer = createInput("First", "Second");

    while (true) {
        if (answer.isLike("first", kindDommeHonorific)) {
            answer.clearOptions();
            setVar(VARIABLE.DOMME_PERSONALITY_TYPE, KIND_PERSONALITY_ID);
            sendVirtualAssistantMessage('Good choice. She looks cruel but fair %Grin%');
            break;
        } else if (answer.isLike("second", enforcingDommeHonorific)) {
            answer.clearOptions();
            setVar(VARIABLE.DOMME_PERSONALITY_TYPE, ENFORCING_PERSONALITY_ID);
            sendVirtualAssistantMessage('Would\'ve gone with her too. She seems so confident and powerful %EmoteHappy%');
            break;
        } else {
            sendVirtualAssistantMessage("The first or the secommd Domme %SubName%?");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('I guess now that you are almost ready to go it\'s time to forget about your real name');
    sendVirtualAssistantMessage('From now on you\'ll never see me or your Domme call you %SubName% again');
    sendVirtualAssistantMessage('You will always be our slave, slut and pet from now on');
    sendVirtualAssistantMessage('You better get used to it %Grin%');

    sendVirtualAssistantMessage('Now while we are waiting for a possible response let\'s deal with your toy collection');

    /*sendVirtualAssistantMessage("My name is Vivienne");
    sendVirtualAssistantMessage("I am %DomHonorific% %domName%\'s virtual assistant");
    sendVirtualAssistantMessage("You are here because you sent a request to become the property of %DomHonorific% %domName%");
    sendVirtualAssistantMessage("As you probably read before sending the application there is a 6 month trial period");
    sendVirtualAssistantMessage("The trial period is designed to see if you\'re fit to serve...");
    sendVirtualAssistantMessage("Many men and women around the world claim that they want to be slaves");
    sendVirtualAssistantMessage("Most of these people don\'t truly understand what it means to serve");
    sendVirtualAssistantMessage("Tease-AI was designed to simulate the realities of being a slave");
    sendVirtualAssistantMessage("Through this program you will meet your perhaps future %DomHonorific%");
    sendVirtualAssistantMessage("You will be played with, tested and trained");
    sendVirtualAssistantMessage("You will also meet other applicants both female and male");
    sendVirtualAssistantMessage("And you will meet the %DomHonorific%\'s friends");
    sendVirtualAssistantMessage("At the end of the trial there will be a quite extensive report on you");
    sendVirtualAssistantMessage("As well as a final exam");
    sendVirtualAssistantMessage("Pass both and you will be accepted as the property of %DomHonorific% %domName%");
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
            setVar(VARIABLE.SLAVE_TYPE, 0);
            break;
        } else if (answer.isLike("full time", "fulltime", "full")) {
            setVar(VARIABLE.SLAVE_TYPE, 1);
            break;
        } else {
            sendVirtualAssistantMessage("Full time or part time slave?");
            answer.loop();
        }
    }
    lockImages();
    sendVirtualAssistantMessage("%Good%");*/

    sendVirtualAssistantMessage('We need to setup your toys so your future Domme knows what you have and what you still might need to get %EmoteHappy%');
    /*sendVirtualAssistantMessage("%DomHonorific% %domName% would prefer it if you are able to handle wearing a chastity device at all times");
    //showImage("Images/Spicy/Toys/MetalChastity.jpg", 4);
    sendVirtualAssistantMessage("But she also understands that it takes practice to learn");*/

    if (sendYesOrNoQuestion("Do you own a chastity device?", SENDER_ASSISTANT)) {
        setVar(VARIABLE.HAS_CHASTITY, true);
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
                setVar(VARIABLE.CHASTITY_HAS_COMBINATION_LOCK, true);
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

        sendVirtualAssistantMessage('Now a final question about chastity...');
        sendVirtualAssistantMessage('Do you consider chastity a plaything?');
        sendVirtualAssistantMessage('A punishment? Both?');
        sendVirtualAssistantMessage('Or something you should try to wear full time 24/7?', false);

        answer = createInput();

        while (true) {
            if (answer.containsIgnoreCase("play")) {
                setVar(VARIABLE.CHASTITY_TOY_MODE, TOY_PLAY_MODE);
                break;
            } else if (answer.containsIgnoreCase("both")) {
                setVar(VARIABLE.CHASTITY_TOY_MODE, TOY_BOTH_MODE);
                break;
            } else if (answer.containsIgnoreCase("punishment")) {
                setVar(VARIABLE.CHASTITY_TOY_MODE, TOY_PUNISHMENT_MODE);
                break;
            } else if (answer.containsIgnoreCase("full", "time", "24/7")) {
                setVar(VARIABLE.CHASTITY_TOY_MODE, TOY_BOTH_MODE + 1);
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

    sendVirtualAssistantMessage("As a final check I need to know what toys you have");
    sendVirtualAssistantMessage("Keep in mind that you are expected to have basic items such as pegs, rope and other common household items");
    sendVirtualAssistantMessage("Of course I recommend that you have all the different toys for the full experience");
    sendVirtualAssistantMessage("But the Dommes understand if you can't afford all of them right now...");
    sendVirtualAssistantMessage("However most of them will try to make you buy all of them at the end of the day");
    sendVirtualAssistantMessage("In case you acquire something new");
    sendVirtualAssistantMessage("You can always go to settings and I'll help you to register your new toy");

    setupToys(false);

    /*sendVirtualAssistantMessage("Coming up is another very important decision");
    sendVirtualAssistantMessage("You need to choose whether your domme should be nice and kind or rather enforcing");
    sendVirtualAssistantMessage("Enforcing means she will not give you many possibilities to speak up and will expect more from you by default");
    sendVirtualAssistantMessage("Nice and kind means she will give you some say in when it comes to a few things");
    sendVirtualAssistantMessage("Note this does not affect the strictness of her");
    sendVirtualAssistantMessage("The enforcing character for example expects that all non hard limits are okay at any time");
    sendVirtualAssistantMessage("The kind character will ask you once about each limit when she feels like it and will allow you to postpone it");
    sendVirtualAssistantMessage("Which personality do you choose...");
    sendVirtualAssistantMessage("Kind or enforcing?", false);
    answer = createInput();

    while (true) {
        if (answer.isLike("kind", "nice")) {
            setVar("personalityType", KIND_PERSONALITY_ID);
            sendVirtualAssistantMessage("Fair choice %Grin%");
            break;
        } else if (answer.isLike("enforcing", "brutal", "strict")) {
            setVar("personalityType", ENFORCING_PERSONALITY_ID);
            sendVirtualAssistantMessage("This is gonna be good %Grin%");
            break;
        } else {
            sendVirtualAssistantMessage("Enforcing or nice?");
            answer.loop();
        }
    }*/

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

    /*sendVirtualAssistantMessage("Now... Your domme owns a shop");
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
    }*/

    sendVirtualAssistantMessage('Oh %SlaveName%');
    sendVirtualAssistantMessage('I just got the notification that %DomHonorific% %domName% accepted and is ready to talk to you now');
    sendVirtualAssistantMessage("She wants to meet you...");
    sendVirtualAssistantMessage('So we\'ll see us again soon enough but for now I hope you\'ve found a Domme %Grin%');
    sendVirtualAssistantMessage("Transferring session...");
    setVar(VARIABLE.FINISHED_SETUP, true);
    run("Session/FirstSession.js");
}

function setupBlackmail() {
    sendVirtualAssistantMessage("As you should know");
    sendVirtualAssistantMessage("A slave doesn't have \"private\" information since a slave doesn\'t keep anything private from his Domme...");
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
