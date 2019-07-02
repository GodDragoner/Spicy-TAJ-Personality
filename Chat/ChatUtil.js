const YES_OR_NO = "Yes or no?";
const TAJ_CHAT_HANDLER = Java.type('me.goddragon.teaseai.api.chat.ChatHandler');
const DEBUG_MODE = true;

const SENDER_TAJ = 1;
const SENDER_ASSISTANT = 0;

const ANSWER_YES = 0;
const ANSWER_NO = 1;
const ANSWER_TIMEOUT = 2;

let CURRENT_SENDER = SENDER_TAJ;

function sendDebugMessage(message) {
    if (DEBUG_MODE) {
        sendVirtualAssistantMessage(message, false, true);
    }
}

function getCurrentSender() {
    return CURRENT_SENDER;
}

function setCurrentSender(sender) {
    CURRENT_SENDER = sender;
}

function sendMessageBasedOnSender(message, secondsToWait = undefined, skipImage = false) {
    if (getCurrentSender() === SENDER_TAJ) {
        if (skipImage) {
            lockImages();
        }

        if (secondsToWait === undefined) {
            sendMessage(message);
        } else if (secondsToWait !== false) {
            sendMessage(message, secondsToWait);
        } else {
            sendMessage(message);
        }

        if (skipImage) {
            unlockImages();
        }
    } else if (getCurrentSender() == SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(message, secondsToWait, skipImage);
    } else {
        sendVirtualAssistantMessage('Error: Sender id ' + getCurrentSender() + ' is unknown');
    }
}

function sendVirtualAssistantMessage(message, wait, skipImage) {
    let textName = new javafx.scene.text.Text("[Vivienne]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.ROYALBLUE);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.MEDIUM, 13));

    sendCustomMessage(textName, text);

    //Show image
    if (skipImage === undefined || !skipImage) {
        if (!isImagesLocked()) {
            showImage("Images/Spicy/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.jpg");
        }
    }

    if (wait === undefined || wait) {
        sleep(1000 + message.length * 50, "MILLISECONDS");
    }
}

function sendSystemMessage(message) {
    let text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 13));

    sendCustomMessage(text);
}


function addContact(id) {
    let contactName = "";

    if (id > 2) {
        contactName = '%domFriend' + (id - 2) + 'Name%';
    } else {
        contactName = '%domName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));


    let text = new javafx.scene.text.Text(' joined the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function removeContact(id) {
    let contactName = "";

    if (id > 2) {
        contactName = '%domFriend' + (id - 2) + 'Name%';
    } else {
        contactName = '%domName%';
    }

    let textName = new javafx.scene.text.Text(replaceVocab(contactName));
    textName.setFill(TAJ_CHAT_HANDLER.getHandler().getParticipantById(id).getNameColor());
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    let text = new javafx.scene.text.Text(' left the chat');
    text.setFill(javafx.scene.paint.Color.AQUA);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    sendCustomMessage(textName, text);
}

function createIntegerInput(question, min, max, notNumberMessage, outOfRangeMessage) {
    sendMessageBasedOnSender(question, 0);
    let answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            if (min === undefined && max === undefined) {
                return answer.getInt();
            } else {
                let int = answer.getInt();
                if (int >= min && int <= max) {
                    return int;
                }

                sendMessageBasedOnSender(outOfRangeMessage);
                answer.loop();
            }
        } else {
            sendMessageBasedOnSender(notNumberMessage);
            answer.loop();
        }
    }
}


function sendYesOrNoQuestion(question, sender = null) {
    let previousSender = getCurrentSender();

    if (sender !== null) {
        setCurrentSender(sender);
    }

    if (getCurrentSender() === SENDER_ASSISTANT) {
        sendVirtualAssistantMessage(question, 0);
        return createYesOrNoQuestion();
    }

    let answer = sendInput(question);

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    //Restore sender
    if (sender !== null) {
        setCurrentSender(previousSender);
    }
}


function sendYesOrNoQuestionTimeout(question, timeout) {
    let answer = sendInput(question, timeout);

    while (true) {
        if (answer.isTimeout()) {
            return ANSWER_TIMEOUT;
        } else if (answer.isLike('yes')) {
            return ANSWER_YES;
        } else if (answer.isLike('no')) {
            return ANSWER_NO;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

function createYesOrNoQuestion() {
    let answer = createInput();

    while (true) {
        if (answer.isLike('yes')) {
            return true;
        } else if (answer.isLike('no')) {
            return false;
        } else {
            sendMessageBasedOnSender(YES_OR_NO);
            answer.loop();
        }
    }
}