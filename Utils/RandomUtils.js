/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function randomInteger(min, max) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinnerIndex(array) {
    let maxChance = 0;
    for(let index = 0; index < array.length; index++) {
        maxChance += array[index];
    }

    const randomInt = randomInteger(0, maxChance);

    let currentChance = 0;

    for(let index = 0; index < array.length; index++) {
        currentChance += array[index];

        if(randomInt <= currentChance) {
            return index;
        }
    }

    sendDebugMessage('No winner in array found!');
    return -1;
}

/**
 * Shuffles array in place.
 * @param {Array} a items an array containing the items.
 */
function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function findRandomUnusedIndex(indexMax, history, minElementsSinceLastRun = indexMax/2) {
    let indexesToTry = new java.util.ArrayList();

    for(let x = 0; x <= indexMax; x++) {
        indexesToTry.add(x);
    }

    let randomIndex = null;

    //At least a bit of diversity
    while(randomIndex == null || (history.isInHistory(randomIndex) && history.getModulesSinceHistory(randomIndex) < minElementsSinceLastRun)) {
        //We tried all possibilities
        if(indexesToTry.isEmpty()) {
            break;
        }

        randomIndex = randomInteger(0, indexesToTry.size() - 1);

        //Remove from array so we won't get it again
        indexesToTry.remove(randomIndex);
    }

    history.addHistoryRun(randomIndex);

    return randomIndex;
}

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    //One element
    if(arguments.length === 1) {
        if(Array.isArray(arguments[0])) {
            if(arguments[0].length === 0) {
                return null;
            }

            return arguments[0][randomInteger(0, arguments[0].length - 1)];
        }
    }

    return arguments[randomInteger(0, arguments.length - 1)];
}

function isWithin(number, min, max) {
    return number >= min && number <= max;
}