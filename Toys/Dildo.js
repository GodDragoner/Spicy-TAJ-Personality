const DILDOS = [];
let currentDildo = null;

let longestDildo = null;
let thickestDildo = null;
let shortestDildo = null;
let smallestDildo = null;

function hasDildoToy() {
    return getVar("toyDildo", false);
}

function getDildoToyMode() {
    return getVar("toyDildoInteractionMode");
}

function runAssIntro() {
    sendMessage("As a hopefully future slave of mine ");
    sendMessage("You will often find yourself with a cock in your %Ass%! %Lol% ");
    sendMessage("Which means you have to be able to take one");
    sendMessage("And heck...");
    sendMessage("You might even learn to love it!");

    if(hasEnemaKit()) {
        runEnemaIntro();
    }

    sendMessage("Now...");
    setVar('assIntro', true);
}

function sitOnDildo(toy) {
    sendMessage('Now...');
    sendMessage('Put your ' + toy + ' on the ground');

    
}

function updateSessionDildos() {
    for(let x = 0; x < DILDOS.length; x++) {
        DILDOS[x].usedInSession = false;
        DILDOS[x].clean = true;
    }
}

function getRandomUncleanedDildo() {
    for(let x = 0; x < DILDOS.length; x++) {
        if(DILDOS[x].usedInSession && !DILDOS[x].clean && currentPlug !== buttplugs[x]) {
            return DILDOS[x];
        }
    }

    return null;
}

function getRandomCleanDildo() {
    for(let x = 0; x < DILDOS.length; x++) {
        if(!DILDOS[x].usedInSession || DILDOS[x].clean ) {
            return DILDOS[x];
        }
    }

    return null;
}

function getAnalDildoForTask(minLength = 0, minThickness = 0) {
    let availableDildos = [];

    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if(minLength === 0) {
        minLength = Math.max(10, assLevel/2);
    }

    if(minThickness === 0) {
        minThickness = Math.max(2.5, assLevel/6);
    }

    for (let y = 0; y < DILDOS.length; y++) {
        let dildo = DILDOS[y];

        if(dildo.diameter >= minThickness && dildo.length >= minLength && dildo.diameter <= minThickness + 2) {
            availableDildos.push(dildo);
        }
    }

    if(availableDildos.length === 0) {
        return DILDOS[randomInteger(0, DILDOS.length - 1)];
    }

    return availableDildos[randomInteger(0, availableDildos.length - 1)];
}

/**
 * Finds a fitting dildo for usage
 * @param minLength Min length of the dildo (included)
 * @param minThickness Min thickness of the dildo (included)
 * @param forceThicker Should it be forced to be thicker than the max size used today?
 * @param forceLonger Should it be longer than the current dildo?
 * @param smallerFactor How much smaller should the current dildo be allowed to be
 * @returns A random dildo that fits the parameters
 */
function getAnalDildo(minLength = 0, minThickness = 0, forceThicker = false, forceLonger = false, smallerFactor = 0) {
    let maxDildoThickness = getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0) - smallerFactor;

    if(maxDildoThickness >= thickestDildo.diameter) {
        //We don't have any thicker dildo
        maxDildoThickness = thickestDildo.diameter;
    }

    if(forceThicker && minThickness === 0) {
        //Limit to min thickness is of course our thickest dildo
        minThickness = Math.min(maxDildoThickness + 0.1, thickestDildo.diameter);
    }

    if(forceLonger && minLength === 0) {
        //Limit to min length is of course our longest dildo
        minLength = Math.min(currentDildo.length + 0.1, longestDildo.length);
    }

    let availableDildos = [];

    let maxDiameterIncrease = getMaxDiameterIncrease();

    while(availableDildos.length === 0 && DILDOS.length !== 0) {
        for (let y = 0; y < DILDOS.length; y++) {
            let dildo = DILDOS[y];

            if(dildo.diameter >= minThickness && dildo.length >= minLength) {
                //Don't over extent with too big dildos too quickly
                if(dildo.diameter >= maxDildoThickness && dildo.diameter <= Math.max(smallestDildo.diameter, maxDildoThickness + maxDiameterIncrease)) {
                    availableDildos.push(dildo);
                }
            }
        }

        if(availableDildos.length === 0) {
            //Seems like we don't have any dildo within our given diameter increase range so we are gonna increase our range
            maxDiameterIncrease += 0.25;

            //We are also decrease our min length and min thickness
            if(minLength > 0) minLength -= 0.5;
            if(minThickness > 0) minThickness -= 0.5;
        }
    }

    if(availableDildos.length === 0) {
        return null;
    }

    let dildo = availableDildos[randomInteger(0, availableDildos.length - 1)];

    //TODO: Can't do this here. Can only do it if getting it was confirmed (fetch toy)
    setTempVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, Math.max(getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0), dildo.diameter));
    currentDildo = dildo;
    return dildo;
}


function getDildo(blowjob = false) {
    if (!blowjob) {
        return getAnalDildo();
    } else {
        let blowjobLevel = getBlowjobLevel();

        let minDiameter = Math.max(smallestDildo.diameter, Math.min(thickestDildo.diameter, blowjobLevel/8));
        let minLength = Math.max(shortestDildo.length, Math.min(longestDildo.length, blowjobLevel/3));

        let maxLength = minLength + blowjobLevel/3;
        let maxDiameter = minDiameter + blowjobLevel/15;

        let availableDildos = [];

        while(availableDildos.length === 0 && DILDOS.length !== 0) {
            for (let y = 0; y < DILDOS.length; y++) {
                let dildo = DILDOS[y];


                if (dildo.diameter >= minDiameter && dildo.length >= minLength && dildo.length <= maxLength && dildo.diameter <= maxDiameter) {
                    availableDildos.push(dildo);
                }
            }

            maxLength += 0.5;
            maxDiameter += 0.5;
        }

        if(availableDildos.length === 0) {
            return null;
        }

        return availableDildos[randomInteger(0, availableDildos.length - 1)];
    }
}


