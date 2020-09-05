{
    function getTasks(classObject) {
        let stage = classObject.getCurrentStage();

        let tasks = [];
        tasks.push('Sit on your dildo for ' + stage*8 + ' minutes while applying constant pressure to push it deeper');
        tasks.push('Fuck your dildo for ' + stage*8 + ' as deep as it will go');
        tasks.push('Find some anal porn of at least  ' + stage*8 + ' minutes. Try to copy it using your dildo as well as possible');
        tasks.push('Ride the dildo kneeling for ' + stage*8 + ' as deep as it will go');
        tasks.push('Ride the dildo squatting for ' + stage*8 + ' as deep as it will go');
        tasks.push('Sit on your dildo for ' + stage*8 + ' minutes while applying constant pressure to push it deeper');
        tasks.push('Put in your ' + getBigButtplug(true).name + ' and pull it out to the point where its thickest part is stretching your ass. Hold for 10 seconds and repeat ' + stage*20 + ' times');
        tasks.push('Fuck your dildo for  ' + stage*300 + ' thrusts as deep as it will go');
        tasks.push('Fuck yourself with your ' + getBigButtplug(true).name + ' for ' + stage*8 + ' minutes');
        tasks.push('Before going to bed fuck your ass at 120 bpm as deep as it will go with your dildo for ' + stage*2 + ' minutes then plug yourself with your ' + getBigButtplug(true).name + ' for the night.');

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
        if(classesTaken === 0) {

        }
    }

    registerClass("Anal Stretching", 5, null, [DAY_OF_WEEK.MONDAY, DAY_OF_WEEK.SATURDAY], getTasks, getModifiers, getExam, onStart)
}