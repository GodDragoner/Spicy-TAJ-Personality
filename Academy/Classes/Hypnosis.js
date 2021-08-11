{
    function getTasks(classObject) {
        let stage = classObject.getCurrentStage();

        let possibleTypes = ['chastity hypnosis'];

        if(SISSY_LIMIT.isAllowed()) {
            possibleTypes.push('sissy hypnosis');
        }

        if(FEET_LIMIT.isAllowed()) {
            possibleTypes.push('feet porn');
        }

        if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            possibleTypes.push('censored porn');
        }

        let tasks = [];

        if(hasDildoToy()) {
            tasks.push('Spent ' + stage*10 + ' minutes watching ' + random(possibleTypes) + ' and sensually fucking yourself with a dildo of your choice');
        }

        if(MAGIC_WAND_TOY.hasToy() && MAGIC_WAND_TOY.isPlayAllowed()) {
            tasks.push('Spent ' + stage*10 + ' minutes watching ' + random(possibleTypes) + ' while vibing your clitty');
        }

        if(SISSY_LIMIT.isAllowed()) {
            tasks.push('Listen to sissy hypnosis instead of music for one day');
            tasks.push('Listen to sissy hypnosis while falling asleep today and only stop it once you\'ve fallen asleep');
        }

        if(PROSTATE_VIBRATOR_TOY.hasToy() && PROSTATE_VIBRATOR_TOY.isPlayAllowed()) {
            tasks.push('Spent ' + stage*10 + ' minutes watching ' + random(possibleTypes) + ' while teasing your ass with a prostate vibrator');
        }

        //Fallback task
        if(tasks.length === 0) {
            tasks.push('Spent ' + stage*10 + ' minutes watching ' + random(possibleTypes));
        }

        return tasks;
    }

    function getModifiers(classObject) {
        let modifiers = [];
        modifiers.push('Whenever you are doing other classes try to watch or hear hypno (any kind) during them');
        modifiers.push('You will watch at least 5 minutes of hypno (any kind) after waking up and 5 minutes before going to sleep');

        return modifiers;
    }

    function getExam(classObject) {
        let stage = classObject.getCurrentStage();

        let exam = [];
        exam.push('Spent 4 hours watching hypno (any kind) within one day. Any sort of stimulation is up to you.');
        exam.push('Spent 20 hours watching hypno (any kind) within the next week. Any sort of stimulation is up to you.');

        return exam[stage];
    }

    function onStart(classObject) {
        let classesTaken = classObject.getClassesTaken();

        //Class started, introduction
        if (classesTaken === 0) {
            sendMessage('Hello %SlaveName%');
            sendMessage('Welcome to your first hypnosis class');
            sendMessage('This class is designed to turn you into a submissive drooling mess');

            if (SISSY_LIMIT.isAllowed()) {
                sendMessage('To turn you into a real sissy %Lol%');
            }


            sendMessage('Ready to follow every command and aware of its place at the bottom of a woman\'s feet');
            sendMessage('A willing pet whose sole purpose is to follow the instructions of a woman');

            sendMessage('Obviously cumming is strictly forbidden!');

            sendMessage('So you\'d better be prepared to have your mind washed %Lol%');
        } else {

        }

        return true;
    }


    function onEnd(academyClass) {
        if(CEI_LIMIT.isAllowed() && isChance(25)) {
            sendMessage('Remember: All precum produced must be consumed!');
        }
    }

    function isAvailable(academyClass) {
        return SISSY_LIMIT.isAllowed();
    }

    registerClass("Hypnosis", 5, null, [/*DAY_OF_WEEK.MONDAY,*/ DAY_OF_WEEK.TUESDAY, DAY_OF_WEEK.WEDNESDAY, /*DAY_OF_WEEK.THURSDAY,*/ DAY_OF_WEEK.FRIDAY, DAY_OF_WEEK.SATURDAY], getTasks, getModifiers, getExam, onStart, onEnd, isAvailable)
}