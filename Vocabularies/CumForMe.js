function cumForMeVocabulary() {
    let answers = ['' +
    'Cum for me %SlaveName%! Cum for me right now!',
    'Cum right now %SlaveName%! Shoot that cum every fucking where!',
    'Cum, cum for me now %SlaveName%! I want you to feel as good as possible!',
    'Cum for me %SlaveName%!',
    'Cum for me %SlaveName%. Now!'];

    if(!isInChastity()) {
        answers.push('I want you to cum %SlaveName%. Jerk that %Cock% until you explode everywhere!');
    }

    playSound('Audio/Spicy/Orgasm/Allowed/*.mp3');

    return answers[randomInteger(0, answers.length - 1)];
}