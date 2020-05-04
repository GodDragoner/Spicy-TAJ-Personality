let StopWatch = Java.type("org.apache.commons.lang.time.StopWatch");

function incrementTempVar(varName, object, defaultValue = 0) {
    setTempVar(varName, getVar(varName, defaultValue) + object);

    return getVar(varName);
}

function incrementVar(varName, object, defaultValue = 0) {
    setVar(varName, getVar(varName, defaultValue) + object);

    return getVar(varName);
}

function isImagesLocked() {
    return Java.type('me.goddragon.teaseai.api.media.MediaHandler').getHandler().isImagesLocked();
}
