{
    let PictureSelector = Java.type("me.goddragon.teaseai.api.picture.PictureSelector");
    let DressState = Java.type("me.goddragon.teaseai.api.picture.DressState");
    let PictureTag = Java.type("me.goddragon.teaseai.api.picture.PictureTag");


    let SpicyPictureSelector = Java.extend(PictureSelector, {
        getPicture: function (session, participant) {
            return participant.getPictureSet().getRandomPicture(DressState.FULLY_DRESSED, PictureTag.FACE);
        }
    });

    TeaseAI.application.getSession().getActivePersonality().setPictureSelector(new SpicyPictureSelector());
}