const dildos = [];

function getDildoSize() {
    let assLevel = getVar(VARIABLE_ASS_LEVEL);

    if (assLevel < 15) {
        return "small";
    } else if (assLevel < 30) {
        return random("small", "medium");
    } else {
        return random("medium", "big");
    }
}

function getDildoModifier(blowjob = false) {
    if (!blowjob) {
        return getDildoSize();
    } else {
        let blowjobLevel = getBlowjobLevel();

        if (blowjobLevel < 15) {
            return "small";
        } else if (blowjobLevel < 30) {
            return random("small", "medium");
        } else {
            return random("medium", "big", "long");
        }
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

                if (valueEntry.includes('name:')) {
                    name = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('diameter:')) {
                    diameter = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('length:')) {
                    length = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('doubleSided:')) {
                    doubleSided = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('textured:')) {
                    textured = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('glass:')) {
                    glass = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('cumInjection:')) {
                    cumInjection = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.includes('suctionCup:')) {
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
    sendVirtualAssistantMessage('Please enter a name for your new dildo');

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (getDildoByName(answer.getAnswer()) != null) {
            sendVirtualAssistantMessage('A dildo with a similar name already exists. Please choose a different name.');
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    //TODO: More interaction based on length and diameter etc.

    sendVirtualAssistantMessage('Please make sure to add a picture of your dildo named like your dildo to your dildos folder.');
    sendVirtualAssistantMessage('So for example if your dildo is called "someNormalDildo" make sure to add a picture called "someNormalDildo.jpg" to the dildos folder');

    sendVirtualAssistantMessage('Next please tell me the length of the dildo in centimeters (measure everything that\'s insertable)');
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

    sendVirtualAssistantMessage('Now please tell me the diameter of the dildo in centimeters (choose the biggest piece of the dildo to measure)');
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

    sendVirtualAssistantMessage('Is there anything else special about it? (Glass, Textured, Cum Injection, Double Sided, Suction Cup)');
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            sendVirtualAssistantMessage("%Good%");
            sendVirtualAssistantMessage('Then we are continuing...');

            sendVirtualAssistantMessage('Is it made out of glass?');
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

            sendVirtualAssistantMessage('Is it double sided?');
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

            sendVirtualAssistantMessage('Does it have the possibility to inject cum?');
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

            sendVirtualAssistantMessage('Does it have a suction cup?');
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

            sendVirtualAssistantMessage('Does it have a special texture to it? (Rippled etc.)');
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

            sendVirtualAssistantMessage('Finishing setup...')
            break;
        } else if (answer.isLike("no")) {
            sendVirtualAssistantMessage("%EmoteSad%");
            sendVirtualAssistantMessage('But we all need basic toys right? %Grin%');
            sendVirtualAssistantMessage('Finishing setup...')
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