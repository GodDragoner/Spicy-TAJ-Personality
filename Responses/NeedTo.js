addResponseRegex("I.+(want|got|need|wanna).*");

function needToResponse(message) {
    if(!isSessionActive()) {
        return false;
    }

    //Handle want to cum message case
    if(message.toLowerCase().indexOf("cum") !== -1 || message.toLowerCase().indexOf("orgasm") !== -1) {
        let newValue = incrementTempVar(VARIABLE.RESPONSE_WANT_CUM_COUNT, 1);

        if(newValue > 3) {
            sendMessage('You don\'t seem to get it do you?');
            sendMessage('You know what?');
            sendMessage('You are not going to cum today');
            sendMessage('You are not going to cum tomorrow');
            sendMessage('Actually you are not going to cum for another week now');
            sendMessage('And that is all on you nagging me about it!');
            addDenialTime(7*24);
            registerRepeatingText();
            return false;
        } else if (newValue > 2) {
            sendMessage('And I need you to shut up about it');
            registerRepeatingText();
            return false;
        }

        let answers = [
            'You know what I want? I want you to stay desperate like this',
            'And I think you are exactly where I want you to be at',
            'I honestly couldn\'t care less about that pathetic urge of yours',
            'And that\'s exactly the way I like it',
            'I don\'t think there is ever a need to really cum',
            'I don\'t think we\'ve reached your limit yet',
            'I think you can go further than this. Can\'t you? %Grin%',
            'Well this is not about your needs duhh',
            'When was this ever about want you need and want?',
            'Can\'t remember this being about what you need and want?',
            'Since when is this about what you need and want?',
            'Don\'t worry I think I know exactly what you need and want to and what you don\'t'
        ];

        sendMessage(random(answers));
        return false;
    }

    let answers = [
        'You don\'t "need to" anything',
        'There is no "I want, I got to, or I need to" for you',
        'I don\'t care what you want %SlaveName%',
        'Do I look like I care what you want %SlaveName%?',
        'I could act like I care but I really don\'t %SlaveName%',
        'I think you meant "May I" %SlaveName%',
        'If you ask me politely I might consider it',
        'And I think there is nothing you "want, need or got to"',
        'Since when are you determining what I am gonna do and what I don\'t?',
    ];

    sendMessage(random(answers));

    registerSassySub();
    return false;
}

