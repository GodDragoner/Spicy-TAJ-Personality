{
    let tauntIndex = randomInteger(0, 16);
    switch (tauntIndex) {
        case 0:
            if(currentDildo.diameter >= 4) {
                sendMessage("Is your ass gaping yet?");
                break;
            } else {
                sendMessage("You\'re %Ass% might start gaping soon %Grin%");
                break;
            }
        case 1:
            sendMessage("Push in and pull out %Grin%");
            break;
        case 2:
            sendMessage("Look at you pathetic as you are");
            sendMessage("Fucking your own ass", "Penetrating yourself");
            break;
        case 3:
            sendMessage("Shouldn't we get a bit faster?");
            sendMessage(random("Well, I think so", "I don't care what you think anyway. Speed it up!"), 0);
            addStrokingBPM(5);
            break;
        case 4:
            sendMessage("Come on. Speed up!", 0);
            addStrokingBPM(5);
            break;
        case 5:
            sendMessage("I think we can slow it down a bit", 0);
            addStrokingBPM(-5);
            break;
        case 6:
            sendMessage("Slow down %SlaveName%", 0);
            addStrokingBPM(-5);
            break;
        case 7:
            sendMessage("Faster %SlaveName%", 0);
            addStrokingBPM(5);
            break;
        case 8:
            sendMessage("Let's see if you can take it faster", 0);
            addStrokingBPM(5);
            break;
        case 9:
            sendMessage("I know you like it fast but " + random("you'll have to take it slower for now", "but I " + random("like", "want") + " it slower for now"), 0);
            addStrokingBPM(-5);
            break;
        case 10:
            sendMessage("Mmmm fuck yes. I love it when you fuck yourself");
            break;
        case 11:
            sendMessage("I love telling you what to do. And your such an obedient %SlaveName%...");
            sendMessage("I can't help it %Grin%");
            if (isChance(50)) {
                sendMessage("Go faster!", 0);
                addStrokingBPM(5);
            } else {
                sendMessage("Slow a bit down", 0);
                addStrokingBPM(-5);
            }
            break;
        case 12:
            sendMessage("Faster!", 0);
            addStrokingBPM(5);
            sleep(3);
            sendMessage("Slow down!", 0);
            addStrokingBPM(-5);
            sendMessage("%Lol%");
            sendMessage("It's so much fun " + random("playing with you", "telling you what to do", "to order you around") + " %SlaveName%");
            break;
        case 13:
            sendMessage(random("It is so much fun", "I love") + " watching you " + random("fuck", "penetrate") + " yourself");
            break;
        case 14:
            //TODO: Interact
            sendMessage("Do you find this to be humiliating or is it even fun for you?");
            break;
        case 15:
            sendMessage("How does it feel having your ass penetrated?");
            break;
        case 16:
            //TODO: Interact
            sendMessage("Seeing this I sometimes wonder whether you'd do anything for me %Lol%");
            break;
    }
}