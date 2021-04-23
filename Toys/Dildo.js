const DILDOS = [];

const DILDO_TOY = createToy('dildo');

let currentDildo = null;

let longestDildo = null;
let thickestDildo = null;
let shortestDildo = null;
let smallestDildo = null;

function hasDildoToy() {
    return DILDOS.length > 0;
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

    sendMessage("Now...");
    setVar('assIntro', true);
}

function sitOnDildo(toy) {
    sendMessage('Now...');
    sendMessage('Put your ' + toy + ' on the ground');


}

function updateSessionDildos() {
    for (let x = 0; x < DILDOS.length; x++) {
        DILDOS[x].usedInSession = false;
        DILDOS[x].clean = true;
    }
}

function getDildoClosestAboveDiameter(diameter = 0) {
    let currentDildo = null;
    for (let x = 0; x < DILDOS.length; x++) {
        if (DILDOS[x].diameter >= diameter) {
            if (currentDildo === null || currentDildo.diameter > DILDOS[x].diameter) {
                currentDildo = DILDOS[x];
            }
        }
    }

    return currentDildo;
}

function getDildoClosestAboveLength(length = 0) {
    let currentDildo = null;
    for (let x = 0; x < DILDOS.length; x++) {
        if (DILDOS[x].length >= length) {
            if (currentDildo === null || currentDildo.length > DILDOS[x].length) {
                currentDildo = DILDOS[x];
            }
        }
    }

    return currentDildo;
}

function getRandomUncleanedDildo() {
    for (let x = 0; x < DILDOS.length; x++) {
        if (DILDOS[x].usedInSession && !DILDOS[x].clean && currentDildo !== DILDOS[x]) {
            return DILDOS[x];
        }
    }

    return null;
}

function getRandomCleanDildo() {
    for (let x = 0; x < DILDOS.length; x++) {
        if (!DILDOS[x].usedInSession || DILDOS[x].clean) {
            return DILDOS[x];
        }
    }

    return null;
}

function getAnalDildoForTask(minLength = 0, minThickness = 0) {
    let availableDildos = [];

    let assLevel = getVar(VARIABLE.ASS_LEVEL);

    if (minLength === 0) {
        minLength = Math.max(10, assLevel / 2);
    }

    if (minThickness === 0) {
        minThickness = Math.max(2.5, getUsedToDiameter());
    }

    for (let y = 0; y < DILDOS.length; y++) {
        let dildo = DILDOS[y];

        //Filter dildos for min length
        if (dildo.length >= minLength) {
            availableDildos.push(dildo);
        }
    }

    if (availableDildos.length === 0) {
        if (minThickness > 0 && minLength > 0) {
            return getAnalDildoForTask(--minLength, --minThickness);
        }

        return DILDOS[randomInteger(0, DILDOS.length - 1)];
    }

    //Get the closest dildo around the given thickness
    return getButtplugClosestAround(minThickness, availableDildos);
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
    let maxDildoThickness = getFittingAnalDiameterThickness(thickestDildo.diameter) - smallerFactor;

    if (forceThicker && minThickness === 0) {
        //Limit to min thickness is of course our thickest dildo
        minThickness = Math.min(maxDildoThickness + 0.1, thickestDildo.diameter);
    }

    if (forceLonger && minLength === 0) {
        //Limit to min length is of course our longest dildo
        minLength = Math.min(currentDildo.length + 0.1, longestDildo.length);
    }

    let availableDildos = [];

    let maxDiameterIncrease = getMaxDiameterIncrease();

    while (availableDildos.length === 0 && DILDOS.length !== 0) {
        for (let y = 0; y < DILDOS.length; y++) {
            let dildo = DILDOS[y];

            if (dildo.diameter >= minThickness && dildo.length >= minLength) {
                //Don't over extent with too big dildos too quickly
                if (dildo.diameter >= maxDildoThickness && dildo.diameter <= Math.max(smallestDildo.diameter, maxDildoThickness + maxDiameterIncrease)) {
                    availableDildos.push(dildo);
                }
            }
        }

        if (availableDildos.length === 0) {
            //Seems like we don't have any dildo within our given diameter increase range so we are gonna increase our range
            maxDiameterIncrease += 0.25;

            //We are also decrease our min length and min thickness
            if (minLength > 0) minLength -= 0.5;
            if (minThickness > 0) minThickness -= 0.5;
        }
    }

    if (availableDildos.length === 0) {
        return null;
    }

    let dildo = availableDildos[randomInteger(0, availableDildos.length - 1)];

    //TODO: Can't do this here. Can only do it if getting it was confirmed (fetch toy)
    setTempVar(VARIABLE.MAX_DILDO_THICKNESS_TODAY, Math.max(getVar(VARIABLE.MAX_DILDO_THICKNESS_TODAY, 0), dildo.diameter));
    currentDildo = dildo;
    return dildo;
}

