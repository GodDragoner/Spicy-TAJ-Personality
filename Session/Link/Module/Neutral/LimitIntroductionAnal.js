{
    if (tryRunLinkFetchId()) {
        if (ANAL_LIMIT.isHardLimit() || ANAL_LIMIT.isAllowed()) {
            findLinkAndRun();
        } else {
            if(ANAL_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
                sendMessage("We pay a lot of attention to %MyYour% %Cock% don't we");
                sendMessage("But there are other things we can do to deepen the ache in %MyYour% %Balls%");
                sendMessage("Other... parts of your body to explore");

                let answer = sendInput("Would you like that?");

                let guessedIt = false;

                if (answer.isLike("yes")) {
                    sendMessage("Good %EmoteHappy% You must be wondering what I'm thinking of now");
                } else if (answer.isLike("no")) {
                    sendMessage("You haven't even heard what I have in mind... %Grin%");
                } else if (answer.isLike("what", "have in mind", "understand")) {
                    sendMessage("Oh you'll find out soon enough %Grin%");
                } else if (answer.isLike("not sure", "dont know", "don't know")) {
                    sendMessage("You could be a little more trusting %SlaveName% %Grin%");
                } else if (answer.isLike("anal", "ass play", "dildo", "plug", "butt", "ass")) {
                    sendMessage('That\'s amazing, you read my mind!');
                    guessedIt = true;
                } else {
                    sendMessage("You must be wondering what I have in mind");
                }

                if (!guessedIt) {
                    answer = sendInput("Does the uncertainty make you nervous, maybe even a little scared?");

                    if (answer.isLike("yes")) {
                        sendMessage("I like it when you're a little scared %Grin%");
                    } else if (answer.isLike("no")) {
                        sendMessage("I guess there's probably no need to be nervous");
                    } else if (answer.isLike("nervous")) {
                        sendMessage('You probably should be a little nervous %Grin%')
                    } else if (answer.isLike("scared")) {
                        sendMessage("Aww poor %SlaveName% %Grin%");
                    } else {
                        sendMessage("There's probably no need to be nervous");
                    }

                    answer = sendInput("Want to guess what it is that I want you to do?");

                    while (true) {
                        if (answer.isLike("yes", "sure", "okay", "let me think", "alright")) {
                            sendMessage('So what do you think?', 0);
                            answer.loop();
                        } else if (answer.isLike("no", "tell me", "dont want", "dont like", "dont know", "what is it", "give up", "say it")) {
                            break;
                        } else if (answer.isLike("anal", "ass play", "dildo", "plug", "butt", "ass")) {
                            sendMessage('Bingo!');
                            break;
                        } else {
                            sendMessage('Nope, try again %Grin%', 0);
                            answer.loop();
                        }
                    }
                }

                ANAL_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            } else {
                sendMessage('I love ' + random('telling you how to', 'being in control of how you') + ' %JerkOff%');
                sendMessage("And " + random("it's obvious that ", "I know that ", "obviously ") + "you love it " + random("at least as much ", "too ") + "%SlaveNameSmiley%");
                sendMessage("But that creates a " + random("problem ", "dilemma ") + "for me");
                sendMessage('You see, I also love making you do things you don\'t want to do %Grin%');
                sendMessage('So really, the best way to %Torment% you would be to stop telling you what to do');
                sendMessage("But we both know that's not an option, right? %Lol%");
                sendMessage("I'll have to find some other way...");

                let otherLimitAddressed = false;
                if(!CEI_LIMIT.isAllowed() && !CEI_LIMIT.isHardLimit()) {
                    let response = sendYesOrNoQuestionTimeout("Maybe I'll force you to eat your cum...", 3);

                    if(response === ANSWER_YES) {
                        CEI_LIMIT.askForLimitChange(LIMIT_ADDRESS.SUB);
                        otherLimitAddressed = true;
                    }
                }

                if(!SISSY_LIMIT.isAllowed() && !SISSY_LIMIT.isHardLimit() && !otherLimitAddressed) {
                    let response = sendYesOrNoQuestionTimeout("I might have to force you to dress up like a sissy girl...", 3);

                    if(response === ANSWER_YES) {
                        SISSY_LIMIT.askForLimitChange(LIMIT_ADDRESS.SUB);
                        otherLimitAddressed = true;
                    }
                }

                if(!ANAL_LIMIT.isAllowed() && !ANAL_LIMIT.isHardLimit() && !otherLimitAddressed) {
                    sendMessage("That ass of yours is still unexplored territory, of course...");

                    //It's a good transition to the maybe and denied part of the limit
                    ANAL_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
                }

                /*sendMessage("I could take away your orgasms, never let you cum ever again...");
                sendMessage("In any case, I can still make %MyYour% %Cock% and %Balls% %Ache%");
                sendMessage("And that'll do for now %Grin%");*/
            }
        }
    }
}