function loadDildos() {
    if (!isVar('dildos')) {
        setVar('dildos', new java.util.ArrayList());
    } else {
        let arrayList = getVar('dildos');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);
            let splitArray = entry.split(',');

            let name = 'undefined';
            let diameter = -1;
            let length = -1;
            let doubleSided = false;
            let textured = false;
            let glass = false;
            let cumInjection = false;
            let suctionCup = false;

            for (let y = 0; y < splitArray.length; y++) {
                let valueEntry = splitArray[y];

                if (valueEntry.indexOf('name:') !== -1) {
                    name = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('diameter:')  !== -1) {
                    diameter = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('length:') !== -1) {
                    length = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('doubleSided:') !== -1) {
                    doubleSided = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('textured:') !== -1) {
                    textured = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('glass:') !== -1) {
                    glass = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('cumInjection:') !== -1) {
                    cumInjection = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('suctionCup:') !== -1) {
                    suctionCup = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                }
            }

            let dildo = {
                name: name,
                diameter: diameter,
                length: length,
                doubleSided: doubleSided,
                textured: textured,
                glass: glass,
                cumInjection: cumInjection,
                suctionCup: suctionCup
            };

            DILDOS.push(dildo);

            //Find smallest dildo
            if(smallestDildo == null || smallestDildo.diameter > dildo.diameter) {
                smallestDildo = dildo;
            }

            //Find shortest dildo
            if(shortestDildo == null || shortestDildo.length > dildo.length) {
                shortestDildo = dildo;
            }

            //Find thickest dildo
            if(thickestDildo == null || thickestDildo.diameter < dildo.diameter) {
                thickestDildo = dildo;
            }

            //Find longest dildo
            if(longestDildo == null || longestDildo.length < dildo.length) {
                longestDildo = dildo;
            }
        }
    }
}

function saveDildos() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < DILDOS.length; y++) {
        arrayList.add(dildoToString(DILDOS[y]));
    }

    setVar('dildos', arrayList);
}

function dildoToString(dildo) {
    let string = 'name:' + dildo.name + ',length:' + dildo.length + ',diameter:' + dildo.diameter;

    if (dildo.doubleSided) {
        string += ',doubleSided:' + dildo.doubleSided;
    }

    if (dildo.textured) {
        string += ',textured:' + dildo.textured;
    }

    if (dildo.cumInjection) {
        string += ',cumInjection:' + dildo.cumInjection;
    }

    if (dildo.suctionCup) {
        string += ',suctionCup:' + dildo.suctionCup;
    }

    if (dildo.glass) {
        string += ',glass:' + dildo.glass;
    }

    return string;
}

function getDildoByName(name) {
    for (let y = 0; y < DILDOS.length; y++) {
        if (name.toUpperCase() === DILDOS[y].name.toUpperCase()) {
            return DILDOS[y];
        }
    }

    return null;
}

function setupNewDildo() {
    sendVirtualAssistantMessage('Please enter a name for your new dildo', 0);

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (getDildoByName(answer.getAnswer()) != null) {
            sendVirtualAssistantMessage('A dildo with a similar name already exists. Please choose a different name.', 0);
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    //TODO: More interaction based on length and diameter etc.

    sendVirtualAssistantMessage('Please make sure to add a picture of your dildo named like your dildo to your Toys/Dildos folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the dildos folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(getDildoImagePath(name), 5);

    sendVirtualAssistantMessage('Next please tell me the length of the dildo in centimeters (measure everything that\'s insertable)', 0);
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

    sendVirtualAssistantMessage('Now please tell me the diameter of the dildo in centimeters (choose the biggest piece of the dildo to measure)', 0);
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

    let doubleSided = false;
    let textured = false;
    let glass = false;
    let cumInjection = false;
    let suctionCup = false;

    sendVirtualAssistantMessage('Is there anything else special about it? (Glass, Textured, Cum Injection, Double Sided, Suction Cup)', 0);
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

            sendVirtualAssistantMessage('Is it double sided?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    doubleSided = true;
                    sendVirtualAssistantMessage('Interesting. We\'ll see how we can integrate this %Lol%');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Does it have the possibility to inject cum?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    cumInjection = true;
                    sendVirtualAssistantMessage('This should be fun %Grin%');
                    break;
                } else if (answer.isLike("no")) {
                    break;
                } else {
                    sendVirtualAssistantMessage(YES_OR_NO);
                    answer.loop();
                }
            }

            sendVirtualAssistantMessage('Does it have a suction cup?', 0);
            answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    suctionCup = true;
                    sendVirtualAssistantMessage('Great!');
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

    let dildo = {
        name: name,
        diameter: diameter,
        length: length,
        doubleSided: doubleSided,
        textured: textured,
        glass: glass,
        cumInjection: cumInjection,
        suctionCup: suctionCup
    };
    DILDOS.push(dildo);

    saveDildos();

    sendVirtualAssistantMessage('Saved your new toy');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function fetchDildoToy(toy) {
    return fetchToy(toy, getDildoImagePath(toy));
}

function getDildoImagePath(name) {
    return 'Images/Spicy/Toys/Dildos/' + name + '.*';
}