const DEFAULT_TOY_COOLDOWN_MINUTES = 5;

{
    /*run("Toys/ChastityCage.js");
    run("Toys/Buttplug.js");
    run("Toys/Gag.js");
    run("Toys/Dildo.js");
    run("Toys/Lube.js");
    run("Toys/Clamps.js");
    run("Toys/Clamps.js");
    run("Toys/BallCrusher.js");
    run("Toys/Rope.js");
    run("Toys/Room.js");
    run("Toys/Device.js");
    run("Toys/Lingerie.js");
    run("Toys/Vibrator.js");
    run("Toys/Enema.js");*/

    let pathLength = getPersonalityPath().length;
    let files = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Toys').listFiles();

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('Toys')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }

    loadDildos();
    loadButtplugs();
    loadChastityCages();
}


function interactWithButtplug(punishment) {
    //TODO: Could interact with buy new toys or fetish questions and better transition between different toys (additionally why not do this... etc.)
    if ((BUTTPLUG_TOY.isPunishmentAllowed() || !punishment && BUTTPLUG_TOY.isPlayAllowed()) && getAnalLimit() === LIMIT_ASKED_YES) {
        //Starting chance for plug or already plugged anyway
        let chance = Math.max(15, getVar(VARIABLE.ASS_LEVEL, 0)) * 4;
        sendDebugMessage('Rolling for ' + chance + " to insert plug with random toy interaction");

        if (isChance(chance) || isPlugged()) {
            let action = shouldIncreasePlugSize();

            if (action === ACTION_BUTTPLUG_INCREASE_SIZE) {
                increasePlugSize();
            } else if (action === ACTION_BUTTPLUG_PUT_FIRST && hasButtplugToy()) {
                let answers = ['Let\'s prepare your %Ass% for what is up to come %Grin%', 'Let\'s plug up that %Ass%', 'Let\'s not waste anymore time by leaving that %Ass% empty'];

                if (getVar(VARIABLE.ASS_LEVEL) >= 30) {
                    answers.push('You know that there is a very slow chance of you not being plugged and guess what - You won\'t be lucky now... %Lol%');
                }

                sendMessage(answers[randomInteger(0, answers.length - 1)]);
                putInButtplug();
            } else if (action === ACTION_BUTTPLUG_WAIT_FOR_TIME) {

            }
        }
    }
}

//TODO: Track already fetched toys to not ask again and instead go like grab x
function interactWithRandomToys() {
    const punishment = isOngoingPunishment();

    let allowPain = true;

    //No random pain toys if we are just doing an easy punishment
    if (punishment && PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EASY && PUNISHMENT_OVERALL_LEVEL === PUNISHMENT_LEVEL.EASY) {
        allowPain = false;
    }

    interactWithButtplug(punishment);

    //TODO: Better decision? And check for rule collar always on
    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn() && isChance(20)) {
        putOnCollar();
    }

    if (isChance(20) && getPainLimit() === LIMIT_ASKED_YES && allowPain) {
        sendDebugMessage('Looking into clamp distribution');
        let toDistribute = getTotalAttachedClamps() > 20 || isChance(35) && getTotalAttachedClamps() > 0 ? 0 : randomInteger(1, 4);
        sendDebugMessage('Decided to attach ' + toDistribute + ' clamps while ' + getTotalAttachedClamps() + ' are already attached');

        if (toDistribute === 0 && getTotalAttachedClamps() > 0) {
            //If feels like punishing we will only redistribute the clamps and not remove any
            if (feelsLikePunishingSlave()) {
                sendDebugMessage('Redistributing clamps...');
                redistributeRandomClamps();
            } else {
                let toRemove = randomInteger(1, Math.max(1, Math.floor(getTotalAttachedClamps() / 2)));

                //Make sure to detach at least 2 or all of them if less than 2 are remaining
                toRemove = Math.min(getTotalAttachedClamps(), Math.max(2, toRemove));
                sendDebugMessage('Removing ' + toRemove + ' clamps');
                removeClamps(toRemove);
            }
        } else {
            distributeClamps(toDistribute);
        }

        if (NIPPLE_CLAMPS.decideToyOff() && isChance(25)) {
            removeNippleClamps();
        }
    }

    //TODO: More interaction (forbid to talk etc.)
    //Do this after clamps because we might remove clamp from tongue after put on for spider gag
    if (isGaged() && !isAnnoyedByTalking() && isChance(25)) {
        removeGag();
    } else {
        decideGag();
    }

    if (hasBallsTied() && isChance(50)) {
        untieBalls();
    } else if (!hasBallsTied() && !isInChastity() && isChance(20) && allowPain && !BODY_PART_BALLS.isUsed()) {
        tieBalls();
    }
}

