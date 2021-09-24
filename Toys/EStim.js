const E_STIM_TOY = createToy("e stim");

E_STIM_TOY.removeToyText = function () {
    if (!E_STIM_TOY.hasToy() || !E_STIM_TOY.isToyOn()) {
        return false;
    }

    sendMessage('You may remove the estim toy and put it aside %SlaveName%');
    sendMessage('Tell me when you are done');
    waitForDone();

    E_STIM_TOY.setToyOn(false);
    E_STIM_PLUG_TOY.setToyOn(false);
    E_STIM_STRAPS.setToyOn(false);
    E_STIM_PADS.setToyOn(false);
    E_STIM_CAGE.setToyOn(false);

    return true;
};

E_STIM_TOY.setMaxLevel = function(value) {
    setVar(this.getVarName() + 'maxLevel', value);
};

E_STIM_TOY.getMaxLevel = function() {
    return getVar(this.getVarName() + 'maxLevel', -1);
};

E_STIM_TOY.hasToy = function() {
    return getVar(this.getVarName(), false) && E_STIM_MODES.length > 0;
};

E_STIM_TOY.hasToyBasic = function() {
    return getVar(this.getVarName(), false);
};

const E_STIM_PLUG_TOY = createToy("e stim plug");
const E_STIM_STRAPS = createToy("e stim straps");
const E_STIM_PADS = createToy("e stim pads");

const E_STIM_CAGE = getChastityCageWithBool('estim');

let E_STIM_MODES = [];

let CURRENT_E_STIM_BODY_PARTS = [];

//Load all existing modes
for (let x = 0; x < getVar(VARIABLE.E_STIM_MODES, 0); x++) {
    createEStimMode();
}

sendDebugMessage('Loaded ' + E_STIM_MODES.length + ' e stim modes');

function getRandomBodyPartForEStim(toIgnore = []) {
    let bodyPartList = [];

    if(E_STIM_PADS.hasToy() && toIgnore.indexOf(E_STIM_PADS) === -1) {
        if(!BODY_PART_BALLS.isUsed(E_STIM_TOY)) {
            sendDebugMessage('Pushing E-Stim Balls to body parts');
            bodyPartList.push(BODY_PART_BALLS);
        }

        /*if(!BODY_PART_NIPPLE_L.isUsed(E_STIM_TOY)) {
            sendDebugMessage('Pushing E-Stim nipples to body parts');
            bodyPartList.push(BODY_PART_NIPPLE_L);
        }*/
    }

    if(E_STIM_STRAPS.hasToy() && !BODY_PART_PENIS_SHAFT.isUsed(E_STIM_TOY) && toIgnore.indexOf(E_STIM_STRAPS) === -1) {
        sendDebugMessage('Pushing E-Stim shaft to body parts');
        bodyPartList.push(BODY_PART_PENIS_SHAFT)
    }

    if(E_STIM_PLUG_TOY.hasToy() && toIgnore.indexOf(E_STIM_PLUG_TOY) === -1) {
        sendDebugMessage('Pushing E-Stim ass to body parts');
        bodyPartList.push(BODY_PART_ASS);
    }

    //Use estim cage now that it's here already
    if(!isUndefined(E_STIM_CAGE) && isInChastity() && currentChastityCage === E_STIM_CAGE) {
        bodyPartList = [];
        bodyPartList.push(BODY_PART_PENIS_SHAFT);
        sendDebugMessage('Pushing E-Stim shaft to body parts because of chastity cage');
    }

    return random(bodyPartList);
}


function setEstimToysOn(toyList, on, prevChastity = false) {
    let inChastityBeforeEstim = isInChastity() && (on || prevChastity);

    //Enable all toys
    for (let x = 0; x < toyList.length; x++) {
        if(inChastityBeforeEstim && currentChastityCage === toyList[x]) {
            //Nothing, because we already have that cage on (estim cage)
        } else {
            toyList[x].setToyOn(on);
        }
    }
}

