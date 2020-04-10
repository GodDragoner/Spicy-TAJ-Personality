function slaveNameVocabulary() {
    const answers = ["slave",
        "pet",
        "toy",
    ];

    let adjectives = [''];

    if (SISSY_LIMIT.isAllowed()) {
        adjectives.push('cock hungry', 'cock craving', 'cocksucker');
        answers.push("girl");
    } else {
        answers.push('boy');
    }

    if(CEI_LIMIT.isAllowed()) {
        answers.push('cum consumer', 'cum craving', 'cum dripping', 'cum eating', 'cum craving', 'cum sucking', 'cum loving')
    }

    if (VERBAL_HUMILIATION_LIMIT.isAllowed() || getMood() > NEUTRAL_MOOD) {
        adjectives.push('disgusting', 'tiny dick', 'worthless', 'naughty', 'stupid', 'filthy', 'nasty', 'pathetic', 'small dick');
        answers.push("slut", 'bitch', 'loser', 'idiot', 'piece of shit');
    }

    if(CUCKOLD_LIMIT.isAllowed()) {
        answers.push("cuckie", 'cuckold');
    }

    if (getVar(VARIABLE.CHASTITY_ON, false)) {
        adjectives.push('locked', 'caged');
    }

    if (getVar(VARIABLE.LINGERIE_ON, false)) {
        adjectives.push("dressed up", "dressed up");
    }

    return random(adjectives) + ' ' + random(answers);
}