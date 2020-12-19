{
    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
    sendMessage('It\'s time for edge training, %SlaveName%');
    startKneeling();
    sendMessage('Get down on all fours like a good edge puppy');

    if (COLLAR_TOY.hasToy() && COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

    sendMessage('It\'s going to be intense and agonizing'); //TODO: @CustomMode(#ICantTakeIt,Goto,cannot take edging)

    sendMessage('But it\'s also going to be very rewarding if you make it to the end');
    sendMessage('Well I hope so, anyway');
    sendMessage('Otherwise it will just seem like pointless suffering %Lol%');
    sendMessage('But at the very least you will learn something about obedience');
    sendMessage('You will serve me %GeneralTime% by edging a lot');
    sendMessage('You will obey every command, because you <i>want</i> to obey every command');
    sendMessage('This is who you are and will always be');
    startEdging();
    sendMessage('Don\'t ever question my commands, %SlaveName%');
    sendMessage('There is no need to question them, because you know that I know what\'s best for you');
    startMultipleEdges(2, 3);
    sendMessage('You know that women are more intelligent than men anyway %EmoteHappy%');
    sendMessage('So you\'ll gladly let any strong woman make the decisions for you');
    startMultipleEdges(3, 5);
    sendMessage('Right now I am the strong woman making the decisions for you');
    sendMessage('But there\'s no reason other women can\'t play this role in your life as well');
    startMultipleEdges(4, 7);
    sendMessage('It doesn\'t even have to be all about sex...');
    sendMessage('You should let women dominate you in every aspect of your life');
    startMultipleEdges(5, 8);
    sendMessage('You may have started to see a pattern emerge in your edges, %SlaveName%');
    sendMessage('I think you realize how quickly this pattern adds up to a lot of edges');
    sendMessage('The next series will be 6 edges, the one after that 7...');
    startMultipleEdges(6, 9);
    sendMessage('We\'re going to go all the way up to 10');
    sendMessage('And then we\'re going to take a break %EmoteHappy%');

    if (sendYesOrNoQuestion('You can do this for me, can\'t you?')) {
        sendMessage('Good boy %EmoteHappy%');
        changeMeritLow(false);
        sendMessage('Then let\'s continue');

        startMultipleEdges(7, 8);
        sendMessage('At least I\'m not making you hold these edges, hm? %Grin%');
        sendMessage('I might do that later on');
        startMultipleEdges(8, 8);
        sendMessage('As you edge, I want you to realize how submissive it makes you feel');
        sendMessage('I want you to think of ways to take that feeling into your daily life');
        sendMessage('You can\'t be edging all day every day, obviously');
        sendMessage('But you can be a good obedient boy for all the strong women in your life in different ways');
        startMultipleEdges(9, 7);
        sendMessage('We\'ve reached the last series... it\'s going to be 10 edges...');
        sendMessage('You need to be strong for me now, %SlaveName%');
        startMultipleEdges(10, 7);
        sendMessage('%LetEdgeFade%');
        changeMeritLow(false);
        sendMessage('You\'ve done very well %EmoteHappy%');
        stopKneeling();
        sendMessage('We\'ll do some more edges later on, but for now you can sit back and relax');
        sendMessage('Breathe in and out');
        sendMessage('Trust me, you\'re going to need this little break %Grin%');
    } else {
        sendMessage('That\'s very disappointing...');
        changeMeritHigh(true);
        sendMessage('I guess this isn\'t the right day for edge training then %EmoteSad%');
        sendMessage('Fine - I\'ll find some other way to torment you, %SlaveName%');
        //TODO: Deactivate edge training
    }
}