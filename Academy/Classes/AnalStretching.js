{
    function getTasks(classObject) {
        let stage = classObject.getCurrentStage();

        let tasks = [];
        tasks.push('Sit on your ' + getDildo().name + ' for ' + stage * 8 + ' minutes while applying constant pressure to push it deeper');
        tasks.push('Fuck your ' + getDildo().name + ' for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Find some anal porn of at least ' + stage * 8 + ' minutes. Try to copy it using your ' + getDildo().name + ' as well as possible');
        tasks.push('Ride the ' + getDildo().name + ' kneeling for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Ride the ' + getDildo().name + ' squatting for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Put in your ' + getBigButtplug(true).name + ' and pull it out to the point where its thickest part is stretching your ass. Hold for 10 seconds and repeat ' + stage * 20 + ' times');
        tasks.push('Fuck your ' + getDildo().name + ' for  ' + stage * 300 + ' thrusts as deep as it will go');
        tasks.push('Fuck yourself with your ' + getBigButtplug(true).name + ' for ' + stage * 8 + ' minutes');
        tasks.push('Before going to bed fuck your ass at 120 bpm as deep as it will go with your ' + getDildo().name + ' for ' + stage * 2 + ' minutes then plug yourself with your ' + getBigButtplug(true).name + ' for the night.');

        return tasks;
    }

    function getModifiers(classObject) {

    }

    function getExam(classObject) {
        let stage = classObject.getCurrentStage();

        let exam = [];
        exam.push('Fuck your ass with the dildo going all the way in and almost all the way out for 10 minutes at 25 bpm');
    }

    function onStart(classObject) {
        let classesTaken = classObject.getClassesTaken();

        //Class started, introduction
        if (classesTaken === 0) {
            sendMessage('Hello %SlaveName%');
            sendMessage('Welcome to your first anal stretching class');
            sendMessage('This class is designed to train your ass for all the thick objects it will need to take further down the road');

            if (SISSY_LIMIT.isAllowed()) {
                sendMessage('That includes all that cock you will take up your ass eventually sissy %Lol%');
            }

            sendMessage('So you\'d better be ready for intense and unrelenting training');
            sendMessage('We won\'t stop until you are ready to take the thickest toys someone could imagine so better strap in because the ride is gonna be rough %Grin%');
            sendMessage('Pun intended %Lol%');

            sendMessage('So...');
            sendMessage('You will need to pick a dildo from your collection that you are currently unable to fit in completely yet due to its girth');

            if (sendYesOrNoQuestion('Do you have anything like that already?')) {
                sendMessage('%Good%');
            } else {
                changeMeritLow(true);
                sendMessage('Well then you\'d better start shopping NOW and find one immediately');
                sendMessage('I expect it to be available to you within the next 7 days %SlaveName%');

                //TODO: 7 day cooldown, store purchase order given
                return false;
            }

            askForMaxDiameter();
            askForCasualDiameter();

            let dildo = getDildoClosestAboveDiameter(getVar(VARIABLE.MAX_ANAL_DIAMETER));

            if (dildo === null) {
                changeMeritLow(true);
                sendMessage('I don\'t think you own any dildo bigger than that diameter');
                sendMessage('You\'d better start shopping NOW and find one immediately');
                sendMessage('I expect it to be available to you within the next 7 days %SlaveName%');

                //TODO: 7 day cooldown, store purchase order given
                return false;
            }

            sendMessage('Out of my head I would suggest your ' + dildo.name + ' to get this training started', 0);
            showImage(getDildoImagePath(dildo.name), 5);

            if (sendYesOrNoQuestion('Do you think it\'s suited for this purpose?')) {
                sendMessage('Great!');
                sendMessage('That dildo is settled then %Grin%');
            } else {
                sendMessage('Well then...');
                let dildos = "";

                for (let y = 0; y < DILDOS.length; y++) {
                    if (DILDOS[y].diameter >= getVar(VARIABLE.MAX_ANAL_DIAMETER)) {
                        dildos += DILDOS[y].name + ' (D: ' + DILDOS[y].diameter + '| L: ' + DILDOS[y].length + ')';
                        dildos += ", ";
                    }
                }

                dildos = dildos.substr(0, dildos.length - 2);

                sendMessage('Currently these dildos are available to you: ' + dildos);
                let answer = sendInput('Tell me %SlaveName% which of these dildos would you pick for this purpose?');

                while (true) {
                    dildo = getDildoByName(answer.getAnswer());

                    if (dildo === null) {
                        sendMessage('I don\'t think you own that dildo %SlaveName%');
                        sendMessage('If you do set it up correctly in the menu');
                        answer.loop();
                    } else if (dildo.diameter < getVar(VARIABLE.MAX_ANAL_DIAMETER)) {
                        sendMessage('That dildo is not on the list I provided you with %SlaveName%');
                        sendMessage('Don\'t try to cheat on me with a smaller diameter!');
                        addPunishmentPoints(250, PUNISHMENT_REASON.CHEATING);
                        answer.loop();
                    } else {
                        sendMessage('Sounds good to me %Grin%');
                        sendMessage(dildo.name + ' it is then!');
                        break;
                    }
                }
            }

            setDildo(dildo);

            sendMessage('From now on you will train using your ' + dildo.name);
            sendMessage('After you take on and pass an exam we will upgrade that dildo to a bigger one %Grin%');
            sendMessage('%Now%');
        } else {

        }

        return true;
    }

    function getDildo() {
        return getDildoByName(getVar("analStretchingClassDildo"));
    }

    function setDildo(dildo) {
        return setVar("analStretchingClassDildo", dildo.name);
    }

    function onEnd(academyClass) {

    }

    function isAvailable(academyClass) {
        return ANAL_LIMIT.isAllowed();
    }

    registerClass("Anal Stretching", 5, null, [DAY_OF_WEEK.WEDNESDAY, DAY_OF_WEEK.SATURDAY], getTasks, getModifiers, getExam, onStart, onEnd, isAvailable)
}

