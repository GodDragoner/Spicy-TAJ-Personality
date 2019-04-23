const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;

const LIMITS = [];

const ANAL_LIMIT = createLimit('anal', 'analLimit');
const CEI_LIMIT = createLimit('CEI', 'ceiLimit');
const PAIN_LIMIT = createLimit('pain', 'painLimit');
const ASM_LIMIT = createLimit('ass to mouth', ' assToMouthLimit');
const PEE_LIMIT = createLimit('pee', 'peeLimit');
const CBT_LIMIT = createLimit('cock ball torture', 'cbtLimit');
const SISSY_LIMIT = createLimit('sissyfication', 'sissyLimit');
const CUCKOLD_LIMIT = createLimit('cuckold', 'cuckoldLimit');
const VERBAL_HUMILIATION_LIMIT = createLimit('verbal humiliation', 'verbalHumiliation');
const HUMILIATION_LIMIT = createLimit('humiliation', 'humiliation');

//const LIMITS = ["analLimit", "ceiLimit", "painLimit", "assToMouthLimit", "peeLimit", "cbtLimit", "sissyLimit", "cuckoldLimit", "verbalHumiliation", "humiliation"];

function createLimit(name, variable) {
    let limit = {name: name, variable: variable,

        setLimit: function (limit) {
            setVar(this.variable, limit);
        },

        getLimit: function () {
            return getVar(this.variable, LIMIT_NEVER_ASKED);
        },

        isHardLimit: function () {
            return getLimit() == LIMIT_NEVER;
        },
    };

    LIMITS.push(limit);

    return limit;
}

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
    sendVirtualAssistantMessage('%SlaveName%');
    sendVirtualAssistantMessage('I am gonna ask you about your hard limits now');
    sendVirtualAssistantMessage('You will tell me whether it is a hard limit of yours or not');
    sendVirtualAssistantMessage('Hard limit means that %DomHonorific% %DomName% will never even try something including this limit');
    sendVirtualAssistantMessage('Thus your hard limits should only contain stuff that you never want to try');

    sendVirtualAssistantMessage('If you aren\'t sure about what exactly the limit is about just google it or don\'t add it to your hard limit list for now');
    sendVirtualAssistantMessage('You can still change this later');

    sendVirtualAssistantMessage('Here we go %EmoteHappy%');

    for(let x = 0; x < LIMITS.length; x++) {
        sendVirtualAssistantMessage();

        setCurrentSender(SENDER_ASSISTANT);

        if(sendYesOrNoQuestion('Is ' + LIMITS[x].name + ' a hard limit of yours?')) {
            sendVirtualAssistantMessage('Okay then... %EmoteSad%');
            LIMITS[x].setLimit(LIMIT_NEVER);
        } else {
            sendVirtualAssistantMessage('%Good%');
            LIMITS[x].setLimit(LIMIT_NEVER_ASKED);
        }

        setCurrentSender(SENDER_TAJ);
    }

    //To refresh limits
    setUpPersonalityVars();
}