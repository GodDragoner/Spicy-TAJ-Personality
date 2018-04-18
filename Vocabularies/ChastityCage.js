function chastityCageVocabulary() {
    const material = isMetalChastityCage()? "metal" : "plastic";
    const cock = random("cock", "dick");

    const adjectives = [];

    const sizeAdjective = ["little"];

    const descriptive = ["lust detention"];

    const mood = getMood();
    if(mood == VERY_PLEASED_MOOD || mood == PLEASED_MOOD) {
        adjectives.push("sweet", "delicious", "adorable", "delightful", "lovely");
    } else {
        adjectives.push("nasty", "perfect", "evil");
        sizeAdjective.push("teeny", "tiny");
    }

    if(getVar(VARIABLE_CHASTITY_CAGE_PIERCED, false)) {
        descriptive.push("pierced");
    }

    if(getVar(VARIABLE_CHASTITY_SPIKES_ON, false)) {
        descriptive.push("spiky", "spike encased", "spiked");
    }

    //Prison is kinda strange
    const answers = /*["prison", material + " prison"]*/ [];
    if(isFullChastityBelt()) {
        answers.push("belt", material + " belt", "full belt", "full " + material + " belt");
    } else {
        answers.push("cage", material + " cage", "ball-trapping belt", material + " ball-trapping belt");
    }

    let answer = "";

    if(randomInteger(1, 4) == 2) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)] + " ";
    }

    if(randomInteger(1, 4) == 2) {
        answer += sizeAdjective[randomInteger(0, sizeAdjective.length - 1)] + " ";
    }

    if(randomInteger(1, 4) == 2) {
        answer += descriptive[randomInteger(0, descriptive.length - 1)] + " ";
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}