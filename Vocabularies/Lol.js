function lolVocabulary() {
    const answers = ["*laugh*", "*giggle*", "lol", "haha", "hehe", "lmao", "lmfao", "LOL", "*grin", "*wicked grin*", "grins at you*", "*looks at you and grins*", "*looks at you innocently*", "*evil grin*", "*mischievous grin*", "*innocent grin*", "*naughty grin*", "*coy smile*", "%EmoteLaugh%"];
    if(randomInteger(1, 5) == 1) playSound("Audio/Spicy/MoanLol/Laugh/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}