const HOME_HOUSE_TYPE = 0;
const HOME_APARTMENT_TYPE = 1;


const ROOM_CHORE_MOP = {id: 0, name: 'mop'};
const ROOM_CHORE_WIPE = {id: 1, name: 'wipe'};
const ROOM_CHORE_VACUUM = {id: 2, name: 'vacuum'};

const CHORES = [];
CHORES.push(ROOM_CHORE_MOP);
CHORES.push(ROOM_CHORE_WIPE);
CHORES.push(ROOM_CHORE_VACUUM);

const CHORE_WATCH = new StopWatch();

let tempChoreTimeMultiplier = 1;

function chooseChore() {
    let biggestTimeDifferenceRoom = null;
    let biggestTimeDifferenceChoreType = null;
    let biggestTimeDifference = -1;

    //TODO: Finances & other chores (like washing stuff, garden, cooking etc.)

    //Search the chore that hasn't been done lately
    outerLoop:
        for (let y = 0; y < HOME_ROOMS.length; y++) {
            let room = HOME_ROOMS[y];
            for (let x = 0; x < CHORES.length; x++) {
                let chore = CHORES[x];
                let secondsPassed = room.getSecondsSinceLastChore(chore);

                // -1 => chore hasn't been done before
                if (secondsPassed === -1) {
                    biggestTimeDifferenceRoom = room;
                    biggestTimeDifferenceChoreType = chore;
                    break outerLoop;
                } else if (secondsPassed > biggestTimeDifference) {
                    biggestTimeDifferenceRoom = room;
                    biggestTimeDifferenceChoreType = chore;
                    biggestTimeDifference = secondsPassed;
                }
            }
        }

    //This double checks if it makes any sense to start that chore
    biggestTimeDifferenceRoom.confirmAndStartChore(biggestTimeDifferenceChoreType);
}

function getTimeForChores() {
    let weeklyTimeSpend = getVar(VARIABLE.WEEKLY_CHORES_TIME, 0);
    let todo;

    if (isFullTime()) {
        todo = getVar(VARIABLE.MIN_WEEKLY_CHORE_TIME, 0) - weeklyTimeSpend;
    } else {
        todo = 60 * 3 - weeklyTimeSpend;
    }

    //Min 30 minutes of chores and max 60 at this point
    todo = Math.min(60, Math.max(30, todo));

    //Now combine with mood
    let mood = getMood();

    todo *= (1 + mood / 5 * (getStrictnessForCharacter() + 1));

    sendDebugMessage('Decided for ' + todo + ' minutes of chores');

    return Math.min(200, todo);
}

function accountTimeSpendOnChore(skipGold = false) {
    const minM = 15;

    const minutes = getVar(VARIABLE.TEMP_CHORES_TIME, 0);

    //At least 15 minutes
    if(minutes < minM) {
        return;
    }

    //Reset
    setTempVar(VARIABLE.TEMP_CHORES_TIME, 0);

    for (let x = 0; x < Math.floor(minutes / minM); x++) {
        changeMeritLow();

        if (!skipGold) {
            rewardGoldLow();
        }
    }
}

