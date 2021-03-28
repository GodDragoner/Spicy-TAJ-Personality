function myBallsVocabulary() {
    if(RULE_OWNED_BODY.isActive()) {
        return 'my';
    }

    return random('my', 'those', 'your');
}