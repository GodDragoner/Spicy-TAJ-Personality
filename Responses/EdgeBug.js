addResponseRegex("skip edge bug");

function edgeBugResponse(message) {
    endEdge();
    sendDebugMessage('Ended edge internally from bug response');
    delVar(VARIABLE.EDGE_STARTED_DATE);
    return false;
}