

function findRandomUnusedElement(array, history, minElementsSinceLastRun = array.length/2) {
    return array[findRandomUnusedIndex(array.length - 1, history, minElementsSinceLastRun)];
}