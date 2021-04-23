
const BALL_CRUSHER_TOY = createToy('ball crusher');

function hasBullCrusherOn() {
    return getVar(VARIABLE.IS_BALL_CRUSHER_ON, false);
}

function hasBallCrusher() {
    return BALL_CRUSHER_TOY.hasToy();
}

function applyBallCrusherPressure() {
    if (!isVar(VARIABLE.BALL_CRUSHER_MAX_TWISTS) || !isVar(VARIABLE.BALL_CRUSHER_TWISTS_TO_APPLY)) {
        sendMessage('Since this is the first time we\'re playing with %MyYour% %Balls% like this');

        sendMessage('We need to first of all determine how many twists you need to apply pressure to your balls');
        sendMessage('So what you are gonna do right now is to start twisting and count the amount of twists you need to apply pressure to your balls');
        sendMessage('I want you to stop right when it starts to hurt');

        sendMessage('Now for some terms');
        sendMessage('Half a twist means to tighten all the screws a half round');
        sendMessage('A full twist means to tighten all the screws a full round!');
        sendMessage('As simple as that...');

        sendMessage('I am gonna put on a slideshow, and with every picture you are gonna tighten the screws half a round');
        sendMessage('If you reach the point of it starting to really apply pressure/feeling uncomfortable, simply say stop %Grin%');
        sendMessage('So here we go...');

        let stop = false;
        lockImages();
        while (!stop) {
            sendMessage('Twist it half a round...', 0);
            showTeaseImage();
            setVar(VARIABLE.BALL_CRUSHER_TWISTS_TO_APPLY, getVar(VARIABLE.BALL_CRUSHER_TWISTS_TO_APPLY, 0) + 1);

            const answer = createInput(15, 'stop');
            while (true) {
                if (answer.isTimeout()) {
                    break;
                } else if (answer.isLike('stop', 'end')) {
                    stop = true;
                    break;
                } else {
                    answer.loop();
                }
            }

            answer.clearOptions();
        }

        unlockImages();

        sendMessage('Hope it is not feeling too uncomfortable yet %Lol%');

        sendMessage('Next we need to determine your threshold');
        sendMessage('That point where you absolutely can\'t stand another single twist!');

        sendMessage('Now for this next exercise');
        sendMessage('You\'re going to twist them 1 full round every 15 seconds');
        sendMessage('I want you to make me proud! ');
        sendMessage('Endure the pain!');
        sendMessage('Say stop when you reach the limit!');

        lockImages();
        stop = false;
        while (!stop) {
            sendMessage('Twist it...');
            showTeaseImage();
            setVar(VARIABLE.BALL_CRUSHER_MAX_TWISTS, getVar(VARIABLE.BALL_CRUSHER_MAX_TWISTS, 0) + 2);

            const answer = createInput(15, 'stop');
            while (true) {
                if (answer.isTimeout()) {
                    break;
                } else if (answer.isLike('stop', 'end')) {
                    stop = true;
                    break;
                } else {
                    answer.loop();
                }
            }

            answer.clearOptions();
        }
        unlockImages();

        const maxTwists = getVar(VARIABLE.BALL_CRUSHER_MAX_TWISTS);

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
            sendMessage('Well I suppose you weren\'t terrible... %Grin%');
        } else if (maxTwists > 15) {
            sendMessage('Already done?! Bvarh..  %Grin%');
            changeMeritLow(true);
        } else if (maxTwists > 10) {
            sendMessage('OMG you have got to be kidding me... %Grin%');
            changeMeritMedium(true);
        } else {
            sendMessage('Wauw.. that was awful! %Grin%');
            changeMeritHigh(true);
        }

        sendMessage('Well now that we have that part sorted out...');
        sendMessage('Oh.... I forgot about my %Balls% right? %Lol%');
        sendMessage('You may relieve the pressure on %MyYour% %Balls% %Grin%');
        sendMessage('BUT make sure that tension is still applied');
        sendMessage('It just shouldn\'t be painful %EmoteHappy%');
        sendMessage('I hope you enjoy that relief because it will only be short-lived %Grin%');
    } else {
        sendMessage('Now...');
        sendMessage('I need you to tighten the screws so that it applies pressure to %MyYour% %Balls%');
        sendMessage('Which means you are gonna do ' + getVar(VARIABLE.BALL_CRUSHER_TWISTS_TO_APPLY) + ' half twists');
        sendMessage('Tell me when you are ready to continue %SlaveName%');
        waitForDone();
    }
}