{
    let unallowedEdges = getVar(VARIABLE.UNALLOWED_EDGES, 0);

    if(unallowedEdges <= 1) {
        sendMessage('C\'mon %SlaveName%, you\'re only supposed to edge when I say so');
        sendMessage('For example, when I say...');
        startEdging();
        sendMessage('That wasn\'t so hard, was it?');
        sendMessage('Just try to keep away from the edge until I want you to');
        sendMessage('Or I might have to punish you...');
        sendMessage('Actually, that sounds like fun too %Lol%');
        sendMessage('Anyway, you can always ask me for an edge if you feel like you need it');
    } else if(unallowedEdges === 2) {
        sendMessage('%LetTheEdgeFade%');
        sendMessage('You edged without permission again, %SlaveName%');

        if(CBT_LIMIT.isAllowed() && !isFullSizedChastityOn()) {
            sendMessage('Your %Balls% are going to wish you didn\'t %Lol%');
            punishSmallBustBallsMultiple();
        }

        sendMessage('Try not to edge unless I tell you to');
        sendMessage('Or I might make you cum and eat it next time %EmoteWink%');
    } else if(unallowedEdges === 3) {
        sendMessage('%LetTheEdgeFade%');

        if(hasChastityCage() && isChastityPunishment() && isChance(40)) {
            sendMessage('So many edges without permission %GeneralTime%');
            sendMessage('It seems you can\'t handle it, %SlaveName%');
            sendMessage('So you leave me no choice...');
            sendMessage('I\'m going to have to put you in chastity');
            lockChastityCage();
            sendMessage('You won\'t be doing any more edges for a while %Smile%');
        } else {
            sendMessage('You\'re definitely having trouble keeping away from the edge %GeneralTime%');
            sendMessage('What should we do about that, hm?');
            sendMessage('Maybe you just need to do more edges');

            if(sendYesOrNoQuestion('Does it become easier after a while?')) {
                sendMessage('Hmm');
            } else {
                sendMessage('Hmm');
            }

            sendMessage('I think I\'m going to edge myself later to test that...');
            sendMessage('Just ' + random('thinking about ', 'the thought of ') + 'it ' + random('makes me horny ', 'makes me hot ', 'turns me on ') + '%Moan% %Laugh%');
            sendMessage('But let\'s not forget that you edged without permission here...');
            sendMessage('I have to admit, %SlaveName%');
            sendMessage('I kind of like it when you are disobedient');
            sendMessage('Because it gives me a reason to punish you');

            smallPunishment();
        }

    } else {
        sendMessage('%LetTheEdgeFade%');
        sendMessage('I think you know how I feel about edging without permission, %SlaveName%');

        if(!CEI_LIMIT.isAllowed()) {
            //QUALITY: Introduce in story (Miss Blue CEITraining)
            sendMessage('You know, my friends think I should make you eat your cum');
            sendMessage('And they\'re probably right...');
            startEdging(getEdgeHoldSeconds());
            sendMessage('%LetTheEdgeFade%');
            sendMessage('It\'s the right thing for a submissive man to do, %SlaveName%');
            sendMessage('Think about all those girls who swallow just to please their partners');
            sendMessage('And you don\'t even eat your <i>own</i> cum?');
            sendMessage('That\'s not right, %SlaveName%');
            startEdging(getEdgeHoldSeconds());
            sendMessage('%LetTheEdgeFade%');
            sendMessage('I\'m not even making you swallow other guys\' cum');
            sendMessage('So I\'m not even asking that much when I ask you to swallow your own');
            sendMessage('I want you to think about that, %SlaveName%');
            startEdging();
            sendMessage('%LetTheEdgeFade%');
        } else {
            sendMessage('Next time <i>ask</i> if you need to edge');
            sendMessage('Although of course...');
            sendMessage('There\'s no guarantee that I\'ll let you %Laugh%');
            sendMessage('At least when you edge without asking, I get to punish you');
            smallPunishment();
        }
    }
}