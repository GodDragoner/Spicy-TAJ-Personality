{
    function getTasks(classObject) {
        let stage = classObject.getCurrentStage();

        let tasks = [];
        tasks.push('Sit on your ' + getDildo().name + ' for ' + stage * 8 + ' minutes while applying constant pressure to push it deeper');
        tasks.push('Fuck your ' + getDildo().name + ' for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Find some anal porn of at least ' + stage * 8 + ' minutes. Try to copy it using your ' + getDildo().name + ' as well as possible');
        tasks.push('Ride the ' + getDildo().name + ' kneeling for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Ride the ' + getDildo().name + ' squatting for ' + stage * 8 + ' minutes as deep as it will go');
        tasks.push('Go almost all the way out and in as far it goes using the ' + getDildo().name + ' for ' + stage*8 + ' minutes at your own speed.');
        tasks.push('Spend ' + stage*8 + ' minutes practicing to get your ' + getDildo().name + ' in as far as possible');
        tasks.push('Fuck your ' + getDildo().name + + ' for ' + stage * 8 + ' minutes at 60 bpm while going as deep as possible and only slightly out');
        tasks.push('Push the '+ getDildo().name + ' in as far as possible and practice 5 minutes for every cm that didn\'t fit.');

        return tasks;
    }

    function getModifiers(classObject) {
        let modifiers = [];
        modifiers.push('If you can\'t yet train getting the ' + getDildo().name + ' fully in for 10 minutes daily');
        modifiers.push('You will watch at least 5 minutes of hypno (any kind) after waking up and 5 minutes before going to sleep');

        return modifiers;
    }

    function getExam(classObject) {
        let stage = classObject.getCurrentStage();

        let exam = [];
        exam.push('Fuck your ass with the dildo going all the way in and almost all the way out for 30 minutes');
        exam.push('Practice for at least 8 hours this week. Task time not included.');
        exam.push('Fuck your ass for 4 hours with your dildo balls deep at any speed within one day. You may take breaks but only if you are leaving that dildo inside.');

        return exam[stage];
    }

    function onStart(classObject) {
        let classesTaken = classObject.getClassesTaken();

        //Class started, introduction
        if (classesTaken === 0) {
            sendMessage('Hello %SlaveName%');
            sendMessage('Welcome to your first anal depth class');
            sendMessage('This class will train your ass to take the longest toys someone could imagine');

            if (SISSY_LIMIT.isAllowed()) {
                sendMessage('That includes all that cock you will take up your ass eventually sissy %Lol%');
            }

            sendMessage('So you\'d better be ready for difficult and unrelenting training');
            sendMessage('So...');
            sendMessage('You will need to pick a dildo from your collection that you are currently unable to fit in completely yet due to its length');

            if (sendYesOrNoQuestion('Do you have anything like that already?')) {
                sendMessage('%Good%');
            } else {
                changeMeritLow(true);
                sendMessage('Well then you\'d better start shopping NOW and find one immediately');
                sendMessage('I expect it to be available to you within the next 7 days %SlaveName%');

                //TODO: 7 day cooldown, store purchase order given
                return false;
            }

            if (!isVar(VARIABLE.MAX_ANAL_LENGTH)) {
                sendMessage('Tell me %SlaveName%');
                sendMessage('And be truthful and realistic...');

                let length = createDoubleInput('Up to what length are you able to fit dildos up your %Ass% in cm right now?', 1, 100, 'That\'s not a valid number %SlaveName%', 'I don\'t think you are giving me a realistic diameter %SlaveName%');

                if (length < 10) {
                    sendMessage('Oh so you are a real beginner');
                    sendMessage('No worries we will get there %Grin%');
                } else if (length < 20) {
                    sendMessage('Seems like you have been training quite a bit before %Lol%');
                } else {
                    sendMessage('Oh wow. Seems like you are a pro at this already. This is gonna be so much fun %Lol%')
                }

                setVar(VARIABLE.MAX_ANAL_LENGTH, length);
            }

            let dildo = getDildoClosestAboveLength(getVar(VARIABLE.MAX_ANAL_LENGTH));

            if (dildo === null) {
                changeMeritLow(true);
                sendMessage('I don\'t think you own any dildo longer than that length');
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
                    if (DILDOS[y].length >= getVar(VARIABLE.MAX_ANAL_LENGTH)) {
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
                        sendMessage('If you do set it up correctly in the menu', 0);
                        answer.loop();
                    } else if (dildo.length < getVar(VARIABLE.MAX_ANAL_LENGTH)) {
                        sendMessage('That dildo is not on the list I provided you with %SlaveName%');
                        sendMessage('Don\'t try to cheat on me with a shorter length!', 0);
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
            sendMessage('After you take on and pass an exam we will upgrade that dildo to a longer one %Grin%');
            sendMessage('%Now%');
        } else {

        }

        return true;
    }

    function getDildo() {
        return getDildoByName(getVar("analDepthClassDildo"));
    }

    function setDildo(dildo) {
        return setVar("analDepthClassDildo", dildo.name);
    }

    function onEnd(academyClass) {

    }

    function isAvailable(academyClass) {
        return ANAL_LIMIT.isAllowed();
    }

    registerClass("Anal Depth", 5, null, [DAY_OF_WEEK.MONDAY, /*DAY_OF_WEEK.THURSDAY*/], getTasks, getModifiers, getExam, onStart, onEnd, isAvailable)
}