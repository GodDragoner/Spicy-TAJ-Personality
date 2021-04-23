{
    if (tryRunStartFetchId()) {
        if (getMood() == VERY_PLEASED_MOOD) {
            let answer = sendInput('I\'m really happy to see you %GeneralTime%', 7);

            if (!answer.isTimeout()) {
                if (answer.isLike('why', 'how come', 'really')) {
                    sendMessage('Because I\'ve been thinking about %MyYour% %Cock%');
                    sendMessage('And how much I want it to suffer %Grin%');
                } else if (answer.isLike('too', 'as well', 'also')) {
                    sendMessage('Aww that\'s so sweet');
                    sendMessage("But I get the feeling %MyYour% %Cock% isn't as glad to see me as you are");
                    sendMessage('Especially considering what I\'m about to do to it %Grin%');
                } else if (answer.isLike('thank', 'gracias', 'merci', 'nice', 'sweet', 'kind', 'means')) {
                    sendMessage('You\'re welcome %SlaveName%');
                    sendMessage("But I don't know if you should really be thanking me");
                    sendMessage("Considering that the reason I'm so happy to see you");
                    sendMessage("Is that I finally get to hurt that %Cock% of yours some more %Grin%");
                } else {
                    sendMessage('The thing is...');
                    sendMessage("I've just been sitting here thinking of all these fun ways to make a %Cock% suffer");
                    sendMessage('And we both know how much fun yours is to play with');
                }
            } else {
                sendMessage('The thing is...');
                sendMessage("I've just been sitting here thinking of all these fun ways to make a %Cock% suffer");
                sendMessage('And we both know how much fun yours is to play with');
            }
        } else {
            let answer = sendInput('Are you as happy to see me as I am to see you?');

            while(true) {
                if (answer.isLike('no', 'i\'m not', 'am not')) {
                    sendMessage('No?');
                    sendMessage("You must know what I'm about to do to that %Cock% then %Grin%");
                    sendMessage("But since you knew and logged on anyway");
                    sendMessage('I don\'t have to feel guilty about it %Lol%');
                    break;
                } else if (answer.isLike('yes', 'am happy', 'i\'m happy')) {
                    sendMessage('I\'m glad to hear that %SlaveName%');
                    break;
                } else if (answer.isLike('not sure', 'not know', 'don\'t know')) {
                    sendMessage('Aww, do I scare you that much? %Lol%');
                    break;
                } else {
                    sendMessage('Are you happy to see me or not?', 0);
                    answer.loop();
                }

                sendMessage("I've been thinking about all these fun ways to hurt that %Cock% %GeneralTime%");
                sendMessage("And there's not a lot of guys who can handle that");
                sendMessage("That's why I'm always glad to see you here, so " + random("eager ", "willing ") + "to please me");
                sendMessage('And willing to suffer %Grin%');
            }

        }
    }
}