const END_GAME_STANDARD_ID = 0;
const END_GAME_ANAL_ORGASM = 1;
const END_GAME_LOCKTOBER = 2;

let SKIP_END_GAME = false;

let END_GAMES = [];

{
    let pathLength = getPersonalityPath().length;
    let files = getFileOrCreate(getPersonalityPath() + PATH_SEPARATOR + 'Session' + PATH_SEPARATOR + 'End' + PATH_SEPARATOR + 'Games').listFiles();

    for (let index = 0; index < files.length; index++) {
        let file = files[index];
        if (!file.getName().contains('EndGames.js')) {
            let path = file.getPath();
            run(path.substring(path.indexOf(getPersonalityPath()) + pathLength + 1, path.length));
        }
    }

    sendDebugMessage('Loaded ' + END_GAMES.length + ' end games');
}

function runEndGame() {
    let endGame = getEndGameById(getVar(VARIABLE.ACTIVE_END_GAME_ID));

    if(!isUndefined(endGame)) {
        return endGame.run();
    }

    /*switch (getVar(VARIABLE.ACTIVE_END_GAME_ID)) {
        case END_GAME_STANDARD_ID:
            run('Session/End/Games/Standard.js');
            break;
        case END_GAME_ANAL_ORGASM:
            run('Session/End/Games/AnalOrgasmEndGame.js');
            break;
    }*/
}

function registerEndGame(id) {
    let endGame = {
        id: id,

        run: function() {
            sendMessage('Default endgame run implementation');
        },

        sendIntroduction: function() {
            sendMessage('Default endgame sendIntroduction implementation');
        },

        canBeActivated: function() {
            sendMessage('Default endgame canBeActivated implementation');
            return false;
        },
    };

    END_GAMES.push(endGame);
    return endGame;
}

function getEndGameById(id) {
    for(let x = 0; x < END_GAMES.length; x++) {
        if(END_GAMES[x].id === id) {
            return END_GAMES[x];
        }
    }

    sendDebugMessage('Unknown end game id ' + id);
    return null;
}


function pickEndGame() {

}