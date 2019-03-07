const TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
const ScriptHandler = Java.type('me.goddragon.teaseai.api.scripts.ScriptHandler');
const PERSONALITY_PATH = TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath();
const PATH_SEPERATOR = java.io.File.separator;

function getCurrentScriptName() {
    const name = ScriptHandler.getHandler().getCurrentFile().getName();
    return name.substring(0, name.length - 3);
}

function getPersonalityPath() {
    return PERSONALITY_PATH;
}

function getFile(path) {
    return new java.io.File(path);
}