function askAndFetchIceCubes(amount) {
    if(askForIceCubes(amount) == amount) {
        return fetchIceCubes(amount);
    }

    return false;
}

function fetchIceCubes(amount) {
    sendMessage('Fetch me ' + amount + ' ice cubes %SlaveName%');
    sendMessage('Tell me when you are done');
    waitForDone();
    sendMessage('%Good%');
    return true;
}

function askForIceCubes(amount) {
    const answer = sendInput('Do you have some ice cubes in your fridge?');

    while(true) {
        if(answer.isLike('yes')) {
            return amount;
        } else if(answer.isLike('no')) {
            return -1;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    return -1;
}