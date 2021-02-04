{
    if (tryRunStartFetchId()) {
        let answer = sendInput('You just can\'t help yourself, can you?', 7);

        if (!answer.isTimeout()) {
            if (answer.isLike('yes', 'can')) {
                sendMessage("Haha, that's very funny, %SlaveName%");
            } else {
                sendMessage("%Grin%");
            }
        }

        sendMessage('You just have to come back to me');

        if (isChance(50)) {
            let addressedLimit = false;
            if (sendYesOrNoQuestion('I can probably make you do anything I want, right?')) {
                let limit = getRandomLimitNotYes();

                if (limit !== null && isChance(25)) {
                    sendMessage('Well then %Grin%');
                    setTempVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING, true);
                    limit.askForLimitChange();
                    addressedLimit = true;
                }
            } else {
                sendMessage('Don\'t be too sure of yourself');
                sendMessage('I can be quite convincing %Wicked%');
            }

            if (!addressedLimit) {
                sendMessage("You're that addicted to me");
                sendMessage("You don't even have any control over it");
                sendMessage("That's how bad you want me to tell you to %JerkOff%");
            }
        } else {
            sendMessage("To %JerkOff%");
            sendMessage("Because that's all you're good for, right? %EmoteHappy%");
        }
    }
}