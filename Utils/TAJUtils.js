function incrementVar(varName, object, defaultValue = 0) {
    setVar(varName, getVar(varName, defaultValue) + object);
}
