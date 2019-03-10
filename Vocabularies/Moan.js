function moanVocabulary() {
    const answers = ["*Mmmm*", "*moans softly*", "Moans and smiles at you", "*moans*"];
    playSound("Audio/Spicy/MoanLol/Moan/*.mp3");
    return answers[randomInteger(0, answers.length - 1)];
}