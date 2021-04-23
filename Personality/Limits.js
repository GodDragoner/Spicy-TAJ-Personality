const LIMIT_NEVER_ASKED = 0;
const LIMIT_ASKED_YES = 1;
const LIMIT_ASKED_MAYBE = 2;
const LIMIT_NEVER = 3;
const LIMIT_ASKED_NO = 4;

const LIMITS = [];

const LIMIT_CHANGE_SUB_ADDRESSED = 0;
const LIMIT_CHANGE_SUB_CHANGED_MIND = 1;
const LIMIT_CHANGE_ALREADY_YES = 2;
const LIMIT_CHANGE_WILL_DO_ANYTHING = 3;
const LIMIT_CHANGE_SUB_ADDRESSED_NO = 4;
const LIMIT_CHANGE_YES = 5;
const LIMIT_CHANGE_NEW = 6;
const LIMIT_CHANGE_NO = 7;
const LIMIT_CHANGE_DOMME_ADDRESSED = 9;

const LIMIT_ADDRESS = {
    NONE: 0,
    DOMME: 1,
    SUB: 2
};

let pathLength = getPersonalityPath().length;
let files = new java.io.File(getPersonalityPath() + PATH_SEPARATOR + 'Personality' + PATH_SEPARATOR + 'Limit').listFiles();

for (let index = 0; index < files.length; index++) {
    let path = files[index].getPath();
    run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
}

const ANAL_LIMIT = createLimit('anal', 'analLimit');
ANAL_LIMIT.sendIntroduction = function (type) {
    sendMessage('I would very much love to also use your %Ass% for my amusement');
    sendMessage('I want to own it and abuse it to my liking');
    sendMessage('I could use it as a punishment but also as training for your future life as a sex slave of mine %Grin%');
    sendMessage('It would please me very much if we could try this and if you even enjoy it yourself');
    sendMessage('And you want to please me, don\'t you? %Grin%');

    askForNewLimitValue(this);

    //Only need this if ass level hasn't been touched and no ass training is active
    if (this.isAllowed() && getVar(VARIABLE.ASS_LEVEL, 0) <= 1 && !getVar(VARIABLE.ASS_TRAINING, false)) {
        sendMessage('Now that we have that sorted out there is still something I need to know');
        sendMessage("I don't know whether you have any experience when it comes to ass play");
        sendMessage("Meaning fucking yourself or wearing butt plugs");
        showImage("Images/Spicy/Toys/buttPlugs.jpg", 3);
        sendMessage("Are you experienced and capable of wearing butt plugs on a daily basis...");
        sendMessage("And fucking yourself with a huge dildo?");
        showImage("Images/Spicy/Toys/dildo.jpg", 3);

        if (!CUCKOLD_LIMIT.isAllowed()) {
            sendMessage("Maybe even taking a huge cock from a lover of mine?");
        }

        sendMessage("You should answer this truthfully for your own good %SlaveName%", 0);

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
                sendMessage(YES_OR_NO, 0);
                answer.loop();
            }
        }
    }
};

ANAL_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Well doing anything for me means to also give me access to your ass');
    sendMessage('So I can make it mine and abuse it for whatever cruel or nasty things I have in mind %Grin%');
};


const CEI_LIMIT = createLimit('CEI', 'ceiLimit');
CEI_LIMIT.sendIntroduction = function (type) {
    sendMessage('I want to humiliate you and make you do disgusting things');
    sendMessage('And I believe one should clean up their mess %Grin%');
    sendMessage('So I would want you to eat your cum for me');
    sendMessage('Play with it, slurp it, gargle it and taste it');
    sendMessage('Turn you into my personal cum dumpster %Lol%');
    sendMessage("Of course, I might keep %MyYour% %Cock% denied");
    sendMessage("Then you'll have nothing to eat");
    sendMessage('I would be very pleased if you\'d do it for me %EmoteHappy%');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

CEI_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Well doing anything for me means to also make you eat your nasty cum');
    sendMessage('It should be natural for you to clean up your mess this way %Grin%');
};

