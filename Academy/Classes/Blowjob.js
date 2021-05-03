{
    function getTasks(classObject) {
        let stage = classObject.getCurrentStage();

        let tasks = [];
        let position = getBlowjobTrainingPosition()[1];


        let task = ['Do ' + stage * 3 * randomInteger(5, 10) + ' deepthroats',];

        tasks.push(task);
        pushElementsToOtherArray(position, task);


        tasks.push('Find blowjob porn and copy it for ' + stage * 8 + ' minutes');
        tasks.push('Find deepthroat porn and copy it for ' + stage * 8 + ' minutes');

        task = ['Throatfuck yourself for ' + stage * 3 + ' minutes at ' + (random(5, 10) * 2 + stage * 6) + ' BPM',];

        tasks.push(task);
        pushElementsToOtherArray(position, task);

        tasks.push('Do a random deepthroat roulette on faproulette.co. You may reroll up to 3 different roulette\'s but must stick with the last one');

        task = ['Hold deepthroats for a total of ' + stage * 2 + ' minutes. Only count the time deepthroating.',];

        tasks.push(task);
        pushElementsToOtherArray(position, task);

        task = ['Blow your dildo for ' + stage * 5 + ' minutes. Go balls deep every 30 seconds.',];

        tasks.push(task);
        pushElementsToOtherArray(position, task);

        task = ['Blow your dildo for ' + stage * 5 + ' minutes. Go balls deep every 30 seconds.',
            'However I want you to give it ' + random(5, 10) + ' deepthroats every ' + random(60 - stage * 5, 50 - stage * 5) + ' seconds during the blowjob',
            'I want you to hold the last deepthroat of each cycle for ' + getBlowjobTaskDeepthroatHoldDuration() + ' seconds',
            'During that last deepthroat I want you to rotate the dildo in your throat by 360 degrees ' + randomInteger(2, 5) + ' times',
        ];

        pushElementsToOtherArray(position, task);
        tasks.push(task);

        return tasks;
    }

    function getModifiers(classObject) {

    }

    function getExam(classObject) {
        let stage = classObject.getCurrentStage();

        let exam = [];
        //exam.push('Fuck your ass with the dildo going all the way in and almost all the way out for 10 minutes at 25 bpm');
    }

    function onStart(classObject) {
        let classesTaken = classObject.getClassesTaken();

        //Class started, introduction
        if (classesTaken === 0) {
            sendMessage('Hello %SlaveName%');
            sendMessage('Welcome to your first blowjob class');
            sendMessage('This class will teach you how to give good blowjobs and also how to deepthroat like a true slut');

            if (SISSY_LIMIT.isAllowed()) {
                sendMessage('You will need it for all the cocks you have to make cum into your throat in the future %EmoteHappy%');
            }

            sendMessage('So you\'d better be ready for difficult and unrelenting training %Wicked%');
            sendMessage('So...');
            sendMessage('You can pick any dildo of your choice that you feel works well');

            sendMessage('You may also switch down the road as long as you can do proper deepthroats with it %Grin%');
            sendMessage('After you take on and pass an exam we will upgrade that dildo to a longer one');
            sendMessage('%Now%');
        } else {

        }

        return true;
    }

    function onEnd(academyClass) {

    }

    function isAvailable(academyClass) {
        return getBlowjobLevel() >= 20;
    }

    registerClass("Blowjob", 5, null, [DAY_OF_WEEK.THURSDAY], getTasks, getModifiers, getExam, onStart, onEnd, isAvailable)
}