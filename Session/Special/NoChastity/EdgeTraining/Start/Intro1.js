{
    //Only send this if this isn't the first edge training session
    if(getVar(VARIABLE.EDGE_TRAININGS_DONE, 0 ) > 0) {
        sendMessage('We\'re going to do another edge training session %GeneralTime%');
    }

    if (!isKneeling()) {
        sendMessage('Before we continue, let\'s get you in the proper submissive position');
        startKneeling();
        sendMessage('And now get down on all fours');
        startStroking(getInitialStrokingBPM());
    }

    sendMessage('Come on, you can stroke that %Cock% a bit faster, I want you on the edge soon');
    sendMessage('You should be getting close already');

    startEdging();

    if (sendYesOrNoQuestion('That felt good, didn\'t it?')) {
        //TODO: MissBlue @ResponseYes(ItFeelsGood) @ResponseNo(ItFeelsBad)
    } else {

    }

    sendMessage('You should calm down a bit, because this might get... intense... %Grin%');
    sendMessage('You know, %SlaveName%...');
    sendMessage('I could let you cum right this very instant');
    sendMessage('But I won\'t and I think you know why');

    sendMessage('It\'s not just that I don\'t <i>want</i> you to cum, although that alone should be reason enough');
    sendMessage('The thing is, a man can edge all day long');
    sendMessage('But he can only cum once in a while');
    sendMessage('I want you to edge as you think about that', 0);
    startEdging();
    sendMessage('So close and yet so far away... %Giggles%');
    sendMessage('Like I was saying, I can\'t make you cum over and over all day long');
    sendMessage('But I <i>can</i> make you edge all day long');
    sendMessage('And since the cornerstone of any training is repetition...');
    sendMessage('Better to train you to be an edge slut than a cum slut %Smile%');
    startEdging();
    sendMessage('Fortunately, this is also what <i>you</i> want, isn\'t it?');
    sendMessage('You want to edge more than anything in the world and you want to edge for me');
    sendMessage('Get to the edge again, %SlaveName%', 0);
    startEdging();
    sendMessage('You need this');
    sendMessage('You need to edge and you need to be <i>told</i> to edge');

    if (isKneeling()) {
        sendMessage('You look so cute down on the floor on all fours');
        sendMessage('This is going to be your position each time we do edge training');
        sendMessage('Like a wide-eyed little puppy dog, waiting for a command');
    }

    sendMessage('I\'m going to give you exactly what you want');
    sendMessage('Come on my little puppy, go ahead and edge for me', 0);
    startEdging();
    sendMessage('Now listen to me, %SlaveName%');
    sendMessage('I\'m going to ask you something and I want you to answer honestly');
    sendMessage('But first give me another edge %EmoteHappy%', 0);
    startEdging();
    sendMessage('Here\'s the question, but don\'t answer me just yet:');
    sendMessage('Do you want to cum or do you want to be a good boy and keep edging?');
    sendMessage('Think about what your answer will be and get to the edge', 0);
    startEdging();

    if (sendYesOrNoQuestion('Now tell me, do you want to cum?')) {
        sendMessage('Good boy %EmoteHappy%');
    } else {
        sendMessage('That\'s too bad, because it\'s not going to happen');
        changeMeritMedium(true);
    }

    startEdging();

    sendMessage('I\'m only giving you what you want deep down inside');
    sendMessage('And all you have to do is to obey me');

    askSubForBegEdge();

    sendMessage('You can edge for me now', 0);
    startEdging();

    sendMessage('Good boy');
    sendMessage('I will let you rest for a moment now');

    if(isKneeling()) {
        stopKneeling();
        sendMessage('This is far from over though, %SlaveName%');
    }
}