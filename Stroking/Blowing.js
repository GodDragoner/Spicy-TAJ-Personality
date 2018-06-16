/**
 * Start blowing
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startBlowing(bpm, duration, avoidStop = false) {
    startStroking(bpm);
    sendBlowingTaunts(duration * 1000);

    if (avoidStop) {
        sendMessage(random("Stop", "You can stop now"), 0);
        stopStroking();
    }
}

function sendBlowingTaunts(duration) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(30, 55);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        //Has the duration passed
        if(duration <= 0) {
            return;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        duration -= millisecondsToWait;
        sleep(millisecondsToWait);
    }

    run("Stroking/Taunt/Blowjob/*.js");

    //Start the whole thing all over again
    sendAnalTaunts(duration);
}