function fetchBlowjobDildo() {
    let toy = null;
    if (!hasDildoToy()) {
        if (sendYesOrNoQuestion('Since you own no dildo. Do you have anything else around that is dildo shaped?')) {
            sendMessage('Then you are gonna use that instead!');
            toy = sendInput('Tell me %SlaveName%. What do you have at hand that can be used instead of a dildo?').getAnswer();
        } else {
            sendMessage('That\'s a shame');
            //TODO: convince to buy

            return null;
        }
    } else {
        toy = getDildo(true).name;
    }

    if (fetchDildoToy(toy)) {
        return toy;
    } else {
        return null;
    }
}

function filterListForObject(toFilterDildo, dildos = DILDOS) {
    let returnArray = [];

    for (let y = 0; y < dildos.length; y++) {
        let dildo = dildos[y];

        if(dildo !== toFilterDildo) {
            returnArray.push(dildo);
        }
    }

    return returnArray;
}

function getDildo(blowjob = false, dildos = DILDOS) {
    if (!blowjob) {
        return getAnalDildo();
    } else {
        let blowjobLevel = getBlowjobLevel();

        //Min at 30 is therefore 4.1
        let minDiameter = Math.max(smallestDildo.diameter, Math.min(thickestDildo.diameter, 2.5 + blowjobLevel / 14));

        //30: 11
        let minLength = Math.max(shortestDildo.length, Math.min(longestDildo.length, 5 + blowjobLevel / 5));

        //30: 21
        let maxLength = minLength + blowjobLevel / 3;

        //Max at 30 is 5.3
        let maxDiameter = minDiameter + blowjobLevel / 24;

        let availableDildos = [];

        let tries = 0;

        while (availableDildos.length === 0 && dildos.length !== 0 && tries < 20) {
            for (let y = 0; y < dildos.length; y++) {
                let dildo = dildos[y];

                //Ignore dildos non silicone, no !== because that breaks the comparison
                if (dildo.material != MATERIAL.SILICON) {
                    sendDebugMessage('Skipped dildo because no silicone but ' + dildo.material);
                    continue;
                }

                if (dildo.diameter >= minDiameter && dildo.length >= minLength && dildo.length <= maxLength && dildo.diameter <= maxDiameter) {
                    availableDildos.push(dildo);
                }
            }

            //Increase size slower than decreasing min parameters
            maxLength += 0.1;
            maxDiameter += 0.1;
            minDiameter -= 0.5;
            minLength -= 0.5;
            tries++;
        }

        if (availableDildos.length === 0) {
            return getDildo(false);
        }

        return availableDildos[randomInteger(0, availableDildos.length - 1)];
    }
}

