const DEFAULT_TOY_COOLDOWN_MINUTES = 5;

{
    let pathLength = getPersonalityPath().length;
    let files = getScriptFilesInFolder('Toys', true);

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('Toys')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }

    loadDildos();
    loadButtplugs();

    sendDebugMessage('Loaded ' + CHASTITY_CAGES.length + ' chastity cages');
    sendDebugMessage('Loaded ' + DILDOS.length + ' dildos');
    sendDebugMessage('Loaded ' + buttplugs.length + ' buttplugs');

}


function interactWithButtplug(punishment) {
    if ((BUTTPLUG_TOY.isPunishmentAllowed() || !punishment && BUTTPLUG_TOY.isPlayAllowed()) && getAnalLimit() === LIMIT_ASKED_YES) {
        //Starting chance for plug or already plugged anyway
        let chance = Math.max(15, getVar(VARIABLE.ASS_LEVEL, 0) * 2);
        sendDebugMessage('Rolling for ' + chance + " to insert plug with random toy interaction");

        if (isChance(chance) || isPlugged()) {
            let action = shouldIncreasePlugSize();

            if (action === ACTION_BUTTPLUG_INCREASE_SIZE) {
                increasePlugSize();
            } else if (action === ACTION_BUTTPLUG_PUT_FIRST && hasButtplugToy()) {
                let answers = ['Let\'s prepare your %Ass% for what is to come %Grin%', 'Let\'s plug up that %Ass%', 'Let\'s not waste anymore time by leaving that %Ass% empty'];

                if (getVar(VARIABLE.ASS_LEVEL) >= 30) {
                    answers.push('You know that there is a very slim chance of you not being plugged and guess what - You won\'t be lucky now... %Lol%');
                }

                sendMessage(answers[randomInteger(0, answers.length - 1)]);
                putInButtplug();
            } else if (action === ACTION_BUTTPLUG_WAIT_FOR_TIME) {

            }
        }
    }
}

//QUALITY: Track already fetched toys to not ask again and instead go like grab x
//QUALITY: Could interact with buy new toys or fetish questions and better transition between different toys (additionally why not do this... etc.)
function interactWithRandomToys() {
    sendDebugMessage('Random toy interact');
    const punishment = isOngoingPunishment();

    let allowPain = true;

    //No random pain toys if we are just doing an easy punishment
    if (punishment && PUNISHMENT_CURRENT_LEVEL === PUNISHMENT_LEVEL.EASY && PUNISHMENT_OVERALL_LEVEL === PUNISHMENT_LEVEL.EASY) {
        allowPain = false;
    }

    if (hasButtplugToy()) {
        interactWithButtplug(punishment);
    }

    sendDebugMessage('Random toy buttplug done');

    if (COLLAR_TOY.hasToy() && COLLAR_TOY.decideToyOn() && feelsLikeShowingPower()) {
        putOnCollar();
    } else if (RULE_ALWAYS_WEAR_COLLAR.isActive() && RULE_ALWAYS_WEAR_COLLAR.shouldCheckRule()) {
        RULE_ALWAYS_WEAR_COLLAR.checkRule();
    }

    sendDebugMessage('Random toy collar done');

    if (isChance(20) && PAIN_LIMIT.isAllowed() && allowPain) {
        sendDebugMessage('Looking into clamp distribution');
        let toDistribute = (getTotalAttachedClamps() > 20 || isChance(35) && getTotalAttachedClamps() > 0) ? 0 : randomInteger(1, 4);
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
    }

    redistributeTooLongAttachedClamps();

    if (NIPPLE_CLAMPS.decideToyOff()) {
        let minutesSincePutOn = getMillisSinecDate(NIPPLE_CLAMPS.getLastUsage()) / (1000 * 60);

        //20 minutes should be max
        //QUALITY: Add personal limit/modifier for sub
        if (isChance(minutesSincePutOn * 5)) {
            removeNippleClamps();
        }
    }

    sendDebugMessage('Random toy pain done');

    //TODO: More interaction (forbid to talk etc.)
    //Do this after clamps because we might remove clamp from tongue after put on for spider gag
    if (wantsToRemoveGag()) {
        removeGag(false);
    } else {
        decideGag();
    }

    sendDebugMessage('Random toy gag done');

    if (hasBallsTied() && isChance(50)) {
        untieBalls();
    } else if (!hasBallsTied() && !isInChastity() && isChance(20) && allowPain && !BODY_PART_BALLS.isUsed()) {
        tieBalls();
    }

    sendDebugMessage('Random toy balls done');

    if (isKneeling() && !feelsLikeShowingPower() && decideStopKneeling()) {
        stopKneeling();
    } else if (!isKneeling() && feelsLikeShowingPower()) {
        startKneeling();
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
        removeButtplug(true);
    }

    if (COLLAR_TOY.isToyOn() && !RULE_ALWAYS_WEAR_COLLAR.isActive()) {
        removeCollar();
    }

    if (hasLingerieOn()) {
        sendMessage('Go ahead and undress and put your normal clothes back on %SlaveName%');
        sendMessage('Tell me when you are done', 0);
        waitForDone();
        removeAllLingerie();
    }

    //QUALITY: Specify
    sendMessage('Remove anything else attached to your body %SlaveName%');
    sendMessage('Tell me when you are done', 0);
    waitForDone();
}

