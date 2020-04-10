{
    if (tryRunLinkFetchId()) {
        sendMessage('I\'m going to show you one of your videos');
        sendMessage("But NO touching! Sit on your hands if you have to, %SlaveName%");
        sendMessage('I\'ll be right back %EmoteHappy%');
        setTempVar(VARIABLE.DOMME_AFK, true);
        showCategoryVideo(getRandomMediaCategory());
        watchVideoForDuration(90);
        setTempVar(VARIABLE.DOMME_AFK, false);
        sendMessage('I hope you enjoyed that little clip');
        sendMessage("Must be hard to have to watch porn without touching");
        sendMessage('Oh well.. that\'s one of those problems that I don\'t ever have to deal with %Lol%');

        if(CEI_LIMIT.isAllowed()) {
            if(sendYesOrNoQuestion("Are you hoping you can eat your cum today?")) {

            }

            sendMessage("I guess you\'ll just have to wait and see... %Grin%");
            /*--UNINTERPRETED LINE:@OrgasmRestricted Oh wait, you don't even get to cum today #Laugh @Goto(Oh Wait)
            No cum eating #GeneralTime then, lucky you #EmoteWink*/

        }
    }
}