let ACADEMY_CLASSES = [];

const DAY_OF_WEEK = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6
};


const ACADEMY_SKIPPED_CLASS_TYPE = {
    TASKS: 0,
    PUNISHMENT_POINTS: 1,
};


const DAY_OF_WEEK_NAME = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

{
    let pathLength = getPersonalityPath().length;
    let files = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Academy' + PATH_SEPARATOR + 'Classes').listFiles();

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('ClassHandler')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }
}

function getAcademyClassByName(name) {
    for (let x = 0; x < ACADEMY_CLASSES.length; x++) {
        let clazz = ACADEMY_CLASSES[x];

        if (clazz.name.toLowerCase() === name.toLowerCase()) {
            return clazz;
        }
    }

    return null;
}

function handleTodayAcademyClasses() {
    let dayOfWeek = new Date().getDay();

    let foundClass = false;

    setSender(random(2, 3, 4));

    for (let x = 0; x < ACADEMY_CLASSES.length; x++) {
        let clazz = ACADEMY_CLASSES[x];

        //Check if we have the correct day, whether the class is active and whether we didn't attend it today et
        if (clazz.weekdays.indexOf(dayOfWeek) !== -1 && clazz.isActive() && (clazz.getClassesTaken() === 0 || !clazz.getLastVisitAt().sameDay(setDate()))) {

            //Days that should have passed if the sub visited the classes regularly
            let daysSinceLastMeet = 0;

            if (clazz.weekdays.length > 1) {
                let currentDayIndex = clazz.weekdays.indexOf(dayOfWeek);
                let previousDayIndex = currentDayIndex > 0 ? currentDayIndex - 1 : clazz.weekdays.length - 1;

                //The previous day that we were supposed to take the class
                let previousDay = clazz.weekdays[previousDayIndex];

                //Means that previous day was for example saturday and current day is monday, to make calculation end up in 2 days (8 - 6) we need to add 7 (one week)
                if (dayOfWeek < previousDay) {
                    dayOfWeek += 7;
                }

                //Difference between days
                daysSinceLastMeet = Math.abs(dayOfWeek - previousDay);
            } else {
                daysSinceLastMeet = 7;
            }


            foundClass = true;
            sendVirtualAssistantMessage('Class "' + clazz.name + ' is starting now...');

            //Class couldn't start for some reason
            if (!clazz.onStart(clazz)) {
                continue
            }

            if (clazz.getClassesTaken() > 0) {
                //Get this here already since we might change it if classes where skipped
                let lastTask = clazz.getCurrentAssignmentText();
                setCurrentSender(SENDER_TAJ);
                if (!clazz.getLastVisitAt().addDay(daysSinceLastMeet).sameDay(setDate()) && !hasBeenAwayInThePastWeek()) {
                    sendMessage('You have been skipping classes %SlaveName%');
                    sendMessage('This behavior is not tolerated!');

                    if (!isVar(VARIABLE.ACADEMY_CLASS_SKIPPED_TYPE)) {
                        sendMessage('Since this is the first time you skipped a class');
                        sendMessage('I am gonna give you a choice');
                        sendMessage('You can either take some punishment points and just deal with today\'s task');
                        sendMessage('Or you can get assigned all tasks that you skipped');
                        sendMessage('Without any further punishments');
                        sendMessage('I won\'t count the skipped classes as taken or increase your level for them in either case');
                        sendMessage('Note this choice is permanent so choose wisely');

                        let answer = sendInput('Tell me, what do you prefer?', 'Tasks', 'Punishment Points');

                        while (true) {
                            if (answer.isLike('tasks')) {
                                sendMessage('You seem eager to catch up so that\'s nice %Lol%');
                                setVar(VARIABLE.ACADEMY_CLASS_SKIPPED_TYPE, ACADEMY_SKIPPED_CLASS_TYPE.TASKS);
                                break;
                            } else if (answer.isLike('punishment points')) {
                                sendMessage('Well that\'s probably best if you skip a lot of days %Lol%');
                                setVar(VARIABLE.ACADEMY_CLASS_SKIPPED_TYPE, ACADEMY_SKIPPED_CLASS_TYPE.PUNISHMENT_POINTS);
                                break;
                            } else {
                                sendMessage('Tasks or punishment points', 0);
                                answer.loop();
                            }
                        }

                        answer.clearOptions();
                    }

                    if (getVar(VARIABLE.ACADEMY_CLASS_SKIPPED_TYPE, 1) === ACADEMY_SKIPPED_CLASS_TYPE.TASKS) {
                        let lastVisit = clazz.getLastVisitAt();
                        lastVisit.addDay(1);
                        let today = setDate();

                        let skippedClasses = 1;

                        while (!lastVisit.sameDay(today) && !lastVisit.after(today)) {
                            //Check if we would've had a class on that day
                            if (clazz.weekdays.indexOf(lastVisit.getDayOfWeek() - 1) !== -1) {
                                skippedClasses++;
                            }

                            lastVisit.addDay(1);
                        }

                        sendMessage('Since you skipped a total of ' + skippedClasses);

                        sendMessage('Here are all tasks you missed:');

                        for(let x = 0; x < skippedClasses; x++) {
                            clazz.decideAssignment();
                            clazz.sendAssignment();
                        }

                        sendMessage('Mind that I won\'t keep track of them anymore so you better copy them somewhere or write them down');
                    } else {
                        changeMeritMedium(true);
                        addPunishmentPoints(250, PUNISHMENT_REASON.TOO_LAZY);
                        sendMessage('I have assigned you some punishment points to account for your sluggish behaviour')
                    }

                    sendMessage('Be sure to participate in every single class on time!');
                }




                sendMessage('The last assignment was:');

                for(let x = 0; x < lastTask.size(); x++) {
                    sendMessage(lastTask.get(x));
                }

                if (sendYesOrNoQuestion('Did you complete your last assignment %SlaveName%?')) {
                    sendMessage('%Good%');
                } else {
                    sendMessage('%EmoteSad%');
                    sendMessage('You know you have to do your tasks to improve');

                    if (sendYesOrNoQuestion('You want to please us don\'t you?')) {
                        sendMessage('%Good%');
                        sendMessage('Remember that before skipping your tasks next time!');
                    } else {
                        sendMessage('You should want to please us!');
                        sendMessage('Otherwise you should probably leave because we don\'t deal with bratty subs here!');
                    }

                    sendMessage('However this will not be unpunished!');
                    changeMeritMedium(true);
                    addPunishmentPoints(250, PUNISHMENT_REASON.TOO_LAZY);
                    sendMessage('I have given you some punishment points');
                    sendMessage('I hope you\'ll have done your tasks next time...');
                    continue;
                }
            }

            sendMessage('I hope you are ready for today\'s assignment');
            clazz.decideAssignment();
            clazz.sendAssignment();
            clazz.setLastVisitAt();
            clazz.setClassesTaken(clazz.getClassesTaken() + 1);

            if (clazz.getCurrentStage() === clazz.maxStage) {

            }
            //Only do this once per week
            else if (clazz.getClassesTaken() % clazz.weekdays.length === 0) {
                clazz.setCurrentStage(clazz.getCurrentStage() + 1);
                sendDebugMessage('Increased class level since week has passed');
            }

            clazz.onEnd(clazz);

            sendMessage('See you next time %SlaveName% %Grin%');

            setCurrentSender(SENDER_ASSISTANT);
            sendVirtualAssistantMessage('Class "' + clazz.name + ' has ended.');
        }
    }

    setSender(1);

    if (!foundClass) {
        sendVirtualAssistantMessage('You don\'t have any classes today %SlaveName%');
    }
}

