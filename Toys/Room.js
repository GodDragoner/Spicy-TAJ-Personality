
function askForBathroom() {
    //TODO: Think if this makes sense (sub might be at a different location sometimes)
    if(isVar('bathroomNearby')) {
        return getVar('bathroomNearby');
    }

    const answer = sendInput("%SlaveName%. Is there a private bathroom nearby?");
    while (true) {
        if (answer.isLike("yes", "ready")) {
            sendMessage("%Good%");
            setTempVar('bathroomNearby', true);
            return true;
        } else if (answer.isLike("no", "don't", "can't")) {
            sendMessage('Well that\'s a shame...');
            setTempVar('bathroomNearby', false);
            return false;
        }
    }
}

function askForFeatheredToiletLit() {
    const answer = sendInput("Does your bathroom have a toilet lid that is not feathered?");
    while (true) {st
        if (answer.isLike("yes")) {
            sendMessage("%Good%");
            return true;
        } else if (answer.isLike("no", "don't", "can't")) {
            sendMessage('Well that\'s a shame...');

            if(sendYesOrNoQuestion('Do you have a heavy book or anything around that can replace the lit?')) {
                sendMessage("%Good%");
                return true;
            }

            return false;
        }
    }
}
