let initialBPMIncrease = 0;
const MAX_ANAL_BPM = 180;

/**
 * Start anal penetration
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startAnal(bpm, duration) {
    startStroking(bpm);
    sendAnalTaunts(duration*1000);
    //QUALITY: Sounds
    sendMessage(random("Stop", "You can stop now"), 0);
    stopStroking();

    //Sub might be in a position where he can't see the next so he needs to look up
    playBellSound();
    wait(10);
}

function getInitialBPM() {
    let result = Math.max(30, Math.ceil(getVar(VARIABLE.ASS_LEVEL)*2.5) + initialBPMIncrease);
    initialBPMIncrease += randomInteger(5, Math.max(5, Math.floor(getVar(VARIABLE.ASS_LEVEL)/2)));
    return Math.max(result, MAX_ANAL_BPM);
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

    //TODO: Only speed or slow if certain limits aren't reached yet
    run("Stroking/Taunt/Anal/*.js");

    //Start the whole thing all over again
    sendAnalTaunts(duration);
}