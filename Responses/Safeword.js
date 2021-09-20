addResponseRegex('safeword red');

function safewordResponse(message) {
    if(!getVar(VARIABLE.PUNISHMENT_ACTIVE, false) && !isSessionActive()) {
        sendMessageBasedOnSender('I wouldn\'t know what you would use your safeword for now %SlaveName%');
        return false;
    }

    stopStroking();
    endEdge();

    sendMessageBasedOnSender('Stop everything you are doing %SubName%');

    if(sendYesOrNoQuestion('Did you intend to use your safeword there?', getCurrentSender())) {
        sendMessageBasedOnSender('Well then...');
        sendMessageBasedOnSender('I take your safety very seriously');

        if(isPlugged()) {
            sendMessageBasedOnSender('Go ahead and remove the plug from your bottom');
            sendMessageBasedOnSender('Tell me when you are done');
            waitForDone(1000);
            setVar(VARIABLE.IS_PLUGGED, false);
        }

        removeAllToys();

        let willEndSession = false;

        sendMessageBasedOnSender('I think it\'s very good you showed the courage and stopped the session');
        sendMessageBasedOnSender('It\'s important you always stop when something is wrong');
        sendMessageBasedOnSender('And I will never be angry at you for it');
        sendMessageBasedOnSender('Make sure to remember that pet');

        if(sendYesOrNoQuestion('Do you want to stop for today?', getCurrentSender())) {
            willEndSession = true;
            sendMessageBasedOnSender('I hope you are able to sort out whatever went wrong... %EmoteSad%');
            sendMessageBasedOnSender('Now...');
        } else if(sendYesOrNoQuestion('Do you want to take a break?' , getCurrentSender())) {
            sendMessageBasedOnSender('I hope you are able to sort out whatever went wrong... %EmoteSad%');
            sendMessageBasedOnSender('Make sure to only return once you feel comfortable with continuing again');
            sendMessageBasedOnSender('I\'ll be here and wait for you to return');
            sendMessageBasedOnSender('Just tell me when you are done and ready to continue');
            waitForDone(100000000000);

            while(true) {
                if(sendYesOrNoQuestion('Are you ready to continue?' , getCurrentSender())) {
                    break;
                } else {
                    waitForDone(100000000000);
                }
            }

            sendMessageBasedOnSender('I hope you feel better now %EmoteHappy%');
        } else if(sendYesOrNoQuestion('Well then do you want to continue?' , getCurrentSender())) {

        } else {
            sendMessageBasedOnSender('You\'ll have to do one of the above');
            sendMessageBasedOnSender('So I think it\'s better to stop then if you can\'t decide for yourself');
            willEndSession = true;
        }

        if(willEndSession) {
            sendMessageBasedOnSender('I want you to make yourself a tea, hot chocolate or something similar...');
            sendMessageBasedOnSender('And just relax %EmoteHappy%');
            sendMessageBasedOnSender('Know that you are loved and nobody means you any harm');
            sendMessageBasedOnSender('Put on a nice video or something if you need some distraction');
            sendMessageBasedOnSender('You deserve to make yourself comfortable');
            sendMessageBasedOnSender('Stay safe and enjoy!');
            sendMessageBasedOnSender('...');
            sendMessageBasedOnSender('See you around pet %EmoteHappy%');

            //Handle (disable) ongoing things like punishment
            setVar(VARIABLE.PUNISHMENT_ACTIVE, false);

            endSession();
            return true;
        } else {
            sendMessageBasedOnSender('%Good%');

            //QUALITY: Continue properly (hard to do)
            sendMessageBasedOnSender('Where were we...');
        }
    } else {
        sendMessageBasedOnSender('Oops, seems like I misunderstood you then');
        sendMessageBasedOnSender('But you must know I take your safety and your safeword very seriously');
        sendMessageBasedOnSender('So I better make sure to stop than to risk putting you in danger');
        sendMessageBasedOnSender('I guess we can continue now');

        //QUALITY: Continue properly (hard to do)
        sendMessageBasedOnSender('Where were we...');
    }

    return false;
}