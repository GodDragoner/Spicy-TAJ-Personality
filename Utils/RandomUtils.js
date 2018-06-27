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

function isChance(percentage) {
    return randomInteger(1, 100) <= percentage;
}

function random() {
    return arguments[randomInteger(0, arguments.length - 1)];
}