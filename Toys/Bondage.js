let currentBondageId = 0;

const TIE_OPTION = {
    FEET: {
        CHAIN_ANKLES: {
            id: currentBondageId++,
            sendInstructions: function () {
                sendMessage('Tie your ankles together and leave ' + getRandomRopeLength() + ' cm of rope in between at max');
            },
        },

        CHAIN_FROG_TIE_FEET: {
            id: currentBondageId++,
            sendInstructions: function () {
                sendMessage('Frogtie your legs');
            },
        },

        CHAIN_ANKLES_AND_TIE_TO_NECK: {
            id: currentBondageId++,
            sendInstructions: function () {
                currentBodyPosition = BODY_POSITION.ON_STOMACH;
                sendMessage('Tie your ankles together and leave ' + getRandomRopeLength() + ' cm of rope in between at max');
                sendMessage('Then I want you to lie on your stomach and tie the rope connecting your ankles to your neck');
                sendMessage('The rope should be not longer than the length requiring you to lift your feet at least in a 90 degree angle from the ground to make it work');

                if (COLLAR_TOY.hasToy() && COLLAR_TOY.isPunishmentAllowed()) {
                    sendMessage('Use your collar for this');
                }
            },
        },

        CHAIN_ANKLES_AND_TIE_TO_PARACHUTE: {
            id: currentBondageId++,
            sendInstructions: function () {
                currentBodyPosition = BODY_POSITION.ON_STOMACH;

                sendMessage('Tie your ankles together and leave ' + getRandomRopeLength() + ' cm of rope in between at max');
                sendMessage('%InAddition% I want you to attach your parachute');
                sendMessage('Then I want you to lie on your stomach and tie the rope connecting your ankles to your parachute');
                sendMessage('The rope should be not longer than ' + getRandomRopeLength() * 2 + ' cm');
            },
        },
    },

    HANDS: {
        CHAIN_HANDS: {
            id: currentBondageId++,
            sendInstructions: function () {
                sendMessage('Chain your hands together and leave ' + getRandomRopeLength() + ' cm of rope in between at max');
            },
        },
    },

    FEET_AND_HANDS: {
        CHAIN_ANKLES_TO_HANDS: {
            id: currentBondageId++,
            sendInstructions: function () {
                sendMessage('Chain your hands and ankles together separately and then connect your hands to your ankles with a rope of roughly ' + getRandomRopeLength() * 2 + ' cm length');
            },
        },
        CHAIN_HANDS_EACH_ANKLE: {
            id: currentBondageId++,
            sendInstructions: function () {
                sendMessage('Chain each of your hands directly to the corresponding ankle');
            },
        },
        CHAIN_SEPARATE: {
            id: currentBondageId++,
            sendInstructions: function () {
                //None
            },
        },
    },
};


