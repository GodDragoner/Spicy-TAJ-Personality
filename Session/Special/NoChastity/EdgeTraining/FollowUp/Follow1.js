{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Time to get back to edge training %Grin%');
    startKneeling();
    sendMessage('So get down on all fours, doggy');
    sendMessage('And let\'s see how much you can take for me');
    startEdging();
    sendMessage('Maybe you think I\'ll get bored with this eventually...');
    sendMessage('I\'m not going to get bored with this, %SlaveName%');
    startEdging();
    sendMessage('Do you know why I will never get bored with it?');
    sendMessage('Because it fucking turns me on, that\'s why %Lol%');
    startEdging();
    sendMessage('It makes me wet to know that you are struggling to keep yourself from cumming');
    sendMessage('When I\'m done with you I\'m going to masturbate knowing how much I control you');
    sendMessage('All that pain you feel is going straight to my clit, %SlaveName%');
    startEdging();
    sendMessage('%Moan%');
    startEdging();
    sendMessage('Mmm I almost forgot that this is supposed to be a training session for you %Lol%');
    sendMessage('I guess it can be two things...');
    startMultipleEdges(2, 5);
    sendMessage('I\'ve been keeping track and I\'ve only made you do so ' + getVar(VARIABLE.EDGE_TODAY_COUNTER, 0) + ' so far %GeneralTime%');
    sendMessage('Time to get that number up!');
    startMultipleEdges(5, 7);
    sendMessage('By the way, I know I\'m not going to get bored with this...');
    sendMessage('But maybe you are...?');
    sendMessage('Would there ever be a time when you just go: edging? meh');
    startEdging();
    sendMessage('I don\'t think make you edge will ever lose any of it\'s magic');
    sendMessage('Not for me and certainly not for you');
    startEdging();
    sendMessage('Come on my little edge puppy, push a little harder against that edge!');
    startEdging();
    sendMessage('You\'re going to hold this next one...');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('So my little doggie...');

    let canTakeMore = true;

    if (sendYesOrNoQuestion('Do you think you\'ve had enough?')) {
        sendMessage('Ah? interesting...');

        sendMessage('Let me get this straight, %SlaveName%');
        if (sendYesOrNoQuestion('Are you saying that you can\'t take any more edges?')) {
            sendMessage('Hmm');
            canTakeMore = false;
        } else {
            sendMessage('Okay, so that means we can continue %Grin%');
        }
    } else {
        sendMessage('Good, I don\'t think so either');
        changeMeritLow(false);
    }

    if (canTakeMore) {
        startEdging();
        sendMessage('I\'m glad you decided to keep going');
    } else {
        //TODO: @NullResponse @CallReturn(Custom/Decisions/EdgingCantTakeIt.txt)
        startEdging();
        sendMessage('Whether you\'ve had enough or not is <i>my</i> decision, %SlaveName%');
    }

    startEdging();
    sendMessage('There\'s nothing now that can keep me from doing what I need to do');
    sendMessage('No amount of begging is going to stop me from edging you until you go insane');
    startMultipleEdges(7, 6);
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('Let\'s face it, you love this feeling');
    sendMessage('And even if you don\'t feel it right now');
    sendMessage('Once that last edge fades away and all that\'s left is that dull aching afterglow');
    sendMessage('That\'s when you\'ll feel it');
    sendMessage('Pure uncut submission');
    startMultipleEdges(3, 9);
    sendMessage('We\'re not there yet, %SlaveName%');
    sendMessage('I think you have a couple of edges left in you');
    startEdging();
    sendMessage('I\'m not going to stop until I\'ve had enough');
    sendMessage('and I don\'t care if you have reached your limit or whatever');
    sendMessage('You\'ll obey my commands, it\'s as simple as that');
    startEdging();
    sendMessage('There\'s no need to stay away from the edge now, because...');
    startMultipleEdges(4, 8);
    sendMessage('%LetEdgeFade%');
    sendMessage('Take a moment to relax, you\'re going to need it');
    sendMessage('Because in a moment I\'m going to ake you do one more set of edges');
    sendMessage('It\'s going to be 10 edges in quick succession and you will hold the last one');
    sendMessage('After that, your edge training is done for today');
    sendMessage('So get ready...');
    startMultipleEdges(9, 5);
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('Yes, good boy %EmoteHappy%');
    endSpecialSession();
}