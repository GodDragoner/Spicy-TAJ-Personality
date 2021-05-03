const SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE = 30;
const CHASTITY_TYPE_SMALL = 1;
const CHASTITY_TYPE_BIG = 0;
const CHASTITY_CAGES = [];

let currentChastityCage;

loadChastityCages();

if (isVar(VARIABLE.ACTIVE_CHASTITY_CAGE)) {
    currentChastityCage = getChastityCageByName(getVar(VARIABLE.ACTIVE_CHASTITY_CAGE));

    if(!isUndefined(currentChastityCage)) {
        sendDebugMessage('Active chastity cage: ' + currentChastityCage.name);
    }
} else {
    currentChastityCage = null;
}


const BALL_TRAP_TYPE = {
    FULL_BELT: 0,
    BALL_TRAP: 1,
};




function getActiveChastityCage() {
    if (currentChastityCage === null || currentChastityCage === undefined) {
        if (CHASTITY_CAGES.length == 0) {
            return null;
        } else {
            return CHASTITY_CAGES[0];
        }
    } else {
        return currentChastityCage;
    }
}

function unlockChastityCage(fakeOpening = false) {
    if (!getVar(VARIABLE.HAS_CHASTITY) || !getVar(VARIABLE.CHASTITY_ON)) {
        return;
    }

    unlockChastityKey();

    sendMessage("%SlaveName%");

    if (fakeOpening || feelsEvil()) {
        sendMessage(random('In a moment', 'In a second', 'In a few moments', 'In a few seconds') + ' I am gonna ' + random('allow you to', '') + ' unlock %MyYour% poor little cock');
        sendMessage(random('But', 'However') + random(' today I really want you to savor the moment', ' it will be a bit different today', ' today will be different',
            ' we are gonna take it slow today', ' I want you to savor the moment'));
        sendMessage(random('You will not completely unlock %MyYour% cock unless I specifically stated it', 'You will not rush it and do as I say', 'You will not unlock it without my explicit permission',
            'You will obey me and not unlock it without my explicit permission'));

        sendMessage('%Now%');
        sendMessage('Put the key into the lock of the cage %Grin%');
        sleep(randomInteger(5, 10));
        sendMessage(random('Feel %MyYour% %Cock% aching to be free', 'Feel %MyYour% %Cock% throbbing and waiting to be finally free', 'Think about how the freedom will feel'));
        sleep(randomInteger(5, 10));
        sendMessage('%Moan%');
        sleep(randomInteger(5, 10));

        let chanceToAbort = 20;

        sendMessage('And...');

        if (fakeOpening && isChance(chanceToAbort)) {
            sendMessage('Pull the key out again %Lol%');
            return;
        }

        chanceToAbort += 20;

        sendMessage(random('Twist the key in the lock', 'Twist the key', 'Open the lock by twisting the key'));
        sleep(randomInteger(5, 10));

        if (sendYesOrNoQuestion(random('So close to freedom', 'So excited', 'So thrilled') + ' aren\'t you?')) {
            //QUALITY: More diversity
            sendMessage('Mhmmm yes you are %Grin%');
        } else {
            sendMessage('No? I wonder why you feel that way %Lol%');
        }

        sleep(randomInteger(5, 10));
        sendMessage('%Now%');
        if (fakeOpening && isChance(chanceToAbort)) {
            sendMessage('Lock the lock right up again %Lol%');
            return;
        }

        chanceToAbort = 100;

        sendMessage('Remove the lock but keep holding the cage in place');
        sendMessage(random('The cage stays on until I give you the permission to remove it completely', 'Wait for my command', 'Do not remove it completely yet', 'Keep it in place') + ' %SlaveNameSmiley%');
        sleep(randomInteger(5, 10));

        sendMessage(random('So close!', 'Only a few more moments till freedom', 'Just a few more moments till freedom', 'Hard to ignore that %Cock% crying out for freedom isn\'t it?') + ' %Lol%');
        sleep(randomInteger(5, 10));

        if (fakeOpening) {
            sendMessage('Put the lock back on and lock everything back up %SlaveName% %Lol%');

            return;
        }

        //Now the normal thing as always
    }

    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOff/*.{jpg,png,gif}");
    if (randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOff/*.mp3");
    sendMessage(random("Remove your %ChastityCage%", "Get your %ChastityCage% off", "Remove the %ChastityCage% at once", "Hurry up and remove the %ChastityCage%", "Be quick and get your %ChastityCage% off"));

    let timeout = randomInteger(50, 60);
    if (getStrictnessForCharacter() == 1) {
        timeout = randomInteger(40, 50);
    } else if (getStrictnessForCharacter() == 2) {
        timeout = randomInteger(30, 40);
    }

    const answer = sendInput(random("Let me know when you're done...", "Report to me when it's off", "Remember to tell me when it's off"), timeout);
    let loop = 0;
    while (true) {
        if (answer.isTimeout()) {
            loop++;

            if (loop > 1) {
                sendMessage(random("You've taken way too long to get that %ChastityCage% off...", "You are taking way to long to get that %ChastityCage% off", "It took you too long to get that cage off..."));
                sendMessage(random("I don't like when you make me wait", "I don't like to wait", "I don't like waiting"));
                sendMessage(random("I'm giving you punishment points", "I've assigned you some punishment points", "I've increased your number of punishment points"));
                addPunishmentPoints(100, PUNISHMENT_REASON.TOO_SLOW);
                break;
            } else {
                sendMessage(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"), 0);
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.isLike("done", "off", "uncaged", "unlocked", "out", "belt", "yes", "ready")) {
            if (loop == 1) {
                sendMessage(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessage("%Good%");
                break;
            }
        } else {
            sendMessage('Don\'t bother me if you aren\'t done yet...', 0);
            answer.loop();
        }
    }

    setVar(VARIABLE.CHASTITY_ON, false);
    unlockImages();

    //Set the date to today then by default so in 2 days we can ask if the cage wasn't cleaned
    if(!isVar(VARIABLE.LAST_CHASTITY_CLEAN)) {
        setDate(VARIABLE.LAST_CHASTITY_CLEAN);
    }

    if(getDate(VARIABLE.LAST_CHASTITY_CLEAN, setDate()).addDay(2).hasPassed() && RULE_DOMME_KEYHOLDER.isActive()) {
        if(sendYesOrNoQuestion('You haven\'t cleaned your cage and %MyYour% cock in the last two days, have you?')) {
            sendMessage('Oh you have?');

            if(sendYesOrNoQuestion('Strange, I could\'ve sworn I didn\'t allow you to take it off did I?')) {
                addPPRuleIgnored();
                sendMessage('That\'s now what I wanted to hear')
            } else {
                sendMessage('I must have forgotten');
            }
        } else {
            sendMessage('Sigh...');
            sendMessage('Go and do it now! You got 5 minutes %SlaveName%');
            sendMessage('Tell me when you are done...');
            waitForDone(60*5);
            sendMessage('Now that\'s a clean %Cock% I can work with');
        }

        setDate(VARIABLE.LAST_CHASTITY_CLEAN);
    }

    return;
}

function getMaxChastitySize() {
    let mood = getMood();
    let strictness = getStrictnessForCharacter();

    //Smaller size if we feel like punishing
    let subtract = feelsLikePunishingSlave() ? 1 : 0;

    let maxWithoutRange = 9 - (Math.max(1, strictness) + Math.max(1, mood) + Math.min(1, mood) + subtract);
    sendDebugMessage('Max chastity cage size: ' + maxWithoutRange);

    return Math.max(1, Math.min(5, maxWithoutRange));
}

function getMinChastitySize() {
    if (getStrictnessForCharacter() === 2) {
        return Math.max(1, getMaxChastitySize() - 2);
    } else if (getStrictnessForCharacter() === 1) {
        return Math.max(1, getMaxChastitySize() - randomInteger(1, 2));
    } else {
        return Math.max(1, getMaxChastitySize() - 1);
    }
}

function findAvailableClosestToSize(length) {
    sendDebugMessage('Searching for cage with length: ' + length);
    //let currentCage = null;

    //Negative if size < found size and positive if size > found size
    let currentSizeDifference = null;

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        let foundDifference = length - CHASTITY_CAGES[y].length;

        if (currentSizeDifference === null) {
            //currentCage = CHASTITY_CAGES[y];
            currentSizeDifference = foundDifference;
        }
        //Check if we found the perfect fitting size
        else if (currentSizeDifference !== 0 && foundDifference === 0) {
            currentSizeDifference = 0;
            //Found the perfect match
            break;
        }
        //Check if we found something that is closer
        else if (Math.abs(currentSizeDifference) > Math.abs(foundDifference)) {
            currentSizeDifference = foundDifference;
        }
        //Check if we found something that's equal in value
        else if (Math.abs(currentSizeDifference) === Math.abs(foundDifference)) {
            //Use the bigger one
            if (getStrictnessForCharacter() === 0) {
                currentSizeDifference = Math.max(currentSizeDifference, foundDifference);
            }
            //Use the smaller one
            else {
                currentSizeDifference = Math.min(currentSizeDifference, foundDifference);
            }
        }

        //Otherwise we don't care about that cage right now
    }

    return length - currentSizeDifference;
}

function getRandomCageWithSize(length, punishments) {
    //Return default cage
    if (CHASTITY_CAGES.length === 1) {
        return CHASTITY_CAGES[0];
    }

    let cages = [];

    sendDebugMessage('Searching cage with length ' + length + ' and ' + punishments + ' punishments');

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        let currentCage = CHASTITY_CAGES[y];
        let punishmentOptionsOfCage = 0;

        if (currentCage.dialator) {
            punishmentOptionsOfCage++;

            //If we can't remove it but want no punishments this is not the right cage to go with
            if (punishments === 0 && !currentCage.dialatorDetachable) {
                sendDebugMessage('Skipping ' + currentCage.name + ' because dialator is not detachable');
                continue;
            }
        }

        if (currentCage.spikes) {
            punishmentOptionsOfCage++;

            //If we can't remove it but want no punishments this is not the right cage to go with
            if (punishments === 0 && !currentCage.spikesDetachable) {
                sendDebugMessage('Skipping ' + currentCage.name + ' because spikes are not detachable');
                continue;
            }
        }

        //Don't need to search for a smaller cage because we won't be able to fulfill the request anyway
        if (punishmentOptionsOfCage < punishments - 1) {
            continue;
        }

        //Punishment of smaller cage (check if we can find a smaller cage)
        if (punishments > 0 && length > 1 && getRandomCageWithSize(length - 1, punishments - 1).length === length - 1) {
            punishmentOptionsOfCage++;
        }

        //Fitting size and enough punishment options
        if (currentCage.length === length && punishmentOptionsOfCage >= punishments) {
            cages.push(currentCage);
            sendDebugMessage('Pushing cage ' + currentCage.name + ' to available list');
        }
    }

    if (cages.length === 0) {
        if(punishments >= 0) {
            //Reduce amount of punishments by one (if we can)
            return getRandomCageWithSize(length, punishments - 1);
        } else {
            return random(CHASTITY_CAGES);
        }
    } else {
        return cages[randomInteger(0, cages.length - 1)];
    }
}

/*function getChastityCageSelection(punishmentChance) {
    let size = randomInteger(getMinChastitySize(), getMaxChastitySize());

    let smallChance = punishmentChance - SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;

    if(!getVar(VARIABLE.HAS_CHASTITY_SMALL_PUNISHMENT_CAGE, false)) {
        return 0;
    }

    if(getVar(VARIABLE.CHASTITY_SMALL_HAS_DILATOR, false)) {
        smallChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    if(getVar(VARIABLE.CHASTITY_SMALL_HAS_SPIKES, false)) {
        smallChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    let bigChance = punishmentChance;

    if(getVar(VARIABLE.CHASTITY_HAS_DILATOR, false)) {
        bigChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    if(getVar(VARIABLE.CHASTITY_HAS_SPIKES, false)) {
        bigChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    if(bigChance < 50 && smallChance < 50) {
        //Both
        return 3;
    } else if(bigChance == smallChance) {
        //Both
        return 3;
    } else if(bigChance > smallChance) {
        //Small
        return 1;
    } else {
        //Big only
        return 0;
    }
}*/

function selectChastityCage() {
    let mood = getMood();

    let punishmentChance = mood * 20 + (getStrictnessForCharacter() * 20 - (VERY_ANNOYED_MOOD - mood) * 10) - SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE * 0.5;
    sendDebugMessage('Punishment Chastity Chance: ' + punishmentChance + ' for mood ' + mood + ' and strictness ' + getStrictnessForCharacter());


    sendDebugMessage("Min chastity size: " + getMinChastitySize());

    let length = findAvailableClosestToSize(randomInteger(getMinChastitySize(), getMaxChastitySize()));

    //let chastityCageSelection = getChastityCageSelection(punishmentChance);

    sendDebugMessage('Found closest chastity size: ' + length + " and n");

    let amountOfPunishments = 0;

    //First punishment roll
    if (isChance(punishmentChance)) {
        amountOfPunishments++;
        punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;

        //Second punishment roll
        if (isChance(punishmentChance)) {
            amountOfPunishments++;
            punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
        }
    }

    sendDebugMessage('Searching for cage with size ' + length + ' and punishments ' + amountOfPunishments);

    let cage = getRandomCageWithSize(length, amountOfPunishments);

    if(cage == null) {
        sendDebugMessage('Found no chastity cage in a list of ' + CHASTITY_CAGES.length + ' cages in total');
        return null;
    }

    sendDebugMessage('Found cage ' + cage.name + " with length " + cage.length + " and " + cage.getPunishmentOptions() + " punish options ");

    let punishments = new java.util.ArrayList();

    //Smaller cage punishment, we need to go smaller until we find no other alternative
    do {
        if (cage.length > 1 && amountOfPunishments > 0) {
            let smallerCage = getRandomCageWithSize(cage.length - 1, amountOfPunishments - 1);
            sendDebugMessage("Looking for smaller cage as punishment and got " + smallerCage.name + " with length " + smallerCage.length);
            if (smallerCage.length == cage.length - 1) {
                sendDebugMessage('Found fitting smaller cage. Rolling for chance to replace one punishment');

                //Either not feeling like punishing then go smaller or not enough punishment options
                if (!feelsLikePunishingSlave() || cage.getPunishmentOptions() < amountOfPunishments) {
                    cage = smallerCage;
                    amountOfPunishments--;
                    sendDebugMessage('Selected smaller cage as punishment');
                    sendDebugMessage('Remaining punishments: ' + amountOfPunishments);
                }
            } else {
                break;
            }
        } else {
            break;
        }
    } while (cage.getPunishmentOptions() < amountOfPunishments);


    setVar(VARIABLE.CHASTITY_DILATOR_ON, false);
    setVar(VARIABLE.CHASTITY_SPIKES_ON, false);

    if (cage.spikes) {
        //If spikes are forced we need to calculate that into the remaining chance
        if (!cage.spikesDetachable) {
            amountOfPunishments--;
            setVar(VARIABLE.CHASTITY_SPIKES_ON, true);
            sendDebugMessage('Set spikes as punishment due to being forced by the cage');
        } else {
            //Spikes aren't forced so we should roll for it
            punishments.add(0);

            sendDebugMessage('Added spikes as punishment option');
        }
    }

    if (cage.dialator) {
        //If dilator is forced we need to calculate that into the remaining chance
        if (!cage.dialatorDetachable) {
            amountOfPunishments--;
            setVar(VARIABLE.CHASTITY_DILATOR_ON, true);
            sendDebugMessage('Set dilator as punishment due to being forced by the cage');
        } else {
            //Dilator isn't forced so we should roll for it
            punishments.add(1);

            sendDebugMessage('Added dilator as punishment option');
        }
    }

    //Randomize punishment rolling order
    while (!punishments.isEmpty() && amountOfPunishments > 0) {
        let index = randomInteger(0, punishments.size() - 1);
        switch (punishments.get(index)) {
            case 0:
                setVar(VARIABLE.CHASTITY_SPIKES_ON, true);
                sendDebugMessage('Selected spikes as punishment');
                break;
            case 1:
                setVar(VARIABLE.CHASTITY_DILATOR_ON, true);
                sendDebugMessage('Selected dilator as punishment');
                break;
        }

        //We will definitely apply a punishment so we can reduce this
        amountOfPunishments--;

        sendDebugMessage('Remaining punishments: ' + amountOfPunishments);

        //No reuse of that punishment right now
        punishments.remove(index);
    }

    return cage;
}

function lockChastityCage(chastityCage = undefined) {
    if (!getVar(VARIABLE.HAS_CHASTITY, false) || getVar(VARIABLE.CHASTITY_ON)) {
        return;
    }

    sendMessageBasedOnSender("%SlaveName%");

    if (BODY_PART_PENIS_HEAD.currentClamps > 0 || BODY_PART_PENIS_SHAFT.currentClamps > 0 || BODY_PART_BALLS.currentClamps > 0) {
        sendMessageBasedOnSender('Go ahead and remove all clamps from your penis and balls');
        sendMessageBasedOnSender('Tell me when you are done');
        waitForDone();
        sendMessageBasedOnSender('Aren\'t I nice to you? %Grin%');

        let answer = createInput(5);

        if (answer.isTimeout()) {
            //sendMessage('I don\'t care about your opinion though');
        } else if (answer.isLike('yes', 'thank you')) {
            sendMessage('You are welcome %SlaveName% %EmoteHappy%');
            changeMeritLow(false);
        } else if (answer.isLike('no', 'hurt', 'pain')) {
            sendMessage('Not nice enough huh?');
            sendMessage('Well I don\'t care about your opinion though %Lol%');
            registerComplain();
        }

        //Set clamps on those parts to zero
        BODY_PART_PENIS_SHAFT.currentClamps = 0;
        BODY_PART_PENIS_HEAD.currentClamps = 0;
        BODY_PART_BALLS.currentClamps = 0;
    }

    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOn/*.{jpg,png,gif}");
    if (randomInteger(0, 2) === 2) playSound("Audio/Spicy/Chastity/ChastityOn/*.mp3");

    if (chastityCage === null || chastityCage === undefined) {
        chastityCage = selectChastityCage();
    }

    if (chastityCage === null || chastityCage === undefined) {
        sendMessage('For some reason I can\'t decide on a chastity cage today (bug)');
        sendMessage('I figure I\'ll just not lock you up.');
        return;
    }


    chastityCage.fetchChastityCage();

    let alreadyAttached = false;

    if (getVar(VARIABLE.CHASTITY_SPIKES_ON, false)) {
        sendMessageBasedOnSender('I want you to attach the spikes to it %Grin%');
        alreadyAttached = true;
    }

    if (getVar(VARIABLE.CHASTITY_DILATOR_ON, false)) {
        if (!alreadyAttached) {
            sendMessageBasedOnSender('I want you to attach the dilator to it %Grin%');
        } else {
            sendMessageBasedOnSender('And I want you to attach the dilator to it too %Lol%');

            if (chastityCage.length < 3) {
                sendMessageBasedOnSender('We are going full punishment mode %SlaveName%');
                sendMessageBasedOnSender('You know you don\'t deserve anything different %GeneralTime% %Lol%');
            } else {
                sendMessageBasedOnSender('Be happy that I am not putting you into your small punishment cage as well %Grin%');
            }
        }

        alreadyAttached = true;
    }

    if (alreadyAttached) {
        sendMessageBasedOnSender('Tell me when you have everything around %SlaveName%');
        waitForDone();
        sendMessageBasedOnSender('%Good%');
    }

    sendMessageBasedOnSender('And next...');

    currentChastityCage = chastityCage;

    sendMessageBasedOnSender(random("Put on your %ChastityCage%", "Put on the %ChastityCage% at once", "Hurry up and get the %ChastityCage% back on", "Be quick and get your %ChastityCage% back on", "Lock %MyYour% %Cock% up"));

    const chastityLevel = getVar(VARIABLE.CHASTITY_LEVEL);
    let timeout = randomInteger(120 - chastityLevel, 180 - chastityLevel);
    if (getStrictnessForCharacter() == 1) {
        timeout = randomInteger(110 - chastityLevel, 160 - chastityLevel);
    } else if (getStrictnessForCharacter() == 2) {
        timeout = randomInteger(100 - chastityLevel, 140 - chastityLevel);
    }


    //Slower timeout for the dilator / spikes
    if (getVar(VARIABLE.CHASTITY_DILATOR_ON, false) || getVar(VARIABLE.CHASTITY_SPIKES_ON, false)) {
        timeout *= 5;
    }

    const answer = sendInput(random("Let me know when you're done...", "Report to me when it's on", "Remember to tell me when it's on"), timeout);
    let loop = 0;
    while (true) {
        if (answer.isTimeout()) {
            loop++;

            if (loop > 1) {
                sendMessageBasedOnSender(random("You've taken way too long to get that %ChastityCage% on...", "You are taking way to long to get that %ChastityCage% on", "It took you too long to get that cage on..."));

                if (chastityLevel < 20) {
                    sendMessageBasedOnSender(random("But since you're in chastity training", "But due to you being in chastity training", "But because of your chastity training") + " I won't punish you...");
                } else {
                    if (!isForcedLockedUp()) {
                        sendMessageBasedOnSender("So as a punishment I'm placing you in the %ChastityCage% for the next 24 hours...")
                    } else {
                        sendMessageBasedOnSender("So as a punishment I'm increasing your lock up period by 24 hours...")
                    }

                    changeMeritHigh(true);

                    //Punish slave even more
                    if (feelsLikePunishingSlave()) {
                        if (chastityCage.spikes && !getVar(VARIABLE.CHASTITY_SPIKES_ON, false)) {
                            sendMessageBasedOnSender('I want you to attach the spikes to it %Grin%');
                            setVar(VARIABLE.CHASTITY_SPIKES_ON, true);
                            alreadyAttached = true;
                        } else if (chastityCage.dialator && !getVar(VARIABLE.CHASTITY_DILATOR_ON, false)) {
                            if (!alreadyAttached) {
                                sendMessageBasedOnSender('I want you to attach the dilator to it %Grin%');
                            } else {
                                sendMessageBasedOnSender('And I want you to attach the dilator to it too %Lol%');

                                if (chastityCage.length < 3) {
                                    sendMessageBasedOnSender('We are going full punishment mode %SlaveName%');
                                    sendMessageBasedOnSender('You know you don\'t deserve anything different %GeneralTime% %Lol%');
                                } else {
                                    sendMessageBasedOnSender('Be happy that I am not putting you into your small punishment cage as well %Grin%');
                                }
                            }

                            alreadyAttached = true;
                        }
                    }

                    addLockUpTime(24);

                    if (getCBTLimit() == LIMIT_ASKED_YES) {
                        sendMessageBasedOnSender('And to get that %Cock% into its cage quickly now...');

                        let options = new java.util.ArrayList();
                        options.add(0);
                        options.add(1);
                        options.add(2);

                        let punishments = 0;
                        while (punishments === 0) {
                            let option = options.get(randomInteger(0, options.size() - 1));

                            options.remove(option);

                            switch (option) {
                                case 0:
                                    if (hasTigerHot() && fetchToy('icy hot')) {
                                        sendMessageBasedOnSender('I want you to spread some icy hot on your shaft, balls and glans %Grin%');
                                        sendMessageBasedOnSender('That cock doesn\'t deserve any different and because it won\'t obey it will need to suffer');
                                        sendMessageBasedOnSender('When you are done wait for it to be soft');
                                        sendMessageBasedOnSender('I don\'t care how long it takes or how much it hurts, just report back to me %Lol%');
                                        waitForDone(100000);
                                        sendMessageBasedOnSender('%Good%. Now lock that %Cock% up already');
                                        punishments++;
                                        break;
                                    }
                                case 1:
                                    sendMessageBasedOnSender('Bring me a bowl with some water in it and...');
                                    if (askAndFetchIceCubes(5)) {
                                        sendMessageBasedOnSender('Put those ice cubes into the bowl and dip your balls and cock into it until they are soft %Grin%');
                                        sendMessageBasedOnSender('I don\'t care how long it takes or how much it hurts, just report back to me %Lol%');
                                        waitForDone(100000);
                                        sendMessageBasedOnSender('%Good%. Now lock that %Cock% up already');
                                        punishments++;
                                        break;
                                    }
                                case 2:
                                    smallCBTPunishment();
                                    sendMessageBasedOnSender('I hope for your sake that it is soft now');

                                    //Max 5 times
                                    for (let x = 0; x < 5; x++) {
                                        if (sendYesOrNoQuestion('Tell me %SlaveName%. Is it soft?')) {
                                            break;
                                        } else {
                                            sendMessage(random('Which means', 'Seems like') + ' I am not done yet %Grin%');
                                            smallCBTPunishment();
                                        }
                                    }

                                    sendMessageBasedOnSender('Now lock that %Cock% up already');
                                    punishments++;
                                    break;
                            }
                        }
                    }
                }
                break;
            } else {
                sendMessageBasedOnSender(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"), 0);
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.isLike("done", "on", "caged", "locked", "lock", "belt", "yes", "ready")) {
            if (loop == 1) {
                sendMessageBasedOnSender(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessageBasedOnSender("%Good%");
                break;
            }
        } else {
            sendMessageBasedOnSender('Don\'t bother me if you aren\'t done yet...', 0);
            answer.loop();
        }
    }

    setVar(VARIABLE.CHASTITY_ON, true);

    setVar(VARIABLE.ACTIVE_CHASTITY_CAGE, chastityCage.name);
}


function loadChastityCages() {
    //No var or no chastity cages anyway
    if (!isVar('chastityCages') || !hasChastityCage()) {
        setVar('chastityCages', new java.util.ArrayList());
    } else {
        let saveCages = false;

        let arrayList = tryGetArrayList('chastityCages');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);
            let chastityCage = createChastityCage().fromString(entry);
            CHASTITY_CAGES.push(chastityCage);

            if (currentChastityCage === null) {
                currentChastityCage = CHASTITY_CAGES[0];
            }

            if (isUndefinedString(chastityCage.dialator)) {
                chastityCage.dialator = false;
                saveCages = true;
            }

            if (isUndefinedString(chastityCage.dialatorDetachable)) {
                chastityCage.dialatorDetachable = false;
                saveCages = true;
            }

            if (isUndefinedString(chastityCage.spikes)) {
                chastityCage.spikes = false;
                saveCages = true;
            }

            if (isUndefinedString(chastityCage.spikesDetachable)) {
                chastityCage.spikesDetachable = false;
                saveCages = true;
            }

            if (isUndefinedString(chastityCage.spikesOverall)) {
                chastityCage.spikesOverall = false;
                saveCages = true;
            }

            if (isUndefinedString(chastityCage.penisAccessible)) {
                chastityCage.penisAccessible = false;
                saveCages = true;
            }
        }

        setVar(VARIABLE.HAS_CHASTITY, CHASTITY_CAGES.length > 0);

        if (saveCages) {
            saveChastityCages();
        }
    }
}

function saveChastityCages() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        arrayList.add(CHASTITY_CAGES[y].toString());
    }

    setVar('chastityCages', arrayList);
}

function getChastityCageByName(name) {
    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        if (name.toUpperCase() === CHASTITY_CAGES[y].name.toUpperCase()) {
            return CHASTITY_CAGES[y];
        }
    }

    return null;
}

function setupNewCage() {
    sendVirtualAssistantMessage('Please enter a name for your new chastity cage', 0);

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (getChastityCageByName(answer.getAnswer()) !== null) {
            sendVirtualAssistantMessage('A chastity cage with a similar name already exists. Please choose a different name.', 0);
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    sendVirtualAssistantMessage('Please make sure to add a picture of your cage named like your chastity cage to your Toys/Chastity Cages folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the chastity cages folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(getChastityImagePath(name), 5);

    sendVirtualAssistantMessage('We are gonna use a scale of 1 to 5 to measure the size of the cage');
    sendVirtualAssistantMessage('1 being the smallest and something like this (35mm length)', 0);
    showImage('Images/Spicy/Toys/chastityCageSmall.*', 5);
    sendVirtualAssistantMessage('5 being the biggest and something like this (140mm length)', 0);
    showImage('Images/Spicy/Toys/chastityCageBig.*', 5);

    setCurrentSender(SENDER_ASSISTANT);
    let length = createIntegerInput('So just give me a number on a scale of 1 - 5 %SlaveName%', 1, 5, 'That\'s not a number... Give me something like 2 or 4', 'That number is not on the scale. Remember on a scale of 1 - 5 %SlaveName%');

    if (length >= 4) {
        sendVirtualAssistantMessage('That\'s quite big');
        sendVirtualAssistantMessage('I guess %DomHonorific% %DomName% will only allow this cage if you have been behaving properly %Grin%');
    } else if (length == 3) {
        sendVirtualAssistantMessage('A medium sized cage is always good %Grin%');
    } else {
        sendVirtualAssistantMessage('A tiny cage for her %Cock%?');
        sendVirtualAssistantMessage('%DomHonorific% %DomName% will definitely like that %Lol%');
        sendVirtualAssistantMessage('Make sure to not disappoint her too much otherwise you might spend a long time in this cage');
    }

    setCurrentSender(SENDER_TAJ);

    let material = MATERIAL.METAL;

    sendVirtualAssistantMessage('Great. Now...');
    sendVirtualAssistantMessage('Is it made out of metal, plastic or silicon?', 0);
    answer = createInput('metal', 'glass', 'silicon');

    while (true) {
        if (answer.isLike("metal")) {
            material = MATERIAL.METAL;
            answer.clearOptions();
            break;
        } else if (answer.isLike("plastic")) {
            material = MATERIAL.PLASTIC;
            answer.clearOptions();
            break;
        } else if (answer.isLike("silicon")) {
            material = MATERIAL.SILICON;
            answer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage('Is it made out of plastic, metal or silicon?', 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Noted...");

    let dialator = false;
    let dialatorDetachable = false;
    sendVirtualAssistantMessage('Does it have a dialator?', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            dialator = true;

            sendVirtualAssistantMessage("This will be fun...");
            sendVirtualAssistantMessage('Is it detachable?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    sendVirtualAssistantMessage("This will be fun... Well for %DomHonorific% %DomName% at least");
                    sendVirtualAssistantMessage('Not only does it keep things clean on the toilet');
                    sendVirtualAssistantMessage('It\'s also quite uncomfortable %Grin%');

                    dialatorDetachable = true;
                    break;
                } else if (answer.isLike("no")) {
                    sendVirtualAssistantMessage("I guess when %DomHonorific% %DomName% chooses it then you will always have to deal with it %Grin%");
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    let spikes = false;
    let spikesDetachable = false;
    let spikesOverall = false;

    sendVirtualAssistantMessage("If you have it, we might consider using spikes as a punishment...");
    sendVirtualAssistantMessage('Does it have spikes?', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            spikes = true;

            sendVirtualAssistantMessage("Great!");
            sendVirtualAssistantMessage('However I wouldn\'t be too cocky from now on %Grin%');


            sendVirtualAssistantMessage('Are the spikes detachable?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    sendVirtualAssistantMessage("Noted...");
                    spikesDetachable = true;
                    break;
                } else if (answer.isLike("no")) {
                    sendVirtualAssistantMessage("I guess when %DomHonorific% %DomName% chooses it then you will always have to deal with those nasty psikes %Grin%");
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
                    answer.loop();
                }
            }


            sendVirtualAssistantMessage('Are they spikes attached to an anti off ring/at the base only or everywhere in the cage?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("everywhere")) {
                    sendVirtualAssistantMessage("You will regret buying this %Grin%");
                    sendVirtualAssistantMessage('I would suggest behaving properly otherwise you might be fucked or more like your cock will be');
                    spikesOverall = true;
                    break;
                } else if (answer.isLike("anti", "base", "off", "ring")) {
                    sendVirtualAssistantMessage("%EmoteSad%");
                    sendVirtualAssistantMessage('Still it will be more than enough for you to suffer %Grin%');
                    break;
                } else {
                    sendVirtualAssistantMessage("Ring/Base or everywhere?", 0);
                    answer.loop();
                }
            }

            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    let penisAccessible = false;

    sendVirtualAssistantMessage('Is it open at the front and allows access to your penis like on this photo?', 0);
    showImage('Images/Spicy/Toys/openSpikeChastity.*');
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            penisAccessible = true;
            sendVirtualAssistantMessage("You will not like what %DomHonorific% %DomName% is planning with that %Grin%");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Completely encased is better in my opinion anyway %Grin%");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    let ballTrapType = BALL_TRAP_TYPE.BALL_TRAP;
    sendVirtualAssistantMessage("Last but not least is it a full belt or a ball trap device?", false);
    answer = createInput();

    while (true) {
        if (answer.containsIgnoreCase("full", "belt")) {
            ballTrapType = BALL_TRAP_TYPE.FULL_BELT;
            sendVirtualAssistantMessage("Full belt...");
            break;
        } else if (answer.containsIgnoreCase("ball", "trap")) {
            ballTrapType = BALL_TRAP_TYPE.BALL_TRAP;
            sendVirtualAssistantMessage("Ball trap...");
            break;
        } else {
            sendVirtualAssistantMessage("Full or ball trap?", 0);
            answer.loop();
        }
    }


    /*sendVirtualAssistantMessage("Are you pierced as a mean to secure the device?", false);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            small? setVar(VARIABLE.CHASTITY_SMALL_CAGE_PIERCED, true) : setVar(VARIABLE.CHASTITY_CAGE_PIERCED, true);
            sendVirtualAssistantMessage("This should be fun...");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }*/

    CHASTITY_CAGES.push(createChastityCage(name, length, material, dialator, dialatorDetachable, spikes, spikesDetachable, spikesOverall, penisAccessible, ballTrapType));

    setVar(VARIABLE.HAS_CHASTITY, true);
    saveChastityCages();

    sendVirtualAssistantMessage('Added your new chastity cage to %DomHonorific% %DomName%\'s collection');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}



function createChastityCage(name, length, material, dialator, dialatorDetachable, spikes, spikesDetachable, spikesOverall, penisAccessible, ballTrapType) {
    return {
        name: name,
        length: length,
        material: material,
        dialator: dialator,
        dialatorDetachable: dialatorDetachable,
        spikes: spikes,
        spikesDetachable: spikesDetachable,
        spikesOverall: spikesOverall,
        penisAccessible: penisAccessible,
        ballTrapType: ballTrapType,

        getImagePath: function () {
            return 'Images/Spicy/Toys/Chastity Cages/' + this.name + '.*';
        },

        fetchChastityCage: function () {
            return fetchToy(this.name, this.getImagePath());
        },

        toString: function () {
            return serializeObject(this);
        },

        fromString: function (string) {
            return deserializeObject(this, string);
        },

        isFullSizedBelt: function () {
            return this.ballTrapType === BALL_TRAP_TYPE.FULL_BELT;
        },

        getPunishmentOptions: function () {
            let amount = 0;
            if (this.spikes) {
                amount++;
            }

            if (this.dialator) {
                amount++;
            }

            return amount;
        },
    }
}

function fetchChastityCage(toy) {
    return fetchToy(toy, getChastityImagePath(toy));
}

function getChastityImagePath(name) {
    return 'Images/Spicy/Toys/Chastity Cages/' + name + '.*';
}

function onChastityKeyReturn() {
    //TODO: Virtual assistant lockup same as mistress lockup
    sendVirtualAssistantMessage('Now go ahead and lock yourself back up and tell me when you are ready to continue');
    waitForDone();
    lockAwayChastityKey();
    setVar(VARIABLE.CHASTITY_ON, true);
    setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, false);
}