function attachEStimToBodyPart(bodyPart) {
    let toysAttached = [];

    switch (bodyPart) {
        case BODY_PART_PENIS_SHAFT:
            if(isInChastity() && currentChastityCage === E_STIM_CAGE) {
                toysAttached.push(E_STIM_CAGE);

                sendMessage('I want you to attach the diodes to your estim chastity cage %Grin%');

                sendMessage('Tell me when you are done');
                waitForDone(10000);
            } else {
                if (!E_STIM_STRAPS.fetchToy()) {
                    break;
                }

                toysAttached.push(E_STIM_STRAPS);

                sendMessage('I want you to attach one to the base of %MyYour% %Cock%');
                sendMessage('And one right around your cock head %Grin%');

                sendMessage('Tell me when you are done');
                waitForDone(10000);
            }

            break;
       /* case BODY_PART_NIPPLE_L:
            if (!E_STIM_PADS.fetchToy()) {
                break;
            }

            toysAttached.push(E_STIM_PADS);

            sendMessage('I want you to one to each of your nipples %Grin%');

            if (NIPPLE_CLAMPS.isToyOn() || BODY_PART_NIPPLE_L.currentClamps > 0) {
                sendMessage('And yes you will keep those clamps on %Lol%');
            }

            sendMessage('Tell me when you are done');
            waitForDone(10000);
            break;*/
        case BODY_PART_BALLS:
            if (!E_STIM_PADS.fetchToy()) {
                break;
            }

            toysAttached.push(E_STIM_PADS);

            sendMessage('I want you to one to each side of your balls %Grin%');
            sendMessage('Tell me when you are done');
            waitForDone(10000);
            break;
        case BODY_PART_ASS:
            if (!E_STIM_PLUG_TOY.fetchToy()) {
                break;
            }

            if (isPlugged()) {
                removeButtplug();
            }

            toysAttached.push(E_STIM_PLUG_TOY);

            sendMessage('I want you to put it in and attach that plug to your device %Grin%');

            if (isInChastity()) {
                sendMessage('If you need a second diode attached then attach it to preferably your balls or shaft');
            } else {
                sendMessage('If you need a second diode attached then attach it to your penis head');
            }

            sendMessage('Tell me when you are done');
            waitForDone(10000);
            break;
    }

    return toysAttached;
}

function canEStimInChastity() {
    return !isInChastity() || currentChastityCage.material === MATERIAL.METAL && !currentChastityCage.isFullSizedBelt();
}

function getRandomPainEStimMode(possibleLevel = PAIN_LEVEL_LOW, minDifferenceToHighPain = 0) {
    sendDebugMessage('Searching for estim pain mode with level ' + possibleLevel + ' and min difference to high ' + minDifferenceToHighPain + ' in ' + E_STIM_MODES.length + ' available modes');

    let modesAvailable = [];

    while(modesAvailable.length === 0) {
        for(let x = 0; x < E_STIM_MODES.length; x++) {
            let mode = E_STIM_MODES[x];
            let painLevel = mode.getPainLevel(possibleLevel);
            let highLevel = mode.getPainLevel(PAIN_LEVEL_HIGH);
            sendDebugMessage('Found e-stim mode ' + mode.id + ' with device level ' + painLevel + ' and highest level ' + highLevel);

            //Check if the required level is available for that mode and make sure that we have at least a difference up to x
            if(mode.getPainLevel(possibleLevel) > -1 && (highLevel - painLevel) >= minDifferenceToHighPain) {
                modesAvailable.push(mode);
            }
        }

        //Lower for potential next search
        if(minDifferenceToHighPain > 0) {
            minDifferenceToHighPain--;
        } else {
            break;
        }
    }

    return random(modesAvailable);
}

function createEStimMode() {
    let index = E_STIM_MODES.length + 1;

    let mode = {
        id: index,

        getName: function () {
            return 'eStimMode' + this.id;
        },

        getInteractionMode: function () {
            getVar(this.getName() + 'InteractionMode');
        },

        setInteractionMode: function (interactionMode) {
            setVar(this.getName() + 'InteractionMode', interactionMode);
        },

        isPlayAllowed: function () {
            let mode = this.getInteractionMode();

            return mode === TOY_PLAY_MODE || mode === TOY_BOTH_MODE;
        },

        isPunishmentAllowed: function () {
            let mode = this.getInteractionMode();

            return mode === TOY_PUNISHMENT_MODE || mode === TOY_BOTH_MODE;
        },

        setPleasureLevel: function (level) {
            setVar(this.getName() + 'Pleasure', level);
        },

        getPleasureLevel: function () {
            return getVar(this.getName() + 'Pleasure', -1);
        },

        setPainLevel: function (level, value) {
            setVar(this.getName() + 'Pain' + level, value);
        },

        getPainLevel: function (level) {
            return getVar(this.getName() + 'Pain' + level, -1);
        },

        //QUALITY: More diverse sentences
        enableMode: function() {
          sendMessage('Go ahead and enable mode ' + this.id);
        },

        enableLevel: function(value) {
            sendMessage('Put the level of your e-stim device on ' + value);
        }
    };

    E_STIM_MODES.push(mode);

    return mode;
}

