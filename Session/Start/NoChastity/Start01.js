sendMessage("Just thinking about the things you're about to do for me");
sendMessage("Makes my pussy tingle a little bit %EmoteHappy%");

answer = sendInput("Is your %Cock% hard already?")

while (true) {
    if (answer.isLike("yes", "hard")) {
        sendMessage("Mmm why doesn't that surprise me %EmoteHappy%");
        break;
    } else if (answer.isLike("no")) {
        sendMessage("Maybe you need some encouragement...");
        sendMessage("That's why you have that nice collection of pictures I guess");
        lockImages();
        sendMessage("Pictures like this one", 0);
        showCategoryImage("SOFTCORE", 3);
        sendMessage("Or this one", 0);
        showCategoryImage("HARDCORE", 3);
        sendMessage("Wouldn't you love some of this", 0);
        showCategoryImage("BLOWJOB", 3);
        unlockImages();
        sendMessage("Those lips wrapped around your %Cock%");
        break;
    } else {
        sendMessage(YES_OR_NO);
        answer.loop();
    }
}

sendMessage("I want your %Cock% hard and erect all the time, %SlaveName%");