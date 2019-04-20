const HOME_HOUSE_TYPE = 0;
const HOME_APARTMENT_TYPE = 1;


const ROOM_CHORE_MOP = {id: 0, name: 'mop'};
const ROOM_CHORE_WIPE = {id: 1, name: 'wipe'};
const ROOM_CHORE_VACUUM = {id: 2, name: 'vacuum'};
const CHORE_WATCH = new StopWatch();

function runChoreIntroduction() {
    sendVirtualAssistantMessage('Hello #SubName');
    sendVirtualAssistantMessage('This is the first time you\'re reporting for chores');

    if (isFullTime()) {
        sendVirtualAssistantMessage('Since you serve full time you are required to complete at least ' + getVar(VARIABLE_MIN_WEEKLY_CHORES) + ' chores each week');
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
    sendVirtualAssistantMessage('Well do want chores involving finances?', 0);

    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('Great. One more chore for you means it is less boring for all of us %Grin%');
        setVar(VARIABLE_CHORE_FINANCE, true);
    } else {
        sendVirtualAssistantMessage('Okay, I will remove this from the list then...')
    }

    sendVirtualAssistantMessage('Next...');
    sendVirtualAssistantMessage('Do you live in an apartment or house?');


    let answer = createInput();

    while(true) {
        if(answer.isLike('apartment')) {
            setVar(VARIABLE_HOME_TYPE, HOME_APARTMENT_TYPE);
            sendVirtualAssistantMessage('I see...');
            break;
        } else if(answer.isLike('house')) {
            setVar(VARIABLE_HOME_TYPE, HOME_HOUSE_TYPE);
            sendVirtualAssistantMessage('%Good%');
            break;
        } else {
            sendVirtualAssistantMessage('Apartment or house %SlaveName%?');
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Do you have a kitchen in your %Home% that you need to clean?', 0);


    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('Keeping the kitchen clean is very important so you are gonna do it a lot %Grin%');
        setVar(VARIABLE_CHORE_KITCHEN, true);
    } else {
        sendVirtualAssistantMessage('%EmoteSad%');
    }

    sendVirtualAssistantMessage('Do you have a bathroom in your %Home% that you need to clean?', 0);

    if (createYesOrNoQuestion()) {
        sendVirtualAssistantMessage('A bathroom always has to be clean, doesn\'t it? %EmoteHappy%');
        setVar(VARIABLE_CHORE_BATHROOM, true);
    } else {
        sendVirtualAssistantMessage('%EmoteSad%');
    }

    //TODO: Ask for the size of each room
    sendVirtualAssistantMessage('In a moment I\'m gonna ask you how many rooms your %Home% has');
    sendVirtualAssistantMessage('You can choose between 1-5 not including kitchen and bathroom');
    sendVirtualAssistantMessage('If you have more than 5 rooms or some of them are very small consider adding two of them together');
    sendVirtualAssistantMessage('I also suggest that you draw a schematic of your %Home% and add it to the folder named Home');
    sendVirtualAssistantMessage('The folder should be located inside GNMImages');
    sendVirtualAssistantMessage('You can name the image whatever you want');
    //TODO: Show images etc.
    sendVirtualAssistantMessage('Just make sure that there is only 1 image inside the folder');
    sendVirtualAssistantMessage('It can look something like this @ShowImage[\GNMImages\Home\*.*]');
    sendVirtualAssistantMessage('how each room are assigned a number, except for the kitchen and bathroom. @ShowImage[\GNMImages\Home\*.*]');
    sendVirtualAssistantMessage('Also notice how 3 rooms have the same number because they were added together.. @ShowImage[\GNMImages\Home\*.*]');
}

function createRoom(name, size) {
    return {
        name: name, size: size,

        registerCleanTime: function(timeSeconds, choreType) {
            //Increment chore amount
            incrementVar(this.getVarName() + capitalize(choreType.name) + 'Amount', 1);

            if(this.getChoreAmount(choreType) > 5) {
                //Nothing right now
                return true;
            } else {
                incrementVar(this.getAverageCleanTimeVarName(choreType), timeSeconds);

                if(this.getChoreAmount(choreType) == 5) {
                    setVar(this.getAverageCleanTimeVarName(choreType), Math.ceil(this.getAverageCleanTime(choreType)/5));
                }

                return false;
            }
        },

        isWithinTimeBounds : function (time, choreType) {
            return time >= this.getCleanTimeBoundMin(choreType) && time <= this.getCleanTimeBoundMax(choreType);
        },

        startChore : function(choreType) {

            switch(choreType) {
                case ROOM_CHORE_MOP:
                    sendMessageBasedOnSender(random('It\'s time to mop the floors!', 'Time for you to mop the floors', 'Lets have you do some floor mopping!,Time to mop mop mop #GNMGrin,Work work work all day - mop all night #GNMLol) ')
                    break;
                case ROOM_CHORE_WIPE:
                    break;
                case ROOM_CHORE_VACUUM:
                    break;
            }
        },

        endChore : function(choreType) {
            CHORE_WATCH.stop();

            let secondsPassed = parseInt(CHORE_WATCH.getTime()/1000, 10);

            //Weekly chores done
            incrementVar(VARIABLE_WEEKLY_CHORES_DONE, 1);

            //Set last done date

            setDate(this.getLastChoreDateVarName());

            let averageSet = this.registerCleanTime(secondsPassed, choreType);

            CHORE_WATCH.reset();

            //Not enough data for average or okay (within bounds)
            if(!averageSet || (secondsPassed >= this.getCleanTimeBoundMin(choreType) && secondsPassed <= this.getCleanTimeBoundMax(choreType))) {
                sendMessageBasedOnSender('%Good% %SlaveName%');
                changeMeritMedium(false);

                if(averageSet) {
                    sendMessageBasedOnSender('Allow me to reward your ' + random('splendid', 'good', 'excellent', 'lovely') + random('behaviour', 'work'));
                    rewardGoldMedium();
                } else {
                    sendMessageBasedOnSender('Good job today %GeneralTime% %SlaveName%');
                }

                //Reset warnings
                if(isVar(VARIABLE_CHORE_WARNINGS)) {
                    setVar(VARIABLE_CHORE_WARNINGS, 0);
                }
            }
            //Too fast
            else if(secondsPassed <= this.getFastCleanTime(choreType)) {
                sendMessageBasedOnSender(random('Too fast!', 'That was waaay too fast %SlaveName%!!', 'You can\'t possibly be this fast!'));
                sendMessageBasedOnSender('There is no way you could\'ve done this chore thoroughly in this time');
                sendMessageBasedOnSender('%HaveToPunish%');
                sendMessageBasedOnSender('I\'ve assigned you punishment points for going too easy on this task');
                addPunishmentPoints(200);
            }
            //Too slow
            else if(secondsPassed >= this.getSlowCleanTime(choreType)) {
                sendMessageBasedOnSender(random('Too slow!', 'That was waaay too slow %SlaveName%!!', 'You\'re late!', 'You\'re late %SlaveName%', 'You\'re late slut...', 'Late are we?', 'You know you\'re late right?'));
                sendMessageBasedOnSender('There is no way you could\'ve done this chore thoroughly in this time');
                sendMessageBasedOnSender(random('I don\'t tolerate late!', 'You know I don\'t tolerate it when you\'re late', 'There is zero tolerance for being late and lazy!'));
                sendMessageBasedOnSender('I\'ve assigned you punishment points for laziness');
                addPunishmentPoints(200);
            }
            //Faster
            else if(secondsPassed <= this.getCleanTimeBoundMin(choreType)) {
                sendMessageBasedOnSender('You\'ve been faster than usual...');
                //sendMessageBasedOnSender('Anything I should know?');
                sendMessageBasedOnSender('You can\'t haste thoroughness!');
                sendMessageBasedOnSender('I expect that you\'re always thorough when cleaning');

                if(!this.askForAdjustTime(choreType, secondsPassed)) {
                    if (getVar(VARIABLE_CHORE_WARNINGS, 0) > 0) {
                        sendMessageBasedOnSender('I gave you a warning last time!');
                        sendMessageBasedOnSender('%HaveToPunish%');
                        sendMessageBasedOnSender('I have assigned you punishment points');
                        addPunishmentPoints(100);
                    } else {
                        sendMessageBasedOnSender('I\'m giving you a warning this time %SlaveName%');
                        sendMessageBasedOnSender('Don\'t disappoint me again!');
                        incrementVar(VARIABLE_CHORE_WARNINGS, 1);
                    }
                }

            }
            //Should be: secondsPassed >= this.getCleanTimeBoundMin(choreType) by default (slower)
            else {
                sendMessageBasedOnSender('You\'ve been slower than usual...');
                sendMessageBasedOnSender('Anything I should know?', 0);

                let punish = true;
                let answer = createInput('laziness', 'tired', 'toys', 'thorough', 'dirtier');

                if(answer.isLike('lazy', 'laziness')) {
                    sendMessageBasedOnSender(random('Inexcusable!' , 'You know that laziness can\'t be tolerated!'));
                } else if(answer.isLike('dust', 'dirt')) {
                    sendMessageBasedOnSender('Well then you aren\'t doing enough chores!');
                } else if(answer.isLike('tired', 'rest', 'sleep')) {
                    sendMessageBasedOnSender(random('Inexcusable', 'I don\'t care if you\'re tired!'));
                } else if(answer.isLike('thorough', 'better', 'cleaner')) {
                    sendMessageBasedOnSender('I see but you should always be thorough!');
                    punish = false;
                } else if(answer.isLike('toy', 'you made me', 'you told me')) {
                    sendMessageBasedOnSender(random('Excuses! Really!?', 'Wauv you\'re gonna blame me...'))
                } else {
                    punish = false;
                }

                let adjustTime = false;

                if(!punish) {
                    adjustTime = this.askForAdjustTime(choreType, secondsPassed);
                }

                //Onl
                if(!adjustTime) {
                    if (getVar(VARIABLE_CHORE_WARNINGS, 0) > 0 || punish) {
                        if (getVar(VARIABLE_CHORE_WARNINGS, 0) > 0) {
                            sendMessageBasedOnSender('I gave you a warning last time!');
                        }

                        sendMessageBasedOnSender('%HaveToPunish%');
                        sendMessageBasedOnSender('I have assigned you punishment points');
                        addPunishmentPoints(100);
                    } else {
                        sendMessageBasedOnSender('I\'m giving you a warning this time %SlaveName%');
                        sendMessageBasedOnSender('Don\'t disappoint me again!');
                        incrementVar(VARIABLE_CHORE_WARNINGS, 1);
                    }
                }
            }
        },

        askForAdjustTime: function (choreType, secondsPassed) {
            sendMessageBasedOnSender('Be honest with yourself and me now %SlaveName%');
            sendMessageBasedOnSender('Should we adjust the time for the future?', 0);

            if(createYesOrNoQuestion()) {
                sendVirtualAssistantMessage('Okay, I will adjust the time for future chores');
                setVar(this.getAverageCleanTimeVarName(choreType), Math.ceil((this.getAverageCleanTime(choreType) + secondsPassed)/2));
                return true;
            } else {
                sendMessageBasedOnSender('Well then...');
            }

            return false;
        },

        getName:function () {
            return this.name;
        },

        getVarName: function () {
            return 'room' + name.replace(/ /g, "");
        },

        getChoreAmountVarName: function(choreType) {
            return this.getVarName() + capitalize(choreType.name) + 'Amount';
        },

        getChoreAmount: function(choreType) {
            return getVar(this.getChoreAmountVarName(choreType));
        },

        getLastChoreDateVarName: function(choreType) {
            return this.getVarName() + 'Last' + capitalize(choreType.name);
        },

        getLastChoreDate: function(choreType) {
            return getVar(this.getLastChoreDateVarName(choreType));
        },

        getAverageCleanTimeVarName: function(choreType) {
            this.getVarName() + 'Average' + capitalize(choreType.name) + 'Time';
        },

        getAverageCleanTime: function(choreType) {
            return getVar(this.getAverageCleanTimeVarName(choreType), 0);
        },

        getFastCleanTime: function (choreType) {
            return this.getAverageCleanTime(choreType)/2;
        },

        getSlowCleanTime: function (choreType) {
            return this.getAverageCleanTime(choreType)*2;
        },

        getCleanTimeBoundMin: function (choreType) {
            return Math.floor(this.getAverageCleanTime(choreType)*3/4);
        },

        getCleanTimeBoundMax: function (choreType) {
            return Math.ceil(this.getAverageCleanTime(choreType)*5/4);
        },
    };
}