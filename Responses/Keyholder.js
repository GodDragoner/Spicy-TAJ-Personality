addResponseRegex("(want|Want|be|Be).*my keyholder");

function keyholderResponse(message) {
    if(RULE_DOMME_KEYHOLDER.isActive()) {
        sendMessage('Your cock is already all mine %SlaveName%');
        sendMessage('I solely hold the key to your pleasure and my cock %Grin%');
    } else {
        if(isVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER)) {
            sendMessage(random('I already told you we are gonna deal with that later on', 'You already told me that', 'I remember you already telling me this %SlaveName%',
                'You don\'t have to repeat yourself', 'Repeating yourself won\'t change a thing but make me angry'));

            registerRepeatingText();
        } else {
            sendMessage('Now that\'s an interesting thought... Let\'s discuss that later');
            setTempVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, true);
        }
    }

    return false;
}