function createBondageInstructions(level) {
    currentBodyPosition = BODY_POSITION.NONE;

    let generalOptions = [];

    let tieHandsOptions = [];
    let tieFeetOptions = [];

    let maxToys = (level + 1) * 2;

    if (level >= 0) {
        generalOptions.push(TIE_OPTION.FEET_AND_HANDS.CHAIN_SEPARATE);

        tieFeetOptions.push(TIE_OPTION.FEET.CHAIN_ANKLES);

        tieHandsOptions.push(TIE_OPTION.HANDS.CHAIN_HANDS);
    }

    if (level >= 1) {
        generalOptions.push(TIE_OPTION.FEET_AND_HANDS.CHAIN_ANKLES_TO_HANDS);

        tieFeetOptions.push(TIE_OPTION.FEET.CHAIN_FROG_TIE_FEET);
    }

    if (level >= 2) {
        generalOptions.push(TIE_OPTION.FEET_AND_HANDS.CHAIN_ANKLES_TO_HANDS);
        tieFeetOptions.push(TIE_OPTION.FEET.CHAIN_ANKLES_AND_TIE_TO_NECK);

        if (PARACHUTE_TOY.hasToy() && PARACHUTE_TOY.isPunishmentAllowed()) {
            tieFeetOptions.push(TIE_OPTION.FEET.CHAIN_ANKLES_AND_TIE_TO_PARACHUTE);
        }
    }

    let general = random(generalOptions);

    if (general.id === TIE_OPTION.FEET_AND_HANDS.CHAIN_SEPARATE.id) {
        let handTie = random(tieHandsOptions);
        let feetTie = random(tieFeetOptions);

        handTie.sendInstructions();
        sendMessageBasedOnSender('%InAddition%...');
        feetTie.sendInstructions();
    } else {
        general.sendInstructions();
    }

    if (currentBodyPosition === BODY_POSITION.ON_STOMACH && isNipplesOccupied()) {
        //We are on the stomach and should free the nipples
        removeAnythingOnNipples();
    }

    //Remove rule plug to allow for better plug
    if(isWearingRulePlug()) {
        removeButtplug();
    }

    let toys = new java.util.ArrayList();

    sendMessageBasedOnSender('Now let\'s see how I can put the finishing touches on this setup %Grin%');

    let keepInCounter = 0;

    if (isGaged()) {
        if (maxToys <= 0) {
            removeGag(false);
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that gag in ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep that gag in ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (hasAnyGag() && GAG_TYPE_BALL_GAG.isPunishmentAllowed()) {
        toys.add(GAG_TYPE_BALL_GAG);
    }

    if (isPlugged()) {
        if (maxToys <= 0) {
            removeButtplug();
        } else {
            interactWithButtplug(true);
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will stay plugged ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also stay plugged ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (hasButtplugToy() && BUTTPLUG_TOY.isPunishmentAllowed()) {
        toys.add(BUTTPLUG_TOY);
    }

    if (isNipplesOccupied()) {
        if (maxToys <= 0) {
            removeNippleClamps();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep those clamps on your nipples ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep those clamps on your nipples ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (currentBodyPosition !== BODY_POSITION.ON_STOMACH) {
        toys.add(NIPPLE_CLAMPS);
    }

    if (getTotalAttachedClamps() > 0) {
        if (maxToys <= 0) {
            removeAllClamps();
        } else {
            maxToys--;
            keepInCounter++;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep those clamps ' + random('on', 'attached to') + ' your body ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep those clamps ' + random('on', 'attached to') + ' your body ' + random('for this', '') + ' %SlaveName%');
            }
        }
    } else {
        toys.add(CLOTHESPINS_TOY);
    }

    if (HUMBLER_TOY.isToyOn()) {
        if (maxToys <= 0) {
            removeHumbler();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that humbler on ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep that humbler on ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (HUMBLER_TOY.hasToy() && HUMBLER_TOY.isPunishmentAllowed()) {
        toys.add(HUMBLER_TOY);
    }

    if(NOSE_HOOK.isToyOn()) {
        if (maxToys <= 0) {
            NOSE_HOOK.removeToyText();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that nose hook on ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep that nose hook on ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (NOSE_HOOK.hasToy()) {
        toys.add(NOSE_HOOK);
    }

    if(HOOD_TOY.isToyOn()) {
        if (maxToys <= 0) {
            HOOD_TOY.removeToyText();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that hood on ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep that hood on ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (HOOD_TOY.hasToy() && HOOD_TOY.isPunishmentAllowed()) {
        toys.add(HOOD_TOY);
    }

    if(NIPPLE_SUCKERS.isToyOn()) {
        if (maxToys <= 0) {
            NIPPLE_SUCKERS.removeToyText();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep those suckers on your nipples ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep those suckers on your nipples ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (NIPPLE_SUCKERS.hasToy() && NIPPLE_SUCKERS.isPunishmentAllowed() && currentBodyPosition !== BODY_POSITION.ON_STOMACH) {
        toys.add(NIPPLE_SUCKERS);
    }

    if (ANAL_HOOK_TOY.isToyOn()) {
        if (maxToys <= 0) {
            ANAL_HOOK_TOY.removeToyText();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that anal hook in ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep anal hook in' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (ANAL_HOOK_TOY.hasToy() && ANAL_HOOK_TOY.isPunishmentAllowed()) {
        toys.add(ANAL_HOOK_TOY);
    }

    if (E_STIM_TOY.isToyOn()) {
        if (maxToys <= 0) {
            E_STIM_TOY.removeToyText();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessageBasedOnSender('You will keep that estim on ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessageBasedOnSender('You will also keep that estim on ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (E_STIM_TOY.hasToy() && E_STIM_TOY.isPunishmentAllowed() && CBT_LIMIT.isAllowed()) {
        toys.add(E_STIM_TOY);
    }

    while (maxToys > 0 && toys.size() > 0) {
        let randomIndex = randomInteger(0, toys.size() - 1);
        switch (toys.get(randomIndex)) {
            //Gag
            case GAG_TYPE_BALL_GAG:
                if (isGaged() || !selectAndPutInGag()) {
                    maxToys++;
                }
                break;
            //Plug
            case BUTTPLUG_TOY:
                if (isAssInUse() || !putInButtplug()) {
                    maxToys++;
                }
                break;
            //Nipple clamps
            case NIPPLE_CLAMPS:
                if (!isNipplesOccupied() && putNippleClampsOn()) {

                } else {
                    //Increase by one because we were unable to put them on
                    maxToys++;
                }
                break;
            //Clamps
            case CLOTHESPINS_TOY:
                distributeClamps(randomInteger((level + 1) * 2, (level + 1) * 3));
                break;
            //Humbler
            case HUMBLER_TOY:
                if (isInChastity() || !putOnHumbler()) {
                    maxToys++;
                }
                break;
            //Nose Hook
            case NOSE_HOOK:
                if (!HOOD_TOY.isToyOn() && NOSE_HOOK.fetchToy()) {
                    sendMessageBasedOnSender('Put on the nose hook and tell me when you are done');
                    waitForDone();
                    NOSE_HOOK.setToyOn(true);
                } else {
                    maxToys++;
                }

                break;
            case HOOD_TOY:
                if (NOSE_HOOK.isToyOn() || !HOOD_TOY.fetchToy()) {
                    maxToys++;
                    break;
                }

                sendMessageBasedOnSender('Now put it on. Tell me when you are done %SlaveName%');
                waitForDone();
                HOOD_TOY.setToyOn(true);

                if(!isGaged() && hasAnyGag() && GAG_TYPE_BALL_GAG.isPunishmentAllowed()) {
                    selectAndPutInGag();
                }

                if(feelsLikePunishingSlave()) {
                    sendMessageBasedOnSender('I want you to blindfold yourself %SlaveName%');
                }

                break;
            case NIPPLE_SUCKERS:
                if(!isNipplesOccupied() && NIPPLE_SUCKERS.fetchToy()) {
                    sendMessageBasedOnSender('Now put the nipple suckers on %SlaveName%');
                    sendMessageBasedOnSender('Tell me when you are done');
                    waitForDone();
                    NIPPLE_SUCKERS.setToyOn(true);
                } else {
                    maxToys++;
                }

                break;
            case ANAL_HOOK_TOY:
                if(!isAssInUse() && ANAL_HOOK_TOY.fetchToy()) {
                    sendMessageBasedOnSender('Now put the anal hook in %SlaveName%');
                    sendMessageBasedOnSender('Tell me when you are done');
                    waitForDone();
                    ANAL_HOOK_TOY.setToyOn(true);
                    sendMessageBasedOnSender('Once you start I want you to attach the hook to your neck');
                    sendMessageBasedOnSender('Make the string as short as possible %Grin%');
                } else {
                    maxToys++;
                }

                break;
            case E_STIM_TOY:
                //Ignore estim plugs for bondage
                var bodyPart = getRandomBodyPartForEStim([E_STIM_PLUG_TOY]);

                if(bodyPart !== null && E_STIM_TOY.fetchToy()) {
                    var toysAttached = attachEStimToBodyPart(bodyPart);

                    //This toy is always attached
                    toysAttached.push(E_STIM_TOY);

                    setEstimToysOn(toysAttached, true, false);

                    var decide = decidePunishmentEstimModeAndLevel();
                    var mode = decide[0];
                    var level = decide[1];

                    sendMessageBasedOnSender('Once you start your timer I want you to enable mode ' + mode.id + ' on level ' + level);
                } else {
                    maxToys++;
                }

                break;
        }

        maxToys--;
        toys.remove(randomIndex);
    }
}

function getRandomRopeLength() {
    return randomInteger(5, 30);
}