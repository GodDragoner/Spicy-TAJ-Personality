{
    if (tryRunTauntFetchId()) {
        //@SetDate(SPH,0 seconds)
        if (getVar(VARIABLE.SUB_THINKS_COCK_SMALL, true)) {
            sendMessage('Your %Cock% is so small and pathetic ');
        } else {
            sendMessage('You know you have a small %Cock%, right?'); // @ResponseYes(TELLYOU_HaveSmallCock)
        }

        sendMessage('It\'s important to accept these kinds of things, %SlaveName%');
        sendMessage('Accepting that you have a small %Cock% can help you admit to yourself that you need my control');
    }
}