function loadDildos() {
    if (!isVar('dildos')) {
        setVar('dildos', new java.util.ArrayList());
    } else {
        let saveD = false;

        let arrayList = tryGetArrayList('dildos');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);

            let dildo = createDildo().fromString(entry);

            DILDOS.push(dildo);

            //Conversion of old stuff
            if (dildo.glass) {
                delete dildo.glass;
                dildo.material = MATERIAL.GLASS;
                saveD = true;
            }

            if(isUndefinedString(dildo.material)) {
                dildo.material = MATERIAL.SILICON;
                saveD = true;
            }

            if(isUndefinedString(dildo.doubleSided)) {
                dildo.doubleSided = false;
                saveD = true;
            }

            if(isUndefinedString(dildo.doubleSided)) {
                dildo.doubleSided = false;
                saveD = true;
            }

            if(isUndefinedString(dildo.suctionCup)) {
                dildo.suctionCup = false;
                saveD = true;
            }

            if(isUndefinedString(dildo.textured)) {
                dildo.textured = false;
                saveD = true;
            }

            if(isUndefinedString(dildo.cumInjection)) {
                dildo.cumInjection = false;
                saveD = true;
            }
        }

        if (saveD) {
            saveDildos();
        }
    }

    updateDildoMinAndMaxSizes();
}

function updateDildoMinAndMaxSizes() {
    smallestDildo = null;
    shortestDildo = null;
    thickestDildo = null;
    longestDildo = null;

    DILDOS.forEach(dildo => {
        //Find smallest dildo
        if (smallestDildo == null || smallestDildo.diameter > dildo.diameter) {
            smallestDildo = dildo;
        }

        //Find shortest dildo
        if (shortestDildo == null || shortestDildo.length > dildo.length) {
            shortestDildo = dildo;
        }

        //Find thickest dildo
        if (thickestDildo == null || thickestDildo.diameter < dildo.diameter) {
            thickestDildo = dildo;
        }

        //Find longest dildo
        if (longestDildo == null || longestDildo.length < dildo.length) {
            longestDildo = dildo;
        }
    });

    logDildoSizeStats();
}

function logDildoSizeStats() {
    sendDebugMessage('[Dildo] Longest: ' + (longestDildo == null ? 'none' : longestDildo.name));
    sendDebugMessage('[Dildo] Shortest: ' + (shortestDildo == null ? 'none' : shortestDildo.name));
    sendDebugMessage('[Dildo] Smallest: ' + (smallestDildo == null ? 'none' : smallestDildo.name));
    sendDebugMessage('[Dildo] Thickest: ' + (thickestDildo == null ? 'none' : thickestDildo.name));
}

