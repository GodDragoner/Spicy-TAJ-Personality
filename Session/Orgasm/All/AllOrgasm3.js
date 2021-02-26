{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);
    sendMessage("I think today I'm going to let you cum");
    sendMessage("But wait for my command, %SlaveName%");
    sendMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
    sendMessage(random("Just think about ", "Imagine ") + "how good it's going to feel when you go over the edge");
    sendMessage("When you let that orgasm course through you");
    sendMessage("Maybe your limbs will start to shudder and shake");
    sendMessage("Maybe for a moment you'll feel like you've just died and went to heaven %EmoteHappy%");

    if(isInChastity()) {
        sendMessage('Well that cage might be a problem to enjoy the whole sensation but you still won\'t be allowed to take it of %Grin%');
        sendMessage("Start vibrating the cage");
        sendMessage('Don\'t edge yet though %Grin%');
    } else {
        sendMessage("Start touching yourself");
        sendMessage("Don't %JerkOff% too hard, I don't want you to " + random("reach the edge ", "cum ", "orgasm ") + random("just yet", "too early"));
        sendMessage("I want you to make " + random("it so ", "sure ") + "that once I " + random("tell you ", "give you the command ") + "to edge, you'll edge " + random("right away", "quickly", "without delay"));
    }

    sendMessage("All that " + random("sperm ", "cum ", "jizz ") + "in %MyYour% %Balls% is just screaming to get out %Giggles%");
    sendMessage("It's going to feel " + random("so fucking good ", "so damn good ", "incredible ") + "when you " + random("finally climax", "explode", "blow that hot load"));

    if(isInChastity()) {
        sendMessage('Or is it?');
        sendMessage('Or will that cage make it too frustrating to enjoy?');
        sendMessage('This will count as a normal orgasm anyway');
        sendMessage('So better make sure to enjoy it for your sake %Lol%');
        sendMessage("Feel how sensitive %MyYour% %Cock% is");
    } else {
        sendMessage("Feel how hard and sensitive %MyYour% %Cock% is");
    }

    let noReady = false;
    if(sendYesOrNoQuestion("Are you " + random("getting close ", "ready yet ") + "%SlaveName%?")) {
        if(sendYesOrNoQuestion('Are you ready to blow your hot load?')) {
            sendMessage("I bet you are %Grin%");
        } else {
            noReady = true;
        }
    } else {
        noReady = true;
    }

    if(noReady) {
        sendMessage("We have time %Grin%");

        if(isInChastity()) {
            sendMessage("Vibrate that %CockAndChastity%");
        } else {
            sendMessage("Stroke that %Cock%");
        }

        sendMessage("Make sure you get ready to cum for me");
        lockImages();
        sendMessage("I'll even show you some pictures to help you", 0);
        showTeaseImage(3);
        sendMessage("I want you to feel good right now, %SlaveName%");
        showTeaseImage();

        if(isInChastity()) {
            sendMessage("Make it intense...");
        } else {
            sendMessage("Tighten your grip...");
        }

        showTeaseImage();

        if(isInChastity()) {
            sendMessage("Feel that hard %Cock% pulsing inside the cage %Giggles%");
        } else {
            sendMessage("Feel that hard %Cock% pulsing in the palm of your hand");
        }

        showTeaseImage();
        sendMessage("All that matters right now is building up an incredible orgasm");
        showTeaseImage();
        unlockImages();
    }

    sendMessage("I bet the " + random("ache ", "tension ") + "in %MyYour% %Cock% and %Balls% is " + random("almost too much now", "getting unbearable"));
}