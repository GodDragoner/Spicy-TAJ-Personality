addResponseRegex('(may|May).*bathroom');
addResponseRegex('(may|May).*toilet');
addResponseRegex('(may|May).*pee');

function useBathroomResponse(message) {
    let pauseStroke = pauseStroking();

    sendMessageBasedOnSender('You may use the bathroom %SlaveName% but...');
    sendMessageBasedOnSender(random('You must urinate sitting in the air, like a woman does when there is no toilet available', 'You must pee like a dog does... by lifting your leg',
        'You may not touch %MyYour% cock while peeing', 'You must stay hard'));

    sendMessageBasedOnSender('Tell me when you have returned');
    waitForDone(10000000);

    resumeStroking(pauseStroke);
}