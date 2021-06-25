function myCockVocabulary() {
    if(RULE_OWNED_BODY.isActive()) {
        return '%MyYour%';
    }

    return random('%MyYour%', 'that');
}