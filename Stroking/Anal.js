let initialBPMIncrease = 0;

//TODO: Based on body position (like riding can't be that fast)
const MAX_ANAL_BPM = 160;

/**
 * Start anal penetration
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startAnal(bpm, duration) {
    startStroking(bpm);

    //TODO: BPM increase can't be too quick for beginners
    sendAnalTaunts(duration*1000);
    //QUALITY: Sounds
    sendMessage(random("Stop", "You can stop now"), 0);
    stopStroking();

    //Sub might be in a position where he can't see the next so he needs to look up
    playBellSound();
    wait(10);
}

function getInitialBPM() {
    //Min 30 bpm
    let result = Math.max(30, Math.ceil(getVar(VARIABLE.ASS_LEVEL)*2.5) + initialBPMIncrease);
    //Min 5 max with ass level 30 is 15
    initialBPMIncrease += randomInteger(5, Math.max(5, Math.floor(getVar(VARIABLE.ASS_LEVEL)/2)));
    return Math.min(result, MAX_ANAL_BPM);
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