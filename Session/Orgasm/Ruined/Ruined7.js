{
    if (tryRunOrgasmFetchId()) {
        sendMessage("You " + random("are going to ", "will ", "are about to ") + "ruin your orgasm for me %GeneralTime%");

        if (sendYesOrNoQuestion(random("Does that make you happy", "Are you pleased to hear that"))) {
            sendMessage(random("To cum and ruin is better than not to cum ", "A ruined orgasm is better than none ", "Better than nothing ") + "at all, right? %Lol%");
        } else {
            sendMessage("Well, we all have to do things we don't want to sometimes %Lol%");
        }

        sendMessage("And in any case, it will " + random("make me happy", "please me"));
        sendMessage("Which is all that matters in the end");

        if (isChance(30)) {
            let shouldCei = shouldCEI();

            sendMessage('And because I know you want to make me very happy... ');
            sendMessage("You're not going to ruin it once");
            sendMessage("Or even twice");
            sendMessage("But three times %GeneralTime%");

            if(shouldCei) {
                sendMessage('Be ready to catch the cum and don\'t clean it yet %Grin%');
            }

            sendMessage("That's really gonna " + random("screw you up ", "mess you up ", "drive you crazy ") + "%Lol%");

            startEdging(0, true, EDGE_END_RUIN);

            //TODO: Answer isn't that fitting more like: YOu can thank me when we are done
            waitForCumAnswer();

            sendMessage(random("Two more to go...", "One down, two to go"));

            sendMessage("You're going to be completely drained after the last one");
            sendMessage("Get ready for another one");

            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();
            sendMessage(random("You still have one more to go", "Good boy, just one more now"));

            sendMessage("On to the last one %Grin%");
            sendMessage("I don't care if it hurts");
            sendMessage("Or if you feel like you can't take it");
            sendMessage("You're going to do it because I say so");

            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();

            if (shouldCei) {
                sendEatInstructions();
            }

            sendMessage("Sometimes %MyYour% %Balls% need a good draining, %SlaveName%");
            sendMessage("Even if it wasn't much fun for you...");
            sendMessage("Just remember that you made me very happy %Emotehappy%");
        } else {
            startEdging(0, true, EDGE_END_RUIN);
            waitForCumAnswer();

            if (shouldCEI()) {
                sendEatInstructions();
            }

            sendMessage("That's all you're going to get %GeneralTime%");
        }
    }
}