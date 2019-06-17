{
    if(getCBTLimit() != LIMIT_ASKED_YES || !INFLATABLE_BUTT_PLUG.hasToy()) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId()) {
        if (INFLATABLE_BUTT_PLUG.fetchToy()) {
            //TODO: More games and
            putInInflatablePlug();
            startMissingCardMemory(GAME_INFLATABLE_PLUG);
            sendMessage('You can deflate the plug now and put it away %Grin%');
            deflateInflatablePlug();
            removeButtplug();
        } else {
            sendMessage("I guess I have to think of something different to play with your ass");

            run('Session/Modules/Humiliation/Dynamic/AnalHumiliation.js');
        }
    }
}