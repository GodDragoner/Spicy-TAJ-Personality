{
    sendMessage(random("%SlaveName%"));
    sendMessage(random("We\'ve crossed your hard limit of", "It seems we\'re at your hard limit of") + ' ' + getVar(VARIABLE_DENIAL_LIMIT) + ' days');
    sendMessage(random("I do respect your limits ", "Despite what you might think I care about your limits.. ", "I fully respect your limits ") + "");
    sendMessage(random("Now ", "Meaning.. ", "Well ") + "");
    const answer = sendInput("Do you absolutely need to cum?");

    while (true) {
        if (answer.isLike('yes')) {
            sendMessage(random("Okay then", "Well then"));
            sendMessage(random("Before we get to the point of letting you cum", "Before you get to cum"));
            askForHardLimitIncrease();

            //TODO: Setting that allows you to set whether it is ruined/normal and whether dom should add her kick to it or not
            //TODO: Add cum modules
            break;
        } else if (answer.isLike('no')) {
            sendMessage('%Good%');
            CMessage(random("You make me proud! ", "That makes me happy! ", "You make me very proud! "));
            changeMeritHigh(false);
            CMessage(random("This brings about the logical question ", "This begs the question "));
            askForHardLimitIncrease();
            break;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

function askForHardLimitIncrease() {
    let answer0 = sendInput(random("Would it be alright for me to increase your hard limit a little? ", 'Would you be okay with me increasing your hard limit?', "Would you be okay with increasing your hard limit? ") + "%DT%");

    while (true) {
        if (answer0.isLike('yes')) {
            sendMessage('%Good%');
            increaeHardLimit();
            break;
        } else if (answer0.isLike('no')) {
            sendMessage(random("That's perfectly fine ", "Okay then ") + "%EmoteHappy%");
            break;
        } else {
            sendMessage(YES_OR_NO);
            answer.loop();
        }
    }
}

function increaeHardLimit() {
    sendMessage(random("So currently your hard limit is", "At this moment your hard limit is") + ' ' + getVar(VARIABLE_DENIAL_LIMIT) + ' days');
    sendMessage(random("I promise I\'m only changing it a little ", "I\'m only increasing it a teeny tiny bit"));
    setVar(VARIABLE_DENIAL_LIMIT, getVar(VARIABLE_DENIAL_LIMIT) + randomInteger(1, 2));
    sendMessage("I\'m so proud of you!");
    changeMeritMedium(false);
}