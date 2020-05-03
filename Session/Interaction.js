function checkInteraction() {
    if (getVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER, false)) {
        startLongTermChastityIntro();
        //Remove var after interaction
        delVar(VARIABLE.RESPONSE_WANTS_KEYHOLDER);
    }
}