//run("Session/StartSession.js");
{
    let mood = 3;
    let hoursSinceLastChange = 1;
    sendDebugMessage(Math.max(0.25, 0.1*(mood*ACTIVE_PERSONALITY_STRICTNESS + 10) - 0.1*hoursSinceLastChange/(Math.max(1, ACTIVE_PERSONALITY_STRICTNESS) + 1)))
}

//unlockChastityCage();