{
    if (tryRunLinkFetchId()) {
        if (SISSY_LIMIT.isHardLimit() || SISSY_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            showCategoryImage('BLOWJOB', 5);
            showCategoryImage('BLOWJOB', 5);
            showCategoryImage('BLOWJOB', 0);
            sendMessage('I love showing you these... %Grin%');
            lockImages();
            sendMessage('When you look a scene like this one, what do you feel?', 0);
            showCategoryImage('BLOWJOB', 5);
            sendMessage('I wonder what exactly turns you on so much about it...');
            if(sendYesOrNoQuestion('Does it make you feel a little bit jealous?')) {
                sendMessage('Yeah I thought it might... %Lol%');
            } else {
                sendMessage('You\'ve already accepted the fact that you\'re never going to feel that kind of pleasure');
            }

            if(sendYesOrNoQuestion('Do you secretly wish you were the one sucking that hard cock?')) {
                sendMessage('Oh really? %Lol%');
                sendMessage('I can\'t say I\'m surprised, I always figured you were a little cocksucker...');
                sendMessage('So if I wanted to I could pass you around my male friends... interesting...');
                sendMessage('Only the ones who are so inclined, of course');
            } else {
                sendMessage('I\'m just messing with you, %SlaveName% %Lol%');
                sendMessage('And yet...');
                sendMessage('At least you don\'t mind looking at a hard cock... ', 0);
                showCategoryImage('BLOWJOB', 5);
                unlockImages();
                sendMessage('Though I guess the girl sucking it is an essential component %Grin%');
            }

            sendMessage('I do know a couple of guys who would love to get their cocks sucked by a submissive boy like you');
            sendMessage('And I would definitely love to see that %Moan%');
            sendMessage('I can imagine it already - you crawling on all fours...');
            sendMessage('Me leading you on a leash to my friend');
            sendMessage('I would tell you to open your mouth and stick out your tongue');
            sendMessage('Holding the back of your head in my hands as my friend thrusts his big hard cock into your mouth');
            sendMessage('I would make you deepthroat him until you gag on it');
            sendMessage('And when you start to gag, I will tell my friend to push it deeper into your throat');
            sendMessage('Tears will start to well in you eyes, %SlaveName%');
            sendMessage('It won\'t stop until your face is wet with tears and cum');
            sendMessage('And we will make you swallow every last drop of his hot sticky load');

            if(!CEI_LIMIT.isAllowed()) {
                sendMessage('Unlike with your own cum, I will not give you a choice then %Grin%');
            }

            sendMessage('And you\'d be dressed up as a cute little girl');
            sendMessage('Bra, panties and stockings');
            sendMessage('All nice and pink');
            sendMessage('%MyYour% %cock% securely locked up and staying denied');

            sendMessage('Who knows if they\'d like to use %MyYour% %ass% too');
            sendMessage('I certainly would allow it %SlaveNameSmiley%');
            sendMessage('Making you wear a buttplug to get your ass wide and ready for them');

            if(!ANAL_LIMIT.isAllowed()) {
                sendMessage('No matter if you are fine with anal or not in that case');
                sendMessage('It\'s just gonna be a part of being my little sissy by then');
                sendMessage('At some point it\'s gonna feel natural to you and you are gonna feel empty without a buttplug in %Grin%');
            }

            SISSY_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
        }
    }
}