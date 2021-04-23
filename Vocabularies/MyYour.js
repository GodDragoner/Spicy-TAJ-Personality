function myYourVocabulary() {
    if(RULE_OWNED_BODY.isActive()) {
        return 'my';
    }

    return random('my', 'your');
}