const PAIN_LIMIT = createLimit('pain', 'painLimit');
PAIN_LIMIT.sendIntroduction = function (type) {
    sendMessage('I think pain should be part of any BDSM relationship');
    sendMessage('At least as a means of punishment for bad little slaves %Grin%');
    sendMessage('Hurting your nipples, spanking your ass and making you whimper would really bring this whole thing to a new level');
    sendMessage('Making you my one and only pain slut ready for abuse if I feel like it or you have been misbehaving');
    sendMessage('I would be very happy if you were to tell me that we can try this %EmoteHappy%');
    sendMessage('And you want to please your %DomHonorific%, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

PAIN_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Well doing anything for me also means to take some pain for me');
    sendMessage('Allowing me to spank you and hurt you at my will and whim %Grin%');
};

const PEE_LIMIT = createLimit('pee', 'peeLimit');
PEE_LIMIT.sendIntroduction = function (type) {
    sendMessage('I really want to humiliate you and make you my bitch');
    sendMessage('So I would really enjoy making you play with your own pee %Grin%');
    sendMessage('Licking it, slurping it and peeing yourself and who knows what else I am gonna come up with');
    sendMessage('I would be very pleased if you were to tell me that we can try this %EmoteHappy%');
    sendMessage('And you want to be a good little slave for me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

PEE_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Well doing anything for me also means to allow me to humiliate you by playing with your own pee');
    sendMessage('Allowing me to make you my personal toilet and trash can %Grin%');
};


const CBT_LIMIT = createLimit('cock ball torture', 'cbtLimit');
CBT_LIMIT.sendIntroduction = function (type) {
    sendMessage('I would very much love to hurt your balls and cock in different ways');
    sendMessage('Spank them, pinch them and make them suffer %Grin%');
    sendMessage('It would please me very much if you\'d allow me to do that');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

CBT_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Well doing anything for me also means to allow me to hurt %MyYour% %Balls% and %Cock%');
    sendMessage('Allow me to spank them, pinch them and make them suffer %Grin%');
};

const SISSY_LIMIT = createLimit('sissyfication', 'sissyLimit');
SISSY_LIMIT.sendIntroduction = function (type) {
    sendMessage('I want to train you to become a good little sissy for me %Grin%');
    sendMessage('Locking that little clit of yours up, training your cock sucking and anal skills...');
    sendMessage('And also making you cum from anal only');
    sendMessage('Not to forget about your makeup, clothing and other accessories %Lol%');
    sendMessage('Who knows, maybe you\'ll end up with me only granting you anal orgasms and vibrator orgasms from some point on %Grin%');
    sendMessage('It would please me very much if you\'d give me the possibility to do it');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

SISSY_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Doing anything for me includes allowing me to feminize you against your will and make you my little sissy bitch');
    sendMessage('Locking that little clit of yours up, training your cock sucking and anal skills...');
    sendMessage('And also making you cum from anal only');
};

const CUCKOLD_LIMIT = createLimit('cuckold', 'cuckoldLimit');
CUCKOLD_LIMIT.sendIntroduction = function (type) {
    sendMessage('I want to humiliate you in all ways possible');
    sendMessage('And cuckolding is one of them %Grin%');
    sendMessage('Making you watch me fuck other men while you are locked up and desperate');
    sendMessage('And making you lick me clean afterwards %Grin%');
    sendMessage('And so many more degrading things %Lol%');
    sendMessage('It would please me very much if you\'d allow me to do this to you');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

CUCKOLD_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Anything does include making you my own little cuckold');
    sendMessage('Making you watch me fuck other men while you are locked up and desperate');
    sendMessage('And making you lick me clean afterwards %Grin%');
};

const FEET_LIMIT = createLimit('feet', 'feetLimit');
FEET_LIMIT.sendIntroduction = function (type) {
    sendMessage('I want you to worship me and every part of my body');
    sendMessage('And my feet definitely need some worshiping and attention %Grin%');
    sendMessage('I want you to lick them clean when they are sweaty and tired from work');
    sendMessage('Give them the attention they need %Grin%');
    sendMessage('Make you lick and kiss my boots');
    sendMessage('It would make me very happy if I was allowed to make you my foot slave');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};

FEET_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Anything does also mean worshiping my feet');
    sendMessage('Licking them clean after a long workout or worshipping my boots');
};

const VERBAL_HUMILIATION_LIMIT = createLimit('verbal humiliation', 'verbalHumiliation');
VERBAL_HUMILIATION_LIMIT.sendIntroduction = function (type) {
    sendMessage('I would very much love to humiliate you verbally');
    sendMessage('Insulting you, telling you how disgusting you are, talking about your small dick, degrading you verbally in general %Grin%');
    sendMessage('It would please me very much if we could try this %EmoteHappy%');
    sendMessage('You want to please me, don\'t you? %Grin%');
    askForNewLimitValue(this);
};
VERBAL_HUMILIATION_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Anything does also mean allowing me to humiliate you verbally');
    sendMessage('Making fun of you, %MyYour% %Balls% and %Cock%');
    sendMessage('Degrading you in every possible verbal way');
};

