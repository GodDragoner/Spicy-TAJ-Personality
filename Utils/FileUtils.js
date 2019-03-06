const TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
const PERSONALITY_PATH = TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath();
const PATH_SEPERATOR = java.io.File.separator;

function getPersonalityPath() {
    return PERSONALITY_PATH;
}

function getFile(path) {
    return new java.io.File(path);
}