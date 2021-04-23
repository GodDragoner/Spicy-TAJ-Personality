const LEGACY_TAUNT_TYPE_ORAL = 0;
const LEGACY_TAUNT_TYPE_STROKE = 1;
const LEGACY_TAUNT_TYPE_ANAL = 2;

function interpretLegacyTaunt(message, tauntType = LEGACY_TAUNT_TYPE_STROKE) {
    let tag = '@StrokeSlower';
    let strokeSlower = message.indexOf(tag) !== -1;
    if (strokeSlower) {
        message = message.replace(tag, '');
    }

    tag = '@StrokeSlowest';
    let strokeSlowest = message.indexOf(tag) !== -1;
    if (strokeSlowest) {
        message = message.replace(tag, '');
    }

    tag = '@StrokeFaster';
    let strokeFaster = message.indexOf(tag) !== -1;
    if (strokeFaster) {
        message = message.replace(tag, '');
    }

    tag = '@StrokeFastest';
    let strokeFastest = message.indexOf(tag) !== -1;
    if (strokeFastest) {
        message = message.replace(tag, '');
    }

    tag = '@ShowBoobsImage';
    let showBoobsImage = message.indexOf(tag) !== -1;
    if (showBoobsImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowBlogImage';
    let showBlogImage = message.indexOf(tag) !== -1;
    if (showBlogImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowLocalImage';
    let showLocalImage = message.indexOf(tag) !== -1;
    if (showLocalImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowLesbianImage';
    let showLesbianImage = message.indexOf(tag) !== -1;
    if (showLesbianImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowCaptionImage';
    let showCaptionImage = message.indexOf(tag) !== -1;
    if (showCaptionImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowGayImage';
    let showGayImage = message.indexOf(tag) !== -1;
    if (showGayImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowBlowjobImage';
    let showBlowjobImage = message.indexOf(tag) !== -1;
    if (showBlowjobImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowButtImage';
    let showButtImage = message.indexOf(tag) !== -1;
    if (showButtImage) {
        message = message.replace(tag, '');
    }

    tag = '@DecideKneeling';
    let decideKneeling = message.indexOf(tag) !== -1;
    if (decideKneeling) {
        message = message.replace(tag, '');
    }

    tag = '@ShowCaptionsImage';
    let showCaptionsImage = message.indexOf(tag) !== -1;
    if (showCaptionsImage) {
        message = message.replace(tag, '');
    }

    tag = '@ShowHentaiImage';
    let showHentaiImage = message.indexOf(tag) !== -1;
    if (showHentaiImage) {
        message = message.replace(tag, '');
    }

    message.trim();

    //Only send message if it contains something
    if(message.length > 0) {
        sendMessage(message, 0);
    }


    if (strokeSlower) {
        addStrokingBPM(-10);
    } else if (strokeFaster) {
        addStrokingBPM(10);
    } else if (strokeFastest) {
        let maxBPM = 180;

        if(tauntType == LEGACY_TAUNT_TYPE_ORAL) {
            maxBPM = 120;
        } else if(tauntType == LEGACY_TAUNT_TYPE_ANAL) {
            maxBPM = getMaxAnalBPM();
        }

        addStrokingBPM(maxBPM - getStrokingBPM());
    } else if (strokeSlowest) {
        let minBPM = 20;

        if(tauntType == LEGACY_TAUNT_TYPE_ORAL) {
            minBPM = 35;
        } else if(tauntType == LEGACY_TAUNT_TYPE_ANAL) {
            minBPM = 20;
        }

        addStrokingBPM(minBPM - getStrokingBPM());
    }

    if (showBoobsImage) {
        showCategoryImage('BOOBS');
    } else if (showBlogImage) {
        showTeaseImage();
    } else if (showLocalImage) {
        showTeaseImage();
    } else if(showLesbianImage) {
        showCategoryImage('LESBIAN');
    } else if(showCaptionImage) {
        showCategoryImage('CAPTIONS');
    } else if(showGayImage) {
        showCategoryImage('GAY');
    } else if(showGayImage) {
        showCategoryImage('BLOWJOB');
    } else if(showButtImage) {
        showCategoryImage('BUTTS');
    } else if(showCaptionImage) {
        showCategoryImage('CAPTIONS');
    } else if(showHentaiImage) {
        showCategoryImage('HENTAI');
    }

    if(decideKneeling) {
        if(isKneeling() && decideStopKneeling()) {
            stopKneeling();
        } else {
            sendMessage('I hope your knees don\'t hurt too much yet %Grin%')
        }
    }

    return message;
}