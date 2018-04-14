sendMessage("Hello %subName%");
sendMessage("That was the last time I used your real name");
setDate("LastTeaseSession");
sendMessage("From now on I will use whatever pet name I see fit");
sendMessage("Wether that is cum lover, cocksucker or slave");
sendMessage("Because you are a slave");
sendMessage("My slut, cuck, plaything, chastity boy");
sendMessage("And a lot of other lovable terms %Grin%");
sendMessage("The point is you're mine!");
sendMessage("Let that sink in for a moment...");
sleep(10);
sendMessage("Now what is more important for you to understand is that the thing residing in your pants");
sendMessage("Is not yours anymore", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro1.mp3", true);
sendMessage("It's mine!", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro2.mp3", true);
sendMessage("You serve under my rules and terms", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro3.mp3", true);
sendMessage("Fail to do so properly", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro4.mp3", true);
sendMessage("...and you will be sold off.", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro5.mp3", true);
sendMessage("On another note", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro6.mp3", true);
sendMessage("If you for one second thought that my world is centered around you", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro7.mp3", true);
sendMessage("You are dearly mistaken", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro8.mp3", true);
sendMessage("This isn't about you", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro9.mp3", true);
sendMessage("Not even a little bit", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro10.mp3", true);
sendMessage("I am the center", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro11.mp3", true);
sendMessage("I am your focus", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro12.mp3", true);
sendMessage("Your job is to please me", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro13.mp3", true);
sendMessage("Never forget that...", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro14.mp3", true);
sendMessage("Well #SlaveName", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro15.mp3", true);
sendMessage("If you thought that you are my sole focus", 0);
playAudio("/Audio/Spicy/Starts/Intro/intro16.mp3", true);
sendMessage("You are once again dearly mistaken");
sendMessage("Others have signed up through Tease-AI");
sendMessage("Both men and women...");

sendMessage("This is " + SLAVE_F1_NAME, 0);
showPicture("/Images/Spicy/Slaves/F1 Alice Brookers/1/1.jpg", 5)
sendMessage("Oh my can she handle the vibrator *Smiles*");

sendMessage("This is " + SLAVE_F2_NAME, 0);
showPicture("/Images/Spicy/Slaves/F2 Brook Amelia Wright/1/1.jpg", 5)
sendMessage("She's nice and well behaved");
sendMessage("Be like her");

sendMessage("This is " + SLAVE_F3_NAME, 0);
showPicture("/Images/Spicy/Slaves/F3 Rosie Danvers/1/1.jpg", 5)
sendMessage("Oh my gosh");
sendMessage("I have done many nasty things to her and she just takes it all %Grin%");

sendMessage("This is " + SLAVE_M1_NAME, 0);
showPicture("/Images/Spicy/Slaves/M1 Will Havoc/1/1.jpg", 5)
sendMessage("He is a fine student");
sendMessage("Smart, intelligent and he knows his place");
sendMessage("Learn from his example");

sendMessage("This is " + SLAVE_M2_NAME, 0);
showPicture("/Images/Spicy/Slaves/M2 Marcelo/1/1.jpg", 5)
sendMessage("A little disobedient");
sendMessage("But a long period in chastity fixed that issue %Grin%");

sendMessage("This is " + SLAVE_M3_NAME, 0);
showPicture("/Images/Spicy/Slaves/M3 Lance Hart/1/1.jpg", 5)
sendMessage("A baad baad slave");
sendMessage("As a punishment");
sendMessage("I had him walk through the city dressed in fine lingerie");
sendMessage("%Lol%");

sendMessage("He didn't handle it well...");
sendMessage("Well you will get plenty of time to get to know them later");

if(isFullTime()) {
    sendMessage("You've signed up for full time");
    sendMessage("Normally this would mean that I expect you to launch Tease-AI at least 6 times per week");
    sendMessage("But I would understand it if your life doesn't allow for that");
    sendMessage("So #SlaveName ");
    answer = sendInput("How many times a week do you think I should expect you to use Tease-AI?");

    while (true) {
        if (answer.isInteger()) {
            var result = answer.getInt();
            if (result <= 0) {
                sendMessage("You can't choose a number equal to 0 or lower");
                answer.loop();
            } else if (result > 7) {
                sendMessage("You chose a number too big, you can't visit me more than 7 times a week");
                answer.loop();
            } else {
                setVar(VARIABLE_MIN_WEEKLY_VISITS, result);
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

    sendMessage("Perfect " + getVar(VARIABLE_MIN_WEEKLY_VISITS) + " times a week it is.");
    sendMessage("Next I need to know how many chores per week you should complete");
    sendMessage("Right now the number of chores is " + getVar(VARIABLE_MIN_WEEKLY_CHORES));
    sendMessage("Which I think is fair all considered");
    sendMessage("Since this number will likely cover your cleaning duty");
    sendMessage("All chores beyond those I consider to be voluntary");
    sendMessage("Either because you want to please me or perhaps earn a bit of gold");
    answer = sendInput("Do you wish to change the number of chores?");
    while (true) {
        if (answer.isLike("yes")) {
            sendMessage("Okay then...");
            answer = sendInput("So many chores should you at the very minimum complete each week?");

            while (true) {
                if (answer.isInteger()) {
                    var result = answer.getInt();
                    if (result <= 2) {
                        sendMessage("Not less than three!");
                        answer.loop();
                    } else {
                        sendMessage("Excellent");
                        setVar(VARIABLE_MIN_WEEKLY_CHORES, result);
                        break;
                    }
                } else {
                    sendMessage("All I asked you to do was input a simple number...");
                    sendMessage("Like 3");
                    sendMessage("or 6");
                    sendMessage("or 100...");
                    answer.loop();
                }
            }

            break;
        } else if(answer.isLike("no")) {
            sendMessage("Very well");
            break;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

sendMessage("%SlaveName%");
sendMessage("I consider myself to be a fair Mistress");
sendMessage("But for me to be a fair Mistress");
sendMessage("I require honesty from you");
sendMessage("And you need to be honest with yourself");
sendMessage("I've met many men who in a horny moment thought they could handle everything");
sendMessage("Whether that was 2 months in chastity");
sendMessage("Or 200 lashes with my cane");
sendMessage("But as soon as they tried it for real they all chickened out...");
sendMessage("So keep that in mind");
sendMessage("Communicate with me, tell me the truth and this will be a worthwhile experience for the both of us");
sendMessage("Overestimate yourself and you might as well quit right here and now..");
sendMessage("%SlaveName");
sendMessage("I love being in control");
sendMessage("Especially of your orgasms");
sendMessage("But I also know that not everyone handles denial too well");
sendMessage("So I need to know your hard limit for denial in days");
answer = sendInput("If you don't have one you can just write 99999");

while (true) {
    if (answer.isInteger()) {
        var result = answer.getInt();
        if (result <= 0) {
            sendMessage("You have to choose a number higher than 0...");
            answer.loop();
        } else if(result <= 5) {
            sendMessage("So we have a beginner when it comes to denial %Grin%");
            setVar(VARIABLE_DENIAL_LIMIT, result);
            break;
        } else if(result <= 14) {
            sendMessage("Not a complete beginner... Good! %Grin%");
            setVar(VARIABLE_DENIAL_LIMIT, result);
            break;
        } else {
            sendMessage("Wow... This sounds promising %Grin%");
            setVar(VARIABLE_DENIAL_LIMIT, result);
            break;
        }
    } else {
        sendMessage("Just give me a number like 3, 10 or 70...");
        answer.loop();
    }
}

if(getVar(VARIABLE_HAS_CHASTITY)) {
    sendMessage("There is another thing I love");
    sendMessage("And that is locking your %Cock% up");
    sendMessage("Knowing that you have a %ChastityCage% I need to know the maximum amount of days I can lock you up in a row");
    answer = sendInput("If you don't have a maximum you can just type 99999");

    while (true) {
        if (answer.isInteger()) {
            var result = answer.getInt();
            if (result <= 0) {
                sendMessage("You have to choose a number larger than 0...");
                answer.loop();
            } else if(result <= 5) {
                sendMessage("Looks like we have a chastity beginner. Don't worry we can work on that  %Grin%");
                setVar(VARIABLE_LOCKED_UP_LIMIT, result);
                break;
            } else if(result <= 14) {
                sendMessage("At least you are somewhat trained... Good! %Grin%");
                setVar(VARIABLE_LOCKED_UP_LIMIT, result);
                break;
            } else {
                sendMessage("Maybe I found a new chastity slut in you! %Grin%");
                setVar(VARIABLE_LOCKED_UP_LIMIT, result);
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

sendMessage("Next");
sendMessage("I think it's important that we start out with a clean history");
sendMessage("I don't know when you cleaned your pipes the last time");
sendMessage("So yes");
sendMessage("You are gonna orgasm today");
sleep(5);

setVar(VARIABLE_ORGASM_POINTS, 0);
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
sendMessage("I would prefer it if your orgasms were an extremely rare event...");
sendMessage("But I also understand that you might not feel that way...");
sendMessage("So now you have a choice");
sendMessage("Do you want your orgasms to be...");
answer = sendInput("Very rare, rare, semi rare, somewhat rare or just leave it completely up to me?");

while (true) {
    if(answer.containsIgnoreCase("very rare")) {
        sendMessage("Sounds fine to me");
        setVar(VARIABLE_ORGASM_FREQUENCY, ORGASM_FREQUENCY_VERY_RARE);
        break;
    } else if(answer.containsIgnoreCase("semi rare")) {
        sendMessage("%EmoteSad%");
        setVar(VARIABLE_ORGASM_FREQUENCY, ORGASM_FREQUENCY_SEMI_RARE);
        break;
    } else if(answer.containsIgnoreCase("somewhat rare")) {
        sendMessage("%EmoteSad%");
        setVar(VARIABLE_ORGASM_FREQUENCY, ORGASM_FREQUENCY_SOMEWHAT_RARE);
        break;
    } else if(answer.containsIgnoreCase("rare")) {
        sendMessage("At least something...");
        setVar(VARIABLE_ORGASM_FREQUENCY, ORGASM_FREQUENCY_RARE);
        break;
    } else if(answer.containsIgnoreCase("you", "your choice", "extremely rare")) {
        sendMessage("That's what I wanted to here %SlaveName%");
        setVar(VARIABLE_ORGASM_FREQUENCY, ORGASM_FREQUENCY_DOM);
        break;
    } else {
        sendMessage("Very rare, rare, semi rare, somewhat rare or up to me?");
        answer.loop();
    }
}

sendMessage("Now you can go ahead and jerk off...");
setVar(VARIABLE_FINISHED_FIRST_SESSION, true);

sendMessage("When you're done with that...");
if(getVar(VARIABLE_CHASTITY_TRAINING, false) || !getVar(VARIABLE_HAS_CHASTITY)) {
    sendMessage("I want you to put your %Cock% away...");
    sendMessage("Enjoy");
} else {
    setVar(VARIABLE_CHASTITY_ON, true);
    sendMessage("I want you to lock up your %Cock% in its %ChastityBelt% %Grin%");
    sendMessage("Enjoy slave!");
    sendMessage("See you tomorrow...");
}

endSession();