{
    if (tryRunModuleFetchId(2, MODULE.STROKING)) {

        //QUALITY: previously teased modules
        /*
            --UNINTERPRETED LINE:@DomTag(Ass) @RT(I'm ready for you to worship my ass now, It's time for you to worship my ass, Remember I said you were going to worship my ass, Time to worship my ass, I believe we said something about ass worship) @CheckFlag(Worshipped Before) @DeleteFlag(AssWorshipModule)
         */

        lockImages();
        showDommeTaggedImageForPictureTag(PictureTag.ASS);
        sendMessage(random('I think you should worship my ass for a little bit', 'I\'m in the mood for some ass worship', 'I\'m in the mood for a little ass worship', 'I feel like having my ass worshipped'));

        if (getVar(VARIABLE.ASS_WORSHIPS_DONE, 0) === 0) {
            sendMessage('Now, I know you haven\'t worshipped me before');
            sendMessage('Besides worshipping the ground I walk on %Wicked%');
            sendMessage('So let me explain what I mean');
            sendMessage('Most people think of worshipping as slow, drawn out attention with your tongue');
            sendMessage('Obviously that\'s not going to happen between us');
            showDommeTaggedImageForPictureTag(PictureTag.ASS);
            sendMessage('You will <i>never</i> touch this ass');
            sendMessage('Or <i>any</i> part of me for that matter %Lol%');
            sendMessage('So you\'re probably thinking I\'m just going to make you stroke while you look at it');
            sendMessage('And you\'re right');
            sendMessage('But it\'s a little more complicated than that');
            sendMessage('See, in order for strokes to be <i>worship</i> strokes');
            sendMessage('They have to make you suffer way more than usual %Grin%');
            sendMessage('So I think when I have you worship me...');
            sendMessage('Those strokes are either going to be frustratingly <i>slow</i>');
            sendMessage('Or you\'re going to give them to me while holding a <i>very</i> long edge %Grin%');
            sendMessage('I want you to remember what I mean by worshipping me from now on');
            sendMessage('Because you\'re going to be doing it a lot');
            sendMessage('Not just for my ass but for my %Boobs% too');
            sendMessage('So let me show you exactly what you\'re in for %Grin%');
        } else {
            showDommeTaggedImageForPictureTag(PictureTag.ASS);
            sendMessage(random('This is gonna hurt', 'You\'re really gonna suffer for it this time', 'And I want it to make you ache like fucking crazy', 'So I hope you\'re ready to suffer', 'So you\'d better be ready to suffer for it', 'So I think you know what\'s coming next') + ' %SlaveName% %Grin%');
        }

        showDommeTaggedImageForPictureTag(PictureTag.ASS);

        if (isChance(50)) {
            sendMessage(random('Get', 'Bring yourself', 'Get that %Cock%', 'Bring that %Cock%', 'I want you to bring yourself', 'I want you to bring %MyYour% %Cock%') + ' to the edge for my ass and ' + random('be prepared', 'get prepared', 'be ready', 'get ready', 'I hope you\'re ready', 'you\'d better be ready') + ' to hold it for a <i>very</i> long time %Wicked%');
            startEdging(getEdgeHoldSeconds(EDGE_HOLD_LONG) * 2);

            switch (randomInteger(1, 3)) {
                case 1:
                    sendMessage('You need to get used to suffering for me like that %SlaveName%');
                    sendMessage('I mean, you don\'t even deserve to see my ass in the first place...');
                    sendMessage('So you\'d better believe you\'re going to pay a high price for the privilege %Wicked%');
                    break;
                case 2:
                    sendMessage('I bet %MyYour% %Cock% is dying after holding that edge');
                    sendMessage('But it\'s just going to have to suffer %SlaveName%');
                    sendMessage('My entire body is out of your league');
                    showDommeTaggedImageForPictureTag(PictureTag.ASS);
                    sendMessage('But my ass is fucking <i>perfect</i>');
                    showDommeTaggedImageForPictureTag(PictureTag.ASS);
                    sendMessage('So there\'s no way you should be able to see it as much as you do');
                    sendMessage('Without paying this kind of sacrifice from time to time %Grin%');
                    break;
                case 3:
                    sendMessage('You probably feel like your %Cock% is in Hell');
                    sendMessage('Like it\'s damned to suffer for all eternity in a lake of fire');
                    sendMessage('You may even think I\'m the devil right now %Lol%');
                    sendMessage('But this isn\'t Hell');
                    sendMessage('And you\'re not drowning in a sea of flames');
                    sendMessage('The only lake of fire here is the one trapped in your %Balls%');
                    sendMessage('And I\'m the only one who can set it free %Grin%');
                    sendMessage('And that is one flame that <i>will</i> burn eternally %Grin%');
                    break;
            }
        } else {
            //QUALITY: Taunts that don't speed or slow down worship strokes
            sendMessage('%StartStroking%');
            startStroking(10);

            let iterations = 0;
            let duration = randomInteger(2, 3) * 5;

            //2-3 minutes
            while (iterations <= duration) {
                showDommeTaggedImageForPictureTag(PictureTag.ASS);
                wait(60 / 5);
                iterations++;
            }

            stopStrokingMessage();

            switch (randomInteger(1, 3)) {
                case 1:
                    sendMessage('You need to get used to suffering for me like that %SlaveName%');
                    sendMessage('I mean, you don\'t even deserve to see my ass in the first place...');
                    sendMessage('So you\'d better believe you\'re going to pay a high price for the privilege %Wicked%');
                    break;
                case 2:
                    sendMessage('I know %MyYour% %Cock% is complete agony right now');
                    sendMessage('But my ass deserves that kind of sacrifice');
                    sendMessage('Even if it teases you');
                    sendMessage('Torments you');
                    sendMessage('Makes you suffer like fucking crazy');
                    sendMessage('You still get to see it');
                    sendMessage('And this is going to be the eternal cost of that privilege %Grin%');
                    break;
                case 3:
                    sendMessage('I know your %Cock% feels so achy and frustrated right now');
                    sendMessage('That\'s how it <i>should</i> feel %SlaveName%');
                    sendMessage('Obviously I\'m just letting you see my ass so it will make you ache');
                    sendMessage('But all the ache in the world doesn\'t change the fact that you just don\'t deserve to see it');
                    sendMessage('My ass is <i>perfect</i>')
                    sendMessage('So far out of your league');
                    sendMessage('That these worship sessions aren\'t really torture');
                    sendMessage('They\'re just a necessary means to maintain the balance between us');
                    sendMessage('My ass has brought you to your knees');
                    sendMessage('And no matter how you look it');
                    sendMessage('That\'s where you belong in front of me %Grin%');
                    break;
            }
        }


        sendMessage(random('I think you\'ve suffered enough for now', 'I think that\'s enough worshipping for now', 'I think I feel sufficiently worshipped', 'I think you\'ve suffered enough', 'I think I feel properly worshipped', 'I think that was a sufficient worship session'));
        sendMessage(random('My ass really is too good for you ', 'I have the most amazing ass you\'ll ever see in your life ', 'You don\'t even deserve to lay eyes on my ass ', 'I know how much you\'re in love with my ass ', 'Just seeing my ass would bring so much pleasure to anyone else ') + '%SlaveName%');
        sendMessage(random('This is the price you have to pay for perfection ', 'All it\'s ever going to do for you is make you suffer ', 'I only let you see it because it makes you ache ', 'I would never let you see it if it didn\'t make you suffer so much ', 'Consider yourself lucky I let you see it at all ') + '%Wicked%');

        unlockImages();

        incrementVar(VARIABLE.ASS_WORSHIPS_DONE, 1);
    }
}