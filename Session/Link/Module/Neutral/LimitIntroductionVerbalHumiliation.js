{
    if (tryRunLinkFetchId()) {
        if (VERBAL_HUMILIATION_LIMIT.isHardLimit() || VERBAL_HUMILIATION_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            if(!isKneeling()) {
                startKneeling();
            }

            sendMessage('I want to make sure you\'re fully aware of your place in this world');
            sendMessage('Kneeling in front of a Goddess with %MyYour% %Cock% in your hand');
            sendMessage("This is where you belong, it's what you are");
            sendMessage('And let me tell you why that is, %SlaveName%');
            sendMessage("I think you already know this, but you are completely useless sexually");
            sendMessage("I'm sure you have your merit in other aspects of life, somehow");
            sendMessage("But sexually, the only way you can be of any use is as amusement");
            sendMessage("A slave to abuse and torment and laugh at while we do terrible things to you");
            sendMessage("Just knowing that must be so humiliating");
            sendMessage("And even more so when we call you out on it");
            sendMessage("Is there anything worse than a woman you desire calling you a pathetic loser right to your face?");

            if(VERBAL_HUMILIATION_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
                sendMessage("But let's be frank here, I think you like it");
            }

            sendMessage('You know sometimes I just wanna show you your place and humiliate you');
            sendMessage('Show you how weak, submissive and pathetic you are and remind you of your position as my slave');

            VERBAL_HUMILIATION_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);

            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                if(isGaged()) {
                    sendMessage('That gag isn\'t working out for what I have planned right now...');
                    removeGag(true);
                }

                sendMessage("I want you to say it out loud, say: \"I'm a loser\"");
                sendMessage("Yes you are %Lol%");
                sendMessage("Say it again, over and over");
                sendMessage("Say: \"I'm a loser and I don't deserve to be with a woman\"");

                if (getVar(VARIABLE.SUB_IS_MARRIED, false) || getVar(VARIABLE.SUB_HAS_GIRLFRIEND, false)) {
                    sendMessage('You\'re so lucky  ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' puts up with you. I really don\'t now what she sees in you')
                }

                if(getVar(VARIABLE.SUB_IS_VIRGIN)) {
                    sendMessage("You're never going to get near a real pussy, %SlaveName%");
                }

                sendMessage("That pathetic %Cock% should never even get near a pussy");
                sendMessage("You only get to fuck your own hand %Lol%");
                sendMessage('And that\'s all you get with me');

                sendMessage("Keep repeating your mantra: \"I'm a loser and I don't deserve to be with a woman\"");
                sendMessage("I want you to say it over and over until it's burned into your brain");
                sendMessage("\"I'm a loser and I don't deserve to be with a woman\"");
                sendMessage("It's so true, %SlaveName%");

                sendMessage("Every beta male should know and accept his place in the world");
                sendMessage("%SlaveName% isn't like an Alpha, who can choose to be what he wants to be");
                sendMessage("A true Alpha can even choose to be submissive if he wants to");
                sendMessage("But not you %SlaveName%");
                sendMessage("You're just one of those pathetic losers who can't help but being a submissive bitch");

                sendMessage("I think it's a good thing that you've accepted what you are, %SlaveName%");
                sendMessage("I mean, if you're going to be a loser anyway why not accept it");

                if(isKneeling()) {
                    stopKneeling();
                }
            }
        }
    }
}