{
    let unallowedEdges = getVar(VARIABLE.UNALLOWED_EDGES, 0);

    if(unallowedEdges <= 1) {
        sendMessage('Just breathe in and out, relax the muscles in that %Cock%');

        if(sendYesOrNoQuestion('Are you having trouble keeping up %SlaveName%?')) {
            sendMessage('No problem %Smile%');

            sendMessage('At least, for now...');
            sendMessage('Don\'t edge without permission too often %SlaveName%');
            sendMessage('It\'s not as bad as <i>cumming</i> without permission, of course');
            sendMessage('But I want to control you edges, as well as your orgasms');
            sendMessage('I want you to edge a lot, but only when I tell you to %Smile%');
            sendMessage('And you can ask me for an edge if you really want it');
            sendMessage('Not that you\'ll always get what you want of course...');
        } else {
            sendMessage('Oh good %Smile%');
            sendMessage('Then we can continue');
        }

    } else if(unallowedEdges === 2) {
        sendMessage('%LetTheEdgeFade%');
        sendMessage('That\'s not the first time %GeneralTime% you got to the edge without permission, %SlaveName%');
        sendMessage('That could mean 2 things');
        sendMessage('Either you need a little break...');
        sendMessage('Or you need some more edge-training');


        let answer = sendInput('What do you think?');

        while(true) {
            if (answer.isLike('break', 'pause', 'stop')) {
                sendMessage('I think so too, but it\'s not a lot of fun is it...');

                startEdging();
                sendMessage('%LetTheEdgeFade%');
                sendMessage('Now you must be thinking');
                sendMessage('That this is just going to make it harder to stay away from the edge');
                sendMessage('But that\'s the whole point %SlaveName%');
                sendMessage('I want it to be very hard');
                sendMessage('Not just your %Cock%');
                sendMessage('I want to make it hard for you to follow instructions');
                sendMessage('Because I want you very frustrated and very horny');
                sendMessage('And when you fail...');
                sendMessage('You just give me an excuse to be <i>really</i> mean to you %Grin%');
                startEdging();
                sendMessage('%LetTheEdgeFade%');
                sendMessage('You\'re going to do one more');
                sendMessage('And this time I want you to hold it for me');
                startEdging(getEdgeHoldSeconds());
                sendMessage('%LetTheEdgeFade%');
                break;
            }
            else if (answer.isLike('training', 'edging')) {
                sendMessage('Hmm maybe, but I don\'t want to to wear you out too quickly..');

                sendMessage('How about...');
                sendMessage('One edge, but a really long one %Grin%');
                startEdging(getEdgeHoldSeconds(EDGE_HOLD_LONG)*2);
                sendMessage('%LetTheEdgeFade%');
                sendMessage('That\'s what I call an edge, %PetName%');
                sendMessage('You\'d better try to stay away from the edge if you want to avoid another one of those');
                sendMessage('Although I might have just made that pretty damn difficult %Grin%');
                break;
            } else {
                sendMessage('Do you need a pause or training?', 0);
                answer.loop();
            }
        }
    } else if(unallowedEdges === 3) {
        sendMessage('%LetTheEdgeFade%');
        sendMessage('You just keep edging without permission no matter what I say, don\'t you');
        sendMessage('I\'m running out of patience, %SlaveName%');
        smallPunishment();
    } else {
        sendMessage('%LetTheEdgeFade%');
        sendMessage('I guess there\'s just no keeping you from edging today...');
    }
}