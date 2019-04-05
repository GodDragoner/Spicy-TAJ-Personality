addResponseRegex("yes", "no", "thanks", "thank you");

function honorificResponse(message) {
    if(!getVar(VARIABLE_CURRENT_SESSION_ACTIVE) || !RULE_ALWAYS_HONORIFIC.isActive()) {
        return false;
    }

    let honorific = replaceVocab('%DomHonorific%');

    if(message.toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
        sendMessage('%SlaveName%');
        sendMessage('You forgot your manners...');
        sendMessage('I am your %DomHonorific%');

        sendMessage('And you have to ALWAYS address me like that');
        registerForgetHonorific();

        //TODO: Consider punishment

        //False because we don't want to interrupt anything
        return false;
    }

    return false;
}