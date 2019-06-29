//TODO: Duplicate with Cock REMOVE
function GNMCockVocabulary() {
    const answers = [" dick ", "dick ", "cock ", " desperate cock ", "desperate cock ", " helpless cock ", "aching cock  ", " achey cock ", "achey dick  ", " frustrated dick ", " frustrated cock  ", " denied dick ", "poor aching dick ", " poor aching cock ", " poor leaky cock ", " horny cock ", "  denied little dick  ", " little aching dick ", "  little aching cock  ", " cute little cock ", "   cute little dick  ", " poor little dick ", "   poor little cock ", " leaky little cock ", "   horny little cock  ", " horny little dick ", " desperate little dick ", "   big aching cock ", "   big cock ", "   impressive cock ", "  huge impressive cock ", "   fuckstick ", "  little fuckstick ", "   %Hot% fuckstick ", "  %Hot% little fuckstick ", "     weiner ", "     aching weiner  ", "     achey weiner ", "     little weiner  ", "     little weiner ", "     achey little weiner ", "     little weinee ", "    aching little weinee ", "   leaking cock ", "   prick ", "   pecker ", "  drippy dick  ", "   drippy little dick ", " lowly cock ", "  subservient cock ", " wrinkled cock ", "  wrinkly cock ", "virile cock  ", "   helpless dick "];

    //fixme need to define blocksounds
    if (getVar("BlockSounds") == true) {
    }
    else {
        playAudio("Audio/Spicy/Humiliation/SmallDick/*.mp3");
    }

    return answers[randomInteger(0, answers.length - 1)];
}