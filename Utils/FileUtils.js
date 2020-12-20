const TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
const ScriptHandler = Java.type('me.goddragon.teaseai.api.scripts.ScriptHandler');
const TAJFileUtils = Java.type('me.goddragon.teaseai.utils.FileUtils');
const PERSONALITY_PATH = TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath();
const PATH_SEPARATOR = java.io.File.separator;
const IMAGE_PATH = 'Images' + PATH_SEPARATOR + 'Spicy';
const SCRIPT_ENGINE = ScriptHandler.getHandler().getEngine();

function callFunction(name) {
    return SCRIPT_ENGINE.invokeFunction(name);
}

function getCurrentScriptName() {
    return getFileId(ScriptHandler.getHandler().getCurrentFile());
}

function getFileId(file) {
    return file.getName().substring(0, file.getName().length - 3);
}

function getRelativePersonalityFilePath(file) {
    let path = file.getPath();
    return path.substr(getPersonalityPath().length);
}

function getPersonalityPath() {
    return PERSONALITY_PATH;
}

function getFilesInFolder(folder) {
    return getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + folder).listFiles();
}

function getScriptFilesInFolder(folder) {
    let files = getFilesInFolder(folder);
    let scriptFiles = [];

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (isScriptFile(file)) {
            scriptFiles.push(file);
        }
    }

    return scriptFiles;
}

function fileListToIdList(files) {
    let fileIds = [];
    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        fileIds.push(getFileId(file));
    }

    return fileIds;
}

function isScriptFile(file) {
    return file.getName().endsWith('.js');
}

function getImageSubFolder(subPath) {
    return getFile(IMAGE_PATH + PATH_SEPARATOR + subPath);
}

function tryCreateFolder(folder) {
    if (!folder.exists()) {
        folder.mkdirs();
        return true;
    }

    return false;
}

function copyFolder(sourceFolder, destinationFolder, ignoreHidden) {
    TAJFileUtils.copyFolder(sourceFolder, destinationFolder, ignoreHidden);
}

function getFileOrCreate(path) {
    let file = getFile(path);
    tryCreateFolder(file);

    return file;
}

function getFile(path) {
    return new java.io.File(path);
}