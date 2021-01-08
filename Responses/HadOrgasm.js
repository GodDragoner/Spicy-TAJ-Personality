addResponseRegex("I had an orgasm", "had an orgasm", "I've had an orgasm", 'Ive had an orgasm', 'I came', 'I just came', 'I came just now');

function hadOrgasmResponse(message) {
    if(!isSessionActive()) {
        return false;
    }

    if(!sendYesOrNoQuestion('Did I read that correctly? You had an orgasm?')) {
        return;
    }

    if(isStroking()) {
        stopStroking();
    }

    if(isEdging()) {
        endEdge();
    }

    let answer = sendInput('Did you cum just now or before the session?');
    let now = false;

    while(true) {
        if(answer.isLike('now')) {
            now = true;
            break;
        } else if(answer.isLike('before')) {
            break;
        } else {
            sendMessage('Right now or before the session %SlaveName%?');
            answer.loop();
        }

    }


    if(now) {

    } else {
        if(sendYesOrNoQuestion('So... you had an orgasm without my permission?')) {
            if(sendYesOrNoQuestion('Was it a wet dream?')) {
                sendMessage('Well...');
                sendMessage('I don\'t think I can punish you for that...');
                registerRuin();
                sendMessage('However I will make sure to tease you even more today to make up for it %Grin%');
                sendMessage('Thank you for telling me %SlaveName% %EmoteHappy%');
                changeMeritLow();
                return false;
            }

            if(sendMessage('Did you at least ruin it?')) {
                sendMessage('That\'s something I guess');
                registerRuin();
                addPunishmentPoints(getPPRuleIgnored(), PUNISHMENT_REASON.NO_PERM_RUINED);
                changeMeritHigh(false);
            } else {
                sendMessage('You should ruin your orgasm when you cum without permission');
                addPunishmentPoints(getPPRuleIgnored()*2, PUNISHMENT_REASON.NO_PERM_CUM);
                changeMeritHigh(true);
            }

            sendMessage(random('You know you\'re not allowed to', 'I don\'t allow it when you', 'I don\'t want you to', 'You\'re not supposed to') + ' cum ' + random('unless I said so', 'without my permission', 'unless allowed by me', 'unless asked by me') + ' %SlaveName%');

            if(!RULE_DOMME_KEYHOLDER.isActive()) {
                sendMessage(random('But I\'m glad', 'At least') + ' you ' + random('told me', 'admitted your mistake', 'understand that this was wrong', 'decided to tell me'));
                sendMessage('And I must say, that makes me very happy %EmoteHappy%');
                sendMessage('It shows me that you are willing to be a better submissive for me');
                return false;
            }

            sendMessage('You\'re a bad %SlaveName%');
            sendMessage('And you know what happens when you are bad, don\'t you?');
            sendMessage('You are punished...');
            sendMessage('And of course there will be no orgasm for you for the next few days!');

            //Do not lock in chastity now, because we might interrupt something that depends on being not in chastity
            addLockUpTime(24*randomInteger(1,2));
        } else {
            sendMessage('I am very certain I did not give you my permission');
            sendMessage('Which means, I... must have misunderstood then');
        }
    }

    return false;
}