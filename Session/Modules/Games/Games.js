const GAME_STROKING = 0;
const GAME_PARACHUTE = 1;
const GAME_CBT = 2;
const GAME_CHASTITY = 3;
const GAME_BALL_CRUSHER = 4;
const GAME_INFLATABLE_PLUG = 5;
const GAME_GOLD = 6;
const GAME_EDGE = 7;
const GAME_E_STIM = 4;

{
    let pathLength = getPersonalityPath().length;
    let files = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'Modules' + PATH_SEPARATOR + 'Games').listFiles();

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('Games')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }
}

function playSlideshow(durationSeconds, intervalSeconds, category) {
    let date = setDate();
    date.addSecond(durationSeconds);
    while (!date.hasPassed()) {
        showTeaseImage();
        sleep(intervalSeconds);
    }
}