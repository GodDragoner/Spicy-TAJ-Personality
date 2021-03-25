{
    if(isFullTime()) {
        let stretchingClazz = getAcademyClassByName("Anal Stretching");

        if (stretchingClazz.isActive()) {
            if (!RULE_ALWAYS_WEAR_SMALL_PLUG.isActive() && shouldIntroduceNewRule(RULE_ALWAYS_WEAR_SMALL_PLUG)) {
                sendMessage('So %SlaveName%');
                sendMessage('I saw you are now taking part in the anal stretching class %Grin%');
                sendMessage('It\'s definitely a good idea to try to train to be ready for all the things I could stuff up that ass');

                if (SISSY_LIMIT.isAllowed()) {
                    sendMessage('And also the cocks that are gonna fill you ass nicely at some point %EmoteHappy%');
                }

                sendMessage('I hope you are keeping up with your tasks and being a good boy for me');
                sendMessage('Because if not I\'d have to punish you');
                sendMessage('And we don\'t want that do we?');

                sendMessage('Anyway...');
                sendMessage('This brought up something I had in my mind for quite some time');
                sendMessage('I think it would make a great addition if...');
                sendMessage('You would be wearing a buttplug all the time %Grin%');

                if (sendYesOrNoQuestion('Would you like that %SlaveName%?')) {
                    sendMessage('What a willing anal slut %Lol%');
                    sendMessage('Well then...');
                } else {
                    sendMessage('Ohhh poor boy...');
                    sendMessage('Sadly this isn\'t about what you want');
                    sendMessage('So you are gonna take it for me');
                    sendMessage('You will want it because I want it');
                    sendMessage('No backtalk!');
                }

                RULE_ALWAYS_WEAR_SMALL_PLUG.sendIntroduction();
            }
        }

        if (!RULE_FOLLOW_DAILY_TASKS.isActive() && shouldIntroduceNewRule(RULE_FOLLOW_DAILY_TASKS)) {
            RULE_FOLLOW_DAILY_TASKS.sendIntroduction();
        }
    }
}