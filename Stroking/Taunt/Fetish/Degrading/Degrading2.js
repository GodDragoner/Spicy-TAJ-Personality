{
    if (tryRunTauntFetchId()) {
        if (getVar(VARIABLE.SUB_IS_VIRGIN, false) && isChance(50)) {
            sendMessage('Do you think you\'re ever going to get laid?');
            sendMessage('It\'s just not going to happen is it...');
            sendMessage('You\'re not good enough, %SlaveName%');
            sendMessage('You\'re an undatable');
            sendMessage('Even if you find a girl who thinks you\'re cute');
            sendMessage('She\'s not going to want to fuck you');
            sendMessage('You\'ll forever be friend zoned');
        } else {
            sendMessage('You\'ve always been a weak beta bitch, %SlaveName%');
            sendMessage('You can\'t see a hot Goddess like me without instantly dropping to your knees');
            sendMessage('Begging to serve and worship');
            sendMessage('You can\'t help it, any dominant woman can take control of you');
            sendMessage('We own your cock and your mind, %SlaveName%');

            if(HUMILIATION_LIMIT.isAllowed()) {
                sendMessage('And you love the humiliation, that\'s the messed up thing');
            } else {
                sendMessage('It doesn\'t matter that you don\'t like the humiliation');
            }

            sendMessage('You can\'t deny it or get rid of it so just embrace it, %SlaveName%');
        }
    }
}