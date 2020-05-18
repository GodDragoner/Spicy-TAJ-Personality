{
    if (tryRunOrgasmFetchId()) {
        sendMessage('It seems about time to ruin your orgasm again %EmoteHappy%');
        sendMessage('I love doing that to you...');
        sendMessage('You just going to have to deal with whatever feeling it gives you');
        sendMessage('Maybe you feel frustrated, maybe just empty');
        sendMessage('Maybe you\'re in pain');
        sendMessage('I don\'t care');
        sendMessage('I just care about how horny making you do that makes <i>me</i> %Lol%');
        sendMessage('So stroke...');
        sendMessage('Work up to that edge slowly');
        sendMessage('This is going to be agonizing, and I want to make it as agonizing as possible %Grin%');
        sendMessage('Stroke as fast as you can without quite reaching the edge of orgasm');
        sendMessage('The strokes may be slow, they may be fast, it\'s up to you');
        sendMessage('As long as you keep yourself <i>just</i> below the edge');
        sendMessage('So you can feel that orgasm approaching, but it stays out of reach');
        sendMessage('I want you to think about that ruined orgasm');
        sendMessage('Think about how it\'s going to feel');
        sendMessage('The frustration of getting so close only to have it dribble out helplessly');
        sendMessage('Think about how weak and powerless you feel');
        sendMessage('I\'m going to count you down, so get a bit closer now, %SlaveName%');
        sendMessage('Here it comes, get ready to ruin that orgasm');
        sendMessage('3...');
        sendMessage('2...', 3);
        sendMessage('1...', 6);

        startEdging(0, true, EDGE_END_RUIN);
        waitForCumAnswer();

        if (shouldCEI()) {
            sendEatInstructions();
        }
    }
}