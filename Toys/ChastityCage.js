const SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE = 20;
const CHASTITY_TYPE_SMALL = 1;
const CHASTITY_TYPE_BIG = 0;

function willKeepChastityOn(end) {
    let choice = randomInteger(1, 100);

    if (end) {
        if (getVar(VARIABLE_LONG_TERM_CHASTITY, false)) {
            return true;
        }

        //Lower base chance of unlocking at end
        choice = randomInteger(1, 100 - getVar(VARIABLE_CHASTITY_LEVEL, 0) * 3);
    }

    if (getVar(VARIABLE_HAPPINESS) > getVar(VARIABLE_ANGER)) {
        choice += randomInteger(1, 25);
    } else {
        choice -= randomInteger(1, 25);
    }

    if (getVar(VARIABLE_LUST) > 30) {
        choice += randomInteger(1, 25);
    }

    let choices = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 1, 5, 5, 10, 10, 15, 25, 30, 35, 40];
    let index = 0;

    if (getMonthlyGoodDays() <= getMonthlyBadDays()) {
        index += 1;
    }

    if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
        choices = [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 5, 10, 10, 15, 15, 20, 30, 35, 40, 50];
    } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
        choices = [40, 45, 50, 55, 60, 70, 75, 80, 85, 90, 10, 15, 15, 20, 20, 30, 40, 50, 60, 70];
    }

    if (!isVar("chastityMode")) {
        index += 10;
    }

    const mood = getMood();
    if (mood == PLEASED_MOOD) {
        index += 2;
    } else if (mood == NEUTRAL_MOOD) {
        index += 4;
    } else if (mood == ANNOYED_MOOD) {
        index += 6;
    } else if (mood == VERY_ANNOYED_MOOD) {
        index += 8;
    }

    const choiceToReach = choices[index];

    return choiceToReach > choice;
}


function hasChastityCage() {
    return getVar(VARIABLE_HAS_CHASTITY);
}

