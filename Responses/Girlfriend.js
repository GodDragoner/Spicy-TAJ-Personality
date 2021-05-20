addResponseRegex("I have a girlfriend");
addResponseRegex("I am married");
addResponseRegex("I married");
addResponseRegex("I have married");
addResponseRegex("I am single");
addResponseRegex('I am in a relationship');

function girlfriendResponse(message) {
    if(!isSessionActive()) {
        return false;
    }

    let alreadyKnow = false;
    let askName = false;

    if(message.toLowerCase().indexOf('girlfriend') !== -1 || message.toLowerCase().indexOf('relationship') !== -1) {
        if(getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false)) {
            alreadyKnow = true;
        } else {
            sendMessage('Oh really?');
            sendMessage('That\'s new to me %Grin%');

            if(sendYesOrNoQuestion('So you have a girlfriend now?')) {
                sendMessage('Great! Exciting news %EmoteHappy%');
                setVar(VARIABLE.SUB_HAS_GIRLFRIEND, true);
                askName = true;
            } else {
                sendMessage('Well then I misunderstood %EmoteSad%');
            }
        }
    } else if(message.toLowerCase().indexOf('single') !== -1) {
        if(!getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false) && getVar(VARIABLE.SUB_IS_MARRIED, false)) {
            sendMessage(random('I know that already %SlaveName%', 'No need to tell me that again', 'No need to tell me again'));
        } else {
            sendMessage('Oh really?');

            if(sendYesOrNoQuestion('So you are single now?')) {
                sendMessage('I am sorry to hear that %EmoteSad%');
                sendMessage('Don\'t feel too bad about it %SlaveName%');
                sendMessage('You still got me that can toy with you %Grin%');
                sendMessage('And you\'ll find the right woman in real life at some point!');
                setVar(VARIABLE.SUB_IS_MARRIED, false);
                setVar(VARIABLE.SUB_HAS_GIRLFRIEND, false);
            } else {
                sendMessage('Good!');
                sendMessage('I misunderstood you then %EmoteHappy%');
            }
        }
    } else if(message.toLowerCase().indexOf('married') !== -1) {
        if(getVar(VARIABLE.SUB_IS_MARRIED, false)) {
            alreadyKnow = true;
        } else {
            sendMessage('Oh really?');
            sendMessage('That\'s new to me %Grin%');

            if(sendYesOrNoQuestion('So you are married now?')) {
                sendMessage('Congratulations! %EmoteHappy%');
                setVar(VARIABLE.SUB_IS_MARRIED, true);
                setVar(VARIABLE.SUB_HAS_GIRLFRIEND, true);
                askName = true;
            } else {
                sendMessage('Well then I misunderstood you %EmoteSad%');
            }
        }
    }

    if(alreadyKnow) {
        sendMessage(random('I already know %SlaveName%', 'Lucky you %Grin%', 'I hope you worship her as you do me %Grin%', 'I know you do %EmoteHappy%', 'You should worship her', 'I should ask her to help me with domming you %Lol%'));
    }

    if(askName) {
        sendMessage('What\'s her name?', 0);
        setVar(VARIABLE.SUB_PARTNER_NAME, createInput().getAnswer());
        sendMessage('Maybe we can get to know ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' one day %Grin%');
        sendMessage('Maybe even work together %EmoteHappy%');
    }

    return false;
}

