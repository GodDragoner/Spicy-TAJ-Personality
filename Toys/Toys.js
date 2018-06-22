run("Toys/ChastityCage.js");
run("Toys/Buttplug.js");
run("Toys/Gag.js");
run("Toys/Dildo.js");
run("Toys/Lube.js");

function hasDildoToy() {
    return getVar("toyDildo", false);
}

function getDildoToyMode() {
    return getVar("toyDildoInteractionMode");
}

function readyInput() {
    const answer = sendInput("Tell me when you are ready %SlaveName%", "Are you ready?", "Are you ready %SlaveName%?");

    while(true) {
        if(answer.isLike("ready", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Well then, better hurry up!", "Then don't waste my time and tell me when you are ready!");
            answer.loop();
        }
    }
}

function fetchToy(toy) {
    sendMessage("Go ahead and " + random("fetch", "get", "retrieve") +  " your " + toy);

    const answer = sendInput("Tell me when you are ready to continue.");
    while(true) {
        if(answer.isLike("done", "yes", "ready")) {
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