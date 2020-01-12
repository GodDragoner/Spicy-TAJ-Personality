function GNMReadyVocabulary() {
    const answers = [" ready? ","are you ready? ","are you ready bitch? ","are you ready %SlaveName%? ","Are you ready %GNMSlut%? ","Are you ready slave? "];


   if (getVar("BlockSounds") == true) {
    }
    else {
        playAudio("Audio/Spicy/QuestionAndShortWords/Ready/*.mp3");
    }

    return answers[randomInteger(0, answers.length - 1)];
}