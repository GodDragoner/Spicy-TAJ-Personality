{
    startEdging();

    if(hasBallsTied()) {
        untieBalls();
    }

    sendMessage('Let\'s continue our edge training');

    if(!isKneeling()) {
        startKneeling();
        sendMessage('Be a good edge puppy and get down on all fours right now');
    }

    if (COLLAR_TOY.hasToy() && !COLLAR_TOY.isToyOn()) {
        putOnCollar();
    }

    if(sendYesOrNoQuestion('Are you going to be a good edge slut for me?')) {
        sendMessage('Good doggy %EmoteHappy%');
    } else {
        sendMessage('Oh well, we\'ll see about that...');
        changeMeritMedium(true);
    }

    sendMessage('You don\'t really have much of a choice in the matter, really');
    sendMessage('I decide when and how much you edge');
    sendMessage('I decide when you cum and when you\'re denied');
    if(hasChastityCage()) {
        sendMessage('I decide when that %Cock% gets locked in its little cage');
    }

    startEdging();

    sendMessage('Let\'s start slowly... relax, %SlaveName%');
    sendMessage('You\'re so lucky that you have me to edge that %Cock%');

    //TODO: Based on physical sized
    if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        sendMessage('What else are you going to do with that tiny little thing');
        sendMessage('You don\'t deserve to have normal sex anyway');
    }

    if(getVar(VARIABLE.SUB_PREMATURE_EJACULATE)) {
        sendMessage('Maybe this training will even help you with your premature ejaculation problem');
    }

    sendMessage('Without me to edge it, that %Cock% would be a useless limp limb');
    sendMessage('But your edges shouldn\'t only be dedicated to me');
    sendMessage('Each one is a little offering to the whole of womankind');

    if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
        sendMessage('Each one a reminder that that %Cock% doesn\'t deserve to cum inside a pussy');
    }

    sendMessage('So %GeneralTime% I want you to edge to pictures of other girls as well');

    sendMessage('Let\'s start with this one', 0);
    showCategoryImage('SOFTCORE', 0);
    lockImages();
    startEdging();
    sendMessage('You will never get to fuck her, %PetName%');
    sendMessage('You only get to edge your useless %Cock% for her picture');
    showCategoryImage('SOFTCORE', 0);
    sendMessage('This is what sex is for you now');
    sendMessage('Mindless edging to pictures of hot girls, never cumming');

    if(getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false)) {
        sendMessage('Maybe ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' would disagree with that, I don\'t know %Lol%');
        sendMessage('But if it were up to me, this would be your entire sex life until the day you die');
    }

    showCategoryImage('SOFTCORE', 0);
    startEdging();
    sendMessage('Whenever you see a beautiful girl on the street I want you to remember this feeling');
    sendMessage('The helplessness');
    sendMessage('The realization that you will never get to touch her naked body');
    sendMessage('That all you can do is go home and edge over and over');

    showCategoryImage('SOFTCORE', 0);

    startEdging();

    sendMessage('You\'re not even allowed to masturbate to orgasm thinking about her');
    sendMessage('Only edging allowed, %SlaveName%');

    if(RULE_DOMME_KEYHOLDER.isActive()) {
        sendMessage('You can\'t cum unless I say so anyway');
    } else {
        sendMessage('I know it\'s hard for you to completely give up control');
        sendMessage('That you still want to be able to %JerkOff% when you feel the need to do so');
        sendMessage('But it\'s only a matter of time before you\'ll have no choice but to give me full control of your %Cock%');
    }

    showCategoryImage('SOFTCORE', 0);
    startEdging();

    sendMessage('Another girl, another edge...');

    showCategoryImage('SOFTCORE', 0);
    startEdging();

    sendMessage('There are so many beautiful women in the world, %SlaveName%');
    sendMessage('About 3 billion in fact %Grin%');
    sendMessage('That\'s... a lot of edges %Lol%');

    showCategoryImage('SOFTCORE', 0);
    startEdging();

    showCategoryImage('LESBIAN', 0);
    sendMessage('Maybe one day you\'ll get really lucky');
    sendMessage('And 2 women will let you edge while watching them have sex');

    startEdging();

    sendMessage('Unfortunately, such things do not happen too often in the real world');

    unlockImages();

    sendMessage('I want to give you a choice now, %SlaveName%');
    sendMessage('As you\'d probably expect, there\'s a right choice and a wrong one');
    sendMessage('But which is which... that\'s up to you I suppose %EmoteHappy%');
    sendMessage('%SlaveName%...');

    let continueEdges = true;

    if(sendYesOrNoQuestion('Will you take more edges for me?')) {
        sendMessage('That would seem to be the right answer, wouldn\'t it');

        sendMessage('Imagine what I might have done to you if you had said "no" %Grin%');


    } else {
        sendMessage('I suppose that <i>might</i> be the right answer');

        sendMessage('If you\'re really can\'t take any more');

        if(CBT_LIMIT.isAllowed()) {
            tieBalls(true);

            sendMessage('Here\'s another choice for you to make');
            sendMessage('Another simple yes or no question');

            if(sendYesOrNoQuestion('Will you hurt %MyYour% %Balls% for me instead of the edges I had planned?')) {
                sendMessage('Alright then');
                continueEdges = false;

                sendMessage('If you prefer to be in pain than to finish your edge training then that\'s what you\'ll get');

                let implement = fetchSpankingImplement();

                sendMessage('Smack %MyYour% %Balls% 10 times');
                waitForDone();
                sendMessage('Smack them 10 more times, but harder than the last ones');
                waitForDone();
                sendMessage('Good boy');

                sendMessage('Smack each testicle 5 more times, as hard as you can');
                sendMessage('That\'s my good %SlaveName%');
                sendMessage('Let\'s move on to something else now');
            } else {
                sendMessage('That means you\'re going to do the edges after all then...');
            }
        } else {
            changeMeritHigh(true);
            sendMessage('But I\'m not not happy about it');
            sendMessage('Let\'s just see how you fare in the rest of this session then, %SlaveName%');
            continueEdges = false;
        }
    }

    if(continueEdges) {
        startEdging(getEdgeHoldSeconds());
        sendMessage('Just a few more edges and you\'re done for today');
        sendMessage('Well maybe not done entirely...');
        sendMessage('I might still make you edge even after the training is done %Grin%');
        startMultipleEdges(5, 8);
        sendMessage('%LetEdgeFade%');
        sendMessage('It\'s about time to hold a few edges for me');
        sendMessage('No edge training would be complete without it %Grin%');
        startEdging(getEdgeHoldSeconds());
        sendMessage('Good edge puppy %Smile%');
        sendMessage('Here comes another one');
        startEdging(getEdgeHoldSeconds());
        sendMessage('Almost done');
        sendMessage('In fact, this last one is going to be the last for now');
        sendMessage('You\'re going to hold this one, obviously');
        startEdging(getEdgeHoldSeconds());
        sendMessage('%LetEdgeFade%');

        sendMessage('You\'ve been a good edge puppy for me %GeneralTime% %EmoteHappy%');
        changeMeritMedium(false);
    }

    if(isKneeling()) {
        stopKneeling();
    }

    endSpecialSession();
}