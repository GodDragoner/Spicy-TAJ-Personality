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
            if (currentPlug !== biggestButtplug && isChance(getVar(VARIABLE_ASS_LEVEL, 0)*3)) {
                removeButtplug();
                sendMessage(random('Let\'s widen that ass even more', 'Your ass won\'t be empty for long', 'Let\'s increase the size of your plug', 'We just removed that plug to make room for the next bigger one') + ' %Grin%');
                putInButtplug(true);
            }
        }
    } else if (hasButtplugToy() && isChance(getVar(VARIABLE_ASS_LEVEL, 0)*3) && getAnalLimit() === LIMIT_ASKED_YES) {
        let answers = ['Let\'s prepare your %Ass% for what is up to come %Grin%', 'Let\'s plug up that %Ass%', 'Let\'s not waste anymore time by leaving that %Ass% empty'];

        if(getVar(VARIABLE_ASS_LEVEL) >= 30) {
            answers.push('You know that there is a very slow chance of you not being plugged during my sessions and guess what - You won\'t be lucky now... %Lol%');
        }

        sendMessage(answers[randomInteger(0, answers.length - 1)]);
        putInButtplug();
    }

    //TODO: More interaction (forbid to talk etc.)
    if(isGaged() && !isAnnoyedByTalking() && isChance(25)) {
        removeGag();
    } else if(hasBallGag()) {
        if(isAnnoyedByTalking() || isChance(15)) {
            putInGag();
        }
    }

    //TODO: Collar

    if(isChance(20) && getPainLimit() === LIMIT_ASKED_YES) {
        let toDistribute = getTotalAttachedClamps() > 20 || isChance(35) && getTotalAttachedClamps() > 0? 0 : randomInteger(1, 4);

        if(toDistribute === 0) {
            sendMessage('You may remove ' + randomInteger(1, Math.max(1, getTotalAttachedClamps()/2)) + ' clamps from your body');
        } else {
            distributeClamps(toDistribute);
        }
    }

    if(hasBallsTied() && isChance(50)) {
        untieBalls();
    } else if(!hasBallsTied() && !isInChastity() && isChance(20)) {
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

function fetchToy(toy, imagePath) {
    sendMessage("Go ahead and " + random("fetch", "get", "retrieve") + " your " + toy, 0);

    if (imagePath !== undefined) {
        lockImages();
        showImage(imagePath, 3);
    } else {
        sleep(3);
    }

    const answer = sendInput("Tell me when you are ready to continue.");
    while (true) {
        if (answer.isLike("done", "yes", "ready")) {
            if (imagePath !== undefined) {
                unlockImages();
            }

            sendMessage("%Good%");
            break;
        } else if (answer.isLike("no", "don't", "can't")) {
            if (imagePath !== undefined) {
                unlockImages();
            }

            sendMessage("What?!");
            sendMessage("That is unacceptable!");
            sendMessage("You should always have your toys around!");
            changeMeritHigh(true);
            sendMessage("Well then....");
            return false;
        } else {
            sendMessage("Are you done yet?");
            answer.loop();
        }
    }

    return true;
}