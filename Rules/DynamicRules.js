let AVAILABLE_RULES = [];

{
    let ruleId = 0;

    let rule = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'Whenever you are in a session you must wear your collar';
    };

    rule.canBeActivated = function () {
        return COLLAR_TOY.hasToy();
    };

    AVAILABLE_RULES.push(rule);

    rule = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'When you talk to your %DomHonorific% you must always address her as %DomHonorific%';
    };

    rule.canBeActivated = function () {
        return true;
    };

    AVAILABLE_RULES.push(rule);

    rule = createRule(ruleId++, false);
    rule.getRulePrint = function () {
        return 'You must be naked at the start of sessions';
    };

    rule.canBeActivated = function () {
        return true;
    };

    AVAILABLE_RULES.push(rule);
}

function createRule(id, punishment, minDays = -1, maxDays = -1) {
    let rule = {
        id: id, punishment: punishment, minDays: minDays, maxDays: maxDays,

        getVarName: function () {
            return 'rule' + this.id;
        },

        isActive: function () {
            return getVar(this.getVarName() + 'active');
        },

        setActive: function (active) {
            setVar(this.getVarName() + 'active', active);
        },

        getActiveUntil: function() {
            return getVar(this.getVarName() + 'activeUntil', setDate());
        },

        addActiveUntil: function (days) {
            setDate(this.getVarName() + 'activeUntil', this.getActiveUntil().addDay(days));
        },
    };

    return rule;
}