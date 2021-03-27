function slaveNameVocabulary() {
    const answers = ["slave",
        "pet",
        "toy",
        "stroker"
    ];

    let adjectives = [''];

    if (SISSY_LIMIT.isAllowed()) {
        adjectives.push('cock hungry', 'cock craving', 'cock sucking');
        answers.push("girl");
    } else {
        answers.push('boy');
    }

    if(CEI_LIMIT.isAllowed()) {
        if(isChance(50)) {
            answers.push('cum consumer', 'cum lover', 'cum guzzler');
        } else {
            adjectives.push('cum eating',  'cum sucking', 'cum craving');
        }
    }

    if (VERBAL_HUMILIATION_LIMIT.isAllowed() && (getMood() > NEUTRAL_MOOD || feelsLikePunishingSlave())) {
        adjectives.push('disgusting', 'tiny dick', 'worthless', 'naughty', 'stupid', 'filthy', 'nasty', 'pathetic', 'small dick');
        answers.push("slut", 'bitch', 'loser', 'idiot', 'piece of shit', 'whore');
    }

    if(CUCKOLD_LIMIT.isAllowed()) {
        answers.push("cuckie", 'cuckold');
    }

    if (getVar(VARIABLE.CHASTITY_ON, false)) {
        adjectives.push('locked', 'caged');
    }

    if (hasLingerieOn()) {
        adjectives.push("dressed up", "dressed up");
    }

    let adjective = isChance(33)? random(adjectives) : "";

    return (adjective + ' ' + random(answers)).trim();
}