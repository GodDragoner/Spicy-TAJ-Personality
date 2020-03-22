function domHonorificVocabulary() {
    //TODO: Choose title at the beginning (random/selection)?
    const answers = ["Mistress", "Princess", "Goddess", "Maitrese" ,"Miss"];

    //return answers[randomInteger(0, answers.length - 1)];
    return getVar(VARIABLE.DOMME_HONORIFIC, "Mistress");
}