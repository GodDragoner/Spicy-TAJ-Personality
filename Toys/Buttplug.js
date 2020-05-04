const ANY_LUBE = 0;
const SPIT_LUBE = 1;
const TIGER_HOT_LUBE = 2;
const TOOTHPASE_LUBE = 3;
const NO_LUBE = 4;

const ACTION_BUTTPLUG_INCREASE_SIZE = 0;
const ACTION_BUTTPLUG_PUT_FIRST = 1;
const ACTION_BUTTPLUG_WAIT_FOR_TIME = 2;

const BUTTPLUG_BASE_STYLE = {
    CRYSTAL: 0,
    FLUFFY_TAIL: 1,
    PIG_TAIL: 2,
    PLAIN: 3,
};

const buttplugs = [];
let smallestButtplug = null;
let biggestButtplug = null;
let currentPlug = null;

const BUTTPLUG_TOY = createToy('buttplugs');
BUTTPLUG_TOY.removeToy = function () {
    removeButtplug();
};

function updateSessionButtplugs() {
    for (let x = 0; x < buttplugs.length; x++) {
        buttplugs[x].usedInSession = false;
        buttplugs[x].clean = true;
    }
}

function hasButtplugWithBaseStyle(baseStyle) {
    return getButtplugWithBaseStyle(baseStyle) !== null;
}

function getButtplugWithBaseStyle(baseStyle) {
    let relevantPlugs = [];
    for (let x = 0; x < buttplugs.length; x++) {
        if (buttplugs[x].baseStyle === baseStyle) {
            relevantPlugs.push(buttplugs[x]);
        }
    }

    if(relevantPlugs.length === 0) {
        return null;
    }

    return random(relevantPlugs);
}

//TODO: With ASM enabled this will only work very rarely because most of the time we have cleaned the plug afterwards
function getRandomUncleanedButtplug() {
    for (let x = 0; x < buttplugs.length; x++) {
        if (buttplugs[x].usedInSession && !buttplugs[x].clean && currentPlug !== buttplugs[x]) {
            return buttplugs[x];
        }
    }

    return null;
}

function getRandomCleanButtplug() {
    for (let x = 0; x < buttplugs.length; x++) {
        if (!buttplugs[x].usedInSession || buttplugs[x].clean) {
            return buttplugs[x];
        }
    }

    return null;
}

function getButtplugClosestBelow(diameter) {
    let currentPlug = null;
    for (let x = 0; x < buttplugs.length; x++) {
        //We must be <= the given diameter and bigger than the current diameter
        if (buttplugs[x].diameter <= diameter && (currentPlug === null || buttplugs[x].diameter > currentPlug.diameter)) {
            currentPlug = buttplugs[x];
        }
    }

    return currentPlug;
}

function hasButtplugToy() {
    return buttplugs.length > 0;
}

function isPlugged() {
    return getVar(VARIABLE.IS_PLUGGED, false);
}

function shouldIncreasePlugSize() {
    let minTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 5);
    let maxTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 3);

    if (getVar(VARIABLE.ASS_LEVEL, 0) >= 20) {
        minTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 6);
        maxTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 5);
    } else if (getVar(VARIABLE.ASS_LEVEL, 0) >= 30) {
        minTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 7);
        maxTime = Math.ceil(getVar(VARIABLE.DEVOTION) / 6);
    }

    if (currentPlug !== biggestButtplug) {
        if (isPlugged()) {
            if (BUTTPLUG_TOY.getLastUsage().addMinute(randomInteger(minTime, maxTime)).hasPassed()) {
                return ACTION_BUTTPLUG_INCREASE_SIZE;
            }
        } else if (BUTTPLUG_TOY.wasUsedInActiveContext() && BUTTPLUG_TOY.getLastUsage().addMinute(randomInteger(minTime, maxTime)).hasPassed()) {
            return ACTION_BUTTPLUG_INCREASE_SIZE;
        } else {
            return ACTION_BUTTPLUG_PUT_FIRST;
        }
    }

    return ACTION_BUTTPLUG_WAIT_FOR_TIME;
}

function isUnexperiencedDiamater(diameter) {
    return diameter >= 2.8;
}

function isVeryUnexperiencedDiamater(diameter) {
    return diameter >= 3.5;
}

