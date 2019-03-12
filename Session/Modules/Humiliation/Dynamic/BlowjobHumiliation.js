{

    //TODO: Follow along video?

    if (tryRunModuleFetchId()) {
        sendMessage("Let's see %SlaveName%");
        sendMessage("I think your throat is not sore enough yet and we should work on that %Grin%");

        let toy = getDildoModifier(true) + " dildo";

        if(!hasDildoToy()) {
            if(sendYesOrNoQuestion('Since you own no dildo. Do you have anything else around that is dildo shaped?')) {
                sendMessage('Then you are gonna use that instead!');
                toy = sendInput('Tell me %SlaveName%. What do you have at hand that can be used instead of a dildo?').getAnswer();
            } else {
                sendMessage('That\'s a shame');
                //TODO: convince to buy
                toy = null;

                //Try to find a different module
                tryRunModuleFetchId();
            }
        }

        if(toy != null) {
            if (!fetchToy(toy)) {
                sendMessage("I guess we have to do something different then");
                sendMessage("But don't expect it to be pleasant after you disappointed me like that %Lol%");
            } else {
                startBlowToy(toy);
                randomBlowjobModule(toy);

                sendMessage("Good work %SlaveName%");
                sendMessage("You can put that " + toy + " aside for now");
            }
        }
    }
}