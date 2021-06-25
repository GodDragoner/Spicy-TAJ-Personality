function myBallsVocabulary() {
    if(RULE_OWNED_BODY.isActive()) {
        return '%MyYour%';
    }

    return random('%MyYour%', 'those');
}