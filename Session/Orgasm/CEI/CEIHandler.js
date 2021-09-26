const CEI_PLATE = 0;
const CEI_HAND = 1;
const CEI_UNDEFINED = 2;
const CEI_FLOOR = 3;
const CEI_BOWL = 4;

function isAlwaysCEI() {
    return RULE_ALWAYS_SWALLOW_CUM.isActive();
}

function shouldCEI() {
    if(CEI_LIMIT.isAllowed()) {
        if(isAlwaysCEI()) {
            return true;
        }

        return isChance((getMood() + 1)*(getStrictnessForCharacter() + 1)*7);
    } else if(CEI_LIMIT.getLimit() === LIMIT_ASKED_MAYBE || (CEI_LIMIT.getLimit() === LIMIT_ASKED_NO && isEnforcingPersonality())) {
        //QUALITY: VARIETY
        sendMessage('You know %SlaveName%...');
        sendMessage('I would really want to make you eat your cum right now...');

        CEI_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);

        //Change?
        if(CEI_LIMIT.isAllowed()) {
            return true;
        }
    }

    return false;
}

function sendEatInstructions(ceiDestination = CEI_UNDEFINED) {
    if(ceiDestination == CEI_FLOOR || ceiDestination == CEI_PLATE || ceiDestination == CEI_BOWL) {
        if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            sendMessage("Now get down on all fours and lick it all up like a good slut");
        } else {
            sendMessage("Now get down on all fours and lick it all up");
        }

        sendMessage("Lick up every single drop until it's completely clean");

        if(ceiDestination == CEI_FLOOR) {
            sendMessage("You shouldn't need to clean the floor afterwards %Lol%");
        } else if(ceiDestination == CEI_BOWL) {
            sendMessage("You should be able to put that bowl right back in the cupboard %Lol%");
        } else if(ceiDestination == CEI_PLATE) {
            sendMessage("You should be able to put that plate right back in the cupboard %Lol%");
        }
    } else {
        sendMessage("Go ahead and lick it up %SlaveName%");
        sendMessage("Just lick it up from wherever you spurted it on");
    }

    const answer = sendInput('Are you done licking?');

    while(true) {
        if(answer.isLike('yes')) {
            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                //QUALITY: More sentences
                sendMessage(random("You're such a filthy little cum whore", "That's disgusting %SlaveName% %Lol%"));
            } else {
                sendMessage("%Good%");
            }

            if(!RULE_ALWAYS_SWALLOW_CUM.isActive() && shouldIntroduceNewRule(RULE_ALWAYS_SWALLOW_CUM)) {
                RULE_ALWAYS_SWALLOW_CUM.sendIntroduction();
            }

            break;
        } else if(answer.isLike('no')) {
            sendMessage(random("Yuck %Lol%", "Then hurry the fuck up, I want to wrap this up"), 0);
            answer.loop();
        } else if(answer.isLike("didn't", "can't", "couldn't", "possible", "impossible", 'won\'t')) {
            if(RULE_ALWAYS_SWALLOW_CUM.isActive()) {
                sendMessage('%SlaveName%');
                addPPRuleIgnored();
                sendMessage('You know you have to follow my rules');
                sendMessage('And you know that there is not even a single drop leaving that %Cock% without going to your mouth');
                sendMessage('Do not disobey me again in the future and especially do not ever break my rules!');
                changeMeritHigh(true);
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know that I don\'t like you disobeying me %SlaveName%...');
                changeMeritMedium(true);
                sendMessage("Maybe next time I'll warn you in advance %Lol%");
            }

            //We want to skip the last line
            return;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    if(isChance(20) && VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        sendMessage("I do hope you realize how disgusting you are right now");
    }
}