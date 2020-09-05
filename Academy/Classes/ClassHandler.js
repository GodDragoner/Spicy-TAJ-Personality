let classes = [];

const DAY_OF_WEEK = {
    SUNDAY: 1,
    MONDAY: 2,
    TUESDAY: 3,
    WEDNESDAY: 4,
    THURSDAY: 5,
    FRIDAY: 6,
    SATURDAY: 7
};

function registerClass(name, levels, fileName, weekdays, getTasks, getModifiers, getExam, onStart, onEnd) {
    if (fileName === null || fileName === undefined) {
        fileName = name.replace(" ", "");
    }

    classes.push({
        name: name,
        maxStage: levels,
        fileName: fileName,
        weekdays: weekdays,

        getTasks: getTasks,
        getModifiers: getModifiers,
        getCurrentExam: getExam,

        onStart: onStart,
        onEnd: onEnd,

        setStartedAt: function () {
            setDate(fileName + 'startedAt');
        },

        getStartedAt: function () {
            return getDate(fileName + 'startedAt', setDate());
        },

        setLastVisitAt: function () {
            setDate(fileName + 'visitAt');
        },

        getLastVisitAt: function () {
            return getDate(fileName + 'visitAt');
        },

        setClassesTaken: function (classesTaken) {
            setVar(fileName + 'classesTaken', classesTaken);
        },

        getClassesTaken: function () {
            getVar(fileName + 'classesTaken', 0);
        },

        setActive: function (active) {
            setVar(fileName + 'active', active);
        },

        isActive: function () {
            return getVar(fileName + 'active', false);
        },

        setCurrentStage: function (stage) {
            setVar(fileName + 'stage', stage);
        },

        getCurrentStage: function () {
            return getVar(fileName + 'stage', 1);
        },

        isModifierActive: function (modifierIndex) {
            return this.getCurrentModifiers().indexOf(modifierIndex) !== -1;
        },

        setModifierActive: function (modifierIndex, active) {
            let modifierList = getVar(fileName + 'modifiers');

            if (active && !this.isModifierActive(modifierIndex)) {
                modifierList.add(modifierIndex);
            } else if (!active) {
                modifierList.remove(modifierList);
            }

            setVar(fileName + 'modifiers', modifierList);
        },

        getCurrentModifiers: function () {
            let modifiers = [];

            if (this.isActive()) {
                let modifierList = getVar(fileName + 'modifiers');
                for (let x = 0; x < modifierList.size(); x++) {
                    modifiers.push(modifierList.get(x));
                }
            }

            return modifiers;
        }
    });

    //Return newly added class
    return classes[classes.length - 1];
}