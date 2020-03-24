const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;
const LIMIT_ASKED_NO = 4;

const LIMITS = [];

const LIMIT_CHANGE_SUB_ADRESSED = 0;
const LIMIT_CHANGE_SUB_CHANGED_MIND = 1;
const LIMIT_CHANGE_ALREADY_YES = 2;
const LIMIT_CHANGE_WILL_DO_ANYTHING = 3;
const LIMIT_CHANGE_SUB_ADRESSED_NO = 4;
const LIMIT_CHANGE_NO = 5;

let pathLength = getPersonalityPath().length;
let files = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Personality' + PATH_SEPARATOR + 'Limit').listFiles();

for (let index = 0; index < files.length; index++) {
    let path = files[index].getPath();
    run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
}

//TODO: Proper limit introductions, make enforcing not set everything default but ask too but be more strict if told no

const ANAL_LIMIT = createLimit('anal', 'analLimit');
ANAL_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to also use your %Ass% for my amusement');
        sendMessage('I want to own it and abuse it to my liking');
        sendMessage('I could use it as a punishment but also as training for your future life as a sex slave of mine %Grin%');
        sendMessage('It would please me very much if we could try this and if you even enjoy it yourself');
        sendMessage('And you want to please me, don\'t you? %Grin%');
        askForNewLimitValue(limit);

        if(this.isAllowed()) {
            sendMessage('Now that we have that sorted out there is still something I need to know');
            sendMessage("I don't know whether you have any experience when it comes to ass play");
            sendMessage("Meaning fucking yourself or wearing butt plugs");
            showImage("Images/Spicy/Toys/ButtPlugs.jpg", 3);
            sendMessage("Are you experienced and capable of wearing butt plugs on a daily basis...");
            sendMessage("And fucking yourself with a huge dildo?");
            showImage("Images/Spicy/Toys/Dildo.jpg", 3);

            if(!CUCKOLD_LIMIT.isHardLimit()) {
                sendMessage("Maybe even taking a huge cock from a lover of mine?");
            }

            sendMessage("You should answer this truthfully for your own good %SlaveName%", false);

            let answer = createInput();

            while (true) {
                if (answer.isLike("yes")) {
                    setVar(VARIABLE.ASS_LEVEL, 30);
                    sendMessage("I hope you are ready for what I have planned for you then...");
                    break;
                } else if (answer.isLike("no")) {
                    setVar(VARIABLE.ASS_LEVEL, 1);
                    setVar(VARIABLE.ASS_TRAINING, true);
                    sendMessage("I guess that means we will work on this from now on %Grin%");
                    break;
                } else {
                    sendMessage(YES_OR_NO);
                    answer.loop();
                }
            }
        }
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const CEI_LIMIT = createLimit('CEI', 'ceiLimit');
CEI_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I really want to humiliate you and make you my bitch');
        sendMessage('So I would really enjoy making you play with your own pee %Grin%');
        sendMessage('Licking it, slurping it and peeing yourself and who knows what else I am gonna come up with %Grin%');
        sendMessage('I would be very pleased if you were to tell me that we can try this %EmoteHappy%');
        sendMessage('And you want to be a good little slave for me, don\'t you? %Grin%');
        askForNewLimitValue(limit);
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const PAIN_LIMIT = createLimit('pain', 'painLimit');
PAIN_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I think pain should be part of any BDSM relationship');
        sendMessage('At least as a mean of punishment for bad little slaves %Grin%');
        sendMessage('Hurting your nipples, spanking your ass and making you whimper would really bring this whole thing to a new level %Grin%');
        sendMessage('Making you my and only my pain slut ready for abuse if I feel like it or you have been misbehaving');
        sendMessage('I would be very happy if you were to tell me that we can try this %EmoteHappy%');
        sendMessage('And you want to please your %DomHonorific%, don\'t you? %Grin%');
        askForNewLimitValue(limit);
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const PEE_LIMIT = createLimit('pee', 'peeLimit');
PEE_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I really want to humiliate you and make you my bitch');
        sendMessage('So I would really enjoy making you play with your own pee %Grin%');
        sendMessage('Licking it, slurping it and peeing yourself and who knows what else I am gonna come up with %Grin%');
        sendMessage('I would be very pleased if you were to tell me that we can try this %EmoteHappy%');
        sendMessage('And you want to be a good little slave for me, don\'t you? %Grin%');
        askForNewLimitValue(limit);
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const CBT_LIMIT = createLimit('cock ball torture', 'cbtLimit');
CBT_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to hurt your balls and cock in different ways');
        sendMessage('Spank them, pinch them, make them suffer %Grin%');
        sendMessage('It would please me very much if we could try this and if you even enjoyed it yourself');
        sendMessage('And you want to please me, don\'t you? %Grin%');
        askForNewLimitValue(limit);
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const SISSY_LIMIT = createLimit('sissyfication', 'sissyLimit');
const CUCKOLD_LIMIT = createLimit('cuckold', 'cuckoldLimit');

