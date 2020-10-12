function itHurtsResponse(message) {
    sendMessage("Oh... " + random("Does it hurt you?", "Are you in pain?") + " %EmoteSad%");
    sendMessage("%SlaveName%...");
    sendMessage("I know it hurts");

    return continueHurtResponse();
}

function continueHurtResponse() {

    let newValue = incrementTempVar(VARIABLE.RESPONSE_IT_HURTS_COUNT, 1);

    registerComplain();

    if (newValue > 2) {
        sendMessage('And you have told me already before');
        sendMessage('I don\'t want to hear you whining!');
        sendMessage('Take it like the bitch you are');
        registerRepeatingText();
        return false;
    }

    dontCareItHurts();
    return false;
}

function dontCareItHurts() {
    let answer = randomInteger(0, 3);

    switch (answer) {
        case 0:
            sendMessage("But the thing is...");
            sendMessage("I don't freaking care %Lol%");
            break;
        case 1:
            sendMessage(random("But", "However") + " it entertains me when you are in pain");
            break;
        case 2:
            sendMessage("But you are an obedient little %SlaveName%");
            sendMessage("And you will follow my " + random("orders", "commands", "will"));
            break;
        case 3:
            sendMessage("But...");
            sendMessage("You will follow my " + random("orders", "commands", "will"));
            break;
    }

    if (isChance(50)) {
        sendMessage(random("So", "Which means") + " we'll keep going %Grin%");
    }
}