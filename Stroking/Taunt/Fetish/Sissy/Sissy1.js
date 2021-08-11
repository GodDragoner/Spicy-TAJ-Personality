{
    if (tryRunTauntFetchId()) {
        if(sendYesOrNoQuestion('Panties really are a treat to a sissy slut like you, aren\'t they?')) {
            sendMessage('Of course they are %Grin%');
        } else {
            sendMessage('I sure think they are %Lol%');
        }

        sendMessage('Is there any other article of clothing that is so soft, so sexy, so girly?');
        sendMessage('Panties can say so many things about a girl');

        if(RULE_ALWAYS_WEAR_PANTIES.isActive()) {
            sendMessage('That\'s why I make you wear them 24/7 %Grin%');
        } else {
            sendMessage('I should make you wear them all day eventually %Grin%');
            sendMessage('No need for these nasty boy shorts');

            if(sendYesOrNoQuestion('You aren\'t a boy anyway, are you?')) {
                sendMessage('Keep on trying to convince yourself of that %Wicked%');
            } else {
                sendMessage('Good sissy %Grin%');
            }
        }
    }
}