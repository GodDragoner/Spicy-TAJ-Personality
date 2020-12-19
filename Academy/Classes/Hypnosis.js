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
        tasks.push('Spent ' + stage*10 + ' minutes watching ' + random(possibleTypes) + ' and sensually fucking yourself with a dildo of your choice');

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
            sendMessage('Welcome to your first hypnosis class');
            sendMessage('This class is designed to turn you into a submissive drooling mess');

            if (SISSY_LIMIT.isAllowed()) {
                sendMessage('To turn you into a real sissy %Lol%');
            }


            sendMessage('Ready to follow every command and aware of its place at the bottom of a woman\'s feet');
            sendMessage('A willing pet that sole purpose is to follow the instructions of a woman');

            sendMessage('Obviously cumming is strictly forbidden!');

            sendMessage('So you better be prepared to have your mind washed %Lol%');
        } else {

        }

        return true;
    }


    function onEnd(academyClass) {
        if(CEI_LIMIT.isAllowed() && isChance(25)) {
            sendMessage('Remember: All pre cum produced must be consumed!');
        }
    }

    function isAvailable(academyClass) {
        return SISSY_LIMIT.isAllowed();
    }

    registerClass("Hypnosis", 5, null, [DAY_OF_WEEK.MONDAY, DAY_OF_WEEK.TUESDAY, DAY_OF_WEEK.WEDNESDAY, DAY_OF_WEEK.THURSDAY, DAY_OF_WEEK.FRIDAY, DAY_OF_WEEK.SATURDAY], getTasks, getModifiers, getExam, onStart, onEnd, isAvailable)
}