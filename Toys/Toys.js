function hasDildoToy() {
    return getVar("toyDildo", false);
}

function getDildoToyMode() {
    return getVar("toyDildoInteractionMode");
}

function fetchToy(toy) {
    sendMessage("Go ahead and " + random("fetch", "get", "retrieve") +  " your " + toy);

    const answer = sendInput("Tell me when you are ready to continue.");
    while(true) {
        if(answer.isLike("done", "yes")) {
            sendMessage("%Good%");
            break;
        } else if(answer.isLike("no", "don't", "can't")) {
            sendMessage("What?!");
            sendMessage("That is unacceptable!");
            sendMessage("You should always have your toys around!");
            changeMeritHigh(true);
            sendMessage("Well then....");
            break;
        } else {
            sendMessage("Are you done yet?");
            answer.loop();
        }
    }
}