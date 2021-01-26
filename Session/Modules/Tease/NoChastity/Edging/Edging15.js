{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('I\'m going to count you down for the next edge and I want you to hit it at zero');
    sendMessage('So.... 10');
    sendMessage('9');
    sendMessage('8');
    sendMessage('7');
    sendMessage('6');
    sendMessage('5');
    sendMessage('4');
    sendMessage('3');
    sendMessage('2');
    sendMessage('1');

    startEdging();
    sendMessage('%LetEdgeFade%');
    wait(12);
    startMultipleEdges(3, 9);
    sendMessage('Rest while you can %Grin%');
    wait(15);
    startMultipleEdges(3, 9);
    sendMessage('%LetEdgeFade%');
}