function readyInput() {
    const answer = sendInput("Tell me when you are ready %SlaveName%", "Are you ready?", "Are you ready %SlaveName%?");

    while (true) {
        if (answer.isLike("ready", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Well then, better hurry up!", "Then don't waste my time and tell me when you are ready!", 0);
            answer.loop();
        }
    }
}

function fetchToy(toy, imagePath, amount = 0) {
    //Sub wasn't able to fetch this before so no need to ask again
    if (getVar('toy' + toy + 'UnableToFetch', false)) {
        if (amount > 0) {
            sendMessageBasedOnSender('Sadly you weren\'t able to get ' + amount + ' ' + pluralize(toy, amount) + ' before %GeneralTime% %EmoteSad%');
        } else {
            sendMessageBasedOnSender('Sadly you weren\'t able to get your ' + toy + ' before %GeneralTime% %EmoteSad%');
        }

        sendMessageBasedOnSender('So I am not gonna ask you again because I guess it does not change a thing');

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

            //Update the list of lovense toys
            fetchAvailableLovenseToys();

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
            sendMessageBasedOnSender("Are you done yet?", 0);
            answer.loop();
        }
    }

    return true;
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
            sendVirtualAssistantMessage("Play, punishment or both?", 0);
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
            return getVar(this.getVarName() + 'LastUsage', setDate().addDay(-30)).clone();
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

        getImagePath: function () {
            return "Images/Spicy/Toys/" + this.getImageName() + ".jpg";
        },

        getImageFolder: function () {
            let file = new java.io.File(this.getImagePath()).getParentFile();

            if (!file.exists()) {
                file.mkdirs();
            }

            return file;
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
            return fetchToy(name, this.getImagePath(), amount);
        },

        askForToy: function (variableName, imageName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            if (imageName === undefined) {
                imageName = this.getImageName();
            }

            sendVirtualAssistantMessage(capitalize(this.name) + "?", false);
            showPicture(this.getImagePath(), 0);

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
                    sendVirtualAssistantMessage("Play, punishment or both?", 0);
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
        },


        toString: function () {
            return serializeObject(this);
        },

        fromString: function (string) {
            return deserializeObject(this, string);
        },
    };
}

