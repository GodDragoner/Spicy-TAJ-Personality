{
    distributeOrgasmPoints();

    if(getVar(VARIABLE_ORGASM_POINTS) > getVar(VARIABLE_REQUIRED_ORGASM_POINTS)) {
        runOrgasmCategory(decideOrgasm());
    } else {
        runOrgasmCategory(ORGASM_CATEGORY_DENIED);
    }
}