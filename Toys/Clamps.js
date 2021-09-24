const CLOTHESPINS_TOY = createToy('clothespins');

const MAX_TRIES = 1000;
const MAX_CLAMPS = 20;
let LAST_BODY_PART_CLAMP_INTERACTION = [];

function getClamps(index) {
    if (BODY_PARTS.length > index) {
        return BODY_PARTS[index].currentClamps;
    }

    return 0;
}

function setClamps(index, amount) {
    BODY_PARTS[index].currentClamps = amount;
}

function getTotalAttachedClamps() {
    let amount = 0;
    for (let x = 0; x < BODY_PARTS.length; x++) {
        amount += getClamps(x);
    }

    return amount;
}

function removeAllClamps() {
    if (getTotalAttachedClamps() > 0) {
        sendMessage('%SlaveName% go ahead and remove all clamps from your body');

        for (let x = 0; x < BODY_PARTS.length; x++) {
            BODY_PARTS[x].currentClamps = 0;
        }

        sendMessage('Tell me when you are done...');
        waitForDone();
    }
}

function redistributeTooLongAttachedClamps() {
    let bodyPartHistory = new java.util.ArrayList();

    sendDebugMessage('Looking into redistributing clamps that have been on for too long');

    for (let x = 0; x < BODY_PARTS.length; x++) {
        let bodyPart = BODY_PARTS[x];

        //QUALITY: Based on sub pain tolerance
        if (bodyPart.currentClamps > 0) {
            sendDebugMessage('Found body part with clamps: ' + bodyPart.name + ' and last interaction ' + bodyPart.getLastClampInteraction());
            if (bodyPart.getLastClampInteraction().addMinute(15).hasPassed()) {
                sendDebugMessage('Have been on too long. Redistributing...');
                bodyPartHistory.add(bodyPart.normalize());
                redistributeClamps(bodyPart, bodyPart.currentClamps, false, bodyPartHistory);
            }
        }
    }
}

