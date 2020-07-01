{
    let answers = [
        'Make %MyCock% %Cock% hard as a rock for me',
        'Make %MyCock% %Cock% harder than it\'s ever been',
        'Stroke stroke stroke',
        'Just stroke stroke stroke %Grin%',
        'Just stroke for me',
        'Just stroke for me %SlaveName%',
        'Keep stroking',
        'Keep stroking %SlaveName%',
        'Keep stroking %SlaveName%',
        'Keep %JerkingOff% just like %MyCock%... good %SlaveName%',
        'Don\'t stop stroking',
        'You have no choice but to keep stroking for me',
        'Don\'t speed up or slow down, just keep going at this pace',
        'Slow down a little bit @StrokeSlower',
        'Slow down %SlaveName% @StrokeSlower',
        'Slow down your strokes for me @StrokeSlower',
        'Stroke a little slower now @StrokeSlower',
        'Stroke as slow as you can @StrokeSlowest',
        'Stroke really slow now, until you can\'t go any slower @StrokeSlowest',
        'Speed up now %SlaveName% @StrokeFaster',
        'Speed up your strokes a little bit @StrokeFaster',
        'Stroke a little faster @StrokeFaster',
        'Stroke faster @StrokeFaster',
        'As fast as you can now! @StrokeFastest',
        'Stroke as fast as you can, but try not to edge! @StrokeFastest',
        'Tighten your grip a little bit',
        'Loosen your grip a little bit, I don\'t want you to edge yet',
        'Nothing gets me hotter than making you %JerkOff% for me',
        'I hope %MyCock% %Cock% is ' + random('pulsing', 'throbbing') + ' like crazy',
        'I\'m gonna take all your pleasure for myself',
        'I\'m gonna take every last bit of your pleasure for myself',
        'Mmmm stroke %MyCock% %Cock% for me %SlaveName%',
        'Let every stroke make you ' + 'ache for me even more',
        'Let every stroke make you ' + 'even more desperate',
        'Let your hand slide up and down %MyCock% %Cock%',
        'You are going to %JerkOff% until you forget your name',
        'There is nothing else I\'d rather be doing than making you suffer %EmoteOther%',
        'Make %MyCock% %Cock% feel as good as you possibly can',
        'I\'m gonna make sure %MyCock% %Cock% remembers every single stroke you give to me %Grin%',
        'Don \'t stop stroking, %SlaveName%',
        'Keep stroking, %SlaveName%',
        'Keep Stroking',
        'Don \'t stop stroking',
        'I want you to keep stroking',
        'Keep going, %SlaveName%',
        'Keep stroking just like that ',
        'Keep %JerkingOff% for me',
        'Just keep %JerkingOff%',
        'Keep %JerkingOff% just like that, %SlaveName%',
        'Don \'t stop, just stroke stroke stroke %Grin%',
        'Keep stroke-stroke-stroking, %SlaveName% %Grin%',
        'Don \'t stop, stroke',
        'Don \'t slow dow, keep stroking just like that',
        'You need to keep stroking %MyCock% %Cock%',
        'Keep stroking my toy, %SlaveName%',
        'Don \'t stop stroking %MyCock% %Cock%',
        'Keep stroking %MyCock% %Cock%',
        'Keep it up, it \'s not time to stop %JerkingOff% yet',
        'Stroke as fast as you possibly can @StrokeFastest',
        'Stroke fast %SlaveName%, I want that hand to be a blur @StrokeFastest',
        'Gotta go fast! @StrokeFastest',
        'Gotta go fast! %Lol% @StrokeFastest',
        'Slow it down a little bit @StrokeSlower',
        'Stroke a little slower for me @StrokeSlower',
        'Slow down your pace a little bit @StrokeSlower',
        'I want you to slow down a little bit more @StrokeSlower',
        'Slow down a little, I want to draw this out @StrokeSlower',
        'Slower @StrokeSlower',
        'Slower %SlaveName% @StrokeSlower',
        'Slow down a little more @StrokeSlower',
        'Speed it up a little bit @StrokeFaster',
        'Stroke a little faster for me @StrokeFaster',
        'Speed up your pace a little bit @StrokeFaster',
        'I want you to speed up even more @StrokeFaster',
        'Speed up a little, I want this to be hard on you %Grin% @StrokeFaster',
        'Stroke faster, I want you to suffer %EmoteHappy% @StrokeFaster',
        'Faster @StrokeFaster',
        'Faster %SlaveName% @StrokeFaster',
        'Speed up a little @StrokeFaster',
        'Give me slow, frustrating worship strokes @StrokeSlowest',
        'I want you to stroke as slow as possible @StrokeSlowest',
        'Slow those strokes all the way down %SlaveName%, make it frustrating @StrokeSlowest',
        'Now slow way down @StrokeSlowest',
    ];

    //Join the two lists
    for(let x = 0; x < STROKE_AND_TEASE_TAUNTS.length; x++) {
        answers.push(STROKE_AND_TEASE_TAUNTS[x]);
    }


    /*if (isChance(maxTaunts * 100 / (answer.length + maxTaunts))) {
        let tauntIndex = randomInteger(0, maxTaunts);
        switch (tauntIndex) {
            case 0:
                sendMessage("Make it feel good %SlaveName%");
                break;
            case 1:
                sendMessage("Make that %Cock% feel" + random('amazing', 'good'));
                break;
            case 2:
                sendMessage("Make that #Cock hard as a rock for me");
                break;
            case 3:
                sendMessage("Make that #Cock harder than it's ever been");
                break;
            case 4:
                sendMessage("Stroke stroke stroke");
                break;
            case 5:
                sendMessage("Just stroke stroke stroke #Smile");
                break;
            case 6:
                sendMessage("I know you can edge quicker than this");
                break;
            case 7:
                sendMessage("Focus %SlaveName%, I want you on that edge");
                break;
            case 8:
                lockImages();
                sendMessage(random("Need some encouragement over there? How bout this?", "Maybe this picture I just found will help you get there faster", "Maybe this will help you get there faster"), 0);
                showTeaseImage(3);
                unlockImages();
                break;
            case 9:
                lockImages();
                sendMessage("Think an ass like this will help you edge a little quicker?", 0);
                showCategoryImage("BUTTS", 3);
                unlockImages();
                break;
            case 10:
                lockImages();
                sendMessage("I know you want to edge for a pair of %Boobs% like this", 0);
                showCategoryImage("BOOBS", 3);
                unlockImages();
                break;
        }

    } else {*/
        let answer = findRandomUnusedElement(answers, createHistory('basicStrokingTaunt'));

        interpretLegacyTaunt(answer);

        sendDebugMessage('Send stroking taunt');
    //}
}