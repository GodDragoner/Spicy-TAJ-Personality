const SKIRT_TOY = createMultipleToy('skirt', 'skirts');
SKIRT_TOY.getImagePath = function() {
    return 'Images/Spicy/Toys/Clothing/Skirts/' + this.name + '.*';
};

//Mkdir folder if not exists
SKIRT_TOY.getImageFolder();

SKIRT_TOY.createToyInstance = function(name, height, color) {
    let toy = createToy(name);
    toy.height = height;
    toy.color = color;

    toy.getName = function() {
        return this.color + ' ' + SKIRT_TOY.name;
    };

    toy.fetchToyInstance = function() {
        return this.fetchToy(this.getName(), this.getImagePath());
    };

    toy.getImagePath = function() {
        return 'Images/Spicy/Toys/Clothing/Skirts/' + this.name + '.*';
    };

    //Mkdir folder if not exists
    toy.getImageFolder();

    return toy;
};

SKIRT_TOY.setupNewToy = function() {
    let name = askForNewToyName( SKIRT_TOY);

    sendVirtualAssistantMessage('Next please tell me the length of the skirt in centimeters', 0);
    let answer = createInput();
    let height = -1;

    while (true) {
        if (answer.isDouble()) {
            height = answer.getDouble();

            if (height <= 20) {
                sendVirtualAssistantMessage('Oh my. That\'s so slutty %Grin%');
                sendVirtualAssistantMessage('If it\'d be up to me that\'d be the only thing you were allowed to wear');
            } else if (height <= 35) {
                sendVirtualAssistantMessage('That\'s quite short %Grin%');
                sendVirtualAssistantMessage('Definitely something daring and almost slutty enough for you %Lol%')
            } else if (height <= 50) {
                sendVirtualAssistantMessage('That\'s quite long');
                sendVirtualAssistantMessage('Almost too long but everyone needs some good long skirt, right? %Grin%');
            } else {
                sendVirtualAssistantMessage('Something you would probably wear alongside a dress or something %Grin%');
                sendVirtualAssistantMessage('We will find some nice use for it %EmoteHappy%');
            }
            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now please tell me the color of the skirt', 0);
    let color = createInput().getAnswer();

    let skirt = SKIRT_TOY.createToyInstance(name, height, color);

    sendVirtualAssistantMessage('Please make sure to add a picture of your skirt named accordingly to your ' + SKIRT_TOY.getImageFolder().getPath() +  ' folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(skirt.getImagePath(), 5);

    SKIRT_TOY.toyInstances.push(skirt);

    SKIRT_TOY.saveToyInstances();

    sendVirtualAssistantMessage('Saved your new skirt');
    sendVirtualAssistantMessage('Enjoy %Grin%');
};

SKIRT_TOY.showEditGui = function(skirt) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(skirt.name);
            let gridPane = createGridPaneGUI();
            let row = createToySettingGUI(gridPane, skirt.getImagePath());
            let writebackGui = createWritebackGUI(skirt);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", skirt.name), "name");

            let height = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Height", skirt.height), "height");
            height.setOnlyDoubles();

            let colour = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Color", skirt.color), "color");

            gridPane.addSaveButton(row, dialog, writebackGui, SKIRT_TOY.saveToyInstances);
            gridPane.addCloseButton(dialog, 2, row++);
            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
};

SKIRT_TOY.loadToyInstances();

function createToySetupMenu(toyMultipleObject) {
    let menu = createMenu(capitalize(toyMultipleObject.name));

    menu.registerOption("New " + capitalize(toyMultipleObject.name), ["new " + toyMultipleObject.name, "add " + toyMultipleObject.name], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);

        sendVirtualAssistantMessage('Bought a new ' + toyMultipleObject.name + '? How exciting! %Grin%');
        toyMultipleObject.setupNewToy();
        return false;
    });

    if(toyMultipleObject.toyInstances.length > 0) {
        menu.registerOption("Edit " +  pluralize(capitalize(toyMultipleObject.name)), ["edit", "modify"], function (answer) {
            toyMultipleObject.openListGui();
            return false;
        });
    }

    menu.registerOption("Return", ["return"], function (answer) {
        return true;
    });

    menu.callMenu();
}