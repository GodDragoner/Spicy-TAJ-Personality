{
    let orgasmType = getVar(VARIABLE.ORGASM_CATEGORY_TODAY);
    sendMessage("Now, let's see...");
    sendMessage('I could let you cum %GeneralTime%');
    let alreadyCame = false;

    if(sendYesOrNoQuestion('Is that what you want?')) {
        sendMessage("Let's think about that a minute though...");

        if(sendYesOrNoQuestion('You do realize that this wonderful aching feeling will go away, right?')) {
            sendMessage("And you probably love that feeling more than cumming, in the end");
        } else {
            sendMessage("Well, it will %SlaveName%");
        }

        sendMessage("And when it goes, your submissiveness will go with it");
        sendMessage("For a while, anyway %Grin%");
        sendMessage("So instead, you could choose not to cum...");
        sendMessage("And stay on this lovely cloud of arousal a while longer");
        sendMessage("I mean, you know you'll get to cum eventually...");
        sendMessage('It\'s not like I\'m going to keep you denied forever %Grin%');
        sendMessage("But we could make that sensual buzz of achy longing last a little longer");

        if(sendYesOrNoQuestion('So, do you still want to cum?')) {
            sendMessage("Alright I'll be nice this time, %SlaveName%");
            alreadyCame = true;

            if (orgasmType === ORGASM_CATEGORY_DENIED) {
                startEdging();
                sendMessage("%LetEdgeFade%");
                sendMessage("Sorry, I changed my mind %Grin%");
            } else if (orgasmType === ORGASM_CATEGORY_RUINED) {
                startEdging(0, true, EDGE_END_RUIN);
                waitForCumAnswer();

                if (shouldCEI()) {
                    sendEatInstructions();
                }

                sendMessage('I hope you don\'t regret your choice now');
            } else if (orgasmType === ORGASM_CATEGORY_ALLOWED) {
                startEdging(0, true, EDGE_END_ORGASM);
                waitForCumAnswer();

                if (shouldCEI()) {
                    sendEatInstructions();
                }

                sendMessage('I hope you don\'t regret your choice now');
            }
        } else {
            sendMessage("I thought so %Grin%");
            sendMessage('It\'s not like you <i>have</i> to cum anyway');
        }
    } else {
        sendMessage("Oh, okay %Lol%");
        sendMessage('It\'s not like you <i>have</i> to cum anyway');
    }

    //Only if not denied
    if (orgasmType !== ORGASM_CATEGORY_DENIED) {
        //Check if the sub didn't cum already and whether we don't feel like punishing the slave
        if (!alreadyCame && !feelsLikePunishingSlave()) {
            sendMessage('But then again, it\'s not about what <i>you</i> want, it\'s about what <i>I</i> want');
            sendMessage('And I want to make you cum %GeneralTime%');

            if (orgasmType === ORGASM_CATEGORY_RUINED) {
                startEdging(0, true, EDGE_END_RUIN);
                waitForCumAnswer();

                if (shouldCEI()) {
                    sendEatInstructions();
                }
            } else if (orgasmType === ORGASM_CATEGORY_ALLOWED) {
                startEdging(0, true, EDGE_END_ORGASM);
                waitForCumAnswer();

                if (shouldCEI()) {
                    sendEatInstructions();
                }
            }

            sendMessage('I hope you don\'t regret your choice now');
        }
    }
}