function setupEStimToy(domChose, settings = false) {

    //Ask for dom choose if not given
    if(domChose === null || domChose === undefined) {
        domChose = askForDomChoose();
    }

    if(settings) {
        //Empty array only during settings, not initial setup
        E_STIM_MODES = [];
    }

    E_STIM_TOY.askForToyAndUsage(domChose);

    //Does not own toy
    if(!E_STIM_TOY.hasToyBasic()) {
        return;
    }

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    E_STIM_PLUG_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    E_STIM_STRAPS.askForToy();

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    E_STIM_PADS.askForToy();

    sendVirtualAssistantMessage('Now...');

    if(E_STIM_MODES.length > 0) {
        sendVirtualAssistantMessage('Since you already have some estim modes setup, I am not gonna go through this again now. You can set them up later in the settings again');
    } else {
        sendVirtualAssistantMessage('Tell me %SlaveName%');

        setCurrentSender(SENDER_ASSISTANT);

        let modes = createIntegerInput('How many different modes does this device have?', 1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between 1 and 1000');

        setVar(VARIABLE.E_STIM_MODES, modes);
        sendVirtualAssistantMessage('Great! %EmoteHappy%');

        let maxLevel = createIntegerInput('What is the max level you can put this device on?', 1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between 1 and 1000');
        E_STIM_TOY.setMaxLevel(maxLevel);


        sendVirtualAssistantMessage('Next we should deal with each mode on its own');

        sendVirtualAssistantMessage('This will probably require you to take out that device and play around with it');
        sendVirtualAssistantMessage('So go ahead and get it ready for me');
        sendVirtualAssistantMessage('Just tell me when you are done');
        waitForDoneVirtualAssistant(1000);
        sendVirtualAssistantMessage('%Good%');

        let chastity = isInChastity();

        if (chastity) {
            sendVirtualAssistantMessage('You are allowed to take off your chastity device for this');
            unlockChastityKey();
            sendVirtualAssistantMessage('Tell me when you took it off');
            waitForDoneVirtualAssistant();
        }

        sendVirtualAssistantMessage('For best measurement somehow attach something of it to %MyYour% %Cock%');

        for (let x = 0; x < modes; x++) {
            let mode = createEStimMode();

            if (domChose) {
                mode.setInteractionMode(TOY_BOTH_MODE);
            } else {
                sendVirtualAssistantMessage("Do you want mode " + mode.id + " to be used for punishments, play or both?", false);

                let answer = createInput();

                while (true) {
                    if (answer.containsIgnoreCase("play")) {
                        mode.setInteractionMode(TOY_PLAY_MODE);
                        break;
                    } else if (answer.containsIgnoreCase("both")) {
                        mode.setInteractionMode(TOY_BOTH_MODE);
                        break;
                    } else if (answer.containsIgnoreCase("punishment")) {
                        mode.setInteractionMode(TOY_PUNISHMENT_MODE);
                        break;
                    } else {
                        sendVirtualAssistantMessage("Play, punishment or both?", 0);
                        answer.loop();
                    }
                }

                sendVirtualAssistantMessage('Now that that\'s set, let\'s talk about the different levels');
            }


            sendVirtualAssistantMessage('Go ahead and enable mode ' + mode.id);
            sendVirtualAssistantMessage('If at any point there is no level that fits the description just put in -1');

            let pleasure = createIntegerInput('What level for mode ' + mode.id + ' would you consider pleasurable?', -1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between -1 and 1000');
            let lowPain = createIntegerInput('What level for mode ' + mode.id + ' would you consider inflicting a small amount of pain?', -1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between -1 and 1000');
            let mediumPain = createIntegerInput('What level for mode ' + mode.id + ' would you consider inflicting a decent amount of pain?', -1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between -1 and 1000');
            let highPain = createIntegerInput('What level for mode ' + mode.id + ' would you consider inflicting an almost unbearable amount of pain?', -1, 1000, 'Please give me just a number like 1 or 5', 'Please only give me a number between -1 and 1000');

            mode.setPleasureLevel(pleasure);
            mode.setPainLevel(PAIN_LEVEL_LOW, lowPain);
            mode.setPainLevel(PAIN_LEVEL_MEDIUM, mediumPain);
            mode.setPainLevel(PAIN_LEVEL_HIGH, highPain);

            sendVirtualAssistantMessage('Moving on...');
        }

        setCurrentSender(SENDER_TAJ);
        sendVirtualAssistantMessage('That should be it regarding your E-Stim device');
        sendVirtualAssistantMessage('%DomHonorific% %DomName% will sure have a lot of fun with this torturous device %Grin%');

        //Lock chastity again if we removed it before
        if (chastity) {
            sendVirtualAssistantMessage('Put on your chastity device again %SlaveName% and tell me when you are done');
            waitForDoneVirtualAssistant();
            lockAwayChastityKey();
        }
    }
}

function decidePunishmentEstimModeAndLevel() {
    let painLevel = PAIN_LEVEL_LOW;
    let mood = getMood();

    if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.MEDIUM) {
        painLevel = PAIN_LEVEL_MEDIUM;
    } else if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.HARD) {
        painLevel = random(PAIN_LEVEL_MEDIUM, PAIN_LEVEL_HIGH);
    } else if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EXTREME) {
        painLevel = PAIN_LEVEL_HIGH;
    }

    let mode = getRandomPainEStimMode(painLevel);
    let level = mode.getPainLevel(painLevel);

    //Increase by one if we are extreme and want to punish
    if (PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EXTREME && feelsLikePunishingSlave() && level < E_STIM_TOY.getMaxLevel()) {
        sendMessage('You know what?');
        sendMessage('I want you to suffer because you freaking deserve it %SlaveName%');
        sendMessage('So I am this time going to break you and your old pathetic limits');
        level++;
    }

    return [mode, level];
}