/**
 * Gets the time in minutes that should pass before we swap out a toy
 * @returns {number}
 */
function getMinPlayTimeBeforeToySwap() {
    return 7;
}

function removeAllToys() {
    removeAllClamps();

    removeGag();

    removeNippleClamps();

    if (isPlugged()) {
        removeButtplug();
    }

    if (COLLAR_TOY.isToyOn()) {
        removeCollar();
    }

    //QUALITY: Specify
    sendMessage('Remove anything else attached to your body %SlaveName%');
    sendMessage('Tell me when you are done');
    waitForDone();
}

function readyInput() {
    const answer = sendInput("Tell me when you are ready %SlaveName%", "Are you ready?", "Are you ready %SlaveName%?");

    while (true) {
        if (answer.isLike("ready", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Well then, better hurry up!", "Then don't waste my time and tell me when you are ready!");
            answer.loop();
        }
    }
}

function fetchToy(toy, imagePath, amount = 0) {
    //Sub wasn't able to fetch this before so no need to ask again
    if (getVar('toy' + toy + 'UnableToFetch', false)) {
        return false;
    }

    if (amount > 0) {
        sendMessageBasedOnSender('Go ahead and %Retrieve% ' + amount + ' ' + pluralize(toy, amount), 0);
    } else {
        sendMessageBasedOnSender('Go ahead and %Retrieve% your ' + toy, 0);
    }

    if (imagePath !== undefined) {
        lockImages();
        showImage(imagePath, 3);
    } else {
        sleep(3);
    }

    sendMessageBasedOnSender("Tell me when you are ready to continue.", 0);

    const answer = createInput();
    while (true) {
        if (answer.isLike("done", "yes", "ready")) {
            if (imagePath !== undefined) {
                unlockImages();
            }

            sendMessageBasedOnSender("%Good%");
            break;
        } else if (answer.isLike("no", "don't", "can't")) {
            if (imagePath !== undefined) {
                unlockImages();
            }

            sendMessageBasedOnSender("What?!");
            sendMessageBasedOnSender("That is unacceptable!");
            sendMessageBasedOnSender("You should always have your toys around!");

            //If assistant we are gonna add punishment points otherwise change mood
            if (getCurrentSender() === SENDER_ASSISTANT) {
                sendMessageBasedOnSender('I am assigning you some punishment points!');
            } else {
                changeMeritHigh(true);
            }

            addPunishmentPoints(100, PUNISHMENT_REASON.POOR_BEHAVIOUR);

            sendMessageBasedOnSender("Well then....");

            //Store it temporarily, that sub wasn't able to fetch stuff today so we won't ask again
            setTempVar('toy' + toy + 'UnableToFetch', true);
            return false;
        } else {
            sendMessageBasedOnSender("Are you done yet?");
            answer.loop();
        }
    }

    return true;
}

function askForToy(toyName, variableName, imageName) {
    if (variableName === undefined) {
        variableName = decapitalize(toyName).replace(/ /g, "");
    }

    if (imageName === undefined) {
        imageName = variableName;
    }

    sendVirtualAssistantMessage(toyName + "?", false);
    showPicture("Images/Spicy/Toys/" + imageName + ".jpg");

    let answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar("toy" + variableName, true);
            sendVirtualAssistantMessage("%Good%");
            return true;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");

            if (isVar("toy" + variableName)) {
                delVar("toy" + variableName);
            }

            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    return false;
}

function askForToyUsage(toyName, domChose, variableName) {
    if (variableName === undefined) {
        variableName = decapitalize(toyName).replace(/ /g, "");
    }

    let toyVarName = 'toy' + variableName;

    //Sub disabled this toy
    if (getVar(toyVarName, false)) {
        return;
    }

    if (domChose) {
        setVar("toy" + variableName + "InteractionMode", TOY_BOTH_MODE);
        return;
    }

    sendVirtualAssistantMessage("Do you want the " + toyName + " to be used for punishments, play or both?", false);

    let answer = createInput();

    while (true) {
        if (answer.containsIgnoreCase("play")) {
            setVar("toy" + variableName + "InteractionMode", TOY_PLAY_MODE);
            break;
        } else if (answer.containsIgnoreCase("both")) {
            setVar("toy" + variableName + "InteractionMode", TOY_BOTH_MODE);
            break;
        } else if (answer.containsIgnoreCase("punishment")) {
            setVar("toy" + variableName + "InteractionMode", TOY_PUNISHMENT_MODE);
            break;
        } else {
            sendVirtualAssistantMessage("Play, punishment or both?");
            answer.loop();
        }
    }
}

function createToy(name) {
    return {
        name: name,

        hasToy: function () {
            return getVar(this.getVarName(), false);
        },

        setLastUsage: function () {
            setDate(this.getVarName() + 'LastUsage');
        },

        getLastUsage: function () {
            return getVar(this.getVarName() + 'LastUsage', setDate().addDay(-30));
        },

        setLastRemoval: function () {
            setDate(this.getVarName() + 'LastRemoval');
        },

        getLastRemoval: function () {
            return getVar(this.getVarName() + 'LastRemoval', setDate().addDay(-30));
        },

        getVarName: function () {
            return 'toy' + name.replace(/ /g, "");
        },

        wasUsedInActiveContext: function () {
            return getVar(this.getVarName() + 'Used', false);
        },

        setUsedInActiveContext: function (used) {
            return setTempVar(this.getVarName() + 'Used', used);
        },

        isToyOn: function () {
            return getVar(this.getVarName() + 'on', false);
        },

        removeToy: function () {
            this.setToyOn(false);
        },

        setToyOn: function (on) {
            setVar(this.getVarName() + 'on', on);

            if (on) {
                this.setLastUsage();
            } else {
                this.setLastRemoval();
            }
        },

        getImageName: function () {
            let split = name.split(' ');

            let imageName = '';
            for (let x = 0; x < split.length; x++) {
                if (x === 0) {
                    imageName += decapitalize(split[x]);
                } else {
                    imageName += capitalize(split[x]);
                }
            }

            return imageName;
        },

        setHasToy: function (hasToy) {
            setVar(this.getVarName(), hasToy);
        },

        askForToyAndUsage: function (domChose, variableName, imageName) {
            if (this.askForToy(variableName, imageName)) {
                this.askForToyUsage(domChose, variableName);
            }
        },

        decideToyOn: function (asked = false) {
            if (this.isToyOn()) {
                return false;
            }

            if (!this.getLastRemoval().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
                return false;
            }

            return true;
        },

        decideToyOff: function (asked = false) {
            if (!this.isToyOn()) {
                return false;
            }

            if (!this.getLastUsage().addMinute(DEFAULT_TOY_COOLDOWN_MINUTES).hasPassed()) {
                return false;
            }

            return true;
        },

        fetchToy: function (amount = 0) {
            return fetchToy(name, "Images/Spicy/Toys/" + this.getImageName() + ".jpg", amount);
        },

        askForToy: function (variableName, imageName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            if (imageName === undefined) {
                imageName = this.getImageName();
            }

            sendVirtualAssistantMessage(capitalize(this.name) + "?", false);
            showPicture("Images/Spicy/Toys/" + imageName + ".jpg", 0);

            setCurrentSender(SENDER_ASSISTANT);

            if (createYesOrNoQuestion()) {
                setVar(variableName, true);
                sendVirtualAssistantMessage("%Good%");
                return true;
            } else {
                //Delete var if sub does not have the toy
                if (isVar(variableName)) {
                    delVar(variableName);
                }

                sendVirtualAssistantMessage("%EmoteSad%");
            }

            setCurrentSender(SENDER_TAJ);

            return false;
        },

        askForToyUsage: function (domChose, variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            //Sub disabled this toy
            if (!getVar(variableName, false)) {
                return;
            }

            if (domChose) {
                setVar(variableName + "InteractionMode", TOY_BOTH_MODE);
                return;
            }

            sendVirtualAssistantMessage("Do you want the " + this.name + " to be used for punishments, play or both?", false);

            let answer = createInput();

            while (true) {
                if (answer.containsIgnoreCase("play")) {
                    setVar(variableName + "InteractionMode", TOY_PLAY_MODE);
                    break;
                } else if (answer.containsIgnoreCase("both")) {
                    setVar(variableName + "InteractionMode", TOY_BOTH_MODE);
                    break;
                } else if (answer.containsIgnoreCase("punishment")) {
                    setVar(variableName + "InteractionMode", TOY_PUNISHMENT_MODE);
                    break;
                } else {
                    sendVirtualAssistantMessage("Play, punishment or both?");
                    answer.loop();
                }
            }
        },

        isPlayAllowed: function (variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            let mode = getVar(variableName + "InteractionMode");

            return mode === undefined || mode === null || mode === TOY_PLAY_MODE || mode === TOY_BOTH_MODE;
        },

        isPunishmentAllowed: function (variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            let mode = getVar(variableName + "InteractionMode");

            return mode === undefined || mode === null || mode === TOY_PUNISHMENT_MODE || mode === TOY_BOTH_MODE;
        }
    };
}

function askForDomChoose() {
    sendVirtualAssistantMessage("Your %DomHonorific% prefers to use the toys whenever she wants to and for whatever reason");
    sendVirtualAssistantMessage("However she can understand if you only want them to be used for playing or punishment");
    sendVirtualAssistantMessage("Do you want to leave it to your %DomHonorific% or chose yourself?", false);
    let answer = createInput();

    let domChose = false;
    while (true) {
        if (answer.isLike("dom", "domme", replaceVocab('%DomHonorific%'), "her", "him")) {
            sendVirtualAssistantMessage("You're quite a willing slave %Grin%");
            domChose = true;
            break;
        } else if (answer.isLike("me", "myself", "yourself")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            break;
        } else {
            sendVirtualAssistantMessage("Do you want to leave it to your %DomHonorific% or chose yourself?");
            answer.loop();
        }
    }

    return domChose;
}

function setupToys(settings) {
    sendVirtualAssistantMessage("Let's do a quick setup of your toys");
    sendVirtualAssistantMessage("I'll show you some images of different stuff");
    sendVirtualAssistantMessage("You will respond with yes if you have it");
    sendVirtualAssistantMessage("You can also say yes if you have something similar that will work fine");
    sendVirtualAssistantMessage("Respond with no if you have nothing similar");
    sendVirtualAssistantMessage("Oh and one more thing...");

    let domChose = askForDomChoose();

    //Ask for this in settings too
    BUTTPLUG_TOY.askForToyAndUsage(domChose);

    askForToy("Dildo");
    askForToyUsage("Dildo", domChose);

    //Skip buttplug and dildos if we are in the settings
    if (!settings && hasButtplugToy()) {
        sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different buttplugs do you have?', false);
        answer = createInput();

        while (true) {
            if (answer.isInteger()) {
                const result = answer.getInt();
                if (result <= 0) {
                    sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                    answer.loop();
                } else {
                    sendVirtualAssistantMessage('We are gonna setup your buttplugs now, one by one.');

                    for (let x = 0; x < result; x++) {
                        setupNewButtplug();
                    }

                    sendVirtualAssistantMessage('This should do it regarding plugs');
                    sendVirtualAssistantMessage('You can always setup new buttplugs in the settings menu');
                    break;
                }
            } else {
                sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
                answer.loop();
            }
        }

        sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

        if (hasDildoToy()) {
            sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different dildos do you have?', false);
            answer = createInput();

            while (true) {
                if (answer.isInteger()) {
                    const result = answer.getInt();
                    if (result <= 0) {
                        sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower");
                        answer.loop();
                    } else {
                        sendVirtualAssistantMessage('We are gonna setup your dildos now, one by one.');

                        for (let x = 0; x < result; x++) {
                            setupNewDildo();
                        }

                        sendVirtualAssistantMessage('This should do it regarding dildos');
                        sendVirtualAssistantMessage('You can always setup new dildos in the settings menu');
                        break;
                    }
                } else {
                    sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
                    answer.loop();
                }
            }
        }

        sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    }

//TODO: Create toys as objects
    askForToy("Ball Crusher");
    askForToyUsage("BallCrusher", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    INFLATABLE_BUTT_PLUG.askForToyAndUsage(domChose);

    //Only if the sub has the toy we should ask this
    if (INFLATABLE_BUTT_PLUG.hasToy()) {
        INFLATABLE_BUTT_PLUG.askForVibration();
    }

    COLLAR_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    askForToy("Shock Collar");
    askForToyUsage("ShockCollar", domChose);

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    sendVirtualAssistantMessage('Now let\'s talk about e-stim devices');
    setupEStimToy(domChose);

    /*askForToy("EStim");
    askForToyUsage("EStim", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

//TODO: Improve estim setup
    if (isVar('toyEStim')) {
        sendVirtualAssistantMessage("Tell me what level of shock you consider to be quite painful", false)
        answer = createInput();

        while (true) {
            if (answer.isDouble()) {
                setVar("estimPainHigh", answer.getDouble());
                break;
            } else {
                sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
                answer.loop();
            }
        }

        sendVirtualAssistantMessage("Tell me what level of shock you consider to be somewhat painful", false)
        answer = createInput();

        while (true) {
            if (answer.isDouble()) {
                setVar("eStimPainMedium", answer.getDouble());
                break;
            } else {
                sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
                answer.loop();
            }
        }

        sendVirtualAssistantMessage("Tell me what level of shock you consider to be less painful and maybe even pleasant", false)
        answer = createInput();

        while (true) {
            if (answer.isDouble()) {
                setVar("eStimPainLow", answer.getDouble());
                break;
            } else {
                sendVirtualAssistantMessage("This is not a valid number. Please just type a number such as 1, or 2.5");
                answer.loop();
            }
        }
    }*/

    setupGags(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Girl friend");

    BASIC_LINGERIE.askForToyAndUsage(domChose, undefined, "basicLingerie");
    ADVANCED_LINGERIE.askForToyAndUsage(domChose, undefined, "advancedLingerie");

    PARACHUTE_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    showImage("Images/Spicy/Toys/HotSauce.jpg", 3);
    sendVirtualAssistantMessage("Hot sauce or icy hot? Toothpaste can work too for the time being.", false);
    showPicture("Images/Spicy/Toys/HotSauce.jpg");

    answer = createInput();
    const variableName = "hotSauce";
    while (true) {
        if (answer.isLike("yes")) {
            setVar("toy" + variableName, true);
            sendVirtualAssistantMessage("%Good%");
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    askForToyUsage("HotSauce", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Vibrator");
    askForToyUsage("Vibrator", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Enema Kit");
    askForToyUsage("EnemaKit", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Sounds");
    askForToyUsage("Sounds", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    HUMBLER_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    CLOTHESPINS_TOY.askForToyAndUsage(domChose);

//TODO: Different type of nipple clamps
    sendVirtualAssistantMessage('Okay next quite similar but not the same %Grin%');
    NIPPLE_CLAMPS.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    askForToy("Cock Ring");
    askForToyUsage("CockRing", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
    unlockImages();
}