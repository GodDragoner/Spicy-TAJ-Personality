const ORGASM_FREQUENCY_VERY_RARE = 0;
const ORGASM_FREQUENCY_RARE = 1;
const ORGASM_FREQUENCY_SEMI_RARE = 2;
const ORGASM_FREQUENCY_SOMEWHAT_RARE = 3;
const ORGASM_FREQUENCY_DOM = 4;

function registerOrgasm() {
    setDate(VARIABLE_LAST_ORGASM);
    setVar(VARIABLE_ORGASM_COUNTER, getVar(VARIABLE_ORGASM_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerRuin() {
    setDate(VARIABLE_LAST_RUINED_ORGASM);
    setVar(VARIABLE_RUIN_COUNTER, getVar(VARIABLE_RUIN_COUNTER, 0) + 1);
    registerEjaculation();
}

function registerEjaculation() {
    setVar(VARIABLE_ORGASM_POINTS, 0);
    setVar(VARIABLE_REQUIRED_ORGASM_POINTS, getRequiredOrgasmPoints());
}

function getRequiredOrgasmPoints() {
    const denialLevel = getVar(VARIABLE_DENIAL_LEVEL);
    const minPoints = 26.87*java.lang.Math.E^(0,2598*denialLevel);
    const maxPoints = 68.559*java.lang.Math.E^(0,2401*denialLevel);
    return randomInteger(minPoints, maxPoints);
}
