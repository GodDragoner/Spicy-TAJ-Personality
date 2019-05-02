const ANY_LUBE = 0;
const SPIT_LUBE = 1;
const TIGER_HOT_LUBE = 2;
const TOOTHPASE_LUBE = 3;
const NO_LUBE = 4;

const buttplugs = [];
let smallestButtplug = null;
let biggestButtplug = null;
let currentPlug = null;

const BUTTPLUG_TOY = createToy('buttplugs');


function updateSessionButtplugs() {
    for(let x = 0; x < buttplugs.length; x++) {
        buttplugs[x].usedInSession = false;
        buttplugs[x].clean = true;
    }
}

function getRandomUncleanedButtplug() {
    for(let x = 0; x < buttplugs.length; x++) {
        if(buttplugs[x].usedInSession && !buttplugs[x].clean && currentPlug !== buttplugs[x]) {
            return buttplugs[x];
        }
    }

    return null;
}

function getRandomCleanButtplug() {
    for(let x = 0; x < buttplugs.length; x++) {
        if(!buttplugs[x].usedInSession || buttplugs[x].clean ) {
            return buttplugs[x];
        }
    }

    return null;
}

function hasButtplugToy() {
    return getVar("toyButtPlugs");
}

function isPlugged() {
    return getVar(VARIABLE_IS_PLUGGED, false);
}

function increasePlugSize() {
    removeButtplug();
    sendMessage(random('Let\'s widen that ass even more', 'Your ass won\'t be empty for long', 'Let\'s increase the size of your plug', 'We just removed that plug to make room for the next bigger one') + ' %Grin%');
    return putInButtplug(true);
}

