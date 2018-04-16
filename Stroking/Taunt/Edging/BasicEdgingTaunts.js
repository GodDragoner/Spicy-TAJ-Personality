if(getDate(VARIABLE_EDGE_STARTED_DATE).addMinute(2).hasPassed()) {
    var tauntIndex = randomInteger(0, 8);
    switch (tauntIndex) {
        case 0:
            sendMessage("C'mon %SlaveName%, don't you want to get close for me?");
            break;
        case 1:
            sendMessage("You should be edging for me much quicker than this %SlaveName%");
            break;
        case 2:
            sendMessage("I know you can get there faster than this %SlaveName%");
            break;
        case 3:
            sendMessage("Hurry up and get close for me");
            break;
        case 4:
            sendMessage("I hope you're not let letting yourself get distracted over there %EmoteSad%");
            break;
        case 5:
            sendMessage("Faster %SlaveName%, I want you on that edge right now");
            break;
        case 6:
            sendMessage("I know you can edge quicker than this");
            break;
        case 7:
            sendMessage("Focus %SlaveName%, I want you on that edge");
            break;
        case 8:
            lockImages();
            sendMessage(random("Need some encouragement over there? How bout this?", "Maybe this picture I just found will help you get there faster", "Maybe this will help you get there faster"), 0);
            showTeaseImage(3);
            unlockImages();
            break;
        case 9:
            lockImages();
            sendMessage("Think an ass like this will help you edge a little quicker?", 0);
            showCategoryImage("BUTTS", 3);
            unlockImages();
            break;
        case 10:
            lockImages();
            sendMessage("I know you want to edge for a pair of %Boobs% like this", 0);
            showCategoryImage("BOOBS", 3);
            unlockImages();
            break;
    }
} else {
    var tauntIndex = randomInteger(0, 16);
    switch (tauntIndex) {
        case 0:
            sendMessage("Get close for me %SlaveName%");
            break;
        case 1:
            sendMessage("Get that %Cock% on the edge");
            break;
        case 2:
            sendMessage("Closer");
            break;
        case 3:
            sendMessage("I want you so fucking close %SlaveName%");
            break;
        case 4:
            sendMessage("Get closer");
            break;
        case 5:
            sendMessage("I want you right on the %EdgeNoun% %SlaveName%");
            break;
        case 6:
            sendMessage("I want you right fucking there %SlaveName%");
            break;
        case 7:
            sendMessage("Get closer for me");
            break;
        case 8:
            sendMessage("Not close enough, I want more");
            break;
        case 9:
            sendMessage("I want you close %SlaveName%");
            break;
        case 10:
            sendMessage("Mmmm fuck yes, closer");
            break;
        case 11:
            lockImages();
            sendMessage("Stare at this %Ass% and get closer for me", 0);
            showCategoryImage("BUTTS", 3);
            unlockImages();
            break;
        case 12:
            lockImages();
            sendMessage("Imagine how easy it would be to get close if she were shaking this %Ass% in front of you right now");
            showCategoryImage("BUTTS", 3);
            unlockImages();
            break;
        case 13:
            lockImages();
            sendMessage("Here's a sexy %Ass% you can edge to %Grin%");
            showCategoryImage("BUTTS", 3);
            unlockImages();
            break;
        case 14:
            lockImages();
            sendMessage("Just imagine you were getting ready to cum all over these %Boobs%");
            showCategoryImage("BOOBS", 3);
            unlockImages();
            break;
        case 15:
            lockImages();
            sendMessage("Get closer while you imagine how these would feel in your hands right now");
            showCategoryImage("BOOBS", 3);
            unlockImages();
            break;
        case 16:
            lockImages();
            sendMessage("Here's some %Boobs% to help you get closer");
            showCategoryImage("BOOBS", 3);
            unlockImages();
            break;
    }
}