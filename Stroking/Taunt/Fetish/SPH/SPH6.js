{
    if (tryRunTauntFetchId()) {

        // @SetDate(SPH,0 seconds)
        if(getVar(VARIABLE.SUB_THINKS_COCK_SMALL, true)) {
            sendMessage('I don\'t know if you ever really thought you had a normal sized %Cock%, but..');
        } else {
            sendMessage('You probably don\'t think it\'s so bad to have a small penis, but..');
        }

        sendMessage('You\'re much better off just accepting the truth about your tiny %Cock%');
        sendMessage('Or you\'re just going to feel hurt the next time you see that look of disappointment in a girl\'s eyes');

        if(getVar(VARIABLE.SUB_IS_VIRGIN)) {
            sendMessage('And you wouldn\'t want your first time to be like that, right?');
        }

        sendMessage('Maybe it\'s better to go without sex for the rest of your life');
    }
}