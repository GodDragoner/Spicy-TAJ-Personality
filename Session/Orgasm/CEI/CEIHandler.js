const CEI_PLATE = 0;
const CEI_HAND = 1;
const CEI_UNDEFINED = 2;
const CEI_FLOOR = 3;
const CEI_BOWL = 4;

function isAlwaysCEI() {
    return true;
}

function shouldCEI() {
    if(getCEILimit() == LIMIT_ASKED_YES) {
        return isAlwaysCEI();
    }

    return false;
}

//TODO: Maybe check for verbal humilation fetish
function sendEatInstructions(ceiDestination = CEI_UNDEFINED) {
    if(ceiDestination == CEI_FLOOR || ceiDestination == CEI_PLATE || ceiDestination == CEI_BOWL) {
        sendMessage("Now get down on all fours and lick it all up like a good slut");
        sendMessage("Lick up every single drop until it\'s completely clean");

        if(ceiDestination == CEI_FLOOR) {
            sendMessage("You shouldn\'t need to clean the floor afterwards %Lol%");
        } else if(ceiDestination == CEI_BOWL) {
            sendMessage("You should be able to put that bowl right back in the cupboard %Lol%");
        } else if(ceiDestination == CEI_PLATE) {
            sendMessage("You should be able to put that plate right back in the cupboard %Lol%");
        }
    } else {
        sendMessage("Go ahead and lick it up %SubName%");
        sendMessage("Just lick it up from wherever you spurted it on");
    }

    const answer = sendInput('Are you done licking?');

    while(true) {
        if(answer.isLike('yes')) {
            sendMessage(random("You\'re such a filthy little cum whore", "That\'s disgusting %SubName% %Lol%"));
            break;
        } else if(answer.isLike('no')) {
            sendMessage(random("Yuck %Lol%", "Then hurry the fuck up, I want to wrap this up"));
            answer.loop();
        } else if(answer.isLike("didn't", "can't", "couldn't", "possible", "impossible")) {
            //TODO: More interaction
            if(isAlwaysCEI()) {
                changeMeritHigh(true);
            } else {
                changeMeritMedium(true);
            }

            sendMessage("Maybe next time I\'ll warn you in advance %Lol%");
            break;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }

    if(isChance(20)) {
        sendMessage("I do hope you realize how disgusting you are right now");
    }
}