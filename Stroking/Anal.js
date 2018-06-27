/**
 * Start anal penetration
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startAnal(bpm, duration) {
    startStroking(bpm);
    sendAnalTaunts(duration*1000);
    sendMessage(random("Stop", "You can stop now"), 0);
    stopStroking();
}

function sendAnalTaunts(duration) {
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
        sleep(millisecondsToWait, "MILLISECONDS");
    }

    run("Stroking/Taunt/Anal/*.js");

    //Start the whole thing all over again
    sendAnalTaunts(duration);
}