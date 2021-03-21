function hasPortableDevice() {
    if (isVar('portableDevice')) {
        return getVar('portableDevice');
    }

    if (sendYesOrNoQuestion("%SlaveName%. Are you currently running this program on a portable device?")) {
        sendMessage("%Good%");
        setTempVar('portableDevice', true);
        return true;
    } else {
        sendMessage('Well that\'s a shame...');
        setTempVar('portableDevice', false);
        return false;
    }
}