function registerClass(name, levels, fileName, weekdays, getTasks, getModifiers, getExam, onStart, onEnd, isAvailable) {
    if (fileName === null || fileName === undefined) {
        fileName = name.replace(" ", "");
    }

    ACADEMY_CLASSES.push({
        name: name,
        maxStage: levels,
        fileName: fileName,
        weekdays: weekdays,

        getTasks: getTasks,
        getModifiers: getModifiers,
        getCurrentExam: getExam,

        onStart: onStart,
        onEnd: onEnd,
        isAvailable: isAvailable,

        taskHistory: createHistory(fileName + "TaskHistory"),

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
            return getDate(fileName + 'visitAt').clone();
        },

        setClassesTaken: function (classesTaken) {
            setVar(fileName + 'classesTaken', classesTaken);
        },

        getClassesTaken: function () {
            return getVar(fileName + 'classesTaken', 0);
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
                let modifierList = tryGetArrayList(fileName + 'modifiers');
                for (let x = 0; x < modifierList.size(); x++) {
                    modifiers.push(modifierList.get(x));
                }
            }

            return modifiers;
        },

        setAssignment: function (assignment) {
            setVar(fileName + 'assignment', assignment);
        },

        getAssignment: function () {
            return getVar(fileName + 'assignment');
        },

        decideAssignment: function () {
            let tasks = getTasks(this);

            let result = this.taskHistory.getRandomAvailableId(0, tasks.length - 1, tasks / 2);

            let resultArray = this.assignmentToArray(result);
            this.taskHistory.addHistoryRun(result);
            this.setAssignment(result);
            this.setCurrentAssignmentText(resultArray);
        },

        assignmentToArray: function(assignmentIndex) {
            let resultText = getTasks(this)[assignmentIndex];
            let resultArray = new java.util.ArrayList();

            //Some tasks are one liners some aren't
            if(Array.isArray(resultText)) {
                for(let x = 0; x < resultText.length; x++) {
                    resultArray.add(resultText[x]);
                }
            } else {
                resultArray.add(resultText);
            }

            return resultArray;
        },

        setCurrentAssignmentText: function (assignment) {
            setVar(fileName + 'assignmentText', assignment);
        },

        getCurrentAssignmentText: function () {
            if (isVar(fileName + 'assignmentText')) {
                let array = tryGetArrayList(fileName + 'assignmentText');

                //Backwards compatibility with string only tasks
                if(array instanceof String || typeof array === 'string') {
                    let newArray = new java.util.ArrayList();
                    newArray.add(array);
                    array = newArray;
                }

                return array;
            }

            return this.assignmentToArray(this.getAssignment());
        },


        sendAssignment: function () {
            let resultArray = this.getCurrentAssignmentText();

            for(let x = 0; x < resultArray.size(); x++) {
                sendMessage(resultArray.get(x));
            }
        },

        getWeekdayString: function () {
            let weekdayString = "";

            for (let x = 0; x < this.weekdays.length; x++) {
                weekdayString += DAY_OF_WEEK_NAME[this.weekdays[x]] + ', '
            }

            weekdayString = weekdayString.substr(0, weekdayString.length - 2);

            return weekdayString;
        },

        isListed: function () {
            return !this.isActive() && this.isAvailable();
        }
    });

    //Return newly added class
    return ACADEMY_CLASSES[ACADEMY_CLASSES.length - 1];
}