const ICY_HOT_TOY = createToy('icy hot');

ICY_HOT_TOY.askForToy = function (variableName, imageName) {
    if (variableName === undefined) {
        variableName = this.getVarName();
    }

    if (imageName === undefined) {
        imageName = this.getImageName();
    }

    sendVirtualAssistantMessage("Hot sauce or icy hot? Toothpaste can work too for the time being.", false);
    showPicture("Images/Spicy/Toys/" + imageName + ".jpg", 0);

    setCurrentSender(SENDER_ASSISTANT);

    if (createYesOrNoQuestion()) {
        setVar(variableName, true);
        sendVirtualAssistantMessage("%Good%");
        return true;
    } else {
        //Delete var if sub does not have the toy
        if (isVar(variableName)) {
            delVar(variableName);
        }

        sendVirtualAssistantMessage("%EmoteSad%");
    }

    setCurrentSender(SENDER_TAJ);

    return false;
};