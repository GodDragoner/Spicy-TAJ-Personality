const HOME_ROOMS = [];
loadRooms();

function createNewRoom(name, size) {
    let room = createRoom(name, size);
    HOME_ROOMS.push(room);
    saveRooms();

    return room;
}

function loadRooms() {
    if (!isVar('homeRooms')) {
        setVar('homeRooms', new java.util.ArrayList());
    } else {
        let arrayList = tryGetArrayList('homeRooms');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);

            HOME_ROOMS.push(createRoom('undefined', -1).fromString(entry));
        }
    }

    sendDebugMessage('Loaded ' + HOME_ROOMS.length + ' rooms');
}

function saveRooms() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < HOME_ROOMS.length; y++) {
        arrayList.add(HOME_ROOMS[y].toString());
    }

    setVar('homeRooms', arrayList);
}

function getRoomByName(name) {
    for (let y = 0; y < HOME_ROOMS.length; y++) {
        if (name.toUpperCase() === HOME_ROOMS[y].name.toUpperCase()) {
            return HOME_ROOMS[y];
        }
    }

    return null;
}

function createRoom(name, size) {
    return {
        name: name, size: size, safeForKink: undefined, windows: undefined,

        registerCleanTime: function (timeSeconds, choreType) {
            //Increment chore amount
            incrementVar(this.getVarName() + capitalize(choreType.name) + 'Amount', 1);

            if (this.isAverageSet(choreType)) {
                //Nothing right now
                return true;
            } else {
                incrementVar(this.getAverageCleanTimeVarName(choreType), timeSeconds);

                if (this.getChoreAmount(choreType) == this.getChoreAmountForAverageSet()) {
                    setVar(this.getAverageCleanTimeVarName(choreType), Math.ceil(this.getAverageCleanTime(choreType) / this.getChoreAmountForAverageSet()));
                }

                return false;
            }
        },

        isAverageSet: function (choreType) {
            return this.getChoreAmount(choreType) > this.getChoreAmountForAverageSet();
        },

        getChoreAmountForAverageSet: function () {
            return 5;
        },

        isWithinTimeBounds: function (time, choreType) {
            //addTime > 1 => Sub MIGHT take longer so we are ONLY gonna increase the max time needed
            //addTime < 1 => Means sub was supposed to do this quicker than usual and we are gonna make both smaller
            //Handled in getCleanTimeBound...
            return time >= Math.floor(this.getCleanTimeBoundMin(choreType)) && time <= Math.ceil(this.getCleanTimeBoundMax(choreType));
        },

        confirmAndStartChore: function (choreType) {
            if (choreType === ROOM_CHORE_MOP) {
                let secondsSinceVacuum = this.getSecondsSinceLastChore(ROOM_CHORE_VACUUM);

                //last vacuum 4 or more days ago means we should probably do that first before mopping the floors
                if (secondsSinceVacuum === -1 || Math.ceil(secondsSinceVacuum / (60 * 60 * 24) > 3)) {
                    choreType = ROOM_CHORE_VACUUM;
                }
            }

            this.startChore(choreType);
        },

        startChore: function (choreType) {

            switch (choreType) {
                case ROOM_CHORE_MOP:
                    sendMessageBasedOnSender(random('It\'s time to mop the floor!', 'Time for you to mop the floor', 'Let\'s have you mop the floor!', 'Time to mop floor %Grin%'));
                    //sendMessageBasedOnSender(random('First', 'Before that', 'Before we get to that', 'But before that') + '...');
                    //sendMessageBasedOnSender(random('The floor needs to be vacuumed', 'You have to vacuum the floor first', 'You gotta go ahead and vacuum the floor'));
                    sendMessageBasedOnSender('We are gonna work on the ' + this.name + ' right now');
                    sendMessageBasedOnSender('%Retrieve% whatever you need to mop the floors.');
                    break;
                case ROOM_CHORE_WIPE:
                    sendMessageBasedOnSender(random('It\'s time to wipe the surfaces!', 'Time for you to wipe the surfaces', 'Let\'s have you wipe the surfaces!', 'Time to wipe the surfaces %Grin%'));
                    //sendMessageBasedOnSender(random('First', 'Before that', 'Before we get to that', 'But before that') + '...');
                    //sendMessageBasedOnSender(random('You need to vacuum the surfaces', 'You have to vacuum the surfaces', 'You gotta go ahead and vacuum the surfaces...'));
                    sendMessageBasedOnSender('We are gonna work on the ' + this.name + ' right now');
                    sendMessageBasedOnSender('%Retrieve% whatever you need to wipe and properly clean the surfaces');
                    break;
                case ROOM_CHORE_VACUUM:
                    sendMessageBasedOnSender(random('It\'s time to vacuum!', 'Time for you to vacuum the floor', 'Let\'s have you vacuum the floors!', 'Time to vacuum the floor %Grin%'));
                    //sendMessageBasedOnSender(random('You need to vacuum the floor', 'You have to vacuum the floor', 'You gotta go ahead and vacuum the floor'));
                    sendMessageBasedOnSender('We are gonna work on the ' + this.name + ' right now');
                    sendMessageBasedOnSender('%Retrieve% your vacuum cleaner');
                    break;
            }

            sendMessageBasedOnSender('Tell me when you are ready to go.', 0);
            waitForDone(1000);

            if (isUndefined(this.windows) || isUndefined(this.safeForKink)) {
                askForRoomSafety(this);
                saveRooms();
            }

            let toysAttached = [];

            //Only do kinky stuff if the room is safe for it
            if (!this.windows && this.safeForKink) {
                toysAttached = sendKinkyChoreInstructions(choreType);
            }

            sendMessageBasedOnSender('Okay then...');
            sendMessageBasedOnSender('You can go ahead and start with your chore...');
            sendMessageBasedOnSender('Just report to me when you are done');

            CHORE_WATCH.reset();
            CHORE_WATCH.start();
            waitForDone(10000000);

            sendMessageBasedOnSender('So you\'re done...');


            for (let x = 0; x < toysAttached.length; x++) {
                toy = toysAttached[x];

                //Will trigger scripts based on the toy
                if (toy === BUTTPLUG_TOY) {
                    sendMessageBasedOnSender('You can now remove the plug from your ass %SlaveName%');
                    setPlugRemoved();
                } else if (toy === COLLAR_TOY && RULE_ALWAYS_WEAR_COLLAR.isActive()) {
                    //Continue, since collar stays on
                    continue;
                } else {
                    toy.removeToy();
                }
            }

            this.endChore(choreType);
        },

        endChore: function (choreType) {
            CHORE_WATCH.stop();

            //Works even if IDE talks about it not being a string
            let secondsPassed = parseInt(CHORE_WATCH.getTime() / 1000, 10);
            let minutesPassed = Math.round(secondsPassed / 60);

            sendDebugMessage('Done chore for ' + minutesPassed);

            //Weekly chores done
            incrementVar(VARIABLE.WEEKLY_CHORES_DONE, 1);

            incrementVar(VARIABLE.TOTAL_CHORES_DONE, 1);

            //Time in minutes spend doing chores
            incrementVar(VARIABLE.WEEKLY_CHORES_TIME, minutesPassed);

            incrementVar(VARIABLE.TOTAL_CHORES_TIME, minutesPassed);

            //Set last done date

            setDate(this.getLastChoreDateVarName(choreType));

            let averageSet = false;

            //Only do this if we haven't added time or the average won't be effected by this
            if (tempChoreTimeMultiplier === 1 || this.isAverageSet(choreType)) {
                averageSet = this.registerCleanTime(secondsPassed, choreType);
            }

            CHORE_WATCH.reset();

            //Not enough data for average or okay (within bounds)
            if (!averageSet || this.isWithinTimeBounds(secondsPassed, choreType)) {
                sendMessageBasedOnSender('%Good% %SlaveName%');

                if (averageSet) {
                    sendMessageBasedOnSender('Allow me to reward your ' + random('splendid', 'good', 'excellent', 'lovely') + random('behavior', 'work'));
                    accountTimeSpendOnChore(minutesPassed, false);
                } else {
                    sendMessageBasedOnSender('Good job %GeneralTime% %SlaveName%');
                    accountTimeSpendOnChore(minutesPassed, true);
                }

                //Reset warnings
                if (isVar(VARIABLE.CHORE_WARNINGS)) {
                    setVar(VARIABLE.CHORE_WARNINGS, 0);
                }
            }
            //Too fast
            else if (secondsPassed <= this.getFastCleanTime(choreType)) {
                sendMessageBasedOnSender(random('Too fast!', 'That was waaay too fast %SlaveName%!!', 'You can\'t possibly be this fast!'));
                sendMessageBasedOnSender('There is no way you could\'ve done this chore thoroughly in this time');
                sendMessageBasedOnSender('%HaveToPunish%');
                sendMessageBasedOnSender('I\'ve assigned you punishment points for going too easy on this task');
                addPunishmentPoints(200, PUNISHMENT_REASON.TOO_LAZY);
            }
            //Too slow
            else if (secondsPassed >= this.getSlowCleanTime(choreType)) {
                sendMessageBasedOnSender(random('Too slow!', 'That was waaay too slow %SlaveName%!!', 'You\'re late!', 'You\'re late %SlaveName%', 'You\'re late slut...', 'Late are we?', 'You know you\'re late right?'));
                sendMessageBasedOnSender('There is no way you could\'ve taken this long');
                sendMessageBasedOnSender(random('I don\'t tolerate late!', 'You know I don\'t tolerate it when you\'re late', 'There is zero tolerance for being late and lazy!'));
                sendMessageBasedOnSender('I\'ve assigned you punishment points for laziness');
                addPunishmentPoints(200, PUNISHMENT_REASON.TOO_LAZY);
            }
            //Faster
            else if (secondsPassed <= this.getCleanTimeBoundMin(choreType)) {
                sendMessageBasedOnSender('You\'ve been faster than usual...');
                //sendMessageBasedOnSender('Anything I should know?');
                sendMessageBasedOnSender('You can\'t haste thoroughness!');
                sendMessageBasedOnSender('I expect that you\'re always thorough when cleaning');

                if (!this.askForAdjustTime(choreType, secondsPassed)) {
                    if (getVar(VARIABLE.CHORE_WARNINGS, 0) > 0) {
                        sendMessageBasedOnSender('I gave you a warning last time!');
                        sendMessageBasedOnSender('%HaveToPunish%');
                        sendMessageBasedOnSender('I have assigned you punishment points');
                        addPunishmentPoints(100, PUNISHMENT_REASON.TOO_LAZY);
                    } else {
                        sendMessageBasedOnSender('I\'m giving you a warning this time %SlaveName%');
                        sendMessageBasedOnSender('Don\'t disappoint me again!');
                        incrementVar(VARIABLE.CHORE_WARNINGS, 1);
                    }
                }

            }
            //Should be: secondsPassed >= this.getCleanTimeBoundMin(choreType) by default (slower)
            else {
                sendMessageBasedOnSender('You\'ve been slower than usual...');
                sendMessageBasedOnSender('Anything I should know?', 0);

                let punish = true;
                let answer = createInput('laziness', 'tired', 'toys', 'thorough', 'dirtier');

                if (answer.isLike('lazy', 'laziness')) {
                    sendMessageBasedOnSender(random('Inexcusable!', 'You know that laziness can\'t be tolerated!'));
                } else if (answer.isLike('dust', 'dirt')) {
                    sendMessageBasedOnSender('Well then you aren\'t doing enough chores!');
                } else if (answer.isLike('tired', 'rest', 'sleep')) {
                    sendMessageBasedOnSender(random('Inexcusable', 'I don\'t care if you\'re tired!'));
                } else if (answer.isLike('thorough', 'better', 'cleaner')) {
                    sendMessageBasedOnSender('I see but you should always be thorough!');
                    punish = false;
                } else if (answer.isLike('toy', 'you made me', 'you told me')) {
                    sendMessageBasedOnSender(random('Excuses! Really!?', 'Wauw you\'re gonna blame me...'))
                } else {
                    punish = false;
                }

                let adjustTime = false;

                if (!punish) {
                    adjustTime = this.askForAdjustTime(choreType, secondsPassed);
                }

                //Onl
                if (!adjustTime) {
                    if (getVar(VARIABLE.CHORE_WARNINGS, 0) > 0 || punish) {
                        if (getVar(VARIABLE.CHORE_WARNINGS, 0) > 0) {
                            sendMessageBasedOnSender('I gave you a warning last time!');
                        }

                        sendMessageBasedOnSender('%HaveToPunish%');
                        sendMessageBasedOnSender('I have assigned you punishment points');
                        addPunishmentPoints(100, PUNISHMENT_REASON.TOO_LAZY);
                    } else {
                        sendMessageBasedOnSender('I\'m giving you a warning this time %SlaveName%');
                        sendMessageBasedOnSender('Don\'t disappoint me again!');
                        incrementVar(VARIABLE.CHORE_WARNINGS, 1);
                    }
                }
            }

            tempChoreTimeMultiplier = 1;
        },

        askForAdjustTime: function (choreType, secondsPassed) {
            sendMessageBasedOnSender('Be honest with yourself and me now %SlaveName%');
            sendMessageBasedOnSender('Should we adjust the time for the future?', 0);

            if (createYesOrNoQuestion()) {
                sendVirtualAssistantMessage('Okay, I will adjust the time for future chores');
                setVar(this.getAverageCleanTimeVarName(choreType), Math.ceil((this.getAverageCleanTime(choreType) + secondsPassed) / 2));
                return true;
            } else {
                sendMessageBasedOnSender('Well then...');
            }

            return false;
        },

        getName: function () {
            return this.name;
        },

        getVarName: function () {
            return 'room' + this.name.replace(/ /g, "");
        },

        getChoreAmountVarName: function (choreType) {
            return this.getVarName() + capitalize(choreType.name) + 'Amount';
        },

        getChoreAmount: function (choreType) {
            return getVar(this.getChoreAmountVarName(choreType), 0);
        },

        getSecondsSinceLastChore: function (choreType) {
            let lastDate = this.getLastChoreDate(choreType);

            if (lastDate === -1) {
                return lastDate;
            } else {
                return millisToTimeUnit(getMillisSinecDate(lastDate), TIME_UNIT_SECONDS, 0);
            }
        },

        getLastChoreDateVarName: function (choreType) {
            return this.getVarName() + 'Last' + capitalize(choreType.name);
        },

        getLastChoreDate: function (choreType) {
            return getVar(this.getLastChoreDateVarName(choreType), -1);
        },

        getAverageCleanTimeVarName: function (choreType) {
            return this.getVarName() + 'Average' + capitalize(choreType.name) + 'Time';
        },

        getAverageCleanTime: function (choreType) {
            return getVar(this.getAverageCleanTimeVarName(choreType), 0);
        },

        getFastCleanTime: function (choreType) {
            //addTime < 1 => we are gonna get a lower average than usual because sub was supposed to do this quicker than usual
            //addTime >= 1 => do nothing because sub MIGHT be slower
            return Math.floor((this.getAverageCleanTime(choreType) * Math.min(1, tempChoreTimeMultiplier)) / 2);
        },

        getSlowCleanTime: function (choreType) {
            //addTime > 1 => we are gonna get a higher average than usual because sub MIGHT do it slower than usual
            //addTime < 1 => we are gonna get a lower average than usual because sub was supposed to do this quicker than usual
            return Math.ceil(this.getAverageCleanTime(choreType) * 2 * tempChoreTimeMultiplier);
        },

        getCleanTimeBoundMin: function (choreType) {
            //addTime < 1 => we are gonna get a lower average than usual because sub was supposed to do this quicker than usual
            //addTime >= 1 => do nothing because sub MIGHT be slower
            return Math.floor(this.getAverageCleanTime(choreType) * 3 / 4 * Math.min(1, tempChoreTimeMultiplier));
        },

        getCleanTimeBoundMax: function (choreType) {
            //addTime > 1 => we are gonna get a higher average than usual because sub MIGHT do it slower than usual
            //addTime < 1 => we are gonna get a lower average than usual because sub was supposed to do this quicker than usual
            return Math.ceil(this.getAverageCleanTime(choreType) * 5 / 4 * tempChoreTimeMultiplier);
        },

        isSafeForKink: function () {
            return this.safeForKink;
        },

        hasWindows: function () {
            return this.windows;
        },

        toString: function () {
            return serializeObject(this);
        },

        fromString: function (string) {
            return deserializeObject(this, string);
        },

    };
}