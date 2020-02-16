{
    if (tryRunLinkFetchId()) {
        //TODO: Never kneel setting?
        if(!getVar(VARIABLE.IS_KNEELING, false)) {
            startKneeling();
        }

        sendMessage("Have you noticed any changes in your behaviour?");
        sendMessage("I think you\'re become more docile, more obedient, like a tamed animal");
        sendMessage("It\'s not always clear at the start that a boy can be trained");
        sendMessage("But look at you now %Grin%");
        sendMessage("Like a puppet on a string you obey my every command");
    }
}
