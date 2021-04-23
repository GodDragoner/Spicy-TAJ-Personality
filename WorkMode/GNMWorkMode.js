//TODO:
/*
Also, still on workmode, one thing that I miss about Cyber Mistress are small permissions,
 like ask to use the bathroom; go get water, answer the phone; to eat something; etc.
 And than the Assistant tells you if you are allowed or not, and for how much time you can be away.
 */
{
    sendVirtualAssistantMessage("Work mode has been activated");
    sendVirtualAssistantMessage("While this mode is active you'll slowly earn merits and gold");
    sendVirtualAssistantMessage("You exit work mode by typing --'exit'--");

    sendVirtualAssistantMessage("Do you want to activate small teases while working?", 0);
    let answer1 = createInput("Yes", "No");

    let teaseActive = false;

    while (true) {
        if (answer1.isLike("yes")) {
            teaseActive = true;
            break;
        } else if (answer1.isLike("no")) {
            teaseActive = false;
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer1.loop();
        }
    }
    answer1.clearOptions();

    sendVirtualAssistantMessage("Do you want to activate small exercises while working?", 0);
    answer1 = createInput("Yes", "No");


    let exerciseActive = false;

    while (true) {
        if (answer1.isLike("yes")) {
            exerciseActive = true;
            break;
        } else if (answer1.isLike("no")) {
            exerciseActive = false;
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer1.loop();
        }
    }

    answer1.clearOptions();

    //0 === never interrupt
    let frequencyNumber = 0;

    if(teaseActive ||exerciseActive) {
        sendVirtualAssistantMessage("Would you like these activities to occur often, sometimes, rarely or completely random?", 0);

        let frequencyAnswer = createInput("Often", "Sometimes", "Rare", "Completely random");
        while (true) {
            if (frequencyAnswer.isLike("often")) {
                frequencyNumber = 1;
                break;
            } else if (frequencyAnswer.isLike("sometimes")) {
                frequencyNumber = 2;
                break;
            } else if (frequencyAnswer.isLike("rare")) {
                frequencyNumber = 3;
                break;
            } else if (frequencyAnswer.isLike("random")) {
                frequencyNumber = 4;
                break;
            } else {
                sendVirtualAssistantMessage("often, sometimes, rare or random?", 0);
                frequencyAnswer.loop();
            }
        }

        frequencyAnswer.clearOptions();
    }


    sendVirtualAssistantMessage("Work hard slave");

    if(frequencyNumber !== 0) {
        sendVirtualAssistantMessage("Return to me whenever you hear my bell");
        sendVirtualAssistantMessage("Fail to return within 20 seconds of hearing it and you will be punished.");
    }

    CHORE_WATCH.reset();
    CHORE_WATCH.start();
    let working = true;

    while (working) {
        showImage("Images/Spicy/Grounding/BlackBase.jpg");

        switch (frequencyNumber) {
            case 0:
                answer1 = createInput("Exit");
                break;
            case 1:
                answer1 = createInput(randomInteger(180, 300), "Exit");
                break;
            case 2:
                answer1 = createInput(randomInteger(300, 900), "Exit");
                break;
            case 3:
                answer1 = createInput(randomInteger(900, 1500), "Exit");
                break;
            case 4:
                answer1 = createInput(randomInteger(180, 1500), "Exit");
                break;
        }

        answer1.clearOptions();

        while (working) {
            //It's time to interrupt studying with some teasing and/or exercising
            if (answer1.isTimeout()) {
                playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
                sendVirtualAssistantMessage("are you there " + random("%SlaveName%", "%Slave%") + "?", 0);

                let presentAnswer = createInput(20, "Yes");

                if (presentAnswer.isTimeout()) {
                    presentAnswer.clearOptions();
                    sendVirtualAssistantMessage(random('This is taking too long', 'You are taking way too much time', 'How is this taking so long?'));
                    sendVirtualAssistantMessage("You've failed to report within the proper timeframe");
                    sendVirtualAssistantMessage("You've lost all earned gold and merits");

                    addPunishmentPoints(100, PUNISHMENT_REASON.CHEATING);

                    sendVirtualAssistantMessage("And you are awarded 100 punishment points for cheating ");
                    changeMeritLow(true);
                    working = false;
                    break;
                } else {
                    sendVirtualAssistantMessage("%Good%");
                    presentAnswer.clearOptions();

                    let choice = 0;

                    //1 === exercise, 2 === tease
                    if (exerciseActive && teaseActive) {
                        choice = randomInteger(1, 2);
                    } else if (exerciseActive) {
                        choice = 1;
                    } else if (teaseActive) {
                        choice = 2;
                    }

                    if(choice === 1) {
                        workmodeExercise(randomInteger(1, 13));
                    } else if(choice === 2) {
                        workmodeTease(randomInteger(1, 11));
                    }
                    break;
                }

            } else if (answer1.isLike("leave", "exit", "done", "stop")) {
                sendVirtualAssistantMessage("Calculating gold and merits earned...");

                CHORE_WATCH.stop();
                let secondsPassed = parseInt(CHORE_WATCH.getTime() / 1000, 10);
                let minutesPassed = Math.round(secondsPassed/60);

                let goldEarned = Math.round(minutesPassed / 3);
                let meritsEarned = goldEarned;

                /*if (isVar("StudyMode") && getVar("StudyMode") == true) {
                    setVar("StudyHours", getVar("StudyHours") + ((WorkMode.getTime() - date.now()) / 1000));
                }*/

                sendVirtualAssistantMessage("You've earned " + goldEarned + " gold and some merits");

                addGold(goldEarned);
                addMerits(meritsEarned);

                sendVirtualAssistantMessage("Good job slave!");
                working = false;
            }
        }
    }
}


