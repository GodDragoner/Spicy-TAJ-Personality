const INFLATABLE_BUTT_PLUG = createToy('inflatable butt plug');
INFLATABLE_BUTT_PLUG.askForVibration = function() {
    sendVirtualAssistantMessage('Does it have the possibility to vibrate?', 0);
    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar('INFLATEABLE_PLUG_VIBRATING', true);
            sendVirtualAssistantMessage('This should be fun %Grin%');
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage('%EmoteSad%');
            setVar('INFLATEABLE_PLUG_VIBRATING', false);
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }
};

INFLATABLE_BUTT_PLUG.canVibrate = function() {
    return getVar('INFLATEABLE_PLUG_VIBRATING', false);
};

let inflatablePlugPumps = 0;

function putInInflatablePlug() {
    if (INFLATABLE_BUTT_PLUG.fetchToy()) {
        if(isPlugged()) {
            removeButtplug();
        }

        sendMessage('And now put it in %SlaveName%');
        sendMessage('Tell me when you are done');
        waitForDone();
        setTempVar(VARIABLE.IS_PLUGGED, true);

        return true;
    }

    return false;
}

function pumpInflatablePlug(amount) {
    inflatablePlugPumps += amount;
}

function deflateInflatablePlug() {
    inflatablePlugPumps = 0;
}