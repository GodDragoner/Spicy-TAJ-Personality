const dildos = [];
let currentDildo = null;

function hasDildoToy() {
    return getVar("toyDildo", false);
}

function getDildoToyMode() {
    return getVar("toyDildoInteractionMode");
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

    for (let y = 0; y < dildos.length; y++) {
        let dildo = dildos[y];

        if(dildo.diameter >= minThickness && dildo.length >= minLength && dildo.diameter <= minThickness + 2) {
            availableDildos.push(dildo);
        }
    }

    if(availableDildos.length === 0) {
        return dildos[randomInteger(0, dildos.length - 1)];
    }

    return availableDildos[randomInteger(0, availableDildos.length - 1)];
}

function getAnalDildo(minLength = 0, minThickness = 0, forceBigger = false) {
    let maxDildoThickness = getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0);

    let availableDildos = [];

    let maxDiameterIncrease = 1;

    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if(assLevel >= 30) {
        maxDiameterIncrease = 2.5;
    } else if(assLevel >= 23) {
        maxDiameterIncrease = 2;
    } else if(assLevel >= 15) {
        maxDiameterIncrease = 1.5;
    }

    for (let y = 0; y < dildos.length; y++) {
        let dildo = dildos[y];

        if(dildo.diameter >= minThickness && dildo.length >= minLength) {
            //Don't over extent with too big dildos too quickly
            if(forceBigger? dildo.diameter > maxDildoThickness : dildo.diameter >= maxDildoThickness && dildo.diameter <= Math.max(3, maxDildoThickness + maxDiameterIncrease)) {
                availableDildos.push(dildo);
            }
        }
    }

    if(availableDildos.length == 0) {
        if(forceBigger) {
            //TODO: Just compare to biggest dildo we have stored
            //Try again without force bigger because we might have the biggest dildo right now
            return getAnalDildo(minLength, minThickness);
        } else {
            //TODO: Better fallback
            incrementVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, -1);
            return getAnalDildo(0, 0);
        }
    }

    let dildo = availableDildos[randomInteger(0, availableDildos.length - 1)];

    setVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, Math.max(getVar(VARIABLE_MAX_DILDO_THICKNESS_TODAY, 0), dildo.diameter));
    currentDildo = dildo;
}


function getDildo(blowjob = false) {
    if (!blowjob) {
        return getAnalDildo();
    } else {
        let blowjobLevel = getBlowjobLevel();

        let minDiameter = blowjobLevel/8;
        let minLength = blowjobLevel/3;

        let availableDildos = [];

        for (let y = 0; y < dildos.length; y++) {
            let dildo = dildos[y];

            if(dildo.diameter >= minDiameter && dildo.length >= minLength && dildo.length <= minLength + 5 && dildo.diameter <= minDiameter + 2) {
                availableDildos.push(dildo);
            }
        }

        //TODO: Better fallback option
        if(availableDildos.length === 0) {
            return dildos[randomInteger(0, dildos.length - 1)];
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
            dildos.push(dildo);
        }
    }
}

function saveDildos() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < dildos.length; y++) {
        arrayList.add(dildoToString(dildos[y]));
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
    for (let y = 0; y < dildos.length; y++) {
        if (name.toUpperCase() === dildos[y].name.toUpperCase()) {
            return dildos[y];
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

    sendVirtualAssistantMessage('Please make sure to add a picture of your dildo named like your dildo to your dildos folder.');
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the dildos folder');

    sendVirtualAssistantMessage('Next please tell me the length of the dildo in centimeters (measure everything that\'s insertable)', 0);
    answer = createInput();
    let length = -1;

    while (true) {
        if (answer.isInteger()) {
            length = answer.getInt();
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
        if (answer.isInteger()) {
            diameter = answer.getInt();
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
    dildos.push(dildo);

    saveDildos();

    sendVirtualAssistantMessage('Saved your new toy');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function getDildoImagePath(dildo) {
    return 'Images/Spicy/Toys/Dildos/' + dildo.name + '.*';
}