/*function tryIncreasePlugSize() {
    if(currentPlug !== biggestButtplug) {
        if(isPlugged()) {
            if (isVar(VARIABLE.LAST_PLUG_DATE) && getVar(VARIABLE.LAST_PLUG_DATE).addMinute(randomInteger(7, 10)).hasPassed()) {
                increasePlugSize();
            }
        } else if (isVar(VARIABLE.LAST_PLUG_DATE)) {
            if(getVar(VARIABLE.LAST_PLUG_DATE).addMinute(randomInteger(7, 10)).hasPassed()) {
                putInButtplug();
            }
        } else {
            putInButtplug();
        }
    }
}*/

function increasePlugSize() {
    if (isPlugged()) {
        removeButtplug();
        sendMessage(random('Let\'s widen that ass even more', 'Your ass won\'t be empty for long', 'Let\'s increase the size of your plug', 'We just removed that plug to make room for the next bigger one') + ' %Grin%');
    }

    return putInButtplug(true);
}

function putInButtplug(forceBigger = false) {
    let plug = getAnalPlug(0, 0, forceBigger);
    return putinChosenButtplug(plug);
}

function putinChosenButtplug(plug) {
    sendMessage("%SlaveName%");

    if (!plug.fetchButtplug()) {
        return false;
    }

    if (isPlugged()) {
        removeButtplug();
    }

    if (feelsEvil() && isChance(50) && getVar(VARIABLE.ASS_LEVEL) > 15) {
        if (!isVar(VARIABLE.LAST_ICE_CUBE_UP_ASS_DATE) || getDate(VARIABLE.LAST_ICE_CUBE_UP_ASS_DATE).addMinute(10).hasPassed()) {
            sendMessage('But before we are gonna stick that buttplug up your %Ass%');

            let iceCubes = randomInteger(2, 5);
            if (askAndFetchIceCubes(iceCubes)) {
                if (isVar(VARIABLE.LAST_ICE_CUBE_UP_ASS_DATE)) {
                    sendMessage('Yet again %Grin%');
                    sendMessage('Push them up your ass one by one %Grin%');
                    sendMessage('And make sure that nothing sips out when you push the new ones in');
                    sendMessage('It must be getting cold in there with all those cubes up your ass %Lol%');
                } else {
                    let answer = sendInput('%KnowWhatsNext%', 5);

                    if (!answer.isTimeout()) {
                        if (answer.isLike('ass', 'anal', 'butt')) {
                            changeMeritLow(false);
                            sendMessage('I guess you know me pretty well %Grin%');
                        }
                    }

                    sendMessage('I want you to push those ice cubes up your ass one by one');
                    sendMessage('Afterwards we are gonna plug your %Ass% and let them slowly melt inside you %Grin%');
                }

                sendMessage('Tell me when you are done...');
                waitForDone();
                sendMessage('How is it feeling? Cold? %Grin%');
                setTempVar(VARIABLE.LAST_ICE_CUBE_UP_ASS_DATE, setDate());
            }
        }
    }

    const lubeType = getAssLubeType(getMood());

    if (lubeType == ANY_LUBE) {
        lubeUpToyWithLube(random("plug", "buttplug"));
    } else if (lubeType === SPIT_LUBE) {
        lubeUpToyWithSpit(random("plug", "buttplug"), true);
    } else if (lubeType === TOOTHPASE_LUBE) {
        lubeUpToyWithToothpaste(random("plug", "buttplug"));
    } else if (lubeType === TIGER_HOT_LUBE) {
        lubeUpToyWithTigerHot(random("plug", "buttplug"));
    } else {
        sendMessage("Today I don't you to use any lube %Grin%");
    }

    sendMessage("Now %SlaveName%");

    if (isChance(getStrictnessForCharacter() * 10) && getVar(VARIABLE.ASS_LEVEL) >= 30) {
        sendMessage("Push it in quickly");
        sendMessage("I don't care whether it hurts");
    } else {
        if (isChance(50) && getVar(VARIABLE.ASS_LEVEL) >= 30) {
            sendMessage("Put that plug on the ground");
            sendMessage("You already know " + random("what I am gonna make you do now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now"));
            sendMessage("I want you to slowly sit down on that plug and push it all the way up your ass");
            sendMessage("So get ready", 3);
            sendMessage("Squat above it", 5);
            sendMessage("And now slowly lower your ass down on that plug", 5);
            sendMessage("Let it slowly slip into you", 5);
            sendMessage(random("Can you feel the shape of it inside of you already?", "Can you feel it making its way into you?", "Can you feel it slowly filling your dirty hole?"));
            sendMessage("Go all the way down until your ass cheeks are touching the floor and the plug is all the way in");
        } else {
            sendMessage("Put the tip of the plug on your asshole", 5);
            sendMessage("Rub the tip gently along your ass crack", 5);
            sendMessage("Now...");

            sendMessage("Carefully start pushing that plug into your ass");
            sendMessage("Push it slowly and gently...");

            if (isUnexperiencedDiamater(plug.diameter) && getVar(VARIABLE.ASS_LEVEL) < 30 || isVeryUnexperiencedDiamater(plug.diameter)) {
                sendMessage("Until you reach the point where it starts hurting a bit");
                sendMessage("Now hold that position", 3);
                sendMessage("Let that plug slip out again");
                sendMessage("And rest for a second...", 5);
                sendMessage("Start over...");
                sendMessage("Gently push that plug into your ass");
                sendMessage("Push it a bit further this time");
                sendMessage("Hold the position again", 3);
                sendMessage("Aaaaand...");

                if (isVeryUnexperiencedDiamater(plug.diameter)) {
                    sendMessage("Let that plug slip out again");
                    sendMessage("Now...");
                    sendMessage("This time it is gonna go all the way in %Grin%");
                    sendMessage("Starting pushing it in");
                }

                sendMessage("Get it all the way in there");
            } else {
                sendMessage("Push it all the way in...");
            }
        }
    }

    let answer = sendInput("Tell me when you are done %SlaveName%");
    while (true) {
        if (answer.isLike("done", "yes")) {
            sendMessage("%Good%");
            break;
        } else {
            sendMessage("Have you plugged yourself like a good %SlaveName%?");
            answer.loop();
        }
    }

    if (plug.vibrating && isChance(40)) {
        sendMessage('Now activate the vibration of your plug %SlaveName% %Grin%', 5);
        sendMessage(random('You paid for it so we better make use of that now %EmoteHappy%', 'No reason to leave that feature unused is there? %EmoteHappy%', 'Let\'s see if I can drive you crazy like this %GeneralTime%'));
    }

    BUTTPLUG_TOY.setUsedInActiveContext(true);
    setTempVar(VARIABLE.IS_PLUGGED, true);
    BUTTPLUG_TOY.setLastUsage();

    //Plug was used and is no longer clean
    plug.usedInSession = true;
    plug.clean = false;

    currentPlug = plug;

    return true;
}

