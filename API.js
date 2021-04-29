//This is never loaded however we want it so the ide recognizes the methods
function sendMessage(message) {}

function setVar(varName, object) {}

function setTempVar(varName, object) {}
function getVar(varName) {}
function delVar(varName) {}
function setDate(message) {
    return {

        setSecond: function(minute) {},
        setMinute: function(minute) {},
        setHour: function(minute) {},
        setDay: function(minute) {},

        addSecond: function(minute) {},
        addMinute: function(minute) {},
        addHour: function(minute) {},
        addDay: function(minute) {},

        hasPassed: function () {},

        before: function () {},
        sameDay: function () {},
        getDayOfWeek: function() {},
        after: function () {
            return false;
        },

        getTimeInMillis: function() {},
    }
}

function isEdging() {}

function addResponseRegex(regex) {}
function setResponseIgnoreDisabled(boolean) {}
function getDate(varName) {}
function isVar(varName) {}

function run(filePath) {}

function createInput() {
    return {
        matchesRegex: function(regexes) {},
        matchesRegexLowerCase: function(regexes) {},
        isLike: function(regexes) {},

        addOption: function(option) {},
        clearOptions: function() {},

        isTimeout: function () {},

        loop: function () {},
        isInteger: function () {},
        getInteger: function () {},

        isInt: function () {},
        getInt: function () {},

        isDouble: function () {},
        getDouble: function () {},

        getAnswer: function() {},
    }
}

function isStroking() {}


function sendInput(message) {}

function showCategoryImage() {}
function showCategoryVideo() {}

function showTeaseImage() {}

function sleep() {}


function playAudio() {}
function playSound() {}
function stopAudio() {}

function playVideo() {}
function stopVideo() {}

function showImage(path) {}

function isImagesLocked() {}
function unlockImages() {}
function lockImages() {}

function addStrokingBPM(bpm) {}

function getStrokingBPM() {}

function stopStroking() {}

function replaceVocab(string) {}

function startStroking(bpm) {}