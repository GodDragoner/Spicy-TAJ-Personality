{
    sendMessage("%SlaveName%... " + random("I want to have a bit of fun with your %Balls%", "Lets play a bit with those %Balls%"));

    if (fetchToy("ball crusher")) {
        sendMessage('Go ahead and attach it...');
        sendMessage('Tell me when you are done %SlaveName%');
        waitForDone();

        setTempVar(VARIABLE_IS_BALL_CRUSHER_ON, true);

        sendMessage('Now.. ');
        sendMessage('I need you to tighten the screws so that it applies pressure to your %Balls%');
        sendMessage('Stop twisting them right before it would start to hurt');
        sendMessage('Tell me when you are ready to continue %SlaveName%');
        waitForDone();

        if (!isVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS)) {
            sendMessage('Since this is the first we play with your %Balls% like this');
            sendMessage('We need to determine your threshold ');
            sendMessage('That point where you can\'t absolutely stand another single twist!');
            sendMessage('Now for some terms');
            sendMessage('Half a twist means to tighten all the screws a half round');
            sendMessage('A full twist means to tighten all the screws a full round!');
            sendMessage('As simple as that...');
            sendMessage('Now for this next exercise');
            sendMessage('You\'re going to twist them 1 full round each 15 seconds');
            sendMessage('I want you to make me proud! ');
            sendMessage('Endure the pain!');
            sendMessage('Say stop when you reach the limit!');

            let stop = false;
            while (!stop) {
                sendMessage('Twist it...');
                showTeaseImage();
                setVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS, getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS, 0) + 2);

                const answer = createInput(15, 'stop');
                while (true) {
                    if (answer.isTimeout()) {
                        break;
                    } else if (answer.isLike('stop', 'end')) {
                        stop = true;
                        break;
                    }
                }

                answer.clearOptions();
            }

            const maxTwists = getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS);

            if (maxTwists > 40) {
                sendMessage('You did extremely well! %Grin%');
                changeMeritHigh(false);
            } else if (maxTwists > 35) {
                sendMessage('You did great! %Grin%');
                changeMeritMedium(false);
            } else if (maxTwists > 30) {
                sendMessage('You did alright! %Grin%');
                changeMeritLow(false);
            } else if (maxTwists > 20) {
                sendMessage('Well I suppose you wasn\'t terrible... %Grin%');
            } else if (maxTwists > 15) {
                sendMessage('Already done?! Bvarh..  %Grin%');
                changeMeritLow(true);
            } else if (maxTwists > 10) {
                sendMessage('OMG you have got to be kidding me... %Grin%');
                changeMeritMedium(true);
            } else {
                sendMessage('Wauv.. that was awful! %Grin%');
                changeMeritHigh(true);
            }

            sendMessage('Well now that we have that part sorted out...');
            sendMessage('Oh.... I forgot about my %Balls% right? %Lol%');
            sendMessage('You may relieve the pressure on your %Balls% %Grin%');
            sendMessage('BUT make sure that tension is still applied');
            sendMessage('It just shouldn\'t be painful %EmoteHappy%');
            sendMessage('I hope you enjoy that relief because it will only be short-lived %Grin%');
        }

        //TODO: More than just "now" like Let's see etc. generalize this somewhere as a function
        sendMessage('Now...');

        switch(randomInteger(0, 2)) {
            case 0:
                ballCrusherSlideshow();
                break;
            case 1:
                ballCrusherGame();
                break;
            case 2:
                ballCrusherRubberPlay();
                break;
        }
        //TODO: More events after first game round

        sendMessage('You can remove the ball crusher now %Grin%');
        sendMessage(random('I hope they aren\'t dead!', 'I really hope those %Balls% aren\'t dead', 'You should probably take a look at those %Balls% %Lol%'));
    } else {
        sendMessage("I guess I have to think of something different to play with your balls");

        //TODO: Different cbt thing
    }
}

function ballCrusherSlideshow() {
    sendMessage('I\'m gonna show you a slideshow');
    sendMessage('Each time the picture changes you are to twist half a round');
    sendMessage('Rather simple...');
    sendMessage('When you can\'t take anymore simply say stop');
    sendMessage('If you break your highscore you earn 100 gold');
    sendMessage('If you reach your highscore nothing happens');
    sendMessage('If you perform well below your highscore I\'m gonna be rather disappointed');
    sendMessage('And you probably don\'t want that %Grin%');
    sendMessage('Enjoy! %Lol%');

    let twists = 0;
    let stop = false;
    while (!stop) {
        showTeaseImage();
        twists++;

        const answer = createInput(randomInteger(5, 15), 'stop');
        while (true) {
            if (answer.isTimeout()) {
                break;
            } else if (answer.isLike('stop', 'end')) {
                stop = true;
                break;
            }
        }

        answer.clearOptions();
    }

    sendMessage(random('You look like someone under pressure', 'You seem pressurized!', '*Feeling a bit of tension?') + "%Lol%");

    if (twists > getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS)) {
        sendMessage('We have a new record!');
        sendMessage('Meaning you\'ve earned 100 gold!');
        sendMessage('I\'m impressed by your effort!');
        addGold(100);
        setVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS, twists);
    } else if (twists == getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS)) {
        sendMessage('You matched your old record! %Grin%');
        sendMessage('I guess that is a fine performance!');
    } else {
        sendMessage('Well you did not even reach your record...');

        if (getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS) - twists > 4) {
            sendMessage('In fact you weren\'t even close!');
            changeMeritHigh(true);
            sendMessage('I need you to try much harder!');
        } else {
            sendMessage('But at least you came close to it');
            sendMessage('So I\'m still somewhat fine with your performance');
            sendMessage('But try harder next time!');
        }
    }

    sendMessage('You can relieve the pressure now %Grin%');
}

