const YES_OR_NO = "Yes or no?";
const TAJ_CHAT_HANDLER = Java.type('me.goddragon.teaseai.api.chat.ChatHandler');
const DEBUG_MODE = true;


function sendDebugMessage(message) {
    if(DEBUG_MODE) {
        sendVirtualAssistantMessage(message, false, true);
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
    if(skipImage === undefined || !skipImage) {
        showImage("Images/Spicy/Assistant/" + ASSISTANT_CURRENT_SET_ID + "/*.jpg");
    }

    if(wait === undefined || wait) {
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

    if(id > 2) {
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

    if(id > 2) {
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