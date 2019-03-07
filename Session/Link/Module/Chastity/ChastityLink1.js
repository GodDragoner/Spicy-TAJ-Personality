{
    if(tryRunLinkFetchId()) {
        if(isChance(50)) {
            //TODO: Check if not full chastity cage (balls unreachable) and whether CBT module was before if so, add interaction
            smallCBTPunishment(true, false);
            sendMessage('%Grin%');
            sendMessage("I love hurting your %Balls% when your %Cock% is locked up");
        } else {
            sendMessage("I suppose not stroking is a form of masturbation too");
            sendMessage("You can still watch hot pictures", 0);
            showTeaseImage(3);
            sendMessage("And imagine you\'re there", 0);
            showCategoryImage('HARDCORE', 3);

            if (hasChastityCage()) {
                sendMessage("You can feel your %Cock% growing harder");
            } else {
                sendMessage("You can feel your %Cock% straining against the confines of its cage");
            }

            sendMessage("It may not be as much fun as %JerkingOff%");
            sendMessage("But it\'s a lot more frustrating");
            sendMessage("And that counts for something in my book %Grin%");
        }
    }
}