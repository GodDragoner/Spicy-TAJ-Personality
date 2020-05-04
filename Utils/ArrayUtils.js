
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