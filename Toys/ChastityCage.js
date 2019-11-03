const SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE = 20;
const CHASTITY_TYPE_SMALL = 1;
const CHASTITY_TYPE_BIG = 0;
const CHASTITY_CAGES = [];

let currentChastityCage;

if(isVar(VARIABLE_ACTIVE_CHASTITY_CAGE)) {
    currentChastityCage = getChastityCageByName(getVar(VARIABLE_ACTIVE_CHASTITY_CAGE));
} else {
    currentChastityCage = null;
}

function getActiveChastityCage() {
    if(currentChastityCage === null || currentChastityCage === undefined) {
        return CHASTITY_CAGES[0];
    } else {
        return currentChastityCage;
    }
}

function unlockChastityCage() {
    if (!getVar(VARIABLE_HAS_CHASTITY) || !getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

    unlockChastityKey();

    sendMessage("%SlaveName%");

    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOff/*.{jpg,png,gif}");
    if (randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOff/*.mp3");
    sendMessage(random("Remove your %ChastityCage%", "Get your %ChastityCage% off", "Remove the %ChastityCage% at once", "Hurry up and remove the %ChastityCage%", "Be quick and get your %ChastityCage% off"));

    let timeout = randomInteger(20, 50);
    if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
        timeout = randomInteger(15, 40);
    } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
        timeout = randomInteger(10, 30);
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
                addPunishmentPoints(100);
                break;
            } else {
                sendMessage(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"));
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.isLike("done", "off", "uncaged", "unlocked", "out", "belt", 'yes')) {
            if (loop == 1) {
                sendMessage(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessage("%Good%");
                break;
            }
        } else {
            sendMessage('Don\'t bother me if you aren\'t done yet...');
            answer.loop();
        }
    }

    setVar(VARIABLE_CHASTITY_ON, false);
    unlockImages();
    return;
}

function getMaxChastitySize() {
    let mood = getMood();
    let strictness = ACTIVE_PERSONALITY_STRICTNESS;

    let maxWithoutRange= 8 - (Math.max(1, strictness) + Math.max(1, mood) + Math.min(1, mood));

    return Math.max(1, Math.min(5, maxWithoutRange));
}

function getMinChastitySize() {
    return Math.max(1, getMaxChastitySize() - Math.max(1, ACTIVE_PERSONALITY_STRICTNESS));
}

function findAvailableClosestToSize(length) {
    sendDebugMessage('Searching for chastity with length: ' + length);
    //let currentCage = null;

    //Negative if size < found size and positive if size > found size
    let currentSizeDifference = null;

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        let foundDifference = length - CHASTITY_CAGES[y].length;

        if(currentSizeDifference === null) {
            //currentCage = CHASTITY_CAGES[y];
            currentSizeDifference = foundDifference;
        }
        //Check if we found the perfect fitting size
        else if(currentSizeDifference !== 0 && foundDifference === 0) {
            currentSizeDifference = 0;
            //Found the perfect match
            break;
        }
        //Check if we found something that is closer
        else if(Math.abs(currentSizeDifference) > Math.abs(foundDifference)) {
            currentSizeDifference = foundDifference;
        }
        //Check if we found something that's equal in value
        else if(Math.abs(currentSizeDifference) === Math.abs(foundDifference)) {
            //Use the bigger one
            if(ACTIVE_PERSONALITY_STRICTNESS === 0) {
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
    let cages = [];

    sendDebugMessage('Searching cage with length ' + length + ' and ' + punishments + ' punishments');

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        let currentCage = CHASTITY_CAGES[y];
        let punishmentOptionsOfCage = 0;

        if(currentCage.dialator) {
            punishmentOptionsOfCage++;

            //If we can't remove it but want no punishments this is not the right cage to go with
            if(punishments === 0 && !currentCage.dialatorDetachable) {
                sendDebugMessage('Skipping ' + currentCage.name + ' because dialator is not detachable');
                continue;
            }
        }

        if(currentCage.spikes) {
            punishmentOptionsOfCage++;

            //If we can't remove it but want no punishments this is not the right cage to go with
            if(punishments === 0 && !currentCage.spikesDetachable) {
                sendDebugMessage('Skipping ' + currentCage.name + ' because spikes are not detachable');
                continue;
            }
        }

        //Fitting size and enough punishment options
        if(currentCage.length == length && punishmentOptionsOfCage >= punishments) {
            cages.push(currentCage);
            sendDebugMessage('Pushing cage ' + currentCage.name + ' to available list');
        }
    }

    if(cages.length === 0) {
        //Reduce amount of punishments by one. If we reach -1 it won't skip any cage anymore because of forced punishments because we only check for punishments === 0
        // -> It will at some point find a fitting cage
        return getRandomCageWithSize(length, punishments - 1);
    } else {
        return cages[randomInteger(0, cages.length - 1)];
    }
}

/*function getChastityCageSelection(punishmentChance) {
    let size = randomInteger(getMinChastitySize(), getMaxChastitySize());

    let smallChance = punishmentChance - SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;

    if(!getVar(VARIABLE_HAS_CHASTITY_SMALL_PUNISHMENT_CAGE, false)) {
        return 0;
    }

    if(getVar(VARIABLE_CHASTITY_SMALL_HAS_DILATOR, false)) {
        smallChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    if(getVar(VARIABLE_CHASTITY_SMALL_HAS_SPIKES, false)) {
        smallChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    let bigChance = punishmentChance;

    if(getVar(VARIABLE_CHASTITY_HAS_DILATOR, false)) {
        bigChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
    }

    if(getVar(VARIABLE_CHASTITY_HAS_SPIKES, false)) {
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

    let punishmentChance = mood*20 + (ACTIVE_PERSONALITY_STRICTNESS*20 - (VERY_ANNOYED_MOOD - mood)*10) - SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE*0.5;
    sendDebugMessage('Punishment Chastity Chance: ' + punishmentChance + ' for mood ' + mood + ' and strictness ' + ACTIVE_PERSONALITY_STRICTNESS);

    let length = findAvailableClosestToSize(randomInteger(getMinChastitySize(), getMaxChastitySize()));

    //let chastityCageSelection = getChastityCageSelection(punishmentChance);

    sendDebugMessage('Found closest chastity size: ' + length);

    let amountOfPunishments = 0;


    //First punishment roll
    if(isChance(punishmentChance)) {
        amountOfPunishments++;
        punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;

        //Second punishment roll
        if(isChance(punishmentChance)) {
            amountOfPunishments++;
            punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
        }
    }

    sendDebugMessage('Searching for cage with size ' + length + ' and punishments ' + amountOfPunishments);

    let cage = getRandomCageWithSize(length, amountOfPunishments);

    sendDebugMessage('Found cage ' + cage.name);

    let punishments = new java.util.ArrayList();

    if(cage.spikes) {
        //If spikes are forced we need to calculate that into the remaining chance
        if(!cage.spikesDetachable) {
            punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
            setVar(VARIABLE_CHASTITY_SPIKES_ON, true);
            sendDebugMessage('Set spikes as punishment due to being forced by the cage');
        } else {
            //Spikes aren't forced so we should roll for it
            punishments.add(0);

            sendDebugMessage('Added spikes as punishment option');
        }
    }

    if(cage.dialator) {
        //If dilator is forced we need to calculate that into the remaining chance
        if(!cage.dialatorDetachable) {
            punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
            setVar(VARIABLE_CHASTITY_DILATOR_ON, true);
            sendDebugMessage('Set dilator as punishment due to being forced by the cage');
        } else {
            //Dilator isn't forced so we should roll for it
            punishments.add(1);

            sendDebugMessage('Added dilator as punishment option');
        }
    }

    //Randomize punishment rolling order
    while(!punishments.isEmpty()) {
        sendDebugMessage('Rolling possible punishments for chance ' + punishmentChance);
        let index = randomInteger(0, punishments.size() - 1);
        switch(punishments.get(index)) {
            case 0:
                if(isChance(punishmentChance)) {
                    punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
                    setVar(VARIABLE_CHASTITY_SPIKES_ON, true);
                    sendDebugMessage('Selected spikes as punishment');
                    sendDebugMessage('Remaining chance: ' + punishmentChance);
                } else {
                    setVar(VARIABLE_CHASTITY_SPIKES_ON, false);
                }

                break;
            case 1:
                if(isChance(punishmentChance)) {
                    punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
                    setVar(VARIABLE_CHASTITY_DILATOR_ON, true);
                    sendDebugMessage('Selected dilator as punishment');
                    sendDebugMessage('Remaining chance: ' + punishmentChance);
                } else {
                    setVar(VARIABLE_CHASTITY_DILATOR_ON, false);
                }
                break;

        }

        //No reuse of that punishment right now
        punishments.remove(index);
    }

    return cage;
}

function lockChastityCage() {
    if (!getVar(VARIABLE_HAS_CHASTITY) || getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

    sendMessageBasedOnSender("%SlaveName%");

    if (BODY_PART_PENIS_HEAD.currentClamps > 0 || BODY_PART_PENIS_SHAFT.currentClamps > 0 || BODY_PART_BALLS.currentClamps > 0) {
        sendMessageBasedOnSender('Go ahead and remove all clamps from your penis and balls');
        sendMessageBasedOnSender('Tell me when you are done');
        waitForDone();
        sendMessageBasedOnSender('Aren\'t I nice to you? %Grin%');

        let answer = createInput(5);

        if(answer.isTimeout()) {
            //sendMessage('I don\'t care about your opinion though');
        } else if(answer.isLike('yes', 'thank you')) {
            sendMessage('You are welcome %SlaveName% %EmoteHappy%');
            changeMeritLow(false);
        } else if(answer.isLike('no', 'hurt', 'pain')) {
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
    if (randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOn/*.mp3");

    let chastityCage = selectChastityCage();

    fetchChastityCage(chastityCage.name);

    let alreadyAttached = false;

    if(getVar(VARIABLE_CHASTITY_SPIKES_ON, false)) {
        sendMessageBasedOnSender('I want you to attach the spikes to it %Grin%');
        alreadyAttached = true;
    }

    if(getVar(VARIABLE_CHASTITY_DILATOR_ON, false)) {
        if(!alreadyAttached) {
            sendMessageBasedOnSender('I want you to attach the dilator to it %Grin%');
        } else {
            sendMessageBasedOnSender('And I want you to attach the dilator to it too %Lol%');

            if(chastityCage.length < 3) {
                sendMessageBasedOnSender('We are going full punishment mode %SlaveName%');
                sendMessageBasedOnSender('You know you don\'t deserve anything different %GeneralTime% %Lol%');
            } else {
                sendMessageBasedOnSender('Be happy that I am not putting you into your small punishment cage as well %Grin%');
            }
        }

        alreadyAttached = true;
    }

    if(alreadyAttached) {
        sendMessageBasedOnSender('Tell me when you have everything around %SlaveName%');
        waitForDone();
        sendMessageBasedOnSender('%Good%');
    }

    sendMessageBasedOnSender('And next...');

    sendMessageBasedOnSender(random("Put on your %ChastityCage%", "Put on the %ChastityCage% at once", "Hurry up and get the %ChastityCage% back on", "Be quick and get your %ChastityCage% back on", "Lock your %Cock% up"));

    const chastityLevel = getVar(VARIABLE_CHASTITY_LEVEL);
    let timeout = randomInteger(60 - chastityLevel, 90 - chastityLevel);
    if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
        timeout = randomInteger(55 - chastityLevel, 80 - chastityLevel);
    } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
        timeout = randomInteger(50 - chastityLevel, 70 - chastityLevel);
    }

    //Slower timeout for the dilator
    if(getVar(VARIABLE_CHASTITY_DILATOR_ON, false)) {
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
                    if (isForcedLockedUp()) {
                        sendMessageBasedOnSender("So as a punishment I'm placing you in the %ChastityCage% for the next 24 hours...")
                    } else {
                        sendMessageBasedOnSender("So as a punishment I'm increasing your lock up period by 24 hours...")
                    }

                    changeMeritHigh(true);

                    //Punish slave even more
                    if(feelsLikePunishingSlave()) {
                        if(chastityCage.spikes && !getVar(VARIABLE_CHASTITY_SPIKES_ON, false)) {
                            sendMessageBasedOnSender('I want you to attach the spikes to it %Grin%');
                            setVar(VARIABLE_CHASTITY_SPIKES_ON, true);
                            alreadyAttached = true;
                        } else if(chastityCage.dialator && !getVar(VARIABLE_CHASTITY_DILATOR_ON, false)) {
                            if(!alreadyAttached) {
                                sendMessageBasedOnSender('I want you to attach the dilator to it %Grin%');
                            } else {
                                sendMessageBasedOnSender('And I want you to attach the dilator to it too %Lol%');

                                if(chastityCage.length < 3) {
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
                        while(punishments === 0) {
                            let option = options.get(randomInteger(0, options.size()));

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
                                        break;
                                    }
                                case 1:
                                    sendMessageBasedOnSender('Bring me a bowl with some water in it and...');
                                    if (fetchIceCubes(5)) {
                                        sendMessageBasedOnSender('Put those ice cubes into the bowl and dip your balls and cock into it until they are soft %Grin%');
                                        sendMessageBasedOnSender('I don\'t care how long it takes or how much it hurts, just report back to me %Lol%');
                                        waitForDone(100000);
                                        sendMessageBasedOnSender('%Good%. Now lock that %Cock% up already');
                                        break;
                                    }
                                case 2:
                                    smallCBTPunishment();
                                    sendMessageBasedOnSender('I hope for your sake that it is soft now');

                                    //Max 5 times
                                    for(let x = 0; x < 5; x++) {
                                        if(sendYesOrNoQuestion('Tell me %SlaveName%. Is it soft?')) {
                                            break;
                                        } else {
                                            sendMessage(random('Which means', 'Seems like') + ' I am not done yet %Grin%');
                                            smallCBTPunishment();
                                        }
                                    }

                                    sendMessageBasedOnSender('Now lock that %Cock% up already');
                                    break;
                            }
                        }
                    }
                }
                break;
            } else {
                sendMessageBasedOnSender(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"));
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.isLike("done", "on", "caged", "locked", "lock", "belt", 'yes')) {
            if (loop == 1) {
                sendMessageBasedOnSender(random("Finally", "About time...", "Took you long enough", "Be faster next time", "Don't waste my time again..."));
                break;
            } else {
                sendMessageBasedOnSender("%Good%");
                break;
            }
        } else {
            sendMessageBasedOnSender('Don\'t bother me if you aren\'t done yet...');
            answer.loop();
        }
    }

    setVar(VARIABLE_CHASTITY_ON, true);

    currentChastityCage = chastityCage;
    setVar(VARIABLE_ACTIVE_CHASTITY_CAGE, chastityCage.name);
}


function loadChastityCages() {
    if (!isVar('chastityCages')) {
        setVar('chastityCages', new java.util.ArrayList());
    } else {
        let arrayList = getVar('chastityCages');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);
            let splitArray = entry.split(',');

            let name = 'undefined';
            let length = -1;
            let material = MATERIAL_PLASTIC;
            let dialator = false;
            let dialatorDetachable = false;
            let spikes = false;
            let spikesDetachable = false;
            let ballTrapType = 1;

            for (let y = 0; y < splitArray.length; y++) {
                let valueEntry = splitArray[y];

                if (valueEntry.indexOf('name:') !== -1) {
                    name = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('length:') !== -1) {
                    length = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('material:') !== -1) {
                    material = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('dialator:') !== -1) {
                    dialator = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('dialatorDetachable:') !== -1) {
                    dialatorDetachable = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('spikes:') !== -1) {
                    spikes = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('spikesDetachable:') !== -1) {
                    spikesDetachable = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('ballTrapType:') !== -1) {
                    ballTrapType = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                }
            }

            let chastityCage = {
                name: name,
                length: length,
                material: material,
                dialator: dialator,
                dialatorDetachable: dialatorDetachable,
                spikes: spikes,
                spikesDetachable: spikesDetachable,
                ballTrapType: ballTrapType,

                isFullSizedBelt : function () {
                    return ballTrapType === 0;
                }
            };

            CHASTITY_CAGES.push(chastityCage);

            if(currentChastityCage === null) {
                currentChastityCage = chastityCage;
            }
        }
    }
}

function saveChastityCages() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < CHASTITY_CAGES.length; y++) {
        arrayList.add(chastityCageToString(CHASTITY_CAGES[y]));
    }

    setVar('chastityCages', arrayList);
}

function chastityCageToString(cage) {
    let string = 'name:' + cage.name + ',length:' + cage.length + ',material:' + cage.material;

    if (cage.dialator) {
        string += ',dialator:' + cage.dialator;
    }

    if (cage.dialatorDetachable) {
        string += ',dialatorDetachable:' + cage.dialatorDetachable;
    }

    if (cage.spikes) {
        string += ',spikes:' + cage.spikes;
    }

    if (cage.spikesDetachable) {
        string += ',spikesDetachable:' + cage.spikesDetachable;
    }

    if (cage.ballTrapType) {
        string += ',ballTrapType:' + cage.ballTrapType;
    }

    return string;
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

    if(length >= 4) {
        sendVirtualAssistantMessage('That\'s quite big');
        sendVirtualAssistantMessage('I guess %DomHonorific% %DomName% will only allow this cage if you have been behaving properly %Grin%');
    } else if(length == 3) {
        sendVirtualAssistantMessage('A medium sized cage is always good %Grin%');
    } else {
        sendVirtualAssistantMessage('A tiny cage for her %Cock%?');
        sendVirtualAssistantMessage('%DomHonorific% %DomName% will definitely like that %Lol%');
        sendVirtualAssistantMessage('Make sure to not disappoint here too much otherwise you might spend a long time in this cage');
    }

    setCurrentSender(SENDER_TAJ);

    let material = MATERIAL_METAL;

    sendVirtualAssistantMessage('Great. Now...');
    sendVirtualAssistantMessage('Is it made out of metal, plastic or silicon?', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("metal")) {
            material = MATERIAL_METAL;
            break;
        } else if (answer.isLike("plastic")) {
            material = MATERIAL_PLASTIC;
            break;
        } else if (answer.isLike("silicon")) {
            material = MATERIAL_SILICON;
            break;
        } else {
            sendVirtualAssistantMessage('Is it made out of plastic, metal or silicon?');
            answer.loop();
        }
    }

    sendVirtualAssistantMessage("Noted...");

    let dialator = false;
    let dialatorDetachable = dialatorDetachable;
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
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    let spikes = false;
    let spikesDetachable = dialatorDetachable;
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
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    let ballTrapType = 0;
    sendVirtualAssistantMessage("Last but not least is it a full belt or a ball trap device?", false);
    answer = createInput();

    while (true) {
        if (answer.containsIgnoreCase("full", "belt")) {
            ballTrapType = 0;
            sendVirtualAssistantMessage("Full belt...");
            break;
        } else if (answer.containsIgnoreCase("ball", "trap")) {
            ballTrapType = 1;
            sendVirtualAssistantMessage("Ball trap...");
            break;
        } else {
            sendVirtualAssistantMessage("Full or ball trap?");
            answer.loop();
        }
    }

    /*sendVirtualAssistantMessage("Are you pierced as a mean to secure the device?", false);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            small? setVar(VARIABLE_CHASTITY_SMALL_CAGE_PIERCED, true) : setVar(VARIABLE_CHASTITY_CAGE_PIERCED, true);
            sendVirtualAssistantMessage("This should be fun...");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("Too bad...");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }*/

    let chastityCage = {
        name: name,
        length: length,
        material: material,
        dialator: dialator,
        dialatorDetachable: dialatorDetachable,
        spikes: spikes,
        spikesDetachable: spikesDetachable,
        ballTrapType: ballTrapType,

        isFullSizedBelt : function () {
            return ballTrapType === 0;
        }
    };

    CHASTITY_CAGES.push(chastityCage);

    saveChastityCages();

    sendVirtualAssistantMessage('Added your new chastity cage to %DomHonorific% %DomName%\'s collection');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function fetchChastityCage(toy) {
    return fetchToy(toy, getChastityImagePath(toy));
}

function getChastityImagePath(name) {
    return 'Images/Spicy/Toys/Chastity Cages/' + name + '.*';
}