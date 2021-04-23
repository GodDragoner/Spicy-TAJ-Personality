{
    if(getCBTLimit() != LIMIT_ASKED_YES || !INFLATABLE_BUTT_PLUG.hasToy()) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.ANAL)) {
        if (putInInflatablePlug()) {
            //QUALITY: More games and
            startMissingCardMemory(GAME_TYPE.GAME_INFLATABLE_PLUG);
            sendMessage('You can deflate the plug now %Grin%');
            deflateInflatablePlug();
            removeButtplug();
        } else {
            sendMessage("I guess I have to think of something different to play with your ass");

            run('Session/Modules/Humiliation/Dynamic/AnalHumiliation.js');
        }
    }
}