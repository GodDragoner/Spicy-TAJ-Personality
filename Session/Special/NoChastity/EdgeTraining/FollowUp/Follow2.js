{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage("Maybe you were hoping I had forgotten about your edge training");
    sendMessage("I haven\'t forgotten, %SlaveName%");
    startKneeling();
    sendMessage('Get down on your hands and knees, edge puppy');
    startEdging();
    sendMessage("I hope you understand why I\'m making you edge so much");
    sendMessage("The main reason of course is that I need you to be able to take any amount of edging I want");
    sendMessage("That requires practice");
    startEdging();
    sendMessage("As they say, practice makes perfect");
    sendMessage("And while I don\'t expect you to be perfect");
    sendMessage("I do expect you to be able to edge over and over without cumming");
    startEdging();
    sendMessage("I\'ll be very disappointed if you can\'t take it anymore");
    sendMessage("But you should still tell me if that\'s the case");
    sendMessage("My disappointment will be even greater if you cum without my permission");
    startMultipleEdges(3, 6);
    sendMessage("%LetEdgeFade%");
    sendMessage("Edging isn\'t all that complicated, is it...");
    sendMessage("You simply %JerkOff% like you used to do, in your old life");
    sendMessage('But instead of stroking all the way to an orgasm, you stop exactly 1 stroke before you cum');
    startEdging();
    sendMessage("It isn\'t the simple act of getting to the edge that does it");
    sendMessage("What gets you in the end is the repetition, over and over, of that simple act");
    startEdging();
    sendMessage("Good boy");
    sendMessage("Your %Cock% belongs to me, don\'t forget that");
    startMultipleEdges(5, 8);
    sendMessage("%LetEdgeFade%");
    sendMessage("I control how you masturbate");
    sendMessage("I control your edges and your orgasms");
    startEdging();
    sendMessage("You will never get to cum except with my permission");
    sendMessage("And if at the end of this session I decide to deny you");

    if (hasChastityCage()) {
        sendMessage("And lock that %Cock% in its little cage");
    }

    sendMessage("Then you\'re just going to have to deal with that");
    startEdging();
    sendMessage("You have no choice but to obey my every command");
    startMultipleEdges(3, 9);
    sendMessage("%LetEdgeFade%");

    let endEdgeTraining = false;
    if (sendYesOrNoQuestion('Do you want me to stop, %SlaveName%?')) {
        sendMessage("Aww it\'s too much for you isn\'t it..");
        //TODO: @NullResponse @CallReturn(Custom/Decisions/EdgingCantTakeIt.txt)

        changeMeritMedium(true);
        sendMessage('This isn\'t about what you want or don\'t want, %SlaveName%');
        sendMessage("This is about what you need and you need to do as I say");
        sendMessage("Now listen");


        sendMessage("I know this is difficult, %SlaveName%");
        sendMessage("But I need you to be an obedient edge puppy for me");

        if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
            putOnCollar();
        }

        sendMessage("You need to make a decision now");
        sendMessage("Either you do as I say and take these final few edges");
        sendMessage("I promise there won\'t be that many");

        sendMessage('Or you can stop edging and disappoint your %DomHonorific%');

        sendMessage('So %SlaveName%');

        if (sendYesOrNoQuestion('Are you sure you want to stop?')) {
            sendMessage('Hm alright');
            changeMeritHigh(true);
            endEdgeTraining = true;
            sendMessage('Have it your way then...');
        } else {
            sendMessage('Good edge puppy %EmoteHappy%')
        }
    } else {
        sendMessage('Good, neither do I %EmoteHappy%');

        sendMessage("I want to keep edging you and edging you and edging you");
        sendMessage("Over and over and over again");
        startEdging();
        sendMessage("I will edge you until you forget where you are");
        startEdging();
        sendMessage("I will edge you until you forget your name");
        startEdging();
        sendMessage("I will edge you until all you know is obedience");
        startEdging();
        sendMessage("I will edge you until edging is the only thing you can think of");
        startEdging();
        sendMessage("I will edge you until edging is the only thing you want to do");
        startEdging();
        sendMessage('And I will keep edging you over and over again');
    }

    if (!endEdgeTraining) {
        sendMessage("Grab that poor leaky %Cock%");
        sendMessage("Squeeze it tightly...");
        startEdging(getEdgeHoldSeconds());
        sendMessage("%LetEdgeFade%");
        sendMessage("Only a few edges left and you will have completed today\'s training");
        sendMessage("Any edges after that will only be a bonus %Lol%");
        sendMessage("You didn\'t think just because your training is done you don\'t have to edge anymore, right?");
        sendMessage("The training is so that you can handle any edges I give you");
        startMultipleEdges(2, 7);
        sendMessage("I think we\'ll do...");
        sendMessage("7 more edges");
        startMultipleEdges(3, 9);
        sendMessage("Relax and get ready for the last few edges");
        sendMessage("Almost there %EmoteHappy%");
        startMultipleEdges(4, 9);
        sendMessage("%LetEdgeFade%");
        sendMessage('Good edge puppy');
        sendMessage('You\'ve been very obedient so far %GeneralTime%, %SlaveName%');
        changeMeritMedium(false);
    }

    if (isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();
}