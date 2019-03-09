if (tryRunModuleFetchId()) {
    setVar(VARIABLE_STROKE_TRAINING_ACTIVE, true);
    if (isStroking()) {
        sendMessage("Stop stroking %SlaveName%", 0);
        stopStroking();
        sendMessage("Trust me. You'll need the pause and it won't last too long anyway %Grin%");

        if (getVar(VARIABLE_STROKE_TRAININGS_DONE, 0) == 0) {
            sendMessage("So...");
        } else {
            sendMessage("Because...");
            sendMessage("It's time for your stroke training %EmoteHappy%")
        }
    } else {
        sendMessage("Okay %SlaveName%");
        if (getVar(VARIABLE_STROKE_TRAININGS_DONE, 0) != 0) {
            sendMessage("I think it's time for some stroke training again %EmoteHappy%")
        }
    }

    if (setTempVar(VARIABLE_STROKE_TRAININGS_DONE, 0) == 0) {
        sendMessage("Right now I want to try something new");
        sendMessage("I call it \"stroke training\"");
        sendMessage("Cock'xercise you might call it %Lol%");
        sendMessage("Well!");
        sendMessage("It's rather simple");
        sendMessage("At the very beginning you'll start with a warmup round that ends with you edging once");
        sendMessage("Afterwards the real fun begins");
        sendMessage("You have 3 \"lives\"");
        sendMessage("So every time you are edging during this training you'll tell me about it and then you'll lose one life");
        sendMessage("When you edged a total of 4 times, that is 1 warmup edge and 3 training edges, the training will end");
        sendMessage("After each edge you'll be given a short break");
        sendMessage("You will be stroking to a slideshow and you are not permitted to look away from the images");
        sendMessage("You will stroke to the beat and you will only stop stroking once you edge");
        sendMessage("It goes without saying that cumming/ejaculating is NOT allowed...");
        sendMessage("At the end I will grant you a level ranging from 1 - 50 based on your performance");
        sendMessage("Of course you'll start at level 1");
        sendMessage("The goal is to simply reach the highest level possible");
        sendMessage("If you dream about being anything else than a house slave I suggest you aim for level 50 %Lol%");
        sendMessage("The beat patterns will also increase in difficulty");
        sendMessage("It requires some serious stamina to go above level 40");
        sendMessage("Oh and on a final note...");
        sendMessage("After each training session you will be reduced by 5 levels unless you're below level 10...");
        sendMessage("So lets stop wasting time and just get you started %Lol%");
    }

    setTempVar(VARIABLE_STROKE_TRAINING_ACTIVE, true);
    setVar(VARIABLE_STROKE_TRAININGS_DONE, getVar(VARIABLE_STROKE_TRAININGS_DONE, 0) + 1);

    sendMessage("We are gonna start by warm you up a little... ");
    sendMessage("Start stroking slowly");
    sendMessage("When you start to hear the pace you are gonna stroke it to the beat");

    startStroking(60);

    for (let x = 0; x < randomInteger(18, 25); x++) {
        showTeaseImage(5);
    }

    stopStrokingMessage();
    sleep(5);

    startEdging();
    sendMessage("%LetEdgeFade%");
    sleep(randomInteger(3, 7));

    sendMessage("Rest a minute while I look up your level");
    sendMessage("But be ready");
    sendMessage("We will start the moment you hear the beat");
    sendMessage("Make me proud %SlaveName%");
    startStrokeTraining();

}

function startStrokeTraining() {
    let timeToIncreaseLevel = 0;
    setTempVar('timeToIncreaseLevel', timeToIncreaseLevel);

    let level = getVar(VARIABLE_STROKE_TRAINING_LEVEL, 1);

    while (true) {
        timeToIncreaseLevel = getVar('timeToIncreaseLevel');

        if (timeToIncreaseLevel >= 50) {
            timeToIncreaseLevel = 0;
            incrementVar(VARIABLE_STROKE_TRAINING_LEVEL, 1);
            level += 1;
            if (level >= 50) {
                break;
            }
        }

        playRandomStrokeTrainingBeat(level);

        timeToIncreaseLevel += randomInteger(0, 10);
        setTempVar('timeToIncreaseLevel', timeToIncreaseLevel);

        showTeaseImage(randomInteger(5, 10));

        if (isChance(10)) continue;
        showTeaseImage(randomInteger(5, 10));

        if (isChance(20)) continue;
        showTeaseImage(randomInteger(5, 10));

        if (isChance(30)) continue;
        showTeaseImage(randomInteger(5, 10));
    }

    if (level >= 50) {
        sendMessage("You're at the highest level...", "You're at the very top", "You reached the highest level!");
        if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
            sendMessage("I'm impressed!");
        }

        sendMessage("Keep it up %SlaveName%");
        endStrokeTraining();
        return;
    }
}