function putInButtplug(forceBigger = false) {
    sendMessage("%SlaveName%");

    let plug = getAnalPlug(0, 0, forceBigger);

    if (!fetchButtplugToy(plug.name)) {
        return false;
    }

    if(isPlugged()) {
        removeButtplug();
    }

    if(feelsEvil() && isChance(50) && getVar(VARIABLE_ASS_LEVEL) > 15) {
        if(!isVar(VARIABLE_LAST_ICE_CUBE_UP_ASS_DATE) || getDate(VARIABLE_LAST_ICE_CUBE_UP_ASS_DATE).addMinute(10).hasPassed()) {
            sendMessage('But before we are gonna stick that buttplug up your %Ass%');

            let iceCubes = randomInteger(2, 5);
            if(fetchIceCubes(iceCubes)) {
                if(isVar(VARIABLE_LAST_ICE_CUBE_UP_ASS_DATE)) {
                    sendMessage('Yet again %Grin%');
                    sendMessage('Push them up your ass one by one %Grin%');
                    sendMessage('And make sure they nothing sips out when you push the new ones in');
                    sendMessage('It must be getting cold in there with all those cubes up your ass %Lol%');
                } else {
                    let answer = sendInput('%KnowWhatsNext%', 5);

                    if(!answer.isTimeout()) {
                        if(answer.isLike('ass', 'anal', 'butt')) {
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
                setTempVar(VARIABLE_LAST_ICE_CUBE_UP_ASS_DATE, setDate());
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

    if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 10) && getVar(VARIABLE_ASS_LEVEL) >= 30) {
        sendMessage("Push it in quickly");
        sendMessage("I don't care whether it hurts");
    } else {
        if (isChance(50) && getVar(VARIABLE_ASS_LEVEL) >= 30) {
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

            if (!isVar("pluggedToday") && getVar(VARIABLE_ASS_LEVEL) < 30) {
                sendMessage("Until you reach the point where it starts hurting a bit");
                sendMessage("Now hold that position", 3);
                sendMessage("Let that plug slip out again");
                sendMessage("And rest for a second...", 5);
                sendMessage("Start over...");
                sendMessage("Gently push that plug into your ass");
                sendMessage("Push it a bit further this time");
                sendMessage("Hold the position again", 3);
                sendMessage("Aaaaand...");
                sendMessage("Let that plug slip out again");
                sendMessage("Now...");
                sendMessage("This time it is gonna go all the way in %Grin%");
                sendMessage("Starting pushing it in");
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

    setTempVar("pluggedToday", true);
    setTempVar(VARIABLE_IS_PLUGGED, true);
    setDate(VARIABLE_LAST_PLUG_DATE);

    //Plug was used and is no longer clean
    plug.usedInSession = true;
    plug.clean = false;

    currentPlug = plug;

    return true;
}

function getAssLubeType(mood, level = getVar(VARIABLE_ASS_LEVEL)) {
    if (level < 30) {
        return ANY_LUBE;
    }

    const lubeTypes = [];

    if (mood === VERY_PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 10)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === PLEASED_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 20)) {
            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === NEUTRAL_MOOD) {
        if (isChance(ACTIVE_PERSONALITY_STRICTNESS * 25)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                if (hasToothpaste()) {
                    lubeTypes.push(TOOTHPASE_LUBE);
                }

                lubeTypes.push(NO_LUBE);
            } else {
                lubeTypes.push(SPIT_LUBE);
            }
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === ANNOYED_MOOD) {
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 20)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                lubeTypes.push(NO_LUBE);

                if (hasTigerHot()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            if (hasToothpaste()) {
                lubeTypes.push(TOOTHPASE_LUBE);
            }

            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    } else if (mood === VERY_ANNOYED_MOOD) {
        if (isChance((ACTIVE_PERSONALITY_STRICTNESS + 1) * 25)) {
            if (ACTIVE_PERSONALITY_STRICTNESS > 0) {
                if (hasTigerHot()) {
                    lubeTypes.push(TIGER_HOT_LUBE);
                }
            }

            lubeTypes.push(NO_LUBE);

            if (hasToothpaste()) {
                lubeTypes.push(TOOTHPASE_LUBE);
            }

            lubeTypes.push(SPIT_LUBE);
        } else {
            lubeTypes.push(ANY_LUBE);
        }
    }

    if (lubeTypes.length === 0) return ANY_LUBE;
    return lubeTypes[randomInteger(0, lubeTypes.length - 1)];
}

function getButtplugSize() {
    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if (assLevel < 15) {
        return "small";
    } else if (assLevel < 30) {
        return random("small", "medium");
    } else {
        return random("medium", "big");
    }
}

function getMaxDiameterIncrease() {
    let maxDiameterIncrease = 1;

    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if(assLevel >= 30) {
        maxDiameterIncrease = 2;
    } else if(assLevel >= 23) {
        maxDiameterIncrease = 1.5;
    } else if(assLevel >= 15) {
        maxDiameterIncrease = 1;
    }

    return maxDiameterIncrease;
}

function getAnalPlug(minLength = 0, minThickness = 0, forceBigger = true) {
    let maxPlugThickness = getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0);

    if(forceBigger && minThickness === 0) {
        minThickness = maxPlugThickness + 0.1;
    }

    let availablePlugs = [];

    let maxDiameterIncrease = getMaxDiameterIncrease();

    if(maxPlugThickness >= biggestButtplug.diameter) {
        //We don't have any bigger plug
        maxPlugThickness = biggestButtplug.diameter;
    }

    minThickness = Math.min(minThickness, biggestButtplug.diameter);

    //TODO: Handle min length too (smallest plug etc.)

    while(availablePlugs.length === 0 && buttplugs.length !== 0) {
        for (let y = 0; y < buttplugs.length; y++) {
            let buttplug = buttplugs[y];

            if(buttplug.diameter >= minThickness && buttplug.length >= minLength) {
                //Don't over extent with too big plugs too quickly
                if(buttplug.diameter >= maxPlugThickness && buttplug.diameter <= Math.max(smallestButtplug.diameter, maxPlugThickness + maxDiameterIncrease)) {
                    availablePlugs.push(buttplug);
                }
            }
        }

        if(availablePlugs.length === 0) {
            //Seems like we don't have any plug within our given diameter increase range so we are gonna increase our range
            maxDiameterIncrease += 0.5;

            if(minLength > 0) minLength -= 0.5;
            if(minThickness > 0) minThickness -= 0.5;
        }
    }

    if(availablePlugs.length === 0) {
        return null;
    }

    let plug = availablePlugs[randomInteger(0, availablePlugs.length - 1)];

    setTempVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, Math.max(getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0), plug.diameter));

    return plug;
}

function removeButtplug() {
    if (isChance(30)) {
        sendMessage("%SlaveName%");
        sendMessage("I want you to remove that buttplug without using your hands");
        sendMessage(random("Use your ass muscles", "Clench your muscles", "Just squeeze your ass muscles") + " and push it all the way out");
        if (ACTIVE_PERSONALITY_STRICTNESS == 0 || isChance(100 - ACTIVE_PERSONALITY_STRICTNESS * 30)) {
            sendMessage("Slowly...");
        } else {
            sendMessage("Do it as fast as possible! %Grin%");
        }

        sendMessage("I know it might " + random("be painful", "hurt", "be unpleasant"));
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

            if (ACTIVE_PERSONALITY_STRICTNESS == 0 || isChance(100 - ACTIVE_PERSONALITY_STRICTNESS * 30)) {
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
        sendMessage("You already know " + random("what I am gonna make you do now", "what comes next", "what you are gonna do next", "what I want you to do next", "what is gonna happen now"));
        sendMessage("I want you to suck that toy clean %Grin%");

        //Gag
        if (isChance(20)) {
            sendMessage("However today we are " + random("gonna clean it differently", "handle this a bit differently", "not gonna just lick it clean"));
            sendMessage("In a moment you'll going to put that plug all the way into your mouth");
            sendMessage("And you are gonna keep it there %Grin%");

            if (isGaged()) {
                removeGag();
            }

            sendMessage("Go ahead and put that plug into your mouth");
            sleep(5);

            sendMessage("Look at you...");
            sendMessage("Pathetic as you are");
            sendMessage(random("Can you taste your own ass juice? %Lol%", "Your mouth filled with a plug that has been in your ass for quite some time"));
            sendMessage("And all of that just to " + random("please me", "make me happy", "entertain me") + " %EmoteHappy%");

            setGaged(true);
            currentGagType = GAG_TYPE_BUTTPLUG_GAG;

            if(feelsLikePunishingSlave()) {
                goToCorner(getCornerTime());
            }
        } else {
            sendMessage(random("I want you to blow it like you would blow a dildo", "I want you to lick it from the top to the bottom"));
            sendMessage("Our toy should be shining and spotless");
            sendMessage("Keep going until I tell you to stop");


            sendMessage("Look at you...");
            sendMessage("Pathetic as you are");
            sendMessage(random("Can you taste your own ass juice?", "Licking of your own ass juice", "Licking that plug that was in your ass not too long ago") + " %Lol%");
            sendMessage("And all of that just to " + random("please me", "make me happy", "entertain me") + " %EmoteHappy%");

            sleep(randomInteger(10, 20));

            sendMessage("You can stop now %EmoteHappy%");
            sendMessage("Put the plug aside");
        }

        currentPlug.clean = true;
    }

    currentPlug = null;
    setTempVar(VARIABLE_IS_PLUGGED, false);
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
            let splitArray = entry.split(',');

            let name = 'undefined';
            let diameter = -1;
            let length = -1;
            let vibrating = false;
            let textured = false;
            let glass = false;
            let metal = false;
            let hollow = false;
            let tail = false;

            for (let y = 0; y < splitArray.length; y++) {
                let valueEntry = splitArray[y];

                if (valueEntry.indexOf('name:') !== -1) {
                    name = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('diameter:')  !== -1) {
                    diameter = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('length:') !== -1) {
                    length = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('vibrating:') !== -1) {
                    vibrating = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('textured:') !== -1) {
                    textured = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('glass:') !== -1) {
                    glass = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('metal:') !== -1) {
                    metal = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('hollow:') !== -1) {
                    hollow = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('tail:') !== -1) {
                    tail = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                }
            }

            let buttplug = {
                name: name,
                diameter: diameter,
                length: length,
                vibrating: vibrating,
                textured: textured,
                glass: glass,
                metal: metal,
                hollow: hollow,
                tail: tail
            };
            buttplugs.push(buttplug);

            //Find smallest plug
            if(smallestButtplug == null || smallestButtplug.diameter > buttplug.diameter) {
                smallestButtplug = buttplug;
            }

            //Find biggest plug
            if(biggestButtplug == null || biggestButtplug.diameter < buttplug.diameter) {
                biggestButtplug = buttplug;
            }
        }
    }
}


function buttplugToString(buttplug) {
    let string = 'name:' + buttplug.name + ',length:' + buttplug.length + ',diameter:' + buttplug.diameter;

    if (buttplug.vibrating) {
        string += ',vibrating:' + buttplug.vibrating;
    }

    if (buttplug.textured) {
        string += ',textured:' + buttplug.textured;
    }

    if (buttplug.glass) {
        string += ',glass:' + buttplug.glass;
    }

    if (buttplug.metal) {
        string += ',metal:' + buttplug.metal;
    }

    if (buttplug.hollow) {
        string += ',hollow:' + buttplug.hollow;
    }

    if (buttplug.tail) {
        string += ',tail:' + buttplug.tail;
    }

    return string;
}

function saveButtplugs() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < buttplugs.length; y++) {
        arrayList.add(buttplugToString(buttplugs[y]));
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

    //TODO: More interaction based on length and diameter etc.


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
            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    let metal = false;
    let textured = false;
    let glass = false;
    let vibrating = false;
    let tail = false;
    let hollow = false;

    sendVirtualAssistantMessage('Is there anything else special about it? (Glass, Textured, Metal, Tail, Hollow, Vibrating)', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            sendVirtualAssistantMessage("%Good%");
            sendVirtualAssistantMessage('Then we are continuing...');

            sendVirtualAssistantMessage('Is it made out of glass?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    glass = true;
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            if(!glass) {
                sendVirtualAssistantMessage('Is it made out of metal?', 0);
                answer = createInput();

                while (true) {
                    if (answer.isLike("yes")) {
                        metal = true;
                        break;
                    } else if (answer.isLike("no")) {
                        break;
                    } else {
                        sendVirtualAssistantMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
            }

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

            sendVirtualAssistantMessage('Does it have a tail attached to it?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    tail = true;
                    sendVirtualAssistantMessage('I like buttplugs with tails %Grin%');
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

    let buttplug = {
        name: name,
        diameter: diameter,
        length: length,
        vibrating: vibrating,
        textured: textured,
        glass: glass,
        metal: metal,
        hollow: hollow,
        tail: tail
    };

    buttplugs.push(buttplug);

    saveButtplugs();

    sendVirtualAssistantMessage('Saved your new toy');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function fetchButtplugToy(toy) {
    return fetchToy(toy, getButtplugImagePath(toy));
}

function getButtplugImagePath(name) {
    return 'Images/Spicy/Toys/Buttplugs/' + name + '.*';
}
