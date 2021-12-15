const LOVENSE_COMMANDS = {
    AIR_AUTO: createLovenseCommand("AirAuto"),
    AIR_IN: createLovenseCommand("AirIn"),
    AIR_OUT: createLovenseCommand("AirOut"),
    BATTERY: createLovenseCommand("Battery"),
    VIBRATE: createLovenseCommand("Vibrate"),
    A_VIBRATE: createLovenseCommand("AVibrate"),
    PRESET: createLovenseCommand("Preset"),
};

const LOVENSE_TOY_TYPES = {
    MAX: createLovenseToyType('max'),
    HUSH: createLovenseToyType('hush'),
};


let LOVENSE_TOY_SERVERS = [];

fetchAvailableLovenseToys();

function createLovenseToyType(name) {
    return extend(createToy(name), {
        name: name,

        getLovenseToy: function () {
            for (let x = 0; x < LOVENSE_TOY_SERVERS.length; x++) {
                let toyServer = LOVENSE_TOY_SERVERS[x];

                for (let toyIndex = 0; toyIndex < toyServer.toys.length; toyIndex++) {
                    let toy = toyServer.toys[toyIndex];

                    if (toy.name === this.name) {
                        return toy;
                    }
                }
            }

            return null;
        },

        fetchToy: function (amount = 0) {
            let result = fetchToy(name, this.getImagePath(), amount);

            if(result) {
                //Check if toy online in the network
                if(!this.hasLovenseToy()) {
                    sendMessageBasedOnSender('Seems like your toy is not connected');

                    sendMessageBasedOnSender('Do you want to connect and try again?');
                    let answer = createInput();

                    while(true) {
                        if(answer.isLike('Yes')) {
                            sendMessageBasedOnSender('Connect the device and tell me when you are done');
                            waitForDone();
                            let result = fetchAvailableLovenseToys();

                            //Undefined is also false, so we check if it is false specifically and not undefined
                            if(result === false) {
                                sendMessageBasedOnSender('I failed to find any available lovense server');
                                sendMessageBasedOnSender('Do you want to try again?');
                                answer.loop();
                            } else if(result === undefined) {
                                sendMessageBasedOnSender('Apparently you don\'t own any lovense toys. Please report this bug');
                                break;
                            } else {
                                if(this.hasLovenseToy()) {
                                    sendMessageBasedOnSender('I am successfully connected to the device now %EmoteHappy%');
                                    break;
                                } else {
                                    sendMessageBasedOnSender('I found a lovense server but your ' + this.getDisplayName() + ' was not connected apparently');
                                    sendMessageBasedOnSender('Do you want to try again?');
                                    answer.loop();
                                }
                            }
                        } else if(answer.isLike('No')) {
                            break;
                        }
                    }

                    return this.hasLovenseToy();
                }
            }

            return result;
        },

        getDisplayName: function() {
            return 'lovense ' + this.name;
        },

        hasLovenseToy: function () {
            return !isUndefined(this.getLovenseToy());
        }
    });
}

function createLovenseCommand(urlParam) {
    return {
        urlParam: urlParam,

        sendRequest: function (server, toyId) {
            let additionArgs = '';

            if (arguments.length >= 3) {
                additionArgs += '&';

                for (let x = 2; x < arguments.length; x++) {
                    additionArgs += arguments[x].key + '=' + arguments[x].value;
                    additionArgs += '&';
                }

                //Cut off last &
                additionArgs = additionArgs.substr(0, additionArgs.length - 1);
            }

            let query = server.getURL() + '/' + urlParam + '?t' + '=' + toyId + additionArgs;

            //sendDebugMessage(query);

            try {
                return httpGet(query).data;
            } catch (exception) {
                sendDebugMessage('Failed to query lovense toy with query ' + query);
                return exception;
            }
        }
    }
}


