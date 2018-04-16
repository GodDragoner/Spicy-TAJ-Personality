function randomInteger(lowest, highest) {
    if(lowest >= highest) {
        return lowest;
    }

    return Math.floor(Math.random() * highest) + lowest;
}

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}