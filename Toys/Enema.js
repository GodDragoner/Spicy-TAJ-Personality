//TODO: Enema tasks (idea: Enema -> plug it for x duration, do sports, go for a walk etc.)

function getEnemaLevel() {
    if(getVar(VARIABLE_ASS_LEVEL) >= 25) {
        return 5;
    } else if(getVar(VARIABLE_ASS_LEVEL) >= 20) {
        return 4;
    } else if(getVar(VARIABLE_ASS_LEVEL) >= 15) {
        return 3;
    } else if(getVar(VARIABLE_ASS_LEVEL) >= 10) {
        return 2;
    } else if(getVar(VARIABLE_ASS_LEVEL) >= 5) {
        return 1;
    } else {
        return 0;
    }
}

function hasEnemaKit() {
    return getVar('toyEnemaKit', false);
}

function runEnemaIntro() {
    sendMessage("First of all");
    sendMessage("I know that you own an enema kit");
    sendMessage("This means you will also put it to good use");
    sendMessage("I want your ass to be clean for our toys");

    if(getASMLimit() == LIMIT_ASKED_YES) {
        sendMessage("And you should too");
        sendMessage("Because as you know you have lick them clean at the end %Grin%");
    }

    sendMessage("This means you will have to do at least one enema every 2 - 3 days");
    sendMessage("I will pin new enema instructions to your pinboard");
    sendMessage('You can report to me at the pinboard if you did an enema and I will put up a new enema instruction');
    sendMessage("Make sure not to skip them");
    sendMessage("Otherwise you will have to face consequence %SlaveName%");
}