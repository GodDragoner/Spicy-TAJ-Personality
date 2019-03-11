function gigglesVocabulary() {
    const answers = ["*giggles*"];
    if(randomInteger(1, 5) == 1) playSound("Audio/Spicy/MoanLol/Laugh/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}