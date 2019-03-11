
function stopStrokingMessage() {
    stopStroking();
    const answers = [
        "Stop stroking",
        "Hands off",
        "That's enough, hands off",
        "Let go and stop stroking",
        "Imagine me backing off your %Cock%, right now. Hands off",
        "That's enough, let go of your %Cock%",
        "And... stop",
        "Stop and let go of your %Cock%",
        "You should stop now",
        "You should let go of your %Cock% now",
        "I want you to stop",
        "Stop stroking for me",
        "Take your hands off your %Cock%",
        "Let go of your %Cock%",
        "Stop and take your hands off your %Cock%",
        "Quit stroking",
        "No more stroking, hands off",
        "No more stroking, just let go of your %Cock%",
        "Okay, stop",
        "Okay That's enough for now. You're going to squirt before I'm done with you."
    ];

    sendMessage(answers[randomInteger(0, answers.length - 1)], 0);

    if(randomInteger(0, 5) > 0) {
        playSound("Audio/Spicy/Stroking/StopStroking/*.mp3");
    }
}

function stopStrokingEdgeMessage() {
    //TODO: Different messages
    stopStrokingMessage();
}