function getButtplugForTask() {
    return getButtplugClosestBelow(getMaxStartingDiameter());
}

function getMaxStartingDiameter() {
    let diameter = smallestButtplug.diameter;

    let assLevel = getVar(VARIABLE.ASS_LEVEL);

    return Math.max(diameter, assLevel / 7.5);
}

function getMaxDiameterIncrease() {
    let maxDiameterIncrease = 1;

    let assLevel = getVar(VARIABLE.ASS_LEVEL);

    if (assLevel >= 30) {
        maxDiameterIncrease = 0.75;
    } else if (assLevel >= 23) {
        maxDiameterIncrease = 0.5;
    } else if (assLevel >= 15) {
        maxDiameterIncrease = .25;
    }

    return maxDiameterIncrease;
}


function getAnalPlug(minLength = 0, minThickness = 0, forceBigger = true) {
    //Get the max used thickness today to make sure we don't go too big too quickly
    //In the rare case of the biggest dildo being thicker than our biggest plug we need to watch for that
    let maxUsedPlugThickness = Math.min(biggestButtplug.diameter, getVar(VARIABLE.MAX_DILDO_THICKNESS_TODAY, 0));

    //If we want to force bigger and haven't been given a min thickness then we will make it bigger than the biggest thing we used today to make sure we go up
    if (forceBigger && minThickness === 0) {
        //Make sure our min thickness does not exceed the biggest plug we have-
        minThickness = Math.min(maxUsedPlugThickness + 0.1, biggestButtplug.diameter);
    }

    let availablePlugs = [];


    //Max diameter increase
    let maxDiameterIncrease = getMaxDiameterIncrease();

    //TODO: Handle min length too (smallest plug etc.)

    //Should be smallest buttplug size or if for example ass level 30 at least 3.5 (allows progression to go faster at start of session)
    let allowedDefaultMaxDiameter = Math.max(smallestButtplug.diameter, Math.ceil(getVar(VARIABLE.ASS_LEVEL, 0) / 10) + 0.5);

    while (availablePlugs.length === 0 && buttplugs.length !== 0) {
        for (let y = 0; y < buttplugs.length; y++) {
            let buttplug = buttplugs[y];

            //Do we fulfil the min thickness and length?
            if (buttplug.diameter >= minThickness && buttplug.length >= minLength) {
                //Don't over extent with too big plugs too quickly
                if (buttplug.diameter >= maxUsedPlugThickness && buttplug.diameter <= Math.max(allowedDefaultMaxDiameter, maxUsedPlugThickness + maxDiameterIncrease)) {
                    availablePlugs.push(buttplug);
                }
            }
        }

        if (availablePlugs.length === 0) {
            //Seems like we don't have any plug within our given diameter increase range so we are gonna increase our range
            maxDiameterIncrease += 0.25;

            if (minLength > 0) minLength -= 0.5;
            //if(minThickness > 0) minThickness -= 0.5;
        }
    }

    if (availablePlugs.length === 0) {
        return null;
    }

    let plug = availablePlugs[randomInteger(0, availablePlugs.length - 1)];

    setTempVar(VARIABLE.MAX_DILDO_THICKNESS_TODAY, Math.max(getVar(VARIABLE.MAX_DILDO_THICKNESS_TODAY, 0), plug.diameter));

    return plug;
}

