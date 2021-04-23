{
    if(isFullTime()) {
        if(!RULE_EVENING_RITUAL.isActive() && getVar(VARIABLE.SESSION_COUNTER, 0) > 14) {
            if(shouldIntroduceNewRule(RULE_EVENING_RITUAL)) {
                sendMessage('There is a thing I want to address for today');
                sendMessage('First of all...');
                sendMessage('I hope you are adjusting well to my rules and guidance %EmoteHappy%');
                sendMessage('I think you are becoming a better submissive for me everyday');
                sendMessage('So I certainly think you are adjusting well');
                sendMessage('Having said that I think you need some more routine %Grin%');
                sendMessage('Don\'t worry I won\'t take too much of your time');
                sendMessage('What I had in mind is some sort of evening ritual');
                sendMessage('A list of things you do before going to bed');
                sendMessage('This way you\'ll think of me before going to bed');
                sendMessage('Depending on what I make you do you might also be reminded of me the whole night long %Wicked%');
                sendMessage('For now I have something very simple in mind');
                sendMessage('I want to keep you horny and keep driving your lust up');
                sendMessage('Sooo...');
                sendMessage('Before going to bed I want you to edge once for each day that has passed since your last orgasm');
                sendMessage('This might be hard to keep track of so go check the pin board for a daily amount of edges');
                sendMessage('For the edges I will allow you to remove your chastity cage');
                sendMessage('You\'ll have to put it on directly after again');
                sendMessage('My assistant will gladly assist you during that process');
                sendMessage('And by "will" I mean you must ask her to unlock you <b>everytime</b>');
                sendMessage('No cheating');

                if(getVar(VARIABLE.CHASTITY_HAS_COMBINATION_LOCK, false)) {
                    sendMessage('Especially since you shouldn\'t even know the combination to your keys when locked');
                }

                sendMessage('I am leaving you the choice of edging in chastity instead to spare you the time of unlocking and locking again');
                sendMessage('Now...');
                sendMessage('I won\'t ask anything more from you for now but...');
                sendMessage('I am looking to expand and modify this list in the future');

                RULE_EVENING_RITUAL.setActive(true);
                EVENING_ROUTINE.RULE_EVENING_RITUAL_EDGES_LAST_CUM.setActive(true);
            }
        } else {

        }
    }
}