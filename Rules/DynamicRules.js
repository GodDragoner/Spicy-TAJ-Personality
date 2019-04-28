const AVAILABLE_RULES = [];

let RULE_ALWAYS_WEAR_COLLAR_SESSIONS;
let RULE_ALWAYS_NAKED_SESSIONS;
let RULE_ALWAYS_HONORIFIC;
let RULE_NEVER_SWALLOW_SPIT;

{
    let ruleId = 0;

    let rule = RULE_ALWAYS_WEAR_COLLAR_SESSIONS = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'Whenever you are in a session you must wear your collar';
    };

    rule.checkRule = function () {
        if(this.isActive()) {
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

    rule.checkRule = function () {
        if(this.isActive()) {
            sendMessage('%SlaveName%');

            if (sendYesOrNoQuestion('Are you wearing naked?')) {
                sendMessage('%Good%');
                sendMessage('Because as you know you must be naked during our sessions %Grin%');
                return true;
            } else {
                sendMessage('%EmoteSad%');
                sendMessage('You know you have to be naked during our sessions');
                sendMessage('And you should also know not obeying rules will result in punishment points');

                addPunishmentPoints(getPPRuleIgnored());
                changeMeritMedium(true);
            }
        }

        return false;
    };

    AVAILABLE_RULES.push(rule);

    //Never swallow spit

    rule = RULE_NEVER_SWALLOW_SPIT = createRule(ruleId++, false);

    rule.getRulePrint = function () {
        return 'Only swallow cum and never swallow spit';
    };

    rule.checkRule = function () {
        if(this.isActive()) {
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

    rule.sendIntroduction = function() {
        sendMessage('Good sissies never swallow their spit %Grin%');

        if(getSissyLimit() === LIMIT_NEVER) {
            sendMessage('Well you aren\'t a sissy but this rule applies to good slaves too')
        } else {
            if(getSissyLimit() === LIMIT_NEVER_ASKED || getSissyLimit() === LIMIT_ASKED_MAYBE) {
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

        if(rule.isActive()) {
            rule.checkRule();
            return;
        }
    }
}


function getPPRuleIgnored() {
    return 150;
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

        sendIntroduction: function() {
            sendMessage('Default rule introduction');
            return true;
        },

        isPermanent: function () {
            return minDays === -1 === maxDays;
        },
    };

    return rule;
}