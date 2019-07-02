function cockAndChastityVocabulary() {
    if(isInChastity()) {
        return replaceVocab('%Cock% alongside its %ChastityCage%');
    } else {
        return cockVocabulary();
    }
}