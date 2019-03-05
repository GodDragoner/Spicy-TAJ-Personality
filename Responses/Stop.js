addResponseRegex('stop');

function stopResponse(message) {
    if(isVar('gayPictureGameIndex')) {
        setTempVar('interruptPictureGame', true);
        return true;
    }

    return false;
}