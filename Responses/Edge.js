addResponseRegex("on the edge", "edge([ ]|$)");

function edgeResponse(message) {
    if(getVar(VARIABLE.CURRENT_SESSION_ACTIVE, false)) {
        if (getVar(VARIABLE.STROKE_TRAINING_ACTIVE, false)) {
            strokeTrainingEdge();
            return true;
        } else if (getVar(VARIABLE.ENDURANCE_STROKES_ACTIVE, false)) {
            //Increment var
            setTempVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS, getVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS) + 1);
            return true;
        } else if (!isEdging() && !isOnEdge() && !message.toLowerCase().contains('may') && !message.toLowerCase().contains('please')) {
            let stroking = false;
            if(isStroking()) {
                stroking = true;
                stopStroking();
            } else {
                //QUALITY: Interaction if edging without stroking
            }

            //Unautherized Edge TODO: More stuff and save how many times unauthorized edging occured
            sendMessage('C\'mon %SlaveName%, you\'re only supposed to edge when I say so');
            sendMessage('For example, when I say...');
            startEdging();
            sendMessage('That wasn\'t so hard, was it?');
            sendMessage('Just try to keep away from the edge until I want you to');
            sendMessage('Or I might have to punish you...');
            sendMessage('Actually, that sounds like fun too %Lol%');
            changeMeritMedium(true);

            //Resume stroking
            if(stroking) {
                startStroking(getStrokingBPM());
            }

            return true;
        }
    }

    return false;
}