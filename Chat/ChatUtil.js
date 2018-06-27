const YES_OR_NO = "Yes or no?";

function sendVirtualAssistantMessage(message, wait, skipImage) {
    textName = new javafx.scene.text.Text("[Vivienne]: ");
    textName.setFill(javafx.scene.paint.Color.ROYALBLUE);
    textName.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 14));

    message = replaceVocab(message);
    text = new javafx.scene.text.Text(message);
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
    text = new javafx.scene.text.Text(message);
    text.setFill(javafx.scene.paint.Color.RED);
    text.setFont(javafx.scene.text.Font.font(null, javafx.scene.text.FontWeight.BOLD, 13));

    sendCustomMessage(text);
}