function workmodeExercise(exercise) {
    switch (exercise) {
        case 1:
            sendVirtualAssistantMessage("%SlaveName% right now you're gonna do " + random("20", "30", "40") + " push ups with a " + random("narrow", "wide", "normal", "normal", "normal") + " stance");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...");
            break;
        case 2:
            sendVirtualAssistantMessage("%Slut% right now you're gonna do " + random("30", "40", "60") + " crunches");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...");

            break;
        case 3:
            sendVirtualAssistantMessage("%Slut% right now you're gonna do " + random("50", "60", "40") + " squats");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...");

            break;
        case 4:
            sendVirtualAssistantMessage("%Slut% right now you're gonna spend " + random("3", "4", "5") + " minutes stretching whichever way you feel like");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing....");

            break;
        case 5:
            sendVirtualAssistantMessage("%Slut% take a deep breath and hold it", 7);
            sendVirtualAssistantMessage("Exhale", 3);
            sendVirtualAssistantMessage("Inhale", 7);
            sendVirtualAssistantMessage("Exhale", 3);
            sendVirtualAssistantMessage("Inhale", 7);
            sendVirtualAssistantMessage("Exhale", 3);
            sendVirtualAssistantMessage("Inhale", 8);
            sendVirtualAssistantMessage("Exhale", 4);
            sendVirtualAssistantMessage("Inhale", 9);
            sendVirtualAssistantMessage("Exhale", 5);
            sendVirtualAssistantMessage("Now just return to whatever you were doing...");

            break;
        case 6:
            sendVirtualAssistantMessage("%Slut% just take a 5 minute break, look around your environment");
            sendVirtualAssistantMessage("Is there something you can clean or perhaps something else to improve.");
            sendVirtualAssistantMessage("5 minutes! Then you return to whatever you were doing...", 300);
            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage("It's time to get back to work now %SlaveName%");
            break;
        case 7:
            sendVirtualAssistantMessage("%Slut% go and drink at least 500 mL of water right now!");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing.. ");

            break;
        case 8:
            sendVirtualAssistantMessage("%SlaveName% stand up and shake your body");
            sendVirtualAssistantMessage("shake your arms, your legs, your torso and your head", 10);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));

            break;
        case 9:
            sendVirtualAssistantMessage("%SlaveName% just spend a few minutes reading a serious news article");
            sendVirtualAssistantMessage("No gossip or anything similar");
            sendVirtualAssistantMessage("A serious news article from a serious news publisher");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...", 180);
            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage("It's time to get back to work now %SlaveName%");

            break;
        case 10:
            sendVirtualAssistantMessage("%SlaveName% just close your eyes for 2 minutes");
            sendVirtualAssistantMessage("Just 2 simple minutes", 120);
            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage("Open your eyes %SlaveName%");
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));

            break;
        case 11:
            sendVirtualAssistantMessage("%SlaveName% right now you're gonna do " + random("20", "30", "40") + " bicep curls with a " + random("10", "12", "15") + " pound weight.");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...");

            break;
        case 12:
            sendVirtualAssistantMessage("%SlaveName% right now you're gonna do " + random("20", "25", "15") + " shoulder presses with a " + random("12", "15") + " pound weight.");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...");
            break;
        case 13:
            sendVirtualAssistantMessage("%SlaveName% put on a piece of classical music");
            sendVirtualAssistantMessage("Just listen to it and let it calm your mind");
            sendVirtualAssistantMessage("When you're done just return to whatever you were doing...", 120);
            break;
    }
}


