const INFLATABLE_BUTT_PLUG = createToy('inflatable butt plug');

let inflatablePlugPumps = 0;

function putInInflatablePlug() {
    if (INFLATABLE_BUTT_PLUG.fetchToy()) {
        if(isPlugged()) {
            removeButtplug();
        }

        sendMessage('And now put it in %SlaveName%');
        sendMessage('Tell me when you are done');
        waitForDone();
        setVar(VARIABLE_IS_PLUGGED, true);

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