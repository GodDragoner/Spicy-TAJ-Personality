//TODO: Duplicate with Grin REMOVE

function GNMGrinVocabulary() {
    const answers = ["*grin*", "*grin*", "*grin*", "*grin*", "*grin*", "*grins*", "*", "*grins*", "*smile*", "*smile*", "*smiles*", "*smiles*", "*", "*wicked grin*", "*wicked grin*", "*wicked grin*", "*", "*wicked grin*", "*smiles innocently*", "*smiles innocently*", "*grins at you*", "*grins at you*", "*grins at you*", "*looks at you and grins*", "*looks at you and grins*", "*looks at you innocently*", "*looks at you innocently*", "*", "*mischievous grin*", "*mischievous grin*", "*innocent grin*", "*naughty grin*", "*naughty grin*", "*coy smile*"];
    return answers[randomInteger(0, answers.length - 1)];
}