function runChoreIntroduction() {
    sendVirtualAssistantMessage('%SlaveName%');
    sendVirtualAssistantMessage('This is the first time you\'re reporting for chores');

    if (isFullTime()) {
        sendVirtualAssistantMessage('Since you serve full time you are required to do chores for at least ' + getVar(VARIABLE.MIN_WEEKLY_CHORE_TIME) + ' minutes each week');
    } else {
        sendVirtualAssistantMessage('Since you serve as part time it isn\'t mandatory for you to complete chores');
        sendVirtualAssistantMessage('However your domme is very pleased if you do so');
    }

    sendVirtualAssistantMessage('There is a large variety of chores');
    sendVirtualAssistantMessage('Would you like chores involving budgets and your allowances?');
    sendVirtualAssistantMessage('This involves you keeping track of your money..');
    sendVirtualAssistantMessage('We\'ll discuss things like average income, budgets to buy food etc.');
    sendVirtualAssistantMessage('Once in a while but on a regular schedule your chores will involve updating these budgets');
    sendVirtualAssistantMessage('If you were a real slave you wouldn\'t even be allowed access to money...');
    sendVirtualAssistantMessage('You would simply be the one keeping check on all the books...');
    sendVirtualAssistantMessage('Well, do you want chores involving finances?', 0);

    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('Great. One more chore for you means it is less boring for all of us %Grin%');
        setVar(VARIABLE.CHORE_FINANCE, true);
    } else {
        sendVirtualAssistantMessage('Okay, I will remove this from the list then...')
    }

    sendVirtualAssistantMessage('Next...');
    sendVirtualAssistantMessage('Do you live in an apartment or house?', 0);


    let answer = createInput();

    while (true) {
        if (answer.isLike('apartment')) {
            setVar(VARIABLE.HOME_TYPE, HOME_APARTMENT_TYPE);
            sendVirtualAssistantMessage('I see...');
            break;
        } else if (answer.isLike('house')) {
            setVar(VARIABLE.HOME_TYPE, HOME_HOUSE_TYPE);
            sendVirtualAssistantMessage('%Good%');
            break;
        } else {
            sendVirtualAssistantMessage('Apartment or house %SlaveName%?', 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Do you have a kitchen in your %Home% that you need to clean?', 0);


    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('Keeping the kitchen clean is very important so you are gonna do it a lot %Grin%');
        setVar(VARIABLE.CHORE_KITCHEN, true);
    } else {
        sendVirtualAssistantMessage('%EmoteSad%');
    }

    sendVirtualAssistantMessage('Do you have a bathroom in your %Home% that you need to clean?', 0);

    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('A bathroom always has to be clean, doesn\'t it? %EmoteHappy%');
        setVar(VARIABLE.CHORE_BATHROOM, true);
    } else {
        sendVirtualAssistantMessage('%EmoteSad%');
    }

    sendVirtualAssistantMessage('In a moment I\'m gonna ask you how many rooms your %Home% has');
    //sendVirtualAssistantMessage('You can choose between 1-5 not including kitchen and bathroom');
    sendVirtualAssistantMessage('If you have more than 5 rooms and some of them are very small consider adding two of them together');
    sendVirtualAssistantMessage('I also suggest that you draw a schematic of your %Home% and add it to the folder named Home');
    sendVirtualAssistantMessage('The folder should be located inside the Spicy Images folder');
    sendVirtualAssistantMessage('You can name the image whatever you want');

    sendVirtualAssistantMessage('Just make sure that there is only 1 image inside the folder');
    sendVirtualAssistantMessage('It can look something like this', 0);
    showImage('Images/Spicy/Home/*.jpg', 5);

    sendVirtualAssistantMessage('Notice how 3 rooms have the same number because they were added together...', 0, true);

    sendVirtualAssistantMessage('So how many rooms are you responsible for cleaning in your home (including kitchen and bathroom)?', 0);

    answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();

            sendVirtualAssistantMessage('Okay I am now gonna walk you through each room and you are gonna tell me its name and size (if you know it)');
            sendVirtualAssistantMessage('If it is your kitchen or bathroom name it "kitchen" or "bathroom" so I know what those rooms are');
            sendVirtualAssistantMessage('If for example your kitchen is part of your living room add them together and just call it "kitchen"');

            for (let x = 0; x < result; x++) {
                sendVirtualAssistantMessage('What\'s the name of room ' + (x + 1) + '?', 0);

                let name = 'undefined';
                answer = createInput();

                while (true) {
                    if (getRoomByName(answer.getAnswer()) != null) {
                        sendVirtualAssistantMessage('A room with a similar name already exists. Please choose a different name.', 0);
                        answer.loop();
                    } else {
                        name = answer.getAnswer();
                        break;
                    }
                }

                sendVirtualAssistantMessage('What\'s the size of room ' + (x + 1) + ' in m^2? (If you don\'t know type -1)', 0);

                let size = -1;
                answer = createInput();

                while (true) {
                    if (answer.isInteger()) {
                        size = answer.getInt();
                        break;
                    } else {
                        sendVirtualAssistantMessage('Please only type a number such as 10...', 0);
                        answer.loop();
                    }
                }

                let room = createNewRoom(name, size);

                askForRoomSafety(room);
                saveRooms();
            }
            break;
        } else {
            sendVirtualAssistantMessage('Please only type a number such as 5...', 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Good...');
    sendVirtualAssistantMessage('Now before I can let you do chores all day I need to know something');
    sendVirtualAssistantMessage('How often would you like to receive kinky chore tasks?');
    sendVirtualAssistantMessage('This might include having you clean on all fours, using some sort of toys while cleaning and so on');
    sendVirtualAssistantMessage('You\'ll never really know the limit of my imagination %Lol%');
    sendVirtualAssistantMessage('On a scale from 1-10 where 1 is never and 10 is very often would you like to "play" while doing chores? Or would you like me to choose?', 0);

    answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            let frequency = answer.getInt();

            if (frequency < 1 || frequency > 10) {
                sendVirtualAssistantMessage('Please only give me a number in the range of 1 - 10...', 0);
                answer.loop();
            } else {
                setVar(VARIABLE.KINKY_CHORE_CHANCE, frequency);
                break;
            }
        } else if (answer.isLike('you')) {
            //Assistant choose
            setVar(VARIABLE.KINKY_CHORE_CHANCE, 11);
            sendVirtualAssistantMessage('This is gonna be much fun for me %Grin%');
            break;
        } else {
            sendVirtualAssistantMessage('Please only type a number such as 5...', 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('I think I know everything I need to know for now');
    sendVirtualAssistantMessage('We can get started %Grin%');
    setVar(VARIABLE.TOTAL_CHORES_DONE, 0);
    setVar(VARIABLE.TOTAL_CHORES_TIME, 0);

    setVar(VARIABLE.WEEKLY_CHORES_DONE, 0);
    setVar(VARIABLE.WEEKLY_CHORES_TIME, 0);
}


function sendKinkyChoreInstructions(choreType) {
    //Track all attached toys to remove them later on again
    let attachedToys = [];


    sendMessageBasedOnSender(random('Okay...', 'Okay!', 'Hmm...', 'Hehe', '%Grin%'));

    let tasks = 0;
    while (tasks < 1) {
        let id = randomInteger(0, 15);

        //No switch because switch doesn't support variables inside switch cases
        if (id === 0) {
            sendMessageBasedOnSender('I want you to tie your hands and your feet');
            sendMessageBasedOnSender('Not completely though...');
            sendMessageBasedOnSender('Make it so that there is ' + random(10, 15) + ' cm string left giving you a little mobility %Lol%');
            sendMessageBasedOnSender('I am generous Assistant... %Grin%');
            sendMessageBasedOnSender('Go ahead and tie yourself up %SlaveName%', 20);
            sendMessageBasedOnSender('Are you done tying yourself?');
            waitForDone();
            sendMessageBasedOnSender('%Good%');

            sendMessageBasedOnSender('I\'ve added a little extra time for you to clean due to your predicament %Grin%');
            tempChoreTimeMultiplier += 0.2;
            tasks++;
        } else if (id === 1) {
            let amount = randomInteger(1, 2) * 2;
            let thighOrBalls = randomInteger(0, 1);

            if (CLOTHESPINS_TOY.hasToy() && CLOTHESPINS_TOY.isPlayAllowed() && getPainLimit() == LIMIT_ASKED_YES && CLOTHESPINS_TOY.fetchToy(amount)) {
                if (thighOrBalls === 0) {
                    sendMessageBasedOnSender('I want you to put ' + amount / 2 + pluralize('peg', amount / 2) + ' on each inner thigh');
                    sendMessageBasedOnSender('I want them pointing inward');
                    sendMessageBasedOnSender('In a manner that they force you to walk with your legs spread');
                    sendMessageBasedOnSender('And so they might hit each other each time you take a step...');
                    sendMessageBasedOnSender('Step carefully %Lol%');
                } else {
                    sendMessageBasedOnSender('I want you to put ' + amount / 2 + pluralize('peg', amount / 2) + ' on each nipple');
                }

                sendMessageBasedOnSender('Tell me when you are done %SlaveName%');

                waitForDone();

                sendMessageBasedOnSender('%Good%');

                if (thighOrBalls === 0) {
                    sendMessageBasedOnSender('I\'ve added a little extra time for you to clean due to your predicament %Grin%');
                    tempChoreTimeMultiplier += 0.2;
                } else {
                    sendMessageBasedOnSender('I\'ve removed a little time from the clock');
                    sendMessageBasedOnSender('I expect that you might clean a little faster due to your predicament %Grin%');
                    sendMessageBasedOnSender('Just a few minutes');
                    sendMessageBasedOnSender('No more than 5 %Lol%');
                    tempChoreTimeMultiplier -= 0.1;
                }

                sendMessageBasedOnSender('Remember to remove them after you\'re done cleaning %Grin%');

                tasks++;
            }
        } else if (id === 2) {
            if (PARACHUTE_TOY.hasToy() && PARACHUTE_TOY.isPlayAllowed()) {
                if (PARACHUTE_TOY.fetchToy()) {
                    PARACHUTE_TOY.setToyOn(true);
                    sendMessageBasedOnSender('I want you to attach your parachute on to %MyYour% %Balls%');

                    sendMessageBasedOnSender('Add some weight to it. At least ' + getWeightForParachute() / 2 + 'kg %Grin%');

                    sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
                    waitForDone(1000);
                    sendMessageBasedOnSender('%Good%');

                    sendMessageBasedOnSender('Remember to remove it after you\'re done cleaning %Grin%');

                    sendMessageBasedOnSender('I\'ve added a little extra time for you to clean due to your predicament %Grin%');
                    tempChoreTimeMultiplier += 0.2;
                    tasks++;

                    attachedToys.push(PARACHUTE_TOY);
                }
            }
        } else if (id === 3) {
            if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPlayAllowed() && COLLAR_TOY.fetchToy()) {

                sendMessageBasedOnSender('If you have it I want you to handcuff yourself, if not be "creative"...');

                if (!COLLAR_TOY.isToyOn()) {
                    COLLAR_TOY.setToyOn(true);
                    attachedToys.push(COLLAR_TOY);
                    sendMessageBasedOnSender('Then I want you to put on your collar');
                }

                sendMessageBasedOnSender('Tie a rope from the handcuffs to your collar');
                sendMessageBasedOnSender('It shouldn\'t be more than 30-40 cm long');

                sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
                waitForDone(1000);
                sendMessageBasedOnSender('%Good%');


                sendMessageBasedOnSender('Remember to remove it after you\'re done cleaning %Grin%');

                sendMessageBasedOnSender('I\'ve added a little extra time for you to clean due to your predicament %Grin%');
                tempChoreTimeMultiplier += 0.2;
                tasks++;
            }
        } else if (id === 4) {
            if (CLOTHESPINS_TOY.hasToy() && CLOTHESPINS_TOY.isPlayAllowed() && getPainLimit() == LIMIT_ASKED_YES && CLOTHESPINS_TOY.fetchToy(2)) {
                sendMessageBasedOnSender('If you have it I want you to handcuff yourself, if not be "creative"...');
                sendMessageBasedOnSender('I want you to put ' + 2 + pluralize('peg', 2) + ' on your balls');
                sendMessageBasedOnSender('Tie a rope from the handcuffs to the pegs');
                sendMessageBasedOnSender('It shouldn\'t be more than 30-40 cm long %Grin%');

                sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
                waitForDone(1000);
                sendMessageBasedOnSender('%Good%');

                sendMessageBasedOnSender('Remember to remove it after you\'re done cleaning %Grin%');

                sendMessageBasedOnSender('I\'ve added a little extra time for you to clean due to your predicament %Grin%');
                tempChoreTimeMultiplier += 0.2;
                tasks++;
            }
        } else if (id === 5) {
            if (BUTTPLUG_TOY.isPlayAllowed()) {
                let possibilities = [];

                if (hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL)) {
                    possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.PIG_TAIL));
                } else if (hasButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL)) {
                    possibilities.push(getButtplugWithBaseStyle(BUTTPLUG_BASE_STYLE.FLUFFY_TAIL));
                }

                if (possibilities.length !== 0) {
                    if(isPlugged()) {
                        sendMessageBasedOnSender('Go ahead and remove the buttplug from your rump');
                    }

                    let buttplug = random(possibilities);

                    if (buttplug.baseStyle === BUTTPLUG_BASE_STYLE.PIG_TAIL) {
                        sendMessageBasedOnSender('Let\'s turn you into a cute little pig %SlaveName%');
                    } else {
                        sendMessageBasedOnSender('Let\'s turn you into a cute little animal %SlaveName%');
                    }


                    if (buttplug.fetchButtplug()) {
                        attachedToys.push(BUTTPLUG_TOY);
                        sendMessageBasedOnSender('Now put it in and tell me when you are done');
                        waitForDone();

                        if (hasAnyGag()) {
                            if (buttplug.baseStyle === BUTTPLUG_BASE_STYLE.PIG_TAIL) {
                                sendMessageBasedOnSender('Pigs don\'t talk do they?');
                                selectAndPutInGag();
                            } else {
                                sendMessageBasedOnSender('Pets don\'t talk do they?');
                                selectAndPutInGag();
                            }

                            attachedToys.push(currentGagType);
                        }

                        if (NOSE_HOOK.hasToy() && NOSE_HOOK.isPlayAllowed() && NOSE_HOOK.fetchToy()) {
                            sendMessageBasedOnSender('Put on the nose hook and tell me when you are done');
                            waitForDone();
                            attachedToys.push(NOSE_HOOK);
                        }

                        if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPlayAllowed() && putOnCollar()) {
                            attachedToys.push(COLLAR_TOY);
                        }

                        if (buttplug.baseStyle === BUTTPLUG_BASE_STYLE.PIG_TAIL) {
                            sendMessageBasedOnSender('Now you are a proper pig %SlaveName%');
                        } else {
                            sendMessageBasedOnSender('Now that\'s a proper pet %Grin%');
                        }

                        if (choreType === ROOM_CHORE_MOP) {
                            sendMessageBasedOnSender('While cleaning the floor today I want you to stay on all fours');
                            sendMessageBasedOnSender('You are ONLY allowed to stand up if you need to reach something high...');
                        } else {
                            sendMessageBasedOnSender('Whenever possible you are to stay down on all fours during your chore');
                        }

                        sendMessageBasedOnSender('I\'ve added extra time since this must slow you down...');

                        tempChoreTimeMultiplier += 0.5;

                        tasks++;
                    }
                }
            }
        } else if (id === 6) {
            if (PROSTATE_VIBRATOR_TOY.hasToy() && PROSTATE_VIBRATOR_TOY.isPlayAllowed()) {
                if (PROSTATE_VIBRATOR_TOY.fetchToy()) {
                    sendMessageBasedOnSender('Now lube it up and put it in');
                    sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
                    waitForDone(1000);
                    sendMessageBasedOnSender('%Good%');

                    sendMessageBasedOnSender('Put it on a setting of your choice that\'s gonna tease you a lot %Grin%');
                    sendMessageBasedOnSender('I want you naked while doing the chore so you can drip precum all over the floor');
                    sendMessageBasedOnSender('Don\'t you dare cum!');
                    sendMessageBasedOnSender('If you get close to cumming stop and continue once you are ready');

                    attachedToys.push(PROSTATE_VIBRATOR_TOY);
                    tasks++;
                }
            }
        } else if (id === 7) {
            if (hasAnyGag() && !isGaged() && isGagPlay() && selectAndPutInGag()) {
                tasks++;

                attachedToys.push(currentGagType);

                sendMessageBasedOnSender('Remember to remove it after you\'re done cleaning %Grin%');
            }
        } else if (id === 8) {
            if (hasButtplugToy() && BUTTPLUG_TOY.isPlayAllowed() && putInButtplug()) {
                tasks++;

                attachedToys.push(BUTTPLUG_TOY);

                sendMessageBasedOnSender('Remember to remove it after you\'re done cleaning %Grin%');
            }
        } else if (id === 9) {
            let amount = randomInteger(4, 8);

            if (CLOTHESPINS_TOY.hasToy() && CLOTHESPINS_TOY.isPlayAllowed() && getPainLimit() == LIMIT_ASKED_YES && CLOTHESPINS_TOY.fetchToy(amount)) {
                sendMessageBasedOnSender('I want you to put ' + amount + ' on your balls');

                sendMessageBasedOnSender('Tell me when you are done %SlaveName%');

                waitForDone();

                sendMessageBasedOnSender('%Good%');

                sendMessageBasedOnSender('Remember to remove them after you\'re done cleaning %Grin%');
                tasks++;

                sendMessageBasedOnSender('I\'ve removed a little time from the clock');
                sendMessageBasedOnSender('I expect that you might clean a little faster due to your predicament %Grin%');
                sendMessageBasedOnSender('Just a few minutes');
                sendMessageBasedOnSender('No more than 5 %Lol%');
                tempChoreTimeMultiplier -= 0.1;
            }
        } else if (id === 10) {
            if (choreType === ROOM_CHORE_MOP) {
                sendMessageBasedOnSender('While cleaning the floor today I want you to stay on all fours');
                sendMessageBasedOnSender('You are ONLY allowed to stand up if you need to reach something high...');
                sendMessageBasedOnSender('I\'ve added extra time since this must slow you down...');
                tempChoreTimeMultiplier += 0.5;
                tasks++;
            }
        } else if (id === 11) {
            // let taskCreated = false;
            // if (HIGH_HEEL_TOY.hasToy()) {
            //     let highHeel = HIGH_HEEL_TOY.getRandom();
            //     if (highHeel.fetchToyInstance()) {
            //         let lock = false;
            //         if (HIGH_HEEL_LOCK.hasToy()) {
            //             if (HIGH_HEEL_LOCK.fetchToy()) {
            //                 lock = true;
            //             }
            //         }
            //
            //         if (lock) {
            //             sendMessageBasedOnSender('Now put on the high heels and attach the lock to them');
            //         } else {
            //             sendMessageBasedOnSender('Now put on the high heels and tell me when you are ready');
            //         }
            //
            //         HIGH_HEEL_LOCK.setToyOn(true);
            //         HIGH_HEEL_TOY.setToyOn(true);
            //         sendMessageBasedOnSender('Tell me when you are done');
            //         waitForDone();
            //
            //         attachedToys.push(HIGH_HEEL_TOY);
            //         attachedToys.push(HIGH_HEEL_LOCK);
            //
            //         taskCreated = true;
            //         tasks++;
            //     }
            // }

            //Only do this if the sub has no outfit on yet
            if (hasSomeLingerie() && isLingeriePlayAllowed() && !hasOutfitOn()) {
                sendMessageBasedOnSender('Let\'s dress you up a little');

                let lingerieAttached = putOnLingerie();

                if(lingerieAttached) {
                    sendMessageBasedOnSender('%Good%');

                    //TODO: Save what's attached right now in lingerie

                    sendMessageBasedOnSender('You can undress once you are done with this task %Grin%');
                    tasks++;

                    if (NIPPLE_CLAMPS.decideToyOn() && feelsLikePunishingSlave()) {
                        if (putNippleClampsOn()) {
                            attachedToys.push(NIPPLE_CLAMPS);
                        }
                    }
                }
            }
        } else if (id === 12) {
            if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPlayAllowed() && COLLAR_TOY.fetchToy()) {
                sendMessageBasedOnSender('This is gonna be a little complicated %Lol%');
                sendMessageBasedOnSender('But it should prove fun to watch!');

                if (!COLLAR_TOY.isToyOn()) {
                    COLLAR_TOY.setToyOn(true);
                    attachedToys.push(COLLAR_TOY);
                    sendMessageBasedOnSender('I want you to put on your collar');
                } else {
                    sendMessageBasedOnSender('I want you to attach a leash to your collar');
                }

                sendMessageBasedOnSender('The leash shouldn\'t be any longer than 2m');
                sendMessageBasedOnSender('During your cleaning today I want you to tie that leash to different objects');
                sendMessageBasedOnSender('Could be a door handle, a table leg or something similar');
                sendMessageBasedOnSender('I want you to carry a timer with you');
                sendMessageBasedOnSender('You are only allowed to relocate the leash every 5\'th minute!');

                if (sendYesOrNoQuestion('Understood?')) {
                    sendMessageBasedOnSender('%Good%');
                } else {
                    sendMessageBasedOnSender('Then read what I said again...', 20);
                }

                sendMessageBasedOnSender('Tell me when you are ready %SlaveName%');
                waitForDone(1000);
                sendMessageBasedOnSender('%Good%');

                sendMessageBasedOnSender('I\'ve added extra time since this must slow you down...');
                tempChoreTimeMultiplier += 0.3;

                sendMessageBasedOnSender('Remember to remove the collar after you\'re done cleaning %Grin%');
                tasks++;
            }
        } else if (id === 13) {
            sendMessageBasedOnSender('While cleaning today I want you naked');
            sendMessageBasedOnSender('If your %Home% isn\'t warm this should help you work faster %Grin%');

            if (!isInChastity() && isChastityPlay()) {
                sendMessageBasedOnSender('Also I want you to wear your chastity cage');
                setCurrentSender(SENDER_ASSISTANT);
                lockChastityCage();
                setCurrentSender(SENDER_TAJ);
                sendMessageBasedOnSender('Remember I am generous and you can remove it if you are done');
            }

            tasks++;
        } else if (id === 14) {
            if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPlayAllowed() && COLLAR_TOY.fetchToy()) {
                sendMessageBasedOnSender('This is gonna get a little complicated %Lol%');
                sendMessageBasedOnSender('But it should prove fun to watch!');

                if (!COLLAR_TOY.isToyOn()) {
                    COLLAR_TOY.setToyOn(true);
                    attachedToys.push(COLLAR_TOY);
                    sendMessageBasedOnSender('I want you to put on your collar');
                } else {
                    sendMessageBasedOnSender('I want you to attach a leash to your collar');
                }

                sendMessageBasedOnSender('During the cleaning today I want you to tie that leash to a cup filled with sugar');
                sendMessageBasedOnSender('You aren\'t allowed to move the cup around with your hands');
                sendMessageBasedOnSender('Use your lower arms or something else %Grin%');
                sendMessageBasedOnSender('Move carefully %Grin%');

                sendMessageBasedOnSender('Tell me when you are ready to go %SlaveName%');
                waitForDone(1000);

                sendMessageBasedOnSender('I\'ve added extra time since this must slow you down...');
                tempChoreTimeMultiplier += 0.3;

                if (!RULE_ALWAYS_WEAR_COLLAR.isActive()) {
                    sendMessageBasedOnSender('Remember to the remove the collar after you\'re done cleaning %Grin%');
                }


                tasks++;
            }
        } else if (id === 15) {
            sendMessageBasedOnSender('Before cleaning today I want you to drink 1L of water');
            sendMessageBasedOnSender('You aren\'t allowed to pee starting now before you\'re done cleaning');

            sendMessageBasedOnSender('Tell me when you are done drinking %SlaveName%');
            waitForDone(1000);

            sendMessageBasedOnSender('%Good%');

            tasks++;
        }

        //TODO: Bell tasks (corner and computer)
    }

    return attachedToys;
}

function askForRoomSafety(room) {
    sendVirtualAssistantMessage('Next I would like to know...');
    sendVirtualAssistantMessage('Does that room have windows that neighbours can usually see through?', 0);

    room.windows = createYesOrNoQuestion();

    sendVirtualAssistantMessage('Now I need to know...');
    sendVirtualAssistantMessage('Is that room safe for kinky chores?');
    sendVirtualAssistantMessage('It\'s not safe if there is for example a risk of running into other people!', 0);

    room.safeForKink = createYesOrNoQuestion();
}