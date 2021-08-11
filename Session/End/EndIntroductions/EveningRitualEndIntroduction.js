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
        } else if(EVENING_ROUTINE.RULE_EVENING_RITUAL_EDGES_LAST_CUM.isActive() && !EVENING_ROUTINE.RULE_EVENING_RITUAL_CENSOR_PORN.isActive() && EVENING_ROUTINE.RULE_EVENING_RITUAL_CENSOR_PORN.canBeActivated()) {
            if(shouldIntroduceNewRule(EVENING_ROUTINE.RULE_EVENING_RITUAL_CENSOR_PORN)) {
                sendMessage('I had an idea %SlaveName% %Grin%');
                sendMessage('Since I already introduced the rule of censored porn to you');
                sendMessage('I think we should make you create your own %EmoteHappy%');
                sendMessage('To supply yourself and other losers with new pictures to get off to');
                sendMessage('I think it should be part of your daily evening routine');
                sendMessage('So...');
                sendMessage('How many should you do per day? %Grin%');
                sendMessage('5?');
                sendMessage('No, that\'s too few... %Wicked%');
                sendMessage('30...');
                sendMessage('Sounds good...');
                sendMessage('But might too much considering the time you have to spend on creating them');
                sendMessage('10...?');
                sendMessage('Seems about right %Grin%');
                sendMessage('Let\'s go with 10 for now %EmoteHappy%');
                sendMessage('So you\'ll censor 10 pictures every day');
                sendMessage('Grab some pictures from reddit or wherever you find the most attractive images');
                sendCensorInstructions(10);
                sendMessage('Feel free to bump those numbers up. They are just a minimum %Grin%');
                sendMessage('If it\'s just feet feel free to use them without any censoring. But add some nice captions');
                sendMessage('After you are done place the min the appropriate category folders for my and your entertainment  %Grin%');
                sendMessage('Feel free to share them on reddit as well');
                sendMessage('That\'s all for today %EmoteHappy%');
                sendMessage('Make sure to start with the first images today %SlaveName% %Wicked%');

                EVENING_ROUTINE.RULE_EVENING_RITUAL_CENSOR_PORN.setActive(true);
            }
        } else if(EVENING_ROUTINE.RULE_EVENING_RITUAL_EDGES_LAST_CUM.isActive() && !EVENING_ROUTINE.RULE_EVENING_RITUAL_BODY_HYGIENE.isActive() && EVENING_ROUTINE.RULE_EVENING_RITUAL_BODY_HYGIENE.canBeActivated()) {
            if(shouldIntroduceNewRule(EVENING_ROUTINE.RULE_EVENING_RITUAL_BODY_HYGIENE)) {
                sendMessage('There is a thing I want to address for today');
                sendMessage('And that is regarding your evening ritual %Grin%');
                sendMessage('Since you are a good sissy in training for me...');
                sendMessage('I also want you to look and feel like one');
                sendMessage('So what I want you to do is pretty simple');
                sendMessage('I want you to get some lotion, lip balm, hand lotion and so on and forth');
                sendMessage('And before going to bed I want you to take care of your face, hands, lips, clitty and so on and forth');
                sendMessage('Make them feel good, smooth and girly %EmoteHappy%');
                sendMessage('Bonus points if you buy products with a feminine smell %Wicked%');
                sendMessage('I also want you to do something against pimples if you happen to have any');
                sendMessage('So overall just take care of your body parts before going to bed');
                sendMessage('Make sure to get all the things needed on your next shopping trip %SlaveName% %Wicked%');
                sendMessage('That\'s all for today %EmoteHappy%');

                EVENING_ROUTINE.RULE_EVENING_RITUAL_BODY_HYGIENE.setActive(true);
            }
        }
    }
}