function createMultipleToy(name, variableName = undefined) {
    let toy = createToy(name);
    return extend(toy, {
        toyInstances: [],

        loadToyInstances: function () {
            if (!isVar(variableName)) {
                setVar(variableName, new java.util.ArrayList());
            } else {
                //Clear array
                this.toyInstances = [];

                let arrayList = tryGetArrayList(variableName);

                for (let x = 0; x < arrayList.size(); x++) {
                    let entry = arrayList.get(x);
                    this.toyInstances.push(this.createToyInstance().fromString(entry));
                }
            }
        },

        saveToyInstances: function () {
            let arrayList = new java.util.ArrayList();

            for (let y = 0; y < this.toyInstances.length; y++) {
                arrayList.add(this.toyInstances[y].toString());
            }

            setVar(variableName, arrayList);
        },

        getRandom: function () {
            return random(this.toyInstances);
        },

        getByName: function (name) {
            for (let y = 0; y < this.toyInstances.length; y++) {
                if (name.toUpperCase() === this.toyInstances[y].name.toUpperCase()) {
                    return this.toyInstances[y];
                }
            }

            return null;
        },

        openListGui: function () {
            let list = javafx.collections.FXCollections.observableArrayList();

            for (let x = 0; x < this.toyInstances.length; x++) {
                list.add(this.toyInstances[x].name);
            }

            let toyInstance = this;

            createToyListGUI(function (listView, event) {
                const selectedItem = listView.listView.getSelectionModel().getSelectedItem();
                if (selectedItem != null) {
                    toyInstance.showEditGui(toyInstance.getByName(selectedItem));
                }
            }, "High Heels", list)
        },

        hasToy: function () {
            return this.toyInstances.length > 0;
        },

        hasToyVar: function() {
            return getVar(this.getVarName(), false);
        },

        getToyOfType: function(type) {
            let toys = this.getToysOfType(type);

            if(toys.length === 0) {
                return undefined;
            }

            return random(toys);
        },

        getToysOfType: function(type) {
            return this.getToysOfTypes([type]);
        },

        getToysOfTypes: function(types) {
            let toys = [];

            for (let x = 0; x < this.toyInstances.length; x++) {
                if(types.indexOf(this.toyInstances[x].type) !== -1) {
                    toys.push(this.toyInstances[x]);
                }
            }

            return toys;
        },

        getToysNotOfTypes: function(types) {
            let toys = [];

            for (let x = 0; x < this.toyInstances.length; x++) {
                if(types.indexOf(this.toyInstances[x].type) === -1) {
                    toys.push(this.toyInstances[x]);
                }
            }

            return toys;
        },
    });
}

function askForDomChoose() {
    sendVirtualAssistantMessage("The Dommes prefer to use the toys whenever they want to and for whatever reason");
    sendVirtualAssistantMessage("However they can understand if you only want them to be used for playing or punishment");
    sendVirtualAssistantMessage("Do you want to leave it to your %DomHonorific% or chose yourself?", false);
    let answer = createInput("Her", "Me");

    let domChose = false;
    while (true) {
        if (answer.isLike("dom", "domme", replaceVocab('%DomHonorific%'), "her", "him", 'them', 'they')) {
            answer.clearOptions();
            sendVirtualAssistantMessage("You're quite a willing slave %Grin%");
            domChose = true;
            break;
        } else if (answer.isLike("me", "myself", "yourself")) {
            answer.clearOptions();
            sendVirtualAssistantMessage("%EmoteSad%");
            break;
        } else {
            sendVirtualAssistantMessage("Do you want to leave it to your %DomHonorific% or chose yourself?", 0);
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

    DILDO_TOY.askForToyAndUsage(domChose);

    //Skip buttplug and dildos if we are in the settings
    if (!settings) {
        if (BUTTPLUG_TOY.hasToy()) {
            if (buttplugs.length > 0 && !settings) {
                sendVirtualAssistantMessage('Since you already have buttplugs setup, we are not gonna setup any additional plugs now. You can always add new plugs in the main menu.');
            } else {
                sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different buttplugs do you have?', false);
                let answer = createInput();

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result <= 0) {
                            sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower", 0);
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
                        sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
                        answer.loop();
                    }
                }
            }
        }

        sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

        if (DILDO_TOY.hasToy()) {
            if (DILDOS.length > 0 && !settings) {
                sendVirtualAssistantMessage('Since you already have dildos setup, we are not gonna setup any additional dildos now. You can always add new dildos in the main menu.');
            } else {
                sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different dildos do you have?', false);
                let answer = createInput();

                while (true) {
                    if (answer.isInteger()) {
                        const result = answer.getInt();
                        if (result <= 0) {
                            sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower", 0);
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
                        sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
                        answer.loop();
                    }
                }
            }

            sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));
        }
    }

    BALL_CRUSHER_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    INFLATABLE_BUTT_PLUG.askForToyAndUsage(domChose);

    //Only if the sub has the toy we should ask this
    if (INFLATABLE_BUTT_PLUG.hasToy()) {
        INFLATABLE_BUTT_PLUG.askForVibration();
    }

    COLLAR_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    //In settings this is a separate thing
    if (!settings) {
        setupEStimToy(domChose, settings);
    }

    setupGags(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    PANTY_TOY.askForToyAndUsage(domChose, undefined, "basicLingerie");

    if (PANTY_TOY.hasToyVar() && !settings) {
        askForMultipleToyCount(PANTY_TOY);
    }

    BRA_TOY.askForToyAndUsage(domChose, undefined, "basicLingerie");

    if (BRA_TOY.hasToyVar() && !settings) {
        askForMultipleToyCount(BRA_TOY);
    }

    GARTER_BELT_TOY.askForToyAndUsage(domChose, undefined, "advancedLingerie");

    STOCKING_TOY.askForToyAndUsage(domChose, undefined, "advancedLingerie");

    if (STOCKING_TOY.hasToyVar() && !settings) {
        askForMultipleToyCount(STOCKING_TOY);
    }


    HIGH_HEEL_TOY.askForToyAndUsage(domChose, undefined);

    if (HIGH_HEEL_TOY.hasToyVar() && !settings) {
        askForMultipleToyCount(HIGH_HEEL_TOY);
    }

    HIGH_HEEL_LOCK.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    PARACHUTE_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    ANAL_BEADS_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    PROSTATE_VIBRATOR_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    BULLET_VIBRATOR_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    MAGIC_WAND_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    ICY_HOT_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    ENEMA_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    NOSE_HOOK.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    SOUND_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    URETHRAL_STRETCHER_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    HUMBLER_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    BALL_STRETCHER_TOY.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    FLESH_LIGHT.askForToyAndUsage(domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));

    CLOTHESPINS_TOY.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage('Okay next quite similar but not the same %Grin%');

    NIPPLE_CLAMPS.askForToyAndUsage(domChose);

    sendVirtualAssistantMessage('Okay now something yet again fairly similar but definitely more painful if used correctly %Grin%');

    CLOVER_CLAMPS.askForToyAndUsage(domChose);


    /*askForToy("Cock Ring");
    askForToyUsage("CockRing", domChose);
    sendVirtualAssistantMessage(random("Okay then...", "Next...", "Let's see...", "Moving on..."));*/
    unlockImages();
}

