function incrementVar(varName, object, defaultValue = 0) {
    setVar(varName, getVar(varName, defaultValue) + object);
}

function sendYesOrNoQuestion(question) {
    let answer = sendInput(question);

    while(true) {
        if(answer.isLike('yes')) {
            return true;
        } else if(answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}