{
    if (CBT_LIMIT.isAllowed()) {
        runModuleCategory(CATEGORY_TEASE);
    } else if (tryRunModuleFetchId(2, MODULE.STROKING)) {

        if (getVar(VARIABLE.ASS_WORSHIPS_DONE, 0) === 0) {
            sendMessage('I came across something interesting the other day...');
            sendMessage('It\'s called "gooning"');

            if (sendYesOrNoQuestion('Have you heard of it?')) {
                sendMessage('Okay');
            } else {
                sendMessage('That\'s kind of surprising, but okay');
                sendMessage('Gooning is basically just edging to porn... ');
                sendMessage('Or sometimes to a Mistress\'s body');
                sendMessage('And the whole point is that you don\'t cum..');
                sendMessage('You just edge...');
                sendMessage('Over and over and over...');
                sendMessage('Until your brain turns to complete mush');
                sendMessage('And you\'re nothing more than a drooling shell of a man');
                sendMessage('Whose only thought is to stroke and edge forever');
                sendMessage('Then you would be nothing more than a goon');
                sendMessage('Hence, the term "gooning"');
            }

            sendMessage('The thing is, I kinda like the edging aspect of gooning');
            sendMessage('But I hate the transcendental mindlessness of reaching the goon state');
            sendMessage('If I\'m making you edge to that extent...');
            sendMessage('I don\'t <i>want</i> your senses to be dulled by mindlessness');
            sendMessage('I want you to <i>clearly</i> feel every last bit of throbbing ache in %MyYour% %Cock%');
            sendMessage('So I came up with my own twist on gooning...');
            sendMessage('One that keeps you <i>very</i> aware during the entire process');
            sendMessage('Here, I\'ll show you %Grin%');
            sendMessage('This is a pretty good picture to practice gooning with', 0);
            lockImages();
            showCategoryImage('BUTTS', 4);
            sendMessage('This ass is nice enough to be worshipped...');
            sendMessage('So go ahead and edge for it right now');
            startEdging();
            unlockImages();
            sendMessage('Now that was just a single edge');
            sendMessage('But imagine you just gave her ass twenty edges...');
            sendMessage('Or fifty...');
            sendMessage('Or a hundred...');
            sendMessage('Or however many it took to start slipping into the ignorant bliss of being a goon');
            sendMessage('Well here\'s what I\'ll do then..');
            smallPunishment(true, false);
            sendMessage('I think you see where I\'m going with this %Grin%');
            sendMessage('Every smack brings you down a little bit further from that high');
            sendMessage('Until your senses are as sharp as ever...');
            sendMessage('And so is the ache %EmoteHappy%');
            sendMessage('So you\'re going to be doing a lot of gooning for me %SlaveName%');
            sendMessage('But you\'re not gonna be transcending <i>shit</i> %Lol%');
            sendMessage('Now that you understand <i>my</i> definition...');
            sendMessage('Let me show you what it\'s going to be like being my goon slave %Grin%');
        } else {
            sendMessage(random('Time to goon yourself for me ', 'I hope you\'re ready for more gooning ', 'Goon time ', 'Time for another goon session ', 'I hope you\'re ready for another goon session ', 'Time to goon some more ', 'I think you need to goon some more for me ') + '%SlaveName% %Wicked%');
        }

        let mood = getMood();
        let goonTimes = randomInteger((getStrictnessForCharacter() + 1) + mood, (getStrictnessForCharacter() + 1) * 2 + mood);

        while (goonTimes > 0) {
            lockImages();
            showCategoryImage(random('BLOWJOB', 'BUTTS', 'BOOBS', 'BLOWJOB'));
            startMultipleEdges(randomInteger(3, 5), randomInteger(5, 10));
            goonTimes--;
            unlockImages();

            sendMessage(random('Now before you ', 'Now to make sure you don\'t ') + random('start zoning out', 'turn into a zombie on me', 'slip into a mindless state', 'enter stroker subspace', 'start feeling good from gooning', 'slip into a goon coma', 'trance out enter a loser zen state'));

            smallPunishment(true, false);
            sendMessage(random('That should keep you focused', 'Stay focused on the pain for me', 'Just focus on the pain', 'Don\'t think about anything but the ache', 'Let the ache wash over you', 'Focus on the ache in %MyYour% %Cock%', 'No zoning out now', 'Keep your mind right here in the moment', 'Focus on the moment', 'Keep yourself occupied with the ache', 'Feel your zen state just slipping away', 'I want you to feel every last bit of this ache', 'Keep your mind on the ache', 'No escape for you goon slave') + ' %Wicked%')
        }

        sendMessage(random('That\'s enough', 'I think that\'s enough gooning', 'That should suffice', 'That will do', 'I think you\'ve gooned enough', 'That should be enough gooning') + ' ' + random('for now', 'for the moment', 'right now'));

        switch (randomInteger(0, 4)) {
            case 0:
                sendMessage('I\'m all for endless edging...');
                sendMessage(random('But ascending to a higher plane is where I draw the line', 'But only when you can\'t escape the pain', 'But only when you feel each and every single one', 'Especially when you can\'t escape the effect of it', 'But even that has to be on my terms') + ' %SlaveName% %Wicked%');
                break;
            case 1:
                sendMessage('Gooning is a form of worship');
                sendMessage(random('And of course my version requires a painful sacrifice', 'And I think %MyYour% %Cock% needs to worship me a <i>lot</i>', 'And I prefer your offerings to be as painful as possible', 'And worship is only meaningful if you suffer', 'One that\'s going to take its toll on that %Cock%') + ' %Wicked%');
                break;
            case 2:
                sendMessage('You were born to be a goon slave %SlaveName%');
                sendMessage(random('It\'s just a good thing you didn\'t end up serving someone who\'d let you enjoy it', 'It\'s the only purpose your %Cock% can truly serve', 'I mean, what else could you possibly be good for?', 'That %Cock% was meant to live on the edge', 'And I will make sure you uphold your birthright') + '%Wicked%');
                break;
            case 3:
                if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                    sendMessage('Gooning isn\'t the only thing you\'re good for %SlaveName%');
                    sendMessage(random('But it\'s fucking close', 'There\'s also edging and denial', 'Actually of course it is, don\'t fucking kid yourself', 'Oops, I meant <i>is</i> the only thing you\'re good for',  'There\'s ballbusting too') + ' %Wicked%');
                    break;
                }
           //Fallthrough
            case 4:
                sendMessage('This is how you serve me %SlaveName%');
                sendMessage(random('With constant and painful sacrifice', 'With an ache that will burn eternal', 'With complete and total suffering', 'With painful, focused suffering', 'With the worst kind of ache imaginable') + ' %Wicked%');
                break;
        }

        incrementVar(VARIABLE.GOONINGS_DONE, 1);
    }
}