function ruinForMeVocabulary() {
    let answers = ['' +
    'Ruin that fucking orgasm right now!',
        'I want you to ruin that orgasm for me',
        'I want you to ruin it! Let all that cum dribble out without any pleasure',
        'Ruin that orgasm for me',
        'I want you to ruin that orgasm for me right now',
        'You get to give yourself a ruined orgasm. Right now',
        'Ruin it %Grin%',
        'Ruin it for me!',
        'Take your hand away and ruin that orgasm!',
        'No pleasure, ruin your orgasm for me right now!',
        'Tip yourself just over the edge then ruin that orgasm for me'];

    if(!isInChastity()) {
        answers.push('Take your hand away and ruin that orgasm!');
    }

    playSound('Audio/Spicy/Orgasm/Ruin/*.mp3');

    return answers[randomInteger(0, answers.length - 1)];
}