function openChastityCageList() {
    let list = javafx.collections.FXCollections.observableArrayList();

    for (let x = 0; x < CHASTITY_CAGES.length; x++) {
        list.add(CHASTITY_CAGES[x].name);
    }

    createToyListGUI(function (listView, event) {
        const selectedCage = listView.listView.getSelectionModel().getSelectedItem();
        if (selectedCage != null) {
            showChastityCageGUI(getChastityCageByName(selectedCage));
        }
    }, "Chastity Cages", list)
}

function showChastityCageGUI(chastityCage) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(chastityCage.name);

            let gridPane = createGridPaneGUI();

            let row = createToySettingGUI(gridPane, chastityCage.getImagePath());

            let writebackGui = createWritebackGUI(chastityCage);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", chastityCage.name), "name");

            let length = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Length", chastityCage.length), "length");
            length.setOnlyDoubles();

            let material = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Material"), "material");
            material.addChildren(MATERIAL, chastityCage.material);

            /*let vibrating = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Vibrating"), "vibrating");
            vibrating.setSelected(dildo.vibrating);*/

            let dialator = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Dialator"), "dialator");
            dialator.setSelected(chastityCage.dialator);

            let dialatorDetachable = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Dialator detachable"), "dialatorDetachable");
            dialatorDetachable.setSelected(chastityCage.dialatorDetachable);

            let spikes = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Spikes"), "spikes");
            spikes.setSelected(chastityCage.spikes);

            let spikesDetachable = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Spikes Detachable"), "spikesDetachable");
            spikesDetachable.setSelected(chastityCage.spikesDetachable);

            let spikesOverall = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Spikes Overall"), "spikesOverall");
            spikesOverall.setSelected(chastityCage.spikesOverall);

            let penisAccessible = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Penis Accessible"), "penisAccessible");
            penisAccessible.setSelected(chastityCage.penisAccessible);

            let ballTrapType = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Ball Trap Type"), "ballTrapType");
            ballTrapType.addChildren(BALL_TRAP_TYPE, chastityCage.ballTrapType);

            let save = createButton("Save");
            gridPane.setConstraints(save.button, 1, row);
            gridPane.getChildren().add(save.button);

            save.setOnAction(function (handle) {
                writebackGui.writeBack();
                saveChastityCages();
                dialog.close();
            });

            gridPane.addCloseButton(dialog, 2, row++);

            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
}