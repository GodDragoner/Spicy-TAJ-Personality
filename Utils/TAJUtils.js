let StopWatch = Java.type("org.apache.commons.lang.time.StopWatch");

function incrementVar(varName, object, defaultValue = 0) {
    setVar(varName, getVar(varName, defaultValue) + object);
}

function sendYesOrNoQuestion(question) {
    if(CURRENT_SENDER === SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(question, 0);
        return createYesOrNoQuestion();
    }

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

function createYesOrNoQuestion() {
    let answer = createInput();

    while(true) {
        if(answer.isLike('yes')) {
            return true;
        } else if(answer.isLike('no')) {
            return false;
        } else {
            sendMessageBasedOnSender(YES_OR_NO);
            answer.loop();
        }
    }
}
