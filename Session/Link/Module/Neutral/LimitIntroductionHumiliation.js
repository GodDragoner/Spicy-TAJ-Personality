{
    if (tryRunLinkFetchId()) {
        if (HUMILIATION_LIMIT.isHardLimit() || HUMILIATION_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            if(HUMILIATION_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
                sendMessage('As you should know I am quite creative when it comes to making you, my little pet, suffer for me %Grin%');
                sendMessage('My head always has so many different ideas and I never really get the time to make all of them reality');
                sendMessage('So I have to always decide what to do next and what to discard for now');
                sendMessage('I always try to find the most satisfying option');
                sendMessage('But recently one idea hasn\'t left my mind');
                sendMessage('I sometimes have that one idea that just comes up over and over again');
                sendMessage('And I think it would really turn me on');
                sendMessage('You know the thing is...');
                sendMessage('I just like the power I have over you');
                if(!isInChastity()) {
                    startEdging();
                } else {
                    if(CBT_LIMIT.isAllowed() && !isFullSizedChastityOn()) {
                        smallCBTPunishment(true, false);
                    } else {
                        sendMessage('Having you deny yourself for me and staying in chastity leaking and aching');
                    }
                }

                sendMessage('It\'s things like this that just make me feel so powerful and good');
                sendMessage('But I\'ve been wanting more');
                sendMessage('I want more than just that');
                sendMessage('I want you to be my bitch, my toy, my plaything');
                sendMessage('Someone I get to break whenever I want to');
                sendMessage('Someone I can humiliate in all the imaginable ways');
                HUMILIATION_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            } else {
                sendMessage('I don\'t know if you still remember this %SlaveName%');
                sendMessage('I certainly do...');
                sendMessage('That desire to humiliate you hasn\'t stopped yet');
                sendMessage('For some reason I just can\'t get this idea out of my head %Lol%');
                HUMILIATION_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            }
        }
    }
}