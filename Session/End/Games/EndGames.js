const END_GAME_STANDARD_ID = 0;

let SKIP_END_GAME = false;

function runEndGame() {
    switch (getVar(VARIABLE.ACTIVE_END_GAME_ID)) {
        case END_GAME_STANDARD_ID:
            run('Session/End/Games/Standard.js');
            break;
    }
}