function askForMaxDiameter() {
    if (!isVar(VARIABLE.MAX_ANAL_DIAMETER)) {
        sendMessage('Tell me %SlaveName%');
        sendMessage('And be truthful and realistic...');

        let diameter = createDoubleInput('Up to what diameter are you able to fit dildos up your %Ass% in cm right now?', 1, 15, 'That\'s not a valid number %SlaveName%', 'I don\'t think you are giving me a realistic diameter %SlaveName%');

        if (diameter < 4) {
            sendMessage('Oh so you are a real beginner');
            sendMessage('No worries we will get there %Grin%');
        } else if (diameter < 6) {
            sendMessage('Seems like you have been training quite a bit before %Lol%');
        } else {
            sendMessage('Oh wow. Seems like you are a pro at this already. This is gonna be so much fun %Lol%')
        }

        setVar(VARIABLE.MAX_ANAL_DIAMETER, diameter);
    }
}

function askForCasualDiameter() {
    if (!isVar(VARIABLE.USED_TO_DILDO_DIAMETER)) {
        sendMessage('Now %SlaveName%');
        sendMessage('Tell me truthfully...');

        let diameter = createDoubleInput('Up to what diameter are you able to fit dildos up your %Ass% without any pre-stretching right now?', 1, 15, 'That\'s not a valid number %SlaveName%', 'I don\'t think you are giving me a realistic diameter %SlaveName%');

        if (diameter < 3) {
            sendMessage('Oh so you are a real beginner');
            sendMessage('No worries we will get there %Grin%');
        } else if (diameter < 5) {
            sendMessage('Seems like you have been training quite a bit before %Lol%');
        } else {
            sendMessage('Oh wow. Seems like you are a pro at this already. This is gonna be so much fun %Lol%')
        }

        setVar(VARIABLE.USED_TO_DILDO_DIAMETER, diameter);
    }
}