function removeClamps(amount) {
    sendMessage("%SlaveName%");

    let firstRun = true;

    while (amount > 0 && getTotalAttachedClamps() !== 0) {
        let randomBodyPart = BODY_PARTS[randomInteger(0, BODY_PARTS.length - 1)];

        //Check whether that body part has no clamps OR whether it has an opposite part with clamps but our amount isn't enough, however make sure we don't have an infinite loop by checking whether there are an uneven amount of clamps left
        if (randomBodyPart.currentClamps === 0 || (randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps > 0 && amount === 1 && getTotalAttachedClamps() % 2 === 1)) {
            continue;
        }

        let distributedClamps = randomBodyPart.currentClamps;

        //Add them to this
        if (randomBodyPart.hasOppositeBodyPart()) {
            distributedClamps += randomBodyPart.getOppositeBodyPart().currentClamps;
        }

        let toRemove = randomInteger(1, Math.min(distributedClamps, Math.min(amount, 5)));

        if (randomBodyPart.hasOppositeBodyPart() && randomBodyPart.getOppositeBodyPart().currentClamps > 0 && amount > 1) {
            //Fix to remove if we have an opposite body part to work with
            if (toRemove === 1) {
                toRemove = 2;
            }

            //Make it dividable by two
            toRemove = toRemove - toRemove % 2;

            //Now divide it by two
            toRemove /= 2;

            //Fix amount
            if (toRemove > randomBodyPart.getOppositeBodyPart().currentClamps) {
                toRemove = randomBodyPart.getOppositeBodyPart().currentClamps;
            }

            //Fix amount
            if (toRemove > randomBodyPart.currentClamps) {
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

function distributeClamps(amount, bodyPartHistory = new java.util.ArrayList()) {
    //const currentClamps = getTotalAttachedClamps();

    if (getTotalAttachedClamps() >= MAX_CLAMPS) {
        removeClamps(amount);

        sendMessage("Now...");
        sendMessage('We didn\'t just remove them to make you feel good');
        sendMessage('We are gonna reattach them to new spots now %Grin%');
    } else {
        if (!fetchToy('clothespin', undefined, amount)) {
            return false;
        }

        sendMessage("Now...");
    }

    //Track the temporary history of body parts already served using the body part history

    //Set the sentence builder variable to true
    SENTENCE_BUILDER_FIRST = true;

    let tries = 0;
    while (amount > 0 && tries < MAX_TRIES) {
        tries++;

        let randomBodyPart = findRandomBodyPartForClamps();

        //Track whether we switched to the opposite part because then we don't need to check the other part afterwards anymore
        let switchedToOpposite = false;

        if (randomBodyPart.isMaxClampsReached()) {
            //If there is no opposite or the opposite part is also filled already skip
            if (!randomBodyPart.hasOppositeBodyPart() || randomBodyPart.getOppositeBodyPart().currentClamps >= randomBodyPart.getOppositeBodyPart().maxClamps) {
                continue;
            } else {
                //We can fill up the opposite body part
                randomBodyPart = randomBodyPart.getOppositeBodyPart();

                //Our current part is full so we don't need to check for the previous part later on anymore
                switchedToOpposite = true;
            }
        }

        //We already used that body part in this history
        if (bodyPartHistory.contains(randomBodyPart.normalize())) {
            continue;
        }

        //Nipple clamps instead?
        if ((randomBodyPart === BODY_PART_NIPPLE_L || randomBodyPart === BODY_PART_NIPPLE_R) && shouldReplaceSpinsWithNippleClamps() && !isNipplesOccupied()) {
            putNippleClampsOn();
            continue;
        }

        let maxDistributeAmount = amount;

        let oppositeBodyPartToFill = null;

        //Find the other body part and check whether we can fill it, we don't need to try if we already switched to opposite above
        if (!switchedToOpposite && randomBodyPart.hasOppositeBodyPart() && !randomBodyPart.getOppositeBodyPart().isMaxClampsReached()) {
            oppositeBodyPartToFill = randomBodyPart.getOppositeBodyPart();
            //This is the amount per body part if we have two body parts to fill
            maxDistributeAmount = Math.max(1, Math.floor(maxDistributeAmount / 2));
        }

        let toPutAmount = 0;

        //If we have two body parts to fill and don't have enough left to distribute them equally
        if (oppositeBodyPartToFill != null && amount === 1) {
            continue;
        } else if (oppositeBodyPartToFill != null) {
            toPutAmount = randomBodyPart.findClampAmountToAttachBothSides(maxDistributeAmount);
            putClampsOnBothSides(toPutAmount, toPutAmount, randomBodyPart);
            amount -= toPutAmount * 2;
        } else {
            toPutAmount = randomBodyPart.getClampAmountToAttach(maxDistributeAmount);
            putClampsOnOneSide(toPutAmount, randomBodyPart);
            amount -= toPutAmount;
        }

        //Temp history to not repeat any body parts
        //QUALITY: Remove in special cases and tease with the remaining things like: What to do with the last two...? Hmm. Well just apply them to your balls as well
        bodyPartHistory.add(randomBodyPart.normalize());
    }

    sendMessage(random("That should do it for now", "That should be enough for now", "This should be sufficient for now") + " %Grin%");

    return true;
}


function findRandomBodyPart() {
    return BODY_PARTS[randomInteger(0, BODY_PARTS.length - 1)];
}

function findRandomBodyPartWithClamps() {
    for (let x = 0; x < MAX_TRIES; x++) {
        let randomBodyPart = findRandomBodyPart();

        if (randomBodyPart.currentClamps <= 0) {
            continue;
        }

        return randomBodyPart;
    }

    sendDebugMessage('Failed to find body part for clamps');
    return null;
}

function findRandomBodyPartForClamps() {
    for (let x = 0; x < MAX_TRIES; x++) {
        let randomBodyPart = findRandomBodyPart();

        if (!randomBodyPart.canAttachClamps()) {
            continue;
        }

        return randomBodyPart;
    }

    sendDebugMessage('Failed to find body part for clamps');
    return null;
}

function getClampsOnSentenceStart() {
    return getClampsSentenceStart(random("take", "grab"));
}

function getClampsMoveSentenceStart() {
    return getClampsSentenceStart('move');
}

function getClampsSentenceStart(verb) {
    let sentenceStart = verb;
    if (!SENTENCE_BUILDER_FIRST) {
        sentenceStart = random("now", "next", "go ahead and") + " " + sentenceStart;

        if (isChance(50)) {
            sentenceStart += " an " + random("additional", "extra");
        }
    } else {
        SENTENCE_BUILDER_FIRST = false;
    }

    //Capitalize first letter
    sentenceStart = capitalize(sentenceStart);

    return sentenceStart;
}


function putClampsOnOneSide(amount, bodyPart) {
    sendMessage(getClampsOnSentenceStart() + (amount === 1 ? " that " : " ") + amount + pluralize(" clothespin", amount) + " and " + random("put " + pluralizeArticle("it", amount) + " on", "attach " + pluralizeArticle("it", amount) + " to") + " your " + bodyPart.sidedName);
    bodyPart.addClamps(amount);
    sleep(3);
}

function putClampsOnBothSides(leftAmount, rightAmount, bodyPart) {
    let leftSide = bodyPart.getRightSide();
    let rightSide = bodyPart.getLeftSide();


    if (leftAmount === rightAmount) {
        sendMessage(getClampsOnSentenceStart() + " " + leftAmount + pluralize(" clothespin", leftAmount) + " each and " + random("put " + pluralizeArticle("it", leftAmount) + " on", "attach " + pluralizeArticle("it", leftAmount) + " to") + " both your right and left " + bodyPart.name);
        bodyPart.getOppositeBodyPart().addClamps(leftAmount);
        bodyPart.addClamps(leftAmount);
        sleep(3);
    } else {
        putClampsOnOneSide(leftAmount, leftSide, getClampsOnSentenceStart());
        putClampsOnOneSide(rightSide, leftSide, getClampsOnSentenceStart());
    }
}

function hasClampsOnPenis() {
    return BODY_PART_PENIS_SHAFT.currentClamps > 0 || BODY_PART_PENIS_HEAD.currentClamps > 0;
}

function removeClampsForStroking() {
    BODY_PART_PENIS_SHAFT.currentClamps = 0;
    BODY_PART_PENIS_HEAD.currentClamps = 0;

    sendMessage('You may remove all clamps from %MyYour% %Cock% %SlaveName%');
    sendMessage('Tell me when you are ready to continue');
    waitForDone();
}

function redistributeClampsForStroking() {
    let bodyPartHistory = new java.util.ArrayList();

    if (BODY_PART_PENIS_SHAFT.currentClamps > 0) {
        bodyPartHistory.add(BODY_PART_PENIS_SHAFT);
        bodyPartHistory.add(BODY_PART_PENIS_HEAD);
        redistributeClamps(BODY_PART_PENIS_SHAFT, BODY_PART_PENIS_SHAFT.currentClamps, false, bodyPartHistory);
    }

    if (BODY_PART_PENIS_HEAD.currentClamps > 0) {
        //Clear because might have filled it before
        bodyPartHistory.clear();
        bodyPartHistory.add(BODY_PART_PENIS_SHAFT);
        bodyPartHistory.add(BODY_PART_PENIS_HEAD);

        redistributeClamps(BODY_PART_PENIS_HEAD, BODY_PART_PENIS_HEAD.currentClamps, false, bodyPartHistory);
    }
}

function redistributeRandomClamps() {
    //let bodyPartHistory = new java.util.ArrayList();
    let bodyPartWithClamps = findRandomBodyPartWithClamps();


    let amount = bodyPartWithClamps.currentClamps;

    let oppositeToo = bodyPartWithClamps.hasOppositeBodyPart() && bodyPartWithClamps.getOppositeBodyPart().currentClamps > 0;

    redistributeClamps(bodyPartWithClamps, amount, oppositeToo);
}

//TODO: This amount is not accurate when having two sides but different amounts of clamps
function redistributeClamps(bodyPart, amount, oppositeToo = false, bodyPartHistory = new java.util.ArrayList()) {
    SENTENCE_BUILDER_FIRST = true;
    let tries = 0;

    while (amount > 0 && tries < MAX_TRIES) {
        tries++;

        let newBodyPart = findRandomBodyPartForClamps();

        sendDebugMessage('Trying to use ' + newBodyPart.name + ' for clamp redistribution with ' + amount + ' left to distribute');

        let oppositeBodyPartToMove = null;

        //If we have another side to move clamps from we set it here
        if (oppositeToo && bodyPart.hasOppositeBodyPart()) {
            oppositeBodyPartToMove = bodyPart.getOppositeBodyPart();
        }

        let oppositeBodyPartToFill = null;

        let maxDistributeAmount = amount;

        //Do we have another body part side to fill?
        if (newBodyPart.hasOppositeBodyPart()) {
            //If our body part has no opposite side or we want to move from both sides then we will set our secondary var
            if (!bodyPart.hasOppositeBodyPart() || oppositeToo) {
                if (!newBodyPart.getOppositeBodyPart().isMaxClampsReached() && newBodyPart.canAttachClamps()) {
                    oppositeBodyPartToFill = newBodyPart.getOppositeBodyPart();
                    maxDistributeAmount = Math.max(1, Math.floor(maxDistributeAmount / 2));
                    sendDebugMessage('Found opposite part and using it too');
                }
            } else if (newBodyPart.side !== bodyPart.side && bodyPart.hasOppositeBodyPart()) {
                //Switch to the corresponding side if our body part has an opposite side and if we don't want to deal with the opposite too
                newBodyPart = newBodyPart.getOppositeBodyPart();
                sendDebugMessage('Found opposite part and switched to it');
            }
        }

        //Normalize to left side
        if (bodyPartHistory.contains(newBodyPart.normalize())) {
            continue;
        }

        //Check if this body part is viable for clamps
        if (!newBodyPart.canAttachClamps() || newBodyPart.isMaxClampsReached() || newBodyPart.isSameIgnoreSide(bodyPart)) {
            sendDebugMessage('Body part not viable. Trying next');
            continue;
        }

        let toPutAmount = 0;

        //If we have two body parts to fill and don't have enough left to distribute them equally
        if (oppositeBodyPartToFill !== null && amount === 1) {
            sendDebugMessage('Failed because amount is greater than 1 and we have an opposite side');
            continue;
        } else if (oppositeBodyPartToFill !== null) {
            toPutAmount = newBodyPart.findClampAmountToAttachBothSides(maxDistributeAmount);
            moveClamps(toPutAmount, bodyPart, newBodyPart, oppositeBodyPartToMove !== null, oppositeBodyPartToFill !== null);
            amount -= toPutAmount * 2;
        } else {
            toPutAmount = newBodyPart.getClampAmountToAttach(maxDistributeAmount);
            moveClamps(toPutAmount, bodyPart, newBodyPart, oppositeBodyPartToMove !== null, false);
            amount -= toPutAmount;
        }

        bodyPartHistory.add(newBodyPart.normalize());
    }
}

/**
 * Move clamps from one body part to another. Instruction only. NO sanity check for max clamps etc.
 * @param amount
 * @param bodyPart
 * @param newBodyPart
 * @param oppositeToo
 * @param firstRun
 */
function moveClamps(amount, bodyPart, newBodyPart, oppositeToo = false, oppositeNewPartToo = false) {
    if (oppositeToo && bodyPart.hasOppositeBodyPart()) {
        //If our new body part has no opposite part but our old one does have one and we want to move from both sides to one single part then we need this check
        if (!newBodyPart.hasOppositeBodyPart() || !oppositeNewPartToo) {
            sendMessage(getClampsMoveSentenceStart() + " " + amount + pluralize(" clothespin", amount) + " from both your right and left " + bodyPart.name + " to your " + newBodyPart.sidedName);
        } else {
            sendMessage(getClampsMoveSentenceStart() + " " + amount + pluralize(" clothespin", amount) + " from both your right and left " + bodyPart.name + " to both your right and left " + newBodyPart.name);

            //Only here because only in this case we have an opposite part of the new body part
            newBodyPart.getOppositeBodyPart().addClamps(amount);

            //Subtract amount twice (here and end)
            bodyPart.getOppositeBodyPart().subtractClamps(amount);
        }

        bodyPart.getOppositeBodyPart().subtractClamps(amount);
    } else if (oppositeNewPartToo && newBodyPart.hasOppositeBodyPart()) {
        sendMessage(getClampsMoveSentenceStart() + " " + amount + pluralize(" clothespin", amount) + " from your " + bodyPart.sidedName + " to your to both your right and left " + newBodyPart.name);

        newBodyPart.getOppositeBodyPart().addClamps(amount);
        LAST_BODY_PART_CLAMP_INTERACTION[newBodyPart.id] = setDate();

        //Subtract amount twice (here and end)
        bodyPart.subtractClamps(amount);
    } else {
        sendMessage(getClampsMoveSentenceStart() + " " + amount + pluralize(" clothespin", amount) + " from your " + bodyPart.sidedName + " to your " + newBodyPart.sidedName);
    }

    newBodyPart.addClamps(amount);

    bodyPart.subtractClamps(amount);
    sleep(3);
}

/**
 * Remove clamps from a body part. Instruction only - NO sanity check for max clamps
 * @param amount
 * @param bodyPart
 * @param oppositeToo
 * @param firstRun
 */
function putClampsOff(amount, bodyPart, oppositeToo = false, firstRun = false) {
    let sentenceStart = random("remove", "rip off", "pull off");

    if (!firstRun) {
        sentenceStart = random("now", "next", "go ahead and") + " " + sentenceStart;

        if (isChance(50)) {
            sentenceStart += " an " + random("additional", "extra");
        }
    }

    //Capitalize first letter
    sentenceStart = capitalize(sentenceStart);

    if (oppositeToo) {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " from both your right and left " + bodyPart.name);
        bodyPart.getOppositeBodyPart().subtractClamps(amount);
    } else {
        sendMessage(sentenceStart + " " + amount + pluralize(" clothespin", amount) + " from your " + bodyPart.sidedName);
    }

    bodyPart.subtractClamps(amount);
    sleep(3);
}


