const HIGH_HEEL_LOCK = createToy('high heel lock');

const HIGH_HEEL_TOY = createMultipleToy('high heel', 'highHeels');
HIGH_HEEL_TOY.getImagePath = function() {
    return 'Images/Spicy/Toys/High Heels/' + this.name + '.*';
};

//Mkdir folder if not exists
HIGH_HEEL_TOY.getImageFolder();

HIGH_HEEL_TOY.setupNewToy = function() {
    let name = askForNewToyName( HIGH_HEEL_TOY);

    sendVirtualAssistantMessage('Next please tell me the length of the heel in centimeters', 0);
    let answer = createInput();
    let height = -1;

    while (true) {
        if (answer.isDouble()) {
            height = answer.getDouble();

            if (height <= 8) {
                sendVirtualAssistantMessage('I see... Nothing too long');
                sendVirtualAssistantMessage('Fair enough for casual training and wearing %Grin%');
            } else if (height <= 12) {
                sendVirtualAssistantMessage('This will be quite a good length for training %Grin%');
            } else if (height <= 16) {
                sendVirtualAssistantMessage('That\'s quite long');
                sendVirtualAssistantMessage('You will regret buying those once you spent a whole day in them as punishment %Grin%');
            } else {
                sendVirtualAssistantMessage('That\'s even painful to imagine');
                sendVirtualAssistantMessage('This will definitely make your %DomHonorific% proud %EmoteHappy%');
            }

            break;
        } else {
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.", 0);
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now please tell me the color of the shoe', 0);
    let color = createInput().getAnswer();

    let heel = HIGH_HEEL_TOY.createToyInstance(name, height, color);

    sendVirtualAssistantMessage('Please make sure to add a picture of your high heel named like your high heel to your Toys/High Heels folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the high heels folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(heel.getImagePath(), 5);

    HIGH_HEEL_TOY.toyInstances.push(heel);

    HIGH_HEEL_TOY.saveToyInstances();

    sendVirtualAssistantMessage('Saved your new high heel');
    sendVirtualAssistantMessage('Enjoy %Grin%');
};

HIGH_HEEL_TOY.createToyInstance = function(name, height, color) {
    let toy = createToy(name);
    toy.height = height;
    toy.color = color;

    toy.getName = function() {
        return this.color + ' ' + this.name;
    };

    toy.fetchToyInstance = function() {
        return this.fetchToy(this.getName(), this.getImagePath());
    };

    toy.getImagePath = function() {
        return 'Images/Spicy/Toys/High Heels/' + this.name + '.*';
    };

    return toy;
};

HIGH_HEEL_TOY.showEditGui = function(highHeel) {
    const RunnableClass = Java.type('java.lang.Runnable');
    let CustomRunnable = Java.extend(RunnableClass, {
        run: function () {
            const dialog = createDialog(highHeel.name);
            let gridPane = createGridPaneGUI();
            let row = createToySettingGUI(gridPane, highHeel.getImagePath());
            let writebackGui = createWritebackGUI(highHeel);

            let nameBox = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Name", highHeel.name), "name");

            let height = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Height", highHeel.height), "height");
            height.setOnlyDoubles();

            let colour = writebackGui.addWritebackValue(gridPane.addTextSetting(row++, "Color", highHeel.color), "color");

            gridPane.addSaveButton(row, dialog, writebackGui, HIGH_HEEL_TOY.saveToyInstances);
            gridPane.addCloseButton(dialog, 2, row++);
            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
};

HIGH_HEEL_TOY.loadToyInstances();

