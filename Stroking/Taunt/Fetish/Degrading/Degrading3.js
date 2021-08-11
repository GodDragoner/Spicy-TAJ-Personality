{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            lockImages();
            sendMessage('When you see pictures of hot girls, do you ever think <i>I could hit that</i>?', 0);
            showTeaseImage(5);
            sendMessage('It\'s never going to happen, %SlaveName%', 0);
            showTeaseImage(5);
            sendMessage('You\'ll be a virgin for the rest of your life', 0);
            showTeaseImage(5);
            unlockImages();
            sendMessage('Because you\'re just not sexually attractive');
            sendMessage('And unfortunately that\'s not something that\'s likely to ever change');
        } else {
            sendMessage('You and your hand make such a cute couple %Lol%');
            sendMessage('No wonder you have no need for pussy');
            sendMessage('You can easily go through life only making love to your hand');
            sendMessage('You do know how pathetic you are, right?');
            sendMessage('Doesn\'t matter if you do or if you don\'t actually');
            sendMessage('Being pathetic is what makes you such a good toy for me');
            sendMessage('So there\'s still some good to come from it, even if it might not seem that way to you');
        }
    }
}