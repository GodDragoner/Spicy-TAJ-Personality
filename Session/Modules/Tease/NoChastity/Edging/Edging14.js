{
    sendMessage('You know, the tricky thing for me about making you edge is this..');
    sendMessage('I can never be sure if I\'m edging you enough');
    sendMessage('Of course, when you start begging for mercy I know I\'m on the right track %Grin%');
    sendMessage('But if not then there\'s always that nagging feeling...');
    sendMessage('That maybe I\'m not pushing you hard enough');

    startMultipleEdges(7, 9);
    startEdging(getEdgeHoldSeconds());
    sendMessage('So let me try to push you a bit... to see if you start begging...');
    startMultipleEdges(5, 8);
    startEdging(getEdgeHoldSeconds());
    sendMessage('I\'m sure you can still handle this... just a couple of edges, right? %EmoteHappy%');
    startMultipleEdges(9, 10);
    startEdging(getEdgeHoldSeconds());
    sendMessage('Let\'s try something else...');

    //QUALITY: Find videos with a min length of holds seconds
    let holdSeconds = getEdgeHoldSeconds();
    startEdging(0, true);
    holdEdge(holdSeconds, true, createMediaCategoryVideo(getRandomMediaCategory()));

    sendMessage('I liked that video, let me see if I can find another one... %EmoteHappy%') ;

    holdSeconds = getEdgeHoldSeconds();
    startEdging(0, true);
    holdEdge(holdSeconds, true, createMediaCategoryVideo(getRandomMediaCategory()));

    sendMessage('Does this help you cool down? %Lol%');
    showCategoryVideo(getRandomMediaCategory());
    watchVideoForDuration(30);

    startMultipleEdges(3, 9);
    sendMessage('You\'re holding up admirably, %SlaveName% %Smile%');
    startMultipleEdges(3, 8);
    sendMessage('%LetEdgeFade%');
}