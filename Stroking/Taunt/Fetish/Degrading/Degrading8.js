{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            sendMessage('I just had a thought...');
            sendMessage('We were put on this earth to reproduce and you\'re never going to do that');
            sendMessage('Because you are and will always be a virgin');
            sendMessage('Maybe it\'s a good thing, we don\'t really need any more losers walking this earth');
            sendMessage('You\'re just going to %JerkOff% and, when you\'re allowed to, spill your useless seed');

            if(CEI_LIMIT.isAllowed()) {
                sendMessage('Your mouth is the only place where it has any use at all');
            }

            sendMessage('It\'s never going to end up inside a girl\'s pussy', 0);
            showCategoryImage('LESBIAN', 5);
            sendMessage('It\'s never going to get swallowed', 0);
            showCategoryImage('BLOWJOB', 5);

            if(CEI_LIMIT.isAllowed()) {
                sendMessage('Except by yourself, that is %Lol%');
            }
        } else {
            sendMessage('You know, I can always spot a beta male like you');
            sendMessage('Wherever I go, when I’m running errands, shopping, going to appointments, or whatever');
            sendMessage('I see right through you, beta boy');
            sendMessage('I know you’re there. I know you see me, with that look of pure weakness upon your face');
            sendMessage('I see boys like you everywhere');
        }
    }
}