const HUMILIATION_LIMIT = createLimit('humiliation', 'humiliation');
HUMILIATION_LIMIT.sendIntroduction = function (type) {
    sendMessage('I would very much love to humiliate you in different ways');
    sendMessage('Make you do humiliating things privately');
    sendMessage('For example make you write stuff onto your body');
    sendMessage('It would make me so happy if I was allowed to do that to you %EmoteHappy%');
    sendMessage('And you want to please me, don\'t you? %Grin%');
    sendMessage('Mind this has nothing to do with public humiliation');
    sendMessage('That might be a topic for a different time %Grin%');
    sendMessage('For now I am just asking you to allow me to humiliate you privately');
    askForNewLimitValue(this);
};
HUMILIATION_LIMIT.sendDoingAnythingIntroduction = function (type) {
    sendMessage('Anything does also mean allowing me to humiliate you');
    sendMessage('Make you do humiliating things privately');
    sendMessage('For example make you write stuff onto your body and everything else my wicked mind can come up with %Grin%');
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

        sendDoingAnythingIntroduction: function (limitChange) {

        },

        sendIntroduction: function (limitChange) {

        },

        askForLimitChange: function (addressType) {
            let ask = this.handleCurrentLimitChange(addressType);

            if (ask === LIMIT_CHANGE_NO || ask === LIMIT_CHANGE_SUB_ADDRESSED_NO) {
                return false;
            }

            //Sub addressed
            if (ask === LIMIT_CHANGE_SUB_ADDRESSED) {
                if (this.getLimit() === LIMIT_ASKED_MAYBE) {
                    sendMessage('Seems like I succeeded in turning that maybe into a yes %Grin%');
                } else if (this.getLimit() === LIMIT_NEVER_ASKED) {
                    //First time and sub addressed
                }

                //Asked no before is not possible here because that's "changed mind" case
            }
            //Sub said no before and now he addressed it
            else if (ask === LIMIT_CHANGE_SUB_CHANGED_MIND) {
                sendMessage('You really did change your mind huh?');
                sendMessage('I am excited to hear this %Grin%');
            }
            //Case if sub said: I will do anything for you || Domme addressed
            else if (ask === LIMIT_CHANGE_WILL_DO_ANYTHING || ask === LIMIT_CHANGE_DOMME_ADDRESSED) {
                if (ask === LIMIT_CHANGE_WILL_DO_ANYTHING) {
                    this.sendDoingAnythingIntroduction(ask);
                }

                //In case domme addressed we will deal with it as if the domme already had a suiting introduction

                if (this.getLimit() === LIMIT_ASKED_MAYBE) {
                    sendMessage('And since you said maybe last time we talked about this...');

                    if (sendYesOrNoQuestion('I wonder if you would be up for it now?')) {
                        sendMessage('You are?');
                        sendMessage('This might get interesting %Grin%');
                    } else {
                        sendMessage('%EmoteSad%');
                        sendMessage('Well then I guess I have to keep waiting...');

                        if (isEnforcingPersonality()) {
                            sendMessage('But don\'t think I will go easy on you!')
                        }

                        return false;
                    }
                } else if (this.getLimit() === LIMIT_NEVER_ASKED) {
                    //Go to introduction after this
                    sendMessage('%SlaveName%');
                } else if (this.getLimit() === LIMIT_ASKED_NO) {
                    if (isEnforcingPersonality()) {
                        sendMessage('I am still not happy that you are denying me this %SlaveName%');
                    }

                    if (sendYesOrNoQuestion('But I guess your opinion on that hasn\'t changed has it?')) {
                        sendMessage('It has?');
                        sendMessage('This might get interesting %Grin%');
                    } else {
                        sendMessage('I thought so %SlaveName% %EmoteSad%');
                        changeMeritLow(true);

                        if (isEnforcingPersonality()) {
                            changeMeritLow(true);
                        }

                        return false;
                    }
                }
            } else if (ask === LIMIT_CHANGE_YES) {
                //Should be always the case and probably never happens
                if (this.getLimit() === LIMIT_ASKED_MAYBE) {

                }

                sendMessage('%SlaveName%');
            } else if (ask === LIMIT_CHANGE_NEW) {
                //Never asked case so directly go to intro
                sendMessage('%SlaveName%');
            }

            this.sendIntroduction(ask)
        },

        handleCurrentLimitChange: function (addressType) {
            let limitValue = this.getLimit();

            if (limitValue === LIMIT_ASKED_YES) {
                return LIMIT_CHANGE_ALREADY_YES;
            } else if (addressType === LIMIT_ADDRESS.DOMME) {
                return LIMIT_CHANGE_DOMME_ADDRESSED;
            } else if (addressType === LIMIT_ADDRESS.SUB && limitValue === LIMIT_ASKED_NO) {
                sendMessage('I thought you aren\'t into ' + this.name + '?');

                if (sendYesOrNoQuestion('Did you change your mind about that?')) {
                    return LIMIT_CHANGE_SUB_CHANGED_MIND;
                } else {
                    sendMessage('Well then don\'t bother me with stuff like this...');
                    return LIMIT_CHANGE_SUB_ADDRESSED_NO;
                }
            } else if (addressType === LIMIT_ADDRESS.SUB) {
                if (limitValue === LIMIT_NEVER_ASKED) {
                    sendMessage('This is getting interesting...');
                }

                return LIMIT_CHANGE_SUB_ADDRESSED;
            } else if (limitValue === LIMIT_ASKED_MAYBE) {
                //This needs to be handled individually to seduce in the current situation
                if (isVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING)) {
                    delVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING);
                    return LIMIT_CHANGE_WILL_DO_ANYTHING;
                }
            } else if (limitValue === LIMIT_NEVER_ASKED) {
                if (isVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING)) {
                    delVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING);
                    return LIMIT_CHANGE_WILL_DO_ANYTHING;
                }

                return LIMIT_CHANGE_NEW;
            } else if (limitValue === LIMIT_ASKED_NO) {
                if (isVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING)) {
                    delVar(VARIABLE.RESPONSE_WILL_DO_ANYTHING);
                    return LIMIT_CHANGE_WILL_DO_ANYTHING;
                }

                return LIMIT_CHANGE_NO;
            }


            //If current status is maybe and sub did not say will do anything
            return LIMIT_CHANGE_YES;
        },
    };

    LIMITS.push(limit);

    return limit;
}

