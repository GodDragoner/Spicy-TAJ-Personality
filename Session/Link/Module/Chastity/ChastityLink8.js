{
    if (tryRunLinkFetchId()) {
        sendMessage("I know you like doing whatever I tell you to do");
        sendMessage("Obedience give you pleasure, it's hard-wired into your brain");

        if(getCEILimit() == LIMIT_ASKED_YES) {
            sendMessage("That's why you'll eat your cum for me if I tell you to");

            if(FEET_LIMIT.isAllowed()) {
                sendMessage("You'd lick it off my beautiful feet if that's what I want");
            } else if(!FEET_LIMIT.isHardLimit()) {
                sendMessage('Tell me %SlaveName%...');

                if(sendYesOrNoQuestion('Would you lick it of my feet?')) {
                    sendMessage('You are really that submissive and desperate, aren\'t you? %Grin%');

                    if(sendYesOrNoQuestion('Do you have a foot fetish?')) {
                        sendMessage('Great. I could use some foot worship right now. My left foot is really sore %EmoteSad%');
                        FEET_LIMIT.setLimit(LIMIT_ASKED_YES);
                    } else {
                        sendMessage('If you were here with me I\'d make you lick it off my feet just to degrade you %EmoteHappy%');
                    }
                } else {
                    sendMessage('Well...');
                    sendMessage('Maybe I should try getting you desperate enough to taste my feet in addition to your cum %Lol%');
                }
            }
        }

        if(hasChastityCage()) {
            sendMessage("You'll stay in chastity for as long as I think is necessary");
        }

        sendMessage("It's a wonderful thing, %SlaveName%");
        sendMessage("Your obedience to me is making you a better, more beautiful person");
    }
}




