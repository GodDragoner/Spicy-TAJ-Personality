var PictureSelector = Java.type("me.goddragon.teaseai.api.picture.PictureSelector");
var DressState = Java.type("me.goddragon.teaseai.api.picture.DressState");
var PictureTag = Java.type("me.goddragon.teaseai.api.picture.PictureTag");
var SpicyPictureSelector = Java.extend(PictureSelector, {
    getPicture: function(session, participant) {
        return participant.getPictureSet().getRandomPicture(DressState.FULLY_DRESSED, PictureTag.FACE);
    }
});

TeaseAI.application.getSession().getActivePersonality().setPictureSelector(new SpicyPictureSelector());