const CLOTHESPINS_TOY = createToy('clothespins');
const NIPPLE_CLAMPS = createToy('nipple clamps');

const MAX_CLAMPS = 20;

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

function removeClamps(amount) {
    sendMessage("%SlaveName%");

    let firstRun = true;

    while(amount > 0 && getTotalAttachedClamps() !== 0) {
        let randomBodyPart = BODY_PARTS[randomInteger(0, BODY_PARTS.length  - 1)];

        //Check whether that body part has no clamps OR whether it has an opposite part with clamps but our amount isn't enough, however make sure we don't have an infinite loop by checking whether there are an uneven amount of clamps left
        if(randomBodyPart.currentClamps === 0 || (randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps > 0 && amount === 1 && getTotalAttachedClamps()%2 === 1)) {
            continue;
        }

        let distributedClamps = randomBodyPart.currentClamps;

        //Add them to this
        if(randomBodyPart.hasOppositeBodyPart()) {
            distributedClamps += randomBodyPart.getOppositeBodyPart().currentClamps;
        }

        let toRemove = randomInteger(1, Math.min(distributedClamps, Math.min(amount, 5)));

        if(randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps > 0 && amount > 1) {
            //Fix to remove if we have an opposite body part to work with
            if(toRemove === 1) {
                toRemove = 2;
            }

            //Make it dividable by two
            toRemove = toRemove - toRemove%2;

            //Now divide it by two
            toRemove /= 2;

            //Fix amount
            if(toRemove > randomBodyPart.getOppositeBodyPart().currentClamps) {
                toRemove = randomBodyPart.getOppositeBodyPart().currentClamps;
            }

            //Fix amount
            if(toRemove > randomBodyPart.currentClamps) {
                toRemove = randomBodyPart.currentClamps;
            }

            putClampsOff(toRemove, randomBodyPart, true, firstRun);
            amount -= toRemove;
        } else {
            putClampsOff(toRemove, randomBodyPart, false, firstRun);
            amount -= toRemove;
        }

        firstRun = false;
    }
}

function distributeClamps(amount) {
    //const currentClamps = getTotalAttachedClamps();

    if(getTotalAttachedClamps() >= MAX_CLAMPS) {
        removeClamps(amount);

        sendMessage("Now...");
        sendMessage('We didn\'t just remove them to make you feel good');
        sendMessage('We are gonna reattach them to new spots now %Grin%');
    } else {
        if(!fetchToy('clothespin', undefined, amount)) {
            return false;
        }

        sendMessage("Now...");
    }

    let firstRun = true;

    //Track the temporary history of body parts already served
    let bodyPartHistory = new java.util.ArrayList();

    while(amount > 0) {
        let randomBodyPart = BODY_PARTS[randomInteger(0, BODY_PARTS.length - 1)];

        //No pins to penis/balls if in chastity
        if(isInChastity() && (randomBodyPart === BODY_PART_PENIS_SHAFT || randomBodyPart === BODY_PART_PENIS_HEAD || randomBodyPart === BODY_PART_BALLS)) {
            continue;
        }

        //Track whether we switched to the opposite part because then we don't need to check the other part afterwards anymore
        let switchedToOpposite = false;

        if(randomBodyPart.currentClamps >= randomBodyPart.maxClamps) {
            //If there is no opposite or the opposite part is also filled already skip
            if(!randomBodyPart.hasOppositeBodyPart() || randomBodyPart.getOppositeBodyPart().currentClamps >= randomBodyPart.getOppositeBodyPart().maxClamps) {
                continue;
            } else {
                //We can fill up the opposite body part
                randomBodyPart = randomBodyPart.getOppositeBodyPart();

                //Our current part is full so we don't need to check for the previous part later on anymore
                switchedToOpposite = true;
            }
        }

        //We already used that body part in this history
        if(bodyPartHistory.contains(randomBodyPart)) {
            continue;
        }

        let toPutAmount = Math.max(1, Math.min(randomInteger(1, Math.min(randomBodyPart.maxClamps - randomBodyPart.currentClamps, 5)), amount));

        let oppositeBodyPartToFill = null;

        //Find the other body part and check whether we can fill it, we don't need to try if we already switched to opposite above
        if(!switchedToOpposite && randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps < randomBodyPart.getOppositeBodyPart().maxClamps) {
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

        //Temp history to not repeat any body parts TODO: Remove in special cases and tease with the remaining things like: What to do with the last two...? Hmm. Well just apply them to your balls aswell
        bodyPartHistory.add(randomBodyPart);

        if(oppositeBodyPartToFill != null) {
            bodyPartHistory.add(oppositeBodyPartToFill)
        }
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


function putClampsOff(amount, bodyPart, oppositeToo = false, firstRun = false) {
    let sentenceStart = random("remove");
    if(!firstRun) {
        sentenceStart = random("now", "next", "go ahead and") + " " + sentenceStart;

        if(isChance(50)) {
            sentenceStart += " an " + random("additional", "extra");
        }
    }

    //Capitalize first letter
    sentenceStart = capitalize(sentenceStart);

    if(oppositeToo) {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " from both your right and left " + bodyPart.name);
        bodyPart.getOppositeBodyPart().currentClamps -= amount;
    } else {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " from your " + bodyPart.sidedName);
    }

    bodyPart.currentClamps -= amount;
    sleep(3);
}
