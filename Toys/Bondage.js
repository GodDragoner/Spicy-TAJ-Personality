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
                sendMessage('Chain your hands and ankles together and then connect them with a rope of roughly ' + getRandomRopeLength() * 2 + ' cm length');
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
        sendMessage('%InAddition%...');
        feetTie.sendInstructions();
    } else {
        general.sendInstructions();
    }

    if (currentBodyPosition === BODY_POSITION.ON_STOMACH && isNipplesClamped()) {
        //We are on the stomach and should free the nipples
        removeAnythingOnNipples();
    }

    let toys = new java.util.ArrayList();

    sendMessage('Now let\'s see how I can put the finishing touches on this setup %Grin%');

    let keepInCounter = 0;

    if (isGaged()) {
        if (maxToys <= 0) {
            removeGag();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessage('You will keep that gag in ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessage('You will also keep that gag in ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (hasAnyGag() && GAG_TYPE_BALL_GAG.isPunishmentAllowed()) {
        toys.add(0);
    }


    if (isPlugged()) {
        if (maxToys <= 0) {
            removeButtplug();
        } else {
            interactWithButtplug(true);
            maxToys--;

            if (keepInCounter === 0) {
                sendMessage('You will stay plugged ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessage('You will also stay plugged ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (hasButtplugToy() && BUTTPLUG_TOY.isPunishmentAllowed()) {
        toys.add(1);
    }

    if (isNipplesClamped()) {
        if (maxToys <= 0) {
            removeNippleClamps();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessage('You will keep those clamps on your nipples ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessage('You will also keep those clamps on your nipples ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (currentBodyPosition !== BODY_POSITION.ON_STOMACH) {
        toys.add(2);
    }

    if (getTotalAttachedClamps() > 0) {
        if (maxToys <= 0) {
            removeAllClamps();
        } else {
            maxToys--;
            keepInCounter++;

            if (keepInCounter === 0) {
                sendMessage('You will keep those clamps ' + random('on', 'attached to') + ' your body ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessage('You will also keep those clamps ' + random('on', 'attached to') + ' your body ' + random('for this', '') + ' %SlaveName%');
            }
        }
    } else {
        toys.add(3);
    }

    if (HUMBLER_TOY.isToyOn()) {
        if (maxToys <= 0) {
            removeHumbler();
        } else {
            maxToys--;

            if (keepInCounter === 0) {
                sendMessage('You will keep that humbler on ' + random('for this', '') + ' %SlaveName%');
            } else {
                sendMessage('You will also keep that humbler on ' + random('for this', '') + ' %SlaveName%');
            }

            keepInCounter++;
        }
    } else if (HUMBLER_TOY.hasToy() && HUMBLER_TOY.isPunishmentAllowed()) {
        toys.add(4);
    }

    while (maxToys > 0 && toys.size() > 0) {
        let randomIndex = randomInteger(0, toys.size() - 1);
        switch (toys.get(randomIndex)) {
            //Gag
            case 0:
                if (!selectAndPutInGag()) {
                    maxToys++;
                }
                break;
            //Plug
            case 1:
                if (!putInButtplug()) {
                    maxToys++;
                }
                break;
            //Nipple clamps
            case 2:
                if (!isNipplesClamped() && putNippleClampsOn()) {

                } else {
                    //Increase by one because we were unable to put them on
                    maxToys++;
                }
                break;
            //Clamps
            case 3:
                distributeClamps(randomInteger((level + 1) * 2, (level + 1) * 3));
                break;
            //Humbler
            case 4:
                if (!putOnHumbler()) {
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