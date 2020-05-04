
function askForBathroom() {
    const answer = sendInput("%SlaveName%. Is there a private bathroom nearby?");
    while (true) {
        if (answer.isLike("yes", "ready")) {
            sendGoodForMe();
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
    while (true) {
        if (answer.isLike("yes")) {
            sendGoodForMe();
            return true;
        } else if (answer.isLike("no", "don't", "can't")) {
            sendMessage('Well that\'s a shame...');

            if(sendYesOrNoQuestion('Do you have a heavy book or anything around that can replace the lit?')) {
                sendGoodForMe();
                return true;
            }

            return false;
        }
    }
}
