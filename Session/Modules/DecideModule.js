//End session
if (getDate(VARIABLE_CURRENT_SESSION_DATE).addMinute(getVar(VARIABLE_DEVOTION)).hasPassed()) {
    //TODO: End session
}

var moduleChance = 50;
var teaseModuleChance = moduleChance;
var teaseModuleAdditions = [
    //Personality strictness 1
    teaseModuleChance / 2,
    teaseModuleChance / 3,
    0,
    -teaseModuleChance / 4,
    -teaseModuleChance / 3,
    //Personality strictness 2
    teaseModuleChance / 3,
    teaseModuleChance / 4,
    0,
    -teaseModuleChance/3,
    -teaseModuleChance/2,
    //Personality strictness 3
    teaseModuleChance/4,
    teaseModuleChance/5,
    0,
    -(teaseModuleChance - teaseModuleChance/4),
    -(teaseModuleChance - teaseModuleChance/5)
];

var index = 0;
if(ACTIVE_PERSONALITY_STRICTNESS == 1) {
    index += 5;
} else if(ACTIVE_PERSONALITY_STRICTNESS == 2) {
    index += 10;
}

if(getMood() == PLEASED_MOOD) {
    index += 1;
} else if(getMood() == NEUTRLA_MOOD) {
    index += 2;
} else if(getMood() == ANNOYED_MOOD) {
    index += 3;
} else if(getMood() == VERY_ANNOYED_MOOD) {
    index += 4;
}

//Now apply the changes
teaseModuleChance += teaseModuleAdditions[index];

if(getVar(VARIABLE_PUNISHMENT_POINTS) >= 250) {
    teaseModuleChance -= 10;
}

if(getVar(VARIABLE_ANGER) > 25) {
    teaseModuleChance -= 10;
}

var sissyModuleChance = 50;
var painModuleChance = 50;
var slaveModuleChance = 50;
var humiliationModuleChance = 50;

var max = teaseModuleChance + sissyModuleChance + painModuleChance + slaveModuleChance + humiliationModuleChance;
var moduleIndicator = randomInteger(0, max);

if(moduleIndicator < teaseModuleChance) {

} else if(moduleIndicator < sissyModuleChance + teaseModuleChance) {

} else if(moduleIndicator < painModuleChance + sissyModuleChance + teaseModuleChance) {

} else if(moduleIndicator < slaveModuleChance + sissyModuleChance + teaseModuleChance) {

} else if(moduleIndicator < humiliationModuleChance + slaveModuleChance + sissyModuleChance + teaseModuleChance) {

}



