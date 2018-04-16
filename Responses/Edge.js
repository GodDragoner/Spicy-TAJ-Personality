addResponseRegex("on the edge", "edge([ ]|$)");

function edgeResponse(message) {
    if(getVar(VARIABLE_STROKE_TRAINING_ACTIVE, false)) {
        strokeTrainingEdge();
    }

    return false;
}