function strokeTrainingEdge() {
    setTempVar(VARIABLE_STROKE_TRAINING_EDGES_DONE, getVar(VARIABLE_STROKE_TRAINING_EDGES_DONE, 0) + 1);

    stopStrokingEdgeMessage();
    sendMessage("%LetEdgeFade%");

    let level = getVar(VARIABLE_STROKE_TRAINING_LEVEL);

    if (getVar(VARIABLE_STROKE_TRAINING_EDGES_DONE) == 3) {
        sendMessage(random("%Grin%", "%Lol%", "%EmoteHappy%"));
        sendMessage(random("Couldn't handle more huh?", "I guess that was it huh", "So \"no more\" I guess..."));

        if (level >= 50) {
            if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
                sendMessage(random("I guess I can't expect more from you when you're at level 50 %Lol%", "I suppose I shouldn't expect more since 50 is the very top %Grin%", "Bravo, you reached level 50!", "Good job, you reached level 50!", "Oh my, you reached level 50!"));
                addMerits(35);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
                sendMessage(random("Level 50... Good!", "There is hope for you slave", "You did good %SlaveName", "You should feel a little proud slave"));
                addMerits(30);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
                sendMessage(random("Well well I suppose that was okay", "Oh wauw you actually went higher than level 20...", "I'm surprised you even lasted for a few minutes..."));
                addMerits(25);
            }
        } else if (level > 40) {
            if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
                sendMessage(random("You are above level 40!", "Well done!", "Excellent job", "You did good %SlaveName", "Bravo %SlaveName", "That was excellent work %SlaveName", "I'm applauding you %SlaveName%"));
                addMerits(25);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
                sendMessage(random("It seems you did quite alright today!", "Oh my you made it passed level 40...", "Well it seem you made it pass level 40"));
                addMerits(20);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
                sendMessage(random("Not at level 50 huh...", "Oh you actually went higher than 40", "I feel like you've cheated a little..."));
                addMerits(10);
            }
        } else if (level > 30) {
            if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
                sendMessage(random("You did okay", "You effort was mediocre", "I must admit I expected a little more", "I suppose I really wasn't expecting much more from you"));
                addMerits(10);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
                sendMessage(random("Above 30 is alright slave", "Well below 40 is still OK", "You could probably do better... Maybe...", "You need to work harder slave"));
                addMerits(5);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
                sendMessage(random("Below level 40 huh...", "Oh wauv you do absolutely not impress...", "I was expecting more from you %SlaveName%"));
                addMerits(-10);
            }
        } else if (level > 20) {
            //TODO: Actually lock up the slave
            if (ACTIVE_PERSONALITY_STRICTNESS == 0) {
                sendMessage(random("I did expect more...", "Below 30 is for cuckolds...", "Below 30 isn't worth anything...", "You went below 30 you lousy fuck.."));
                addMerits(-10);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 1) {
                sendMessage(random("Going below 30 makes me consider permanent chastity for you...", "Below 30 does make me think about locking you up...", "With a low score like that I feel sad for you..."));
                addMerits(-15);
            } else if (ACTIVE_PERSONALITY_STRICTNESS == 2) {
                sendMessage(random("Wow, your score is ridiculous!", "I guess your %Cock% is crying for its %ChastityCage% with such a low score..."));
                addMerits(-25);
            }
        } else {
            sendMessage("Oh well that was it for your stroke training today!");
            sendMessage("Not reaching level 20 is so pitiful");
            sendMessage("You will never be able to please a woman %Lol%");
            addMerits(-35);
        }

        if (level < 10) {
            sendMessage("Since you're pathetic and haven't even gone above level 10 I'm not decreasing your level...");
        } else {
            incrementVar(VARIABLE_STROKE_TRAINING_LEVEL, -5);
        }

        endStrokeTraining();
        return;
    }

    stopStrokingEdgeMessage();
    sendMessage("%LetEdgeFade%");
    setTempVar('timeToIncreaseLevel', getVar('timeToIncreaseLevel') - 15);
    sendMessage("Rest before you start again");
    sleep(randomInteger(10, 25));
    startStrokeTraining();
}

function endStrokeTraining() {
    //run("Session/Modules/DecideModule.js");
}

