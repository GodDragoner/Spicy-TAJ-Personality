//TODO: Duplicate with Good REMOVE

function GNMGoodVocabulary() {
    const answers = ["Good", "Very good", "Excellent", "Perfect", "Great", "Marvelous", "Wonderful", "Splendid"];
    if(randomInteger(1, 2) == 1) playSound("Audio/Spicy/QuestionAndShortWords/Good/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}
