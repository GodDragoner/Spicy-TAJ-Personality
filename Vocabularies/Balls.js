function ballsVocabulary() {
    const adjectives = ["poor", "desperate", "helpless", "sore", "frustrated", "denied", "aching", "subservient", 'teased', 'blue', 'purple', 'wrinkly', 'full', 'filled', 'tender', 'agonized'];
    const answers = ["balls", "nuts", "family jewels", "nads", "gonads", "testicles"];

    let answer = "";

    if(VERBAL_HUMILIATION_LIMIT.isAllowed() && feelsLikeInsultingSlave()) {
        adjectives.push('worthless', 'disgusting', 'laughable', 'sorry');
    }

    //Add adjective
    if(isChance(20)) {
        answer += adjectives[randomInteger(0, adjectives.length - 1)]  + " ";
    }

    return answer + answers[randomInteger(0, answers.length - 1)];
}
