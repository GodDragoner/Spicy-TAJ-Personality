{
    if (tryRunOrgasmFetchId()) {
        if (!feelsLikePunishingSlave()) {
            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();
        } else {
            sendMessage("Alright, I want to let you cum %GeneralTime%");
            tieBalls(true);
            sendMessage("The thing is, I'm not sure you've quite earned it...");
            sendMessage("I want you to go get a wooden spoon or a ruler or something similar");
            sendMessage("You can cum %GeneralTime% but you have to hurt those %Balls% for me first %Grin%");

            sendMessage('I\'m going to count from 1 to 10 and with each number you will smack %MyYour% %Balls%');
            sendMessage("And you'd better do it hard!");

            sendMessage("Here we go...");
            sendMessage("ONE");
            sendMessage("TWO");
            sendMessage("THREE");
            sendMessage("FOUR");
            sendMessage("FIVE");
            sendMessage("SIX");
            sendMessage("SEVEN");
            sendMessage("EIGHT");
            sendMessage("NINE");
            sendMessage("TEN!!!");
            sendMessage("Awww my poor %SlaveName%");
            sendMessage("I do love seeing you in pain %Grin%");


            if (isInChastity()) {
                readyForVibratingCage();
                sendMessage("Put the vibrator on that cage and start vibrating it %SlaveName%");
                sendMessage("Just work your way through the pain now");
            } else {
                //If we have any clamps on the cock we should move them away
                readyForStroking();

                startStroking(80);
                sendMessage("Just stroke through the pain now");
            }

            sendMessage("I told you I'd let you cum if you hurt yourself for me, so I will");
            startEdging(0, true, EDGE_END_ORGASM);
            waitForCumAnswer();

            let answer = sendInput("It's nice to have some pain mixed in with your pleasure, isn't it?", 5);

            if (answer.isTimeout()) {
                sendMessage('For me it definitely is %Grin%');
            } else if (answer.isLike('yes')) {
                sendMessage('I knew that you are my little pain slut %Grin%');
            } else if (answer.isLike('no')) {
                sendMessage('Well at least for me %Grin%');
            }
        }


        if (shouldCEI()) {
            sendEatInstructions();
        }
    }
}