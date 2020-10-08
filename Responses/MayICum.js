addResponseRegex("(may|please|May|Please|Let).*cum");

function mayICumResponse(message) {
    let newValue = incrementTempVar(VARIABLE.RESPONSE_MAY_CUM_COUNT, 1);

    if(newValue > 3) {
      sendMessage('You don\'t seem to get it do you?');
      sendMessage('You know what?');
      sendMessage('You are not going to cum today');
      sendMessage('You are not going to cum tomorrow');
      sendMessage('Actually you are not cumming for the whole next week');
      sendMessage('And that is all on you nagging me about it!');
      addDenialTime(7*24);
      registerRepeatingText();
      return false;
    } else if (newValue > 2) {
        sendMessage('You asked me this before...');
        sendMessage('I don\'t want to hear you asking the same thing over and over!');
        sendMessage('I don\'t care if you can\'t take it anymore');
        sendMessage('If I want you to take it you WILL');
        sendMessage('And let me tell you...');
        sendMessage('If YOU break MY toy by not following my strict instructions');
        sendMessage('And releasing all that preciously build up cum without my explicit permission');
        sendMessage('You are in for a rough time %SlaveName%!');
        registerRepeatingText();
        return false;
    }

    sendMessage('No');
    registerRepeatingText();
    sendMessage('Or maybe I am generous enough to let you cum?');
    sendMessage('You couldn\'t possibly know could you? %Grin%');
    sendMessage('Let me give you a small hint...');
    sendMessage('Considering I like the pain of denial VERY much');
    sendMessage('It\'s very unlikely %Lol%');
    return false;
}

