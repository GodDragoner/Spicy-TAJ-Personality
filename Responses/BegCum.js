addResponseRegex("I.*(beg|please).*cum");

function begCumResponse(message) {
    if(!isSessionActive()) {
        return false;
    }


    let newValue = incrementTempVar(VARIABLE.RESPONSE_BEG_CUM_COUNT, 1);

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
        if(sendYesOrNoQuestion('I think you have begged enough for now, haven\'t you?')) {
            sendMessage('%Good%');
        } else {
            sendMessage('Don\'t try to provoke me %SlaveName%!');
        }

        registerRepeatingText();
        return false;
    }

    let answers = ['You seem pretty desperate, %SlaveName% %Lol%',
        'I love it when you beg %EmoteHappy%',
        'I love hearing you beg, but it\'s not going to make a difference to be honest',
        'Maybe I will, maybe I won\'t %Grin%',
        'You\'re just gonna have to wait and see what happens',
        'I\'ll think about it',
        'I\'ll have to give it some though',
        'I love it when you beg me to let you cum',
        'I suppose you can just keep on trying to convince me',
        'Mmm it makes me so wet when you beg me to let you cum...',
    ];

    if(isDeniedCumming() || isForcedLockedUp()) {
        answers = [' Aw too bad you won\'t get to %GeneralTime%',
            'If you think it helps your cause to keep trying...',
            'You <i>are</i> a tenacious one, aren\'t you?',
            'I suppose I could still change my mind if you beg some more... Just kidding.',
            'Keep begging for things you won\'t get %GeneralTime%, %SlaveName%',
            'I\'ll think about it',
            'I\'ll have to give it some though',
            'Mmm yes, beg me to let you cum, %SlaveName%',
            'Aww you still want to cum so badly, don\'t you? %Lol%',
            'It\'s just not gonna happen, %SlaveName%',
            'Do you really think I\'ll simply change my mind if you beg enough?',
        ];
    }

    sendMessage(random(answers));

    return false;
}

