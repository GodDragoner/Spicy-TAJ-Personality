{
    let answer = sendInput('Can you guess what today is going to be all about?');

    while (true) {
        if (answer.isLike('edge')) {
            sendMessage('Yes! %EmoteHappy%');
            break;
        } else if (answer.isLike('yes')) {
            sendMessage('So, what do you think it is?', 0);
            answer.loop();
        } else if (answer.isLike('no', 'don\'t know', 'not know', 'not sure', 'tell', 'say', 'what', 'whatever', 'anything')) {
            sendMessage('Today is going to be all about EDGING! %EmoteHappy%');
            break;
        } else {
            sendMessage('Nope, today is going to be all about EDGING! %EmoteHappy%');
            break;
        }
    }

    sendMessage('That\'s right, it\'s time for an edge training session');

    if (!isKneeling()) {
        startKneeling();
        sendMessage('So get down on your hands and knees');
    }

    sendMessage('You know this is your position for edge training');

    if (COLLAR_TOY.isToyOn()) {
        sendMessage('With that collar on you already look like a good doggy');
    } else if (COLLAR_TOY.hasToy()) {
        putOnCollar();
    }

    if (sendYesOrNoQuestion('You\'re going to be my good edge puppy %GeneralTime%, aren\'t you?')) {
        sendMessage('Excellent!');
    } else {
        sendMessage('Well we\'ll just see about that now will we...');
        changeMeritMedium(true);
    }

    sendMessage('Let\'s get started');

    startMultipleEdges(2, 6);

    sendMessage('That got the old engine revving, didn\'t it %Laugh%');
    sendMessage('I can already feel this is going to be a very good session');

    if (sendYesOrNoQuestion('It just seems like a good day for some edging, doesn\'t it?')) {
        sendMessage('It really does! But then again...');
    } else {
        sendMessage('Don\'t be silly, %SlaveName%');
    }

    sendMessage('Of course, it doesn\'t make much of a difference what kind of day it is');
    sendMessage('Every day is a good day for edging %EmoteHappy%');

    startEdging();

    sendMessage('It really doesn\'t matter what day of the week it is');
    sendMessage('Or what kind of weather it is');
    sendMessage('It might be a rainy or a sunny day, but an edge is always an edge');
    startEdging();

    let weatherAnswer = sendInput('What\'s the weather like where you are right now?');

    if (weatherAnswer.isLike('sun", "sunny", "bright", "clear", "lovely", "beautiful", "great", "nice", "good')) {
        sendMessage('That\'s nice %EmoteHappy%');
    } else if (weatherAnswer.isLike('hot", "warm", "heat')) {
        sendMessage('Things are definitely heating up %Wicked%');
    } else if (weatherAnswer.isLike('cloud", "cloudy", "rain", "rainy", "pouring", "raining')) {
        sendMessage('That\'s too bad... but at least you don\'t have to go out %EmoteHappy%');
    } else if (weatherAnswer.isLike('cold", "freezing", "icy", "snow')) {
        sendMessage('Let\'s get you warmed up then %Grin%');
    } else {
        sendMessage('Anyway, you\'ll be staying indoors for a while');
    }

    startEdging();
    sleep(5);
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('You\'ve got quite the session ahead of you, %SlaveName%');
    sendMessage('I expect you to make it through today\'s session without complaining');
    sendMessage('You\'re going to take everything I have in store for you and you\'ll do it happily');

    if(sendYesOrNoQuestion('Because you do want to be my good edge puppy, right?')) {
        sendMessage('Good boy %EmoteHappy%');
        changeMeritLow(false);
    } else {
        sendMessage('You\'re not making this easier on yourself by resisting like that');
        changeMeritMedium(true);
    }

    startEdging();

    sendMessage('The best way to get through this is by simply switching off your free will and obeying every command');
    startMultipleEdges(3, 6);
    sendMessage('Ah yes, free will %Grin%');
    sendMessage('Remember that you <i>are</i> here by your own free will, %SlaveName%');
    startEdging();
    sendMessage('Free will is a funny thing');
    sendMessage('It\'s the only force in the world than can negate itself');
    startEdging();
    sendMessage('The question is though, did you really choose to give up control?');
    sendMessage('The desire to submit is so strong, isn\'t it...');
    sendMessage('It\'s pulling you back time and time again');
    sendMessage('And it keeps bringing you back to me');
    startEdging(2, 5);
    sendMessage('Good boy');
    stopKneeling();
    sendMessage('Let\'s pick this up again in a few minutes');
    sendMessage('Just relax and take a few deep breaths now');
}