{
    if (!CBT_LIMIT.isAllowed() || !RIDING_CROP_TOY.hasToy()) {
        runModuleCategory('Pain');
    } else if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.COCK_TORTURE)) {
        if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE, 0) === 0) {
            sendMessage('There\'s something I want you to understand about %MyCock% %Cock% %SlaveName%');
            sendMessage('It fucking offends me');
            sendMessage('It\'s the pleasure center of your entire body');
            sendMessage('Well I think of all the times you\'ve used it to make yourself feel good');
            sendMessage('And it pisses me the fuck off');

            if (VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                sendMessage('That tiny little thing could never bring a woman pleasure');
                sendMessage('I mean, what fucking right do you have to <i>treat</i> it like an object of pleasure?');
            }

            sendMessage('So I just want you to know...');
            sendMessage('I may make you stroke that %Cock% like crazy');
            sendMessage('Edge yourself to complete oblivion');
            sendMessage('But while you\'re riding the line between pleasure and pain...');
            sendMessage('Ecstacy and agony...');
            sendMessage('I only have one goal %SlaveName%');
            sendMessage('And that is the complete and total destruction of your %MyCock% %Cock%');
            sendMessage('Just a bruised, broken lump of meat that will never achieve orgasm again');
            sendMessage('So all this teaisng, it\'s like a bonus for me');
            sendMessage('Because I\'ll know that when %MyCock% %Cock% no longer works for shit');
            sendMessage('The ache I leave behind will torment you for the rest of your fucking life %Wicked%');
            sendMessage('It may take a long, <i>long</i> time to get to that point');
            sendMessage('But I\'m a patient woman %SlaveName%');
            sendMessage('Still...');
            sendMessage('I might be a little <i>extra</i> rough when I make you smack that %Cock% around for me');
            sendMessage('Just to get you to the point of breaking that much quicker %Wicked%');
            sendMessage('Let me show you what I mean');
            smallCBTPunishment(false, true);
            sendMessage('You better get used to that %SlaveName%');
            sendMessage('Beneath all the ache and frustration %MyYour% %Cock% is going to feel');
            sendMessage('Is all that soft, delicate tissue getting beaten...');
            sendMessage('Battered...');
            sendMessage('Bruised...');
            sendMessage('Until I\'ve done so much damage that %MyCock% %Cock% will never work again %Grin%');
        }

        incrementVar(VARIABLE.COCK_DESTRUCTIONS_DONE, 1, 0);

        if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE) === 5) {
            sendMessage('I know I haven\'t been very nice to that %Cock% so far');
            sendMessage('Making you stroke...');
            sendMessage('Making you edge...');
            sendMessage('And when it starts getting too much');
            sendMessage('When %MyYour% %Cock% starts getting too sensitive');
            sendMessage('And all you want to do is cum...');
            sendMessage('I just make you start smacking it around');
            sendMessage('You better get used to it %SlaveName% %Grin%');
        } else if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE) === 10) {
            if (sendYesOrNoQuestion('Do you like it when I make you smack %MyYour% %Cock% around for me %SlaveName%?')) {
                changeMeritLow(true);
                sendMessage('Let\'s see how long you feel that way');
            } else {
                sendMessage('Too fucking bad');
                changeMeritLow(false);
            }

            sendMessage('Cause it\'s never going to stop %Wicked%');
        } else if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE) === 15) {
            sendMessage('I\'m sure %MyYour% %Cock% is tired of getting smacked around by now');
            sendMessage('But it\'s not broken yet');
            sendMessage('So we have to keep going %SlaveName% %Wicked%');
        } else if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE) === 20) {
            sendMessage('I\'m about to make you start smacking %MyYour% %Cock% around %SlaveName%');
            sendMessage('I want you to dread it');
            sendMessage('I want you to think about the fact that it\'s about to happen...');
            sendMessage('And I want it to scare you a little');
            sendMessage('Not because of the pain');
            sendMessage('Or the welts and bruises I intend to leave behind...');
            sendMessage('But because it\'s just another session of blunt force trauma for that %Cock%');
            sendMessage('And I won\'t be satisfied until it completely breaks %Wicked%');
        } else if (getVar(VARIABLE.COCK_DESTRUCTIONS_DONE) === 25) {
            sendMessage('I\'m surprised %MyCock% %Cock% is even still in one piece at this point');
            sendMessage('But that\'s okay %SlaveName%');
            sendMessage('I\'ll keep chipping away it');
            sendMessage('Until there\'s nothing left but a tortured little stump %Wicked%');
        }

        let crop = false;

        if (isChance(getVar(VARIABLE.SUB_PAIN_TOLERANCE) * 5 * (getStrictnessForCharacter() + 1)) && RIDING_CROP_TOY.fetchToy()) {
            crop = true;
        }

        switch (randomInteger(0, 9)) {
            case 0:
                sendMessage('Let\'s get ' + random('%MyCock% ', 'that ') + '%Cock% ' + random('a little ', 'even ', 'that much ') + 'closer to ' + random('breaking ', 'not working anymore ', 'being completely ruined ', 'being destroyed ') + '%SlaveName% %Wicked%');
                break;
            case 1:
                sendMessage('Let\'s make %MyCock% %Cock% ' + random('<i>really</i> fucking sore ', 'a little sore ', 'a little more bruised ', 'really fucking bruised ', 'all bruised and swollen ', 'all swollen and sore ') + 'before ' + random('we continue ', 'we go on ', 'we keep going ', 'we get back to teasing ', 'I make you start stroking again ') + '%SlaveName% %Wicked%');
                break;
            case 2:
                sendMessage('Let\'s make ' + random('your future strokes ', 'all the stroking I\'m going to make you do %GeneralTime% ', 'the rest of your strokes %GeneralTime% ', 'all the rest of your strokes ') + random('absolute torture ', 'even harder on you ', 'so much fucking harder on you ', 'even harder to bear ', 'even harder to endure ') + '%SlaveName% %Wicked%');
                break;
            case 3:
                sendMessage(random('I want %MyCock% %Cock% to suffer ', 'I want that %Cock% to suffer ', 'That %Cock% isn\'t suffering nearly enough for me ', '%MyCock% %Cock% isn\'t suffering nearly enough for me ', 'That %Cock% needs to suffer so much more ') + '%SlaveName% %Wicked%');
                break;
            case 4:
                sendMessage(random('I think %MyCock% %Cock% could use some more bruising ', 'I want to see some more bruises on that %Cock% ', 'You need a black and blue cock to go with those blue balls ', 'I think we need to smack that %Cock% around a bit ', 'Let\'s see how much pain that %Cock% of yours can feel ') + '%SlaveName% %Wicked%');
                break;
            case 5:
                sendMessage(random('I feel like %MyCock% %Cock% might be enjoying this too much ', 'I want to make sure that %MyCock% %Cock% isn\'t enjoying this ', 'Let\'s make sure these strokes aren\'t making %MyCock% %Cock% feel good ', 'Let\'s make sure these strokes are a little less pleasurable for %MyCock% %Cock% ') + '%SlaveName% %Wicked%');
                break;
            case 6:
                sendMessage(random('Stroking\'s not the only way to torture that %Cock% ', '%MyCock% %Cock% doesn\'t seem tortured enough to me ', 'Let\'s torture that %Cock% a little more directly ', 'I feel like a little bit of cock torture ', 'Let\'s make sure %MyCock% %Cock% <i>really</i> feels tortured ') + '%SlaveName% %Wicked%');
                break;
            case 7:
                sendMessage(random('I want it to be unbearable to touch %MyCock% %Cock% ', 'Let\'s see if we can make stroking even more unbearable for you ', 'Let\'s make the ache a little more unbearable for %MyCock% %Cock% ', 'I want the pain in %MyCock% %Cock% to be unbearable ', 'Let\'s make that ache even more unbearable ') + '%SlaveName% %Wicked%');
                break;
            case 8:
                sendMessage(random('I think %MyCock% %Cock% needs a reminder that it\'s not meant to feel pleasure ', 'Let\'s remind %MyCock% %Cock% of its place in life ', 'Let\'s give %MyCock% %Cock% a little more of the pain it deserves ', 'Let\'s make sure %MyCock% %Cock% isn\'t actually feeling any pleasure ', 'I want to remove any trace of pleasure from that %Cock% ') + '%SlaveName% %Wicked%');
                break;
            case 9:
                sendMessage(random('You have no idea how much I want to hurt that %Cock% ', 'I feel like making that %Cock% hurt for a while ', '%MyCock% %Cock% needs a little less pleasure and a lot more pain ', 'I want %MyCock% %Cock% to be in pain right now ', 'Let\'s make things a little more painful for %MyCock% %Cock% right now ') + '%SlaveName% %Wicked%');
                break;
        }

        doCockDestructionLoop(crop, 1);

        if (isChance(getVar(VARIABLE.SUB_PAIN_TOLERANCE) * (getStrictnessForCharacter() + 1 + getMood()))) {
            doCockDestructionLoop(crop, 2);

            if (isChance(Math.round(getVar(VARIABLE.SUB_PAIN_TOLERANCE) / 2 * (getStrictnessForCharacter() + 1 + getMood())))) {
                doCockDestructionLoop(crop, 3);
            }
        }
    }


    function startCockDestructionLoop() {
        let startWith = random('Start with ', 'Let\'s start with ', 'I think we should start with ', 'Go ahead and start with ', 'Begin with ', 'Let\'s begin with ', 'I think you should start with ', 'I want ', 'Give me ', 'Give yourself ', 'I want you to suffer ', 'I want you to feel ', 'I think you should feel ', 'I think you should give me ', 'Go ahead and give me ');
        let light = random('light taps ', 'light hits ', 'soft taps ', 'soft hits ', 'gentle taps ', 'gentle hits ', 'light smacks ', 'soft smacks ', 'gentle smacks ');
        let medium = random('medium taps ', 'medium hits ', 'good taps ', 'good hits ', 'decent taps ', 'decent hits ', 'medium smacks ', 'decent smacks ', 'good smacks ');
        let hard = random('hard blows ', 'hard hits ', 'hard strikes ', 'hard smacks ', 'good hard smacks ', 'hard fucking smacks ', 'devastating smacks ', 'hard fucking hits ', 'hard fucking blows ', 'seriously hard smacks ', 'hard smacks ', 'hard smacks ', 'very hard smacks ', 'really hard smacks ');
        let prepare = random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% just to warm you up ', '%Cock% while you think about what\'s coming next ', '%Cock% to prepare you for what\'s coming ',
            '%Cock% to prepare you for what\'s about to happen ', '%Cock% to prepare you for what\'s about to happen to it ', '%Cock% to build up a little anticipation ', '%Cock% to soften it up a little ',
            '%Cock% to get it all nice and sensitive ', '%Cock% while you think about how much worse it\'s gonna get ', '%Cock% to prepare you for what\'s coming after that ',
            '%Cock% to prepare you for what\'s about to happen next ', '%Cock% to prepare you for when I make you hit it even harder ', '%Cock% to build up a little fear in you ',
            '%Cock% to tenderize it a little bit ', '%Cock% so you\'re hurting right out of the gate ', '%Cock% to warm you up right ');

        let startSentence = [
            startWith + getCockCropSmacks() + ' ' + light + random('with the crop on ', 'with the crop on ', 'with the riding crop on ', 'on ', 'on ', 'on ', 'on ', 'just on ', 'over ', 'just over ') + random('the top of %MyYour% ', '%MyYour% ', '%MyYour% ') + prepare + '%SlaveName% %Wicked%',
            startWith + getCockCropSmacks() + ' ' + light + random('with the crop on ', 'with the crop on ', 'with the riding crop on ', 'right on ', 'on ') + 'on the ' + random('head ', 'head ', 'tip ', 'very tip ') + 'of %MyYour% ' + prepare + '%SlaveName% %Wicked%',
            startWith + getCockCropSmacks() + ' ' + medium + random('with the crop on ', 'with the crop on ', 'with the riding crop on ', 'on ', 'on ', 'on ', 'on ', 'just on ', 'over ', 'just over ') + random('the top of %MyYour% ', '%MyYour% ', '%MyYour% ') + prepare + '%SlaveName% %Wicked%',
            startWith + getCockCropSmacks() + ' ' + medium + random('with the crop on ', 'with the crop on ', 'with the riding crop on ', 'right on ', 'on ') + 'on the ' + random('head ', 'head ', 'tip ', 'very tip ') + 'of %MyYour% ' + prepare + '%SlaveName% %Wicked%',
            startWith + getCockCropSmacks() + ' ' + hard + random('with the crop on ', 'with the crop on ', 'with the riding crop on ', 'on ', 'on ', 'on ', 'on ', 'just on ', 'over ', 'just over ') + random('the top of %MyYour% ', '%MyYour% ', '%MyYour% ') + random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% and just skip the warm up entirely ', '%Cock% while you think about how this is just the beginning ', '%Cock% to start you off in total agony ', '%Cock% while you think about how I\'m just getting started ', '%Cock% to prepare you for when I make you hit it even harder still ', '%Cock% so you see just how fucking serious I am ') + '%SlaveName% %Wicked%',
            startWith + getCockCropSmacks() + ' ' + hard + 'on the ' + random('head ', 'head ', 'tip ', 'very tip ') + 'of %MyYour% ' + random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% and just skip the warm up entirely ', '%Cock% while you think about how this is just the beginning ', '%Cock% to start you off in total agony ', '%Cock% while you think about how I\'m just getting started ', '%Cock% to prepare you for when I make you hit it even harder still ', '%Cock% so you see just how fucking serious I am ', '%Cock% just to make you fucking miserable ', '%Cock% while you squeal in agony ') + '%SlaveName% %Wicked%',
        ];

        sendMessage(random(startSentence));
    }

    function getNextCropTask() {
        let smack = random('Smack ', 'Whack ', 'Hit ', 'Strike ', 'Smack ', 'Smack ', 'Whip ');
        let your = random('%MyCock% ', '%MyCock% ', '%MyCock% ', '%MyCock% ', 'the top of %MyCock% ', 'just the top of %MyCock% ', 'the right side of %MyCock% ', 'the left side of %MyCock% ', 'the bottom of %MyCock% ', 'the head of %MyCock% ', 'the tip of %MyCock% ');
        let location = random('%MyCock% ', '%MyCock% ', '%MyCock% ', '%MyCock% ', 'the top of %MyCock% ', 'just the top of %MyCock% ', 'the right side of %MyCock% ', 'the left side of %MyCock% ', 'the bottom of %MyCock% ', 'the head of %MyCock% ', 'the tip of %MyCock% ');
        let cockNoun = random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% with the crop ', '%Cock% with the riding crop ');

        let start = random('Smack', 'Whack', 'Hit', 'Strike', 'Smack', 'Smack', 'Whip') + '  ' + random('that', '%MyCock%') + '  %Cock% ' + getCockSmacks() + ' times ' + random('in a row', 'back to back', 'over and over', 'one after another', 'in a row', '', '', '', '') + '  ' + random('with the crop', 'with the riding crop', '', '', '', '', '', '') + '  ' + random('right on top', 'right on  the top of it', 'right on the head', 'right on the very tip of the head', 'right on the bottom', 'right underneath the head', '', '', '', '', '', '', '', '', '', '', '', '', '');

        let goAhead = random('Give yourself', 'Go ahead and give yourself', 'Now give yourself', 'Give me', 'Go ahead and give me', 'Now give me', 'Give yourself', 'Now just give yourself', 'Now just give me');

        let answers = [
            smack + your + random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% with the crop ', '%Cock% with the riding crop ') + getCockSmacks() + ' times %SlaveName% %Wicked%',
            random('Just barely ', 'Just lightly ', 'Now just barely ', 'Now just lightly ', 'Gently ', 'Lightly ') + random('smack ', 'flick ', 'hit ', 'tap ', 'smack ', 'smack ', 'whip ') + location + random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% with the crop ', '%Cock% with the riding crop ') + getCockSmacks() + ' times %SlaveName% %Wicked%',
            smack + your + random('%Cock% ', '%Cock% ', '%Cock% ', '%Cock% with the crop ', '%Cock% with the riding crop ') + getCockSmacks() + ' times ' + random('<i>hard</i> ', 'really hard ', 'really hard ', 'devastatingly hard ', 'excruciatingly hard ', 'so hard it makes you want to cry ', '<i>hard</i> ', 'hard ', 'really hard ', 'really hard ', 'as hard as you can ', 'as hard as I would ') + '%SlaveName% %Wicked%',
            'Give yourself ' + getCockSmacks() + random('light ', 'light ', 'gentle ', 'soft ') + random('smacks ', 'smacks ', 'hits ', 'taps ', 'hits ', 'blows ') + 'on ' + location + cockNoun + '%SlaveName% %Wicked%',
            'Give yourself ' + getCockSmacks() + random('hard ', 'hard ', 'really hard ', 'very hard ', 'vicious ', 'devastating ') + random('smacks ', 'smacks ', 'hits ', 'taps ', 'hits ', 'blows ') + 'on ' + location + cockNoun + '%SlaveName% %Wicked%',
            random('Smack ', 'Smack ', 'Strike ', 'Whack ', 'Hit ') + 'your %Cock% ' + random('one time as hard as you can ', 'just one time as hard as you can ', 'one time ', 'just one time ', 'a single time ', 'just once ', 'one time as hard as you can for me ', 'just one time for me ', 'just once for me ') + '%SlaveName% %Wicked%',
            smack + 'your %Cock% ' + getCockSmacks() + ' times %SlaveName% %Wicked%',
            smack + 'your %Cock% ' + getCockSmacks() + ' more times %SlaveName% %Wicked%',
            random('Let\'s see how ', 'I want to see how ', 'Show me how ', 'Let\'s find out how ') + random('your ', 'that ') + '%Cock% ' + random('handles ', 'handles ', 'takes ', 'endures ', 'holds up to ') + getCockSmacks() + ' more ' + random('smacks ', 'smacks ', 'whacks ', 'hits ', 'blows ') + '%SlaveName% %Wicked%',
            start + ' %SlaveName% %Wicked% ',
            random('Just barely', 'Just lightly', 'Now just barely', 'Now just lightly', 'Gently', 'Lightly') + '  ' + random('smack', 'flick', 'hit', 'tap', 'smack', 'smack', 'whip') + '  ' + random('that', '%MyCock%') + '  %Cock% ' + getCockSmacks() + ' times ' + random('in a row', 'back to back', 'over and over', 'one after another', 'in a row', '', '', '', '') + '  ' + random('with the crop', 'with the riding crop', '', '', '', '', '', '') + '  ' + random('right on top', 'right on  the top of it', 'right on the head', 'right on the very tip of the head', 'right on the bottom', 'right underneath the head', '', '', '', '', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            start + ' ' + random('<i>hard</i>', 'really hard', 'really hard', 'devastatingly hard', 'excruciatingly hard', 'so hard it makes you want to cry', '<i>hard</i>', 'hard', 'really hard', 'really hard', 'as hard as you can', 'as hard as I would') + '  %SlaveName% %Wicked% ',
            goAhead + ' ' + random('one', 'one', 'one', 'a single', 'one lonely', 'one solitary', 'one', 'one good', 'once decent') + '  ' + random('smack', 'smack', 'smack', 'smack', 'hit', 'strike', 'blow', 'whack') + '  ' + random('on the head of %MyCock% %Cock%', 'on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            goAhead + ' ' + random('one light', 'a light', 'one gentle', 'a gentle', 'one soft', 'a soft') + '  ' + random('smack', 'flick', 'hit', 'tap', 'smack', 'smack', 'smack') + '  ' + random('on the head of %MyCock% %Cock%', 'on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked%',
            goAhead + ' ' + random('one hard', 'one really hard. one very hard', 'a hard', 'a really hard', 'a very hard', 'once vicious', 'one devastating. one hard', 'a hard', 'one hard', 'a hard', 'one really hard', 'a really hard') + '  ' + random('smack', 'flick', 'hit', 'tap', 'smack', 'smack', 'smack') + '  ' + random('right on the head of %MyCock% %Cock%', 'right on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked%',
            random('Now I want', 'Now give me') + '  ' + getCockSmacks() + ' ' + random('smacks', 'smacks', 'whacks', 'strikes', 'smacks') + '  ' + random('right on top', 'right on  the top of it', 'right on the head', 'right on the very tip of the head', 'right on the bottom', 'right underneath the head', '', '', '', '', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            random('Now I want', 'Now give me') + '  ' + getCockSmacks() + ' ' + random('light', 'gentle', 'soft') + '  ' + random('smacks', 'smacks', 'taps', 'taps', 'smacks') + '  ' + random('right on top', 'right on  the top of it', 'right on the head', 'right on the very tip of the head', 'right on the bottom', 'right underneath the head', '', '', '', '', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            random('Now I want', 'Now give me') + '  ' + getCockSmacks() + ' ' + random('hard', 'hard', 'hard', 'really hard', 'very hard', 'vicious', 'devastating', 'devastatingly hard', 'unbearably hard', '<i>hard</i>', '<i>hard</i>', '<i>really</i> hard', 'brutal') + '  ' + random('smacks', 'smacks', 'whacks', 'strikes', 'smacks') + '  ' + random('right on top', 'right on  the top of it', 'right on the head', 'right on the very tip of the head', 'right on the bottom', 'right underneath the head', '', '', '', '', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            goAhead + ' ' + getCockSmacks() + ' ' + random('smacks', 'smacks', 'smacks', 'smacks', 'hits', 'strikes', 'blows', 'whacks') + '  ' + random('on the head of %MyCock% %Cock%', 'on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked% ',
            goAhead + ' ' + getCockSmacks() + ' ' + random('light smacks', 'little flicks', 'light hits', 'gentle taps', 'gentle smacks', 'gentle hits', 'light smacks') + '  ' + random('on the head of %MyCock% %Cock%', 'on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked%',
            goAhead + ' ' + getCockSmacks() + ' ' + random('hard smacks', 'really hard smacks', 'hard hits', 'vicious whacks', 'vicious smacks', 'very hard smacks', 'insanely hard smacks', 'unbearably hard smacks') + '  ' + random('right on the head of %MyCock% %Cock%', 'right on the tip of %MyCock% %Cock%', 'on the top of %MyCock% %Cock%', 'just underneath %MyCock% %Cock%', 'on the bottom of %MyCock% %Cock%', 'on that little sensitive area beneath the head', '', '', '', '', '', '', '', '', '') + '  %SlaveName% %Wicked%',
            goAhead + ' ' + getCockSmacks() + ' ' + random('good', 'decent', '', '', '', '') + '  ' + random('smacks', 'smacks', 'hits', 'taps', 'hits', 'blows') + ' on ' + random('%MyCock%', '%MyCock%', '%MyCock%', '%MyCock%', 'the top of %MyCock%', 'just the top of %MyCock%', 'the right side of %MyCock%', 'the left side of %MyCock%', 'the bottom of %MyCock%', 'the head of %MyCock%', 'the tip of %MyCock%') + '  ' + cockNoun + '  %SlaveName% %Wicked% ',
        ];

        return random(answers);
    }

    function doCockDestructionLoop(crop, round) {
        if (crop) {
            if (round === 1) {
                startCockDestructionLoop();
                waitForDone();
            } else if (round === 2) {
                sendMessage(random('Actually I\'m not satisfied just yet', 'I think %MyCock% %Cock% could stand a few more bruises actually',
                    'Actually I see no reason to stop just yet', 'Fuck it, let\'s smack it around some more', 'I\'m actually not sure I\'ve tortured it enough',
                    'I think you could stand a little more abuse actually', 'You know what, I don\'t feel like stopping just yet', 'You know, I don\'t think that was actually sufficient') + ' %SlaveName% %Wicked%');
            } else if (round === 3) {
                sendMessage(random('I\'m still not satisfied yet', 'Really, %MyCock% %Cock% just isn\'t bruised enough yet', 'I\'m still not ready to stop abusing that %Cock%',
                    'Fuck it, let\'s smack it around even more', 'Even after all that I <i>still</i> want to torture you', 'I think you could stand even more abuse',
                    'You know what, I just don\'t feel like stopping yet', 'I want to pull even more suffering out of that %Cock%') + ' %SlaveName% %Wicked%');
            }

            for (let x = 0; x < getVar(VARIABLE.SUB_PAIN_TOLERANCE); x++) {
                sendMessage(getNextCropTask());
                waitForDone();
            }
        } else {
            smallPunishment(true, false);
        }

        sendMessage(random('That should keep %MyCock% %Cock% hurting for a while', 'I think %MyCock% %Cock% is a little bit closer to breaking now', 'I wonder how much closer I am to breaking %MyCock% %Cock% now',
            'I hope %MyCock% %Cock% hurts like hell now', 'I hope it\'s fucking unbearable to touch that %Cock% now', 'I can\'t wait for the smack that finally breaks %MyCock% %Cock%',
            'I hope you got some nice bruises after that', 'I love the thought of making you stroke that %Cock% after I\'ve bruised it up', 'Now just wait until I make you start stroking it again',
            'It\'s not going to be much fun when I make you start stroking that %Cock% again', 'This is exactly what %MyCock% %Cock% deserves to feel', 'Too bad this is all %MyCock% %Cock% deserves to feel',
            'I\'m going to make sure that %MyCock% %Cock% never feels pleasure again', 'I\'m only giving that %Cock% what it deserves', 'I\'m not sure how much longer %MyCock% %Cock% is going to last',
            '%MyCock% %Cock% is going to be permanently bruised by the time I\'m done', 'It\'s going to be so much fun to make you start stroking again', 'I hope %MyCock% %Cock% is in fucking agony right now',
            'That should make sure %MyCock% %Cock% doesn\'t stop throbbing any time soon') + ' %SlaveName% %Wicked%');
    }

    function getCockCropSmacks() {
        let smacks = randomInteger(getVar(VARIABLE.SUB_PAIN_TOLERANCE), Math.round(getVar(VARIABLE.SUB_PAIN_TOLERANCE) * (getStrictnessForCharacter() + 1)));
        return Math.round(smacks / 2);
    }

    function getCockSmacks() {
        let smacks = randomInteger(getVar(VARIABLE.SUB_PAIN_TOLERANCE), Math.round(getVar(VARIABLE.SUB_PAIN_TOLERANCE) * (getStrictnessForCharacter() + 1)));
        return Math.round(smacks / 1.5);
    }
}