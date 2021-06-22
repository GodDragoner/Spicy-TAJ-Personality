const PARACHUTE_TOY = createToy('parachute');
PARACHUTE_TOY.removeToy = function () {
    sendMessage('You can remove the parachute now %SlaveName% %EmoteHappy%');
    this.setToyOn(false);
};

/*function attachParachute() {

}*/

function getWeightForParachute() {
    let painTolerance = getVar(VARIABLE.SUB_PAIN_TOLERANCE);

    //Max right now is 3kg
    return Math.max(0.5, random(painTolerance*0.25,  (painTolerance + 1)*0.25, (painTolerance + 2)*0.25));
}

function attachWeightToParachute() {
    sendMessage('%SlaveName% go ahead and attach ' + getWeightForParachute() + "kg to your parachute");
    sendMessage('I don\'t care if you use weights, water bottles, a bucket or anything else');
    sendMessage('Tell me when yfou are ready to continue');
    waitForDone(9999);
}