const FEET_LIMIT = createLimit('feet', 'feetLimit');

const VERBAL_HUMILIATION_LIMIT = createLimit('verbal humiliation', 'verbalHumiliation');
VERBAL_HUMILIATION_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to humiliate you verbally');
        sendMessage('Insulting you, telling you how disgusting you are, talking about your small dick, degrading you verbally in general %Grin%');
        sendMessage('It would please me very much if we could try this and if you even enjoyed it yourself');
        sendMessage('You want to please me, don\'t you? %Grin%');
        askForNewLimitValue(limit);
    } else {
        sendMessage('%EmoteSad%');
        changeMeritLow(true);
    }
};

const HUMILIATION_LIMIT = createLimit('humiliation', 'humiliation');
HUMILIATION_LIMIT.askForLimitChange = function (subAddressed) {
    let limit = this;
    let ask = this.handleCurrentLimitChange(subAddressed);

    if (ask) {
        sendMessage('%SlaveName%');
        sendMessage('I would very much love to humiliate you in different ways');
        sendMessage('Make you do humiliating things privately');
        sendMessage('For example make you write stuff onto your body');
        sendMessage('It would please me very much if we could try this and if you even enjoyed it yourself');
        sendMessage('And you want to please me, don\'t you? %Grin%');
        sendMessage('Mind this has nothing to do with public humiliation');
        sendMessage('That might be a topic for a different time %Grin%');
        sendMessage('For now I am just asking you to allow me to humiliate you privately');
        askForNewLimitValue(limit);
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
            return this.getLimit() == LIMIT_NEVER;
        },

        isAllowed: function () {
            return this.getLimit() == LIMIT_ASKED_YES;
        },

        askForLimitChange: function (subAddressed) {
            sendDebugMessage('Unimplemented askForLimit change call for limit "' + name + '"')
        },

        handleCurrentLimitChange: function (subAddressed) {
            let ask = false;
            let limitValue = this.getLimit();



            if (limitValue == LIMIT_ASKED_YES) {
                return LIMIT_CHANGE_ALREADY_YES;
            } else if (limitValue == LIMIT_NEVER_ASKED && subAddressed) {
                sendMessage('This is getting interesting...');
                return LIMIT_CHANGE_SUB_ADRESSED;
            } else if (limitValue === LIMIT_ASKED_MAYBE || limitValue === LIMIT_ASKED_MAYBE) {
                //TODO: Add some teasing stuff individually / design modules that want to get the sub to cross his limits

                //This needs to be handled individually to seduce in the current situation
                if(isVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING)) {
                    delVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING);
                    return LIMIT_CHANGE_WILL_DO_ANYTHING;
                }
            } else if(subAddressed && limitValue == LIMIT_ASKED_NO) {
                sendMessage('I thought you aren\'t into ' + this.name + '?');

                if(sendYesOrNoQuestion('Did you change your mind about that?')) {
                    return LIMIT_CHANGE_SUB_CHANGED_MIND;
                } else {
                    sendMessage('Well then don\'t bother me with stuff like this...');
                    return LIMIT_CHANGE_SUB_ADRESSED_NO;
                }
            }

            return LIMIT_CHANGE_NO;
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

function talkAboutRandomLimit(ignoreAskedNo = false) {
    let limit = null;
    for (let x = 0; x < LIMITS.length; x++) {
        if(LIMITS[x].getLimit() === LIMIT_NEVER_ASKED) {
            limit = LIMITS[x];
            break;
        }
    }

    //If limit is still null we talked about all limits
    if(limit === null) {
        shuffle(LIMITS);

        for (let x = 0; x < LIMITS.length; x++) {
            if(LIMITS[x].getLimit() === LIMIT_ASKED_MAYBE) {
                limit = LIMITS[x];
                break;
            }
        }
    }

    //If limit is still null we need to consider limits that the sub said no to earlier
    if(limit === null && !ignoreAskedNo) {
        shuffle(LIMITS);

        for (let x = 0; x < LIMITS.length; x++) {
            if(LIMITS[x].getLimit() === LIMIT_ASKED_NO) {
                limit = LIMITS[x];
                break;
            }
        }
    }

    if(limit === null) {
        return null;
    }

    //let limitValue = limit.getLimit();

    limit.askForLimitChange(false);

    //New limit value
    return limit.getLimit();
}