function askForMultipleToyCount(toyMultiple) {
    sendVirtualAssistantMessage('Okay %SlaveName%. Tell me, how many different ' + pluralize(toyMultiple.name) + ' do you have?', false);
    let answer = createInput();

    while (true) {
        if (answer.isInteger()) {
            const result = answer.getInt();
            if (result <= 0) {
                sendVirtualAssistantMessage("You can't choose a number equal to 0 or lower", 0);
                answer.loop();
            } else {
                sendVirtualAssistantMessage('We are gonna setup your ' + pluralize(toyMultiple.name) + ' now, one by one.');

                for (let x = 0; x < result; x++) {
                    toyMultiple.setupNewToy();
                }

                sendVirtualAssistantMessage('This should do it regarding ' + pluralize(toyMultiple.name));
                sendVirtualAssistantMessage('You can always setup new ' + pluralize(toyMultiple.name) + ' in the settings menu');
                break;
            }
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
            answer.loop();
        }
    }
}

function askForNewToyName(toyMultiple) {
    sendVirtualAssistantMessage('Please enter a name for your new ' + toyMultiple.name, 0);

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (toyMultiple.getByName(answer.getAnswer()) != null) {
            sendVirtualAssistantMessage('A ' + toyMultiple.name + ' with a similar name already exists. Please choose a different name.', 0);
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    return name;
}

function createToyListGUI(onClick, name, list) {
    const instance = Java.type('me.goddragon.teaseai.TeaseAI').application;
    const controller = instance.getController();

    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(name);

            let gridPane = createGridPaneGUI();
            gridPane.setPadding(10, 10, 10, 10);
            gridPane.setHGap(5);
            gridPane.setVGap(5);

            let row = 0;

            let listView = createListView();

            listView.setItems(list);

            gridPane.setConstraints(listView.listView, 0, row++);
            gridPane.getChildren().add(listView.listView);

            listView.setOnClick(function (event) {
                onClick(listView, event);
            });

            gridPane.addCloseButton(dialog, 0, row++);

            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
}

function createToySettingGUI(gridPane, imagePath) {
    gridPane.setPadding(10, 10, 10, 10);
    gridPane.setHGap(5);
    gridPane.setVGap(5);

    let row = 0;
    let image = createImageView();
    image.setImage(imagePath);
    image.setFitWidth(150);
    image.setPreserveRatio(true);
    image.setSmooth(true);
    image.setCache(true);
    gridPane.setConstraints(image.imageView, 1, row++);
    gridPane.getChildren().add(image.imageView);

    return row;
}
