{
    if (tryRunLinkFetchId()) {
        if (PEE_LIMIT.isHardLimit() || PEE_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            sendMessage('You know sometimes I have the craziest ideas');
            sendMessage('You should already know I really get off on humiliating you %SlaveNameSmiley%');
            sendMessage('Turning you into my little personal toy to fuck around with');
            sendMessage('I like the idea of forcing you to do things against your will');
            sendMessage('Things that humiliate you or gross you out');
            sendMessage('Pushing and crossing your limits one could call it');

            sendMessage('And recently one of my Domme friends told me about her recent session with a sub...');
            sendMessage('And you won\'t believe what she came up with');
            sendMessage('She made HIM drink HER pee %Lol%');

            if (sendYesOrNoQuestion('Can you imagine how degrading this must have been for him?')) {
                sendMessage('Mhmm yes yes');
                sendMessage('It certainly must have been so degrading');
                sendMessage('I mean tasting someones pee and more importantly being forced to');
                sendMessage('This must have been so humiliating and gross');
            } else {
                if (sendYesOrNoQuestion('Wow... You\'d like that?')) {
                    if (sendYesOrNoQuestion('You just are born to be a little nasty slave aren\'t you?')) {
                        sendMessage('Yes you are %SlaveNameSmiley%');
                    } else {
                        sendMessage('If not born to be you are made to be by me %Grin%');
                    }
                } else {
                    sendMessage('Yea, I don\'t think anyone would LIKE it');
                    sendMessage('Doesn\'t mean they can\'t be made to like it %Grin%');
                }
            }

            sendMessage('Anyway...');
            sendMessage('Her story really got me thinking and my mind all crazy');
            PEE_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
        }
    }
}