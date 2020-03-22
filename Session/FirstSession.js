{
    sendMessage("Hello %SubName%");
    sendMessage("That was the last time I used your real name");
    setDate(VARIABLE.LAST_TEASE_SESSION);
    sendMessage("From now on I will use whatever pet name I see fit");
    sendMessage("Whether that is slut, pet or slave");
    sendMessage("Because you are a slave");
    sendMessage("My slut, bitch, plaything, chastity boy");
    sendMessage("And a lot of other lovable terms %Grin%");
    sendMessage("The point is you're mine!");
    sendMessage("Let that sink in for a moment...", 10);
    sendMessage("Now what is more important for you to understand is that the thing residing in your pants");
    sendMessage("Is not gonne be yours anymore", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro1.mp3", true);
    sendMessage("It's mine!", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro2.mp3", true);
    sendMessage("You serve under my rules and terms", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro3.mp3", true);
    sendMessage("Fail to do so properly", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro4.mp3", true);
    sendMessage("...and you will be sold off.", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro5.mp3", true);
    sendMessage("On another note", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro6.mp3", true);
    sendMessage("If you thought even for one second that my world is centered around you", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro7.mp3", true);
    sendMessage("You are dearly mistaken", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro8.mp3", true);
    sendMessage("This isn't about you", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro9.mp3", true);
    sendMessage("Not even a little bit", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro10.mp3", true);
    sendMessage("I am the center", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro11.mp3", true);
    sendMessage("I am your focus", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro12.mp3", true);
    sendMessage("Your job is to please me", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro13.mp3", true);
    sendMessage("Never forget that...", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro14.mp3", true);
    sendMessage("Well %SlaveName%", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro15.mp3", true);
    sendMessage("If you thought that you are my sole focus", 0);
    playAudio("Audio/Spicy/Starts/Intro/intro16.mp3", true);
    sendMessage("You are once again dearly mistaken");
    sendMessage("I should be YOUR sole focus instead");
    sendMessage("So if you want me to focus on you you better start worshipping me the way you should");

    sendMessage('Now we got a few things to clarify and talk about before we can start this agreement of ours');

    /*lockImages();
    sendMessage("This is " + SLAVE_F1_NAME, 0);
    showPicture("Images/Spicy/Slaves/F1 Alice Brookes/1/1.jpg", 5)
    unlockImages();
    sendMessage("Oh my can she handle the vibrator *Smiles*");

    lockImages();
    sendMessage("This is " + SLAVE_F2_NAME, 0);
    showPicture("Images/Spicy/Slaves/F2 Brook Amelia Wright/1/1.jpg", 5)
    unlockImages();
    sendMessage("She's nice and well behaved");
    sendMessage("Be like her");

    lockImages();
    sendMessage("This is " + SLAVE_F3_NAME, 0);
    showPicture("Images/Spicy/Slaves/F3 Rosie Danvers/1/1.jpg", 5)
    unlockImages();
    sendMessage("Oh my gosh");
    sendMessage("I have done many nasty things to her and she just takes it all %Grin%");

    lockImages();
    sendMessage("This is " + SLAVE_M1_NAME, 0);
    showPicture("Images/Spicy/Slaves/M1 Will Havoc/1.jpg", 5)
    unlockImages();
    sendMessage("He is a fine student");
    sendMessage("Smart, intelligent and he knows his place");
    sendMessage("Learn from his example");

    lockImages();
    sendMessage("This is " + SLAVE_M2_NAME, 0);
    showPicture("Images/Spicy/Slaves/M2 Marcelo/1.jpg", 5)
    unlockImages();
    sendMessage("A little disobedient");
    sendMessage("But a long period in chastity fixed that issue %Grin%");

    lockImages();
    sendMessage("This is " + SLAVE_M3_NAME, 0);
    showPicture("Images/Spicy/Slaves/M3 Lance Hart/1.jpg", 5)
    unlockImages();
    sendMessage("A baad baad slave");
    sendMessage("As a punishment");
    sendMessage("I had him walk through the city dressed in fine lingerie");
    sendMessage("%Lol%");

    sendMessage("He didn't handle it well...");*/

    if(hasChastityCage()) {
        sendMessage('Once I am your full time keyholder I would want you to ideally be locked whenever I haven\'t give you the explicit permission to unlock %MyYour% cock');
        sendMessage("Meaning you wear a chastity cage 24/7");
        sendMessage("And that you will only be released when allowed so by me");
        sendMessage("Are you capable of wearing it 24/7? I suggest you answer truthfully for your own sake...", false);

        let answer = createInput();

        while (true) {
            if (answer.isLike("yes")) {
                setVar(VARIABLE.CHASTITY_LEVEL, 30);
                sendMessage("This should be fun...");
                break;
            } else if (answer.isLike("no")) {
                sendMessage("Don't be ashamed, we can always work on this");

                sendMessage("Well since you can't wear it 24/7 yet");
                sendMessage("I'm curious to find out how much you can handle");
                sendMessage("Are you willing to work towards learning how to wear it 24/7?", false);
                answer = createInput();

                while (true) {
                    if (answer.isLike("yes")) {
                        sendMessage("%Good%");
                        setVar(VARIABLE.CHASTITY_LEVEL, 1);
                        setVar(VARIABLE.CHASTITY_TRAINING, true);

                        sendMessage("Slave I don't care if you sleep with your cage");
                        sendMessage("I think you should since it would constantly remind you who you belong to");
                        sendMessage("But you won't be forced to");
                        sendMessage("When it comes to exercise I understand that performing it while caged isn't easy");
                        sendMessage("So I'm not gonna force this on you either");
                        sendMessage("But again it would please me if you did");
                        break;
                    } else if (answer.isLike("no")) {
                        setVar(VARIABLE.CHASTITY_TRAINING, false);
                        sendMessage("%EmoteSad%");

                        if(isEnforcingPersonality()) {
                            sendMessage('This is the first time you said no to me');
                            sendMessage('And I think my profile description was pretty damn clear about this');
                            sendMessage('So don\'t you expect me to accept it this easily');
                            sendMessage('You\'ll see how this will turn out %Grin%');
                            changeMeritMedium(true);
                        }
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }

        sendMessage("Moving on...");
    }

    //Hard limit check because allowed will not be true here yet because we didn't get the chance to address it yet
    if(!ANAL_LIMIT.isHardLimit()) {
        sendMessage("I don't know whether you have any experience when it comes to ass play");
        sendMessage("Meaning fucking yourself or wearing butt plugs");
        showImage("Images/Spicy/Toys/ButtPlugs.jpg", 3);
        sendMessage("Are you experienced and capable of wearing butt plugs on a daily basis...");
        sendMessage("And fucking yourself with a huge dildo?");
        showImage("Images/Spicy/Toys/Dildo.jpg", 3);

        if(!CUCKOLD_LIMIT.isHardLimit()) {
            sendMessage("Maybe even taking a huge cock from a lover of mine?");
        }

        sendMessage("You should answer this truthfully for your own good...", false);

        answer = createInput();

        while (true) {
            if (answer.isLike("yes")) {
                setVar(VARIABLE.ASS_LEVEL, 30);
                sendMessage("I hope you are ready for what I have planned for you then...");
                break;
            } else if (answer.isLike("no")) {
                setVar(VARIABLE.ASS_LEVEL, 1);
                setVar(VARIABLE.ASS_TRAINING, true);
                sendMessage("I guess that means we will work on this %Grin%");
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }

    sendVirtualAssistantMessage("Now...");
    sendVirtualAssistantMessage("I don't know whether you have any experience when it comes to blowjobs either");
    sendVirtualAssistantMessage("Meaning fucking your throat and caressing cocks with your mouth");
    sendVirtualAssistantMessage("Are you experienced and capable of holding deepthroats?");
    sendVirtualAssistantMessage("Maybe even taking a huge cock from %DomHonorific% %domName%\'s lover down your throat?");
    sendVirtualAssistantMessage("You should answer this truthfully for your own good...", false);

    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar(VARIABLE.BLOWJOB_LEVEL, 30);
            sendVirtualAssistantMessage("I hope you are ready for what's about to come then...");
            break;
        } else if (answer.isLike("no")) {
            setVar(VARIABLE.BLOWJOB_LEVEL, 1);
            setVar(VARIABLE.BLOWJOB_TRAINING, true);
            sendVirtualAssistantMessage("I guess that means %DomHonorific% %domName% will work on this with you");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Let's see...");
    sendVirtualAssistantMessage("Well I don't know how well you handle denial");
    sendVirtualAssistantMessage("And neither does your %DomHonorific%");
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
    sendVirtualAssistantMessage("Once in a while your %DomHonorific% will talk about this topic with you");
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
                setVar(VARIABLE.DENIAL_LEVEL, result);
                break;
            }
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    if (isFullTime()) {
        sendMessage("You've signed up for full time");
        sendMessage("Normally this would mean that I expect you to launch Tease-AI at least 6 times per week");
        sendMessage("But I would understand it if your life doesn't allow for that");
        sendMessage("So %SlaveName% ");
        let answer = sendInput("How many times a week do you think I should expect you to use Tease-AI?");

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else if (result > 7) {
                    sendMessage("You chose a number too big, you can't visit me more than 7 times a week");
                    answer.loop();
                } else {
                    setVar(VARIABLE.MIN_WEEKLY_VISITS, result);
                    break;
                }
            } else {
                sendMessage("Slave...");
                sendMessage("I asked you to just give me a simple number..");
                sendMessage("You can't write 7 days, 4 times or similar");
                sendMessage("Just give me a number plain and simple like");
                sendMessage("5");
                sendMessage("7");
                sendMessage("2...");
                answer.loop();
            }
        }

        sendMessage("Perfect " + getVar(VARIABLE.MIN_WEEKLY_VISITS) + " times a week it is.");
        sendMessage("Next I need to know how many minutes per week you should do chores");
        sendMessage("Right now the amount of minutes for chores is " + getVar(VARIABLE.MIN_WEEKLY_CHORE_TIME));
        sendMessage("Which I think is fair all considered");
        sendMessage("Since this number will likely cover your cleaning duty");
        sendMessage("All chores beyond those I consider to be voluntary");
        sendMessage("Either because you want to please me or perhaps earn a bit of gold");

        answer = sendInput("Do you wish to change this?");
        while (true) {
            if (answer.isLike("yes")) {
                sendMessage("Okay then...");
                answer = sendInput("So many minutes should you at the very minimum do chores each week?");

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result < 60*2) {
                            sendMessage("Nothing less than 120 minutes %SlaveName%!");
                            answer.loop();
                        } else {
                            sendMessage("%Good%");
                            setVar(VARIABLE.MIN_WEEKLY_CHORE_TIME, result);
                            break;
                        }
                    } else {
                        sendMessage("All I asked you to do was input a simple number...");
                        sendMessage("Like 120");
                        sendMessage("or 150");
                        sendMessage("or 400...");
                        answer.loop();
                    }
                }

                break;
            } else if (answer.isLike("no")) {
                sendMessage("Very well");
                break;
            } else {
                sendMessage(YES_OR_NO);
                answer.loop();
            }
        }
    }

    sendMessage("%SlaveName%");
    sendMessage("I consider myself to be a fair %DomHonorific%");
    sendMessage("But for me to be a fair %DomHonorific%");
    sendMessage("I require honesty from you");
    sendMessage("And you need to be honest with yourself");
    sendMessage("I've met many men who in a horny moment thought they could handle everything");
    sendMessage("Whether that was 2 months in chastity");
    sendMessage("Or 200 lashes with my cane");
    sendMessage("But as soon as they tried it for real they all chickened out...");
    sendMessage("So keep that in mind");
    sendMessage("Communicate with me, tell me the truth and this will be a worthwhile experience for the both of us");
    sendMessage("Overestimate yourself and you might as well quit right here and now..");
    sendMessage("%SlaveName%");
    sendMessage("I love being in control");
    sendMessage("Especially of your orgasms");
    sendMessage("But I also know that not everyone handles denial too well");
    sendMessage("So I need to know your hard limit for denial in days");
    answer = sendInput("If you don't have one you can just write 99999");

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendMessage("You have to choose a number higher than 0...");
                answer.loop();
            } else if (result <= 5) {
                sendMessage("So we have a beginner when it comes to denial %Grin%");
                setVar(VARIABLE.DENIAL_LIMIT, result);
                break;
            } else if (result <= 14) {
                sendMessage("Not a complete beginner... Good! %Grin%");
                setVar(VARIABLE.DENIAL_LIMIT, result);
                break;
            } else {
                sendMessage("Wow... This sounds promising %Grin%");
                setVar(VARIABLE.DENIAL_LIMIT, result);
                break;
            }
        } else {
            sendMessage("Just give me a number like 3, 10 or 70...");
            answer.loop();
        }
    }

    if (getVar(VARIABLE.HAS_CHASTITY)) {
        sendMessage("There is another thing I love");
        sendMessage("And that is locking your %Cock% up");
        sendMessage("Knowing that you have a %ChastityCage% I need to know the maximum amount of days I can lock you up in a row");
        answer = sendInput("If you don't have a maximum you can just type 99999");

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("You have to choose a number larger than 0...");
                    answer.loop();
                } else if (result <= 5) {
                    sendMessage("Looks like we have a chastity beginner. Don't worry we can work on that  %Grin%");
                    setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                    break;
                } else if (result <= 14) {
                    sendMessage("At least you are somewhat trained... Good! %Grin%");
                    setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                    break;
                } else {
                    sendMessage("Maybe I found a new chastity slut in you! %Grin%");
                    setVar(VARIABLE.LOCKED_UP_LIMIT, result);
                    break;
                }
            } else {
                sendMessage("Just give me a number like 3, 10 or 70...");
                answer.loop();
            }
        }

        sendMessage("No matter your limit. I will break it %SlaveName%");
        sendMessage("We're gonna have a lot of fun! %Lol%");
    }

    sendMessage('So...');
    sendMessage('During our sessions you will be told to stroke quite frequently');
    sendMessage('Right now letting you stroke as a break is up to me though');
    sendMessage('If you want to do it differently though you can tell me on a scale of 1 to 5 how many times you want to have a stroking break during a session');
    sendMessage('So tell me %SlaveName%');

    answer = sendInput('Should it be up to me and my mood? Otherwise just type the amount of you want to choose yourself');

    while (true) {
        if(answer.isLike('you', 'mood')) {
            sendMessage('I knew you would let me choose');
            sendMessage('That is the only proper way %Grin%');
            setVar(VARIABLE.STROKE_MODULE_PAUSE_FREQUENCY, 0);
            break;
        } else if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendMessage("You have to choose a number larger than 0...");
                answer.loop();
            } else if (result <= 5) {
                sendMessage("So be it...");
                setVar(VARIABLE.STROKE_MODULE_PAUSE_FREQUENCY, result);
                break;
            } else {
                sendMessage('You can\'t give me a number greater than 5...');
                answer.loop();
            }
        } else {
            sendMessage("Just give me a number like 3, 10 or 70...");
            answer.loop();
        }
    }


    sendMessage("Next");

    sendMessage('There is some personal information that I want to know');
    sendMessage('Just to get to know you better %Grin%');

    sendMessage('For example your birthday');
    sendMessage();



    sendMessage("I think it's important that we start out with a clean history");
    sendMessage("I don't know when you cleaned your pipes the last time");
    sendMessage("So yes");
    sendMessage("You are gonna orgasm today", 5);

    setVar(VARIABLE.ORGASM_POINTS, 0);
    registerOrgasm();

    sendMessage("But...");
    sendMessage("You've haven't earned my attention for that");
    sendMessage("So I'm gonna end our communication in a moment");
    sendMessage("When I do that");
    sendMessage("I want you to find some porn or whatever");
    sendMessage("And I want you to jerk yourself off");
    sendMessage("But!");
    sendMessage("I have 1 final thing I need to ask..");
    sendMessage("It's regarding your orgasms...");
    sendMessage("Now you'll get a choice...");
    sendMessage("You can feel quite lucky because you don't get many choices %Lol%");
    sendMessage("I would prefer it if your orgasms were an extremely rare event...");
    sendMessage("But I also understand that you might not feel that way...");
    sendMessage("So now you have a choice");
    sendMessage("Do you want your orgasms to be...");
    answer = sendInput("Very rare, rare, semi rare, somewhat rare or just leave it completely up to me?");

    while (true) {
        if (answer.containsIgnoreCase("very rare")) {
            sendMessage("Sounds fine to me");
            setVar(VARIABLE.ORGASM_FREQUENCY, ORGASM_FREQUENCY_VERY_RARE);
            break;
        } else if (answer.containsIgnoreCase("semi rare")) {
            sendMessage("%EmoteSad%");
            setVar(VARIABLE.ORGASM_FREQUENCY, ORGASM_FREQUENCY_SEMI_RARE);
            break;
        } else if (answer.containsIgnoreCase("somewhat rare")) {
            sendMessage("%EmoteSad%");
            setVar(VARIABLE.ORGASM_FREQUENCY, ORGASM_FREQUENCY_SOMEWHAT_RARE);
            break;
        } else if (answer.containsIgnoreCase("rare")) {
            sendMessage("At least something...");
            setVar(VARIABLE.ORGASM_FREQUENCY, ORGASM_FREQUENCY_RARE);
            break;
        } else if (answer.containsIgnoreCase("you", "your choice", "extremely rare")) {
            sendMessage("That's what I wanted to hear %SlaveName%");
            setVar(VARIABLE.ORGASM_FREQUENCY, ORGASM_FREQUENCY_DOM);
            break;
        } else {
            sendMessage("Very rare, rare, semi rare, somewhat rare or up to me?");
            answer.loop();
        }
    }

    sendMessage("Now you can go ahead and jerk off...");
    setVar(VARIABLE.FINISHED_FIRST_SESSION, true);

    sendMessage("When you're done with that...");
    if (getVar(VARIABLE.CHASTITY_TRAINING, false) || !getVar(VARIABLE.HAS_CHASTITY)) {
        setVar(VARIABLE.CHASTITY_ON, false);
        sendMessage("I want you to put your %Cock% away...");
        sendMessage("Enjoy", 10);
    } else {
        setVar(VARIABLE.CHASTITY_ON, true);
        sendMessage("I want you to lock up your %Cock% in its %ChastityBelt% %Grin%");
        sendMessage("Enjoy slave!");
        sendMessage("See you tomorrow...", 10);
    }

    endSession();
}