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

    sendDebugMessage('Got edge response from sub');

    return false;
}