function getLimit(limit) {
    return limit.getLimit();
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

function getRandomLimitNotYes() {
    let limit = null;
    shuffle(LIMITS);

    for (let x = 0; x < LIMITS.length; x++) {
        if (LIMITS[x].getLimit() !== LIMIT_NEVER && LIMITS[x].getLimit() !== LIMIT_ASKED_YES) {
            limit = LIMITS[x];
            break;
        }
    }

    //Return limit
    return limit;
}

function talkAboutRandomLimit(ignoreAskedNo = false) {
    let limit = null;
    for (let x = 0; x < LIMITS.length; x++) {
        if (LIMITS[x].getLimit() === LIMIT_NEVER_ASKED) {
            limit = LIMITS[x];
            break;
        }
    }

    //If limit is still null we talked about all limits
    if (limit === null) {
        shuffle(LIMITS);

        for (let x = 0; x < LIMITS.length; x++) {
            if (LIMITS[x].getLimit() === LIMIT_ASKED_MAYBE) {
                limit = LIMITS[x];
                break;
            }
        }
    }

    //If limit is still null we need to consider limits that the sub said no to earlier
    if (limit === null && !ignoreAskedNo) {
        shuffle(LIMITS);

        for (let x = 0; x < LIMITS.length; x++) {
            if (LIMITS[x].getLimit() === LIMIT_ASKED_NO) {
                limit = LIMITS[x];
                break;
            }
        }
    }

    if (limit === null) {
        return null;
    }

    //let limitValue = limit.getLimit();

    limit.askForLimitChange(LIMIT_ADDRESS.DOMME);

    //New limit value
    return limit.getLimit();
}

function askForNewLimitValue(limit) {
    //Try to seduce sub if he said no before so we jump to the kinder variation
    if (isEnforcingPersonality() && limit.getLimit() !== LIMIT_ASKED_NO) {
        sendMessage(random('You know I don\'t like being told no', 'As you should know I don\'t like being turned down', 'You know I do not take a "no" lightly', 'You know that I really don\'t like hearing "no"'));
        sendMessage(random('And since you want to please me and definitely do NOT want to displease me %Grin%', 'Thus I guess there is only one right answer to this', 'Which means there is practically only one way for you to answer this'));
    } else {
        sendMessage(random('I would even be happy if you told me "maybe"', 'A maybe would also make me happy', '"Maybe" would also make me happy for now') + '  %Grin%');
        sendMessage(random('That way I know I can try to get you into it', 'At least that would allow me to try to get you into it', 'It would allow me to try to get you into it') + ' %EmoteHappy%');

        if (limit.getLimit() === LIMIT_ASKED_NO && isEnforcingPersonality()) {
            sendMessage('And as you should know I definitely don\'t like being told no multiple times');
        }
    }

    let answer = sendInput(random('So would you be up for it?', 'So would you be fine with trying it?', 'Would it be fine for you to try it out?', 'Would you allow me to add this to our relationship?'), 'Yes', 'No', 'Maybe');

    while (true) {
        if (answer.isLike('yes')) {
            answer.clearOptions();
            sendMessage('%Good%! %EmoteHappy%');

            if (limit.getLimit() === LIMIT_ASKED_NO) {
                sendMessage('I am very happy that you changed your mind about this %SlaveName%');
                changeMeritLow(false);
            }

            if (isEnforcingPersonality()) {
                sendMessage(random('I knew you\'d pick the only right thing', 'The only thing I really wanted to hear', 'I expected nothing less', 'Exactly what I wanted to hear') + ' %Grin%');
            }

            changeMeritHigh(false);
            limit.setLimit(LIMIT_ASKED_YES);
            break;
        } else if (answer.isLike('no')) {
            answer.clearOptions();

            //Maybe to no change
            if (limit.getLimit() === LIMIT_ASKED_MAYBE) {
                sendMessage('You went from maybe to a no?!');

                if (isEnforcingPersonality()) {
                    sendMessage('Don\'t expect me to take this lightly %SlaveName%!');
                } else {
                    sendMessage('That\'s quite disappointing %EmoteSad%');
                    sendMessage('But maybe I\'ll get you there eventually');
                }
            } else if (limit.getLimit() === LIMIT_ASKED_NO) {
                if (isEnforcingPersonality()) {
                    sendMessage('I definitely do not like being told no multiple times %SlaveName%');
                } else {
                    sendMessage('%EmoteSad%');
                    sendMessage('I thought I might have been able to convince you to change your mind');
                    sendMessage('Obviously that is not the case');
                }
            } else {
                sendMessage('%EmoteSad%');
                changeMeritLow(true);
            }

            limit.setLimit(LIMIT_ASKED_NO);

            if (isEnforcingPersonality()) {
                sendMessage(random('Well do not expect me to be happy with this answer %SlaveName%', 'Do not expect me to go easy on you %SlaveName%', 'Do not expect me to accept this lightly', 'Do not think you can do this without consequences %SlaveName%'));
                changeMeritLow(true);
            }
            break;
        } else if (answer.isLike('maybe')) {
            answer.clearOptions();

            //Maybe to maybe change
            if (limit.getLimit() === LIMIT_ASKED_MAYBE) {
                sendMessage('...');
                sendMessage('You already said maybe last time...');

                if (isEnforcingPersonality()) {
                    sendMessage('That\'s disappointing %SlaveName%');
                    changeMeritLow(true);
                } else {
                    sendMessage('We\'ll get there eventually %Grin%');
                }
            } else {
                sendMessage(random('That\'s a start at least', 'That\'s something I guess', 'That counts for something', 'A good start', 'I can work with that') + ' %EmoteHappy%');
            }

            if (isEnforcingPersonality()) {
                sendMessage(random('As you should know I will definitely find my way to make you WANT it', 'I will find my way to make you crave it', 'I will guide you there', 'I will get you there') + ' %Grin%');
                sendMessage(random('No matter if I have to be kind or cruel to achieve this', 'And I won\'t shy away from being cruel either', 'No matter if it takes kindness or cruelty to get you there') + ' %Lol%');
            }

            changeMeritLow(false);
            limit.setLimit(LIMIT_ASKED_MAYBE);
            break;
        } else {
            sendMessage('Yes, no or maybe %SlaveName%?', 0);
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
            if (LIMITS[x].getLimit() === LIMIT_NEVER) {
                LIMITS[x].setLimit(LIMIT_NEVER_ASKED);
            }
        }

        setCurrentSender(SENDER_TAJ);
    }

    //To refresh limits
    setUpPersonalityVars();
}