function unlockChastityCage() {
    if (!getVar(VARIABLE_HAS_CHASTITY) || !getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

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
    loop = 0;
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

function isInChastity() {
    return isVar(VARIABLE_CHASTITY_ON) && getVar(VARIABLE_CHASTITY_ON);
}

function getChastityCageSelection(punishmentChance) {
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
}

function selectChastityCage() {
    let mood = getMood();

    let punishmentChance = mood*20 + (ACTIVE_PERSONALITY_STRICTNESS*20 - (VERY_ANNOYED_MOOD - mood)*10);
    sendDebugMessage('Punishment Chastity Chance: ' + punishmentChance + ' for mood ' + mood + ' and strictness ' + ACTIVE_PERSONALITY_STRICTNESS);

    let chastityCageSelection = getChastityCageSelection(punishmentChance);

    sendDebugMessage('Chastity Selection: ' + chastityCageSelection);

    let punishments = new java.util.ArrayList();

    //Both possible
    if(chastityCageSelection === 3) {
        if(isChance(punishmentChance)) {
            chastityCageSelection = 1;
        } else {
            chastityCageSelection = 0;
        }

        sendDebugMessage('Rolled chastity selection: ' + chastityCageSelection);
    }

    //0 == big cage => SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE*0 = 0 subtract
    punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE*chastityCageSelection;
    setVar(VARIABLE_CHASTITY_CAGE_ON_TYPE, chastityCageSelection);

    let small = chastityCageSelection === CHASTITY_TYPE_SMALL;

    if(small && getVar(VARIABLE_CHASTITY_SMALL_HAS_SPIKES, false) || !small && getVar(VARIABLE_CHASTITY_HAS_SPIKES, false)) {
        //If spikes are forced we need to calculate that into the remaining chance
        if(small && !getVar(VARIABLE_CHASTITY_SMALL_SPIKES_DETACHABLE, false) || !small && !getVar(VARIABLE_CHASTITY_SPIKES_DETACHABLE, false)) {
            punishmentChance -= SUBTRACT_PER_CHASTITY_PUNISHMENT_STAGE;
            setVar(VARIABLE_CHASTITY_SPIKES_ON, true);
            sendDebugMessage('Set spikes as punishment due to being forced by the cage');
        } else {
            //Spikes aren't forced so we should roll for it
            punishments.add(0);

            sendDebugMessage('Added spikes as punishment option');
        }
    }

    if(small && getVar(VARIABLE_CHASTITY_SMALL_HAS_DILATOR, false) || !small && getVar(VARIABLE_CHASTITY_HAS_DILATOR, false)) {
        //If dilator is forced we need to calculate that into the remaining chance
        if(small && !getVar(VARIABLE_CHASTITY_SMALL_DILATOR_DETACHABLE, false) || !small && !getVar(VARIABLE_CHASTITY_DILATOR_DETACHABLE, false)) {
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
}

function lockChastityCage() {
    if (!getVar(VARIABLE_HAS_CHASTITY) || getVar(VARIABLE_CHASTITY_ON)) {
        return;
    }

    sendMessage("%SlaveName%");

    if (BODY_PART_PENIS_HEAD.currentClamps > 0 || BODY_PART_PENIS_SHAFT.currentClamps > 0 || BODY_PART_BALLS.currentClamps > 0) {
        sendMessage('Go ahead and remove all clamps from your penis and balls');
        sendMessage('Tell me when you are done');
        waitForDone();
        sendMessage('Aren\'t I nice to you? %Grin%');

        //TODO: Interaction

        //Set clamps on those parts to zero
        BODY_PART_PENIS_SHAFT.currentClamps = 0;
        BODY_PART_PENIS_HEAD.currentClamps = 0;
        BODY_PART_BALLS.currentClamps = 0;
    }

    lockImages();
    showImage("Images/Spicy/Chastity/ChastityOn/*.{jpg,png,gif}");
    if (randomInteger(0, 2) == 2) playSound("Audio/Spicy/Chastity/ChastityOn/*.mp3");

    selectChastityCage();

    if(getVar(VARIABLE_CHASTITY_CAGE_ON_TYPE) === CHASTITY_TYPE_BIG) {
        sendMessage('Go ahead and fetch your normal chastity cage');
    } else {
        sendMessage('Go ahead and fetch your small punishment chastity cage %Grin%');
    }

    let alreadyAttached = false;

    if(getVar(VARIABLE_CHASTITY_SPIKES_ON, false)) {
        sendMessage('I want you to attach the spikes to it %Grin%');
        alreadyAttached = true;
    }

    if(getVar(VARIABLE_CHASTITY_DILATOR_ON, false)) {
        if(!alreadyAttached) {
            sendMessage('I want you to attach the dilator to it %Grin%');
        } else {
            sendMessage('And I want you to attach the dilator to it too %Lol%');

            if(getVar(VARIABLE_CHASTITY_CAGE_ON_TYPE) === CHASTITY_TYPE_SMALL || !getVar(VARIABLE_HAS_CHASTITY_SMALL_PUNISHMENT_CAGE, false)) {
                sendMessage('We are going full punishment mode %SlaveName%');
                sendMessage('You know you don\'t deserve anything different %GeneralTime% %Lol%');
            } else {
                sendMessage('Be happy that I am not putting you into your small punishment cage as well %Grin%');
            }
        }
    }

    sendMessage('And next...');

    sendMessage(random("Put on your %ChastityCage%", "Put on the %ChastityCage% at once", "Hurry up and get the %ChastityCage% back on", "Be quick and get your %ChastityCage% back on", "Lock your %Cock% up"));

    const chastityLevel = getVar(VARIABLE_CHASTITY_LEVEL);
    let timeout = randomInteger(60 - chastityLevel, 90 - chastityLevel);
    if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
        timeout = randomInteger(55 - chastityLevel, 80 - chastityLevel);
    } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
        timeout = randomInteger(50 - chastityLevel, 70 - chastityLevel);
    }

    const answer = sendInput(random("Let me know when you're done...", "Report to me when it's on", "Remember to tell me when it's on"), timeout);
    let loop = 0;
    while (true) {
        if (answer.isTimeout()) {
            loop++;

            if (loop > 1) {
                sendMessage(random("You've taken way too long to get that %ChastityCage% on...", "You are taking way to long to get that %ChastityCage% on", "It took you too long to get that cage on..."));

                if (chastityLevel < 20) {
                    sendMessage(random("But since you're in chastity training", "But due to you being in chastity training", "But because of your chastity training") + " I won't punish you...");
                } else {
                    if (isForcedLockedUp()) {
                        sendMessage("So as a punishment I'm placing you in the %ChastityCage% for the next 24 hours...")
                    } else {
                        sendMessage("So as a punishment I'm increasing your locked up period by 24 hours...")
                    }

                    addLockUpTime(24);

                    if (getCBTLimit() == LIMIT_ASKED_YES) {
                        sendMessage('And to get that %Cock% into its cage quickly now...');

                        switch (randomInteger(0, 2)) {
                            case 0:
                                if (hasTigerHot() && fetchToy('icy hot')) {
                                    sendMessage('I want you to spread some icy hot on your shaft, balls and glans %Grin%');
                                    sendMessage('That cock doesn\'t deserve any different and because it won\'t obey it will need to suffer');
                                    sendMessage('When you are done wait for it to be soft');
                                    sendMessage('I don\'t care how long it takes or how much it hurts, just report back to me %Lol%');
                                    waitForDone(100000);
                                    sendMessage('%Good%. Now lock that %Cock% up already');
                                    break;
                                }
                            case 1:
                                sendMessage('Bring me a bowl with some water in it and...');
                                if (fetchIceCubes(5)) {
                                    sendMessage('Put those ice cubes into the bowl and dip your balls and cock into it until they are soft %Grin%');
                                    sendMessage('I don\'t care how long it takes or how much it hurts, just report back to me %Lol%');
                                    waitForDone(100000);
                                    sendMessage('%Good%. Now lock that %Cock% up already');
                                    break;
                                }
                            case 2:
                                smallCBTPunishment();
                                sendMessage('I hope it is soft now');

                                //TODO: Interaction
                                sendMessage('Now lock that %Cock% up already');
                                break;
                        }
                    }
                }
                break;
            } else {
                sendMessage(random("Quicker!", "Faster", "Be faster", "Hurry up!", "Be quick", "Come on!", "Be quick...", "Be faster will you?", "Be faster!"));
                changeMeritMedium(true);
                answer.loop();
            }
        } else if (answer.isLike("done", "on", "caged", "locked", "lock", "belt", 'yes')) {
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

    setVar(VARIABLE_CHASTITY_ON, true);
}

function isForcedLockedUp() {
    return isVar(VARIABLE_LOCKED_UP_UNTIL) && !getDate(VARIABLE_LOCKED_UP_UNTIL).hasPassed();
}

function addLockUpTime(hours) {
    if (!isForcedLockedUp) {
        setDate(VARIABLE_LOCKED_UP_UNTIL, setDate().addHour(hours));
    } else {
        setDate(VARIABLE_LOCKED_UP_UNTIL, getDate(VARIABLE_LOCKED_UP_UNTIL).addHour(hours));
    }
}

function isChastityPlayOnly() {
    return getVar(VARIABLE_CHASTITY_TOY_MODE) == TOY_PLAY_MODE;
}

function setupCage(small) {
    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            small ? setVar(VARIABLE_HAS_CHASTITY_SMALL_PUNISHMENT_CAGE, true) : setVar(VARIABLE_HAS_CHASTITY, true);

            sendVirtualAssistantMessage("Is it made of plastic or metal?", false);
           // showImage("Images/Spicy/Toys/PlasticChastity.jpg", 3);
            answer = createInput();

            while (true) {
                if (answer.isLike("metal")) {
                    small ? setVar(VARIABLE_CHASTITY_SMALL_MATERIAL, 0) : setVar(VARIABLE_CHASTITY_MATERIAL, 0);
                    //showImage("Images/Spicy/Toys/MetalChastity.jpg", 3);
                    break;
                } else if (answer.isLike("plastic")) {
                    small ? setVar(VARIABLE_CHASTITY_SMALL_MATERIAL, 1) : setVar(VARIABLE_CHASTITY_MATERIAL, 1);
                    //showImage("Images/Spicy/Toys/PlasticChastity.jpg", 3);
                    break;
                } else {
                    sendVirtualAssistantMessage("Metal or plastic?");
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage("Noted...");
            sendVirtualAssistantMessage("Is it a full belt or a ball trap device?", false);
            answer = createInput();

            while (true) {
                if (answer.containsIgnoreCase("full", "belt")) {
                    small ? setVar(VARIABLE_CHASTITY_SMALL_CAGE_TYPE, 0) : setVar(VARIABLE_CHASTITY_CAGE_TYPE, 0);
                    sendVirtualAssistantMessage("Full belt...");
                    break;
                } else if (answer.containsIgnoreCase("ball", "trap")) {
                    small ? setVar(VARIABLE_CHASTITY_SMALL_CAGE_TYPE, 1) : setVar(VARIABLE_CHASTITY_CAGE_TYPE, 1);
                    sendVirtualAssistantMessage("Ball trap...");
                    break;
                } else {
                    sendVirtualAssistantMessage("Full or ball trap?");
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage("Does it have a dilator?", false);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    small? setVar(VARIABLE_CHASTITY_SMALL_HAS_DILATOR, true) : setVar(VARIABLE_CHASTITY_HAS_DILATOR, true);
                    sendVirtualAssistantMessage("This will be fun...");
                    sendVirtualAssistantMessage("Is it detachable?", false);
                    answer = createInput();

                    while (true) {
                        if (answer.isLike("yes")) {
                            small? setVar(VARIABLE_CHASTITY_SMALL_DILATOR_DETACHABLE, true) : setVar(VARIABLE_CHASTITY_DILATOR_DETACHABLE, true);
                            sendVirtualAssistantMessage("Noted...");
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

            sendVirtualAssistantMessage("If you have it, we might consider using spikes as a punishment...");
            sendVirtualAssistantMessage("Does it have spikes?", false);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    small? setVar(VARIABLE_CHASTITY_SMALL_HAS_SPIKES, true) : setVar(VARIABLE_CHASTITY_HAS_SPIKES, true);
                    sendVirtualAssistantMessage("This will be fun...");
                    sendVirtualAssistantMessage("Are they detachable?", false);
                    answer = createInput();

                    while (true) {
                        if (answer.isLike("yes")) {
                            small? setVar(VARIABLE_CHASTITY_SMALL_SPIKES_DETACHABLE, true) : setVar(VARIABLE_CHASTITY_SPIKES_DETACHABLE, true);
                            sendVirtualAssistantMessage("Noted...");
                            break;
                        } else if (answer.isLike("no")) {
                            sendVirtualAssistantMessage("I guess when %DomHonorific% %DomName% chooses it then you will always have to deal with them %Grin%");
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
            
            sendVirtualAssistantMessage("Are you pierced as a mean to secure the device?", false);
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
            }

            /*sendVirtualAssistantMessage("Do you use a metal lock or plastic lock to lock it?", false);
            answer = createInput();

            while (true) {
                if (answer.containsIgnoreCase("metal")) {
                    setVar("chastityLockType", 0);
                    break;
                } else if (answer.containsIgnoreCase("plastic")) {
                    setVar("chastityLockType", 1);
                    break;
                } else {
                    sendVirtualAssistantMessage("Metal or plastic?");
                    answer.loop();
                }
            }*/

            return true;
        } else if (answer.isLike("no")) {
            small? setVar(VARIABLE_HAS_CHASTITY_SMALL_PUNISHMENT_CAGE, false) : setVar(VARIABLE_HAS_CHASTITY, false);
            sendVirtualAssistantMessage("You should consider buying one for the full experience");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    return false;
}
