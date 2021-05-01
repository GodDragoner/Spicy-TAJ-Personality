const STOCKING_TOY = createMultipleToy('stocking', 'stockings');
STOCKING_TOY.getImagePath = function() {
    return 'Images/Spicy/Toys/Clothing/Stockings/' + this.name + '.*';
};
//Mkdir folder if not exists
STOCKING_TOY.getImageFolder();

const STOCKING_TYPES = [
    'fishnet',
    'lace',
    'printed',
    'striped',
    'thigh high',
    'opaque',
    'transparent',
    'garter',
    'seamed',
    'scrunched',
    'latex',
    'bow',
];


STOCKING_TOY.createToyInstance = function(name, color, type) {
    let toy = createToy(name);
    toy.type = type;
    toy.color = color;

    toy.getName = function() {
        return this.color + ' ' + this.type + ' ' + STOCKING_TOY.name;
    };

    toy.fetchToyInstance = function() {
        return this.fetchToy(this.getName(), this.getImagePath());
    };

    toy.getImagePath = function() {
        return 'Images/Spicy/Toys/Clothing/Stockings/' + this.name + '.*';
    };

    //Mkdir folder if not exists
    toy.getImageFolder();

    return toy;
};

STOCKING_TOY.setupNewToy = function() {
    let name = askForNewToyName(STOCKING_TOY);

    //TODO: Lingerie training (what is what)
    let type = askForToyType(STOCKING_TOY, STOCKING_TYPES, 'https://www.looksgud.in/blog/different-types-of-stockings/');

    sendVirtualAssistantMessage('Now please tell me the color of the stocking', 0);
    let color = createInput().getAnswer();

    let toy = STOCKING_TOY.createToyInstance(name, color, type);

    createToyAndCheckImage(toy, STOCKING_TOY);
};

function askForToyType(toyObject, types, reference = undefined) {
    sendVirtualAssistantMessage('Next please tell me the type of the ' + toyObject.name, 0);

    sendVirtualAssistantMessage('The following types are available:', 0);

    sendVirtualAssistantMessage(types.join(', '), 0);

    if(reference !== undefined) {
        sendVirtualAssistantMessage('For reference check this out: ' + reference, 0);
    }

    let answer = createInput();
    let type = '';

    while (true) {
        let typeAnswer = answer.getAnswer();

        if(types.indexOf(typeAnswer) !== -1) {
            type = typeAnswer;
            sendVirtualAssistantMessage('Great! Moving on...');
            break;
        } else {
            sendVirtualAssistantMessage("That\'s not a valid type for a " + toyObject.name, 0);
            answer.loop();
        }
    }

    return type;
}

function createToyAndCheckImage(toy, toyObject) {
    sendVirtualAssistantMessage('Please make sure to add a picture of your ' + toyObject.name + ' named accordingly to your ' + toyObject.getImageFolder().getPath() +  ' folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + toy.name + '.jpg" to the folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(toy.getImagePath(), 5);

    toyObject.toyInstances.push(toy);

    toyObject.saveToyInstances();

    sendVirtualAssistantMessage('Saved your new ' + toyObject.name);
    sendVirtualAssistantMessage('Enjoy %Grin%');

    return toyObject;
}

STOCKING_TOY.showEditGui = function(stocking) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(stocking.name);
            let gridPane = createGridPaneGUI();
            let row = createToySettingGUI(gridPane, stocking.getImagePath());
            let writebackGui = createWritebackGUI(stocking);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", stocking.name), "name");

            let type = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Type"), "type");
            type.addChildren(STOCKING_TYPES, stocking.type);

            let colour = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Color", stocking.color), "color");

            gridPane.addSaveButton(row, dialog, writebackGui, STOCKING_TOY.saveToyInstances);
            gridPane.addCloseButton(dialog, 2, row++);
            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
};

STOCKING_TOY.loadToyInstances();

