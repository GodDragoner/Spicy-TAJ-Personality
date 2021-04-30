{
    if (getHumiliationLimit() != LIMIT_ASKED_YES) {
        runModuleCategory('Humiliation');
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.HUMILIATION)) {
        let noLingerie = false;
        if (!hasSomeLingerie()) {
            sendMessage("It's a shame you don't have any lingerie %Grin%");
            noLingerie = true;
        } else if (!isLingeriePlayAllowed()) {
            sendMessage("It's a shame you don't want to play with your lingerie %Grin%");
            noLingerie = true;
        } else {
            if (!putOnLingerie()) {
                //TODO: Handle no lingerie around
                sendMessage('')
            }
        }

        if (noLingerie) {
            sendMessage("I had an idea I think you would absolutely love!");
            sendMessage("Well we can still do it");
            sendMessage("You'll just look a little less lovely %Lol%");
        }

        sendMessage(random("It's time for a photoshoot!", "Let's do a photoshoot!", "I want to do a photoshoot!"));
        sendMessage("%EmoteHappy%");
        sendMessage(random("Before we begin", "Before we start"));

        switch (randomInteger(0, 2)) {
            case 0:
                sendMessage(random("I want you to refresh your memory about the catwalk", "You need to refresh what you know about the catwalk"));
                sendMessage(random("Use youtube to watch a video about it", "Go ahead, google it and read about it"));
                sendMessage(random("Return when you hear my bell", "Come back when you hear my bell"));
                sleep(randomInteger(120, 180));

                sendMessage(random("Now", "Well") + "%SlaveName%");
                sendMessage(random("It's time for you to set up a recording device!", "You need to set up your recording device now"));
                sendMessage(random("You're going to do the catwalk for me!", "You will do a lovely catwalk!"));
                sendMessage(random("I want you to walk back and fourth 10 times", "You are to do the catwalk 15 times"));
                sendMessage(random("Shake those hips", "Move your hips", "Make that ass look good", "Work those legs"));
                sendMessage(random("Put on music as well!", "Put on a song as well!") + " %Grin%");
                sendMessage("When you're done, transfer the video to your humiliation folder");
                sendMessage("Who knows");
                sendMessage(random("Maybe ", "Perhaps ") + getVar('blackmailName1') + random(' would like to see it as well?', ' wouldn\'t mind seeing them as well', ' would enjoy watching them!') + ' %Lol%');
                break;
            case 1:
                sendMessage(random("I want you to", "You need to") + " find, think of, imagine as best as you can - different poses");
                sendMessage(random("Poses you can use while lying on your bed", "Poses for to take while shooting different images") + " %Grin%");
                sendMessage(random("It's really quite simple", "It's rather simple", "It's not complicated"));
                sendMessage(random("I want you to snap a few image", "You're going to snap some pictures"));
                sendMessage(random("In different lovely poses", "While taking some really good poses"));
                sendMessage(random("On your bed", "And posing them on your bed"));
                sendMessage("When you're done, I want you to transfer those images to your self humiliation folder");
                sendMessage(random("We're going to have a blast with them!", "We should be able to put them to good use!"));
                sendMessage(random("Snap at least 10", "Take at least 15 pictures"));
                sendMessage(random("But feel free to do many many more!", "But don't shy away from taking a lot more!") + " %Lol%");
                break;
            case 2:
                sendMessage(random("You need to choose ") + randomInteger(3, 7) + " positions");
                sendMessage("Your slave positions that is %Grin%");
                sendMessage(random("Take 1 or 2 pictures of you in each position", "Snap once or twice"));
                sendMessage("Then place those images inside your self humiliation folder");
                sendMessage(random("They will prove to be invaluable", "We can have all the fun in the world with those!") + " %EmoteHappy%");
                break;
        }

        sendMessage("Now %SlaveName%");
        sendMessage("Get to work!");
        sendMessage("Tell me when you are done");
        waitForDone(999999);

        sendMessage("%Good%");
        sendMessage("I love watching all these images and movies");

        const blackmailIndex = randomInteger(1, 3);
        sendMessage("Does this number ring a bell? " + getVar('blackmailPhone' + blackmailIndex));
        sendMessage("It should");
        sendMessage("It belongs to " + getVar('blackmailName' + blackmailIndex), 0);
        showImage('Images/Spicy/FFriends/' + blackmailIndex + '/*.jpg', 2);
        sendMessage("Imagine me calling her");
        sendMessage(random("Telling her all about you", "Spilling all I have about you"));
        sendMessage(random("Think she would be ", "Do you believe she would be ") + random("disgusted?", "excited?", "interested?"));
        sendMessage(random("Maybe she would be turned on?", "Perhaps she would be calling all of her friends", "Maybe she would never talk to you again!"));
        sendMessage(random("Imagine her face as she receives my text messages", "Can you imagine her reaction as she sees all those ugly images of you"));
        showImage('Images/Spicy/SelfHumiliation/*.jpg', 5);
        showImage('Images/Spicy/SelfHumiliation/*.jpg', 5);
        showImage('Images/Spicy/SelfHumiliation/*.jpg', 5);
        sendMessage(random("Quite nice", "Lovely pictures"));
        let answer = sendInput(random("Aren't they?", "Right?"), 7);

        if (!answer.isTimeout()) {
            if (answer.isLike('yes')) {
                sendMessage(random("I knew you would agree", "Of course you would agree", "%Lol% why wouldn't you agree!"));
                changeMeritLow(false);
            } else if (answer.isLike('no')) {
                sendMessage(random("Buhuu be glad I'm not sending them today!", "Be thankful that I haven't send them yet"));
                changeMeritLow(true);
            }
        }

        if (getVar(VARIABLE.LUST) > 20) {
            if (isChance(50)) {
                sendMessage("I want to show you a video!");
                sendMessage("Enjoy!");
                playVideo('Videos/Spicy/SelfHumiliation/*.mp4', true);
                sendMessage(random("This is the funniest thing ever!", "I can't imagine anything less sexy") + ' %Lol%');
            } else {
                for (let x = 0; x < 30; x++) {
                    showImage('Images/Spicy/SelfHumiliation/*.jpg', 2);
                }

                sendMessage(random('I think I might invite', 'Perhaps I should invite', 'I bet you wouldn\'t mind if I were to invite') + ' ' + getVar('blackmailName1') + ', ' + getVar('blackmailName2') + ' and ' + getVar('blackmailName3') + ' over');
                sendMessage(random("I'm thinking video night!", "Maybe we'll take a good look at your images"));
                sendMessage(random("You might even get to serve tea", "Perhaps you could make us dinner"));
                sendMessage(random("Soo many possibilities!", "I can't decide!"));
                sendMessage("%Lol%");
            }
        } else {
            sendMessage(random('Well we\'d better end here', 'I believe we should continue with other stuff now') + ' %Grin%');
        }
    }
}