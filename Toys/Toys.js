
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
}



function interactWithRandomToys() {
    //TODO: Could interact with buy new toys or fetish questions and better transition between different toys (additionally why not do this... etc.)

    //Buttplug interaction
    if (isPlugged()) {
        if (isVar(VARIABLE_LAST_PLUG_DATE) && getVar(VARIABLE_LAST_PLUG_DATE).addMinute(randomInteger(7, 10)).hasPassed()) {
            if (currentPlug !== biggestButtplug && isChance(getVar(VARIABLE_ASS_LEVEL, 0) * 3)) {
                increasePlugSize();
            }
        }
    } else if (hasButtplugToy() && isChance(getVar(VARIABLE_ASS_LEVEL, 0) * 3) && getAnalLimit() === LIMIT_ASKED_YES) {
        let answers = ['Let\'s prepare your %Ass% for what is up to come %Grin%', 'Let\'s plug up that %Ass%', 'Let\'s not waste anymore time by leaving that %Ass% empty'];

        if (getVar(VARIABLE_ASS_LEVEL) >= 30) {
            answers.push('You know that there is a very slow chance of you not being plugged during my sessions and guess what - You won\'t be lucky now... %Lol%');
        }

        sendMessage(answers[randomInteger(0, answers.length - 1)]);
        putInButtplug();
    }

    //TODO: Better decision?
    if(!COLLAR_TOY.isToyOn() && isChance(20)) {
        putOnCollar();
    }

    if (isChance(20) && getPainLimit() === LIMIT_ASKED_YES) {
        let toDistribute = getTotalAttachedClamps() > 20 || isChance(35) && getTotalAttachedClamps() > 0 ? 0 : randomInteger(1, 4);

        if (toDistribute === 0 && getTotalAttachedClamps() > 0) {
            removeClamps(randomInteger(1, Math.max(1, getTotalAttachedClamps() / 2)));
        } else {
            distributeClamps(toDistribute);
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
    } else if (!hasBallsTied() && !isInChastity() && isChance(20)) {
        tieBalls();
    }
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
    if(getVar('toy' + toy + 'UnableToFetch', false)) {
        return false;
    }

    if(amount > 0) {
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
            if(getCurrentSender() === SENDER_ASSISTANT) {
                sendMessageBasedOnSender('I am assigning you some punishment points!');
                addPunishmentPoints(100);
            } else {
                changeMeritHigh(true);
            }

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

    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            setVar("toy" + variableName, true);
            sendVirtualAssistantMessage("%Good%");
            return true;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");
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
    if(getVar(toyVarName, false)) {
        return;
    }

    if (domChose) {
        setVar("toy" + variableName + "InteractionMode", TOY_BOTH_MODE);
        return;
    }

    sendVirtualAssistantMessage("Do you want the " + toyName + " to be used for punishments, play or both?", false);

    answer = createInput();

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
            return getVar(this.getVarName());
        },

        getVarName: function () {
            return 'toy' + name.replace(/ /g, "");
        },

        isToyOn: function() {
          return getVar(this.getVarName() + 'on', false);
        },

        setToyOn: function(on) {
          setVar(this.getVarName() + 'on', on);
        },

        getImageName: function () {
            let split = name.split(' ');

            let imageName = '';
            for(let x = 0; x < split.length; x++) {
                if(x === 0) {
                    imageName += decapitalize(split[x]);
                } else {
                    imageName += capitalize(split[x]);
                }
            }

            return imageName;
        },

        setHasToy : function (hasToy) {
            setVar(this.getVarName(), hasToy);
        },

        askForToyAndUsage : function(domChose, variableName, imageName) {
            if(this.askForToy(variableName, imageName)) {
                this.askForToyUsage(domChose, variableName);
            }
        },

        fetchToy : function(amount = 0) {
            return fetchToy(name, "Images/Spicy/Toys/" + this.getImageName() + ".jpg", amount);
        },

        askForToy : function(variableName, imageName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            if (imageName === undefined) {
                imageName = this.getImageName();
            }

            sendVirtualAssistantMessage(capitalize(this.name) + "?", false);
            showPicture("Images/Spicy/Toys/" + imageName + ".jpg", 0);

            setCurrentSender(SENDER_ASSISTANT);

            if(createYesOrNoQuestion()) {
                setVar(variableName, true);
                sendVirtualAssistantMessage("%Good%");
                return true;
            } else {
                sendVirtualAssistantMessage("%EmoteSad%");
            }

            setCurrentSender(SENDER_TAJ);

            return false;
        },

        askForToyUsage : function(domChose, variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            //Sub disabled this toy
            if(getVar(variableName, false)) {
                return;
            }

            if (domChose) {
                setVar(variableName + "InteractionMode", TOY_BOTH_MODE);
                return;
            }

            sendVirtualAssistantMessage("Do you want the " + this.name + " to be used for punishments, play or both?", false);

            answer = createInput();

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

        isPlayAllowed: function(variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            let mode = getVar(variableName + "InteractionMode");

            return mode === TOY_PLAY_MODE || mode === TOY_BOTH_MODE;
        },

        isPunishmentAllowed: function(variableName) {
            if (variableName === undefined) {
                variableName = this.getVarName();
            }

            let mode = getVar(variableName + "InteractionMode");

            return mode === TOY_PUNISHMENT_MODE || mode === TOY_BOTH_MODE;
        }
    };
}