function removeButtplug(end = false) {
    if (!isPlugged()) {
        return;
    }

    if (isChance(30)) {
        sendMessage("%SlaveName%");
        sendMessage("I want you to remove that buttplug without using your hands");
        sendMessage(random("Use your ass muscles", "Clench your muscles", "Just squeeze your ass muscles") + " and push it all the way out");
        if (getStrictnessForCharacter() == 0 || isChance(100 - getStrictnessForCharacter() * 30)) {
            sendMessage("Slowly...");
        } else {
            sendMessage("Do it as fast as possible! %Grin%");
        }

        if (isVeryUnexperiencedDiamater(currentPlug.diameter)) {
            sendMessage("I know it might " + random("be painful", "hurt", "be unpleasant"));
        } else {
            sendMessage("I know it might " + random("be difficult", "be complicated", "be unpleasant"));
        }

        continueHurtResponse();

        let answer = sendInput("Tell me when you are done %SlaveName%");
        while (true) {
            if (answer.isLike("done", "yes")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("Have you pushed the plug out yet?");
                answer.loop();
            }
        }
    } else {
        sendMessage("I want you to remove the plug from your %Ass%");

        if (isChance(10)) {
            sendMessage("But don't pull it all the way out yet %Grin%");
            sendMessage("Pull it until the biggest part of the plug is spreading your ass apart");
            sendMessage("Keep it there until I tell you to move on");
            sleep(randomInteger(5, 10));
            sendMessage("And now push it all the way back in %Lol%");
            sendMessage("Let's do that again");
            sendMessage("Pull it out until the thickest part of the plug is spreading your sphincter");
            sendMessage("Hold it...");
            sleep(randomInteger(5, 10));
            if (isChance(70)) {
                if (isChance(50)) {
                    sendMessage("Just let go and if the plug pops out you are done");
                    sendMessage("If it slips back in you'll have to get it out again I guess %EmoteHappy%");
                } else {
                    endLastPlugPull();
                }
            } else {
                sendMessage("Back into your ass it goes %EmoteHappy%");
                sendMessage("One more time");
                sendMessage("Pull and hold it in place...");
                sleep(randomInteger(5, 10));
                if (isChance(30)) {
                    if (isChance(50)) {
                        sendMessage("Just let go and if the plug pops out you are done");
                        sendMessage("If it slips back in you'll have to get it out again I guess %EmoteHappy%");
                    } else {
                        sendMessage("I think I am enjoying this too much to stop yet %Grin%");
                        sendMessage("Slip it back in %SlaveName%");
                        sendMessage("Okay, let's do this yet another time");
                        sendMessage("Pull and hold it in place...");
                        sleep(randomInteger(5, 10));
                        endLastPlugPull();
                    }
                } else {
                    endLastPlugPull();
                }
            }
        } else {
            sendMessage("Pull it out");

            if (getStrictnessForCharacter() === 0 || isChance(100 - getStrictnessForCharacter() * 30)) {
                sendMessage("Slowly...");
            } else {
                sendMessage("Do it as fast as possible! %Grin%");
            }
        }

        let answer = sendInput("Tell me when you are ready to continue.");
        while (true) {
            if (answer.isLike("done", "yes")) {
                sendMessage("%Good%");
                break;
            } else {
                sendMessage("Are you done yet?");
                answer.loop();
            }
        }
    }

    if (getASMLimit() === LIMIT_ASKED_YES) {
        let choice = randomInteger(ASM_CLEAN_TYPE_GAG, ASM_CLEAN_TYPE_LICK);

        //No buttplug gag at the end because it's useless
        if (end) {
            choice = randomInteger(ASM_CLEAN_TYPE_BLOW, ASM_CLEAN_TYPE_LICK);
        }

        if (doButtplugASMClean(choice)) {
            //Plug was cleaned
            currentPlug.clean = true;
        }
    }

    currentPlug = null;
    setTempVar(VARIABLE.IS_PLUGGED, false);
}

