{
    sendVirtualAssistantMessage('You currently have ' + getGold() + ' gold', 0, false);

    let menu = createMenu('Shop');

    if (!isFullTime()) {
        menu.registerOption("Fulltime Conversion", ["fulltime", "conversion"], function (answer) {
            setCurrentSender(SENDER_ASSISTANT);

            let goldCost = 2000;

            if (!isFullTime()) {
                sendVirtualAssistantMessage('Converting to being a fulltime slave will cost you ' + goldCost + ' gold');

                if (getGold() < goldCost) {
                    sendVirtualAssistantMessage('Sadly you don\'t have enough to pay for this yet');
                    sendVirtualAssistantMessage('Which means you gotta keep on saving for it %Grin%');
                } else {
                    sendVirtualAssistantMessage('Becoming a fulltime slave for %DomHonorific% comes with additional tasks and time spent serving her');
                    sendVirtualAssistantMessage('Do not underestimate the time she will make you do things for her as her fulltime slave');
                    sendVirtualAssistantMessage('She won\'t occupy your whole day but you should expect up to 2 additional hours of daily time under her control');

                    if (sendYesOrNoQuestion('Are you still looking to become a fulltime slave of %DomHonorific%?', SENDER_ASSISTANT)) {
                        sendVirtualAssistantMessage('Contacting %DomHonorific% %DomName%...');
                        sleep(5);
                        sendVirtualAssistantMessage('...');
                        sleep(5);
                        addGold(-goldCost);
                        setFullTime();
                        sendVirtualAssistantMessage('Good news!');
                        sendVirtualAssistantMessage('She accepted your proposal and you will now serve your %DomHonorific% as her fulltime slave');
                        sendVirtualAssistantMessage('You will notice some changes down the line but there are a few things that she needs to clarify first');
                        perfomFullTimeTransition();

                        sendVirtualAssistantMessage('Now I will leave you excited with what\'s about to come %Grin%');
                        sendVirtualAssistantMessage('However do not take your new duties lightly or you will suffer the consequences!');
                    } else {
                        sendVirtualAssistantMessage('Well then, don\'t bother me');
                    }
                }
            } else {
                sendVirtualAssistantMessage('You are already a fulltime slave so no need to change anything about that %Grin%');
            }

            return false;
        });
    }

    if(getVar(VARIABLE.PUNISHMENT_POINTS) > 0) {
        menu.registerOption("Atonement", ["atonement", "punishment points"], function (answer) {
            setCurrentSender(SENDER_ASSISTANT);

            let goldCostPerPP = getStrictnessForCharacter() + 1;

            if (getVar(VARIABLE.PUNISHMENT_POINTS) === 0) {
                sendVirtualAssistantMessage('You already have 0 punishment points %SlaveName% %EmoteHappy%');
                return false;
            }

            sendVirtualAssistantMessage('You can use your gold to remove punishment points from your track record');
            sendVirtualAssistantMessage('The current price is ' + goldCostPerPP + ' gold per punishment point');
            sendVirtualAssistantMessage('Mind that removing punishment points using gold instead of a real punishment will make your %DomHonorific%\'s mood worse');

            if (sendYesOrNoQuestion('Are you still looking to pay to remove some punishment points?', SENDER_ASSISTANT)) {
                let convertAmount = createIntegerInput('Tell me then, how many punishment points would you like to convert?', 1, 100000, 'That\'s not a number. Just give me a number like 15', 'The number must be greater than 0.');

                if(convertAmount*goldCostPerPP > getGold()) {
                    sendVirtualAssistantMessage('You don\'t have enough gold for that %EmoteSad%');
                } else if(convertAmount > getVar(VARIABLE.PUNISHMENT_POINTS)) {
                    convertAmount = getVar(VARIABLE.PUNISHMENT_POINTS);
                    sendVirtualAssistantMessage('Since that is more than the punishment points you currently have, I have lowered the amount to ' + convertAmount);
                } else {
                    sendVirtualAssistantMessage('In total that would be ' + convertAmount*goldCostPerPP + ' gold for you');

                    if (sendYesOrNoQuestion('Do you want to proceed?', SENDER_ASSISTANT)) {
                        addGold(convertAmount*goldCostPerPP);
                        addPunishmentPoints(-convertAmount);

                        //Influence mood badly when paying to remove punishment points
                        changeMeritHigh(true);

                        sendVirtualAssistantMessage('You have successfully payed to remove ' + convertAmount + ' punishment points from your balance');
                    } else {
                        sendVirtualAssistantMessage('Well then, don\'t bother me');
                    }
                }
            } else {
                sendVirtualAssistantMessage('Well then, don\'t bother me');
            }

            return false;
        });
    }

    if(isInChastity() && (getVar(VARIABLE.CHASTITY_SPIKES_ON, false) || getVar(VARIABLE.CHASTITY_DILATOR_ON, false))) {
        menu.registerOption("Remove Chastity Add-on", ["add-on"], function (answer) {
            setCurrentSender(SENDER_ASSISTANT);

            sendVirtualAssistantMessage('Your %DomHonorific% has her reasons to add something like spikes or a dilator to your cage');
            sendVirtualAssistantMessage('However she allows you to pay gold instead to remove it for this time only');
            sendVirtualAssistantMessage('But note that this won\'t make your %DomHonorific%\ happy either');

            let goldCost = 500 + getStrictnessForCharacter() * 200;

            sendVirtualAssistantMessage('You\'ll pay ' + goldCost + ' per add-on you want to remove');

            let removeSpikes = false;

            if(getVar(VARIABLE.CHASTITY_SPIKES_ON, false)) {
                if(getActiveChastityCage().spikesDetachable) {
                    if(sendYesOrNoQuestion('Do you want to pay to remove the spikes from the cage?')) {
                        if(goldCost <= getGold()) {
                            removeSpikes = true;
                            addGold(-goldCost);
                            setVar(VARIABLE.CHASTITY_SPIKES_ON, false);
                            sendVirtualAssistantMessage('The payment was successful %SlaveName%');
                        } else {
                            sendVirtualAssistantMessage('Sadly you don\'t have enough gold to do that %EmoteSad%');
                        }
                    } else {
                        sendVirtualAssistantMessage('Okay...');
                    }
                } else {
                    sendVirtualAssistantMessage('Sadly I cannot let you take off the spikes since they aren\'t detachable');
                }
            }

            let removeDilator = false;

            if(getVar(VARIABLE.CHASTITY_DILATOR_ON, false)) {
                if(getActiveChastityCage().dialatorDetachable) {
                    if(sendYesOrNoQuestion('Do you want to pay to remove the dilator from the cage?')) {
                        if(goldCost <= getGold()) {
                            removeDilator = true;
                            addGold(-goldCost);
                            setVar(VARIABLE.CHASTITY_DILATOR_ON, false);
                            sendVirtualAssistantMessage('The payment was successful %SlaveName%');
                        } else {
                            sendVirtualAssistantMessage('Sadly you don\'t have enough gold to do that %EmoteSad%');
                        }
                    } else {
                        sendVirtualAssistantMessage('Okay...');
                    }
                } else {
                    sendVirtualAssistantMessage('Sadly I cannot let you take off the dilator since it isn\'t detachable');
                }
            }

            if(removeSpikes || removeDilator) {
                changeMeritHigh(true);
                unlockChastityKey();

                setCurrentSender(SENDER_TAJ);

                if(removeSpikes && removeDilator) {
                    sendVirtualAssistantMessage('Now go ahead and remove the spikes and the dilator');
                } else if(removeSpikes) {
                    sendVirtualAssistantMessage('Now go ahead and remove the spikes');
                } else if(removeDilator) {
                    sendVirtualAssistantMessage('Now go ahead and remove the dilator');
                }

                sendVirtualAssistantMessage('I will wait for you');

                setVar(VARIABLE.WAITING_FOR_CHASTITY_KEY_RETURN, true);
                waitForDoneVirtualAssistant(10000);
                sendVirtualAssistantMessage('You\'re back!');

                onChastityKeyReturn();
            }

            return false;
        });
    }


    menu.registerOption("Return", ["return"], function (answer) {
        return true;
    });

    menu.callMenu();
}