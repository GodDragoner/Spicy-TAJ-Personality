let BLOCK_AUDIO = false;

function isAudioBlocked() {
        return BLOCK_AUDIO;
}

function setAudioBlocked(bool) {
        BLOCK_AUDIO = bool;
}

function playBellSound() {
        playSound("Audio/Spicy/SpecialSounds/Bell.mp3");
}