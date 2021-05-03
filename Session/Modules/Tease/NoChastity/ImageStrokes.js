{
    if (tryRunModuleFetchId(MODULE.STROKING)) {
        let todoStrokes = randomInteger(2, 6)*500;
        sendMessage(random('I want to build up your ache even more ', 'I want to really amplify that ache ', 'You\'re not aching enough for me ', 'I want to make you ache so much more ', 'I want to draw out your ache even more ', 'I want that %Cock% to ache even more ', '%MyYour% %Cock% isn\'t aching nearly enough for me ', 'I want to torture %MyYour% %Cock% with ache ') + ' %SlaveName%');
        sendMessage(random('So I\'m going to tell you how to stroke to some pictures', 'So you\'re going to stroke to some pictures for me', 'So I\'m going to show you some pictures to stroke to', 'So I found a few pictures for you to stroke to', 'So I found some sexy pictures for you to stroke to', 'So I\'m going to let you stroke to some sexy pictures'));
        sendMessage(random('And I\'ll let you stop when you\'ve given me at least ', 'And I\'ll let you stop after ', 'Until you\'ve given me at least ', 'And you don\'t get to stop until you\'ve given me ', 'But I won\'t let you stop until I get at least ') + todoStrokes + ' strokes');

        readyForStroking();

        sendMessage(random('Let\'s get started ', 'Let\'s begin ', 'Here we go ', 'I hope you\'re ready ', 'You\'d better be ready ', 'Better get ready ', 'Better prepare yourself ') + '%Wicked%');

        let strokesDone = 0;
        let sentenceHistory = null;

        while(strokesDone < todoStrokes) {
            let strokes = randomInteger(5, 25) * 10;

            let answers = [
                'I want ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                'Give me ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                '' + strokes + ' strokes for this picture @ShowBlogImage ',
                'I want ' + strokes + ' more strokes for this one @ShowBlogImage ',
                'Give me ' + strokes + ' more strokes for this one @ShowBlogImage ',
                '' + strokes + ' strokes for this one @ShowBlogImage ',
                'Now I want ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                'Now give me ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                'Now ' + strokes + ' strokes for this picture @ShowBlogImage ',
                'Now I want ' + strokes + ' more strokes for this one @ShowBlogImage ',
                'Now give me ' + strokes + ' more strokes for this one @ShowBlogImage ',
                'Now ' + strokes + ' strokes for this one @ShowBlogImage ',
                'This one\'s worth about ' + strokes + ' strokes I think @ShowBlogImage ',
                'This one\'s worth about ' + strokes + ' more strokes I think @ShowBlogImage ',
                'I\'ll take ' + strokes + ' more strokes for this one @ShowBlogImage ',
                'I\'ll take ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                'Now I\'ll take ' + strokes + ' more strokes for this one @ShowBlogImage ',
                'Now I\'ll take ' + strokes + ' more strokes for this picture @ShowBlogImage ',
                'I think you should give me ' + strokes + ' strokes for this one @ShowBlogImage ',
                'I think you should give me ' + strokes + ' strokes for this picture @ShowBlogImage ',
                'Now I think you should give me ' + strokes + ' strokes for this one @ShowBlogImage ',
                'Now I think you should give me ' + strokes + ' strokes for this picture @ShowBlogImage ',
                'Why don\'t you give me ' + strokes + ' strokes for this one @ShowBlogImage ',
                'Why don\'t you give me ' + strokes + ' strokes for this picture @ShowBlogImage ',
                'Now why don\'t you give me ' + strokes + ' strokes for this one @ShowBlogImage ',
                'Now why don\'t you give me ' + strokes + ' strokes for this picture @ShowBlogImage ',
                '' + strokes + ' strokes for this one @ShowBlogImage ',
                '' + strokes + ' strokes for this picture @ShowBlogImage ',
                'I want ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                'Give me ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                '' + strokes + ' strokes for this picture @ShowLocalImage ',
                'I want ' + strokes + ' more strokes for this one @ShowLocalImage ',
                'Give me ' + strokes + ' more strokes for this one @ShowLocalImage ',
                '' + strokes + ' strokes for this one @ShowLocalImage ',
                'Now I want ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                'Now give me ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                'Now ' + strokes + ' strokes for this picture @ShowLocalImage ',
                'Now I want ' + strokes + ' more strokes for this one @ShowLocalImage ',
                'Now give me ' + strokes + ' more strokes for this one @ShowLocalImage ',
                'Now ' + strokes + ' strokes for this one @ShowLocalImage ',
                'This one\'s worth about ' + strokes + ' strokes I think @ShowLocalImage ',
                'This one\'s worth about ' + strokes + ' more strokes I think @ShowLocalImage ',
                'I\'ll take ' + strokes + ' more strokes for this one @ShowLocalImage ',
                'I\'ll take ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                'Now I\'ll take ' + strokes + ' more strokes for this one @ShowLocalImage ',
                'Now I\'ll take ' + strokes + ' more strokes for this picture @ShowLocalImage ',
                'I think you should give me ' + strokes + ' strokes for this one @ShowLocalImage ',
                'I think you should give me ' + strokes + ' strokes for this picture @ShowLocalImage ',
                'Now I think you should give me ' + strokes + ' strokes for this one @ShowLocalImage ',
                'Now I think you should give me ' + strokes + ' strokes for this picture @ShowLocalImage ',
                'Why don\'t you give me ' + strokes + ' strokes for this one @ShowLocalImage ',
                'Why don\'t you give me ' + strokes + ' strokes for this picture @ShowLocalImage ',
                'Now why don\'t you give me ' + strokes + ' strokes for this one @ShowLocalImage ',
                'Now why don\'t you give me ' + strokes + ' strokes for this picture @ShowLocalImage ',
                '' + strokes + ' strokes for this one @ShowLocalImage ',
                '' + strokes + ' strokes for this picture @ShowLocalImage ',
                'This ass is too good for you, but I\'ll let you give ' + strokes + ' strokes @ShowButtImage ',
                'I shouldn\'t even let you see an ass like this, but it\'s worth it to make you suffer. ' + strokes + ' more strokes @ShowButtImage ',
                'This ass was almost too hot to show you, but give me ' + strokes + ' more strokes anyway @ShowButtImage ',
                'She has such a spankable ass... ' + strokes + ' more strokes %SlaveName% @ShowButtImage ',
                'Imagine cupping this ass in your hands and give me ' + strokes + ' more strokes @ShowButtImage ',
                'Give me ' + strokes + ' more strokes for this ass @ShowButtImage ',
                '' + strokes + ' strokes for this ass @ShowButtImage ',
                'Show this ass some love by giving it ' + strokes + ' strokes @ShowButtImage ',
                'I know you want to worship this ass, so give it ' + strokes + ' strokes @ShowButtImage ',
                '' + strokes + ' more strokes for this ass @ShowButtImage ',
                'I think you should give me ' + strokes + ' more strokes for this ass @ShowButtImage ',
                'This ass is gonna cost you ' + strokes + ' more strokes @ShowButtImage ',
                'Pretend this ass is grinding against %MyYour% %Cock% and give it ' + strokes + ' more strokes @ShowButtImage ',
                'This ass is worth suffering for, so give it ' + strokes + ' strokes @ShowButtImage',
                'This ass is so fucking amazing that it\'s gonna cost you ' + strokes + ' strokes @ShowButtImage ',
                '' + strokes + ' strokes for these %Boobs% should make you squirm @ShowBoobsImage ',
                '%Boobs% like these were <i>made</i> for making you suffer. ' + strokes + ' more strokes %SlaveName% @ShowBoobsImage ',
                'More %Boobs%, ' + strokes + ' more strokes @ShowBoobsImage ',
                '' + strokes + ' more strokes and maybe %MyYour% %Balls% will be as big as these %Boobs% %Lol% @ShowBoobsImage ',
                'Give me ' + strokes + ' more strokes while you imagine sucking on these %Boobs% @ShowBoobsImage ',
                'Imagine how these %Boobs% would feel in your hands as you give me ' + strokes + ' more strokes @ShowBoobsImage ',
                'Squeeze ' + strokes + ' more strokes out of %MyYour% %Cock% while you think about aqueezing these %Boobs% %Grin% @ShowBoobsImage ',
                'Worship these %Boobs% with ' + strokes + ' more strokes @ShowBoobsImage ',
                'Imagine these %Boobs% brushing over %MyYour% %Cock% while you stroke it ' + strokes + ' more times @ShowBoobsImage ',
                'Think about how good it would feel to slide %MyYour% %Cock% between these %Boobs% while you give me ' + strokes + ' more strokes @ShowBoobsImage ',
                'I doubt these girls would even notice you, but give them ' + strokes + ' strokes anyway @ShowLesbianImage ',
                'I think these sexy girls deserve ' + strokes + ' strokes @ShowLesbianImage ',
                'I want ' + strokes + ' strokes for these sexy lesbians @ShowLesbianImage ',
                'Imagine they were making love to you instead of each other and give me ' + strokes + ' more strokes @ShowLesbianImage ',
                '' + strokes + ' strokes for these girls @ShowLesbianImage ',
                'Imagine them going down on each other while <i>you</i> get down with ' + strokes + ' more strokes @ShowLesbianImage ',
                'I don\'t think they\'d have any interest in %MyYour% %Cock%, but I\'ll let you stroke it ' + strokes + ' more times @ShowLesbianImage ',
                'Imagine if only girls ever got to cum and give me ' + strokes + ' more strokes @ShowLesbianImage ',
                'Too bad these girls can\'t see the ' + strokes + ' strokes you\'re about to give them @ShowLesbianImage ',
                'I bet their pussies would enjoy the ' + strokes + ' strokes I want next a lot more than %MyYour% %Cock% is about to @ShowLesbianImage ',
                '' + strokes + ' more strokes while I pretend not to be weirded out by this picture you have @ShowHentaiImage ',
                'Okay, give me ' + strokes + ' more strokes while I try to figure out what the fuck I\'m even looking at here @ShowHentaiImage ',
                /*'@DommeTag(Ass) I think you should worship my ass with ' + strokes + ' of the slowest strokes you can possibly give me ',
                '@DommeTag(Ass) I think my ass deserves at <i>least</i> ' + strokes + ' strokes from you right now ',
                '@DommeTag(Boobs) Worship my %Boobs% with ' + strokes + ' agonizingly slow strokes ',
                '@DommeTag(Boobs, Naked) Give me ' + strokes + ' strokes for letting you see my %Boobs% ',*/
            ];
            
            //Only create it once here, we need to create the answers in here though since the amount of strokes changes dynamically
            if(sentenceHistory === null) {
                sentenceHistory = createTempIntegerHistory(0, answers.length - 1)
            }

            let sentence = answers[sentenceHistory.getRandomAvailableId(answers.length / 2)];

            interpretLegacyTaunt(sentence);

            waitForDone(10000);
            strokesDone += strokes;

            if(strokesDone < todoStrokes) {
                sendMessage(random('You\'re at ', 'You\'ve given me ', 'You\'ve managed to give me ', 'Right now you\'re at ', 'By my count you\'re at ', 'I believe you\'re at ', 'I think you\'re at ', 'I\'m pretty sure you\'re at ', 'I think you\'ve given me ', 'I\'m pretty sure you\'ve given me ') + strokesDone + ' strokes ' + random('so far ', 'and counting ', 'and going ', 'with still more to go ', 'so far but you\'re not done yet ', 'so far, but I say let\'s keep going ') + '%SlaveName% %Wicked%');
            }
        }

        sendMessage(strokesDone + ' strokes ' + random('in all ', 'in total ', 'after all that ', 'in the end ') + '%SlaveName%');
        sendMessage(random('I\'ll have to make you go even higher next time ', 'I think you can do even better next time ', 'I wonder if you can beat that number next time ', 'I\'m sure I\'ll get more out of you next time ', 'We\'ll have to see how many you manage next time ') + '%Wicked%');
    }
}
