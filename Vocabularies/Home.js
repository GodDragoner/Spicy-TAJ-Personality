function homeVocabulary() {
    switch(getVar(VARIABLE_HOME_TYPE)) {
        case HOME_HOUSE_TYPE:
            return 'house';
        case HOME_APARTMENT_TYPE:
            return 'apartment';
    }
}
