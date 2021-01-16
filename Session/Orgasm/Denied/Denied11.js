{
    if (tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_DENIED);
        run('Session/Orgasm/All/AllOrgasm3.js');

        //Glitter
        if(isChance(50)) {
            let contactId = 3;
            addContact(contactId);
            sendMessage("Get ready, %SlaveName%");

            setSender(contactId);
            sendMessage("I don\'t think you should let him cum, %DomName%");
            sendMessage("I don\'t think he deserves that kind of pleasure");

            setSender(1);
            sendMessage('But he\'s so ready for it now... %EmoteHappy%');

            setSender(contactId);
            sendMessage("I know, that\'s exactly why you shouldn\'t let him cum %Lol%");
            sendMessage("Get him all worked up, ready to spray that jizz all over the place, and then...");
            sendMessage("...DENIED... it\'s perfect! %Lol%");

            setSender(1);
            sendMessage("Mmm I don\'t know...");
            startEdging(getEdgeHoldSeconds());

            sendMessage("Sorry %SlaveName% but %domFriend2Name% is right");
            sendMessage("It\'s much more fun to keep you denied %Grin%");

            setSender(contactId);
            sendMessage("That\'s right, enjoy your blue balls, %SlaveName% %Lol%");

            setSender(1);
            removeContact(contactId);

            sendMessage("Aww poor %SlaveName% - you thought you were going to get to cum...");
            sendMessage("Well... maybe next time %EmoteHappy%");
        } else {
            sendMessage("And you know what, that\'s exactly the way I like it");
            sendMessage("Yes, that means I\'ve changed my mind about letting you cum");
            sendMessage("So I\'m going to make you edge one more time, but you\'re not going to cum");
            startEdging(getEdgeHoldSeconds());
            sendMessage("%LetEdgeFade%");
        }
    }
}