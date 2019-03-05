
function askForBathroom() {
    if(isVar('bathroomNearby')) {
        return getVar('bathroomNearby');
    }

    const answer = sendInput("%SlaveName%. Is there a private bathroom nearby?");
    while (true) {
        if (answer.isLike("yes", "ready")) {
            sendMessage("%Good%");
            setTempVar('bathroomNearby', true)
            return true;
        } else if (answer.isLike("no", "don't", "can't")) {
            sendMessage('Well that\'s a shame...');
            setTempVar('bathroomNearby', false)
            return false;
        }
    }
}
