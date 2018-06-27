function getClamps(index) {
    if(BODY_PARTS.length > index) {
        return BODY_PARTS[index].currentClamps;
    }

    return 0;
}

function setClamps(index, amount) {
    BODY_PARTS[index].currentClamps = amount;
}

function getTotalAttachedClamps() {
    let amount = 0;
    for(let x = 0; x < BODY_PARTS.length; x++) {
        amount += getClamps(x);
    }

    return amount;
}

function distributeClamps(amount) {
    //const currentClamps = getTotalAttachedClamps();

    sendMessage("Go ahead and " + random("fetch", "get", "retrieve") + " " + amount + " clothespins");

    const answer = sendInput("Tell me when you are ready to continue.");
    while(true) {
        if(answer.isLike("done", "yes", "ready")) {
            sendMessage("%Good%");
            break;
        } else if(answer.isLike("no", "don't", "can't")) {
            sendMessage("What?!");
            sendMessage("That is unacceptable!");
            sendMessage("You should always have your stuff around!");
            changeMeritHigh(true);
            sendMessage("Well then....");
            return false;
        } else {
            sendMessage("Are you done yet?");
            answer.loop();
        }
    }

    sendMessage("Now...");

    let firstRun = true;

    while(amount > 0) {
        let randomBodyPart = BODY_PARTS[randomInteger(0, 9)];

        if(randomBodyPart.currentClamps >= randomBodyPart.maxClamps) {
            //If there is no opposite or the opposite part is also filled already skip
            if(!randomBodyPart.hasOppositeBodyPart() || randomBodyPart.getOppositeBodyPart().currentClamps >= randomBodyPart.getOppositeBodyPart().maxClamps) {
                continue;
            } else {
                //We can fill up the opposite body part
                randomBodyPart = randomBodyPart.getOppositeBodyPart();
            }
        }

        let toPutAmount = Math.max(1, Math.min(randomInteger(1, Math.min(randomBodyPart.maxClamps - randomBodyPart.currentClamps, 5)), amount));

        let oppositeBodyPartToFill = null;
        //Find the other body part and check whether we can fill it
        if(randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps < randomBodyPart.getOppositeBodyPart().maxClamps) {
            oppositeBodyPartToFill = randomBodyPart.getOppositeBodyPart();
        }

        //If we have two body parts to fill and don't have enough left to distribute them equally
        if(oppositeBodyPartToFill != null && amount == 1) {
            continue;
        } else if(oppositeBodyPartToFill != null) {
            toPutAmount = Math.max(1, Math.floor(toPutAmount/2));
        }

        putClampsOn(toPutAmount, randomBodyPart, oppositeBodyPartToFill != null, firstRun);

        //Subtract our amount from the total amount
        if(oppositeBodyPartToFill != null) {
            amount -= toPutAmount*2;
        } else {
            amount -= toPutAmount;
        }

        firstRun = false;
    }

    sendMessage(random("That should do it for now", "That should be enough for now", "This should be sufficient for now") + " %Grin%");

    return true;
}

function putClampsOn(amount, bodyPart, oppositeToo = false, firstRun = false) {
    let sentenceStart = random("take", "grab");
    if(!firstRun) {
        sentenceStart = random("now", "next", "go ahead and") + " " + sentenceStart;

        if(isChance(50)) {
            sentenceStart += " an " + random("additional", "extra");
        }
    }

    //Capitalize first letter
    sentenceStart = capitalize(sentenceStart);

    if(oppositeToo) {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " each and " + random("put " + pluralizeArticle("it", amount) + " on", "attach " + pluralizeArticle("it", amount) + " to") + " both your right and left " + bodyPart.name);
        bodyPart.getOppositeBodyPart().currentClamps += amount;
    } else {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " and " + random("put " + pluralizeArticle("it", amount) + " on", "attach " + pluralizeArticle("it", amount) + " to") + " your " + bodyPart.sidedName);
    }

    bodyPart.currentClamps += amount;
    sleep(3);
}
