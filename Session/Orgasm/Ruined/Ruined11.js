{
    if (tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_RUINED);
        run('Session/Orgasm/All/AllOrgasm3.js');

        //Glitter
        if(isChance(50)) {
            let contactId = 5;
            addContact(contactId);
            sendMessage("Get ready, %SlaveName%");

            setSender(contactId);
            sendMessage("Before you go any further, %DomName%");
            sendMessage("May I make a suggestion for a slight revision of your plan? %Grin%");

            setSender(1);
            sendMessage('What do you have in mind?');

            setSender(contactId);
            sendMessage("I know you want to let him cum now, but...");
            sendMessage("I think you should make it a <i>ruined</i> orgasm... %Grin%");

            setSender(1);
            sendMessage("Mmm you know what, that\\'s not a bad idea, %DomFriendName3%");
            sendMessage('Alright, ruined orgasm it is %EmoteHappy%');

            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            setSender(contactId);
            sendMessage("See, isn't that much more fun?");
            sendMessage("For us at least, not so much for %SlaveName% I guess %Lol%");

            setSender(1);
            sendMessage('As always, you\'re right... it <i>is</i> more fun to make him ruin it! %EmoteHappy%');

            setSender(contactId);
            sendMessage('Glad I could help %Grin%');
            removeContact(contactId);

            setSender(1);
            sendMessage('That didn\'t end quite as pleasurably as you might have hoped, did it...');
            sendMessage('Oh well... at least %DomFriendName3% and I enjoyed it, and that\'s all that matters');


            sendMessage("As always, you\\'re right... it <i>is</i> more fun to make him ruin it! %Grin%");
            sendMessage("Well... maybe next time %EmoteHappy%");
        } else {
            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            sendMessage('I just love doing that to you...');
            sendMessage('Sorry if you were hoping for a \'full\' orgasm, %SlaveName%');
            sendMessage('I did say I\'d let you cum, but I didn\'t say <i>how</i>...');
        }
    }
}