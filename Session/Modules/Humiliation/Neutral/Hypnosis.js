{
    if (tryRunModuleFetchId(getDefaultModulesSinceRun(), MODULE.WATCH_VIDEO)) {
        sendMessage(random('Time for a bit of brainwash!', 'It\'s time for some brainwashing'))

        if (!isInChastity() && allowTeasingStroking()) {
            sendMessage(random('You have my permission to stroke slowly...', 'You may stroke slowly...'));
        }

        sendMessage('Now put your eyes on the screen and watch the video');
        sendMessage('Don\'t you dare look away and make sure your volume is up');
        playRandomSissyHypno();

        sendMessage(random('I hope you\'re feeling more submissive', 'If you were here you would watch stuff like this daily') + ' %EmoteHappy%');
    }
}