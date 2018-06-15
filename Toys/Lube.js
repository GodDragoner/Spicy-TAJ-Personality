function lubeUpToyWithLube(toy) {
    if (isChance(50)) {
        sendMessage("Grab your lube and lube up your " + toy);
    } else {
        sendMessage("%SlaveName%");
        sendMessage("Go ahead and grab your lube and...");
        sendMessage("Lube that %Ass% and " + toy + " of yours up for me");
    }
}

function lubeUpToyWithSpit(toy, canBlowjob = true) {
    sendMessage(random("Use your spit and lube your " + toy + " up", "Use your spit as lube for your " + toy, "Go ahead and use your spit as lube for your " + toy));

    if (isChance(50) && !isGaged() && canBlowjob) {
        sendMessage(random("I want you to suck it until I tell you to stop", "Give it a nice quick blowjob until I tell you to stop", "Give it a good and nice blowjob until it is soaked in your spit"));
        sleep(30);
        sendMessage("You can stop now %SlaveName%");
    } else {
        if (isGaged()) {
            sendMessage("This is gonna be fun with that gag in your mouth");
            sendMessage("Watching your desperately trying to get some spit on it");
            sendMessage("Go ahead and try to drool some spit onto your " + toy);
            sendMessage("If you can't make it your ass will get to feel it %Grin%");
        } else {
            sendMessage("Come on. Soak it in your spit and make it nice and slippery", 10);
        }
    }
}

function lubeUpToyWithToothpaste(toy) {
    if (!fetchToy("toothpaste")) {
        sendMessage("Well if you don't have my toys around you will have to go without any lube %Grin%");
    } else {
        sendMessage("Apply a generous amount to the tip of your " + toy);
        sendMessage("If you want to you can spread it all over it so it slips in more easily");
        sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
            "However this will be more painful afterwards") + " %Grin%", 10);
    }
}

function lubeUpToyWithTigerHot(toy) {
    if (!fetchToy("tiger hot")) {
        sendMessage("Well if you don't have my toys around you will have to go without any lube %Grin%");
    } else {
        sendMessage("Apply a generous amount to the tip of your " + toy);
        sendMessage("If you want to you can spread it all over it so it slips in more easily");
        sendMessage(random("But it will be more painful once it is inside of you", "However it will hurt more like this", "But this way it will hurt you more afterwards",
            "However this will be more painful afterwards") + " %Lol%", 10);
    }
}