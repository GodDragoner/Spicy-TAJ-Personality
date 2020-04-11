function cockVocabulary() {
    const size = ["little", "cute little", "small", "tiny"];
    const adjectives = ["poor", "desperate", "helpless", "sore", "frustrated", "denied", "aching", "leaky", "horny", "drippy", "dripping", "subservient", 'teased'];
    const answers = ["dick", "cock", "fuckstick", "weiner", "pecker", "prick"];

    let answer = "";

    if(VERBAL_HUMILIATION_LIMIT.isAllowed() || getMood() > NEUTRAL_MOOD) {
        adjectives.push('worthless', 'disgusting', 'laughable', 'excuse for a');
    }

    if(isInChastity()) {
        adjectives.push('locked up', 'caged');
    }

    if(randomInteger(1, 4) == 2) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)]  + " ";
    }

    if(randomInteger(1, 4) == 2 && VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        answer += size[randomInteger(0, size.length - 1)] + " ";
    }

    if(randomInteger(1, 4) == 2 && !BLOCK_AUDIO) {
        playSound("Audio/Spicy/Humiliation/SmallDick/*.mp3");
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}