{

    let generalAnswers = [
        "Stay right there for me",
        "Fuck yes, stay right there",
        "Keep that %Cock% on the razor's edge",
        "Keep that %Cock% right on the edge",
        "Stay right fucking there",
        "Keep suffering right there on the edge for me",
        "Stay right there and ache for me",
        "Keep riding it for me",
        "Stay right there and give me all that suffering",
        "Just ride that edge honey. It feels like your orgasm is so close doesn't it?",
        "Stay there! STAY RIGHT FUCKING THERE!",
        "Ride it %SlaveName%, ride that sweet sweet edge!",
        "Keep that %Cock% right on the edge, don't you dare back off it!",
        "Ride it!",];

    let answers;

    //Only push these if we aren't sending the initial message
    if(!isVar('initialEdgeHold')) {
          answers = generalAnswers.concat([
              "Don't stop %SlaveName% and don't you dare cum",
              "Don't you dare back off of that edge",
              "I love knowing how close you are right now %Grin%",
              "That's it %SlaveName%, stay right there",
              "I want you to stay so fucking close for me",
              "I'd almost feel sorry about making you edge so long if I wasn't having so much fun turning you into a drooling mess",
              "Ohhhh, I know %SlaveName%. I know it's hard to hold. But you have to. You have to.",
              "You should be so close, you're afraid of cuming!",
              "Closer! Get closer for me!",
              "%SlaveName% com'on even closer than that!",
              "Push yourself %SlaveName%, you can get closer than that!",
              "You look so sad, sweating, stroking, trying your best to stay on edge. %Lol%",
              "Don't you dare cum! I will have those balls cut off if you do!",
              "Enjoy it slut, this is the closest thing to orgasm you should ever be!",
              "Enjoy the maximum of stimulation a slave like you should ever have!",
          ]);
    } else {
        //Delete it after the first message
        delVar('initialEdgeHold');
    }

    lockImages();
    sendMessage(findRandomUnusedElement(answers, createHistory('basicHoldingTaunt')), 0);
    showTeaseImage(3);
    unlockImages();
}