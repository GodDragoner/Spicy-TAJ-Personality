{
    if (getCBTLimit() != LIMIT_ASKED_YES || !PARACHUTE_TOY.hasToy() || !PARACHUTE_TOY.isPlayAllowed()) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId()) {
        if(PARACHUTE_TOY.fetchToy()) {
            sendMessage('Now we\'re going to have some fun with it!');
            sendMessage('Attach it while you\'re at it %Lol%');
            sendMessage('Tell me when you are ready');
            waitForDone();

            
        } else {
            sendMessage("I guess I have to think of something different to play with your balls");

            run('Session/Modules/Pain/Dynamic/BallBusting.js');
        }
    }
}