{
    startEdging();
    sendMessage('%LetEdgeFade%');
    sendMessage('Today\'s session is going to be another of our edge training sessions');

    if (sendYesOrNoQuestion('Exciting, isn\'t it? %EmoteHappy%')) {
        sendMessage("I'm glad you feel that way, %SlaveName%");
    } else {
        sendMessage("Oh... I guess you do really need another round of edge training then");
    }

    sendMessage("It's going to be frustrating, yes");
    sendMessage("But you know that it's worth it in the end");

    if (!isKneeling()) {
        startKneeling();
        sendMessage('So get down on all fours like a good edge puppy');
    }

    startEdging();

    sendMessage("There are 2 reasons why all this frustration is worth it");
    sendMessage("I think you know what they are, but it can't hurt to repeat them");
    startEdging();
    sendMessage('Reason number 1 is the <i>obvious</i> one');
    sendMessage("Eventually I will allow you to cum and when that happens...");
    sendMessage("That orgasm is going to feel sooooooo good %EmoteHappy%");
    sendMessage("The longer you edge, the better it's going to feel");
    startEdging();
    sendMessage('Reason number 2 is the <i>important</i> one');
    sendMessage("Every single edge strengthens my control over you");
    sendMessage("Each time you reach the brink of orgasm and back off...");
    sendMessage("The ties that bind you to me get tighter");
    sendMessage("And your resolve to submit to me settles deeper in your weak little mind");
    startMultipleEdges(5, 7);
    sendMessage("When I do allow you to cum, the inevitable happens");
    sendMessage("Your resolve to serve me weakens");
    sendMessage("But even if when the fog of sexual frustration has cleared from your mind");
    sendMessage("Each and every one of these edges will still linger in the back of your mind");
    startEdging();
    sendMessage("You will never be completely free from these chains, %SlaveName%");
    sendMessage("You are and always will be a submissive");
    sendMessage("You can't change how your mind works even if you wanted to");
    startMultipleEdges(3, 8);
    sendMessage("With each and every edge");
    sendMessage("More sexual frustration settles in %MyYour% %Balls%");
    sendMessage("And with each and every edge");
    sendMessage("The desire to submit to me strengthens in your mind");
    startEdging();
    sendMessage("You wanted this, %PetName%");
    sendMessage('And now you are powerless to stop it');
    startEdging();
    sendMessage("If that powerlessness sounds like a bad thing to you, it isn't");
    sendMessage("It's far from a bad thing");
    sendMessage("This is who you are, %SlaveName%");
    sendMessage("There's no reason to fight it");
    startEdging();
    sendMessage("%LetEdgeFade%");
    sendMessage("Imagine yourself kneeling on the floor in front of me");
    let feelsRight = sendYesOrNoQuestionTimeout('It feels so <i>right</i>, doesn\'t it?', 9);

    if (feelsRight === ANSWER_YES) {
        sendMessage('That\'s how deep your desire to submit is, %SlaveName%');
    } else if (feelsRight === ANSWER_NO) {
        sendMessage('Then you need a lot more training, %SlaveName% %EmoteSad%');
        changeMeritMedium(true);
    }

    sendMessage("I own you and I own your %Cock%");
    sendMessage("And I want that %Cock% hard and leaking and throbbing and aching for me");
    sendMessage("I want it to be able to edge endlessly without release");
    startMultipleEdges(2, 8);
    sendMessage("I'm going to make you hold the next few edges");
    sendMessage("And then I'll let you have a short break");
    startEdging(getEdgeHoldSeconds());
    sendMessage("Good boy");
    sendMessage("Let's do 2 more %EmoteHappy%");
    startEdging(getEdgeHoldSeconds());
    sendMessage("You're going to hold 1 more edge for me now");
    sendMessage("That doesn't mean today's training is over of course");
    sendMessage("But I do want to give you a moment to recover");
    startEdging(getEdgeHoldSeconds());
    sendMessage("%LetEdgeFade%");
    stopKneeling();
    sendMessage("You've made it this far, edge puppy");
    sendMessage('Not bad... not too bad at all... %Grin%');
}