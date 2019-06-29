function readyVocabulary() {
    const answers = ["ready?", "are you ready?", "are you ready bitch?", "Are you ready %SlaveName%?", "Are you ready slave?", "Are you ready %slut%?"];
    playSound("Audio/Spicy/QuestionAndShortWords/Ready/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}