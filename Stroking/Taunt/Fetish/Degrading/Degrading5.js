{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            sendMessage('You\'ll get used to it eventually, %SlaveName%');
            sendMessage('You\'ll get used to the idea of being a masturbation junkie your whole life');
            sendMessage('You\'ll come to accept that you\'ll never know what it\'s like to have sex');
            sendMessage('A lifelong virgin, that\'s your fate');
            sendMessage('Thinking otherwise is only going to make you more frustrated');
        } else {
            sendMessage('You should at least admit to yourself that you\'re a pathetic beta male');
            sendMessage('Saves me the trouble of having to convince you of something that\'s so blindingly obvious');
        }
    }
}