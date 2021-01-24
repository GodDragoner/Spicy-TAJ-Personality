{
    sendMessage('Today\'s session is going to be another edge training session, %SlaveName%');

    if(!isKneeling()) {
        startKneeling();
        sendMessage('You know what to do, get on all fours like a good edge puppy');
    }

    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

  sendMessage('You will learn how to take edges for me %Grin%');
    sendMessage('Hopefully we will push your boundaries a little bit');
    sendMessage('I think you can take a lot more than you might think, %SlaveName%');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('Let\'s start with holding some edges this time %EmoteHappy%');
    sendMessage('Pretty soon you won\'t even get down from the edge between commands');
    sendMessage('You\'ll be on the edge almost constantly, which is how I like it %Grin%');
    startEdging(getEdgeHoldSeconds());
    sendMessage('I shouldn\'t give you too much time to recover');
    sendMessage('There will be time for that later on, I\'m sure...');
    startEdging(getEdgeHoldSeconds());
    sendMessage('Keep taking deep breaths, %SlaveName%');
    startEdging(getEdgeHoldSeconds());
    sendMessage('Try to relax all those little muscles down there');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('It can be a dilemma for me');
    sendMessage('On the one hand I want to make you hold edges all the time, basically keeping you on the edge');
    sendMessage('But I also know that it can get intense pretty quickly');
    startEdging(getEdgeHoldSeconds());
    sendMessage('I know you can take more for your %DomHonorific%');
    sendMessage('You want to please me and serve me like a good edge slave');
    sendMessage('You know you can tell me when it\'s becoming too much and you can\'t handle any more');
    sendMessage('But you won\'t, because you want me to be happy');
    startEdging(getEdgeHoldSeconds());
    sendMessage('You will keep edging for me for as long as I want');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('Now for some short edges just to change things up a little');
    startMultipleEdges(2, 6);
    sendMessage('You\'re doing a great job so far, %SlaveName%');
    sendMessage('It <i>is</i> becoming a bit like a job to serve me, isn\'t it... %Lol%');
    sendMessage('I\'m your CEO, the manager who assigns your duties');
    sendMessage('And you don\'t want to lose your job, so you\'ll have to do whatever I want');
    startMultipleEdges(3, 7);
    sendMessage('Wouldn\'t it be great if there were companies like that where you could work');
    sendMessage('Where the people in charge are all dominant women eager to take advantage of you');
    sendMessage('Stripping you naked in their offices, making you edge right there in front of them');
    sendMessage('Punishing you when you make a mistake');
    sendMessage('I\'d work at company like that %Lol%');
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    startEdging(getEdgeHoldSeconds());
    sendMessage('Good boy %EmoteHappy%');
    sendMessage('I would definitely give you a position at my company');
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Now...');

    if(sendYesOrNoQuestion('Can you take 10 more edges for me?')) {
        sendMessage('Good %EmoteHappy%');
        sendMessage('I like it when you\'re obedient like that');
        changeMeritLow(false);
        startMultipleEdges(5, 8);
        sendMessage('%LetEdgeFade%');
        sendMessage('5 more coming up...');
        startMultipleEdges(5, 6);
    } else {
        sendMessage('Ugh alright');
        sendMessage('We\'ll do 5 more then');
        changeMeritLow(true);
        startMultipleEdges(5, 5);
        sendMessage('%LetEdgeFade%');
    }

    stopKneeling();
    sendMessage('Let\'s take a short break and continue your training later');
}