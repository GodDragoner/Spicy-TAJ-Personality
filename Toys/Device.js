function hasPortableDevice() {
    if(isVar('portableDevice')) {
        return getVar('portableDevice');
    }

    const answer = sendInput("%SlaveName%. Are you currently running this program on a portable device?");
    while (true) {
        if (answer.isLike("yes", "ready")) {
            sendMessage("%Good%");
            setTempVar('portableDevice', true);
            return true;
        } else if (answer.isLike("no", "don't", "can't")) {
            sendMessage('Well that\'s a shame...');
            setTempVar('portableDevice', false);
            return false;
        }
    }
}