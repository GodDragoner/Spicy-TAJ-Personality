const AVAILABLE_RULES = [];

let RULE_ALWAYS_WEAR_COLLAR_SESSIONS;
let RULE_ALWAYS_NAKED_SESSIONS;
let RULE_ALWAYS_HONORIFIC;
let RULE_NEVER_SWALLOW_SPIT;
let RULE_ALWAYS_THANK_FOR_ORGASM;
let RULE_ALWAYS_SWALLOW_CUM;

{
    let ruleId = 0;

    let rule = RULE_ALWAYS_WEAR_COLLAR_SESSIONS = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'Whenever you are in a session you must wear your collar';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (sendYesOrNoQuestion('Are you wearing your collar?')) {
                sendMessage('%Good%');
                sendMessage('Because you must wear your collar during our sessions!');

                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you have to during our sessions');
                sendMessage('And not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.canBeActivated = function () {
        return COLLAR_TOY.hasToy() && !this.isActive();
    };

    AVAILABLE_RULES.push(rule);


    //Honorific rule

    rule = RULE_ALWAYS_HONORIFIC = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'When you talk to your %DomHonorific% you must always address her as %DomHonorific%';
    };

    AVAILABLE_RULES.push(rule);

    //Naked rule

    rule = RULE_ALWAYS_NAKED_SESSIONS = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must be naked during sessions unless told otherwise';
    };

    rule.sendIntroduction = function () {
        sendMessage('You being naked means I have immediate access to your whole body');
        sendMessage('And furthermore there is no world where you would need your clothes right?');
        sendMessage('Heck, you don\'t even deserve to wear clothes when I am around');
        sendMessage('Which is why I want to see you naked from now on whenever you come and see me');
        sendMessage('Unless I tell you otherwise of course');
        sendMessage('If I see you wearing clothes around me at any point you will not like what awaits you %Grin%');
        sendMessage('So keep that in mind');

        this.setActive(true);
        return true;
    };

    rule.checkRule = function () {
        sendMessage('%SlaveName%');

        if (sendYesOrNoQuestion('Are you naked?')) {
            sendMessage('%Good%');

            if (this.isActive()) {
                sendMessage('Because as you know you must be naked during our sessions %Grin%');
            } else {
                changeMeritLow(false);
                sendMessage("Good, I like it when you're all exposed and vulnerable %EmoteHappy%");
            }

            return true;
        } else {
            if (this.isActive()) {
                sendMessage('%EmoteSad%');

                changeMeritMedium(true);
                sendMessage('%SlaveName%...');

                if (sendYesOrNoQuestionTimeout('You know the rule don\'t you?', 5)) {
                    sendMessage('So there is no reason why you shouldn\'t follow it now!');
                } else {
                    sendMessage('No?');
                    sendMessage('Seems like I need to refresh your memory');
                    sendMessage('Whenever we meet you are to be completely naked unless I tell you otherwise');

                }

                addPunishmentPoints(getPPRuleIgnored());

                sendMessage('Go ahead and strip naked');
                sendMessage('Don\'t you dare report back to me before you are completely naked');
                waitForDone();
                sendMessage('I do not tolerate disobedience %SlaveName%');
                sendMessage('I\'ve added punishment points to your record');
                sendMessage('Don\'t dare to disobey me again!');
            } else {
                sendMessage("That's no good %SlaveName%");
                sendMessage("I want you naked from head to toe");

                let answer = sendInput("Can you do that for me?");

                while (true) {
                    if (answer.isLike("yes")) {
                        changeMeritLow(false);
                        sendMessage("%Good%");
                        sendMessage("Go ahead and take everything off");
                        lockImages();
                        sendMessage("I'll show you some pictures in the meantime", 0);
                        showCategoryImage("LESBIAN", 5);
                        sendMessage("Just to get you in the mood %EmoteHappy%", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (getVar(VARIABLE_CHASTITY_ON)) {
                            sendMessage("Even though you can't get hard inside that %ChastityCage% %Grin%", 0);
                        } else {
                            sendMessage("To make sure your %Cock% gets hard", 0);
                        }

                        showCategoryImage("BLOWJOB", 5);

                        sendMessage("To get your blood pumping", 0);
                        showCategoryImage("HARDCORE", 5);

                        if (getVar(VARIABLE_CHASTITY_ON)) {
                            sendMessage("Is it getting tight in that little cage of yours? %Grin%");
                        }

                        unlockImages();
                        sendMessage("Put all your clothes in a neat pile beside you");
                        sendMessage("Or just throw them on the floor, what do I care %Lol%");
                        sendMessage("If I were with you right now");
                        sendMessage("I'd walk around you");
                        sendMessage("Checking out your naked body");
                        sendMessage("Every flaw and every quality");
                        sendMessage("I would point out the good...");
                        sendMessage("And scold you for the bad %lol%");
                        sendMessage("Not just your %Cock% is mine %SlaveName%");
                        sendMessage("Your whole body belongs to me");
                        sendMessage("Don't forget that");
                        return true;
                    } else if (answer.isLike("no")) {
                        changeMeritHigh(true);
                        sendMessage("Hm so that's how it's going to be huh...?");
                        sendMessage("I don't like disobedient slaves...");
                        sendMessage("Suit yourself %SlaveName%");
                        break;
                    } else {
                        sendMessage(YES_OR_NO);
                        answer.loop();
                    }
                }
            }

            return false;
        }
    };

    AVAILABLE_RULES.push(rule);

    //Never swallow spit

    rule = RULE_NEVER_SWALLOW_SPIT = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Only swallow cum and never swallow spit';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('Good sissies never swallow their spit %Grin%');

        if (getSissyLimit() === LIMIT_NEVER) {
            sendMessage('Well you aren\'t a sissy but this rule applies to good slaves too')
        } else {
            if (getSissyLimit() === LIMIT_NEVER_ASKED || getSissyLimit() === LIMIT_ASKED_MAYBE) {
                sendMessage('Well you aren\'t a sissy yet but we will get there %Grin%');
                sendMessage('My little sissy bitch %Lol%');
            }
        }

        sendMessage('And because you want to please me and I want you to be one...');
        sendMessage('You will follow this rule from now on');

        this.setActive(true);

        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always thank for orgasm
    rule = RULE_ALWAYS_THANK_FOR_ORGASM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must thank %DomHonorific% %DomName% for every single orgasm you have';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And every single one of them is a rare gift');
        sendMessage('Which is why you will thank me for them from now on');
        sendMessage('Every single one %EmoteHappy%');
        sendMessage('No matter if it is a full orgasm or a ruined one');
        sendMessage('A ruined orgasm is still an orgasm %Lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Always swallow cum
    rule = RULE_ALWAYS_SWALLOW_CUM = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'You must swallow whatever cum you produce unless told otherwise';
    };

    rule.checkRule = function () {
        if (this.isActive()) {
            sendMessage('%SlaveName%');

            if (!sendYesOrNoQuestion('Did you swallow any spit?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you aren\'t allowed to swallow any spit %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you aren\'t allowed to swallow spit!');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    rule.sendIntroduction = function () {
        sendMessage('I own your orgasms %Grin%');
        sendMessage('And that is how it is supposed to be');
        sendMessage('But that nasty cum of yours is a problem');
        sendMessage('It stains stuff, it\'s disgusting and I think you should pay for your orgasm');
        sendMessage('So from now on there will be not even a single drop of cum that leaves your cock that\'s not gonna land in your dirty mouth');
        sendMessage('Which means unless I tell you otherwise you will always lick up and swallow your cum');
        sendMessage('I don\'t care whether you like it or not');
        sendMessage('It\'s just how things are gonna be if you want to cum ever again %lol%');

        this.setActive(true);
        return true;

    };

    AVAILABLE_RULES.push(rule);

    //Update all existing rules
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        //TODO: Notify rule ended?
        AVAILABLE_RULES[index].updateRule();
    }
}

function checkRandomRule() {
    let runs = 0;
    let maxOption = 1;

    while (isChance(25) || runs <= maxOption) {
        runs++;

        let rule = null;

        switch (randomInteger(0, maxOption)) {
            case 0:
                rule = RULE_ALWAYS_WEAR_COLLAR_SESSIONS;
                break;
            case 1:
                rule = RULE_ALWAYS_NAKED_SESSIONS;
                break;
        }

        if (rule.isActive()) {
            rule.checkRule();
            return;
        }
    }
}


function getPPRuleIgnored() {
    return 150;
}

function getRandomNewRule(permanent = true) {
    for (let index = 0; index < AVAILABLE_RULES.length; index++) {
        if (AVAILABLE_RULES[index].isPermanent() && permanent || !AVAILABLE_RULES[index].isPermanent() && !permanent) {
            if (!AVAILABLE_RULES[index].isActive()) {
                return AVAILABLE_RULES[index];
            }
        }
    }

    return null;
}


function createRule(id, punishment, minDays = -1, maxDays = -1) {
    let rule = {
        id: id, punishment: punishment, minDays: minDays, maxDays: maxDays,

        getVarName: function () {
            return 'rule' + this.id;
        },

        isActive: function () {
            return getVar(this.getVarName() + 'active', false);
        },

        setActive: function (active) {
            setVar(this.getVarName() + 'active', active);
        },

        getActiveUntil: function () {
            return getVar(this.getVarName() + 'activeUntil', setDate());
        },

        addActiveUntil: function (days) {
            setDate(this.getVarName() + 'activeUntil', this.getActiveUntil().addDay(days));
        },

        hasPassed: function () {
            return this.getActiveUntil().hasPassed();
        },

        updateRule: function () {
            if (minDays > 0 && maxDays > 0) {
                if (this.hasPassed() && this.isActive()) {
                    this.setActive(false);

                    //Delete date so it is reset next time activated
                    delVar(this.getVarName() + 'activeUntil');
                } else if (!this.hasPassed() && !this.isActive()) {
                    this.setActive(true);
                }
            }
        },

        canBeActivated: function () {
            return !this.isActive();
        },

        getRulePrint: function () {
            return 'default print';
        },

        checkRule: function () {
            sendMessage('Default rule check');
            return true;
        },

        sendIntroduction: function () {
            sendMessage('Default rule introduction');
            return true;
        },

        isPermanent: function () {
            return minDays == -1 && maxDays == -1;
        },
    };

    return rule;
}