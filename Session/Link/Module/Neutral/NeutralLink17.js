{
    if (tryRunLinkFetchId()) {
        if (sendYesOrNoQuestion('You want to cum pretty desperately don\'t you?')) {
            sendMessage('Too bad for you the decision is still mine');

            sendMessage('Maybe I am generous enough to let you cum %GeneralTime%?');
            sendMessage('You couldn\'t possibly know could you? %Grin%');
            sendMessage('Let me give you a small hint...');
            sendMessage('Considering I like the pain of denial VERY much');
            sendMessage('It\'s very unlikely %Lol%');
        } else {
            sendMessage('No?');
            sendMessage('Seems like what I am doing isn\'t enough');
            sendMessage('Don\'t worry though I will get you desperate sooner or later');
            sendMessage('So desperate you\'ll wish you didn\'t say that right now %Grin%');
            sendMessage('Anyway...');

            sendMessage('I guess since you still feel fine you won\'t mind not cumming for the next 3 days %Lol%');
            addDenialTime(24*3);

            if(sendMessage('Or do you?')) {
                sendMessage('Too bad %Grin%');
                sendMessage('That deal is already settled. You should have thought about this when you told me you aren\'t desperate yet');
            } else {
                sendMessage('That\'s settled then');
            }

            sendMessage('I want you desperate %SlaveName%');
            sendMessage('And if I want something I am getting it');
            sendMessage('So you better be ready for a though ride the next days %EmoteHappy%');
        }
    }
}