const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;
const LIMIT_ASKED_NO = 4;

const LIMITS = [];

const ANAL_LIMIT = createLimit('anal', 'analLimit');
const CEI_LIMIT = createLimit('CEI', 'ceiLimit');
const PAIN_LIMIT = createLimit('pain', 'painLimit');
const ASM_LIMIT = createLimit('ass to mouth', ' assToMouthLimit');
ASM_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = ASM_LIMIT;
    let limitValue = limit.getLimit();


    let ask = false;

    if (limitValue == LIMIT_ASKED_YES) {

    } else if (limitValue == LIMIT_NEVER_ASKED) {
        if (subAddressed) {
            sendMessage('This is getting interesting...');
        }

        ask = true;
    } else if (limitValue == LIMIT_ASKED_MAYBE) {
        //TODO: Add some teasing stuff individually / desing modules that want to get the sub to cross his limits
        //This needs to be handled individually to seduce in the current situation
    } else {
        if(subAddressed) {
            sendMessage('I thought you aren\'t into ass to mouth?');
            ask = sendYesOrNoQuestion('Did you change your mind about that?');
        }
    }

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to force you to interact with toys that just came from your ass using your mouth');
        sendMessage('I think this is a great way to humiliate and punish you');
        sendMessage('And...');
        sendMessage('It would please me very much if you would submit to me even further');
        sendMessage('You want to please me, don\'t you? %Grin%');
        sendMessage('Mind this has nothing to do with you eating your shit or anything similar');
        sendMessage('That might be a topic for a different time %Grin%');
        sendMessage('For now I am just asking you to take toys that were up your ass into your mouth');
        sendMessage('I would even be happy if you told me "maybe" %Grin%');
        sendMessage('That way I know I can try to get you into it');

        let answer = sendInput('So what do you say?', 'Yes', 'No', 'Maybe');

        while (true) {
            if (answer.isLike('yes')) {
                answer.clearOptions();
                sendMessage('Great! %EmoteHappy%');
                changeMeritHigh(true);
                limit.setLimit(LIMIT_ASKED_YES);
                break;
            } else if (answer.isLike('no')) {
                answer.clearOptions();
                sendMessage('%EmoteSad%');
                changeMeritLow(true);
                limit.setLimit(LIMIT_ASKED_NO);
                break;
            } else if (answer.isLike('maybe')) {
                answer.clearOptions();
                sendMessage('That\'s a start at least %Grin%');
                changeMeritLow(false);
                limit.setLimit(LIMIT_ASKED_MAYBE);
                break;
            } else {
                sendMessage('Yes, no or maybe %SlaveName%?');
                answer.loop();
            }
        }
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};
const PEE_LIMIT = createLimit('pee', 'peeLimit');
const CBT_LIMIT = createLimit('cock ball torture', 'cbtLimit');
const SISSY_LIMIT = createLimit('sissyfication', 'sissyLimit');
const CUCKOLD_LIMIT = createLimit('cuckold', 'cuckoldLimit');
const VERBAL_HUMILIATION_LIMIT = createLimit('verbal humiliation', 'verbalHumiliation');
const HUMILIATION_LIMIT = createLimit('humiliation', 'humiliation');
HUMILIATION_LIMIT.askForLimitChange = function () {
    let limit = HUMILIATION_LIMIT;
    let limitValue = limit.getLimit();

    let ask = false;

    if (limitValue == LIMIT_ASKED_YES) {

    } else if (limitValue == LIMIT_NEVER_ASKED) {
        sendMessage('This is getting interesting...');
        ask = true;
    } else if (limitValue == LIMIT_ASKED_MAYBE) {
        //TODO: Add some teasing stuff individually / desing modules that want to get the sub to cross his limits
        //This needs to be handled individually to seduce in the current situation
    } else {
        sendMessage('I thought you aren\'t into ass to mouth?');
        ask = sendYesOrNoQuestion('Did you change your mind about that?');
    }

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to humiliate you in different ways');
        sendMessage('Make you do humiliating things privately');
        sendMessage('For example make you write stuff onto your body');
        sendMessage('And it would please me very much if you would allow me to do this');
        sendMessage('You want to please me, don\'t you? %Grin%');
        sendMessage('Mind this has nothing to do with public humiliation');
        sendMessage('That might be a topic for a different time %Grin%');
        sendMessage('For now I am just asking you to allow me to humiliate you privately');
        sendMessage('I would even be happy if you told me "maybe" %Grin%');
        sendMessage('That way I know I can try to get you into it');

        let answer = sendInput('So what do you say?', 'Yes', 'No', 'Maybe');

        while (true) {
            if (answer.isLike('yes')) {
                answer.clearOptions();
                sendMessage('Great! %EmoteHappy%');
                changeMeritHigh(true);
                limitValue.setLimit(LIMIT_ASKED_YES);
                break;
            } else if (answer.isLike('no')) {
                answer.clearOptions();
                sendMessage('%EmoteSad%');
                changeMeritLow(true);
                limitValue.setLimit(LIMIT_ASKED_NO);
                break;
            } else if (answer.isLike('maybe')) {
                answer.clearOptions();
                sendMessage('That\'s a start at least %Grin%');
                changeMeritLow(false);
                limitValue.setLimit(LIMIT_ASKED_MAYBE);
                break;
            } else {
                sendMessage('Yes, no or maybe %SlaveName%?');
                answer.loop();
            }
        }
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

//const LIMITS = ["analLimit", "ceiLimit", "painLimit", "assToMouthLimit", "peeLimit", "cbtLimit", "sissyLimit", "cuckoldLimit", "verbalHumiliation", "humiliation"];

function createLimit(name, variable) {
    let limit = {
        name: name, variable: variable,

        setLimit: function (limit) {
            setVar(this.variable, limit);
        },

        getLimit: function () {
            return getVar(this.variable, LIMIT_NEVER_ASKED);
        },

        isHardLimit: function () {
            return getLimit() == LIMIT_NEVER;
        },

        askForLimitChange: function (subAddressed) {
            sendDebugMessage('Unimplemented askForLimit change call for limit "' + name + '"')
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

    for (let x = 0; x < LIMITS.length; x++) {
        sendVirtualAssistantMessage();

        setCurrentSender(SENDER_ASSISTANT);

        if (sendYesOrNoQuestion('Is ' + LIMITS[x].name + ' a hard limit of yours?')) {
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