function endLastPlugPull() {
    if (isChance(30)) {
        sendMessage("I think I like this");
        sendMessage("Why don't you keep it like this for another few seconds? %Grin%");
        sleep(randomInteger(5, 15));
        sendMessage("%Good%");
    }

    sendMessage("Okay you are allowed to remove it completely now");
}


function loadButtplugs() {
    if (!isVar('buttplugs')) {
        setVar('buttplugs', new java.util.ArrayList());
    } else {
        let arrayList = getVar('buttplugs');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);
            let buttplug = createButtplug().fromString(entry);
            buttplugs.push(buttplug);

            //Find smallest plug
            if (smallestButtplug == null || smallestButtplug.diameter > buttplug.diameter) {
                smallestButtplug = buttplug;
            }

            //Find biggest plug
            if (biggestButtplug == null || biggestButtplug.diameter < buttplug.diameter) {
                biggestButtplug = buttplug;
            }
        }
    }
}

function saveButtplugs() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < buttplugs.length; y++) {
        arrayList.add(buttplugs[y].toString());
    }

    setVar('buttplugs', arrayList);
}

function getButtplugByName(name) {
    for (let y = 0; y < buttplugs.length; y++) {
        if (name.toUpperCase() === buttplugs[y].name.toUpperCase()) {
            return buttplugs[y];
        }
    }

    return null;
}

