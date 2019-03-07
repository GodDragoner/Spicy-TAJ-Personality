{
    if (tryRunLinkFetchId()) {
        sendMessage("It just occurred to me that you probably don\'t know how girls touch themselves");
        sendMessage("Which is something you should definitely learn about");
        sendMessage("Because that way when you\'re, you know... with someone...");
        sendMessage("You\'ll have a much better idea of what you\'re doing");


        if (getVar(VARIABLE_SUB_IS_VIRGIN, false)) {
            sendMessage("If that\'s ever going to happen, that is");
        }

        sendMessage("The thing is, porn probably isn\'t a good way to learn");
        sendMessage("It\'s much better to do it in person, so I guess I won\'t be able to do much for you");
        if (getVar(VARIABLE_SUB_IS_MARRIED, false) || getVar(VARIABLE_SUB_HAS_GIRLFRIEND, false)) {
            sendMessage("Maybe " + getVar(VARIABLE_SUB_PARTNER_NAME) + " can help you out %Smile%");
        }
    }
}