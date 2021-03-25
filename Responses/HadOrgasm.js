addResponseRegex("I had an orgasm", "had an orgasm", "I've had an orgasm", 'Ive had an orgasm', 'I came', 'I just came', 'I came just now');

function hadOrgasmResponse(message) {
    //QUALITY: Interaction with current theme: Like during cbt: Wtf, you came from pain?
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
            sendMessage('Right now or before the session %SlaveName%?', 0);
            answer.loop();
        }

    }

    if(now) {
        sendMessage('Oh no no', 'Oh come on', 'What the hell', 'What the fuck', 'Oh really now', 'What', 'Unbelievable', 'That is not something I want to hear from you', 'Well...');
        sendMessage(random('Dammit ', 'You should know better ', 'That is just terrible ', 'You are simply the worst ', 'Why would you do that ', 'Where is your self control ') + ' slave');

        if(sendMessage('Did you at least ruin it?')) {
            sendMessage('That\'s something I guess');
            registerRuin();
            addPunishmentPoints(getPPRuleIgnored(), PUNISHMENT_REASON.NO_PERM_RUINED);
            changeMeritMedium(true);
        } else {
            sendMessage('You should ruin your orgasm when you cum without permission');
            addPunishmentPoints(getPPRuleIgnored()*2, PUNISHMENT_REASON.NO_PERM_CUM);
            changeMeritHigh(true);
            registerOrgasm();
        }

        if(CEI_LIMIT.isAllowed()) {
            sendMessage(random('Eat ', 'Lick ') + random('all that cum up ', 'it up ', 'up your cum right fucking now ') + '%SlaveName%');
            sendMessage(random('You should ', 'You should ALWAYS ', 'You have to ') + random('eat your cum ', 'swallow every single drop ', 'lick it up ', 'lick up your mess ', 'eat it ', 'swallow it ') + 'if you cum without permission');
            wait(15);
        }

        if(RULE_DOMME_KEYHOLDER.isActive()) {
            sendMessage(random('I guess you still have to learn ', 'You have to learn ', 'Get it between your ears ', 'Remember ') + 'that your orgasms ' + random('are not your own ', 'are not yours ', 'belong to me ', 'are mine ') + '%SlaveName%');

            if(sendYesOrNoQuestion('I own your orgasms, and I decide ' + random('whether ', 'when ', 'when and how ') + 'you get ' + random('one ', 'to cum ', 'an orgasm ') + random('understood', 'do you understand that', 'is that clear') + '?')) {
                sendMessage(random('Alright then', 'Good', 'Okay', 'Just remember that next time you get close', 'Do not forget that'));
            } else {
                sendMessage('Well you\'d better ' + random('fucking learn ', 'get it between your ears ') + 'because that\'s the way it is');
            }
        }
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
                changeMeritMedium(false);
            } else {
                sendMessage('You should ruin your orgasm when you cum without permission');
                addPunishmentPoints(getPPRuleIgnored()*2, PUNISHMENT_REASON.NO_PERM_CUM);
                changeMeritHigh(true);
                registerOrgasm();
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