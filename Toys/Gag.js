
function isGaged() {
    return getVar(VARIABLE_IS_GAGED, false);
}

function hasBallGag() {
    return getVar("toyGag", false);
}

function removeGag() {
    sendMessage("%SlaveName% go ahead and remove that gag from your mouth");
    let answer = sendInput("Tell me when you are ready to continue");
    while(true) {
        if(answer.isLike("done", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Have you removed the gag yet?");
            answer.loop();
        }
    }

    sendMessage("Put the gag aside for now");
    setTempVar(VARIABLE_IS_GAGED, false);
}