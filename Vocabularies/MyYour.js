function myYourVocabulary() {
    //If not Domme and friends instead
    if (getCurrentTAJSenderID() !== 1 || getCurrentSender() === SENDER_ASSISTANT) {
        if (RULE_OWNED_BODY.isActive() && isChance(5)) {
            return random('%DomName%\'s');
        }

        return 'your';
    }

    if(RULE_OWNED_BODY.isActive()) {
        return 'my';
    }

    return random('my', 'your');
}