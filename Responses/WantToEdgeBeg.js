addResponseRegex("I.*(beg|please).*edge");
addResponseRegex("(may|please|May|Please|Let|allowed).*edge");

function wantToEdgeBegResponse(message) {
    if(!isSessionActive()) {
        return false;
    }

    let newValue = incrementTempVar(VARIABLE.RESPONSE_BEG_EDGE_COUNT, 1);

    if (isVar(VARIABLE.BEG_DOMME_TO_EDGE) && !getVar(VARIABLE.BEG_DOMME_TO_EDGE).addSecond(30).hasPassed()) {
        sendMessage(random('That\'s what I like you hear %EmoteHappy%',
            'Good boy, keep begging... ',
            'I love it when you beg me %EmoteHappy%',
            'Mmm yes that\'s a good boy',
            'You sound pretty desperate, %SlaveName% %EmoteHappy%',
            'It makes me so wet when you beg me to edge',
            'I want more, keep begging',
            'Your begging turns me on so much %Moan%',
            '%Moan%',
            '%EmoteHappy%',
            '%Grin%',
            'That\'s a good %SlaveName%',
            'Keep telling me you want it, %SlaveName%',
            'Keep begging %EmoteHappy%',
            'What was that, %SlaveName%? %Grin%',
            'Could you repeat that please?',
            'Maybe if you keep begging I\'ll let you...',
            'Mmm good boy %EmoteHappy%',
            'Good boy'));
    } else {
        sendMessage(random('No',
            'Not now',
            'Nope',
            'Shhh',
            'Not right now',
            'Beg for it, %SlaveName%',
            'Maybe if you beg I\'ll give you what you want',
            'Be careful what you wish for %Grin%',
            'Hmm... maybe I should give you what you want, maybe not',
            'Maybe if you beg for it some more',
            'Maybe later',
            'I don\'t think so, %SlaveName%'));
    }

    return false;
}
