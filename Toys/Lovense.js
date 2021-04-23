const LOVENSE_COMMANDS = {
    AIR_AUTO: createLovenseCommand("AirAuto"),
    AIR_IN: createLovenseCommand("AirIn"),
    AIR_OUT: createLovenseCommand("AirOut"),
    BATTERY: createLovenseCommand("Battery"),
    VIBRATE: createLovenseCommand("Vibrate"),
};

const LOVENSE_TOY_TYPES = {
    MAX: createLovenseToyType('max'),
};


let LOVENSE_TOY_SERVERS = [];

fetchAvailableLovenseToys();

function createLovenseToyType(name) {
    return {
        name: name,

        getLovenseToy: function () {
            for (let x = 0; x < LOVENSE_TOY_SERVERS.length; x++) {
                let toyServer = LOVENSE_TOY_SERVERS[x];

                for (let toyIndex = 0; toyIndex < toyServer.toys.length; toyIndex++) {
                    let toy = toyServer.toys[toyIndex];

                    if (toy.name == this.name) {
                        return toy;
                    }
                }
            }

            return null;
        },

        hasLovenseToy: function () {
            return !isUndefined(this.getLovenseToy());
        }
    }
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
    //Only fleshlight is currently supported, without it no need to check for it
    if(!FLESH_LIGHT.hasToy()) {
        return;
    }

    LOVENSE_TOY_SERVERS = [];

    let response = httpGet('https://api.lovense.com/api/lan/getToys');

    if(isNullOrEmpty(response)) {
        return;
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
                        sendDebugMessage('Vibrate intensity ' + intensity + ' was out of bouds for toy ' + this.name);
                        return undefined;
                    }

                    return this.getJSONFromString(LOVENSE_COMMANDS.VIBRATE.sendRequest(toyServer, this.id, {
                        key: 'v',
                        value: intensity
                    }));
                },
            };

            toyServer.toys.push(toy);
        }

        sendDebugMessage('Found lovense server: ' + toyServer.getIP() + ' (' + toyServer.toys.length + ' toys)');

        if (toyServer.toys.length > 0) {

            LOVENSE_TOY_SERVERS.push(toyServer);
        }
    }
}
