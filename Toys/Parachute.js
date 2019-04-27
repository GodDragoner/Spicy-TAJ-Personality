const PARACHUTE_TOY = createToy('parachute');

/*function attachParachute() {

}*/

function getWeightForParachute() {
    let painTolerance = getPainLimit();

    return Math.max(0.5, painTolerance*0.25);
}

function attachWeightToParachute() {
    sendMessage('%SlaveName% go ahead and attach ' + getWeightForParachute() + "kg to your parachute");
    sendMessage('I don\'t know if you use weights, water bottles, a bucket or anything else');
    sendMessage('Tell me when you are ready to continue');
    waitForDone();
}