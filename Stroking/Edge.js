const EDGE_END_NORMAL = 0;
const EDGE_END_RUIN = 1;
const EDGE_END_ORGASM = 2;

const EDGE_HOLD_DOM = 0;
const EDGE_HOLD_SHORT = 1;
const EDGE_HOLD_MEDIUM = 2;
const EDGE_HOLD_LONG = 3;

let CURRENTLY_EDGING = false;

function startMultipleEdges(edges, breakInSeconds = 5) {
    for(let x = 0; x < edges; x++) {
        startEdging(0);
        sleep(breakInSeconds);
    }
}

function startEdging(holdSeconds = 0, skipStop = false, endIn = EDGE_END_NORMAL) {
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
        "Get so close to the edge, you are afraid of cumming!",
        "%SlaveName%. It's time to edge, and edge hard for me!",
        "%SlaveName%. Give me an edge, I love to see you edge!",
        "Get to the edge for me!",
        "Get Your %Cock% on the brink of orgasm!",
        "Gently and slowly bring yourself to the edge...",
        "Edge! Now %SlaveName%!",
    ];

    if(isInChastity()) {
        readyForVibratingCage();
    }

    //If we have any clamps on the cock we should move them away
    readyForStroking();

    setAudioBlocked(true);
    sendMessage(answers[randomInteger(0, answers.length - 1)], 0);
    setAudioBlocked(false);

    if(isChance(33)) playSound("Audio/Spicy/Stroking/Edge/*.mp3");

    addEdge();
    setDate(VARIABLE.EDGE_STARTED_DATE);
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

        holdSeconds(holdSeconds);
    }

    sendDebugMessage('Ending edge');

    if(!skipStop) {
        sendDebugMessage('Stop edge message is not skipped');

        setAudioBlocked(true);
        stopStrokingEdgeMessage();
        setAudioBlocked(false);
    }

    sendDebugMessage('Checking for edge orgasm');

    if(endIn == EDGE_END_RUIN) {
        setAudioBlocked(true);
        sendMessage('%RuinForMe%', 0);
        setAudioBlocked(false);
        registerRuin();
    } else if(endIn == EDGE_END_ORGASM) {
        setAudioBlocked(true);
        sendMessage('%CumForMe%', 0);
        setAudioBlocked(false);
        registerOrgasm();
    }

    if(isStroking()) {
        stopStroking();
    }

    sendDebugMessage('Ending edge internally');

    endEdge();

    sendDebugMessage('Deleting Edge Variable');

    delVar(VARIABLE.EDGE_STARTED_DATE);
}

/**
 * Holds an edge for a given amount of seconds
 * @param holdSeconds The amount of seconds the edge is supposed to be held for
 * @param disableTaunts Whether taunts should be enabled or disabled
 * @param video Custom video object with a play function
 */
function holdEdge(holdSeconds, disableTaunts = false, video = null) {
    //Show the initial message to tell the sub to stay on the edge
    setTempVar('initialEdgeHold', true);

    setAudioBlocked(true);
    run("Stroking/Taunt/HoldEdge/BasicHoldingTaunts.js");
    setAudioBlocked(false);

    if(!disableTaunts) {
        if(video !== null) {
            video.play();
        }

        sendHoldEdgeTaunts(holdSeconds);

        if(video !== null) {
            stopVideo();
        }
    } else {
        if(video !== null) {
            video.play();
            watchVideoForDuration(holdSeconds);
        } else {
            sleep(holdSeconds);
        }
    }
}

function sendEdgeTaunts() {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(25, 55);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        //Is the sub on the edge?
        if(isOnEdge() || !isEdging() || !isVar(VARIABLE.EDGE_STARTED_DATE)) {
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
    let strictness = getStrictnessForCharacter();

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
    setVar(VARIABLE.EDGE_COUNTER, getVar(VARIABLE.EDGE_COUNTER, 0) + 1);
    setTempVar(VARIABLE.EDGE_TODAY_COUNTER, getVar(VARIABLE.EDGE_TODAY_COUNTER, 0) + 1);
}