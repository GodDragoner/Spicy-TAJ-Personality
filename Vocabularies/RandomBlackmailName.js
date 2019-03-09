function randomBlackmailNameVocabulary() {
    const answers = [getVar('blackmailName1'), getVar('blackmailName2'), getVar('blackmailName3')];

    return answers[randomInteger(0, answers.length - 1)];
}
