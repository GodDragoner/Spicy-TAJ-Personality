{
    startEdging();
    sendMessage('It messes with your mind when you edge a lot, doesn\'t it?');
    sendMessage('Makes it hard to think, dulls your senses, weakens you');
    startMultipleEdges(4, 8);
    startEdging(getEdgeHoldSeconds());
    sendMessage('But remember, %PetName%...');
    sendMessage('While it weakens your mind, it strengthens your commitment to me');
    startMultipleEdges(3, 12);
    sendMessage('All you have to do right now is obey me and you know you want that');
    sendMessage('You want to be my good boy, don\'t you?'); //QUALITY: @ResponseYes(WantToBeAGoodBoy) @ResponseNo(mbDisappointed)
    startMultipleEdges(5, 9);
    startEdging(getEdgeHoldSeconds());
    sendMessage('Just let that feeling wash over you now');
    startEdging();
    sendMessage('%LetEdgeFade%');
}