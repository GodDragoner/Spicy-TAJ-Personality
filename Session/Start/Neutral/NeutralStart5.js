{
    if (tryRunStartFetchId()) {
        if (RULE_ALWAYS_WEAR_SMALL_PLUG.isActive()) {
            if (sendYesOrNoQuestion('I am gonna assume you are wearing your ' + getSmallButtplug(true).name + ' like a good %SlaveName%?')) {
                sendMessage('Good boy. That\'s exactly how I like my %SlaveName% %Grin%');
            } else {
                setTempVar(VARIABLE.IS_PLUGGED, false);
                sendMessage('What?!');
                sendMessage('You know you are supposed to always wear your ' + getSmallButtplug(true).name + '?!');
                addPPRuleIgnored();
                changeMeritMedium(true);
                sendMessage('I do not condone this behaviour!');

                putinChosenButtplug(getSmallButtplug(true).name);
            }
        }

        let answer = sendYesOrNoQuestionTimeout('I hope you are ready for what I got in store for you %GeneralTime% %Grin%', 5);

        if (answer === ANSWER_YES) {
            if (CBT_LIMIT.isAllowed() && !isFullSizedChastityOn()) {
                smallCBTPunishment(true, false);
                sendMessage('You weren\'t ready for that, were you? %EmoteHappy%')
            }

            sendMessage('Don\'t get too cocky %SlaveName%');
            sendMessage('You might regret it %Lol%');
        } else if (answer === ANSWER_NO) {
            sendMessage('Well you\'d better be ready because I am not gonna make this easy on you %Grin%');
        } else {
            sendMessage('I guess we\'ll find out soon enough %Grin%');
        }

        if (ANAL_LIMIT.isAllowed()) {
            sendMessage('I think we should get right to business and prepare you for what might come %EmoteHappy%');
            putInButtplug(true);
        }
    }
}