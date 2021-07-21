addResponseRegex("on the edge", "edge([ ]|$)");

function edgeResponse(message) {
    sendDebugMessage('Received edge response!');

    if(getVar(VARIABLE.CURRENT_SESSION_ACTIVE, false)) {
        sendDebugMessage('Session is active!')
        if (getVar(VARIABLE.STROKE_TRAINING_ACTIVE, false)) {
            strokeTrainingEdge();
            sendDebugMessage('Stroke training is active');
            return true;
        } else if (getVar(VARIABLE.ENDURANCE_STROKES_ACTIVE, false)) {
            //Increment var
            setTempVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS, getVar(VARIABLE.ENDURANCE_STROKES_ATTEMPTS) + 1);
            sendDebugMessage('Endurance strokes is active');
            return true;
        } else if (!isEdging() && !isOnEdge() && !message.toLowerCase().contains('may') && !message.toLowerCase().contains('please')) {
            sendDebugMessage('Unauthorized edge');

            let stroking = false;
            if(isStroking()) {
                stroking = true;
                stopStroking();
            } else {
                //QUALITY: Interaction if edging without stroking
            }

            registerUnallowedEdge();

            //QUALITY: Apology needed interaction

            run('Responses/UnauthorizedEdge/*.js');

            //Resume stroking
            if(stroking) {
                startStroking(getStrokingBPM());
            }

            return true;
        }
    }

    //End edge manually
    if(!isEdging() && isVar(VARIABLE.EDGE_STARTED_DATE)) {
        endEdge();
        sendDebugMessage('Ended edge internally from custom response');
        delVar(VARIABLE.EDGE_STARTED_DATE);
    }

    return false;
}