{
    sendMessage(random("%SlaveName%"));
    sendMessage(random("We've crossed your hard limit of", "It seems we're at your hard limit of") + ' ' + getVar(VARIABLE.DENIAL_LIMIT) + ' days');
    sendMessage(random("I do respect your limits ", "Despite what you might think, I do care about your limits...", "I fully respect your limits") + "");
    sendMessage(random("Now ", "Meaning... ", "Well ") + "");
    const answer = sendInput("Do you absolutely need to cum?");

    while (true) {
        if (answer.isLike('yes')) {
            sendMessage(random("Okay then", "Well then"));
            sendMessage(random("Before we get to the point of letting you cum", "Before you get to cum"));
            askForHardLimitIncrease();

            if (!isVar(VARIABLE.DENIAL_HARD_LIMIT_TYPE)) {
                if (isEnforcingPersonality()) {
                    sendMessage('Since this is the first time reaching your hard limit');
                    sendMessage('Let me tell you something...');
                    sendMessage('Reaching your hard limit does not mean you get to choose how to cum %Grin%');

                    let answer = sendYesOrNoQuestionTimeout('You knew that didn\'t you?', 3);

                    if (answer === ANSWER_YES) {
                        sendMessage('Well then nothing to be frustrated about %Grin%');
                    } else if (answer === ANSWER_NO) {
                        sendMessage('Poor %SlaveName%');
                        sendMessage('Even on the guaranteed orgasm day you can\'t choose your own fate %Lol%');
                        sendMessage('You never really get to choose %SlaveName% do you?');
                        sendMessage('If you ever get to choose it\'s because I am fine with all outcomes %Grin%');
                    }

                    setVar(VARIABLE.DENIAL_HARD_LIMIT_TYPE, 1);
                } else {
                    sendMessage('Since this is the first time that we crossed your hard limit we have to settle a few things');
                    sendMessage('First of all I would prefer I can choose how you cum however I must accept the fact that you might want to choose yourself');

                    let answer = sendInput('Would you like me to choose how you cum or would you like to enjoy your complete freedom during this?');

                    while (true) {
                        if (answer.isLike('you', 'choose')) {
                            changeMeritMedium(false);
                            sendMessage('I knew it %EmoteHappy%');
                            sendMessage('You simply can\'t stop submitting to me %Grin%');
                            setVar(VARIABLE.DENIAL_HARD_LIMIT_TYPE, 1);
                        } else if (answer.isLike('me', 'freedom')) {
                            changeMeritMedium(true);
                            sendMessage('%EmoteSad%');
                            setVar(VARIABLE.DENIAL_HARD_LIMIT_TYPE, 0);
                        } else {
                            sendMessage('Would you like me or you to choose?', 0);
                            answer.loop();
                        }
                    }
                }
            }

            if (getVar(VARIABLE.DENIAL_HARD_LIMIT_TYPE) === 1) {
                sendMessage('Let\'s see how you get to cum today %SlaveName% %Grin%');
                //runOrgasmCategory(decideOrgasm(true));
                setTempVar(VARIABLE.DENIAL_HARD_LIMIT_ORGASM_TODAY, true);
            } else {
                sendMessage('Well then...');
                sendMessage('You are allowed to cum however you want to %SlaveName%');

                if(RULE_LOCKTOBER.isEffectivelyActive()) {
                    sendMessage('Well I mean it\'s locktober, so you know how you are allowed to cum');
                    sendMessage('And make sure to ruin it %Grin%');
                }

                sendMessage('I am gonna wait for you to return. Just tell me when you are done');
                waitForDone(1000000);
                registerOrgasm();
                setTempVar(VARIABLE.DENIAL_HARD_LIMIT_FREEDOM_TODAY, true);
            }
            break;
        } else if (answer.isLike('no')) {
            sendMessage('%Good%');
            sendMessage(random("You make me proud! ", "That makes me happy! ", "You make me very proud! "));
            changeMeritHigh(false);
            sendMessage(random("This brings up the question", "This yields the question"));
            askForHardLimitIncrease();
            break;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function askForHardLimitIncrease() {
    let answer = sendInput(random("Would it be alright for me to increase your hard limit a little? ", 'Would you be okay with me increasing your hard limit?', "Would you be okay with increasing your hard limit? "));

    while (true) {
        if (answer.isLike('yes')) {
            sendMessage('%Good%');
            increaseHardLimit();
            break;
        } else if (answer.isLike('no')) {
            sendMessage(random("That's perfectly fine ", "Okay then ") + "%EmoteHappy%");
            break;
        } else {
            sendMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }
}

function increaseHardLimit() {
    sendMessage(random("So currently your hard limit is", "At this moment your hard limit is") + ' ' + getVar(VARIABLE.DENIAL_LIMIT) + ' days');
    sendMessage(random("I promise I'm only changing it a little", "I'm only increasing it a teeny tiny bit"));
    setVar(VARIABLE.DENIAL_LIMIT, getVar(VARIABLE.DENIAL_LIMIT) + randomInteger(1, 2));
    sendMessage("I'm so proud of you!");
    changeMeritMedium(false);
}