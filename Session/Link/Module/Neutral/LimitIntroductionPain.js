{
    if (tryRunLinkFetchId()) {
        if (PAIN_LIMIT.isHardLimit() || PAIN_LIMIT.isAllowed()) {
            if (PAIN_LIMIT.isAllowed()) {
                if (CLOTHESPINS_TOY.hasToy() && CLOTHESPINS_TOY.isPlayAllowed() && CLOTHESPINS_TOY.fetchToy(4)) {
                    sendMessage('Go ahead and put 2 on each of your inner thighs %SlaveNameSmiley%');
                    sendMessage('Once you\'re done...');
                    sendMessage('I want you to flick each clothepin 2 times');
                    sendMessage('If any of them fall of you will repeat this from the beginning %SlaveName%');
                    sendMessage('Tell me when you are done and don\'t make wait too long for it');
                    waitForDone(200);
                    sendMessage('You can remove the 4 clothespins now again');

                    if (getTotalAttachedClamps() > 0) {
                        sendMessage('All other clamps will stay where they are');
                    }

                    sendMessage('You know I like the idea of inflicting pain every now and then just to remind you of your place');
                    sendMessage('Just to remind you that I don\'t need a reason to hurt you');
                    sendMessage('That I own each and every inch of that body of yours');
                    sendMessage('It\'s my toy and I decide what happens to it');
                } else {
                    sendMessage('Lucky you I was about to make you suffer some pain but...');
                    sendMessage('I feel generous enough to not go through with it right now');

                    if (sendYesOrNoQuestion('I am a generous %DomHonorific% aren\'t I?')) {
                        sendMessage('Mhmm yes I am');
                        sendMessage('But don\'t feel too safe because I might change my mind at any time %SlaveNameSmiley%');
                    } else {
                        sendMessage('No?');
                        sendMessage('Seems like you would rather experience some pain right now?');
                        sendMessage('I can take care of that right now %SlaveName%');
                        changeMeritLow(true);
                        smallPunishment(CBT_LIMIT.isAllowed(), true);
                    }
                }
            } else {
                findLinkAndRun();
            }
        } else {
            sendMessage('All this should be less about pleasure and more about pain');
            sendMessage('It should be about pushing you to your limits...');
            sendMessage('You should fear a severe spanking from me so much that you\'ll stay in line and obey even if I am pushing your limits %SlaveName%');

            if (PAIN_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
                if (sendYesOrNoQuestion('This is what you want, isn\'t it?')) {
                    sendMessage('You are so predictable %Lol%');
                    sendMessage('At least you understand what your place is');
                    sendMessage('And that in order for a slave like you to earn pleasure, a price must be paid');

                    //in this case just allow a little humiliation unless it is a hard limit
                    if (!VERBAL_HUMILIATION_LIMIT.isHardLimit()) {
                        sendMessage('You deserve to be treated like the pathetic worm that you are');
                    }

                    PAIN_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                } else {
                    sendMessage('But it\'s what I want %SlaveName%');
                    PAIN_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                }
            } else {
                PAIN_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            }
        }
    }
}