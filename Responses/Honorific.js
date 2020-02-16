addResponseRegex("yes", "no", "thanks", "thank you");
setResponseIgnoreDisabled(true);

function honorificResponse(message) {
    if(!getVar(VARIABLE.CURRENT_SESSION_ACTIVE)) {
        return false;
    }

    let honorific = replaceVocab('%DomHonorific%');

    if(message.toLowerCase().indexOf(honorific.toLowerCase()) === -1) {
        if(!RULE_ALWAYS_HONORIFIC.isActive()) {
            if(shouldIntroduceNewRule(RULE_ALWAYS_HONORIFIC)) {
                RULE_ALWAYS_HONORIFIC.sendIntroduction();
            }

            return false;
        }

        sendMessage('%SlaveName%');
        sendMessage('You forgot your manners...');
        sendMessage('I am your %DomHonorific%');

        sendMessage('And you have to ALWAYS address me like that');
        registerForgetHonorific();

        if(feelsLikePunishingSlave() && CBT_LIMIT.isAllowed()) {
            sendMessage('You know what?');
            sendMessage('I feel like punishing you for that right now in addition to those punishment points I just assigned you');
            smallCBTPunishment();
        }

        //False because we don't want to interrupt anything
        return false;
    }

    return false;
}