addResponseRegex("on the edge", "edge([ ]|$)");

function edgeResponse(message) {
    if(getVar(VARIABLE_CURRENT_SESSION_ACTIVE, false)) {
        if (getVar(VARIABLE_STROKE_TRAINING_ACTIVE, false)) {
            strokeTrainingEdge();
            return true;
        } else if (!isEdging() && !isOnEdge() && !message.toLowerCase().contains('may') && !message.toLowerCase().contains('please')) {
            //Unautherized Edge TODO: More stuff and save how many times unauthorized edging occured
            sendMessage('C\'mon %SlaveName%, you\'re only supposed to edge when I say so');
            sendMessage('For example, when I say...');
            startEdging();
            sendMessage('That wasn\'t so hard, was it?');
            sendMessage('Just try to keep away from the edge until I want you to');
            sendMessage('Or I might have to punish you...');
            sendMessage('Actually, that sounds like fun too %Lol%');
            changeMeritMedium(true);
            return true;
        }
    }

    return false;
}