
const GAG_TYPE_SPIDER_GAG = {id: 0, name: 'spider gag'};
const GAG_TYPE_BALL_GAG = {id: 1, name: 'ball gag'};
const GAG_TYPE_BUTTPLUG_GAG = {id: 2, name: 'buttplug'};
const GAG_TYPE_INFLATEABLE_GAG = {id: 3, name: 'inflateable gag'};
const GAG_TYPE_DILDO_GAG = {id: 4, name: 'dildo gag'};

let currentGagType = GAG_TYPE_BALL_GAG;

function isGaged() {
    return getVar(VARIABLE_IS_GAGED, false);
}

function setGaged(gaged) {
    return setVar(VARIABLE_IS_GAGED, gaged);
}

function hasBallGag() {
    return getVar("toyBallGag", false);
}

//TODO: Different gag types
function putInGag(gagType = GAG_TYPE_BALL_GAG) {
    if (!fetchToy(gagType.name)) {
        return false;
    }

    sendMessage('Now put it in. Tell me when you are done %SlaveName%');
    waitForDone();

    return true;
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