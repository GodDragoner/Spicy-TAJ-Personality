{
    if (tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_ALLOWED);
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

            let secondContactId = 4;
            addContact(secondContactId);
            setSender(secondContactId);
            sendMessage('Come on %DomName% - you said you\'d let him cum, you have to do it!');
            sendMessage('And I think he really really REALLY wants it now %EmoteHappy%');
            setSender(1);
            sendMessage('Yeah you\'re right, %DomFriend2Name%');

            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            setSender(contactId);
            sendMessage('Too bad all that horny obedience is gone now, too...');
            setSender(secondContactId);
            sendMessage('We can always rebuild, %DomFriend1Name% %EmoteHappy%');
            setSender(contactId);
            sendMessage('True! %lol%');
            removeContact(contactId);
            setSender(secondContactId);
            sendMessage('Bye bye, %SlaveName% %Giggles%');
            removeContact(secondContactId);
            setSender(1);
            sendMessage('That was a close one, you almost missed out on an amazing orgasm... %EmoteLaugh%')
        } else {
            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            sendMessage("I do think you really needed that...");
        }
    }
}