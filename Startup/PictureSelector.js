let DressState = Java.type("me.goddragon.teaseai.api.picture.DressState");
let PictureTag = Java.type("me.goddragon.teaseai.api.picture.PictureTag");

{
    let PictureSelector = Java.type("me.goddragon.teaseai.api.picture.PictureSelector");

    let SpicyPictureSelector = Java.extend(PictureSelector, {
        getPicture: function (session, participant) {
            return participant.getPictureSet().getRandomPicture(DressState.FULLY_DRESSED, PictureTag.FACE);
        }
    });

    TeaseAI.application.getSession().getActivePersonality().setPictureSelector(new SpicyPictureSelector());
}

function showDommeTaggedImage(dressState, pictureTag, duration) {
    let pictureSet = TAJ_CHAT_HANDLER.getHandler().getMainDomParticipant().getPictureSet();

    if(pictureTag !== null) {
        return showImage(pictureSet.getRandomPicture(dressState, pictureTag).getFile())
    } else {
        sendDebugMessage('Picture set for domme was null so showing tease image instead');
        return showCategoryImage();
    }
}

function showDommeTaggedImageForPictureTag(pictureTag, duration) {
    let pictureSet = TAJ_CHAT_HANDLER.getHandler().getMainDomParticipant().getPictureSet();

    let pictureTagArray = new java.util.ArrayList();
    pictureTagArray.add(pictureTag);

    if(!isUndefined(pictureTag) && !isUndefined(pictureSet)) {
        return showImage(pictureSet.getRandomPictureForTagStates(new java.util.ArrayList(), pictureTagArray).getFile())
    } else {
        sendDebugMessage('Picture set for domme was null so showing tease image instead');
        return showCategoryImage();
    }
}