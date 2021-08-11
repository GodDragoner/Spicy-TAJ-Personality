{
    let randInt = randomInteger(1, 100);

    //Run a bigger taunt special instead of a normal taunt (1/20)
    if(randInt <= 5 && getAllowedTauntCategories().length > 0) {
        findTauntAndRun(getAllowedTauntCategories());
    } else {
        let teaseVerb = random('suffering', 'dripping', 'teasing', 'aching');

        let answers = [
            'Make %MyCock% %Cock% try to get as hard as a rock for me',
            'Make %MyCock% %Cock% try to get harder than it\'s ever been',
            'Don\'t speed it up or slow down, just keep going at this pace',
            'Lower the level a little bit',
            'Lower the level %SlaveName%',
            'Lower the level for me',
            'Lower the level a little now',
            'Lower the level to as low as it will go',
            'Increase the level now %SlaveName%',
            'Increase the level a little bit',
            'Increase the level a little',
            'Increase the level %SlaveName%',
            'As high as it goes now!',
            'As high as it goes, but try not to edge!',
            'Increase the pressure a little bit',
            'Decrease the pressure a little bit, I don\'t want you to edge yet',
            'I hope %MyCock% %Cock% is ' + random('pulsing', 'throbbing') + ' in its %ChastityCage% like crazy',
            'Mmmm tease %MyCock% %Cock% for me %SlaveName%',
            'Let your hand slide up and down your thighs',
            'Make %MyCock% %Cock% feel as good as you possibly can in that tight prison',
            'Increase the intensity as high as it goes',
            'Turn it up as high as it goes',
            'Go all in now with full intensity! %Lol% ',
            'Highest intensity, now! %Lol%',
            'Lower the intensity a bit %SlaveName%',
            'Back a bit off',
            'Go a bit easier on %MyCock% %Cock% for now',
            'I want you to go lower the intensity a bit',
            'Go a bit easier for now, I want to draw this out',
            'Back off a bit for now %SlaveNameSmiley%',
            'Back off a bit more',
            'Increase the intensity a bit',
            'Make it a little bit more intense',
            'Increase the pressure on %MyYour% %Cock% a bit',
            'I want you to increase the intensity a bit more ',
            'Increase the pressure a little, I want this to be hard on you %Grin%',
            'Increase the pressure a little, I want you to suffer %EmoteHappy%',
            'Go as easy on %MyYour% %Cock% as possible, make it frustrating',
            'I want you to go back to the lowest possible intensity',
            'I want you to go back to the lowest possible intensity, make it frustrating',
            'Now all the way to the lowest possible intensity',
            'I want you to go to the highest possible intensity',
            'Now all the way to the highest possible intensity',
        ];

        //Join the two lists
        for (let x = 0; x < STROKE_AND_TEASE_TAUNTS.length; x++) {
            answers.push(STROKE_AND_TEASE_TAUNTS[x]);
        }

        let answer = findRandomUnusedElement(answers, createHistory('basicVibeTaunt'));

        interpretLegacyTaunt(answer);

        sendDebugMessage('Sent vibe taunt');
    }
}