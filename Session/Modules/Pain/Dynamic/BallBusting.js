{
    sendMessage('Let\'s give my balls some attention %Grin%');
    sendMessage('I think they are having way too much fun');
    sendMessage('But don\'t worry I will take care of that');

    //TODO: Only once at first time
    sendMessage('First of all let\'s refresh the terminology a bit');
    sendMessage('Slap means to use your open hand to bust those balls');
    sendMessage('Flick means to use your index finger to flick your balls');
    sendMessage('And punch is my favorite one');
    sendMessage('It means you should punch your balls with your fist');

    sendMessage('Now for the intensity scale of the hits');
    sendMessage('Light means that it should hurt but not too bad');
    sendMessage('You should have no problems keeping your position');
    sendMessage('Medium hits should definitely hurt you and might make you flinch');
    sendMessage('Hard ones should borderline floor you and they should really hurt %Lol%');

    if(isChance(50) && !hasBallsTied() && tieBalls()) {
        sendMessage('%Grin%');
        sendMessage('This should prevent your balls from escaping the hits %EmoteHappy%');
    }


}