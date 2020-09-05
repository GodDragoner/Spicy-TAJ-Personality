{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('You don\'t get to cum %GeneralTime%');
    let result = sendYesOrNoQuestionTimeout('But you already knew that, right? %Grin%', 7);

    if(result === ANSWER_YES) {
        sendMessage(' Good, no surprises then');
    } else if(result === ANSWER_NO) {
        sendMessage('Oh well, this must be a bit of a let down then');
    } else if(result === ANSWER_TIMEOUT) {
        sendMessage('Well anyway, you would if you\'ve been paying attention %Lol%');
    }
}