function setupNewButtplug() {
    sendVirtualAssistantMessage('Please enter a name for your new buttplug', 0);

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (getButtplugByName(answer.getAnswer()) != null) {
            sendVirtualAssistantMessage('A buttplug with a similar name already exists. Please choose a different name.', 0);
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    sendVirtualAssistantMessage('Please make sure to add a picture of your buttplug named like your buttplug to your Toys/Buttplugs folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the buttplugss folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(getButtplugImagePath(name), 5);

    sendVirtualAssistantMessage('Next please tell me the length of the buttplug in centimeters (measure everything that\'s insertable)', 0);
    answer = createInput();
    let length = -1;

    while (true) {
        if (answer.isDouble()) {
            length = answer.getDouble();

            if (length <= 8) {
                sendVirtualAssistantMessage('I see... Nothing too long');
                sendVirtualAssistantMessage('Buttplugs don\'t have to be long anyway');
                sendVirtualAssistantMessage('It\'s all about that diameter %Grin%');
            } else if (length <= 12) {
                sendVirtualAssistantMessage('This one will definitely go quite far up your ass %Grin%');
            } else if (length <= 16) {
                sendVirtualAssistantMessage('That\'s quite long');
                sendVirtualAssistantMessage('I hope you have no issues with sticking it completely up your %Ass% %Grin%');
            } else {
                sendVirtualAssistantMessage('That\'s almost the length of some dildos!');
                sendVirtualAssistantMessage('This will definitely make your %DomHonorific% proud %EmoteHappy%');
            }

            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now please tell me the diameter of the buttplug in centimeters (choose the biggest piece of the buttplug to measure)', 0);
    answer = createInput();
    let diameter = -1;

    while (true) {
        if (answer.isDouble()) {
            diameter = answer.getDouble();

            if (diameter <= 3) {
                sendVirtualAssistantMessage('A small one huh?');
                sendVirtualAssistantMessage('Well we need something to start with don\'t we?');
            } else if (diameter <= 5.5) {
                sendVirtualAssistantMessage('Not too small but not too big');
                sendVirtualAssistantMessage('Medium buttplugs are always good for daily usage %Grin%');
            } else if (diameter <= 6.5) {
                sendVirtualAssistantMessage('Wow, that is quite big');
                sendVirtualAssistantMessage('I hope for your sake that you can fit that one');
                sendVirtualAssistantMessage('Because %DomHonorific% %DomName% will definitely make you fit that one %Lol%');
            } else if (diameter <= 7.5) {
                sendVirtualAssistantMessage('This one will certainly make you gape');
                sendVirtualAssistantMessage('And there is nothing that %DomHonorific% %DomName% loves more than making her subs gape %Lol%');
            } else {
                sendVirtualAssistantMessage('That\'s certainly a huge plug');
                sendVirtualAssistantMessage('Well even if you can\'t fit it right now we will make that work');
                sendVirtualAssistantMessage('Trust me. %DomHonorific% %DomName% has her ways %Lol%');
            }

            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    let material = MATERIAL.SILICON;

    sendVirtualAssistantMessage('Great. Now...');
    sendVirtualAssistantMessage('Is it made out of metal, glass or silicon?', 0);
    answer = createInput('metal', 'glass', 'silicon');

    while (true) {
        if (answer.isLike("metal")) {
            material = MATERIAL.METAL;
            break;
        } else if (answer.isLike("glass")) {
            material = MATERIAL.GLASS;
            break;
        } else if (answer.isLike("silicon")) {
            material = MATERIAL.SILICON;
            break;
        } else {
            sendVirtualAssistantMessage('Is it made out of glass, metal or silicon?');
            answer.loop();
        }
    }

    answer.clearOptions();

    let baseStyle = BUTTPLUG_BASE_STYLE.PLAIN;


    sendVirtualAssistantMessage('%Now%');
    sendVirtualAssistantMessage('Is the base of the plug plain, a crystal, a fluffy tail or a pig tail?', 0);
    answer = createInput('Plain', 'Crystal', 'Fluffy Tail', 'Pig Tail');

    while (true) {
        if (answer.isLike("Plain")) {
            break;
        } else if (answer.isLike("crystal")) {
            baseStyle = BUTTPLUG_BASE_STYLE.CRYSTAL;
            break;
        } else if (answer.isLike("fluffy")) {
            baseStyle = BUTTPLUG_BASE_STYLE.FLUFFY_TAIL;
            break;
        } else if (answer.isLike("pig")) {
            baseStyle = BUTTPLUG_BASE_STYLE.PIG_TAIL;
            break;
        }  else {
            sendVirtualAssistantMessage('Is the base of the plug plain, a crystal, a fluffy tail or a pig tail?');
            answer.loop();
        }
    }

    answer.clearOptions();

    let textured = false;
    let vibrating = false;
    let hollow = false;
    let tbase = false;

    sendVirtualAssistantMessage('Is there anything else special about it? (Textured, Hollow, Vibrating, T-Base)', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            sendVirtualAssistantMessage("%Good%");
            sendVirtualAssistantMessage('Then we are continuing...');

            sendVirtualAssistantMessage('Does it have the possibility to vibrate?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    vibrating = true;
                    sendVirtualAssistantMessage('This should be fun %Grin%');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Is it hollow/has a hole in the middle?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    hollow = true;
                    sendVirtualAssistantMessage('Interesting. We\'ll see how we can integrate this %Lol%');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Does it have a special texture to it? (Rippled etc.)', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    textured = true;
                    sendVirtualAssistantMessage('Going for that intense feeling are we?');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Does it have a "T" based base instead of a round one?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    tbase = true;
                    sendVirtualAssistantMessage('This is great for long term wearing %Grin%');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Finishing setup...');
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            sendVirtualAssistantMessage('But we all need basic toys right? %Grin%');
            sendVirtualAssistantMessage('Finishing setup...');
            break;
        } else {
            sendVirtualAssistantMessage(YES_OR_NO);
            answer.loop();
        }
    }

    buttplugs.push(createButtplug(name, diameter, length, vibrating, textured, material, hollow, baseStyle, tbase));

    saveButtplugs();

    sendVirtualAssistantMessage('Saved your new toy');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function createButtplug(name, diameter, length, vibrating, textured, material, hollow, baseStyle, tbase) {
    return {
        name: name,
        diameter: diameter,
        length: length,
        vibrating: vibrating,
        textured: textured,
        material: material,
        hollow: hollow,
        baseStyle: baseStyle,
        tbase: tbase,

        getImagePath: function () {
            return 'Images/Spicy/Toys/Buttplugs/' + this.name + '.*';
        },

        fetchButtplug: function () {
            return fetchToy(this.name, this.getImagePath());
        },

        toString: function () {
            return serializeObject(this);
        },

        fromString: function (string) {
            return deserializeObject(this, string);
        },
    }
}

function getButtplugImagePath(name) {
    return 'Images/Spicy/Toys/Buttplugs/' + name + '.*';
}
