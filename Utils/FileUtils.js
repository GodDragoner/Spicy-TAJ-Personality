const TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
const ScriptHandler = Java.type('me.goddragon.teaseai.api.scripts.ScriptHandler');
const PERSONALITY_PATH = TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath();
const PATH_SEPARATOR = java.io.File.separator;
const IMAGE_PATH = 'Images' + PATH_SEPARATOR + 'Spicy';

function getCurrentScriptName() {
    const name = ScriptHandler.getHandler().getCurrentFile().getName();
    return name.substring(0, name.length - 3);
}

function getPersonalityPath() {
    return PERSONALITY_PATH;
}

function getImageSubFolder(subPath) {
    return new java.io.File(IMAGE_PATH + PATH_SEPARATOR + subPath);
}

function tryCreateFolder(folder) {
    if(!folder.exists()) {
        folder.mkdirs();
        return true;
    }

    return false;
}

function getFile(path) {
    return new java.io.File(path);
}