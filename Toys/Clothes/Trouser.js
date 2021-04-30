const TROUSER_TOY = createMultipleToy('trouser', 'trouser');

TROUSER_TOY.getImagePath = function() {
    return 'Images/Spicy/Toys/Clothing/Trousers/' + this.name + '.*';
};

//Mkdir folder if not exists
TROUSER_TOY.getImageFolder();

const TROUSER_TYPES = [
    'jeans',
    'leggings',
    'hot pants',
    'skort',
    'boy shorts',
];


TROUSER_TOY.createToyInstance = function(name, color, type) {
    let toy = createToy(name);
    toy.type = type;
    toy.color = color;

    toy.getName = function() {
        return this.color + ' ' + this.type + ' ' + this.name;
    };

    toy.fetchToyInstance = function() {
        return this.fetchToy(this.getName(), this.getImagePath());
    };

    toy.getImagePath = function() {
        return 'Images/Spicy/Toys/Clothing/Trousers/' + this.name + '.*';
    };


    return toy;
};

TROUSER_TOY.setupNewToy = function() {
    let name = askForNewToyName(TROUSER_TOY);

    let type = askForToyType(TROUSER_TOY, TROUSER_TYPES);

    sendVirtualAssistantMessage('Now please tell me the color of the ' + TROUSER_TOY.name, 0);
    let color = createInput().getAnswer();

    let toy = TROUSER_TOY.createToyInstance(name, color, type);

    createToyAndCheckImage(toy, TROUSER_TOY);
};

TROUSER_TOY.showEditGui = function(trouser) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(trouser.name);
            let gridPane = createGridPaneGUI();
            let row = createToySettingGUI(gridPane, trouser.getImagePath());
            let writebackGui = createWritebackGUI(trouser);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", trouser.name), "name");

            let type = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Type"), "type");
            type.addChildren(TROUSER_TYPES, trouser.type);

            let colour = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Color", trouser.color), "color");

            gridPane.addSaveButton(row, dialog, writebackGui, TROUSER_TOY.saveToyInstances);
            gridPane.addCloseButton(dialog, 2, row++);
            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
};

TROUSER_TOY.loadToyInstances();