function workmodeTease(tease) {
    switch (tease) {
        case 1:
            sendVirtualAssistantMessage(random("Let's rattle %MyYour% %Cock% a little", "Let's make %MyYour% %Cock% jump a little", "Let's see if we can awaken the princess", "Let's play a little", "I have something fun for you %EmoteHappy% "));
            sendVirtualAssistantMessage(random("Just watch this little slide show", "Just enjoy this little show", "Just sit back and relax", "Hang back there and watch this") + " while you fondle %MyYour% %Balls%");

            while (randomInteger(1, 10) > 1) {
                showTeaseImage(randomInteger(4, 7));
            }

            showTeaseImage(randomInteger(4, 7));
            showTeaseImage(randomInteger(4, 7));
            showTeaseImage(randomInteger(4, 7));
            showTeaseImage(randomInteger(4, 7));
            showTeaseImage(randomInteger(4, 7));

            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 2:
            sendVirtualAssistantMessage("Get into the Bad Bitch position");
            showImage("Images/Spicy/Positions/BadBitch2.*", 10);
            sendVirtualAssistantMessage("Hold it until you hear my bell again...");

            sleep(randomInteger(50, 120));

            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 3:
            sendVirtualAssistantMessage("Get into the Listen position");
            showImage("Images/Spicy/Positions/Listen1.*", 10);

            sendVirtualAssistantMessage("Hold it until you hear my bell again.. ");

            sleep(randomInteger(50, 120));


            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 4:
            sendVirtualAssistantMessage("Get into the Cum Fuck Me position ");
            showImage("Images/Spicy/Positions/CFM4.*", 10);
            sendVirtualAssistantMessage("Hold it until you hear my bell again...");

            sleep(randomInteger(50, 120));

            playAudio("Audio/Spicy/SpecialSounds/Bell.mp3", true);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 5:
            if (isInChastity()) {
                sendVirtualAssistantMessage(random("Caress %MyYour% %Cock% a little", "Touch your cage a little", "Get a good feel of the cage", "Touch yourself", "Feel yourself up"));
                sendVirtualAssistantMessage(random("Let's see if you can make it hard in that cage...", "Let's see if we can the tiny girl fight for freedom", "Let's see if you can make the sad tiny penis desperate for freedom"), 15);
                sendVirtualAssistantMessage(random("Is it hard yet", "Is it hard", "Is it as hard as a caged cock can be") + "?", 0);

                let answer = createInput("Yes", "No");
                if (answer.isLike("no")) {
                    sendVirtualAssistantMessage(random("Let's hope it's not dead %Lol%", "Tired I suppose", "Maybe it's finally understanding that it's worthless", "Maybe it knows I'm tricking it!"));
                } else if (answer.isLike("yes")) {
                    sendVirtualAssistantMessage("%Good% %Lol%");
                } else {
                    sendVirtualAssistantMessage("%YesOrNo%", 10);
                }

                answer.clearOptions();
                sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            } else {
                sendVirtualAssistantMessage(random("Touch your cock a little", "Feel your dick", "Reach for your dick"), 10);
                sendVirtualAssistantMessage("Stroke it just 10 times");
                sendVirtualAssistantMessage("%Grin%");
                sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            }

            break;
        case 6:
            sendVirtualAssistantMessage("I want you to encircle your balls with your finger and your thumb.");
            sendVirtualAssistantMessage(random("Give %MyYour% %Balls% a few light taps %Lol%", "Hit %MyYour% %Balls% hard just once", "Tap hard on %MyYour% %Balls% with 1 finger"));
            sendVirtualAssistantMessage(random("Just to remind them who's in charge!", "So they won't question who's in charge", "So they know who's boss"), 10);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 7:
            sendVirtualAssistantMessage(random("Lightly fondle your nipples", "Twist your nipples a little", "Pinch your nipples", "Make circles around your nipples with your fingers"), 10);
            sendVirtualAssistantMessage(random("Make them hard for me", "Make them hard"), 10);
            sendVirtualAssistantMessage("Just lightly touch them now", 10);
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 8:
            sendVirtualAssistantMessage("Find a mirror and pull your underwear down");

            if (isInChastity()) {
                sendVirtualAssistantMessage("Just enjoy watching that encased %Cock%");
            } else {
                sendVirtualAssistantMessage("Have a look at what you are NOT allowed to touch %Lol%");
            }

            sendVirtualAssistantMessage("Count to " + random("10", "15", "20") + " and then return to whatever you were doing %Lol%", 30);
            break;
        case 9:
            sendVirtualAssistantMessage(random("Let's rattle %MyYour% %Cock% a little", "Let's make %MyYour% %Cock% jump a little", "Let's see if we can awaken the imprisoned princess", "Let's play a little", "I have something fun for you %EmoteHappy% "));
            sendVirtualAssistantMessage(random("Just watch this little slideshow while you fondle %MyYour% %Balls% %Lol%", "Fondle %MyYour% %Balls% while you watch this magnificent girl!", "Just hang back and watch this sexy slut!"));

            for(let x = 0; x < randomInteger(5, 13); x++) {
                showImage("Images/Spicy/SelfHumiliation/*.jpg", 10);
            }

            sendVirtualAssistantMessage(random("%SlaveName%, You look sooo hot!", "Those pictures are soo hot", "I would love to share these pictures with your friends!") + " %Grin%");
            sendVirtualAssistantMessage(random("That was it", "Done", "Stop", "Just stop", "Stop %Slut%", "Stop %SlaveName%") + ", " + random("just return to whatever you were doing", "return to your business", "thank you for a little attention"));
            break;
        case 10:
            sendVirtualAssistantMessage(random("Let's rattle %MyYour% %Cock% a little", "Let's make %MyYour% %Cock% jump a little", "Let's see if we can awaken the princess", "Let's play a little", "I have something fun for you %EmoteHappy% "));
            sendVirtualAssistantMessage("Go to a porn pic website with your favorite theme whether it being chastity, femdom or something else");
            sendVirtualAssistantMessage("Look at the first 10 posts and read them %Grin%");
            sendVirtualAssistantMessage("Afterwards, you can return to whatever you were doing", 60);
            break;
        case 11:
            sendVirtualAssistantMessage("Cocksucker I want you to go and grab your dildo.", 15);
            sendVirtualAssistantMessage("I want you to deepthroat that %Cock% until I say stop");
            sendVirtualAssistantMessage("Ok, get that thing in the back of your throat until I say you can take it out %Lol%", randomInteger(6, 20));
            sendVirtualAssistantMessage("Ok that's enough Cock gobbler.");
            sendVirtualAssistantMessage("Take a breath then return to whatever you were doing %Lol%", 10);
            break;
        default:
            break;

    }
}