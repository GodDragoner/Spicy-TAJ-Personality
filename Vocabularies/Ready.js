function readyVocabulary() {
    const answers = ["Ready?", "Are you ready?", "Are you ready %SlaveName%?"];
    playSound("Audio/Spicy/QuestionAndShortWords/Ready/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}