function ballCrusherGame() {
    sendMessage('I have a small game for us!');
    sendMessage('It\'s a guessing game!');
    sendMessage('You have to say either "boobs, butt or hentai"');
    sendMessage('I\'ll then show you a picture');
    sendMessage('Guess wrong and you have to tighten it a full round');
    sendMessage('Guess right and you can loosen it half a round');
    sendMessage('When you\'ve made 10 right guesses the game is over!');
    sendMessage('If you absolutely can\'t take another twist just say stop');
    sendMessage('It\'s a simple game, right? %Grin%');

    let right = 0;
    while (right < 10) {

        let answerType = 0;
        const answer = sendInput('Boobs, butt or hentai?');
        while (true) {
            if (answer.isTimeout()) {
                break;
            } else if (answer.isLike('stop', 'end')) {
                right = -1;
                break;
            } else if (answer.isLike('boob', 'breast', 'tit')) {
                answerType = 0;
            } else if (answer.isLike('butt', 'ass')) {
                answerType = 1;
            } else if (answer.isLike('hentai')) {
                answerType = 2;
            } else {
                sendMessage('Boobs, butt or hentai %SlaveName%?');
                answer.loop();
            }
        }

        //Sub said stop
        if (right == -1) {
            break;
        }

        let type = randomInteger(0, 2);

        let typeName;
        switch (type) {
            case 0:
                showCategoryImage('BOOBS', 2);
                typeName = 'boobs';
                break;
            case 1:
                showCategoryImage('BUTTS', 2);
                typeName = 'butt';
                break;
            case 2:
                showCategoryImage('HENTAI', 2);
                typeName = 'hentai';
                break;
        }

        if(type == answerType) {
            right++;
            sendMessage(random('Correct', 'Right on!', 'Yes!', 'You got it!', 'You got it right', 'Right...', ' That is correct... %EmoteSad%'));
        } else {
            sendMessage(random('Not really ' + typeName, 'Nope', 'Not correct...', 'Incorrect', 'Wrong', 'Not right', 'Lol nope', 'Lol no', 'No %Grin%'));
        }
    }

    if (right == -1) {
        sendMessage('...');
        changeMeritHigh(true);
        sendMessage('Well I\'m not sure what to say right now...');
    } else {
        sendMessage('You made it! You\'ve guessed right 10 times');
    }

    sendMessage('Go ahead and relieve the pressure on your balls now');
}

function ballCrusherRubberPlay() {
    sendMessage('This is going to hurt...');

    if (!fetchToy('large rubberband')) {
        sendMessage('Well then... I guess we have to take a different approach %EmoteSad%');
        return;
    }

    sendMessage('Put the rubberband around the ball crusher');
    sendMessage('At this point it shouldn\'t add to the pressure');
    sendMessage('At least not too much %Grin%');
    sendMessage('Now before we play with the rubberband');
    sendMessage('We need to tighten that ball crusher');
    sendMessage('I\'m gonna give you a slideshow');
    sendMessage('With every new picture you have to twist the screws once');
    sendMessage('I will continue until we reach your highscore...');

    let currentTwists = 0;
    while (currenTwists < getVar(VARIABLE_BALL_CRUSHER_MAX_TWISTS)) {
        showTeaseImage(random(9, 15));
        currentTwists += 2;
    }

    sendMessage('Good!');
    sendMessage('Stand up %SlaveName%');
    sendMessage('In a moment you will pull that rubberband back as far as you can');
    sendMessage('Aim for the center of your %Balls%');
    sendMessage('And release %Grin%');

    const subPain = getVar(VARIABLE_SUB_PAIN_TOLERANCE);
    const min = Math.min(subPain * 2, 20);
    const max = Math.min(2, 4242 * subPain + 4, 6667, 30);

    let strikes = randomInteger(min, max);

    const chanceForExtraTwist = Math.max(0, 5 * subPain - 25);

    if (isChance(chanceForExtraTwist)) {
        sendMessage('Just for me...');
        sendMessage('Give the ball crusher ' + randomInteger('half a twist', 'a full twist', 'two full twists'));
        sendMessage('%Grin%');
    }

    sendMessage('Once again %SlaveName%');
    sendMessage('I\'m gonna put on a slideshow');
    sendMessage('When the picture changes you will pull the rubberband back');
    sendMessage('When it changes again you will release it %Grin%');

    while (strikes > 0) {
        showTeaseImage(randomInteger(5, 15));
        showTeaseImage(randomInteger(5, 15));
        strikes--;
    }

    sendMessage('You made it %Grin%');
    sendMessage('This was hilarious to watch');
    sendMessage('You should\'ve seen your face %Lol%');
    sendMessage('Go ahead and relieve the pressure on your balls now');
}