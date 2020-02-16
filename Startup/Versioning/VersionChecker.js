{
    if(!isVar(VARIABLE.SPICY_VERSION)) {
        setVar(VARIABLE.SPICY_VERSION, getVar('personalityVersion', 0.1));
    }

    /*let checkingVersion = 0.2;
    if(getVar(VARIABLE.SPICY_VERSION) <= checkingVersion) {
        sendVirtualAssistantMessage('New version ' + checkingVersion + ' requires some user input');
        sendVirtualAssistantMessage('Commencing update routine');
        setupEStimToy(null);

        setVar(VARIABLE.SPICY_VERSION, checkingVersion);
    }*/

    /*checkingVersion = 0.3;
    if(getVar(VARIABLE.SPICY_VERSION) <= checkingVersion) {
        //Do update stuff

        setVar(VARIABLE.SPICY_VERSION, checkingVersion);
    }*/
}