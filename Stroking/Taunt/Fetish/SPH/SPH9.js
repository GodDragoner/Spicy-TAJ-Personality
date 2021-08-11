{
    if (tryRunTauntFetchId()) {
        // @SetDate(SPH,0 seconds)
        sendMessage('You have such a small %Cock% it\'s kind of amazing you can even find it');
        sendMessage('It\'s true, isn\'t it'); // @SetDate(SPH,0 seconds) @ResponseYes(RS_ThatIsTrue) @ResponseNo(RS_ThatIsTrueNot)

        if(getVar(VARIABLE.SUB_THINKS_COCK_SMALL, true)) {
            sendMessage('I\'m glad that you\'ve accepted that hard fact at least');
        } else {
            sendMessage('You should just accept that it\'s true');
        }

        sendMessage('We all need build our own little fantasies about ourselves, that\'s true');
        sendMessage('Like, <i>I would never fuck that thing</i> level tiny');
        sendMessage('But ' + random('I think it\'s important for you to realize how pathetic that %Cock% really is', 'accepting that you have a small %Cock% can help you admit to yourself that you need my control'));
    }
}