let DressState = Java.type("me.goddragon.teaseai.api.picture.DressState");
let PictureTag = Java.type("me.goddragon.teaseai.api.picture.PictureTag");
let PictureHandler = Java.type("me.goddragon.teaseai.api.picture.PictureHandler");
let MediaType = Java.type("me.goddragon.teaseai.api.media.MediaType");

let MediaFolder = Java.type("me.goddragon.teaseai.api.media.MediaFolder");

function watchVideoForDuration(durationSeconds) {
    sendDebugMessage('Waiting for video player to start');

    // We need to wait for the player to ready up and start playing before continuing
    let totalMillisecondsWaitedForVideoToStart = 0;

    //15 seconds
    const maxMillisecondsToWaitForVideoToStart = 1000*15;

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

function createMediaCategoryVideo(category) {
    return {
        play: function() {
            showCategoryVideo(category);
        }
    }
}

function getRandomTaggedImageFromMediaFolder(mediaFolder, mustHaveTags, mustNotHaveTags) {
    let tagList = new java.util.ArrayList();

    for(let x = 0; x < mustHaveTags.length; x++) {
        tagList.add(mustHaveTags[x]);
    }

    let noTagList = new java.util.ArrayList();

    for(let x = 0; x < mustNotHaveTags.length; x++) {
        noTagList.add(mustNotHaveTags[x]);
    }


    let pick = random(mediaFolder.filterForTags(tagList, noTagList));

    return pick.getRandomMedia();
}

function getRandomCustomTaggedImage(mustHaveTags, mustNotHaveTags) {
    let tagList = new java.util.ArrayList();

    for(let x = 0; x < mustHaveTags.length; x++) {
        tagList.add(mustHaveTags[x]);
    }

    let noTagList = new java.util.ArrayList();

    for(let x = 0; x < mustNotHaveTags.length; x++) {
        noTagList.add(mustNotHaveTags[x]);
    }


    let pick = random(MEDIA_COLLECTION.getCustomTagged(MediaType.IMAGE, tagList, noTagList));

    return pick.getRandomMedia();
}