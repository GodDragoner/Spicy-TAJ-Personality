{
    if (tryRunTauntFetchId()) {
        if (sendYesOrNoQuestion('Does it feel good to have a smooth clitty tucked away in sexy panties most of the day?')) {
            sendMessage('I bet it does %Grin%');

            if (sendYesOrNoQuestion('Does it make you feel like a slut?')) {
                sendMessage('Good, because you are!  %Grin%');
            } else {
                sendMessage('Seems like we need to by even sexier sluttier panties for you %Grin%');
            }
        } else {
            sendMessage('You\'ll get used to it %Lol%');
            sendMessage('Or more like you have to get used to it %Wicked%');
        }
    }
}