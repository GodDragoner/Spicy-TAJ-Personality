{
    if (tryRunOrgasmFetchId()) {
        setTempVar(VARIABLE.ORGASM_CATEGORY_TODAY, ORGASM_CATEGORY_DENIED);
        run('Session/Orgasm/All/AllOrgasm2.js');
    }
}