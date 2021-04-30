function ballHurtTeaseVocabulary() {
    const answers = ['I think we are gonna break %MyBalls% %Balls% today',
    'Poor %SlaveName%... ' + random('Do %MyBalls% %Balls% hurt' + random(' yet','') + '?', 'Are %MyBalls% %Balls% changing color' + random(' yet','') + '?') + ' %Grin%',
    'Oh my, %MyBalls% %Balls% seem to be changing color %Grin%',
    'Oh my, %MyBalls% %Balls% look unhappy. However, I know exactly how we can change that %Grin%'];

    return answers[randomInteger(0, answers.length - 1)];
}