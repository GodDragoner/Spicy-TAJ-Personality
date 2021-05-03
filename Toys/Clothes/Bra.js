const BRA_TOY = createMultipleToy('bra', 'bras');
BRA_TOY.getImagePath = function() {
    return 'Images/Spicy/Toys/Clothing/Bras/' + this.name + '.*';
};

//Mkdir folder if not exists
BRA_TOY.getImageFolder();

const BRA_TYPES = [
    'padded',
    't-shirt',
    'push-up',
    'sports',
    'strapless',
    'convertible',
    'bandeau',
    'balconette',
    'bralette',
    'minimizer',
    'stick-on',
    'plunge',
    'maternity',
    'longline',
    'caged',
    'bridal',
    'cup-less',
    'racerback',
    'sheer',
    'front closure',
    'peephole',
    'backless',
    'halter',
    'vintage',
    'seamless',
    'bodysuit',
];


BRA_TOY.createToyInstance = function(name, color, type, cupSize, sexAppeal, comfort, visible) {
    let toy = createToy(name);
    toy.type = type;
    toy.color = color;

    toy.cupSize = cupSize;

    toy.sexAppeal = sexAppeal;
    toy.comfort = comfort;
    toy.visible = visible;

    toy.getName = function() {
        return this.color + ' ' + this.type + ' ' + BRA_TOY.name;
    };


    toy.fetchToyInstance = function() {
        return this.fetchToy(this.getName(), this.getImagePath());
    };

    toy.getImagePath = function() {
        return 'Images/Spicy/Toys/Clothing/Bras/' + this.name + '.*';
    };

    //Mkdir folder if not exists
    toy.getImageFolder();

    return toy;
};

BRA_TOY.setupNewToy = function() {
    let name = askForNewToyName(BRA_TOY);

    let type = askForToyType(BRA_TOY, BRA_TYPES, 'https://ordnur.com/apparel/different-types-of-bra-women/');

    sendVirtualAssistantMessage('Now please tell me the color of the ' + BRA_TOY.name, 0);
    let color = createInput().getAnswer();

    sendVirtualAssistantMessage('Now please tell me the cup size of the ' + BRA_TOY.name, 0);

    let answer = createInput();
    let cupSize = '';
    while(true) {
        if(answer.isLike('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I')) {
            cupSize = answer.getAnswer();
            break;
        } else {
            sendVirtualAssistantMessage('Please only give me a valid cup size such as A, B, C, D etc.');
            answer.loop();
        }
    }

    let sexAppeal = rateSexAppealOfToy(BRA_TOY);
    let comfort = rateComfortOfToy(BRA_TOY);
    let visible = sendYesOrNoQuestion('Next would you consider this bra hard to hide underneath casual clothing or not? No being easy to hide and yes hard to hide.');

    let toy = BRA_TOY.createToyInstance(name, color, type, cupSize, sexAppeal, comfort, visible);

    createToyAndCheckImage(toy, BRA_TOY);
};

function rateSexAppealOfToy(toyMultiple) {
    sendVirtualAssistantMessage('Now I want you to rate the sex appeal of the ' + toyMultiple.name + ' on a scale of 1-10');
    sendVirtualAssistantMessage('1 being completely plain, no nothing. A plain ' + toyMultiple.name + ' for example. And 10 being a slutty and sexy one');

    return createIntegerInput('So what level of sex appeal would you give this ' + toyMultiple.name + '?', 1, 10, 'That\'s not a valid number', 'This number is outside of the given range of 1-10 %SlaveName%');
}

function rateComfortOfToy(toyMultiple) {
    sendVirtualAssistantMessage('Now I want you to rate the comfort level of the ' + toyMultiple.name + ' on a scale of 1-10');
    sendVirtualAssistantMessage('10 being completely comfortable, even pleasant. And 1 causing a lot of discomfort. Maybe even painful to wear.');

    return createIntegerInput('So what level of comfort would you give this ' + toyMultiple.name + '?', 1, 10, 'That\'s not a valid number', 'This number is outside of the given range of 1-10 %SlaveName%');
}

BRA_TOY.showEditGui = function(bra) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(bra.name);
            let gridPane = createGridPaneGUI();
            let row = createToySettingGUI(gridPane, bra.getImagePath());
            let writebackGui = createWritebackGUI(bra);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", bra.name), "name");

            let type = writebackGui.addWritebackValue(gridPane.addComboBox(row++, "Type"), "type");
            type.addChildren(BRA_TYPES, bra.type);

            let colour = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Color", bra.color), "color");

            let cupSize = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Cup Size", bra.cupSize), "cupSize");

            let sexAppeal = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Sex Appeal", bra.sexAppeal), "sexAppeal");
            sexAppeal.setOnlyIntegers();

            let comfort = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Comfort", bra.comfort), "comfort");
            comfort.setOnlyIntegers();

            let visible = writebackGui.addWritebackValue(gridPane.addCheckBox(row++, "Visible"), "visible");
            visible.setSelected(bra.visible);

            gridPane.addSaveButton(row, dialog, writebackGui, BRA_TOY.saveToyInstances);
            gridPane.addCloseButton(dialog, 2, row++);
            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
};

BRA_TOY.loadToyInstances();