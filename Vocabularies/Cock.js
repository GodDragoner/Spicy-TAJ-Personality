function cockVocabulary() {
    const size = ["little", "poor", "cute little"];
    const adjectives = ["desperate", "helpless", "sore", "frustrated", "denied", "aching", "leaky", "horny", "drippy", "dripping", "subservient", "wrinkly"];
    const answers = ["dick", "cock", "fuckstick", "weiner", "pecker", "prick"];


    let answer = "";

    if(randomInteger(1, 4) == 2) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)]  + " ";
    }

    if(randomInteger(1, 4) == 2) {
        answer += size[randomInteger(0, size.length - 1)] + " ";
    }

    if(randomInteger(1, 4) == 2 && !BLOCK_AUDIO) {
        playSound("Audio/Spicy/Humiliation/SmallDick/*.mp3");
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}