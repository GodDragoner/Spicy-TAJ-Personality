/**
 * Start blowing
 * @param bpm The bpm you want to start with
 * @param duration The duration in seconds this should last
 */
function startBlowing(bpm, duration, avoidStop = false) {
    startStroking(bpm);
    sendBlowingTaunts(duration * 1000);

    if (!avoidStop) {
        sendMessage(random("Stop", "You can stop now"), 0);
        stopStroking();
    }
}

function sendBlowingTaunts(duration) {
    //Select a random amount of iterations and we will wait based on that random amount before sending a taunt message
    let iterationsToGo = randomInteger(30, 55);

    //Just how long you want each iteration to take
    const millisecondsToWait = 500;
    //Start our loop and continue until iterationsToGo are equal or less than zero
    while(iterationsToGo > 0) {
        //Has the duration passed
        if(duration <= 0) {
            return;
        }

        //Sub is not on edge, which means we subtract one from our iterations and wait for 500 milliseconds afterwards
        iterationsToGo--;
        duration -= millisecondsToWait;
        sleep(millisecondsToWait, "MILLISECONDS");
    }

    run("Stroking/Taunt/Blowjob/*.js");

    //Start the whole thing all over again
    sendAnalTaunts(duration);
}

function startBlowToy(toy) {
    sendMessage("Okay...");
    let rightToIt = true;
    const caressingTip = isChance(50);

    if(isChance(80)) {

        let target = toy;

        if(caressingTip) {
            target = "tip";
        }

        sendMessage("Start by caressing the " + target);
        sendMessage("Give it some nice gentle kisses", 5);
        sendMessage("There we go...");
        sendMessage("Show it some love", 5);

        const doLicking = isChance(50);
        rightToIt = !doLicking;

        if(doLicking) {
            if(caressingTip) {
                sendMessage("Now start licking the tip");
                sendMessage("Draw some nice circles around the tip");
                sendMessage("Be creative and make good use of your tongue", 5);

                for(let x = 0; x < randomInteger(2, 4); x++) {
                    //TODO: Only if cuckholding is a thing and don't repeat lines
                    sendMessage(random("Keep going", "Keep it up %SlaveName%", "Lick it... Gentle and slowly", "Come on %SlaveName%. Show some passion!", "Lick it like it was my lover's cock"), 10);
                }
            }

            //Increase chance if we didn't just play with the tip
            if(isChance(50) && tip || !tip && isChance(80)) {
                sendMessage("So now...");
                //TODO: Duration based on mood
                sendMessage("Start licking up and down the whole " + toy, randomInteger(10, 20));
                sendMessage("All the way down and up", randomInteger(10, 20));
                sendMessage("Be passionate and imagine it being another men's cock", randomInteger(10, 20));
                //TODO: ASM interactions
                sendMessage("");
            }
        }
    }

    if(rightToIt) {
        sendMessage(random("Let's not tease that " + toy + " too much for now", "Let's get right to it %SlaveName%"));
    } else {
        sendMessage("Next...");
    }

    //Tip only only
    if(isChance(50)) {
        if(caressingTip) {
            sendMessage("Continue with the tip but start blowing the dildo");
            sendMessage("But ONLY the tip")
        } else {
            sendMessage("Start by blowing the tip only");
        }

        startBlowing(30, randomInteger(20, 35), true);
        sendMessage("Now slowly start going further down the " + toy);
    } else {
        sendMessage("Start giving that " + toy + " a nice good blowjob %SlaveName%");
    }

    startBlowing(20, randomInteger(40, 60), false);
    //TODO: More?

    //TODO: Deepthroat
}