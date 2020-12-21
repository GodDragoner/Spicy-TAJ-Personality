function watchVideoForDuration(durationSeconds) {
    const player = Java.type('me.goddragon.teaseai.api.media.MediaHandler').getHandler().getCurrentVideoPlayer();

    if(player == null) {
        return;
    }

    sendDebugMessage('Waiting for media player to start');

    //We need to wait for the player to ready up and start playing before continuing
    while (!player.getStatus().equals(javafx.scene.media.MediaPlayer.Status.PLAYING)) {
        wait(100, 'MILLISECONDS');
    }
    sendDebugMessage('Currently playing ' + player.getMedia().getSource());
    sendDebugMessage('Waiting for ' + durationSeconds);

    let startDate = setDate().getTimeInMillis();
    //Max duration in second for the video to play
    let maxSecondsToWatch = durationSeconds;

    while (player.getStatus().equals(javafx.scene.media.MediaPlayer.Status.PLAYING) && (setDate().getTimeInMillis() - startDate) < maxSecondsToWatch * 1000) {
        //We are waiting for it to finish in intervals fo 1/10 of a second
        wait(100, 'MILLISECONDS');
    }

    player.stop();
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