function saveDildos() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < DILDOS.length; y++) {
        arrayList.add(DILDOS[y].toString());
    }

    setVar('dildos', arrayList);
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

            if (length < 10) {
                sendVirtualAssistantMessage('That\'s quite short however maybe the diameter will tear your ass apart %Lol%');
                sendVirtualAssistantMessage('No matter what, it sure does make a good addition to your collection');
            } else if (length < 16) {
                sendVirtualAssistantMessage('Not too short. I think it\'s good enough to milk you dry %EmoteHappy%');
            } else if (length < 22) {
                sendVirtualAssistantMessage('I like long dildos. Imagine how it feels like taking that monster balls deep %Grin%');
            } else {
                sendVirtualAssistantMessage('That\'s really long. I hope for your own sake that you can take that all the way in %Wicked%');
            }

            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now please tell me the diameter of the dildo in centimeters (choose the biggest piece of the dildo to measure)', 0);
    answer = createInput();
    let diameter = -1;

    while (true) {
        if (answer.isDouble()) {
            diameter = answer.getDouble();

            if (diameter < 3) {
                sendVirtualAssistantMessage('That\'s really thin. But we all need something to warm up with don\'t we?');
            } else if (diameter < 4) {
                sendVirtualAssistantMessage('Something to start warming up with. I like those %Grin%');
            } else if (diameter < 5) {
                sendVirtualAssistantMessage('The perfect toy to rape your ass with on a regular basis');
            } else if (diameter < 6) {
                sendVirtualAssistantMessage('That thing will make you regret that you bought it once it is brutally raping that asshole');
            } else if (diameter < 7) {
                sendVirtualAssistantMessage('I hope that you are able to get this all the way in for your own good %Lol%');
            } else {
                sendVirtualAssistantMessage('I hope you are not gonna regret buying this %Lol%');
            }

            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
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
            answer.clearOptions();
            break;
        } else if (answer.isLike("glass")) {
            material = MATERIAL.GLASS;
            answer.clearOptions();
            break;
        } else if (answer.isLike("silicon")) {
            material = MATERIAL.SILICON;
            answer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage('Is it made out of glass, metal or silicon?', 0);
            answer.loop();
        }
    }

    let doubleSided = false;
    let textured = false;
    let cumInjection = false;
    let suctionCup = false;

    sendVirtualAssistantMessage('Is there anything else special about it? (Textured, Cum Injection, Double Sided, Suction Cup)', 0);
    answer = createInput();

    while (true) {
        if (answer.isLike("yes")) {
            sendVirtualAssistantMessage("%Good%");
            sendVirtualAssistantMessage('Then we are continuing...');

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
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
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
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
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
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
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
                    sendVirtualAssistantMessage(YES_OR_NO, 0);
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
            sendVirtualAssistantMessage(YES_OR_NO, 0);
            answer.loop();
        }
    }

    DILDOS.push(createDildo(name, diameter, length, doubleSided, textured, material, cumInjection, suctionCup));

    saveDildos();
    updateDildoMinAndMaxSizes();

    sendVirtualAssistantMessage('Saved your new toy');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function createDildo(name, diameter, length, doubleSided, textured, material, cumInjection, suctionCup) {
    return {
        name: name,
        diameter: diameter,
        length: length,
        doubleSided: doubleSided,
        textured: textured,
        material: material,
        cumInjection: cumInjection,
        suctionCup: suctionCup,

        getImagePath: function () {
            return 'Images/Spicy/Toys/Dildos/' + this.name + '.*';
        },

        fetchDildo: function () {
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


function fetchDildoToy(toy) {
    return fetchToy(toy, getDildoImagePath(toy));
}

function getDildoImagePath(name) {
    return 'Images/Spicy/Toys/Dildos/' + name + '.*';
}

function openDildoList() {
    let list = javafx.collections.FXCollections.observableArrayList();

    for (let x = 0; x < DILDOS.length; x++) {
        list.add(DILDOS[x].name);
    }

    createToyListGUI(function (listView, event) {
        const selectedDildo = listView.listView.getSelectionModel().getSelectedItem();
        if (selectedDildo != null) {
            showDildoGUI(getDildoByName(selectedDildo));
        }
    }, "Dildos", list)
}

function showDildoGUI(dildo) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(dildo.name);

            let gridPane = createGridPaneGUI();

            let row = createToySettingGUI(gridPane, dildo.getImagePath());

            let writebackGui = createWritebackGUI(dildo);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", dildo.name), "name");
            let diameter = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Diameter", dildo.diameter), "diameter");
            diameter.setOnlyDoubles();
            let length = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Length", dildo.length), "length");
            length.setOnlyDoubles();

            let material = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Material"), "material");
            material.addChildren(MATERIAL, dildo.material);

            /*let vibrating = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Vibrating"), "vibrating");
            vibrating.setSelected(dildo.vibrating);*/

            let textured = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Textured"), "textured");
            textured.setSelected(dildo.textured);

            let doubleSided = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Double Sided"), "doubleSided");
            doubleSided.setSelected(dildo.doubleSided);

            let suctionCup = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Suction Cup"), "suctionCup");
            suctionCup.setSelected(dildo.suctionCup);

            let cumInjection = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Cum Injection"), "cumInjection");
            cumInjection.setSelected(dildo.cumInjection);

            let save = createButton("Save");
            gridPane.setConstraints(save.button, 1, row);
            gridPane.getChildren().add(save.button);

            save.setOnAction(function (handle) {
                writebackGui.writeBack();
                saveDildos();
                updateDildoMinAndMaxSizes();
                dialog.close();
            });

            gridPane.addCloseButton(dialog, 2, row++);

            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
}