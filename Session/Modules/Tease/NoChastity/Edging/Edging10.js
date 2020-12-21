{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('I know you want this, %SlaveName%');

    sendMessage('Don\'t try to resist it');
    startMultipleEdges(5, 9);
    sendMessage('Cool down while you look at this...');

    startMultipleEdges(2, 3);

    showCategoryVideo(getRandomMediaCategory());
    watchVideoForDuration(30);

    startMultipleEdges(2, 6);

    showCategoryVideo(getRandomMediaCategory());
    watchVideoForDuration(25);

    startMultipleEdges(3, 6);

    showCategoryVideo(getRandomMediaCategory());
    watchVideoForDuration(35);

    startEdging();

    showCategoryVideo(getRandomMediaCategory());
    watchVideoForDuration(20);

    while(true) {
        startEdging();
        showCategoryVideo(getRandomMediaCategory());
        watchVideoForDuration(45);

        if(isChance(40)) {
            break;
        }
    }

    startEdging(getEdgeHoldSeconds());
    sendMessage('%LetEdgeFade%');
}