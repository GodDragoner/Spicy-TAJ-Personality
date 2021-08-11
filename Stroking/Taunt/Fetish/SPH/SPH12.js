{
    if (tryRunTauntFetchId()) {
        //@SetDate(SPH,0 seconds)
        if (getVar(VARIABLE.SUB_THINKS_COCK_SMALL, true)) {
            sendMessage('It\'s good that you\'ve accepted that you have a small %Cock%');
            sendMessage('Not every boy is so upfront about that');
        }

        sendMessage('Some boys with tiny cocks will fool themselves into thinking it\'s actually average')
        sendMessage('It\'s to protect their fragile egos, I suppose');

        if (!getVar(VARIABLE.SUB_THINKS_COCK_SMALL, true)) {
            sendMessage('ound like anyone you know? %Lol%');
        } else {
            sendMessage('Luckily, you don\'t have much of an ego to protect');
        }
    }
}