{
    if (tryRunOrgasmFetchId()) {
        sendMessage("I think today I\'m going to let you cum");
        sendMessage("But wait for my command, %PetName%");
        sendMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
        sendMessage(random("Just think about ", "Imagine ") + "how good it\'s going to feel when you go over the edge");
        sendMessage("When you let that orgasm course through you");
        sendMessage("Maybe your limbs will start to shudder and shake");
        sendMessage("Maybe for a moment you\'ll feel like you\'ve just died and went to heaven %EmoteHappy%");
        sendMessage("Start touching yourself");
        sendMessage("Don\'t %JerkOff% too hard, I don\'t want you to " + random("reach the edge ", "cum ", "orgasm ") + random("just yet", "too early"));
        sendMessage("I want you to make " + random("it so ", "sure ") + "that once I " + random("tell you ", "give you the command ") + "to edge, you\'ll edge " + random("right away", "quickly", "without delay"));
        sendMessage("All that " + random("sperm ", "cum ", "jizz ") + "in your %Balls% is just screaming to get out %Giggles%");
        sendMessage("It\'s going to feel " + random("so fucking good ", "so damn good ", "incredible ") + "when you " + random("finally climax", "explode", "blow that hot load"));
        sendMessage("Feel how hard and sensitive your %Cock% is");

        let noReady = false;
        if(sendYesOrNoQuestion("Are you " + random("getting close ", "ready yet ") + "%SlaveName%?")) {
            if(sendYesOrNoQuestion('Are you ready to blow your hot load?"')) {
                sendMessage("I bet you are %Grin%");
            } else {
                noReady = true;
            }
        } else {
            noReady = true;
        }

        if(noReady) {
            sendMessage("We have time %Smile%");
            sendMessage("Stroke that %Cock%");
            sendMessage("Make sure you get ready to cum for me");
            lockImages();
            sendMessage("I\'ll even show you some pictures to help you", 0);
            showTeaseImage(3);
            sendMessage("I want you to feel good right now, %SlaveName%");
            showTeaseImage();
            sendMessage("Tighten your grip...");
            showTeaseImage();
            sendMessage("Feel that hard %Cock% pulsing in the palm of your hand");
            showTeaseImage();
            sendMessage("All that matters right now is building up an incredible orgasm");
            showTeaseImage();
            unlockImages();
        }

        sendMessage("I bet the " + random("ache ", "tension ") + "in your %Cock% and %Balls% is " + random("almost too much now", "getting unbearable"));

        //Glitter
        if(isChance(50)) {
            let contactId = 3;
            addContact(contactId);
            sendMessage("Get ready, %SlaveName%");

            setSender(contactId);
            sendMessage("I don\'t think you should let him cum, %DomName%");
            sendMessage("I don\'t think he deserves that kind of pleasure");

            setSender(2);
            sendMessage('But he\'s so ready for it now... %EmoteHappy%');

            setSender(contactId);
            sendMessage("I know, that\'s exactly why you shouldn\'t let him cum %Lol%");
            sendMessage("Get him all worked up, ready to spray that jizz all over the place, and then...");
            sendMessage("...DENIED... it\'s perfect! %Lol%");

            setSender(2);
            sendMessage("Mmm I don\'t know...");
            startEdging(getEdgeHoldSeconds());

            sendMessage("Sorry %SlaveName% but %domFriend1Name% is right");
            sendMessage("It\'s much more fun to keep you denied %Grin%");

            setSender(contactId);
            sendMessage("That\'s right, enjoy your blue balls, %SlaveName% %Lol%", -1, 2);

            setSender(2);
            removeContact(contactId);

            sendMessage("Aww poor %SlaveName% - you thought you were going to get to cum...");
            sendMessage("Well... maybe next time %EmoteHappy%");
        } else {
            sendMessage("And you know what, that exactly the way I like it");
            sendMessage("Yes, that means I\'ve changed my mind about letting you cum");
            sendMessage("So I\'m going to make you edge one more time, but you\'re not going to cum");
            startEdging(getEdgeHoldSeconds());
            sendMessage("%LetEdgeFade%");
        }
    }
}