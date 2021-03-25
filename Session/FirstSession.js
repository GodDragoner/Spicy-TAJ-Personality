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
    sendMessage("Is not gonna be yours anymore", 0);
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
    sendMessage("So if you want me to focus on you, you'd better start worshipping me the way you should");

    sendMessage('Now we\'ve got a few things to clarify and talk about before we can start this agreement of ours');

    setVar(VARIABLE.BLOWJOB_LEVEL, 1);

    sendMessage("Now...");
    sendMessage("I don't know how well you handle denial");
    sendMessage("So I need you to tell me on a scale how well you handle denial");
    sendMessage("The scale ranges from 1 to 15");
    sendMessage("1 to 5 is for beginners (1-5 days)");
    sendMessage("6 to 8 is for the trained (6-12 days)");
    sendMessage("9 to 11 is for the advanced (12-18 days)");
    sendMessage("12 to 15 is for the high skilled (15-40 days)");
    sendMessage("The higher your level is the less permissions for ejaculations you will get from me");
    sendMessage("So I'd prefer a high level since I basically want you horny %EmoteHappy%");
    sendMessage("Because as everyone knows a horny sub makes an obedient good little puppy");
    sendMessage("Now I still recommend choosing your level with care %SlaveName%");
    sendMessage("Once in a while I will talk about this topic with you");
    sendMessage("So what you choose now isn't final and will be very likely to increase %Grin%");
    answer = sendInput("At what level do you think you belong?");

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendMessage("You can't choose a number equal to 0 or lower", 0);
                answer.loop();
            } else if (result > 15) {
                sendMessage("You can't choose a number higher than 15", 0);
                answer.loop();
            } else {
                setVar(VARIABLE.DENIAL_LEVEL, result);
                break;
            }
        } else {
            sendMessage("Please only enter a number such as 1 now.", 0);
            answer.loop();
        }
    }

    if (isFullTime()) {
        sendMessage("Now as you know I expect you to serve full time");
        sendMessage("Normally this would mean that I want you to launch Spicy at least 6 times per week");
        sendMessage("But I would understand it if your life doesn't allow for that");
        sendMessage("So %SlaveName%...");
        let answer = sendInput("How many times a week do you think I should expect you to visit me?");

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendMessage("You can't choose a number equal to 0 or lower", 0);
                    answer.loop();
                } else if (result > 7) {
                    sendMessage("You chose a number too big, you can't visit me more than 7 times a week", 0);
                    answer.loop();
                } else {
                    setVar(VARIABLE.MIN_WEEKLY_VISITS, result);
                    break;
                }
            } else {
                sendMessage("Slave...");
                sendMessage("I asked you to just give me a simple number...");
                sendMessage("You aren't supposed to write down '7 days', '4 times' or anything similar");
                sendMessage("Just give me a number plain and simple like 5, 7 or 2", 0);
                answer.loop();
            }
        }

        sendMessage("Perfect " + getVar(VARIABLE.MIN_WEEKLY_VISITS) + " times a week it is.");
        sendMessage("Next I need to know how many minutes per week you should do chores");
        sendMessage("Right now the amount of minutes for chores is " + getVar(VARIABLE.MIN_WEEKLY_CHORE_TIME));
        sendMessage("Which I consider to be very fair since this number will likely cover your cleaning duty");
        sendMessage("I consider all chores beyond those to be voluntary");
        sendMessage("Either because you want to please me or perhaps earn a bit of gold");

        answer = sendInput("Do you wish to change this?");
        while (true) {
            if (answer.isLike("yes")) {
                sendMessage("Okay then...");
                answer = sendInput("So how many minutes should you be doing chores each week at least?");

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result < 60*2) {
                            sendMessage("Nothing less than 120 minutes %SlaveName%! That would be just laziness!", 0);
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
                        sendMessage("or 400...", 0);
                        answer.loop();
                    }
                }

                break;
            } else if (answer.isLike("no")) {
                sendMessage("Very well");
                break;
            } else {
                sendMessage(YES_OR_NO, 0);
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
    sendMessage("Communicate with me, tell me the truth and this will be a worthwhile experience for the both of us");
    sendMessage("Overestimate yourself and you might as well quit right here and now...");
    sendMessage("I love being in control");
    sendMessage("And that especially includes your orgasms");
    sendMessage("But I also know that not everyone handles denial too well so I need to know your hard limit for denial in days");
    sendMessage('If you don\'t have one you can just write 99999');

    answer = sendInput("So how many days are your limit right now %SlaveName%?");

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendMessage("You have to choose a number higher than 0...", 0);
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
            sendMessage("Just give me a number like 3, 10 or 70...", 0);
            answer.loop();
        }
    }

    if (getVar(VARIABLE.HAS_CHASTITY)) {
        sendMessage("There is another thing I love");
        sendMessage("And that is locking %MyYour% %Cock% up");
        askForMaxLockupTime();
    }

    sendMessage('So...');
    sendMessage('During our sessions you will be told to stroke quite frequently to keep you obedient, your cock throbbing and horny');
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
                sendMessage("You have to choose a number larger than 0...", 0);
                answer.loop();
            } else if (result <= 5) {
                sendMessage("So be it...");
                setVar(VARIABLE.STROKE_MODULE_PAUSE_FREQUENCY, result);
                break;
            } else {
                sendMessage('You can\'t give me a number greater than 5...', 0);
                answer.loop();
            }
        } else {
            sendMessage("Just give me a number like 3, 10 or 70...", 0);
            answer.loop();
        }
    }


    sendMessage("Next...");
    sendMessage("I think it's important that we start out with a clean history");
    sendMessage("I don't know when you cleaned your pipes the last time");
    sendMessage("So yes you are gonna orgasm today");
    sendMessage("It's gonna be the last time you can do so without explicit instructions so savor the moment %Grin%", 5);

    sendMessage('Or don\'t do it and stay horny. But don\'t expect me to acknowledge if you haven\'t cum today in the future');

    setVar(VARIABLE.ORGASM_POINTS, 0);
    registerOrgasm();

    sendMessage('Anyway...');
    sendMessage("You haven't earned my attention for that");
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
            sendMessage("Sounds fine to me %EmoteHappy%");
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
            sendMessage("Very rare, rare, semi rare, somewhat rare or up to me?", 0);
            answer.loop();
        }
    }

    sendMessage("Now you can go ahead and jerk off...");
    setVar(VARIABLE.FINISHED_FIRST_SESSION, true);

    sendMessage("Enjoy slave!");
    sendMessage("See you tomorrow...", 10);

    endSession();
}