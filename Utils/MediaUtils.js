function watchVideoForDuration(durationSeconds) {
    sendDebugMessage('Waiting for video player to start');

    // We need to wait for the player to ready up and start playing before continuing
    let totalMillisecondsWaitedForVideoToStart = 0
    const maxMillisecondsToWaitForVideoToStart = 2000

    while (!isPlayingVideo()) {
        if (totalMillisecondsWaitedForVideoToStart >= maxMillisecondsToWaitForVideoToStart) {
            sendDebugMessage('Video failed to start within ' + maxMillisecondsToWaitForVideoToStart + 'ms, aborting');
            return;
        }
        wait(100, 'MILLISECONDS');
        totalMillisecondsWaitedForVideoToStart += 100
    }

    sendDebugMessage('Playing video for ' + durationSeconds + ' seconds');

    const startTimeInMillis = setDate().getTimeInMillis();
    const endTimeInMillis =  startTimeInMillis + (durationSeconds * 1000);

    // Wait for specified duration or video to finish
    while (isPlayingVideo() && (setDate().getTimeInMillis() < endTimeInMillis)) {
        wait(100, 'MILLISECONDS');
    }

    stopVideo();
    unlockImages();
}

function getRandomMediaCategory() {
    return random(
        'HARDCORE',
        'SOFTCORE',
        'LESBIAN',
        'BLOWJOB',
        'LEZDOM',
        'FEMDOM',
        'HENTAI',
        'GAY',
        'MALEDOM',
        'CAPTIONS',
        'GENERAL',
        'BOOBS',
        'BUTTS'
    );
}