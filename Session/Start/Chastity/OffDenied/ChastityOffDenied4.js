{
    lockImages();
    sendMessage(random("I don't think you should be unlocked", "You won't be unlocked today", "There won't be any release right now") + " %SlaveName%", 0);
    showPicture("Images/Spicy/Chastity/ChastityOffDenied/*.*", 5);
    sendMessage(random("I'm sorry", "Just desperation", "Only agony and crazed lust", "Only despair %Grin%", "No pleasure today"), 5);
    sendMessage(random("Enjoy", "Maybe it's better staying locked", "Learn to appreciate being locked away", "Just let the happiness of obeying flow through you"), 5);
    unlockImages();
}