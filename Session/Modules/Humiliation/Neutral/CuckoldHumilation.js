{
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.WATCH_VIDEO)) {
        sendMessage(random('I want to show you a video!', 'You\'re going to watch a video'));
        sendMessage(random('I wanna drill a message into your mind', 'I\'m gonna slowly drill a message into your soul'));


        //Different message TODO: Ask if never asked before
        if(getCuckoldLimit() != LIMIT_ASKED_YES) {
            sendMessage(random('Your %Cock% will be denied over and over again', 'Your %Cock% is useless', 'Your %Cock% has no you use to me!'));
        } else {
            sendMessage(random('You are my cuckold!', 'Your %Cock% is useless', 'Your %Cock% has no you use to me!'));
        }

        if (!isInChastity() && allowTeasingStroking()) {
            sendMessage(random('You have my permission to stroke slowly...', 'You may stroke slowly...'));
        }

        sendMessage('Now put your eyes on the screen and watch the video');
        sendMessage('Don\'t you dare look away and make sure your volume is up');

        if(getCuckoldLimit() != LIMIT_ASKED_YES) {
            playVideo('Videos/Spicy/Modules/Denied/*.mp4', true);
        } else {
            playVideo('Videos/Spicy/Modules/Cuckold/*.mp4', true);
        }

        sendMessage(random('If you ever get to serve me this will be you!', 'Should I ever allow you to service me this is you!', 'LOL! Imagine that!', 'Gosh that was so hot!',
            'You can\'t imagine how much pleasure I get daily while you\'re denied!', 'Your denied tiny dick doesn\'t deserve ANY attention!', 'Hmm I can watch stuff like this all day!',
            'I\'ll never tire from watching stuff like this!', '%Grin%', 'Maybe someday this could be you %Grin%'));
    }
}