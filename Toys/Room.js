
function askForBathroom() {
    if (isVar('bathroomNearby')) {
        return getVar('bathroomNearby');
    }

    if (sendYesOrNoQuestion("%SlaveName%. Is there a private bathroom nearby?")) {
        sendGoodForMe();
        setTempVar('bathroomNearby', true);
        return true;
    } else {
        sendMessage('Well that\'s a shame...');
        setTempVar('bathroomNearby', false);
        return false;
    }
}

function askForFeatheredToiletLid() {
    if (isVar('canUseToiletLid')) {
        return getVar('canUseToiletLid');
    }

    if (sendYesOrNoQuestion("Does your bathroom have a toilet lid that is not feathered?")) {
        sendGoodForMe();
        setTempVar('canUseToiletLid', true);
        return true;
    } else {
        sendMessage('Well that\'s a shame...');

        if (sendYesOrNoQuestion('Do you have a heavy book or anything around that can replace the lid?')) {
            sendGoodForMe();
            setTempVar('canUseToiletLid', true);
            return true;
        } else {
            sendMessage('Oh well, that is a pity');
            setTempVar('canUseToiletLid', false);
            return false;
        }
    }
}
