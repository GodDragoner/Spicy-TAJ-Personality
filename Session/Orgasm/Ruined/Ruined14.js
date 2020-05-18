{
    if(tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_RUINED);
        run('Session/Orgasm/All/AllOrgasm5.js');
    }
}