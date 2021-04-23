function myCockVocabulary() {
    if(RULE_OWNED_BODY.isActive()) {
        return 'my';
    }

    return random('my', 'that', 'your');
}