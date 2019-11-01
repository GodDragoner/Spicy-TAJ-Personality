const EDGE_END_NORMAL = 0;
const EDGE_END_RUIN = 1;
const EDGE_END_ORGASM = 2;

const EDGE_HOLD_DOM = 0;
const EDGE_HOLD_SHORT = 1;
const EDGE_HOLD_MEDIUM = 2;
const EDGE_HOLD_LONG = 3;

function startEdging(holdSeconds, skipStop = false, endIn = EDGE_END_NORMAL) {
    const answers = [
        "Get to the %EdgeNoun%",
        "Get to the %EdgeNoun% for me",
        "I want you to get close to the edge",
        "Edge for me",
        "Edge now, %SlaveName%",
        "Edge for me %SlaveName%",
        "Get near to the edge, %SlaveName%",
        "Get near to the edge, %SlaveName%",
        "Now... Edge!",
        "Now, edge hard for me. HARD!",
        "Edge for me %SlaveName%. Now",
        "Time to get on the edge! %EmoteHappy% Now",
        "Edge that %Cock% for me, %SlaveName%.  Now",
        "I want you on the edge, now",
        "%Lol%, now edge!",
        "Time for an edge %SlaveName%. Now",
        "Get so close to the edge, you are afraid of coming!",
        "%SlaveName%. Its time to edge, and edge hard for me!",
        "%SlaveName%. Give me an edge, I love to see you edge!",
        "Get to the edge for me!",
        "Get Your %Cock% on the brink of orgasm!",
        "Gently and slowly bring yourself to the edge...",
        "Edge! Now %SlaveName%!",
    ];

    //If we have any clamps on the cock we should move them away
    redistributeClampsForStroking();

    sendMessage(answers[randomInteger(0, answers.length - 1)], 0);

    if(randomInteger(0, 3) == 2) playSound("Audio/Spicy/Stroking/Edge/*.mp3");

    addEdge();
    setDate(VARIABLE_EDGE_STARTED_DATE);
    startEdge();

    //While in chastity we don't need stroking sounds
    if(!isInChastity()) {
        startStroking(randomInteger(150, 200));
    }

    sendDebugMessage('Starting Edge Taunts');

    sendEdgeTaunts();

    sendDebugMessage('Sub send edge message');

    if(holdSeconds !== undefined && holdSeconds !== 0) {
        stopStroking();

        //Show the initial message to tell the sub to stay on the edge
        setTempVar('initialEdgeHold', true);
        run("Stroking/Taunt/HoldEdge/BasicHoldingTaunts.js");

        sendHoldEdgeTaunts(holdSeconds);
    }

    if(isStroking()) {
        stopStroking();
    }


    sendDebugMessage('Ending edge');

    if(!skipStop) {
        sendDebugMessage('Stop edge message is not skipped');
        stopStrokingEdgeMessage();
    }

    sendDebugMessage('Checking for edge orgasm');

    if(endIn == EDGE_END_RUIN) {
        sendMessage('%RuinForMe%');
        registerRuin();
    } else if(endIn == EDGE_END_ORGASM) {
        sendMessage('%CumForMe%');
        registerOrgasm();
    }

    sendDebugMessage('Ending edge internally');

    endEdge();

    sendDebugMessage('Deleting Edge Variable');

    delVar(VARIABLE_EDGE_STARTED_DATE);
}

function sendEdgeTaunts() {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(25, 55);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        //Is the sub on the edge?
        if(isOnEdge() || !isEdging()) {
            return;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        sleep(millisecondsToWait, "MILLISECONDS");
    }

    run("Stroking/Taunt/Edging/*.js");

    //Start the whole thing all over again
    sendEdgeTaunts();
}

function sendHoldEdgeTaunts(seconds) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(8, 16);

    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        seconds--;

        if(seconds <= 0) {
            return;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        sleep(1);
    }

    run("Stroking/Taunt/HoldEdge/*.js");

    //Start the whole thing all over again
    sendHoldEdgeTaunts(seconds);
}

function getEdgeHoldSeconds(edgeHold = EDGE_HOLD_DOM) {
    //TODO: Edge hold seconds based on sub experience?
    let mood = 0;
    let strictness = ACTIVE_PERSONALITY_STRICTNESS;

    switch (edgeHold) {
        case EDGE_HOLD_DOM:
            mood = getMood();
            break;
        case EDGE_HOLD_SHORT:
            mood = 0;
            break;
        case EDGE_HOLD_MEDIUM:
            mood = 2;
            break;
        case EDGE_HOLD_LONG:
            mood = 4;
            break;
    }

    return randomInteger((mood + 1)*(5 + strictness*4), (mood + 1)*(10 + strictness*4))
}

function addEdge() {
    setVar(VARIABLE_EDGE_COUNTER, getVar(VARIABLE_EDGE_COUNTER, 0) + 1);
    setTempVar(VARIABLE_EDGE_TODAY_COUNTER, getVar(VARIABLE_EDGE_TODAY_COUNTER, 0) + 1);
}