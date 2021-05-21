function askAndFetchIceCubes(amount) {
    if(askForIceCubes(amount) === amount) {
        return fetchIceCubes(amount);
    }

    return false;
}

function askAndFetchIceCubesWithConsequences(amount) {
    if(askForIceCubes(amount) === amount) {
        return fetchIceCubes(amount);
    } else {
        if(!isVar(VARIABLE.NEXT_TIME_ICE_CUBES)) {
            sendMessage("Too bad...");
            sendMessage("Maybe another time %EmoteSad%");
            sendMessage('But next time you should have ice cubes around');
            sendMessage('Otherwise there will be consequences');
            setVar(VARIABLE.NEXT_TIME_ICE_CUBES, true);
        } else {
            //TODO: Use at other locations as well (ice cubes)
            sendMessage('%SlaveName%');
            sendMessage('I told you last time to have ice cubes around');
            changeMeritMedium(true);
            addPPRuleIgnored();
            sendMessage('I added punishment points for this misbehavior');
            sendMessage('When I tell you to make sure of something you will MAKE SURE of it next time!');
        }
    }

    return false;
}

function askForIceCubeAnal() {
    //CHeck if we haven't asked this before
    if(!ANAL_LIMIT.isAllowed() && !isVar(VARIABLE.IS_ICECUBE_BYPASS_ANAL)) {
        sendMessage('%SlaveName% I know you aren\'t into anal...');
        sendMessage('At least not yet %Grin%');
        if(sendYesOrNoQuestion('But would you try sticking up an ice cube up your %Ass% for me?')) {
            sendMessage('Really?!');
            changeMeritLow(false);
            sendMessage('That makes my really happy!');
            setVar(VARIABLE.IS_ICECUBE_BYPASS_ANAL, true);
        } else {
            sendMessage('No?');
            sendMessage('Well I guess I can\'t do anything about it');
            sendMessage('Limits are limits I guess %EmoteSad%');
            setVar(VARIABLE.IS_ICECUBE_BYPASS_ANAL, false);
        }
    }

    return getVar(VARIABLE.IS_ICECUBE_BYPASS_ANAL, false);
}

function fetchIceCubes(amount) {
    sendMessage('Fetch me ' + amount + ' ice cubes %SlaveName%');
    sendMessage('Tell me when you are done');
    waitForDone();
    sendMessage('%Good%');
    return true;
}

function askForIceCubes(amount) {
    const answer = sendInput('Do you have some ice cubes in your fridge?');

    while(true) {
        if(answer.isLike('yes')) {
            return amount;
        } else if(answer.isLike('no')) {
            return -1;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    return -1;
}