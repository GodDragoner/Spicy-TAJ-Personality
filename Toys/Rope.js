function hasBallsTied() {
    return isVar(VARIABLE_IS_BALLS_TIED) && getVar(VARIABLE_IS_BALLS_TIED);
}

function untieBalls() {
    sendMessage('Untie your balls %SlaveName%');
    sendMessage('Tell me when you are done...');
    
    const answer = createInput();
    
    while(true) {
        if (answer.isLike('done', 'yes', 'ready')) {
            sendMessage('%Good%');
            break;
        } else {
            sendMessage('Have you untied your balls yet %SlaveName%?');
            answer.loop();
        }
    }
    
    setTempVar(VARIABLE_IS_BALLS_TIED, false);
}