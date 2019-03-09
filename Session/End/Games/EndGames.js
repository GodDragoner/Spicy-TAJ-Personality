const END_GAME_STANDARD_ID = 0;

function runEndGame() {
    switch (getVar(VARIABLE_ACTIVE_END_GAME_ID)) {
        case END_GAME_STANDARD_ID:
            run('Session/End/Games/Standard.js');
            break;
    }
}