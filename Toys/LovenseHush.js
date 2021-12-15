function randomHushInteraction() {
    let randomInteraction = randomInteger(0, 3);

    sendDebugMessage('Performing hush interaction: ' + randomInteraction);

    if (randomInteraction === 0) {
        let currentVibeLevel = LOVENSE_TOY_TYPES.HUSH.getVibrationLevel();

        //Feels evil? Jump to 20 or 0 (vibe level)
        if (feelsEvil()) {
            if (currentVibeLevel !== 20) {
                LOVENSE_TOY_TYPES.HUSH.setVibrate(20);
            } else {
                LOVENSE_TOY_TYPES.HUSH.setVibrate(0);
            }
        } else {
            //In most cases just slowly adjust vibration level
            if (isChance(80)) {
                if (currentVibeLevel === 0) {
                    //We can only go higher
                    LOVENSE_TOY_TYPES.HUSH.setVibrate(++currentVibeLevel);
                } else if (currentVibeLevel === 20) {
                    //We can only go lower
                    LOVENSE_TOY_TYPES.HUSH.setVibrate(--currentVibeLevel);
                } else if (isChance(50)) {
                    //We will go higher (50% chance)
                    LOVENSE_TOY_TYPES.HUSH.setVibrate(++currentVibeLevel);
                } else {
                    //We will go lower (50% chance)
                    LOVENSE_TOY_TYPES.HUSH.setVibrate(--currentVibeLevel);
                }
            } else {
                //Jumping vibe level at random
                LOVENSE_TOY_TYPES.HUSH.setVibrate(randomInteger(0, 20));
            }
        }
    }
}


function createLovensePattern(doPattern) {
    return {
        doRepeat: function (toy, times, args) {
            for (let x = 0; x < times; x++) {
                this.doPattern(toy, args);
            }
        },

        doPattern: doPattern,
    }
}

const LOVENSE_PATTERNS = {
    GO_TO: createLovensePattern(
        function (toy, args) {
            let target = args['target'];

            if (target === undefined) {
                target = 10;
            }

            //Just the wave with the same min and max value
            LOVENSE_PATTERNS.WAVE.doPattern(toy, extend(args, {
                min: target,
                max: target,
            }))
        }),
    WAVE: createLovensePattern(
        function (toy, args) {
            let delayFunction = args['delayFunction'];

            if (delayFunction === undefined) {
                delayFunction = function () {
                    return 1000;
                }
            }

            let delay = delayFunction();

            if (delay <= 500) {
                delay = 500;
                sendDebugMessage('Delay was smaller than the allowed 500 milliseconds');
            }

            let currentLevel = toy.getVibrationLevel();
            let min = args['min'];
            let max = args['max'];

            if (min === undefined) {
                min = 0;
            }

            if (max === undefined) {
                max = 20;
            }

            while (currentLevel < max) {
                toy.setVibrate(++currentLevel);
                sleep(delay, "MILLISECONDS");
            }

            while (currentLevel > min) {
                toy.setVibrate(--currentLevel);
                sleep(delay, "MILLISECONDS");
            }
        }),
    SPIKE: createLovensePattern(
        function (toy, args) {
            let delayFunction = args['delayFunction'];

            if (delayFunction === undefined) {
                delayFunction = function () {
                    return 1000;
                }
            }

            let delay = delayFunction();

            if (delay <= 500) {
                delay = 500;
                sendDebugMessage('Delay was smaller than the allowed 500 milliseconds');
            }

            let currentLevel = toy.getVibrationLevel();
            let min = args['min'];
            let max = args['max'];
            let stayOnSpikeFunction = args['stayOnSpikeFunction'];

            if (stayOnSpikeFunction === undefined) {
                stayOnSpikeFunction = function () {
                    return 5000;
                }
            }

            let stayOnBottomFunction = args['stayOnBottomFunction'];

            if (stayOnBottomFunction === undefined) {
                stayOnBottomFunction = function () {
                    return 5000;
                }
            }

            if (min === undefined) {
                min = 0;
            }

            if (max === undefined) {
                max = 20;
            }

            while (currentLevel < max) {
                toy.setVibrate(++currentLevel);
                sleep(delay, "MILLISECONDS");
            }

            sleep(stayOnSpikeFunction(), "MILLISECONDS");

            while (currentLevel > min) {
                toy.setVibrate(--currentLevel);
                sleep(delay, "MILLISECONDS");
            }

            sleep(stayOnBottomFunction(), "MILLISECONDS");
        }),
};
