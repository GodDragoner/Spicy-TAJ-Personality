function randomInteger(lowest, highest) {
    return Math.floor(Math.random() * highest) + lowest;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}