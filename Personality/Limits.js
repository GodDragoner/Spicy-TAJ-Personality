const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;


const ANAL_LIMIT = {name: 'anal', variable: 'analLimit'};
const CEI_LIMIT = {name: 'CEI', variable: 'ceiLimit'};
const PAIN_LIMIT = {name: 'pain', variable: 'painLimit'};
const ASM_LIMIT = {name: 'ass to mouth', variable:' assToMouthLimit'};
const PEE_LIMIT = {name: 'pee', variable: 'peeLimit'};
const CBT_LIMIT = {name: 'cock ball torture', variable: 'cbtLimit'};
const SISSY_LIMIT = {name: 'sissyfication', variable: 'sissyLimit'};
const CUCKOLD_LIMIT = {name: 'cuckold', variable: 'cuckoldLimit'};
const VERBAL_HUMILIATION_LIMIT = {name: 'verbal humiliation', variable: 'verbalHumiliation'};
const HUMILIATION_LIMIT = {name: 'humiliation', variable: 'humiliation'};

const LIMITS = ["analLimit", "ceiLimit", "painLimit", "assToMouthLimit", "peeLimit", "cbtLimit", "sissyLimit", "cuckoldLimit", "verbalHumiliation", "humiliation"];

function getLimit(limit) {
    return getVar(limit.variable);
}

function getAnalLimit() {
    return getLimit(ANAL_LIMIT);
}

function getCEILimit() {
    return getLimit(CEI_LIMIT);
}

function getPainLimit() {
    return getLimit(PAIN_LIMIT);
}

function getASMLimit() {
    return getLimit(ASM_LIMIT);
}

function getPeeLimit() {
    return getLimit(PEE_LIMIT);
}

function getCBTLimit() {
    return getLimit(CBT_LIMIT);
}

function getSissyLimit() {
    return getLimit(SISSY_LIMIT);
}

function getCuckoldLimit() {
    return getLimit(CUCKOLD_LIMIT);
}

function getVerbalHumilationLimit() {
    return getLimit(VERBAL_HUMILIATION_LIMIT);
}

function getHumiliationLimit() {
    return getLimit(HUMILIATION_LIMIT);
}

function setupLimits() {

}