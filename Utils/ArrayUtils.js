
function findRandomUnusedElement(array, history, minElementsSinceLastRun = array.length/2) {
    return array[findRandomUnusedIndex(array.length - 1, history, minElementsSinceLastRun)];
}

function removeIndexFromArray(array, removeIndex) {
    let newArray = [];
    for(let index = 0; index < array.length; index++) {
        if(index !== removeIndex) {
            newArray.push(array[index]);
        }
    }

    return newArray;
}

function objectToArray(object) {
    let array = [];
    for (let property in object) {
        if (object.hasOwnProperty(property) && typeof object[property] !== 'function') {
            array.push(property);
        }
    }

    return array;
}

function pushElementsToOtherArray(input, output) {
    for(let x = 0; x < input.length; x++) {
        output.push(input[x]);
    }

    sendDebugMessage('Pushed ' + input.length + ' to result ' + output.length);
    return output;
}