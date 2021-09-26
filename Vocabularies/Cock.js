function cockVocabulary() {
    const size = ["little", "cute little", "small", "tiny"];
    const adjectives = ["poor", "desperate", "helpless", "sore", "frustrated", "denied", "aching", "leaky", "horny", "drippy", "dripping", "subservient", 'teased', 'agonized'];
    let answers = ["dick", "cock", "fuckstick", "wiener", "pecker", "prick"];

    let answer = "";

    if(VERBAL_HUMILIATION_LIMIT.isAllowed() && feelsLikeInsultingSlave()) {
        adjectives.push('worthless', 'disgusting', 'laughable', 'excuse for a', 'sorry');
    }

    if(SISSY_LIMIT.isAllowed()) {
        adjectives.push('cute');

        //Clear answers if we only address as sissy
        if(RULE_ONLY_SISSY_ADDRESS.isActive()) {
            answers = [];
        }

        answers.push('clit', 'clitty');
    }

    if(isInChastity()) {
        adjectives.push('locked up', 'caged');
    }

    //Add adjective
    if(isChance(20)) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)]  + " ";
    }

    //Add size
    if(isChance(20) && VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        answer += size[randomInteger(0, size.length - 1)] + " ";
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}