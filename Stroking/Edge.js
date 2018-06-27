function startEdging(holdSeconds) {
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
        "Get Your %Cock% on the brink or orgasm!",
        "Gently and slowly bring yourself to the edge...",
        "Edge! Now %SlaveName%!",
    ];

    sendMessage(answers[randomInteger(0, answers.length - 1)], 0);

    if(randomInteger(0, 3) == 2) playSound("Audio/Spicy/Stroking/Edge/*.mp3");

    addEdge();
    setDate(VARIABLE_EDGE_STARTED_DATE);
    startEdge();
    startStroking(randomInteger(150, 200));
    sendEdgeTaunts();
    stopStrokingEdgeMessage();
    endEdge();

    if(holdSeconds !== undefined) {
        sendHoldEdgeTaunts(holdSeconds);
    }

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
        if(isOnEdge()) {
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
    let iterationsToGo = randomInteger(10, 25);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        seconds -= millisecondsToWait/1000;

        if(seconds <= 0) {
            break;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        sleep(millisecondsToWait, "MILLISECONDS");
    }

    run("Stroking/Taunt/HoldEdge/*.js");

    //Start the whole thing all over again
    sendHoldEdgeTaunts();
}

function addEdge() {
    setVar(VARIABLE_EDGE_COUNTER, getVar(VARIABLE_EDGE_COUNTER, 0) + 1);
    setTempVar(VARIABLE_EDGE_TODAY_COUNTER, getVar(VARIABLE_EDGE_TODAY_COUNTER, 0) + 1);
}