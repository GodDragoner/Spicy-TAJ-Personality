{
    if(getVar(VARIABLE.EDGE_TODAY_COUNTER, 0) === 0) {
        //Need a different end link
        run("Session/Link/End/DecideEndLink.js");
    } else {
        if (tryRunEndLinkFetchId()) {
            sendMessage('Can you still feel every single edge I made you do today?');
            sendMessage('%Moan%');
            sendMessage('I almost feel like <i>I</i> can feel them all...');
            sendMessage('I\'m definitely going to have to push myself over the edge later');
            sendMessage('But first...');
            sendMessage('Let\'s see about you, %SlaveName%');
        }
    }
}