function fetchAvailableLovenseToys() {
    //Only these two are supported rn, without it no need to check for it
    if (!LOVENSE_TOY_TYPES.MAX.hasToy && !LOVENSE_TOY_SERVERS.HUSH.has()) {
        return undefined;
    }

    LOVENSE_TOY_SERVERS = [];

    let response = httpGet('https://api.lovense.com/api/lan/getToys');

    if (isNullOrEmpty(response)) {
        return false;
    }

    let obj = JSON.parse(response.data);

    let servers = Object.keys(obj);

    for (let x = 0; x < servers.length; x++) {
        let toyServerJson = obj[servers[x]];


        let toyServer = {
            deviceId: toyServerJson.deviceId,

            domain: toyServerJson.domain,

            platform: toyServerJson.platform,

            httpPort: toyServerJson.httpPort,

            httpsPort: toyServerJson.httpsPort,

            toys: [],

            getIP: function () {
                let ip = this.domain.substr(0, this.domain.length - '.lovense.club'.length);
                return ip.replace(/-/g, ".");
            },

            getURL: function () {
                return 'http://' + this.getIP() + ':' + this.httpPort;
            }
        };


        let toys = Object.keys(toyServerJson.toys);

        for (let toyIndex = 0; toyIndex < toys.length; toyIndex++) {
            let toyJson = toyServerJson.toys[toys[toyIndex]];

            let toy = {
                nickName: toyJson.nickName,
                name: toyJson.name,
                id: toyJson.id,
                battery: toyJson.battery,
                version: toyJson.version,
                status: toyJson.status,
                vibrationLevel: 0,

                getJSONFromString: function (data) {
                    return JSON.parse(data);
                },

                /**
                 * Sets the contraction speed to auto speed
                 * @param speed Contraction speed auto (0 - 3)
                 * @returns {any}
                 */
                setAirAuto: function (speed) {
                    if (!isWithin(speed, 0, 3)) {
                        sendDebugMessage('Air speed ' + speed + ' was out of bouds for toy ' + this.name);
                        return undefined;
                    }

                    return this.getJSONFromString(LOVENSE_COMMANDS.AIR_AUTO.sendRequest(toyServer, this.id, {
                        key: 'v',
                        value: speed
                    }));
                },

                addAir: function () {
                    return this.getJSONFromString(LOVENSE_COMMANDS.AIR_IN.sendRequest(toyServer, this.id));
                },

                removeAir: function () {
                    return this.getJSONFromString(LOVENSE_COMMANDS.AIR_OUT.sendRequest(toyServer, this.id));
                },

                getBattery: function () {
                    return this.getJSONFromString(LOVENSE_COMMANDS.BATTERY.sendRequest(toyServer, this.id));
                },

                /**
                 *
                 * @param intensity Intensity 0-20
                 * @returns {any}
                 */
                setVibrate: function (intensity) {
                    if (!isWithin(intensity, 0, 20)) {
                        sendDebugMessage('Vibrate intensity ' + intensity + ' was out of bounds for toy ' + this.name);
                        return undefined;
                    }

                    this.vibrationLevel = intensity;

                    return this.getJSONFromString(LOVENSE_COMMANDS.VIBRATE.sendRequest(toyServer, this.id, {
                        key: 'v',
                        value: intensity
                    }));
                },

                getVibrationLevel: function() {
                    return this.vibrationLevel;
                },

                /**
                 *
                 * @param intensity Intensity 0-20
                 * @returns {any}
                 */
                setAVibrate: function (intensity) {
                    if (!isWithin(intensity, 0, 20)) {
                        sendDebugMessage('Vibrate intensity ' + intensity + ' was out of bounds for toy ' + this.name);
                        return undefined;
                    }

                    return this.getJSONFromString(LOVENSE_COMMANDS.A_VIBRATE.sendRequest(toyServer, this.id, {
                        key: 'v',
                        value: intensity
                    }));
                },

                /**
                 *
                 * @param presetId Preset
                 * @returns {any}
                 */
                setPreset: function (presetId) {
                    if (!isWithin(presetId, 0, 3)) {
                        sendDebugMessage('Preset ' + presetId + ' was out of bounds for toy ' + this.name);
                        return undefined;
                    }

                    return this.getJSONFromString(LOVENSE_COMMANDS.PRESET.sendRequest(toyServer, this.id, {
                        key: 'v',
                        value: presetId
                    }));
                },
            };

            toyServer.toys.push(toy);
        }

        sendDebugMessage('Found lovense server: ' + toyServer.getIP() + ' (' + toyServer.toys.length + ' toys)');

        if (toyServer.toys.length > 0) {

            LOVENSE_TOY_SERVERS.push(toyServer);
        }

        return true;
    }
}
