const HIGH_HEEL_LOCK = createToy('high heel lock');

const HIGH_HEEL_TOY = createToy('high heel');

const highHeels = [];

loadHighHeels();

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
        let arrayList = getVar('highHeels');

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
            sendVirtualAssistantMessage("Please only enter a number such as 1 now.");
            answer.loop();
        }
    }

    sendVirtualAssistantMessage('Now please tell me the color of the shoe', 0);
    let color = createInput().getAnswer();

    let heel = createHighHeel(name, height,  color);

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

        getImagePath: function() {
            return 'Images/Spicy/Toys/High Heels/' + this.name + '.*';
        },

        fetchHighHeel: function() {
            fetchToy(this.color + ' ' + this.name, this.getImagePath());
        },

        toString: function() {
            return 'name:' + this.name + ',height:' + this.height + ',color:' + this.color;
        },

        fromString: function(string) {
            let splitArray = string.split(',');
            for (let y = 0; y < splitArray.length; y++) {
                let valueEntry = splitArray[y];

                if (valueEntry.indexOf('name:') !== -1) {
                    this.name = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('height:') !== -1) {
                    this.height = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                } else if (valueEntry.indexOf('color:') !== -1) {
                    this.color = valueEntry.substr(valueEntry.indexOf(':') + 1, valueEntry.length);
                }
            }
        }
    }
}
