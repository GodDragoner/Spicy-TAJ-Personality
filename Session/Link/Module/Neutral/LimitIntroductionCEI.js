{
    if (tryRunLinkFetchId()) {
        if (CEI_LIMIT.isHardLimit() || CEI_LIMIT.isAllowed()) {
            if(CEI_LIMIT.isAllowed()) {
                sendMessage("We should build up so much cum in those %Balls%");
                sendMessage('Because I know how much you love eating your own cum...');
                sendMessage("So the bigger the load the better");
                sendMessage("You're such a dirty little cum eater");
                sendMessage("I bet you can almost taste it on your tongue already... mmmm %Giggles%");
            } else {
                findLinkAndRun();
            }
        } else if(CEI_LIMIT.getLimit() === LIMIT_NEVER_ASKED) {
            showCategoryImage("BLOWJOB", 4);
            lockImages();
            sendMessage(random("How about that ", "Look at that ", "Wow ", "This is just ", "That is ", "Ooohh ", "Fuck ", "Damn ", "Oh yeah ", "Well this is ", "Oh my ", "OMG ") + "... %Moan%");
            let answer = sendYesOrNoQuestionTimeout(random('This is', 'That\'s', 'Blowjobs are') + ' ' + random('so', 'pretty', 'really', 'totally') + ' ' + random('sexy', 'hot', 'amazing', 'fucking great') + ' ' + random('don\'t you think', 'right') + '?', 5);

            if (answer === ANSWER_YES) {
                sendMessage("I'm glad you " + random("agree ", "like it ", "think so ") + "because " + random("to me ", "I think ", "in fact ", "I do think ") + random("blowjobs are ", "this is ") + random("amazing ", "fucking hot ", "a beautiful thing ", "the best ", "awesome ") + "%Grin%");
            } else if (answer === ANSWER_NO) {
                sendMessage("Don't " + random("bullshit ", "lie to ", "be coy with ", "try to be smart with ") + "me, %SlaveName%");
            } else {

            }

            unlockImages();
            sendMessage("Let me tell you something about me you might not expect");
            answer = sendInput('I love giving head %SlaveNameSmiley%', 10);

            if (answer.isLike("really", "wow", "didn't know", "didn't expect", "damn")) {
                sendMessage("It's true!");
            } else if (answer.isLike("i knew", "thought as much", "expected", "i know", "thought so", "figures", "of course")) {
                sendMessage("Yeah, yeah, of course you did %Lol%");
            }

            answer = sendInput('Do you know what I like about it?', 10);

            while (true) {
                if (answer.isTimeout()) {
                    break;
                }

                if (answer.isLike("yes")) {
                    sendMessage('Really? So, what do you think I like about it?', 0);
                    answer.loop();
                } else if (answer.isLike("no")) {
                    break;
                } else if (answer.isLike("taste")) {
                    sendMessage("Only a guy would say that %Laugh%");
                    break;
                } else if (answer.isLike("submissive")) {
                    sendMessage('No, it makes sense that you would think that though');
                    break;
                } else if (answer.isLike("react", "response", "respond")) {
                    sendMessage("Yes!");
                    break;
                } else if (answer.isLike("please", "pleasing")) {
                    sendMessage("Well, in a way I guess...");
                    break;
                } else {
                    break;
                }
            }

            sendMessage("I love the subtle physical responses of a guy");
            sendMessage('When I tease his cock with the tip of my tongue');
            lockImages();
            showCategoryImage("BLOWJOB", 0);
            sendMessage("The way it grows harder and harder");
            sendMessage('The tightening of muscles');
            showCategoryImage("BLOWJOB", 0);
            sendMessage("When I take it in my mouth");
            sendMessage('The little sighs and moans');
            showCategoryImage("BLOWJOB", 0);
            sendMessage("As I take it deeper and deeper");
            sendMessage("There is something I don't like about it though");
            answer = sendInput("Can you guess what?");

            while (true) {
                if (answer.isLike("yes")) {
                    sendMessage('Okay, so what do you think I don\'t like?', 0);
                    answer.loop();
                } else if (answer.isLike("no")) {
                    sendMessage("You're not the guessing type then");
                    break;
                } else if (answer.isLike("deepthroat", "choke", "gag")) {
                    sendMessage("Oh no I love that %Laugh%");
                    break;
                } else if (answer.isLike("swallow", "cum", "taste", "ejaculate", "sperm")) {
                    sendMessage("Exactly!");
                    break;
                }
            }

            sendMessage("I hate it when a guy blows his load in my mouth");
            sendMessage('I hate the taste, the slimy texture, everything');
            unlockImages();

            answer = sendInput("It's just gross, don't you think?");
            if (answer.isLike("yes", "agree")) {
                sendMessage('It\'s pretty disgusting really %Lol%');

                sendMessage("But wait, that means you have actually tried it");
                let answer0 = sendInput("Did you eat your own cum or someone else's?");
                if (answer0.isLike("own", "mine", "my")) {
                    sendMessage("Eww %Laugh%");
                } else if (answer0.isLike("other", "another", "someone else")) {
                    sendMessage("Oh wow... I didn't expect that");
                } else if (answer0.isLike("both")) {
                    sendMessage("Oh wow... I didn't expect that");
                } else if (answer0.isLike("neither", "didn't", "haven't", "have not", "did not")) {
                    sendMessage("So you just assume it's disgusting");
                } else {
                    sendMessage("I'm a bit confused by all this %SlaveName%");
                    sendInput('But anyway...');
                }

                CEI_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            } else if (answer.isLike("no")) {
                sendMessage("Wait..");

                if(sendYesOrNoQuestion("So you actually tried it?")) {
                    sendMessage("That just blew my mind, pun intended %Laugh%");
                } else {
                    sendMessage("You just assume it tastes good then");
                }

                CEI_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            } else if (answer.isLike("don't know", 'dont know', "not sure", "never")) {
                sendMessage("I guess you don't suck cock all that often %Grin%");

                if (SISSY_LIMIT.isAllowed() || SISSY_LIMIT.getLimit() === LIMIT_ASKED_MAYBE || CUCKOLD_LIMIT.isAllowed() || CUCKOLD_LIMIT.getLimit() === LIMIT_ASKED_MAYBE) {
                    sendMessage('Which is something we might have to change and work towards %Grin%');
                }

                if (sendYesOrNoQuestion('"Have you ever tasted your own cum?')) {
                    sendMessage("Eww %Lol%");
                } else {
                    sendMessage("So you really don't know what you're talking about");
                }

                CEI_LIMIT.askForLimitChange(LIMIT_ADDRESS.DOMME);
            }
        } else {
            //TODO: Convince sub (Miss Blue CEI Training, 05CEI Module)
            findLinkAndRun();
        }
    }
}