function askForNewLimitValue(limit) {
    if(isEnforcingPersonality()) {
        sendMessage(random('You know I don\'t like being told no', 'As you should know I don\'t like being turned down', 'You know I do not take a "no" lightly', 'You know that I really don\'t like hearing "no"'));
        sendMessage(random('And since you wan\'t to please me and definitely do NOT want to displease me %Grin%', 'Thus I guess there is only one right answer to this', 'Which means there is practically only one way for you to answer this'));
    } else {
        sendMessage(random('I would even be happy if you told me "maybe"', 'A maybe would also make me happy', '"Maybe" would also make me happy for now') + '  %Grin%');
        sendMessage(random('That way I know I can try to get you into it', 'At least that would allow me to try to get you into it', 'It would allow me to try to get you into it') + ' %EmoteHappy%');
    }

    let answer = sendInput(random('So would you be up for it?', 'So would you be fine with trying it?', 'Would it be fine for you to try it out?', 'Would you allow me to add this to our relationship?'), 'Yes', 'No', 'Maybe');

    while (true) {
        if (answer.isLike('yes')) {
            answer.clearOptions();
            sendMessage('%Good%! %EmoteHappy%');

            if(isEnforcingPersonality()) {
                sendMessage(random('I knew you\'d pick the only right thing', 'The only thing I really wanted to hear', 'I expected nothing less', 'Exactly what I wanted to hear') + ' %Grin%');
            }

            changeMeritHigh(true);
            limit.setLimit(LIMIT_ASKED_YES);
            break;
        } else if (answer.isLike('no')) {
            answer.clearOptions();

            if(isEnforcingPersonality()) {
                sendMessage(random('Well do not expect me to be happy with this answer %SlaveName%', 'Do not expect me to go easy on you %SlaveName%', 'Do not expect me to accept this lightly', 'Do not think you can do this without consequences %SlaveName%'));
                changeMeritLow(true);
            }

            sendMessage('%EmoteSad%');
            changeMeritLow(true);
            limit.setLimit(LIMIT_ASKED_NO);
            break;
        } else if (answer.isLike('maybe')) {
            answer.clearOptions();
            sendMessage(random('That\'s a start at least', 'That\'s something I guess', 'That counts for something', 'A good start', 'I can work with that') + ' %EmoteHappy%');

            if(isEnforcingPersonality()) {
                sendMessage(random('As you should know I will definitely find my way to make you WANT it', 'I will find my way to make you crave it', 'I will guide you there', 'I will get you there') + ' %Grin%');
                sendMessage(random('No matter if I have to be kind or cruel to achieve this', 'And I won\'t shy away from being cruel either', 'No matter if it takes kindness or cruelty to get you there') + ' %Lol%');
            }

            changeMeritLow(false);
            limit.setLimit(LIMIT_ASKED_MAYBE);
            break;
        } else {
            sendMessage('Yes, no or maybe %SlaveName%?');
            answer.loop();
        }
    }
}

function setupLimits() {
    sendVirtualAssistantMessage('%SubName%');
    sendVirtualAssistantMessage('I am gonna ask you about your hard limits now');
    sendVirtualAssistantMessage('You will tell me whether it is a hard limit of yours or not');
    sendVirtualAssistantMessage('Hard limit means that your Domme will never even try something including this limit');
    sendVirtualAssistantMessage('Thus your hard limits should only contain stuff that you never want to try');

    sendVirtualAssistantMessage('If you aren\'t sure about what exactly the limit is about just google it or don\'t add it to your hard limit list for now');
    sendVirtualAssistantMessage('You can still change this later');

    sendVirtualAssistantMessage('Here we go %EmoteHappy%');

    for (let x = 0; x < LIMITS.length; x++) {
        setCurrentSender(SENDER_ASSISTANT);

        if (sendYesOrNoQuestion('Is ' + LIMITS[x].name + ' a hard limit of yours?')) {
            sendVirtualAssistantMessage('Okay then... %EmoteSad%');
            LIMITS[x].setLimit(LIMIT_NEVER);
        } else {
            sendVirtualAssistantMessage('%Good%');

            //We don't want to reset it if we have already a different value in here
            if(LIMITS[x].getLimit() === LIMIT_NEVER_ASKED) {
                LIMITS[x].setLimit(LIMIT_NEVER_ASKED);
            }
        }

        setCurrentSender(SENDER_TAJ);
    }

    //To refresh limits
    setUpPersonalityVars();
}