const HIGH_HEEL_LOCK = createToy('high heel lock');

const HIGH_HEEL_TOY = createToy('high heel');

const highHeels = [];

loadHighHeels();

function getRandomHighHeel() {
    return random(highHeels);
}

function getHighHeelByName(name) {
    for (let y = 0; y < highHeels.length; y++) {
        if (name.toUpperCase() === highHeels[y].name.toUpperCase()) {
            return highHeels[y];
        }
    }

    return null;
}

function loadHighHeels() {
    if (!isVar('highHeels')) {
        setVar('highHeels', new java.util.ArrayList());
    } else {
        let arrayList = tryGetArrayList('highHeels');

        for (let x = 0; x < arrayList.size(); x++) {
            let entry = arrayList.get(x);
            highHeels.push(createHighHeel().fromString(entry));
        }
    }
}

function setupNewHighHeel() {
    sendVirtualAssistantMessage('Please enter a name for your new high heel', 0);

    let answer = createInput();
    let name = 'undefined';

    while (true) {
        if (getHighHeelByName(answer.getAnswer()) != null) {
            sendVirtualAssistantMessage('A high heel with a similar name already exists. Please choose a different name.', 0);
            answer.loop();
        } else {
            name = answer.getAnswer();
            break;
        }
    }

    sendVirtualAssistantMessage('Next please tell me the length of the heel in centimeters', 0);
    answer = createInput();
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

    let heel = createHighHeel(name, height, color);

    sendVirtualAssistantMessage('Please make sure to add a picture of your high heel named like your high heel to your Toys/High Heels folder.', false);
    sleep(2);
    sendVirtualAssistantMessage('So in this case make sure to add a picture called "' + name + '.jpg" to the high heels folder', false);
    sleep(2);
    sendVirtualAssistantMessage('If it already exists a picture of it should show up now', false, true);
    showImage(heel.getImagePath(), 5);

    highHeels.push(heel);

    saveHighHeels();

    sendVirtualAssistantMessage('Saved your new high heel');
    sendVirtualAssistantMessage('Enjoy %Grin%');
}

function saveHighHeels() {
    let arrayList = new java.util.ArrayList();

    for (let y = 0; y < highHeels.length; y++) {
        arrayList.add(highHeels[y].toString());
    }

    setVar('highheels', arrayList);
}

function createHighHeel(name, height, color) {
    return {
        name: name,
        height: height,
        color: color,

        getImagePath: function () {
            return 'Images/Spicy/Toys/High Heels/' + this.name + '.*';
        },

        fetchHighHeel: function () {
            return fetchToy(this.color + ' ' + this.name, this.getImagePath());
        },

        toString: function () {
            return serializeObject(this);
        },

        fromString: function (string) {
            return deserializeObject(this, string);
        },
    }
}

function openHighHeelList() {
    let list = javafx.collections.FXCollections.observableArrayList();

    for (let x = 0; x < highHeels.length; x++) {
        list.add(highHeels[x].name);
    }

    createToyListGUI(function (listView, event) {
        const selectedHeel = listView.listView.getSelectionModel().getSelectedItem();
        if (selectedHeel != null) {
            showHighHeelGUI(getHighHeelByName(selectedHeel));
        }
    }, "High Heels", list)
}

function showHighHeelGUI(highHeel) {
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

            let save = createButton("Save");
            gridPane.setConstraints(save.button, 1, row);
            gridPane.getChildren().add(save.button);

            save.setOnAction(function (handle) {
                writebackGui.writeBack();
                saveHighHeels();
                dialog.close();
            });

            gridPane.addCloseButton(dialog, 2, row++);

            dialog.readyAndShow(gridPane.gridPane);
        }
    });
    runGui(new CustomRunnable());
}
