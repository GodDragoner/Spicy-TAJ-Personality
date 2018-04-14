function chastityCageVocabulary() {
    var material = isMetalChastityCage()? "metal" : "plastic";
    var cock = random("cock", "dick");

    var adjectives = [];

    var sizeAdjective = ["little"];

    var descriptive = ["lust detention"];

    var mood = getMood();
    if(mood == VERY_PLEASED_MOOD || mood == PLEASED_MOOD) {
        adjectives.push("sweet", "delicious", "adorable", "delightful", "lovely");
    } else {
        adjectives.push("nasty", "perfect", "evil");
        sizeAdjective.push("teeny", "tiny");
    }

    if(getVar(VARIABLE_CHASTITY_CAGE_PIERCED)) {
        descriptive.push("pierced");
    }

    if(getVar(VARIABLE_CHASTITY_SPIKES_ON)) {
        descriptive.push("spiky", "spike encased", "spiked");
    }

    var answers = ["prison", material + " prison"];
    if(isFullChastityBelt()) {
        answers.push("belt", material + " belt", "full belt", "full " + material + " belt");
    } else {
        answers.push("cage", material + " cage", "ball-trapping belt", material + " ball-trapping belt");
    }

    var answer = "";

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