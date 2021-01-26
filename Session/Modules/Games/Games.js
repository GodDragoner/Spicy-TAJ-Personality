const GAME_TYPE = {
    GAME_STROKING: 0,
    GAME_PARACHUTE: 1,
    GAME_CBT: 2,
    GAME_CHASTITY: 3,
    GAME_BALL_CRUSHER: 4,
    GAME_INFLATABLE_PLUG: 5,
    GAME_GOLD: 6,
    GAME_EDGE: 7,
    GAME_E_STIM: 8,
    GAME_ANAL: 9,
    GAME_UNLOCK_CHASTITY: 10,
};


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