function playRandomStrokeTrainingBeat(level) {
    stopAudio();

    const beats = [
        "Audio/Spicy/Modules/StrokeTraining/A.mp3",
        "Audio/Spicy/Modules/StrokeTraining/B.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat1.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/A.mp3",
        "Audio/Spicy/Modules/StrokeTraining/B.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat1.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/B.mp3",
        "Audio/Spicy/Modules/StrokeTraining/B.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat1.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/B.mp3",
        "Audio/Spicy/Modules/StrokeTraining/C.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat1.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/C.mp3",
        "Audio/Spicy/Modules/StrokeTraining/C.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat1.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/C.mp3",
        "Audio/Spicy/Modules/StrokeTraining/D.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/D.mp3",
        "Audio/Spicy/Modules/StrokeTraining/D.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/D.mp3",
        "Audio/Spicy/Modules/StrokeTraining/E.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/E.mp3",
        "Audio/Spicy/Modules/StrokeTraining/E.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/E.mp3",
        "Audio/Spicy/Modules/StrokeTraining/F.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyBeat2.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/F.mp3",
        "Audio/Spicy/Modules/StrokeTraining/F.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/F.mp3",
        "Audio/Spicy/Modules/StrokeTraining/G.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/G.mp3",
        "Audio/Spicy/Modules/StrokeTraining/G.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/G.mp3",
        "Audio/Spicy/Modules/StrokeTraining/H.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/H.mp3",
        "Audio/Spicy/Modules/StrokeTraining/H.mp3",
        "Audio/Spicy/Modules/StrokeTraining/MediumBeat.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/H.mp3",
        "Audio/Spicy/Modules/StrokeTraining/I.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/I.mp3",
        "Audio/Spicy/Modules/StrokeTraining/I.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/J.mp3",
        "Audio/Spicy/Modules/StrokeTraining/I.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/J.mp3",
        "Audio/Spicy/Modules/StrokeTraining/J.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/J.mp3",
        "Audio/Spicy/Modules/StrokeTraining/K.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleVeryEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/K.mp3",
        "Audio/Spicy/Modules/StrokeTraining/K.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/K.mp3",
        "Audio/Spicy/Modules/StrokeTraining/L.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/L.mp3",
        "Audio/Spicy/Modules/StrokeTraining/L.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/L.mp3",
        "Audio/Spicy/Modules/StrokeTraining/M.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/M.mp3",
        "Audio/Spicy/Modules/StrokeTraining/M.mp3",
        "Audio/Spicy/Modules/StrokeTraining/EasyToHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/M.mp3",
        "Audio/Spicy/Modules/StrokeTraining/N.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/N.mp3",
        "Audio/Spicy/Modules/StrokeTraining/N.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/N.mp3",
        "Audio/Spicy/Modules/StrokeTraining/O.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/O.mp3",
        "Audio/Spicy/Modules/StrokeTraining/O.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/O.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/P.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Q.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Q.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Q.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Q.mp3",
        "Audio/Spicy/Modules/StrokeTraining/R.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/R.mp3",
        "Audio/Spicy/Modules/StrokeTraining/R.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/R.mp3",
        "Audio/Spicy/Modules/StrokeTraining/S.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/S.mp3",
        "Audio/Spicy/Modules/StrokeTraining/S.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/S.mp3",
        "Audio/Spicy/Modules/StrokeTraining/T.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/T.mp3",
        "Audio/Spicy/Modules/StrokeTraining/T.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToEasy.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/T.mp3",
        "Audio/Spicy/Modules/StrokeTraining/U.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/U.mp3",
        "Audio/Spicy/Modules/StrokeTraining/U.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/U.mp3",
        "Audio/Spicy/Modules/StrokeTraining/V.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/V.mp3",
        "Audio/Spicy/Modules/StrokeTraining/V.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/V.mp3",
        "Audio/Spicy/Modules/StrokeTraining/W.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardToMedium.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/W.mp3",
        "Audio/Spicy/Modules/StrokeTraining/W.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardBite.mp3",
        "Audio/Spicy/Modules/StrokeTraining/W.mp3",
        "Audio/Spicy/Modules/StrokeTraining/X.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHard.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardBite.mp3",
        "Audio/Spicy/Modules/StrokeTraining/X.mp3",
        "Audio/Spicy/Modules/StrokeTraining/X.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHardest.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardBite.mp3",
        "Audio/Spicy/Modules/StrokeTraining/X.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Y.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHardest.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardBite.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Y.mp3",
        "Audio/Spicy/Modules/StrokeTraining/Y.mp3",
        "Audio/Spicy/Modules/StrokeTraining/CircleHardest.mp3",
        "Audio/Spicy/Modules/StrokeTraining/HardBite.mp3",
    ];

    playAudio(beats[randomInteger((level - 1) * 4, (level - 1) * 4 + 3)]);
}