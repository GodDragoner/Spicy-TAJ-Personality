{
    //TODO: Only open academy after some time
    if(!isFullTime()) {
        sendVirtualAssistantMessage('The academy is only available to full time slaves :(');
    } else {
        if (!isVar(VARIABLE.ACADEMY_LAST_VISIT)) {
            sendVirtualAssistantMessage('This is your first time visiting the academy %SlaveName%');
            sendVirtualAssistantMessage('The academy is there to train you outside of sessions as well');
            sendVirtualAssistantMessage('It basically has a list of classes you need to take');
            sendVirtualAssistantMessage('Each class has its own schedule so you\'d better make sure to log in every day to catch all classes that are due');
            sendVirtualAssistantMessage('The classes basically give you assignments you\'ll have to complete before the next time you are visiting that class');
            sendVirtualAssistantMessage('However there is a twist');
            sendVirtualAssistantMessage('The assignments also get increasingly time consuming and difficult every week');
            sendVirtualAssistantMessage('So to reset that counter you\'ll have to take an exam');
            sendVirtualAssistantMessage('The exam usually tests your skills with a bigger task that you\'ll have to complete');
            sendVirtualAssistantMessage('Your knowledge might also be tested');
            sendVirtualAssistantMessage('If you pass said exam, the difficulty will go back to normal, however new rules or upgrades might be put in place');
            sendVirtualAssistantMessage('You will pass a class once we feel like you\'re ready');
            sendVirtualAssistantMessage('Maybe we will never consider you ready so don\'t get your hopes up too high %Lol%');
            sendVirtualAssistantMessage('Anyway in this menu you are able to attend classes, sign up for classes and so on and so forth');
            sendVirtualAssistantMessage('If you are not signing up for enough classes, you might make your %DomHonorific% angry');
            sendVirtualAssistantMessage('She might even sign you up for classes if you seem too lazy so better make sure you are a good boy and stay occupied');
        }

        setDate(VARIABLE.ACADEMY_LAST_VISIT);

        let exitRequest = false;

        while (!exitRequest) {
            sendVirtualAssistantMessage('What do you want to do?', 0);
            let answer = createInput('Attend classes', 'Join Class', 'Schedule', 'List tasks', 'Return');

            if (answer.isLike('attend')) {
                answer.clearOptions();
                handleTodayAcademyClasses();
            } else if (answer.isLike('join')) {
                answer.clearOptions();

                let classesOpen = "";
                for(let x = 0; x < ACADEMY_CLASSES.length; x++) {
                    let academyClass = ACADEMY_CLASSES[x];

                    if(academyClass.isListed())  {
                        classesOpen += academyClass.name + ", "
                    }
                }

                if(classesOpen.length === 0) {
                    sendVirtualAssistantMessage('There are no classes available that you haven\'t signed up for yet pet');
                } else {

                    classesOpen = classesOpen.substr(0, classesOpen.length - 2);

                    sendVirtualAssistantMessage('Currently these classes are available: ' + classesOpen);

                    sendVirtualAssistantMessage('Which class would you like to take?', 0);
                    let classToTake = createInput();

                    while(true) {
                        let classString = classToTake.getAnswer();

                        let academyClass = getAcademyClassByName(classString);
                        if(academyClass !== null) {
                            if(academyClass.isListed()) {
                                sendVirtualAssistantMessage('Signing you up for the class "' + academyClass.name + '"');
                                academyClass.setActive(true);

                                sendVirtualAssistantMessage('It takes place on ' + academyClass.getWeekdayString());
                                break;
                            } else {
                                sendVirtualAssistantMessage('You have already taken that class %SlaveName%', 0);
                                answer.loop();
                            }
                        } else if(classToTake.isLike('return', 'exit', 'none', 'abort', 'no')) {
                            sendVirtualAssistantMessage('You signed up for no class %SlaveName%');
                            sendVirtualAssistantMessage('Going back to the previous menu.');
                            break;
                        } else {
                            sendVirtualAssistantMessage('That\'s not a valid class %SlaveName%', 0);
                            classToTake.loop();
                        }
                    }
                }
            } else if (answer.isLike('schedule')) {
                answer.clearOptions();

                let found = false;

                for(let x = 0; x < ACADEMY_CLASSES.length; x++) {
                    let academyClass = ACADEMY_CLASSES[x];

                    if(academyClass.isActive())  {
                        found = true;
                        sendVirtualAssistantMessage(academyClass.name + ': ' + academyClass.getWeekdayString());
                    }
                }


                if(!found) {
                    sendVirtualAssistantMessage('There is no active class right now %SlaveName%');
                }
            } else if (answer.isLike('tasks')) {
                answer.clearOptions();

                let found = false;

                for(let x = 0; x < ACADEMY_CLASSES.length; x++) {
                    let academyClass = ACADEMY_CLASSES[x];

                    if(academyClass.isActive() && academyClass.getClassesTaken() > 0)  {
                        sendVirtualAssistantMessage(academyClass.name + ': ' + academyClass.getCurrentAssignmentText());
                        found = true;
                    }
                }

                if(!found) {
                    sendVirtualAssistantMessage('There is no active class task right now %SlaveName%');
                }
            }  else if (answer.isLike('return')) {
                answer.clearOptions();
                exitRequest = true;
                break;
            } else {
                sendVirtualAssistantMessage('Attend classes, join classes, list tasks or return?', 0);
                answer.loop();
            }
        }
    }
}