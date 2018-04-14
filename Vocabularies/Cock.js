function cockVocabulary() {
    var size = ["little", "poor", "cute little"];
    var adjectives = ["desperate", "helpless", "sore", "frustrated", "denied", "aching", "leaky", "horny", "drippy", "dripping", "subservient", "wrinkly"];
    var answers = ["dick", "cock", "fuckstick", "weiner", "pecker", "prick"];


    var answer = "";

    if(randomInteger(1, 4) == 2) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)]  + " ";
    }

    if(randomInteger(1, 4) == 2) {
        answer += size[randomInteger(0, size.length - 1)] + " ";
    }

    if(randomInteger(1, 4) == 2) {
        playSound("/Audio/Spicy/Humiliation/SmallDick");
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}