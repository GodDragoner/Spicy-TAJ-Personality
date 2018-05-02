const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;

const LIMITS = ["analLimit", "ceiLimit", "painLimit", "assToMouthLimit", "peeLimit", "cbtLimit", "sissyLimit"];

function getAnalLimit() {
    return getVar(LIMITS[0]);
}

function getCEILimit() {
    return getVar(LIMITS[1]);
}

function getPainLimit() {
    return getVar(LIMITS[2]);
}

function getASMLimit() {
    return getVar(LIMITS[3]);
}

function getPeeLimit() {
    return getVar(LIMITS[4]);
}

function getCBTLimit() {
    return getVar(LIMITS[5]);
}

function getSissyLimit() {
    return getVar(LIMITS[6]);
}